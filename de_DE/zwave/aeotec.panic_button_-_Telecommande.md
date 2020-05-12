# Aeotec Panikknopf

**Das Modul**

![module](images/aeotec.panicbutton/module.jpg)

**Das Jeedom Visual**

![vuedefaut1](images/aeotec.panicbutton/vuedefaut1.jpg)

## Zusammenfassung

Diese Schlüsselanhänger-Fernbedienung mit einem modernen und angenehmen Design verfügt über eine Taste zur Steuerung aller Arten von Z-Wave-Geräten wie Lampen, Jalousien usw.

Mit seinen sehr kleinen Abmessungen können Sie es einfach in Ihre Tasche stecken. Es ist einfach zu bedienen und elegant und mit einem Ring zum Befestigen an Schlüsseln ausgestattet, der es beim Verlassen des Hauses oder bei der Rückkehr zu Ihnen nach Hause zur Verfügung stellt.

Mit der Taste können Sie dank der Verwaltung von kurzen und langen Drücken zwei Geräte oder Szenen steuern. Diese Fernbedienung kann als primäre oder sekundäre Steuerung verwendet werden.

Diese Fernbedienung kann auch als Not- oder Panikknopf verwendet werden. Im Notfall oder wenn der Inhaber mit einer anderen Notsituation konfrontiert ist, reicht es aus, den Knopf zu drücken, und es wird ein Z-Wave-Signal ausgegeben. In diesem Fall kann dieses Gerät auch als Medaillon um den Hals verwendet werden.

## Fonctions

-   Schlüsselanhänger Fernbedienung
-   Primärer oder sekundärer Controller
-   Ultra kompakt und ultra Design
-   1 konfigurierbare Taste
-   Verwaltet bis zu 2 Geräte / Szenen
-   Kann als Notfall- / Panikknopf verwendet werden
-   Verwenden Sie um den Hals als Notfallmedaillon

## Technische Daten

-   Modultyp : Z-Wave Sender
-   Versorgung : 1 Lithium 3V CR2450 Batterie
-   Akkulaufzeit : 2 bis 3 Monate für 10 bis 20 Anwendungen pro Tag
-   Frequenz: 868.42 MHz
-   Übertragungsentfernung : 30m drinnen
-   Abmessungen : 55 x 30 x 11 mm (L x B x H)

## Moduldaten

-   Machen Sie : Aeotec
-   Name : Panikknopf
-   Hersteller ID : 134
-   Produkttyp : 1
-   Produkt-ID : 38

## Configuration

Informationen zum Konfigurieren des OpenZwave-Plugins und zum Einfügen von Jeedom finden Sie hier [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Einschlussmodus zu versetzen, drücken Sie die LEARN-Taste gemäß der Papierdokumentation.

![inclusion](images/aeotec.panicbutton/inclusion.jpg)

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/aeotec.panicbutton/information.jpg)

### Commandes

Sobald das Modul erkannt wurde, sind die dem Modul zugeordneten Befehle verfügbar.

![Befehle](images/aeotec.panicbutton/commandes.jpg)

Hier ist die Liste der Befehle :

-   Tasten : Es ist der Befehl, der den Knopf nach oben drückt
  - 1 : Kurze Taste drücken
  - 2 : Langer Druckknopf

### Konfiguration des Moduls

> **Wichtig**
>
> Wecken Sie das Modul bei einer ersten Aufnahme immer unmittelbar nach der Aufnahme auf.

Wenn Sie das Modul dann entsprechend Ihrer Installation konfigurieren möchten, müssen Sie die Schaltfläche "Konfiguration" des OpenZwave-Plugins von Jeedom aufrufen.

![Konfiguration plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Einstellungen geklickt haben)

![Config1](images/aeotec.panicbutton/config1.jpg)

Parameterdetails :

-   250: Betriebsmodus der Fernbedienung (unbedingt Szene als Fernbedienung verwenden)
-   255 : Ermöglicht das Zurücksetzen des Schlüsselanhänger ab Werk

### Groupes

Dieses Modul hat eine einzelne Zuordnungsgruppe. Es ist wichtig.

![Groupe](images/aeotec.panicbutton/groupe.jpg)

## Gut zu wissen

### Besonderheiten

Gehen Sie wie folgt vor, um dieses Modul als Fernbedienung zu verwenden :

-   1 : Fernbedienung einschließen
-   2 : Wecken Sie die Fernbedienung auf
-   3 : Ändern Sie den Parameter 250 in true (tun Sie dies auch dann, wenn er bereits als wahr erscheint)
-   4 : Wecken Sie die Fernbedienung auf und stellen Sie sicher, dass die Änderung berücksichtigt wurde
-   5 : Ändern Sie die Betriebsart der Fernbedienung, indem Sie die beiden Tasten auf der Rückseite 3 Sekunden lang gedrückt halten.

##Wakeup

Um dieses Modul aufzuwecken, gibt es nur einen Weg :

-   Halten Sie die LEARN-Taste 3 Sekunden lang gedrückt

## Faq.
 
Dieses Modul wird aktiviert, indem die LEARN-Taste 3 Sekunden lang gedrückt wird.

Dieses Modul ist ein Batteriemodul, die neue Konfiguration wird nicht sein
Berücksichtigen Sie dies, wenn Sie die Fernbedienung aktivieren.

## Wichtiger Hinweis

Sie müssen das Modul aufwecken : nach seiner Aufnahme, nach einer Änderung der Konfiguration, nach einer Änderung des Aufweckens, nach einer Änderung der Assoziationsgruppen
