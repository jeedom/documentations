Wir werden hier sehen, wie eine Installation mit Jeedom im Modus migriert wird
Sklave eines Jeedom mit dem Jeedom Link Plugin". Slave-Modus
Jeedom wird beim Übergang von Jeedom zu Version 3 aufgegeben.0 ist es
erforderlich, um vor der Migration in den neuen Modus von fortzufahren
fonctionnement.

Vorbereitung vor der Migration 
===========================

> **Warning**
>
> Es ist wichtig, dass Sie die gesamte Dokumentation vorher lesen
> Beginnen Sie mit der Migration. Wichtige Informationen über
> Aktualisierungs-, Sicherungs- und Wiederherstellungsanforderungen
> von Informationen sind wesentlich für das richtige Verständnis von
> die auszuführende Operation. Das Lesen dieser Dokumentation kann unterlassen werden
> führen zu zerstörerischen Operationen an Ihrer Installation. Wenn du
> Verstehe keinen Punkt, zögere nicht, Fragen zu stellen
> Forum vor dem Start des Verfahrens !

> **Important**
>
> Achten Sie darauf, dass Sie keine Geräte einschleifen
> Konfigurieren des Jeedom Link Plugins". Zum Beispiel machen Sie keine
> Equipment-X in einem Jeedom1, das in einem Jeedom2 aufsteigt, steigt dann auf
> wieder in Jeedom1. Es könnte deine Jeedoms fallen lassen !

> **Note**
>
> Zum besseren Lesen und Verstehen dieses Tutorials finden Sie hier die
> verwendete Begriffe :\.
> \.
> - **Jeedom Ziel** : Server (dein ehemaliger Jeedom Master) wer
> Zentralisieren Sie die Ausrüstung der **Jeedom (s) Quelle (n)**\.
> Die Screenshots auf schwarzem Hintergrund entsprechen dem **Jeedom Ziel**.\.
> \.
> - **Jeedom Quelle** : Server (Ihre ehemaligen Jeedom Slave (s))
> das bringt deine Ausrüstung wieder auf die **Jeedom Ziel**.\.
> \.
> - Die Begriffe von **Jeedom Meister** und **Jeedom Sklave** sind nicht mehr
> Nachrichten. Die neue Synchronisationsbetriebsart
> der Ausrüstung zwischen mehreren Jeedoms kann bidirektional sein. A.
> Jeedom Server kann jetzt sein **Source** und **Cible** während
> Der alte Modus erlaubte nur den Aufstieg von Geräten
> **l'Esclave** zu **der Meister**. Mit dem neuen Modus ist es auch
> möglich, mehrere zu haben **Jeedom Ziele** für das gleiche **Jeedom
> Quelle**. Kommunikation zwischen Jeedoms kann jetzt auch
> aus der Ferne über das Internund (Jeedom DNS oder andere) erfolgen. \.
> \.

![jeelink.migration9](images/jeelink.migration9.png)

Konfigurationsaktualisierungen und Überprüfung 
------------------------------------------------

-   Aktualisieren Sie die **Jeedom Meister** auf die neueste Version (auch wenn
    Es wird Ihnen kein Update angeboten.).

-   Plugins von aktualisieren **Jeedom Meister** bis zum letzten
    verfügbare Versionen.

-   Überprüfen Sie auf der Seite Health die interne Netzwerkkonfiguration des
    **Jeedom Meister** ist OK (und extern, wenn Ihr **Jeedoms Quellen**
    wird entfernt sein).

Nützliche Informationen sammeln 
-------------------------------------

Abhängig von den auf Ihrem installierten Plugins **Jeedom Sklave**, Er ist
erforderlich, um die folgenden Informationen abzurufen :

### Zwave Plugin 

-   Auf der Gesundheitsseite des Zwave-Plugins auf der **Jeedom Meister**, Wählen
    Ihre **Esclave** aus dem Dropdown-Menü und machen Sie einen Screenshot,
    Dies, um eine Liste der Geräte zu haben, die kommt
    davon.

-   Hinweis für jedes Gerät, das von kommt **l'Esclave** : das Objekt
    Eltern, Name, ID (Knoten), Modell.

-   Zwcfg-Datei wiederherstellen : *Plugins ⇒ Verwaltung von Plugins ⇒
    Z-Welle *. Klicken Sie auf die rote Schaltfläche * Zwcfg * und kopieren Sie den Inhalt
    in einer Textdatei auf Ihrem Computer.

### RFXcom Plugin 

-   Hinweis für jedes Gerät, das von kommt **l'Esclave** : das Objekt
    Eltern, Name, ID (logisch), Typ, Modell.

> **Note**
>
> Ein nicht erschöpfendes Informationsblatt, das Sie für die Migration beachten sollten
> ist verfügbar [hier](images/MemoMigration.xls)

Vorbeugende Backups 
-----------------------

-   Erstellen Sie ein Backup
    Jeedom](https://doc.jeedom.com/de_DE/core/doc-core-backup.html)
    von dir **Jeedom Meister** und dein **Jeedom Slave (s)**
    und stellen Sie es auf Ihrem PC / NAS wieder her….

-   Erstellen Sie ein Backup
    SD/Disque](https://doc.jeedom.com/de_DE/howto/doc-howto-sauvegarde.comment_faire.html#_sauvegarde_restauration_de_la_carte_microsd)
    von dir **Jeedom Meister** und dein **Jeedom Slave (s)**
    und stellen Sie sie auf Ihrem PC / NAS wieder her….

Migration 
=========

> **Note**
>
> Löschen Sie keine alten Geräte aus
> **l'Esclave** auf **der Meister**.

Installieren und aktivieren Sie das Plugin "Jeedom Link" auf der **Jeedom Ziel** (ehemaliger Meister). 
-------------------------------------------------------------------------------------

Auf deine **Jeedom Ziel**, *Plugins ⇒ Verwaltung von Plugins* :

![jeelink.migration1](images/jeelink.migration1.png)

Installation von **Jeedom Quelle** : 
-----------------------------------

> **Note**
>
> wenn Sie einen zusätzlichen Raspberry Pi und eine andere Karte haben
> SD können Sie ein Protokoll nach dem anderen durch migrieren
> ein neues installieren **Jeedom Quelle** parallel ohne zu müssen
> Berühre deine **Jeedom Sklave** vorhanden. Durch offensichtliche Bewegung
> als mögliche Controller von einem zum anderen.

> **Warning**
>
> Wenn Sie Ihr vorhandenes RaspberryPi verwenden, stellen Sie bitte sicher
> das Sicherungskapitel dieser Dokumentation befolgt haben.

> **Note**
>
> Wenn Sie den vorhandenen Raspberry Pi verwenden, der derzeit ein
> **Jeedom Sklave**, Wir empfehlen Ihnen, eine Karte zu verwenden
> Neue SD / microSD. Auf diese Weise können Sie zurückverfolgen
> bei Bedarf einfach.

-   Installieren Sie ein neues Jeedom auf einer neuen SD-Karte (Lund it be
    in deine setzen **Jeedom Sklave** vorhanden oder für eine
    neuer Raspberry Pi), indem Sie der [Dokumentation
    d'installation](https://doc.jeedom.com/de_DE/installation/doc-installation.html).

-   Aktualisieren Sie die **Jeedom Quelle** auf die neueste Version (auch wenn
    Es wird Ihnen kein Update angeboten.).

-   Überprüfen Sie auf der Seite Health die interne Netzwerkkonfiguration (und
    extern, falls erforderlich) **Jeedom Quelle** ist ok.

Konfiguration der Jeedom-Quelle 
------------------------------

-   Ändern Sie das Passwort des Administrators oder / und konfigurieren Sie a
    neuer Benutzer.

-   Konfigurieren Sie Ihr Jeedom Market-Konto (* Konfiguration ⇒ Updates
    und Dateien ⇒ Registerkarte "Markt" *). Klicken Sie auf Test nach
    gespeichert, um die Eingabe Ihrer Kennungen zu überprüfen
    Jeedom Market).

-   Installation und Aktivierung des Plugins "Jeedom Link" auf dem neuen
    **Jeedom Quelle**.

![jeelink.migration2](images/jeelink.migration2.png)

-   Installation und Aktivierung von Plugins, die Sie verwenden möchten.
    (Es ist ratsam, sie einzeln durchzuführen und jedes Mal zu überprüfen
    sobald Abhängigkeiten und mögliche Dämonen in Ordnung sind).

-   Erstellen Sie den Baum der Objekte neu (nur diejenigen, die dies tun werden
    nützlich sein) von **Jeedom Ziel** (Alter Meister) auf Ihrem neuen
    **Jeedom Quelle** (Ehemaliger Sklave).

Konfiguration der Ausrüstung auf dem **Jeedom Quelle** 
------------------------------------------------------

Senden von Geräten auf dem **Jeedom Quelle**
in Richtung **Jeedom Ziel** über das Plugin "Jeedom Link" ist es notwendig
dass es auf Ihrem neuen bereits betriebsbereit ist **Jeedom
Source**.

> **Note**
>
> Denken Sie daran, die Befehlsprotokollierung zu deaktivieren
> Informationen zu jedem Gerät auf der **Jeedom Quelle** so
> um die SD-Karte davon zu speichern (Historisierung wird auf dem durchgeführt
> **Jeedom Ziel**).

> **Note**
>
> Sie können das Gerät auch schrittweise zuweisen
> Objekte auf dem neu erstellt **Jeedom Quelle** so dass sie später sind
> automatisch das richtige Objekt auf die setzen **Jeedom Ziel** während
> die Deklaration im Plugin "Jeedom Link". Bei doppeltem Namen
> mit Ausrüstung, die bereits in den Objekten der **Jeedom Ziel**,
> Das Plugin fügt dem Namen des Geräts "remote XXXX" hinzu.

### Zwave Plugin : 

-   Klicken Sie auf die Schaltfläche "Synchronisieren", um die Module abzurufen
    mit Ihrem Controller verbunden. (Sie werden in Erinnerung behalten
    davon)

-   Ersetzen Sie die Datei * Zwcfg* : *Plugins ⇒ Verwaltung von Plugins ⇒
    Z-Welle *. Klicken Sie auf die rote Schaltfläche * Zwcfg * und fügen Sie den Inhalt der ein
    zuvor auf Ihrem Computer erstellte Textdatei. * Speichern
    die Änderungen*.

-   Benennen Sie Ihre Module um und platzieren Sie sie in den gewünschten Objekten in Ihnen
    Hilfe bei Ihrem Migrationsprotokoll.

### RFXcom Plugin : 

#### Sonden, Sensoren, Detektoren,… : 

-   Schalten Sie das Plugin in den Einschlussmodus.

-   Wiederholen Sie den Einschluss, bis Sie alle Ihre Geräte haben
    dieser Typ.

-   Benennen Sie Ihre Ausrüstung um und platzieren Sie sie in den gewünschten Objekten von
    Hilfe bei Ihrem Migrationsprotokoll.

#### Aktoren, Steckdosen,…. : 

-   Neue Ausrüstung hinzufügen.

-   Definieren Sie Name, ID, übergeordnetes Objekt, Gerätetyp und
    Modell mit Ihrem Migrationsprotokoll.

-   Wiederholen Sie dies für alle Ihre Geräte dieses Typs.

Konfiguration des "Jeedom Link Plugins"" 
-------------------------------------

Das "Jeedom Link" Plugin ist auf dem installiert **Jeedom Quelle** wird die erlauben
Ausrüstung auf der **Jeedom Ziel** (Dein alter Meister).

> **Note**
>
> Zur besseren Lektüre und zum besseren Verständnis dieses Tutorials :\.
> \.
> Die Screenshots auf schwarzem Hintergrund entsprechen dem **Jeedom Ziel**.\.
> \.
> Die Screenshots auf weißem Hintergrund entsprechen **Jeedom Quelle**.\.

Auf dem **Jeedom Quelle**,
[Projektierungs](https://doc.jeedom.com/de_DE/plugins/jeelink/jeelink)
das "Jeedom Link" Plugin durch Angabe :

-   Der Name von **Jeedom Ziel**.

-   Die IP-Adresse oder der DNS-Name des **Jeedom Ziel**.

-   Der API-Schlüssel von **Jeedom Ziel**.

Und speichern Sie die Konfiguration.

![jeelink.migration3](images/jeelink.migration3.png)

Fügen Sie auf der Registerkarte * Zuordnung * die gewünschte Ausrüstung hinzu
geh rauf zum **Jeedom Ziel**.

![jeelink.migration4](images/jeelink.migration4.png)

Klicken Sie auf * Ausrüstung hinzufügen * Objekt und Ausrüstung auswählen
hinzufügen :

![jeelink.migration5](images/jeelink.migration5.png)

Nach dem Aktualisieren der Seite * My JeeLinks * von **Jeedom Ziel**, Sie
muss die automatische Erstellung der Ausrüstung beachten :

![jeelink.migration6](images/jeelink.migration6.png)

Wie bei allen Jeedom-Geräten können Sie diese aktivieren / deaktivieren und anzeigen
oder nicht die Ausrüstung, ihre Steuerungen, ... oder ändern Sie die Kategorie :

![jeelink.migration7](images/jeelink.migration7.png)

Auf der Registerkarte * Bestellungen * greifen Sie auf alle Parameter der
Gerätesteuerung :

![jeelink.migration8](images/jeelink.migration8.png)

Historische Erholung 
----------------------------

> **Note**
>
> Weiter machen **Jeedom Ziel** (Ehemaliger Meister) für jede Bestellung
> alte Geräteinfo **Esclave** was wir erholen wollen
> die Geschichte.

-   Gehen Sie zur Konfiguration des Befehls (* Zahnrad bei
    rechts *).

-   Gehen Sie zur Registerkarte * Erweiterte Konfiguration*.

-   Klicken Sie auf die Schaltfläche * Kopieren Sie den Verlauf dieser Bestellung nach a
    andere Reihenfolge*.

-   Finden Sie die entsprechende Bestellung für das neue JeeLink-Gerät
    Korrespondent und validieren.

Ersatz alter Slave-Geräte in Szenarien / virtuell /… 
----------------------------------------------------------------------------

> **Note**
>
> Weiter machen **Jeedom Ziel** (Ehemaliger Meister) für jede Bestellung
> Info / Aktion von Altgeräten **Esclave** was wir wollen
> Vorkommen in Szenarien ersetzen / virtuell /….

-   Gehen Sie zur Konfiguration des Befehls (* Zahnrad bei
    rechts *).

-   Gehen Sie zur Registerkarte * Informationen*.

-   Klicken Sie auf die Schaltfläche * Ersetzen Sie diesen Befehl durch den Befehl*.

-   Finden Sie die entsprechende Bestellung für das neue JeeLink-Gerät
    Korrespondent und validieren.

Abrufen erweiterter Anzeigekonfigurationen für Befehle 
------------------------------------------------------------------

> **Note**
>
> Weiter machen **Jeedom Ziel** (Ehemaliger Meister) für jede Bestellung
> Info / Aktion von Altgeräten **Esclave** was wir wollen
> Erweiterte Anzeigeeinstellungen abrufen.

-   Gehen Sie zur Konfiguration des Befehls (* Zahnrad bei
    rechts *).

-   Klicken Sie auf die Schaltfläche * anwenden auf*.

-   Suchen Sie den entsprechenden Befehl für den neuen und wählen Sie ihn aus
    entsprechende JeeLink-Ausrüstung und validieren.

Kopie der erweiterten Befehlskonfigurationen 
-------------------------------------------------

> **Note**
>
> Weiter machen **Jeedom Ziel** (Ehemaliger Meister) für jede Bestellung
> Info / Aktion von Altgeräten **Esclave** was wir wollen
> Rufen Sie die erweiterte Konfiguration ab.

-   Keine einfache Lösung auf dieser Ebene, Sie müssen zwei haben
    Öffnen Sie Tabs / Fenster in Ihrem Browser.

-   Offene Bestellungen für Altgeräte **Esclave** in a
    Registerkarte (Jeedom Target).

-   Öffnen Sie die Steuerelemente für jeeLink-Geräte auf der anderen Registerkarte
    (Jeedom Ziel).

-   Und kopieren Sie die gewünschten Parameter von Hand.

> **Note**
>
> Um zu vermeiden, dass dieselbe Bestellung mehrmals wiederholt wird, wird die
> Operationen 2.6 → 2.9 kann nacheinander auf demselben ausgeführt werden
> bestellen, bevor Sie mit dem nächsten fortfahren.

> **Warning**
>
> Interaktionen auf dem **Jeedom Ziel** kann nicht gestartund werden
> durch Ausrüstung von a **Jeedom Quelle** übertragen über die
> Jeedom Link Plugin".

Haushalt auf der **Jeedom Ziel** 
==============================

> **Note**
>
> Nachdem Sie mit Sicherheit bestätigt haben, dass Ihr
> Ausrüstung / Szenarien / Interaktionen / virtuell /…. Arbeit
> richtig mit dem neuen jeelink system kannst du das machen
> Haushalt.

-   Entfernen Sie restliche Ausrüstung von der alten **Jeedom Sklave**.

-   Deaktivieren und entfernen Sie Plugins, die für Sie nicht mehr nützlich sind
    (Die, die du nur auf dem Slave hattest).

-   Benennen Sie im Plugin "Jeedom Link" das Gerät um
    könnte einen Namen haben, der mit "remote" endund XXXX".

-   Löschen Sie auf der Seite Jeedom Network die alte **Jeedom Sklave**.


