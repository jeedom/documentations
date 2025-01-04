# Registro de cambios jeeZigbee

>**IMPORTANTE**
>
>Si no hay información sobre la actualización, significa que se trata solo de la actualización de la documentación, la traducción o el texto.

- Inicio del soporte para zigbee2mqtt 2.0

# 16/12/2024

- Actualización de documentación
- El botón de actualización de firmware está oculto si estás en modo remoto
- Inicio del demonio mejorado
- De forma predeterminada, el complemento está en modo local (en lugar de esperar la configuración))
- La versión de zigbee2mqtt es por defecto 1.41 (temporal hasta que se lance 2.0))
- Se eliminó el botón de actualización de firmware en Luna (temporal)

# 27/09/2024

- Cambio de versiones mínimas, core 4.4 y SO Debian 11 mínimo

# 24/09/2024

- Se agregó un enlace en la página del equipo que hace referencia a la página del equipo zigbee2mqtt para obtener más información

# 10/09/2024

- Posibilidad en cajas con dongles elelabs de actualizar el firmware de Ember (experimentalmente, esto puede romper completamente su dongle y no estará cubierto por la garantía ni por el soporte))
- Se corrigió un error si el tema raíz no es zigbee2mqtt

# 08/05/2024

- Gestión de imágenes mejorada
- Corrección de velocidad en baudios en desconz
- Se corrigió un error que mostraba la ventana de configuración de un nodo si se elimina una pieza de equipo mientras se usa vinculante en otro

# 16/07/2024

- Se corrigió un error que indicaba una actualización de zigbee2mqtt cuando la versión ya está actualizada
- Tipo de clave Ember agregado
- Se solucionó un problema al iniciar el demonio por primera vez con respecto a los derechos del archivo de registro
- Se solucionó un problema en algunas imágenes

# 22/04/2024

- Se corrigió un error en la duplicación de comandos (en escenas)
- Se corrigió un error en los controles deslizantes con valor negativo

# 04/03/2024

- Se corrigió un error en la imagen de la última versión de zigbee2mqtt

# 20/03/2024

- Se corrigió un error con el comando de actualización

# 13/03/2024

- Limitación de actualización del firmware Zigbee a Luna en cajas Luna (evita romper el chip Zigbee en caso de elección incorrecta)

# 26/02/2024

- Se solucionó un problema con la instalación de mqtt
- Modificación del subtema (ahora es un campo de configuración específico del comando), tenga cuidado de actualizar sus comandos si los ha utilizado.
- Modificación de la sintaxis del campo logicId para acciones (cambio a modo json::). Para conocer las novedades, consulte la documentación del complemento.
- Agregar el puerto /dev/ttyAMA0 para raspbee2 en rpi
- Arreglo del fallo
- Se agregó un botón para desactivar el modo de inclusión
- Detección del modo de inclusión mejorada
- Corrección de errores (el complemento ahora ignora los valores vacíos de los comandos))

# 19/02/2024

- Se solucionó un problema con la instalación de mqtt


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
