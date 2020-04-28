Aeotec Garagentorsteuerung 
====================================

\.

-   **Das Modul**

\.

![module](images/aeotec.garagedoorcontroller/module.jpg)

\.

-   **Das Jeedom Visual**

\.

![vuedefaut1](images/aeotec.garagedoorcontroller/vuedefaut1.jpg)

\.

Zusammenfassung 
------

\.

Einfach an den vorhandenen Türmotor, die Steuerung, anzuschließen
Garagentor erweitert es mit einer Reihe von Sicherheitssensoren und
Sicherheit. Die Garagentorsteuerung erlaubt nicht nur
Steuern Sie Ihr Garagentor, damit Sie es auch überprüfen können
sein Zustand. Ob vom Motor oder manuell verwendet, der Detektor
smart kommt mit der garagentorsteuerung weiß ob die tür
ist offen oder geschlossen und kann Sie benachrichtigen, wenn dies nicht der Fall ist
sollte nicht.

\.

Funktionen 
---------

\.

-   Steuern und überwachen Sie Ihr Garagentor aus der Ferne.

-   Modul einfach am Motor Ihres installiert
    aktuelle Tür.

-   Lokale Türsteuerung über integrierte Taste.

-   Sendet Warnungen zum Öffnen / Schließen an den Z-Wave-Controller.

-   Akustische und visuelle Warnungen zum Öffnen / Schließen.

-   Einstellbare Alarmlautstärke (max. 105 dB)

-   USB-Anschluss zum Laden eigener MP3-Sounds.

-   Integrierte Status-LED an der Taste.

-   Ein Teil des Gen5-Sortiments von Aeon Labs.

-   Sicherheit der Funkkommunikation über AES-128-Verschlüsselung.

-   Integriert den Chip der Z-Wave 500-Serie.

-   250% schnellere Kommunikation im Vergleich zu Peripheriegeräten
    Z-Wave Standard.

-   Z-Wave Nachrichtenverstärker.

-   Optimierung der Antenne, Reichweite 300 Meter.

\.

Technische Daten 
---------------------------

\.

-   Modultyp : Empfänger und Sender der Serie Z-Wave + 500

-   Versorgung : Aktuator : 5 VDC (Adapter mitgeliefert) Sensor : Stapel
    Lithium 3V 800mA CR2

-   Standby-Verbrauch : 1W

-   Alarmverbrauch : 2W

-   Maximale Lautstärke : 105 dB

-   Unterstützte Audioformate : mp3 und WMV mit einer Frequenz von 320Kbps

-   Frequenz : 868,42 MHz

-   Übertragungsentfernung : 300m auf freiem Feld

-   Betriebstemperatur : -20 ° C bis 50 ° C.

-   Betriebsfeuchtigkeit : 80%

-   Zertifizierungen: FCC, UL, CE, ROHS

\.

Moduldaten 
-----------------

\.

-   Machen Sie : Aeotec

-   Name : Garagentorsteuerung (ZW062)

-   Hersteller ID : 134

-   Produkttyp : 3

-   Produkt-ID : 62

\.

Konfiguration 
-------------

\.

So konfigurieren Sie das OpenZwave-Plugin und wissen, wie Sie Jeedom einsetzen
Aufnahme beziehen sich darauf
[documentation](https://jeedom.fr/doc/documentation/plugins/openzwave/de_DE/openzwave.html).

\.

> **Wichtig**
>
> Drücken Sie die Taste, um dieses Modul in den Einschlussmodus zu versetzen
> Z-Wave gemäß seiner Papierdokumentation.

\.

![inclusion](images/aeotec.garagedoorcontroller/inclusion.jpg)

\.

Einmal enthalten, sollten Sie dies erhalten :

\.

![Plugin Zwave](images/aeotec.garagedoorcontroller/information.jpg)

\.

### Befehle 

\.

Sobald das Modul erkannt wurde, werden die dem Modul zugeordneten Befehle ausgeführt
verfügbar.

\.

![Befehle](images/aeotec.garagedoorcontroller/commandes.jpg)

\.

Hier ist die Liste der Befehle :

\.

-   Öffnen / Schließen : Öffnen, schließen oder stoppen Sie das Garagentor.

-   Position : Aktuelle Garagentorposition.

-   Lautstärke : Aktuelle Lautsprecherlautstärke.

-   Temperatur : Zonentemperatur, kein automatischer Aufstieg.

-   Sabotage : Textsabotagestatus.

\.

### Konfiguration des Moduls 

\.

Dann, wenn Sie das Modul entsprechend konfigurieren möchten
Ihrer Installation müssen Sie durch die Schaltfläche gehen
"Konfiguration "des OpenZwave-Plugins von Jeedom.

\.

![Konfiguration plugin Zwave](images/plugin/bouton_configuration.jpg)

\.

Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte geklickt haben
Einstellungen)

\.

![Config1](images/aeotec.garagedoorcontroller/config1.jpg)

![Config1](images/aeotec.garagedoorcontroller/config2.jpg)

\.

Parameterdetails :

\.

-   34: Ermöglicht das Starten der Kalibrierung der Öffnungszeit von
    die Tür.

-   41: Ermöglicht das Zurücksetzen des Sabotagestatus durch Auswahl von "Entlasten"
    der Alarmzustand"

-   80: auf Hagel

-   255 : Ermöglicht das Zurücksetzen der Werkskonfiguration

\.

### Gruppen 

\.

Dieses Modul hat zwei Zuordnungsgruppen. Die erste "Rettungsleine" ist
wesentlich.

\.

![Groupe](images/aeotec.garagedoorcontroller/groupe.jpg)

\.

Gut zu wissen 
------------

\.

### Besonderheiten 

Kalibrierung der Garagentoröffnungszeit:

-   1 : Das Garagentor muss vollständig geschlossen sein.

-   2 : Aktivieren Sie Parameter 34 unter "Kalibrierung durchführen"".

-   3 : Starten Sie die Türöffnung

-   4 : Warten Sie, bis die Tür vollständig geöffnet ist.

-   5 : Mach die Tür zu

Die Kalibrierung ist abgeschlossen

-   Parameter 34 wird auf "Normal" aktualisiert".

-   Parameter 35 wird mit der berechneten Öffnungszeit aktualisiert.

\.

Sabotage zurückgesetzt:

-   1 : Der Sensor muss ordnungsgemäß angebracht sein.

-   2 : Aktivieren Sie Parameter 41 unter "Alarmzustand entlasten"".

-   3 : Einstellungen aktualisieren.

Die Kalibrierung ist abgeschlossen

-   Parameter 41 wird aktualisiert mit "Sensor wird nicht entfernt".

\.

Faq. 
------

\.

\.

**@nechry**
