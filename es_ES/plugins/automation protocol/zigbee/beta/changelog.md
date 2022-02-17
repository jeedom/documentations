# Changelog Zigbee

>**Importante**
>
>Como recordatorio si no hay información sobre la actualización, significa que solo se refiere a la actualización de documentación, traducción o texto.

>**Importante**
>
>Para conocer el nuevo módulo compatible tienes que ir [la](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=zigbee) (está ordenado por fecha de adición / modificación)

>**Importante**
>
>Para aprovechar la última integración del módulo, no dude en actualizar las dependencias

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
