# Hardware

Jeedom se puede instalar en diferentes tipos de hardware :

-   una Raspberry Pi 2, 3 o 4 
-   un NAS Synology
-   cualquier sistema Linux basado en Debian 11 (Bullseye)
-   Freebox Delta

También puede comprar una caja preparada con Jeedom preinstalado que también contiene un paquete de servicio (más soporte y servicios) y complementos ofrecidos :

- [Jeedom Atlas Z-Wave +](https://www.domadoo.fr/fr/box-domotique/5847-jeedom-controleur-domotique-jeedom-atlas-z-wave.html)
- [Jeedom Atlas Zigbee](https://www.domadoo.fr/fr/box-domotique/5878-jeedom-controleur-domotique-jeedom-atlas-zigbee.html)
- [Jeedom Atlas EnOcean](https://www.domadoo.fr/fr/box-domotique/5877-jeedom-controleur-domotique-jeedom-atlas-enocean.html)

{% include lightbox.html src="images/Jeedom-Atlas-infographic-2.jpg" data="Atlas" title="Jeedom Atlas" imgstyle="width:auto;display: block;margin: 0 auto;" %}

En la edición de bricolaje (hágalo usted mismo), aquí hay una configuración "típica" para comenzar con Jeedom en Z-Wave :

1. Raspberry pi 4 :

-   Un raspberry+caja \~ 50 €
-   Una llave Aeotec Gen 5 \ ~ 60 €
-   Una tarjeta microSD \ ~ 7 €
-   Una fuente de alimentación USB \~ 8 €

Un total de 125 € para una caja de automatización del hogar de código abierto con control completo sobre su instalación.

> **Punta**
>
> - Es posible agregar o cambiar con una antena Rfxcom, o una tecla enOcean, etc. 
> - En principio, se necesita una llave USB por protocolo adicional. Dependiendo de su número y su consumo acumulado, en una Raspberry Pi es posible que necesite un concentrador USB adicional con su fuente de alimentación dedicada. 
> - Para la clave Z-Wave Aeotec Gen 5 en uso acumulativo con una Raspberry Pi 4 (modelos anteriores no afectados), debe usar una reciente si desea eliminar un concentrador USB. Obtenga información y obtenga suministros de un vendedor de equipos de domótica.
> - En RPi 4, se recomienda encarecidamente reemplazar la tarjeta microSD con un disco duro mSATA USB3, conectado directamente al puerto USB3 con arranque nativo. Las tarjetas microSD tienen una vida útil muy limitada debido al intenso intercambio de datos: solo para ser reservado para períodos cortos de prueba.

> **Punta**
>
> Jeedom es un software que es y seguirá siendo de código abierto, su uso es completamente gratuito y no depende de una nube o una suscripción. Sin embargo, algunos complementos que aumentan la capacidad de Jeedom o su uso pueden ser de pago **y puede necesitar una conexión a internet**. Puedes encontrar la lista de complementos [aquí](http://market.jeedom.fr/index.php?v=d&p=market&type=plugin).

> **Punta**
>
> Servicio pack ? Quézako ? Podéis ver [aquí](https://blog.jeedom.com/?p=1215) las ventajas de los service packs.

# Installation

Quiero instalar Jeedom :

- Sobre una [Luna](https://doc.jeedom.com/es_ES/plugins/home%20automation%20protocol/luna)
- Sobre una [atlas](https://doc.jeedom.com/es_ES/installation/atlas)
- Sobre una [INTELIGENTE](https://doc.jeedom.com/es_ES/installation/smart)
- Sobre una [mini +](https://doc.jeedom.com/es_ES/installation/mini)
- Sobre un [Raspberry Pi](https://doc.jeedom.com/es_ES/installation/rpi)
- Sobre una [Freebox Delta](https://doc.jeedom.com/es_ES/installation/freeboxdelta)
- En [línea de comando](https://doc.jeedom.com/es_ES/installation/cli)
- Sobre una [VM](https://doc.jeedom.com/es_ES/installation/vm)
- Sobre un [Estibador](https://doc.jeedom.com/es_ES/installation/docker). Nota : No recomendamos este modo de instalación que complica el uso de ciertos equipos debido al modo de red de Docker
- Sobre un [NAS Synology](https://doc.jeedom.com/es_ES/installation/synology). Nota : No recomendamos este modo de instalación que complica el uso de ciertos equipos debido al modo de red de Docker
- En [metal desnudo (tipo Intel Nuc)](https://doc.jeedom.com/es_ES/installation/baremetal)

Una vez realizada la instalación no olvides consultar la documentación [Primer paso con Jeedom](https://doc.jeedom.com/es_ES/premiers-pas/index)
