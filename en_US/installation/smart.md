# Restore to factory mode of a Jeedom Smart

## Presentation

The Jeedom Smart is equipped with an Emmc disk, guaranteeing better reliability than an SD card, but this disk is not directly accessible.

USB Recovery Mode includes both the system, the OS, and also the Jeedom application.

It allows :

- La reinitialisation de la Jeedom Smart en configuration « usine » OS+Jeedom.
- La reinitialisation de la Jeedom Smart en configuration « usine », en appliquant ensuite sa sauvegarde Jeedom.

Pour rappel la gestion des sauvegardes/restauration est disponible dans Jeedom dans le menu « roues crantées » en haut à droite, puis « Sauvegardes ».

Jeedom offers a service with automatic backup subscription on Jeedom private cloud, so you don't have to worry about anything. (Sur le Market, dans votre compte, menu à gauche « Backup Cloud »).

## Operation of recovery mode

Necessary material : a USB key (minimum 8 GB).

>**Note**
>
>Remember to set aside (locally) a Jeedom configuration backup

- download the archive we provide : [backupJeedom.tar.gz](https://images.jeedom.com/smart/backupJeedom.tar.gz). Be careful to check that the file has the name backupJeedom.tar.gz for restore to work.
- copy this archive without modifying it or unzipping it, on a USB key formatted in FAT32 and blank
- shut down your Smart properly by Jeedom
- unplug it
- insert your USB drive
- restart the Smart
- wait about 30min, box not accessible **DO NOT DISCONNECT**
- search for your Smart on the network
- reconnect with login : admin and password : admin

> **Important**
>
> Attention ! Un Recovery Mode remet quoi qu'il arrive votre Smart en configuration « usine » neuve. If you have a backup of your Jeedom configuration, just restore it afterward.

This Recovery Mode is only compatible with the Jeedom Smart.
