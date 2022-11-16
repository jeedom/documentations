# Docker Management plugin

# Description

This plugin allows to install and manage and create Docker containers directly from Jeedom.

>**IMPORTANT**
>
>This plugin is not intended to replace dedicated software such as Portainer, it is just made to execute simple commands and manage Docker while remaining basic.

# Configuration

Once the dependencies are installed, you must activate "Docker 1" locally (for the moment it is possible to add the connection to a remote docker). You can also configure the cron for the update frequency, we advise you to put ``*/5 * * * *``.

# Equipements

If you already have Dockers on Jeedom, you can click on the "Synchronize" button to retrieve the existing dockers and create the corresponding Jeedom equipment.

You can also, from Jeedom, create new Dockers. To do this, simply create Jeedom equipment.

## General settings

- **Equipment name** : Name of your equipment in Jeedom
- **Parent object** : Parent object of the equipment
- **Category** : equipment category
- **Activate** : activate or not the equipment
- **Visible** : makes the equipment visible on the dashboard
- **Docker host** : docker that runs the equipment *(only the room is available at the moment)*
- **Container name** : if you go through the creation via Jeedom, it is important that the container name is the same as the one mentioned in ``docker compose`` Where ``docker run`` otherwise the Docker container cannot be attached to the Jeedom equipment.
- **Save the mounts** : tells Jeedom if it should save the mounted folders of the Docker container. Be careful not to activate the option on all Dockers, especially if the size of these is large.
- **Creation mode** : can be either ``Manuel``, is ``Jeedom Docker run`` *(creation using a docker run command made by Jeedom)*, is ``Jeedom docker composer`` *(creation using a docker composer made by Jeedom)*.
- **Creation order** : only appears if you are in mode ``Jeedom Docker run``. The command to fill in concerns everything after ``docker run``.
- **Docker composes** : only appears if you are in mode ``Jeedom Docker composesr``. you must indicate here the content of your ``Docker composes``.

## Action

- **Save the docker** : run a backup of Docker. Attention Jeedom only keeps the last backup *(a backup is performed automatically at the same time as the Jeedom backup)*
- **Restore docker** : allows you to restore the last Docker backup
- **Download backup** : allows you to download the last Docker backup
- **Send backup** : allows you to send a backup of Docker * (recovered from a Jeedom backup in ``plugins/dockers/data/backup`` for example)*
- **Docker logs** : show Docker logs

## Informations

Displays various information about the Docker container :

- ID
- Commande
- Creation date
- Taille
- Host Mapped Ports
- Networks
- Montage
- Image

## Commandes

Here you have access to the following commands :

- **To start up**
- **Stop**
- **To restart**
- **Recreate** *(only if the creation was made by Jeedom)*
- **To delete**
- **CPU** : CPU load
- **Memory** : memory load
- **IO in** : disk write
- **IO out** : disc reading
- **Networks in** : network usage in incoming connection
- **Networks out** : outbound network usage
- **Status** : docker state


# Assistant

You have the possibility, following the creation of a piece of equipment, to call a **Assistant** *(top right button)* which will allow you, through a few questions, to generate a specific Docker container. The list will expand over time but are already available for the creation of the following containers :

- **AdGuard Home**
- **Nodered**
- **Vaultwarden**
- **Wire guard** *(wg-easy)*

# Code

On the general page of the plugin grouping all Docker equipment, the button **Coded** takes you directly to a Jeedom directory intended to receive the configuration files of your Dockers if necessary.
