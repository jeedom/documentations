# Complemento Waze in Time

Este complemento le permite tener la información del viaje (tráfico tomado en cuenta) a través de Waze. Es posible que este complemento ya no funcione si Waze ya no acepta que interroguemos su sitio

![wazeintime screenshot1](../images/wazeintime_screenshot1.jpg)

# Configuration

## Configuración del plugin

Para usar el complemento, debe descargarlo, instalarlo y activarlo como cualquier complemento de Jeedom.

Después de eso, tendrá que crear su (s) viaje (s). Vaya al menú de complementos / organización, encontrará el complemento Waze in Time allí :

![configuration1](../images/configuration1.jpg)

Luego llegarás a la página que enumerará tu equipo (puedes tener varias Rutas) y que te permitirá crearlo haciendo clic en el botón "Agregar"":

![wazeintime screenshot2](../images/eqlogic_list.png)

Luego llegará a la página de configuración de su viaje:

![wazeintime screenshot3](../images/eqlogic_config.png)

En esta página encontrarás tres secciones :

### Configuración general

En esta sección encontrará todas las configuraciones de libertad. Es decir, el nombre de su equipo, el objeto al que desea asociarlo, la categoría, si desea que el equipo esté activo o no, y si desea que esté visible en el tablero.

Finalmente, tienes que configurar, si lo deseas, la actualización automática. Si no configura nada, la información del viaje no se actualizará automáticamente.

### Parámetros de viaje

Esta sección es una de las más importantes y le permite establecer el punto inicial y final.

- Estas informaciones deben ser las latitudes y longitudes de las posiciones
- Se pueden encontrar utilizando el sitio proporcionado haciendo clic en el enlace de la página (solo ingrese una dirección y haga clic en obtener coordenadas GPS)

Es posible proporcionarlos por varios medios:

- manualmente, debe codificar directamente la latitud y la longitud
- a través de un comando de información de otro complemento de Jeedom, debe seleccionar el comando que debe devolver la información en el formato 'latitud, longitud'
- a través de la configuración de Jeedom (consulte el menú de configuración de Jeedom)
- seleccionando directamente un comando del complemento geoloc o geoloc_ios si existen estos complementos (esta opción ya no debe usarse para equipos nuevos, prefiera la opción de selección de comando explicada anteriormente)

También es posible seleccionar las suscripciones que se deben activar al calcular el viaje. Debes poner una lista de valores separados por coma o _ * _ para activar todo.

### Configuraciones de pantalla

Esta configuración simplemente le permite ocultar los viajes seleccionados en el widget en el tablero, aún se actualizarán cuando se actualice el equipo.

### Panel de control

![config3](../images/cmd_list.png)

- Duración 1, 2 y 3: duración para ir con la ruta 1, 2 y 3
- Ruta 1, 2 y 3: nombre de la ruta 1, 2 y 3 (proporcionado por Waze)
- Duración de la devolución 1, 2 y 3 : duración del regreso con ruta 1, 2 y 3
- Viaje de regreso 1, 2 y 3 : nombre del viaje de regreso 1, 2 y 3 (proporcionado por Waze)
- Refrescar : Actualizar información

Todos estos comandos están disponibles a través de escenarios y a través del tablero

# El widget

![wazeintime screenshot1](../images/wazeintime_screenshot1.jpg)

- El botón en la parte superior derecha actualiza la información.
- Toda la información es visible (para viajes, si el viaje es largo, se puede truncar pero la versión completa es visible dejando el mouse sobre ella))

# ¿Cómo se actualizan las rutas??

La información se actualiza de acuerdo con la configuración de actualización automática del equipo. Si no se configura nada, los viajes nunca se actualizarán automáticamente.
Puede actualizarlos a pedido a través del escenario con el comando de actualización, o mediante el tablero con las flechas dobles.
