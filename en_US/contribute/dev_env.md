## Development environment

We will see here how to set up an efficient development environment between a test Pi and a Windows PC for editing the code and maintaining the GitHub repository.

This page concerns the Jeedom Core but this method can be used for plugin development.

Certainly, for quick edits of a few files, we can use the plugin **JeeXplorer** directly on Jeedom. But it is quickly tedious, and you then have to report all the changes to the local repository or directly to GitHub. This is not the most practical.

### Principe

- Set up a test Pi with Jeedom and a Samba share to access it from the PC.
- Duplicate the repository locally with **Sublime Merge**.
- Implement **Sublime Text** for editing code from the repository with synchronization on the test Pi.

**Sublime Merge** and **Sublime Text** are certainly paid (a low price with 3 years of update), but are very light, fast, easily customizable and very complete without requiring lots of plugins / packages. Also if you don't take a license you can use them normally, you will just get a little popup every now and then with a button *Cancel* !

This method is also possible with other tools, such as **Atom** (which will require some packages) and **GitHub Desktop**.

### Pi test / development

The first thing to do if you are developing Core functions or a plugin : Set up a test configuration. Indeed, we do not develop on a production configuration !

For the installation of Jeedom, the documentation is there : [Installation on Raspberry Pi](https://doc.jeedom.com/en_US/installation/rpi).

Warning, prefer an SSD to an SD card !

Once Jeedom is installed, install Samba, in SSH :

`sudo apt-get install samba -y`

Configure a password for www-data (the root of Jeedom) :

`sudo smbpasswd www-data` then enter your *Password*.

Edit the samba configuration :

`sudo nano / etc / samba / smb.conf`

Add :

`` ''
wins support = yes

[jeedomRoot]
path = / var / www / html
browsable = yes
writable = yes
force user = www-data
force group = www-data
read only = No
guest ok = Yes
`` ''

And restart samba:

`sudo / etc / init.d / smbd restart`

Under Windows, in a file explorer, enter the IP address of the Pi `\\ 192.168.xx`

Right click on `jeedomRoot` then` Connect a network drive ... `

Under Windows, you now have a `jeedomRoot` Network Disk !


### Setting up the local repository

To duplicate the repository locally and be able to work on it, we will recover [Sublime Merge portable](https://www.sublimemerge.com/download).

Also recover [Sublime Text portable 64bit](https://www.sublimetext.com/3).

Unzip the two archives and place them in `C:\ Program Files`.

Indicate to **Sublime Merge** file editor :


{% include lightbox.html src="images/sbm_settings1.jpg" data="settings" title="Editeur de fichiers" imgstyle="width:450px;display: block;margin: 0 auto;" %}

Then clone the repository. Here, if you have rights to the Core repository, clone it, otherwise *fork* it on your GitHub account and clone your *fork*.

**File / Clone Repository ...**

![Clone Repository](images/sbm_clonerepo.jpg){:height="364px" width="697px"}


### Setting up the edition

IN **Sublime Text**, *Project* / *Edit Project*, define the directory of your repository :

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

Here, adding the path of the test Pi is not mandatory, but it is still practical.

So you can now, in **Sublime Text**, directly edit the files of the local repository. Changes to these files will appear in **Sublime Merge**, where you can commit all or part of each file, or roll back the changes if that doesn't work.

Now, it remains to test these code changes on the test Jeedom.

For that, you can of course copy the modified files to your Pi using the samba share on your PC. Or not ! When you edit ten files in different places, it will quickly become painful !

We will therefore configure **Sublime Text** so that, when you save a file, it will copy it directly to the Pi !

Go to the directory `C:\ Program Files \ SublimeText3 \ Data \ Packages \ User` and create an `onSaveCopy.py` file. Edit it and, after modifying the correct paths, save the following code:

`` ''py
import sublime, sublime_plugin, bone
from shutil import copyfile

gitHub_repoCore = "W:\\_ GitHub-Repos _ \\ JeedomCore"
rpi_root = "\\\\ 192.168.0.110 \\ jeedomRoot"

class EventListener (sublime_plugin.EventListener ):
  def on_post_save_async (self, view):
    fullPath = view.file_name()
    path, baseName = os.path.split (fullPath)
    if gitHub_repoCore in path:
      rpi_path = fullPath.replace (gitHub_repoCore, rpi_root)
      copyfile (fullPath, rpi_path)
`` ''

And There you go !

Whenever you save a file, if it is part of the local repository, **Sublime Text** will also copy it to the right place on your Pi. Ctrl-S, F5 on the Pi and that's it ! If all is well, stage / commit / push in **Sublime Merge**.

If you revert any changes, making a *Discard* IN **Sublime Merge**, remember to right-click, *Open in Editor*, and Ctrl-S to put it back on the Pi.

And of course, be careful when you update the Pi, you will overwrite the Core files that you have modified.


You can of course follow the same method to set up your repository and synchronization on your plugins.