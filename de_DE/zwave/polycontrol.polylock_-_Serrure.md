PolyLock 
========

\.

-   **Das Modul**

\.

![module](images/polycontrol.polylock/module.jpg)

\.

-   **Das Jeedom Visual**

\.

![vuedefaut1](images/polycontrol.polylock/vuedefaut1.jpg)

\.

Zusammenfassung 
------

 

Sichern Sie Ihr Zuhause mit dem elektronischen Schloss Z-Wave von
Poly-Control !

Das elektronische Poly-Lock-Schloss ist so konzipiert, dass es sich fast anpasst
alle Türen der Welt. Es lässt sich sehr leicht in 5 montieren
Minuten müssen Sie nur den Zylinder Ihrer Tür wechseln.

Einmal mit Ihrem Z-Wave-Controller gekoppelt (z. B. mit Veras Systemen
VeraControl) können Sie die vollständige Kontrolle über Ihr Schloss haben
von jedem Computer oder Smartphone, egal wo Sie sind
in der Welt sein. Es ist auch möglich, das Schloss zu benutzen
mit der kabellosen Poly-Pad-Tastatur zum Öffnen oder Verriegeln der Tür.

Es ist daher möglich, Ihr Haus auf ähnliche Weise zu verschließen
um Ihr Auto zu verriegeln - mit einer Fernbedienung durch Drücken
Nur ein Knopf und Ihr Zuhause ist sicher. Das Schloss
Poly-Control kann auch mit anderen Z-Wave-Szenen verwendet werden
Die Lichter gehen an und die Alarmanlage wird deaktiviert, wenn
über Ihre Fernbedienung entsperrt.

Das Poly-Control?-System kann in einer Umgebung verwendet werden
häuslich oder beruflich. Das Poly-Lock wird mit Strom versorgt
Batterie, und wurde getestet, um für 1 Jahr ohne zu arbeiten
Batteriewechsel.

\.

Funktionen 
---------

\.

-   Steuern Sie Ihre Haustür fern

-   Passend für die meisten Türen

-   Kann beispielsweise für ein System in Z-Wave-Szenen integriert werden
    Alarm?

-   Geeignet für den privaten oder geschäftlichen Gebrauch

-   Rad zum manuellen Schließen

-   Einfache Installation

\.

Technische Daten 
---------------------------

\.

-   Versorgung : 3,6 V Lithium-Chlorid-Batterie

-   Frequenz : 868,42 MHz

-   Geltungsbereich : bis zu 100 m im Freien, bis zu 30 m in
    Gebäude

-   Abmessungen? : 120 x 52 x 60 mm (L x B x H)

-   Gewicht? : 370 g?

\.

Moduldaten 
-----------------

\.

-   Machen Sie : Poly-Control?

-   Name : PolyLock?

-   Hersteller ID : 270

-   Produkttyp : 1

-   Produkt-ID : 1

\.

Konfiguration 
-------------

\.

So konfigurieren Sie das OpenZwave-Plugin und wissen, wie Sie Jeedom einsetzen
Aufnahme beziehen sich darauf
[Dokumentation](https://jeedom.fr/doc/documentation/plugins/openzwave/de_DE/openzwave.html).

\.

> **Important**
>
> Um dieses Modul in den Einschlussmodus zu versetzen, drücken Sie die Taste 1 Mal
> Einschlussknopf gemäß seiner Papierdokumentation.

\.

![inclusion](images/polycontrol.polylock/inclusion.jpg)

\.

Einmal enthalten, sollten Sie dies erhalten :

\.

![Plugin Zwave](images/polycontrol.polylock/information.jpg)

\.

### Befehle? 

\.

Sobald das Modul erkannt wurde, werden die dem Modul zugeordneten Befehle ausgeführt
disponibles.

\.

![Befehle](images/polycontrol.polylock/commandes.jpg)

\.

Hier ist die Liste der Befehle :

\.

-   Status : Es ist der Befehl, der die letzte Aktion ausführt
    ausgeführt (öffnen / schließen)

-   Öffnen : Es ist der Befehl, der das Schloss öffnet

-   Schließen : Es ist der Befehl, der das Schließen des Schlosses ermöglicht

-   Batterie? : Es ist der Batterie?befehl

\.

### Konfiguration des Moduls 

\.

> **Warning**
>
> Obwohl dieses Modul im Akkubetrieb ist, verwendet es die Flirs-Technologie.
> Dies bedeutet, dass er keine Vorstellung davon hat, aufzuwachen und zu erwachen. Er
> Konfigurationsänderungen werden nahezu in Echtzeit wiederhergestellt
> als Sektormodul.

\.

Wenn Sie das Modul entsprechend Ihrer Konfiguration konfigurieren möchten
Installation müssen Sie über die Schaltfläche "Konfiguration" der
Jeedom OpenZwave Plugin.

\.

![Konfiguration plugin Zwave](images/plugin/bouton_configuration.jpg)

\.

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte geklickt haben
Einstellungen)

\.

![Config1](images/polycontrol.polylock/config1.jpg)

\.

Parameterdetails :

\.

-   0: Ermöglicht das Ändern der Drehrichtung für die Befehle
    öffnen / schließen

-   1: Hier können Sie festlegen, wie lange sich das Schloss drehen soll
    offen (0 bis 15 s)

-   2: Hier können Sie festlegen, wie lange sich das Schloss drehen soll
    schließen (0 bis 15 s)

-   3: Dient zum Definieren der Drehzahl des Schlosses (0 bis 15),
    15 ist das langsamste)

-   4: ermöglicht die Auswahl aus verschiedenen Betriebsarten
    (Drehmoment, Kraft, Leistung usw.)

\.

### Gruppen? 

\.

Dieses Modul hat nur eine Zuordnungsgruppe.

\.

![Groupe](images/polycontrol.polylock/groupe.jpg)

\.

Anwendungsbeispiele 
----------------------

\.

![exemple](images/polycontrol.polylock/exemple.jpg)

\.

Der Auslöser ist der Ereignisbefehl einer Zipato-Tastatur
(es kann alles andere sein). Wenn der Wert 6 (home) ist
Schließ die Tür ab. Wir sind gerade zurückgekehrt, damit wir schließen können
die Schlüsseltür. Andernfalls (unbedingt 5) wird die Tür mit einem Schlüssel und 2 Minuten geöffnet
nachdem wir es geschlossen haben. In der Tat wollen wir raus, die Tür öffnet sich und
wird bald danach schließen.

\.

Gut zu wissen 
------------

\.

### Besonderheiten 

\.

> **Tip**
>
> Obwohl dieses Modul im Akkubetrieb ist, verwendet es die Flirs-Technologie.
> Dies bedeutet, dass er keine Vorstellung davon hat, aufzuwachen und zu erwachen. Er
> Konfigurationsänderungen werden nahezu in Echtzeit wiederhergestellt
> als Sektormodul.

\.

> **Tip**
>
> Dieses Modul gibt seinen Status nicht zurück, wenn Sie die Sperre am
> Andererseits bleibt der Zustand derselbe. \.

### Alternative visuelle 

\.

![vuewidget](images/polycontrol.polylock/vuewidget.jpg)

\.

Wach auf 
-------

\.

Für dieses Modul gibt es kein Konzept zum Aufwecken.

\.

Faq. 
------

\.

Kein Konzept zum Aufwecken auf diesem Modul, lesen Sie den spezifischen Absatz.

\.

**@sarakha63**
