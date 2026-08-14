# Compatibilidad

>**INFORMACIÓN**
>
>El equipo de Jeedom se esfuerza por mantener esta información actualizada, a veces en detrimento de otros desarrollos. La colaboración de la comunidad es muy valiosa en todos los aspectos de la documentación, y esta página es una de las prioridades.

## Cajas oficiales

**Jeedom y Domadoo** desarrollan y comercializan dispositivos oficiales «listos para usar», con Jeedom preinstalado en un sistema optimizado que incluye servicios, complementos y un servicio de asistencia técnica reforzado. Los dispositivos oficiales también cuentan con una herramienta de restauración automática del sistema.

{% include lightbox.html src="../images/tableau-comparatif-atlas-et-luna.jpg" data="AtlasLuna" title="Jeedom Atlas & Jeedom Luna" imgstyle="display:block;margin:0 auto;" %}

| Jeedom Atlas | Jeedom Luna |
|-------------------------|-------------------------|
| [Atlas **sin protocolo**](https://www.domadoo.fr/fr/box-domotique/7329-jeedom-controleur-domotique-jeedom-atlas-sans-protocole.html){:target="_blank"} | [Luna **Z-Wave, Zigbee + BT**](https://www.domadoo.fr/fr/box-domotique/6280-jeedom-controleur-domotique-jeedom-luna-z-wave700-zigbee30-bt.html){:target="_blank"} |
| [Atlas **EnOcean**](https://www.domadoo.fr/fr/box-domotique/5877-jeedom-atlas-enocean.html){:target="_blank"} | [Luna **Z-Wave, Zigbee + 4G**](https://www.domadoo.fr/fr/box-domotique/6615-jeedom-controleur-domotique-jeedom-luna-z-wave-zigbee-et-4g.html){:target="_blank"} |
| [Atlas **EnOcean + adaptador Z-Wave ZOOZ**](https://www.domadoo.fr/fr/box-domotique/6857-jeedom-controleur-domotique-jeedom-atlas-enocean-dongle-z-wave-zooz.html){:target="_blank"} | [Luna **Z-Wave, Zigbee, LoRaWAN + 4G**](https://www.domadoo.fr/fr/box-domotique/6617-jeedom-controleur-domotique-jeedom-luna-z-wave-zigbee-lorawan-4g.html){:target="_blank"} |
| [Atlas **Pro: riel DIN sin protocolo**](https://www.domadoo.fr/fr/box-domotique/6567-jeedom-controleur-domotique-sur-rail-din-jeedom-atlas-pro-sans-antenne.html){:target="_blank"} |             |
| [Atlas **Pro, carril DIN EnOcean**](https://www.domadoo.fr/fr/box-domotique/6565-jeedom-atlas-pro-enocean.html){:target="_blank"} |             |
| [Atlas **Pro, carril DIN KNX**](https://www.domadoo.fr/fr/box-domotique/6563-jeedom-controleur-domotique-sur-rail-din-jeedom-atlas-pro-knx.html){:target="_blank"} |             |

>**INFORMACIÓN**
>
>Aunque ya no se comercializa tanto, la Jeedom Smart sigue siendo una solución oficial totalmente viable cuyo sistema sigue siendo mantenido por el equipo.

## Equipos

Nuestras recomendaciones dependerán de varios factores:

- **Jeedom Atlas o Luna**: la combinación de simplicidad, optimización y compatibilidad avanzada.
- **Nanoordenador** *(Odroid C2, Rock Pi, Raspberry Pi, etc.)*: la mejor relación rendimiento-precio.
- **Mini-PC** *(NUC)*: rendimiento extremo para un presupuesto más elevado *(ver [el tutorial avanzado específico](/howtoadvance/vmware.installation_sur_nuc) para más detalles)*.

### Dispositivos compatibles

>**IMPORTANTE**
>
>El soporte técnico oficial se limita exclusivamente a la instancia de Jeedom. Solo los dispositivos oficiales cuentan también con soporte técnico *(salvo modificaciones)*.

| Dispositivos oficiales | Nanocomputadoras | Ordenadores | Hipervisores |
|------------------------|------------------------|------------------------|------------------------|
| Smart, Atlas, Luna     | Odroid C2, Rock Pi Serie 4, Raspberry Pi 3/4 y similares | Sistemas de 64 bits, mini-PC *(NUC)*, procesador Intel® N100 | Sistemas de 64 bits, VirtualBox, VMware, Proxmox, Hyper-V, Freebox |

### Equipos no compatibles

| Dispositivos oficiales | Nanocomputadoras | Ordenadores | Hipervisores |
|------------------------|------------------------|------------------------|------------------------|
| Jeedomboard, Mini+     | Hummingboard, Raspberry Pi 0/1/2 y similares | Sistemas de 32 bits | Sistemas de 32 bits |

## Por software

### Debian

| Versión | Estado |
|--------------------|--------------------|
| Debian 11 Bullseye | Recomendado |
| Debian 12 Bookworm | Compatible *(4,5)*   |
| Debian 13 Trixie   | En proceso de validación |
| Debian 10 Buster y versiones anteriores | No compatible |

### PHP

| Versión | Estado |
|--------------------|--------------------|
| PHP 7 | Recomendado |
| PHP 8 | Compatible *(4.5)*   |
| PHP 5.6 | Fin del soporte *(4.1)* |
| PHP 5.5 y versiones anteriores | No compatible     |

### MySQL

| Versión | Estado |
|--------------------|--------------------|
| MySQL 7.4 | Recomendado |
| MySQL 5.5/5.6/5.7  | Compatible |

### MariaDB

| Versión | Estado |
|--------------------|--------------------|
| MariaDB 10 | Recomendado |

## Imágenes oficiales del sistema

El equipo desarrolla imágenes de sistema a medida para una amplia variedad de dispositivos, incluyendo Debian, Jeedom y todas las dependencias de software recomendadas:

| Imagen del sistema | Documentación |
|--------------------|--------------------|
| [Luna](https://images.jeedom.com/luna/){:target="_blank"} | [Instalación en Luna](/plugins/home%20automation%20protocol/luna) |
| [Atlas](https://images.jeedom.com/atlas/){:target="_blank"} | [Instalación en Atlas](/installation/recovery) |
| [Inteligente](https://images.jeedom.com/smart/){:target="_blank"} | [Instalación en Smart](/installation/recovery) |
| [Ordenadores](https://images.jeedom.com/x86-64/){:target="_blank"} | [Instalación en PC/mini-PC](/installation/baremetal) |
| [Hipervisores](https://images.jeedom.com/x86-64/){:target="_blank"} | [Instalación en una máquina virtual](/installation/vm) |
| [Freebox](https://images.jeedom.com/freebox/){:target="_blank"} | [Instalación en Freebox](/installation/freeboxdelta) |

### Comprobación del archivo

La **clave SHA256**, que permite verificar la integridad del archivo descargado, se puede consultar en el archivo `info.json` que se encuentra en la carpeta de descargas.

### Primera conexión

Consulta la documentación relativa a la [**Primera conexión**](/premiers-pas/#Première%20connexion) para acceder a la interfaz de Jeedom tras la instalación.

### Consola del sistema

>**IMPORTANTE**
>
>No es recomendable ni necesario intervenir en la consola del sistema para utilizar Jeedom.\
>Cualquier modificación del sistema puede afectar al correcto funcionamiento de Jeedom.

Las credenciales predeterminadas para acceder a la consola del sistema *(teclado/pantalla o SSH)* son: `jeedom/Mjeedom96`. La contraseña `root` es idéntica.

## Equipos compatibles

Dependiendo de los protocolos y los complementos utilizados, no siempre es fácil saber si un módulo será compatible. Para ayudarte a determinar la compatibilidad de tu equipo, puedes consultar la página web [Compatibilidad con Jeedom](https://compatibility.jeedom.com/){:target="_blank"} cuya lista se mantiene actualizada por los propios complementos.

Además, la información de esta página web puede contrastarse con la disponible en la tienda online de productos de domótica. [Domadoo](https://www.domadoo.fr/){:target="_blank"}.

A continuación se incluyen algunos ejemplos de enlaces que puedes consultar según el protocolo en cuestión:

### Bluetooth

- [**Compatibilidad de Jeedom con Bluetooth**](https://compatibility.jeedom.com/index.php?v=d&p=home&protocol=Bluetooth){:target="_blank"}

### Cámaras

- [**Compatibilidad de Jeedom con cámaras**](https://compatibility.jeedom.com/index.php?v=d&p=home&protocol=IP){:target="_blank"}
- [**Domadoo - Cámaras**](https://www.domadoo.fr/fr/128-cameras-connectees){:target="_blank"}

### EnOcean

- [**Compatibilidad entre Jeedom y EnOcean**](https://compatibility.jeedom.com/index.php?v=d&p=home&protocol=EnOcean){:target="_blank"}
- [**Domadoo - EnOcean**](https://www.domadoo.fr/fr/225-domotique-enocean){:target="_blank"}

### RFXcom

- [**Compatibilidad entre Jeedom y RFXcom**](https://compatibility.jeedom.com/index.php?v=d&p=home&protocol=Rfxcom){:target="_blank"}

### Zigbee

- [**Compatibilidad entre Jeedom y Zigbee**](https://compatibility.jeedom.com/index.php?v=d&p=home&protocol=zigbee){:target="_blank"}
- [**Domadoo - Zigbee**](https://www.domadoo.fr/fr/206-produits-zigbee){:target="_blank"}

### Z-Wave

- [**Compatibilidad entre Jeedom y Z-Wave**](https://compatibility.jeedom.com/index.php?v=d&p=home&protocol=Z-Wave){:target="_blank"}
- [**Domadoo - Z-Wave**](https://www.domadoo.fr/fr/210-produits-zwave){:target="_blank"}

## Ejemplo de instalación «hazlo tú mismo»

Para una instalación DIY (Do It Yourself), aquí tienes una configuración «típica» para empezar con Jeedom y Z-Wave:

1.  Raspberry Pi 4:

    -   Una Raspberry + carcasa, unos 50 €
    -   Una llave Aeotec Gen 5 ~ 60 €
    -   Una tarjeta microSD de tamaño reducido, unos 7 €
    -   Un cargador USB de unos 8 €

Es decir, un total de 125 € por un dispositivo de domótica de código abierto con control total sobre su instalación.

>**INFORMACIÓN**
>
>Es posible añadir o sustituir una antena Rfxcom, un adaptador enOcean, etc. En principio, se necesita un adaptador USB por cada protocolo adicional. Dependiendo de su número y de su consumo acumulado, es posible que necesites un concentrador USB adicional con su propia fuente de alimentación para una Raspberry Pi.\
>Para utilizar el dispositivo Z-Wave Aeotec Gen 5 junto con una Raspberry Pi 4 (los modelos anteriores no son compatibles), es necesario utilizar un modelo reciente si se desea prescindir de un concentrador USB. Infórmate y adquiérelo en una tienda especializada en domótica.\
>En el caso del RPi 4, se recomienda encarecidamente sustituir la tarjeta microSD por un disco duro mSATA USB 3, conectado directamente al puerto USB 3 con arranque nativo. Las tarjetas microSD tienen una vida útil muy limitada cuando se someten a un uso intensivo de intercambio de datos: deben reservarse únicamente para periodos cortos de pruebas.
