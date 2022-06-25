# Aeotec Panikknopf

**Das Modul**

![module](images/aeotec.panicbutton/module.jpg)

**Das Jeedom-Visual**

![vuedefaut1](images/aeotec.panicbutton/vuedefaut1.jpg)

## Zusammenfassung

Diese Schlüsselanhänger-Fernbedienung in modernem und ansprechendem Design verfügt über eine Taste zur Steuerung aller Arten von Z-Wave-Geräten wie Lampen, Jalousien usw.

Mit seinen sehr kleinen Abmessungen können Sie es problemlos in Ihre Tasche stecken. Es ist einfach zu bedienen und elegant und mit einem Ring ausgestattet, um es an Schlüsseln zu befestigen, wodurch es beim Verlassen des Hauses oder bei der Rückkehr nach Hause verfügbar ist.

Mit der Taste können Sie dank der Verwaltung von kurzen und langen Drücken zwei Geräte oder Szenen steuern. Diese Fernbedienung kann sowohl als Haupt- als auch als Zweitsteuerung verwendet werden.

Diese Fernbedienung kann auch als Notfall- oder Paniktaste verwendet werden. Im Notfall oder wenn sich der Halter in einer anderen Notsituation befindet, genügt es ihm, den Knopf zu drücken und ein Z-Wave-Signal wird ausgesendet. In diesem Fall kann dieses Gerät auch als Medaillon um den Hals getragen werden.

## Fonctions

-   Schlüsselanhänger Fernbedienung
-   Haupt- oder Sekundärregler
-   Ultrakompakt und ultra-Design
-   1 konfigurierbare Taste
-   Verwaltet bis zu 2 Geräte/Szenen
-   Kann als Not-/Paniktaste verwendet werden
-   Als Notfallmedaillon um den Hals tragen

## Technische Eigenschaften

-   Mod-Typ : Z-Wave-Sender
-   Einspeisung : 1 CR2450 3V Lithiumbatterie
-   Lebensdauer der Batterie : 2 bis 3 Monate bei 10 bis 20 Anwendungen pro Tag
-   Frequenz: 868.42MHz
-   Übertragungsdistanz : 30m drinnen
-   Maße : 55 x 30 x 11 mm (L x B x H)

## Moduldaten

-   Markieren : Aeotec
-   Nachname : Panik Knopf
-   Hersteller-ID : 134
-   Geben Sie Produkt ein : 1
-   Produkt ID : 38

## Configuration

Um das OpenZwave-Plugin zu konfigurieren und zu wissen, wie man Jeedom einbindet, beziehen Sie sich auf diese [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Inklusionsmodus zu versetzen, drücken Sie die LEARN-Taste gemäß seiner Papierdokumentation.

![inclusion](images/aeotec.panicbutton/inclusion.jpg)

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/aeotec.panicbutton/information.jpg)

### Commandes

Sobald das Modul erkannt wird, sind die dem Modul zugeordneten Befehle verfügbar.

![Aufträge](images/aeotec.panicbutton/commandes.jpg)

Hier ist die Liste der Befehle :

-   Tasten : Dies ist der Befehl, der die gedrückte Taste hebt
  - 1 : Taste kurz drücken
  - 2 : Taste lange drücken

### Modulkonfiguration

> **Wichtig**
>
> Bei einer erstmaligen Aufnahme wecken Sie das Modul immer direkt nach der Aufnahme auf.

Wenn Sie das Modul dann gemäß Ihrer Installation konfigurieren möchten, müssen Sie über die Schaltfläche "Konfiguration" des Jeedom OpenZwave-Plugins gehen.

![Aufbau plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Einstellungen geklickt haben)

![Config1](images/aeotec.panicbutton/config1.jpg)

Parameterdetails :

-   250: Funktionsweise der Fernbedienung (unbedingt Szene setzen, um sie als Fernbedienung zu verwenden)
-   255 : ermöglicht das Zurücksetzen des Handsenders auf die Werkseinstellungen

### Groupes

Dieses Modul hat eine einzelne Assoziationsgruppe. Es ist wesentlich.

![Groupe](images/aeotec.panicbutton/groupe.jpg)

## Gut zu wissen

### Besonderheiten

Um dieses Modul als Fernbedienung zu verwenden, gehen Sie wie folgt vor :

-   1 : Inklusive Fernbedienung
-   2 : Fernbedienung aufwecken
-   3 : Ändern Sie den Parameter 250 auf true (machen Sie es gut, auch wenn es bereits wahr erscheint)
-   4 : Wecken Sie die Fernbedienung auf und vergewissern Sie sich, dass die Änderung berücksichtigt wurde
-   5 : Ändern Sie den Betriebsmodus der Fernbedienung, indem Sie die beiden Tasten auf der Rückseite 3 Sekunden lang gedrückt halten.

##Wakeup

Um dieses Modul aufzuwecken, gibt es nur eine Vorgehensweise :

-   Halten Sie die LEARN-Taste 3 Sekunden lang gedrückt

## Häufig gestellte Fragen.
 
Dieses Modul wird durch 3 Sekunden langes Drücken der LEARN-Taste aktiviert.

Dieses Modul ist ein batteriebetriebenes Modul, die neue Konfiguration wird nur sein
nur berücksichtigt, wenn Sie die Fernbedienung aufwecken.

## Wichtiger Hinweis

Sie müssen das Modul aufwecken : nach seiner Aufnahme, nach einer Änderung der Konfiguration, nach einer Änderung des Aufweckens, nach einer Änderung der Assoziationsgruppen
