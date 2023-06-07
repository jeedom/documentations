# Sistema Ajax

## Configuration

>**IMPORTANTE**
>
>Para tener una retroalimentación en tiempo real, es ABSOLUTAMENTE necesario que su Jeedom sea accesible desde el exterior (URL de acceso externo utilizada)

La configuración del complemento es muy simple y se realiza en 2 pasos : 

- configurando el enlace entre tu libertad y tu alarma
- adición de un correo electrónico para compartir para informar eventos  

>**IMPORTANTE**
>
>Un punto importante Ajax no genera una alerta global cuando se activa una alarma, pero sí eleva el estado del detector que activó la alarma (comando de eventos)

>**IMPORTANTE**
>
>El demonio solo se usa para la parte SIA. Si lo desactiva, seguirá teniendo información procedente de la nube. Por lo tanto, puede desactivarlo si no utiliza la parte SIA

## Compatibilité

Puedes encontrar [aquí](https://compatibility.jeedom.com/index.php?v=d&p=home&plugin=ajaxSystem) la lista de módulos compatibles con el complemento

### Configuración de enlaces 

Para configurar el enlace entre su Jeedom y su alarma Ajax, vaya a "Complemento" -> "Administración de complementos" -> "Sistema Ajax", luego haga clic en "Conectar", ingrese sus identificadores Ajax y haga clic en "Validar".

>**IMPORTANTE**
>
>Si tiene una cuenta profesional, no debe usarla aquí, es absolutamente necesario que use una cuenta de usuario simple

>**NOTA**
>
> Jeedom absolutamente no guarda sus credenciales de Ajax : son solo uno que se usa para la primera solicitud a Ajax y tienen el token de acceso y el token de actualización. El token de actualización permite recuperar un nuevo token de acceso que tiene una vida útil de solo unas pocas horas.

>**NOTA**
>
> Una vez realizado el enlace todas las solicitudes pasan por nuestra nube pero en ningún momento la nube almacena su token de acceso, por lo que no es posible con solo la nube jeedom actuar en su alarma. Para cualquier acción al respecto, es absolutamente necesario la combinación del token de acceso de Jeedom y una clave conocida solo en nuestra nube 

### Configuración de informes de eventos

Desde la aplicación Ajax, vaya al concentrador y luego en la configuración (pequeña rueda dentada en la parte superior derecha) vaya al usuario y agregue el usuario : ajax@jeedom.com

>**NOTA**
>
>La invitación permanece y siempre estará pendiente, esto es normal

## Equipo 

Una vez que la configuración está en "Complemento" -> "Administración de complementos" -> "Sistema Ajax", solo tiene que sincronizar, Jeedom creará automáticamente todos los equipos Ajax vinculados a su cuenta Ajax. 

### Detector de movimiento

Pequeña especificidad para el detector de movimiento, no sube a la detección de movimiento de forma permanente. De hecho, solo sube cuando la alarma está activa y por el comando de evento

### Detector de apertura

Para él, no se preocupe, tiene el estado en tiempo real de la información de ventana / puerta abierta / cerrada.

## SIA

>**IMPORTANTE**
>
> Actualmente, esta función no es compatible con los RPI y no parece funcionar correctamente con Debian 11 (que actualmente no es oficialmente compatible con jeedom porque hay demasiados complementos que no la admiten)

También es posible conectar la alarma Ajax a Jeedom mediante el protocolo SIA, que tiene la ventaja de ser local (sin nube) pero que solo puede recibir información (no es posible el control de alarmas).

>**IMPORTANTE**
>
> Si estás en python <3.8 (Debian 10), o si obtiene el `ImportError: no puede importar el nombre 'CommunicationsProtocol' de 'pysiaalarm' debe ir a "Configuración" -> "Sistema" -> "Configuración", luego la pestaña "OS / DB" y luego en "Herramientas del sistema" haga clic en "Abrir" frente a "Sistema Administración". Y haz el comando `sudo pip3 install pysiaalarm == 3.0.0b9`

## Configurar el AIS

La configuración del SIA es bastante simple, en "Complemento" -> "Administración de complementos" -> "Sistemas Ajax", tendrás : 
- usando el demonio SIA
- la cuenta SIA
- la clave de cifrado SIA

Luego debe ir a la aplicación Ajax Systeme (desde su teléfono), ir a "Dispositivos" luego hacer clic en el hub, ir a su configuración (rueda dentada en la parte superior derecha), ir a "Centro de Monitoreo" y completar la información : 

- puerto (el de Jeedom)
- Cuenta SIA (lo mismo en Jeedom)
- clave de cifrado (ídem)
- ip : poner la ip local de Jeedom

También puede cambiar la frecuencia de la prueba de servicio de 1 minuto a 24 horas (para reducir la carga en su Jeedom).

Normalmente, si todo está bien, debería ver el cambio de "Estación central" a "Conectado"

>**IMPORTANTE**
>
> Cierta información solo se devuelve si el AIS está configurado

# FAQ

>**Configuración de MQTT**
>
>En la configuración del complemento tiene la posibilidad de pasar por la parte SIA en mqtt, voluntariamente no hay una explicación de cómo porque la implementación es relativamente compleja. La opción está ahí para satisfacer una necesidad del cliente solamente.
