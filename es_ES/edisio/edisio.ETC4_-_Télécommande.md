# Edisio ETC4

**El módulo**

![module](images/etc4/module.jpg)

**La imagen de Jeedom**

![vue default](images/etc4/vue_default.jpg)

## Resumen

El mini control remoto e-Trendy de 4 canales es simple, robusto y elegante, fue creado para complacer. Se conecta fácilmente a los receptores y puede controlar su encendido/apagado y luces regulables, motores, persianas, persianas, portones, puertas de garaje. Tiene dos modos de programación.

Además, es posible la interacción con otros protocolos, puede interactuar con receptores de la marca Edisio, con Jeedom, pero también con cualquier receptor Z-Wave de su red.

## Funciones 

-   Modo de uso : Start/Stop, Open/Stop/Close, Dimmer, Motorización, Persianas, Persianas, Portones, Puertas de garaje
-   2 modos de programación
-   Pequeño, discreto y estético
-   Facilidad de uso e instalación

## Características técnicas

-   Tipo de mod : Transmisor Edisio
-   Alimento : 3VDC (batería de litio CR2430)
-   Canales : 4
-   Frecuencia : 868,3 MHz
-   Temperatura de funcionamiento : -10°C +50°C
-   Dimensiones : 52x28x12mm
-   Grado de protección : IP40

## Datos del módulo

-   Marca : Hogar inteligente Edisio
-   Apellido : ETC4

## Configuración general

Para configurar el complemento Edisio y asociar un módulo con Jeedom,
referirse a esto
[documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/edisio/).

> **Importante**
>
> Para que Jeedom cree automáticamente sus módulos transmisores, recuerde
> no activar la opción en la configuración del plugin.

### Las modas

Controla y centraliza tus luces y dimmers On/Off, aperturas, motores, en un mismo pulsador o en 2 pulsadores separados. Los mandos a distancia e-Trendy tienen 2 modos de funcionamiento, MODO 1 y MODO 2 :

-   MODO 1 : Control de 1 toque : Encendido/Apagado, Abrir/Cerrar, Atenuación+/Atenuación-, Impulso
-   MODO 2 : Control de 2 teclas :
    -   Teclas ARRIBA: Stop, Close, Dimming-, Impulso
    -   Teclas inferiores: Encendido, Abierto, Atenuación+, Impulso

## Diagrama de operación

Dependiendo de si su transmisor está configurado en modo "1 tecla" o "2 teclas", así es como funciona el control remoto :

![diagramme](images/etc4/diagramme.jpg)

## Modo de cambio

-   MODO 1 :
    -   Mantenga presionada la tecla "C4""
    -   Presione la tecla "C1" 1 vez, manteniendo presionada la tecla "C4", el LED parpadeará 1 vez

![mode1](images/etc4/mode1.jpg)

-   MODO 2 :
    -   Mantenga presionada la tecla "C4""
    -   Presione 2 veces la tecla "C1", manteniendo presionada la tecla "C4", el LED parpadeará 2 veces

![mode2](images/etc4/mode2.jpg)

## Asociación del control remoto a Jeedom

La asociación de un transmisor Edisio se realiza de forma sencilla y automática. Simplemente presione cada tecla que desee tener en su Jeedom.

Una vez que su equipo esté asociado, debería obtener esto :

![asso equip](images/etc4/asso_equip.jpg)

### Commandes

Una vez creado su equipo, debe obtener los comandos asociados con el módulo :

![Pedidos](images/etc4/commandes.jpg)

Aquí está la lista de comandos :

-   bt01 : Este es el comando que te permite interactuar con el botón 1
-   bt02 : Este es el comando que te permite interactuar con el botón 2
-   bt03 : Este es el comando que te permite interactuar con el botón 3
-   bt04 : Este es el comando que te permite interactuar con el botón 4
-   Batería : Indica el estado de la batería

### Informations

Una vez que su equipo esté asociado con Jeedom, estará disponible diversa información :

![Pedidos](images/etc4/infos.jpg)

-   Creación : Indica la fecha en que se creó el equipo
-   Comunicación : Indica la última comunicación registrada entre Jeedom y el micromódulo
-   Batería : Indica el estado de la batería para los módulos que funcionan con batería
-   Estado : Devuelve el estado del módulo

### Utilisation

Una vez que su control remoto está configurado, puede con el complemento Jeedom Scenario interactuar con su control remoto en Jeedom.

> **Nota**
>
> Cada tecla tiene una retroalimentación de estado binario.

## Preguntas frecuentes.

**Cómo eliminar la asociación de una llave a un receptor ?**

Presione la "R" en el receptor durante 5 segundos, un solo pitido indica el modo de desprogramación activado. Pulse la tecla "C" para borrar. Repetir esta operación para todas las claves a borrar.
