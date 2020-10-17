# Edisio ETC4

**El módulo**

![module](images/etc4/module.jpg)

**El visual de Jeedom**

![vue default](images/etc4/vue_default.jpg)

## Resumen

El mini control remoto e-Trendy de 4 canales es simple, robusto y de diseño, fue creado para complacer. Se conecta fácilmente a los receptores y puede controlar su encendido / apagado y la iluminación regulable, motores, persianas, persianas, portones, puertas de garaje. Tiene dos modos de programación.

Además, es posible la interacción con otros protocolos, puede interactuar con receptores de la marca Edisio, con Jeedom, pero también con cualquier receptor Z-Wave de su red.

## Funciones 

-   Modo de uso : Arranque / Parada, Apertura / Parada / Cierre, Variador, Motorización, Persianas, Persianas, Portones, Puertas de garaje
-   2 modos de programación
-   Pequeño, discreto y estético
-   Facilidad de uso e instalación

## Características técnicas

-   Tipo de módulo : Transmisor Edisio
-   Comida : 3VDC (batería de litio CR2430)
-   Canales : 4
-   Frecuencia : 868,3 MHz
-   Temperatura de funcionamiento : -10 ° C + 50 ° C
-   Dimensiones : 52x28x12mm
-   Grado de protección : IP40

## Datos del módulo

-   Marca : Casa inteligente Edisio
-   Apellido : ETC4

## Configuración general

Para configurar el complemento Edisio y asociar un módulo con Jeedom,
referirse a esto
[documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/edisio/).

> **Importante**
>
> Para que Jeedom cree automáticamente sus módulos transmisores, olvídese
> no activar la opción en la configuración del complemento.

### Las modas

Controle y centralice su iluminación de encendido / apagado y atenuadores, puertas, motores, en el mismo botón o en 2 botones separados. Los mandos a distancia E-Trendy tienen 2 modos de funcionamiento, MODO 1 y MODO 2 :

-   MODO 1 : Control de 1 tecla : Encendido / Apagado, Abrir / Cerrar, Variación + / Variación-, Pulso
-   MODO 2 : Control de 2 botones :
    -   Teclas ARRIBA: Detener, Cerrar, Variación, Pulso
    -   Teclas inferiores: Encendido, Abierto, Variación +, Pulso

## Diagrama de funcionamiento

Dependiendo de si su transmisor está configurado en modo "1 botón" o "2 botones", así es como funciona el control remoto :

![diagramme](images/etc4/diagramme.jpg)

## Modo de cambio

-   MODO 1 :
    -   Mantenga presionada la tecla "C4"
    -   Presione la tecla "C1" una vez, siempre manteniendo presionada la tecla "C4", el LED parpadeará una vez

![mode1](images/etc4/mode1.jpg)

-   MODO 2 :
    -   Mantenga presionada la tecla "C4"
    -   Presione dos veces la tecla "C1", siempre sosteniendo la tecla "C4", el LED parpadeará dos veces

![mode2](images/etc4/mode2.jpg)

## Asociación del mando a distancia con Jeedom

La asociación de un transmisor Edisio se realiza de forma sencilla y automática. Solo debes presionar cada tecla que quieras tener en tu Jeedom.

Una vez, su equipo asociado, debería obtener este :

![asso equip](images/etc4/asso_equip.jpg)

### Commandes

Una vez creado su equipo, debe obtener los comandos asociados con el módulo :

![Pedidos](images/etc4/commandes.jpg)

Aquí está la lista de comandos :

-   bt01 : Este es el comando que le permite interactuar con el botón 1
-   bt02 : Este es el comando que te permite interactuar con el botón 2
-   bt03 : Este es el comando que te permite interactuar con el botón 3
-   bt04 : Este es el comando que te permite interactuar con el botón 4
-   Tambores : Indica el estado de la batería

### Informations

Una vez que su equipo esté asociado con Jeedom, habrá diversa información disponible :

![Pedidos](images/etc4/infos.jpg)

-   Creación : Indica la fecha en la que se creó el equipo
-   Comunicación : Indica la última comunicación registrada entre Jeedom y el micro-módulo
-   Tambores : Indica el estado de la batería para los módulos de batería
-   Estado : Devuelve el estado del módulo

### Utilisation

Una vez que su control remoto esté configurado, puede con el complemento Jeedom Scenario interactuar con su control remoto en Jeedom.

> **Nota**
>
> Cada tecla tiene un retorno de estado binario.

## Preguntas más frecuentes.

**Cómo eliminar la asociación de un botón con un receptor ?**

Presione 5 segundos en la "R" del receptor, un simple pitido indica el modo de desprogramación activado. Presione la tecla "C" para borrar. Repita esta operación para eliminar todas las claves.
