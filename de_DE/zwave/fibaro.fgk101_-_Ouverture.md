# Fibaro Öffnungsdetektor - FGK-101

**Das Modul**

![module](images/fibaro.fgk101-DS18B20/module.jpg)

**Das Jeedom Visual**

![vuedefaut1](images/fibaro.fgk101-DS18B20/vuedefaut1.jpg)

# Zusammenfassung

.

. .

.  : .

Ein Z-Wave-Controller (Fernbedienung, Dongle…) ist erforderlich, um diesen Detektor in Ihr Netzwerk zu integrieren, wenn Sie bereits über ein vorhandenes Netzwerk verfügen.

## Fonctions

-   Detektor öffnen
-   Taste zum Ein- / Ausschließen des Detektors
-   Erkennung schwacher Batterie
-   Manipulationsschutz
-   1 Potentialfreier verdrahteter Eingang
-   
-   Sehr kleine, reduzierte Abmessungen
-   Benutzerfreundlichkeit und Installation

## Technische Daten

-   Modultyp : Z-Wave Sender
-   Farbe : Weiß (FGK-101/102/103/104/105/106/107 je nach Farbe)
-   Versorgung : ER14250 (1 / 2AA) 3,6-V-Batterie
-   Frequenz : 868,42 MHz
-   Übertragungsentfernung : 50 m freies Feld, 30 m drinnen
-   Dimensions: 76 x 17 x 19 mm
-   Betriebstemperatur : 0-40 ° C

## Moduldaten

-   Machen Sie : Fibar Group
-   Name : Fibaro FGK-101 mit Temperaturfühler (DS18B20)
-   Hersteller ID : 271
-   Produkttyp : 1792
-   Produkt-ID : 4096

## Configuration

Informationen zum Konfigurieren des OpenZwave-Plugins und zum Einfügen von Jeedom finden Sie hier [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Einschlussmodus zu versetzen, drücken Sie die Einschlusstaste gemäß der Papierdokumentation dreimal.

![inclusion](images/fibaro.fgk101-DS18B20/inclusion.jpg)

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/fibaro.fgk101-DS18B20/information.jpg)

### Commandes

Sobald das Modul erkannt wurde, sind die dem Modul zugeordneten Befehle verfügbar.

![Befehle](images/fibaro.fgk101-DS18B20/commandes.jpg)

Hier ist die Liste der Befehle :

-   Zustand : 
-   Batterie : 

Sie können diese Befehle nach Belieben ein- oder ausblenden.

### Konfiguration des Moduls

> **Wichtig**
>
> Wecken Sie das Modul bei einer ersten Aufnahme immer unmittelbar nach der Aufnahme auf.

Wenn Sie das Modul dann entsprechend Ihrer Installation konfigurieren möchten, müssen Sie die Schaltfläche "Konfiguration" des OpenZwave-Plugins von Jeedom aufrufen.

![Konfiguration plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Einstellungen geklickt haben)

![Config1](images/fibaro.fgk101-DS18B20/config1.jpg)

![Config2](images/fibaro.fgk101-DS18B20/config2.jpg)

Parameterdetails :

-   Aufwachen : 
-   1: 
-   2: 
-   3: wird verwendet, um den Kontakttyp zu definieren, der an die Klemmenleiste (IN) angeschlossen ist
-   5: 
-   7: Wert an Assoziationsgruppe 1 gesendet
-   9: 
-   12: 
-   13: 
-   14: Aktiviert die Szenenaktivierungsfunktion

### Groupes

Dieses Modul hat drei Assoziationsgruppen, nur die dritte ist wesentlich.

![Groupe](images/fibaro.fgk101-DS18B20/groupe.jpg)

## Gut zu wissen

### Besonderheiten

> **Spitze**
>
> 

### Alternative visuelle

![vuewidget](images/fibaro.fgk101-DS18B20/vuewidget.jpg)

## Wakeup

Um dieses Modul aufzuwecken, gibt es nur einen Weg :

-   Drücken Sie die Einschlusstaste 3/4 Mal. 

## Faq.

. .

Dieses Modul hat eine sehr geringe Reichweite. .

Dieses Modul ist ein Batteriemodul, die neue Konfiguration wird beim nächsten Aufwecken berücksichtigt.

## Wichtiger Hinweis

> **Wichtig**
>
> Sie müssen das Modul aufwecken : nach seiner Aufnahme, nach einer Änderung der Konfiguration, nach einer Änderung des Aufweckens, nach einer Änderung der Assoziationsgruppen
