# 

**Das Modul**

![module](images/smarthomebyeverspring.AD146-0/module.jpg)

**Das Jeedom-Visual**

![vuedefaut1](images/smarthomebyeverspring.AD146-0/vuedefaut1.jpg)

## Zusammenfassung

. . .

Es kann im 2-Draht-Modus (ohne Neutralleiter) verwendet werden, wodurch ein vorhandener Schalter ersetzt wird, oder dreiadrig mit einer herkömmlichen Modulstromversorgung (Phase + Neutralleiter)).

. .

## Fonctions

-   
-   Wird hinter einem vorhandenen Switch installiert
-   
-   
-   
-   
-   Z-Wave Plus-Technologie
-   
-   Verwendung im 2-Draht-Modus (Nullleiter nicht erforderlich)
-   
-   
-   Z-Wave-Repeater-Funktion

## Technische Eigenschaften

-   Mod-Typ : Z-Wave-Empfänger
-   Einspeisung : 230V, 50Hz
-   Verbrauch : 
-   Maximale Kraft :
-   Ohmsche Last : 300W
-    : 300W
-    : 200W
-   Frequenz : 868,42 MHz
-   Zielfernrohr : bis 70 m im Freien, bis 30 m im Innenbereich
-   Affichage: LED auf der Taste
-   Maße : 

## Moduldaten

-   Markieren : 
-   Nachname : 
-   Hersteller-ID : 96
-   Geben Sie Produkt ein : 3
-   Produkt ID : 2

## Configuration

Um das OpenZwave-Plugin zu konfigurieren und zu wissen, wie man Jeedom einbindet, beziehen Sie sich auf diese [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Inklusionsmodus zu versetzen, müssen Sie seine Taste gemäß seiner Papierdokumentation dreimal drücken. Es ist wichtig zu beachten, dass dieses Modul direkt in die Einbeziehung geht, wenn es zu keinem Netzwerk gehört und mit Strom versorgt wird

![inclusion](images/smarthomebyeverspring.AD146-0/inclusion.jpg)

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/smarthomebyeverspring.AD146-0/information.jpg)

### Commandes

Sobald das Modul erkannt wird, sind die dem Modul zugeordneten Befehle verfügbar.

![Aufträge](images/smarthomebyeverspring.AD146-0/commandes.jpg)

Hier ist die Liste der Befehle :

-   Intensität : 
-   Wir : Dies ist der Befehl, der das Licht einschaltet
-   Aus : Dies ist der Befehl, der das Licht ausschaltet
-   Bundesland : 

.

### Modul-Setup

Sie können das Modul entsprechend Ihrer Installation konfigurieren. Dazu müssen Sie über die Schaltfläche "Konfiguration" des OpenZwave-Plugins von Jeedom gehen.

![Aufbau plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Einstellungen geklickt haben)

![Config1](images/smarthomebyeverspring.AD146-0/config1.jpg)

Parameterdetails :

-   1 : Dieser Parameter definiert den Statuswertbefehl, es ist nicht ratsam, diesen Wert zu ändern.
-   2 : )
-   3 : .
-   4 : )
-   5 : 

### Groupes

Dieses Modul hat 2 Assoziationsgruppen.

![Groupe](images/smarthomebyeverspring.AD146-0/groupe.jpg)

> **Wichtig**
>
> Zumindest sollte Jeedom in Gruppe 1 landen

## Gut zu wissen

### Besonderheiten

-   Statusrückmeldungen können nicht unter 3 Sekunden konfiguriert werden.

## Wakeup

.
