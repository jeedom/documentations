# info.json File Documentation

Included since version 3.0 of Jeedom, the file ``info.json`` is required for the plugins to function properly and to be deployed correctly on the Jeedom Market.

The info.json file is saved in the folder ``/plugin_info/`` for your plugin.

## List of variables in the file ``info.json``

Fields marked with an * are required.

Fields | Values |
------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
``id`` * | Unique identifier for the plugin on the Jeedom Market. Must begin with a letter. No accents. Cannot contain _ |
``name`` * | Plugin name. |
``description`` * | Description of the plugin, as it will appear on the Jeedom Market. Minimum 80 characters. (``<br/>`` for line breaks). Note that this is a table for the different languages supported by Jeedom (be sure to look closely at the example in the template plugin) | |
``utilization``                    | Additional information to supplement the documentation on using the plugin. |
``licence`` * | Type of license. |
``author`` * | Name of the plugin author, as it will appear in the plugin's information once the plugin is installed. |
``require`` * | Minimum required version of Jeedom (Core). |
``os``                 | Minimum and maximum required Debian versions. Specified as a JSON object, for example: {"min": 10, "max": 12.99} (Core 4.4.15 minimum). If either field is left blank, it will not be compared to the user's OS version. You can specify a more precise version, such as 10.5, for example. To remove the version restriction, you must republish the app on the marketplace with an empty value "". Note that for the maximum value, it is recommended to use .99 to include all minor versions. |
``category`` * | Plugin category on the Jeedom Market. **It is essential to comply with the [Legend for the table below](#NOMENCLATURE%20CATEGORIES)** |
``display``                  | If the plugin uses a dedicated panel on the desktop, this is the name of the panel's main file. |
``mobile``                   | If the plugin uses a dedicated panel in the Jeedom web app, this is the name of the main file for that panel.   |
``changelog`` * | HTML link to the Changelog. |
``documentation`` * | HTML link to the plugin's documentation.
``changelog_beta`` * | HTML link to the Beta Changelog.|
``documentation_beta`` * | HTML link to the plugin's beta documentation.
``link`` -> ``video``               | HTML link to a presentation video. |
``link`` -> ``forum``               | HTML link to the forum thread on the plugin's official topic. |
``language``                | List of languages available for the plugin: ``fr_FR``, ``en_US``, ``de_DE``, ``it_IT``, ``es_ES``, ``pt_PT``            |
``compatibility``            | Plugin compatibility: miniplus, smart, docker, rpi, diy, mobileapp, v4. |
``hasDependency``            | "true" if [The plugin must install dependencies](daemon_plugin#Les%20d%C3%A9pendance), otherwise "false" or absent. |
``hasOwnDeamon``             | "true" if [The plugin must run daemons](daemon_plugin#Les%20d%C3%A9mons%20%26%20d%C3%A9pendances), otherwise "false" or absent. |
``maxDependancyInstallTime`` | Maximum time allowed for installing the outbuildings, expressed in minutes. |
``specialAttributes`` | Allows plugins to request [additional setting](#SpecialAttributes) on [devices](#Attributs%20Objet) or [users](#Attributs%20User) (be sure to look closely at the plugin template example) (See explanation below) |
``issue``                    | URL to the bug tracker (if external; if left blank, you will receive an email)

## Example

[File plugin-template/plugin_info/info.json](https://github.com/jeedom/plugin-template/blob/master/plugin_info/info.json)

## CATEGORY LIST

Jeedom Market | info.json |
--------------------- | ----------------------- |
Communication | ``communication``           |
Comfort | ``wellness``                |
Energy | ``energy``                  |
Weather | ``weather``                 |
Monitoring | ``monitoring``              |
Multimedia | ``multimedia``              |
Nature | ``nature``                  |
Connected Objects | ``devicecommunication``     |
Organization | ``organization``            |
Home Automation Gateway  | ``home automation protocol``|
Programming | ``programming``             |
Home automation protocol   | ``automation protocol``     |
Health | ``health``                  |
Security | ``security``                |
Automation | ``automatisation``          |

## SpecialAttributes

These attributes allow you to request additional settings from users for each object (`objet` as defined by Jeedom: Tools / Objects menu; typically, this represents the rooms in our home automation system) or for each user.

### Usage

In your code, you can retrieve the values of these parameters using the object `User` for a User attribute, or the object `jeeObject` for an object attribute:

```
user : $user->getOptions(‹ plugin::ID_plugin::clef ›)
object : $jeeObject->getConfiguration(‹ plugin::ID_plugin::clef ›)
```
* ID_plugin is your plugin's ID
* "key" is the key in your JSON configuration (in the example: toto, toto 2, etc.)

### Object Attributes

The syntax for specifying two specific parameters per object is as follows:
```
	"specialAttributes" : {
		"object" : {
			"toto" : {"name" : {"fr_FR" : "Plop je suis un attribut spécial"},"type" : "input"},
			"toto2" : {"name" : {"fr_FR" : "Plop je suis un attribut spécial number"},"type" : "number"}
		}
	}
```

Users will be able to set these two parameters for each object in the object configuration menu (Tools / Objects menu).
Here is some free-form text and a digital one.
![Object Attribute](../images/SpecialAttributeObject.png)

### User Attributes

```
	"specialAttributes" : {
		"user" : {
			"toto" : {"name" : {"fr_FR" : "Plop je suis un attribut spécial users"},"type" : "select","values" : [{"value" : "1", "name" : "valeur 1"},{"value" : "plop", "name" : "valeur plop"}]}
		}
	}
```

Here, this attribute allows each user to set their own preference (in the Settings / Preferences menu)
![User Attribute](../images/SpecialAttributeUser.png)

### EqLogic Attributes

```
	"specialAttributes": {
        "eqLogic": {
            "mqttTranmit": {
                "type": "checkbox",
                "name": {
                    "fr_FR": "Transmettre l'équipement en MQTT"
                }
            }
        }
    }
```

Here, this attribute allows you to set a parameter for each Jeedom device (in the device's advanced settings). You can find it in the device's settings under `plugin::mqtt2::mqttTranmit` (`plugin::id_plugin::key`)
