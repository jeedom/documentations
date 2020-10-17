**Documentation file info.json**

Integrated since version 3.0 from Jeedom, the file **info.json** is mandatory for the proper functioning of the plugins, and their proper deployment on the Jeedom Market.

The info file.json is saved in the / plugin_info / folder of your plugin.

List of variables in info.json file

Fields marked with * are mandatory fields.

Fields                   | Values                                                                                                                   |
------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
id *                     | Unique identifier of the plugin on the Jeedom Market. Must start with a letter. Without accents.                             |
name *                   | Plugin name.                                                                                                            |
description *            | Description of the plugin, as it will be displayed on the Jeedom Market Minimum 80 characters. (`<br/>`to return to the line.)                                  |                                                                                     |
use                    | Additional information to the documentation on the use of the plugin.                                                    |
Licence *                | License type.                                                                                                          |
author *                 | Name of the plugin author, as it will be displayed after the plugin is installed, in the plugin information.         |
require *                | Minimum version of Jeedom.                                                                                                |
category *               | Ranking category of the plugin on the Jeedom Market. **Observe the nomenclature in the table below** |
display                  | if the plugin uses a dedicated panel on the desktop, this is the name of the main file of this panel.                    |
mobile                   | If the plugin uses a dedicated panel on the Jeedom webApp, this is the name of the main file of this panel.   |
changelog *              | Html link to the Changelog.                                                                                              |
documentation *          | Html link to the plugin documentation.                                                                                |
link -> video               | Html link to a presentation video.                                                                                 |
link -> forum               | Html link to the forum on the official subject of the plugin.                                                                  |
languages                | List of languages available for the plugin:french, english, german, italian, spanish, russian, indonesian            |
compatibility            | Plugin compatibility: miniplus, smart, docker, rpi, diy, mobileapp.                                                   |
hasDependency            | «true» si le plugin doit installer des dépendances, sinon «false» ou absent.                                              |
hasOwnDeamon             | «true» si le plugin doit exécuter des deamons, sinon «false» ou absent.                                                   |
maxDependancyInstallTime | Maximum time allowed for the installation of dependencies, expressed in minutes.                                            |
issue                    | URL to the bugtracker if external (if not filled in then you will receive an email)

**Example** :

[Plugin-template / plugin_info / info.json file](https://github.com/jeedom/plugin-template/blob/master/plugin_info/info.json)

**NOMENCLATURE CATEGORIES**

Market Jeedom         | info.json               |
--------------------- | ----------------------- |
Communication         | communication           |
Comfort               | wellness                |
Energy               | energy                  |
Weather forecast                 | weather                 |
Monitoring            | monitoring              |
Multimedia            | multimedia              |
Nature                | nature                  |
Connected Objects      | devicecommunication     |
Organization          | organization            |
Home automation gateway  | home automation protocol|
Programming         | programming             |
Home automation protocol   | automation protocol     |
Health                 | health                  |
Security              | security                |
Automatism           | automating          |
