# Tipo genérico

El tipo genérico es un concepto muy importante en Jeedom utilizado por muchos complementos. Esto es lo que generalmente permite a Jeedom saber qué está haciendo el equipo y cómo hacerlo.

## Principio 

El principio es muy simple, es una propiedad de un pedido. Hay muchos y agregamos más a menudo. Por ejemplo, tienes "Botón de luz encendida", al poner esta propiedad en el comando "Encender" de Jeedom, entenderás que es una luz y que para encenderla debes ejecutar este comando.

Por ejemplo, es muy utilizado en los complementos de Alexa Smarthome o Google Smarthome, te permite saber qué tipo de equipo enviar a Alexa o Google Home y cuándo se hace una solicitud para saber cómo responder.

La mayoría de las veces, el tipo genérico se establece automáticamente al configurar su módulo (inclusión en Z-wave, por ejemplo). Pero puede haber ocasiones en las que necesite reconfigurarlos.

## Configure el tipo genérico 

Es muy simple tienes que ir a la configuración avanzada del comando luego a la pestaña de configuración y tienes un "Tipo genérico"

Cómo ir a la configuración avanzada de un pedido :

- En la página de configuración de su equipo, pestaña de comando haciendo doble clic en la línea de comando o en el botón con las 3 pequeñas ruedas dentadas
- Desde la configuración avanzada del equipo tienes la lista de pedidos y las 3 pequeñas ruedas dentadas al final de la línea 
- Desde Análisis -> Resumen de domótica, busca o despliega hasta encontrar su pedido y luego hace clic en él o en la rueda dentada al final de la línea

Aquí lo sabes todo, no dudes en intentar poner para cada pedido el tipo genérico que corresponda esto permitirá al plugin entender mejor lo que hace tu equipo
