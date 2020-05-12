# Greenwave PowerNode - 6 Sockel

**Das Modul**

![module](images/greenwave.powernode/module.jpg)

**Das Jeedom Visual**

![vuedefaut1](images/greenwave.powernode/vuedefaut1.jpg)

## Zusammenfassung

. . .

. . . . Zum Beispiel "blau für das Schlafzimmer ". . . .

 : .

. . .

.

## Fonctions

-   6-Port Z-Wave Steckdosenleiste
-   Ermöglicht die Überwachung des Verbrauchs angeschlossener Geräte
-   EIN / AUS-Funktion
-   .
-   Ein / Aus-Taste direkt auf der Steckdosenleiste
-   Überstromschutz
-   Lichtstatusanzeige

## Technische Daten

-   Versorgung : 250 V AC, 50 Hz
-   Maximaler Ladestrom : 10A
-   Maximale Lastleistung : 2400 W (bei 240 V)
-   Standby-Verbrauch : 0,4 W.
-   Messgenauigkeit : ± 0,1 W.
-   Überstromschutz : 10A interne Sicherung
-   Steckertyp : DIN49440 / EWG 7/7 (Schuko)
-   Z-Wave-Radiofrequenz : 868,42 MHz
-   Maximale Reichweite Z-Wave : 30m
-   Betriebstemperatur : 0 ° C bis + 25 ° C
-   Lagertemperatur : -20 ° C bis + 60 ° C
-   Maximale Luftfeuchtigkeit : 5% bis 90%
-   IP-Klasse (Feuchtigkeitstoleranz) : IP20

## Moduldaten

-   Machen Sie : GreenWave
-   Name : GreenWave \ [6 x Sockets \]
-   Hersteller ID : 153
-   Produkttyp : 3
-   Produkt-ID : 4

## Configuration

Informationen zum Konfigurieren des OpenZwave-Plugins und zum Einfügen von Jeedom finden Sie hier [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> .

![inclusion](images/greenwave.powernode/inclusion.jpg)

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/greenwave.powernode/information.jpg)

### Commandes

Sobald das Modul erkannt wurde, sind die dem Modul zugeordneten Befehle verfügbar.

![Befehle](images/greenwave.powernode/commandes.jpg)

![Befehle](images/greenwave.powernode/commandes2.jpg)

![Befehle](images/greenwave.powernode/commandes3.jpg)

![Befehle](images/greenwave.powernode/commandes4.jpg)

![Befehle](images/greenwave.powernode/commandes5.jpg)

Hier ist die Liste der Befehle :

-   Zustand-1 : 
-   On-1 : Dies ist der Befehl, der Socket 1 einschaltet
-   Aus-1 : Es ist der Befehl, der Socket 1 ausschaltet
-   Power-1 : 
-   Conso-1 : 
-   Zustand-2 : 
-   On-2 : Es ist der Befehl, der Socket 2 einschaltet
-   Aus-2 : Es ist der Befehl, der Sockel 2 ausschaltet
-   Power-2 : 
-   Conso-2 : 
-   Zustand-3 : 
-   On-3 : Dies ist der Befehl, der Socket 3 einschaltet
-   Aus-3 : Es ist der Befehl, der Socket 3 ausschaltet
-   Power-3 : 
-   Conso-3 : 
-   Zustand-4 : 
-   On-4 : Es ist der Befehl, der Socket 4 einschaltet
-   Aus-4 : Es ist der Befehl, der Socket 4 ausschaltet
-   Power-4 : 
-   Conso-4 : 
-   Zustand-5 : 
-   On-5 : Es ist der Befehl, der Socket 5 einschaltet
-   Aus-5 : Es ist der Befehl, der Socket 5 ausschaltet
-   Power-5 : 
-   Conso-5 : 
-   Zustand-6 : 
-   On-6 : Es ist der Befehl, der Socket 6 einschaltet
-   Aus-6 : Es ist der Befehl, der Socket 6 ausschaltet
-   Power-6 : 
-   Conso-6 : 

.

### Konfiguration des Moduls

Sie können das Modul entsprechend Ihrer Installation konfigurieren. Gehen Sie dazu auf die Schaltfläche "Konfiguration" des OpenZwave-Plugins von Jeedom.

![Konfiguration plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Einstellungen geklickt haben)

![Config1](images/greenwave.powernode/config1.jpg)

.

Parameterdetails :

-   1 : Verzögerungen, bevor die Taste blinkt : 
-   2 : Ausgewählte Radfarbe (automatisch erkannt)

### Groupes

.

![Groupe](images/greenwave.powernode/groupe.jpg)

## Gut zu wissen

### Besonderheiten / Polling

.
![Config2](images/greenwave.powernode/config2.jpg)

. 

### Gesamtverbrauch

![consocumul](images/greenwave.powernode/consocumul.jpg)

.

![consocumul2](images/greenwave.powernode/consocumul2.jpg)

### Reset

![Config3](images/greenwave.powernode/config3.jpg)

. . .

## Wakeup

Keine Vorstellung von Aufwecken auf diesem Modul.
