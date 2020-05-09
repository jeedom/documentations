Mit diesem Plugin können Sie eine IPX 800 v4 verwalten

Plugin Konfiguration 
=======================

Nachdem Sie das Plugin heruntergeladen haben, müssen Sie es nur aktivieren und die Kontrollkästchen aktivieren, die Sie für Anfragen an IPX800v4 betreffen (Beispiel: Überprüfen Sie X-Dimmer, wenn Sie einen X-Dimmer haben).. Sie können auch die Häufigkeit der Anforderungen auswählen, um die Belastung von ipx800v4 zu verringern

> **Important**
>
> Nach jeder Änderung der Häufigkeit oder der Anforderungen müssen Sie den Dämon neu starten, damit er berücksichtigt wird

> **Important**
>
> Um die Last zu verringern, wird empfohlen, ALLE Typanforderungen zu deaktivieren und nur die APIs zu überprüfen, die Sie betreffen (Details finden Sie in der API-Dokumentation für IPX800v4).

> **Note**
>
> Auf dieser Seite sehen Sie den Status des Dämons, der den IPX800 überwacht

Gerätekonfiguration 
=============================

Auf die Konfiguration von IPX800-Geräten kann über das Menü zugegriffen werden
Plugin dann Hausautomationsprotokoll :

Hier finden Sie die gesamte Konfiguration Ihrer Geräte :

-   **Name des Geräts IPX800** : Name Ihres IPX800-Geräts,

-   **Übergeordnetes Objekt** : gibt das übergeordnete Objekt an, zu dem es gehört
    Ausrüstung,

-   **Activer** : macht Ihre Ausrüstung aktiv,

-   **Visible** : macht Ihre Ausrüstung auf dem Armaturenbrett sichtbar,

-   **Kategorie** : Gerätekategorien (es kann gehören
    mehrere Kategorien),

-   **IP** : Die IPX800 IP,

-   **API-Schlüssel** : IPX800-API-Schlüssel (standardmäßig der API-Schlüssel
    ist apikey)

Das Standard-Plugin erstellt nichts, es liegt an Ihnen, dies zu tun
Abhängig von Ihrer Konfiguration werden Sie jedoch als Leitfaden dienen.

Befehl 
========

Aktion 
------

Sie haben 3 Arten von Aktionen :

-   **On** : Mit dieser Option können Sie einen Ausgang (oder einen virtuellen Eingang) auf 1 oder 1 setzen
    Weisen Sie einem Analogeingang (oder Zähler) einen Wert zu.

-   **Off** : Mit dieser Option können Sie einen Ausgang (oder einen virtuellen Eingang) auf 0 setzen

-   **Bascule** : ermöglicht das Umkehren des Status eines Ausgangs (oder
    virtueller Eingang)

Sie haben 6 Arten von Aktuatoren :

-   **Relais**

-   **Virtuelle Ausgabe**

-   **Virtueller Eingang**

-   **Virtueller Analogeingang**

-   **Compteur**

-   **Pilotdraht**

> **Note**
>
> Bestimmte Aktuatortypen können je nach Typ ausgeblendet werden
> d'action

Dann abhängig von der Art der Aktion und dem Aktuator, den Sie haben
mehrere Parameter, die sein können :

-   Relaisnummer

-   virtuelle Ausgangsnummer

-   virtuelle Eintragsnummer

-   Analogeingangsnummer und zuzuweisender Wert (leer lassen, wenn
    Sie möchten mit dem Cursor wählen)

-   Zählernummer und Betrieb (ex +200 oder -100)

-   Pilotdrahtnummer und Bestellwert (0 Komfort, 1 Öko, 2 Frostfrei, 3 Aus, 4 Komfort-1, 5 Komfort-2)

Info 
----

Sie haben 11 verschiedene Typen :

-   Relais

-   Digitaler Eingang

-   Virtueller Eingang

-   Virtuelle Ausgabe

-   Watchdog

-   EnOcean

-   Analogeingang

-   Virtueller Analogeingang

-   Compteur

-   Rollladen : Option in der Form 1-3 für Teil 3 von
    Erweiterung VR 1

-   THL : in der Form 1-TEMP für die Temperatur des Sensors 1,3-HUM
    für Sensorfeuchtigkeit 3 oder 2-LUM für Sensorhelligkeit
    2

Für jeden Typ fragt jeedom Sie nach der Nummer der gewünschten Informationen

Schablone 
========

Um Ihnen zu helfen, gibt es eine Vorlage, mit der Sie bestimmte Arten von erstellen können
sofort und schneller bestellen.