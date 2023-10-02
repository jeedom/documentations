# Complemento de correo

Complemento para enviar correos electrónicos.

# Configuración del plugin 

Después de instalar el complemento, solo necesita activarlo. Este complemento no tiene una configuración particular :

![mail1](../images/mail1.PNG)

# Configuración del equipo 

Se puede acceder a la configuración del equipo de correo desde el menú de complementos :

![mail2](../images/mail2.PNG)

Así es como se ve la página del complemento de correo (aquí con 1 correo electrónico ya, puede agregar tantos como desee con el "Agregar") :

![mail3](../images/mail3.PNG)

Una vez que haces clic en uno de ellos, obtienes :

![mail4](../images/mail4.PNG)

Aquí encontrarás toda la configuración de tu equipo :

-   **Nombre del equipo de correo** : nombre del correo de su equipo
-   **Objeto padre** : indica el objeto padre al que pertenece el equipo
-   **Activar** : activa su equipo
-   **Visible** : hace que su equipo sea visible en el tablero
-   **Nombre del remitente** : nombre del remitente del correo electrónico (ej : Jeedom)
-   **Remitente de correo** : correo electrónico del remitente (ex : <jeedom@moi.fr>)
-   **Método de envío** : método de enviar el correo electrónico :
    -   Nube de Jeedom : sin configuración que hacer, envío de correos electrónicos mediante el servicio Jeedom Cloud, en fase beta por el momento, limitado a 5 correos electrónicos por día
    -   SMTP : método más común para enviar correos electrónicos
    -   Sendmail
    -   Qmail
    -   Mail()\[Función PHP \] : use la [función de envío estándar de PHP, window = "\_ blank"](http://fr.php.net/manual/fr/function.mail.php), requiere configurar el sistema operativo

Además de la opción SMTP, las otras opciones requieren la configuración del sistema operativo (Linux) para poder funcionar. En otras palabras, básicamente solo funciona la función SMTP, los otros están reservados para expertos que pueden, si lo desean, configurar estas opciones ellos mismos.

La pestaña de configuración SMTP le permite ingresar información sobre el servidor de correo electrónico que desea utilizar.

![mail screenshot3](../images/mail_screenshot3.jpg)

Estos son algunos ejemplos de los principales proveedores de servicios de correo electrónico :

-   **Gmail**
    -   Servidor SMTP : smtp.gmail.com
    -   Puerto SMTP : 587
    -   Seguridad SMTP : TLS
-   **Hotmail**
    -   Servidor SMTP : smtp.live.com
    -   Puerto SMTP : 587
    -   Seguridad SMTP : TLS
-   **iCloud**
    -   Servidor SMTP : smtp.me.com
    -   Puerto SMTP : 25
-   **Yahoo.com**
    -   Servidor SMTP : smtp.mail.yahoo.com
    -   Puerto SMTP : 465
    -   Seguridad SMTP : SSL

Les champs « Utilisateur SMTP » et « Mot de passe SMTP » correspondent aux identifiants de votre compte E-mail.

Desde la pestaña "Pedidos", puede agregar pedidos que correspondan a las direcciones de correo electrónico a las que desea poder enviar correos electrónicos con Jeedom :

![mail screenshot4](../images/mail_screenshot4.jpg)

-   **Nombre** : Nombre de la orden
-   **E-mail** : la dirección de correo electrónico a la que enviar el mensaje. Puedes poner varios separándolos con ,
-   **Configuración avanzada** (ruedas con muescas pequeñas) : se usa para mostrar la configuración avanzada del comando (método de historización, widget, etc.)
-   **Probar** : Se usa para probar el comando,
-   **Borrar** (signo -) : permite eliminar el comando.

Este complemento funciona como un módulo, es decir, una vez guardado, aparece en la lista de acciones o comandos. Por lo tanto, es muy simple usarlo al crear escenarios, por ejemplo.

En un escenario, una vez seleccionado en una acción, deberá ingresar el título y el mensaje.

![mail5](../images/mail5.jpg)

> **Importante**
>
> Si estás en doble autenticación con Gmail debes dar una contraseña específica para la aplicación : Mi cuenta ⇒ inicio de sesión y seguridad ⇒ Conéctese a Google ⇒ Contraseñas de aplicaciones, si este no es el caso, debe ingresar su contraseña habitual de Gmail.

> **Punta**
>
> El editor de escenarios admite el formato HTML para el cuerpo de los mensajes.

> **Punta**
>
> Recuerde guardar todos los cambios.
