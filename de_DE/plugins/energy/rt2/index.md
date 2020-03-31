Mit diesem Plugin können Sie eine IPX 800 v4 verwalten

Plugin Konfiguration
=======================

Nach dem Herunterladen des Plugins müssen Sie es nur noch aktivieren,
Auf dieser Ebene gibt es keine Konfiguration.

> **Notiz**
>
> Auf dieser Seite sehen Sie den Status des Dämons, der ecoRT2 überwacht

Gerätekonfiguration
=============================

Die Konfiguration der ecoRT2-Geräte ist über das Menü zugänglich
Plugin dann Hausautomationsprotokoll :

Hier finden Sie die gesamte Konfiguration Ihrer Geräte :

-   **Name des EcoRT2-Geräts** : Name Ihres ecoRT2-Geräts,

-   **Übergeordnetes Objekt** : gibt das übergeordnete Objekt an, zu dem es gehört
    Ausrüstung,

-   **Aktivieren** : macht Ihre Ausrüstung aktiv,

-   **Sichtbar** : macht Ihre Ausrüstung auf dem Armaturenbrett sichtbar,

-   **Kategorie** : Gerätekategorien (es kann gehören
    mehrere Kategorien),

-   **IP** : Die ecoRT2 ip,

-   **API-Schlüssel** : ecoRT2-API-Schlüssel (standardmäßig API-Schlüssel
    ist apikey)

-   **Erweiterung** : Hier müssen Sie die vorhandenen Erweiterungen angeben
    ecoRT2, damit jeedom sie abfragen kann. EnOcean Beispiel
    Sie müssen ENO setzen (wenn Sie mehrere haben, müssen Sie diese trennen
    von,). Alle Erweiterungen werden normalerweise unterstützt, z
    Der Code der zu platzierenden Erweiterung muss sich auf den beziehen
    Dokumentation davon.

Das Standard-Plugin erstellt nichts, es liegt an Ihnen, dies zu tun
Abhängig von Ihrer Konfiguration werden Sie jedoch als Leitfaden dienen.

Befehl
========

Aktion
------

Sie haben die Arten von Aktionen :

-   **Ein** : Mit dieser Option können Sie einen Ausgang (oder einen virtuellen Eingang) auf 1 oder 1 setzen
    Weisen Sie einem Analogeingang (oder Zähler) einen Wert zu.

-   **Aus** : Mit dieser Option können Sie einen Ausgang (oder einen virtuellen Eingang) auf 0 setzen

-   **Umschalten** : ermöglicht das Umkehren des Status eines Ausgangs (oder
    virtueller Eingang)

Sie haben die Arten von Aktuatoren :

-   **Relais**

-   **Virtuelle Ausgabe**

-   **Zähler**

-   **Pilotdraht**

> **Notiz**
>
> Bestimmte Aktuatortypen können je nach Typ ausgeblendet werden
> Aktion

Dann abhängig von der Art der Aktion und dem Aktuator, den Sie haben
mehrere Parameter, die sein können :

-   Relaisnummer

-   virtuelle Ausgangsnummer

-   Zählernummer und Betrieb (ex +200 oder -100)

-   Pilotdrahtnummer und Bestellwert (0 Komfort, 1 Öko, 2 Frostfrei, 3 Aus, 4 Komfort-1, 5 Komfort-2)

Info
----

Sie haben verschiedene Typen :

-   Sofortige Post
-   Relais
-   Virtuelle Ausgabe
-   Digitaler Eingang
-   Zähler
-   EnOcean
-   Zählerindex
-   Torus-Index
-   Toro-Verbrauchsindex
-   Verteilungstorusindex
-   Tele-Informationsindex
-   Positionsindex
-   Index / Post Tag
-   Gesamtgegenpreis
-   Gesamtpreis für Torus
-   Gesamtverbrauch Torus Preis
-   Gesamtverteilung Toroid Preis
-   Kombination von Teleinformationspreisen
-   Kumulativer Postpreis
-   Preisakkumulation / Posttag
-   Pilotdraht

Für jeden Typ fragt jeedom Sie nach der Nummer der gewünschten Informationen
