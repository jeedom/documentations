# 

. ``info.json`` .

. ``/plugin_info/`` .

##  ``info.json``

.

                   |                                                                                                                    |
------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
``id`` *                     | . . .                              |
``name`` *                   | .                                                                                                            |
``description`` *            | . <br/>.). )                                  |                                                                                     |
``utilization``                    | .                                                    |
``licence`` *                | .                                                                                                          |
``author`` *                 | .         |
``require`` *                | ).                                                                                                |
``os``                 | .  : {"min" : 10,"max" : 12..). . ..  "".  ..                                               |
``category`` *               | . ** [](https://doc.jeedom.com/en_US/dev/structure_info_json/#NOMENCLATURE%20CATEGORIES)** |
``display``                  | ,. .                    |
``mobile``                   | . .   |
``changelog`` *              | .                                                                                              |
``documentation`` *          | .
``changelog_beta`` *              | .|
``documentation_beta`` *          | .
``link`` -> ``video``               | .                                                                                 |
``link`` -> ``forum``               | .                                                                  |
``language``                | :````, ``en_US``, ``de_DE``, ``it_IT``,``es_ES``,``pt_PT``            |
``compatibility``            | : .                                                   |
``hasDependency``            | «true» si [](https://doc.jeedom.com/en_US/dev/daemon_plugin#Les%20d%C3%A9pendance), sinon «false» ou absent.                                              |
``hasOwnDeamon``             | «true» si [](https://doc.jeedom.com/en_US/dev/daemon_plugin#Les%20d%C3%A9mons%20%26%20d%C3%A9pendances), sinon «false» ou absent.                                                   |
``maxDependancyInstallTime`` | .                                            |
``specialAttributes`` | Permet aux plugin de demander des [parametre suplémentaire](https://doc.jeedom.com/en_US/dev/structure_info_json#SpecialAttributes) sur [des objets](https://doc.jeedom.com/en_US/dev/structure_info_json# [](https://doc.jeedom.com/en_US/dev/structure_info_json#Attributs%20User) ()                                            |
``issue``                    | )

## Exemple

[](https://github.com/jeedom/plugin-template/blob/master/plugin_info/info.json)

## 

         | .               |
--------------------- | ----------------------- |
         | ``communication``           |
               | ``wellness``                |
               | ``energy``                  |
                 | ``weather``                 |
            | ``monitoring``              |
            | ``multimedia``              |
                | ``nature``                  |
      | ``devicecommunication``     |
          | ``organization``            |
  | ``home automation protocol``|
         | ``programming``             |
   | ``automation protocol``     |
                 | ``health``                  |
              | ``security``                |
           | ``automatisation``          |

## SpecialAttributes

 : .

### Utilisation

:


 : $user->getOptions(‹ plugin:::: ›)
 : $jeeObject->getConfiguration(‹ plugin:::: ›)

* 
* :  ...)

### 

 :

	"specialAttributes" : {
		"object" : {
			"toto" : {"name" : {"" : "" : "input"},
			"toto2" : {"name" : {"" : "" : "number"}
		}
	}


).
.
![Attribut Objet](images/SpecialAttributeObject.png)

### 


	"specialAttributes" : {
		"user" : {
			"toto" : {"name" : {"" : "" : "" : " : "" : "" : "" : ""}]}
		}
	}


)
![Attribut Utilisateur](images/SpecialAttributeUser.png)

### 


	"specialAttributes": {
        "eqLogic": {
            "mqttTranmit": {
                "type": "checkbox",
                "name": {
                    "": ""
                }
            }
        }
    }


). ::mqtt2::::::key`)
