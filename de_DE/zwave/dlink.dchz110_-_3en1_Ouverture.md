# D-Link DCH-Z110 - "3 in 1 Blende"

**Das Modul**

![module](images/dlink.dchz110/module.jpg)

**Das Jeedom-Visual**

![vuedefaut1](images/dlink.dchz110/vuedefaut1.jpg)

## Zusammenfassung

Der DCH-Z110 Detektor bietet 3 verschiedene Funktionen : Öffnungserkennung, Temperatursensor und Helligkeitssensor. Es besteht aus zwei Teilen : ein Detektor und ein Magnet. Sie sind so konzipiert, dass sie an einer Tür oder einem Fenster angebracht werden können, wobei der Magnet auf dem zu öffnenden Teil und der Detektor auf dem festen Teil befestigt ist.

Durch das Öffnen der Tür oder des Fensters wird der Magnet vom Melder wegbewegt, wodurch der Melder ausgelöst wird, der ein Z-Wave-Alarmsignal sendet, wenn das System scharfgeschaltet ist (dieses Signal kann von einer Sirene oder einer Hausautomationsbox betrieben werden). Beispiel). Der Sensor kann je nach Lichtniveau auch zur automatischen Beleuchtungssteuerung verwendet werden. Beispielsweise sendet der Sensor ein Signal an den Z-Wave-Schalter, um das Licht einzuschalten, wenn sich die Tür öffnet und der Raum dunkel ist.

Der Melder erhöht auch die Helligkeit und die Temperatur, entweder im Falle einer signifikanten Änderung oder jedes Mal, wenn das Öffnen/Schließen erkannt wird. Ein Z-Wave-Controller (Fernbedienung, Dongle…?) ist notwendig, um diesen Detektor in Ihr Netzwerk zu integrieren, wenn Sie bereits ein bestehendes Netzwerk haben.

## Fonctions

-   3 in 1 Detektor: Blende, Temperatur, Licht
-   Optimierte Antennenreichweite
-   Verwendung für Heimautomatisierungs- oder Sicherheitsanwendungen
-   Schaltfläche zum Einschließen/Ausschließen des Detektors
-   Autoprotection
-   Anzeige für schwache Batterie
-   Klein, diskret und ästhetisch
-   Benutzerfreundlichkeit und Installation

## Technische Eigenschaften

Seite? ˅ [offiziell](http://www.dlink.com/-/media/Consumer_Products/DCH/DCH%20Z110/Datasheet/DCH_Z110_Datasheet_FR.pdf)

Andere Verbindung [technisch](http://www.kafkas.gr/uploads/Pdf/182732/DCH-Z120_183010381_01_Z02.PDF)

![caracteristiques techniques](images/dlink.dchz110/caracteristiques_techniques.jpg)

## Moduldaten

-   Markieren : D-Link
-   Modell : DCH-Z110 mydlink™ Haustür- und Fenstersensor
-   Hersteller : FIBARO-System
-   Hersteller-ID : 264 \[0x0108\]
-   Geben Sie Produkt ein : 2 \[0x0002\]
-   Produkt ID : 14 \[0x000e\]

## Configuration

Um das OpenZwave-Plugin zu konfigurieren und zu wissen, wie man Jeedom einbindet, beziehen Sie sich auf diese [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Montieren Sie das Modul nicht an Fenster/Tür, bevor Sie es korrekt aufgestellt haben, und achten Sie beim Testen auf einer ebenen Fläche und während der Montage genau auf die Ausrichtung des Magneten. (Verwenden Sie ggf. Keile) Um dieses Modul in den Einschlussmodus zu versetzen, drücken Sie die Zuordnungstaste 3 Mal in 1.5 Sekunden, laut Dokumentation. (Konstantes rotes Blinken im Kopplungsmodus)

![config inclusion](images/dlink.dchz110/config-inclusion.jpg)

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/dlink.dchz110/apres_inclusion.jpg)

### Commandes

Sobald das Modul erkannt wird, sind die dem Modul zugeordneten Befehle verfügbar.

![Aufträge](images/dlink.dchz110/commandes.jpg)

Hier ist die Liste der Befehle :

-   Öffnung : Dies ist der Befehl, der eine Öffnungserkennung meldet
-   Temperatur : Dies ist der Befehl, mit dem Sie die Temperatur erhöhen können
-   Helligkeit : Dies ist der Befehl, mit dem Sie die Helligkeit erhöhen können
-   Sabotage : das ist der Sabotagebefehl (wird bei Reißen ausgelöst)
-   Batterie : Dies ist der Batteriebefehl

### Modul-Setup

> **Wichtig**
>
> Speichern Sie bei einer erstmaligen Aufnahme oder einer Änderung das Modul und aktivieren Sie es immer, indem Sie die Zuordnungstaste drücken. Es sollte rot blinken und den Status ändern.

Dann ist es notwendig, das Modul entsprechend Ihrer Installation zu konfigurieren. Dazu müssen Sie über die Schaltfläche "Konfiguration" des OpenZwave-Plugins von Jeedom gehen.

![Aufbau plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Einstellungen geklickt haben)

![Config1](images/dlink.dchz110/config1.jpg)

![Config2](images/dlink.dchz110/config2.jpg)

Parameterdetails :

-   2: passt das an die Module der Assoziationsgruppe 2 gesendete Signal an
-   4: ermöglicht die Einstellung der Helligkeitsstufe, ab der das in Parameter 2 definierte Signal an die der Gruppe 2 zugeordneten Module gesendet wird
-   5: Arbeitsweise (siehe Herstellerdokumentation))
-   6: Multisensor-Betriebsart (siehe Herstellerdokumentation)). Empfohlener Wert : 7
-   7: personalisierter Betriebsmodus des Multisensors (siehe Dokumentation des Herstellers)). Empfohlener Wert : 20 (um die funktionale Öffnung zu haben)
-   9: können Sie festlegen, nach welcher Zeit das AUS-Signal an die Module gesendet wird, die der Gruppe 2 zugeordnet sind
-   10: können Sie die Dauer zwischen zwei Batterieberichten definieren (eine Einheit = Parameter 20)
-   11: ermöglicht es Ihnen, die Dauer zwischen zwei automatischen Öffnungsverhältnissen zu definieren (eine Einheit = Parameter 20)
-   12: können Sie die Dauer zwischen zwei automatischen Helligkeitsverhältnissen definieren (eine Einheit = Parameter 20). Empfohlener Wert : 6
-   13: können Sie die Dauer zwischen zwei automatischen Temperaturberichten festlegen (eine Einheit = Parameter 20). Empfohlener Wert : 2
-   20: Dauer eines Intervalls für die Parameter 10 bis 13. Empfohlener Wert : 10
-   21: Abweichungswert in °F der Temperatur, um einen Bericht auszulösen
-   22: Wert in % der Helligkeitsänderung, um einen Bericht auszulösen. Empfohlener Wert : 10

### Groupes

Dieses Modul hat zwei Assoziationsgruppen, nur die erste ist wesentlich.

![Groupe](images/dlink.dchz110/groupe.jpg)

## Gut zu wissen

Mögliche Zuordnung/Benachrichtigung mit anderen Modulen (Beispiel: Sirene DCH-Z510 Signaltonbenachrichtigung beim Öffnen von Türen/Fenstern)

## Wakeup

Um dieses Modul aufzuwecken, gibt es nur eine Vorgehensweise :

-   Lassen Sie die Kopplungstaste los und drücken Sie sie erneut
-   Verringern Sie das Aufwachintervall in der Modulkonfiguration/dem System (in Sekunden)

## Häufig gestellte Fragen.

Dieses Modul wird durch Drücken seiner Zuordnungstaste aktiviert.

Dieses Modul ist ein batteriebetriebenes Modul, die neue Konfiguration wird beim nächsten Wakeup berücksichtigt. (Assoziationstaste, um es zu erzwingen, daher das Interesse, das Modul nicht vor seiner korrekten Konfiguration einzurichten)

## Wichtiger Hinweis

> **Wichtig**
>
> Sie müssen das Modul aufwecken : nach seiner Aufnahme, nach einer Änderung der Konfiguration, nach einer Änderung des Aufweckens, nach einer Änderung der Assoziationsgruppen
