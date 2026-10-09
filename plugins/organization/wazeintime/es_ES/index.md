# Complemento Waze in Time

Este complemento permite obtener información sobre el trayecto (teniendo en cuenta el tráfico) a través de Waze. Es posible que este complemento deje de funcionar si Waze deja de permitir consultas a su sitio web.

![wazeintime captura de pantalla 1](../images/wazeintime_screenshot1.jpg)

# Configuración

## Configuración del plugin

Para utilizar el complemento, debes descargarlo, instalarlo y activarlo como cualquier otro complemento de Jeedom.

A continuación, tendrás que crear tu ruta o tus rutas. Ve al menú «Plugins/Organización», donde encontrarás el plugin «Waze in Time»:

![configuración1](../images/configuration1.jpg)

A continuación, accederás a la página en la que aparecerá una lista de tus dispositivos (puedes tener varias rutas) y en la que podrás crear nuevas rutas haciendo clic en el botón «Añadir»:

![Captura de pantalla de Wazeintime 2](../images/eqlogic_list.png)

A continuación, accederás a la página de configuración de tu recorrido:

![Captura de pantalla de Wazeintime 3](../images/eqlogic_config.png)

En esta página encontrarás tres secciones:

### Configuración general

En esta sección encontrarás todas las configuraciones de Jeedom. Es decir, el nombre de tu dispositivo, el objeto al que quieres asociarlo, la categoría, si quieres que el dispositivo esté activo o no, y si quieres que sea visible en el panel de control.

Por último, solo tienes que configurar, si lo deseas, la actualización automática. Si no configuras nada, la información sobre los trayectos no se actualizará automáticamente.

### Parámetros de viaje

Esta sección es una de las más importantes, ya que permite configurar el punto de partida y el de llegada.

- Estas informaciones deben ser las latitudes y longitudes de las posiciones
- Se pueden encontrar utilizando la página web indicada haciendo clic en el enlace de la página (solo tienes que introducir una dirección y hacer clic en «Obtener coordenadas GPS»).

Se pueden suministrar de varias formas:

- manualmente, debe codificar directamente la latitud y la longitud
- a través de un comando de información de otro plugin de Jeedom; en ese caso, debes seleccionar el comando que debe devolver la información en el formato «latitud, longitud»
- a través de la configuración de Jeedom (véase el menú de configuración de Jeedom)
- seleccionando directamente un comando del complemento «geoloc» o «geoloc_ios» si dichos complementos existen (esta opción ya no debería utilizarse para los nuevos dispositivos; es preferible utilizar la opción de selección de comando explicada anteriormente)

También puedes configurar las opciones de cálculo de la ruta:

- **Tipo de vehículo**: elige «Particular» (valor por defecto), «Taxi» o «Moto».
- **Evitar carreteras de peaje**: cuando esta opción está marcada, Waze intenta calcular una ruta sin peajes.
- **Evitar las carreteras que requieran una viñeta**: solicita una ruta que evite las carreteras sujetas a una viñeta o a una suscripción.
- **Evitar los transbordadores**: solicita una ruta sin travesías en transbordador.

Estas opciones se aplican al cálculo de los trayectos de ida y vuelta.

### Configuraciones de pantalla

Esta configuración permite simplemente ocultar los trayectos seleccionados en el widget del panel de control; no obstante, estos se actualizarán cuando se actualice el dispositivo.

# El widget

![wazeintime captura de pantalla 1](../images/wazeintime_screenshot1.jpg)

- El botón de la esquina superior derecha permite actualizar la información.
- Toda la información está visible (en el caso de los trayectos, si el trayecto es largo, puede aparecer recortado, pero la versión completa se puede ver al pasar el ratón por encima).

# ¿Cómo se actualizan los trayectos?

La información se actualiza según la configuración de actualización automática del equipo. Si no se ha configurado nada, los trayectos nunca se actualizarán automáticamente.
Puedes actualizarlas cuando quieras mediante un escenario con el comando «actualizar», o a través del panel de control con las flechas dobles.
