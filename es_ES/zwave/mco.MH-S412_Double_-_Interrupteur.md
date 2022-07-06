# MCO MH-S412 Doble

**El módulo**

![module](images/mco.mhs412/module.jpg)

**La imagen de Jeedom**

![vuedefaut1](images/mco.mhs412/vuedefaut1.jpg)

## Resumen

El interruptor MH-S412-EU permite conmutar las 2 cargas conectadas, ya sea de forma manual como un interruptor clásico, o de forma remota a través del protocolo inalámbrico Z-Wave.

Su acabado en cristal y su diseño aporta un estilo moderno.

El interruptor MH-S412-EU puede controlar cualquier tipo de carga, iluminación o dispositivo eléctrico.

El interruptor también está equipado con un indicador LED que indica su estado.

## Fonctions

-   Controla dos lámparas o dispositivos de forma remota
-   Se instala en lugar de un interruptor existente (encaja perfectamente en una caja de empotrar de 40 mm))
-   Función de encendido/apagado
-   Admite comandos de asociación (Grupo 1 y Grupo 2)
-   Control de ambas cargas localmente
-   LED de estado
-   Acabado de cristal, diseño moderno
-   Botones táctiles

## Características técnicas

-   Tipo de mod : Receptor de onda Z
-   Color : Blanc
-   Alimento : 230V, 50Hz
-   Alambrado : 3 hilos, se requiere neutro
-   Máximo poder : 5A (1100W) para cada canal
-   Frecuencia : 868.42Mhz
-   Alcance : hasta 30m
-   Dimensiones : 86x86x43mm
-   Affichage: LED azul/rojo

## Datos del módulo

-   Marca : MC INICIO
-   Apellido : MH-S412 Doble
-   Identificación del fabricante : 351
-   Tipo Producto : 16642
-   Identificación de producto : 514

## Configuration

Para configurar el complemento OpenZwave y saber cómo incluir Jeedom, consulte este [documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Para poner este módulo en modo de inclusión, presione solo uno de los 2 botones en el panel frontal durante 3 segundos, de acuerdo con su documentación en papel.

Una vez incluido, debe obtener esto :

![Plugin Zwave](images/mco.mhs412/information.jpg)

### Commandes

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Pedidos](images/mco.mhs412/commandes.jpg)

Luego, si desea configurar el módulo de acuerdo con su instalación, debe pasar por el botón "Configuración" del complemento Jeedom OpenZwave.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña de configuración)

![Config1](images/mco.mhs412/config1.jpg)

Detalles del parámetro :

-   1: Estado de ahorro antes del corte de energía : habilitar (le permite encontrar el último estado de los interruptores justo antes de la falla de energía) deshabilitar (los interruptores estarán en el estado APAGADO cuando regrese la energía) )

### Groupes

Este módulo tiene 3 grupos de asociación. Solo el tercero es imprescindible.

![Groupe](images/mco.mhs412/groupe.jpg)

## Bueno saber

### Especificidades

- los botones táctiles tienen un halo de color azul cuando se conduce la carga
- los botones táctiles tienen un halo de color naranja cuando no se conduce la carga
- el tacto es bastante agradable y los controles responden
- este interruptor puede controlar su carga en modo autónomo (no conectado a un controlador de onda z)

## Wakeup

Este módulo al estar conectado a la red eléctrica (220v), el despertador es instantáneo y por lo tanto no requiere ninguna acción en particular al cambiar los parámetros

## Preguntas frecuentes.

Para excluir este modelo, ponga Openzwave en modo de exclusión y presione solo uno de los 2 botones en el panel frontal durante 3 segundos, de acuerdo con su documentación en papel.

Para restaurar la configuración de fábrica, presione solo uno de los 2 botones en el panel frontal durante 10 segundos, de acuerdo con su documentación en papel.
