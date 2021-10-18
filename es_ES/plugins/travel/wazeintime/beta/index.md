# Complemento Waze in Time 

Este complemento le permite tener la información del viaje (tráfico tomado en cuenta) a través de Waze. Es posible que este complemento ya no funcione si Waze ya no acepta que interroguemos su sitio

![wazeintime screenshot1](../images/wazeintime_screenshot1.jpg)

# Configuración 

## Configuración del plugin: 

Para usar el complemento, debe descargarlo, instalarlo y activarlo como cualquier complemento de Jeedom.

Después de eso, tendrá que crear su (s) viaje (s) :

Vaya al menú de complementos / organización, encontrará el complemento Duración de Waze :

![configuration1](../images/configuration1.jpg)

Luego, llegará a la página que enumerará su equipo (puede tener varias rutas) y que le permitirá crear algunos

![wazeintime screenshot2](../images/wazeintime_screenshot2.jpg)

Haga clic en el botón Agregar viaje o en el botón + :

![config2](../images/config2.jpg)

Luego llegará a la página de configuración de su viaje:

![wazeintime screenshot3](../images/wazeintime_screenshot3.jpg)

En esta página encontrarás tres secciones :

### Principal

En esta sección encontrará todas las configuraciones de libertad. Es decir, el nombre de su equipo, el objeto con el que desea asociarlo, la categoría, si desea que el equipo esté activo o no, y finalmente si quiere que esté visible en el tablero.

### Configuration

Esta sección es una de las más importantes y le permite establecer el punto inicial y final :

-   Estas informaciones deben ser las latitudes y longitudes de las posiciones
-   Se pueden encontrar utilizando el sitio proporcionado haciendo clic en el enlace de la página (solo ingrese una dirección y haga clic en obtener coordenadas GPS)

### Panel de control

![config3](../images/config3.jpg)

-   Duración 1 : duración del viaje 1
-   Duración 2 : tiempo de viaje con la ruta alternativa
-   Trayecto 1 : Trayecto 1
-   Trayecto 2 : Ruta alternativa
-   Duración trayecto de vuelta 1 : tiempo de regreso con viaje 1
-   Duración trayecto de vuelta 2 : hora de regreso con la ruta alternativa
-   Trayecto de vuelta 1 : Trayecto de vuelta 1
-   Trayecto de vuelta 2 : Viaje de regreso alternativo
-   Refrescar : Actualizar información

Todos estos comandos están disponibles a través de escenarios y a través del tablero

## El widget

![wazeintime screenshot1](../images/wazeintime_screenshot1.jpg)

-   El botón en la parte superior derecha actualiza la información.
-   Toda la información es visible (para viajes, si el viaje es largo, se puede truncar pero la versión completa es visible dejando el mouse sobre ella))

## ¿Cómo se actualizan las noticias?

La información se actualiza una vez cada 30 minutos. Puede actualizarlos a pedido a través del escenario con el comando de actualización, o mediante el guión con flechas dobles
