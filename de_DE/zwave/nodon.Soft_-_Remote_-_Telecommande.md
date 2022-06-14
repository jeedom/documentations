# Nodon-Fernbedienung - Soft-Fernbedienung

**Das Modul**

![module](images/nodon.softremote/module.jpg)

**Das Jeedom-Visual**

![vuedefaut1](images/nodon.softremote/vuedefaut1.png)

## Zusammenfassung

Die NodOn® Soft Remote kann jedes Z-Wave® oder Z-Wave Plus® kompatible Gerät wie den NodOn® Smart Plug direkt steuern.

Es kann auch Szenen über eine kompatible Hausautomationseinheit auslösen.

## Fonctions

-   Steuert jedes Z-Wave-fähige Gerät
-   Stoß- und spritzwassergeschützt
-   Kann dank integriertem Magneten überall befestigt werden
-   6 Farben erhältlich

## Technische Eigenschaften

-   Einspeisung : Batterie CR2032 – Autonomie 1,5 - 2 Jahre
-   4 Tasten
-   Eingebauter Magnet zur Befestigung an Metalloberflächen
-   Stoß- und spritzwassergeschützt
-   Betriebstemperatur : 0°C bis 40°C - Höhe : 2000m
-   Drahtloses Z-Wave®-Protokoll : 868.4 MHz – Serie 500 – Kompatibles Z-Wave Plus® SDK 06.51.06
-   Zielfernrohr : 40m drinnen / 80m draußen
-   Abmessungen 56\*56\*20mm
-   2 Jahre Garantie

## Moduldaten

-   Markieren : Nodon
-   Nachname : CRC-3-6-0x Soft-Fernbedienung
-   Hersteller-ID : 357
-   Geben Sie Produkt ein : 2
-   Produkt ID : 2

## Configuration

Um das OpenZwave-Plugin zu konfigurieren und zu wissen, wie man Jeedom einbindet, beziehen Sie sich auf diese [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Inklusionsmodus zu versetzen, müssen Sie die beiden Tasten (+ und 0 voll) drücken, bis das Licht rosa wird, und dann die Taste + drücken, gemäß der Papierdokumentation.

![inclusion](images/nodon.softremote/inclusion.jpg)

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/nodon.softremote/information.png)

### Commandes

Sobald das Modul erkannt wird, sind die dem Modul zugeordneten Befehle verfügbar.

![Aufträge](images/nodon.softremote/commandes.png)

Hier ist die Liste der Befehle :

-   Tasten : Dies ist der Befehl, der die gedrückte Taste hebt

+----------------+----------------+--------------- -+----------------+----------------+
| Tasten        | Die Unterstützung          | Lange drücken     | Veröffentlichung    | Doppelte Unterstützung   |
+================+===============+=============== =+================+================+
| **1 (0         | 10             | 12             | 11             | 13             |
| plein)**       |                |                |                |                |
+----------------+----------------+--------------- -+----------------+----------------+
| **2 (+)**      | 20             | 22             | 21             | 23             |
+----------------+----------------+--------------- -+----------------+----------------+
| **3 (0 leer)** | 30             | 32             | 31             | 33             |
+----------------+----------------+--------------- -+----------------+----------------+
| **4 (-)**      | 40             | 42             | 41             | 43             |
+----------------+----------------+--------------- -+----------------+----------------+

-   Batterie : Dies ist der Befehl, der den Batteriestand erhöht

### Modulkonfiguration

> **Wichtig**
>
> Bei einer erstmaligen Aufnahme wecken Sie das Modul immer direkt nach der Aufnahme auf.

Wenn Sie das Modul dann gemäß Ihrer Installation konfigurieren möchten, müssen Sie über die Schaltfläche "Konfiguration" des Jeedom OpenZwave-Plugins gehen.

![Aufbau plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Einstellungen geklickt haben)

![Config1](images/nodon.softremote/config1.png)

Parameterdetails :

-   1-2 : Ermöglicht die Auswahl des Profils der Schaltflächen bei zentraler Verwendung (unbrauchbar für die Verwendung in Jeedom)
-   3 : Wichtiger Parameter, um zu sagen, ob der Schalter im Scene- oder Central Scene-Modus arbeiten soll (unbedingt Scene)
-   4-7 : Wählen Sie den Betriebsmodus der Tasten (bei Gruppenzuordnungen)
-   8 : Ermöglicht die Auswahl des Betriebsmodus der LED

### Groupes

Dieses Modul hat 7 Assoziationsgruppen.

![Groupe](images/nodon.softremote/groupe.png)

-   Gruppe 1 – Rettungsleine : Diese Gruppe wird im Allgemeinen verwendet, um Informationen vom Smart Plug an den Hauptnetzwerkcontroller zu melden.
-   Gruppe 2 bis 5 – Geräte in diesen Gruppen werden durch die entsprechende Taste gemäß dem MONO-Profil gesteuert
-   Gruppe 6 bis 7 – Geräte in diesen Gruppen werden über die entsprechenden Tasten gemäß dem DUO-Profil gesteuert

> **Wichtig**
>
> Zumindest sollte Jeedom in Gruppe 1 landen

## Gut zu wissen

### Besonderheiten

-   Dieses Modul kann temperamentvoll sein, wenn es enthalten ist. Zögern Sie nicht, ihn nach der Aufnahme ein- oder zweimal aufzuwecken. Überprüfen Sie die Assoziationsgruppe.

## Wakeup

Um dieses Modul aufzuwecken, drücken Sie einfach eine der Tasten

## Wichtiger Hinweis

> **Wichtig**
>
> Sie müssen das Modul aufwecken : nach seiner Aufnahme, nach einer Änderung der Konfiguration, nach einer Änderung des Aufweckens, nach einer Änderung der Assoziationsgruppen
