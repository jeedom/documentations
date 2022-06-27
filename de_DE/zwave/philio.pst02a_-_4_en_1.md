# 

**Das Modul**

![module](images/philio.pst02a/module.jpg)

**Das Jeedom-Visual**

![vuedefaut1](images/philio.pst02a/vuedefaut1.jpg)

## Zusammenfassung

 : . Es besteht aus zwei Teilen : ein Detektor und ein Magnet. Sie sind so konzipiert, dass sie an einer Tür oder einem Fenster angebracht werden können, wobei der Magnet auf dem zu öffnenden Teil und der Detektor auf dem festen Teil befestigt ist.

Durch das Öffnen der Tür oder des Fensters wird der Magnet vom Melder wegbewegt, wodurch der Melder ausgelöst wird, der ein Z-Wave-Alarmsignal sendet, wenn das System scharfgeschaltet ist (dieses Signal kann von einer Sirene oder einer Hausautomationsbox betrieben werden). Beispiel). . . .

. .

. Ein Z-Wave-Controller (Fernbedienung, Dongle etc.) ist erforderlich, um diesen Detektor in Ihr Netzwerk zu integrieren, wenn Sie bereits über ein bestehendes Netzwerk verfügen.

## Fonctions

-   : 
-   )
-   
-   Optimierte Antennenreichweite
-   
-   Schaltfläche zum Einschließen/Ausschließen des Detektors
-   Autoprotection
-   Anzeige für schwache Batterie
-   Klein, diskret und ästhetisch
-   Benutzerfreundlichkeit und Installation

## Technische Eigenschaften

-   Mod-Typ : Z-Wave-Sender
-   Einspeisung : 
-    : 2 Jahre
-   Frequenz : 868.42MHz
-   Übertragungsdistanz : 30m drinnen
-    : -
-    : 
-    : 
-    : 
-   Maße :
  -    : 
  -    : 
-    : 52g
-   Betriebstemperatur : -
-   Betriebsfeuchtigkeit : 
-    : 
-    : 

## Moduldaten

-   Markieren : 
-   Nachname : 
-   Hersteller-ID : 316
-   Geben Sie Produkt ein : 2
-   Produkt ID : 12

## Configuration

Um das OpenZwave-Plugin zu konfigurieren und zu wissen, wie man Jeedom einbindet, beziehen Sie sich auf diese [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Inklusionsmodus zu versetzen, müssen Sie die Inklusionstaste gemäß der Papierdokumentation dreimal drücken.

![inclusion](images/philio.pst02a/inclusion.jpg)

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/philio.pst02a/information.jpg)

### Commandes

Sobald das Modul erkannt wird, sind die dem Modul zugeordneten Befehle verfügbar.

![Aufträge](images/philio.pst02a/commandes.jpg)

Hier ist die Liste der Befehle :

-   Gegenwart : 
-   Öffnung : Dies ist der Befehl, der eine Öffnungserkennung meldet
-   Temperatur : Dies ist der Befehl, mit dem Sie die Temperatur erhöhen können
-   Helligkeit : Dies ist der Befehl, mit dem Sie die Helligkeit erhöhen können
-   Sabotage : das ist der Sabotagebefehl (wird bei Reißen ausgelöst)
-   Batterie : Dies ist der Batteriebefehl

### Modul-Setup

> **Wichtig**
>
> Bei einer erstmaligen Aufnahme wecken Sie das Modul immer direkt nach der Aufnahme auf.

Wenn Sie das Modul dann gemäß Ihrer Installation konfigurieren möchten, müssen Sie über die Schaltfläche "Konfiguration" des Jeedom OpenZwave-Plugins gehen.

![Aufbau plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Einstellungen geklickt haben)

![Config1](images/philio.pst02a/config1.jpg)

![Config2](images/philio.pst02a/config2.jpg)

![Config3](images/philio.pst02a/config3.jpg)

Parameterdetails :

-   2: passt das an die Module der Assoziationsgruppe 2 gesendete Signal an
-   3:  : : )
-   4: ermöglicht die Einstellung der Helligkeitsstufe, ab der das in Parameter 2 definierte Signal an die der Gruppe 2 zugeordneten Module gesendet wird
-   5:  : 8
-   6:  : 4
-   7:  : )
-   8: 
-   9: können Sie festlegen, nach welcher Zeit das AUS-Signal an die Module gesendet wird, die der Gruppe 2 zugeordnet sind
-   10: können Sie die Dauer zwischen zwei Batterieberichten definieren (eine Einheit = Parameter 20)
-   11: ermöglicht es Ihnen, die Dauer zwischen zwei automatischen Öffnungsverhältnissen zu definieren (eine Einheit = Parameter 20)
-   12:  : 3
-   13:  : 2
-   20:  : 10
-   21: Abweichungswert in °F der Temperatur, um einen Bericht auszulösen
-   22:  : 10

### Groupes

Dieses Modul hat zwei Assoziationsgruppen, nur die erste ist wesentlich.

![Groupe](images/philio.pst02a/groupe.jpg)

## Wakeup

Um dieses Modul aufzuwecken, gibt es nur eine Vorgehensweise :

-   

## Wichtiger Hinweis

> **Wichtig**
>
> Sie müssen das Modul aufwecken : nach seiner Aufnahme, nach einer Änderung der Konfiguration, nach einer Änderung des Aufweckens, nach einer Änderung der Assoziationsgruppen
