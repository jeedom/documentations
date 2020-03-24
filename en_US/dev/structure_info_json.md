**Documentation fichier Info.json**

Intégré depuis la version 3.0 de Jeedom, le fichier **Info.json** est obligatoire pour le bon fonctionnement des plugins, et leur bon déploiement sur le Jeedom Market.

Le fichier Info.json est enregistré dans le dossier /plugin_Info/ de votre plugin.

Liste des variables du fichier Info.json

Les champs marqués d'un * sont des champs obligatoires.

Fields                   | Values                                                                                                                   |
------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
Id *                     | Identifiant unique du plugin sur le Jeedom Market. Doit debuter par une lettre. Sans accents.                             |
name *                   | Nom du plugin.                                                                                                            |
Description *            | Description du plugin, tel qu'il s'affichera sur le Jeedom Market Minimum 80 caractères. (`<br/>` pour le retour à la ligne.)                                  |                                                                                     |
usage                    | Informations complémentaires à la Documentation sur l'usage du plugin.                                                    |
Licence *                | Type de Licence.                                                                                                          |
author *                 | Nom de l'auteur du plugin, tel qu'il sera affiché une fois le plugin installé, dans les Informations de celui-ci.         |
require *                | Version minimum de Jeedom.                                                                                                |
category *               | Catégorie de classement du plugin sur le Market jeedom. **Respecter impérativement la nomenclature du tableau ci-dessous** |
display                  | si le plugin utilise un panel dédié sur le desktop, il s'agit du nom du fichier principal de ce panel.                    |
Mobile                   | Si le plugin utilise un panel dédié sur la webApp Jeedom, il s'agit du nom du fichier principal de ce panel.   |
Changelog *              | Lien Html vers le Changelog.                                                                                              |
Documentation *          | Lien Html vers la Documentation du plugin.                                                                                |
link -> vIdeo               | Lien Html vers une vIdéo de présentation.                                                                                 |
link -> forum               | Lien Html vers le forum sur le sujet officiel du plugin.                                                                  |
languages                | Liste des langues disponibles pour le plugin : french, english, german, italian, spanish , russian, indonesian            |
compatibility            | Compatibilité du plugin : miniplus, smart, docker, rpi, diy, Mobileapp.                                                   |
hasDependency            | «true» si le plugin doit installer des dépendances, sinon «false» ou absent.                                              |
hasOwnDeamon             | «true» si le plugin doit exécuter des deamons, sinon «false» ou absent.                                                   |
maxDependancyInstallTime | Temps maximum imparti pour l'installation des dépendances, exprimé en minutes.                                            |
issue                    | URL vers le bugtracker si externe (si non remplis alors vous receverez un mail)

**Example** :

[Fichier plugin-template/plugin_Info/Info.json](https://github.com/jeedom/plugin-template/blob/master/plugin_Info/Info.json)




**NOMENCLATURE CATEGORIES**

Jeedom Market         | Info.json               |
--------------------- | ----------------------- |
Communication         | communication           |
Comfort               | wellness                |
Energy               | energy                  |
Weather                 | weather                 |
Monitoring            | monitoring              |
Multimedia            | Multimedia              |
Nature                | nature                  |
Connected objects      | devicecommunication     |
Organization          | organization            |
Home automation gateway  | home automation protocol|
Programming         | programming             |
Home automation protocol   | automation protocol     |
Health                 | health                  |
Security              | security                |
Automatism           | automatisation          |


   


  


  


  

    


   




