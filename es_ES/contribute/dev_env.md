## Entorno de desarrollo

Veremos aquí cómo configurar un entorno de desarrollo eficiente entre un Pi de prueba y una PC con Windows para editar el código y mantener el repositorio de GitHub.

Esta página se refiere a Jeedom Core, pero este método se puede utilizar para el desarrollo de complementos.

Ciertamente, para ediciones rápidas de algunos archivos, podemos usar el complemento **JeeXplorer** directamente en Jeedom. Pero es rápidamente tedioso, y luego debe informar todos los cambios al repositorio local o directamente a GitHub. Este no es el mas practico.

### Principe

- Configure un Pi de prueba con Jeedom y un recurso compartido de Samba para acceder a él desde la PC.
- Duplique el repositorio localmente con **Fusión sublime**.
- Poner en marcha **Texto sublime** para editar código desde el repositorio con sincronización en el Pi de prueba.

**Fusión sublime** y **Texto sublime** ciertamente se pagan (un precio bajo con 3 años de actualización), pero son muy livianos, rápidos, fácilmente personalizables y muy completos sin requerir muchos complementos / paquetes. Además, si no obtiene una licencia, puede usarlas normalmente, solo aparecerá una pequeña ventana emergente de vez en cuando con un botón *Cancelar* !

Este método también es posible con otras herramientas, como **Átomo** (que requerirá algunos paquetes) y **Escritorio de GitHub**.

### Prueba / desarrollo de pi

Lo primero que debe hacer si está desarrollando funciones básicas o un complemento : Establecer una configuración de prueba. De hecho, no desarrollamos en una configuración de producción !

Para la instalación de Jeedom, la documentación está ahí : [Instalación en Raspberry Pi](https:/ // /doc.jeedom.com/es_ES/installation/ /rpi).

Advertencia, prefiera un SSD a una tarjeta SD !

Una vez que Jeedom esté instalado, instale Samba, en SSH :

`sudo apt-get install samba -y`

Configure una contraseña para www-data (la raíz de Jeedom) :

`sudo smbpasswd www-data` luego ingrese su *Contraseña*.

Edita la configuración de samba :

`sudo nano / etc / samba / smb.conf`

Agregar :

`` ''
gana apoyo = sí

[jeedomRoot]
ruta = / var / www / html
navegable = sí
escribible = sí
forzar usuario = www-data
grupo de fuerza = www-data
solo lectura = No
invitado ok = Sí
`` ''

Y reinicia la samba:

`sudo / etc / init.reiniciar d / smbd`

En Windows, en un explorador de archivos, ingrese la dirección IP del Pi `\\ 192.168.xx`

Haga clic derecho en `jeedomRoot` y luego` Conecte una unidad de red ...`

En Windows, ahora tiene un disco de red `jeedomRoot` !


### Configurando el repositorio local

Para duplicar el repositorio localmente y poder trabajar en él, recuperaremos [Sublime Merge portátil](https:/ // /www.sublimemerge.com/ /download).

También recuperar [Sublime Text portátil de 64 bits](https:/ // /www.sublimetext.com/ /3).

Descomprima los dos archivos y colóquelos en `C:\ Archivos de programa`.

Indicar a **Fusión sublime** editor de archivos :

![Editeur](images/ /sbm_settings1.jpg){:height="432px" width="867px"}

Luego clona el repositorio. Aquí, si tiene derechos sobre el repositorio Core, clónelo, de lo contrario *tenedor* en tu cuenta de GitHub y clona tu *tenedor*.

**Repositorio de archivos / clones ...**

![Clone Repository](images/ /sbm_clonerepo.jpg){:height="364px" width="697px"}


### Configurar la edición

DENTRO DE **Texto sublime**, *Proyecto* / / *Editar proyecto*, define el directorio de tu repositorio :

`` ''json
{
  "folders":
  [
    {
      "name": "__GitHub Jeedom Core__",
      "path": "W:\\_ GitHub-Repos _ \\ JeedomCore"
    },
    {
      "name": "___Pi_JeedomAlpha___",
      "path": "\\\\ 192.168.0.110 \\ jeedomRoot"
    }
  ]
}
`` ''

Aquí, agregar la ruta de la prueba Pi no es obligatorio, pero sigue siendo práctico.

Entonces puedes ahora, en **Texto sublime**, editar directamente los archivos del repositorio local. Los cambios en estos archivos aparecerán en **Fusión sublime**, donde puede confirmar todo o parte de cada archivo, o revertir los cambios si eso no funciona.

Ahora, queda probar estos cambios de código en la prueba Jeedom.

Para eso, por supuesto, puede copiar los archivos modificados a su Pi usando el recurso compartido de samba en su PC. O no ! Cuando edita diez archivos en diferentes lugares, rápidamente se volverá doloroso !

Por lo tanto configuraremos **Texto sublime** para que, cuando guarde un archivo, lo copie directamente al Pi !

Vaya al directorio `C:\ Archivos de programa \ SublimeText3 \ Data \ Packages \ User` y cree un archivo `onSaveCopy.py`. Edítelo y, después de modificar las rutas correctas, guarde el siguiente código:

`` ''py
importar sublime, sublime_plugin, hueso
desde shutil import copyfile

gitHub_repoCore = "W:\\_ GitHub-Repos _ \\ JeedomCore"
rpi_root = "\\\\ 192.168.0.110 \\ jeedomRoot"

clase EventListener (sublime_plugin.EventListener ):
  def on_post_save_async (self, view):
    fullPath = view.file_name()
    ruta, baseName = os.path.split (ruta completa)
    si gitHub_repoCore en la ruta:
      rpi_path = fullPath.reemplazar (gitHub_repoCore, rpi_root)
      copyfile (ruta completa, ruta_rpi)
`` ''

Y ahí tienes !

Siempre que guarde un archivo, si es parte del repositorio local, **Texto sublime** también lo copiará en el lugar correcto en su Pi. Ctrl-S, F5 en el Pi y eso es todo ! Si todo está bien, prepara / compromete / empuja **Fusión sublime**.

Si revierte algún cambio, realice una *Descarte* DENTRO DE **Fusión sublime**, recuerde hacer clic derecho, *Abrir en Editor*, y Ctrl-S para volver a ponerlo en el Pi.

Y, por supuesto, tenga cuidado cuando actualice la Pi, sobrescribirá los archivos Core que ha modificado.


Por supuesto, puede seguir el mismo método para configurar su repositorio y la sincronización en sus complementos.