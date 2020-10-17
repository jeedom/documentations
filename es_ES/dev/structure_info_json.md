**Archivo de documentación info.json**

Integrado desde la versión 3.0 de Jeedom, el archivo **info.json** es obligatorio para el correcto funcionamiento de los complementos y su correcta implementación en Jeedom Market.

El archivo de información.json se guarda en la carpeta / plugin_info / de su complemento.

Lista de variables en el archivo info.json

Los campos marcados con * son campos obligatorios.

Campos                   | Valores                                                                                                                   |
------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
carné de identidad *                     | Identificador único del complemento en Jeedom Market. Debe comenzar con una letra. Sin acentos.                             |
nombre *                   | Nombre del complemento.                                                                                                            |
descripción *            | Descripción del complemento, ya que se mostrará en Jeedom Market Mínimo 80 caracteres. (`<br/>`para volver a la línea.)                                  |                                                                                     |
utilizar                    | Información adicional a la documentación sobre el uso del complemento.                                                    |
Licencia *                | Tipo de licencia.                                                                                                          |
autor *                 | Nombre del autor del complemento, tal como se mostrará después de instalar el complemento, en la información del complemento.         |
exigir *                | Versión mínima de Jeedom.                                                                                                |
categoría *               | Categoría de clasificación del complemento en el mercado Jeedom. **Observe la nomenclatura de la siguiente tabla** |
monitor                  | si el complemento usa un panel dedicado en el escritorio, este es el nombre del archivo principal de este panel.                    |
móvil                   | Si el complemento utiliza un panel dedicado en la aplicación web Jeedom, este es el nombre del archivo principal de este panel.   |
registro de cambios *              | Enlace html al registro de cambios.                                                                                              |
documentación *          | Enlace html a la documentación del complemento.                                                                                |
enlace -> video               | Enlace html a un video de presentación.                                                                                 |
enlace -> foro               | Enlace html al foro sobre el tema oficial del complemento.                                                                  |
idiomas                | Lista de idiomas disponibles para el complemento:francés, inglés, alemán, italiano, español, ruso, indonesio            |
compatibilidad            | Compatibilidad de complementos: miniplus, inteligente, ventana acoplable, rpi, bricolaje, mobileapp.                                                   |
hasDependency            | «true» si le plugin doit installer des dépendances, sinon «false» ou absent.                                              |
hasOwnDeamon             | «true» si le plugin doit exécuter des deamons, sinon «false» ou absent.                                                   |
maxDependancyInstallTime | Tiempo máximo permitido para la instalación de dependencias, expresado en minutos.                                            |
problema                    | URL del rastreador de errores si es externo (si no se completa, recibirá un correo electrónico)

**Ejemplo** :

[Archivo plugin-template / plugin_info / info.json](https://github.com/jeedom/plugin-template/blob/master/plugin_info/info.json)

**CATEGORÍAS DE NOMENCLATURA**

Mercado Jeedom         | info.json               |
--------------------- | ----------------------- |
Comunicación         | comunicación           |
Comodidad               | bienestar                |
Energía               | energía                  |
Pronóstico del tiempo                 | clima                 |
Vigilancia            | vigilancia              |
Multimedia            | multimedia              |
Naturaleza                | naturaleza                  |
Objetos conectados      | dispositivo de comunicacion     |
Organización          | organización            |
Pasarela domótica  | protocolo de domótica|
Programación         | programación             |
Protocolo de domótica   | protocolo de automatización     |
Salud                 | salud                  |
Seguridad              | seguridad                |
Automatismo           | automatizando          |
