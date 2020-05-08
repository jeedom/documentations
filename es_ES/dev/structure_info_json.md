**Documentación del archivo Info.json**

Integrado desde la versión 3.0 de Jeedom, el archivo **info.json** es obligatorio para el correcto funcionamiento de los complementos y su despliegue adecuado en el mercado Jeedom.

El archivo de información.json se guarda en la carpeta / plugin_info / de su complemento.

Lista de variables en el archivo info.json

Los campos marcados con * son campos obligatorios.

Campos                   | Valores                                                                                                                   |
------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
id *                     | Identificador único del complemento en el mercado Jeedom. Debe comenzar con una carta. Sin acentos.                             |
nombre *                   | Nombre del complemento.                                                                                                            |
descripción *            | Descripción del complemento, tal como aparecerá en el Mercado Jeedom Mínimo 80 caracteres. (`<br/>`para el salto de línea.)                                  |                                                                                     |
uso                    | Información adicional a la documentación sobre el uso del complemento..                                                    |
licencia *                | Tipo de licencia.                                                                                                          |
autor *                 | Nombre del autor del complemento, tal como se mostrará una vez que el complemento esté instalado, en la información del complemento.         |
exigir *                | Versión mínima de Jeedom.                                                                                                |
categoría *               | Categoría de clasificación del complemento en el mercado Jeedom. **Es imprescindible respetar la nomenclatura de la tabla a continuación.** |
exhibir                  | si el complemento usa un panel dedicado en el escritorio, es el nombre del archivo principal de este panel.                    |
móvil                   | Si el complemento utiliza un panel dedicado en la aplicación web Jeedom, este es el nombre del archivo principal para este panel.   |
registro de cambios *              | Enlace HTML al registro de cambios.                                                                                              |
documentación *          | Enlace HTML a la documentación del complemento.                                                                                |
enlace -> video               | Enlace HTML a una presentación de video.                                                                                 |
enlace -> foro               | Enlace HTML al foro sobre el tema oficial del complemento.                                                                  |
idiomas                | Lista de idiomas disponibles para el complemento:francés, inglés, alemán, italiano, español, ruso, indonesio            |
compatibilidad            | Compatibilidad de complementos: miniplus, inteligente, acoplador, rpi, bricolaje, mobileapp.                                                   |
hasDependency            | «true» si le plugin doit installer des dépendances, sinon «false» ou absent.                                              |
hasOwnDeamon             | «true» si le plugin doit exécuter des deamons, sinon «false» ou absent.                                                   |
maxDependancyInstallTime | Tiempo máximo permitido para la instalación de dependencias, expresado en minutos..                                            |
problema                    | URL al rastreador de errores si es externo (si no está lleno, recibirá un correo electrónico)

**Exemple** :

[Plugin-template file / plugin_info / info.json](https://github.com/jeedom/plugin-template/blob/master/plugin_info/info.json)




**CATEGORÍA NOMENCLATURA**

Mercado de la libertad         | informacion.json               |
--------------------- | ----------------------- |
Comunicación         | comunicacion           |
Comodidad               | bienestar                |
Energía               | energía                  |
Pronóstico del tiempo                 | clima                 |
Monitoreo            | monitoreo              |
Multimedia            | multimedia              |
La naturaleza                | naturaleza                  |
Objetos conectados      | dispositivo de comunicación     |
Organizacion          | organización            |
Pasarela domótica  | protocolo de domótica|
Programacion         | programacion             |
Protocolo de domótica   | protocolo de automatización     |
Salud                 | salud                  |
Seguridad              | seguridad                |
Automatización           | automatización          |


   


  


  


  

    


   




