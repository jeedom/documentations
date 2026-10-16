# Complemento de enlace amplio

Complemento que permite conectar Jeedom con dispositivos Broadlink.

# Configuración del plugin

Una vez instalado el plugin, hay que activarlo y asegurarse de que las dependencias se hayan instalado correctamente.

>**IMPORTANTE**
>
>No se recomienda cambiar el puerto de socket interno.

# Inclusión de equipos

Ve al menú Complementos => Protocolo de domótica => Broadlink. Una vez en la página, haz clic en el botón INCLUSIÓN. Lógicamente, se reconocerán todos los productos Broadlink de tu red.

# Configuración del equipo

Selecciona uno de tus dispositivos. Si se trata de productos de tipo infrarrojo, aparecerá un botón «Aprender un comando» en la parte superior. Solo tienes que hacer clic en él; a continuación, dispones de 5 segundos para que tu Broadlink aprenda un comando por infrarrojos o de 433. A continuación, el complemento te confirmará que la operación se ha realizado correctamente y creará el comando asociado, al que solo tendrás que asignarle un nombre.

>**INFORMACIÓN**
>
>Para evitar que aprenda señales que puedan provenir del entorno *(el mando a distancia de un vecino u otro dispositivo)*, el Broadlink, en modo de aprendizaje, se configura VOLUNTARIAMENTE en un nivel de recepción muy bajo, por lo que hay que estar MUY cerca del Broadlink para que aprenda un comando, sobre todo si se trata de un comando de 433 MHz.

# Sincronizar

En la pestaña «Comandos» de un dispositivo encontrarás el botón «Sincronizar». Si tienes varios Broadlink, puedes transferir los comandos programados de un Broadlink a otro.

>**INFORMACIÓN**
>
>Funciona de un RM-Pro a un Mini o viceversa.

Puedes elegir los comandos que deseas transferir, así como los dispositivos Broadlink a los que quieres transferirlos. (El nombre del comando se conservará, por supuesto: « encender la televisión », « apagar el ventilador », etc.)

>**INFORMACIÓN**
>
>Si añades manualmente tu dispositivo porque no se ha detectado automáticamente, la dirección MAC que debes introducir es la dirección MAC invertida, por pares de dos caracteres en minúsculas y sin los dos puntos *(por ejemplo, AA:BB:CC:DD:EE se convierte en eeddccbbaa)*.

# Preguntas frecuentes

## Registro de comandos por radiofrecuencia

(mayo de 2021)

A continuación, te explicamos cómo registrar los comandos RF con la aplicación móvil Broadlink y el complemento Broadlink para Jeedom:

Instala la aplicación oficial de Broadlink y, a continuación, añade tu pasarela Broadlink (he leído que hay que detener el proceso en cuanto se haya añadido la pasarela a la red wifi y que, sobre todo, no hay que continuar; ¡mi método funciona llevando a cabo el proceso hasta el final!). A continuación, puedes añadir tus dispositivos para probarlos con la aplicación.

Antes de pasar al complemento de Jeedom, hay que desbloquear el uso del pasarela en la aplicación. La verdad es que me costó bastante dar con esto, ya que era imposible que el complemento aprendiera los comandos de RF… En la aplicación, selecciona tu pasarela y, a continuación, pulsa «…» en la esquina superior derecha y desmarca «Bloquear el dispositivo». De este modo, podrás utilizar la aplicación y el complemento al mismo tiempo.

En el complemento, la incorporación del pasarela se realiza mediante el botón «Modo de inclusión» (consulta la documentación del complemento en la pestaña «Equipos»).  Pestaña «Comandos»: puedes hacer clic en «Aprender comando RF avanzado» para comprobar que el indicador luminoso del pasarela se ilumina en rojo, pero el proceso de aprendizaje no funcionará.

Este es el método:

- Iniciar primero el aprendizaje a través de la aplicación
- seleccionar el equipo
- Pulsa «…» en la esquina superior derecha y, a continuación, selecciona «Reaprender botones».
- Pulsa «Empezar a aprender» y, a continuación, «Aprender código RF sencillo»
- Pulsa el botón que quieres reprogramar y, a continuación, «Aceptar»
- Introduce la frecuencia del mando a distancia (en mi caso, 433,92)
- Tienes 30 segundos para hacer clic en «Aprender comando RF avanzado» (complemento Jeedom) y, a continuación, pulsar el botón del mando a distancia (varias veces hasta que se detecte).
- Confirmar la detección en la aplicación

Normalmente debería haber aparecido un nuevo comando en Jeedom (no tiene por qué funcionar a la primera, pero sigue estos pasos con calma y sin prisas).
Atención: si cambias el nombre del comando, debes conservar los últimos 10 caracteres que también aparecen en el comando; de lo contrario, el comando no funcionará. (Depende de la versión)

¡No te olvides de hacer una copia de seguridad!
