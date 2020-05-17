# Nicken Télécommande - Octan

**Das Modul**

![module](images/nodon.octan/module.jpg)

**Das Jeedom Visual**

![vuedefaut1](images/nodon.octan/vuedefaut1.jpg)

## Zusammenfassung

Mit der Octan Remote NodOn® können Sie jeden Z-Wave®- oder Z-Wave Plus®-kompatiblen Empfänger wie die NodOn®-Fernbedienungsbuchse (Hauptsteuerungsmodus - Standalone) steuern oder sogar Szenen / Aktionen über ein Hausautomationssystem auslösen kompatibel (Gateway-Modus)

Dank seines integrierten Magneten kann er über seine Wandhalterung überall vom Kühler bis zur Kühlschranktür befestigt werden. Zwischen Fernbedienung und Schalter revolutioniert die Octan-Fernbedienung die Steuerung von Haushaltsgegenständen

## Funktionen

-   Steuerung allein oder mit einem Hausautomationssystem
-   Integrierter Magnet
-   Farbig geführt
-   Wandplatte
-   2 Jahre Batterie

## Technische Daten

-   Versorgung : CR2032 Batterie - Autonomie 1,5 - 2 Jahre
-   4 Tasten
-   Wandhalterung mit doppelseitigem Kleber (im Lieferumfang enthalten) oder Schrauben (nicht im Lieferumfang enthalten)
-   Integrierter Magnet zur Befestigung an der Metalloberfläche
-   Betriebstemperatur : 0 ° C bis 40 ° C - Höhe : 2000m
-   Z-Wave®-Funkprotokoll : 868.4MHz - 500 Series - Z-Wave Plus® SDK 06.51 kompatibel.01 Geltungsbereich: 40 m innen / 80 m außen
-   Abmessungen : 80 \*80 \*15mm
-   2 Jahre Garantie

## Moduldaten

-   Machen Sie : Nodon
-   Name : CRC-3-1-00 Octan Remote
-   Hersteller ID : 357
-   Produkttyp : 2
-   Produkt-ID : 1

## Konfiguration

Informationen zum Konfigurieren des OpenZwave-Plugins und zum Einfügen von Jeedom finden Sie hier [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Einschlussmodus zu versetzen, drücken Sie die beiden Tasten (1 und 2), bis das Licht rosa wird, und drücken Sie dann die Taste 1 gemäß der Papierdokumentation.

![inclusion](images/nodon.octan/inclusion.jpg)

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/nodon.octan/information.jpg)

### Befehle

Sobald das Modul erkannt wurde, sind die dem Modul zugeordneten Befehle verfügbar.

![Befehle](images/nodon.octan/commandes.jpg)

Hier ist die Liste der Befehle :

-   Tasten : Es ist der Befehl, der den Knopf nach oben drückt

+ ---------------- + ---------------- + --------------- - + ---------------- + ---------------- +
| Tasten        | Unterstützung          | Lange drücken     | Entspannung    | Doppelte Unterstützung   |
+ =============== + =============== + ================ = + =============== + ================= +
| **1**          | 10             | 12             | 11             | 13             |
+ ---------------- + ---------------- + --------------- - + ---------------- + ---------------- +
| **2**          | 20             | 22             | 21             | 23             |
+ ---------------- + ---------------- + --------------- - + ---------------- + ---------------- +
| **3**          | 30             | 32             | 31             | 33             |
+ ---------------- + ---------------- + --------------- - + ---------------- + ---------------- +
| **4**          | 40             | 42             | 41             | 43             |
+ ---------------- + ---------------- + --------------- - + ---------------- + ---------------- +

### Konfiguration du module

> **Wichtig**
>
> Wecken Sie das Modul bei einer ersten Aufnahme immer unmittelbar nach der Aufnahme auf.

Wenn Sie das Modul dann entsprechend Ihrer Installation konfigurieren möchten, müssen Sie die Schaltfläche "Konfiguration" des OpenZwave-Plugins von Jeedom aufrufen.

![Konfiguration plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Einstellungen geklickt haben)

![Config1](images/nodon.octan/config1.jpg)

Parameterdetails :

-   1-2 : Ermöglicht die Auswahl der Schaltflächenprofile bei zentraler Verwendung (für die Verwendung in Jeedom unbrauchbar)
-   3 : Wichtiger Parameter, um anzugeben, ob der Schalter im Szenen- oder zentralen Szenenmodus arbeiten soll (Szene absolut einstellen)
-   4-7 : Wählen Sie die Tastenbetriebsart (bei Gruppenzuordnungen)
-   8 : Hier können Sie den Betriebsmodus der LED auswählen

### Gruppen

Dieses Modul hat 7 Zuordnungsgruppen.

![Groupe](images/nodon.octan/groupe.jpg)

![Groupe](images/nodon.octan/groupe2.jpg)

-   Gruppe 1 - Rettungsleine : Diese Gruppe wird im Allgemeinen verwendet, um Informationen vom Smart Plug an den Hauptnetzwerkcontroller zu melden.
-   Gruppe 2 bis 5 - Die Geräte in diesen Gruppen werden über die entsprechende Schaltfläche entsprechend dem MONO-Profil gesteuert
-   Gruppe 6 bis 7 - Die Geräte in diesen Gruppen werden über die entsprechende Schaltfläche entsprechend dem DUO-Profil gesteuert

> **Wichtig**
>
> Zumindest sollte Jeedom in Gruppe 1 landen

## Gut zu wissen

### Besonderheiten

-   Dieses Modul kann bei der Aufnahme schwierig sein. Zögern Sie nicht, es 1 oder 2 Mal nach der Aufnahme aufzuwecken, und überprüfen Sie die Assoziationsgruppe sorgfältig.

## Aufwachen

Um dieses Modul zu aktivieren, drücken Sie einfach eine der Tasten

## Wichtiger Hinweis

> **Wichtig**
>
> Sie müssen das Modul aufwecken : nach seiner Aufnahme, nach einer Änderung der Konfiguration, nach einer Änderung des Aufweckens, nach einer Änderung der Assoziationsgruppen
