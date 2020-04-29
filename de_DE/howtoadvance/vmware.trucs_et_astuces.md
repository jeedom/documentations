Nicht wirklich ein Howto hier, sondern eher eine Sammlung von Tipps und Tricks
VMware

Fügen Sie Ihre Lizenz hinzu 
==================

Sobald die Verbindung über die Weboberfläche (IP \_ESXI / ui) hergestellt ist, müssen Sie zu gehen
"Verwalten" :

![vmware.tips](images/vmware.tips.PNG)

Klicken Sie dann auf "Lizenzierung" und klicken Sie auf "Lizenz zuweisen""

![vmware.tips2](images/vmware.tips2.PNG)

Und geben Sie Ihren Lizenzschlüssel ein

![vmware.tips3](images/vmware.tips3.PNG)

> **Note**
>
> Wenn Sie dies nicht tun, ist Ihr ESXi möglicherweise nicht mehr vorhanden
> Betrieb nach 60 Tagen

Mounten Sie einen NFS-Datenspeicher mit Synology 
========================================

Wir werden hier sehen, wie eine NFS-Freigabe ab einer Synology bereitgestellt wird
VMware. Dies ermöglicht beispielsweise das Platzieren virtueller Maschinen auf dem
Synology (die möglicherweise mehr Speicherplatz als das ESXi hat) oder senden Sie die
Maschinensicherungen in Synology

Synologiekonfiguration 
-------------------------

Sie müssen zum Control Panel gehen und dann "Services de
Dateien "und aktivieren Sie das Kontrollkästchen" NFS aktivieren "" :

![vmware.tips4](images/vmware.tips4.PNG)

Klicken Sie dann auf "Freigegebener Ordner" und wählen Sie den Ordner aus
Teilen (hier Backup), klicken Sie auf Ändern, dann auf "NFS-Autorisierung" und
endlich auf erstellen (hier habe ich schon eine, deine liste sollte sein
leer) :

![vmware.tips5](images/vmware.tips5.PNG)

Dann geben Sie die IP Ihres ESXi ein und geben "Squash" ein
"Ordnen Sie alle Benutzer dem Administrator zu und validieren Sie sie :

![vmware.tips6](images/vmware.tips6.PNG)

Wir müssen dann den Freigabepfad wiederherstellen (hier / volume2 / Backup) :

![vmware.tips7](images/vmware.tips7.PNG)

Hier ist es auf der Synology-Seite fertig, wir werden jetzt auf die ESXi-Seite wechseln

ESXi-Konfiguration 
-----------------------

Gehen Sie zu "Speicher" :

![vmware.tips8](images/vmware.tips8.PNG)

Klicken Sie dann auf "Neue Datenbank" :

![vmware.tips9](images/vmware.tips9.PNG)

Dort wählen Sie "NFS-Datenbank bereitstellen" und tun dies dann
folgende :

![vmware.tips10](images/vmware.tips10.PNG)

Geben Sie den Namen des zu erstellenden Datenspeichers ein (vermeiden Sie Leerzeichen und
Sonderzeichen), geben Sie die IP unserer Synology ein und geben Sie den Pfad ein
Teilen (siehe oben) und schließlich validieren :

![vmware.tips11](images/vmware.tips11.PNG)

Klicken Sie auf Fertig stellen :

![vmware.tips12](images/vmware.tips12.PNG)

Und jetzt sollte Ihr neuer Datenspeicher angezeigt werden (andernfalls klicken Sie auf
"Actualiser").

VAAI Synology Plugin für die NFS-Montage hinzugefügt 
==============================================

Durch Hinzufügen dieses Plugins wird die Hardwarebeschleunigung aktiviert
NFS-Halterungen (eine Erklärung finden Sie unter
[hier](http://www.virtual-sddc.ovh/exploiter-les-vaai-nfs-avec-un-nas-synology/))

Um zu sehen, ob Sie es haben, müssen Sie sich mit dem Thick Client verbinden
(Ich habe die Informationen auf dem Webclient nicht gefunden) und gehe zu Konfiguration →
Lagerung :

![vmware.tips13](images/vmware.tips13.PNG)

Die Installation ist recht einfach, zuerst müssen Sie den Dienst aktivieren
ESXi SSH (Gehen Sie auf der Weboberfläche zu Aktion ⇒ Dienste
⇒ Aktivieren Sie Secure Shell) und stellen Sie dann eine Verbindung in SSH oben her (die
Bezeichner sind die gleichen wie für den Zugriff auf die Schnittstelle.. Dann er
du tust es einfach :

    esxcli software vib install -v https://global.download.synology.com/download/Tools/NFSVAAIPlugin/1.0-0001/VMware_ESXi/esx-nfsplugin.vib -f

Sie müssen haben :

![vmware.tips14](images/vmware.tips14.PNG)

Sie müssen dann ESXi neu starten, um zu überprüfen, ob es in Ordnung ist
Kehren Sie dann mit dem Thick Client zu Konfiguration → Speicher zurück :

![vmware.tips15](images/vmware.tips15.PNG)

Installieren / Aktualisieren Sie den ESXi Embedded Host Client 
===================================================

ESXi Embedded Host Client ist eine Webschnittstelle (in HTML5) von ESXi, die
erlaubt in 95% der Fälle, auf den schweren Kunden zu verzichten. Sie ist anwesend
Standard in Version 6.0 Update 2, aber in Version 1.0 ist es
dringend empfohlen, es zu aktualisieren.

Hier finden Sie alle Informationen
[hier](https://labs.vmware.com/flings/esxi-embedded-host-client)

Um zu sehen, ob Sie die Weboberfläche haben, gehen Sie einfach mit
Ihr Browser auf IP \_ESXI / ui, wenn Sie nichts haben, was Sie brauchen
Installieren Sie es, Sie müssen zuerst eine Verbindung in SSH auf dem ESXI herstellen und dann tun :

    esxcli software vib install -v http://download3.vmware.com/software/vmw-tools/esxui/esxui-signed-latest.vib

Wenn Sie es bereits haben, müssen Sie es tun, um es zu aktualisieren :

    esxcli software vib update -v http://download3.vmware.com/software/vmw-tools/esxui/esxui-signed-latest.vib

Installation des Thick Clients 
============================

Dieser Teil ist optional, wenn Sie den USB nicht verwalten müssen.

Sie müssen mit Ihrem Internetbrowser zur IP des ESXi wechseln
Klicken Sie dann auf den Link "vSphere Client für Windows herunterladen"" :

![vmware.createvm](images/vmware.createvm.PNG)

Einmal heruntergeladen, müssen Sie nur die Installation starten (ich passiere
freiwillig in diesem Teil, weil es ausreicht, alles zu validieren).

Starten Sie dann VMware vSphere Client, den Sie haben sollten :

![vmware.createvm1](images/vmware.createvm1.PNG)

Sie müssen nur die IP Ihres ESXi, den Benutzernamen und die eingeben
Passwort und Sie sind damit verbunden :

![vmware.createvm2](images/vmware.createvm2.PNG)

ESXi-Update 
=====================

Das Verfahren ist recht einfach, Sie müssen zuerst den Patch wiederherstellen
gehen [hier](https://my.vmware.com/group/vmware/patch#search) (er
Sie müssen sich wahrscheinlich mit Ihrem VMware-Konto anmelden.. Auf dem
In der Liste "Produkt auswählen" geben Sie "ESXi (eingebettet und installierbar)" ein
Verlassen Sie die neueste Version von VMware und führen Sie "Suchen" durch. Dann
Laden Sie den gewünschten Patch herunter (normalerweise den letzten).. Die Build-Nummer (die
Die erste Ausgabe, die nicht mit KB beginnt, gibt Ihnen die Version der
Patch, den Sie mit Ihrer Build-Nummer vergleichen können.

Übertragen Sie dann die Zip in einen Ihrer Datenspeicher und machen Sie :

    esxcli software vib update -d /vmfs/volumes/576c8ab3-fdf64d2f-091b-b8aeedeb87fb/ESXi600-201605001.zip

> **Note**
>
> Ersetzen Sie den Pfad und den Postleitzahlnamen entsprechend Ihrer
> Konfiguration

> **Important**
>
> Achten Sie darauf, den vollständigen Pfad zum Reißverschluss anzugeben, da dies sonst nicht der Fall ist
> nicht funktionieren

Der obige Befehl aktualisiert aber nur die Vibes, die ihn benötigen
Sie können die Installation aller Vibes des Pakets erzwingen (so
Seien Sie vorsichtig, dies kann ein Downgrade sein :

    esxcli software vib install -d /vmfs/volumes/576c8ab3-fdf64d2f-091b-b8aeedeb87fb/ESXi600-201605001.zip

NTP-Konfiguration 
====================

Standardmäßig verwendet das ESXi kein NTP, sodass es nicht aktiviert ist
Die Zeit und die VMs sind nicht pünktlich, um es zu korrigieren ist sehr
einfach. Gehen Sie in der Webversion zu Verwalten → System →
Datum und Uhrzeit, dort klicken Sie auf "Einstellungen ändern" :

![vmware.tips16](images/vmware.tips16.PNG)

Und in das Feld "NTP-Server" müssen Sie setzen : 0.debian.pool.n,
1.debian.pool.n, 2.debian.pool.n, 3.debian.pool.n, time.nist.gov

![vmware.tips17](images/vmware.tips17.PNG)

Klicken Sie dann unter Aktionen → NTP-Dienst → Strategie auf "Start und
mit dem Gastgeber aufhören" :

![vmware.tips18](images/vmware.tips18.PNG)

Klicken Sie weiterhin unter Aktionen → NTP-Dienst auf "Start""

Dies ist Ihr ESXi sollte sich jetzt die Zeit alleine nehmen.

Externer Zugriff auf das ESXi 
========================

Um von außen auf das ESXi zugreifen zu können, benötigen Sie :

-   Öffnen Sie den Port 443 für ESXi 443

-   Öffnen Sie den Port 902 zum ESXi 902

Und das war's. Kleiner Tipp, wenn Sie ein Synology NAS haben
kann tun (seien Sie vorsichtig zu folgen) :

-   Öffnen Sie 443 bis 5001 auf Synology NAS

-   Öffnen Sie die 80 in Richtung der 80 des NAS (nützlich, nur um die zu generieren
    verschlüsseln wir Zertifikate)

-   Öffnen Sie den Port 902 zum ESXi 902

Dann auf dem NAS im Control Panel dann Portal
Anwendung und Reverse Proxy (Vorsicht, DSM 6 ist wichtig) :

![vmware.tips19](images/vmware.tips19.PNG)

Klicken Sie auf Erstellen und setzen :

![vmware.tips20](images/vmware.tips20.PNG)

Unter "Hostname" (auf Quellenebene) müssen Sie das gewünschte DNS eingeben
(Zum Beispiel monesxi.mondsn.synology.ich) und in "Hostname" (auf der Ebene
des Ziels) müssen Sie die IP des ESXi eingeben

> **Note**
>
> Sie können das Gleiche auch tun, um auf jeedom zuzugreifen, jedoch über
> diesmal setze die jeedom IP (von der vm wenn du drin bist
> virtualisiert) und Port 80

> **Note**
>
> Sobald Sie dies getan haben und Ihr DNS richtig zeigt
> Auf dem NAS können Sie kostenlos ein gültiges SSL-Zertifikat erstellen
> mit Lassen Sie uns verschlüsseln, indem Sie zu Secrity ⇒ Zertifikat gehen und dies tun
> Hinzufügen. Dann vergessen Sie nicht, auf Konfigurieren auf zu klicken
> Weisen Sie es Ihrem Reverse-Proxy zu

Um dann auf Ihr ESXi zuzugreifen, benötigen Sie nur Ihren Browser
Gehen Sie zu Ihrem externen DNS oder Ihrer IP, indem Sie am Ende / ui hinzufügen, und das ist
bon.

> **Important**
>
> Wenn Sie über den NAS-Reverse-Proxy gehen, befindet sich die Konsole im Web-Modus von
> VMs funktionieren jedoch nicht (da sie über den Websocket übertragen werden)
> Wenn Sie VMware Remote Console verwenden, sollte alles in Ordnung sein (dies
> geht durch Port 902)

> **Note**
>
> Es gibt auch eine Vmware Watchlist App auf Android für
> Zugriff auf ESXi sowie VM-Konsolen

SSL-Zertifikat 
==============

Es ist möglich, VMware-Zertifikate direkt in zu importieren
Ihr PC hat den Alarm nicht mehr.

Damit ist es notwendig :

-   Haben Sie eine URL (DNS), um auf Ihre Esxi zuzugreifen, hier nehmen wir
    esxi1.lan

-   Konfigurieren Sie den Namen Ihres ESXI in ssh oben :

<!-- -->

    Hostname des esxcli-Systems gesetzt --host = esxi1

-   Konfigurieren Sie die fqdn :

<!-- -->

    Hostname des esxcli-Systems gesetzt --fqdn = esxi1.lan

-   Rufen Sie das Stammzertifikat von esxi ab, in dem es sich befindet
    /etc/vmware/ssl/castore.pem

Klicken Sie mit der rechten Maustaste auf den Computer, installieren Sie das Zertifikat und legen Sie es ein
"Vertrauenswürdige Stammzertifizierungsstelle"
