MCO MH-S412 Doble
==================

-   **El módulo**

![module](images/mco.mhs412/module.jpg)

-   **El visual de Jeedom**

![vuedefaut1](images/mco.mhs412/vuedefaut1.jpg)

Resumen
------


El interruptor MH-S412-EU se usa para cambiar las 2 cargas conectadas,
ya sea manualmente como un interruptor convencional o de forma remota a través de
Protocolo inalámbrico Z-Wave.

Su acabado y diseño de vidrio aporta un estilo moderno.

El interruptor MH-S412-EU puede controlar cualquier tipo de carga,
iluminación o un electrodoméstico.

El interruptor también está equipado con un indicador LED que indica su
état.

Fonctions
---------

-   Controla dos lámparas o dispositivos de forma remota

-   Se instala en lugar de un interruptor existente (se ajusta
    perfectamente en una caja de instalación de 40 mm)

-   Función ON / OFF

-   Soporta comandos de asociación (Grupo 1 y Grupo 2)

-   Control local de los dos cargos

-   LED de estado

-   Acabado de vidrio, diseño moderno

-   Botones táctiles

Características técnicas
---------------------------

-   Tipo de módulo : Receptor Z-Wave

-   Color : Blanc

-   Suministro : 230 V, 50 Hz

-   Cableado : 3 hilos, neutro requerido

-   Potencia máxima : 5A (1100W) para cada canal

-   Frecuencia : 868.42 Mhz

-   Alcance : hasta 30 m

-   Dimensiones : 86 x 86 x 43 mm

-   Affichage: LED azul / rojo

Datos del módulo
-----------------

-   Hacer : MC HOME

-   Nombre : MH-S412 doble

-   ID del fabricante : 351

-   Tipo de producto : 16642

-   ID del producto : 514

Configuration
-------------

Para configurar el complemento OpenZwave y saber cómo poner Jeedom en
inclusión refiérase a esto
[Documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Para poner este módulo en modo de inclusión, presione solo uno
> 2 botones en el panel frontal durante 3 segundos, de acuerdo con su
> documentación en papel.

Una vez incluido, deberías obtener esto :

![Plugin Zwave](images/mco.mhs412/information.jpg)

### Commandes

Una vez que el módulo ha sido reconocido, los comandos asociados con el módulo serán
disponibles.

![Comandos](images/mco.mhs412/commandes.jpg)

Entonces, si desea configurar el módulo de acuerdo con
de su instalación, debe pasar por el botón
"Configuración "del complemento OpenZwave de Jeedom.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña
configuraciones)

![Config1](images/mco.mhs412/config1.jpg)

Detalles del parámetro :

-   1: Estado de ahorro antes de falla de energía : habilitar (permite encontrar
    el último estado de los interruptores justo antes del corte de energía)
    desechable (los interruptores estarán en estado APAGADO en el retorno de red)

### Groupes

Este módulo tiene 3 grupos de asociación. Solo el tercero es
indispensable.

![Groupe](images/mco.mhs412/groupe.jpg)

Bueno saber
------------

### Específicos

1 \) los botones táctiles tienen un halo azul cuando la carga
es piloteado

2 \) los botones táctiles tienen un halo naranja cuando la carga
no está tripulado

3 \) el tacto es agradable y los controles responden

4 \) este interruptor puede controlar su carga en modo autónomo (no
conectado a un controlador de onda z)

Wakeup
------

Este módulo está conectado a la red eléctrica (220v), el despertador es instantáneo
y por lo tanto no requiere ninguna acción particular al cambiar
Configuraciones

Faq.
------

Para excluir este modelo, ponga Openzwave en modo de exclusión y presione
en uno de los 2 botones del panel frontal durante 3 segundos, de acuerdo con su
documentación en papel.

Para restaurar la configuración de fábrica, presione solo uno de los 2 botones
en el panel frontal durante 10 segundos, de acuerdo con su documentación en papel.
