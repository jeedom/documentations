# Danalock V2 BTZE

**El módulo**

![module](images/polycontrol.danalock/module.jpg)

**El visual de Jeedom**

![vuedefaut1](images/polycontrol.danalock/vuedefaut1.jpg)

## Resumen

**Asegure su hogar con la cerradura electrónica Z-Wave de Poly-Control !**

No más llaves, use su teléfono inteligente para bloquear y desbloquear su puerta ! Danalock es una nueva solución que le permitirá asegurar su interior de manera confiable e inteligente. Sin tener una llave, puede abrir la cerradura usando su tableta o teléfono inteligente. De este modo, controlará el acceso de sus invitados o trabajadores y podrá controlar su interior de manera efectiva. Diferentes configuraciones le permitirán controlar el acceso a su hogar. Danalock tiene una función de bloqueo automático que permite el bloqueo automático de la puerta delantera. Ideal cuando no tienes las manos libres, por ejemplo. Además, se proporcionan 5 llaves. Puedes usarlos desde afuera. La instalación es simple y rápida de realizar, independientemente del tipo de puerta. La aplicación correspondiente es compatible con iPhone 4S, Android 4.4 y teléfono inteligente. Danalock no requiere una fuente de alimentación externa. La energía es suministrada por baterías de dos años. Recibirá una señal audible en caso de que el nivel de carga de la batería sea demasiado bajo.

**Fácil de configurar**

Danalock es una cerradura inteligente que se monta en casi cualquier puerta en minutos.

**Fácil de instalar**

Instala la aplicación Danalock en tu teléfono en segundos. Luego, un asistente lo guiará a través de la instalación y calibración de su Danalock.

**Fácil de usar**

Bloquee y desbloquee con el botón, la función TwistAssist o usando su teléfono inteligente. Y con la función de desbloqueo automático, la cerradura Danalock desbloquea automáticamente la puerta cuando te acercas a tu casa y la bloquea justo después de llegar a casa.

**Batería de larga duración**

Danalock tiene una duración promedio de la batería de hasta un año y no requiere alimentación externa. Tenga en cuenta que el uso de un controlador o caja de automatización del hogar Z-Wave puede reducir la duración de la batería. El estado de la batería es fácilmente visible en la aplicación. Cuando la batería alcanza el 30, 20, 15 y 10 por ciento, se envía una notificación por SMS y correo electrónico.

**Acceso limitado o permanente**

No más esconder las llaves debajo del felpudo. Brinde a su familia un acceso rápido y fácil con sus teléfonos inteligentes. Para su empleada de limpieza o sus invitados, tiempo limitado o acceso recurrente y recibir notificaciones cuando se utiliza su cerradura y por quién.

**Control total de la casa**

Desarrolle el control de su hogar inteligente con Danalock, el iniciador perfecto para todos los pedidos de su hogar. Danalock funciona a la perfección con otros dispositivos domésticos inteligentes, y toda la comunicación está altamente encriptada: nadie puede hackear su casa.

**Discreto, duradero y danés**

Danalock combina la elegancia y el minimalismo del diseño escandinavo, con un sólido bisel de aluminio anodizado y tecnologías avanzadas de Bluetooth y Z-Wave. Un diseño danés discreto construido para durar.

## Funciones

-   Controla tu puerta de entrada de forma remota
-   Cerradura conectada
-   1 cilindro adaptable a diferentes longitudes suministradas
-   Se proporcionan 5 llaves físicas para abrir la puerta desde el exterior
-   Conexión a través de Bluetooth Smart y Z-Wave
-   Integración en controladores Z-Wave compatibles (eedomus, Vera, ...)
-   Historial de actividad
-   Diferentes opciones de configuración para cerrar y abrir
-   Acceso compartido : dar acceso a su ama de llaves o un amigo por un período limitado
-   Calibración automática
-   Fácil de instalar
-   Funcionamiento de la batería
-   Compatible con iOS (iPhone 4s o posterior), pero también Android (desde 4.4).

## Características técnicas

-   Suministro : 4 baterías CR123 3V
-   Versiones : V2
-   Material : Aluminio anodizado sólido
-   Comunicación : Bluetooth y Z-Wave
-   Dimensiones : 79 mm x 49 mm (diámetro x altura)
-   Peso : 363g

## Datos del módulo

-   Hacer : Poly-Control
-   Nombre : Danalock V2 BTZE
-   ID del fabricante : 010e
-   Tipo de producto : 1
-   ID del producto : 1

## Configuración

Para configurar el complemento OpenZwave y saber cómo incluir a Jeedom, consulte esto [Documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Es esencial incluir este módulo en modo seguro..

Para poner el complemento Z-Wave (openzwave) en Jeedom en modo de inclusión segura : simplemente vaya a la página de administración del módulo Z-wave y haga clic en el icono "Red Zwave""

![inclusion securise jeedom 1](images/polycontrol.danalock/inclusion-securise-jeedom-1.jpg)

Luego, en la pestaña "Acciones", haga clic en : "Agregar módulo en modo seguro (inclusión)"

![inclusion securise jeedom 2](images/polycontrol.danalock/inclusion-securise-jeedom-2.jpg)

> **Importante**
>
> Suponemos que instaló la aplicación en su teléfono inteligente o iPhone y creó una cuenta. Si aún no lo ha hecho, puede consultar esta página.

![inclusion](images/polycontrol.danalock/inclusion.jpg)

![inclusion1](images/polycontrol.danalock/inclusion1.jpg)

![inclusion2](images/polycontrol.danalock/inclusion2.jpg)

En la aplicación, haga clic en "Smart home", luego en "Z-wave" y finalmente en "CONNECT".

Una vez incluido, deberías obtener esto :

![Plugin Zwave](images/polycontrol.danalock/information.jpg)

### Comandos

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Comandos](images/polycontrol.danalock/commandes.jpg)

Aquí está la lista de comandos :

-   Estado : Este es el comando que volverá a la última acción ejecutada (abrir / cerrar)
-   Abrir : es el comando que abre la cerradura
-   Cerca : es el comando que hace posible cerrar la cerradura
-   Batería : es el comando de la batería

### Configuración du module

> **Advertencia**
>
> Aunque este módulo funciona con batería, utiliza la tecnología Flirs. Eso significa que no tiene el concepto de despertar y despertar. Recuperará todos los cambios de configuración en tiempo casi real como módulo de sector.

Si desea configurar el módulo de acuerdo con su instalación, debe pasar por el botón "Configuración" del complemento Jeedom OpenZwave.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña Configuración)

![Config1](images/polycontrol.danalock/bouton_configuration.jpg)

Detalles del parámetro :

-   1 : Dirección 0-1 : 0 = El motor gira en sentido horario bloqueado, 1 = El motor gira en sentido antihorario cuando está bloqueado
-   2 : Velocidad 1 = más lenta, 2 = lenta, 3 = Normal, 4 = Rápida, 5 = más rápida
-   3 : Modo 1 = accionamiento del motor (ahorro de energía), 2 = modo de accionamiento completo (normal)
-   4 : Número de vueltas (1 = 10 grados, 9 = 90 grados, etc.)
-   5 : Bloqueo automático 0-60 Cuántos segundos desde el momento en que se desbloqueó el bloqueo para cerrarse automáticamente nuevamente. Si 0, está deshabilitado.
-   6 : Desactive o active la señal acústica de bloqueo o desbloqueo (0 = Desactivar, 1 = Activar)
-   7 : Tipo de batería : Configure el tipo de batería que alimenta el dispositivo.
-   8 : Alarma de la batería : Cuando el nivel de la batería es inferior a este valor, el dispositivo informará al usuario con una señal audible después de bloquear o desbloquear.
-   9 : Turn & Go 0 = Turn & Go off, 1 = Turn & Go On. Latch & Go girará la manija automáticamente cuando se opera manualmente.
-   10 : Brake & GoBack 0 = Deshabilitado. 1⇒15 segundos para frenar. Cuando se usan los frenos de bloqueo por x cantidad de segundos, luego retroceden 75 grados. Diseñado para puertas especiales sin palanca. (Solo al desbloquear).
-   11 : Asíncrono 0 = Asíncrono desactivado, 1 = Asíncrono activado. Cuando se activa asíncrono, la cerradura se calibrará automáticamente si ya está desbloqueada y se desbloqueará nuevamente (se usa para cerraduras especiales).
-   12 : informe de operación

### Grupos

Este módulo tiene solo un grupo de asociación.

![Groupe](images/polycontrol.danalock/groupe.jpg)

## Bueno saber

### Específicos

> **Punta**
>
> Aunque este módulo funciona con batería, utiliza la tecnología Flirs. Eso significa que no tiene el concepto de despertar y despertar. Recuperará todos los cambios de configuración en tiempo casi real como módulo de sector.

> **Punta**
>
> Este módulo devuelve su estado si opera el bloqueo manualmente, el estado se actualizará.

## Despertador

No hay concepto de despertar para este módulo.
