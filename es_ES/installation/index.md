# Material

Jeedom se puede instalar en diferentes componentes de hardware :

-   una Raspberry Pi 2, 3 o 4 
-   un Synology NAS
-   cualquier sistema Linux basado en Debian 10 (Buster)
-   Delta de caja libre

También puede comprar una caja lista para usar con Jeedom preinstalado que también contiene un paquete de servicio (más soporte y servicios) y complementos gratuitos :

- [Jeedom Atlas Z-Wave+](https://www.domadoo.fr/fr/box-domotique/5847-jeedom-controleur-domotique-jeedom-atlas-z-wave.html)
- [Jeedom Atlas Zigbee](https://www.domadoo.fr/fr/box-domotique/5878-jeedom-controleur-domotique-jeedom-atlas-zigbee.html)
- [Jeedom Atlas EnOcean](https://www.domadoo.fr/fr/box-domotique/5877-jeedom-controleur-domotique-jeedom-atlas-enocean.html)

{% include lightbox.html src="images/Jeedom-Atlas-infographic-2.jpg" data="Atlas" title="Jeedom Atlas" imgstyle="width:auto;display: block;margin: 0 auto;" %}

En el ensamblaje de bricolaje (hágalo usted mismo), aquí hay una configuración "típica" para comenzar con Jeedom en Z-Wave :

1. Frambuesa Pi 4 :

-   Una frambuesa+caja \~ 50 €
-   Una llave Aeotec Gen 5 \~ 60 €
-   Una tarjeta micro microSD \~ 7 €
-   Una fuente de alimentación USB \~ 8 €

Eso es un total de 125 € por una caja domótica de código abierto con control completo de su instalación.

> **Consejo**
>
> - Es posible añadir o cambiar por una antena Rfxcom, o una llave enOcean, etc. 
> - En principio, necesita una llave USB por protocolo adicional. Dependiendo de su número y de su consumo acumulado, en una Raspberry Pi puede que necesites un hub USB adicional con su fuente de alimentación dedicada. 
> - Para la clave Z-Wave Aeotec Gen 5 en uso acumulativo con una Raspberry Pi 4 (los modelos anteriores no están involucrados), debe usar uno reciente si desea deshacerse de un concentrador USB. Consultar y obtener suministros de un vendedor de equipos de automatización del hogar.
> - En RPi 4, se recomienda enfáticamente reemplazar la tarjeta microSD con un disco duro mSATA USB3, conectado directamente al puerto USB3 con arranque nativo. Las tarjetas microSD tienen una vida útil muy limitada en el intercambio intensivo de datos: reservarse solo para breves periodos de prueba.

> **Consejo**
>
> Jeedom es un software que es y seguirá siendo de código abierto, su uso es completamente gratuito y no depende de una nube o una suscripción. Sin embargo, algunos complementos que aumentan las capacidades de Jeedom o su uso pueden ser de pago **y puede necesitar una conexión a internet**. Puede encontrar la lista de complementos [aquí](http://market.jeedom.fr/index.php?v=d&p=market&type=plugin).

> **Consejo**
>
> Paquete de servicio ? Quezako ? Usted puede ver [aquí](https://blog.jeedom.com/?p=1215) los beneficios de los paquetes de servicio.

# Installation

Quiero instalar Jeedom :

- Sobre una [atlas](https://doc.jeedom.com/es_ES/installation/atlas)
- Sobre una [inteligente](https://doc.jeedom.com/es_ES/installation/smart)
- Sobre una [min+](https://doc.jeedom.com/es_ES/installation/mini)
- Sobre un [Frambuesa-pi](https://doc.jeedom.com/es_ES/installation/rpi)
- Sobre una [Delta de caja libre](https://doc.jeedom.com/es_ES/installation/freeboxdelta)
- En [línea de comando](https://doc.jeedom.com/es_ES/installation/cli)
- Sobre una [Máquina virtual](https://doc.jeedom.com/es_ES/installation/vm)
- Sobre un [Estibador](https://doc.jeedom.com/es_ES/installation/docker). Nota : No recomendamos este modo de instalación que complica el uso de ciertos equipos por el modo de red de Docker
- Sobre un [Sinología NAS](https://doc.jeedom.com/es_ES/installation/synology). Nota : No recomendamos este modo de instalación que complica el uso de ciertos equipos por el modo de red de Docker
- Sobre el [bearemetal (similar a Intel Nuc)](https://doc.jeedom.com/es_ES/installation/baremetal)

Una vez realizada la instalación, no olvides consultar la documentación [Primer paso con Jeedom](https://doc.jeedom.com/es_ES/premiers-pas/index)
