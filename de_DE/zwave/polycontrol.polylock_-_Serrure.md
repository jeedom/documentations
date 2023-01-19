# PolyLock

**Das Modul**

![module](images/polycontrol.polylock/module.jpg)

**Das Jeedom Visual**

![vuedefaut1](images/polycontrol.polylock/vuedefaut1.jpg)

## Zusammenfassung

Sichern Sie Ihr Zuhause mit dem elektronischen Z-Wave-Schloss von Poly-Control !

Das elektronische Schloss Poly-Lock passt in nahezu jede Tür der Welt. Es lässt sich sehr einfach in 5 Minuten montieren, Sie müssen nur den Zylinder Ihrer Tür wechseln.

Nach dem Koppeln mit Ihrem Z-Wave-Controller (z. B. Vera-Systemen von VeraControl) können Sie Ihr Schloss von jedem Computer oder Smartphone aus vollständig steuern, unabhängig davon, wo Sie sich auf der Welt befinden. Es ist auch möglich, das Schloss mit der drahtlosen Poly-Pad-Tastatur zu verwenden, um die Tür zu öffnen oder zu verriegeln.

So können Sie Ihr Haus ähnlich wie Ihr Auto abschließen - mit einer Fernbedienung, auf Knopfdruck und Ihr Haus ist sicher. Das Poly-Control-Schloss kann auch mit anderen Z-Wave-Szenen verwendet werden, in denen die Lichter aufleuchten und das Alarmsystem deaktiviert wird, wenn es über Ihre Fernbedienung entsperrt wird.

Das Poly-Control-System kann zu Hause oder am Arbeitsplatz eingesetzt werden. Das Poly-Lock-Schloss ist batteriebetrieben und funktioniert seit 1 Jahr, ohne die Batterie auszutauschen.

## Fonctions

-   Steuern Sie Ihre Haustür fern
-   Passend für die meisten Türen
-   Kann in Z-Wave-Szenen integriert werden, beispielsweise für ein Alarmsystem
-   Geeignet für den privaten oder geschäftlichen Gebrauch
-   Rad zum manuellen Schließen
-   Einfache Installation

## Technische Daten

-   Versorgung : 3,6 V Lithium-Chlorid-Batterie
-   Frequenz : 868,42 MHz
-   Geltungsbereich : bis zu 100 m im Freien, bis zu 30 m in Gebäuden
-   Abmessungen : 120 x 52 x 60 mm (L x B x H)
-   Gewicht : 370g

## Moduldaten

-   Machen Sie : Poly-Control
-   Name : Polylock
-   Hersteller ID : 270
-   Produkttyp : 1
-   Produkt-ID : 1

## Configuration

Informationen zum Konfigurieren des OpenZwave-Plugins und zum Einfügen von Jeedom finden Sie hier [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Einschlussmodus zu versetzen, drücken Sie die Einschlusstaste gemäß der Papierdokumentation einmal.

![inclusion](images/polycontrol.polylock/inclusion.jpg)

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/polycontrol.polylock/information.jpg)

### Commandes

Sobald das Modul erkannt wurde, sind die dem Modul zugeordneten Befehle verfügbar.

![Befehle](images/polycontrol.polylock/commandes.jpg)

Hier ist die Liste der Befehle :

-   Status : Dies ist der Befehl, der zur letzten ausgeführten Aktion zurückkehrt (Öffnen / Schließen))
-   Öffnen : Es ist der Befehl, der das Schloss öffnet
-   Schließen : Es ist der Befehl, der das Schließen des Schlosses ermöglicht
-   Batterie : Es ist der Batteriebefehl

### Konfiguration des Moduls

> **Warnung**
>
> Obwohl dieses Modul im Akkubetrieb ist, verwendet es die Flirs-Technologie. Das bedeutet, dass er keine Vorstellung davon hat, aufzuwachen und zu erwachen. Es ruft alle Konfigurationsänderungen nahezu in Echtzeit wie ein Netzmodul ab.

Wenn Sie das Modul gemäß Ihrer Installation konfigurieren möchten, müssen Sie die Schaltfläche "Konfiguration" des OpenZwave-Plugins von Jeedom aufrufen.

![Konfiguration plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Parameter geklickt haben)

![Config1](images/polycontrol.polylock/config1.jpg)

Parameterdetails :

-   0: Ermöglicht das Ändern der Drehrichtung für die Befehle zum Öffnen / Schließen
-   1: Hier können Sie festlegen, wie lange sich das Schloss öffnen soll (0 bis 15 s))
-   2: Hier können Sie festlegen, wie lange sich das Schloss zum Schließen drehen soll (0 bis 15 s))
-   3: wird verwendet, um die Drehzahl des Schlosses zu definieren (0 bis 15, wobei 15 die langsamste ist)
-   4: ermöglicht die Auswahl aus verschiedenen Betriebsarten (Drehmoment, Kraft, Leistung usw.))

### Groupes

Dieses Modul hat nur eine Zuordnungsgruppe.

![Groupe](images/polycontrol.polylock/groupe.jpg)

## Anwendungsbeispiele

![exemple](images/polycontrol.polylock/exemple.jpg)

Der Auslöser ist der Ereignisbefehl auf einer Zipato-Tastatur (es kann alles andere sein). Wenn der Wert 6 (home) ist, schließen wir die Tür ab. Wir sind gerade zurückgekehrt, damit wir die Tür abschließen können. Andernfalls (unbedingt 5) öffnen wir die Tür mit einem Schlüssel und 2 Minuten nachdem wir sie geschlossen haben. In der Tat wollen wir raus, die Tür öffnet sich und wird kurz darauf wieder schließen.

## Gut zu wissen

### Besonderheiten

> **Spitze**
>
> Obwohl dieses Modul im Akkubetrieb ist, verwendet es die Flirs-Technologie. Das bedeutet, dass er keine Vorstellung davon hat, aufzuwachen und zu erwachen. Es ruft alle Konfigurationsänderungen nahezu in Echtzeit wie ein Netzmodul ab.

> **Spitze**
>
> Dieses Modul gibt seinen Status nicht zurück. Wenn Sie die Sperre von Hand bedienen, bleibt der Status unverändert.

## Wach auf

Für dieses Modul gibt es kein Konzept zum Aufwecken.
