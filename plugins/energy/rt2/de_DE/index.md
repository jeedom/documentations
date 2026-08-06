# EcoRT2 Plugin

Mit diesem Plugin können Sie eine IPX 800 v4 verwalten.

# Plugin Konfiguration

Nachdem Sie das Plugin heruntergeladen haben, müssen Sie es nur noch aktivieren. Auf dieser Ebene gibt es keine Konfiguration.

> **Notiz**
>
> Auf dieser Seite sehen Sie den Status des Dämons, der ecoRT2 überwacht.

# Gerätekonfiguration

Auf die Konfiguration der ecoRT2-Geräte kann über das Plugin-Menü und dann über das Hausautomationsprotokoll zugegriffen werden :

Hier finden Sie die gesamte Konfiguration Ihrer Geräte :

-   **Name des EcoRT2-Geräts** : Name Ihres ecoRT2-Geräts.
-   **Übergeordnetes Objekt** : Gibt das übergeordnete Objekt an, zu dem das Gerät gehört.
-   **Aktivieren** : macht Ihre Ausrüstung aktiv.
-   **Sichtbar** : macht Ihre Ausrüstung auf dem Armaturenbrett sichtbar.
-   **Kategorie** : Gerätekategorien (es kann zu mehreren Kategorien gehören).
-   **IP** : Die ecoRT2 ip.
-   **API-Schlüssel** : ecoRT2-API-Schlüssel (standardmäßig ist der API-Schlüssel apikey).
-   **Erweiterung** : Hier müssen Sie die auf dem ecoRT2 vorhandenen Erweiterungen angeben, damit jeedom sie abfragen kann. Beispiel für enOcean Sie müssen ENO setzen (wenn Sie mehrere haben, müssen Sie diese durch Kommas trennen (``,``)). Alle Erweiterungen werden normalerweise unterstützt. Für den Code der Erweiterung muss auf die Dokumentation dieser Erweiterung verwiesen werden.

Das Standard-Plugin erstellt nichts. Es liegt an Ihnen, dies entsprechend Ihrer Konfiguration zu tun, aber Sie werden angeleitet.

# Commandes

## Action

Sie haben die Arten von Aktionen :

-   **Ein** : Mit dieser Option können Sie einen Ausgang (oder virtuellen Eingang) auf 1 setzen oder einem analogen Eingang (oder Zähler) einen Wert zuweisen).
-   **Aus** : Ermöglicht das Setzen eines Ausgangs (oder eines virtuellen Eingangs) auf 0).
-   **Umschalten** : Ermöglicht das Umkehren des Status einer Ausgabe (oder einer virtuellen Eingabe)).

Sie haben die Arten von Aktuatoren :

-   **Relais**
-   **Virtuelle Ausgabe**
-   **Zähler**
-   **Pilotdraht**

> **Notiz**
>
> Einige Arten von Aktuatoren können je nach Art der Aktion ausgeblendet sein.

Dann haben Sie abhängig von der Art der Aktion und dem Aktuator mehrere Parameter, die sein können :

-   Relaisnummer
-   virtuelle Ausgangsnummer
-   Zählernummer und Betrieb (ex +200 oder -100)
-   Pilotdrahtnummer und Bestellwert (0 Komfort, 1 Öko, 2 Frostfrei, 3 Aus, 4 Komfort-1, 5 Komfort-2)

## Info

Sie haben verschiedene Typen :

-   Sofortige Post
-   Relais
-   Virtuelle Ausgabe
-   Digitale Eingabe
-   Compteur
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

Für jeden Typ fragt jeedom Sie nach der Nummer der gewünschten Informationen.
