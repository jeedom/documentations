# Plugin GreenIQ 

Plugin para controlar el riego automático usando el cuadro GreenIQ. Es posible definir el tipo de operación para las 6 salidas de solenoide : 

- Auto : El riego de la zona se activa de acuerdo con la programación GreenIQ 
- Apagado : el riego está deshabilitado 
- Uno : se activa el riego (duración 3 h)

![greeniq screenshot1](./images/greeniq_screenshot1.png)

# Configuración 

Para usar su GreenIQ con Jeedom, debe solicitar una identificación de cliente y un cliente secreto. La solicitud se realiza por correo electrónico a <developers@greeniq.co>, la respuesta se realiza muy rápidamente, normalmente en 24 horas.

También debe tener el nombre de usuario / contraseña proporcionado en la tarjeta pequeña que viene con GreenIQ.

Una vez que se obtienen los códigos, debe ingresarlos en el complemento de esta manera : ![greeniq1](./images/greeniq1.png)

# Uso 

Hay mucha información disponible en el widget : 1. Estado de la válvula 2. Estado de configuración 3. % progreso 4. Hora final de riego

![greeniq2](./images/greeniq2.png)

La configuración de cada válvula también es posible y hay 3 acciones disponibles :

1. Auto : El riego de la zona se activa de acuerdo con la programación GreenIQ
2. Off : el riego está deshabilitado
3. Nosotros : se activa el riego (duración 3 h)

# Preguntas frecuentes 

El sistema recupera información cada 5 minutos.
