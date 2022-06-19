# 

**Das Modul**

![module](images/everspring.AN180-6/module.jpg)

**Das Jeedom-Visual**

![vuedefaut1](images/everspring.AN180-6/vuedefaut1.jpg)

## Zusammenfassung

. ).

. .

## Fonctions

-   Steuern Sie eine Lampe oder ein Gerät aus der Ferne
-   Plug-Modul zur direkten Integration zwischen einer Steckdose und der zu steuernden Last
-   )
-   
-   Z-Wave Plus-Technologie
-   
-   
-   Z-Wave-Repeater-Funktion

## Technische Eigenschaften

-   Mod-Typ : Z-Wave-Empfänger
-   Einspeisung : 230V, 50Hz
-   Verbrauch : 
-   Maximale Kraft : Ohmsche Last :  :  : 
-   Frequenz : 868,42 MHz
-   Zielfernrohr : bis 70 m im Freien, bis 30 m im Innenbereich
-   Affichage: LED auf der Taste
-   Maße : ) :  : 52mm

## Moduldaten

-   Markieren : Everspring
-   Nachname : 
-   Hersteller-ID : 96
-   Geben Sie Produkt ein : 4
-   Produkt ID : 7

## Configuration

Um das OpenZwave-Plugin zu konfigurieren und zu wissen, wie man Jeedom einbindet, beziehen Sie sich auf diese [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Inklusionsmodus zu versetzen, müssen Sie seine Taste gemäß seiner Papierdokumentation dreimal drücken. Es ist wichtig zu beachten, dass dieses Modul direkt in die Einbeziehung geht, wenn es zu keinem Netzwerk gehört und mit Strom versorgt wird

![inclusion](images/everspring.AN180-6/inclusion.jpg)

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/everspring.AN180-6/information.jpg)

### Commandes

Sobald das Modul erkannt wurde, sind die den Modulen zugeordneten Befehle verfügbar.

![Aufträge](images/everspring.AN180-6/commandes.jpg)

Hier ist die Liste der Befehle :

-   Bundesland : )
-   Wir : Dies ist der Befehl, mit dem Sie die Steckdose einschalten können
-   Aus : Dies ist der Befehl, mit dem Sie die Steckdose ausschalten können

.

### Modulkonfiguration

Sie können das Modul entsprechend Ihrer Installation konfigurieren. Dazu müssen Sie über die Schaltfläche "Konfiguration" des OpenZwave-Plugins von Jeedom gehen.

![Aufbau plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Einstellungen geklickt haben)

![Config1](images/everspring.AN180-6/config1.jpg)

Parameterdetails :

-   1 : Dieser Parameter definiert den Statuswertbefehl, es ist nicht ratsam, diesen Wert zu ändern.
-   2 : )
-   3 : .

### Groupes

Dieses Modul hat 2 Assoziationsgruppen.

![Groupe](images/everspring.AN180-6/groupe.jpg)

> **Wichtig**
>
> Zumindest sollte Jeedom in Gruppe 1 landen

## Gut zu wissen

### Besonderheiten

-   Statusrückmeldungen können nicht unter 3 Sekunden konfiguriert werden.

## Wakeup

Keine Vorstellung von Aufwachen bei diesem Modul.
