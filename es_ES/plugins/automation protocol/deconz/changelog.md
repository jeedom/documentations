# Registro de cambios Deconz

>**Importante**
>
>Como recordatorio si no hay información sobre la actualización, significa que solo se refiere a la actualización de documentación, traducción o texto

# 15/02/2023

- Mejora de la página de pedidos (adición del estado)

# 10/11/2022

- Arreglo del fallo
- Añadido nuevo tipo

# 02/03/2022

- Intento de corregir el error "no se puede importar el nombre 'colecciones_abc' de 'seis'".se mueve'", requiere jeedom 4.2 y relanzando la instalación de dependencias

# 16/12/2021

- Correcciones de errores

# 12/04/2021

- Soporte de nuevos tipos

# 29/11/2021

- Posibilidad de desinstalar Deconz, gracias @Benjamin 
- Se agregó ZHAAirQualit, meric @sagitaz
- Se corrigió un error con la última versión de deconz al devolver actualizaciones de atributos
- Adición de gestión grupal y vinculante

# 02/08/2021

- Supresión del envío de brillo durante un cambio de color para bombillas RGB
- Se agregó ZHACarbonMonoxide, gracias @sagitaz

# 28/10/2020

- Se agregó un mensaje que indica que no debe actualizar el firmware de la clave si está en VM o Freebox Delta con el riesgo de romper la clave.

# 23/09/2020

- Soporte de válvula ally de Danfoss (se requiere deconz 2.05.79)
- Cambio del método de instalación para RPI y x86_64 (paso por los repositorios deconz)

# 01/07/2020

- Lanzamiento mejorado de deCONZ

# 06/08/2020

- Tipo agregado ZGPSwitch (botón amigo del tono)

# 25/05/2020

- Corrección de una inquietud sobre el tipo genérico de luces de color (es aconsejable corregir el tipo genérico para el comando del tipo de acción de color; de lo contrario, esto puede causar problemas en Alexa o Google home, luz que se apaga durante la solicitud ON)

# 12/05/2020

- Adición de un reinicio automático de la conexión a deconz en caso de pérdida

# 02/27/2019

- Capacidad para desactivar alertas de nodo a las que no puede llegar el dispositivo
- Actualizaciones de documentación y traducción

# 12/27/2019

- Inversión del widget para que las tiendas ikea peguen en estado real

# 12/26/2019

- Corrección de un error en la actualización del firmware

# 12/24/2019

- Adición de dispositivos de advertencia y tipos de alarma ZHA
- Soporte para tiendas ikea (beta)
- Problemas resueltos con la búsqueda de firmware para la clave

# 11/15/2019

- Volver a deconz 2.0.69 porque el 70 tiene demasiados errores, debe reiniciar la instalación de descontaminación local

# 11/14/2019

- Se solucionó un problema con la instalación de deconz

# 11/08/2019

- Actualización del documento (adición de la desactivación de la serie en RPI; de lo contrario, el demonio es inestable)
- Mejora de soporte de válvula

# 03/11/2019

- Soporte de instalación en RPI1

# 10/27/2019

- Correcciones de errores
- Soporte de la válvula termostática

# 10/14/2019

- Posibilidad de actualizar el firmware de una clave Conbee 2 desde jeedom
- Lanzar una sincronización forzada cuando se inicia el demonio
- Corrección de un error en la instalación de dependencias

# 09/23/2019

- Actualizando el documento

# 09/23/2019

- Correcciones de errores
- Actualizando el documento

# 09/09/2019

- Corrección de un error en el nivel de registro de deconz en la instalación local
- Actualización de la versión local de deconz a 2.5.69 (tenga cuidado de tenerlo en la configuración del complemento reinicie la instalación de Deconz y luego reinicie el demonio)

# 08/28/2019

- Actualización de la versión local de deconz a 2.5.67 (tenga cuidado de que en la configuración del complemento reinicie la instalación de Deconz)

# 08/13/2019

- Soporte mejorado para el cubo Xiaomi (merc @kaktusatomik)
- Adición del estado del nodo en redes Zigbee
- Análisis diario de las redes con informes si hay un problema en un módulo

# 07/24/2019

- Corrección de un error en la desactivación del equipo

# 07/22/2019

- Posibilidad de eliminar un nodo
- Agregue un botón de enlace directamente a la interfaz deconz
- Agregar el nombre del dispositivo Jeedom en la tabla que enumera los nodos
- Agregar la temperatura en algunos módulos xiaomi
- Soporte para módulos de doble relé
- Soporte mejorado para módulos de sensores y actuadores

Atención, hemos detectado casos en los que hubo duplicación de pedidos (si lo cumple, no dude en ponerse en contacto con el soporte)

# 07/08/2019

- Soporte del módulo de detección de vibraciones Xiaomi

# 07/04/2019

- Correcciones de errores

# 06/30/2019

- Corrección de un error en la instalación de dependencias que impiden el lanzamiento del demonio
