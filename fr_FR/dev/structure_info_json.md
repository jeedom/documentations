**Documentation fichier info.json**

Intégré depuis la version 3.0 de Jeedom, le fichier ``info.json`` est obligatoire pour le bon fonctionnement des plugins, et leur bon déploiement sur le Market Jeedom.

Le fichier info.json est enregistré dans le dossier ``/plugin_info/`` de votre plugin.

Liste des variables du fichier ``info.json``

Les champs marqués d’un * sont des champs obligatoires.

Champs                   | Valeurs                                                                                                                   |
------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
``id`` *                     | Identifiant unique du plugin sur le Market Jeedom. Doit debuter par une lettre. Sans accents.                             |
``name`` *                   | Nom du plugin.                                                                                                            |
``description`` *            | Description du plugin, tel qu'elle s’affichera sur le Market Jeedom. Minimum 80 caractères. (``<br/>`` pour le retour à la ligne.). Attention c'est un tableau pour les differentes langues de jeedom possible (bien regarder l'exemple du plugin template)                                  |                                                                                     |
``utilization``                    | Informations complémentaires à la documentation sur l’usage du plugin.                                                    |
``licence`` *                | Type de licence.                                                                                                          |
``author`` *                 | Nom de l’auteur du plugin, tel qu’il sera affiché une fois le plugin installé, dans les informations de celui-ci.         |
``require`` *                | Version minimum requise de Jeedom (Core).                                                                                                |
``category`` *               | Catégorie de classement du plugin sur le Market jeedom. **Respecter impérativement la nomenclature du tableau ci-dessous** |
``display``                  | Si le plugin utilise un panel dédié sur le desktop,. Il s’agit du nom du fichier principal de ce panel.                    |
``mobile``                   | Si le plugin utilise un panel dédié sur la webApp Jeedom. Il s’agit du nom du fichier principal de ce panel.   |
``changelog`` *              | Lien Html vers le Changelog.                                                                                              |
``documentation`` *          | Lien Html vers la documentation du plugin.
``changelog_beta`` *              | Lien Html vers le Changelog Beta.|
``documentation_beta`` *          | Lien Html vers la documentation beta du plugin.
``link`` -> ``video``               | Lien Html vers une vidéo de présentation.                                                                                 |
``link`` -> ``forum``               | Lien Html vers le forum sur le sujet officiel du plugin.                                                                  |
``languages``                | Liste des langues disponibles pour le plugin : ``fr_FR``, ``en_US``, ``de_DE``, ``it_IT``, ``sp_SP``, ``pt_PT``            |
``compatibility``            | Compatibilité du plugin : miniplus, smart, docker, rpi, diy, mobileapp, v4.                                                   |
``hasDependency``            | «true» si le plugin doit installer des dépendances, sinon «false» ou absent.                                              |
``hasOwnDeamon``             | «true» si le plugin doit exécuter des deamons, sinon «false» ou absent.                                                   |
``maxDependancyInstallTime`` | Temps maximum imparti pour l’installation des dépendances, exprimé en minutes.                                            |
``specialAttributes`` | Permet aux plugin de demander des parametre suplémentaire sur des objets ou des utilisateurs (bien regarder l'exemple du plugin template)                                            |
``issue``                    | URL vers le bugtracker si externe (si non remplis alors vous receverez un mail)

**Exemple** :

[Fichier plugin-template/plugin_info/info.json](https://github.com/jeedom/plugin-template/blob/master/plugin_info/info.json)

**NOMENCLATURE CATEGORIES**

Market Jeedom         | info.json               |
--------------------- | ----------------------- |
Communication         | ``communication``           |
Confort               | ``wellness``                |
Energie               | ``energy``                  |
Météo                 | ``weather``                 |
Monitoring            | ``monitoring``              |
Multimédia            | ``multimedia``              |
Nature                | ``nature``                  |
Objets Connectés      | ``devicecommunication``     |
Organisation          | ``organization``            |
Passerelle domotique  | ``home automation protocol``|
Programmation         | ``programming``             |
Protocole domotique   | ``automation protocol``     |
Santé                 | ``health``                  |
Sécurité              | ``security``                |
Automatisme           | ``automatisation``          |
