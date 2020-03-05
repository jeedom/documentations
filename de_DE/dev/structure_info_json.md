**Documentation fichier Info.json**

Intégré depuis la version 3.0 de Jeedom, le fichier **Info.json** est obligatoire pour le bon fonctionnement des plugins, et leur bon déploiement sur le Jeedom Markt.

Le fichier Info.json est enregistré dans le dossier /plugin_Info/ de votre plugin.

Liste des variables du fichier Info.json

Les champs marqués d'un * sont des champs obligatoires.

Champs                   | Valeurs                                                                                                                   |
------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
Identifikation *                     | Identifiant unique du plugin sur le Jeedom Markt. Doit debuter par une lettre. Sans accents.                             |
Name *                   | Nom du plugin.                                                                                                            |
Beschreibung *            | Description du plugin, tel qu'il s'affichera sur le Jeedom Markt Minimum 80 caractères. (`<br/>` pour le retour à la ligne.)                                  |                                                                                     |
usage                    | Informations complémentaires à la Dokumentation sur l'usage du plugin.                                                    |
Lizenz *                | Type de Lizenz.                                                                                                          |
Autor *                 | Nom de l'auteur du plugin, tel qu'il sera affiché une fois le plugin installé, dans les Informations de celui-ci.         |
erfordern *                | Version minimum de Jeedom.                                                                                                |
Kategorie *               | Catégorie de classement du plugin sur le Market jeedom. **Respecter impérativement la nomenclature du tableau ci-dessous** |
Anzeige                  | si le plugin utilise un panel dédié sur le desktop, il s'agit du nom du fichier principal de ce panel.                    |
Handy                   | Si le plugin utilise un panel dédié sur la webApp Jeedom, il s'agit du nom du fichier principal de ce panel.   |
Änderungsprotokoll *              | Lien Html vers le Changelog.                                                                                              |
Dokumentation *          | Lien Html vers la Dokumentation du plugin.                                                                                |
link -> vIdentifikationeo               | Lien Html vers une vIdentifikationéo de présentation.                                                                                 |
link -> forum               | Lien Html vers le forum sur le sujet officiel du plugin.                                                                  |
languages                | Liste des langues disponibles pour le plugin : french, english, german, italian, spanish , russian, indonesian            |
compatibility            | Compatibilité du plugin : miniplus, smart, docker, rpi, diy, Handyapp.                                                   |
hasDependency            | «true» si le plugin doit installer des dépendances, sinon «false» ou absent.                                              |
hasOwnDeamon             | «true» si le plugin doit exécuter des deamons, sinon «false» ou absent.                                                   |
maxDependancyInstallTime | Temps maximum imparti pour l'installation des dépendances, exprimé en minutes.                                            |
issue                    | URL vers le bugtracker si externe (si non remplis alors vous receverez un mail)

**Beispiel** :

[Fichier plugin-template/plugin_Info/Info.json](https://github.com/jeedom/plugin-template/blob/master/plugin_Info/Info.json)




**NOMENCLATURE CATEGORIES**

Jeedom Markt         | Info.json               |
--------------------- | ----------------------- |
Kommunikation         | Kommunikation           |
Komfort               | wellness                |
Energie               | energy                  |
Wetter                 | weather                 |
Überwachung            | Überwachung              |
Multimedia            | Multimedia              |
Natur                | Natur                  |
Verbundene Objekte      | deviceKommunikation     |
Organisation          | organization            |
Hausautomations-Gateway  | home automation protocol|
Programmierung         | Programmierung             |
Hausautomationsprotokoll   | automation protocol     |
Gesundheit                 | Gesundheit                  |
Sicherheit              | security                |
Automatismus           | automatisation          |


   


  


  


  

    


   




