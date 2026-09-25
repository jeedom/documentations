# Android Autovoice

El objetivo de este artículo es guiarte en el uso de Android para comunicarte con Jeedom. Utilizaremos el motor de interacciones de Jeedom, que permite formular solicitudes para que Jeedom responda a ellas (y también, si se desea, active diferentes escenarios o elementos).

# Instalación

## Requisitos previos

Por supuesto, se necesita un dispositivo Android (tableta, teléfono o ordenador con micrófono y altavoces) e instalar en él [Tasker](https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm&hl=fr) y [AutoVoice](https://play.google.com/store/apps/details?id=com.joaomgcd.autovoice&hl=fr). Esta última permite crear tus propios comandos de voz para Google Now con el fin de automatizar tus tareas mediante la voz.

Nota: AutoVoice es solo el componente que permite hablar con Jeedom, pero no permite que Jeedom responda. Para que lo haga, no hace falta el complemento Tasker. También se puede utilizar este ejemplo sustituyendo el reconocimiento de voz de AutoVoice por una etiqueta NFC, una geolocalización, un SMS recibido…​

## El principio

Vamos a utilizar un perfil de Tasker basado en un estado. Este consistirá en un reconocimiento de voz de AutoVoice. A continuación, en la tarea, le pediremos a Tasker que ejecute dos acciones. La primera será llamar a Jeedom y enviarle el resultado de texto del reconocimiento de voz. La segunda será leer en voz alta la respuesta de Jeedom.

# Creación del perfil

Se añade un nuevo perfil con un **estado** como desencadenante.

![android.autovoice1](../images/android.autovoice1.png)

Selecciona **Plugin** en la primera pantalla.

![android.autovoice2](../images/android.autovoice2.png)

En el tipo de complemento, seleccionamos **AutoVoice**.

![android.autovoice3](../images/android.autovoice3.png)

En el submenú **AutoVoice**, selecciona **Recognized**.

![android.autovoice4](../images/android.autovoice4.png)

Puedes guardar la configuración por defecto, a menos que quieras
Especifica palabras clave u otros parámetros.

![android.autovoice5](../images/android.autovoice5.png)

Se le puede asignar al perfil un nombre como «Interacciones de Jeedom» y el guardado se realizará tras vincularlo a una tarea.

# La tarea

Se añade una **nueva tarea** al perfil recién creado. Por ejemplo, podría llamarse «API Jeedom».

![android.autovoice6](../images/android.autovoice6.png)

La tarea constará finalmente de dos acciones: **llamada a la API** y **comunicar el resultado**.

![android.autovoice7](../images/android.autovoice7.png)

En primer lugar, vamos a añadir una acción de tipo **Red**.

![android.autovoice8](../images/android.autovoice8.png)

A continuación, seleccionamos **Get HTTP**.

![android.autovoice9](../images/android.autovoice9.png)

Ahora vamos a introducir los datos de Jeedom. Estos son los datos que hay que introducir:

-   Servidor:Puerto: ``https://mondomain.tld``
-   Ruta: ``/jeedom/core/api/jeeApi.php?apikey=votreclef&type=interact&query=%avcommnofilter&utf8=1``

No olvides sustituir la cadena «tu clave» por tu clave API. Es importante dejar ``%avcommonfilter`` Al final, esto se sustituirá por el regreso de Autovoice.

![android.autovoice10](../images/android.autovoice10.png)

Añade una acción del tipo **Decir**. Para ello, filtra las acciones introduciendo «decir» en el campo de búsqueda.

![android.autovoice11](../images/android.autovoice11.png)

Y ya nos vamos a casa ``%HTTPD`` en el campo de texto.

![android.autovoice12](../images/android.autovoice12.png)

Ya está. Mediante el reconocimiento de texto de AutoVoice, se activará Jeedom y recibirás la respuesta configurada en las interacciones, que te dará a conocer tu teléfono. No olvides configurar las interacciones de Jeedom y podrás pedirle todo lo que quieras. Desde «¿a qué temperatura está el salón?» hasta «enciende la luz del salón».

> **Consejo**
>
> Si no funciona desde el principio, suele ser porque AutoVoice no está activado. Para ello, ábrelo, haz clic en «Integración con Google Now» y en la primera opción de la parte superior, y autoriza AutoVoice.

> **Consejo**
>
> Por defecto, AutoVoice desactiva la búsqueda de Google Now, pero es posible anular esta configuración. Para ello, en Tasker, haz clic en tu perfil, luego en «editar» (el pequeño lápiz), después en «avanzado» (en la parte inferior) y desmarca la casilla «Do Google Now Search» (en la parte inferior).
