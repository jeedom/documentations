# Edisio EMV 400 Shutter

**Das Modul**

![module](images/emv.400/module.jpg)

**Das Jeedom Visual**

![vue default](images/emv.400/vue_default.jpg)

## Zusammenfassung

Mit dem Mikromodul EMV-400 können Sie einen bidirektionalen Motor oder eine elektrische Ausrüstung verwalten. Es ermöglicht die Steuerung von 2 Start / Stopp-Ausgängen oder eines Rollladenverschlusses zum Öffnen / Stoppen / Schließen.

Darüber hinaus ist die Interaktion mit anderen Protokollen möglich. Sie kann über Schalter und / oder Fernbedienungen der Marke Edisio direkt von Jeedom, aber auch über jeden Z-Wave-Sender in Ihrem Netzwerk gesteuert werden.

Jedes Edisio-Modul in einem elektrischen Netzwerk kann mit den anderen Modulen als drahtloser Repeater fungieren, um eine vollständige Abdeckung Ihres Hauses zu gewährleisten.

Schließlich kann jedes Modul im Remote-Modus verwendet werden. Dies ist sehr praktisch, da ein Sender zugeordnet werden kann, ohne auf den Empfänger zugreifen zu müssen.

> **Wichtig**
>
> Neutral ist nur für den "Verschlussmodus" erforderlich"

## Fonctions

-   2 Relaisausgänge mit Strom versorgt
-   Wird in einer 55-mm-Unterputzdose oder direkt in den Öffnungsboxen installiert
-   Art der Verwendung: Ein / Aus, Öffnen / Stoppen / Schließen
-   Kompatibel mit elektronischen und mechanischen Endschaltermotoren
-   Remote-Modus
-   Timer-Funktion: Ein / Aus-Modus: 30min oder 60min
-   Signalreplik (Repeater))
-   Bidirektionales Mikromodul
-   Batteriestand des Senders niedrig
-   Klein, diskret und ästhetisch
-   Benutzerfreundlichkeit und Installation

## Technische Eigenschaften

-   Modultyp: Edisio Empfänger
-   Alimentation: 230 VAC, 50 Hz
-   Verdrahtung: 4 Drähte, 2 für die Steuerung und 2 für die Stromversorgung
-   Frequenz: 868,3 MHz
-   Angetriebene Ausgänge: 2 Relais
-   Maximale Leistung: 2A pro Ausgang
-   Widerstandslast: 460W
-   Andere Ausgaben: 100W
-   Betriebstemperatur: -10 ° C + 45 ° C
-   Dimensions: 48 x 46 x 26 mm
-   Stärke des Schutzes: IP20

## Moduldaten

-   Kennzeichen : Edisio Smart Home
-   Familienname, Nachname : EMV-400

## Allgemeine Konfiguration

Informationen zum Konfigurieren des Edisio-Plugins und zum Zuordnen eines Moduls zu Jeedom finden Sie hier [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/edisio/).

> **Wichtig**
>
> Damit Jeedom Ihre Sendermodule automatisch erstellt, vergessen Sie nicht, die Option in der Plugin-Konfiguration zu aktivieren.

> **Wichtig**
>
> Umgekehrt müssen Edisio-Empfänger in Jeedom manuell erstellt werden.

### DIP-Schalter und "R" -Taste"

![bouton association](images/emv.400/bouton_association.jpg)

-   Mit dem DIP-Schalter können Sie die Parameter (Repeater / Shutter-Modus / Beleuchtung / Timer) des Moduls einstellen:

![dip switch](images/emv.400/dip_switch.jpg)

> **Hinweis**
>
> Um unnötige Redundanzen zu vermeiden, aktivieren Sie niemals den "Repeater" -Modus auf allen Empfängern, höchstens 5 Empfängern pro Installation.

-   Mit der Taste "R" können Sie dem Empfänger einen Sender zuordnen, die Timerfunktion aktivieren oder deaktivieren und den Fernbedienungsmodus aktivieren :

![bouton r](images/emv.400/bouton_r.jpg)

> **Hinweis**
>
> Durch Drücken von R 3x wird der Fernbedienungsmodus aktiviert.

### Betriebsdiagramm

Je nachdem, ob Ihr Sender im Modus "1-Taste" oder "2-Taste" konfiguriert ist, funktioniert das Modul so:

> **Hinweis**
>
> Informationen zur Konfiguration Ihres Senders finden Sie in der Dokumentation des Herstellers.

![diagramme](images/emv.400/diagramme.jpg)

### Timer-Funktion

Mit der Timer-Funktion können die Relais nach 30 oder 60 Minuten automatisch ausgeschaltet werden.

> **Hinweis**
>
> Diese Funktion wird nur in "Beleuchtung" verwendet"

## Der Verschluss"

Der "Shutter" -Modus dient zur Fernsteuerung eines bidirektionalen Motors mit elektronischem und mechanischem Endschalter.

> **Wichtig**
>
> Neutral ist notwendig

### Konfiguration und elektrische Anschlüsse

![mode moteur](images/emv.400/mode_moteur.jpg)

> **Wichtig**
>
> Damit sich das Modul im "Shutter" -Modus befindet, muss sich der DIP-Schalter 2 unten befinden

> **Wichtig**
>
> NIEMALS MIT LIVE VERBINDEN

### Erstellung des Moduls in Jeedom

Um ein Edisio-Empfängermodul mit Jeedom zu verknüpfen, müssen Sie manuell ein Gerät erstellen.

![ajout equip](images/emv.400/ajout_equip.jpg)

Sobald Sie Ihre Ausrüstung erstellt haben, sollten Sie diese erhalten :

![crea equip](images/emv.400/crea_equip.jpg)

> **Hinweis**
>
> Denken Sie daran, Ihre neue Ausrüstung zu aktivieren.

Wählen Sie in der Liste der Geräte rechts "Shutter-Mikromodul" aus
roulant" :

![infos equip](images/emv.400/infos_equip.jpg)

### Commandes

Sobald Ihre Ausrüstung gespeichert ist, sollten Sie die mit dem Modul verknüpften Befehle erhalten :

![Aufträge](images/emv.400/commande.jpg)

Hier ist die Liste der Befehle :

-   Zustand : Dies ist der Befehl, der die Statusrückmeldung simuliert
-   Aufsteigen : Dies ist der Befehl, der den Verschluss öffnet
-   Halt : Dies ist der Befehl, der die Bewegung des Verschlusses stoppt
-   Gehen : Dies ist der Befehl, der den Verschluss schließt
-   E. : Dies ist der Befehl, mit dem Sie den Remote-Modus verwenden können

> **Wichtig**
>
> Die Statusrückmeldung wird von Jeedom simuliert. Wenn Sie einen anderen Sender verwenden, kann Jeedom den Status des Empfängers nicht aktualisieren.

### Informations

Sobald Ihre Ausrüstung mit Jeedom verknüpft ist, stehen verschiedene Informationen zur Verfügung :

![Aufträge](images/emv.400/infos_moteur.jpg)

-   Schaffung : Gibt das Datum an, an dem das Gerät erstellt wurde
-   Kommunikation : Zeigt die letzte zwischen Jeedom und dem Mikromodul aufgezeichnete Kommunikation an
-   Schlagzeug : Zeigt den Batteriestatus für Batteriemodule an
-   Status : Gibt den Status des Moduls zurück

## Assoziation des Mikromoduls mit Jeedom

Damit Sie mit Jeedom interagieren können, als wäre es ein Edisio-Sender.

> **Hinweis**
>
> Einer der großen Vorteile von Edisio besteht darin, dass einem Empfänger mehrere Sender zugeordnet sein können

### Standardmethode

Jeder Ausgang ist einem Jeedom-Befehl zugeordnet:

-   Ausgabe 1 zuordnen :
    -   Drücken Sie 1x auf dem "R" des Empfängers. Ein einzelner Piepton (kurze Wiederholung) zeigt an, dass die Programmierung von Ausgang 1 aktiviert ist.
    -   Drücken Sie innerhalb von 10 Sekunden im Befehl "Öffnen" in Jeedom "Test". Ein kontinuierlicher Piepton zeigt die Zuordnung von Ausgang 1 zu Jeedom an.
    -   Drücken Sie innerhalb von 10 Sekunden erneut "R" am Empfänger, um die Zuordnung zu bestätigen. Der Piepton stoppt.
-   Ausgabe 2 zuordnen :
    -   Drücken Sie zweimal auf das "R" des Empfängers. Ein doppelter Piepton (kurz in der Wiederholung) zeigt an, dass die Programmierung von Ausgang 2 aktiviert ist.
    -   Drücken Sie innerhalb von 10 Sekunden beim Befehl "Schließen" in Jeedom "Test". Ein kontinuierlicher Piepton signalisiert die Zuordnung von Ausgang 2 zu Jeedom.
    -   Drücken Sie innerhalb von 10 Sekunden erneut "R" am Empfänger, um die Zuordnung zu bestätigen. Der Piepton stoppt.

> **Hinweis**
>
> Der Befehl "Stop" muss nicht zugeordnet werden, er erfolgt automatisch.

### Remote-Methode

Wir haben zu Beginn dieser Dokumentation darüber gesprochen, bei Modulen, die bereits in Zwischendecken oder sogar Dachböden eingebaut sind. Diese Methode ermöglicht das Hinzufügen eines neuen Senders, ohne auf das "R" des Empfängers zuzugreifen.

-   Verknüpfen Sie die Schaltfläche "R" :
    -   Drücken Sie 3x auf "R" am Empfänger. Dreifacher Piepton (kurze Wiederholung) zeigt den aktivierten Programmiermodus an.
    -   Drücken Sie innerhalb von 10 Sekunden "Test" auf den Befehl "E" in Jeedom. Ein kontinuierlicher Piepton signalisiert die Zuordnung zu Jeedom.
    -   Drücken Sie innerhalb von 10 Sekunden erneut "E" am Empfänger, um die Zuordnung zu bestätigen. Der Piepton stoppt.

Es ist geschafft, dein Jeedom ist jetzt verbunden und sein Befehl "E"
Ersetzt jetzt die Taste "R" am Empfänger.

-   Verknüpfen Sie einen neuen Sender mit einem Empfänger, dem Jeedom bereits zugeordnet ist :
    -   Ausfahrt 1 :
        -   Drücken Sie 1x auf "Test" den "E" -Befehl in Jeedom. Ein einzelner Piepton (kurz in der Wiederholung) zeigt die Programmierung von Ausgang 1 an, der aktiviert ist.
        -   Drücken Sie innerhalb von 10 Sekunden eine der Tasten "C" des neuen zugeordneten Senders. Ein kontinuierlicher Piepton zeigt die Zuordnung von Ausgang 1 an.
        -   Drücken Sie innerhalb von 10 Sekunden erneut auf "Test" des Befehls "E" in Jeedom, um die Zuordnung zu bestätigen. Der Signalton stoppt.
    -   Ausfahrt 2 :
        -   Drücken Sie 2x auf "Test" des Befehls "E" in Jeedom. Ein doppelter Piepton (kurze Wiederholung) zeigt an, dass die Programmierung von Ausgang 2 aktiviert ist.
        -   Drücken Sie innerhalb von 10 Sekunden eine der "C" -Tasten des neuen zugeordneten Senders. Ein kontinuierlicher Piepton zeigt die Zuordnung von Ausgang 2 an.
        -   Drücken Sie innerhalb von 10 Sekunden erneut auf "Test" des Befehls "E" in Jeedom, um die Zuordnung zu bestätigen. Der Signalton stoppt.

> **Hinweis**
>
> Sie können so oft von vorne beginnen, wie Sie dem Empfänger Sender zuordnen möchten

## Alternative visuelle

![vue alt moteur](images/emv.400/vue_alt_moteur.jpg)

## FAQ.

**So löschen Sie den Speicher des Empfängers ?**

Halten Sie das "R" 10 Sekunden lang gedrückt, bis ein kontinuierlicher Piepton ertönt.
