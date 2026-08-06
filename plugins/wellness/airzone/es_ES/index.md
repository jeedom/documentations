# Complemento Airzone


# Description

Complemento para gestionar y controlar tus sistemas Airzone


# Prerrequisitos

 - Jeedom v4.4.2
 - Conozca las direcciones IP de sus puertas de enlace


# Installation

Después de descargar el complemento, primero debe activarlo, como cualquier complemento de Jeedom.


# Configuration

Vaya al menú de administración de Complementos / Complementos


Elija el Cron deseado para la actualización de los valores :  5, 10, 15, 30, por hora o por día.

Elija el Tiempo de espera entre solicitudes para cada zona; por defecto 10s si el campo está vacío.

Sauvegardez


# Agregar equipo

Vaya al menú Complementos / Confort / AirzoneJeedom


Haga clic en Agregar puerta de enlace.

![config](../images/airzoneEquipement.png)

Puedes configurar una dirección IP allí.

Después de guardar, puede hacer clic en Iniciar escaneo

IMPORTANTE : Si tiene un área que contiene caracteres especiales, esto puede causar un error SystemOut of Range.



# Complemento de página :

![pluginView](../images/airzoneEqlogics.png)

Puede encontrar en la página del complemento las puertas de enlace en el lado izquierdo, así como sus áreas escaneadas y asociadas en el lado derecho

Ten en cuenta que las zonas Masters tienen un icono amarillo, para diferenciarlas claramente


# Dashboard


Después de crear su equipo, los encontrará en el tablero.

Los iconos de modo cambian según el modo seleccionado: Frío, Caliente, Ventilación, Seco y Parada.

Para beneficiarse de los iconos de colores, recuerde ir a la configuración de su Jeedom (Configuración / Sistema / Configuración / Interfaz) y marque "Iconos de widget de colores"

Solo las zonas maestras tienen el menú desplegable para cambiar el modo en las zonas asociadas configuradas en su sistema

Los iconos de información de punto de ajuste y temperatura cambian de acuerdo con las ventanas de valores : -20 ° C, entre 20 y 25 ° C, más de 25 ° C (y el equivalente si la zona está configurada en Fahrenheit)

Las opciones disponibles en los modos o las velocidades del ventilador se detectan de acuerdo con las posibilidades de su sistema.



Equipo típico :

![config](../images/airzoneWidgets.png)


Equipo de una zona maestra; vemos un comando adicional para activar el mismo modo en todas las zonas asociadas del sistema


