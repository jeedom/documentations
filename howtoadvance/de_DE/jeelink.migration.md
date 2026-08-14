# Migration zu Jeelink

Hier erfahren Sie, wie Sie eine Jeedom-Installation im Slave-Modus auf ein Jeedom mit dem Plugin „Jeedom Link“ migrieren können. Da der Jeedom-Slave-Modus mit dem Übergang zu Jeedom Version 3.0 eingestellt wird, ist es notwendig, vorab die Migration auf den neuen Betriebsmodus durchzuführen.

# Vorbereitungen vor der Migration

> **Warnung**
>
> Es ist wichtig, diese Dokumentation vollständig durchzulesen, bevor Sie mit der Migration beginnen. Wichtige Informationen zu den Voraussetzungen für das Update sowie zur Datensicherung und -wiederherstellung sind für das richtige Verständnis des durchzuführenden Vorgangs unerlässlich. Wenn Sie diese Dokumentation nicht lesen, kann dies zu schwerwiegenden Schäden an Ihrer Anlage führen. Sollten Sie einen Punkt nicht verstehen, zögern Sie bitte nicht, im Forum Fragen zu stellen, bevor Sie mit dem Vorgang beginnen!

> **Wichtig**
>
> Achten Sie bei der Konfiguration des Plugins „Jeedom Link“ unbedingt darauf, keine Geräteschleifen zu bilden. Richten Sie beispielsweise kein Gerät X in einem Jeedom1 ein, das an ein Jeedom2 weitergeleitet wird und dann erneut an das Jeedom1 zurückgeleitet wird. Dies könnte zum Ausfall Ihrer Jeedom-Systeme führen!

> **Hinweis**
>
> Um das Verständnis dieses Tutorials zu erleichtern, finden Sie hier eine Liste der verwendeten Begriffe:
>
> - **Ziel-Jeedom**: Server (Ihr ehemaliger Jeedom-Master), der die Geräte des/der **Quell-Jeedom(s)** zentral verwaltet. Die Screenshots mit schwarzem Hintergrund beziehen sich auf das **Ziel-Jeedom**.
>
> - **Jeedom-Quelle**: Server (Ihr(e) ehemaliger(e) Jeedom-Slave(s)), der Ihre Geräte an den **Jeedom-Zielserver** meldet.
>
> - Die Begriffe **Jeedom-Master** und **Jeedom-Slave** sind nicht mehr aktuell. Der neue Synchronisationsmodus für Geräte zwischen mehreren Jeedom-Systemen kann bidirektional sein. Ein Jeedom-Server kann nun sowohl **Quelle** als auch **Ziel** sein, während im alten Modus nur die Übertragung von Geräten vom **Slave** zum **Master** möglich war. Mit dem neuen Modus ist es zudem möglich, mehrere **Jeedom-Ziele** für ein und dieselbe **Jeedom-Quelle** zu haben. Die Kommunikation zwischen den Jeedoms kann nun auch aus der Ferne über das Internet erfolgen (Jeedom-DNS oder andere).

![jeelink.migration9](../images/jeelink.migration9.png)

## Updates und Konfigurationsprüfung

-   Aktualisieren Sie den **Jeedom-Master** auf die neueste Version (auch wenn kein Update angeboten wird).
-   Aktualisieren Sie die Plugins des **Jeedom Master** auf die neuesten verfügbaren Versionen.
-   Überprüfen Sie auf der Seite „Gesundheit“, ob die interne Netzwerkkonfiguration des **Jeedom-Masters** in Ordnung ist (sowie die externe, falls Ihre **Jeedom-Quellen** an entfernten Standorten liegen).

## Zusammenstellung nützlicher Informationen

Je nach den auf Ihrem **Jeedom-Slave** installierten Plugins müssen folgende Informationen abgerufen werden:

### Z-Wave-Plugin

-   Wählen Sie auf der Seite „Status“ des Z-Wave-Plugins auf dem **Jeedom-Master** Ihren **Slave** aus dem Dropdown-Menü aus und erstellen Sie einen Screenshot, um eine Liste der von diesem Slave stammenden Geräte zu erhalten.
-   Notieren Sie für jedes Gerät von **l’Esclave**: das übergeordnete Objekt, den Namen, die ID (Node) und das Modell.
-   Rufen Sie die Zwcfg-Datei ab: *Plugins ⇒ Plugin-Verwaltung ⇒ Z-Wave*. Klicken Sie auf die rote Schaltfläche *Zwcfg* und kopieren Sie den Inhalt in eine Textdatei auf Ihrem Computer.

### RFXcom-Plugin

-   Notieren Sie für jedes Gerät, das von **l’Esclave** stammt: das übergeordnete Objekt, den Namen, die ID (logisch), den Typ und das Modell.

> **Hinweis**
>
> Eine nicht vollständige Übersicht über die für die Migration zu beachtenden Informationen ist verfügbar [hier](../images/MemoMigration.xls)

## Vorbeugende Datensicherungen

-   Eine [Jeedom-Sicherung](/core/backup) Ihrer **Jeedom-Master** und Ihrer **Jeedom-Slave(s)** und diese auf Ihrem PC/NAS abrufen…​.
-   Eine [Sicherung auf SD-Karte/Festplatte](/howto/sauvegarde.comment_faire#_sauvegarde_restauration_de_la_carte_microsd) Ihres **Jeedom-Master** und Ihres (Ihrer) **Jeedom-Slaves** und diese auf Ihrem PC/NAS abrufen…​.

# Migration

> **Hinweis**
>
> Die alten Geräte von **dem Slave** auf **dem Master** vorerst nicht entfernen.

## Installieren und aktivieren Sie das Plugin „Jeedom Link“ auf dem **Ziel-Jeedom** (ehemals Master).

Auf Ihrem **Jeedom-Zielserver**, *Plugins ⇒ Plugin-Verwaltung*:

![jeelink.migration1](../images/jeelink.migration1.png)

## Installation von **Jeedom Source**

> **Hinweis**
>
> Wenn Sie über einen zusätzlichen Raspberry Pi und eine weitere SD-Karte verfügen, können Sie die Migration Protokoll für Protokoll durchführen, indem Sie parallel dazu ein neues **Jeedom-Source** installieren, ohne Ihr bestehendes **Jeedom-Slave** zu verändern. Dabei verschieben Sie natürlich nach und nach die jeweiligen Steuerungen von einem auf das andere.

> **Warnung**
>
> Wenn Sie Ihren vorhandenen Raspberry Pi verwenden, stellen Sie bitte sicher, dass Sie die Anweisungen im Kapitel „Sicherung“ dieser Dokumentation befolgt haben.

> **Hinweis**
>
> Wenn Sie den vorhandenen Raspberry Pi verwenden, der derzeit als **Jeedom-Slave** fungiert, empfehlen wir Ihnen, eine neue SD-/microSD-Karte zu verwenden. So können Sie bei Bedarf problemlos einen Rückschritt durchführen.

-   Installieren Sie ein neues Jeedom auf einer neuen SD-Karte (sei es für Ihren bestehenden **Jeedom-Slave** oder für einen neuen Raspberry Pi), indem Sie die folgenden Schritte befolgen: [Installationsanleitung](/installation).
-   Aktualisieren Sie die **Jeedom-Quelle** auf die neueste Version (auch wenn kein Update angeboten wird).
-   Überprüfen Sie auf der Seite „Status“, ob die interne (und gegebenenfalls externe) Netzwerkkonfiguration des **Jeedom Source** in Ordnung ist.

## Einrichtung der Jeedom-Quelle

-   Das Passwort des Benutzers „admin“ ändern und/oder einen neuen Benutzer anlegen.
-   Konfigurieren Sie Ihr Jeedom Market-Konto (*Einstellungen ⇒ Updates und Dateien ⇒ Registerkarte „Market“*). Klicken Sie nach dem Speichern auf „Testen“, um die Eingabe Ihrer Jeedom Market-Anmeldedaten zu überprüfen.
-   Installation und Aktivierung des Plugins „Jeedom Link“ auf dem neuen **Jeedom Source**.
![jeelink.migration2](../images/jeelink.migration2.png)
-   Installation und Aktivierung der Plugins, die Sie verwenden möchten. (Es wird empfohlen, diese nacheinander zu installieren und dabei jedes Mal sorgfältig zu überprüfen, ob die Abhängigkeiten und eventuelle Daemons in Ordnung sind.)
-   Erstellen Sie die Objektstruktur (nur die Objekte, die Sie benötigen) des **Ziel-Jeedom** (ehemals Master) auf Ihrem neuen **Quell-Jeedom** (ehemals Slave) neu.

## Konfiguration der Geräte auf **Jeedom Source**

Um ein Gerät von der **Jeedom-Quelle** über das Plugin „Jeedom Link“ an die **Jeedom-Zielinstanz** zu übertragen, muss dieses Plugin bereits auf Ihrer neuen **Jeedom-Quelle** aktiv sein.

> **Hinweis**
>
> Denken Sie daran, nach und nach die Protokollierung der Befehle und Informationen für jedes Gerät auf dem **Jeedom-Quellserver** zu deaktivieren, um dessen SD-Karte zu schonen (die Protokollierung erfolgt auf dem **Jeedom-Zielserver**).

> **Hinweis**
>
> Sie können die Geräte nach und nach auch den auf dem **Jeedom-Quellserver** neu erstellten Objekten zuweisen, damit sie später bei der Deklaration im Plugin „Jeedom Link“ automatisch dem richtigen Objekt auf dem **Jeedom-Zielserver** zugeordnet werden. Bei Namenskonflikten mit einem Gerät, das bereits in den Objekten des **Jeedom-Ziels** vorhanden ist, fügt das Plugin „remote XXXX“ an den Namen des Geräts an.

### Z-Wave-Plugin

-   Klicken Sie auf die Schaltfläche „Synchronisieren“, um die mit Ihrem Controller verbundenen Module abzurufen. (Diese werden im Speicher des Controllers gespeichert.)
-   Ersetzen Sie die Datei *Zwcfg*: *Plugins ⇒ Plugin-Verwaltung ⇒ Z-Wave*. Klicken Sie auf die rote Schaltfläche *Zwcfg* und fügen Sie den Inhalt der zuvor auf Ihrem Computer erstellten Textdatei ein. *Änderungen speichern*.
-   Benennen Sie Ihre Module um und ordnen Sie sie mithilfe Ihrer Migrationsnotizen den gewünschten Objekten zu.

### Rfxcom-Plugin:

#### Fühler, Sensoren, Detektoren,…​

-   Das Plugin in den Einbindungsmodus versetzen.
-   Wiederholen Sie den Vorgang, bis alle Geräte dieser Art erfasst sind.
-   Benennen Sie Ihre Geräte um und ordnen Sie sie mithilfe Ihrer Migrationsnotizen den gewünschten Objekten zu.

#### Aktoren, Steckdosen, …​

-   Ein neues Gerät hinzufügen.
-   Legen Sie den Namen, die ID, das übergeordnete Objekt, den Gerätetyp und das Modell anhand Ihrer Migrationsnotizen fest.
-   Wiederholen Sie diesen Vorgang für alle Ihre Geräte dieser Art.

## Konfiguration des Plugins „Jeedom Link“

Das auf dem **Jeedom-Quellserver** installierte Plugin „Jeedom Link“ ermöglicht die Übertragung der Geräte auf den **Jeedom-Zielserver** (Ihren bisherigen Master).

> **Hinweis**
>
> Zur Erinnerung, damit Sie dieses Tutorial besser lesen und verstehen können:
>
> - Die Screenshots auf schwarzem Hintergrund stammen aus **Jeedom Cible**.
> - Die Screenshots auf weißem Hintergrund stammen aus **Jeedom Source**.

Auf der **Jeedom Source**,
[konfigurieren](/plugins/communication/jeelink)
das Plugin „Jeedom Link“ mit folgenden Angaben:

-   Der Name des **Jeedom-Ziels**.
-   Die IP-Adresse oder der DNS-Name des **Jeedom-Ziels**.
-   Der API-Schlüssel für **Jeedom Cible**.

Und speichern Sie die Konfiguration.

![jeelink.migration3](../images/jeelink.migration3.png)

Fügen Sie auf der Registerkarte *Zuweisung* die Geräte hinzu, die Sie an das **Ziel-Jeedom** melden möchten.

![jeelink.migration4](../images/jeelink.migration4.png)

Klicken Sie auf *Gerät hinzufügen*. Wählen Sie das Objekt und das hinzuzufügende Gerät aus:

![jeelink.migration5](../images/jeelink.migration5.png)

Nachdem Sie die Seite *Meine JeeLinks* des **Jeedom-Ziels** aktualisiert haben, sollten Sie feststellen, dass das Gerät automatisch angelegt wurde:

![jeelink.migration6](../images/jeelink.migration6.png)

Wie bei jedem Jeedom-Gerät können Sie das Gerät aktivieren/deaktivieren, es anzeigen oder ausblenden, seine Befehle anzeigen … oder die Kategorie ändern:

![jeelink.migration7](../images/jeelink.migration7.png)

Auf der Registerkarte *Steuerung* können Sie auf alle Parameter der Gerätesteuerung zugreifen:

![jeelink.migration8](../images/jeelink.migration8.png)

## Abruf von Verlaufsdaten

> **Hinweis**
>
> Auf dem **Jeedom-Zielserver** (ehemals „Master“) muss für jeden Befehl eine Abfrage der Geräteinformationen des ehemaligen **Slaves** erfolgen, dessen Verlaufsdaten abgerufen werden sollen.

-   Gehen Sie zu den Steuerungseinstellungen (*Zahnrad rechts*).
-   Wechseln Sie zur Registerkarte *Erweiterte Einstellungen*.
-   Klicken Sie auf die Schaltfläche *Verlauf dieser Bestellung auf eine andere Bestellung kopieren*.
-   Suchen Sie den entsprechenden Befehl für das neue JeeLink-Gerät und bestätigen Sie die Auswahl.

## Ersetzen der alten Slave-Geräte in den Szenarien/virtuellen Geräten/…​

> **Hinweis**
>
> Auf dem **Jeedom-Ziel** (ehemals „Master“) ist für jeden Befehl „info/action“ der Geräte des ehemaligen **Slaves**, deren Instanzen in den Szenarien/virtuellen Geräten/… ersetzt werden sollen, Folgendes zu tun:

-   Gehen Sie zu den Steuerungseinstellungen (*Zahnrad rechts*).
-   Wechseln Sie zur Registerkarte *Informationen*.
-   Klicken Sie auf die Schaltfläche *Diesen Befehl durch den Befehl ersetzen*.
-   Suchen Sie den entsprechenden Befehl für das neue JeeLink-Gerät und bestätigen Sie die Auswahl.

## Abruf der erweiterten Anzeigeeinstellungen der Befehle

> **Hinweis**
>
> Dies muss auf dem **Jeedom-Ziel** (ehemals „Master“) für jeden Befehl „info/action“ der Geräte des ehemaligen **Slaves** durchgeführt werden, deren erweiterte Anzeigeeinstellungen abgerufen werden sollen.

-   Gehen Sie zu den Steuerungseinstellungen (*Zahnrad rechts*).
-   Klicken Sie auf die Schaltfläche *Anwenden auf*.
-   Suchen Sie den entsprechenden Befehl für das neue JeeLink-Gerät, wählen Sie ihn aus und bestätigen Sie.

## Übertragung der erweiterten Konfigurationen der Befehle

> **Hinweis**
>
> Auf dem **Jeedom-Ziel** (ehemals „Master“) ist für jeden Befehl „info/action“ der Geräte des ehemaligen **Slaves**, deren erweiterte Konfiguration übernommen werden soll, Folgendes durchzuführen.

-   Hier gibt es keine einfache Lösung; Sie müssen zwei Registerkarten bzw. Fenster in Ihrem Browser geöffnet haben.
-   Die Befehle für die Geräte des ehemaligen **Slaves** in einem Reiter öffnen (Jeedom-Ziel).
-   Öffnen Sie die Befehle für die jeeLink-Geräte im anderen Reiter (Jeedom-Ziel).
-   Und die gewünschten Einstellungen von Hand eintragen.

> **Hinweis**
>
> Um zu vermeiden, dass derselbe Befehl mehrmals aufgerufen werden muss, können die Schritte 2.6→2.9 nacheinander im selben Befehl ausgeführt werden, bevor man zu den nächsten übergeht.

> **Warnung**
>
> Interaktionen auf dem **Jeedom-Ziel** können nicht über Geräte eines **Jeedom-Quellsystems** ausgelöst werden, die über das Plugin „Jeedom Link“ übertragen werden.

# Haushaltsführung auf dem **Jeedom Cible**

> **Hinweis**
>
> Nachdem Sie sich vergewissert haben, dass Ihre Geräte/Szenarien/Interaktionen/virtuellen Elemente/… mit dem neuen Jeelink-System einwandfrei funktionieren, können Sie mit der Bereinigung fortfahren.

-   Die verbleibenden Geräte des alten **Jeedom-Slaves** entfernen.
-   Deaktivieren und löschen Sie Plugins, die Sie nicht mehr benötigen (d. h. solche, für die Sie nur Geräte auf dem Slave hatten).
-   Benennen Sie im Plugin „Jeedom Link“ die Geräte um, deren Name möglicherweise auf „remote XXXX“ endet.
-   Löschen Sie auf der Seite „Jeedom-Netzwerk“ den alten **Jeedom-Slave**.
