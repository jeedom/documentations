# IPX800v4 Plugin

Mit diesem Plugin können Sie eine IPX 800 v4 verwalten

# Plugin Konfiguration

Nachdem Sie das Plugin heruntergeladen haben, müssen Sie es nur aktivieren und die Kontrollkästchen aktivieren, die Sie für Anfragen an IPX800v4 betreffen (Beispiel: Überprüfen Sie X-Dimmer, wenn Sie einen X-Dimmer haben). Sie können auch die Häufigkeit der Anforderungen auswählen, um die Belastung von ipx800v4 zu verringern

> **Wichtig**
>
> Nach jeder Änderung der Häufigkeit oder der Anforderungen müssen Sie den Dämon neu starten, damit er berücksichtigt wird

> **Wichtig**
>
> Um die Last zu verringern, wird empfohlen, ALLE Typanforderungen zu deaktivieren und nur die APIs zu überprüfen, die Sie betreffen (Details finden Sie in der API-Dokumentation für IPX800v4)

> **Notiz**
>
> Auf dieser Seite sehen Sie den Status des Dämons, der den IPX800 überwacht

# Gerätekonfiguration

Auf die Konfiguration von IPX800-Geräten kann über das Menü zugegriffen werden
Plugin dann Hausautomationsprotokoll :

Hier finden Sie die gesamte Konfiguration Ihrer Geräte :

-   **Name des Geräts IPX800** : Name Ihres IPX800-Geräts,
-   **Übergeordnetes Objekt** : Gibt das übergeordnete Objekt an, zu dem das Gerät gehört,
-   **Aktivieren** : macht Ihre Ausrüstung aktiv,
-   **Sichtbar** : macht Ihre Ausrüstung auf dem Armaturenbrett sichtbar,
-   **Kategorie** : Gerätekategorien (es kann zu mehreren Kategorien gehören),
-   **IP** : Die IPX800 IP,
-   **API-Schlüssel** : API-Schlüssel des IPX800 (standardmäßig ist der API-Schlüssel apikey)

Das Standard-Plugin erstellt nichts, es liegt an Ihnen, dies zu tun
Abhängig von Ihrer Konfiguration werden Sie jedoch als Leitfaden dienen.

# Commande

## Action

Sie haben die Arten von Aktionen :

- Ein : Mit dieser Option können Sie einen Ausgang (oder virtuellen Eingang) auf 1 setzen oder einem analogen Eingang (oder Zähler) einen Wert zuweisen
- Aus : Mit dieser Option können Sie einen Ausgang (oder einen virtuellen Eingang) auf 0 setzen
- Umschalten : ermöglicht das Umkehren des Status einer Ausgabe (oder einer virtuellen Eingabe)
- ...

Sie haben die Arten von Aktuatoren :

- Relais
- Virtuelle Ausgabe
- Virtueller Eingang
- Virtueller Analogeingang
- Compteur
- Pilotdraht
- ...

> **Notiz**
>
> Bestimmte Arten von Aktuatoren können je nach Art der Aktion ausgeblendet werden

Dann haben Sie abhängig von der Art der Aktion und dem Aktuator mehrere Parameter, die sein können :

- Relaisnummer
- virtuelle Ausgangsnummer
- virtuelle Eintragsnummer
- Analogeingangsnummer und zuzuweisender Wert (leer lassen, wenn Sie mit dem Cursor auswählen möchten)
- Zählernummer und Betrieb (ex +200 oder -100)
- Pilotdrahtnummer und Bestellwert (0 Komfort, 1 Öko, 2 Frostfrei, 3 Aus, 4 Komfort-1, 5 Komfort-2)
- ...

## Info

Sie haben verschiedene Typen (abhängig von Ihren Erweiterungen) :

- Relais
- Digitaler Eingang
- Virtueller Eingang
- Virtuelle Ausgabe
- Watchdog
- EnOcean
- Analogeingang
- Virtueller Analogeingang
- Compteur
- Rollladen : Option in Form 1-3 für Teil 3 der Erweiterung VR 1
- THL : in der Form 1-TEMP für die Temperatur des Sensors 1, 3-HUM für die Luftfeuchtigkeit des Sensors 3 oder 2-LUM für die Helligkeit des Sensors 2
- 0-10v Verlängerung
- Pilotdraht
- Dimmer
- PWM
- Thermostat
- EnOcean
- ...

Für jeden Typ fragt jeedom Sie nach der Nummer der gewünschten Informationen

# Template

Um Ihnen zu helfen, gibt es eine Vorlage, mit der Sie bestimmte Arten von Bestellungen gleichzeitig und schneller erstellen können.
