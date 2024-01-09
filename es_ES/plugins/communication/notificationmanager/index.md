# Complemento del Administrador de notificaciones

Este plugin se utiliza para gestionar notificaciones (recuperación en caso de error, generación de texto, etc...).

# Configuración del plugin

Después de descargar el complemento, todo lo que tiene que hacer es activar el complemento, no es necesaria ninguna otra configuración.

# Configuración del equipo

## Equipement

Configuración del equipo **Gerente de notificaciones** es accesible desde el menú Complementos → Comunicación. Aquí encontrará la configuración de su equipo :

- **Nombre del notificador** : Nombre del equipo.
- **Objeto padre** : indica el objeto padre al que pertenece el equipo.
- **Activar** : activa su equipo.
- **Visible** : hace que su equipo sea visible en el tablero.

## Commande

Aquí es donde podrá agregar comandos de notificación. Para cada comando de notificación, podrá definir los comandos de tipo de mensaje a utilizar en orden de prioridad.

![Gerente de notificaciones présentation](./images/notifmanager1.png)

Tienes opciones :

- **Prueba de ejecución** : permite agregar una prueba antes de la ejecución de la notificación. Si la prueba es falsa, el complemento no hará nada, si es verdadera, ejecutará las notificaciones en orden de prioridad hasta que encuentre una funcional. Si el campo está vacío, la prueba se ignora.

> **Nota**
>
> También tiene una prueba por pedido en la notificación.

> **Importante**
>
> El complemento no admite el cambio de nombre de los comandos de notificación. Si desea cambiar el nombre de un comando de notificación, deberá cambiar a todos los escenarios / equipos que lo utilizan para actualizar


**Ejemplo simple**

*Puede poner un comando de tipo Slack primero, luego un comando de tipo SMS. Si el envío por Slack no funciona, enviará el mensaje por SMS.*

**Ejemplo más complejo**

*Puede poner un comando de tipo Slack y un comando SMS primero (en el mismo cuadro, separados por ``&&``), luego correo. El complemento primero enviará el mensaje por Slack y SMS, si ambos no funcionan, enviará la notificación por correo electrónico.*

# Generación de texto

El complemento también ofrece la posibilidad de generar texto para que los mensajes no siempre sean idénticos. El sistema es el mismo que para las interacciones :

- ``[Coucou|Salut] ca va ?`` volverá ya sea "*Hola que tal ?*" o  "*Hola, todo bien ?*"

# Texto condicional

También es posible insertar texto condicional en el formulario ``{(test) ? vrai : faux}``.

> **Importante**
>
> Es absolutamente necesario poner la prueba (la condición) entre paréntesis.

Aquí hay un ejemplo para el clima de la mañana con texto condicional y generación de texto :

``[Bonjour|Salut|Coucou] [j'espères que tu as bien dormi ?|bien dormi ?|ça va ?]. [Aujourd'hui il fera|Aujourd'hui le temps sera|La météo annonce] #[Maison][Météo][Condition]# [et la température sera de|avec] {(#[Maison][Météo][Température Max]# < 6) ? [oula il va faire froid|oula il caille]: } #[Maison][Météo][Température Max]# degrés.``

# FAQ

>**¿El complemento gestiona ask ?**
>
>Sí, el complemento gestiona la solicitud.
