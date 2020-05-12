# Complemento Karotz

Este complemento le permite controlar su Karotz (ejecutándose bajo [OpenKarotz](http://www.openkarotz.org/)) Va desde su dirección ventral, a sus oídos a través de sonidos, síntesis de voz y muchos otros.

# Configuración 

## Configuración del complemento Jeedom : 

**Instalación / Creación**

Para usar el complemento, debe descargarlo, instalarlo y activarlo como cualquier complemento de Jeedom.

Vaya al menú Complementos / Comunicación, encontrará el complemento Karotz.

Llegará a la página que enumerará su equipo (puede tener varios Karotz) y que le permitirá crear algunos.

Haga clic en el botón Agregar :

Luego llegará a la página de configuración de su karotz.

**Comandos**

No tienes nada que hacer en esta sección. Los pedidos se crearán automáticamente.

-   Refrescar: botón para actualizar el widget si es necesario
-   Parpadeando : permite detener el parpadeo del led
-   Parpadeando : activa el parpadeo del led
-   Detener el sonido : detener una música o un sonido en progreso
-   Hora de acostarse : deja dormir al conejo
-   De pie : Despierta el conejo
-   De pie en silencio : permite despertar al conejo en modo silencioso
-   Reloj : permite iniciar el modo de reloj de conejo
-   Humor : permite que el conejo diga el estado de ánimo seleccionado
-   Estado de ánimo: permite al conejo decir el estado de ánimo indicado por su número
-   Estado de ánimo aleatorio : permite al conejo decir un estado de ánimo aleatorio
-   Oreja al azar : le permite mover las orejas al azar
-   Ear RàZ : permite devolver las orejas a la posición inicial
-   Posiciones de orejas : ajusta la posición precisa de ambas orejas
-   Sonido de Karotz (nombre) : permite lanzar un sonido Karotz (pitido por ejemplo) indicando su nombre
-   Sonido Karotz : le permite lanzar un sonido Karotz (pitido, por ejemplo) seleccionando su nombre en una lista
-   Su url : permite a Karotz leer una URL (estación de radio, por ejemplo)
-   Squeezebox en : le permite activar el modo Karotz squeezebox
-   Squeezebox off : permite desactivar el modo Karotz squeezebox
-   Dormido : le permite saber si el Karotz está dormido (de lo contrario, está despierto)
-   Estado de color : permite el color actualmente en el vientre del Karotz
-   TTS : permite que el conejo hable eligiendo la voz y el mensaje (de forma predeterminada, el mensaje se almacena en caché)
-   TTS sin caché : permite que el conejo hable eligiendo la voz y el mensaje (el mensaje no está en caché)
-   Velocidad de pulso : ajusta la velocidad del parpadeo
-   % del espacio ocupado : le permite saber el% de disco utilizado en el conejo
-   Espacio libre : valor en MB de espacio libre en el conejo
-   Reiniciar : te permite reiniciar el conejo
-   Establecer hora : permite que el conejo se reinicie automáticamente (útil para cambiar la hora)
-   Nivel de volumen : indica en% el nivel de volumen
-   Volumen : permite elegir en% el nivel de volumen (máximo recomendado 50%, riesgo de distorsión arriba)
-   Volumen + : aumenta el nivel de volumen en un 5%
-   Volume- : disminuye el nivel de volumen en un 5%
-   Foto : permite tomar una foto por el conejo
-   Fotos borradas : le permite eliminar todas las fotos tomadas por el conejo (libera espacio en disco)
-   Fotos actualizar listado : permite actualizar la lista de fotos conservadas
-   Listado de fotos : lista de fotos mantenidas
-   Descarga de fotos : permite descargar (por ftp) las fotos guardadas en el disco (no se eliminan)

Todos estos comandos están disponibles a través de los escenarios.

## Comando TTS 

El comando TTS puede tener varias opciones separadas por & :

-   voz : el número de voz
-   nocaché : no use el caché

Ejemplo :

``voice=3&nocache=1``

# Preguntas frecuentes 

>**¿Con qué frecuencia se actualiza la información?**
>
>El sistema recupera la información cada 30 minutos o después de una solicitud de cambio de color o estado del conejo. Puede hacer clic en el comando Actualizar para actualizar manualmente.
