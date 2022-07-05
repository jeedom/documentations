# Monitoreo en la nube

## Description

El monitoreo en la nube es un servicio Jeedom SAS pago que monitorea constantemente su(s) Jeedom(s) y le advierte de cualquier problema.

Según el número de meses cursados, tendrás derecho a meses gratis : 

- 12 meses : 1 mes gratis
- 24 meses : 4 meses gratis
- 36 meses : 8 meses gratis

## Que se monitorea

Jeedom envía regularmente información de la página de salud a nuestro servicio de monitoreo, que la analiza y le advierte en caso de un problema. Además, si tu casilla no envía información durante más de 15 minutos, nuestro servicio de monitorización te avisará de que hay un problema.

## Como me notifican

De manera predeterminada, se le notifica mediante un correo electrónico en su correo electrónico configurado en sus perfiles, pero puede hacerlo en la configuración de monitoreo en la nube (en la página de perfiles de su mercado)) : 

- Pon otra dirección de correo electrónico (solo una posible))
- Añadir una alerta en Telegram
- Añade una alerta en Slack (solo tienes que dar la dirección del Webhook)
- Agregue una alerta de SMS (tenga en cuenta que esto requiere que tenga crédito de SMS en el mercado)
- Agregar una alerta por Notificación (requiere la aplicación móvil) 

> **Telegrama**
>
> Puede encontrar su chatid de jeedom yendo al equipo de telegramas luego configuración avanzada del pedido del destinatario deseado luego el botón de información y allí en el campo de configuración tiene el chatid

> **IMPORTANTE**
>
> Ojo, vemos muchos usuarios con buzones de correo "mailinblack", que durante el 1er intercambio piden al remitente que valide un enlace para demostrar que efectivamente se trata de un humano. Este sistema no es compatible con el sistema de envío de correo del servicio de vigilancia. Así que gracias en su página de perfiles de mercado por poner una dirección de correo electrónico que no use este sistema, sin ella nunca recibirá una alerta del sistema.

## Como activarlo

El procedimiento es bastante simple, tienes que : 

- tener crédito de monitoreo en la nube (se compra en lotes de 1 mes, por lo que puede tomar 2 meses, luego detener 6 meses y luego reanudar después)
- tener libertad 3.3.44 mínimo

Después de agregar el crédito de monitoreo en la nube, debe esperar unas horas (aproximadamente 24 horas), o en Jeedom, en la parte de configuración y luego actualizar, haga clic en el botón "probar" para conectarse al mercado (esto obliga a Jeedom a recuperar el mercado información y por tanto el hecho de que el servicio de monitorización en la nube esté activo).

>**IMPORTANTE**
>
> Una vez que el servicio está activado, monitorea todos los Jeedom conectados a su cuenta. Sin embargo, es posible desde Jeedom 4.2 para desactivar la monitorización desde su configuración (pestaña Market/actualizar))

>**IMPORTANTE**
>
> Para las notificaciones, simplemente recupere el arn de su móvil, se encuentra en el complemento móvil, en su equipo móvil, luego acceda a la pestaña "notificación" y luego copie la línea "ARN", tenga cuidado, solo debe tomar esto lo que está después "Arn:aws:sns:eu-west-1:507915066327:endpoint/"

## Es compatible con todo ?

- Inteligente (probado)
- Debian x64 Stretch (probado)
- Debian x64 Jessie
- RPI
