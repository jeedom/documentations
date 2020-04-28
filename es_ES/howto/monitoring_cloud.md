# Monitoreo en la nube

## Descripción

El monitoreo en la nube es un servicio pago de Jeedom SAS que monitorea permanentemente tus Jeedoms o tus Jeedoms y te advierte en caso de problemas.

Dependiendo de la cantidad de meses que tome, tendrá derecho a meses libres. : 

- 12 meses : 1 mes gratis
- 24 meses : 4 meses gratis
- 36 meses : 8 meses gratis

## Lo que se está monitoreando

La lista de lo que se monitorea evoluciona para tratar de ser lo más reactivo / proactivo posible, en los controles básicos que tiene : 

- Sistema disponible
- Servidor web (apache2) iniciado
- Base de datos (mysql) iniciada
- Carga de la CPU
- Carga de memoria
- Carga SWAP
- Entrada / salida de disco
- Espacio disco libre

También se le advierte cuando se reinicia su Jeedom.

# Historial

En el mercado desde su página de perfil, luego, al hacer clic en la información en la pestaña de seguimiento de servicios de mi parte del servicio, tiene todos los datos actuales conocidos en su libertad y puede hacer clic en el gráfico para ver el historial durante las últimas 24 horas (nosotros no guarde más datos que las últimas 24 horas)

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
- tener libertad 3.2.9 min

Después de agregar crédito de monitoreo en la nube, debe esperar unas horas (alrededor de 24 horas), o en Jeedom, en la sección de configuración y luego actualizar, haga clic en el botón "probar" para conectarse al mercado (esto obliga a Jeedom a recuperarse información de mercado y, por lo tanto, el hecho de que el servicio de monitoreo en la nube está activo).

Entonces puede ver en la sección de salud de Jeedom si está activo. Se tarda aproximadamente 10 minutos en iniciarse después de la sincronización con el mercado (haga clic en el botón de prueba).

>**Importante**
>
>Durante la primera activación o reactivación, es posible que reciba un correo electrónico / telegrama / slack / sms diciéndole que su Jeedom no está disponible. Es normal, es hora de que el Jeedom en cuestión active los servicios de monitoreo..

>**Importante**
>
> Una vez que se activa el servicio, monitorea todos los Jeedom conectados a su cuenta

>**Importante**
>
> Para las notificaciones, simplemente recolecte el arn de su dispositivo móvil, se encuentra en el complemento móvil, en su equipo móvil, luego acceda a la pestaña "notificación", luego copie la línea "ARN". que hay después de "arn::::507915066327:punto final /"

## Es compatible con todo ?

- Inteligente (probado)
- Debian x64 Stretch (probado)
- 
- RPI

# Preguntas frecuentes

>**Recibo un mensaje cada 10 minutos que me dice que Jeedom se ha reiniciado cuando no es cierto.**
>
>Esto sucede si tiene varios cuadros Jeedom, incluidos 2 (o más) con la misma clave de instalación (página Configuración -> Sistema -> Configuración). En este caso, el mercado solo ve una caja, el sistema de monitoreo también excepto que una vez en 2 cambia el tiempo desde que las máquinas comenzaron (una caja de golpe 1, una caja de golpe 2), de ahí el alertas. Para corregirlo es suficiente en uno de los jeedoms en la página donde está la clave de instalación para hacer "Restablecer"
