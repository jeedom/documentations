# Cómo archivar un error ?

Hay varias formas en Jeedom para informar un problema :

- Plantear la preocupación sobre el [comunidad](https://community.jeedom.com), por lo general, ahí es donde obtendrá la respuesta más rápida.
- Plantear una inquietud al equipo de Jeedom :
  - **Solicitud de soporte** (requiere un paquete de servicio de energía o más o la preocupación está en un servicio/complemento pagado), esta solicitud es **privado** y te pondrá directamente en contacto con el equipo de soporte de Jeedom que analiza tu caso particular.
  - **Informe de error**, en este caso la solicitud es **público** y será publicado en la comunidad.
  - **Solicitud de mejora**, en este caso la solicitud es **público** y será publicado en la comunidad.

> **NOTA**
>
> En el caso de una solicitud de soporte en un complemento de terceros, se envía un correo electrónico al desarrollador del complemento.

> **IMPORTANTE**
>
> Como el soporte se brinda exclusivamente por correo electrónico, recuerde vigilar su correo no deseado. La mayoría de las veces, el soporte responde rápidamente (tiempo de respuesta promedio de menos de 72 horas, la atención dependiendo del problema puede ser mucho más larga)).

## Qué información enviar para obtener una solución lo antes posible ?

Cualquiera que sea el método utilizado para informar el problema encontrado, es muy importante dar la mayor cantidad de información posible. De hecho, para nuestro mayor pesar, el 80% de las solicitudes tienen como primer tipo de respuesta : "por favor proporcione más información sobre el problema encontrado para que podamos ayudarle. [...]". Y sí... a pesar de nuestra buena voluntad, no podemos ver tu pantalla, no tenemos historial de lo que has hecho como manipulación, y a veces usamos vocabulario diferente para hablar de las mismas cosas...

Pero como tenemos muchas ganas de ayudarte, aquí tienes algunas pistas para que nos des información valiosa :

- Su preocupación se refiere a un problema de visualización de gráficos (widget, página, campos de texto...), incluso si le parece obvio durante la explicación, coloque una captura de pantalla (¡de hecho, es posible copiar la 'imagen directamente en la comunidad!) , le tomará 30 segundos, le ahorrará varias decenas de minutos a la persona que intenta ayudarlo y obtendrá una respuesta relevante más rápido.
- Tiene un error "500" o "\{\{" en Jeedom : en este caso, pon el archivo http directamente.error (puede encontrarlo rápidamente en Análisis -> Registros), sin eso, es imposible para nosotros saber de dónde proviene el problema (nuevamente, no hay indicadores en Jeedom o entre desarrolladores de terceros por el momento !^^)
- Tiene un error de javascript (panel de advertencia en la parte superior derecha) o cuando hace F12, consola una línea roja. En este caso, empieza por darnos el mensaje de error completo en cuestión. Desafortunadamente, en la mayoría de los casos, este mensaje de error, a veces un poco vago, no identifica por sí solo el problema encontrado. Por lo tanto, debe hacer F12 (en el navegador, en la pestaña Jeedom donde encuentra la dificultad). Luego haga clic en "consola", luego intente reproducir el problema encontrado (comience por actualizar la página y, si es necesario, repita las mismas acciones). Normalmente volverá a tener el mensaje de error, pero esta vez tendrá que hacer clic al final de la línea (puede ser como en la captura a continuación o en el formulario VMXXX.js) :

![remonter_un_bug001](images/remonter_un_bug001.png)

Luego haga una captura de lo que se mostrará, en particular la línea en rojo :

![remonter_un_bug002](images/remonter_un_bug002.png)

Aquí, si sigue todo esto correctamente, debería tener respuestas mucho más rápidas y precisas a su problema y quizás incluso permitir que la persona que lo ayudó ayude a otra persona más rápidamente.

- Tienes un problema con un demonio ? es absolutamente necesario poner el inicio de sesión en la depuración de este, de lo contrario, no será posible obtener ayuda. También puede agregar el registro de instalación de dependencias (a menudo en \_update).
- Tienes un problema al instalar dependencias ? es absolutamente necesario poner el registro de su instalación (a menudo en \_update).

# Solicitudes de Asistencia y Soporte (o tickets)

Si no ha encontrado una solución a su problema, puede enviar una solicitud de soporte al equipo de Jeedom. 
Esta solicitud pasa por un ticket. 

El soporte está disponible según su Service Pack
- Service Pack Community (versión gratuita de Jeedom): 2 entradas/mes solo en plugins de pago
- Paquetes de servicio Power y Ultimate: 10 entradas/mes
- Paquete de servicio Pro: 100 entradas/mes

Es posible abrir una solicitud de varias maneras:
[Solicitudes o tickets de soporte de documentación](https://doc.jeedom.com/es_ES/premiers-pas/#Les%20demandes%20de%20support%20\(ou%20tickets\))

>**IMPORTANTE**
>
>Ojo, vemos muchos usuarios con buzones de correo "mailinblack", que durante el 1er intercambio piden al remitente que valide un enlace para demostrar que efectivamente se trata de un humano. Este sistema no es compatible con nuestro sistema de ticketing, por lo que aunque te respondamos nunca recibirás la respuesta en tu buzón porque nos bloquea. Así que gracias en su página de perfiles de mercado por poner una dirección de correo electrónico que no utilice este sistema, de lo contrario, nunca recibirá nuestra respuesta.

