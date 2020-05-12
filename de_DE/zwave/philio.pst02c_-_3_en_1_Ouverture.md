Philio PST02 C - 3 in 1 Öffnung
=================================

-   **Das Modul**

![module](images/philio.pst02c/module.jpg)

-   **Das Jeedom Visual**

![vuedefaut1](images/philio.pst02c/vuedefaut1.jpg)

Zusammenfassung
------

Der ZIP-PSM01-Detektor bietet 3 verschiedene Funktionen : Erkennung
Öffnung, Temperatursensor und Lichtdetektor. Es ist
besteht aus zwei Teilen : ein Detektor und ein Magnet. Sie sind entworfen
an einer Tür oder einem Fenster mit dem Magneten an der Tür anbringen
Öffnungsteil und Detektor am festen Teil.

Durch Öffnen der Tür oder des Fensters wird der Magnet ferngehalten
Detektor, der den Detektor auslöst, der ein Z-Wave-Signal sendet
Alarm, wenn das System scharfgeschaltet ist (dieses Signal kann von a verwendet werden
Sirene oder von einer Hausautomationsbox zum Beispiel). Der Sensor kann auch
für die automatische Lichtsteuerung verwendet werden, abhängig von der
Helligkeitsstufe. Beispielsweise sendet der Sensor ein Signal an
Z-Wave-Schalter zum Einschalten des Lichts beim Öffnen der Tür
und der Raum ist dunkel.

Der Detektor erhöht auch die Helligkeit und die Temperatur, d.h
im Falle einer wesentlichen Änderung und jedes Mal das Öffnen / Schließen
erkannt wird.

Ein Z-Wave-Controller (Fernbedienung, Dongle usw.) ist erforderlich, um
Integrieren Sie diesen Detektor in Ihr Netzwerk, wenn Sie bereits ein Netzwerk haben
existant.

Fonctions
---------

-   3 in 1 Detektor: Blende, Temperatur, Licht

-   Übernimmt den aktuellen Chip der Z-Wave 400series, um Mehrkanalbetrieb und höheren Datendurchsatz (9,6 / 40 / 100kbps) zu unterstützen

-   Verwendet das Z-Wave 6.02 SDK

-   Optimierte Antennenreichweite

-   Verwendung für Hausautomations- oder Sicherheitsanwendungen

-   Taste zum Ein- / Ausschließen des Detektors

-   Autoprotection

-   Anzeige für niedrigen Batteriestand

-   Klein, diskret und ästhetisch

-   Benutzerfreundlichkeit und Installation

Technische Daten
---------------------------

-   Modultyp : Z-Wave Sender

-   Versorgung : 1 CR123A 3V Batterie

-   Akkulaufzeit : 3 Jahre (für 14 Fahrten pro Tag)

-   Frequenz : 868.42 MHz

-   Übertragungsentfernung : 30m drinnen

-   Temperatursensor : -10 bis 70 ° C.

-   Helligkeitssensor : 0 bis 500 Lux

-   Abmessungen :

-   Detektor : 28 x 96 x 23 mm

-   Magnet : 10 x 50 x 12 mm

-   Gewicht : 52g

-   Betriebstemperatur : -10 bis 40 ° C.

-   Betriebsfeuchtigkeit : 85% rF max

-   CE-Norm : EN300 220-1

-   Z-Wave-Zertifizierung : ZC08-13050003

Moduldaten
-----------------

-   Machen Sie : Philio Technology Corporation

-   Name : PST02-C Tür / Fenster 3 in 1 Sensor

-   Hersteller ID : 316

-   Produkttyp : 2

-   Produkt-ID : 14

Configuration
-------------

So konfigurieren Sie das OpenZwave-Plugin und wissen, wie Sie Jeedom einsetzen
Aufnahme beziehen sich darauf
[Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).

> **Wichtig**
>
> Um dieses Modul in den Einschlussmodus zu versetzen, drücken Sie die Taste dreimal
> Einschlussknopf gemäß seiner Papierdokumentation.

![inclusion](images/philio.pst02c/inclusion.jpg)

Einmal enthalten, sollten Sie dies erhalten :

![Plugin Zwave](images/philio.pst02c/information.jpg)

### Commandes

Sobald das Modul erkannt wurde, werden die dem Modul zugeordneten Befehle ausgeführt
disponibles.

![Befehle](images/philio.pst02c/commandes.jpg)

Hier ist die Liste der Befehle :

-   Öffnung : Es ist der Befehl, der eine Öffnungserkennung auslöst

-   Temperatur : Es ist der Befehl, der es ermöglicht, die Temperatur zu erhöhen

-   Helligkeit : Es ist der Befehl, der es ermöglicht, die Helligkeit zu erhöhen

-   Batterie : Es ist der Batteriebefehl

### Konfiguration des Moduls

> **Wichtig**
>
> Wecken Sie das Modul bei einer ersten Aufnahme immer gleich danach auf
> Einbeziehung.

Dann, wenn Sie das Modul entsprechend konfigurieren möchten
Ihrer Installation müssen Sie durch die Schaltfläche gehen
"Konfiguration "des OpenZwave-Plugins von Jeedom.

![Konfiguration plugin Zwave](images/plugin/bouton_configuration.jpg)

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte geklickt haben
Einstellungen)

![Config1](images/philio.pst02c/config1.jpg)

![Config2](images/philio.pst02c/config2.jpg)

![Config3](images/philio.pst02c/config3.jpg)

Parameterdetails :

-   2: Legt das an die Module in Zuordnungsgruppe 2 gesendete Signal fest

-   4: Stellt die Helligkeitsstufe ein, ab der das in Parameter 2 definierte Signal an die der Gruppe 2 zugeordneten Module gesendet wird

-   5: Betriebsart (siehe Herstellerdokumentation) Empfohlener Wert : 8

-   6: Multisensor-Betriebsmodus (siehe Herstellerdokumentation) Empfohlener Wert : 4

-   7: personalisierte Betriebsart des Multisensors (siehe Herstellerdokumentation) Empfohlener Wert : 20 (um die funktionale Öffnung zu haben)

-   9: Hiermit können Sie festlegen, nach welcher Zeit das AUS-Signal an die der Gruppe 2 zugeordneten Module gesendet werden soll

-   10: wird verwendet, um die Dauer zwischen zwei Batterieberichten zu definieren (eine Einheit = Parameter 20)

-   11: Mit dieser Option können Sie die Dauer zwischen zwei automatischen Eröffnungsberichten definieren (eine Einheit = Parameter 20)

-   12: Mit dieser Option können Sie die Dauer zwischen zwei automatischen Helligkeitsberichten definieren (eine Einheit = Parameter 20). Empfohlener Wert : 3

-   13: Ermöglicht die Definition der Zeit zwischen zwei automatischen Temperaturberichten (eine Einheit = Parameter 20). Empfohlener Wert : 2

-   20: Dauer eines Intervalls für die Parameter 10 bis 13 Empfohlener Wert : 10

-   21: Temperaturänderungswert in ° F, um einen Bericht auszulösen

-   22: Wert in% der Helligkeitsschwankung zum Auslösen eines Berichts Empfohlener Wert : 10

### Groupes

Dieses Modul hat zwei Zuordnungsgruppen, nur die erste
indispensable.

![Groupe](images/philio.pst02c/groupe.jpg)

Gut zu wissen
------------

### Alternative visuelle

![vuewidget](images/philio.pst02c/vuewidget.jpg)

Wakeup
------

Um dieses Modul aufzuwecken, gibt es nur einen Weg :

-   Lassen Sie die Sabotage-Taste los und drücken Sie sie erneut

Faq.
------

Dieses Modul wird durch Drücken der Sabotage-Taste aktiviert.

Dieses Modul ist ein Batteriemodul, die neue Konfiguration wird sein
beim nächsten Aufwachen berücksichtigt.

Wichtiger Hinweis
---------------

> **Wichtig**
>
> Sie müssen das Modul aufwecken : nach seiner Aufnahme, nach einer Änderung
> der Konfiguration, nach einer Änderung des Aufweckens, nach a
> Änderung der Assoziationsgruppen

**@sarakha63**
