# Cómo informar un error ?

Hay varias formas en Jeedom para informar una inquietud :

- Poner la preocupación de nuevo en el [comunidad](https://community.jeedom.com), aquí suele ser donde obtendrá la respuesta más rápida.
- Informar una inquietud al equipo de Jeedom :
  - **Solicitud de soporte** (requiere un paquete de servicio de energía o más o incluso si la preocupación está en un complemento / servicio pago), esta solicitud es **privado** y lo pondrá directamente en contacto con el equipo de soporte de Jeedom que analiza su caso particular.
  - **Informe de error**, en este caso la solicitud es **publico** y será publicado en la comunidad.
  - **Solicitud mejora**, en este caso la solicitud es **publico** y será publicado en la comunidad.

> **Nota**
>
> En el caso de una solicitud de soporte en un complemento de terceros, se envía un correo electrónico al desarrollador del complemento.

> **Importante**
>
> El soporte se realiza exclusivamente por correo electrónico, recuerde controlar su correo no deseado. Muy a menudo, el soporte responde rápidamente (demora antes de la respuesta en promedio de menos de 72 horas, tenga cuidado, dependiendo del problema, puede ser mucho más largo).

## Qué información enviar para tener una solución lo más rápido posible ?

Cualquiera que sea el método utilizado para informar el problema encontrado, es muy importante proporcionar tanta información como sea posible. De hecho, para nuestro mayor pesar, el 80% de las solicitudes tienen la primera respuesta estándar : "dénos más información sobre el problema para que podamos ayudarlo. [...]". Y sí ... a pesar de nuestra buena voluntad, no vemos su pantalla, no tenemos historial de lo que hizo como manipulación, y a veces usamos un vocabulario diferente para hablar sobre las mismas cosas...

Pero como realmente queremos ayudarlo, aquí hay algunas pistas para brindarnos información valiosa :

- Su preocupación se refiere a un problema de visualización gráfica (widget, página, campos de texto ...), incluso si le parece obvio durante la explicación, coloque una captura de pantalla (de hecho, es posible copiar el ¡imagen directamente en la comunidad!), le tomará 30 segundos, le ahorrará varias decenas de minutos a la persona que intenta ayudarlo, y obtendrá una respuesta relevante, más rápido.
- Tiene un error "500" o "\ {\ {" en Jeedom : en este caso, coloque directamente el archivo http.error (puede encontrarlo rápidamente en Análisis -> Registros), sin eso, no podemos saber de dónde viene el problema (de nuevo, no hay luz de advertencia en libertad o entre desarrolladores externos para el momento !^^)
- Tiene un error de JavaScript (panel de advertencia en la parte superior derecha) o cuando hace F12, entonces consuela una línea roja. En este caso, comience por darnos el mensaje de error completo en cuestión. Desafortunadamente, en la mayoría de los casos, este mensaje de error a veces es un poco vago, por sí solo no permite identificar el problema encontrado. Entonces debe hacer F12 (en el navegador, en la pestaña Jeedom donde tiene problemas). Luego haga clic en "consola", luego intente reproducir el problema encontrado (comience por actualizar la página y, si es necesario, repita las mismas acciones)). Normalmente recibirá el mensaje de error nuevamente, pero esta vez deberá hacer clic al final de la línea (puede ser como en la captura de pantalla siguiente o en el formulario VMXXX.js) :

![remonter_un_bug001](images/remonter_un_bug001.png)

Luego tome una captura de pantalla de lo que se mostrará, en particular la línea roja :

![remonter_un_bug002](images/remonter_un_bug002.png)

Aquí, si sigues todo esto bien, deberías tener respuestas a tu problema mucho más rápido y mucho más preciso y tal vez incluso permitir que la persona que te ayudó a ayudar a otra persona sea más rápido.

- Tienes un problema con un demonio ? es absolutamente necesario poner el log en la depuración, de lo contrario no será posible ninguna ayuda. También puede agregar el registro de instalación de dependencias (a menudo en\_update).
- Tienes un problema instalando dependencias ? es absolutamente necesario poner el registro de su instalación (a menudo en\_update).

# Solicitudes de asistencia y soporte (o tickets)

Si no ha encontrado una solución a su problema, puede solicitar asistencia al equipo de Jeedom. 
Esta solicitud pasa por un ticket. 

El soporte está disponible según su Service Pack
- Service Pack Community (versión gratuita de Jeedom): 2 boletos / mes solo en complementos pagos
- Paquete de servicio Power and Ultimate: 10 entradas / mes
- Service Pack Pro: 100 entradas / mes

Es posible abrir una solicitud de varias formas:
[Solicitudes o tickets de soporte de documentación](https://doc.jeedom.com/es_ES/premiers-pas/#Les%20demandes%20de%20support%20\(ou%20tickets\))

>**Importante**
>
>Atención, vemos a muchos usuarios con buzones de correo "mailinblack", que durante el 1er intercambio le piden al remitente que valide un enlace para demostrar que efectivamente es un humano. Este sistema no es compatible con nuestro sistema de ticketing, por lo que aunque te respondamos, nunca recibirás la respuesta en tu buzón porque nos bloquea. Así que gracias en su página de perfiles de mercado por poner una dirección de correo electrónico que no usa este sistema, de lo contrario nunca recibirá nuestra respuesta.

