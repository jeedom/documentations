# Instalación mediante la línea de comandos

El siguiente procedimiento está dirigido a usuarios avanzados y permite instalar Jeedom en un servidor Linux Debian.

>**INFORMACIÓN**
>
>Si tienes alguna duda sobre la instalación de Debian, el equipo de Jeedom también ofrece imágenes del sistema que incluyen Debian y Jeedom preinstalados. Consulta [**documentación específica**](/compatibility/#Images%20système%20officielles) para más información.

## Versión de Debian

Jeedom es un programa para Linux diseñado para funcionar de forma óptima en [un servidor Debian](https://www.debian.org/){:target="_blank"}.

No olvides comprobar que [**Jeedom es compatible con tu versión de Debian**](/compatibility/#Debian) antes de proceder a la instalación.

## Instalación manual

>**IMPORTANTE**
>
>Cada instancia de Jeedom debe ejecutarse en un servidor dedicado. Por este motivo, pueden producirse efectos no deseados si hay otros servicios alojados en paralelo. Del mismo modo, los sistemas de escritorio Debian no están cubiertos por el soporte técnico oficial.

### Ejecución

Para instalar Jeedom, es necesario conectarse a la consola del sistema mediante el método que mejor se adapte a tu situación *(ssh, teclado/pantalla, pantalla virtual)*.

Una vez que hayas iniciado sesión en el sistema con un usuario que tenga derechos de administrador `sudo`, basta con introducir estos tres comandos:

1. Descargar el script de instalación:
    ```sh
    wget https://raw.githubusercontent.com/jeedom/core/master/install/install.sh
    ```

2. Conceder permisos de ejecución:
    ```sh
    chmod +x install.sh
    ```

3. Ejecutar el script:
    ```sh
    sudo ./install.sh
    ```
>**INFORMACIÓN**
>
>Si has iniciado sesión como `root`, hay que ejecutar el script `./install.sh` sin control `sudo` previamente.

### Opciones

>**IMPORTANTE**
>
>Esta sección está reservada a usuarios con ciertos conocimientos técnicos.

El script de instalación de Jeedom dispone de diferentes opciones que permiten personalizar cada instancia:

- **Base de datos** (`-d`): instala o no la base de datos gestionada por Jeedom *(`1` por defecto)*
- **Tipo de instalación** (`-i`): Define el tipo de instalación *(`standard` por defecto)*
- **Etapa** (`-s`): ejecuta un paso específico *(`0` por defecto)*
- **Versión** (`-v`): selecciona una rama de desarrollo de Jeedom *(`master` por defecto)*
- **Carpeta de instalación** (`-w`): directorio donde instalar Jeedom *(`/var/www/html` por defecto)*

## Compatibilidad de hardware

La lista, no exhaustiva, de los dispositivos compatibles con Jeedom se puede consultar en [Documentación **Compatibilidad**](/compatibility/#Matériels%20supportés)

## Primera conexión

Consulta la documentación relativa a la [**Primera conexión**](/premiers-pas/#Première%20connexion) para acceder a la interfaz de Jeedom tras la instalación.
