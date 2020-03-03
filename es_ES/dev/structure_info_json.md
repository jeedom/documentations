**Documentation fichier Información.json**

Intégré depuis la version 3.0 de Jeedom, le fichier **Información.json** est obligatoire pour le bon fonctionnement des plugins, et leur bon déploiement sur le Mercado de la libertad.

Le fichier Información.json est enregistré dans le dossier /plugin_Información/ de votre plugin.

Liste des variables du fichier Información.json

Les champs marqués d'un * sont des champs obligatoires.

Campos                   | Valeurs                                                                                                                   |
------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
Identificación *                     | Identifiant unique du plugin sur le Mercado de la libertad. Doit debuter par une lettre. Sans accents.                             |
nombre *                   | Nom du plugin.                                                                                                            |
Descripción *            | Description du plugin, tel qu'il s'affichera sur le Mercado de la libertad Minimum 80 caractères. (`<br/>` pour le retour à la ligne.)                                  |                                                                                     |
usage                    | Informations complémentaires à la Documentación sur l'usage du plugin.                                                    |
Licencia *                | Type de Licencia.                                                                                                          |
author *                 | Nom de l'auteur du plugin, tel qu'il sera affiché une fois le plugin installé, dans les Informaciónrmations de celui-ci.         |
require *                | Version minimum de Jeedom.                                                                                                |
categoría *               | Catégorie de classement du plugin sur le Market jeedom. **Respecter impérativement la nomenclature du tableau ci-dessous** |
display                  | si le plugin utilise un panel dédié sur le desktop, il s'agit du nom du fichier principal de ce panel.                    |
Móvil                   | Si le plugin utilise un panel dédié sur la webApp Jeedom, il s'agit du nom du fichier principal de ce panel.   |
Cambios *              | Lien Html vers le Changelog.                                                                                              |
Documentación *          | Lien Html vers la Documentación du plugin.                                                                                |
link -> vIdentificacióneo               | Lien Html vers une vIdentificaciónéo de présentation.                                                                                 |
link -> forum               | Lien Html vers le forum sur le sujet officiel du plugin.                                                                  |
languages                | Liste des langues disponibles pour le plugin : french, english, german, italian, spanish , russian, indonesian            |
compatibility            | Compatibilité du plugin : miniplus, smart, docker, rpi, diy, Móvilapp.                                                   |
hasDependency            | «true» si le plugin doit installer des dépendances, sinon «false» ou absent.                                              |
hasOwnDeamon             | «true» si le plugin doit exécuter des deamons, sinon «false» ou absent.                                                   |
maxDependancyInstallTime | Temps maximum imparti pour l'installation des dépendances, exprimé en minutes.                                            |
issue                    | URL vers le bugtracker si externe (si non remplis alors vous receverez un mail)

**Ejemplo** :

[Fichier plugin-template/plugin_Información/Información.json](https://github.com/jeedom/plugin-template/blob/master/plugin_Información/Información.json)




**NOMENCLATURE CATEGORIES**

Mercado de la libertad         | Información.json               |
--------------------- | ----------------------- |
Comunicación         | Comunicación           |
Confort               | wellness                |
Energía               | energy                  |
Tiempo                 | weather                 |
Monitoreo            | Monitoreo              |
Multimedia            | Multimedia              |
Naturaleza                | Naturaleza                  |
Objetos conectados      | deviceComunicación     |
Organización          | organization            |
Pasarela domótica  | home automation protocol|
Programación         | programming             |
Protocolo de domótica   | automation protocol     |
Salud                 | salud                  |
SegurIdentificaciónad              | security                |
Automatismo           | automatisation          |


   


  


  


  

    


   




