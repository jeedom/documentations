# Anuncio de registro de cambios de Bluetooth

>**Importante**
>
>Como recordatorio si no hay información sobre la actualización, significa que solo se refiere a la actualización de documentación, traducción o texto

# 22/09/2024

- Se solucionó un problema al reiniciar el demonio por la noche que no siempre se reiniciaba correctamente

# 09/02/2024

- Se agregó un reinicio del demonio por la noche (para limitar los problemas de memoria))

# 29/06/2024

- Se corrigió un error en la función de excepción ajax.

# 06/04/2021

- Se eliminó la verificación de la versión bluepy

# 20/11/2020

- Optimizaciones generales
- Nueva presentación de la lista de objetos
- Adición de la etiqueta "compatibilidad V4"

# 30/08/2019
- Adición de una gestión excepcional

# 22/08/2019
- Adición de Tivoo Divoom
- Pequeñas mejoras

# 19/08/2019
- Adición de un mensaje para pensar en cambiar el nivel de la API en Jeedom si usa antenas
- Adición de algunos dispositivos DIVOOM (tenga en cuenta que requieren un relanzamiento de dependencias). No lo agrego en el control de dependencias porque son solo dependencias específicas para ellos, por lo que no es necesario forzar a todos a relanzar las dependencias)
- Adición de nivel de batería en cleargrass
- Pequeñas mejoras

# 30/07/2019
- Corrección de un error en el dotti vinculado a la transición a python3

# 29/07/2019
- Menor fijo
- Separación de dispositivos desconocidos en la página del equipo
- Posibilidad de eliminar todos los dispositivos desconocidos con un solo clic (solo aquellos no asignados a un objeto)
- Corrección de un error en el escaneo selectivo "Desconocido"
- Mejoras generales

# 20/07/2019
- Cambio de método para todo el rango de playbulb (solo una conf y visuales) más dependencias en comparación con las diferentes versiones (ahora en la inclusión recuperamos las direcciones de los diferentes métodos)
- Adición de miscal V2 con peso e impedancia (y un montón de medidas calculadas). Gestión de usuarios para cálculos (en el botón de configuración avanzada)
- Cambio de miscal V1 (será necesario recrear a los usuarios) pero obtenemos más información
- Para playbulbs, recomiendo volver a incluir todos los dispositivos
- Corrección de un error en el gráfico de red en modo sin local
- Corrección de un error en la regeneración de pedidos a pedido
- En la inclusión, las antenas de transmisión y recepción se rellenan automáticamente por la antena que ha permitido la inclusión
- Cambio de la noción de presencia (sin necesidad de repetición siempre, sin necesidad de estado de retorno y tiempo de estado de retorno) ahora un comando de presencia por antena y local y un comando de presencia dependiendo de los demás
- Ajuste posible ahora del intervalo de escaneo y el número de escaneos o un dispositivo no es visible para declarar su ausencia (presencia de detección de ganancia y especialmente ausencia)
- Posibilidad de actualizar todas las antenas en un clic
- Posibilidad de reiniciar todas las antenas con un solo clic
- Durante una actualización del complemento, las antenas se actualizan y reinician (a veces pueden fallar)
- Exploración pasiva, excepto aprender (con memoria de la configuración de Jeedom para saber quién es quién))
- Cambiar a Python3
- Modificación personal de bluepy, con mejor manejo de errores (tal vez más bloqueo en proxmow, vmware)
- Adición de un tiempo de espera de conexión dentro del propio bluepy para evitar que un intento de conexión se repita
- Si el daemon local está en estado NOK, las presencias locales se establecen en 0
- Si una antena no se ha comunicado durante más de un minuto, la presencia de esta antena se establece en 0
- Adición de la posibilidad de recuperar nuevas configuraciones sin actualizar el complemento
- Adición de un modo pasivo o activo para el escaneo
- Reorganización de la página del equipo
- Adición de una serie de opciones de escaneo para considerar ausente específico para el equipo (si se define reemplazará el global para este equipo)
- Adición de la posibilidad de definir en un clic todo el equipo en una antena o en local
- Posibilidad de elegir exactamente el tipo de producto a incluir durante un escaneo (con la posibilidad de elegir todos)

# 26/06/2019
- Agregar el xiaomi cleargrass
- Adición de Xiaomi lywsd02
- Comienzo de la gestión dinámica del modelo
- Comience a reescribir el rango de playbulb para tener más diferencia dependiendo de los firmwares
- Corrección de errores en el estado del demonio en algunos casos
- Desbloqueo de funciones de actualización / retraso : cada usuario hace lo que quiere (tenga cuidado)
- NB : ya no es necesario actualizar para xiaomi HT miflora : ganancia de batería, mejor alcance, más datos. Recomiendo no activar la actualización forzada que ya no es necesaria a menos que su dispositivo no se anuncie correctamente

# 22/05/2019

- Cambiar de la página del equipo a V4 compatible.
- Mejora de la higrotermografía xiaomi (sin necesidad de conexión de datos) gracias @kipk
- Mejora de miflora (sin necesidad de conexión para datos)

# 09/03/2019

- Adición de la gestión automática del demonio en las antenas.
- Gestión de temperatura negativa
- Corrección en la actualización de las nueces (información de la batería)

# 16/01/2019

- Corrección de una inquietud sobre el orden máximo posible

# 06/07/2018

- Script de dependencia mejorado.
- Eliminación de la verificación de dependencias que permanecerá verde de todos modos mientras espera (recuerde durante la instalación para iniciar las dependencias)

# 06/04/2018

- Probable corrección de un error de notificación de actualización en Hygrothermographe y Miflora (probablemente requiere relanzar dependencias para las personas afectadas)

# 28/03/2018

- agregar conf pantalla de sueños
- modificación del demonio para especificar los registros
- modificación del reconocimiento de MI_SCALE V1
- Watchdog bluepy-helper (en juicio)

# 10/02/2018

- Corrección de un error en el gráfico de red modal si algún equipo no tenía ningún objeto

# 01/03/2018

- Adición de la configuración para el termómetro / higrómetro con pantalla Xiaomi
- Adición de algunas confs de malla awox
