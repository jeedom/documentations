# Archivo de documentación info.json

Integrado desde la versión 3.0 de Jeedom, el archivo ``info.json`` es obligatorio para el correcto funcionamiento de los complementos y su adecuada implementación en Jeedom Market.

El archivo de información.json se guarda en la carpeta ``/plugin_info/`` de tu complemento.

## Lista de variables de archivo ``info.json``

Los campos marcados con * son campos obligatorios.

Campos                   | Valores                                                                                                                   |
------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
``id`` *                     | Identificador único del complemento en Jeedom Market. Debe comenzar con una letra. Sin acentos. No puede contener _                             |
``name`` *                   | Nombre del complemento.                                                                                                            |
``description`` *            | Descripción del complemento, tal como aparecerá en Jeedom Market. Mínimo 80 caracteres. (``<br/>`` para nueva línea.). Tenga en cuenta que esta es una tabla para los diferentes idiomas jeedom posibles (observe bien el ejemplo del complemento de plantilla))                                  |                                                                                     |
``utilization``                    | Información adicional a la documentación sobre el uso del plugin.                                                    |
``licence`` *                | Tipo de licencia.                                                                                                          |
``author`` *                 | Nombre del autor del complemento, tal como se mostrará una vez instalado el complemento, en la información del complemento.         |
``require`` *                | Versión mínima requerida de Jeedom (Core).                                                                                                |
``os``                 | Versión mínima y máxima requerida de Debian. En forma de objeto json, ejemplo : {"min" : 10,"max" : 12.99} (Núcleo 4.4.15 mínimo). Si uno de los dos no está completo, no se comparará con la versión del sistema operativo del usuario. Puede especificar una versión más precisa como 10.5 por ejemplo. Para eliminar la restricción de versión debes volver a publicar en el mercado con un valor vacío "". Tenga en cuenta que para el máximo, es aconsejable poner .99 para incluir todas las versiones menores.                                               |
``category`` *               | Categoría de clasificación de complementos en el mercado jeedom. **Es imperativo respetar la [nomenclatura de la siguiente tabla](https://doc.jeedom.com/es_ES/dev/structure_info_json/#NOMENCLATURE%20CATEGORIES)** |
``display``                  | Si el complemento utiliza un panel dedicado en el escritorio,. Este es el nombre del archivo principal de este panel.                    |
``mobile``                   | Si el complemento utiliza un panel dedicado en la aplicación web Jeedom. Este es el nombre del archivo principal de este panel.   |
``changelog`` *              | Enlace HTML al registro de cambios.                                                                                              |
``documentation`` *          | Enlace HTML a la documentación del complemento.
``changelog_beta`` *              | Enlace HTML al registro de cambios Beta.|
``documentation_beta`` *          | Enlace HTML a la documentación beta del complemento.
``link`` -> ``video``               | Enlace HTML a un vídeo de presentación.                                                                                 |
``link`` -> ``forum``               | Enlace HTML al foro sobre el tema del complemento oficial.                                                                  |
``language``                | Lista de idiomas disponibles para el complemento: ``fr_FR``, ``en_US``, ``de_DE``, ``it_IT``, ``es_ES``, ``pt_PT``            |
``compatibility``            | Compatibilidad de complementos: miniplus, inteligente, estibador, rpi, bricolaje, aplicación móvil, v4.                                                   |
``hasDependency``            | «true» si [el complemento debe instalar dependencias](https://doc.jeedom.com/es_ES/dev/daemon_plugin#Les%20d%C3%A9pendance), sinon «false» ou absent.                                              |
``hasOwnDeamon``             | «true» si [el complemento debe ejecutar demonios](https://doc.jeedom.com/es_ES/dev/daemon_plugin#Les%20d%C3%A9mons%20%26%20d%C3%A9pendances), sinon «false» ou absent.                                                   |
``maxDependancyInstallTime`` | Tiempo máximo permitido para instalar dependencias, expresado en minutos.                                            |
``specialAttributes`` | Permet aux plugin de demander des [parametre suplémentaire](https://doc.jeedom.com/es_ES/dev/structure_info_json#SpecialAttributes) sur [des objets](https://doc.jeedom.com/es_ES/dev/structure_info_json#Atributos%20Objeto) o [usuarios](https://doc.jeedom.com/es_ES/dev/structure_info_json#Attributs%20User) (mire bien el ejemplo del complemento de plantilla) (Ver explicaciones a continuación)                                            |
``issue``                    | URL del rastreador de errores si es externo (si no se completa, recibirá un correo electrónico)

## Exemple

[Archivo plugin-template/plugin_info/info.json](https://github.com/jeedom/plugin-template/blob/master/plugin_info/info.json)

## CATEGORÍAS DE NOMENCLATURA

Aflicción del mercado         | información.json               |
--------------------- | ----------------------- |
Comunicación         | ``communication``           |
Comodidad               | ``wellness``                |
Energía               | ``energy``                  |
Informe meteorológico                 | ``weather``                 |
Escucha            | ``monitoring``              |
Multimedia            | ``multimedia``              |
Naturaleza                | ``nature``                  |
Objetos conectados      | ``devicecommunication``     |
Organización          | ``organization``            |
Pasarela domótica  | ``home automation protocol``|
Programación         | ``programming``             |
Protocolo de domótica   | ``automation protocol``     |
Salud                 | ``health``                  |
Seguridad              | ``security``                |
Automatización           | ``automatisation``          |

## SpecialAttributes

Estos atributos permiten solicitar a los usuarios parámetros adicionales para cada objeto (`objeto` en el sentido de Jeedom : Menú Herramientas / Objetos; normalmente esto representa las habitaciones de nuestra domótica) o para cada usuario.

### Utilisation

En su código, puede recuperar el valor de estos parámetros usando el objeto `Usuario` para un atributo de Usuario, o el objeto `jeeObject` para un atributo de objeto:

```
usuario : $user->getOptions(‹ plugin::Complemento_id::llave ›)
objeto : $jeeObject->getConfiguration(‹ plugin::Complemento_id::llave ›)
```
* ID_plugin es el ID de su complemento
* clef es la clave en su configuración json (en el ejemplo: foo, foo 2 ...)

### Atributos de objeto

La sintaxis es la siguiente para proponer 2 parámetros específicos por objeto :
```
	"specialAttributes" : {
		"object" : {
			"toto" : {"name" : {"fr_FR" : "Plop, soy un atributo especial"},"tipo" : "input"},
			"toto2" : {"name" : {"fr_FR" : "Plop, tengo un número de atributo especial"},"escriba" : "number"}
		}
	}
```

El usuario podrá así definir estos 2 parámetros para cada objeto en el menú de configuración de objetos (menú Herramientas / Objetos).
Aquí un texto libre, y un digital.
![Attribut Objet](images/SpecialAttributeObject.png)

### Atributos de usuario

```
	"specialAttributes" : {
		"user" : {
			"toto" : {"name" : {"fr_FR" : "Plop, soy un atributo especial usuarios"},"tipo" : "seleccionar","valores" : [{"valor" : "1", "nombre" : "valor 1"},{"valor" : "plop", "nombre" : "valor de plop"}]}
		}
	}
```

Aquí, este atributo permite a cada usuario definir un parámetro propio (en el menú Configuración / Preferencias)
![Attribut Utilisateur](images/SpecialAttributeUser.png)

### Atributos de EqLogic

```
	"specialAttributes": {
        "eqLogic": {
            "mqttTranmit": {
                "type": "checkbox",
                "name": {
                    "fr_FR": "Transmitir el equipo en MQTT"
                }
            }
        }
    }
```

Aquí, este atributo permite definir un parámetro para cada equipo jeedom (en la configuración avanzada del equipo). Puedes encontrarlo en la configuración del equipo en `plugin::mqtt2::mqttTranmit` (`complemento::id_plugin::key`)
