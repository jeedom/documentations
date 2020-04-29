# Asistentes de voz en la nube

## Descripción

Este servicio le permite conectar su Jeedom con asistentes de voz de Google y Amazon.

Se puede usar con 
- el complemento Dialogflow, [Documentación](https://jeedom.github.io/plugin-dialogflow/es_ES/)
- o el complemento de Google Smarthome, [Documentación](https://jeedom.github.io/plugin-gsh/es_ES/)
- o el complemento de Alexa, [Documentación](https://jeedom.github.io/plugin-ash//es_ES/)

Este servicio es de pago y puede suscribirse en el Jeedom Market, en la página [Mis servicios](https://www.jeedom.com/market/index.php?v=d&p=profils#services)

Encontrará en la documentación respectiva de los complementos sus diferencias.

Luego, una vez que se suscribe la suscripción, debe esperar la sincronización (consulte el siguiente capítulo). Puede configurarlo siguiendo la documentación del complemento

## Sincronización y retraso

Hay retrasos de sincronización durante las siguientes acciones :

- Activacion de cuenta
- Compra del año en el servicio Voice Assistant
- Cambio de clave API API del complemento smarthome
- Cambio de url de Jeedom
- Cambiar mercado de contraseñas

La sincronización tiene lugar cada 6 horas (a las 12.10 a.m. 6.60.10.12.12.10.18.10). Esta sincronización se debe a nuestro deseo de hacer que el servidor de terceros que hace que el puente entre su Jeedom y la infraestructura de Google / Amazon sea independiente y autónomo (evita durante un problema en el mercado, por ejemplo, también perder el servicio de asistente de voz). Durante la sincronización, se reinicia el servicio (interrupción de menos de 1 s), lo que explica la limitación de una vez cada 6 horas..
