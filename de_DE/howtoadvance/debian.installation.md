Wir werden hier sehen, wie man einen Debian installiert, sowie
als VM oder in direkter Installation auf einem physischen Computer

Quellenwiederherstellung 
========================

Sie finden die neueste Debian-Version in netinstall (Größe)
minimal, aber Internet für die Installation benötigen)
[hier](https://www.debian.org/CD/netinst) (il faut prendre l'image en
amd64) oder direkt klicken
[hier](http://cdimage.debian.org/debian-cd/9.1.0/amd64/iso-cd/debian-9.1.0-amd64-netinst.iso)
um die ISO herunterzuladen.

Installationsstart 
===========================

Auf einer physischen Maschine 
------------------------

Sie müssen entweder die ISO auf eine CD brennen und die CD in das Gerät einlegen
(aber heutzutage sind CD-Player immer seltener) oder so
Erstellen Sie einen bootfähigen USB-Stick.

Für den bootfähigen USB-Stick rufus herunterladen
[die](http://rufus.akeo.ie/downloads/rufus-2.9.exe), le lancer et le
so konfigurieren :

![debian.installation](images/debian.installation.PNG)

> **Notiz**
>
> Denken Sie daran, die heruntergeladene ISO-Datei auszuwählen
> kurz zuvor

Sie müssen nur auf Start klicken und dann den USB-Stick einstecken
auf dem Computer und starten Sie es.

Auf einer VM 
----------

Die Handhabung ist ganz einfach, Sie erstellen eine neue Maschine
virtuell, stecken Sie ein, legen Sie einen virtuellen CD-Player darauf, der zeigt
an die ISO (denken Sie daran, sie anzuschließen) und Sie starten die Maschine. Siehe
[hier](https://doc.jeedom.com/de_DE/howto/doc-howto-vmware.creer_une_vm.html)
für weitere Details.

Installation 
============

Drücken Sie die Eingabetaste, um die Installation zu starten :

![debian.installation1](images/debian.installation1.PNG)

Wählen Sie "Französisch" und bestätigen Sie mit der Eingabetaste

![debian.installation2](images/debian.installation2.PNG)

Hier muss man "Französisch" wählen

![debian.installation3](images/debian.installation3.PNG)

Idem :

![debian.installation4](images/debian.installation4.PNG)

Geben Sie den Namen Ihrer Maschine ein (hier nabaztag, aber wenn es sich um eine Freiheit handelt
jeedom setzen)

![debian.installation5](images/debian.installation5.PNG)

Drücken Sie einfach die Eingabetaste :

![debian.installation6](images/debian.installation6.PNG)

Geben Sie ein Passwort ein, ich empfehle hier ein einfaches (wie oooo),
es kann später geändert werden (passwd Befehl) :

![debian.installation7](images/debian.installation7.PNG)

Legen Sie es gleich zurück :

![debian.installation8](images/debian.installation8.PNG)

Geben Sie den Namen des Hauptbenutzers an (hier nabaztag, aber wenn es ein ist
jeedom put jeedom)

![debian.installation9](images/debian.installation9.PNG)

Setzen Sie das gleiche zurück :

![debian.installation10](images/debian.installation10.PNG)

Geben Sie ein Passwort ein, ich empfehle hier ein einfaches (wie oooo),
es kann später geändert werden (passwd Befehl) :

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

Jetzt komplizierter, müssen Sie die Umgebung von abwählen
Debian Desktop "durch Drücken der Leertaste und Auswahl von" Server
SSH "durch Drücken der Leertaste (bewegen Sie sich mit den Pfeilen auf der
Tastatur) und bestätigen Sie mit der Eingabetaste :

![debian.installation22](images/debian.installation22.PNG)

Wir validieren erneut :

![debian.installation23](images/debian.installation23.PNG)

Sie müssen / dev / sda auswählen und dann validieren :

![debian.installation24](images/debian.installation24.PNG)

Dort müssen Sie nur den USB-Stick, die CD-ROM oder die virtuelle CD-ROM entfernen
und drücken Sie die Eingabetaste :

![debian.installation25](images/debian.installation25.PNG)

Hier ist Ihre Debian-Installation abgeschlossen. Sie können die stoppen
Tutorial dort, wenn Sie wollen oder folgen Sie den nächsten Schritten für ein paar
Systemmodifikationen (nützlich besonders für Jeedom).

Optimierung für Jeedom 
========================

Um die Installation von Jeedom vorzubereiten, können Sie einige tun
Optimierungen :

Fügen Sie vim und sudo hinzu 
-------------------

    

Fügen Sie fail2ban hinzu 
----------------

Fail2ban ist eine Software, mit der Sie den Zugriff auf Ihr Debian sichern können,
Bei zu vielen Verbindungsfehlern wird der Zugriff blockiert
die betreffende IP (daher nicht an alle, nur an den Angreifer) a
einige Zeit.

    

Fügen Sie die Open VMware Tools hinzu 
-----------------------------

Öffnen Sie VMware Tools und installieren Sie systemspezifische Treiber
installiert und bringen Sie die Optimierungen dieses gehosteten Betriebssystems
auf einem ESXi-Hypervisor.

    

Sie müssen Jeedom nur installieren, indem Sie folgen
[diese](https://doc.jeedom.com/de_DE/installation/index#tocAnchor-1-27)
