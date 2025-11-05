# Command-line installation

The following procedure is for advanced users; it allows you to install Jeedom on a Debian Linux server system.

>**INFORMATION**
>
>If you have any questions about installing Debian, the Jeedom team also offers system images that include Debian and Jeedom pre-installed. See [link/reference] [**the dedicated documentation**](../compatibility/#Images%20système%20officielles) for more details.

## Debian version

Jeedom is a Linux software designed to work optimally on [a Debian server system](https://www.debian.org/){:target="_blank"}.

Remember to check that [**Your version of Debian is supported by Jeedom**](../compatibility/#Debian) before proceeding with the installation.

## Manual installation

>**IMPORTANT**
>
>Each Jeedom instance is supposed to run on a dedicated server. Based on this fact, it is possible to observe side effects with any services hosted in parallel. Similarly, Debian desktop systems are not covered by official support.

### Execution

To install Jeedom, you need to connect to the system console using the method best suited to your situation *(SSH, keyboard/screen, virtual screen)*.

Once logged into the system with a user account that has `sudo` administrative privileges, simply enter these 3 commands :

1. Download the installation script :
    ```sh
    wget https://raw.githubusercontent.com/jeedom/core/master/install/install.sh
    ```

2. Grant enforcement rights :
    ```sh
    chmod +x install.sh
    ```

3. Run the script :
    ```sh
    sudo ./install.sh
    ```
	>**INFORMATION**
	>
	>If logged in as `root`, you need to run the `./install` script.sh` without the `sudo` command beforehand.

### Options

>**IMPORTANT**
>
>This section is reserved for users with a certain level of expertise.

The Jeedom installation script has various options allowing customization of each instance :

- **Database** (`-d`) : installs or not the database managed by Jeedom *(`1` by default)*
- **Installation type** (`-i`) : Defines the type of installation *(`standard` by default)*
- **Stage** (`-s`) : executes a specific step *(`0` by default)*
- **Version** (`-v`) : selects a Jeedom development branch *(`master` by default)*
- **Installation file** (`-w`) : directory where to install Jeedom *(`/var/www/html` by default)*

## Hardware compatibility

 [the documentation **Compatibility**](../compatibility/#Matériels%20supportés)

## First connection

Consult the documentation relating to the [**first connection**](../premiers-pas/#Première%20connexion) to access the Jeedom interface after installation.
