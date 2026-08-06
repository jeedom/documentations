# Rfplayer 2 plugin

Complemento para usar el RFPLAYER 1000. Este complemento eventualmente reemplazará al primer complemento. Se pondrá a disposición de todos los propietarios del primer complemento.

Esto permitirá que todos migren en silencio. Debido a que la filosofía del complemento ha cambiado y los identificadores también, deberá incluir sus dispositivos en este nuevo complemento.

# Configuración del complemento RFPlayer 

Después de instalar el complemento, solo necesita activarlo :

**Configuración**

Para configurar el complemento, solo tiene que auto o elegir RFPlayer.

# Agregar un módulo 

El RFPlayer es compatible con muchos módulos. El complemento RFPlayer2 cambia completamente su filosofía.
Razona genéricamente para garantizar una compatibilidad justa con el propio reproductor de RF.

Para incluir un módulo, simplemente haga clic en Inclusión y siga paso a paso. Este te pedirá que elijas
el protocolo, luego el tipo (actuador / transmisor) en el caso de un transmisor, la configuración creada contendrá todos los datos brutos transmitidos por el jugador rf (algunos pueden ser inútiles para su uso, puede ocultarlos). La ventaja de este método es estar alineado con el Rfplayer (algunos dispositivos dan la información en un lugar, otros en otro) y también permiten durante la inclusión filtrar finamente el protocolo que se incluirá.

No tendrá que preocuparse por incluir las sondas de Oregon cuando desee incluir un sensor X2D.
 
El mismo principio se aplica a los actuadores. También deberá elegir el tipo de actuador de acuerdo con el protocolo. Una vez hecho esto, el equipo se creará en Jeedom. Y tendrá que ingresar una ID de programa consistente con el protocolo (generalmente este campo se rellena de manera inteligente) y luego ir al panel de control y hacer clic en "Prueba" en el comando de asociación.
Obviamente, es necesario de antemano que haya puesto el módulo en aprendizaje de acuerdo con la documentación del fabricante del módulo.
 
Algunas peculiaridades :

**Oregón**

Cambiar las baterías cambia la identificación del producto. Por lo tanto, es necesario, al cambiar las baterías, agregar un nuevo módulo, luego hacer clic en "Recuperar ID" frente a "Cambio de batería". Esta acción debe llevarse a cabo en el nuevo módulo y elegir el nombre del módulo apropiado (el nombre antiguo del módulo cuyas baterías acaban de ser reemplazadas).

**Loro**

Para el modo loro se crearán equipos. Este tendrá un botón que permitirá poner al jugador en entrenamiento y creará el comando asociado. Hay un comando de estado que le permite pedirle al Rfplayer que inicie sesión en la depuración del registro, todos los comandos de loro aprendidos.

Se le notificará en el Registro de cambios del complemento cuando se actualice.
