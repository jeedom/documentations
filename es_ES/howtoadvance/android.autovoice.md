Objetivo 
========

El propósito de este artículo es guiarte en el uso de Android
hablar con Jeedom. Utilizaremos el motor de interacciones Jeedom que
permite que se realicen solicitudes y Jeedom responda a ellas (y también, si nosotros
deseo, activar diferentes escenarios o elementos).

Instalación 
============

Prerrequisitos 
-------------

Naturalmente, necesita un dispositivo Android (tableta, teléfono, PC con
micrófono y altavoces) e instalar
[Tasker](https://play.google.com/store/apps/dyails?id=ny.dinglisch.android.taskerm&hl=fr)
y
[AutoVoice](https://play.google.com/store/apps/dyails?id=com.joaomgcd.autovoice&hl=fr).
Este último le permite crear sus propios comandos de voz para Google Now
para automatizar tareas usando la voz.

Anotar : AutoVoice es solo el componente para hablar con Jeedom pero no
no permitir que Jeedom responda. Para que él haga eso, no necesita el
Complemento Tasker. También podemos usar este ejemplo reemplazando el
Reconocimiento de voz de AutoVoice por etiqueta NFC, geolocalización,
un SMS recibido

El principio 
-----------

Usaremos un perfil Tasker en estado. Este será un
Reconocimiento de voz AutoVoice. Luego en la tarea, preguntaremos
Tasker para ejecutar 2 acciones. El primero será llamar a Jeedom y a él
transmitir el resultado del texto del reconocimiento de voz. La segunda
será para declarar el regreso de Jeedom.

Creación de perfil 
==================

Agregamos un nuevo perfil con un **Estado** como un disparador.

![android.autovoice1](images/android.autovoice1.png)

Seleccionamos **Plugin** en la primera pantalla.

![android.autovoice2](images/android.autovoice2.png)

En tipo de complemento, seleccionamos **AutoVoice**.

![android.autovoice3](images/android.autovoice3.png)

En el submenú **AutoVoice**, Seleccionamos **Reconocido**.

![android.autovoice4](images/android.autovoice4.png)

Puede guardar la configuración predeterminada, a menos que desee
especificar palabras clave u otros parámetros.

![android.autovoice5](images/android.autovoice5.png)

Podemos darle al perfil un nombre como "Interacciones de Jeedom" y el
la copia de seguridad se realizará después de vincular con una tarea.

La tarea 
========

Agregamos un **nueva tarea** al perfil recién creado. Por
ejemplo, podría llamarse "API de Jeedom".

![android.autovoice6](images/android.autovoice6.png)

La tarea finalmente agrupará 2 acciones : **Llamada API** y **di el
Regreso**.

![android.autovoice7](images/android.autovoice7.png)

Primero agregaremos una acción tipo **Red**.

![android.autovoice8](images/android.autovoice8.png)

Luego seleccionamos **Obtener HTTP**.

![android.autovoice9](images/android.autovoice9.png)

Aquí rellenaremos con información de Jeedom. Aquí está la información para
Entrar :

-   Serveur:Port : `https://mondomain.tld`

-   Ruta :
    `/jeedom/core/api/jeeApi.php?apikey = yourkey & type = interact & query =% avcommnofilter & utf8 = 1`

No olvides poner tu clave API en lugar de la cadena
`yourkey`. Debe dejar `% avcommonfilter` al final, será
reemplazado por la devolución de Autovoice.

![android.autovoice10](images/android.autovoice10.png)

Agregar una acción de tipo **Decir**. Para hacer esto, filtre las acciones por
poniendo "decir" en la lupa.

![android.autovoice11](images/android.autovoice11.png)

E ingresamos `% HTTPD` en el campo de texto.

![android.autovoice12](images/android.autovoice12.png)

Se acabó. En el reconocimiento de texto por AutoVoice, Jeedom será
llamado y tendrá la respuesta configurada en las interacciones que
será hablado por su teléfono. No olvide configurar el
Jeedom interacciones y puedes preguntarle lo que quieras
querer Desde "cuál es la temperatura en la sala de estar" hasta "encender la luz
sala de estar".

> **Punta**
>
> Si no funciona desde el principio, a menudo es porque AutoVoice
> no está activo. Para ese lanzamiento, haga clic en Google Now
> Integración y en la primera opción en la parte superior y autorizar
> AutoVoice.

> **Punta**
>
> Por defecto, AutoVoice deshabilita la búsqueda de Google Now, es
> posible cancelar este comportamiento, para eso en Tasker haga clic en
> su perfil luego "edición" (lápiz pequeño), luego "avanzado" (mientras
> abajo) y desmarque "Buscar en Google Now" (abajo).
