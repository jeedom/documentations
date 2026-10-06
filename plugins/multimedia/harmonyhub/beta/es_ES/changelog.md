# Registro de cambios de Harmony Hub

>**IMPORTANTE**
>
>A modo de recordatorio, si no hay información sobre la actualización, es porque esta se refiere únicamente a la actualización de la documentación, la traducción o el texto.

# 18/05/2026

- Comprobación de la conectividad entre el demonio y el concentrador al enviar un comando

# 10/07/2025

- Se ha corregido un fallo que provocaba un bloqueo al iniciar el demonio en caso de que un concentrador estuviera mal configurado o no fuera accesible: el demonio podrá iniciarse junto con los demás concentradores, si los hay, o se cerrará correctamente si no se puede acceder a ningún concentrador.
- Adaptación de los registros

# 30/04/2025

- Se ha solucionado un problema relacionado con la ejecución de comandos en determinadas instalaciones (hub desconocido) tras la versión del 28/04

# 28/04/2025

> Atención
> Reestructuración importante del complemento: se ha reescrito por completo, incluida la comunicación con el hub Harmony (ahora a través de un demonio).
>
> Requiere Jeedom 4.4.8
>
> ¡Compatible con Debian 11 y 12! El complemento ya no es compatible con Debian 10; si todavía utilizas Debian 10, no instales esta versión.
>
> Los equipos antiguos se marcarán como obsoletos y no se migrarán. Utiliza la herramienta «Reemplazar» del núcleo si deseas adaptar fácilmente tus escenarios.
>
> Véase también [este tema en la comunidad](https://community.jeedom.com/t/importante-mise-a-jour-pour-debian-11-et-debian-12/129908) Para más información

- Reescritura completa del complemento
- Usando el método de instalación de dependencia central
- Cambiar la biblioteca para comunicarse con Harmony Hub para utilizar una biblioteca con un mejor seguimiento
- Uso de un demonio para:
  - para mejorar la capacidad de respuesta de las acciones
  - para tener retroalimentación de estado en tiempo real
- Configuración simplificada: solo hay que introducir la dirección IP del hub en la configuración del complemento e iniciar el demonio, y los dispositivos se sincronizan automáticamente con Jeedom.
- Se ha añadido un comando **Inicio de actividad** que indica la actividad que se está iniciando (queda en blanco si no hay ninguna).
- Bloquea la versión de una dependencia para evitar un cambio que rompa la compatibilidad (async-timeout v5 rompe el contexto de tiempo de espera)

# 17/09/2023

- Reparar la compatibilidad de Debian 11 y Python 3
- versión mínima requerida del núcleo: v4.2

# 19/10/2022

- Lista actualizada de comandos para Jeedom v4.3
- Correcciones menores y optimizaciones en la pantalla de administración de equipos

# 18/05/2021

- Corrección de un mal funcionamiento de algunos controles
- Revisión de la interfaz
- Revisión de la documentación

# 20/11/2020

- Optimizaciones generales
- Nueva presentación de la lista de objetos
- Se ha añadido la etiqueta «Compatibilidad con la versión 4»

# 20-09-2019

- Adaptación V4

# 07-06-2019

- Corrección de errores en dependencias NOK mientras está bien

# 23-05-2019

- Instalación de la página del equipo para el futuro Jeedom

# 19-02-2019

Esta actualización es una versión mayor relacionada con la actualización de Logitech que reactiva el XMMP. Tendrás que volver a crear el archivo de configuración y, sobre todo, activar en la aplicación Harmony el modo de desarrollador que habilita el XMMP.
A título informativo, esta actualización se produce el mismo día que el parche de Logitech. Al igual que la solución provisional del 21 de diciembre de 2018, que permitió a muchas personas solucionar el problema, ya que funcionaba para todos los que utilizaban Debian Stretch (mejor que nada). No sabíamos cuándo iba a restablecer Logitech la compatibilidad con XMMP. Pero, de repente, se produjo una reacción.

# 21-12-2018

Corrección urgente relacionada con la actualización de Logitech (provisional para solucionar el problema; no olvides reiniciar las dependencias)
