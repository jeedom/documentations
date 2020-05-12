Sicherer SIR 321 "Timer"
======================

-   **Das Modul**

![module](images/secure.sir321/module.jpg)

-   **Das Jeedom Visual**

![vuedefaut1](images/secure.sir321/vuedefaut1.jpg)

Zusammenfassung
------

Der digitale Timer SIR321 ist ein einfacher Wechsel zu
Druckknopf, der daran erinnert, dass Sie Ihre Geräte für Sie ausgeschaltet haben
elektrisch. Durch Hinzufügen sind große Energieeinsparungen möglich
Dieses einfache Gerät an jedem elektrischen Hochleistungsgerät,
mit Lasten bis 3 kW (ohmsch).

Diese Geräte eignen sich perfekt für die Verwendung auf Paneelen
Heizungen, Tauchsieder, Handtuchwärmer und Ölkühler. Die
Boost reicht von 30 bis 120 Minuten.

SIR 321 unterstützt externe Temperatursensoren SES001,
SES002 und SES003.

Fonctions
---------

-   Booster für Tauchsieder, Plattenheizkörper, Handtuchheizkörper, Ölbadkühler

-   Kessel-Timer

-   Zwangsbelüftung in Konferenzräumen

-   Messung der Fußbodenheizungstemperatur (mit optionalen Sensoren)

-   Einfach zu bedienen und zuverlässig

-   Energie sparen

Technische Daten
---------------------------

-   Type: Elektronischer Timer

-   Relais: 13 (3) A, 230 V AC, geeignet für Lasten bis 3 kW

-   Alimentation: 230 V AC, 50 Hz

-   Abmessungen 85x85x44mm

-   Schutzindex : IP30

-   Betriebstemperatur: 0 ° C bis 35 ° C

Moduldaten
-----------------

-   Machen Sie : Horstmann

-   Name : SIR 321 RF Countdown Timer

-   Hersteller ID : 89

-   Produkttyp : 1/2 (abhängig davon, ob es mit einem Temperaturfühler geliefert wird oder nicht)

Configuration
-------------

So konfigurieren Sie das OpenZwave-Plugin und wissen, wie Sie Jeedom einsetzen
Aufnahme beziehen sich darauf
[Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Einschlussmodus zu versetzen, drücken Sie 1 Sekunde auf
> die Taste (bis zum schnellen Blinken) drücken und entsprechend loslassen
> Papierdokumentation.

![inclusion](images/secure.sir321/inclusion.jpg)

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/secure.sir321/information.jpg)

### Commandes

Sobald das Modul erkannt wurde, werden die dem Modul zugeordneten Befehle ausgeführt
disponibles.

![Befehle](images/secure.sir321/commandes.jpg)

Hier ist die Liste der Befehle :

-   Ein : Dies ist der Befehl zum Einschalten des Relais

-   Aus : Es ist der Befehl, das Relais auszuschalten

-   Temperatur : Dies ist der Befehl zur Temperaturmessung, wenn eine externe Sonde vorhanden ist

### Konfiguration des Moduls

Wenn Sie das Modul konfigurieren möchten, müssen Sie über die Schaltfläche gehen
"Konfiguration "des OpenZwave-Plugins von Jeedom.

![Konfiguration plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte geklickt haben
Einstellungen)

![Config1](images/secure.sir321/config1.jpg)

Parameterdetails :

-   1: Ermöglicht das Aktivieren oder Nicht-Aktivieren der ausfallsicheren Timer-Funktion (siehe Moduldokumentation)

-   2: Stellt die Temperatureinheit ein

-   3: Stellen Sie das Zeitintervall für das Senden der Temperatur an Jeedom ein (in Sekunden)

-   4: Hier können Sie festlegen, um wie viel die Temperatur variieren muss, damit das Modul es an Jeedom sendet (in Schritten von 0).1 10- → 0,1)

-   5: Hier können Sie eine Abschalttemperatur einstellen, oberhalb derer das Modul das Relais abschaltet

### Groupes

Dieses Modul hat zwei Zuordnungsgruppen. Wenn der erste ist
wesentlich, die zweite ist aktiv und ist wesentlich, wenn eine Sonde
der Temperatur ist verwandt.

![Groupe](images/secure.sir321/groupe.jpg)

Faq.
------

**@sarakha63**
