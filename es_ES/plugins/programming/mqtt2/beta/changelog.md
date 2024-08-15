# Administrador de registro de cambios MQTT

>**IMPORTANTE**
>
>Como recordatorio, si no hay información sobre la actualización es porque se trata solo de la actualización de documentación, traducción o texto.

- Adición de un mensaje en línea y fuera de línea al iniciar y detener (se desee o no) el demonio en topic_racine/state
- Si tienes equipo jeedom::monitorear desde el complemento virtual el complemento agregará automáticamente el comando de estado (en línea o fuera de línea), si ya tiene este equipo debe reiniciar el descubrimiento
- Se corrigió un error en la transmisión del tipo real de equipo (cuando se transmite equipo entre jeedom)
- Se corrigió un error en la duplicación de la tarea de escucha de eventos
- En el equipo exportado, si el complemento de origen existe en el jeedom de destino, jeedom mostrará el ícono del complemento
- No hay errores en los registros durante la transmisión de comandos (evita romper el jeedom si se corta el demonio))

# 12/08/2024

- Se corrigió un error al enviar equipos desde la ventana de configuración
- Se agregó un botón para ver los registros de mosquitos (si está en modo de administrador local))
- Se actualizó la documentación para explicar mejor cómo sincronizar temas entre dos mosquitos

# 10/08/2024

- Se corrigió un error al enviar baterías (método de llamada no estática))

# 09/08/2024

- Se mejoró la visualización de la ventana de configuración para equipos transmitidos
- Se corrigió un error en los comandos huérfanos cuando se transmitían a través de mqtt

# 08/08/2024

- Para los equipos transmitidos en Mqtt, el complemento ahora envía el nivel de la batería todas las noches
- El complemento para gestionar el nivel de batería transmitido entre Jeedom
- Gestión correcta de los comandos de actualización de los widgets de los equipos transmitidos entre Jeedom
- Al enviar el descubrimiento entre Jeedom también se transmiten los valores de los comandos (no es necesario esperar una actualización del valor para tenerlo en el objetivo)). Requiere reenviar descubrimiento
- Al transmitir equipos entre Jeedom, el complemento ahora gestiona el tipo real de equipo para que sea compatible con aplicaciones móviles. Requiere reenviar descubrimiento
- Se agregó una ventana de configuración global para la transmisión de equipos entre Jeedom

# 08/05/2024

- Con Jeedom 4.4.8 o más posibilidades de ya no enviar todos los equipos del brocker MQTT sino solo algunos (a configurar en la configuración avanzada del equipo a transmitir))
- Corrección de errores (especialmente para compatibilidad con php8))
- Descubrimiento entre Jeedom (para hacer que 2 jeedoms se comuniquen entre sí mediante mqtt)
- Posibilidad desde la página de configuración del complemento de eliminar la suscripción de un complemento

# 22/03/2024

- Se solucionó un problema en php8
- Se corrigió un error en Debian 12

# 23/02/2024

- Eliminar una verificación de demonio ejecutable (se realiza cuando se inicia el demonio en todos los casos))

# 15/01/2024

- Preparándose para el apuro 4.4
- Manejo mejorado de mosquitos bajo Docker

# 27/10/2023

- Se corrigió un error en el estado del demonio (iniciado cuando no)

# 10/05/2023

- Se corrigió un error en el estado del corredor

# 10/02/2023

- Posibilidad de corregir la QOS predeterminada
- Arreglo del fallo
- Inicio de agregar el sistema de descubrimiento automático
- Gestión mejorada de mosquitos en modo local

# 22/03/2023

- Arreglo del fallo

# 03/07/2023

- Adición de un sistema de autodescubrimiento para algunos módulos beta (esphome, tasmota y shelly))
- Añadida la imagen de los módulos
- Se corrigió un error en la identificación del cliente (si varios jeedom en el mismo corredor)
- Soporte de subnivel en temas de equipos
- Arreglo del fallo

# 23/12/2022

- Se corrigió un error en el tiempo máximo permitido para instalar dependencias
- Sistema de plantilla de equipo agregado (beta)

# 18/11/2022

- Se agregó un mensaje que solicita restaurar los permisos en las carpetas antes de instalar Mosquitto en caso de error **No se encontró ninguna carpeta SSL**

# 13/11/2022

- Se agregó un botón para desinstalar un agente Mosquitto local en la página de configuración general del complemento
