Wir werden hier sehen, wie eine Installation mit Jeedom im Modus migriert wird
Sklave eines Jeedom mit dem Jeedom Link Plugin". Slave-Modus
Jeedom wird beim Übergang von Jeedom zu Version 3 aufgegeben.0 ist es
erforderlich, um vor der Migration in den neuen Modus von fortzufahren
Funktionieren.

Vorbereitung vor der Migration 
===========================

> **Warnung**
>
> Es ist wichtig, dass Sie die gesamte Dokumentation vorher lesen
> Beginnen Sie mit der Migration. Wichtige Informationen über
> Aktualisierungs-, Sicherungs- und Wiederherstellungsanforderungen
> von Informationen sind wesentlich für das richtige Verständnis von
> die auszuführende Operation. Das Lesen dieser Dokumentation kann unterlassen werden
> führen zu zerstörerischen Operationen an Ihrer Installation. Wenn du
> Verstehe keinen Punkt, zögere nicht, Fragen zu stellen
> Forum vor dem Start des Verfahrens !

> **Wichtig**
>
> Achten Sie darauf, dass Sie keine Geräte einschleifen
> Konfigurieren des Jeedom Link Plugins". Zum Beispiel machen Sie keine
> Equipment-X in einem Jeedom1, das in einem Jeedom2 aufsteigt, steigt dann auf
> wieder in Jeedom1. Es könnte deine Jeedoms fallen lassen !

> **Notiz**
>
> Zum besseren Lesen und Verstehen dieses Tutorials finden Sie hier die
> verwendunde Begriffe :\.
> \.
> - **Jeedom Ziel** : Server (dein ehemaliger Jeedom Master) wer
> Zentralisieren Sie die Ausrüstung der **Jeedom (s) Quelle (n)**\.
> Die Screenshots auf schwarzem Hintergrund entsprechen dem **Jeedom Ziel**.\.
> \.
> - **Jeedom Quelle** : Server (Ihre ehemaligen Jeedom Slave (s))
> das bringt deine Ausrüstung wieder auf die **Jeedom Ziel**.\.
> \.
> - Die Begriffe von **Jeedom Meister** und **Jeedom Sklave** sind nicht mehr
> Nachrichten. Die neue Synchronisationsbundriebsart
> der Ausrüstung zwischen mehreren Jeedoms kann bidirektional sein. A.
> Jeedom Server kann jundzt sein **Quelle** und **Ziel** während
> Der alte Modus erlaubte nur den Aufstieg von Geräten
> **der Sklave** zu **der Meister**. Mit dem neuen Modus ist es auch
> möglich, mehrere zu haben **Jeedom Ziele** für das gleiche **Jeedom
> Quelle**. Kommunikation zwischen Jeedoms kann jundzt auch
> aus der Ferne über das Internund (Jeedom DNS oder andere) erfolgen. \.
> \.

![jeelink.migration9](images/jeelink.migration9.png)

Konfigurationsaktualisierungen und Überprüfung 
------------------------------------------------

-   Aktualisieren Sie die **Jeedom Meister** auf die neueste Version (auch wenn
    Es wird Ihnen kein Update angeboten.).

-   Plugins von aktualisieren **Jeedom Meister** bis zum lundzten
    verfügbare Versionen.

-   Überprüfen Sie auf der Seite Health die interne Nundzwerkkonfiguration des
    **Jeedom Meister** ist OK (und extern, wenn Ihr **Jeedoms Quellen**
    wird entfernt sein).

Nützliche Informationen sammeln 
-------------------------------------

Abhängig von den auf Ihrem installierten Plugins **Jeedom Sklave**, Er ist
erforderlich, um die folgenden Informationen abzurufen :

### Zwave Plugin 

-   Auf der Gesundheitsseite des Zwave-Plugins auf der **Jeedom Meister**, Wählen
    Ihre **Sklave** aus dem Dropdown-Menü und machen Sie einen Screenshot,
    Dies, um eine Liste der Geräte zu haben, die kommt
    davon.

-   Hinweis für jedes Gerät, das von kommt **der Sklave** : das Objekt
    Eltern, Name, ID (Knoten), Modell.

-   Zwcfg-Datei wiederherstellen : *Plugins ⇒ Verwaltung von Plugins ⇒
    Z-Welle *. Klicken Sie auf die rote Schaltfläche * Zwcfg * und kopieren Sie den Inhalt
    in einer Textdatei auf Ihrem Computer.

### RFXcom Plugin 

-   Hinweis für jedes Gerät, das von kommt **der Sklave** : das Objekt
    Eltern, Name, ID (logisch), Typ, Modell.

> **Notiz**
>
> Ein nicht erschöpfendes Informationsblatt, das Sie für die Migration beachten sollten
> ist verfügbar [hier] (images / MemoMigration.xls)

Vorbeugende Backups 
-----------------------

-   Erstellen Sie ein Backup
    Jeedom] (https://jeedom.github.io/documentation/core/de_DE/doc-core-backup.html)
    von dir **Jeedom Meister** und dein **Jeedom Slave (s)**
    und stellen Sie es auf Ihrem PC / NAS wieder her….

-   Erstellen Sie ein Backup
    SD / Disc] (https://jeedom.github.io/documentation/howto/de_DE/doc-howto-sau Backupe.comment_faire.html # _sau Backupe_restauration_de_la_carte_microsd)
    von dir **Jeedom Meister** und dein **Jeedom Slave (s)**
    und stellen Sie sie auf Ihrem PC / NAS wieder her….

Migration 
=========

> **Notiz**
>
> Löschen Sie keine alten Geräte aus
> **der Sklave** auf **der Meister**.

Installieren und aktivieren Sie das Plugin "Jeedom Link" auf der **Jeedom Ziel** (ehemaliger Meister). 
-------------------------------------------------------------------------------------

Auf deine **Jeedom Ziel**, *Plugins ⇒ Verwaltung von Plugins* :

![jeelink.migration1](images/jeelink.migration1.png)

Installation von **Jeedom Quelle** : 
-----------------------------------

> **Notiz**
>
> wenn Sie einen zusätzlichen Raspberry Pi und eine andere Karte haben
> SD können Sie ein Protokoll nach dem anderen durch migrieren
> ein neues installieren **Jeedom Quelle** parallel ohne zu müssen
> Berühre deine **Jeedom Sklave** vorhanden. Durch offensichtliche Bewegung
> als mögliche Controller von einem zum anderen.

> **Warnung**
>
> Wenn Sie Ihr vorhandenes RaspberryPi verwenden, stellen Sie bitte sicher
> das Sicherungskapitel dieser Dokumentation befolgt haben.

> **Notiz**
>
> Wenn Sie den vorhandenen Raspberry Pi verwenden, der derzeit ein
> **Jeedom Sklave**, Wir empfehlen Ihnen, eine Karte zu verwenden
> Neue SD / microSD. Auf diese Weise können Sie zurückverfolgen
> bei Bedarf einfach.

-   Installieren Sie ein neues Jeedom auf einer neuen SD-Karte (Lund it be
    in deine sundzen **Jeedom Sklave** vorhanden oder für eine
    neuer Raspberry Pi), indem Sie der [Dokumentation
    Installation] (https://jeedom.github.io/documentation/installation/de_DE/doc-installation.html).

-   Aktualisieren Sie die **Jeedom Quelle** auf die neueste Version (auch wenn
    Es wird Ihnen kein Update angeboten.).

-   Überprüfen Sie auf der Seite Health die interne Nundzwerkkonfiguration (und
    extern, falls erforderlich) **Jeedom Quelle** ist ok.

Konfiguration der Jeedom-Quelle 
------------------------------

-   Ändern Sie das Passwort des Administrators oder / und konfigurieren Sie a
    neuer Benutzer.

-   Konfigurieren Sie Ihr Jeedom Markund-Konto (* Konfiguration ⇒ Updates
    und Dateien ⇒ Registerkarte "Markt" *). Klicken Sie auf Test nach
    gespeichert, um die Eingabe Ihrer Kennungen zu überprüfen
    Jeedom Markund).

-   Installation und Aktivierung des Plugins "Jeedom Link" auf dem neuen
    **Jeedom Quelle**.

![jeelink.migration2](images/jeelink.migration2.png)

-   .
    
    .

-   
     **Jeedom Ziel** 
    **Jeedom Quelle** .

 **Jeedom Quelle** 
------------------------------------------------------

 **Jeedom Quelle**
 **Jeedom Ziel** 
 **Jeedom
Quelle**.

> **Notiz**
>
> 
>  **Jeedom Quelle** 
> 
> **Jeedom Ziel**).

> **Notiz**
>
> 
>  **Jeedom Quelle** 
>  **Jeedom Ziel** 
> ". 
>  **Jeedom Ziel**,
> .

### Zwave Plugin : 

-   
    . 
    

-   * : *Plugins ⇒ Verwaltung von Plugins ⇒
    
    
    *.

-   
    .

###  : 

####  : 

-   .

-   
    .

-   
    .

#### . : 

-   .

-   
    .

-   .

" 
-------------------------------------

 **Jeedom Quelle** 
 **Jeedom Ziel** .

> **Notiz**
>
>  :\.
> \.
> Die Screenshots auf schwarzem Hintergrund entsprechen dem **Jeedom Ziel**.\.
> \.
>  **Jeedom Quelle**.\.

Auf dem **Jeedom Quelle**,
[configurer](https://jeedom.github.io/documentation/plugins/jeelink/de_DE/jeelink)
 :

-    **Jeedom Ziel**.

-    **Jeedom Ziel**.

-    **Jeedom Ziel**.

.

![jeelink.migration3](images/jeelink.migration3.png)


 **Jeedom Ziel**.

![jeelink.migration4](images/jeelink.migration4.png)


 :

![jeelink.migration5](images/jeelink.migration5.png)

 **Jeedom Ziel**, Sie
 :

![jeelink.migration6](images/jeelink.migration6.png)


 :

![jeelink.migration7](images/jeelink.migration7.png)


 :

![jeelink.migration8](images/jeelink.migration8.png)

 
----------------------------

> **Notiz**
>
>  **Jeedom Ziel** 
>  **Sklave** 
> .

-   
    .

-   *.

-   
    *.

-   
    .

 
----------------------------------------------------------------------------

> **Notiz**
>
>  **Jeedom Ziel** 
>  **Sklave** 
> .

-   
    .

-   *.

-   *.

-   
    .

 
------------------------------------------------------------------

> **Notiz**
>
>  **Jeedom Ziel** 
>  **Sklave** 
> .

-   
    .

-   *.

-   
    .

 
-------------------------------------------------

> **Notiz**
>
>  **Jeedom Ziel** 
>  **Sklave** 
> .

-   
    .

-    **Sklave** 
    .

-   Öffnen Sie die Steuerelemente für jeeLink-Geräte auf der anderen Registerkarte
    (Jeedom Ziel).

-   Und kopieren Sie die gewünschten Paramunder von Hand.

> **Notiz**
>
> Um zu vermeiden, dass dieselbe Bestellung mehrmals wiederholt wird, wird die
> Operationen 2.6 → 2.9 kann nacheinander auf demselben ausgeführt werden
> bestellen, bevor Sie mit dem nächsten fortfahren.

> **Warnung**
>
> Interaktionen auf dem **Jeedom Ziel** kann nicht gestartund werden
> durch Ausrüstung von a **Jeedom Quelle** übertragen über die
> Jeedom Link Plugin".

Haushalt auf der **Jeedom Ziel** 
==============================

> **Notiz**
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

-   Löschen Sie auf der Seite Jeedom Nundwork die alte **Jeedom Sklave**.


