# Sistema Ajax

## Configuration

La configuración del plugin es muy sencilla y se realiza en 2 pasos : 

- configurando el enlace entre tu libertad y tu alarma
- adición de un correo electrónico para compartir para informar eventos 

>**IMPORTANTE**
>
>Un punto importante Ajax no genera una alerta global cuando se activa una alarma, pero sí eleva el estado del detector que activó la alarma (comando de eventos)

### Configuración de enlaces 

Para configurar el enlace entre su Jeedom y su alarma Ajax, vaya a "Complemento" -> "Administración de complementos" -> "Sistema Ajax", luego haga clic en "Conectar", ingrese sus identificadores Ajax y haga clic en "Validar".

>**NOTA**
>
> Jeedom absolutamente no guarda sus credenciales de Ajax, es solo una que se usa para la primera solicitud a Ajax y para tener el token de acceso y el token de actualización. El token de actualización permite recuperar un nuevo token de acceso que tiene una vida útil de solo unas pocas horas

>**NOTA**
>
> Una vez realizado el enlace todas las solicitudes pasan por nuestra nube pero en ningún momento la nube almacena su token de acceso, por lo que no es posible con solo la nube jeedom actuar en su alarma. Para cualquier acción al respecto, es absolutamente necesario la combinación del token de acceso de Jeedom y una clave conocida solo en nuestra nube 

### Configuración de informes de eventos

Desde la aplicación Ajax, vaya al concentrador y luego en la configuración (pequeña rueda dentada en la parte superior derecha) vaya al usuario y agregue el usuario : ajax@jeedom.com 

## Equipo 

Una vez que la configuración esté en "Complemento" -> "Administración de complementos" -> "Sistema Ajax", solo tiene que sincronizar, Jeeodm creará automáticamente todo el equipo ajax vinculado a su cuenta Ajax. 

### Detector de movimiento

Pequeña especificidad para el detector de movimiento, no sube a la detección de movimiento de forma permanente. De hecho, solo sube cuando la alarma está activa y por el comando de evento

### Detector de apertura

Para él no te preocupes tienes todo el tiempo y en tiempo real la información de ventana abierta o no.
