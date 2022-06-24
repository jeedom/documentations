# Registro de cambios de Zigbee

>****
>
>Como recordatorio si no hay información sobre la actualización, significa que solo se refiere a la actualización de documentación, traducción o texto.

>****
>
>Para conocer el nuevo módulo compatible tienes que ir [](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=zigbee) (está ordenado por fecha de adición / modificación)

>****
>
>Para aprovechar la última integración del módulo, no dude en actualizar las dependencias

>****
>
>Para los que no tengan problemas con el demonio, NO DEBEN actualizar, puede estropearlo todo

# 

- Intento de solucionar problemas con el daemon

# 

- Opción agregada para excluir automáticamente dispositivos eliminados
- Se corrigió un error al forzar una actualización OTA
- Soporte para nuevos módulos
- solucionado un problema con zigpy 0.47.0 (volver a la versión 0.46.0)

# 

- Corrigiendo el error :  AttributeError: módulo 'específicos' no tiene atributo 'init'

# 

- Arreglo del fallo
- Nuevo módulo de soporte 
- Se corrigió un error al agregar un módulo a un grupo
- Se agregó la zona horaria de envío al enviar el tiempo a los módulos
- Corrección de errores en la instalación de dependencias

# 

- Se solucionó un problema que impedía que el demonio se iniciara debido a la nueva versión de zigpy

# 

- Nuevo módulo de soporte
- Actualización de documentación
- Arreglo del fallo

# 

- Nuevo módulo de soporte
- Actualización del documento para el error de "tiempo de espera base""

# 02/03/2022

- Intento de corregir el error "no se puede importar el nombre 'colecciones_abc' de 'seis'".se mueve'", requiere jeedom 4.2 y relanzando la instalación de dependencias

# 02/01/2022

- Se solucionó un problema con la gestión de las versiones de firmware de ezsp
- Implementación de un sistema de generación automática de comandos si no existe configuración (en la medida de lo posible)
- Implementación de un sistema de descubrimiento automático para pedidos de tipo de información
- Posibilidad de tener la configuración json actual del módulo (te permitirá integrar los módulos más rápidamente)

# 

- Arreglo del fallo
- Nuevo módulo de soporte

# 01/10/2022

- Corrección de un error en el enlace directo entre 2 módulos

# 01/06/2022

- Se corrigió un error en la lista de módulos que se pueden vincular
- Recuperación de batería mejorada

# 

- Se corrigió un error al reiniciar el demonio cuando los sub demonios están configurados pero deshabilitados
- Se solucionó un problema al solicitar una actualización de más de 7 valores de atributo, gracias @kaktusatomik
- Equipo nuevo agregado (gracias @ cstan77)

# 12/02/2021

- Adición de nuevos equipos
- Corrección de un problema en la "Configuración del informe" de los módulos

# 

- Optimización de la velocidad de carga de las páginas de complementos
- Adición de nuevos equipos
- Actualice las dependencias automáticamente al actualizar el complemento


# 11/07/2021

- Adición de nuevos equipos
- Se corrigió un error en los módulos de persianas enrollables Tuya

# 

- Agregar nueva configuración
- Posibilidad de definir un cron para forzar la actualización de los atributos (tenga cuidado de no poner nada que pueda romper todas sus redes zigbee)
- Arreglo del fallo
- Adición del número de vecinos en la página del gráfico zigbee al desplazarse

# 

- Arreglo del fallo

# 

- Se corrigió un error en la inclusión
- Niveles de registro mejorados
- Adición de nuevos módulos

>****
>
>Es ABSOLUTAMENTE necesario lanzar una instalación de dependencias incluso si está bien (estamos trabajando en jeedom 4.2 tiene que ser automático pero por el momento tienes que lanzarlos a mano)

# 09/03/2021

- Se corrigió un problema con la creación de grupos en algunos casos
- Visualización de lista de grupo fijo

# 

- Problema solucionado con el firmware de Nodon
- Corrección del error "\_ext_pan_id" debido a una actualización del código Zigpy con las claves Deconz

>****
>
>Después de esta actualización, es ABSOLUTAMENTE necesario actualizar las dependencias del complemento, incluso si le dice que todo está bien

# 

- Eliminación del archivo de actualización de OTA para los módulos de Nodon a su solicitud
- Adición de nuevos módulos 
- Se solucionó un problema con la configuración de los ajustes de las bombillas Hue

# 

- Corrección de un problema de informes en los clústeres AnalogInput y AnalogInput
- Soporte completo del monitor de calidad del aire Xiaomi Aqara TVOC
- Adición de muchos módulos

# 

- Se corrigió un error en la administración de grupos

# 08/02/2021

- Adición de un nuevo módulo compatible
- Adición de un botón para borrar todos los datos de un demonio (ver documentación)
- Se corrigió un error en la administración de grupos cuando varias llaves zigbee


# 07/01/2021

- Adición de un nuevo módulo compatible
- Optimización de configuraciones existentes sobre la gestión de repeticiones

# 

- Cambio de la fuente de actualización OTA para Ikea (cambiar a la rama estable)
- Adición de un nuevo módulo compatible
- Arreglo del fallo

# 

- Soporte GreenPower en beta para llaves tipo EZSP (Elelabs, Popp ...), requiere reiniciar la instalación de dependencias
- Adición de un nuevo módulo compatible
- Arreglo del fallo

# 05/03/2021

- Actualización de documentación
- Arreglo del fallo
- Integración de nuevos módulos
- Optimización de imágenes de módulos

# 

- Integración de nuevos módulos
- Optimización de imágenes de módulos

# 

- Integración de nuevos módulos
- Soporte para encuadernación *(entre grupos o módulos)*
- Rediseño de documentación
- Arreglo del fallo

# 

- Se corrigió un problema en el botón para forzar la actualización OTA de ciertos módulos

# 04/06/2021

- Cambiando a estable

# 

- 1er lanzamiento en beta
