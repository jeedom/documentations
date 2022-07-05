**Documentation info.json file**

Integrated since version 3.0 from Jeedom, the file ``info.json`` is mandatory for the proper functioning of the plugins, and their proper deployment on the Jeedom Market.

The info file.json is saved in the folder ``/plugin_info/`` of your plugin.

List of file variables ``info.json``

Fields marked with * are required fields.

Fields                   | Values                                                                                                                   |
------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
``id`` *                     | Unique identifier of the plugin on the Jeedom Market. Must start with a letter. Without accents.                             |
``name`` *                   | Plug-in name.                                                                                                            |
``description`` *            | Description of the plugin, as it will appear on the Jeedom Market Minimum 80 characters. (``<br/>`` for newline.). Attention it is a table for the different languages of jeedom possible (look at the example of the template plugin)                                  |                                                                                     |
``utilization``                    | Additional information to the documentation on the use of the plugin.                                                    |
``licence`` *                | License Type.                                                                                                          |
``author`` *                 | Name of the plugin author, as it will be displayed once the plugin is installed, in the plugin information.         |
``require`` *                | Minimum version of Jeedom.                                                                                                |
``category`` *               | Ranking category of the plugin on the Jeedom Market. **Strictly respect the nomenclature in the table below** |
``display``                  | if the plugin uses a dedicated panel on the desktop, this is the name of the main file of this panel.                    |
``mobile``                   | If the plugin uses a dedicated panel on the Jeedom webApp, this is the name of the main file of this panel.   |
``changelog`` *              | Html link to Changelog.                                                                                              |
``documentation`` *          | Html link to plugin documentation.
``changelog_beta`` *              | Html link to Beta Changelog.|
``documentation_beta`` *          | Html link to the beta documentation of the plugin.
``link`` -> ``video``               | Html link to a presentation video.                                                                                 |
``link`` -> ``forum``               | Html link to the forum on the official topic of the plugin.                                                                  |
``languages``                | List of languages available for the plugin: ``fr_FR``, ``en_US``, ``de_DE``, ``it_IT``, ``sp_SP`` , ``ru_RU``, ``pt_PT``            |
``compatibility``            | Plugin Compatibility: miniplus, smart, docker, rpi, diy, mobileapp, v4.                                                   |
``hasDependency``            | «true» si le plugin doit installer des dépendances, sinon «false» ou absent.                                              |
``hasOwnDeamon``             | «true» si le plugin doit exécuter des deamons, sinon «false» ou absent.                                                   |
``maxDependancyInstallTime`` | Maximum time allowed for the installation of dependencies, expressed in minutes.                                            |
``specialAttributes`` | Allows plugins to request additional parameters on objects or users (take a good look at the example of the template plugin)                                            |
``issue``                    | URL to the bugtracker if external (if not filled in then you will receive an email)

**Example** :

[Plugin-template/plugin_info/info.json file](https://github.com/jeedom/plugin-template/blob/master/plugin_info/info.json)

**NOMENCLATURE CATEGORIES**

Market Jeedom         | information.json               |
--------------------- | ----------------------- |
Communication         | ``communication``           |
Comfort               | ``wellness``                |
Energy               | ``energy``                  |
Weather report                 | ``weather``                 |
Monitoring            | ``monitoring``              |
Multimedia            | ``multimedia``              |
Nature                | ``nature``                  |
Connected Objects      | ``devicecommunication``     |
Organization          | ``organization``            |
Home automation gateway  | ``home automation protocol``|
Programming         | ``programming``             |
Home automation protocol   | ``automation protocol``     |
Health                 | ``health``                  |
Security              | ``security``                |
Automation           | ``automatisation``          |
