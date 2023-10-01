# Info.json file documentation

Integrated since version 3.0 from Jeedom, the file ``info.json`` is mandatory for the proper functioning of plugins, and their proper deployment on the Jeedom Market.

The info file.json is saved in the folder ``/plugin_info/`` of your plugin.

## List of file variables ``info.json``

Fields marked with * are mandatory fields.

Fields                   | Values                                                                                                                   |
------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
``id`` *                     | Unique identifier of the plugin on the Jeedom Market. Must start with a letter. Without accents.                             |
``name`` *                   | Plugin name.                                                                                                            |
``description`` *            | Description of the plugin, as it will appear on the Jeedom Market. Minimum 80 characters. (``<br/>`` for the new line.). Attention it is a table for the different languages of possible jeedom (look at the example of the template plugin)                                  |                                                                                     |
``utilization``                    | Additional information to the documentation on the use of the plugin.                                                    |
``licence`` *                | Type of license.                                                                                                          |
``author`` *                 | Name of the plugin author, as it will be displayed once the plugin is installed, in the plugin information.         |
``require`` *                | Minimum required version of Jeedom (Core).                                                                                                |
``category`` *               | Ranking category of the plugin on the Jeedom Market. **It is imperative to respect the [nomenclature of the table below](https://doc.jeedom.com/en_US/dev/structure_info_json/#NOMENCLATURE%20CATEGORIES)** |
``display``                  | If the plugin uses a dedicated panel on the desktop,. This is the name of the main file for this panel.                    |
``mobile``                   | If the plugin uses a dedicated panel on the Jeedom webApp. This is the name of the main file for this panel.   |
``changelog`` *              | Html link to Changelog.                                                                                              |
``documentation`` *          | Html link to plugin documentation.
``changelog_beta`` *              | Lien Html vers le Changelog Beta.|
``documentation_beta`` *          | Lien Html vers la documentation beta du plugin.
``link`` -> ``video``               | Html link to a video presentation.                                                                                 |
``link`` -> ``forum``               | Html link to the forum on the official subject of the plugin.                                                                  |
``languages``                | List of languages available for the plugin: ``fr_FR``, ``en_US``, ``de_DE``, ``it_IT``, ``sp_SP``, ``pt_PT``            |
``compatibility``            | Plugin compatibility: miniplus, smart, docker, rpi, diy, mobileapp, v4.                                                   |
``hasDependency``            | «true» si [the plugin must install dependencies](https://doc.jeedom.com/en_US/dev/daemon_plugin#Les%20d%C3%A9pendance), sinon «false» ou absent.                                              |
``hasOwnDeamon``             | «true» si [the plugin must run daemons](https://doc.jeedom.com/en_US/dev/daemon_plugin#Les%20d%C3%A9mons%20%26%20d%C3%A9pendances), sinon «false» ou absent.                                                   |
``maxDependancyInstallTime`` | Maximum time allowed for the installation of dependencies, expressed in minutes.                                            |
``specialAttributes`` | Permet aux plugin de demander des [parametre suplémentaire](https://doc.jeedom.com/en_US/dev/structure_info_json#SpecialAttributes) sur [des objets](https://doc.jeedom.com/en_US/dev/structure_info_json#Attributes%20Object) or [users](https://doc.jeedom.com/en_US/dev/structure_info_json#Attributs%20User) (take a good look at the example of the template plugin) (See explanations below)                                            |
``issue``                    | URL to the bugtracker if external (if not filled then you will receive an email)

## Exemple

[Plugin-template file / plugin_info / info.json](https://github.com/jeedom/plugin-template/blob/master/plugin_info/info.json)

## CATEGORY NOMENCLATURE

Jeedom Market         | Info.JSON               |
--------------------- | ----------------------- |
Communication         | ``communication``           |
Comfort               | ``wellness``                |
Energy               | ``energy``                  |
Weather                 | ``weather``                 |
Monitoring            | ``monitoring``              |
Multimedia            | ``multimedia``              |
Nature                | ``nature``                  |
Connected objects      | ``devicecommunication``     |
Organization          | ``organization``            |
Home automation gateway  | ``home automation protocol``|
Programming         | ``programming``             |
Home automation protocol   | ``automation protocol``     |
Health                 | ``health``                  |
Security              | ``security``                |
Automatism           | ``automatisation``          |

## SpecialAttributes

These attributes make it possible to ask users for additional parameters, on each object (`object` in the Jeedom sense : Tools / Objects menu; typically this represents the rooms in our home automation) or for each user.

### Utilisation

In your code, you can retrieve the value of these parameters using the `User` object for a User attribute, or the `jeeObject` object for an object attribute:

```
user : $user->getOptions(‹ plugin::Plugin_id::key ›)
object : $jeeObject->getConfiguration(‹ plugin::Plugin_id::key ›)
```
* ID_plugin is the ID of your plugin
* clef is the key in your json configuration (in the example: foo, foo 2 ...)

### Object Attributes

The syntax is as follows to propose 2 specific parameters per object :
```
	"specialAttributes" : {
		"object" : {
			"toto" : {"name" : {"fr_FR" : "Plop I'm a special attribute"},"type" : "input"},
			"toto2" : {"name" : {"fr_FR" : "Plop I have a special attribute number"},"type" : "number"}
		}
	}
```

The user will be able to define these 2 parameters for each object in the object configuration menu (Tools / Objects menu).
Here a free text, and a digital.
![Attribut Objet](images/SpecialAttributeObject.png)

### User attributes

```
	"specialAttributes" : {
		"user" : {
			"toto" : {"name" : {"fr_FR" : "Plop I am a special attribute users"},"type" : "select","values" : [{"value" : "1", "name" : "value 1"},{"value" : "plop", "name" : "plop value"}]}
		}
	}
```

Here, this attribute allows each user to define a parameter of their own (in the Settings / Preferences menu)
![Attribut Utilisateur](images/SpecialAttributeUser.png)
