# Restauración del sistema Jeedom Smart

## Copia de seguridad de Jeedom

Antes de nada, **es imprescindible realizar una copia de seguridad de Jeedom** que se pueda restaurar una vez finalizado el proceso.

1. Accede a la interfaz de Jeedom y haz clic en el menú **Configuración > Sistema > Copias de seguridad**.

2. Haz clic en el botón **Iniciar una copia de seguridad**.

3. Cuando haya finalizado la copia de seguridad, haz clic en **Descargar la copia de seguridad**.

4. Una vez descargada la copia de seguridad de Jeedom, apaga el sistema a través del menú **Configuración > Sistema > Apagar**.

## Restablecimiento del sistema mediante eMMC

Este procedimiento explica cómo actualizar el entorno del sistema de un dispositivo Jeedom Smart que aún funciona con **Debian 10 Buster**. Es necesario grabar directamente en el soporte de almacenamiento interno *(eMMC)* siguiendo los pasos que se indican a continuación.

>**IMPORTANTE**
>
>**Antes de empezar, no dudes en ver el vídeo sobre cómo sustituir la eMMC, en el que se explica detalladamente cómo desmontar y volver a montar el dispositivo Jeedom Smart** *(2 minutos)*:
>
>[![Desmontaje y montaje de Smart en vídeo](https://img.youtube.com/vi/lUhtP687s2E/hqdefault.jpg)](https://youtu.be/lUhtP687s2E){:target="_blank"}

### Requisitos previos

Para actualizar el sistema, hay que:

- Hazte con **un destornillador de estrella pequeño** para abrir la caja

---

- Adquirir [**una tarjeta eMMC de recambio**](https://www.domadoo.fr/fr/controleurs-adaptateurs/5539-jeedom-carte-memoire-emmc-16go-de-remplacement-pour-jeedom-smart.html){:target="_blank"}

**O**

- Descargar la última versión [**Imagen del sistema Jeedom Smart facilitada por el equipo**](https://images.jeedom.com/smart/){:target="_blank"}
- Hazte con **un adaptador eMMC>USB/SD/µSD compatible con Odroid-C2** para grabar la imagen desde un ordenador, por ejemplo:

![Ejemplo de adaptador eMMC](../images/emmc_adapter.jpg)

### Desmontaje de la caja Jeedom Smart

1. Desconecta todos los dispositivos externos conectados al Smart *(alimentación, Ethernet, USB, HDMI...)* y desenrosca la antena del controlador interno.

2. Desatornilla los dos tornillos de la parte delantera del dispositivo, junto a la placa de plexiglás ***(¡Cuidado, es frágil!)***.

3. Desliza la placa base hacia la parte trasera de la carcasa:

![Abrir el Smart](../images/smart_open.jpg)

### Grabación de la eMMC

1. Desconecta la memoria eMMC situada debajo de la placa base:

![Desmontar la tarjeta eMMC](../images/smart_emmc.jpg)

>**INFORMACIÓN**
>
>**En caso de sustituir la eMMC original** por una eMMC con Jeedom preinstalado en Debian 11, **conecta la nueva eMMC** en lugar de la antigua **y pasa directamente al paso de [remontaje](#Remontage%20de%20la%20box%20Jeedom%20Smart)**.

2. Inserta la tarjeta eMMC en el adaptador y conéctalo a un ordenador:

![eMMC en el ordenador](../images/emmc_to_pc.jpg)

3. Abre el programa de grabación *(por ejemplo, balenaEtcher)*.

4. Selecciona **el archivo de imagen del sistema como origen**, **el soporte eMMC como destino** y, a continuación, inicia la grabación.

5. Una vez finalizada la grabación, desconecta el adaptador del ordenador y, a continuación, desengancha la tarjeta eMMC y vuelve a engancharla debajo de la placa base del Smart.

### Montaje de la caja Jeedom Smart

1. Desliza la placa base desde la parte trasera hacia la parte delantera a través de la carcasa.

2. Vuelve a colocar el plexiglás en su sitio y vuelve a atornillar los dos tornillos de la parte delantera de la caja sin ejercer demasiada fuerza:

![Desenroscar Smart](../images/smart_unscrew.jpg)

3. Vuelve a atornillar la antena y, a continuación, vuelve a conectar los dispositivos externos, terminando por el cable de alimentación.

## Recuperación automática del sistema o mediante USB

Una vez instalado el sistema Debian en su versión 11 o superior, las actualizaciones del sistema se pueden realizar directamente desde el núcleo de Jeedom siguiendo estos pasos: [el nuevo procedimiento de instalación en Smart](/installation/recovery)

## Introducción al nuevo sistema

### Primera puesta en marcha

Al iniciarse por primera vez, el sistema de archivos se redimensiona para ocupar todo el espacio disponible antes de que el dispositivo se reinicie automáticamente.

>**INFORMACIÓN**
>
>Este paso puede tardar hasta 2 minutos.

### Acceso a Jeedom

Una vez reinstalado el sistema, el primer acceso a la interfaz de Jeedom debe realizarse con las credenciales `admin`/`admin`.

### Recuperación de Jeedom

1. Ve al menú **Ajustes > Sistema > Copias de seguridad**.

2. Haz clic en **Añadir una copia de seguridad** y selecciona la copia de seguridad realizada anteriormente.

3. Haz clic en **Restaurar la copia de seguridad**.

### Modificación del puerto del controlador interno

**A partir de Debian 11 es necesario modificar el puerto del controlador interno**, que ya no es `/dev/ttyS1` pero `/dev/ttyAML1` en este nuevo sistema.
