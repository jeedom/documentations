# Changelog plugin knxSecure

> **IMPORTANT**
>
> S'il n'y a pas d'information sur la mise à jour, c'est que celle-ci concerne uniquement de la mise à jour de documentation, de traduction ou de texte.
>
> Les versions marquées **(beta)** ne sont pas encore disponibles en stable : elles sont en cours de validation sur la branche beta.

# 23/09/2026

- **Logs du démon plus détaillés** : le démarrage journalise la configuration utilisée (mode, passerelle, adresse demandée, sécurité), puis les étapes de connexion, le slot obtenu, les reconnexions et l'arrêt. Visible en niveau de log « info »
- **Nouveau — modale « Santé des équipements »** (bouton *Santé*) : note sur 5 en barres de signal par équipement, avec le détail de chaque commande au clic
- **L'installation des dépendances ne modifie plus le système** : plus aucune écriture dans les dépôts apt ni hors du dossier du plugin. La gestion des bibliothèques système relève du core Jeedom
- **Installation plus rapide** : aucun appel à `apt` quand le Python du système convient (Debian 12). Seuil corrigé à 3.10, la version réellement exigée par xknx
- **Python dédié confiné au plugin** : sur Debian 11, la compilation s'installe dans le dossier du plugin au lieu de `/opt/pyenv` partagé, et est réutilisée d'une mise à jour à l'autre
- **Fix** : plugin qui restait bloqué en « installation en cours » après une installation interrompue

# 26/08/2026 

- **Fix — arrêt du démon impossible sur certaines installations** : erreur `Undefined constant "SIGTERM"` (extension PHP `pcntl` absente). 
- **Passage de xknx 3.19.0 --> 3.20.0**
- **Une action qui échoue est désormais signalée à l'écran** : plus de succès silencieux quand le démon est arrêté ou la passerelle injoignable. Jeedom attend la confirmation d'envoi (3 s max)
- **Nouveau — vérification de l'exécution des commandes** (option, onglet Daemon, désactivée par défaut) : le démon surveille l'adresse d'état après chaque commande et signale l'absence de réponse. Délai configurable

# 12/08/2026 

- **Passage de xknx 3.16.0 --> 3.19.0 et de xknxproject 3.8.2 --> 3.10.0**
- **Fix xknx — transmission KNX Data Secure** : les trames de plus de 15 octets sont correctement sérialisées en `L_Data_Extended`. Corrige un échec d'émission sur certaines commandes chiffrées
- **Fix xknx — synchronisation Data Secure** : correction de l'encodage du champ S-A-Service dans `S_A_SYNC_REQ`, utilisé lors de la procédure de synchronisation de sécurité entre appareils
- **Nouveaux DPT couleur** : 243.600, 249.600, 250.600, 252.600, 253.600 et 254.600 (contrôle et transition couleur) — décodage + sélecteur
- **Nouveaux DPT divers** : 217.001, 219.001, 229.001, 230.1000, 240.800, 241.800, 246.600, 273.00x et 274.001 (version, alarme, comptage, volet, batterie, météo) — décodage + sélecteur

# 10/08/2026

- **Mise à jour du logo de jeedom**

# 16/07/2026

- **Le plugin requiert désormais xknx 3.x (Python ≥ 3.10)** : Python 3.11 est compilé automatiquement si celui du système est trop ancien (Debian 11). Corrige l'échec d'installation sous Python 3.9
- **Fix — reconnexion automatique sous xknx 3.x** : le callback d'état de connexion n'était jamais exécuté sous xknx 3.x (warning `coroutine ... never awaited`) → la reconnexion ne partait pas. Corrigé
- **Fix — double moteur de reconnexion** : la reconnexion interne de xknx est désactivée, la reconnexion est pilotée uniquement par le daemon
- **Fix — comparaison de projets ETS (réimport)** : le diff affichait « Aucune modification » même entre deux projets différents (adresses non indexées). Rétabli
- **Logs démon** : retrait du sélecteur de niveau redondant
- **Documentation** : documentation utilisateur enrichie (prise en main, DPT, exemples, FAQ) + captures d'écran

# 03/07/2026

- **Migration EIBD — widgets appliqués automatiquement** : les équipements migrés retrouvent leur rendu visuel (volet, thermostat, lumière…) sans application manuelle d'un template
- **Type d'appareil — nouveaux profils** : station météo, horloge NTP, Téléinfo/Linky, digicode, détecteur de fumée ou de fuite, capteur de luminosité, qualité de l'air, citerne, bouton/impulsion
- **Template météo** : la commande d'alarme jour/nuit (DPT 1.005) n'est plus visible par défaut sur le widget
- **Fix — hiérarchie GA de secours** : les adresses malformées sont ignorées au lieu de créer des groupes fantômes. TwoLevel et FreeStyle restent pris en charge

# 24/06/2026

- **Icônes automatiques sur les commandes** : chaque commande dotée d'un `generic_type` connu reçoit son icône FontAwesome. Une icône définie dans un template reste prioritaire
- **Templates enrichis** : comblement des `generic_type` manquants et ajout d'icônes explicites pour les commandes sans type standard — toute commande de template est visuellement identifiable
- **Recommandation de GA par DPT** : les sélecteurs d'adresse ne proposent plus que les GA au DPT compatible (exact marqué ★). La saisie manuelle reste disponible
- **Propagation automatique entre commandes** : choisir une GA pré-remplit les commandes vides dont le DPT correspond et qui partagent le même dernier segment d'adresse. Suggestions signalées et modifiables
- **Fix — doublons d'adresse dans la propagation automatique** : une GA déjà attribuée à une commande n'est plus re-suggérée à une autre, sauf pour les paires explicitement couplées par le template (ex : Monter/Descendre)
- **Fix — propagation figée après la première ancre** : les suggestions automatiques sont distinguées des valeurs confirmées par l'utilisateur et recalculées tant que la commande n'a pas été renseignée explicitement
- **Fix — icône en doublon sur les widgets composites** : l'icône automatique ne s'applique plus aux commandes dotées d'un widget dédié (core::heat, core::shutter, core::light…), qui l'affichaient en double au-dessus du rendu natif

# 23/06/2026

- **Nouveaux templates d'équipements** : qualité de l'air, citerne/cuve, détecteur de fumée, digicode, porte, garage, compteur d'impulsions, détecteur de fuite, luminosité, prise, téléinformation (Linky) et fenêtre
- **Fix — reconnexion en rafale (coupures longues)** : les reconnexions sont sérialisées ; sauvegarder plusieurs équipements ne sature plus le slot unique de la passerelle
- **Fix — slot fantôme tunneling UDP** : l'adresse individuelle de tunnel peut être fixée aussi en Tunneling UDP — après une coupure brutale, la passerelle remplace le slot fantôme au lieu de refuser la reconnexion
- **UI Connexion KNX — indications par mode** : champ adresse tunnel exposé en Tunneling UDP, bloc « Slots tunnel de la passerelle » affiché pour tous les modes tunneling, bloc d'information pour le mode Routing
- **Fix — migration EIBD : équipements suivants ignorés** : la déduplication compare désormais exactement l'id source — chaque équipement est traité indépendamment
- **Migration EIBD — collision de nom** : le nom migré est suffixé et rendu unique dans la pièce (Jeedom interdit les doublons nom + pièce)

# 17/06/2026

- **Watchdog de connexion** : vérification toutes les 30 s de l'état réel de xknx avec reconnexion automatique en cas de perte silencieuse de la passerelle — tous modes (tunneling UDP/TCP, routing, KNX IP Secure)
- **Fix — warnings xknx répétés sur lectures GA** : les objets de lecture ponctuelle sont retirés du registre xknx dès la fin de la lecture (plus d'accumulation de devices fantômes)
- **Fix — `payload_length` DPT 1/2/3** : ces DPT utilisent `DPTBinary` — élimine le `CouldNotParseTelegram: Payload invalid` sur les réponses aux lectures manuelles
- **États binaires — retour `0`/`1`** : les commandes binaires (DPT 1.x) retournent strictement `0` ou `1` au lieu de libellés texte, quelle que soit la sous-catégorie DPT

# 15/06/2026

- **Heure synchronisée avec Jeedom** : le fuseau horaire de Jeedom est transmis au daemon au démarrage et appliqué à tout le processus (Bus Monitor, logs, cache, horloge KNX). **Nécessite un redémarrage du daemon**
- **Simplification de l'interface** : retrait des icônes « Créer objet Jeedom » éparpillées dans les arbres des modales — la création d'équipements en masse depuis le projet ETS reste disponible
- **Cohérence UI** : nettoyage des modales (double-déclenchement Bus Monitor, popovers, libellés uniformisés, réinitialisation de la vue Projet, internationalisation de libellés restés en dur)

# 13/06/2026

- **Compatibilité xknx 2.x ET 3.x — réception des télégrammes** : détection de la version installée et enregistrement de la bonne forme de callback (corrige le `TypeError` répété sous 2.x et le moniteur muet sous 3.x)
- **Correction — commandes d'équipement** : mode HVAC du thermostat, inclinaison des lamelles, couleur xyY et horloge KNX (DPT 10/11/19) corrigés et compatibles 2.x/3.x
- **Bus Monitor** : authentification SSE corrigée (clé API du plugin) et échappement des noms/valeurs affichés
- **États binaires et numériques** : valeurs `0/1` pour les binaires, valeur nue pour les numériques (l'unité reste affichée via la config de la commande) — widgets, graphiques et scénarios fonctionnent à nouveau
- **Actualisation projet ETS** : un échec de relecture du `.knxproj` est signalé clairement au lieu de réafficher l'ancien cache
- **Migration EIBD** : la détection des équipements déjà migrés fonctionne (plus de duplication à chaque relance)
- **Démarrage plus rapide & moins de charge bus** : les dernières valeurs connues (cache persisté) sont poussées immédiatement vers Jeedom ; nouveau paramètre *Cache d'états au démarrage* (onglet Daemon) pour éviter une rafale de `GroupValueRead`
- **Bus Monitor — statistiques de charge** : bandeau débit du bus (télégrammes/s, répartition write/read/response, GA la plus active, voyant de charge), filtre par type de télégramme, export CSV amélioré
- **Réimport ETS avec diff** : comparaison avec l'import précédent (GA ajoutées/supprimées, DPT modifiés, renommages) et application des nouveaux DPT aux GA et commandes concernées
- **Documentation** : documentation utilisateur complète (`docs/fr_FR/index.md`) et `README.md` réécrit

# 12/06/2026

- **Compatibilité xknx 3.x** : le plugin fonctionne avec xknx 2.x et 3.x (climate, horloge KNX, Bus Monitor) — sans ce correctif, toute installation fraîche crashait au démarrage du daemon
- **Fix tests PHP** : suite PHPUnit remise en état (bootstrap et classe historique `knx`)
- **Refactors** : résolution du mode de connexion mutualisée (`getConnectionType()`), helper partagé de création de groupes ETS, cache d'états GA partagé
- **Fix UI** : la modal Projet ETS n'accumule plus les handlers de clic à chaque réouverture
- **Nettoyage** : suppression du code mort (fichiers du template Jeedom, templates vides, import inutilisé)

# 11/06/2026

- **FlagInit** : envoi automatique d'un `GroupValueRead` au démarrage sur toutes les GA avec `FlagInit = 1`
- **CycliqueSend** : lecture périodique des GA configurées (intervalle ≥ 10 s, tâche asyncio dédiée par GA)
- **Reconnexion automatique** : backoff exponentiel (1 s → 60 s max) en cas de coupure de la passerelle
- **Write queue** : file asyncio avec 3 tentatives pour les écritures bus, erreurs définitives remontées à Jeedom
- **Fixes** : section `pip3` dans `packages.json`, identifiant plugin dans `log::add`/`config::save`, upload `.knxkeys`, export `ga_write`/`ga_state`, logicalId réels sur `importGAs`
- **DPT auto ETS** : propagation automatique du DPT du `.knxproj` sur les commandes créées via `importGAs`, avec déduction du subType Jeedom
