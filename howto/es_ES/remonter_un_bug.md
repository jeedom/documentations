# ¿Cómo se informa de un error?

En Jeedom hay varias formas de informar de un problema:

- Informar del problema en la [comunidad](https://community.jeedom.com); por lo general, ahí es donde obtendrás la respuesta más rápida.
- Notificar un problema al equipo de Jeedom:
  - **Solicitud de asistencia** (requiere un Service Pack Power o superior, o bien que el problema esté relacionado con un complemento o servicio de pago); esta solicitud es **privada** y te pondrá en contacto directamente con el equipo de asistencia de Jeedom, que analizará tu caso concreto.
  - **Notificación de error**: en este caso, la solicitud es **pública** y se publicará en la comunidad.
  - **Solicitud de mejora**: en este caso, la solicitud es **pública** y se publicará en la comunidad.

> **NOTA**
>
> En caso de solicitar asistencia técnica para un complemento de terceros, se envía un correo electrónico al desarrollador del complemento.

> **IMPORTANTE**
>
> Dado que la asistencia se presta exclusivamente por correo electrónico, no olvides revisar tu carpeta de correo no deseado. Por lo general, el servicio de asistencia responde rápidamente (el plazo medio de respuesta es inferior a 72 horas, aunque ten en cuenta que, dependiendo del problema, puede tardar mucho más).

## ¿Qué datos hay que facilitar para obtener una solución lo antes posible?

Sea cual sea el método que utilices para comunicarnos el problema que has tenido, es muy importante que nos des toda la información posible. De hecho, lamentamos mucho que el 80 % de las consultas reciban como primera respuesta: «Por favor, danos más información sobre el problema que has tenido para que podamos ayudarte. [...]». Y sí... a pesar de nuestra buena voluntad, no vemos su pantalla, no tenemos ningún historial de las acciones que ha realizado y, a veces, utilizamos un vocabulario diferente para referirnos a las mismas cosas...

Pero como realmente queremos ayudarte, aquí tienes algunas pistas para que nos facilites información útil:

- Si tu duda se refiere a un problema de visualización gráfica (widget, página, campos de texto...), aunque te parezca obvio al explicarlo, adjunta una captura de pantalla (¡de hecho, se puede subir la imagen directamente a la comunidad!), te llevará 30 segundos, le ahorrará varias decenas de minutos a la persona que intenta ayudarte y obtendrás una respuesta adecuada más rápidamente.
- Si te aparece un error «500» o caracteres «\{\{» en Jeedom: en ese caso, envía directamente el archivo http.error (puedes encontrarlo rápidamente en Análisis -> Registros); sin él, nos resulta imposible saber de dónde viene el problema (una vez más, ¡por ahora no hay ningún adivino ni en Jeedom ni entre los desarrolladores externos! ^^)
- Si te aparece un error de JavaScript (un panel de advertencia en la esquina superior derecha) o, al pulsar F12 y acceder a la consola, ves una línea roja, empieza por facilitarnos el mensaje de error completo en cuestión. Lamentablemente, en la mayoría de los casos este mensaje de error resulta a veces un poco impreciso, por lo que por sí solo no permite identificar el problema que se ha producido. Por lo tanto, debes pulsar F12 (en el navegador, en la pestaña de Jeedom donde se produce el problema). A continuación, haz clic en «Consola» e intenta reproducir el problema (empieza por actualizar la página y, si es necesario, repite las mismas acciones). Normalmente volverá a aparecer el mensaje de error, pero esta vez deberá hacer clic al final de la línea (puede aparecer como en la captura de pantalla que se muestra a continuación o en el formato VMXXX.js):

![informar_de_un_error001](../images/remonter_un_bug001.png)

A continuación, haz una captura de pantalla de lo que se va a mostrar, sobre todo de la línea en rojo:

![informar_de_un_error002](../images/remonter_un_bug002.png)

Si sigues bien todas estas indicaciones, deberías obtener respuestas a tu problema mucho más rápidas y precisas, y quizá incluso permitir que la persona que te ha ayudado pueda ayudar a otra persona más rápidamente.

- ¿Tienes algún problema con un demonio? Es imprescindible que actives el modo de depuración de su registro; de lo contrario, no podremos ayudarte. También puedes añadir el registro de instalación de las dependencias (que suele encontrarse en \_update).
- ¿Tienes algún problema al instalar las dependencias? Es imprescindible que incluyas el registro de su instalación (que suele encontrarse en \_update).

# Solicitudes de asistencia y soporte (o tickets)

Si no has encontrado una solución a tu problema, puedes enviar una solicitud de asistencia al equipo de Jeedom.
Esta solicitud debe realizarse mediante un ticket.

El servicio de asistencia está disponible en función de tu Service Pack
- Service Pack Community (versión gratuita de Jeedom): 2 tickets al mes solo para los complementos de pago
- Service Pack Power y Ultimate: 10 tickets al mes
- Service Pack Pro: 100 tickets al mes

Hay varias formas de presentar una solicitud:
[Documentación: Solicitudes de asistencia o tickets](/premiers-pas#Les%20demandes%20de%20support%20\(ou%20tickets\))

>**IMPORTANTE**
>
>Atención: vemos que muchos usuarios tienen direcciones de correo electrónico del tipo «mailinblack», que en el primer intercambio piden al remitente que valide un enlace para demostrar que se trata de una persona real. Este sistema no es compatible con nuestro sistema de gestión de incidencias, por lo que, aunque te respondamos, nunca recibirás la respuesta en tu buzón de correo, ya que este nos bloquea. Por lo tanto, te agradecemos que, en tu página de perfil del mercado, indiques una dirección de correo electrónico que no utilice este sistema; de lo contrario, nunca recibirás nuestra respuesta.

