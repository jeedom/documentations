# Debian-Installation

Wir werden hier sehen, wie ein Debian sowohl als VM als auch in direkter Installation auf einem physischen Computer installiert wird

# Quellenwiederherstellung

Sie finden die neueste Debian-Version in netinstall (Mindestgröße, aber Internet für die Installation erforderlich) [hier](https://www.debian.org/CD/netinst) (nimm das Bild in amd64) oder klicke direkt [hier](http://cdimage.debian.org/debian-cd/10.4.0/amd64/iso-cd/debian-10.4.0-amd64-netinst.iso) um die ISO herunterzuladen.

# Installationsstart

## Auf einer physischen Maschine

Sie müssen entweder die ISO auf eine CD brennen und die CD in das Gerät einlegen (heutzutage sind CD-Player jedoch immer seltener) oder einen bootfähigen USB-Stick erstellen.

Für den bootfähigen USB-Stick rufus herunterladen [die](http://rufus.akeo.ie/downloads/rufus-2.9.exe), Starten Sie es und konfigurieren Sie es so :

![debian.installation](images/debian.installation.PNG)

> **Notiz**
>
> Denken Sie daran, die ISO-Datei auszuwählen, die Sie kurz zuvor heruntergeladen haben

Sie müssen nur auf Start klicken, dann den USB-Stick in den Computer stecken und ihn starten.

## Auf einer VM

Die Manipulation ist recht einfach: Sie erstellen eine neue virtuelle Maschine, schließen sie an, legen einen virtuellen CD-Player darauf, der auf die ISO zeigt (denken Sie daran, sie anzuschließen), und starten die Maschine. Sehen [hier](https://doc.jeedom.com/de_DE/howto/doc-howto-vmware.creer_une_vm.html) für weitere Details.

# Installation

Drücken Sie die Eingabetaste, um die Installation zu starten :

![debian.installation1](images/debian.installation1.PNG)

Wählen Sie "Französisch" und bestätigen Sie mit der Eingabetaste

![debian.installation2](images/debian.installation2.PNG)

Hier muss man "Französisch" wählen)

![debian.installation3](images/debian.installation3.PNG)

Idem :

![debian.installation4](images/debian.installation4.PNG)

Geben Sie den Namen Ihrer Maschine ein (hier nabaztag, aber wenn es sich um eine Freiheit handelt, setzen Sie die Freiheit)

![debian.installation5](images/debian.installation5.PNG)

Drücken Sie einfach die Eingabetaste :

![debian.installation6](images/debian.installation6.PNG)

Geben Sie ein Passwort ein, ich empfehle hier ein einfaches (wie oooo), es kann später geändert werden (Befehl passwd) :

![debian.installation7](images/debian.installation7.PNG)

Legen Sie es gleich zurück :

![debian.installation8](images/debian.installation8.PNG)

Geben Sie den Namen des Hauptbenutzers an (hier nabaztag, aber wenn es sich um eine Freiheit handelt, setzen Sie jeedom)

![debian.installation9](images/debian.installation9.PNG)

Setzen Sie das gleiche zurück :

![debian.installation10](images/debian.installation10.PNG)

Geben Sie ein Passwort ein, ich empfehle hier ein einfaches (wie oooo), es kann später geändert werden (Befehl passwd) :

![debian.installation11](images/debian.installation11.PNG)

Setzen Sie das gleiche zurück :

![debian.installation12](images/debian.installation12.PNG)

Bestätigen Sie mit der Eingabetaste :

![debian.installation13](images/debian.installation13.PNG)

Idem :

![debian.installation14](images/debian.installation14.PNG)

Bestätigen Sie erneut mit der Eingabetaste :

![debian.installation15](images/debian.installation15.PNG)

Wir validieren noch :

![debian.installation16](images/debian.installation16.PNG)

Und wieder :

![debian.installation17](images/debian.installation17.PNG)

Wählen Sie "Frankreich" und bestätigen Sie :

![debian.installation18](images/debian.installation18.PNG)

Bestätigen Sie mit der Eingabetaste :

![debian.installation19](images/debian.installation19.PNG)

Idem :

![debian.installation20](images/debian.installation20.PNG)

Und wieder (ja, wir validieren viel bei einer Debian-Installation) :

![debian.installation21](images/debian.installation21.PNG)

Jetzt komplizierter, müssen Sie die Auswahl von "Debian-Desktop-Umgebung" durch Drücken der Leertaste aufheben und "SSH-Server" durch Drücken der Leertaste auswählen (Sie müssen sich mit den Pfeiltasten bewegen) und dann durch Drücken der Eingabetaste bestätigen :

![debian.installation22](images/debian.installation22.PNG)

Wir validieren erneut :

![debian.installation23](images/debian.installation23.PNG)

Sie müssen / dev / sda auswählen und dann validieren :

![debian.installation24](images/debian.installation24.PNG)

Dort müssen Sie nur den USB-Stick, die CD-ROM oder die virtuelle CD-ROM entfernen und die Eingabetaste drücken :

![debian.installation25](images/debian.installation25.PNG)

Hier ist Ihre Debian-Installation abgeschlossen. Sie können das Tutorial dort beenden, wenn Sie möchten, oder die folgenden Schritte für einige Änderungen des Systems ausführen (nützlich insbesondere für Jeedom).

# Optimierung für Jeedom

Um die Installation von Jeedom vorzubereiten, können Sie einige Optimierungen vornehmen :

## Fügen Sie vim und sudo hinzu

``sudo apt-get install -y vim sudo``

## Fügen Sie fail2ban hinzu

Fail2ban ist eine Software, die es ermöglicht, den Zugriff auf Ihr Debian zu sichern. Bei zu vielen Verbindungsfehlern blockiert sie den Zugriff auf die betreffende IP (daher nicht auf alle, sondern nur auf die 'Angreifer) für eine Weile.

``sudo apt-get install -y fail2ban``

## Fügen Sie die Open VMware Tools hinzu

Öffnen Sie VMware Tools, installieren Sie Treiber, die für das installierte Betriebssystem spezifisch sind, und stellen Sie Optimierungen für dieses Betriebssystem bereit, das auf einem ESXi-Hypervisor gehostet wird.

``sudo apt-get install -y open-vm-tools``

Sie müssen Jeedom nur installieren, indem Sie folgen [diese](https://doc.jeedom.com/de_DE/installation/cli)
