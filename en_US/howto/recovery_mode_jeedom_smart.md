Presentation
============

The Jeedom Smart is equipped with an Emmc disc, guaranteeing better reliability than an SD card, but this disc is not directly accessible.

USB Recovery Mode includes both the system, the OS, and also the Jeedom application.

It allows :

- La reinitialisation de la Jeedom Smart en configuration « usine » OS+Jeedom.

- La reinitialisation de la Jeedom Smart en configuration « usine », en appliquant ensuite sa sauvegarde Jeedom.

Pour rappel la gestion des sauvegardes/restauration est disponible dans Jeedom dans le menu « roues crantées » en haut à droite, puis « Sauvegardes ».

Jeedom offers a service with automatic backup subscription on private cloud Jeedom, so you don't have to worry about anything. (Sur le Market, dans votre compte, menu à gauche « Backup Cloud »).




How recovery mode works
===============================

Necessary material : a USB key (minimum 8GB).

NB remember to put aside (locally) a Jeedom configuration backup




1- download the archive we provide  : [backupJeedom.tar.gz](https://images.jeedom.com/smart/backupJeedom.tar.gz). Be careful to verify that the file has the name backupJeedom.tar.gz to make restoration work.

2- copy this archive without modifying or unzipping it, on a blank USB key formatted in FAT32

3- shut down your Smart properly by Jeedom

4- unplug it

5- insert your USB key

6- restart the Smart

7- wait about 30min, box not accessible **DO NOT DISCONNECT**

8- find your Smart on the network

9- reconnect with the login : admin and password : admin

> **Important**
>
>
> Be careful ! Un Recovery Mode remet quoi qu'il arrive votre Smart en configuration « usine » neuve. If you have a backup of your Jeedom configuration, you only need to restore it afterwards.
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

This Recovery Mode is only compatible with Jeedom Smart.
