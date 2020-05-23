# DUWI 05436 "Rollladen"

 **Das Modul**

![1 Module](images/duwi.05436/1-Module.PNG)

**Das Jeedom Visual**

![Visuel defaut](images/duwi.05436/Visuel_defaut.PNG)

## Zusammenfassung 

Mit dem Rollladenmodul DUWI 05436 können Sie Rollläden in zwei Richtungen steuern.

Seine Hauptmerkmale sind :

-   Die Möglichkeit, ein "Common" zu verwenden, um den Aufstieg oder Abstieg zu wechseln. Plötzlich ist es möglich, beide Richtungen mit jeder Art von Spannung zu steuern, sogar mit einem Neutralleiter.
-   Die Möglichkeit, ein kontinuierliches Auf- / Abstiegssignal ohne zeitliche Begrenzung zu senden.

Attention: Dieses Modul sendet seinen Status nicht an den Z-Wave-Controller, wenn der Benutzer die Tasten direkt drückt. Sie müssen an seiner Position eine Aktualisierung durchführen, um die Umfrage zu aktualisieren oder anzupassen (siehe unten)).

## Funktionen

-   Hoch / runter
-   Ein gemeinsamer Draht, der beim Auf- oder Abstieg eingeschaltet wird
-   Zum Betrieb ist Neutral erforderlich
-   Sicherungsschutz
-   Anstiegs- und Abfallzeiten können durch Parametereinstellung oder durch Lernen am Modul eingestellt werden
-   Der Schalter wird mit dem Modul geliefert und ist nicht austauschbar

## Technische Daten

-   Modultyp : Z-Wave Empfänger / Aktor
-   230V, 50Hz Stromversorgung
-   Neutral erforderlich
-   Maximale Belastung : 1800 W (ohmsch), 460 VA (induktiv))
-   Sicherung : T8AH
-   Frequenz : 868,42 MHz
-   Abmessungen : 52 x 52 x 31 mm
-   Temperaturbereich : 0 ° C / + 40 ° C

## Moduldaten

-   Machen Sie : Popp / Duwi
-   Name : ZW ESJ Blind Control
-   Hersteller ID : 100
-   Produkttyp : 16385
-   Produkt-ID : 0

## Einloggen

![2 Montage](images/duwi.05436/2-Montage.PNG)

## Konfiguration

Informationen zum Konfigurieren des OpenZwave-Plugins und zum Einfügen von Jeedom finden Sie hier [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um das Modul in den Einschlussmodus zu versetzen, drücken Sie dreimal die Auf- oder Ab-Taste. Der Ausschluss erfolgt auf die gleiche Weise.

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/duwi.05436/3-Inclusion.PNG)

### Befehle

Sobald das Modul erkannt wurde, sind die dem Modul zugeordneten Befehle verfügbar.

![Befehle](images/duwi.05436/4-Commandes.PNG)

Hier ist die Liste der Befehle :

-   Zustand : Dies ist die aktuelle Position des Verschlusses in Prozent von 0 bis 99
-   Geh runter : Befehl, vollständig abzusteigen
-   Geh hoch : Befehl, vollständig zu mounten
-   STOP : Sofortiger Bewegungsstopp
-   Aktualisieren : Aktualisieren Sie den aktuellen Status des Moduls
-   Ebene : Schieberegler zum Positionieren einer Teilöffnung

#### Einstellen der Anstiegs- und Abfallzeiten :

Der Schalter muss entfernt werden, um Zugriff auf die beiden Tasten "Auf" und "Ab" zu haben".

Positionieren Sie die Klappe ganz oben, wenn Sie die Abstiegszeit anpassen möchten, und umgekehrt.

Drücken Sie mindestens 2 Sekunden lang auf beiden Tasten (nach oben und unten) gleichzeitig. Die LED sollte grün blinken.

Halten Sie dann die Abwärts- oder Aufwärts-Taste gedrückt, bis Sie die gewünschte Position erreicht haben. Wenn Sie die Taste loslassen, leuchtet die LED einige Sekunden lang grün. Die Zeit wird gespeichert.

Wiederholen Sie den Vorgang in die andere Richtung.

### Konfiguration du module

Wenn Sie das Modul dann entsprechend Ihrer Installation konfigurieren möchten, müssen Sie die Schaltfläche "Konfiguration" des OpenZwave-Plugins von Jeedom aufrufen.

![Konfiguration plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Parameter geklickt haben)

![Config1](images/duwi.05436/5-Paramètres.PNG)

Parameterdetails :

-   0 : Laufzeit :
Dies sind die Anstiegs- und Abfallzeiten. Sie sollten Ihr Lernen dort finden.
Die Codierung erfolgt durch zwei Bytepaare : der erste für den Aufstieg und der zweite für den Abstieg.
Die Werte werden im Modul hexadezimal codiert und in der Anzeige von Jeedom dezimal zurückgesetzt.
Zum Beispiel : für 4626 ergibt dies hexadezimal : 0x1212. Entweder 0x12 für den Aufstieg und 0x12 für den Abstieg. Entweder auf Dezimal gebracht : 18s für Auf- und Abstieg.
Hinweis : Wenn Sie für diesen Parameter einen Wert auf Null setzen, bedeutet dies, dass das Modul ohne zeitliche Begrenzung nach oben oder unten schaltet. Es wird dann notwendig sein, einen 'Stop' zu senden, um zu unterbrechen.
-   1 : Stop-Funktionalität : Aktiviert oder deaktiviert :
Wird verwendet, um anzuzeigen, ob durch Drücken in die entgegengesetzte Richtung während der Bewegung der Verschluss gestoppt oder sofort in die entgegengesetzte Richtung zurückgeschaltet wird.

### Gruppen

Dieses Modul hat nur eine Zuordnungsgruppe, in der sich Ihr Z-Wave-Controller befinden muss.

![Groupe](images/duwi.05436/6-Groupes.PNG)

## Gut zu wissen

-   Wie zu Beginn angegeben, meldet das Modul die vom Benutzer durch direktes Drücken des Schalters vorgenommenen Positionsänderungen nicht. Für eine Rückkehr des Staates ist es daher notwendig :
    - Konfigurieren Sie entweder eine Umfrage nach 5 Minuten in der Konfiguration, Registerkarte 'Werte'
![Groupe](images/duwi.05436/7-Poll.PNG)
  - Erstellen Sie entweder ein Szenario, in dem der Befehl 'Aktualisieren' alle x Minuten (mindestens 1 Minute) gestartet wird)
-   Das Festlegen des Betriebs ohne Zeitlimit kann für VMC-Befehle hilfreich sein
