# Command-line installation

The following procedure is intended for advanced users and explains how to install Jeedom on a Debian Linux server.

>**INFORMATION**
>
>If you have questions about installing Debian, the Jeedom team also offers system images that include Debian with Jeedom preinstalled. See [**Related documentation**](/compatibility/#Images%20système%20officielles) for more details.

## Debian version

Jeedom is Linux software designed to run optimally on [a Debian server system](https://www.debian.org/){:target="_blank"}.

Be sure to check that [**Your version of Debian is supported by Jeedom**](/compatibility/#Debian) before proceeding with the installation.

## Manual installation

>**IMPORTANT**
>
>Each Jeedom instance is intended to run on a dedicated server. Given this, there may be unintended consequences when other services are hosted on the same server. Similarly, Debian desktop systems are not covered by official support.

### Execution

To install Jeedom, you must log in to the system console using the method that best suits your situation *(SSH, keyboard/monitor, virtual terminal)*.

Once logged in to the system with a user account that has administrative privileges `sudo`, just enter these 3 commands:

1. Download the installation script:
    ```sh
    wget https://raw.githubusercontent.com/jeedom/core/master/install/install.sh
    ```

2. Grant execution permissions:
    ```sh
    chmod +x install.sh
    ```

3. Run the script:
    ```sh
    sudo ./install.sh
    ```
>**INFORMATION**
>
>If logged in as `root`, you need to run the script `./install.sh` without the command `sudo` first.

### Options

>**IMPORTANT**
>
>This section is intended for users with some expertise.

The Jeedom installation script offers various options for customizing each instance:

- **Database** (`-d`): Enables or disables the database managed by Jeedom *(`1` (by default)*
- **Type of installation** (`-i`): Defines the type of installation *(`standard` (by default)*
- **Step** (`-s`): executes a specific step *(`0` (by default)*
- **Version** (`-v`): selects a Jeedom development branch *(`master` (by default)*
- **Installation Guide** (`-w`): directory where to install Jeedom *(`/var/www/html` (by default)*

## Hardware Compatibility

A non-exhaustive list of devices supported by Jeedom can be found at [**Compatibility** documentation](/compatibility/#Matériels%20supportés)

## First connection

View the documentation related to [**First login**](/premiers-pas/#Première%20connexion) to access the Jeedom interface after installation.
