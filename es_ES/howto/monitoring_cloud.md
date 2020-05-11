# Monitoreo en la nube

## Description

El monitoreo en la nube es un servicio pago de Jeedom SAS que monitorea permanentemente tus Jeedoms o tus Jeedoms y te advierte en caso de problemas.

Dependiendo de la cantidad de meses que tome, tendrá derecho a meses libres : 

- 12 meses : 1 mes gratis
- 24 meses : 4 meses gratis
- 36 meses : 8 meses gratis

## Lo que se está monitoreando

Jeedom envía regularmente la información de la página de salud a nuestro servicio de monitoreo, que la analiza y le alerta si tiene alguna inquietud. Además, si su casilla no envía información durante más de 15 minutos, nuestro servicio de monitoreo le advierte que hay un problema.

## Como me avisan

De forma predeterminada, se le notifica por un correo electrónico en su correo electrónico configurado en sus perfiles, pero puede hacerlo en la configuración de la supervisión en la nube (en la página de perfiles de su mercado) : 

- Poner otra dirección de correo electrónico (solo una posible)
- Agregar una alerta en Telegram
- Agregue una alerta en Slack (solo proporcione la dirección de Webhook)
- Agregue una alerta de SMS (tenga en cuenta que esto requiere que tenga crédito de SMS en el mercado)
- Agregar una alerta por notificación (requiere la aplicación móvil) 

> **Telegram**
>
> Puede encontrar su chatid desde jeedom yendo al equipo de telegramas, luego a la configuración avanzada del comando del destinatario deseado, luego al botón de información y en el campo de configuración tiene el chatid

## Cómo activarlo

El procedimiento es bastante simple, tienes que : 

- tiene crédito de monitoreo en la nube (puede comprarlo en un lote de 1 mes, por lo que puede tomar 2 meses y luego detener 6 meses y luego reanudarlo)
- tener libertad 3.3.44 min

Después de agregar crédito de monitoreo en la nube, debe esperar unas horas (alrededor de 24 horas), o en Jeedom, en la sección de configuración y luego actualizar, haga clic en el botón "probar" para conectarse al mercado (esto obliga a Jeedom a recuperarse información de mercado y, por lo tanto, el hecho de que el servicio de monitoreo en la nube está activo).

>**Importante**
>
> Una vez que se activa el servicio, monitorea todos los Jeedom conectados a su cuenta

>**Importante**
>
> Para las notificaciones, simplemente recolecte el arn de su dispositivo móvil, se encuentra en el complemento móvil, en su equipo móvil, luego acceda a la pestaña "notificación", luego copie la línea "ARN". que hay después de "arn:aws:sns:eu-west-1:507915066327:endpoint/"

## Es compatible con todo ?

- Inteligente (probado)
- Debian x64 Stretch (probado)
- Debian x64 Jessie
- RPI
