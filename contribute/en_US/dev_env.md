<!-- Unused for now -->
## Development environment

Here, we'll look at how to set up an efficient development environment between a test Raspberry Pi and a Windows PC for editing code and maintaining the GitHub repository.

This page covers the Jeedom Core, but this method can also be used for plugin development.

Sure, for quick edits to a few files, you can use the file editor directly in Jeedom. But that quickly becomes tedious, and you then have to push all the changes to the local repository or directly to GitHub. It’s not the most convenient way to do things.

### Principle

- Set up a test Raspberry Pi with Jeedom and a Samba share to access it from the PC.
- Duplicate the repository locally using **Sublime Merge**.
- Set up **Sublime Text** for editing code in the repository and syncing it with the test Raspberry Pi.

**Sublime Merge** and **Sublime Text** do cost money (a small fee that includes 3 years of updates), but they’re very lightweight, fast, easily customizable, and feature-rich without requiring a bunch of plugins or packages. Plus, even if you don’t purchase a license, you can still use them normally—you’ll just see a small pop-up every now and then with a *Cancel* button!

This method is also possible with other tools, such as **Atom** (which will require a few packages) and **GitHub Desktop**.

### Test/Development Board

The first thing to do if you're developing Core features or a plugin: Set up a test environment. After all, you shouldn't develop on a production environment!

For instructions on installing Jeedom, see the documentation here: [Installation on Raspberry Pi](/installation/rpi).

Note: Choose an SSD over an SD card!

Once Jeedom is installed, install Samba via SSH:

`sudo apt-get install samba -y`

Set a password for www-data (the Jeedom root user):

`sudo smbpasswd www-data` then enter your *password*.

Edit the Samba configuration:

`sudo nano /etc/samba/smb.conf`

Add:

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

And restart Samba:

`sudo /etc/init.d/smbd restart`

In Windows, in a file explorer, enter the Pi's IP address `\\192.168.x.x`

Right-click on `jeedomRoot` then `Connecter un lecteur réseau...`

In Windows, you now have a Network Drive `jeedomRoot` !


### Setting up the local repository

To clone the repository locally so we can work on it, we'll fetch [Sublime Merge for Mac](https://www.sublimemerge.com/download).

Also retrieve [Sublime Text Portable 64-bit](https://www.sublimetext.com/3).

Unzip the two archives and place them in `C:\Program Files`.

Specify the file editor for **Sublime Merge**:

{% include lightbox.html src="../images/sbm_settings1.jpg" data="settings" title="Editeur de fichiers" imgstyle="width:450px;display: block;margin: 0 auto;" %}

Then clone the repository. Here, if you have access to the Core repository, clone it; otherwise, *fork* it on your GitHub account and clone your *fork*.

**File / Clone Repository...**

{% include lightbox.html src="../images/sbm_clonerepo.jpg" data="settings" title="Clone dépôt" imgstyle="width:450px;display: block;margin: 0 auto;" %}


### Setting Up the Edition

In **Sublime Text**, go to *Project* / *Edit Project* and set the directory for your repository:

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

Here, adding the path to the test Pi isn't required, but it's always handy.

So now, in **Sublime Text**, you can edit files in the local repository directly. Changes to these files will appear in **Sublime Merge**, where you can commit all or part of each file or discard the changes if they don't work.

Now, all that's left is to test these code changes on the test Jeedom.

To do this, you can, of course, copy the modified files to your Pi using Samba sharing on your PC. Or not! When you’re modifying a dozen files in different locations, it quickly becomes a hassle!

So we're going to configure **Sublime Text** so that when we save a file, it automatically syncs it to the Pi!

Go to the directory `C:\Program Files\SublimeText3\Data\Packages\User` and create a file `onSaveCopy.py`. Edit the file, and after updating the paths, save the following code:

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

There you go!

Every time you save a file, if it’s part of the local repository, **Sublime Text** will also copy it to the right location on your Pi. Press Ctrl-S, then F5 on the Pi, and you’re done! If everything looks good, stage, commit, and push in **Sublime Merge**.

If you discard changes by clicking *Discard* in **Sublime Merge**, remember to right-click, select *Open in Editor*, and press Ctrl+S to save it back to the Pi.

And of course, be careful when you update the Pi—you'll overwrite any Core files you've modified.


You can, of course, follow the same method to set up your repositories and synchronization for your plugins.
