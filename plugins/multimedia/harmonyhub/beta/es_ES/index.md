# Complemento Harmony Hub

Este complemento le permite controlar y recuperar todos los dispositivos asociados con uno o más Harmony Hub.

Después de haber recuperado toda la información relacionada con estos dispositivos, el complemento podrá crear automáticamente todos los comandos asociados para un control total desde Jeedom.

# Configuration

Como cualquier complemento de Jeedom, el complemento **Harmony Hub** debe activarse después de la instalación.

## Configuración del complemento

El complemento usa dependencias que deben instalarse primero haciendo clic en el botón **Reanimar**.

Una vez instaladas las dependencias, puede introducir la dirección IP en la que se puede acceder a Harmony Hub.

>**TRUCO**
>
>El complemento puede interactuar con varios concentradores al mismo tiempo. Para ello, debe indicar la dirección IP de cada hub separada por el símbolo `|''.

Guarde la configuración e inicie el demonio.

## Configuración del equipo

Para acceder a los diferentes equipos, vaya al menú **Complementos → Multimedia → Harmony Hub**.

Si la configuración del plugin es correcta, todos tus equipos habrán sido creados automáticamente con sus comandos.

Para cada dispositivo encontramos los parámetros generales habituales, así como 1 menú desplegable que permite elegir el icono del dispositivo. Esta configuración es opcional y no influye en el comportamiento del complemento.

# Información importante

Comprueba si necesitas **habilitar la opción de desarrollador** en la aplicación Harmony.

Ver este enlace de Logitech :
<https://community.logitech.com/s/question/0D55A00008OsX3CSAV/update-to-accessing-harmony-hubs-local-api-via-xmpp>
