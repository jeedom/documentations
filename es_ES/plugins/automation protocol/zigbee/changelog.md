# Changelog Zigbee

>**Importante**
>
>Como recordatorio si no hay información sobre la actualización, significa que solo se refiere a la actualización de documentación, traducción o texto.

>**Importante**
>
>Para conocer el nuevo módulo compatible tienes que ir [la](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=zigbee) (está ordenado por fecha de adición / modificación)

# 25/01/2023

- Eliminación de la parte de copia de seguridad/restauración de los chips zigbee (el protocolo no lo admite, es demasiado inestable))

# 23/01/2023

- nueva configuración agregada
- Arreglo del fallo

# 19/10/2022

- Elimine la carpeta rustc después de instalar las dependencias para liberar espacio
- Soporte mejorado para algunos módulos
- Arreglo del fallo

# 10/03/2022

- Las versiones de Zigpy ahora están arregladas para evitar problemas con la instalación de dependencias


# 13/09/2022

- Se corrigió un error en la instalación de dependencias en RPI
- Soporte para nuevos módulos

# 02/09/2022

- Arreglo del fallo
- Capacidad para corregir el error del gestor de arranque (base.TimeoutError) desde la pantalla de actualización de firmware (en beta por el momento)
- Se corrigió un error en el botón para forzar actualizaciones de mod OTA
- Se corrigió un error en la biblioteca YARL al forzar la versión 1.4.2

# 12/08/2022

- Se corrigieron errores en la ejecución de ciertos comandos si el equipo está en "Ignorar confirmación de ejecución""

# 12/08/2022

- Arreglo del fallo

# 27/07/2022

- Se corrigieron problemas de inclusión para equipos GreenPower (solo compatibles con llaves EZSP))
- Se solucionó un problema con la retroalimentación de color de algunos controles remotos zigbee

# 27/06/2022

- Intento de solucionar problemas con el daemon

# 23/06/2022

- Intento de solucionar problemas con el daemon

# 20/06/2022

- Opción agregada para excluir automáticamente dispositivos eliminados
- Se corrigió un error al forzar una actualización OTA
- Soporte para nuevos módulos
- solucionado un problema con zigpy 0.47.0 (volver a la versión 0.46.0)

# 20/05/2022

- Corrigiendo el error :  AttributeError: módulo 'específicos' no tiene atributo 'init'

# 05/05/2022

- Arreglo del fallo
- Nuevo módulo de soporte 
- Se corrigió un error al agregar un módulo a un grupo
- Se agregó la zona horaria de envío al enviar el tiempo a los módulos
- Corrección de errores en la instalación de dependencias

# 31/03/2022

- Se solucionó un problema que impedía que el demonio se iniciara debido a la nueva versión de zigpy

# 22/03/2022

- Nuevo módulo de soporte
- Actualización de documentación
- Arreglo del fallo

# 16/02/2022

- Nuevo módulo de soporte
- Actualización del documento para el error de "tiempo de espera base""

# 02/03/2022

- Intento de corregir el error "no se puede importar el nombre 'colecciones_abc' de 'seis'".se mueve'", requiere jeedom 4.2 y relanzando la instalación de dependencias

# 02/01/2022

- Se solucionó un problema con la gestión de las versiones de firmware de ezsp
- Implementación de un sistema de generación automática de comandos si no existe configuración (en la medida de lo posible)
- Implementación de un sistema de descubrimiento automático para pedidos de tipo de información
- Posibilidad de tener la configuración json actual del módulo (te permitirá integrar los módulos más rápidamente)

# 21/01/2022

- Arreglo del fallo
- Nuevo módulo de soporte

# 01/10/2022

- Corrección de un error en el enlace directo entre 2 módulos

# 01/06/2022

- Se corrigió un error en la lista de módulos que se pueden vincular
- Recuperación de batería mejorada

# 20/12/2021

- Se corrigió un error al reiniciar el demonio cuando los sub demonios están configurados pero deshabilitados
- Se solucionó un problema al solicitar una actualización de más de 7 valores de atributo, gracias @kaktusatomik
- Equipo nuevo agregado (gracias @ cstan77)

# 02/12/2021

- Adición de nuevos equipos
- Corrección de un problema en la "Configuración del informe" de los módulos

# 22/11/2021

- Optimización de la velocidad de carga de las páginas de complementos
- Adición de nuevos equipos
- Actualice las dependencias automáticamente al actualizar el complemento


# 11/07/2021

- Adición de nuevos equipos
- Se corrigió un error en los módulos de persianas enrollables Tuya

# 25/10/2021

- Agregar nueva configuración
- Posibilidad de definir un cron para forzar la actualización de los atributos (tenga cuidado de no poner nada que pueda romper todas sus redes zigbee)
- Arreglo del fallo
- Adición del número de vecinos en la página del gráfico zigbee al desplazarse

# 19/09/2021

- Arreglo del fallo

# 15/09/2021

- Se corrigió un error en la inclusión
- Niveles de registro mejorados
- Adición de nuevos módulos

>**Importante**
>
>Es ABSOLUTAMENTE necesario lanzar una instalación de dependencias incluso si está bien (estamos trabajando en jeedom 4.2 tiene que ser automático pero por el momento tienes que lanzarlos a mano)

# 09/03/2021

- Se corrigió un problema con la creación de grupos en algunos casos
- Visualización de lista de grupo fijo

# 27/08/2021

- Problema solucionado con el firmware de Nodon
- Corrección del error "\_ext_pan_id" debido a una actualización del código Zigpy con las claves Deconz

>**Importante**
>
>Después de esta actualización, es ABSOLUTAMENTE necesario actualizar las dependencias del complemento, incluso si le dice que todo está bien

# 23/08/2021

- Eliminación del archivo de actualización de OTA para los módulos de Nodon a su solicitud
- Adición de nuevos módulos 
- Se solucionó un problema con la configuración de los ajustes de las bombillas Hue

# 17/08/2021

- Corrección de un problema de informes en los clústeres AnalogInput y AnalogInput
- Soporte completo del monitor de calidad del aire Xiaomi Aqara TVOC
- Adición de muchos módulos

# 06/08/2021

- Se corrigió un error en la administración de grupos

# 02/08/2021

- Adición de un nuevo módulo compatible
- Adición de un botón para borrar todos los datos de un demonio (ver documentación)
- Se corrigió un error en la administración de grupos cuando varias llaves zigbee


# 01/07/2021

- Adición de un nuevo módulo compatible
- Optimización de configuraciones existentes sobre la gestión de repeticiones

# 09/06/2021

- Cambio de la fuente de actualización OTA para Ikea (cambiar a la rama estable)
- Adición de un nuevo módulo compatible
- Arreglo del fallo

# 18/05/2021

- Soporte GreenPower en beta para llaves tipo EZSP (Elelabs, Popp ...), requiere reiniciar la instalación de dependencias
- Adición de un nuevo módulo compatible
- Arreglo del fallo

# 05/03/2021

- Actualización de documentación
- Arreglo del fallo
- Integración de nuevos módulos
- Optimización de imágenes de módulos

# 29/04/2021

- Integración de nuevos módulos
- Optimización de imágenes de módulos

# 21/04/2021

- Integración de nuevos módulos
- Soporte para encuadernación *(entre grupos o módulos)*
- Rediseño de documentación
- Arreglo del fallo

# 07/04/2021

- Se corrigió un problema en el botón para forzar la actualización OTA de ciertos módulos

# 06/04/2021

- Cambiando a estable

# 25/09/2020

- 1er lanzamiento en beta
