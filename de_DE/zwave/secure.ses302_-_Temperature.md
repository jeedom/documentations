# Sichern Sie SES 302 „Temperatur"

**Das Modul**

![module](images/secure.ses302/module.jpg)

**Das Jeedom-Visual**

![vuedefaut1](images/secure.ses302/vuedefaut1.jpg)

## Zusammenfassung

Die Sonde SES302 wird verwendet, um die Umgebungstemperatur in Innenräumen zu messen. Es wird mit 2 AA-Batterien betrieben und ist Z-Wave Plus-zertifiziert. Neben der Hauptfunktion können auch verschiedene externe SECURE-Sonden mit dem Modul verdrahtet werden:

-   Ein externer NTC-Temperatursensor (SES001)
-   4 verdrahtete Temperatursensoren für Rohre oder Tanks (SES002), verbunden durch 1 m lange Kabel
-   1 kabelgebundener Temperatursensor für Rohr oder Tank (SES003), verbunden durch ein 4 m langes Kabel

Diese Module sind ideal für die Temperaturmessung in Zentralheizungssteuerungsanwendungen oder ähnlichen Anwendungen. Seine Benutzeroberfläche ist einfach, mit einem lokalen Druckknopf und einer Anzeige-LED auf der Rückseite. Man kann es einfach in ein Z-Wave-Netzwerk einschließen/ausschließen.

## Fonctions

-   Genaue Temperaturmessung
-   Anwendung in dynamischen Regelsystemen für Tanks/Rohre/Fußbodenheizungen/…​
-   Anschlussmöglichkeit für externe Sonden
-   Interoperabel mit zertifizierten Z-Wave-Produkten und -Systemen
-   Schnelle und einfache Installation
-   Bericht über schwache Batterie

## Technische Eigenschaften

-   Type: Tragbar/Wandmontage
-   Temperaturmessbereich: ±0.5°C für 0°C bis 40°C
-   Z-Wave Plus-Chip
-   Frequenz : 868,42 MHz
-   Alimentation: 2x AA-Batterien (LR6)
-   Zielfernrohr : bis zu 100 m im Freifeld
-   Schutzzeichen : IP30
-   Maße : 86 x 85 x 30 mm

## Moduldaten

-   Markieren : Horstmann
-   Nachname : Temperatursensor SES 302
-   Hersteller-ID : 89
-   Geben Sie Produkt ein : 13
-   Produkt ID : 2

## Configuration

Um das OpenZwave-Plugin zu konfigurieren und zu wissen, wie man Jeedom einbindet, beziehen Sie sich auf diese [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Inklusionsmodus zu versetzen, müssen Sie die Taste auf der Rückseite 1 Sekunde lang drücken und loslassen, gemäß der Papierdokumentation.

![inclusion](images/secure.ses302/inclusion.jpg)

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/secure.ses302/information.jpg)

### Commandes

Sobald das Modul erkannt wird, sind die dem Modul zugeordneten Befehle verfügbar.

![Aufträge](images/secure.ses302/commandes.jpg)

Hier ist die Liste der Befehle :

-   Temperatur : Dies ist der Temperaturmessbefehl
-   Batterie : Dies ist der Batteriebefehl

Mehrere nicht sichtbare Temperaturen sind ebenfalls verfügbar und nützlich, wenn Sie externe Sonden angeschlossen haben

### Modulkonfiguration

> **Wichtig**
>
> Bei einer erstmaligen Aufnahme wecken Sie das Modul immer direkt nach der Aufnahme auf.

Dann ist es notwendig, das Modul entsprechend Ihrer Installation zu konfigurieren. Dazu müssen Sie über die Schaltfläche "Konfiguration" des OpenZwave-Plugins von Jeedom gehen.

![Aufbau plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Einstellungen geklickt haben)

![Config1](images/secure.ses302/config1.jpg)

Parameterdetails :

-   1: Hier können Sie einstellen, wie stark die Temperatur variieren muss, damit das Modul sie an Jeedom sendet (in Schritten von 0,1)
-   2: Hier können Sie das Zeitintervall für das Senden der Temperatur an Jeedom festlegen (in Minuten)

Alle anderen Parameter sind identisch und entsprechen allen angeschlossenen externen Fühlern

### Groupes

Dieses Modul hat nur eine Assoziationsgruppe, es ist wesentlich

![Groupe](images/secure.ses302/groupe.jpg)

## Wakeup

Um dieses Modul aufzuwecken, drücken Sie einmal die Taste auf der Rückseite

## Wichtiger Hinweis

> **Wichtig**
>
> Sie müssen das Modul aufwecken : nach seiner Aufnahme, nach einer Änderung der Konfiguration, nach einer Änderung des Aufwachens, nach einer Änderung der Assoziationsgruppen
