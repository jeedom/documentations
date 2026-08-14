# Supervisión en la nube

## Descripción

La supervisión en la nube es un servicio de pago de Jeedom SAS que supervisa constantemente tu Jeedom o tus Jeedoms y te avisa en caso de problemas.

En función del número de meses contratados, tendrás derecho a meses gratis:

- 12 meses: 1 mes gratis
- 24 meses: 4 meses gratis
- 36 meses: 8 meses gratis

## ¿Qué se supervisa?

Jeedom envía periódicamente la información de la página de estado a nuestro servicio de supervisión, que la analiza y te avisa en caso de que haya algún problema. Además, si tu dispositivo no envía información durante más de 60 minutos, nuestro servicio de supervisión te avisa de que hay un problema.

## ¿Cómo recibo las notificaciones?

Por defecto, recibirás una notificación por correo electrónico en la dirección configurada en tu perfil, pero puedes, en la configuración de la supervisión en la nube (en tu página de perfil del mercado):

- Introducir otra dirección de correo electrónico (solo se puede introducir una)
- Añadir una alerta en Telegram
- Añadir una alerta en Slack (solo hay que indicar la dirección del webhook)
- Añadir una alerta por SMS (atención: para ello es necesario que tengas saldo para SMS en el Market)
- Añadir una alerta mediante notificación (requiere la aplicación móvil)

> **Telegram**
>
> Puedes encontrar tu chatid desde Jeedom accediendo a «Equipos Telegram», luego a «Configuración avanzada» del comando del destinatario deseado, a continuación al botón «Información» y, en el campo «Configuración», encontrarás el chatid.

> **IMPORTANTE**
>
> Atención: vemos que muchos usuarios tienen direcciones de correo electrónico «mailinblack», que en el primer intercambio piden al remitente que valide un enlace para demostrar que se trata de una persona real. Este sistema no es compatible con el sistema de envío de correos del servicio de monitorización. Por lo tanto, os agradecemos que, en vuestra página de perfiles del mercado, incluyáis una dirección de correo electrónico que no utilice este sistema; de lo contrario, nunca recibiréis alertas del sistema.

## Cómo activarla

El procedimiento es bastante sencillo, hay que:

- Disponer de crédito para el servicio de monitorización en la nube (se compra por paquetes de un mes, por lo que puedes contratar dos meses, interrumpir el servicio durante seis meses y volver a contratarlo después)
- Tener Jeedom 3.3.44 como mínimo

Después de añadir el crédito de monitorización en la nube, hay que esperar unas horas (unas 24 horas) o, en Jeedom, en la sección de configuración y, a continuación, en «Actualizar», hacer clic en el botón «Probar» para conectarse al mercado (esto obliga a Jeedom a recuperar la información del mercado y, por lo tanto, a detectar que el servicio de monitorización en la nube está activo).

>**IMPORTANTE**
>
> Una vez activado el servicio, este supervisa todos los dispositivos Jeedom vinculados a tu cuenta. No obstante, a partir de Jeedom 4.2 es posible desactivar la supervisión desde la configuración del mismo (pestaña «Market/Actualización»).

>**IMPORTANTE**
>
> Para las notificaciones, solo tienes que obtener el ARN de tu móvil, que se encuentra en el complemento móvil, en tu dispositivo móvil; a continuación, accede a la pestaña «Notificaciones» y copia la línea «ARN». Ten en cuenta que solo debes copiar lo que aparece después de «arn:aws:sns:eu-west-1:507915066327:endpoint/».

## ¿Es compatible con todo?

- Smart (probado)
- Debian x64 Stretch (probado)
- Debian x64 Jessie
- RPI
