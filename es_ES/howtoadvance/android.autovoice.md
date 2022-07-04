# Voz automática de Android

Este artículo tiene como objetivo guiarlo en el uso de Android para hablar con Jeedom. Utilizaremos el motor de interacción Jeedom que hace posible formular solicitudes y que Jeedom las responda (y también, si se desea, activa diferentes escenarios o elementos).

# Installation

## Requisitos previos

Naturalmente, necesita un dispositivo Android (tableta, teléfono, PC con micrófono y parlantes) e instalarlo [Tasker](https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm&hl=fr) y [Voz automática](https://play.google.com/store/apps/details?id=com.joaomgcd.autovoice&hl=fr). Este último te permite crear tus propios comandos de voz para Google Now para automatizar tus tareas usando la voz.

Anotar : AutoVoice es solo el componente para hablar con Jeedom pero no permite que Jeedom responda. Para que lo haga, no necesita el complemento Tasker. También podemos usar este ejemplo reemplazando el reconocimiento de voz de AutoVoice con una etiqueta NFC, geolocalización, un SMS recibido…

## El principio

Usaremos un perfil de Tasker en el estado. Este será un reconocimiento de voz de AutoVoice. Luego, en la tarea, le pediremos a Tasker que realice 2 acciones. El primero será llamar a Jeedom y enviarle el resultado de texto del reconocimiento de voz. El segundo será declarar el regreso de Jeedom.

# Creación de perfil

Agregamos un nuevo perfil con un **estado** como disparador.

![android.autovoice1](images/android.autovoice1.png)

Seleccionamos **Enchufar** en la primera pantalla.

![android.autovoice2](images/android.autovoice2.png)

En tipo de complemento, seleccionamos **Voz automática**.

![android.autovoice3](images/android.autovoice3.png)

En el submenú **Voz automática**, seleccionamos **Reconocido**.

![android.autovoice4](images/android.autovoice4.png)

Puede guardar la configuración predeterminada, a menos que desee
especificar palabras clave u otros parámetros.

![android.autovoice5](images/android.autovoice5.png)

Podemos darle al perfil un nombre como "Jeedom Interactions" y la copia de seguridad se realizará después del enlace con una tarea.

# La tarea

Agregamos un **nueva tarea** al perfil recién creado. Por ejemplo, podría llamarse "API de Jeedom".

![android.autovoice6](images/android.autovoice6.png)

La tarea eventualmente agrupará 2 acciones : **llamada a la API** y **decir el regreso**.

![android.autovoice7](images/android.autovoice7.png)

Primero agregaremos una acción de tipo **La red**.

![android.autovoice8](images/android.autovoice8.png)

Luego seleccionamos **Obtener HTTP**.

![android.autovoice9](images/android.autovoice9.png)

Allí rellenaremos con la información de Jeedom. Aquí está la información para ingresar :

-   Serveur:Puerto : ``https://mondomain.tld``
-   Sendero : ``/jeedom/core/api/jeeApi.php?apikey=votreclef&type=interact&query=%avcommnofilter&utf8=1``

No olvide poner su clave API en lugar de la cadena "su clave" . Tienes que dejar ``%avcommonfilter`` al final esto será reemplazado por la devolución de Autovoice.

![android.autovoice10](images/android.autovoice10.png)

Agregar acción de tipo **Decir**. Para ello filtra las acciones poniendo "decir" al nivel de la lupa.

![android.autovoice11](images/android.autovoice11.png)

Y volvemos ``%HTTPD`` en el campo de texto.

![android.autovoice12](images/android.autovoice12.png)

Se acabó. En el reconocimiento de texto por AutoVoice, se llamará a Jeedom y tendrá la respuesta configurada en las interacciones que hablará su teléfono. No olvides configurar las interacciones de Jeedom y puedes preguntarle lo que quieras. De "qué calor hace el salón" a "encender la luz del salón"".

> **Consejo**
>
> Si no funciona desde el principio, muchas veces es porque AutoVoice no está activo. Para ejecutarlo, haga clic en Google Now Integration y en la primera opción en la parte superior y autorice AutoVoice.

> **Consejo**
>
> De manera predeterminada, AutoVoice deshabilita la búsqueda de Google Now, es posible cancelar este comportamiento, para hacer esto en Tasker, haga clic en su perfil, luego "editar" (lápiz pequeño), luego "avanzado" (en la parte inferior) y desmarque "Do Búsqueda de Google Now" (abajo).
