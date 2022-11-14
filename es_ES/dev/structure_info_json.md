**Documentación del archivo Info.json**

Integrado desde la versión 3.0 de Jeedom, el archivo ``info.json`` es obligatorio para el correcto funcionamiento de los complementos y su despliegue adecuado en el mercado Jeedom.

El archivo de información.json se guarda en la carpeta ``/plugin_info/`` de tu complemento.

Lista de variables de archivo ``info.json``

Los campos marcados con * son campos obligatorios.

Campos                   | Valores                                                                                                                   |
------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
``id`` *                     | Identificador único del complemento en el mercado de Jeedom. Debe comenzar con una carta. Sin acentos.                             |
``name`` *                   | Nombre del complemento.                                                                                                            |
``description`` *            | Descripción del complemento, tal como aparecerá en Jeedom Market. Mínimo 80 caracteres. (``<br/>`` para la nueva línea.). Atención, es una tabla para los diferentes idiomas de posible jeedom (mire el ejemplo del complemento de plantilla)                                  |                                                                                     |
``utilization``                    | Información adicional a la documentación sobre el uso del complemento.                                                    |
``licence`` *                | Tipo de licencia.                                                                                                          |
``author`` *                 | Nombre del autor del complemento, tal como se mostrará una vez que el complemento esté instalado, en la información del complemento.         |
``require`` *                | Versión mínima requerida de Jeedom (Core).                                                                                                |
``category`` *               | Categoría de clasificación del complemento en el mercado Jeedom. **Es esencial respetar la nomenclatura de la tabla a continuación** |
``display``                  | Si el complemento usa un panel dedicado en el escritorio,. Este es el nombre del archivo principal para este panel.                    |
``mobile``                   | Si el complemento usa un panel dedicado en la aplicación web Jeedom. Este es el nombre del archivo principal para este panel.   |
``changelog`` *              | Enlace HTML al registro de cambios.                                                                                              |
``documentation`` *          | Enlace HTML a la documentación del complemento.
``changelog_beta`` *              | Lien Html vers le Changelog Beta.|
``documentation_beta`` *          | Lien Html vers la documentation beta du plugin.
``link`` -> ``video``               | Enlace HTML a una presentación de video.                                                                                 |
``link`` -> ``forum``               | Enlace HTML al foro sobre el tema oficial del complemento.                                                                  |
``languages``                | Lista de idiomas disponibles para el complemento: ``fr_FR``, ``en_US``, ``de_DE``, ``it_IT``, ``sp_SP``, ``pt_PT``            |
``compatibility``            | Compatibilidad de complementos: miniplus, inteligente, ventana acoplable, rpi, bricolaje, mobileapp, v4.                                                   |
``hasDependency``            | «true» si le plugin doit installer des dépendances, sinon «false» ou absent.                                              |
``hasOwnDeamon``             | «true» si le plugin doit exécuter des deamons, sinon «false» ou absent.                                                   |
``maxDependancyInstallTime`` | Tiempo máximo permitido para la instalación de dependencias, expresado en minutos.                                            |
``specialAttributes`` | Permite que los complementos soliciten parámetros adicionales en objetos o usuarios (mire el ejemplo de la plantilla de complemento)                                            |
``issue``                    | URL al rastreador de errores si es externo (si no está lleno, recibirá un correo electrónico)

**Ejemplo** :

[Plugin-template file / plugin_info / info.json](https://github.com/jeedom/plugin-template/blob/master/plugin_info/info.json)

**CATEGORÍA NOMENCLATURA**

Mercado de la libertad         | Información.JSON               |
--------------------- | ----------------------- |
Comunicación         | ``communication``           |
Confort               | ``wellness``                |
Energía               | ``energy``                  |
Tiempo                 | ``weather``                 |
Monitoreo            | ``monitoring``              |
Multimedia            | ``multimedia``              |
Naturaleza                | ``nature``                  |
Objetos conectados      | ``devicecommunication``     |
Organización          | ``organization``            |
Pasarela domótica  | ``home automation protocol``|
Programación         | ``programming``             |
Protocolo de domótica   | ``automation protocol``     |
Salud                 | ``health``                  |
Seguridad              | ``security``                |
Automatismo           | ``automatisation``          |
