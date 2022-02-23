# Wiederherstellung des Werksmodus eines Jeedom Smart

## Präsentation

Der Jeedom Smart ist mit einer Emmc-Disc ausgestattet, die eine bessere Zuverlässigkeit als eine SD-Karte garantiert. Diese Disc ist jedoch nicht direkt zugänglich.

Der USB-Wiederherstellungsmodus umfasst sowohl das System, das Betriebssystem als auch die Jeedom-Anwendung.

Es erlaubt :

- La reinitialisation de la Jeedom Smart en configuration « usine » OS+Jeedom.
- La reinitialisation de la Jeedom Smart en configuration « usine », en appliquant ensuite sa sauvegarde Jeedom.

Pour rappel la gestion des sauvegardes/restauration est disponible dans Jeedom dans le menu « roues crantées » en haut à droite, puis « Sauvegardes ».

Jeedom bietet einen Service mit automatischem Backup-Abonnement in der privaten Jeedom-Cloud an, sodass Sie sich um nichts kümmern müssen. (Sur le Market, dans votre compte, menu à gauche « Backup Cloud »).

## Betrieb des Wiederherstellungsmodus

Notwendiges Material : einen USB-Stick (mindestens 8 GB)).

>**Notiz**
>
>Denken Sie daran, (lokal) ein Jeedom-Konfigurations-Backup zu erstellen

- Laden Sie das von uns bereitgestellte Archiv herunter : [backupJeedom.tar.gz](https://images.jeedom.com/smart/backupJeedom.tar.gz). Stellen Sie sicher, dass die Datei den Namen backupJeedom.tar hat.gz, um Restaurierungsarbeiten durchzuführen.
- Kopieren Sie dieses Archiv, ohne es zu ändern oder zu entpacken, auf einen leeren USB-Stick, der in FAT32 formatiert ist
- Fahren Sie Ihren Smart ordnungsgemäß mit Jeedom herunter
- dort den Stecker ziehen
- Stecken Sie Ihren USB-Stick ein
- Starten Sie den Smart neu
- Warten Sie ca. 30 Minuten, Box nicht zugänglich **NICHT TRENNEN**
- Finden Sie Ihren Smart im Netzwerk
- Verbinden Sie sich erneut mit dem Login : Administrator und Passwort : admin

> **Wichtig**
>
> Warnung ! Un Recovery Mode remet quoi qu'il arrive votre Smart en configuration « usine » neuve. Wenn Sie ein Backup Ihrer Jeedom-Konfiguration haben, stellen Sie es danach einfach wieder her.

Dieser Wiederherstellungsmodus ist nur mit Jeedom Smart kompatibel.
