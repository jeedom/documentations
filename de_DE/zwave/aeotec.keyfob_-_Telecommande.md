# Aeotec Schlüsselanhänger

**Das Modul**

![module](images/aeotec.keyfob/module.jpg)

**Das Jeedom-Visual**

![vuedefaut1](images/aeotec.keyfob/vuedefaut1.jpg)

## Zusammenfassung

Die Schlüsselanhänger-Fernbedienung von Aeon Labs in modernem und ansprechendem Design verfügt über 4 Tasten zur Steuerung aller Arten von Z-Wave-Geräten wie Lampen, Jalousien usw

Mit seinen sehr kleinen Abmessungen können Sie es problemlos in Ihre Tasche stecken. Es ist einfach zu bedienen und stilvoll und hat einen Ring, um es an den Schlüsseln zu befestigen, sodass es beim Verlassen des Hauses oder bei der Rückkehr nach Hause verfügbar ist.

Mit jeder Taste können Sie dank der Verwaltung von kurzen und langen Drücken zwei Geräte oder Szenen steuern. Diese Fernbedienung kann sowohl als Haupt- als auch als Zweitsteuerung verwendet werden.

## Fonctions

-   Schlüsselanhänger Fernbedienung
-   Haupt- oder Sekundärregler
-   Ultrakompakt und ultra-Design
-   4 konfigurierbare Tasten
-   Verwaltet bis zu 8 Geräte/Szenen
-   Schiebeschutzverschluss
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
-   Nachname : Schlüsselanhänger
-   Hersteller-ID : 134
-   Geben Sie Produkt ein : 1
-   Produkt ID : 22

# Configuration

Um das OpenZwave-Plugin zu konfigurieren und zu wissen, wie man Jeedom einbindet, beziehen Sie sich auf diese [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).
> **Wichtig**
>
> Um dieses Modul in den Inklusionsmodus zu versetzen, drücken Sie die LEARN-Taste gemäß seiner Papierdokumentation.
>![Aufnahme](images/aeotec.keyfob/inclusion.jpg)
>Einmal enthalten, sollten Sie dies erhalten :
![Plugin Zwave](images/aeotec.keyfob/information.jpg)

### Commandes

Sobald das Modul erkannt wird, sind die den Modulen zugeordneten Befehle verfügbar.

![Aufträge](images/aeotec.keyfob/commandes.jpg)

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
> Bei einer erstmaligen Aufnahme das Modul immer gleich danach aufwecken
> Aufnahme.

Wenn Sie das Modul dann gemäß Ihrer Installation konfigurieren möchten, müssen Sie über die Schaltfläche "Konfiguration" des Jeedom OpenZwave-Plugins gehen.

![Aufbau plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Einstellungen geklickt haben)
![Config1](images/aeotec.keyfob/config1.jpg)

Parameterdetails :
-   250: Funktionsweise der Fernbedienung (unbedingt Szene setzen, um sie als Fernbedienung zu verwenden)

Alle anderen Parameter sind nur bei direkter Verbindung zwischen Fernbedienung und Modulen nützlich.

### Groupes
Dieses Modul hat eine einzelne Assoziationsgruppe. Es ist wesentlich.

![Groupe](images/aeotec.keyfob/groupe.jpg)

## Gut zu wissen

### Besonderheiten

Um dieses Modul als Fernbedienung zu verwenden, gehen Sie wie folgt vor :

-   1 : Inklusive Fernbedienung
-   2 : Fernbedienung aufwecken
-   3 : Ändere den Parameter 250 auf „true“ (tu es auch dann, wenn es bereits wahr zu sein scheint)
-   4 : Wecken Sie die Fernbedienung auf und vergewissern Sie sich, dass die Änderung berücksichtigt wurde
-   5 : Ändern Sie den Betriebsmodus der Fernbedienung, indem Sie die beiden Tasten auf der Rückseite 3 Sekunden lang drücken.

# Wakeup

Um dieses Modul aufzuwecken, gibt es nur eine Vorgehensweise :

-   Halten Sie die LEARN-Taste 3 Sekunden lang gedrückt

# Häufig gestellte Fragen

Dieses Modul wird durch 3 Sekunden langes Drücken der LEARN-Taste aktiviert.
Dieses Modul ist ein batteriebetriebenes Modul, die neue Konfiguration wird nur berücksichtigt, wenn Sie die Fernbedienung aufwecken.

# Wichtiger Hinweis

Sie müssen das Modul aufwecken : nach seiner Aufnahme, nach einer Änderung der Konfiguration, nach einer Änderung des Aufweckens, nach einer Änderung der Assoziationsgruppen
