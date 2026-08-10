# Changelog plugin knxSecure

>**IMPORTANT**
>
>S'il n'y a pas d'information sur la mise à jour, c'est que celle-ci concerne uniquement de la mise à jour de documentation, de traduction ou de texte.

# 10/08/2026

- **Mise à jour du logo de jeedom**

# 16/07/2026
- **Le plugin requiert désormais xknx 3.x (Python ≥ 3.10)** : sur un système au Python trop ancien (ex. Debian 11), Python 3.11 est compilé automatiquement via pyenv (Python natif sur Debian 12). Corrige l'échec d'installation des dépendances sous Python 3.9
- **Fix — reconnexion automatique sous xknx 3.x** : le callback d'état de connexion n'était jamais exécuté sous xknx 3.x (warning `coroutine ... never awaited`) → la reconnexion ne partait pas. Corrigé
- **Fix — double moteur de reconnexion** : la reconnexion interne de xknx est désactivée, la reconnexion est pilotée uniquement par le daemon
- **Fix — comparaison de projets ETS (réimport)** : le diff affichait « Aucune modification » même entre deux projets différents (adresses non indexées). Rétabli
- **Logs démon** : retrait du sélecteur de niveau redondant
- **Documentation** : documentation utilisateur enrichie (prise en main, DPT, exemples, FAQ) + captures d'écran

# 03/07/2026

- **Migration EIBD — widgets appliqués automatiquement** : après migration d'un équipement EIBD, les widgets Jeedom (dashboard/mobile) du template correspondant au type détecté sont appliqués aux commandes migrées (matching type + subType + DPT). Les équipements migrés retrouvent immédiatement leur rendu visuel (volet, thermostat, lumière…) sans repasser par l'application manuelle d'un template
- **Type d'appareil — nouveaux profils sélectionnables** : la liste « Type d'appareil » d'un équipement propose désormais aussi Station météo, Horloge NTP, Téléinfo/Linky, Digicode, Détecteur de fumée, Détecteur de fuite, Capteur luminosité, Qualité de l'air, Citerne/Cuve et Bouton/Impulsion
- **Template météo** : la commande d'alarme jour/nuit (DPT 1.005) n'est plus visible par défaut sur le widget
- **Fix — hiérarchie GA de secours** : les adresses de groupe malformées (segments non numériques) sont ignorées lors de la reconstruction de l'arborescence de secours, au lieu de créer des groupes fantômes. Les formats TwoLevel et FreeStyle restent pris en charge

# 24/06/2026

- **Icônes automatiques sur les commandes** : une map centralisée `generic_type → icône` est appliquée à la création/mise à jour des commandes via template. Chaque commande dotée d'un `generic_type` connu reçoit automatiquement l'icône FontAwesome cohérente (lumière, volet, thermostat, ventilation, énergie, serrure, météo…). Une icône explicite définie dans un template reste prioritaire
- **Templates enrichis** : comblement des `generic_type` manquants et ajout d'icônes explicites pour les commandes sans type standard — toute commande de template est visuellement identifiable
- **Recommandation de GA par DPT** : dans les modales d'application de template et de création d'équipement, le sélecteur d'adresse de groupe ne propose plus que les GA sauvegardées dont le DPT correspond (DPT exact marqué ★, puis même DPT principal), avec compteur de GA compatibles. La saisie manuelle reste toujours disponible
- **Propagation automatique entre commandes du même équipement** : dès qu'une GA est choisie sur une commande, les autres commandes encore vides sont pré-remplies si une GA compatible DPT partage le même dernier segment d'adresse (convention ETS répandue). Les suggestions sont signalées visuellement et restent modifiables
- **Fix — doublons d'adresse dans la propagation automatique** : une GA déjà attribuée à une commande n'est plus re-suggérée à une autre, sauf pour les paires explicitement couplées par le template (ex : Monter/Descendre)
- **Fix — propagation figée après la première ancre** : les suggestions automatiques sont distinguées des valeurs confirmées par l'utilisateur et recalculées tant que la commande n'a pas été renseignée explicitement
- **Fix — icône en doublon sur les widgets composites** : l'icône automatique ne s'applique plus aux commandes dotées d'un widget dédié (core::heat, core::shutter, core::light…), qui l'affichaient en double au-dessus du rendu natif

# 23/06/2026

- **Nouveaux templates d'équipements** : qualité de l'air, citerne/cuve, détecteur de fumée, digicode, porte, garage, compteur d'impulsions, détecteur de fuite, luminosité, prise, téléinformation (Linky) et fenêtre
- **Fix — reconnexion en rafale (coupures longues)** : les reconnexions au daemon sont sérialisées (un seul essai à la fois, rafales coalescées) — la sauvegarde simultanée de plusieurs équipements ne sature plus le slot unique de la passerelle (`RuntimeError: Pas de connexion active`)
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
