# Danalock V2 BTZE

**El módulo**

![module](images/polycontrol.danalock/module.jpg)

**La imagen de Jeedom**

![vuedefaut1](images/polycontrol.danalock/vuedefaut1.jpg)

## Resumen

**Proteja su hogar con la cerradura electrónica Z-Wave de Poly-Control !**

No más llaves, use su teléfono inteligente para bloquear y desbloquear su puerta ! Danalock es una nueva solución que le permitirá asegurar su interior de forma fiable e inteligente. Sin tener una llave, puede abrir su cerradura usando su tableta o teléfono inteligente. Así controlará el acceso de sus invitados o trabajadores y podrá monitorear su interior de manera efectiva. Diferentes configuraciones le permitirán controlar el acceso a su hogar. Danalock tiene una función Autolock que permite el bloqueo automático de la puerta delantera. Ideal cuando no tienes las manos libres, por ejemplo. Además, se proporcionan 5 llaves. Puedes usarlos afuera. La instalación es sencilla y rápida de realizar independientemente del tipo de puerta. La aplicación correspondiente es compatible para iPhone 4S, Android 4.4 y teléfono inteligente. El Danalock no requiere una fuente de alimentación externa. La energía es suministrada por baterías con una vida útil de dos años. Recibirá una señal audible si el nivel de carga de la batería es demasiado bajo.

**Fácil de poner en su lugar**

La Danalock es una cerradura inteligente que se monta en casi cualquier puerta en minutos.

**Fácil de instalar**

Instale la aplicación Danalock en su teléfono en segundos. Luego, un asistente lo guía a través de la instalación y calibración de su Danalock.

**Fácil de usar**

Bloquea y desbloquea con el botón, la función TwistAssist o usando tu smartphone. Y con la función de desbloqueo automático, la cerradura Danalock desbloquea automáticamente la puerta cuando te acercas a tu casa y la bloquea justo cuando regresas.

**Batería de larga duración**

El Danalock tiene una vida útil promedio de la batería de hasta un año y no requiere una fuente de alimentación externa. Tenga en cuenta que el uso de un controlador o caja de domótica Z-Wave puede reducir la duración de la batería. El estado de la batería es fácilmente visible en la aplicación. Cuando la batería llega al 30, 20, 15 y 10 por ciento, se envía una notificación por SMS y correo electrónico.

**Acceso limitado o permanente**

No más esconder llaves debajo del felpudo. Brinde a su familia un acceso rápido y fácil con sus teléfonos inteligentes. Para su ama de llaves o sus invitados, un acceso por tiempo limitado o recurrente y recibir notificaciones cuando se usa su candado y por quién.

**Control total de la casa**

Amplíe el control de su hogar inteligente con un Danalock, el iniciador perfecto para todos los controles de su hogar. El Danalock funciona a la perfección con otros dispositivos domésticos inteligentes, y todas las comunicaciones están fuertemente encriptadas: nadie puede piratear su hogar.

**Discreto, duradero y danés**

Danalock combina la elegancia y el minimalismo del diseño escandinavo, con un bisel de aluminio sólido anodizado y tecnologías Bluetooth y Z-Wave de última generación. Un diseño danés discreto construido para durar.

## Fonctions

-   Controla tu puerta de entrada de forma remota
-   Cerradura conectada
-   1 cilindro adaptable a diferentes longitudes suministrado
-   Se proporcionan 5 llaves físicas para abrir la puerta desde el exterior
-   Conexión vía Bluetooth Smart y Z-Wave
-   Integración en controladores Z-Wave compatibles (eedomus, Vera,…​)
-   Historial de actividades
-   Diferentes opciones de configuración para cerrar y abrir
-   Acceso compartido : brinde acceso a su ama de llaves o a un amigo por un período de tiempo limitado
-   Calibración automática
-   Fácil de instalar
-   Funcionamiento con pilas
-   Compatible con iOS (iPhone 4s o posterior), pero también con Android (desde 4.4).

## Características técnicas

-   Alimento : 4 pilas CR123 de 3 V
-   Versiones : V2
-   Material : Aluminio anodizado sólido
-   Comunicación : Bluetooth y Z-Wave
-   Dimensiones : 79 mm x 49 mm (diámetro x altura)
-   Peso : 363g

## Datos del módulo

-   Marca : Poly-Control
-   Apellido : Danalock V2 BTZE
-   Identificación del fabricante : 010e
-   Tipo Producto : 1
-   Identificación de producto : 1

## Configuration

Para configurar el complemento OpenZwave y saber cómo incluir Jeedom, consulte este [documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Es absolutamente necesario incluir este módulo en modo seguro..

Para poner el complemento Z-Wave (openzwave) en Jeedom en modo de inclusión segura : simplemente vaya a la página de administración de módulos Z-wave y haga clic en el ícono "Zwave Network""

![inclusion securise jeedom 1](images/polycontrol.danalock/inclusion-securise-jeedom-1.jpg)

Luego, en la pestaña "Acciones", haga clic en : "AÑADIR MÓDULO EN MODO SEGURO (INCLUYE)"

![inclusion securise jeedom 2](images/polycontrol.danalock/inclusion-securise-jeedom-2.jpg)

> **Importante**
>
> Suponemos que ha instalado la aplicación en su teléfono inteligente o iPhone y ha creado una cuenta. Si aún no lo ha hecho, puede consultar esta página.

![inclusion](images/polycontrol.danalock/inclusion.jpg)

![inclusion1](images/polycontrol.danalock/inclusion1.jpg)

![inclusion2](images/polycontrol.danalock/inclusion2.jpg)

En la aplicación, haga clic en "Hogar inteligente", luego en "Z-wave" y finalmente en "CONECTAR".

Una vez incluido, debe obtener esto :

![Plugin Zwave](images/polycontrol.danalock/information.jpg)

### Commandes

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Pedidos](images/polycontrol.danalock/commandes.jpg)

Aquí está la lista de comandos :

-   Estado : este es el comando que reportará la última acción realizada (abrir/cerrar)
-   Abrir : este es el comando para abrir la cerradura
-   Cerca : este es el comando que cierra la cerradura
-   Batería : este es el comando de la bateria

### Configuración del módulo

> **Advertencia**
>
> Aunque este módulo funciona con pilas, utiliza la tecnología de Flirs. Esto significa que no tiene noción de despertar y despertar. Recuperará todos los cambios de configuración casi en tiempo real como un módulo de sector.

Si desea configurar el módulo de acuerdo con su instalación, debe pasar por el botón "Configuración" del complemento Jeedom OpenZwave.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña de configuración)

![Config1](images/polycontrol.danalock/bouton_configuration.jpg)

Detalles del parámetro :

-   1 : Dirección 0-1 : 0 = El motor gira en el sentido de las agujas del reloj bloqueado, 1 = El motor gira en el sentido contrario a las agujas del reloj cuando está bloqueado
-   2 : Velocidad 1=más lenta, 2=lenta, 3=normal, 4=rápida, 5=más rápida
-   3 : Modo 1 = Motor Drive (Ahorro de energía), 2 = Modo Full Drive (Normal)
-   4 : Número de vueltas (1 = 10 grados, 9 = 90 grados, etc.)
-   5 : Bloqueo automático 0-60 Cuántos segundos desde que se desbloqueó el bloqueo hasta que se volvió a cerrar automáticamente. Si es 0, está deshabilitado.
-   6 : Deshabilitar o habilitar la señal sonora de bloqueo o desbloqueo (0 = Deshabilitar, 1 = Habilitar.)
-   7 : Tipo de Batería : Establecer el tipo de batería que alimenta el dispositivo.
-   8 : Alarma de batería : Cuando el nivel de la batería es inferior a este valor, el dispositivo informará al usuario con una señal de sonido después de bloquear o desbloquear.
-   9 : Turn & Go 0 = Turn & Go apagado, 1 = Turn & Go On. Latch & Go girará la manija automáticamente cuando se opere manualmente.
-   10 : Freno y GoBack 0 = Deshabilitado. 1⇒15 segundos para frenar. Cuando se usa, los frenos de bloqueo durante x cantidad de segundos, luego retrocede 75 grados. Diseñado para puertas especiales sin palancas. (Solo al desbloquear).
-   11 : Asíncrono 0 = Asíncrono desactivado, 1 = Asíncrono activado. Cuando la sincronización está habilitada, la cerradura se calibrará automáticamente si ya está desbloqueada y se desbloqueará nuevamente (se usa para cerraduras de puertas especiales)).
-   12 : informe de operación

### Groupes

Este módulo tiene solo un grupo de asociación.

![Groupe](images/polycontrol.danalock/groupe.jpg)

## Bueno saber

### Especificidades

> **Consejo**
>
> Aunque este módulo funciona con pilas, utiliza la tecnología de Flirs. Esto significa que no tiene noción de despertar y despertar. Recuperará todos los cambios de configuración casi en tiempo real como un módulo de sector.

> **Consejo**
>
> Este modulo devuelve su estado si activas el candado a mano se actualizara el estado.

## Wakeup

No hay noción de despertar para este módulo.
