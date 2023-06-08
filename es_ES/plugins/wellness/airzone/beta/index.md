# Complemento Airzone


# Description

Complemento para administrar sus sistemas AirzoneWeb


# Prerrequisitos

 - Jeedom v4.1.22
 - Descubra la dirección IP de su AirzoneWeb Server


# Installation

Después de descargar el complemento, primero debe activarlo, como cualquier complemento de Jeedom.


# Configuration

Vaya al menú de administración de Complementos / Complementos

![config](../images/airzoneConfig.png)

Haga clic en su complemento y configúrelo con la dirección IP de su AirzoneWebServer y el puerto (de forma predeterminada, los sistemas Airzone tienen un puerto configurado en 3000)
El número de sistemas se detecta automáticamente cuando se agrega un nuevo equipo.

Elija el Cron deseado para la actualización de los valores :  5, 10, 15, 30, por hora o por día.

Elija el Tiempo de espera entre solicitudes para cada zona; por defecto 10s si el campo está vacío.

Al hacer clic en el botón Agregar DriverName, puede modificar el nombre del controlador en su sistema Airzone.

Sauvegardez


# Agregar equipo

Vaya al menú Complementos / Confort / AirzoneJeedom


Haga clic en Agregar.

![config](../images/airzoneEquip.png)

Las zonas disponibles en su sistema estarán disponibles en el menú desplegable.
Elija una zona para un equipo


Recuerde Activar y hacer Visible su equipo, y asígnele un padre para encontrarlo en su tablero.

IMPORTANTE : Si tiene un área que contiene caracteres especiales, esto puede causar un error SystemOut of Range.


# Escaneo de zona

Cuando se crea y activa su equipo, puede hacer clic en Scan Zones, en la parte superior del equipo
Esto enviará una solicitud al servidor web para recuperar toda la información de su instalación

La página se actualizará y aparecerá un menú de selección para elegir la Zona asociada con este equipo



# Dashboard


Después de crear su equipo, los encontrará en el tablero.

Los iconos de modo cambian según el modo seleccionado: Frío, Caliente, Ventilación, Seco y Parada.

Para beneficiarse de los iconos de colores, recuerde ir a la configuración de su Jeedom (Configuración / Sistema / Configuración / Interfaz) y marque "Iconos de widget de colores"

Solo las zonas maestras tienen el menú desplegable para cambiar el modo en las zonas asociadas configuradas en su sistema

Los iconos de información de punto de ajuste y temperatura cambian de acuerdo con las ventanas de valores : -20 ° C, entre 20 y 25 ° C, más de 25 ° C (y el equivalente si la zona está configurada en Fahrenheit)

Las opciones disponibles en los modos o las velocidades del ventilador se detectan de acuerdo con las posibilidades de su sistema.



Equipo típico :

![config](../images/airzoneNoMaster.png)


Equipo de una zona maestra; vemos un comando adicional para activar el mismo modo en todas las zonas asociadas del sistema


![config](../images/airzoneMaster.png)
