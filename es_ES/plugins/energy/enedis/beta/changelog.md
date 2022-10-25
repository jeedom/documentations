# Registro de cambios Enedis

>**Importante**
>
>Si no hay información sobre la actualización, significa que se trata solo de la actualización de la documentación, la traducción o el texto.

# 24/10/2022

- Opción agregada para deshabilitar datos por hora
- Transferencia de la gestión de dependencias al núcleo
- La selección del color de fondo de la plantilla del widget ahora se hace por parámetro opcional en la configuración del equipo

# 18/10/2022

- Lista de comandos actualizada para Jeedom v4.3

# 15/08/2022

- Se corrigió un error de visualización de datos de producción en caso de múltiples widgets en la página

# 08/02/2022

- Optimización de llamadas a servidores de Enedis

# 24/01/2022

- Eliminación del comando "Máxima producción de energía""

# 05/01/2022

- Se corrigió un error en la recopilación de datos el 1 de enero
- Adición de un indicador en el widget para saber si los datos están actualizados *(verde = OK, rojo = KO, naranja = algunos datos KO)*

# 03/06/2021

- Corrección para evitar que la programación automática se detenga en casos excepcionales

# 18/05/2021

- Implementación de un sistema de autoprogramación
- Posibilidad de integrar historias bajo demanda
- Mejor procesamiento e integración de datos
- Reorganización de los parámetros de configuración, archivos y documentación

# 18/02/2021

- Se agregó administración de dependencias para confirmar la presencia de `php-mbstring` ausente en algunas instalaciones
- Nuevo ícono de complemento más acorde con las prerrogativas de Enedis

# 01/02/2021

- Reescritura completa del complemento que ahora usa la API de Enedis Data-Connect
- Añadiendo el comando **Potencia máxima / día**
- Posibilidad de recuperar consumos, producción o ambas medidas a la vez
- Generación automática de historiales de los últimos 3 años al crear pedidos
- Reescritura de cuadros de mando y plantillas de widgets móviles
- Se agregó la posibilidad de elegir el color de fondo de la plantilla del widget *(o transparente)*
- Reescritura de documentación

# 10/09/2020

- Se corrigió un error de visualización en la vista móvil sin la plantilla de widget.

# 09/06/2020

- Adición de la plantilla para la versión del tablero.
- Adición de la plantilla para la versión móvil.
- Optimización del número de llamadas a los servidores de Enedis.

# 21/08/2020

- Recuperación de información en un minuto aleatorio para no sobrecargar los servidores de Enedis.

# 17/08/2020

- Cambiar a estable.

# 12/08/2020

- Suministro del complemento en versión beta.
