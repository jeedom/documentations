# Aeotec Schlüsselanhänger Gen5

**Das Modul**

![module](images/aeotec.keyfob-gen5/module.jpg)

**Das Jeedom-Visual**

![vuedefaut1](images/aeotec.keyfob-gen5/vuedefaut1.jpg)

## Zusammenfassung

Die Aeon Labs Schlüsselanhänger-Fernbedienung in modernem und ansprechendem Design verfügt über 4 Tasten zur Steuerung aller Arten von Z-Wave-Geräten wie Lampen, Jalousien usw.

Mit seinen sehr kleinen Abmessungen können Sie es problemlos in Ihre Tasche stecken. Es ist einfach zu bedienen und stilvoll und verfügt über einen Ring, mit dem es an Schlüsseln befestigt werden kann, sodass es beim Verlassen des Hauses oder bei der Rückkehr nach Hause verfügbar ist.

Mit jeder Taste können Sie dank der Verwaltung von kurzen und langen Drücken zwei Geräte oder Szenen steuern. Diese Fernbedienung kann auch als Haupt- oder Zweitsteuerung verwendet werden.

Und da die Schlüsselanhänger-Fernbedienung Keyfob Gen5 Teil der Gen5-Reihe von Aeotec ist, übertrifft sie alles, was bisher da war. Es verwendet den neuesten Chip der Z-Wave 500-Serie und bietet eine um 50 % höhere Funkreichweite und eine um 250 % schnellere Kommunikationsgeschwindigkeit im Vergleich zu früheren Z-Wave-Produkten.

## Fonctions

-   Schlüsselanhänger Fernbedienung
-   Haupt- oder Sekundärregler
-   Ultrakompakt und ultra-Design
-   4 konfigurierbare Tasten
-   Verwaltet bis zu 8 Geräte/Szenen
-   Schiebeschutzverschluss
-   Teil der Gen5-Reihe von Aeon Labs
-   Sicherheit der Funkkommunikation durch AES-128-Verschlüsselung
-   Integriert den Chip der Z-Wave 500-Serie
-   250 % schnellere Kommunikation im Vergleich zu Standard-Z-Wave-Geräten
-   Antennenoptimierung, Reichweite 100 Meter
-   Benutzerfreundlichkeit und Installation

## Technische Eigenschaften

-   Mod-Typ : Z-Wave-Sender
-   Einspeisung : 1 CR2450 3V Lithiumbatterie
-   Lebensdauer der Batterie : 1 Jahr
-   Frequenz: 868.42MHz
-   Übertragungsdistanz : 100 m auf freiem Feld
-   Betriebstemperatur : -10 °C bis 50 °C
-   Maße : 55 x 30 x 13 mm (L x B x H)

## Moduldaten

-   Markieren : Aeotec
-   Nachname : ZW088 Schlüsselanhänger Gen5
-   Hersteller-ID : 134
-   Geben Sie Produkt ein : 1
-   Produkt ID : 88

## Configuration

Um das OpenZwave-Plugin zu konfigurieren und zu wissen, wie man Jeedom einbindet, beziehen Sie sich auf diese [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Inklusionsmodus zu versetzen, drücken Sie die LEARN-Taste gemäß seiner Papierdokumentation.

![inclusion](images/aeotec.keyfob-gen5/inclusion.jpg)

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/aeotec.keyfob-gen5/information.jpg)

### Commandes

Sobald das Modul erkannt wird, sind die dem Modul zugeordneten Befehle verfügbar.

![Aufträge](images/aeotec.keyfob-gen5/commandes.jpg)

Hier ist die Liste der Befehle :

-   Tasten : Dies ist der Befehl, der die gedrückte Taste hebt
  - 1 : Taste 1 kurz drücken
  - 2 : Taste 1 lange drücken
  - 3 : Taste 2 kurz drücken
  - 4 : Taste 2 lange drücken
  - 5 : Taste 3 kurzes Drücken
  - 6 : Taste 3 lange drücken
  - 7 : Taste 4 mal kurz drücken
  - 8 : Taste 4 lange drücken

### Modul-Setup

> **Wichtig**
>
> Bei einer erstmaligen Aufnahme wecken Sie das Modul immer direkt nach der Aufnahme auf.

Wenn Sie das Modul dann gemäß Ihrer Installation konfigurieren möchten, müssen Sie über die Schaltfläche "Konfiguration" des Jeedom OpenZwave-Plugins gehen.

![Aufbau plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Einstellungen geklickt haben)

![Config1](images/aeotec.keyfob-gen5/config1.jpg)

Parameterdetails :

-   250: Funktionsweise der Fernbedienung (unbedingt Szene setzen, um sie als Fernbedienung zu verwenden)
-   255 : ermöglicht das Zurücksetzen des Handsenders auf die Werkseinstellungen

### Groupes

Dieses Modul hat zwei Assoziationsgruppen, die erste ist die einzig wesentliche.

![Groupe](images/aeotec.keyfob-gen5/groupe.jpg)

##  Gut zu wissen

### Besonderheiten

Um dieses Modul als Fernbedienung zu verwenden, gehen Sie wie folgt vor :

-   1 : Inklusive Fernbedienung
-   2 : Fernbedienung aufwecken
-   3 : Ändern Sie Parameter 250 auf Szene
-   4 : Wecken Sie die Fernbedienung auf und vergewissern Sie sich, dass die Änderung berücksichtigt wurde
-   5 : Ändern Sie den Betriebsmodus der Fernbedienung, indem Sie die beiden Tasten auf der Rückseite 3 Sekunden lang drücken.

## Wakeup

Um dieses Modul aufzuwecken, gibt es nur eine Vorgehensweise :

-   Halten Sie die LEARN-Taste 3 Sekunden lang gedrückt

## Häufig gestellte Fragen.

Dieses Modul wird durch 3 Sekunden langes Drücken der LEARN-Taste aktiviert.

Dieses Modul ist ein batteriebetriebenes Modul, die neue Konfiguration wird nur berücksichtigt, wenn Sie die Fernbedienung aufwecken.

## Wichtiger Hinweis

Sie müssen das Modul aufwecken : nach seiner Aufnahme, nach einer Änderung der Konfiguration, nach einer Änderung des Aufweckens, nach einer Änderung der Assoziationsgruppen
