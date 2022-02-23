# Docker Management plugin

## Description

This plugin allows you to install and manage docker directly from Jeedom

>**IMPORTANT**
>
>This plugin is not intended to replace a dedicated Portainer type software, it is just there to launch basic commands and manage (in a basic way) Docker

>**IMPORTANT**
>
>Due to the pre-requisites to install Docker, it is not compatible with all hardware (including the Smart). For it to work, you absolutely need an x86-64, rpi (3 or 4) platform or an Atlas box

## Configuration

Once the dependencies have been installed, you must activate "Docker 1" locally (for the moment it is possible that we add the connection on a remote docker). You can also configure the cron for the update frequency, we advise you to put "*/ 5 * * * *"

## Equipement

If you already have Dockers on Jeedom you can click on the synchronize button which retrieves the existing dockers and create the Jeedom equipment that corresponds.

You can also create a new docker from Jeedom, for that you simply need to create Jeedom equipment.

### General settings

- Equipment name : Name of your equipment in Jeedom
- Parent object : Parent object of the equipment
- Category : equipment category
- Activate : activate or not the equipment
- Visible : makes the equipment visible on the dashboard
- Docker host : docker who runs the equipment (only the local is available for the moment)
- Container name : container name in docker. It is very important that it is the same as that of the docker compose or docker run if you go through the creation through Jeedom. Otherwise the one if will not be able to attach your equipment to the docker it creates
- Save the mounts : tells Jeedom if he should save the mounted docker files. Be careful not to activate it on all dockers, especially if their size is large
- Creation mode : creation mode this can be either manual, or "Jeedom Docker run" (creation using a docker run command made by Jeedom), "Jeedom docker composer" (creation using a docker composer made by Jeedom)
- Creation order : only appears if you are in "Jeedom Docker run", the command to give is all that is after "docker run"
- Docker composes : only appears if you are in "Jeedom Docker composer", you must put your Docker composed here

### Action

- Save the docker : launch a Docker backup, be careful Jeedom only keeps the last backup (a backup is made automatically at the same time as the Jeedom backup)
- Restore docker : allows you to restore the last Docker backup
- Download backup : allows you to download the last Docker backup
- Send backup : allows you to return a Docker backup (recover from a Jeedom backup in plugins / dockers / data / backup for example)
- Docker logs : display Docker logs

### Informations

Displays various information about your docker : 

- ID
- Commande
- Creation date
- Taille
- Ports mapped to the host
- Networks
- Montage
- Image

## Commande

Here you have the following commands : 

- To start up
- Arreter
- To restart
- Recreer (only available if the creation was made by Jeedom)
- Supprimer
- CPU : Docker CPU usage
- Memory : Docker memory usage
- IO in : incoming disk usage
- IO out : outgoing disk use
- Networks in : incoming network use
- Networks out : outgoing network use
- Status : docker state


## Assistant

You also have the possibility, following the creation of a device, to call an assistant (top right) which contains some type of Docker (the list will grow over time) and will ask you only a few questions to put in route your Docker

## Code

On the main page of the plugin you also have a code button that will take you directly to a Jeedom directory, this is where we advise you to put the configuration files of your Dockers (if necessary).