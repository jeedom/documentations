# Nodon Switch - Wandschalter

**Das Modul**

![module](images/nodon.wallswitch/module.jpg)

**Das Jeedom-Visual**

![vuedefaut1](images/nodon.wallswitch/vuedefaut1.jpg)

## Zusammenfassung

Der NodOn®-Wandschalter kann jedes Z-Wave®- oder Z-Wave Plus®-kompatible Gerät wie den NodOn®-Smart-Plug direkt steuern oder sogar Szenen über eine kompatible Hausautomationszentrale auslösen.

Der Schalter hat eine Montageplatte zur einfachen Montage im Haus: B. mit den Schrauben einer Unterputzdose, durch Anschrauben an die Wand oder ganz einfach durch Aufkleben mit dem auf der Rückseite der Platte vorhandenen doppelseitigen Klebeband.

## Fonctions

-   Steuerung alleine oder mit einer Hausautomationseinheit
-   Einfach zu montieren und zu demontieren
-   Angenehmes Tragegefühl
-   Kabellos
-   2 Jahre Batterie

## Technische Eigenschaften

-   Einspeisung : Batterie CR2032 – Autonomie 1,5 - 2 Jahre
-   4 Tasten
-   Wandmontage durch doppelseitiges Klebeband (im Lieferumfang enthalten) oder Schrauben (nicht im Lieferumfang enthalten))
-   Betriebstemperatur : 0 °C bis 40 °C
-   Höhe : 2000m
-   Drahtloses Z-Wave®-Protokoll : 868.4 MHz – Serie 500 – Kompatibles Z-Wave Plus® SDK 06.51.06
-   Zielfernrohr : 40m drinnen / 70m draußen
-   Maße : 80\*80\*15mm
-   2 Jahre Garantie
-   EN 60950-1:2006 +A11:2009 + A1:2010+A12:2011 + A2:2013
-   EN 300 220-2 V2.4.1
-   EN301 489-1 V1.9.2
-   EN301 489-3 V1.6.1
-   EN62479:2010

## Moduldaten

-   Markieren : Nodon
-   Nachname : CWS-3-1-01 Wandschalter
-   Hersteller-ID : 357
-   Geben Sie Produkt ein : 2
-   Produkt ID : 3

## Configuration

Um das OpenZwave-Plugin zu konfigurieren und zu wissen, wie man Jeedom einbindet, beziehen Sie sich auf diese [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Inklusionsmodus zu versetzen, müssen Sie die beiden Tasten (1 und 2) drücken, bis das Licht rosa wird, und dann die Taste 1 gemäß der Papierdokumentation drücken.

![inclusion](images/nodon.wallswitch/inclusion.jpg)

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/nodon.wallswitch/information.jpg)

### Commandes

Sobald das Modul erkannt wurde, sind die den Modulen zugeordneten Befehle verfügbar.

![Aufträge](images/nodon.wallswitch/commandes.jpg)

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
![Config1](images/nodon.wallswitch/config1.jpg)

Parameterdetails :

-   1-2 : Ermöglicht die Auswahl des Profils der Schaltflächen bei zentraler Verwendung (unbrauchbar für die Verwendung in Jeedom)
-   3 : Wichtiger Parameter, um zu sagen, ob der Schalter im Scene- oder Central Scene-Modus arbeiten soll (unbedingt Scene)
-   4-7 : Wählen Sie den Betriebsmodus der Tasten (bei Gruppenzuordnungen)
-   8 : Ermöglicht die Auswahl des Betriebsmodus der LED

### Groupes

Dieses Modul hat 7 Assoziationsgruppen.

![Groupe](images/nodon.wallswitch/groupe.jpg)

![Groupe](images/nodon.wallswitch/groupe2.jpg)

-   Gruppe 1 – Rettungsleine : Diese Gruppe wird im Allgemeinen verwendet, um Informationen vom Smart Plug an den Hauptnetzwerkcontroller zu melden.
-   Gruppe 2 bis 5 – Geräte in diesen Gruppen werden durch die entsprechende Taste gemäß dem MONO-Profil gesteuert
-   Gruppe 6 bis 7 – Geräte in diesen Gruppen werden über die entsprechende Taste gemäß dem DUO-Profil gesteuert

> **Wichtig**
>
> Zumindest sollte Jeedom in Gruppe 1 landen

## Gut zu wissen

### Besonderheiten

-   Dieses Modul kann temperamentvoll sein, wenn es enthalten ist. Zögern Sie nicht, ihn nach der Aufnahme ein- oder zweimal aufzuwecken. Überprüfen Sie die Assoziationsgruppe.

## Wakeup

Um dieses Modul aufzuwecken, drücken Sie einfach eine dieser Tasten

## Wichtiger Hinweis

> **Wichtig**
>
> Sie müssen das Modul aufwecken : nach seiner Aufnahme, nach einer Änderung der Konfiguration, nach einer Änderung des Aufweckens, nach einer Änderung der Assoziationsgruppen
