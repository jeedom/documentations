# Jeelink-Migration

Wir werden hier sehen, wie man eine Installation mit Jeedom im Slave-Modus zu einem Jeedom mit dem Plugin "Jeedom Link" migriert". Der Jeedom-Sklavenmodus wurde aufgegeben, als Jeedom zu Version 3 wechselte.0, ist es notwendig, vor der Migration auf die neue Betriebsart fortzufahren.

# Vorbereitung vor der Migration

> **Warnung**
>
> Es ist wichtig, diese gesamte Dokumentation zu lesen, bevor Sie mit der Migration beginnen. Wichtige Informationen zu den Voraussetzungen für das Aktualisieren, Speichern und Abrufen von Informationen sind für ein gutes Verständnis der durchzuführenden Operation unerlässlich. Das Nichtlesen dieser Dokumentation kann zu destruktiven Operationen an Ihrer Installation führen. Wenn Sie einen Punkt nicht verstehen, zögern Sie nicht, Fragen im Forum zu stellen, bevor Sie mit dem Verfahren beginnen !

> **Wichtig**
>
> Achten Sie darauf, keine Geräteschleife zu erstellen, indem Sie das Plugin „Jeedom Link". Machen Sie zum Beispiel kein Equipment-X in einem Jeedom1, das in einem Jeedom2 hochgeht und dann wieder in Jeedom1 hochgeht. Es könnte deine Jeedoms zu Fall bringen !

> **Notiz**
>
> Zum besseren Lesen und Verstehen dieses Tutorials sind hier die verwendeten Begriffe aufgeführt :
>
> - **Jeedom-Ziel** : Server (Ihr ehemaliger Jeedom-Master), der die Ausrüstung des zentralisiert **Jeedom(s) Quelle(n))**  Die Screenshots auf schwarzem Hintergrund entsprechen dem **Jeedom-Ziel**.
>
> - **Jeedom-Quelle** : Server (Ihr(e) alten Jeedom-Sklaven), der Ihre Ausrüstung auf dem wieder zusammenbaut **Jeedom-Ziel**.
>
> - Die Konzepte von **Jeedom-Meister** und **Jeedom-Sklave** sind nicht mehr relevant. Der neue Betriebsmodus zum Synchronisieren von Geräten zwischen mehreren Jeedoms kann bidirektional sein. Ein Jeedom-Server kann jetzt sein **Quelle** und **Ziel** während der alte Modus nur den Aufstieg der Ausrüstung erlaubte  **der Sklave** gegenüber **der Meister**. Mit dem neuen Modus ist es auch möglich mehrere zu haben **Jeedom-Ziele** für ein selbes **Jeedom-Quelle**. Die Kommunikation zwischen Jeedoms kann jetzt auch aus der Ferne über das Internet erfolgen (DNS Jeedom oder andere).

![jeelink.migration9](images/jeelink.migration9.png)

## Konfigurationsaktualisierungen und -überprüfung

-   Aktualisieren Sie die **Jeedom-Meister** auf die neuste Version (auch wenn Ihnen kein Update angeboten wird).
-   Plugins aktualisieren **Jeedom-Meister** auf die neuesten verfügbaren Versionen.
-   Überprüfen Sie auf der Seite Health, ob die interne Netzwerkkonfiguration des **Jeedom-Meister** ist OK (Und extern, wenn Ihre **Jeedoms-Quellen** wird fern sein).

## Nützliche Informationen sammeln

Abhängig von den auf Ihrem installierten Plugins **Jeedom-Sklave**, Es ist notwendig, die folgenden Informationen abzurufen :

### Zwave-Plugin

-   Auf der Gesundheitsseite des Zwave-Plugins auf der **Jeedom-Meister**, wähle dein **Sklave** im Dropdown-Menü und machen Sie einen Screenshot, um eine Liste der daraus resultierenden Ausrüstung zu erhalten.
-   Hinweis für jedes Gerät aus **der Sklave** : übergeordnetes Objekt, Name, ID (Knoten), Modell.
-   Stellen Sie die Zwcfg-Datei wieder her : *Plugins ⇒ Plugin-Verwaltung ⇒ Z-wave*. Klicken Sie auf die rote Schaltfläche *Zwcfg* und kopieren Sie den Inhalt in eine Textdatei auf Ihrem Computer.

### RFXcom-Plugin

-   Hinweis für jedes Gerät aus **der Sklave** : übergeordnetes Objekt, Name, ID (logisch), Typ, Modell.

> **Notiz**
>
> Ein nicht erschöpfendes Informationsblatt, das für die Migration zu beachten ist, ist verfügbar [hier](images/MemoMigration.xls)

## Präventive Backups

-   Mach ein [Jeedom-Backup](https://doc.jeedom.com/de_DE/core/doc-core-backup.html) von dir **Jeedom-Meister** und dein (dein) **Jeedom-Sklaven)** und stellen Sie es (diese) auf Ihrem PC/NAS wieder her…​.
-   Mach ein [SD/Disc-Backup](https://doc.jeedom.com/de_DE/howto/doc-howto-sauvegarde.comment_faire.html#_sauvegarde_restauration_de_la_carte_microsd) von dir **Jeedom-Meister** und dein (dein) **Jeedom-Sklaven)** und rufen Sie sie auf Ihrem PC/NAS…​ ab.

# Migration

> **Notiz**
>
> Löschen Sie keine alten Geräte aus  **der Sklave** an **der Meister**.

## Installieren und aktivieren Sie das „Jeedom Link“-Plugin auf der **Jeedom-Ziel** (alter Meister).

Auf Ihrem **Jeedom-Ziel**, *Plugins ⇒ Plugin-Verwaltung* :

![jeelink.migration1](images/jeelink.migration1.png)

## Installation der **Jeedom-Quelle**

> **Notiz**
>
> Wenn Sie einen zusätzlichen Raspberry Pi und eine andere SD-Karte haben, können Sie Protokoll für Protokoll migrieren, indem Sie ein neues installieren **Jeedom-Quelle** parallel, ohne dass Sie Ihre berühren müssen **Jeedom-Sklave** vorhandenen. Indem Sie offensichtlich alle Controller von einem zum anderen verschieben.

> **Warnung**
>
> Wenn Sie Ihren vorhandenen RaspberryPi verwenden, stellen Sie bitte sicher, dass Sie das Backup-Kapitel dieser Dokumentation befolgt haben.

> **Notiz**
>
> Wenn Sie den vorhandenen Raspberry Pi verwenden, der derzeit a ist  **Jeedom-Sklave**, Wir empfehlen Ihnen, eine neue SD/microSD-Karte zu verwenden. Auf diese Weise können Sie bei Bedarf problemlos zurückverfolgen.

-   Installieren Sie ein neues Jeedom auf einer neuen SD-Karte (Ob Sie Ihre **Jeedom-Sklave** vorhanden oder für einen neuen Raspberry Pi), indem Sie den Anweisungen folgen [Installationsdokumentation](https://doc.jeedom.com/de_DE/installation/doc-installation.html).
-   Aktualisieren Sie die **Jeedom-Quelle** auf die neuste Version (auch wenn Ihnen kein Update angeboten wird).
-   Überprüfen Sie auf der Seite Health, ob die interne Netzwerkkonfiguration (und ggf. die externe) des **Jeedom-Quelle** ist in Ordnung.

## Konfigurieren der Jeedom-Quelle

-   Ändern Sie das Passwort des Admin-Benutzers oder/und konfigurieren Sie einen neuen Benutzer.
-   Konfigurieren Sie Ihr Jeedom Market-Konto (*Konfiguration ⇒ Updates und Dateien ⇒ Reiter „Markt“"*). Klicken Sie nach dem Speichern auf Test, um die Eingabe Ihrer Jeedom Market-Identifikatoren zu validieren).
-   Installation und Aktivierung des "Jeedom Link"-Plugins auf dem neuen **Jeedom-Quelle**.
![jeelink.migration2](images/jeelink.migration2.png)
-   Installation und Aktivierung der Plugins, die Sie verwenden möchten. (Es ist ratsam, sie einzeln auszuführen und jedes Mal gut zu überprüfen, ob die Abhängigkeiten und möglichen Daemons in Ordnung sind).
-   Erstellen Sie die Baumstruktur der Objekte (nur diejenigen, die für Sie nützlich sein werden) des **Jeedom-Ziel** (Alter Meister) auf Ihrem neuen **Jeedom-Quelle** (Ehemaliger Sklave).

## Konfiguration der Geräte auf der **Jeedom-Quelle**

Um die auf dem vorhandenen Gerät zu senden **Jeedom-Quelle** zum **Jeedom-Ziel** über das Plugin "Jeedom Link", ist es erforderlich, dass letzteres auf Ihrem neuen bereits betriebsbereit ist **Jeedom-Quelle**.

> **Notiz**
>
> Denken Sie nach und nach darüber nach, die Protokollierung von Info-Befehlen für jedes Gerät auf der zu deaktivieren **Jeedom-Quelle** um die SD-Karte von diesem zu speichern (Die Historisierung erfolgt auf der  **Jeedom-Ziel**).

> **Notiz**
>
> Auf der können Sie nach und nach Ausrüstungen nachgebildeten Objekten zuweisen **Jeedom-Quelle** damit sie später automatisch in das richtige Objekt auf der eingefügt werden **Jeedom-Ziel** bei der Deklaration im "Jeedom Link"-Plugin". Im Falle einer Doppelbezeichnung mit bereits in den Objekten vorhandener Ausstattung der **Jeedom-Ziel**,  Das Plugin fügt dem Gerätenamen "Remote XXXX" hinzu.

### Zwave-Plugin

-   Klicken Sie auf die Schaltfläche „Synchronisieren“, um die mit Ihrer Steuerung verknüpften Module abzurufen. (Sie werden daran erinnert)
-   Datei ersetzen *Zwcfg* : *Plugins ⇒ Plugin-Verwaltung ⇒ Z-wave*. Klicken Sie auf die rote Schaltfläche *Zwcfg* und fügen Sie den Inhalt der zuvor auf Ihrem Computer erstellten Textdatei ein. *Änderungen speichern*.
-   Benennen Sie Ihre Module um und platzieren Sie sie anhand Ihres Migrationsmemos in den gewünschten Objekten.

### Rfxcom-Plugin :

#### Sonden, Sensoren, Detektoren,…​

-   Versetzen Sie das Plugin in den Inklusionsmodus.
-   Wiederholen Sie die Aufnahme, bis Sie alle Ihre Geräte dieses Typs erhalten haben.
-   Benennen Sie Ihre Ausrüstung um und platzieren Sie sie anhand Ihres Migrationsmemos in den gewünschten Objekten.

#### Aktoren, Steckdosen, …​

-   Füge neue Ausrüstung hinzu.
-   Definieren Sie anhand Ihres Migrationsmemos Name, ID, übergeordnetes Objekt, Gerätetyp und Modell.
-   Wiederholen Sie dies für alle Ihre Geräte dieses Typs.

## Konfiguration des Plugins „Jeedom Link“"

Das Plugin "Jeedom Link" installiert auf der **Jeedom-Quelle** ermöglicht das Anheben von Geräten auf dem **Jeedom-Ziel** (Ihr ehemaliger Meister).

> **Notiz**
>
> Erinnerung, zum besseren Lesen und Verstehen dieses Tutorials :
>
> - Die Screenshots auf schwarzem Hintergrund entsprechen dem **Jeedom-Ziel**.
> - Die Screenshots auf weißem Hintergrund entsprechen dem **Jeedom-Quelle**.

Auf der **Jeedom-Quelle**,
[konfigurieren](https://doc.jeedom.com/de_DE/plugins/jeelink/jeelink)
das „Jeedom Link“-Plugin durch Angabe :

-   Der Name von **Jeedom-Ziel**.
-   Die IP-Adresse oder der DNS-Name des **Jeedom-Ziel**.
-   Der API-Schlüssel der **Jeedom-Ziel**.

Und speichern Sie die Konfiguration.

![jeelink.migration3](images/jeelink.migration3.png)

Auf der Registerkarte *Abtretung*, fügen Sie die Ausrüstung hinzu, die Sie hochladen möchten **Jeedom-Ziel**.

![jeelink.migration4](images/jeelink.migration4.png)

Klicke auf *Ausrüstung hinzufügen* Wählen Sie das hinzuzufügende Objekt und die Ausrüstung aus :

![jeelink.migration5](images/jeelink.migration5.png)

Nach dem Aktualisieren der Seite *Meine JeeLinks* aus **Jeedom-Ziel**, Sie sollten die automatische Erstellung der Ausrüstung sehen :

![jeelink.migration6](images/jeelink.migration6.png)

Wie jede Jeedom-Ausrüstung können Sie die Ausrüstung, ihre Steuerung usw. aktivieren/deaktivieren und anzeigen oder nicht anzeigen oder die Kategorie ändern :

![jeelink.migration7](images/jeelink.migration7.png)

Auf der Registerkarte *Aufträge*, Sie greifen auf alle Parameter der Gerätesteuerung zu :

![jeelink.migration8](images/jeelink.migration8.png)

## Wiederherstellung der Geschichte

> **Notiz**
>
> Zu tun am **Jeedom-Ziel** (Alter Meister) für jeden Info-Befehl der Ausrüstung des Alten **Sklave** dessen Geschichte wir abrufen möchten.

-   Gehen Sie zur Bestellkonfiguration (*Rechtes Zahnrad*).
-   Gehen Sie zur Registerkarte *Erweiterte Einrichtung*.
-   Klicken Sie auf die Schaltfläche *Kopieren Sie den Verlauf dieses Befehls in einen anderen Befehl*.
-   Suchen Sie nach dem entsprechenden Befehl des neuen entsprechenden JeeLink-Geräts und bestätigen Sie.

## Austausch alter Slave-Geräte in Szenarien/virtuell/…​

> **Notiz**
>
> Zu tun am **Jeedom-Ziel** (Ehemaliger Meister) für jeden Info-/Aktionsbefehl der Ausrüstung des Ehemaligen **Sklave** deren Vorkommen wir in den Szenarien/virtuell/… ersetzen wollen

-   Gehen Sie zur Bestellkonfiguration (*Rechtes Zahnrad*).
-   Gehen Sie zur Registerkarte *Information*.
-   Klicken Sie auf die Schaltfläche *Ersetzen Sie diesen Befehl durch den Befehl*.
-   Suchen Sie nach dem entsprechenden Befehl des neuen entsprechenden JeeLink-Geräts und bestätigen Sie.

## Abrufen erweiterter Befehlsanzeigekonfigurationen

> **Notiz**
>
> Zu tun am **Jeedom-Ziel** (Ehemaliger Meister) für jeden Info-/Aktionsbefehl der Ausrüstung des Ehemaligen **Sklave** dessen erweiterte Anzeigeeinstellungen wir abrufen möchten.

-   Gehen Sie zur Bestellkonfiguration (*Rechtes Zahnrad*).
-   Klicken Sie auf die Schaltfläche *zu bewerben*.
-   Suchen und wählen Sie den entsprechenden Befehl des entsprechenden neuen JeeLink-Geräts und bestätigen Sie.

## Erweiterte Befehlskonfigurationen kopieren

> **Notiz**
>
> Zu tun am **Jeedom-Ziel** (Ehemaliger Meister) für jeden Info-/Aktionsbefehl der Ausrüstung des Ehemaligen **Sklave** dessen erweiterte Konfiguration wir abrufen möchten.

-   Keine einfache Lösung auf dieser Ebene, Sie müssen zwei Registerkarten/Fenster in Ihrem Browser geöffnet haben.
-   Alte Ausrüstungsaufträge öffnen **Sklave** in einem Tab (Jeedom Target).
-   Öffnen Sie die Bestellungen für jeeLink-Ausrüstung im anderen Reiter (Jeedom Target).
-   Und kopieren Sie die gewünschten Parameter von Hand.

> **Notiz**
>
> Um eine mehrfache Rückkehr zum selben Befehl zu vermeiden, werden die Schritte 2.6→2.9 können hintereinander in der gleichen Reihenfolge gemacht werden, bevor Sie zu den folgenden übergehen.

> **Warnung**
>
> Die Wechselwirkungen auf der **Jeedom-Ziel** kann nicht durch Ausrüstung von a gestartet werden **Jeedom-Quelle** über das Plugin „Jeedom Link“ übertragen".

# Haushalt auf der **Jeedom-Ziel**

> **Notiz**
>
> Nachdem Sie mit Sicherheit bestätigt haben, dass Ihre Ausrüstung/Szenarien/Interaktionen/virtuell/…​. mit dem neuen jeelink-system richtig funktionieren, kannst du aufräumen.

-   Entfernen Sie Restausrüstung von der alten **Jeedom-Sklave**.
-   Deaktivieren und löschen Sie Plugins, die für Sie nicht mehr nützlich sind (Diejenigen, die Sie nur auf dem Slave-Gerät hatten).
-   Benennen Sie im Plugin "Jeedom Link" die Geräte um, deren Name mit "remote XXXX".
-   Löschen Sie auf der Jeedom Network-Seite die alte **Jeedom-Sklave**.
