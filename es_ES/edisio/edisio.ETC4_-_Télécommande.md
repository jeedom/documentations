# Edisio ETC4

**El módulo**

![module](images/etc4/module.jpg)

**El visual de Jeedom**

![vue default](images/etc4/vue_default.jpg)

## Resumen

El mini control remoto de 4 canales e-Trendy es simple, robusto y de diseño, fue creado para complacer. Se conecta fácilmente a los receptores y puede controlar su encendido / apagado y luces regulables, motores, persianas, persianas, portones, puertas de garaje. Tiene dos modos de programación.

Además, es posible la interacción con otros protocolos, puede interactuar con los receptores de la marca Edisio, con Jeedom, pero también con cualquier receptor Z-Wave en su red.

## Funciones 

-   Modo de uso : Encendido / Apagado, Abrir / Parar / Cerrar, Atenuador, Motorización, Persianas, Persianas, Portones, Puertas de garaje
-   2 modos de programación
-   Pequeño, discreto y estético
-   Facilidad de uso e instalación

## Características técnicas

-   Tipo de módulo : Transmisor Edisio
-   Suministro : 3VDC (batería de litio CR2430)
-   Canales : 4
-   Frecuencia : 868.3 MHz
-   Temperatura de funcionamiento : -10 ° C + 50 ° C
-   Dimensiones : 52x28x12mm
-   Grado de protección : IP40

## Datos del módulo

-   Hacer : Edisio Smart Home
-   Nombre : ETC4

## Configuración general

Para configurar el complemento Edisio y asociar un módulo con Jeedom,
referirse a esto
[Documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/edisio/).

> **Importante**
>
> Para que Jeedom cree automáticamente sus módulos transmisores, recuerde
> no active la opción en la configuración del complemento.

### Las modas

Controle y centralice sus luces de encendido / apagado y atenuadores, apertura, motores, en la misma tecla o en 2 botones separados. Los controles remotos e-Trendy tienen 2 modos de funcionamiento, MODO 1 y MODO 2 :

-   MODO 1 : Control de 1 botón : Encendido / Apagado, Abrir / Cerrar, Variación + / Variación-, Impulso
-   MODO 2 : Control en 2 teclas :
    -   Teclas ARRIBA: Detener, Cerrar, Variación, Impulso
    -   Teclas inferiores: Caminar, Abierto, Variación +, Pulso

## Diagrama de funciones

Dependiendo de si su transmisor está configurado en modo "1 tecla" o "2 teclas", así es como funciona el control remoto :

![diagramme](images/etc4/diagramme.jpg)

## Cambiar modo

-   MODO 1 :
    -   Mantenga presionada la tecla "C4"
    -   Presione el botón "C1" 1x, manteniendo presionado el botón "C4", el LED parpadeará 1 vez

![mode1](images/etc4/mode1.jpg)

-   MODO 2 :
    -   Mantenga presionada la tecla "C4"
    -   Presione 2 veces la tecla "C1", manteniendo presionada la tecla "C4", el LED parpadeará 2 veces

![mode2](images/etc4/mode2.jpg)

## Asociación del control remoto con Jeedom

La asociación de un transmisor Edisio se realiza de forma simple y automática. Simplemente presione cualquier tecla que desee en su Jeedom.

Una vez, su equipo asociado, debería obtener esto :

![asso equip](images/etc4/asso_equip.jpg)

### Commandes

Una vez que se crea su equipo, debe obtener los comandos asociados con el módulo :

![Comandos](images/etc4/commandes.jpg)

Aquí está la lista de comandos :

-   bt01 : Es el comando que te permite interactuar con el botón 1
-   bt02 : Es el comando que permite interactuar con el botón 2
-   bt03 : Es el comando que permite interactuar con el botón 3
-   bt04 : Es el comando que te permite interactuar con el botón 4
-   Batería : Indica el estado de la batería

### Informations

Una vez que su equipo esté asociado con Jeedom, habrá diversa información disponible :

![Comandos](images/etc4/infos.jpg)

-   Creación : Indica la fecha en que se creó el equipo
-   Comunicación : Indica la última comunicación registrada entre Jeedom y el micro-módulo
-   Batería : Indica el estado de la batería para los módulos de batería
-   Estado : Devuelve el estado del módulo

### Utilisation

Una vez que su control remoto está configurado, puede interactuar con el control remoto Jeedom Scenario con su control remoto en Jeedom.

> **Nota**
>
> Cada clave para un estado binario devuelve.

## Faq.

**Cómo eliminar la asociación de una clave con un receptor ?**

Presione 5 segundos en la "R" del receptor, un simple pitido indica el modo de programación activo. Presione la tecla "C" para eliminar. Repita esta operación para borrar todas las teclas.
