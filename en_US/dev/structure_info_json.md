**Info.JSON file Documentation**

Integrated since version 3.0 from Jeedom, the file **Info.JSON** is mandatory for the proper functioning of plugins, and their proper deployment on the Jeedom Market.

The Info file.JSON is saved in the / plugin_Info / folder of your plugin.

List of variables in the Info.JSON file

Fields marked with * are mandatory fields.

Fields                   | Values                                                                                                                   |
------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
Id *                     | Unique Identifier of the plugin on the Jeedom Market. Must start with a letter. Without accents.                             |
name *                   | Plugin name.                                                                                                            |
Description *            | Description of the plugin, as it will be ed on the Jeedom Market Minimum 80 characters. (` <br/> `for the line break.)                                  |                                                                                     |
use                    | Additional Information to the Documentation on the use of the plugin.                                                    |
Licence *                | Type of license.                                                                                                          |
 *                 | Name of the plugin , as it will be ed once the plugin is installed, in the plugin Information.         |
 *                | Jeedom minimum version.                                                                                                |
category *               | Ranking category of the plugin on the Jeedom Market. **It is essential to respect the nomenclature in the table below** |
                  | if the plugin uses a dedicated panel on the desktop, it is the name of the main file of this panel.                    |
Mobile                   | If the plugin uses a dedicated panel on the Jeedom webApp, this is the name of the main file for this panel.   |
Changelog *              | Html link to Changelog.                                                                                              |
Documentation *          | Html link to plugin Documentation.                                                                                |
               | Html link to a vIdeo presentation.                                                                                 |
               | Html link to the forum on the official subject of the plugin.                                                                  |
                | List of  available for the plugin:french, english, german, italian, spanish, russian, indonesian            |
            | Plugin : .                                                   |
            | «true» si le plugin doit installer des dépendances, sinon «false» ou absent.                                              |
             | «true» si le plugin doit exécuter des deamons, sinon «false» ou absent.                                                   |
 | Maximum time allowed for the installation of dependencies, expressed in minutes.                                            |
                    | URL to the bugtracker if external (if not filled then you will receive an email)

**Example**:

[Plugin-template file / plugin_Info / Info.JSON](https://github.com/jeedom/plugin-template/blob/master/plugin_Info/Info.JSON)




**CATEGORY NOMENCLATURE**

Jeedom Market         | Info.JSON               |
--------------------- | ----------------------- |
Communication         | Communication           |
Comfort               |                 |
Energy               |                   |
Weather                 |                  |
Monitoring            | monitoring              |
Multimedia            | Multimedia              |
Nature                | Nature                  |
Connected objects      |      |
Organization          |             |
Home automation gateway  | |
Programming         |              |
Home    |      |
Health                 | health                  |
Security              |                 |
Automatism           | automating          |


   


  


  


 

    


   




