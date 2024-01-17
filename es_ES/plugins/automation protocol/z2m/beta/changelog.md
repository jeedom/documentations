# Registro de cambios jeeZigbee

>**IMPORTANTE**
>
>Si no hay información sobre la actualización, significa que se trata solo de la actualización de la documentación, la traducción o el texto.

# 17/01/2024

- Actualización de firmware mejorada en Luna
- Mejor gestión portuaria en Luna
- Simplificando la lista de puertos
- Posibilidad de enviar un mensaje sobre un subtema del comando establecido : modo_armado/modo::armando_quedarse
- Arreglo del fallo
- Gestión de comentarios de estado en grupos

# 26/12/2023

- Apagado mejorado del demonio zigbee2mqtt
- Arreglo del fallo

# 21/12/2023

- Eliminación de la noción de instancia
- Posibilidad de iniciar una inclusión directamente en un módulo enrutador
- Se agregó soporte para conbee 3
- Se agregó soporte para raspbee 2

# 12/08/2023

- Se agregó una opción "No permitir mensajes si el equipo no ha sido visto por más de (s)" (Reservado para usuarios avanzados)

# 12/05/2023

- Soporte para la actualización del firmware zigbee en Luna (beta)
- Soporte para ID lógico largo en comandos
- Posibilidad de crear un comando de actualización (debe agregar un comando, luego escribir acción/default y en el campo id lógico poner actualizar)
- Posibilidad de añadir un cron que solicite la actualización de los valores (ojo, nada garantiza que el módulo realmente los actualice, debe soportarlo))
- Se corrigió un error con la última versión de zigbee2mqtt


# 11/06/2023

- Se corrigió un error en la gestión de grupos
- Optimización de código
- Se corrigieron errores durante la instalación del complemento (error 500)

# 22/09/2023

- Posibilidad de elegir la versión de zigbee2mqtt

>**IMPORTANTE**
>
>Para aquellos que tienen problemas con un módulo inalcanzable después de actualizaciones anteriores, deben restaurar una copia de seguridad previa a la actualización y luego rehacer la actualización. Pido disculpas sinceras por este error que les ocurre a algunos de ustedes, proviene de una función inesperada de Zigbee2MQTT que no tengo en mis diferentes laboratorios.

# 20/09/2023

- Se corrigió un error en la versión zigbee2mqtt

# 19/09/2023

- Se corrigió un error al actualizar las dependencias (Zigbee2MQTT) si restauraba jeedom

# 09/08/2023

- Se corrigió un error que impedía que los pedidos se crearan correctamente

# 09/04/2023

- Capacidad para configurar el puerto de escucha de zigbee2mqtt
- Se solucionó un problema con los comandos de tipo de color
- Corrección en la generación de comandos que no podían funcionar en ciertos casos
- Nomenclatura de comandos mejorada
- Posibilidad de que las cajas Atlas con controladores tipo Elelabs actualicen el firmware desde jeedom

# 07/03/2023

- Solucionado un problema al enviar un comando de posicionamiento (tipo obturador)

# 27/06/2023

- Se solucionó un problema con la detección de ciertos módulos (incluido profalux)

# 30/05/2023

- Versión inicial
