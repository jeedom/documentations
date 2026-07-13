# Plugin knxSecure

Le plugin **knxSecure** permet de piloter et superviser une installation **KNX** depuis Jeedom via une passerelle **KNX/IP**. Il prend en charge le **KNX IP Secure** (tunneling TCP chiffré et routing secure), la lecture des projets **ETS** (`.knxproj`) et des trousseaux de clés (`.knxkeys`), ainsi qu'un moniteur de bus temps réel.

## Principe de fonctionnement

```
Jeedom (PHP)  ◄──socket TCP──►  daemon Python  ◄──KNX/IP──►  Passerelle  ◄──►  Bus KNX
```

Un daemon Python (basé sur la bibliothèque [xknx](https://github.com/XKNX/xknx)) maintient la connexion avec la passerelle KNX/IP. Jeedom dialogue avec ce daemon ; les changements d'état remontés par le bus mettent à jour les commandes en temps réel.

## Compatibilité

- Jeedom **≥ 4.2**, PHP 8.1+
- Toute passerelle/routeur **KNX/IP** (tunneling ou routing)
- **KNX IP Secure** (ETS 5.5+ / ETS 6)
- Le daemon nécessite Python 3 et installe automatiquement ses dépendances (`xknx`, `xknxproject`)

---

## Installation

1. Installez le plugin depuis le Market Jeedom.
2. Activez-le sur la page du plugin.
3. Lancez l'installation des dépendances (bouton **Dépendances** sur la page de configuration). Le plugin crée un environnement Python isolé et installe `xknx` et `xknxproject`.
4. Démarrez le daemon.

Vérifiez l'état des dépendances et du daemon sur la page **Santé** du plugin (voir ci-dessous).

---

## Page Santé

La page **Santé** du plugin affiche un état synthétique en 7 indicateurs, utile en premier réflexe avant de creuser dans les logs :

| Indicateur | OK | En erreur |
|---|---|---|
| **Daemon KNX** | daemon en cours d'exécution | daemon arrêté |
| **Configuration daemon** | configuration valide (lançable) | configuration incomplète (mode de connexion mal renseigné, etc.) |
| **Dépendances Python** | `xknx` / `xknxproject` installés dans l'environnement virtuel | environnement virtuel absent ou import Python en échec → relancer l'installation des dépendances |
| **Passerelle KNX** | passerelle joignable en ping (modes tunneling) — non applicable en Routing | passerelle non joignable, ou adresse IP non configurée |
| **Connexion KNX (daemon)** | le daemon rapporte une connexion active au bus (dernier heartbeat < 90 s) | aucun heartbeat récent, ou daemon connecté mais pas au bus (reconnexion automatique en cours) |
| **Fichier .knxkeys** | fichier présent sur le disque (si méthode `.knxkeys` choisie en Secure) | fichier introuvable ou non importé |
| **Port socket daemon** | port TCP local en écoute | port non accessible (daemon en cours de démarrage, ou conflit de port) |

> **Connexion KNX (daemon)** est distinct du simple ping réseau : il reflète l'état applicatif réel (négociation du tunnel ou de la session Secure), remonté par le daemon à chaque battement de cœur (heartbeat).

---

## Configuration de la connexion

La page de configuration s'organise en quatre onglets : **Connexion KNX**, **Projet ETS**, **Sécurité**, **Daemon**. Choisissez d'abord le **mode de connexion** en haut de page.

### Modes de connexion

| Mode | Usage | Champs requis |
|---|---|---|
| **Tunneling UDP** | Le plus courant. Connexion point à point via une passerelle IP. | Adresse IP, Port (défaut `3671`) |
| **Tunneling TCP** | Connexion TCP fiable (recommandée pour les liaisons instables). | Adresse IP, Port, *adresse tunnel optionnelle* |
| **Tunneling TCP Secure** | Tunneling chiffré KNX IP Secure. | IP, Port + section **Sécurité** |
| **Routing Multicast** | Mode broadcast réseau (plusieurs participants). | Groupe multicast (défaut `224.0.23.12`), Port, IP locale optionnelle |
| **Routing Secure** | Broadcast chiffré. | Groupe multicast + **Backbone key** |

> **Découverte automatique** : en mode tunneling, le bouton **Découvrir** scanne le réseau à la recherche des passerelles KNX/IP disponibles.

### Tunneling UDP

Le mode par défaut et le plus répandu : Jeedom se connecte en point à point à la passerelle via UDP, comme le fait ETS. Champs requis : **adresse IP** et **port** (défaut `3671`) de la passerelle.

Le champ **Adresse individuelle** du tunnel (ex. `1.1.255`) est **optionnel** : laissé vide, xknx négocie automatiquement un slot tunnel libre auprès de la passerelle. Ne le renseigner que si vous voulez forcer un slot précis (voir *Statut des slots* ci-dessous).

### Tunneling TCP

Identique au mode UDP (mêmes champs IP/port), mais la connexion passe en TCP plutôt qu'en UDP. À privilégier si votre liaison réseau est instable ou traverse un VPN/NAT : le TCP garantit la remise des télégrammes (pas de perte silencieuse comme peut le faire l'UDP), au prix d'une latence légèrement supérieure. L'adresse individuelle du tunnel reste **optionnelle**, comme en UDP.

### Tunneling TCP Secure

Tunneling chiffré **KNX IP Secure** (nécessite ETS 5.5+ ou ETS 6 et une passerelle compatible Secure). Mêmes champs IP/port que les deux modes précédents, complétés obligatoirement par l'onglet **Sécurité** (voir plus bas) pour l'authentification.

L'adresse individuelle du tunnel est :
- **optionnelle** si un fichier `.knxkeys` est importé — le keyring contient les credentials et xknx sélectionne automatiquement un slot compatible ;
- **requise** si vous utilisez des identifiants manuels sans `.knxkeys` — xknx ne peut alors pas négocier le slot seul, il faut indiquer l'adresse exacte du slot tunnel à utiliser.

### Routing Multicast

Mode broadcast : Jeedom rejoint un groupe multicast réseau et voit passer tous les télégrammes du bus, sans réserver de slot tunnel — plusieurs clients (Jeedom, ETS, autres superviseurs) peuvent donc être connectés en même temps. C'est le mode recommandé face à un **KNX IP-Router**.

Champs : **groupe multicast** (défaut `224.0.23.12`), **port**, et **IP locale** optionnelle (à renseigner si le serveur Jeedom a plusieurs interfaces réseau, pour choisir celle qui reçoit le multicast).

Prérequis réseau : le routeur/passerelle doit avoir le **routing activé** avec des tables de filtrage correctement configurées (sinon les commandes envoyées depuis Jeedom ne sont pas relayées sur le bus physique), et le réseau doit autoriser le trafic **multicast/IGMP** entre le serveur Jeedom et la passerelle.

### Routing Secure

Variante chiffrée du Routing Multicast : mêmes champs et mêmes prérequis réseau, avec en plus la **Backbone key** (32 caractères hexadécimaux, définie dans ETS et partagée par tous les participants Secure du routing) à renseigner dans l'onglet **Sécurité**. Un délai de **latence** optionnel (ms) permet d'absorber les écarts d'horloge entre participants sur un réseau au timing peu fiable.

### Interface bus physique (TPUART / USB / FT1.2) — non prise en charge

knxSecure gère **uniquement les passerelles KNX/IP** (tunneling et routing ci-dessus). Une interface raccordée **directement au bus KNX** (carte TPUART intégrée, interface KNX-USB, coupleur série FT1.2) **n'est pas prise en charge** : la bibliothèque xknx utilisée par le plugin ne parle que KNXnet/IP.

Pour ce type d'installation, utilisez le plugin **eibd**, prévu pour piloter les interfaces physiques. Vous pouvez aussi installer un service **knxd** externe qui expose votre interface physique comme une passerelle KNX/IP locale, puis pointer knxSecure dessus en **Tunneling** (`127.0.0.1:3671`).

### Statut des slots tunnel de la passerelle

En modes tunneling (UDP/TCP/TCP Secure), un bloc **Slots tunnel de la passerelle** affiche en direct :

- le **slot utilisé par Jeedom** (adresse individuelle active) et le nombre de slots encore libres ;
- la liste de tous les slots avec leur état : **Jeedom** (utilisé par ce plugin), **Libre**, **Occupé** (par un autre client), **N/A** (non supporté par la passerelle) ;
- un bouton **Utiliser** sur un slot libre pour le renseigner automatiquement comme adresse tunnel, et **Libérer** sur un slot occupé pour forcer sa libération.

En l'absence de réponse de la passerelle (daemon non connecté ou erreur réseau), un message d'erreur s'affiche avec un bouton **Reconnecter**.

---

## Sécurité (KNX IP Secure)

Cet onglet n'est utile que pour les modes **Tunneling TCP Secure** ou **Routing Secure**. Deux méthodes d'authentification :

### Méthode 1 — Fichier `.knxkeys` (recommandée)

Exportez le trousseau depuis ETS (*Rapports → Sécurité KNX → Exporter le trousseau*), puis :
1. Glissez le fichier `.knxkeys` dans la zone prévue.
2. Saisissez son **mot de passe** (défini lors de l'export ETS).
3. Cliquez sur **Inspecter** pour vérifier les slots tunnel et clés contenus.

xknx sélectionnera automatiquement un slot tunnel compatible.

### Méthode 2 — Identifiants manuels

Si vous ne disposez pas du `.knxkeys`, saisissez directement :
- **User ID** (1–127, défaut `2`)
- **Mot de passe utilisateur**
- **Mot de passe d'authentification de l'appareil** (device authentication)

### Routing Secure

Renseignez la **Backbone key** (32 caractères hexadécimaux) et, si besoin, la **latence** en millisecondes.

---

## Import d'un projet ETS (`.knxproj`)

L'import d'un projet ETS permet de récupérer automatiquement la liste des adresses de groupe, leur DPT et la topologie, sans les saisir à la main.

1. Onglet **Projet ETS** → glissez votre fichier `.knxproj`.
2. Si le projet est protégé, saisissez le **mot de passe ETS**.
3. Cliquez sur **Analyser le projet**.

Le plugin extrait les adresses de groupe (avec leur **DPT** d'origine), la topologie (zones, lignes, participants) et les localisations. Ces données alimentent ensuite la création d'équipements et le moniteur de bus.

> L'analyse se fait via le daemon si disponible, sinon via un parseur PHP natif intégré (lecture du ZIP `.knxproj` sans dépendance).

### Ré-importer un projet (détection des changements)

Réimporter un `.knxproj` par-dessus un projet déjà chargé déclenche automatiquement une **comparaison avec l'import précédent**, affichée sous forme de compteurs par type de changement : **ajoutées**, **supprimées**, **DPT modifié**, **renommées**, avec le détail adresse par adresse pour chaque catégorie.

Si des DPT ont changé, un bouton **Appliquer les DPT modifiés aux GA et commandes** met à jour en un clic le DPT enregistré sur les adresses de groupe concernées ainsi que sur les commandes des équipements qui les utilisent — évite de corriger chaque commande à la main après une évolution du projet ETS.

> Les boutons **Remplacer** / **Effacer** (sur le résumé du projet chargé) permettent respectivement de relancer un import ou de supprimer le projet enregistré.

---

## Création d'équipements

Chaque équipement knxSecure représente un appareil KNX (lampe, volet, thermostat…). Ses **commandes** portent les adresses de groupe :

- **commande `info`** : adresse d'**état** (`ga_state`) — Jeedom lit la valeur remontée par le bus ;
- **commande `action`** : adresse d'**écriture** (`ga_write`) — Jeedom envoie un télégramme sur le bus.

### Profils prêts à l'emploi

À la création, un **profil** applique automatiquement les bonnes commandes et le bon widget. Profils disponibles :

| Catégorie | Profils |
|---|---|
| Éclairage | Lampe on/off, variateur, bouton poussoir |
| Ouvrants | Volet/store, serrure/portail, contact porte/fenêtre |
| Chauffage / Climat | Thermostat, chauffage plancher |
| Capteurs | Température, présence/mouvement, capteur numérique générique |
| Confort | Ventilateur/VMC, scène, sélecteur de mode |
| Sécurité | Alarme, détecteur |
| Énergie | Compteur (puissance, consommation, V/A) |
| Divers | Station météo, notification texte, valeur numérique, interrupteur générique |

Il reste possible de partir d'un profil **générique** et d'ajouter les commandes manuellement.

### DPT automatique

Lorsque les commandes sont créées à partir des adresses importées du `.knxproj`, le **DPT** est propagé automatiquement et le sous-type Jeedom (`binaire` / `numérique` / `chaîne`) est déduit du DPT principal.

---

## Adresses de groupe (GA)

Le gestionnaire d'adresses de groupe (modal **Adresses de groupe**) centralise toutes les GA connues — importées d'ETS ou ajoutées manuellement — organisées par groupes hiérarchiques (principal / médian).

- Visualiser les GA et leur **dernière valeur connue** sur le bus.
- Organiser les GA en groupes (réutilise la hiérarchie ETS si elle existe).
- Un **point vert** discret signale une GA déjà assignée à un équipement.

---

## Moniteur de bus (Bus Monitor)

Le moniteur affiche en **temps réel** les télégrammes circulant sur le bus KNX (rafraîchissement automatique toutes les 2 secondes) :

- type (write / read / response), adresse de groupe, adresse source, valeur décodée selon le DPT **avec son unité** (°C, lux, %…) quand une commande Jeedom existe pour cette GA ;
- **filtres** par source, par adresse de groupe et par type de télégramme ;
- **statistiques de charge** : débit du bus (télégrammes/s instantané et moyen), répartition par type, GA la plus active, avec un voyant de charge (vert / orange / rouge) — utile pour repérer un bus saturé ou un équipement « bavard » ;
- **export CSV** de l'historique (compatible Excel — la colonne GA est protégée du reformatage automatique en date que fait Excel/LibreOffice sur une adresse comme `8/6/2`) ;
- envoi manuel d'un télégramme de test (GroupWrite / GroupRead) sur une GA donnée, aussi disponible via le bouton **Tester** de chaque commande action dans la fiche équipement.

C'est l'outil principal de diagnostic pour vérifier qu'un équipement réagit, identifier l'adresse réelle utilisée, ou diagnostiquer une surcharge du bus.

> Si une GA n'a pas de DPT dans le projet ETS chargé (ex. équipement migré depuis EIBD avec un projet ETS plus ancien), le DPT de la commande Jeedom correspondante est utilisé en secours pour un décodage correct.

---

## Lecture des états (FlagInit / Cyclique)

Pour que Jeedom connaisse l'état réel du bus :

- **FlagInit** : au démarrage du daemon, un `GroupValueRead` est émis automatiquement sur chaque commande dont le flag `FlagInit` est actif, pour récupérer l'état courant.
- **Cache d'états au démarrage** : le daemon mémorise les dernières valeurs connues. Au redémarrage, il les réaffiche immédiatement dans Jeedom sans attendre le bus. Le paramètre *Cache d'états au démarrage* (onglet Daemon) permet, s'il est > 0, de **ne pas re-solliciter** les adresses dont l'état est plus récent que la durée indiquée — utile pour éviter une rafale de lectures sur une grande installation.
- **Lecture cyclique** : une commande peut être relue périodiquement (intervalle ≥ 10 s) — utile pour les équipements qui n'émettent pas spontanément.
- **Reconnexion automatique** : en cas de coupure de la passerelle, le daemon retente la connexion avec un délai croissant (jusqu'à 60 s), sans intervention.

---

## Onglet Daemon

L'onglet **Daemon** regroupe les réglages internes du processus Python et un outil de diagnostic de la connexion. Il se divise en deux blocs : **Paramètres internes** et **Diagnostic**.

### Paramètres internes

- **Port socket** (défaut `55009`) — port TCP **local** utilisé par Jeedom pour dialoguer avec le daemon (indépendant du port `3671` de la passerelle KNX). À ne changer qu'en cas de conflit de port sur le serveur Jeedom.
- **Cycle** (secondes, défaut `0,3`) — période de la boucle interne du daemon (fréquence à laquelle il traite les événements en attente : télégrammes reçus, commandes à envoyer). Une valeur plus basse réduit la latence mais augmente légèrement la charge CPU.
- **Limite débit** (télégrammes/s, `0` = illimité) — plafonne le nombre de télégrammes que le daemon peut envoyer sur le bus par seconde. Utile pour éviter de saturer une installation KNX ancienne ou avec beaucoup de participants lors d'actions groupées (scénario qui pilote de nombreux équipements d'un coup, par exemple).
- **Rafraîchissement périodique des états** (case à cocher, désactivée par défaut) — active le polling automatique de xknx, qui relit périodiquement l'état de toutes les commandes. **Déconseillé** si le bus est chargé ou compte beaucoup d'équipements : préférez le **FlagInit** et la **lecture cyclique** par commande (voir *Lecture des états* plus bas), plus ciblés.
- **Cache d'états au démarrage** (secondes, `0` = toujours relire le bus) — si supérieur à `0` : au démarrage du daemon, les adresses dont l'état connu est plus récent que cette durée ne sont **pas re-sollicitées** sur le bus, ce qui évite une rafale de lectures (`GroupValueRead`) sur une grande installation. Dans tous les cas, les valeurs en cache sont réaffichées immédiatement dans Jeedom, sans attendre le bus.

### Diagnostic

Le bouton **Tester la connexion KNX** interroge le daemon en direct et affiche un badge de résultat à côté :

- **badge vert** — ex. *« Passerelle KNX connectée (10.3.6.13) »* : le daemon est bien connecté au bus via cette passerelle ;
- **badge rouge** — la passerelle est injoignable ou la connexion a échoué, avec le message d'erreur renvoyé par le daemon.

C'est le moyen le plus rapide de valider une configuration (mode de connexion, IP, identifiants Secure…) sans attendre ni redémarrer le daemon.

---

## Dépannage

| Symptôme | Pistes |
|---|---|
| Le daemon ne démarre pas | Vérifier l'installation des dépendances (page Santé). Consulter les **logs du daemon** (visionneuse intégrée). |
| « Non connecté au bus KNX » | Vérifier l'adresse IP / le port de la passerelle, et que celle-ci accepte une nouvelle connexion tunnel (slots disponibles). |
| Connexion Secure refusée | Contrôler le mot de passe `.knxkeys`, ou les identifiants manuels (User ID, mots de passe). En Secure sans `.knxkeys`, renseigner l'adresse tunnel exacte. |
| Les états ne remontent pas | Vérifier que la commande `info` porte la bonne **GA d'état** et que `FlagInit` est actif. Observer le **Bus Monitor**. |
| Valeur mal décodée | Vérifier le **DPT** de la commande (il doit correspondre à celui de l'adresse de groupe dans ETS). |

Les logs sont accessibles via le niveau de log du plugin (Jeedom) et via la **visionneuse de logs du daemon** intégrée.

---

## Liens utiles

- [Changelog stable](https://doc.jeedom.com/#language#/plugins/programming/knxsecure/changelog)
- [Changelog beta](https://doc.jeedom.com/#language#/plugins/programming/knxsecure/beta/changelog)
