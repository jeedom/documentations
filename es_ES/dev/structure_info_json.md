**Documentación archivo info.json**

Integrado desde la versión 3.0 de Jeedom, el archivo ``info.json`` es obligatorio para el correcto funcionamiento de los complementos y su implementación adecuada en Jeedom Market.

El archivo de información.json se guarda en la carpeta ``/plugin_info/`` de tu complemento.

Lista de variables de archivo ``info.json``

Los campos marcados con * son campos obligatorios.

Campos                   | Valores                                                                                                                   |
------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
``id`` *                     | Identificador único del complemento en Jeedom Market. Debe comenzar con una letra. Sin acentos.                             |
``name`` *                   | Nombre del complemento.                                                                                                            |
``description`` *            | Descripción del complemento, tal como aparecerá en Jeedom Market Mínimo 80 caracteres. (``<br/>`` para nueva línea.). Atención, es una tabla para los diferentes idiomas de jeedom posibles (mire el ejemplo del complemento de plantilla)                                  |                                                                                     |
``utilization``                    | Información adicional a la documentación sobre el uso del plugin.                                                    |
``licence`` *                | Tipo de licencia.                                                                                                          |
``author`` *                 | Nombre del autor del complemento, como se mostrará una vez que se instale el complemento, en la información del complemento.         |
``require`` *                | Versión mínima de Jeedom.                                                                                                |
``category`` *               | Categoría de clasificación del complemento en Jeedom Market. **Respete estrictamente la nomenclatura de la siguiente tabla** |
``display``                  | si el complemento usa un panel dedicado en el escritorio, este es el nombre del archivo principal de este panel.                    |
``mobile``                   | Si el complemento usa un panel dedicado en la aplicación web Jeedom, este es el nombre del archivo principal de este panel.   |
``changelog`` *              | Enlace html al registro de cambios.                                                                                              |
``documentation`` *          | Enlace html a la documentación del complemento.                                                                                |
``link`` -> ``video``               | Enlace html a un video de presentación.                                                                                 |
``link`` -> ``forum``               | Enlace html al foro sobre el tema oficial del complemento.                                                                  |
``languages``                | Lista de idiomas disponibles para el plugin: ``fr_FR``, ``en_US``, ``de_DE``, ``it_IT``, ``sp_SP`` , ``ru_RU``, ``pt_PT``            |
``compatibility``            | Compatibilidad de complementos: miniplus, inteligente, ventana acoplable, rpi, bricolaje, aplicación móvil, v4.                                                   |
``hasDependency``            | «true» si le plugin doit installer des dépendances, sinon «false» ou absent.                                              |
``hasOwnDeamon``             | «true» si le plugin doit exécuter des deamons, sinon «false» ou absent.                                                   |
``maxDependancyInstallTime`` | Tiempo máximo permitido para la instalación de dependencias, expresado en minutos.                                            |
``specialAttributes`` | Permite que los complementos soliciten parámetros adicionales sobre objetos o usuarios (observe bien el ejemplo del complemento de plantilla)                                            |
``issue``                    | URL del rastreador de errores si es externo (si no se completa, recibirá un correo electrónico)

**Ejemplo** :

[Archivo plugin-template/plugin_info/info.json](https://github.com/jeedom/plugin-template/blob/master/plugin_info/info.json)

**CATEGORÍAS DE NOMENCLATURA**

Jeedom del mercado         | información.json               |
--------------------- | ----------------------- |
Comunicación         | ``communication``           |
Comodidad               | ``wellness``                |
Energía               | ``energy``                  |
Reporte del clima                 | ``weather``                 |
Vigilancia            | ``monitoring``              |
Multimedia            | ``multimedia``              |
Naturaleza                | ``nature``                  |
Objetos conectados      | ``devicecommunication``     |
Organización          | ``organization``            |
Pasarela domótica  | ``home automation protocol``|
Programación         | ``programming``             |
Protocolo domótico   | ``automation protocol``     |
Salud                 | ``health``                  |
Seguridad              | ``security``                |
Automatización           | ``automatisation``          |
