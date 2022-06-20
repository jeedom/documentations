# Aeotec Minimote

**Das Modul**

![module](images/aeotec.minimote/module.jpg)

**Das Jeedom-Visual**

![vuedefaut1](images/aeotec.minimote/vuedefaut1.jpg)

## Zusammenfassung

Dieser Mini-Controller von Aeon Labs ist mit einer Vielzahl von Z-Wave-Modulen wie Schaltern, Dimmern, Bewegungsmeldern, Schaltern für Jalousien usw. kompatibel. So können Sie Ihre Lichter, Geräte oder Rollläden fernsteuern. Mit dieser Fernbedienung können Sie auch Module in Ihr Z-Wave-Netzwerk einschließen/ausschließen und Szenen mit den Tasten auf der Fernbedienung verknüpfen. Eine Schiebeklappe verbirgt die Tasten zum Einrichten des Z-Wave-Netzwerks.

## Fonctions

-   Z-Wave-Netzwerkkonfiguration (Einschluss/Ausschluss von Modulen)
-   Ermöglicht die Steuerung von bis zu 4 Szenen
-   8 Schlüssel : 4 für Szenen, 4 für Netzwerkeinstellungen
-   Ein-/Aus- und Dimmfunktion
-   ALLES EIN/ALLES AUS-Funktion
-   Interner Akku über USB
-   Firmware-Update über USB

## Technische Eigenschaften

-   Mod-Typ : Z-Wave-Controller
-   Farbe : Blanc
-   Einspeisung : Interner Akku über USB
-   Affichage: Blaue und rote LEDs
-   Frequenz : 868,42MHz
-   Zielfernrohr : bis zu 30m
-   Maße : 0.8 cm x 3.3 cm x 9,3 cm
-   Betriebstemperatur : -35 bis +85 °C

## Moduldaten
 
-   Markieren : Aeotec
-   Nachname : Minimote
-   Hersteller-ID : 134
-   Geben Sie Produkt ein : 1
-   Produkt ID : 3

## Configuration

Um das OpenZwave-Plugin zu konfigurieren und zu wissen, wie man Jeedom einbindet, beziehen Sie sich auf diese [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Inklusionsmodus zu versetzen, drücken Sie die LEARN-Taste gemäß seiner Papierdokumentation.

![inclusion](images/aeotec.minimote/inclusion.jpg)

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/aeotec.minimote/information.jpg)

### Commandes

Sobald das Modul erkannt wird, sind die dem Modul zugeordneten Befehle verfügbar.

![Aufträge](images/aeotec.minimote/commandes.jpg)

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
 
![Config1](images/aeotec.minimote/config1.jpg)

Parameterdetails :

-   241: Betriebsart der Taste 1 (Standard belassen)
-   242: Taste 2 Betriebsmodus (Standard belassen)
-   243: Betriebsmodus der Taste 3 (Standard belassen)
-   244: Betriebsart der Taste 4 (Standard belassen)
-   250: Funktionsweise der Fernbedienung (lassen Sie unbedingt Scene, um sie als Fernbedienung zu verwenden)

### Groupes

Dieses Modul hat vier Assoziationsgruppen, keine ist notwendig, um es als Fernbedienung in Jeedom zu verwenden.

![Groupe](images/aeotec.minimote/groupe.jpg)

## Wakeup

 

Um dieses Modul aufzuwecken, gibt es nur eine Vorgehensweise :

-   Halten Sie die LEARN-Taste 3 Sekunden lang gedrückt

## Häufig gestellte Fragen.

Dieses Modul wird durch 3 Sekunden langes Drücken der LEARN-Taste aktiviert.

Dieses Modul ist ein batteriebetriebenes Modul, die neue Konfiguration wird nur berücksichtigt, wenn Sie die Fernbedienung aufwecken.

## Wichtiger Hinweis

Sie müssen das Modul aufwecken : nach seiner Aufnahme, nach einer Änderung der Konfiguration, nach einer Änderung des Aufweckens, nach einer Änderung der Assoziationsgruppen
