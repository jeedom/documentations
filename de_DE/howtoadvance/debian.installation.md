# Debian installieren

Wir werden hier sehen, wie man ein Debian installiert, sowohl als VM als auch direkt auf einer physischen Maschine installiert

# Wiederherstellung der Quelle

Sie finden die neueste Debian-Version in netinstall (Mindestgröße, benötigen aber Internet für die Installation) [hier](https://www.debian.org/CD/netinst) (Sie müssen das Bild in AMD64 aufnehmen) oder direkt klicken [hier](http://cdimage.debian.org/debian-cd/10.4.0/amd64/iso-cd/debian-10.4.0-amd64-netinst.iso) iso herunterzuladen.

# Starten der Installation

## Auf einer physischen Maschine

Sie müssen entweder die ISO auf eine CD brennen und die CD in die Maschine einlegen (aber heutzutage sind CD-Player immer seltener) oder einen bootfähigen USB-Stick erstellen.

Für den bootfähigen USB-Stick müssen Sie rufus herunterladen [das](http://rufus.akeo.ie/downloads/rufus-2.9.exe), Starten Sie es und konfigurieren Sie es wie folgt :

![debian.installation](images/debian.installation.PNG)

> **Notiz**
>
> Denken Sie daran, die ISO-Datei auszuwählen, die Sie zuvor heruntergeladen haben

Alles, was Sie tun müssen, ist auf Start zu klicken, dann den USB-Stick auf den Computer zu stecken und ihn darauf zu booten.

## Auf einer VM

Die Handhabung ist recht einfach, Sie erstellen eine neue virtuelle Maschine, schließen sie an, legen ein virtuelles CD-Laufwerk darauf, das auf die ISO zeigt (denken Sie daran, es anzuschließen) und starten die Maschine. Sehen [hier](https://doc.jeedom.com/de_DE/howto/doc-howto-vmware.creer_une_vm.html) für mehr Details.

# Installation

Drücken Sie die Eingabetaste, um die Installation zu starten :

![debian.installation1](images/debian.installation1.PNG)

Wählen Sie "Französisch" und bestätigen Sie mit der Eingabetaste

![debian.installation2](images/debian.installation2.PNG)

Hier müssen Sie "Französisch" (Französisch)

![debian.installation3](images/debian.installation3.PNG)

Dasselbe :

![debian.installation4](images/debian.installation4.PNG)

Geben Sie den Namen Ihrer Maschine ein (hier nabaztag, aber wenn es ein Jeedom ist, setzen Sie Jeedom)

![debian.installation5](images/debian.installation5.PNG)

Drücken Sie einfach die Eingabetaste :

![debian.installation6](images/debian.installation6.PNG)

Legen Sie ein Passwort fest, ich empfehle hier ein einfaches (wie oooo), es kann später geändert werden (passwd-Befehl) :

![debian.installation7](images/debian.installation7.PNG)

Setzen Sie es sogar zurück :

![debian.installation8](images/debian.installation8.PNG)

Geben Sie den Namen des Hauptbenutzers an (hier nabaztag, aber wenn es ein jeedom ist, setzen Sie jeedom)

![debian.installation9](images/debian.installation9.PNG)

Geben Sie dasselbe zurück :

![debian.installation10](images/debian.installation10.PNG)

Legen Sie ein Passwort fest, ich empfehle hier ein einfaches (wie oooo), es kann später geändert werden (passwd-Befehl) :

![debian.installation11](images/debian.installation11.PNG)

Geben Sie dasselbe zurück :

![debian.installation12](images/debian.installation12.PNG)

Bestätigen Sie mit der Eingabetaste :

![debian.installation13](images/debian.installation13.PNG)

Dasselbe :

![debian.installation14](images/debian.installation14.PNG)

Bestätigen Sie erneut mit der Eingabetaste :

![debian.installation15](images/debian.installation15.PNG)

Wir validieren erneut :

![debian.installation16](images/debian.installation16.PNG)

Und sogar :

![debian.installation17](images/debian.installation17.PNG)

Wählen Sie „Frankreich“ und bestätigen Sie :

![debian.installation18](images/debian.installation18.PNG)

Bestätigen Sie mit der Eingabetaste :

![debian.installation19](images/debian.installation19.PNG)

Dasselbe :

![debian.installation20](images/debian.installation20.PNG)

Und noch einmal (ja, wir validieren viel auf einer Debian-Installation) :

![debian.installation21](images/debian.installation21.PNG)

Jetzt komplizierter, Sie müssen „Debian-Desktopumgebung“ durch Drücken der Leertaste abwählen und „SSH-Server“ auswählen, indem Sie die Leertaste drücken (Sie müssen sich mit den Pfeilen auf der Tastatur bewegen), und dann durch Drücken der Eingabetaste bestätigen :

![debian.installation22](images/debian.installation22.PNG)

Wir validieren erneut :

![debian.installation23](images/debian.installation23.PNG)

Sie müssen /dev/sda auswählen und dann bestätigen :

![debian.installation24](images/debian.installation24.PNG)

Dort müssen Sie nur den USB-Stick, die CD-ROM oder die virtuelle CD-ROM entfernen und die Eingabetaste drücken :

![debian.installation25](images/debian.installation25.PNG)

Hier ist Ihre Debian-Installation abgeschlossen. Sie können das Tutorial dort beenden, wenn Sie möchten, oder die folgenden Schritte für einige Systemänderungen ausführen (nützlich insbesondere für jeedom).

# Optimierung für Jeedom

Um die Installation von Jeedom vorzubereiten, können Sie einige Optimierungen vornehmen :

## Fügen Sie vim und sudo hinzu

``sudo apt-get install -y vim sudo``

## Fail2ban hinzufügen

Fail2ban ist eine Software, mit der Sie den Zugriff auf Ihr Debian sichern können. Bei zu vielen Verbindungsausfällen blockiert sie den Zugriff auf die betreffende IP (also nicht für alle, nur für "Angreifer") eine Weile.

``sudo apt-get install -y fail2ban``

## Fügen Sie Open VMware Tools hinzu

Die Open VMware Tools installieren die für das installierte Betriebssystem spezifischen Treiber und bringen die Optimierungen dieses auf einem ESXi-Hypervisor gehosteten Betriebssystems.

``sudo apt-get install -y open-vm-tools``

Alles, was Sie tun müssen, ist Jeedom zu installieren, indem Sie folgen [Dies](https://doc.jeedom.com/de_DE/installation/cli)
