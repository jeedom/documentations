# Iluminación Edison EMV 400

**El módulo**

![module](images/emv.400/module.jpg)

**La imagen de Jeedom**

![vue default eclairage](images/emv.400/vue_default_eclairage.jpg)

## Resumen

El micromódulo EMV-400 te permitirá gestionar un motor bidireccional o un equipo eléctrico. Permite el control de 2 salidas On/Off o una persiana enrollable Abrir/Parar/Cerrar.

Además, la interacción con otros protocolos es posible, es controlable por interruptores y/o controles remotos de la marca Edisio, directamente desde Jeedom, pero también por cualquier transmisor Z-Wave en su red.

Cada módulo Edisio de la red eléctrica tiene la posibilidad de funcionar como repetidor inalámbrico con los demás módulos, con el fin de garantizar la cobertura total de su hogar.

Finalmente, cada módulo se puede utilizar en modo remoto, es muy práctico porque permite asociar un transmisor sin tener que acceder al receptor.

> **Importante**
>
> El neutro solo es necesario para el modo "Obturador""

## Fonctions

-   2 salidas de relé alimentadas
-   Se puede instalar en caja de empotrar de 55mm o directamente en las cajas de apertura
-   Modo de uso: Iniciar/Parar, Abrir/Parar/Cerrar
-   Compatible con motores de final de carrera electrónicos y mecánicos
-   Modo remoto
-   Función de temporizador: Modo de encendido/apagado: 30min o 60min
-   Réplica de la señal (repetidor)
-   Micromódulo bidireccional
-   Nivel de batería bajo del transmisor
-   Pequeño, discreto y estético
-   Facilidad de uso e instalación

## Características técnicas

-   Tipo de mod: Receptor Edisio
-   Alimentation: 230 V CA, 50 Hz
-   Alambrado: 4 cables, 2 para controles y 2 para alimentación
-   Frecuencia: 868,3 MHz
-   Salidas alimentadas: 2 relés
-   Máximo poder: 2A por salida
-   Carga resistente: 460W
-   Otros gastos: 100W
-   Temperatura de funcionamiento: -10°C +45°C
-   Dimensions: 48x46x26mm
-   Grado de protección: IP20

## Datos del módulo

-   Marca : Hogar inteligente Edisio
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

-   El interruptor DIP le permitirá ajustar los parámetros (repetidor/modo de obturador/iluminación/temporizador) del módulo:

![dip switch](images/emv.400/dip_switch.jpg)

> **Nota**
>
> Para evitar redundancias innecesarias, nunca active el modo "Repetidor" en todos los receptores, máximo 5 receptores por instalación.

-   El botón "R" permitirá asociar un transmisor al receptor, activar o desactivar la función de temporizador y activar el modo remoto :

![bouton r](images/emv.400/bouton_r.jpg)

> **Nota**
>
> Presionar R 3x activa el modo remoto.

### Diagrama de operación

 Dependiendo de si su transmisor está configurado en modo "1 tecla" o "2 teclas", así es como funciona el módulo:

> **Nota**
>
> Consulte la documentación del fabricante para poder configurar su transmisor.

![diagramme](images/emv.400/diagramme.jpg)

### Función de temporizador

La función de temporizador permite el apagado automático de los relés después de 30 o 60 minutos.

-   Habilitar : Presione 4x "R" en el receptor, confirmación por un solo pitido continuo
-   Deshabilitar: Presione 5x "R" en el receptor, confirmación por 3 pitidos simples.
-   Temporizador de 30 minutos: Interruptor DIP 3 arriba
-   Temporizador de 60 minutos: Interruptor DIP 3 inferior

## El modo "Iluminación""

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
> NUNCA ENCHUFAR

### Creación del módulo en Jeedom

Para asociar un módulo receptor Edisio con Jeedom, debe crear manualmente un dispositivo.

![ajout equip](images/emv.400/ajout_equip.jpg)

Una vez que se crea su equipo, debe obtener esto :

![crea equip](images/emv.400/crea_equip.jpg)

> **Nota**
>
> Recuerda activar tu nuevo equipo.

En la lista de equipos, a la derecha, seleccione "Módulo de micro-luz" :

![infos equip eclairage](images/emv.400/infos_equip_eclairage.jpg)

### Commandes

Una vez que haya guardado su equipo, debe obtener los comandos asociados con el mod :

![Pedidos](images/emv.400/commande_eclairage.jpg)

Aquí está la lista de comandos :

-   Nosotros : Este es el mando que activa el relé 1
-   Apagado : Este es el mando que desactiva el relé 1
-   En 2 : Este es el mando que activa el relé 2
-   Desactivado 2: Este es el mando que desactiva el relé 2
-   Mi : Este es el comando que le permite usar el modo remoto

> **Importante**
>
> El retorno estatal es simulado por Jeedom. Por lo tanto, si usa otro transmisor, Jeedom no podrá actualizar el estado del receptor.

### Informations

Una vez que su equipo esté asociado con Jeedom, estará disponible diversa información :

![Pedidos](images/emv.400/infos_eclairage.jpg)

-   Creación : Indica la fecha en que se creó el equipo
-   Comunicación : Indica la última comunicación registrada entre Jeedom y el micromódulo
-   Batería : Indica el estado de la batería para los módulos que funcionan con batería
-   Estado : Devuelve el estado del módulo

## Asociación del micromódulo con Jeedom

Para que puedas interactuar con Jeedom, como si fuera un transmisor Edisio.

> **Nota**
>
> Una de las grandes ventajas de Edisio es que un receptor puede tener varios emisores asociados

### Método estándar

Cada salida debe asociarse con un comando Jeedom:

-   Asociar salida 1 :
    -   Presione 1x en la "R" del receptor, un solo pitido (breve en repetición) señala la programación de la salida 1 activada.
    -   Dentro de 10 segundos, presione "Prueba" del comando "Abrir" en Jeedom, un pitido continuo señala la asociación de la salida 1 a Jeedom.
    -   Dentro de 10 segundos, presione "R" en el receptor nuevamente, para validar la asociación, el pitido se detiene.
-   Asociar salida 2 :
    -   Pulsar dos veces sobre la "R" del receptor, doble pitido (breve en repetición) señala la programación de la salida 2 activada.
    -   Dentro de 10 segundos, presione "Prueba" del comando "Cerrar" en Jeedom, un pitido continuo señala la asociación de la salida 2 a Jeedom.
    -   Dentro de 10 segundos, presione "R" en el receptor nuevamente, para validar la asociación, el pitido se detiene.

### Método remoto

Hablamos de ello al principio de esta documentación. En el caso de módulos ya empotrados, en falsos techos o incluso buhardillas. Este método permite agregar un nuevo transmisor sin acceder a la "R" del receptor.

-   Asociar el botón "R"" :
    -   Presione "R" en el receptor 3x, triple pitido (repetición corta) señala el modo de programación activado.
    -   Dentro de 10 segundos, presione "Prueba" del comando "E" en Jeedom, un pitido continuo señala la asociación a Jeedom.
    -   Dentro de 10 segundos, presione "E" en el receptor nuevamente para validar la asociación, el pitido se detiene.

Ya está, su Jeedom ahora está asociado y su comando "E" ahora reemplaza el botón "R" en el receptor.

-   Asociar un nuevo transmisor con un receptor con Jeedom ya asociado :
    -   Salida 1 :
        -   Presione 1x en "Prueba" el comando "E" en Jeedom, un solo pitido (breve en repetición) señala la programación de la salida 1 activada.
        -   Dentro de 10 segundos, presione una de las teclas "C" del nuevo transmisor para asociar, un pitido continuo señala la asociación de la salida 1.
        -   Dentro de 10 segundos, presione "Prueba" nuevamente en el comando "E" en Jeedom, para validar la asociación, el pitido se detiene.
    -   Salida 2 :
        -   Presione 2 veces en "Prueba" del comando "E" en Jeedom, el doble pitido (breve en repetición) señala la programación de la salida 2 activada.
        -   Dentro de 10 segundos, presione una de las teclas "C" del nuevo transmisor para asociar, un pitido continuo indica la asociación de la salida 2.
        -   Dentro de 10 segundos, presione "Prueba" nuevamente en el comando "E" en Jeedom, para validar la asociación, el pitido se detiene.

> **Nota**
>
> Puedes volver a empezar tantas veces como quieras asociando emisores al receptor

## Visuales alternativos

![Pedidos](images/emv.400/vue_alt_eclairage.jpg)

## Preguntas frecuentes.

**Cómo borrar la memoria del receptor ?**

Mantenga presionado 10 segundos en la "R", hasta que el pitido continuo.
