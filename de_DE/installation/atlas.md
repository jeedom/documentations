# Wiederherstellung im Werksmodus eines Jeedom-Atlas

## Jeedom-Backup

Erstens, **Es ist wichtig, ein Backup von Jeedom zu erstellen** die am Ende des Verfahrens wiederhergestellt werden kann.

1. Gehen Sie zur Jeedom-Benutzeroberfläche und klicken Sie dann auf das Menü **Einstellungen > System > Backups**.

2. Klicken Sie auf die Schaltfläche **Starten Sie ein Backup**.

3. Wenn die Sicherung abgeschlossen ist, klicken Sie auf **Backup herunterladen**.

4. Sobald das Jeedom-Backup heruntergeladen wurde, schalten Sie das System über das Menü aus **Einstellungen > System > Ausschalten**.

## Präsentation

Der Jeedom Atlas ist mit einer Emmc-Festplatte ausgestattet, die eine bessere Zuverlässigkeit als eine SD-Karte garantiert, aber auf diese Festplatte kann nicht direkt zugegriffen werden.

Der USB-Wiederherstellungsmodus umfasst sowohl das System, das Betriebssystem als auch die Jeedom-Anwendung.

Es erlaubt :

- La réinitialisation  de la Jeedom Atlas en configuration « usine » OS+Jeedom.
- La réinitialisation  de la Jeedom Atlas en configuration « usine », en appliquant ensuite sa sauvegarde Jeedom.

Pour rappel la gestion des sauvegardes/restauration est disponible dans Jeedom dans le menu « Réglages » en haut à droite, puis « Sauvegardes ».

Jeedom bietet einen Service mit automatischem Backup-Abonnement in der privaten Jeedom-Cloud an, sodass Sie sich um nichts kümmern müssen. (Sur le Market, dans votre compte, menu à gauche « Backup Cloud »).

## Betrieb des Wiederherstellungsmodus

>**Notiz**
>
>Denken Sie daran, (lokal) ein Jeedom-Konfigurations-Backup zu erstellen

>**WICHTIG**
>
>Das Anwenden einer Wiederherstellung führt zu einer Änderung der MAC-Adresse Ihrer Jeedom-Box. Anschließend müssen Sie Ihre IP-Reservierung in der Konfiguration Ihres DHCP-Servers ändern, sofern Sie einen haben.

>**WICHTIG**
>
>Je nachdem, ob Sie noch Zugriff auf Ihre Box haben oder nicht, ist die Vorgehensweise unterschiedlich.

Notwendiges Material : einen USB-Stick (mindestens 16 GB).

FALL 1 : SIE HABEN ZUGRIFF AUF IHRE ATLAS-BOX

Gehen Sie zum Atlas-Plug-in (Home Automation Gateway/Atlas-Plug-in), klicken Sie auf Wiederherstellung und folgen Sie dem Verfahren.

***

FALL 2 : SIE HABEN KEINEN ZUGRIFF AUF IHRE ATLAS-BOX

- Laden Sie die Wiederherstellung von Ihrem Profil auf dem Markt herunter : Profil / Meine Dienste und klicken Sie auf USB-Wiederherstellungsatlas herunterladen
![profilrecovery](images/profilrecovery.png)
- Laden Sie die Software herunter [Balena-Radierer](https://www.balena.io/etcher/)
- Wählen Sie in der Software Ihr heruntergeladenes Bild und dann Ihren USB-Stick aus 
![balenaetcher](images/balenaetcher.png)
- Sobald der Schlüssel bereit ist, stecken Sie ihn in den unteren USB 2-Anschluss (schwarzer USB-Anschluss) und schalten Sie dann Ihre Atlas-Box ein
- Warten Sie etwa 5 bis 10 Minuten
- Puis rendez-vous sur http://jeedomatlasrecovery.local/
- Benutzername und Passwort eingeben :  admin/admin, dann Passwort ändern, WICHTIG : ein Marktkonto eröffnen.
- Sobald dies erledigt ist, startet Jeeasy und zeigt Ihnen das Wiederherstellungsverfahren
- Folgen Sie dem Verfahren

Dieser Wiederherstellungsmodus ist nur mit dem Jeedom Atlas kompatibel
