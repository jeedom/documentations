# RFXcom Plugin

Plugin zur Verwendung eines RFXcom-Schlüssels mit Jeedom. Dieses Plugin funktioniert sowohl lokal als auch remote (mit dem Jeedom Link-Plugin)

Mit dem RFXcom-Plugin können Sie mit allen Peripheriegeräten kommunizieren, die mit dem RFXCOM-USB-Modul kompatibel sind. Unter diesen Peripheriegeräten befinden sich die folgenden Marken : Oregon, LaCross, Chacon, X10, DI-O, Blyss usw.

# Plugin Konfiguration

Nach der Installation des Plugins müssen Sie es nur aktivieren und den Port auf Auto setzen, nachdem das Speichern des Daemons gestartet werden soll. Das Plugin ist bereits standardmäßig konfiguriert. du musst nichts mehr tun. Sie können diese Konfiguration jedoch ändern. Hier ist das Detail der Parameter :

-   **Nebengebäude** : In diesem Teil erhalten Sie den Status der Abhängigkeiten. Wenn diese nicht in Ordnung sind, können Sie sie entweder von Hand starten oder 5 Minuten warten. Jeedom startet sie von selbst.
-   **Dämon** : Dieser Teil gibt dir den Status des Dämons. Wenn es nicht in Ordnung ist, kannst du ihn entweder von Hand starten oder 5 Minuten warten. Jeedom startet ihn von selbst.
-   **Konfiguration** : In diesem Teil können Sie die allgemeinen Parameter des Plugins konfigurieren.
    -   *Verbieten Sie die folgenden IDs* : ermöglicht es, Jeedom eine Liste von RFXcom-Kennungen zu geben, damit nicht die entsprechenden Geräte erstellt werden. Bezeichner müssen durch Leerzeichen getrennt werden. Beispiel : "1356AD87 DB54AF".
-   **Dämon** : Daemon-Konfigurationseinstellungen.
    -   *RFXcom-Anschluss* : Der USB-Anschluss, an den Ihre RFXcom-Schnittstelle angeschlossen ist.
        > **Spitze**
        >
        > Wenn Sie nicht wissen, welcher USB-Anschluss verwendet wird, können Sie einfach "Auto" angeben". Beachten Sie jedoch, dass einige Module möglicherweise mit der automatischen Erkennung (Teleinfo-Typ) in Konflikt stehen und die automatische Auswahl nicht funktioniert.

    -   *Kommunikationsgeschwindigkeit* : Kommunikationsgeschwindigkeit von
        RFXcom-Anschluss.

        > **Spitze**
        >
        > Behalten Sie die Standardeinstellung bei, es sei denn, Sie verwenden ein älteres Controller-Modell.

    -   \_Interner Socket-Port (gefährliche Änderung : Ermöglicht das Ändern des internen Kommunikationsports des Dämons.
        > **Wichtig**
        >
        > Ändern Sie nur, wenn Sie wissen, was Sie tun.

-   *Protokolle* : Mit dieser Option können Sie die aktiven Protokolle der RFXcom-Schnittstelle auswählen.

    > **Wichtig**
    >
    > Aktivieren Sie nicht alle, da einige nicht miteinander kompatibel sind. Hier ist die Kompatibilitätsmatrix :

Um den Daemon beim Debuggen zu starten, reicht es auf der Ebene der Konfiguration der Protokolle des Plugins aus, das Debugging durchzuführen, den Daemon zu speichern und neu zu starten.

> **Wichtig**
>
> In diesem Modus ist der Dämon sehr gesprächig. Vergessen Sie nach Abschluss des Debugs nicht, auf "Neustart" zu klicken, um den Debug-Modus zu verlassen !!

# Gerätekonfiguration

Die Konfiguration der RFXcom-Geräte ist über das Plugins-Menü und dann über das Hausautomationsprotokoll zugänglich. Sie finden hier :

-   eine Schaltfläche zum manuellen Erstellen von Geräten
-   eine Schaltfläche zum Umschalten in den Einschlussmodus
-   eine Schaltfläche zum Anzeigen der Konfiguration des Plugins
-   Eine Schaltfläche, die Ihnen den Gesundheitszustand aller Ihrer RFXcom-Geräte anzeigt
-   Schließlich finden Sie unten die Liste Ihrer Ausrüstung

Wenn Sie auf eines Ihrer Geräte klicken, gelangen Sie auf die Konfigurationsseite Ihres Geräts mit 2 Registerkarten, Geräten und Steuerelementen.

-   **Registerkarte Ausrüstung** :
-   **Name des RFXcom-Geräts** : Name Ihres RFXcom-Geräts
-   **Identifikation** : die ID Ihrer Sonde (darf nur bei vollständiger Kenntnis der Fakten geändert werden)
-   **Aktivieren** : macht Ihre Ausrüstung aktiv
-   **Sichtbar** : macht es auf dem Dashboard sichtbar
-   **Übergeordnetes Objekt** : Gibt das übergeordnete Objekt an, zu dem das Gerät gehört
-   **Kategorie** : Gerätekategorien (es kann zu mehreren Kategorien gehören)
-   **Die Batterie nicht überprüfen** : weist Jeedom an, Sie nicht zu warnen, wenn das Gerät einen Rahmen mit schwacher Batterie sendet (einige Module verarbeiten diese Informationen nicht korrekt und generieren falsche Warnungen)
-   **Maximale Zeit zwischen 2 Nachrichten (min)** : Die maximal zulässige Zeit zwischen zwei Nachrichten, bevor Jeedom das Gerät als Zeitüberschreitung deklariert".
-   **ID wiederherstellen (Batteriewechsel)** : Das RFXcom hat die Besonderheit, die ID der Sonde beim Batteriewechsel zu ändern. Jeedom bietet einen Assistenten an, um die Bedienung zu erleichtern. Du musst :
    -   Wechseln Sie die Batterie Ihrer Sonde
    -   Warten Sie auf die Erschaffung von Jeedom und gehen Sie zu der neu erstellten Sonde
    -   Drücken Sie die Taste "ID wiederherstellen (Batterie wechseln)""
    -   Wählen Sie im Fenster im Dropdown-Menü die alte Sonde,
    -   Valider
-   **Gerät** : ermöglicht es Ihnen, das Modell Ihrer Ausrüstung zu definieren (nur für die manuelle Erstellung von Ausrüstung zu konfigurieren, in der automatischen Jeedom konfiguriert nur dieses Feld)
-   **Schaffung** : gibt Ihnen das Erstellungsdatum der Ausrüstung an
-   **Kommunikation** : gibt Ihnen das Datum der letzten Kommunikation mit dem Gerät an (kann beispielsweise bei einer Steckdose leer sein)
-   **Batterie** : Batteriestand des Geräts
-   **Status** : Gerätestatus (kann zum Beispiel eine Zeitüberschreitung sein)
-   **Registerkarte &quot;Bestellungen&quot;** :
  -   Der im Dashboard angezeigte Name
  -   Typ und Subtyp
  -   Der Informationsschlüssel, wenn es sich um eine Information handelt, oder der Hexadezimalcode, der gesendet werden soll, wenn es sich um eine Aktion handelt. In den Konfigurationen können diese Felder automatisch ausgefüllt werden (Sie müssen das Gerät erstellen, die Konfiguration auswählen und dann speichern)
  -   Die Gruppe ermöglicht eine einfache Verwaltung von Geräten, die den Begriff der Gruppe unterstützen. Dies ersetzt das Tag \#GROUP\# in der hexadezimalen Kette bei der Ausführung des Befehls
  -   "Statusrückmeldungswert "und" Dauer vor Statusrückmeldung" : ermöglicht es Jeedom anzuzeigen, dass nach einer Änderung der Informationen der Wert auf Y, X min nach der Änderung zurückkehren muss. Beispiel : Im Fall eines Anwesenheitsdetektors, der nur während einer Anwesenheitserkennung emittiert, ist es nützlich, beispielsweise 0 in Wert und 4 in Dauer einzustellen, so dass 4 min nach einer Bewegungserkennung (und s ') Seitdem gab es keine Neuigkeiten.) Jeedom setzt den Wert der Informationen auf 0 zurück (keine Bewegung mehr erkannt)
  -   Chronik : ermöglicht das Historisieren der Daten
  -   Anzeige : ermöglicht die Anzeige der Daten im Dashboard
  -   Ereignis : Bei RFXcom muss dieses Kontrollkästchen immer aktiviert sein, da Sie ein RFXcom-Modul nicht abfragen können
  -   Unit : Dateneinheit (kann leer sein)
  -   min / max : Datengrenzen (können leer sein)
  -   erweiterte Konfiguration (kleine gekerbte Räder) : Zeigt die erweiterte Konfiguration des Befehls an (Protokollierungsmethode, Widget usw.)
  -   Test : Wird zum Testen des Befehls verwendet
  -   löschen (unterschreiben -) : ermöglicht das Löschen des Befehls

# Betrieb an RFXcom-Geräten

Oben auf Ihrer Gerätekonfigurationsseite befinden sich 3 Schaltflächen, mit denen Sie bestimmte Optionen ausführen können :

-   Duplikat : Geräte dupliziert
-   Erweiterte Konfiguration : Das gleiche Prinzip wie bei den Befehlen ermöglicht eine erweiterte Konfiguration der Geräte
-   Löschen : Entfernen Sie Ihre Ausrüstung
-   Speichern : Sichert Ihre Ausrüstung und vorgenommene Änderungen

# Einbeziehung von RFXcom-Geräten

Das Hinzufügen von RFXcom-Geräten ist sehr einfach. Sie müssen nur in den Einschlussmodus wechseln und warten, bis das Gerät eine Nachricht sendet. In diesem Fall teilt Jeedom Ihnen mit, dass neue Geräte enthalten sind, und erstellt diese automatisch.

# Liste kompatibler Module

Sie finden die nicht vollständige Liste der kompatiblen Module
[hier](https://doc.jeedom.com/de_DE/rfxcom/equipement.compatible)

# Fügen Sie eine Steckdose hinzu

Diese Betriebsart gilt für Steckdosen, Lichtempfänger usw. Gehen Sie zum Menü "Plugins", dann zu "Home Automation Protocol" und schließlich zu "RFXcom"".

Klicken Sie auf "Hinzufügen", um ein Modul hinzuzufügen, benennen Sie Ihr Modul und klicken Sie auf "Okay"".

Wählen Sie "Plug - Fault" unter "Equipment" und klicken Sie auf "Save"".

-   Gehen Sie zur Registerkarte "Bestellungen""
-   Versetzen Sie Ihr Modul / Ihre Buchse in den Lernmodus. (Klicken Sie auf die Lernschaltfläche Ihres Moduls / Sockels. Einige Steckdosen haben keine Taste. Ziehen Sie einfach den Stecker heraus, stecken Sie ihn wieder ein und befinden Sie sich für die ersten 3 Sekunden nach dem Einstecken des Steckers im Lernmodus.
-   Klicken Sie auf "Test" einer Bestellung.
-   Wenn die Verbindung gut funktioniert hat, können Sie auf "Speichern" klicken, andernfalls können Sie diesen Schritt wiederholen.

Ihr Modul / Socket ist jetzt mit JEEDOM verbunden. Denken Sie daran, es zu aktivieren und sichtbar zu machen, damit es im Dashboard angezeigt wird.

# Fügen Sie einen Somfy Store hinzu

Seit der Veröffentlichung des neuen RFXcom RFXtrx433E-Moduls ist es nun möglich, seine Somfy RTS-Geräte (RFY / RFU) von Jeedom aus zu steuern. (Wer unterstützt dieses Modul über das RFXcom-Plugin)

Pour ajouter un nouveau périphérique, se rendre dans le menu Plugins &gt; Protocole Domotique &gt; RFXcom

Klicken Sie auf die Schaltfläche + Hinzufügen und geben Sie Ihrem Gerät einen Namen. Ex : « Veranda-Verschluss ».

Se rendre sur le nouveau Périphérique créé et dans le menu déroulant Equipement, choisir « RTS Store Somfy – Défaut », en profiter pour lui définir un objet parent et une catégorie si vous le souhaitez et cliquer sur Enregistrer.

Die Befehle zum Verwalten des Rollladens werden automatisch generiert. Es bleibt nur, den Verschluss mit diesem Jeedom-Gerät zu koppeln. Drücken Sie dazu die Pairing-Taste auf der Fernbedienung des Verschlusses, den Sie steuern möchten, 2 bis 3 Sekunden lang, bis der Verschluss eine leichte Rückfahrt macht.

Wenn der Verschluss angezeigt hat, dass er auf eine Bestellung zum Pairing wartet, klicken Sie auf die Schaltfläche Test, die dem Programmbefehl in Jeedom entspricht.

Um das Lernen des neuen Befehls zu validieren, macht der Verschluss dann eine kurze Rückfahrt.

Afin de tester tout de suite, vous pouvez cliquer sur les boutons Test correspondants aux commandes « Monter, Descendre, Stop ». Le bouton « My » correspond à la commande Stop.

Aktivieren und machen Sie das Gerät mit den entsprechenden Kontrollkästchen sichtbar, um es im Dashboard anzeigen und verwenden zu können.

Sie können jetzt Ihre Somfy RTS-Komponente bei Jeedom bestellen.

# FAQ

>**Simulieren / Erkennen einer chinesischen rfxcom-Fernbedienung (nicht entschlüsselt).**
>
>   **Programmierung von chinesischen Code-Fernbedienungen in Jeedom**
>
>Im RFXCom-Plugin → Verwaltung von RFXCom-Protokollen :
>
>-   Aktivieren Sie NICHT Undecoded
>-   Überprüfen Sie Lightning4
>
>So rufen Sie die Codes von der Fernbedienung ab : Aktivieren Sie die Option "Alle Nachrichten speichern" und rufen Sie die IDs ab, indem Sie auf drücken
>Fernbedienungstasten, die wie eine Nachricht aussehen : 0913004C410A24015970, Subtyp = ARC, Id = 400A24… Beispiel "Nachrichten"
>eine 4-Tasten-Fernbedienung : 0913006D410A21015E70 0913006E410A22015970 0913006F410A24015970 09130070410A28015970
>
>Um ein Drücken auf den Befehl (Emission) zu simulieren, müssen Sie einen Gerätetyp "Lightning4 (13) Default" auswählen". Fügen Sie dann einen Befehl vom Typ Aktion / Fehler hinzu und geben Sie den Wert "Nachricht" in die Protokoll-ID ein (vom Typ 0913006D410A21015E70). Mit der Testtaste können Sie den korrekten Betrieb überprüfen.
>
>Für den Empfang muss unbedingt der von Jeedom generierte automatische Befehl (einer pro Schlüssel) mit dem Wert Id = 400A24 im ID-Feld oben links verwendet werden, während Geräte vom Typ "Lightning4 (13) Default" ausgewählt werden". Es ist die "Impuls" -Information, die jedes Mal empfangen wird, wenn die Fernbedienung gedrückt wird, und daher das Auslösen von Ereignissen in Jeedom ermöglicht.

>**Chinesische Staffelbox ak-rk01-12 von Jeedom aus gesteuert**
>
>Zur Relaissteuerung von Jeedom live : Bringen Sie den Jumper in Position 1-2 (rote LED-Seite und 3 Klemmenblöcke), um den Latch-Modus mit einem separaten EIN- und AUS-Befehl zu aktivieren. Erstellen Sie in Jeedom einen EIN-Befehl mit dem Wert 09130038410B20015C70 (wichtig ist die Kette in der Mitte 410B20 für EIN und 410B21 für AUS. Es ist möglich, die Codes mit den ersten 4 Buchstaben 410B zu variieren, aber die Enden für die EIN- und AUS-Befehle in 20 und 21 zu belassen. Sie können den Jumper auch auf 2-3 setzen und bei jedem Senden des Befehls nur den ersten Befehl verwenden, um den EIN / AUS-Status umzukehren

>**Ich sehe den rfxcom USB-Anschluss nicht**
>
>Stellen Sie sicher, dass Sie nicht brltty installieren müssen (`sudo apt-get remove brltty`, um es zu entfernen)


>**Nach ein paar Stunden / Tagen habe ich keine Updates mehr für meine Sonden, eine Wiederbelebung des Dämons korrigiert**
>
>Überprüfen Sie Ihr USB-Kabel (ein schlechtes USB-Kabel verursacht häufig solche Probleme, es sollte auch nicht zu lang sein). Überprüfen Sie auch Ihr Netzteil. Ein USB-Hub wird dringend empfohlen

>**Ich habe eine Nachricht, dass der Port nicht existiert**
>
>Überprüfen Sie, ob der Port korrekt konfiguriert und die Konfiguration gespeichert ist (er muss gespeichert werden, da sonst die Änderung nicht berücksichtigt wird).

>**Meine Sonden werden nicht gesehen**
>
>Stellen Sie sicher, dass Sie das Kontrollkästchen für die automatische Erstellung von Geräten aktiviert haben. Überprüfen Sie, ob der Dämon gestartet ist. Es ist auch möglich, den Debug-Daemon neu zu starten, um festzustellen, ob er die Nachrichten von den Tests empfängt. Überprüfen Sie auch, ob die richtigen Protokolle aktiviert sind (achten Sie darauf, nicht zu viele zu aktivieren, da dies sonst auch nicht funktioniert).

>**Beim Start im Debug-Modus erhalte ich die Meldung : "Socket-Adresse kann nicht gebunden werden "oder" Angeforderte Adresse kann nicht zugewiesen werden"**
>
>Dies liegt wahrscheinlich an einer falschen IP-Adresse, die im Menü Allgemein / Verwaltung / Konfiguration, Abschnitt "Netzwerkkonfiguration", dann "Interner Zugriff" und URL oder IP-Adresse konfiguriert wurde.

>**Der Dämon weigert sich zu starten**
>
>Versuchen Sie, den Daemon im Debug-Modus zu starten, um den Fehler zu sehen.

>**Warum die Zuordnung einer Steckdose bei Jeedom komplexer ist als bei anderen Hausautomationslösungen ?**
>
>Bei anderen Hausautomationslösungen reicht es oft aus, nur auf die Tasten auf der Fernbedienung zu klicken, um die von der Fernbedienung gesteuerte Buchse steuern zu können, weshalb dies bei Jeedom nicht der Fall ist ?
>
>Jeedom trennt die Fernbedienung von der Steckdose. Bei der vorherigen Methode müssen Ihre Tasten die Steckdose steuern. Wenn Sie die Zuordnung zwischen Steckdose und Fernbedienung aufheben, kann die Hausautomationslösung die Steckdose nicht mehr steuern.
>
>Unter Jeedom ist das anders : Die Zuordnung ist komplexer, es ist jedoch nicht mehr erforderlich, dass die Fernbedienung X-Tasten durch die Steuerung der Buchse monopolisiert. Mit diesen Tasten können Sie eine Steckdosengruppe steuern, die verschiedene Technologien mischt (z. B. Z-Wwave, Enocean und RFXcom).

>**Mein DIO-Stecker möchte sich nicht mit Jeedom verbinden**
>
>Dies geschieht normalerweise, wenn der interne Speicher der Steckdose voll ist. Um den Speicher der DIO / Chacon-Sockets (sie akzeptieren nicht mehr als 3 verschiedene Codes) unter Jeedom zu löschen, müssen Sie einen "Reset" -Befehl mit dem Wert 0B110006 \ erstellen#ID\#09030070 Zu diesem Zeitpunkt blinkt die rote LED zweimal und die Buchse kann eine neue Zuordnung zu Jeedom akzeptieren.

>**Die Batterie meiner Sonden geht nicht richtig hoch**
>
>Überprüfen Sie, ob Ihr Gerät eine Batteriebestellung mit der logischen ID "Batterie" enthält

>**Ich habe den Fehler [Errno 5] Eingabe- / Ausgabefehler**
>
>Dieser Fehler ist leider Hardware (Kommunikationsproblem mit RFXcom). Dies ist häufig auf ein Problem mit der Stromversorgung oder dem USB-Kabel zurückzuführen. Sie können daher versuchen, das USB-Kabel zu wechseln und / oder einen USB-Hub mit Stromversorgung zu verwenden

>**Ich kann trotz Aktivierung des richtigen Protokolls keinen Sensor erkennen**
>
> Überprüfen Sie, ob die Firmware auf dem neuesten Stand ist. Wenn es dann immer noch nicht gut ist, müssen Sie mit rfxmng testen

>**Ich habe den Fehler Timeout Wartestatus**
>
> Dies geschieht normalerweise in 2 Fällen :
>- Ihr RFXCOM-Modul ist nicht auf dem neuesten Stand [hier](http://www.rfxcom.com/epages/78165469.sf/nl_NL/?ObjectPath=/Shops/78165469/Categories/Downloads)
>- Sie haben das RFXCOM-Plugin verwendet, während Sie einen RFPLAYER haben, daher müssen Sie das RFPLAYER-Plugin verwenden

>**Ich habe Probleme beim Zusammenbau der Sensoren und die einzige Lösung besteht darin, alles neu zu starten**
>
> Mit Hilfe von Windows und dem rfxmanager ist es notwendig, im rfxcom die Aktivierung oder Nichtaktivierung der verschiedenen Protokolle zu härten
