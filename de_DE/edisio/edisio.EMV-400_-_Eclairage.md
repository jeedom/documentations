# Edison EMV 400 Beleuchtung

**Das Modul**

![module](images/emv.400/module.jpg)

**Das Jeedom-Visual**

![vue default eclairage](images/emv.400/vue_default_eclairage.jpg)

## Zusammenfassung

Mit dem Mikromodul EMV-400 können Sie einen bidirektionalen Motor oder elektrische Geräte verwalten. Es ermöglicht die Steuerung von 2 Ein/Aus-Ausgängen oder eines Rollladens Auf/Stop/Zu.

Darüber hinaus ist die Interaktion mit anderen Protokollen möglich, es ist steuerbar über Schalter und/oder Fernbedienungen der Marke Edisio, direkt von Jeedom, aber auch von jedem Z-Wave-Sender in Ihrem Netzwerk.

Jedes Edisio-Modul im Stromnetz hat die Möglichkeit, mit den anderen Modulen als drahtloser Repeater zu fungieren, um eine vollständige Abdeckung Ihres Hauses zu gewährleisten.

Schließlich kann jedes Modul im Remote-Modus verwendet werden, was sehr praktisch ist, da es Ihnen ermöglicht, einen Sender zuzuordnen, ohne auf den Empfänger zugreifen zu müssen.

> **Wichtig**
>
> Der Neutralleiter ist nur für den "Shutter"-Modus notwendig"

## Fonctions

-   2 aktive Relaisausgänge
-   Kann in einer 55-mm-Einbaudose oder direkt in den Öffnungsdosen installiert werden
-   Art der Verwendung: Start/Stopp, Öffnen/Stopp/Schließen
-   Kompatibel mit Motoren mit elektronischen und mechanischen Endschaltern
-   Remote-Modus
-   Timer-Funktion: Ein/Aus-Modus: 30min oder 60min
-   Nachbildung des Signals (Repeater)
-   Bidirektionales Mikromodul
-   Niedriger Batteriestand des Senders
-   Klein, diskret und ästhetisch
-   Benutzerfreundlichkeit und Installation

## Technische Eigenschaften

-   Mod-Typ: Edisio-Empfänger
-   Alimentation: 230 VAC, 50 Hz
-   Verdrahtung: 4 Drähte, 2 für die Steuerung und 2 für die Stromversorgung
-   Frequenz: 868,3MHz
-   Angetriebene Ausgänge: 2 Relais
-   Maximale Kraft: 2A pro Ausgang
-   Ohmsche Last: 460W
-   Andere Ausgaben: 100W
-   Betriebstemperatur: -10 °C +45 °C
-   Dimensions: 48 x 46 x 26 mm
-   Stärke des Schutzes: IP20

## Moduldaten

-   Markieren : Edisio Smart Home
-   Nachname : EMV-400

## Allgemeine Einrichtung

Informationen zum Konfigurieren des Edisio-Plug-ins und zum Zuordnen eines Moduls zu Jeedom finden Sie hier [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/edisio/).

> **Wichtig**
>
> Damit Jeedom Ihre Sendermodule automatisch erstellt, vergessen Sie nicht, die Option in der Plugin-Konfiguration zu aktivieren.

> **Wichtig**
>
> Umgekehrt müssen Edisio-Empfänger manuell in Jeedom erstellt werden.

### DIP-Schalter und "R"-Taste"

![bouton association](images/emv.400/bouton_association.jpg)

-   Mit dem DIP-Schalter können Sie die Parameter (Repeater / Shutter Mode / Lighting / Timer) des Moduls einstellen:

![dip switch](images/emv.400/dip_switch.jpg)

> **Notiz**
>
> Um unnötige Redundanzen zu vermeiden, aktivieren Sie niemals den „Repeater“-Modus an allen Empfängern, maximal 5 Empfänger pro Installation.

-   Die Taste „R“ ermöglicht es, einen Sender mit dem Empfänger zu verknüpfen, die Timer-Funktion zu aktivieren oder zu deaktivieren und den Remote-Modus zu aktivieren :

![bouton r](images/emv.400/bouton_r.jpg)

> **Notiz**
>
> R 3x drücken aktiviert den Remote-Modus.

### Betriebsdiagramm

 Abhängig davon, ob Ihr Sender im „1-Tasten“- oder „2-Tasten“-Modus konfiguriert ist, funktioniert das Modul wie folgt:

> **Notiz**
>
> Schlagen Sie in der Dokumentation des Herstellers nach, um Ihren Sender konfigurieren zu können.

![diagramme](images/emv.400/diagramme.jpg)

### Timer-Funktion

Die Timerfunktion ermöglicht das automatische Abschalten der Relais nach 30 oder 60 Minuten.

-   Ermöglichen : 4x „R“ am Empfänger drücken, Bestätigung durch einen einzelnen Dauerton
-   Deaktivieren: Drücken Sie 5x "R" auf dem Empfänger, Bestätigung durch 3 einfache Pieptöne.
-   30-Minuten-Timer: DIP-Schalter 3 oben
-   60-Minuten-Timer: DIP-Schalter 3 unten

## Der Modus „Beleuchtung“"

Der Modus "Beleuchtung" ermöglicht Ihnen die Fernsteuerung von 2 elektrischen Geräten.

> **Wichtig**
>
> Neutral ist nicht erforderlich

### Konfiguration und elektrische Anschlüsse

![mode eclairage](images/emv.400/mode_eclairage.jpg)

> **Wichtig**
>
> Damit sich das Modul im Modus „Beleuchtung“ befindet, muss der DIP-Schalter 2 oben sein

> **Wichtig**
>
> NIEMALS EINSTECKEN

### Erstellung des Moduls in Jeedom

Um ein Edisio-Empfängermodul mit Jeedom zu verknüpfen, müssen Sie manuell ein Gerät erstellen.

![ajout equip](images/emv.400/ajout_equip.jpg)

Sobald Ihre Ausrüstung erstellt ist, sollten Sie diese erhalten :

![crea equip](images/emv.400/crea_equip.jpg)

> **Notiz**
>
> Denken Sie daran, Ihre neue Ausrüstung zu aktivieren.

Wählen Sie in der Ausstattungsliste rechts „Micro-Light-Modul“ aus" :

![infos equip eclairage](images/emv.400/infos_equip_eclairage.jpg)

### Commandes

Sobald Ihre Ausrüstung gespeichert ist, sollten Sie die mit dem Mod verknüpften Befehle erhalten :

![Aufträge](images/emv.400/commande_eclairage.jpg)

Hier ist die Liste der Befehle :

-   Wir : Dies ist der Befehl, der Relais 1 aktiviert
-   Aus : Dies ist der Befehl, der Relais 1 deaktiviert
-   Am 2 : Dies ist der Befehl, der Relais 2 aktiviert
-   Aus 2: Dies ist der Befehl, der Relais 2 deaktiviert
-   E : Dies ist der Befehl, mit dem Sie den Remote-Modus verwenden können

> **Wichtig**
>
> Die Zustandsrückgabe wird von Jeedom simuliert. Wenn Sie also einen anderen Sender verwenden, kann Jeedom den Status des Empfängers nicht aktualisieren.

### Informations

Sobald Ihre Ausrüstung mit Jeedom verknüpft ist, sind verschiedene Informationen verfügbar :

![Aufträge](images/emv.400/infos_eclairage.jpg)

-   Schaffung : Gibt das Datum an, an dem das Gerät erstellt wurde
-   Kommunikation : Zeigt die letzte aufgezeichnete Kommunikation zwischen Jeedom und dem Mikromodul an
-   Batterie : Zeigt den Batteriestatus für batteriebetriebene Module an
-   Status : Gibt den Status des Moduls zurück

## Assoziation des Mikromoduls mit Jeedom

Damit Sie mit Jeedom interagieren können, als wäre es ein Edisio-Sender.

> **Notiz**
>
> Einer der großen Vorteile von Edisio ist, dass einem Empfänger mehrere Sender zugeordnet werden können

### Standardmethode

Jede Ausgabe muss einem Jeedom-Befehl zugeordnet werden:

-   Ausgang 1 zuordnen :
    -   1x auf das „R“ des Empfängers drücken, einzelner Piepton (kurz in Wiederholung) signalisiert die Programmierung von Ausgang 1 aktiviert.
    -   Drücken Sie innerhalb von 10 Sek. „Test“ des „Öffnen“-Befehls in Jeedom, ein Dauerton signalisiert die Zuordnung von Ausgang 1 zu Jeedom.
    -   Drücken Sie innerhalb von 10 Sekunden erneut "R" auf dem Empfänger, um die Zuordnung zu bestätigen, der Piepton stoppt.
-   Ausgang 2 zuordnen :
    -   Zweimal auf das „R“ des Empfängers drücken, doppelter Piepton (kurze Wiederholung) signalisiert die Programmierung von Ausgang 2 aktiviert.
    -   Drücken Sie innerhalb von 10 Sek. „Test“ des Befehls „Schließen“ in Jeedom, ein Dauerton signalisiert die Zuordnung von Ausgang 2 zu Jeedom.
    -   Drücken Sie innerhalb von 10 Sekunden erneut "R" auf dem Empfänger, um die Zuordnung zu bestätigen, der Piepton stoppt.

### Remote-Methode

Wir haben am Anfang dieser Dokumentation darüber gesprochen. Bei bereits eingebauten Modulen, in Zwischendecken oder auch Dachböden. Diese Methode ermöglicht das Hinzufügen eines neuen Senders ohne Zugriff auf das „R“ des Empfängers.

-   Ordnen Sie die Schaltfläche "R" zu" :
    -   „R“ am Empfänger 3x drücken, dreifacher Piepton (kurze Wiederholung) signalisiert Programmiermodus aktiviert.
    -   Drücken Sie innerhalb von 10 Sek. „Test“ des „E“-Befehls in Jeedom, ein Dauerton signalisiert die Verbindung zu Jeedom.
    -   Drücken Sie innerhalb von 10 Sekunden erneut „E“ auf dem Empfänger, um die Zuordnung zu bestätigen, der Piepton stoppt.

Es ist fertig, Ihr Jeedom ist jetzt verbunden und sein "E"-Befehl ersetzt jetzt die "R"-Taste auf dem Empfänger.

-   Ordnen Sie einen neuen Sender einem Empfänger zu, dem Jeedom bereits zugeordnet ist :
    -   Ausgang 1 :
        -   1x auf „Test“ den „E“-Befehl in Jeedom drücken, einzelner Piepton (kurz in Wiederholung) signalisiert die Programmierung von Ausgang 1 aktiviert.
        -   Innerhalb von 10 Sekunden eine der „C“-Tasten des neuen zuzuordnenden Senders drücken, ein Dauerton signalisiert die Zuordnung von Ausgang 1.
        -   Drücken Sie innerhalb von 10 Sekunden beim Befehl „E“ in Jeedom erneut „Test“, um die Zuordnung zu bestätigen, der Piepton stoppt.
    -   Ausgang 2 :
        -   2x auf „Test“ des „E“-Befehls in Jeedom drücken, doppelter Piepton (kurz in Wiederholung) signalisiert die Programmierung von Ausgang 2 aktiviert.
        -   Innerhalb von 10 Sekunden eine der „C“-Tasten des neuen zuzuordnenden Senders drücken, ein Dauerton signalisiert die Zuordnung von Ausgang 2.
        -   Drücken Sie innerhalb von 10 Sekunden beim Befehl „E“ in Jeedom erneut „Test“, um die Zuordnung zu bestätigen, der Piepton stoppt.

> **Notiz**
>
> Sie können so oft neu beginnen, wie Sie Sender mit dem Empfänger verknüpfen möchten

## Alternative Optik

![Aufträge](images/emv.400/vue_alt_eclairage.jpg)

## Häufig gestellte Fragen.

**So löschen Sie den Empfängerspeicher ?**

Halten Sie das „R“ 10 Sekunden lang gedrückt, bis der Dauerton ertönt.
