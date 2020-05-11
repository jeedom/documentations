**Documentación del archivo Info.json**

Integrado desde la versión 3.0 de Jeedom, el archivo **info.json** es obligatorio para el correcto funcionamiento de los complementos y su despliegue adecuado en el mercado Jeedom.

El archivo de información.json se guarda en la carpeta / plugin_info / de su complemento.

Lista de variables en el archivo info.json

Los campos marcados con * son campos obligatorios.

Campos                   | Valores                                                                                                                   |
------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
Identificación *                     | Identificador único del complemento en el mercado de Jeedom. Debe comenzar con una carta. Sin acentos.                             |
nombre *                   | Nombre del complemento.                                                                                                            |
Descripción *            | Descripción del complemento, tal como aparecerá en el Mercado Jeedom Mínimo 80 caracteres. (`<br/>`para el salto de línea.)                                  |                                                                                     |
uso                    | Información adicional a la documentación sobre el uso del complemento.                                                    |
Licencia *                | Tipo de licencia.                                                                                                          |
autor *                 | Nombre del autor del complemento, tal como se mostrará una vez que el complemento esté instalado, en la información del complemento.         |
exigir *                | Versión mínima de Jeedom.                                                                                                |
categoría *               | Categoría de clasificación del complemento en el mercado Jeedom. **Es esencial respetar la nomenclatura de la tabla a continuación** |
visualización                  | si el complemento utiliza un panel dedicado en el escritorio, es el nombre del archivo principal de este panel.                    |
Móvil                   | Si el complemento utiliza un panel dedicado en la aplicación web Jeedom, este es el nombre del archivo principal para este panel.   |
Cambios *              | Enlace HTML al registro de cambios.                                                                                              |
Documentación *          | Enlace HTML a la documentación del complemento.                                                                                |
enlace -> video               | Enlace HTML a una presentación de video.                                                                                 |
enlace -> foro               | Enlace HTML al foro sobre el tema oficial del complemento.                                                                  |
idiomas                | Lista de idiomas disponibles para el complemento:francés, inglés, alemán, italiano, español, ruso, indonesio            |
compatibilidad            | Compatibilidad de complementos: miniplus, inteligente, acoplador, rpi, bricolaje, mobileapp.                                                   |
hasDependency            | «true» si le plugin doit installer des dépendances, sinon «false» ou absent.                                              |
hasOwnDeamon             | «true» si le plugin doit exécuter des deamons, sinon «false» ou absent.                                                   |
maxDependancyInstallTime | Tiempo máximo permitido para la instalación de dependencias, expresado en minutos.                                            |
problema                    | URL al rastreador de errores si es externo (si no está lleno, recibirá un correo electrónico)

**Ejemplo** :

[Plugin-template file / plugin_info / info.json](https://github.com/jeedom/plugin-template/blob/master/plugin_Información/info.json)




**CATEGORÍA NOMENCLATURA**

Mercado de la libertad         | info.json               |
--------------------- | ----------------------- |
Comunicación         | Comunicación           |
Confort               | bienestar                |
Energía               | energía                  |
Tiempo                 | clima                 |
Monitoreo            | Monitoreo              |
Multimedia            | Multimedia              |
Naturaleza                | Naturaleza                  |
Objetos conectados      | dispositivo de comunicación     |
Organización          | organización            |
Pasarela domótica  | protocolo de domótica|
Programación         | programación             |
Protocolo de domótica   | protocolo de automatización     |
Salud                 | salud                  |
Seguridad              | seguridad                |
Automatismo           | automatización          |


   


  


  


  

    


   




