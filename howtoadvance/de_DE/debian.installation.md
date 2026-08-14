# Debian-Installation

Hier werden wir sehen, wie man Debian installiert, sowohl als VM als auch als direkte Installation auf einem physischen Rechner

# Quellenabruf

Die neueste Debian-Version ist als Netinstall verfügbar (minimale Dateigröße, benötigt jedoch eine Internetverbindung für die Installation). [hier](https://www.debian.org/CD/netinst) (Sie müssen das Image in der AMD64-Version herunterladen) oder direkt darauf klicken [hier](http://cdimage.debian.org/debian-cd/10.4.0/amd64/iso-cd/debian-10.4.0-amd64-netinst.iso) um die ISO-Datei herunterzuladen.

# Start der Installation

## Auf einem physischen Rechner

Man muss entweder die ISO-Datei auf eine CD brennen und die CD in das Gerät einlegen (allerdings sind CD-Laufwerke heutzutage immer seltener zu finden) oder einen bootfähigen USB-Stick erstellen.

Für den bootfähigen USB-Stick muss man Rufus herunterladen [dort](http://rufus.akeo.ie/downloads/rufus-2.9.exe), starten und wie folgt konfigurieren:

![Debian-Installation](../images/debian.installation.PNG)

> **Hinweis**
>
> Denken Sie daran, die ISO-Datei auszuwählen, die Sie gerade heruntergeladen haben.

Jetzt müssen Sie nur noch auf „Start“ klicken, den USB-Stick in den Rechner einstecken und den Rechner davon booten lassen.

## Auf einer VM

Die Vorgehensweise ist recht einfach: Sie erstellen eine neue virtuelle Maschine, stellen eine Verbindung her, fügen ein virtuelles CD-Laufwerk hinzu, das auf die ISO-Datei verweist (denken Sie daran, es anzuschließen), und starten die Maschine. Siehe [hier](vmware.creer_une_vm) Weitere Informationen finden Sie hier.

# Installation

Drücken Sie die Eingabetaste, um die Installation zu starten:

![debian.installation1](../images/debian.installation1.PNG)

Wählen Sie „Französisch“ aus und bestätigen Sie mit der Eingabetaste

![debian.installation2](../images/debian.installation2.PNG)

Hier müssen Sie „French“ (Französisch) auswählen

![debian.installation3](../images/debian.installation3.PNG)

Ebenso:

![debian.installation4](../images/debian.installation4.PNG)

Geben Sie den Namen Ihres Geräts ein (hier „nabaztag“, bei einem Jeedom-Gerät geben Sie bitte „jeedom“ ein)

![debian.installation5](../images/debian.installation5.PNG)

Drücken Sie einfach die Eingabetaste:

![debian.installation6](../images/debian.installation6.PNG)

Legen Sie ein Passwort fest. Ich empfehle Ihnen hier ein einfaches Passwort (z. B. „oooo“), das später geändert werden kann (Befehl „passwd“):

![debian.installation7](../images/debian.installation7.PNG)

Geben Sie es einfach wieder ein:

![debian.installation8](../images/debian.installation8.PNG)

Geben Sie den Namen des Hauptbenutzers ein (hier „nabaztag“, bei Jeedom geben Sie „jeedom“ ein)

![debian.installation9](../images/debian.installation9.PNG)

Geben Sie dasselbe erneut ein:

![Debian.Installation10](../images/debian.installation10.PNG)

Legen Sie ein Passwort fest. Ich empfehle Ihnen hier ein einfaches Passwort (z. B. „oooo“), das später geändert werden kann (Befehl „passwd“):

![debian.installation11](../images/debian.installation11.PNG)

Geben Sie dasselbe erneut ein:

![debian.installation12](../images/debian.installation12.PNG)

Bestätigen Sie durch Drücken der Eingabetaste:

![debian.installation13](../images/debian.installation13.PNG)

Ebenso:

![debian.installation14](../images/debian.installation14.PNG)

Bestätigen Sie erneut durch Drücken der Eingabetaste:

![debian.installation15](../images/debian.installation15.PNG)

Wir überprüfen noch einmal:

![debian.installation16](../images/debian.installation16.PNG)

Und außerdem:

![debian.installation17](../images/debian.installation17.PNG)

Wählen Sie „Frankreich“ aus und bestätigen Sie:

![debian.installation18](../images/debian.installation18.PNG)

Bestätigen Sie durch Drücken der Eingabetaste:

![debian.installation19](../images/debian.installation19.PNG)

Ebenso:

![debian.installation20](../images/debian.installation20.PNG)

Und noch etwas (ja, bei einer Debian-Installation gibt es viel zu bestätigen):

![debian.installation21](../images/debian.installation21.PNG)

Jetzt wird es etwas komplizierter: Sie müssen die Auswahl „Debian-Desktop-Umgebung“ durch Drücken der Leertaste aufheben und „SSH-Server“ durch Drücken der Leertaste auswählen (die Navigation erfolgt mit den Pfeiltasten), und anschließend mit der Eingabetaste bestätigen:

![debian.installation22](../images/debian.installation22.PNG)

Wir bestätigen erneut:

![debian.installation23](../images/debian.installation23.PNG)

Wählen Sie /dev/sda aus und bestätigen Sie die Auswahl:

![debian.installation24](../images/debian.installation24.PNG)

Jetzt müssen Sie nur noch den USB-Stick, die CD-ROM oder die virtuelle CD-ROM entfernen und die Eingabetaste drücken:

![debian.installation25](../images/debian.installation25.PNG)

Damit ist Ihre Debian-Installation abgeschlossen. Sie können die Anleitung an dieser Stelle beenden, wenn Sie möchten, oder die folgenden Schritte befolgen, um einige Änderungen am System vorzunehmen (besonders nützlich für Jeedom).

# Optimierung für Jeedom

Um die Installation von Jeedom vorzubereiten, können Sie einige Optimierungen vornehmen:

## Vim und sudo hinzufügen

``sudo apt-get install -y vim sudo``

## fail2ban hinzufügen

Fail2ban ist eine Software, mit der Sie den Zugriff auf Ihr Debian-System sichern können. Bei einer zu hohen Anzahl fehlgeschlagener Anmeldeversuche sperrt sie den Zugriff für die betreffende IP-Adresse (also nicht für alle, sondern nur für den Angreifer) für eine bestimmte Zeit.

``sudo apt-get install -y fail2ban``

## Open VMware Tools hinzufügen

Die Open VMware Tools installieren die für das jeweilige Betriebssystem spezifischen Treiber und sorgen für die Optimierung dieses auf einem ESXi-Hypervisor gehosteten Betriebssystems.

``sudo apt-get install -y open-vm-tools``

Jetzt müssen Sie nur noch Jeedom installieren, indem Sie den folgenden Schritten folgen [dies](/installation/cli)
