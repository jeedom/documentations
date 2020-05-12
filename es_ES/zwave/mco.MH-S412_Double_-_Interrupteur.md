# MCO MH-S412 Doble

**El módulo**

![module](images/mco.mhs412/module.jpg)

**El visual de Jeedom**

![vuedefaut1](images/mco.mhs412/vuedefaut1.jpg)

## Resumen

El interruptor MH-S412-EU hace posible cambiar las 2 cargas conectadas, ya sea manualmente como un interruptor convencional o remotamente a través del protocolo inalámbrico Z-Wave.

Su acabado y diseño de vidrio aporta un estilo moderno.

El interruptor MH-S412-EU puede controlar cualquier tipo de carga, iluminación o electrodomésticos.

El interruptor también está equipado con un indicador LED que indica su estado.

## Fonctions

-   Controla dos lámparas o dispositivos de forma remota
-   Se instala en lugar de un interruptor existente (cabe perfectamente en una caja de montaje empotrado de 40 mm)
-   Función ON / OFF
-   Soporta comandos de asociación (Grupo 1 y Grupo 2)
-   Control local de los dos cargos
-   LED de estado
-   Acabado de vidrio, diseño moderno
-   Botones táctiles

## Características técnicas

-   Tipo de módulo : Receptor Z-Wave
-   Color : Blanc
-   Suministro : 230 V, 50 Hz
-   Cableado : 3 hilos, neutro requerido
-   Potencia máxima : 5A (1100W) para cada canal
-   Frecuencia : 868.42 Mhz
-   Alcance : hasta 30 m
-   Dimensiones : 86 x 86 x 43 mm
-   Affichage: LED azul / rojo

## Datos del módulo

-   Hacer : MC HOME
-   Nombre : MH-S412 doble
-   ID del fabricante : 351
-   Tipo de producto : 16642
-   ID del producto : 514

## Configuration

Para configurar el complemento OpenZwave y saber cómo incluir a Jeedom, consulte esto [Documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Para poner este módulo en modo de inclusión, presione uno de los 2 botones en el panel frontal durante 3 segundos, de acuerdo con su documentación en papel.

Una vez incluido, deberías obtener esto :

![Plugin Zwave](images/mco.mhs412/information.jpg)

### Commandes

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Comandos](images/mco.mhs412/commandes.jpg)

Luego, si desea configurar el módulo de acuerdo con su instalación, debe pasar por el botón "Configuración" del complemento OpenZwave de Jeedom.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña Configuración)

![Config1](images/mco.mhs412/config1.jpg)

Detalles del parámetro :

-   1: Estado de ahorro antes de falla de energía : enable (permite encontrar el último estado de los interruptores justo antes del corte de energía) desechable (los interruptores estarán en estado APAGADO cuando vuelva la red eléctrica)

### Groupes

Este módulo tiene 3 grupos de asociación. Solo el tercero es esencial.

![Groupe](images/mco.mhs412/groupe.jpg)

## Bueno saber

### Específicos

- los botones táctiles tienen un halo azul cuando se controla la carga
- los botones táctiles tienen un halo naranja cuando la carga no está controlada
- el tacto es bastante agradable y los controles receptivos
- este interruptor puede controlar su carga en modo autónomo (no conectado a un controlador de onda z)

## Wakeup

Este módulo está conectado a la red eléctrica (220v), el despertador es instantáneo y, por lo tanto, no requiere ninguna acción particular al cambiar los parámetros

## Faq.

Para excluir este modelo, ponga Openzwave en modo de exclusión y presione uno de los 2 botones en el panel frontal durante 3 segundos, de acuerdo con su documentación en papel.

Para restaurar la configuración de fábrica, presione uno de los 2 botones en el panel frontal durante 10 segundos, de acuerdo con su documentación en papel.
