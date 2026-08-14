<!-- Unused for now -->
## Entorno de desarrollo

Aquí veremos cómo configurar un entorno de desarrollo eficaz entre una Raspberry Pi de prueba y un PC con Windows para la edición del código y el mantenimiento del repositorio de GitHub.

Esta página trata sobre el núcleo de Jeedom, pero este método puede utilizarse para el desarrollo de complementos.

Es cierto que, para editar rápidamente unos cuantos archivos, se puede utilizar el editor de archivos directamente en Jeedom. Pero pronto resulta tedioso y, además, hay que transferir después todos los cambios al repositorio local o directamente a GitHub. No es lo más práctico del mundo.

### Principio

- Configurar una Raspberry Pi de prueba con Jeedom y un recurso compartido de Samba para poder acceder a ella desde el ordenador.
- Duplicar el repositorio local con **Sublime Merge**.
- Configurar **Sublime Text** para editar el código del repositorio con sincronización en la Raspberry Pi de prueba.

**Sublime Merge** y **Sublime Text** son de pago (a un precio reducido que incluye 3 años de actualizaciones), pero son muy ligeros, rápidos, fácilmente personalizables y muy completos, sin necesidad de utilizar un montón de complementos o paquetes. Además, si no adquieres una licencia, puedes utilizarlos con normalidad; solo aparecerá de vez en cuando una pequeña ventana emergente con un botón de *Cancelar*!

Este método también se puede llevar a cabo con otras herramientas, como **Atom** (que requerirá algunos paquetes) y **GitHub Desktop**.

### Placa de pruebas/desarrollo

Lo primero que hay que hacer si estás desarrollando funciones del Core o un plugin: configurar un entorno de pruebas. ¡Porque no se desarrolla en un entorno de producción!

Para instalar Jeedom, aquí tienes la documentación: [Instalación en Raspberry Pi](/installation/rpi).

¡Ojo, es mejor usar un SSD que una tarjeta SD!

Una vez instalado Jeedom, instala Samba mediante SSH:

`sudo apt-get install samba -y`

Configura una contraseña para www-data (el usuario root de Jeedom):

`sudo smbpasswd www-data` y, a continuación, introduce tu *contraseña*.

Edita la configuración de Samba:

`sudo nano /etc/samba/smb.conf`

Añadir:

````text
wins support = yes

[jeedomRoot]
path = /var/www/html
browsable = yes
writable = yes
force user = www-data
force group = www-data
read only = No
guest ok = Yes
````

Y reinicia Samba:

`sudo /etc/init.d/smbd restart`

En Windows, en un explorador de archivos, introduce la dirección IP de la Pi `\\192.168.x.x`

Haz clic con el botón derecho del ratón en `jeedomRoot` y luego `Connecter un lecteur réseau...`

En Windows, ahora dispones de un disco de red `jeedomRoot` !


### Configuración del almacén local

Para duplicar el repositorio localmente y poder trabajar en él, vamos a recuperar [Sublime Merge portátil](https://www.sublimemerge.com/download).

Ver también [Sublime Text portátil de 64 bits](https://www.sublimetext.com/3).

Descomprime los dos archivos y colócalos en `C:\Program Files`.

Indica a **Sublime Merge** cuál es el editor de archivos:

{% include lightbox.html src="../images/sbm_settings1.jpg" data="settings" title="Editeur de fichiers" imgstyle="width:450px;display: block;margin: 0 auto;" %}

A continuación, clona el repositorio. En este caso, si tienes permisos sobre el repositorio del Core, clónalo; si no, *crea una bifurcación* en tu cuenta de GitHub y clona tu *bifurcación*.

**Archivo / Clonar repositorio...**

{% include lightbox.html src="../images/sbm_clonerepo.jpg" data="settings" title="Clone dépôt" imgstyle="width:450px;display: block;margin: 0 auto;" %}


### Configuración de la edición

En **Sublime Text**, en *Proyecto* / *Editar proyecto*, define el directorio de tu repositorio:

````json
{
  "folders":
  [
    {
      "name": "__GitHub Jeedom Core__",
      "path": "W:\\_GitHub-Repos_\\JeedomCore"
    },
    {
      "name": "___Pi_JeedomAlpha___",
      "path": "\\\\192.168.0.110\\jeedomRoot"
    }
  ]
}
````

En este caso, no es obligatorio añadir la ruta de acceso a la Pi de prueba, pero siempre resulta útil.

Así pues, ahora, en **Sublime Text**, puedes editar directamente los archivos del repositorio local. Los cambios realizados en estos archivos aparecerán en **Sublime Merge**, donde podrás confirmar todo o parte de cada archivo, o deshacer los cambios si no funcionan.

Ahora solo queda probar estos cambios en el código en el Jeedom de prueba.

Para ello, por supuesto, puedes copiar los archivos modificados a tu Pi mediante el recurso compartido de Samba en tu PC. ¡O no! Cuando modificas una decena de archivos en diferentes ubicaciones, ¡pronto se vuelve una tarea tediosa!

¡Vamos a configurar **Sublime Text** para que, cuando guardemos un archivo, lo copie directamente en la Pi!

Ve al directorio `C:\Program Files\SublimeText3\Data\Packages\User` y crea un archivo `onSaveCopy.py`. Edítalo y, tras modificar las rutas correspondientes, guarda el siguiente código:

````py
import sublime, sublime_plugin, os
from shutil import copyfile

gitHub_repoCore = "W:\\_GitHub-Repos_\\JeedomCore"
rpi_root = "\\\\192.168.0.110\\jeedomRoot"

class EventListener( sublime_plugin.EventListener ):
  def on_post_save_async(self, view):
    fullPath = view.file_name()
    path, baseName = os.path.split(fullPath)
    if gitHub_repoCore in path:
      rpi_path = fullPath.replace(gitHub_repoCore, rpi_root)
      copyfile(fullPath, rpi_path)
````

¡Y ya está!

Cada vez que guardes un archivo, si este forma parte del repositorio local, **Sublime Text** también lo copiará en la ubicación correcta de tu Pi. ¡Ctrl-S, F5 en la Pi y listo! Si todo está bien, haz «stage/commit/push» en **Sublime Merge**.

Si deshaces los cambios, seleccionando *Discard* en **Sublime Merge**, recuerda hacer clic con el botón derecho, seleccionar *Open in Editor* y pulsar Ctrl+S para volver a guardarlos en el Pi.

Y, por supuesto, ten cuidado al actualizar la Pi, ya que se sobrescribirán los archivos del Core que hayas modificado.


Por supuesto, puedes seguir el mismo método para configurar el almacenamiento y la sincronización en tus complementos.
