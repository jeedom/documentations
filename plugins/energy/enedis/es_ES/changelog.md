# Registro de cambios Enedis

>**IMPORTANTE**
>
>Si no hay información sobre la actualización, es porque esta se refiere únicamente a cambios en la documentación, la traducción o el texto.

# 29/10/2026

- Recuperación de las lecturas a través de la nueva API de lecturas V2 de Enedis, que sustituye a la anterior, cuya retirada ya se ha anunciado

# 26/10/2026

- Se requiere como mínimo Jeedom 4.4
- La plantilla del widget ahora se activa o desactiva desde el campo **Plantilla del widget** de la configuración avanzada del dispositivo (pestaña **Información**).
- Se ha añadido un campo **Descripción del contador** en la página del equipo
- La incorporación de historiales de datos diarios, mensuales, anuales y de potencia máxima se realiza ahora por año completo, para obtener totales mensuales y anuales precisos.
- Corrección de los totales mensuales y anuales cuando Enedis no facilita los datos del día 1 del mes
- Corrección de las fechas que aparecen en los registros al recuperar los datos horarios
- Los historiales diarios, mensuales, anuales y de potencia máxima ya registrados se corrigen ahora cuando los datos de Enedis llegan con retraso o se modifican.

# 06/11/2023

- transición a la versión estable

# 04/10/2023

- Llamadas actualizadas para que sean compatibles con la API V5 Enedis Data-Connect

# 24/10/2022

- Opción agregada para deshabilitar datos por hora
- Se eliminaron las dependencias que ya se necesitaban para el núcleo
- La configuración de color de la plantilla del widget ahora está en la configuración del equipo, pestaña Pantalla, sección Widget

# 23/10/2022

- transición a la versión estable

# 18/10/2022

- Lista de comandos actualizada para Jeedom v4.3

# 15/08/2022

- Se corrigió un error de visualización de datos de producción en caso de múltiples widgets en la página

# 02/08/2022

- Optimización de llamadas a servidores de Enedis

# 24/01/2022

- Eliminación del comando «Potencia máxima de producción»

# 05/01/2022

- Se corrigió un error en la recopilación de datos el 1 de enero
- Se ha añadido un indicador luminoso en el widget para saber si los datos están actualizados *(verde = OK, rojo = NO, naranja = algunos datos NO)*

# 03/06/2021

- Corrección para evitar que la programación automática se detenga en casos excepcionales

# 18/05/2021

- Implementación de un sistema de autoprogramación
- Posibilidad de integrar historias bajo demanda
- Mejor procesamiento e integración de datos
- Reorganización de los parámetros de configuración, archivos y documentación

# 18/02/2021

- Se ha añadido la gestión de dependencias para confirmar la presencia de `php-mbstring` ausente en algunas instalaciones
- Nuevo ícono de complemento más acorde con las prerrogativas de Enedis

# 01/02/2021

- Reescritura completa del complemento que ahora usa la API de Enedis Data-Connect
- Se ha añadido el comando **Potencia máxima/día**
- Posibilidad de recuperar consumos, producción o ambas medidas a la vez
- Generación automática de historiales de los últimos 3 años al crear pedidos
- Reescritura de cuadros de mando y plantillas de widgets móviles
- Se ha añadido la posibilidad de elegir el color de fondo de la plantilla del widget *(o transparente)*
- Reescritura de documentación

# 10/09/2020

- Se ha corregido un error de visualización en la vista móvil sin la plantilla del widget.

# 06/09/2020

- Se ha añadido la plantilla para la versión del panel de control.
- Se ha añadido la plantilla para la versión móvil.
- Optimización del número de solicitudes a los servidores de Enedis.

# 21/08/2020

- Recuperación de la información en un minuto aleatorio para no sobrecargar los servidores de Enedis.

# 17/08/2020

- Cambio a modo estable.

# 12/08/2020

- El plugin ya está disponible en versión beta.
