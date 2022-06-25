# DUWI 05436 "Rollladen"

 **Das Modul**

![1 Module](images/duwi.05436/1-Module.PNG)

**Das Jeedom-Visual**

![Visuel defaut](images/duwi.05436/Visuel_defaut.PNG)

## Zusammenfassung 

Das Rollladenmodul DUWI 05436 ermöglicht die Steuerung von Rollläden in zwei Richtungen.

Seine Hauptmerkmale sind :

-   Die Möglichkeit, einen 'Common' zu verwenden, um nach oben oder unten zu schalten. Dadurch ist es möglich, beide Richtungen mit jeder Art von Spannung zu steuern, sogar mit einem Neutralleiter.
-   Die Fähigkeit, ein kontinuierliches Aufwärts-/Abwärtssignal ohne Zeitbegrenzung zu senden.

Attention: Dieses Modul sendet seinen Status nicht an den Z-Wave-Controller, wenn der Benutzer direkt auf die Tasten drückt. Es ist notwendig, eine „Aktualisierung“ durchzuführen, um die Position zu aktualisieren oder die Umfrage anzupassen (siehe unten).

## Fonctions

-   Runter nach oben
-   Ein gemeinsamer Draht, der nach oben oder unten geschaltet wird
-   Erfordert Neutral zum Betrieb
-   Sicherungsschutz
-   Anstiegs- und Abfallzeiten einstellbar durch Einstellung oder durch Lernen am Modul
-   Der Schalter wird mit dem Modul geliefert, nicht austauschbar

## Technische Eigenschaften

-   Mod-Typ : Z-Wave Empfänger / Aktor
-   Stromversorgung 230V, 50Hz
-   Neutral erforderlich
-   Tragfähigkeit : 1800 W (resistiv), 460 VA (induktiv)
-   Sicherung : T8AH
-   Frequenz : 868,42 MHz
-   Maße : 52 x 52 x 31 mm
-   Temperaturbereich : 0 °C / +40 °C

## Moduldaten

-   Markieren : Popp/Duwi
-   Nachname : Jalousiesteuerung ZW ESJ
-   Hersteller-ID : 100
-   Produktart : 16385
-   Produkt ID : 0

## Connexion

![2 Montage](images/duwi.05436/2-Montage.PNG)

## Configuration

Um das OpenZwave-Plugin zu konfigurieren und zu wissen, wie man Jeedom einbindet, beziehen Sie sich auf diese [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um das Modul in den Inklusionsmodus zu versetzen, drücken Sie dreimal nach oben oder unten. Der Ausschluss erfolgt auf die gleiche Weise.

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/duwi.05436/3-Inclusion.PNG)

### Commandes

Sobald das Modul erkannt wird, sind die dem Modul zugeordneten Befehle verfügbar.

![Aufträge](images/duwi.05436/4-Commandes.PNG)

Hier ist die Liste der Befehle :

-   Bundesland : Dies ist die aktuelle Position des Bereichs in Prozent von 0 bis 99
-   Herunterkommen : Befehl, vollständig abzusteigen
-   Hinaufgehen : Befehl zum vollständigen Mounten
-   Halt : sofortiges Stoppen der Bewegung
-   Aktualisierung : aktualisiert den aktuellen Zustand des Moduls
-   Eben : Schieberegler zum Positionieren einer Teilöffnung

#### Anpassen der Anstiegs- und Abfallzeiten :

Sie müssen den Schalter entfernen, um Zugriff auf die beiden "Auf"- und "Ab"-Tasten zu haben".

Positionieren Sie die Klappe ganz oben, wenn Sie die Sinkzeit einstellen möchten und umgekehrt.

Drücken Sie gleichzeitig mindestens 2s auf die beiden Tasten (auf und ab). Die LED sollte grün blinken.

Drücken Sie dann kontinuierlich die Abwärts- oder Aufwärtstaste, bis Sie die gewünschte Position erreicht haben. Wenn Sie die Taste loslassen, leuchtet die LED einige Sekunden lang dauerhaft grün. Die Uhrzeit wird gespeichert.

Wiederholen Sie den Vorgang in die andere Richtung.

### Modulkonfiguration

Wenn Sie das Modul dann gemäß Ihrer Installation konfigurieren möchten, müssen Sie über die Schaltfläche "Konfiguration" des Jeedom OpenZwave-Plugins gehen.

![Aufbau plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Einstellungen geklickt haben)

![Config1](images/duwi.05436/5-Paramètres.PNG)

Parameterdetails :

-   0 : Laufzeit :
Dies sind die Anstiegs- und Abfallzeiten. Sie sollten Ihr Lernen dort finden.
Die Codierung erfolgt durch zwei Bytepaare : der erste für den Aufstieg und der zweite für den Abstieg.
Die Werte werden im Modul hexadezimal codiert und in der Jeedom-Anzeige dezimal zurückgegeben.
Zum Beispiel : für 4626 ergibt dies hexadezimal : 0x1212. Entweder 0x12 für hoch und 0x12 für runter. Entweder in Dezimalzahl wieder zurückgebracht : 18s für auf und ab.
Notieren : Wenn für diesen Parameter ein Wert auf Null gesetzt wird, bedeutet dies, dass das Modul ohne Zeitbegrenzung auf Anstieg oder Abfall umschaltet. Es ist dann notwendig, ein 'Stop' zu senden, um zu unterbrechen.
-   1 : Stop-Funktion : Aktiviert oder deaktiviert :
Wird verwendet, um anzuzeigen, ob das Drücken in die entgegengesetzte Richtung während einer Bewegung den Rollladen stoppt oder sofort in die entgegengesetzte Richtung zurücksendet.

### Groupes

Dieses Modul hat nur eine Assoziationsgruppe, in der sich Ihr Z-Wave-Controller befinden muss.

![Groupe](images/duwi.05436/6-Groupes.PNG)

## Gut zu wissen

-   Wie eingangs erwähnt, meldet das Modul nicht die Positionsänderungen, die der Benutzer durch direktes Drücken des Schalters vorgenommen hat. Um eine Statusrückmeldung zu haben, ist es daher notwendig :
    - Konfigurieren Sie entweder eine Umfrage bei 5 Minuten in der Konfiguration, Registerkarte "Werte"'
![Groupe](images/duwi.05436/7-Poll.PNG)
  - Erstellen Sie entweder ein Szenario, das den Befehl „Aktualisieren“ alle x Minuten (mindestens 1 Minute) ausführt)
-   Das Einstellen eines Vorgangs ohne Zeitbegrenzung kann für VMC-Steuerungen nützlich sein
