# VMware-Tipps und Tricks

Nicht wirklich ein Howto hier, sondern eher eine Sammlung von Tipps und Tricks zu VMware

# Fügen Sie Ihre Lizenz hinzu

Einmal mit der Weboberfläche verbunden ``IP_ESXI/ui`` Sie müssen auf "Verwalten" gehen" :

![vmware.tips](images/vmware.tips.PNG)

Dann auf „Lizenz zuweisen“ und auf „Lizenz zuweisen“ klicken"

![vmware.tips2](images/vmware.tips2.PNG)

Und geben Sie Ihren Lizenzschlüssel ein

![vmware.tips3](images/vmware.tips3.PNG)

> **Notiz**
>
> Zur Erinnerung: Wenn Sie dies nicht tun, funktioniert Ihr ESXi möglicherweise nach 60 Tagen nicht mehr

# Mounten Sie einen NFS-Datenspeicher mit einer Synology

Wir werden hier sehen, wie man eine NFS-Freigabe von einer Synology auf VMware einbindet. Dies ermöglicht zum Beispiel, die virtuellen Maschinen auf die Synology zu legen (die mehr Speicherplatz haben kann als die ESXi) oder die Backups der Maschinen auf die Synology zu senden

## Synology-Setup

Sie müssen zum Konfigurationsfenster gehen, dann "Dateidienste" und das Kontrollkästchen "NFS aktivieren" aktivieren" :

![vmware.tips4](images/vmware.tips4.PNG)

Dann müssen Sie auf "Freigegebener Ordner" klicken, dann den Ordner zum Freigeben auswählen (hier Backup), auf Ändern klicken, dann auf "NFS-Autorisierung" und schließlich auf Erstellen (hier habe ich bereits einen, Ihre Liste sollte leer sein) :

![vmware.tips5](images/vmware.tips5.PNG)

Dann geben Sie die IP Ihres ESXi ein und in "Squash" geben Sie "Mapping of all users on admin" ein, dann validieren Sie :

![vmware.tips6](images/vmware.tips6.PNG)

Sie müssen dann den Pfad zur Freigabe abrufen (hier ``/volume2/Backup``) :

![vmware.tips7](images/vmware.tips7.PNG)

Das ist es, auf der Synology-Seite ist es vorbei, wir werden jetzt auf die ESXi-Seite übergehen

## Konfigurieren des ESXi

Gehen Sie zu „Speicher" :

![vmware.tips8](images/vmware.tips8.PNG)

Klicken Sie dann auf „Neue Datenbank" :

![vmware.tips9](images/vmware.tips9.PNG)

Dort wählen Sie „Mount an NFS database“ und machen dann weiter :

![vmware.tips10](images/vmware.tips10.PNG)

Geben Sie den Namen des zu erstellenden Datenspeichers ein (achten Sie darauf, Leerzeichen und Sonderzeichen zu vermeiden), geben Sie die IP unserer Synology ein und geben Sie den Pfad zur Freigabe ein (siehe oben) und bestätigen Sie schließlich :

![vmware.tips11](images/vmware.tips11.PNG)

Klicken Sie auf Fertig stellen :

![vmware.tips12](images/vmware.tips12.PNG)

Und jetzt sollte Ihr neuer Datenspeicher erscheinen (andernfalls klicken Sie auf "Aktualisieren").

# VAAI-Synology-Plugin für NFS-Mount hinzugefügt

Das Hinzufügen dieses Plugins aktiviert die Hardwarebeschleunigung auf NFS-Mounts (für eine Erklärung siehe [hier](http://www.virtual-sddc.ovh/exploiter-les-vaai-nfs-avec-un-nas-synology/))

Um zu sehen, ob Sie es haben, müssen Sie sich mit dem Thick Client verbinden (ich konnte die Informationen im Webclient nicht finden) und zu Konfiguration → Speicher gehen :

![vmware.tips13](images/vmware.tips13.PNG)

Die Implementierung ist recht simpel, zuerst muss man den SSH-Dienst des ESXi aktivieren (auf der Weboberfläche muss man auf Aktion ⇒ Dienste ⇒ Secure Shell aktivieren), dann in SSH darauf verbinden (die Kennungen sind die gleichen wie bei to Zugriff auf die Schnittstelle). Dann müssen Sie nur noch tun :

``esxcli software vib install -v https://global.download.synology.com/download/Tools/NFSVAAIPlugin/1.0-0001/VMware_ESXi/esx-nfsplugin.vib -f``

Du musst haben :

![vmware.tips14](images/vmware.tips14.PNG)

Sie müssen dann den ESXi neu starten, um zu überprüfen, ob es in Ordnung ist, müssen Sie dann mit dem Thick Client in Konfiguration → Speicher zurückkehren :

![vmware.tips15](images/vmware.tips15.PNG)

# Installieren/Aktualisieren Sie den eingebetteten ESXi-Host-Client

ESXi Embedded Host Client ist eine Weboberfläche (in HTML5) des ESXi, die es in 95% der Fälle ermöglicht, auf den Thick Client zu verzichten. Es ist standardmäßig in Version 6 vorhanden.0 Update 2, aber in Version 1.0, wird dringend empfohlen, es zu aktualisieren.

Sie finden alle Informationen
[hier](https://labs.vmware.com/flings/esxi-embedded-host-client)

Um zu sehen, ob Sie das Webinterface haben, gehen Sie einfach mit Ihrem Browser zu ``IP_ESXI/ui`` Wenn Sie nichts haben, müssen Sie es installieren, Sie müssen sich zuerst in SSH mit dem ESXI verbinden und dann tun :

``esxcli software vib install -v http://download3.vmware.com/software/vmw-tools/esxui/esxui-signed-latest.vib``

Wenn Sie es bereits haben, müssen Sie es aktualisieren, um es zu aktualisieren :

``esxcli software vib update -v http://download3.vmware.com/software/vmw-tools/esxui/esxui-signed-latest.vib``

# Installation des Thick-Clients

Dieser Teil ist optional, wenn Sie USB nicht verwalten müssen.

Sie müssen mit Ihrem Internetbrowser auf die IP des ESXi gehen und dann auf den Link klicken ``Download vSphere Client for Windows`` :

![vmware.createvm](images/vmware.createvm.PNG)

Nach dem Download müssen Sie nur noch die Installation starten (ich gebe diesen Teil freiwillig weiter, da er ausreicht, um alles zu validieren).

Starten Sie dann den VMware vSphere Client, den Sie haben müssen :

![vmware.createvm1](images/vmware.createvm1.PNG)

Sie müssen nur die IP Ihres ESXi, den Benutzernamen und das Passwort eingeben und schon sind Sie darauf verbunden :

![vmware.createvm2](images/vmware.createvm2.PNG)

# ESXi-Update

Das Prozedere ist recht einfach, Sie müssen zuerst den Patch abholen, indem Sie gehen [hier](https://my.vmware.com/group/vmware/patch#search) (Sie müssen sich wahrscheinlich mit Ihrem VMware-Konto anmelden). Auf der Liste ``Select a Product`` stellen ``ESXi (Embedded and Installable)``, gegenüber lassen Sie die neueste Version von VMware und tun ``Search``. Laden Sie dann den gewünschten Patch herunter (normalerweise die neuste). Die Build-Nummer (die erste Nummer, die nicht mit KB beginnt) gibt Ihnen die Version des Patches an, die Sie mit Ihrer Build-Nummer vergleichen können.

Übertragen Sie dann die ZIP-Datei in einen Ihrer Datenspeicher und erledigen Sie dies :

``esxcli software vib update -d /vmfs/volumes/576c8ab3-fdf64d2f-091b-b8aeedeb87fb/ESXi600-201605001.zip``

> **Notiz**
>
> Ersetzen Sie den Pfad und den Namen der Zip-Datei entsprechend Ihrer Konfiguration

> **Wichtig**
>
> Achten Sie darauf, den vollständigen Pfad in die ZIP-Datei zu schreiben, sonst funktioniert es nicht

Der obige Befehl aktualisiert nur die Vibs, die es benötigen, aber Sie können die Installation aller Vibs im Paket erzwingen (also seien Sie vorsichtig, dies kann zu einem Downgrade führen) :

``esxcli software vib install -d /vmfs/volumes/576c8ab3-fdf64d2f-091b-b8aeedeb87fb/ESXi600-201605001.zip``

# NTP konfigurieren

Standardmäßig verwendet ESXi kein NTP, was bedeutet, dass es nicht pünktlich ist und dass die VMs nicht pünktlich sind, es ist sehr einfach, es zu korrigieren. Dazu müssen Sie von der Webversion auf Verwalten → System → Datum und Uhrzeit gehen, dort auf „Einstellungen ändern“ klicken" :

![vmware.tips16](images/vmware.tips16.PNG)

Und in das Feld "NTP-Server" müssen Sie setzen : ``0.debian.pool.n, 1.debian.pool.n, 2.debian.pool.n, 3.debian.pool.n, time.nist.gov``

![vmware.tips17](images/vmware.tips17.PNG)

Klicken Sie dann unter Aktionen → NTP-Dienst → Strategie auf „Mit dem Host starten und stoppen" :

![vmware.tips18](images/vmware.tips18.PNG)

Immer noch in Aktionen → NTP-Dienst klicken Sie auf "Start"

Hier sollte Ihr ESXi jetzt eine gute Zeit für sich alleine haben.

# Externer Zugriff auf ESXi

Um von außen auf den ESXi zugreifen zu können, benötigen Sie :

-   Öffnen Sie Port 443 zu ESXi's 443
-   Öffnen Sie Port 902 zu ESXi's 902

Und das ist alles. Kleiner Trick, wenn Sie einen Synology NAS haben, den Sie tun können (achten Sie darauf, ihn zu befolgen) :

-   Öffnen Sie die 443 bis 5001 des Synology NAS
-   Öffnen Sie die 80 bis 80 des NAS (nützlich, nur um die Let's-Encrypt-Zertifikate zu generieren)
-   Öffnen Sie Port 902 zu ESXi's 902

Dann auf dem NAS in der Systemsteuerung dann Anwendungsportal und Reverse Proxy (Achtung ihr braucht unbedingt DSM 6) :

![vmware.tips19](images/vmware.tips19.PNG)

Klicken Sie auf Erstellen und ablegen :

![vmware.tips20](images/vmware.tips20.PNG)

Bei „Hostname“ (auf Quellebene) müssen Sie den gewünschten DNS (zum Beispiel monesxi.mondsn.synology.me) und in "Hostname" (auf Zielebene) müssen Sie die IP des ESXi eingeben

> **Notiz**
>
> Sie können dasselbe auch tun, um auf jeedom zuzugreifen, aber diesmal geben Sie die IP von jeedom (der VM, wenn Sie virtualisiert sind) und Port 80 ein

> **Notiz**
>
> Sobald Sie dies getan haben und Ihr DNS korrekt auf das NAS verweist, können Sie mit Let's encrypt kostenlos ein gültiges SSL-Zertifikat generieren, indem Sie zu Sicherheit ⇒ Zertifikat gehen und hinzufügen. Vergessen Sie dann nicht, auf Konfigurieren zu klicken, um es Ihrem Reverse-Proxy zuzuweisen

Um dann auf Ihren ESXi zuzugreifen, müssen Sie nur mit Ihrem Browser zu Ihrem DNS oder Ihrer externen IP gehen, indem Sie /ui am Ende hinzufügen, und es ist gut.

> **Wichtig**
>
> Wenn Sie über den Reverse-Proxy des NAS gehen, funktioniert die Konsole im Webmodus der VMs nicht (weil sie über den Websocket geht), wenn Sie andererseits über VMware Remote Console gehen, sollte alles in Ordnung sein (es geht über Port 902)

> **Notiz**
>
> Es gibt auch eine Vmware Watchlist-Anwendung für Android, um auf ESXi sowie die VM-Konsolen zuzugreifen

# SSL-Zertifikat

Es ist möglich, VMware-Zertifikate direkt in Ihren PC zu importieren, um die Warnung nicht mehr zu haben.

Damit Sie müssen :

-   eine URL (DNS) haben, um auf Ihr Esxi zuzugreifen, nehmen wir hier ``esxi1.lan``
-   konfigurieren Sie den Namen Ihres esxi, in ssh darauf : ``esxcli system hostname set --host=esxi1``
-   Konfigurieren Sie den FQDN : ``esxcli system hostname set --fqdn=esxi1.lan``
-   Rufen Sie das Stammzertifikat des esxi ab, in dem es sich befindet ``/etc/vmware/ssl/castore.pem``

Klicken Sie auf der Workstation mit der rechten Maustaste, installieren Sie das Zertifikat und legen Sie es in "Vertrauenswürdige Stammzertifizierungsstelle" ab"
