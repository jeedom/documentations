# Monitoreo en la nube

## Description

El monitoreo en la nube es un servicio pago de Jeedom SAS que monitorea permanentemente tus Jeedoms o tus Jeedoms y te advierte en caso de problemas.

Dependiendo de la cantidad de meses que tome, tendrá derecho a meses libres : 

- 12 meses : 1 mes gratis
- 24 meses : 4 meses gratis
- 36 meses : 8 meses gratis

## Lo que se está monitoreando

Jeedom envía regularmente la información de la página de salud a nuestro servicio de monitoreo, que la analiza y le alerta si tiene alguna inquietud. De plus si votre box n'envoi pas d'information pendant plus de 60min notre service monitoring vous prévient qu'il y a un soucis.

## Como me avisan

De manera predeterminada, se le notifica por un correo electrónico en su correo electrónico configurado en sus perfiles, pero puede hacerlo en la configuración de monitoreo en la nube (en la página de perfiles de su mercado) : 

- Poner otra dirección de correo electrónico (solo una posible)
- Agregar una alerta en Telegram
- Agregue una alerta en Slack (solo proporcione la dirección de Webhook)
- Agregue una alerta de SMS (tenga en cuenta que esto requiere que tenga crédito de SMS en el mercado)
- Agregar una alerta por notificación (requiere la aplicación móvil) 

> **Telegram**
>
> Puede encontrar su chatid desde jeedom yendo al equipo de telegramas, luego a la configuración avanzada del comando del destinatario deseado, luego al botón de información y en el campo de configuración tiene el chatid

> **Importante**
>
> Atención, vemos a muchos usuarios con buzones de correo "mailinblack", que durante el 1er intercambio le piden al remitente que valide un enlace para demostrar que efectivamente es un humano. Este sistema no es compatible con el sistema de correo del servicio de seguimiento. Así que gracias en su página de perfiles de mercado por poner una dirección de correo electrónico que no usa este sistema, de lo contrario, nunca recibirá una alerta del sistema.

## Cómo activarlo

El procedimiento es bastante simple, tienes que : 

- tiene una nube de monitoreo de crédito (puede comprarlo en un lote de 1 mes, por lo que puede tomar 2 meses y luego detener 6 meses y luego reanudarlo después de)
- tener libertad 3.3.44 min

Después de agregar crédito de monitoreo en la nube, debe esperar unas horas (alrededor de 24 horas), o en Jeedom, en la sección de configuración y luego actualizar, haga clic en el botón "prueba" para conectarse al mercado (esto obliga a Jeedom a recuperarse información de mercado y, por lo tanto, el hecho de que el servicio de monitoreo en la nube está activo).

>**Importante**
>
> Una vez que se activa el servicio, monitorea todos los Jeedom conectados a su cuenta. Sin embargo, es posible de Jeedom 4.2 para desactivar la monitorización desde su configuración (Market / pestaña actualización))

>**Importante**
>
> Para las notificaciones, simplemente recolecte el arn de su dispositivo móvil, se encuentra en el complemento móvil, en su equipo móvil, luego acceda a la pestaña "notificación", luego copie la línea "ARN". que hay después de "arn:aws:sns:eu-west-1:507915066327:endpoint/"

## Es compatible con todo ?

- Inteligente (probado)
- Debian x64 Stretch (probado)
- Debian x64 Jessie
- RPI
