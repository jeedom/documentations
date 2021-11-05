# Plugin Airzone


# Descripción:

Plugin para gestionar sus sistemas Airzone


# Requisitos:

 - Jeedom v4.1.22
 - Debe conocer la dirección IP de su servidor AirzoneWeb


# Instalación

Después de descargar el plugin, primero debe activarlo, como cualquier otro plugin de Jeedom.


# Configuración:

Vaya al menú Plugins/Gestión de plugins

![config](./images/airzoneConfig.png)

Haga clic en el plugin, y configúrelo indicando la dirección IP de su AirzoneWebServer, así como el puerto (por defecto, los sistemas Airzone usan el puerto 3000)


# Agregar equipo

Vaya al menú Plugins/Confort/AirzoneJeedom


Haga clic en Añadir.

![config](./images/airzoneEquip.png)

Las zonas disponibles en su sistema aparecerán en el menú desplegable. Elija una zona para el equipo que está creando.

Es posible configurar la temperatura en Fahrenheit si tiene un sistema americano.

El menú de visualización de la temperatura se utiliza para elegir la unidad de temperatura que se muestra en el tablero.

Recuerde que debe activar y hacer visible su equipo, y asignarle un objeto padre para encontrarlo en el tablero.


# Tablero


Una vez que haya creado sus distintos equipos Airzone, éstos aparecerán en el tablero.

Los iconos correspondientes al modo cambian en función del modo seleccionado: Frío, Calor, Ventilación.

Los iconos de información relativos a la consigna y la temperatura cambian en función de las horquillas de valores: -20°C, entre 20 y 25°C, más de 25°C.

Las opciones disponibles en los modos o velocidades de los ventiladores, se detectan automáticamente en función de las posibilidades de su sistema.



Ejemplo de equipo típico :

![config](./images/airzonedash1.png)



Ejemplo de equipo de una zona maestra (“master zone”); aparece un comando adicional para activar el mismo modo en todos los equipos del sistema


![config](./images/airzonedashmaster.png)







