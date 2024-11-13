# Instalación en Raspberry Pi

Encontrará aquí la documentación para instalar Jeedom en una PI de frambuesa **con una tarjeta MiroSD.**. 

# Instalación de línea de comando

## Descargue la última imagen "lite""

[Generador de imágenes Raspberry Pi](https://www.raspberrypi.com/software/)  le permite descargar directamente la imagen de instalación del sistema operativo Raspberry Pi, en su versión más reciente, y grabar la imagen directamente en la tarjeta SD. Tenga en cuenta que debe tener una versión de Debian 11 (Bullseye), Jeedom aún no es compatible con Debian 12 (pero estamos trabajando en ello)).

## Habilitar acceso SSH

> **Advertencia**
>
> Por razones de seguridad, el acceso SSH ya no está habilitado de forma predeterminada en esta distribución. Entonces tienes que activarlo.

Se debe crear un archivo ssh vacío en la partición de arranque (el único accesible bajo Windows).

Solo haz clic derecho : documento nuevo / de texto y cámbiele el nombre a "ssh" **sin extensión**

> **Importante**
>
> En Windows, en el Explorador, debe verificar su configuración en pantalla / opciones / modificar la carpeta y las opciones de búsqueda /

![ExtensionFichier](images/ExtensionFichier.PNG)

## Inicie la Raspberry Pi

Inserte su tarjeta MicroSD, conecte el cable de red y conecte la alimentación.

## Conectarse en SSH

Identifica tu Raspberry Pi en la red

Necesita saber la dirección IP de su Raspberry PI. Muchas soluciones :

-   Consulte la configuración de DHCP en su enrutador
-   Utilice un escáner de puertos como "Angry IP Scanner" [aquí](http://angryip.org/download/#windows)

Establecer conexión

Luego use, por ejemplo, PuTTY para establecer su conexión [Aquí](http://www.putty.org/)

Ingrese la dirección IP de su Raspberry Pi (aquí 192.168.0.10) y haga clic en abrir. Acepte el mensaje de seguridad predeterminado en el primer inicio de sesión.

Inicie sesión con credenciales **pi / frambuesa**

> **Importante**
>
> Por razones de seguridad, es imprescindible cambiar la contraseña predeterminada. Los casos de piratería basados en el uso del par de inicio de sesión / contraseña predeterminado de Raspberry Pi están particularmente extendidos. (Comando : passwd y sudo passwd)

## Inicie el script de instalación de jeedom

```
wget https://raw.githubusercontent.com/jeedom/core/master/install/install.sh
chmod +x instalar
./install
```

**La contraseña de sudo también es frambuesa**

> **Nota**
>
> Dependiendo de su velocidad de internet, la instalación puede tomar de 45 a 90 minutos. No debe interrumpir el proceso antes del final. De lo contrario, tendrá que repetir todo el procedimiento.

Luego solo vaya a IP\_MACHINE\_JEEDOM

> **Nota**
>
> Las credenciales predeterminadas son admin / admin

Para obtener más información sobre la instalación de Jeedom, consulte esto [documentación](https://doc.jeedom.com/es_ES/installation/cli)

Entonces puedes seguir la documentación [Primer paso con Jeedom](https://doc.jeedom.com/es_ES/premiers-pas/index)
