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

Luego haga clic en el botón **Archivos de configuración** para generar *(o actualizar)* los archivos que contienen toda la información sobre los dispositivos asociados con cada Harmony Hub.

## Configuración del equipo

Para acceder a los diferentes equipos, vaya al menú **Complementos → Multimedia → Harmony Hub**.

>**INFORMACIÓN**
>
>El botón + Agregar le permite agregar un nuevo dispositivo Harmony Hub.

Para cada dispositivo, encontramos los parámetros generales habituales, así como 2 menús desplegables que permiten, a uno, seleccionar el hub afectado por el dispositivo y al otro elegir el tipo de dispositivo entre :

- **Actividades** : Equipo que reúne todas sus actividades, así como
    Apagado general e información sobre la actividad actual.

- **Uno de sus dispositivos** : Equipamiento que reúne a todos
    comandos para un dispositivo dado.

Una vez seleccionado, simplemente haga clic en el botón **Ahorrar** para generar automáticamente la lista de comandos correspondientes :    

![harmonyhub screenshot4](../images/harmonyhub_commands.jpg)

# Commandes

Los comandos no son visibles por defecto, son
sin embargo, todos están disponibles a través de escenarios, virtuales, etc

Si desea mostrarlos en su panel, simplemente reorganícelos en
arrastrar y soltar y marcar la casilla **Monitor**. A continuación, puede jugar con nuevas líneas, widgets o iconos específicos
propuesto, crea un pseduo de control remoto :

![harmonyhub screenshot5](../images/harmonyhub_screenshot5.jpg)
![harmonyhub screenshot6](../images/harmonyhub_screenshot6.jpg)

# Información importante

Desde el 19-02-2019 es necesario **activar una opción de desarrollador** en la aplicación Harmony.

Ver este enlace de Logitech :
<https://community.logitech.com/s/question/0D55A00008OsX3CSAV/update-to-accessing-harmony-hubs-local-api-via-xmpp>
