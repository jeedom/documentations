# VMware – Tipps und Tricks

Das hier ist nicht wirklich eine Anleitung, sondern eher eine Sammlung von Tipps und Tricks zu VMware

# Lizenz hinzufügen

Sobald Sie sich auf der Weboberfläche angemeldet haben ``IP_ESXI/ui`` Gehen Sie auf „Verwalten“:

![vmware.tips](../images/vmware.tips.PNG)

Dann auf „Lizenzzuweisung“ und dort auf „Lizenz zuweisen“ klicken

![vmware.tips2](../images/vmware.tips2.PNG)

Und geben Sie Ihren Lizenzschlüssel ein

![vmware.tips3](../images/vmware.tips3.PNG)

> **Hinweis**
>
> Zur Erinnerung: Wenn Sie dies nicht tun, besteht die Gefahr, dass Ihr ESXi nach 60 Tagen nicht mehr funktioniert.

# Einrichten eines NFS-Datenspeichers mit einem Synology-Gerät

Hier erfahren Sie, wie Sie eine NFS-Freigabe von einem Synology-Gerät auf VMware einrichten. Dies ermöglicht es beispielsweise, die virtuellen Maschinen auf dem Synology-Gerät zu speichern (das möglicherweise über mehr Speicherplatz verfügt als der ESXi) oder die Backups der Maschinen auf das Synology-Gerät zu übertragen.

## Einrichtung des Synology-Geräts

Gehen Sie zur Systemsteuerung, dann zu „Dateidienste“ und aktivieren Sie das Kontrollkästchen „NFS aktivieren“:

![vmware.tips4](../images/vmware.tips4.PNG)

Anschließend klicken Sie auf „Gemeinsamer Ordner“, wählen dann den Ordner aus, den Sie freigeben möchten (hier „Backup“), klicken auf „Bearbeiten“, dann auf „NFS-Berechtigung“ und schließlich auf „Erstellen“ (hier habe ich bereits eine, Ihre Liste sollte leer sein):

![vmware.tips5](../images/vmware.tips5.PNG)

Geben Sie anschließend die IP-Adresse Ihres ESXi ein und wählen Sie unter „Squash“ die Option „Alle Benutzer auf admin zuordnen“ aus. Bestätigen Sie anschließend:

![vmware.tips6](../images/vmware.tips6.PNG)

Anschließend muss der Pfad der Freigabe abgerufen werden (hier ``/volume2/Backup``) :

![vmware.tips7](../images/vmware.tips7.PNG)

So, das war’s dann von der Synology-Seite, jetzt geht es weiter mit ESXi

## Konfiguration von ESXi

Gehen Sie zu „Speicher“:

![vmware.tips8](../images/vmware.tips8.PNG)

Klicken Sie anschließend auf „Neue Datenbank“:

![vmware.tips9](../images/vmware.tips9.PNG)

Wählen Sie dort „NFS-Datenbank einbinden“ aus und gehen Sie dann wie folgt vor:

![vmware.tips10](../images/vmware.tips10.PNG)

Geben Sie den Namen des zu erstellenden Datastores ein (achten Sie darauf, Leerzeichen und Sonderzeichen zu vermeiden), geben Sie die IP-Adresse unserer Synology ein, geben Sie den Pfad zur Freigabe ein (siehe oben) und bestätigen Sie abschließend:

![vmware.tips11](../images/vmware.tips11.PNG)

Klicken Sie auf „Fertigstellen“:

![vmware.tips12](../images/vmware.tips12.PNG)

Und schon sollte Ihr neuer Datenspeicher angezeigt werden (falls nicht, klicken Sie auf „Aktualisieren“).

# Hinzufügen des Synology-VAAI-Plugins für NFS-Einbindung

Durch das Hinzufügen dieses Plugins kann die Hardwarebeschleunigung auf NFS-Mounts aktiviert werden (Erläuterung siehe [hier](http://www.virtual-sddc.ovh/exploiter-les-vaai-nfs-avec-un-nas-synology/))

Um zu überprüfen, ob Sie diese Funktion haben, müssen Sie sich über den Desktop-Client anmelden (im Web-Client habe ich diese Information nicht gefunden) und zu „Konfiguration“ → „Speicher“ navigieren:

![vmware.tips13](../images/vmware.tips13.PNG)

Die Einrichtung ist recht einfach: Zunächst muss der SSH-Dienst des ESXi aktiviert werden (im Webinterface gehen Sie dazu auf „Aktion“ ⇒ „Dienste“ ⇒ „Secure Shell aktivieren“), dann stellen Sie eine SSH-Verbindung her (die Anmeldedaten sind dieselben wie für den Zugriff auf das Webinterface). Anschließend müssen Sie lediglich Folgendes tun:

``esxcli software vib install -v https://global.download.synology.com/download/Tools/NFSVAAIPlugin/1.0-0001/VMware_ESXi/esx-nfsplugin.vib -f``

Sie benötigen:

![vmware.tips14](../images/vmware.tips14.PNG)

Anschließend muss der ESXi neu gestartet werden. Um zu überprüfen, ob alles in Ordnung ist, kehren Sie mit dem Desktop-Client zu „Konfiguration → Speicher“ zurück:

![vmware.tips15](../images/vmware.tips15.PNG)

# ESXi Embedded Host Client installieren/aktualisieren

Der ESXi Embedded Host Client ist eine Weboberfläche (in HTML5) von ESXi, die es in 95 % der Fälle ermöglicht, auf den Full-Client zu verzichten. Sie ist standardmäßig in Version 6.0 Update 2 enthalten, liegt jedoch in der Version 1.0 vor; es wird dringend empfohlen, sie zu aktualisieren.

Hier finden Sie alle Informationen
[hier](https://labs.vmware.com/flings/esxi-embedded-host-client)

Um zu prüfen, ob Sie über die Weboberfläche verfügen, rufen Sie einfach mit Ihrem Browser die folgende Adresse auf: ``IP_ESXI/ui`` Wenn Sie noch nichts installiert haben, müssen Sie es installieren. Verbinden Sie sich zunächst per SSH mit dem ESXI und führen Sie dann Folgendes aus:

``esxcli software vib install -v http://download3.vmware.com/software/vmw-tools/esxui/esxui-signed-latest.vib``

Wenn Sie es bereits haben, müssen Sie zum Aktualisieren Folgendes tun:

``esxcli software vib update -v http://download3.vmware.com/software/vmw-tools/esxui/esxui-signed-latest.vib``

# Installation des Fat-Client-Programms

Dieser Abschnitt ist optional, wenn Sie den USB-Anschluss nicht verwalten müssen.

Sie müssen mit Ihrem Webbrowser die IP-Adresse des ESXi aufrufen und dann auf den Link klicken ``Download vSphere Client for Windows`` :

![vmware.createvm](../images/vmware.createvm.PNG)

Sobald der Download abgeschlossen ist, müssen Sie lediglich die Installation starten (diesen Teil überspringe ich bewusst, da man lediglich alle Schritte bestätigen muss).

Starten Sie anschließend den VMware vSphere Client. Folgendes sollte angezeigt werden:

![vmware.createvm1](../images/vmware.createvm1.PNG)

Sie müssen lediglich die IP-Adresse Ihres ESXi, den Benutzernamen und das Passwort eingeben, und schon sind Sie angemeldet:

![vmware.createvm2](../images/vmware.createvm2.PNG)

# ESXi-Update

Die Vorgehensweise ist recht einfach: Zunächst muss man den Patch herunterladen, indem man auf [hier](https://my.vmware.com/group/vmware/patch#search) (Sie müssen sich wahrscheinlich mit Ihrem VMware-Konto anmelden). In der Liste ``Select a Product`` stellen Sie ``ESXi (Embedded and Installable)``, dort die neueste Version von VMware installieren und ``Search``. Laden Sie anschließend den gewünschten Patch herunter (in der Regel den neuesten). Die Build-Nummer (die erste Nummer, nicht die mit „KB“ beginnende) gibt die Version des Patches an, die Sie mit Ihrer Build-Nummer vergleichen können.

Übertragen Sie anschließend die ZIP-Datei auf einen Ihrer Datenspeicher und führen Sie folgenden Befehl aus:

``esxcli software vib update -d /vmfs/volumes/576c8ab3-fdf64d2f-091b-b8aeedeb87fb/ESXi600-201605001.zip``

> **Hinweis**
>
> Passen Sie den Pfad und den Namen der ZIP-Datei entsprechend Ihrer Konfiguration an.

> **Wichtig**
>
> Achte darauf, den vollständigen Pfad zur ZIP-Datei anzugeben, sonst funktioniert es nicht

Der obige Befehl aktualisiert nur die VIBs, die eine Aktualisierung benötigen. Sie können jedoch die Installation aller VIBs des Pakets erzwingen (Achtung: Dies kann zu einem Downgrade führen), indem Sie Folgendes ausführen:

``esxcli software vib install -d /vmfs/volumes/576c8ab3-fdf64d2f-091b-b8aeedeb87fb/ESXi600-201605001.zip``

# NTP-Konfiguration

Standardmäßig nutzt ESXi kein NTP, was dazu führt, dass die Uhrzeit nicht stimmt und die VMs ebenfalls nicht die richtige Uhrzeit anzeigen. Das Problem lässt sich ganz einfach beheben. Rufen Sie in der Weboberfläche „Verwalten“ → „System“ → „Datum und Uhrzeit“ auf und klicken Sie dort auf „Einstellungen bearbeiten“:

![vmware.tips16](../images/vmware.tips16.PNG)

Und im Feld „NTP-Server“ muss Folgendes eingegeben werden: ``0.debian.pool.n, 1.debian.pool.n, 2.debian.pool.n, 3.debian.pool.n, time.nist.gov``

![vmware.tips17](../images/vmware.tips17.PNG)

Klicken Sie anschließend unter „Aktionen“ → „NTP-Dienst“ → „Strategie“ auf „Mit dem Host starten und stoppen“:

![vmware.tips18](../images/vmware.tips18.PNG)

Klicken Sie unter „Aktionen“ → „NTP-Dienst“ auf „Starten“.

So, Ihr ESXi sollte nun die Uhrzeit automatisch richtig einstellen.

# Externer Zugriff auf ESXi

Um von außen auf den ESXi-Server zuzugreifen, benötigen Sie:

-   Port 443 für den ESXi-Server öffnen
-   Port 902 für den ESXi-Server öffnen

Das war’s auch schon. Ein kleiner Tipp: Wenn Sie ein Synology-NAS haben, können Sie Folgendes tun (beachten Sie bitte die folgenden Schritte genau):

-   Port 443 für den Port 5001 des Synology NAS öffnen
-   Port 80 des NAS öffnen (nur zur Erstellung von Let’s Encrypt-Zertifikaten erforderlich)
-   Port 902 für den ESXi-Server öffnen

Anschließend auf dem NAS in der Systemsteuerung unter „Anwendungsportal“ und „Reverse-Proxy“ (Achtung: DSM 6 ist unbedingt erforderlich):

![vmware.tips19](../images/vmware.tips19.PNG)

Klicken Sie auf „Erstellen“ und geben Sie Folgendes ein:

![vmware.tips20](../images/vmware.tips20.PNG)

Unter „Hostname“ (auf der Quellseite) muss die gewünschte DNS-Adresse eingegeben werden (z. B. monesxi.mondsn.synology.me) und unter „Hostname“ (auf der Zielseite) die IP-Adresse des ESXi-Servers.

> **Hinweis**
>
> Sie können dasselbe auch tun, um auf Jeedom zuzugreifen, müssen dabei jedoch die IP-Adresse von Jeedom (bzw. die der virtuellen Maschine, falls Sie in einer virtualisierten Umgebung arbeiten) und den Port 80 angeben.

> **Hinweis**
>
> Sobald Sie dies erledigt haben und Ihr DNS korrekt auf den NAS verweist, können Sie mit Let’s Encrypt kostenlos ein gültiges SSL-Zertifikat erstellen, indem Sie unter „Sicherheit“ ⇒ „Zertifikat“ auf „Hinzufügen“ klicken. Vergessen Sie anschließend nicht, auf „Konfigurieren“ zu klicken, um es Ihrem Reverse-Proxy zuzuweisen.

Um anschließend auf Ihren ESXi zuzugreifen, müssen Sie lediglich in Ihrem Browser die DNS-Adresse oder die externe IP-Adresse aufrufen und am Ende „/ui“ hinzufügen – fertig.

> **Wichtig**
>
> Wenn Sie den Reverse-Proxy des NAS nutzen, funktioniert die Webkonsole der VMs nicht (da diese über WebSocket läuft); wenn Sie hingegen die VMware Remote Console nutzen, sollte alles einwandfrei funktionieren (diese läuft über Port 902).

> **Hinweis**
>
> Es gibt auch eine VMware Watchlist-App für Android, mit der man Zugriff auf den ESXi sowie auf die Konsolen der VMs erhält.

# SSL-Zertifikat

Sie können die VMware-Zertifikate direkt auf Ihren PC importieren, damit die Warnmeldung nicht mehr angezeigt wird.

In dieser Reihenfolge muss man:

-   Sie benötigen eine URL (DNS) für den Zugriff auf Ihren ESXi; hier nehmen wir ``esxi1.lan``
-   Konfigurieren Sie den Namen Ihres ESXi-Servers. Geben Sie dazu per SSH Folgendes ein: ``esxcli system hostname set --host=esxi1``
-   FQDN konfigurieren: ``esxcli system hostname set --fqdn=esxi1.lan``
-   Das Stammzertifikat des ESXi abrufen; es befindet sich in ``/etc/vmware/ssl/castore.pem``

Klicken Sie mit der rechten Maustaste auf den Eintrag und installieren Sie das Zertifikat. Fügen Sie es unter „Vertrauenswürdige Stammzertifizierungsstellen“ hinzu.
