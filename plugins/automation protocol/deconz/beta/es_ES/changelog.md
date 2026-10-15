# Registro de cambios Deconz

>**IMPORTANTE**
>
>Recuerda que, si no hay información sobre la actualización, es porque esta se refiere únicamente a la actualización de la documentación, la traducción o el texto.

# 15/10/2026

- Corrección de un error de «división por cero» en las lámparas de color, que no recuperaban el color en el modo blanco

# 17/02/2026

- Compatibilidad con Debian 12
- Versión mínima requerida de Jeedom: 4.4.8

# 03/01/2024

- Preparándose para el apuro 4.4

# 19/12/2023

- Soporte mejorado para la configuración de red interna jeedom
- Correcciones de errores

# 15/02/2023

- Mejora de la página de pedidos (se ha añadido el estado)

# 11/10/2022

- Arreglo del fallo
- Añadido nuevo tipo

# 03/02/2022

- Intento de corregir el error «cannot import name 'collections_abc' from 'six.moves'»; requiere Jeedom 4.2 y volver a instalar las dependencias.

# 16/12/2021

- Correcciones de errores

# 04/12/2021

- Soporte de nuevos tipos

# 29/11/2021

- Posibilidad de desinstalar Deconz, gracias @Benjamin
- Se agregó ZHAAirQualit, meric @sagitaz
- Se corrigió un error con la última versión de deconz al devolver actualizaciones de atributos
- Adición de gestión grupal y vinculante

# 08/02/2021

- Supresión del envío de brillo durante un cambio de color para bombillas RGB
- Se agregó ZHACarbonMonoxide, gracias @sagitaz

# 28/10/2020

- Se ha añadido un mensaje en el que se indica que, bajo ningún concepto, se debe actualizar el firmware de la llave si se utiliza una máquina virtual o un Freebox Delta, ya que se corre el riesgo de que la llave deje de funcionar.

# 23/09/2020

- Compatibilidad con la válvula Danfoss Ally (requiere Deconz 2.05.79)
- Cambio en el método de instalación para RPI y x86_64 (a través de los repositorios de Deconz)

# 01/07/2020

- Lanzamiento mejorado de deCONZ

# 08/06/2020

- Se ha añadido el tipo ZGPSwitch (botón compatible con Hue)

# 25/05/2020

- Se ha corregido un problema con los tipos genéricos de las luces de color (se recomienda corregir el tipo genérico para el comando de acción de color; de lo contrario, puede causar problemas en Alexa o Google Home, ya que la luz se apaga al solicitar «ON»).

# 12/05/2020

- Adición de un reinicio automático de la conexión a deconz en caso de pérdida

# 27/02/2019

- Capacidad para desactivar alertas de nodo a las que no puede llegar el dispositivo
- Actualizaciones de documentación y traducción

# 27/12/2019

- Inversión del widget para que las tiendas ikea peguen en estado real

# 26/12/2019

- Corrección de un error en la actualización del firmware

# 24/12/2019

- Adición de dispositivos de advertencia y tipos de alarma ZHA
- Compatibilidad con las persianas de IKEA (beta)
- Problemas resueltos con la búsqueda de firmware para la clave

# 15/11/2019

- Vuelvo a la versión 2.0.69 de Deconz porque la 70 tiene demasiados errores; hay que volver a instalar Deconz localmente.

# 14/11/2019

- Se solucionó un problema con la instalación de deconz

# 08/11/2019

- Actualización de la documentación (se ha añadido la desactivación del puerto serie en RPI; de lo contrario, el demonio es inestable)
- Mejora de soporte de válvula

# 03/11/2019

- Soporte de instalación en RPI1

# 27/10/2019

- Correcciones de errores
- Soporte de la válvula termostática

# 14/10/2019

- Posibilidad de actualizar el firmware de una clave Conbee 2 desde jeedom
- Lanzar una sincronización forzada cuando se inicia el demonio
- Corrección de un error en la instalación de dependencias

# 23/09/2019

- Actualizando el documento

# 23/09/2019

- Correcciones de errores
- Actualizando el documento

# 09/09/2019

- Corrección de un error en el nivel de registro de deconz en la instalación local
- Actualización de la versión local de Deconz a la 2.5.69 (atención: para obtenerla, hay que reiniciar la instalación de Deconz en la configuración del complemento y, a continuación, reiniciar el demonio)

# 28/08/2019

- Actualización de la versión local de Deconz a la 2.5.67 (atención: para obtenerla, hay que volver a ejecutar la instalación de Deconz en la configuración del complemento)

# 13/08/2019

- Mejora en la compatibilidad con el cubo de Xiaomi (gracias, @kaktusatomik)
- Adición del estado del nodo en redes Zigbee
- Análisis diario de las redes con informes si hay un problema en un módulo

# 24/07/2019

- Corrección de un error en la desactivación del equipo

# 22/07/2019

- Posibilidad de eliminar un nodo
- Agregue un botón de enlace directamente a la interfaz deconz
- Agregar el nombre del dispositivo Jeedom en la tabla que enumera los nodos
- Agregar la temperatura en algunos módulos xiaomi
- Soporte para módulos de doble relé
- Soporte mejorado para módulos de sensores y actuadores

Atención: hemos detectado casos en los que se duplicaban los pedidos (si te ocurre esto, no dudes en ponerte en contacto con el servicio de atención al cliente).

# 08/07/2019

- Soporte del módulo de detección de vibraciones Xiaomi

# 04/07/2019

- Correcciones de errores

# 30/06/2019

- Corrección de un error en la instalación de dependencias que impiden el lanzamiento del demonio
