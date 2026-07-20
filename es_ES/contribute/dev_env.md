## Entorno de desarrollo

Aquí veremos cómo configurar un entorno de desarrollo eficiente entre una Pi de prueba y una PC con Windows para editar código y mantener el repositorio de GitHub.

Esta página se refiere a Jeedom Core, pero este método se puede utilizar para el desarrollo de complementos.

Por supuesto, para ediciones rápidas de algunos archivos, puede usar el editor de archivos directamente en Jeedom. Pero rápidamente se vuelve tedioso y luego tienes que informar todas las modificaciones al repositorio local o directamente a GitHub. Este no es el mas practico.

### Principe

- Configure un Pi de prueba con Jeedom y un recurso compartido de Samba para acceder a él desde la PC.
- Duplicar el repositorio localmente con **Fusión sublime**.
- Poner en marcha **Texto sublime** para editar código desde el repositorio con sincronización en la prueba Pi.

**Fusión sublime** y **Texto sublime** Ciertamente son de pago (un precio bajo con 3 años de actualización), pero son muy ligeros, rápidos, fácilmente personalizables y muy completos sin necesidad de muchos complementos/paquetes. Además, si no obtiene una licencia, puede usarlas normalmente, solo aparecerá una pequeña ventana emergente de vez en cuando con un botón *Cancelar* !

Este método también es posible con otras herramientas, como **Átomo** (que requerirá algunos paquetes) y **Escritorio de GitHub**.

### Prueba / desarrollo de pi

Lo primero que debe hacer si está desarrollando funciones básicas o un complemento : Establecer una configuración de prueba. De hecho, no desarrollamos en una configuración de producción !

Para la instalación de Jeedom, la documentación está ahí : [Instalación en Raspberry Pi](https://doc.jeedom.com/es_ES/installation/rpi).

Advertencia, prefiera un SSD a una tarjeta SD !

Una vez que Jeedom esté instalado, instale Samba, en SSH :

`sudo apt-get install samba -y`

Configure una contraseña para www-data (la raíz de Jeedom) :

`sudo smbpasswd www-data` luego ingrese su *Contraseña*.

Edita la configuración de samba :

`sudo nano / etc / samba / smb.conf`

Agregar :

````text
gana apoyo = sí

[jeedomRoot]
ruta = / var / www / html
navegable = sí
escribible = sí
forzar usuario = www-data
grupo de fuerza = www-data
solo lectura = No
invitado ok = Sí
````

Et redémarrez samba:

`sudo /etc/init.d/smbd restart`

Sous Windows, dans un explorateur de fichier, entrez l'adresse IP du Pi `\\192.168.x.x`

Faites un clic droit sur `jeedomRoot` puis `Connecter un lecteur réseau...`

Sous Windows, vous avez donc maintenant un Disque Réseau `jeedomRoot` !


### Mise en place du dépôt local

Pour dupliquer le dépôt en local y pouvoir travailler dessus, nous allons récupérer [Fusión sublime portable](https://www.sublimemerge.com/download).

Récupérer également [Texto sublime portable 64bit](https://www.sublimetext.com/3).

Décompressez les deux archives y placez les dans `C:\Program Files`.

Indiquez à **Fusión sublime** l'éditeur de fichiers :

{% include lightbox.html src="images/sbm_settings1.jpg" data="settings" title="Editeur de fichiers" imgstyle="width:450px;display: block;margin: 0 auto;" %}

Puis clonez le dépôt. Ici, si vous avez les droits sur le dépôt du Core, clonez le, sinon *forkez* le sur votre compte GitHub y clonez votre *fork*.

**File / Clone dépôt...**

{% include lightbox.html src="images/sbm_clonerepo.jpg" data="settings" title="Clone dépôt" imgstyle="width:450px;display: block;margin: 0 auto;" %}


### Mise en place de l'édition

Dans **Texto sublime**, *Project* / *Edit Project*, définissez le répertoire de votre dépôt :

````json
{
  "folders":
  [
    {
      "name": "__GitHub Jeedom Core__",
      "path": "W:\\_ GitHub-Repos _ \\ JeedomCore"
    },
    {
      "name": "___Pi_JeedomAlpha___",
      "path": "\\\\192.168.0.110\\jeedomRoot"
    }
  ]
}
````

Aquí añadir la ruta del Pi de prueba no es obligatorio, pero siempre es práctico.

Entonces puedes ahora, en **Texto sublime**, editar archivos directamente desde el repositorio local. Los cambios en estos archivos aparecerán en **Fusión sublime**, donde puede realizar confirmaciones de todo o parte de cada archivo o revertir los cambios si no funcionan.

Ahora, queda probar estos cambios de código en la prueba Jeedom.

Para eso, por supuesto, puede copiar los archivos modificados a su Pi usando el recurso compartido de samba en su PC. O no ! Cuando edita diez archivos en diferentes lugares, rápidamente se volverá doloroso !

Por lo tanto configuraremos **Texto sublime** para que, cuando guarde un archivo, lo copie directamente al Pi !

Vaya al directorio `C:\ Archivos de programa \ SublimeText3 \ Data \ Packages \ User` y cree un archivo `onSaveCopy.py`. Edítelo y, después de modificar las rutas correctas, guarde el siguiente código:

````py
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
````

Et voilà !

A chaque fois que vous sauvez un fichier, si celui-ci fait partie du dépôt local, **Texto sublime** va également le copier au bon endroit sur votre Pi. Ctrl-S, F5 sur le Pi y voilà ! Si tout est bon, stage/commit/push dans **Fusión sublime**.

Si vous annulez des modifications, en faisant un *Discard* dans **Fusión sublime**, pensez à faire un clic-droit, *Open in Editor*, y Ctrl-S pour le remettre sur le Pi.

Et bien sûr, attention quand vous mettez à jour le Pi, vous allez écraser les fichiers du Core que vous avez modifié.


Vous pouvez bien sûr suivre la même méthode pour mettre en place vos dépôt y synchronisation sur vos plugins.