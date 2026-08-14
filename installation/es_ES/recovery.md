# Instalación en Smart/Atlas

## Copia de seguridad de Jeedom

Antes de reinstalar el sistema, **es imprescindible descargar una copia de seguridad reciente de Jeedom** que se podrá restaurar una vez finalizado el proceso:

1. Desde la interfaz de Jeedom, haz clic en el menú **Configuración → Sistema → Copias de seguridad**.

2. Haz clic en el botón **Iniciar una copia de seguridad**.

3. Cuando haya finalizado la operación, haz clic en **Descargar la copia de seguridad**.

## Restablecimiento del sistema

**Desde la versión 4.4.20, el equipo de Jeedom está desarrollando su propia función de restauración automática del sistema, que se inicia justo antes de que el sistema se ponga en marcha**. El proceso dura unos veinte minutos, durante los cuales no se puede acceder al sistema.

Al finalizar, el sistema se inicia una primera vez antes de reiniciarse automáticamente para, finalmente, hacerse visible en la red y estar accesible. En Smart, es posible seguir el proceso conectando una pantalla.

>**IMPORTANTE**
>
>Hay que tener paciencia: aunque parezca que no pasa nada, 20 minutos, al fin y al cabo, no es tanto tiempo.

>**INFORMACIÓN**
>
>Es posible que la dirección MAC de tu router *(y, por lo tanto, la dirección IP)* cambie según la versión del núcleo. Consulta las [métodos para localizar el router en la red local](/premiers-pas/#Accès%20local) en caso de necesidad.

El procedimiento se puede llevar a cabo directamente desde Jeedom haciendo clic en el menú **Configuración → Sistema → Restauración del sistema**, siguiendo dos procedimientos diferentes:

{% include lightbox.html src="../images/recovery.jpg" data="Recovery" title="Accueil page restauration système" imgstyle="display:block;margin:0 auto;" %}

### Modo automático

En este modo, todo el proceso se lleva a cabo de forma totalmente automática, sin necesidad de acceder físicamente al router.

Tras hacer clic en el botón **Restauración automática**, la última imagen del sistema se descarga directamente desde nuestros servidores al soporte de almacenamiento interno. Se comprueba la integridad de la imagen y, a continuación, se cambia el nombre del archivo.

La actualización del sistema se llevará a cabo la próxima vez que se inicie el sistema, a menos que el archivo de restauración se elimine o se mueva fuera de su carpeta de descargas.

>**INFORMACIÓN**
>
>Para preparar «manualmente» una restauración automática, sin pasar por la herramienta Jeedom, basta con enviar una imagen del sistema compatible renombrada como `JeedomSystemUpdate.img.gz` en la carpeta `/install/update` de Jeedom *(`/var/www/html/install/update/JeedomSystemUpdate.img.gz`)*.

### Modo USB

Este modo requiere conectar una memoria USB, cuya primera partición esté formateada en `FAT` *(o `ExFAT` + esquema `Enregistrement de démarrage principal (MBR)` en macOS)*, en el puerto situado en la parte superior derecha, visto desde la parte trasera.

El botón **Restauración USB** provoca, en primer lugar, la detección, la comprobación y el montaje de la memoria USB. A continuación, se descarga la última imagen del sistema desde nuestros servidores al soporte USB. Se comprueba la integridad de la imagen y, a continuación, se escribe el archivo de configuración USB.

El sistema se actualiza al arrancar si la memoria USB preparada está conectada en el primer puerto de la esquina superior derecha.

Un archivo `JeedomSystemUpdate.log` se genera en la memoria USB durante el proceso. Contiene los detalles de los pasos de la restauración del sistema y sirve principalmente para evitar que el sistema se actualice en bucle. Hay que eliminar este archivo para reiniciar la actualización del sistema *(por ejemplo, en un dispositivo idéntico con la misma memoria USB)*.

>**INFORMACIÓN**
>
>Para crear tú mismo una memoria USB de restauración, solo tienes que, **a través del explorador de archivos** *(sin necesidad de grabarla)*, copiar en la raíz de la primera partición de la memoria USB *(formato `FAT`)* :
>
>- o bien una imagen del sistema compatible renombrada como `JeedomSystemUpdate.img.gz`
>- o bien una imagen del sistema compatible **acompañada del archivo de configuración USB** `JeedomSystemUpdate.ini` cuyo contenido es `update_filename="Jeedom****-*.*.*_******-1*.*.img.gz"`.\
>`Jeedom****-*.*.*_******-1*.*.img.gz` que coincida con el nombre del archivo que hay en la memoria USB.

### Registros

Las operaciones realizadas por la herramienta de restauración del sistema se pueden consultar en el menú **Análisis → Registros**, en la sección **recovery**.

## Imágenes del sistema

Las imágenes de sistema que ofrece actualmente el equipo de Jeedom se pueden consultar y descargar libremente en las siguientes direcciones, según el hardware en cuestión:

- [**Imagen(es) del sistema Jeedom Smart**](https://images.jeedom.com/smart/){:target="_blank"}
- [**Imagen(es) del sistema Jeedom Atlas**](https://images.jeedom.com/atlas/){:target="_blank"}

Consultar [**Documentación sobre las imágenes de sistema oficiales**](/compatibility/#Images%20système%20officielles) para obtener más información.

## Grabación eMMC Smart

Las nuevas funciones de restauración del sistema no se pueden instalar en un Smart que aún tenga Debian 10. En ese caso, lo primero que hay que hacer es formatear el soporte eMMC extraíble para pasar a una versión superior de Debian; consulta la documentación. [**Guías → Tutoriales → Restablecimiento de los ajustes de fábrica de Smart**](/howto/smart) para más información.

## Primera conexión

Consulta la documentación relativa a la [**Primera conexión**](/premiers-pas/#Première%20connexion) para acceder a la interfaz de Jeedom tras la instalación.
