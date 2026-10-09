# Registro de cambios Waze in Time

>**IMPORTANTE**
>
>Recuerda que, si no hay información sobre la actualización, es porque esta se refiere únicamente a la actualización de la documentación, la traducción o el texto.

# 06/10/2026

- Actualización importante para solucionar el bloqueo de Waze (error 403)
- Se requieren nuevas dependencias, que se instalarán durante la actualización
- El complemento cuenta con un servicio en segundo plano que debe iniciarse para poder actualizar las rutas
- Se han añadido nuevos parámetros de ruta: *Tipo de vehículo*, *Evitar carreteras de peaje*, *Evitar carreteras que requieran viñeta*, *Evitar transbordadores*
- Se han añadido nuevos comandos de información para los tres trayectos de ida y vuelta: *Distancia*
- Eliminación de la compatibilidad con «América del Norte»
- Se requiere Debian 12 y Python 3.11
- Se requiere Jeedom v4.5

# 20/12/2025

- Corrección para los trayectos «América del Norte»

# 29/11/2025

- Corrección de la URL utilizada tras un cambio en Waze
- Se requiere la versión 4.4 o superior de Jeedom
- Se requiere Debian 11 o una versión posterior

# 29/06/2025

- Optimización de las consultas a Waze para reducir la latencia

# 17/10/2022

- Lista de comandos de actualización para Jeedom v4.3

# 17/03/2022

- Jeedom v4.2 compatibilidad

# 08/12/2021

- Se ha añadido una opción para configurar las suscripciones que se deben activar al calcular las rutas (véase la documentación)
- Opción agregada para usar cualquier comando de cualquier complemento como posición inicial o final
- Se corrigió la extracción de información de viaje debido a un cambio de API de Waze

# 18/10/2021

- Mejoras en las páginas de configuración para la versión 4:
  - Agregar el cuadro de búsqueda
  - Incorporación de la vista en modo tabla de los dispositivos (Jeedom v4.2)
  - Nueva presentación de la página de configuración
  - Nueva presentación de la lista de objetos en la página del equipo
  - Nueva presentación de la lista de pedidos
- Se agregó soporte para la geolocalización configurada en el núcleo de Jeedom
- Añade una tarea cron de actualización automática personalizada en la configuración del dispositivo; ten en cuenta que debes volver a configurar tus dispositivos, ya que la tarea cron30 está desactivada; de lo contrario, la actualización de las rutas ya no se realizará automáticamente.
- Extracción de información fija debido al cambio de API de Waze

# 23/10/2019

- Mejora del widget para jeedom v4

# 05/09/2019

- Corrección de errores en el widget en jeedom v4
- Corrección de errores para php 7.3
