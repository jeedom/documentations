# Nodon Fernbedienung - Oktan

**Das Modul**

![module](images/nodon.octan/module.jpg)

**Das Jeedom-Visual**

![vuedefaut1](images/nodon.octan/vuedefaut1.jpg)

## Zusammenfassung

Mit der Octan Remote NodOn® können Sie beliebige Z-Wave® oder Z-Wave Plus® kompatible Empfänger wie z. B. die NodOn® Funksteckdose (Main Controller Modus - Standalone) steuern oder sogar Szenen/Aktionen über eine Hausautomation auslösen kompatibel (Gateway-Modus)

Durch seinen integrierten Magneten lässt er sich mit seiner Wandhalterung überall vom Heizkörper bis zur Kühlschranktür befestigen. Zwischen Fernbedienung und Schalter revolutioniert die Octan Remote die Steuerung von Haushaltsgegenständen

## Fonctions

-   Steuerung alleine oder mit einer Hausautomationseinheit
-   Integrierter Magnet
-   Farb-LEDs
-   Wandplatte
-   2 Jahre Batterie

## Technische Eigenschaften

-   Einspeisung : Batterie CR2032 – Autonomie 1,5 - 2 Jahre
-   4 Tasten
-   Befestigung der Wandhalterung durch doppelseitiges Klebeband (im Lieferumfang enthalten) oder Schrauben (nicht im Lieferumfang enthalten))
-   Eingebauter Magnet zur Befestigung an Metalloberflächen
-   Betriebstemperatur : 0°C bis 40°C - Höhe : 2000m
-   Drahtloses Z-Wave®-Protokoll : 868.4 MHz – Serie 500 – Kompatibles Z-Wave Plus® SDK 06.51.01 Reichweite: 40m drinnen / 80m draußen
-   Maße : 80\*80\*15mm
-   2 Jahre Garantie

## Moduldaten

-   Markieren : Nodon
-   Nachname : CRC-3-1-00 Octan-Fernbedienung
-   Hersteller-ID : 357
-   Geben Sie Produkt ein : 2
-   Produkt ID : 1

## Configuration

Um das OpenZwave-Plugin zu konfigurieren und zu wissen, wie man Jeedom einbindet, beziehen Sie sich auf diese [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Inklusionsmodus zu versetzen, drücken Sie die beiden Tasten (1 und 2), bis das Licht rosa wird, und drücken Sie dann die Taste 1 gemäß der Papierdokumentation.

![inclusion](images/nodon.octan/inclusion.jpg)

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/nodon.octan/information.jpg)

### Commandes

Sobald das Modul erkannt wird, sind die dem Modul zugeordneten Befehle verfügbar.

![Aufträge](images/nodon.octan/commandes.jpg)

Hier ist die Liste der Befehle :

-   Tasten : Dies ist der Befehl, der die gedrückte Taste hebt

+----------------+----------------+--------------- -+----------------+----------------+
| Tasten        | Die Unterstützung          | Lange drücken     | Veröffentlichung    | Doppelte Unterstützung   |
+================+===============+=============== =+================+================+
| **1**          | 10             | 12             | 11             | 13             |
+----------------+----------------+--------------- -+----------------+----------------+
| **2**          | 20             | 22             | 21             | 23             |
+----------------+----------------+--------------- -+----------------+----------------+
| **3**          | 30             | 32             | 31             | 33             |
+----------------+----------------+--------------- -+----------------+----------------+
| **4**          | 40             | 42             | 41             | 43             |
+----------------+----------------+--------------- -+----------------+----------------+

### Modulkonfiguration

> **Wichtig**
>
> Bei einer erstmaligen Aufnahme wecken Sie das Modul immer direkt nach der Aufnahme auf.

Wenn Sie das Modul dann gemäß Ihrer Installation konfigurieren möchten, müssen Sie über die Schaltfläche "Konfiguration" des Jeedom OpenZwave-Plugins gehen.

![Aufbau plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Einstellungen geklickt haben)

![Config1](images/nodon.octan/config1.jpg)

Parameterdetails :

-   1-2 : Ermöglicht die Auswahl der Schaltflächenprofile bei zentraler Verwendung (unbrauchbar für die Verwendung in Jeedom)
-   3 : Wichtiger Parameter, um zu sagen, ob der Schalter im Scene- oder Central Scene-Modus arbeiten soll (unbedingt Scene)
-   4-7 : Wählen Sie den Betriebsmodus der Tasten (bei Gruppenzuordnungen)
-   8 : Ermöglicht die Auswahl des Betriebsmodus der LED

### Groupes

Dieses Modul hat 7 Assoziationsgruppen.

![Groupe](images/nodon.octan/groupe.jpg)

![Groupe](images/nodon.octan/groupe2.jpg)

-   Gruppe 1 – Rettungsleine : Diese Gruppe wird im Allgemeinen verwendet, um Informationen vom Smart Plug an den Hauptnetzwerkcontroller zu melden.
-   Gruppe 2 bis 5 – Geräte in diesen Gruppen werden durch die entsprechende Taste gemäß dem MONO-Profil gesteuert
-   Gruppe 6 bis 7 – Geräte in diesen Gruppen werden über die entsprechende Taste gemäß dem DUO-Profil gesteuert

> **Wichtig**
>
> Zumindest sollte Jeedom in Gruppe 1 landen

## Gut zu wissen

### Besonderheiten

-   Dieses Modul kann temperamentvoll sein, wenn es enthalten ist. Zögern Sie nicht, ihn nach der Aufnahme ein- oder zweimal aufzuwecken, und überprüfen Sie die Assoziationsgruppe sorgfältig.

## Wakeup

Um dieses Modul aufzuwecken, drücken Sie einfach eine der Tasten

## Wichtiger Hinweis

> **Wichtig**
>
> Sie müssen das Modul aufwecken : nach seiner Aufnahme, nach einer Änderung der Konfiguration, nach einer Änderung des Aufweckens, nach einer Änderung der Assoziationsgruppen
