# Jeelink-Migration

Wir werden hier sehen, wie eine Installation mit Jeedom im Slave-Modus mit dem Plugin "Jeedom Link" auf ein Jeedom migriert wird". Der Jeedom-Slave-Modus wird beim Übergang von Jeedom zu Version 3 abgebrochen.0 ist es notwendig, vor der Migration in den neuen Betriebsmodus fortzufahren.

# Vorbereitung vor der Migration

> **Warnung**
>
> Es ist wichtig, die gesamte Dokumentation zu lesen, bevor Sie mit der Migration beginnen. Wichtige Informationen zu den Voraussetzungen für das Aktualisieren, Speichern und Wiederherstellen von Informationen sind für das ordnungsgemäße Verständnis des auszuführenden Vorgangs von wesentlicher Bedeutung. Wenn Sie diese Dokumentation nicht lesen, kann dies zu zerstörerischen Vorgängen bei Ihrer Installation führen. Wenn Sie einen Punkt nicht verstehen, zögern Sie nicht, Fragen im Forum zu stellen, bevor Sie mit dem Verfahren beginnen !

> **Wichtig**
>
> Achten Sie darauf, dass Sie keine Geräte schleifen, indem Sie das Plugin "Jeedom Link" konfigurieren". Führen Sie zum Beispiel kein Equipment-X in einem Jeedom1 aus, das in einem Jeedom2 aufsteigt und dann in Jeedom1 wieder aufsteigt. Es könnte deine Jeedoms fallen lassen !

> **Notiz**
>
> Zum besseren Lesen und Verstehen dieses Tutorials werden hier die Begriffe verwendet :
>
> - **Jeedom Ziel** : Server (Ihr alter Jeedom Master), der die Ausrüstung des zentralisiert **Jeedom (s) Quelle (n))**  Die Screenshots auf schwarzem Hintergrund entsprechen dem **Jeedom Ziel**.
>
> - **Jeedom Source** : Server (Ihr / Ihr alter Jeedom Slave (s)), der Ihre Ausrüstung auf dem wieder zusammenbaut **Jeedom Ziel**.
>
> - Die Begriffe von **Jeedom Meister** und **Jeedom Sklave** nicht mehr relevant. Die neue Betriebsart der Gerätesynchronisation zwischen mehreren Jeedoms kann bidirektional sein. Ein Jeedom-Server kann jetzt sein **Quelle** und **Ziel** während der alte Modus nur den Aufstieg der Ausrüstung von erlaubte  **der Sklave** zu **der Meister**. Mit dem neuen Modus ist es auch möglich, mehrere zu haben **Jeedom Ziele** für das gleiche **Jeedom Source**. Die Kommunikation zwischen Jeedoms kann jetzt auch über das Internet (Jeedom DNS oder andere) erfolgen).

![jeelink.migration9](images/jeelink.migration9.png)

## Konfigurationsaktualisierungen und Überprüfung

-   Aktualisieren Sie die **Jeedom Meister** auf die neueste Version (auch wenn Ihnen kein Update angeboten wird).
-   Plugins von aktualisieren **Jeedom Meister** die neuesten verfügbaren Versionen.
-   Überprüfen Sie auf der Seite Health die interne Netzwerkkonfiguration des **Jeedom Meister** ist OK (und extern, wenn Ihr **Jeedoms Quellen** wird entfernt sein).

## Nützliche Informationen sammeln

Abhängig von den auf Ihrem installierten Plugins **Jeedom Sklave**, Die folgenden Informationen müssen abgerufen werden :

### Zwave Plugin

-   Auf der Gesundheitsseite des Zwave-Plugins auf der **Jeedom Meister**, wähle dein **Sklave** im Dropdown-Menü und machen Sie einen Screenshot, um eine Liste der Geräte zu erhalten, die von ihm kommen.
-   Hinweis für jedes Gerät, das von kommt **der Sklave** : übergeordnetes Objekt, Name, ID (Knoten), Modell.
-   Zwcfg-Datei wiederherstellen : *Plugins ⇒ Plugin Management ⇒ Z-Welle*. Klicken Sie auf die rote Schaltfläche *Zwcfg* und kopieren Sie den Inhalt in eine Textdatei auf Ihrem Computer.

### RFXcom Plugin

-   Hinweis für jedes Gerät, das von kommt **der Sklave** : übergeordnetes Objekt, Name, ID (logisch), Typ, Modell.

> **Notiz**
>
> Ein nicht erschöpfendes Informationsblatt, das für die Migration zu beachten ist, ist verfügbar [hier](images/MemoMigration.xls)

## Vorbeugende Backups

-   Mach a [Jeedom Backup](https://doc.jeedom.com/de_DE/core/doc-core-backup.html) von dir **Jeedom Meister** und dein (dein) **Jeedom Slave (s)** und stellen Sie es auf Ihrem PC / NAS wieder her….
-   Mach a [SD / Disk-Backup](https://doc.jeedom.com/de_DE/howto/doc-howto-sauvegarde.comment_faire.html#_sauvegarde_restauration_de_la_carte_microsd) von dir **Jeedom Meister** und dein (dein) **Jeedom Slave (s)** und stellen Sie sie auf Ihrem PC / NAS wieder her….

# Migration

> **Notiz**
>
> Löschen Sie keine alten Geräte aus  **der Sklave** auf **der Meister**.

## Installieren und aktivieren Sie das Plugin "Jeedom Link" auf der **Jeedom Ziel** (ehemaliger Meister).

Auf deine **Jeedom Ziel**, *Plugins ⇒ Verwaltung von Plugins* :

![jeelink.migration1](images/jeelink.migration1.png)

## Installation von **Jeedom Source**

> **Notiz**
>
> Wenn Sie einen zusätzlichen Raspberry Pi und eine andere SD-Karte haben, können Sie ein Protokoll nach dem anderen migrieren, indem Sie ein neues installieren **Jeedom Source** parallel, ohne dass Sie Ihre berühren müssen **Jeedom Sklave** bestehenden. Offensichtlich durch Verschieben möglicher Controller von einem zum anderen.

> **Warnung**
>
> Wenn Sie Ihr vorhandenes RaspberryPi verwenden, lesen Sie bitte das Sicherungskapitel dieser Dokumentation.

> **Notiz**
>
> Wenn Sie den vorhandenen Raspberry Pi verwenden, der derzeit ein  **Jeedom Sklave**, Wir empfehlen Ihnen, eine neue SD / microSD-Karte zu verwenden. Auf diese Weise können Sie bei Bedarf problemlos zurückverfolgen.

-   Installieren Sie ein neues Jeedom auf einer neuen SD-Karte (ob Sie Ihre einlegen möchten **Jeedom Sklave** vorhanden oder für einen neuen Raspberry Pi) durch Befolgen der [Installationsdokumentation](https://doc.jeedom.com/de_DE/installation/doc-installation.html).
-   Aktualisieren Sie die **Jeedom Source** auf die neueste Version (auch wenn Ihnen kein Update angeboten wird).
-   Überprüfen Sie auf der Seite Health die interne Netzwerkkonfiguration (und gegebenenfalls die externe) des **Jeedom Source** ist ok.

## Konfiguration der Jeedom-Quelle

-   Ändern Sie das Passwort des Administrators oder / und konfigurieren Sie einen neuen Benutzer.
-   Konfigurieren Sie Ihr Jeedom Market-Konto (*Konfiguration ⇒ Updates und Dateien ⇒ Registerkarte "Markt""*). Klicken Sie nach dem Speichern auf Test, um die Eingabe Ihrer Jeedom Market-IDs zu bestätigen).
-   Installation und Aktivierung des Plugins "Jeedom Link" auf dem neuen **Jeedom Source**.
![jeelink.migration2](images/jeelink.migration2.png)
-   Installation und Aktivierung von Plugins, die Sie verwenden möchten. (Es ist ratsam, sie einzeln durchzuführen und jedes Mal zu überprüfen, ob die Abhängigkeiten und Dämonen in Ordnung sind).
-   Erstellen Sie den Baum der Objekte (nur die, die für Sie nützlich sein werden) des **Jeedom Ziel** (Alter Meister) auf Ihrem neuen **Jeedom Source** (Ehemaliger Sklave).

## Konfiguration der Ausrüstung auf dem **Jeedom Source**

Senden von Geräten auf dem **Jeedom Source** in Richtung **Jeedom Ziel** über das Plugin "Jeedom Link" muss es auf Ihrem neuen bereits betriebsbereit sein **Jeedom Source**.

> **Notiz**
>
> Denken Sie daran, die Protokollierung von Info-Befehlen für jedes Gerät auf dem Gerät zu deaktivieren **Jeedom Source** um die SD-Karte davon zu speichern (Historisierung wird auf dem durchgeführt  **Jeedom Ziel**).

> **Notiz**
>
> Sie können die Ausrüstung auch schrittweise den auf dem neu erstellten Objekten zuweisen **Jeedom Source** damit sie später automatisch in das richtige Objekt auf dem platziert werden **Jeedom Ziel** bei der Deklaration im Jeedom Link Plugin". Im Falle eines doppelten Namens mit Geräten, die bereits in den Objekten des **Jeedom Ziel**,  Das Plugin fügt dem Namen des Geräts "remote XXXX" hinzu.

### Zwave Plugin

-   Klicken Sie auf die Schaltfläche "Synchronisieren", um die Ihrem Controller zugeordneten Module abzurufen. (Sie werden in Erinnerung behalten)
-   Datei ersetzen *Zwcfg* : *Plugins ⇒ Plugin Management ⇒ Z-Welle*. Klicken Sie auf die rote Schaltfläche *Zwcfg* und fügen Sie den Inhalt der zuvor auf Ihrem Computer erstellten Textdatei ein. *Änderungen speichern*.
-   Benennen Sie Ihre Module um und platzieren Sie sie mithilfe Ihres Migrationsprotokolls in den gewünschten Objekten.

### RFXcom Plugin :

#### Sonden, Sensoren, Detektoren,…

-   Schalten Sie das Plugin in den Einschlussmodus.
-   Wiederholen Sie die Aufnahme, bis Sie alle Geräte dieses Typs haben.
-   Benennen Sie Ihre Geräte um und platzieren Sie sie mithilfe Ihres Migrationsprotokolls in den gewünschten Objekten.

#### Aktoren, Steckdosen,…

-   Neue Ausrüstung hinzufügen.
-   Definieren Sie den Namen, die ID, das übergeordnete Objekt, den Gerätetyp und das Modell mithilfe Ihres Migrationsprotokolls.
-   Wiederholen Sie dies für alle Ihre Geräte dieses Typs.

## Konfiguration des "Jeedom Link Plugins""

Das "Jeedom Link" Plugin ist auf dem installiert **Jeedom Source** ermöglicht die Aufrüstung der Ausrüstung auf die **Jeedom Ziel** (Dein alter Meister).

> **Notiz**
>
> Zur besseren Lektüre und zum besseren Verständnis dieses Tutorials :
>
> - Die Screenshots auf schwarzem Hintergrund entsprechen dem **Jeedom Ziel**.
> - Die Screenshots auf weißem Hintergrund entsprechen **Jeedom Source**.

Auf dem **Jeedom Source**,
[Projektierungs](https://doc.jeedom.com/de_DE/plugins/jeelink/jeelink)
das "Jeedom Link" Plugin durch Angabe :

-   Der Name von **Jeedom Ziel**.
-   Die IP-Adresse oder der DNS-Name des **Jeedom Ziel**.
-   Der API-Schlüssel von **Jeedom Ziel**.

Und speichern Sie die Konfiguration.

![jeelink.migration3](images/jeelink.migration3.png)

In der Registerkarte *Zuordnung*, Fügen Sie die Ausrüstung hinzu, zu der Sie zurückkehren möchten **Jeedom Ziel**.

![jeelink.migration4](images/jeelink.migration4.png)

Klicken Sie auf *Ausrüstung hinzufügen* Wählen Sie das Objekt und die Ausrüstung aus, die hinzugefügt werden sollen :

![jeelink.migration5](images/jeelink.migration5.png)

Nach dem Aktualisieren der Seite *Meine Jeelinks* die **Jeedom Ziel**, Sie sollten die automatische Erstellung der Ausrüstung sehen :

![jeelink.migration6](images/jeelink.migration6.png)

Wie bei allen Jeedom-Geräten können Sie das Gerät, seine Steuerelemente usw. aktivieren / deaktivieren und anzeigen oder nicht oder die Kategorie ändern :

![jeelink.migration7](images/jeelink.migration7.png)

In der Registerkarte *Befehle*, Sie greifen auf alle Parameter der Gerätesteuerung zu :

![jeelink.migration8](images/jeelink.migration8.png)

## Historische Erholung

> **Notiz**
>
> Weiter machen **Jeedom Ziel** (Ehemaliger Meister) für jeden Infobefehl der Ausrüstung des ersteren **Sklave** wessen Geschichte wir wiederherstellen wollen.

-   Gehen Sie zur Bestellkonfiguration (*Zahnrad rechts*).
-   Gehen Sie zur Registerkarte *Erweiterte Konfiguration*.
-   Klicken Sie auf die Schaltfläche *Kopieren der Chronik von diesem Befehls auf einen anderen Befehl*.
-   Suchen Sie die entsprechende Bestellung für das entsprechende neue JeeLink-Gerät und bestätigen Sie.

## Ersatz alter Slave-Geräte in Szenarien / virtuell /…

> **Notiz**
>
> Weiter machen **Jeedom Ziel** (Ehemaliger Meister) für jeden Info- / Aktionsbefehl der Ausrüstung des ersteren **Sklave** wessen Vorkommen wir in Szenarien / virtual /… ersetzen wollen

-   Gehen Sie zur Bestellkonfiguration (*Zahnrad rechts*).
-   Gehen Sie zur Registerkarte *Information*.
-   Klicken Sie auf die Schaltfläche *Diesen Befehl durch den Befehl ersetzen*.
-   Suchen Sie die entsprechende Bestellung für das entsprechende neue JeeLink-Gerät und bestätigen Sie.

## Abrufen erweiterter Anzeigekonfigurationen für Befehle

> **Notiz**
>
> Weiter machen **Jeedom Ziel** (Ehemaliger Meister) für jeden Info- / Aktionsbefehl der Ausrüstung des ersteren **Sklave** welche wir erweiterte Anzeigeeinstellungen abrufen möchten.

-   Gehen Sie zur Bestellkonfiguration (*Zahnrad rechts*).
-   Klicken Sie auf die Schaltfläche *Übernehmen*.
-   Suchen Sie den entsprechenden Befehl für das entsprechende neue JeeLink-Gerät, wählen Sie ihn aus und bestätigen Sie ihn.

## Kopie der erweiterten Befehlskonfigurationen

> **Notiz**
>
> Weiter machen **Jeedom Ziel** (Ehemaliger Meister) für jeden Info- / Aktionsbefehl der Ausrüstung des ersteren **Sklave** die wir wollen die erweiterte Konfiguration wiederherstellen.

-   Auf dieser Ebene ist dies keine einfache Lösung. In Ihrem Browser müssen zwei Registerkarten / Fenster geöffnet sein.
-   Offene Bestellungen für Altgeräte **Sklave** in einer Registerkarte (Jeedom Target).
-   Öffnen Sie die Steuerelemente für jeeLink-Geräte auf der anderen Registerkarte (Jeedom Target)).
-   Und kopieren Sie die gewünschten Parameter von Hand.

> **Notiz**
>
> Um zu vermeiden, dass derselbe Befehl mehrmals wiederholt wird, führen Sie die Schritte 2.6 → 2 aus.9 kann nacheinander in derselben Reihenfolge ausgeführt werden, bevor mit dem Folgenden fortgefahren wird.

> **Warnung**
>
> Interaktionen auf dem **Jeedom Ziel** kann nicht mit Geräten von a gestartet werden **Jeedom Source** über das Jeedom Link Plugin übertragen".

# Haushalt auf der **Jeedom Ziel**

> **Notiz**
>
> Nachdem Sie mit Sicherheit überprüft haben, dass Ihre Geräte / Szenarien / Interaktionen / virtuell /…. Arbeiten Sie gut mit dem neuen Jeelink-System, können Sie die Reinigung durchführen.

-   Entfernen Sie restliche Ausrüstung von der alten **Jeedom Sklave**.
-   Deaktivieren und löschen Sie Plugins, die für Sie nicht mehr nützlich sind (für die Sie nur Geräte auf dem Slave hatten).
-   Benennen Sie im Plugin "Jeedom Link" das Gerät um, dessen Name mit "remote" enden könnte XXXX".
-   Löschen Sie auf der Seite Jeedom Network die alte **Jeedom Sklave**.
