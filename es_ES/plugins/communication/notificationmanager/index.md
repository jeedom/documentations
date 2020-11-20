# Complemento del Administrador de notificaciones

Este complemento le permite administrar notificaciones (recuperación en caso de error, generación de texto...)

# Configuración del plugin

Después de descargar el complemento, simplemente deberá activar el complemento.

# Configuración del equipo

## Equipement

Se puede acceder a la configuración de los dispositivos de Notification Manager desde el menú Complementos y luego Comunicación. Aquí encontrará la configuración de su equipo :

- Nombre del equipo a notificar : Nombre del equipo
- Objeto padre : su objeto padre
- Activer
- Visible

## Commande

Aquí es donde podrá agregar comandos de notificación. Una vez que agregue para cada comando, podrá definir los comandos de tipo de mensaje para usar en orden de prioridad.

Tienes opciones :

- Prueba de ejecución : permite agregar una prueba antes de la ejecución de la notificación, si la prueba es falsa, el complemento no hará nada, si es verdadero, ejecutará las notificaciones en el orden de prioridades hasta encontrar una que funcione. Si el campo está vacío, la prueba se ignora.

> **Nota**
>
> También tiene una prueba por pedido en la notificación.


**Ejemplo simple**

Ejemplo: puede poner primero un comando de tipo Slack y luego un comando de tipo SMS. Si el envío por Slack no funciona, enviará el mensaje por SMS.

**Ejemplo más complejo**

Ejemplo: puede poner primero un comando de tipo Slack y un comando de SMS (en el mismo cuadro separado por &&), luego correo electrónico. Cuando use el complemento, primero enviará el mensaje en Slack y SMS, si los dos no funcionan, se enviará por correo electrónico.

# Generación de texto

El complemento también ofrece la posibilidad de generar texto para que los mensajes no sean siempre iguales. El sistema es el mismo que para las interacciones :

- [Hola\|Hola, todo bien ? => Dará ya sea "Hola, ¿cómo estás?" o "hola como estas ?"

# Texto condicional

También puede poner texto condicional en la forma {(prueba) ? Verdadero : faux}.

> **Importante**
>
> Es absolutamente necesario poner la prueba (la condición) entre paréntesis

Aquí hay un ejemplo para el clima de la mañana con texto condicional y generación de texto :

\[Buenos dias\|Salut\|Hola \] \ [espero que hayas dormido bien ?\|bien dormido ?\|como estas ?\] . \ [Hoy será \|Hoy el clima será \|Pronóstico del tiempo \] \#[Maison\]\[Météo\]\[Condition\]\# \ [y la temperatura será \|con\] {(\#\[Maison\]\[Météo\]\[Température Max\]\# < 6) ? \ [oula hará frío \|oula se cuaja \]: } \#\[Maison\]\[Météo\]\[Température Max\]\# grados.

# FAQ

>**¿El complemento gestiona ask ?**
>
>Sí, el complemento gestiona la solicitud.
