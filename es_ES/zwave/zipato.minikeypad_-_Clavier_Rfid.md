# Zipato miniKeypad RFID

**El módulo**

![module](images/zipato.minikeypad/module.jpg)

**El visual de Jeedom**

![vuedefaut1](images/zipato.minikeypad/vuedefaut1.jpg)

Resumen
------

Controle su sistema de seguridad con este mini teclado de pared Zipato !

Con este teclado RFID compatible con Z-Wave, podrá activar o desactivar fácilmente su sistema de alarma. Las teclas "Inicio" y "Ausente" le permiten armar / desarmar el sistema de seguridad y / o ejecutar escenarios de automatización del hogar rápidamente. Además de usar el teclado numérico, también puede pasar una placa RFID frente al teclado para armar / desarmar el sistema. El teclado transmite a su controlador de automatización del hogar el identificador de la insignia que ha sido reconocida. Por lo tanto, puede crear fácilmente escenarios de acuerdo con la persona que usó su insignia.

Fonctions
---------

-   Código y teclado RFID
-   Admite la tecnología Z-Wave
-   Arme / desarme su sistema de seguridad
-   Control de acceso mediante la lectura de credenciales RFID
-   Control de acceso por teclado numérico
-   Protección contra manipulaciones
-   Indicador LED para confirmar cada acción
-   Zumbador integrado para la indicación audible de alarma de armado / desarmado, por ejemplo

Características técnicas
---------------------------

-   Tipo : Esclavo Z-Wave
-   Suministro : 2 pilas AA 1.5V
-   Frecuencia : 868.42 MHz
-   Rango de radio : 30m en campo abierto
-   Protocolo RFID : ISO15693, ISO18000-3, Tag-it ™, RFID
-   Zumbador : 60dBa a 10 cm de distancia
-   Temperatura de almacenamiento : -5 ° C a + 65 ° C
-   Humedad para almacenamiento : 10% a 70%
-   Temperatura de funcionamiento : 10 ° C a 40 ° C
-   Humedad de funcionamiento : 30% a 80%
-   Dimensiones : 62 x 62 x 20 mm
-   Certificaciones : Seguridad : UL EMC : FCC, CE RoHS

Datos del módulo
-----------------

-   Hacer : Zipato
-   Nombre : Mini teclado Zipato RFID
-   ID del fabricante : 151
-   Tipo de producto : 24881
-   ID del producto : 17665

Configuration
-------------

Para configurar el complemento OpenZwave y saber cómo incluir a Jeedom, consulte esto [Documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Para poner este módulo en modo de inclusión, solo presione la pestaña de metal durante dos segundos (el LED rojo en el panel frontal debe parpadear dos veces) y suelte la pestaña para que tenga lugar la inclusión.

![inclusion](images/zipato.minikeypad//inclusion.jpg)

Una vez incluido, deberías obtener esto :

![information](images/zipato.minikeypad/information.jpg)

### Commandes

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![commandes](images/zipato.minikeypad/commandes.jpg)

Aquí está la lista de comandos :

-   Acción : es el comando que subirá a casa / fuera (5 para fuera 6 para casa)
-   Sabotaje : Este es el comando de sabotaje (se activa en caso de desgarro)
-   CODIGO : muestra la insignia o el código del teclado cuando el código ingresado no está en una de las memorias
-   Batería : es el comando de la batería

### Configuracion del modulo

> **Importante**
>
> Durante una primera inclusión, siempre active el módulo justo después de la inclusión.

Luego, si desea configurar el módulo de acuerdo con su instalación, debe pasar por el botón "Configuración" del complemento Jeedom OpenZwave.

![bouton configuration](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña Configuración)

![config1](images/zipato.minikeypad/config1.jpg)

Detalles del parámetro :

-   1: permite restablecer la configuración predeterminada (no recomendado)
-   2: período de cancelación (no se debe cambiar)
-   3: volver por pitido : permite activar o no una serie de 8 pitidos después del reconocimiento de una insignia / código
-   4: cantidad de pitidos por segundo (no cambiar no tiene efecto)
-   5: modo de operación : modo normal o siempre despierto (no recomendado porque consume mucha batería)

### Groupes

Este módulo tiene dos grupos de asociación.

![groupe](images/zipato.minikeypad/groupe.jpg)

> **Importante**
>
> Para un funcionamiento óptimo de su módulo. Jeedom debe estar asociado al menos con el grupo 1.

### Insignias / códigos

En la página del equipo hay una pestaña Asistente.

![bouton assistant](images/plugin/bouton_assistant.jpg)

Esto le permite agregar códigos. Verás una mesa allí.

![config2](images/zipato.minikeypad/config2.jpg)

-   Esta tabla le permite ver los recuerdos ocupados en su teclado
-   Para registrar un nuevo código, haga clic en el botón verde en la memoria deseada y siga los pasos
-   Para eliminar un código simplemente haga clic en el botón rojo.
-   Es imposible guardar el mismo código / insignia en dos memorias diferentes
-   Es imposible (por razones de seguridad) leer el valor de un código registrado

> **Importante**
>
> Recuerde activar el módulo después de agregar un código o insignia.

Ejemplos de uso
----------------------

![exemple](images/zipato.minikeypad/exemple.jpg)

El disparador es el comando de evento, de hecho, solo se actualiza cuando se ha presentado un código / insignia válido. Si el valor es 6 (inicio) desactivamos la alarma (por ejemplo), o encendemos la regleta, encendemos la luz según el brillo, enviamos una notificación para indicar que alguien ha regresado, lanzamos una síntesis voz para hacer un informe meteorológico, por ejemplo. De lo contrario (necesariamente 5) activamos la alarma, cortamos la regleta de alimentación, enviamos una notificación para indicar que la casa está vacía.

Bueno saber
------------

### Específicos

El teclado lee códigos / insignias de dos maneras :

-   cuando presiona home / away durante los primeros 1 a 2 segundos si comienza a escribir un código, leerá ese código
-   Si no se hace nada dentro de los primeros 1 a 2 segundos, entra en modo de lectura de identificación RFID (luz roja encendida). En ese momento puede leer una placa, no antes.

Wakeup
------

Para activar este módulo, hay dos formas de proceder :

-   presione el botón de manipulación y luego suéltelo después de 1 a 2 segundos
-   presione Inicio, un número aleatorio e Ingrese

Faq.
------

Este módulo se activa presionando y soltando el botón de manipulación. También puede despertarse presionando Inicio, luego 1 y luego Entrar.

Este módulo es un módulo de batería, la nueva configuración se tendrá en cuenta en la próxima activación.

Nota importante
---------------

> **Importante**
>
> Tienes que despertar el módulo : después de su inclusión, después de un cambio en la configuración, después de un cambio en el despertar, después de un cambio en los grupos de asociación
