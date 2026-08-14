# Instalación en PC/mini-PC

El siguiente procedimiento se basa en el uso de una imagen del sistema que incluye Debian y Jeedom preinstalados.

>**INFORMACIÓN**
>
>Para instalar Jeedom manualmente en un sistema Debian, consulta la documentación sobre [la instalación mediante la línea de comandos](cli).

## Descarga de la imagen del sistema

El equipo de Jeedom ofrece imágenes del sistema optimizadas para ordenadores de 64 bits.

El primer paso consiste en descargar la imagen del sistema que quieras instalar:

- [**Imagen(es) del sistema Jeedom x86-64**](https://images.jeedom.com/x86-64/){:target="_blank"}

>**INFORMACIÓN**
>
>Consultar [**documentación específica**](/compatibility/#Images%20système%20officielles) Para obtener más información sobre las imágenes del sistema Jeedom.

## Grabación de la imagen del sistema

El archivo descargado anteriormente debe grabarse en un soporte desde el que el equipo pueda arrancar, como una memoria USB, por ejemplo.

>**INFORMACIÓN**
>
>Si no conoces ningún programa de grabación, puedes utilizar [balenaEtcher](https://etcher.balena.io/){:target="_blank"}.

Para realizar la grabación, basta con seguir el procedimiento descrito por el editor del programa que estés utilizando.

Una vez grabada la imagen del sistema en el soporte de arranque, solo hay que arrancar desde él.

>**IMPORTANTE**
>
>Si tiene dificultades para arrancar desde la memoria USB, consulte la documentación de su equipo sobre las opciones de arranque de la BIOS.

## Opciones de instalación

Tras arrancar el ordenador desde el soporte que contiene la imagen del sistema, aparecen en pantalla diferentes opciones de instalación:

{% include lightbox.html src="../images/install-menu-amd64.jpg" data="InstallMenuAMD64" title="Menu d'installation Jeedom (AMD64)" imgstyle="width:75%;display:block;margin:0 auto;" %}

- **Instalar Jeedom (modo automático)**: **instala el sistema automáticamente** sin necesidad de intervención alguna. El equipo se apaga al finalizar la operación.
>**IMPORTANTE**
>
>Este modo se activa de forma predeterminada al cabo de 60 segundos, **por lo que la instalación puede realizarse sin conectar una pantalla**.

- **Instalación de Jeedom (modo manual)**: en este modo, debes **introducir manualmente la configuración del sistema que vas a instalar** *(idioma, país, red, dispositivo de almacenamiento, etc.)*.

- **Jeedom Live**: permite **probar Jeedom en un entorno no persistente** sin necesidad de instalar el sistema.
>**INFORMACIÓN**
>
>Esta función está disponible a partir de Debian 12 Bookworm.

## Compatibilidad de hardware

La lista, no exhaustiva, de ordenadores compatibles con Jeedom se puede consultar en [Documentación **Compatibilidad**](/compatibility/#Matériels%20supportés)

## Primera conexión

Consulta la documentación relativa a la [**Primera conexión**](/premiers-pas/#Première%20connexion) para acceder a la interfaz de Jeedom tras la instalación.
