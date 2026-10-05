# Jeeasy plugin

Jeeasy is the official Jeedom setup wizard. It guides you step by step through the process of getting your system up and running: language selection, main settings, plugin installation, and creating your first rooms.

>**IMPORTANT**
>
>A Market account is required to install and use the setup wizard.

## Launch the wizard

When you first connect to a new installation, Jeedom prompts you to start with the setup wizard. If you haven't entered your Market credentials yet, you'll be asked to do so before the wizard begins.

<!-- Capture : fenêtre de première utilisation (choix assistant / sauvegarde) -->

The assistant can also be restarted at any time:

- from the **Setup Wizard** button in the **About** window, which you can access by clicking on the Jeedom version in the user menu in the upper-right corner,
- from the plugin page, via **Plugins → Scheduling → Jeeasy**, by clicking **Configuration Wizard**.

## Navigating the wizard

The wizard appears in full-screen mode as a series of steps. The arrows at the bottom of the screen let you move to the next step or return to the previous one, and the numbered buttons let you go directly to a specific step.

<!-- Capture : assistant en plein écran avec les pastilles de navigation -->

The **Close Wizard** button at the top of the screen allows you to exit the wizard at any time. If you do so, certain configurations will not be completed, and the suggested plugins will not be installed.

## Steps in the wizard

### Home

Select the language and country for your installation.

### General Settings

Change the name of your system and its time zone.

### Interface

Choose the interface theme and decide whether to enable icon coloring.

### Networks

Check the access addresses for your system:

- **Local**: the access address from your local network, managed automatically by default,
- **External**: The address used to access the system from outside the network. If your service pack includes remote access, you can enable it directly from this step.

### Plugins

Depending on your service pack, the wizard will offer you a selection of plugins. On an **Atlas**, **Luna**, or **Freebox Delta** box, the plugin specific to your box will appear at the top of the list. Click on the ones you want to install; they will be installed and activated after you confirm as you proceed to the next step, with automatic management of their dependencies and daemons.

<!-- Capture : étape Plugins avec quelques plugins sélectionnés -->

### Objects

Choose the main object that best matches your setup (an apartment, a house, or a building), then select the rooms to create. You can also choose not to define a main object.

<!-- Capture : étape Objets, choix des pièces -->

### Services

Discover the Jeedom services that complement your system: cloud backup, remote access, voice assistants, monitoring, text messages, and calls.

### Ready to get started

Your installation is set up. The selected plugins may continue to install in the background for a few minutes—up to 30 minutes, depending on the number of plugins—and you can start using Jeedom in the meantime. Click the checkmark in the lower-right corner to exit the wizard.

## Plugin page

The plugin page, accessible via **Plugins → Programming → Jeeasy**, also offers other tools:

- **Detect My Devices**: scans your local network for devices and suggests compatible plugins to control them,
- **Set Up My Home**: Create a new room or edit an existing room,
- **Add a device**: guides you through adding a module based on its technology,
- **Set Up a Device**: Guides you through setting up an existing device based on its type.

<!-- Capture : page du plugin (remplace menuJeeasy.png) -->

![Device detection](../images/networkdiscover.png)
