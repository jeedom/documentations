# Aeotec Minimote

**Das Modul**

![module](images/aeotec.minimote/module.jpg)

**Das Jeedom Visual**

![vuedefaut1](images/aeotec.minimote/vuedefaut1.jpg)

## Zusammenfassung

Dieser Mini-Aeon Labs-Controller ist mit einer Vielzahl von Z-Wave-Modulen wie Schaltern, Dimmern, Bewegungsmeldern, Schaltern für Jalousien kompatibel. So können Sie Ihre Lichter, Geräte oder Rollläden fernsteuern. Mit dieser Fernbedienung können Sie auch Module in Ihr Z-Wave-Netzwerk einschließen / ausschließen und Szenen mit den Tasten auf der Fernbedienung verknüpfen. Eine verschiebbare Klappe verbirgt die Tasten, mit denen das Z-Wave-Netzwerk konfiguriert wird.

## Funktionen

-   Z-Wave-Netzwerkkonfiguration (Einschluss / Ausschluss von Modulen)
-   Ermöglicht die Steuerung von bis zu 4 Szenen
-   8 Tasten : 4 für Szenen, 4 für Netzwerkeinstellungen
-   Start / Stopp- und Dimmfunktionen
-   ALL ON / ALL OFF-Funktion
-   Interner Akku über USB
-   Firmware-Update über USB

## Technische Daten

-   Modultyp : Z-Wave-Controller
-   Farbe : Blanc
-   Versorgung : interner Akku über USB
-   Affichage: Blaue und rote LED
-   Frequenz : 868,42MHz
-   Geltungsbereich : bis zu 30 m
-   Abmessungen : 0.8 cm x 3.3 cm x 9,3 cm
-   Betriebstemperatur : -35 bis +85 ° C

## Moduldaten
 
-   Machen Sie : Aeotec
-   Name : Minimote
-   Hersteller ID : 134
-   Produkttyp : 1
-   Produkt-ID : 3

## Konfiguration

Informationen zum Konfigurieren des OpenZwave-Plugins und zum Einfügen von Jeedom finden Sie hier [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Einschlussmodus zu versetzen, drücken Sie die LEARN-Taste gemäß der Papierdokumentation.

![inclusion](images/aeotec.minimote/inclusion.jpg)

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/aeotec.minimote/information.jpg)

### Befehle

Sobald das Modul erkannt wurde, sind die dem Modul zugeordneten Befehle verfügbar.

![Befehle](images/aeotec.minimote/commandes.jpg)

Hier ist die Liste der Befehle :

-   Tasten : Es ist der Befehl, der den Knopf nach oben drückt
  - 1 : Taste 1 kurz drücken
  - 2 : Taste 1 lange drücken
  - 3 : Taste 2 kurz drücken
  - 4 : Taste 2 lange drücken
  - 5 : Taste 3 kurz drücken
  - 6 : Taste 3 lange drücken
  - 7 : Taste 4 kurz drücken
  - 8 : Taste 4 lange drücken

### Konfiguration du module

> **Wichtig**
>
> Wecken Sie das Modul bei einer ersten Aufnahme immer unmittelbar nach der Aufnahme auf.

Wenn Sie das Modul dann entsprechend Ihrer Installation konfigurieren möchten, müssen Sie die Schaltfläche "Konfiguration" des OpenZwave-Plugins von Jeedom aufrufen.

![Konfiguration plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Parameter geklickt haben)
 
![Config1](images/aeotec.minimote/config1.jpg)

Parameterdetails :

-   241: Betriebsart Taste 1 (standardmäßig verlassen)
-   242: Betriebsart Taste 2 (standardmäßig verlassen)
-   243: Betriebsart Taste 3 (standardmäßig verlassen)
-   244: Betriebsart Taste 4 (standardmäßig verlassen)
-   250: Betriebsart der Fernbedienung (verlassen Sie Scene unbedingt, um sie als Fernbedienung zu verwenden)

### Gruppen

Dieses Modul verfügt über vier Zuordnungsgruppen. Für die Verwendung als Fernbedienung in Jeedom ist keine erforderlich.

![Groupe](images/aeotec.minimote/groupe.jpg)

## Aufwachen

 

Um dieses Modul aufzuwecken, gibt es nur einen Weg :

-   Halten Sie die LEARN-Taste 3 Sekunden lang gedrückt

## Faq.

Dieses Modul wird aktiviert, indem Sie die LEARN-Taste 3 Sekunden lang gedrückt halten.

Dieses Modul ist ein Batteriemodul. Die neue Konfiguration wird nur berücksichtigt, wenn Sie die Fernbedienung aktivieren.

## Wichtiger Hinweis

Sie müssen das Modul aufwecken : nach seiner Aufnahme, nach einer Änderung der Konfiguration, nach einer Änderung des Aufweckens, nach einer Änderung der Assoziationsgruppen
