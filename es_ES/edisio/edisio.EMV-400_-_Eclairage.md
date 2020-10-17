# Iluminación Edision EMV 400

**El módulo**

![module](images/emv.400/module.jpg)

**El visual de Jeedom**

![vue default eclairage](images/emv.400/vue_default_eclairage.jpg)

## Resumen

El micromódulo EMV-400 te permitirá gestionar un motor bidireccional o un equipo eléctrico. Permite el control de 2 salidas Start / Stop o una persiana enrollable Open / Stop / Close.

Además, la interacción con otros protocolos es posible, puede ser controlado por interruptores y / o mandos a distancia de la marca Edisio, directamente desde Jeedom, pero también por cualquier transmisor Z-Wave de su red.

Cada módulo Edisio en una red eléctrica, tiene la posibilidad de funcionar como repetidor inalámbrico con los demás módulos, con el fin de asegurar una cobertura total de su hogar.

Por último, cada módulo se puede utilizar en modo remoto, es muy práctico porque permite asociar un transmisor sin tener que acceder al receptor.

> **Importante**
>
> El punto muerto solo es necesario para "Modo obturador"

## Fonctions

-   2 salidas de relé alimentadas
-   Se instala en una caja de empotrar de 55 mm o directamente en las cajas de apertura
-   Modo de uso: Encendido / Apagado, Abrir / Detener / Cerrar
-   Compatible con motores de final de carrera electrónicos y mecánicos
-   Modo remoto
-   Función de temporizador: Modo encendido / apagado: 30min o 60min
-   Réplica de señal (repetidor)
-   Micromódulo bidireccional
-   Nivel de batería bajo del transmisor
-   Pequeño, discreto y estético
-   Facilidad de uso e instalación

## Características técnicas

-   Tipo de módulo: Receptor Edisio
-   Alimentation: 230 V CA, 50 Hz
-   Alambrado: 4 cables, 2 para controles y 2 para alimentación
-   Frecuencia: 868,3 MHz
-   Salidas alimentadas: 2 relés
-   Poder maximo: 2A por salida
-   Carga resistente: 460W
-   Otros gastos: 100W
-   Temperatura de funcionamiento: -10 ° C + 45 ° C
-   Dimensions: 48x46x26mm
-   Grado de protección: IP20

## Datos del módulo

-   Marca : Casa inteligente Edisio
-   Apellido : EMV-400

## Configuración general

Para configurar el complemento Edisio y asociar un módulo con Jeedom, consulte este [documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/edisio/).

> **Importante**
>
> Para que Jeedom cree automáticamente sus módulos transmisores, no olvide activar la opción en la configuración del complemento.

> **Importante**
>
> Por el contrario, los receptores Edisio deben crearse manualmente en Jeedom.

### Interruptor DIP y botón "R""

![bouton association](images/emv.400/bouton_association.jpg)

-   El interruptor DIP le permitirá ajustar los parámetros (repetidor / modo obturador / iluminación / temporizador) del módulo:

![dip switch](images/emv.400/dip_switch.jpg)

> **Nota**
>
> Para evitar redundancias innecesarias, nunca active el modo "Repetidor" en todos los receptores, 5 receptores como máximo por instalación.

-   El botón "R" le permitirá asociar un transmisor con el receptor, activar o desactivar la función de temporizador y activar el modo remoto :

![bouton r](images/emv.400/bouton_r.jpg)

> **Nota**
>
> Al presionar R 3x se activa el modo remoto.

### Diagrama de funcionamiento

 Dependiendo de si su transmisor está configurado en modo "1 botón" o "2 botones", así es como funciona el módulo:

> **Nota**
>
> Consulte la documentación del fabricante para configurar su transmisor.

![diagramme](images/emv.400/diagramme.jpg)

### Función de temporizador

La función de temporizador permite que los relés se apaguen automáticamente después de 30 o 60 minutos.

-   Activar : Presione 4x "R" en el receptor, confirmación con un solo pitido continuo
-   Desactivar: Presione 5 veces "R" en el receptor, confirmación con 3 simples pitidos.
-   Temporizador de 30 minutos: Interruptor DIP 3 arriba
-   Temporizador de 60 minutos: Interruptor DIP 3 en la parte inferior

## La "Iluminación"

El modo "Iluminación" le permite controlar 2 dispositivos eléctricos de forma remota.

> **Importante**
>
> Neutro no es necesario

### Configuración y conexiones eléctricas

![mode eclairage](images/emv.400/mode_eclairage.jpg)

> **Importante**
>
> Para que el módulo esté en modo "Iluminación", el interruptor DIP 2 debe estar arriba

> **Importante**
>
> NUNCA CONECTES CON LIVE

### Creación del módulo en Jeedom

Para asociar un módulo receptor Edisio con Jeedom, debe crear manualmente un dispositivo.

![ajout equip](images/emv.400/ajout_equip.jpg)

Una vez que haya creado su equipo, debería obtener esto :

![crea equip](images/emv.400/crea_equip.jpg)

> **Nota**
>
> Recuerda activar tu nuevo equipo.

En la lista de equipos, a la derecha, seleccione "Micro-módulo de luz" :

![infos equip eclairage](images/emv.400/infos_equip_eclairage.jpg)

### Commandes

Una vez que se guarda su equipo, debe obtener los comandos asociados con el módulo :

![Pedidos](images/emv.400/commande_eclairage.jpg)

Aquí está la lista de comandos :

-   Nosotros : Este es el comando que activa el relé 1
-   Apagado : Este es el comando que desactiva el relé 1
-   En 2 : Este es el comando que activa el relé 2
-   Apagado 2: Este es el comando que desactiva el relé 2
-   Mi : Este es el comando que le permite usar el modo remoto

> **Importante**
>
> La retroalimentación de estado es simulada por Jeedom. Por lo tanto, si está utilizando otro transmisor, Jeedom no podrá actualizar el estado del receptor.

### Informations

Una vez que su equipo esté asociado con Jeedom, habrá diversa información disponible :

![Pedidos](images/emv.400/infos_eclairage.jpg)

-   Creación : Indica la fecha en la que se creó el equipo
-   Comunicación : Indica la última comunicación registrada entre Jeedom y el micro-módulo
-   Tambores : Indica el estado de la batería para los módulos de batería
-   Estado : Devuelve el estado del módulo

## Asociación del micromódulo con Jeedom

Para que puedas interactuar con Jeedom, como si fuera un transmisor Edisio.

> **Nota**
>
> Una de las grandes ventajas de Edisio es que un receptor puede tener varios transmisores asociados

### Método estándar

Cada salida está asociada con un comando Jeedom:

-   Asociar salida 1 :
    -   Presione 1x en la "R" del receptor, un solo pitido (breve en repetición) indica la programación de la salida 1 activada.
    -   En 10 segundos, presione "Prueba" en el comando "Abrir" en Jeedom, un pitido continuo indica la asociación de la salida 1 a Jeedom.
    -   Dentro de los 10 segundos, presione "R" en el receptor nuevamente, para validar la asociación, el pitido se detiene.
-   Asociar salida 2 :
    -   Pulsar dos veces la "R" del receptor, doble pitido (breve repetición) indica la programación de la salida 2 activada.
    -   En 10 segundos, presione "Prueba" en el comando "Cerrar" en Jeedom, un pitido continuo indica la asociación de la salida 2 a Jeedom.
    -   Dentro de los 10 segundos, presione "R" en el receptor nuevamente, para validar la asociación, el pitido se detiene.

### Método remoto

Hablamos de ello al comienzo de esta documentación. En el caso de módulos ya empotrados, en falsos techos o incluso en áticos. Este método permite la adición de un nuevo transmisor sin acceder a la "R" del receptor.

-   Asociar el botón "R" :
    -   Presione 3 veces en "R" en el receptor, el sonido de un pitido triple (breve en repetición) indica el modo de programación activado.
    -   Dentro de 10 segundos, presione "Prueba" del comando "E" en Jeedom, un pitido continuo indica la asociación a Jeedom.
    -   En 10 segundos, presione "E" en el receptor nuevamente, para validar la asociación, el pitido se detiene.

Está hecho, su Jeedom ahora está asociado y su comando "E" ahora reemplaza el botón "R" en el receptor.

-   Asociar un nuevo transmisor con un receptor con Jeedom ya asociado :
    -   Salida 1 :
        -   Presione 1 vez en "Probar" el comando "E" en Jeedom, un solo pitido (breve en repetición) indica que la programación de la salida 1 está activada.
        -   Dentro de los 10 segundos, presione una de las teclas "C" del nuevo transmisor a asociar, un bip continuo indica la asociación de la salida 1.
        -   Dentro de los 10 segundos, presione nuevamente en "Prueba" del comando "E" en Jeedom, para validar la asociación, el pitido se detiene.
    -   Salida 2 :
        -   Presione 2 veces en "Prueba" del comando "E" en Jeedom, un doble pitido (breve en repetición) indica la programación de la salida 2 activada.
        -   Dentro de los 10 segundos, presione una de las teclas "C" del nuevo transmisor a asociar, un bip continuo indica la asociación de la salida 2.
        -   Dentro de los 10 segundos, presione nuevamente en "Prueba" del comando "E" en Jeedom, para validar la asociación, el pitido se detiene.

> **Nota**
>
> Puede comenzar de nuevo tantas veces como desee asociar transmisores con el receptor

## Visual alternativo

![Pedidos](images/emv.400/vue_alt_eclairage.jpg)

## Preguntas más frecuentes.

**Cómo borrar la memoria del receptor ?**

Mantenga presionado 10 segundos en la "R", hasta que suene un pitido continuo.
