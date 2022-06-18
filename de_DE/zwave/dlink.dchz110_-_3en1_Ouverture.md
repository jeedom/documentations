# "

**Das Modul**

![module](images/dlink.dchz110/module.jpg)

**Das Jeedom-Visual**

![vuedefaut1](images/dlink.dchz110/vuedefaut1.jpg)

## Zusammenfassung

 : Öffnungserkennung, Temperatursensor und Helligkeitssensor. Es besteht aus zwei Teilen : ein Detektor und ein Magnet. Sie sind so konzipiert, dass sie an einer Tür oder einem Fenster angebracht werden können, wobei der Magnet auf dem zu öffnenden Teil und der Detektor auf dem festen Teil befestigt ist.

Durch das Öffnen der Tür oder des Fensters wird der Magnet vom Melder wegbewegt, wodurch der Melder ausgelöst wird, der ein Z-Wave-Alarmsignal sendet, wenn das System scharfgeschaltet ist (dieses Signal kann von einer Sirene oder einer Hausautomationsbox betrieben werden). Beispiel). Der Sensor kann auch zur automatischen Beleuchtungssteuerung je nach Lichtniveau verwendet werden. Beispielsweise sendet der Sensor ein Signal an den Z-Wave-Schalter, um das Licht einzuschalten, wenn sich die Tür öffnet und der Raum dunkel ist.

Der Melder erhöht auch die Helligkeit und die Temperatur, entweder im Falle einer signifikanten Änderung oder jedes Mal, wenn das Öffnen/Schließen erkannt wird. .

## Fonctions

-   3 in 1 Detektor: Blende, Temperatur, Licht
-   Optimierte Antennenreichweite
-   
-   Schaltfläche zum Einschließen/Ausschließen des Detektors
-   Autoprotection
-   Anzeige für schwache Batterie
-   Klein, diskret und ästhetisch
-   Benutzerfreundlichkeit und Installation

## Technische Eigenschaften

 [](http://www.dlink.com/-/media/Consumer_Products/DCH/DCH%20Z110/Datasheet/DCH_Z110_Datasheet_FR.pdf)

 [](http://www.kafkas.gr/uploads/Pdf/182732/DCH-Z120_183010381_01_Z02.PDF)

![caracteristiques techniques](images/dlink.dchz110/caracteristiques_techniques.jpg)

## Moduldaten

-   Markieren : D-Link
-    : 
-    : 
-   Hersteller-ID : ]
-   Geben Sie Produkt ein : ]
-   Produkt ID : ]

## Configuration

Um das OpenZwave-Plugin zu konfigurieren und zu wissen, wie man Jeedom einbindet, beziehen Sie sich auf diese [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> . (.. ()

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

### Modulkonfiguration

> **Wichtig**
>
> . .

Dann ist es notwendig, das Modul entsprechend Ihrer Installation zu konfigurieren. Dazu müssen Sie über die Schaltfläche "Konfiguration" des OpenZwave-Plugins von Jeedom gehen.

![Aufbau plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Einstellungen geklickt haben)

![Config1](images/dlink.dchz110/config1.jpg)

![Config2](images/dlink.dchz110/config2.jpg)

Parameterdetails :

-   2: passt das an die Module der Assoziationsgruppe 2 gesendete Signal an
-   4: ermöglicht die Einstellung der Helligkeitsstufe, ab der das in Parameter 2 definierte Signal an die der Gruppe 2 zugeordneten Module gesendet wird
-   5: )
-   6: ).  : 7
-   7: ).  : )
-   9: können Sie festlegen, nach welcher Zeit das AUS-Signal an die Module gesendet wird, die der Gruppe 2 zugeordnet sind
-   10: können Sie die Dauer zwischen zwei Batterieberichten definieren (eine Einheit = Parameter 20)
-   11: ermöglicht es Ihnen, die Dauer zwischen zwei automatischen Öffnungsverhältnissen zu definieren (eine Einheit = Parameter 20)
-   12: ).  : 6
-   13: ).  : 2
-   20: .  : 10
-   21: Abweichungswert in °F der Temperatur, um einen Bericht auszulösen
-   22: .  : 10

### Groupes

Dieses Modul hat zwei Assoziationsgruppen, nur die erste ist wesentlich.

![Groupe](images/dlink.dchz110/groupe.jpg)

## Gut zu wissen

: )

## Wakeup

Um dieses Modul aufzuwecken, gibt es nur eine Vorgehensweise :

-   
-   )

## .

.

. ()

## Wichtiger Hinweis

> **Wichtig**
>
> Sie müssen das Modul aufwecken : nach seiner Aufnahme, nach einer Änderung der Konfiguration, nach einer Änderung des Aufweckens, nach einer Änderung der Assoziationsgruppen
