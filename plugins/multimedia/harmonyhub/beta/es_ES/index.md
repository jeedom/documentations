# Complemento Harmony Hub

Este complemento permite controlar y detectar todos los dispositivos asociados a uno o varios Harmony Hub.

Una vez recopilada toda la información relativa a estos dispositivos, el complemento podrá crear automáticamente todos los comandos asociados para un control total desde Jeedom.

# Configuración

Al igual que cualquier plugin de Jeedom, el plugin **Harmony Hub** debe activarse tras su instalación.

## Configuración del complemento

El complemento utiliza dependencias que habrá que instalar primero haciendo clic en el botón **Reiniciar**.

Una vez instaladas las dependencias, puedes introducir la dirección IP en la que se puede acceder al Harmony Hub.

>**CONSEJO**
>
>El complemento es capaz de comunicarse con varios hubs al mismo tiempo. Para ello, hay que indicar la dirección IP de cada hub separada por el símbolo `|`.

Guarda la configuración e inicia el demonio.

## Configuración del equipo

Para acceder a los distintos dispositivos, ve al menú **Plugins → Multimedia → Harmony Hub**.

Si la configuración del complemento es correcta, todos tus dispositivos se habrán creado automáticamente con sus comandos.

Para cada dispositivo, encontramos los parámetros generales habituales, así como un menú desplegable que permite elegir el icono del dispositivo. Esta configuración es opcional y no influye en absoluto en el funcionamiento del complemento.

# Información importante

Comprueba si debes **activar la opción de desarrollador** en la aplicación Harmony.

Echa un vistazo a este enlace de Logitech:
<https://community.logitech.com/s/question/0D55A00008OsX3CSAV/update-to-accessing-harmony-hubs-local-api-via-xmpp>
