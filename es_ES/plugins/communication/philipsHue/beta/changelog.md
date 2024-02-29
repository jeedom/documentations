# Registro de cambios Philips Hue

# Complemento de registro de cambios Philips Hue

>**Importante**
>
>Como recordatorio si no hay información sobre la actualización, significa que solo se refiere a la actualización de documentación, traducción o texto

# 28/02/2024

- Mejor manejo de casos en los que dos escenas tienen el mismo nombre
- Se agregó una imagen faltante para los módulos

# 10/02/2024

- Correcciones de errores

# 07/02/2024

- Se corrigió un error que cambiaba la configuración de controles para habitaciones, grupos de lámparas y zonas durante la sincronización

# 25/01/2024

- Gestión de transición mejorada

# 24/01/2024

- Se corrigió un error que en ciertos casos podía causar que ocurrieran eventos duplicados.

# 19/01/2024

- Solución alternativa para corregir el error de brillo al activar Hue apiv2

# 17/01/2024

- Reanudación del brillo anterior durante un encendido
- Se agregaron transiciones a zonas, habitaciones y luces agrupadas
- Revisión completa de la creación de pedidos : no es necesario tener una configuración para que tu lámpara tenga los controles correctos, todo viene del puente
- Comando de alerta agregado
- Importante : para aquellos que tienen sockets es posible que tengan un error de sincronización, por lo tanto deben eliminar el comando de estado en los sockets y reiniciar la sincronización

# 16/01/2024

- Se agregaron ilustraciones de productos HUE (LTV001, LTA011, LTA009, 5047431P6, 929003479601))

# 15/01/2024

- Gestión de transición mejorada
- LTC002 (techo de ambiente Hue)

# 01/10/2024

- Soporte para escenas en zonas

# 08/01/2024

- Reescritura completa del complemento para usar la api hue 2.0
- Requiere resincronización para caminar
- ATENCIÓN : Para los sensores, los comandos cambian por completo, por lo que debe revisar sus escenarios
- Importante : algunos comandos ya no estarán disponibles con esta nueva versión, incluidas las alertas, el arcoíris y las animaciones
- Importante : Las escenas ahora son de tipo action other, por lo que hay un comando, no una escena
- MUY IMPORTANTE : Solo el puente v2 es compatible; si está en el puente v1, definitivamente no debería actualizar porque Philips Hue no ha portado la API v2 al puente v1.


# 10/04/2021

- Añadiendo módulo
- Correcciones de errores

# 16/06/2021

- Arregle adaptive_light a adaptive_lighting

# 07/06/2021

- Agregar una animación adaptive_light
- Se solucionó un problema con el descubrimiento de escenas en el segundo puente Hue

# 15/03/2021

- Adición de la bombilla Hue White A67 E27 1600lm
- Optimizaciones y corrección de errores
- Modernización de la interfaz
- Optimización de imagen
- Se agregó un nuevo interruptor de atenuación de tono
- Adición del enchufe inteligente (encendido / apagado solo sin comentarios de estado por el momento)

# 12/11/2020

- Corrección de una falla de sobrecarga de la CPU al desactivar un sensor (el demonio debe reiniciarse después de la actualización para aplicar la corrección)

# 25/06/2020

- Soporte para múltiples puentes (2 por el momento)

# 05/11/2020

- Adición de una orden para saber si la bombilla es accesible o no

# 01/02/2020

- Imagen agregada para bombillas genéricas

# 10/10/2019

- Corrección de restablecer el estado de la lámpara a 0 cuando se vuelve a encender

# 09/23/2019

- Correcciones de errores
- Optimisations

# 01/08/2019

- Soporte para Feller EDIZIOdue colore
- Registros de sincronización mejorados

# 24/04/2019

- Agregar un botón para eliminar un pedido
- Corrección de las configuraciones para las bombillas Ikea (cuidado, hay que sacarlas de jeedom y rehacer una sincronización)

# 20/04/2019

- Soporte para SML002
- Soporte para retroalimentación de estado de los enchufes OSRAM SMART (la atención requiere una nueva inclusión)

# 17/01/2019

- Adición de la lámpara LTC016
- Agregue un botón de sincronización en la página de administración de equipos

# 16/01/2019

- Configuración agregada de luces genéricas de color y no color
- Soporte para botones Niko 4
- Corrección de errores

# 01/15/2019

- Actualización de documentación
- Corrección de un error en el estado de los botones al reiniciar el puente
- Agregar Hue Lightstrip al aire libre

# 16/10/2018

- Corrección de un error en la inversión de presencia para el sensor de movimiento (para los ya creados, será necesario marcar la casilla de inversión en la línea del comando Presence)

# 10/12/2018

- Se corrigió un error en el estado de las partes (encendido / apagado) si no tenía una lámpara de color
- Adición RB 145
- Adición LPT003

# 07/09/2018

- Agregar el enchufe blanco vivo

# 27/06/2018

- Corrección de errores (gracias @ mixman68)

# 05/31/2018

-	LTC001 (techo de ambiente Hue)

# 14/04/2018

- Corrección del tiempo de los valores del sensor
- Panel FLOALT WS 30x90
- Bombilla TRADFRI E14 WS opal 400lm
-	TRADFRI E27 WS opal 980lm
-	TRADFRI E27 color 600lm

# 23/02/2018

-	Bombilla TRADFRI E27 W opal 1000lm
-	Bombilla TRADFRI GU10 WS 400lm
-	Bombilla TRADFRI E27 opal 1000lm

# 21/01/2018

- Cambiar al nuevo sistema de documentación
- Adición del modelo MWB001
- Agregar el modelo ltw010
- Adición del modelo OSRAM
- Adición del modelo de bombilla TRADFRI GU10 W 400lm

# 20/11/2017

- Adición del modelo LCT015

# 28/03/2017

- Adición de animaciones de salida y puesta del sol (tenga cuidado
    las lámparas no son necesariamente compatibles)

# 21/01/2017

- Soporte de movimiento Hue
- Compatibilidad con hue tap
- Corrección de escenas
- Corrección de cambio de color
- Agregar imágenes de módulo
- Soporte para más módulos
- Además de la gestión de la temperatura de color
