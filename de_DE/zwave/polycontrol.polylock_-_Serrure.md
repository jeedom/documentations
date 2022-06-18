# PolyLock

**Das Modul**

![module](images/polycontrol.polylock/module.jpg)

**Das Jeedom-Visual**

![vuedefaut1](images/polycontrol.polylock/vuedefaut1.jpg)

## Zusammenfassung

Sichern Sie Ihr Zuhause mit dem elektronischen Schloss Z-Wave von Poly-Control !

Das elektronische Türschloss Poly-Lock ist so konzipiert, dass es an fast jede Tür der Welt passt. Es lässt sich sehr einfach in 5 Minuten montieren, Sie müssen nur den Zylinder Ihrer Tür wechseln.

Nach der Kopplung mit Ihrem Z-Wave-Controller (z. B. Vera Systems von VeraControl) haben Sie die vollständige Kontrolle über Ihr Schloss von jedem Computer oder Smartphone aus, egal wo auf der Welt Sie sich befinden. Es ist auch möglich, das Schloss mit der drahtlosen Poly-Pad-Tastatur zu verwenden, um die Tür zu öffnen oder zu verriegeln.

So ist es möglich, Ihr Haus ähnlich wie Ihr Auto zu verriegeln – mit einer Fernbedienung, nur einen Knopf drücken und Ihr Haus ist sicher. Das Poly-Control-Schloss funktioniert auch mit anderen Z-Wave-Szenen, bei denen die Lichter eingeschaltet werden und das Alarmsystem deaktiviert wird, wenn es über Ihre Fernbedienung entsperrt wird.

Das Poly-Control-System kann zu Hause oder am Arbeitsplatz verwendet werden. Das Poly-Lock ist batteriebetrieben und wurde auf 1 Jahr Betrieb ohne Batteriewechsel getestet.

## Fonctions

-   Steuern Sie Ihre Haustür aus der Ferne
-   Passend für die meisten Türen
-   Kann in Z-Wave-Szenen integriert werden, zum Beispiel für eine Alarmanlage
-   Geeignet für den privaten oder geschäftlichen Gebrauch
-   Knopf zum manuellen Schließen
-   Einfache Einstellung

## Technische Eigenschaften

-   Einspeisung : 3,6 V Lithium-Chlorid-Batterie
-   Frequenz : 868,42 MHz
-   Zielfernrohr : bis 100 m im Freien, bis 30 m im Innenbereich
-   Maße : 120 x 52 x 60 mm (L x B x H)
-   Gewicht : 370g

## Moduldaten

-   Markieren : Poly-Control
-   Nachname : Polylock
-   Hersteller-ID : 270
-   Geben Sie Produkt ein : 1
-   Produkt ID : 1

## Configuration

Um das OpenZwave-Plugin zu konfigurieren und zu wissen, wie man Jeedom einbindet, beziehen Sie sich auf diese [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Inklusionsmodus zu versetzen, müssen Sie gemäß seiner Papierdokumentation einmal die Inklusionstaste drücken.

![inclusion](images/polycontrol.polylock/inclusion.jpg)

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/polycontrol.polylock/information.jpg)

### Commandes

Sobald das Modul erkannt wird, sind die dem Modul zugeordneten Befehle verfügbar.

![Aufträge](images/polycontrol.polylock/commandes.jpg)

Hier ist die Liste der Befehle :

-   Status : Dies ist der Befehl, der die zuletzt durchgeführte Aktion meldet (Öffnen/Schließen)
-   Offen : Dies ist der Befehl zum Öffnen des Schlosses
-   Nah dran : Dies ist der Befehl, der das Schloss schließt
-   Batterie : Dies ist der Batteriebefehl

### Modulkonfiguration

> **Warnung**
>
> Obwohl dieses Modul batteriebetrieben ist, verwendet es Flirs-Technologie. Das bedeutet, dass er keine Vorstellung von Aufwachen und Aufwachen hat. Es ruft alle Konfigurationsänderungen nahezu in Echtzeit wie ein Sektormodul ab.

Wenn Sie das Modul entsprechend Ihrer Installation konfigurieren möchten, müssen Sie über die Schaltfläche "Konfiguration" des Jeedom OpenZwave-Plugins gehen.

![Aufbau plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte Einstellungen geklickt haben)

![Config1](images/polycontrol.polylock/config1.jpg)

Parameterdetails :

-   0: ermöglicht es Ihnen, die Drehrichtung für die Auf-/Zu-Befehle zu ändern
-   1: können Sie festlegen, wie lange sich das Schloss zum Öffnen dreht (0 bis 15 s)
-   2: können Sie festlegen, wie lange sich das Schloss zum Schließen dreht (0 bis 15 s)
-   3: ermöglicht Ihnen, die Rotationsgeschwindigkeit des Schlosses einzustellen (0 bis 15, wobei 15 die langsamste ist)
-   4: ermöglicht die Auswahl verschiedener Betriebsarten (Drehmoment, Kraft, Leistung etc.))

### Groupes

Dieses Modul hat nur eine Assoziationsgruppe.

![Groupe](images/polycontrol.polylock/groupe.jpg)

## Anwendungsbeispiele

![exemple](images/polycontrol.polylock/exemple.jpg)

Der Auslöser ist der Ereignisbefehl einer Zipato-Tastatur (es kann alles andere sein). Wenn der Wert 6 (Zuhause) ist, ist die Tür verriegelt. Tatsächlich sind wir gerade zurückgekehrt, damit wir die Tür abschließen können. Andernfalls (unbedingt 5) öffnen wir die Tür mit dem Schlüssel und 2 Minuten später schließen wir sie. Tatsächlich wollen wir raus, die Tür öffnet sich und schließt sich kurz darauf wieder.

## Gut zu wissen

### Besonderheiten

> **Tipp**
>
> Obwohl dieses Modul batteriebetrieben ist, verwendet es Flirs-Technologie. Das bedeutet, dass er keine Vorstellung von Aufwachen und Aufwachen hat. Es ruft alle Konfigurationsänderungen nahezu in Echtzeit wie ein Sektormodul ab.

> **Tipp**
>
> Dieses Modul gibt seinen Zustand nicht zurück, wenn Sie die Sperre von Hand aktivieren, bleibt der Zustand gleich.

## Wach auf

Für dieses Modul gibt es keine Weckfunktion.
