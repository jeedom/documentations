Aeotec Garagentorsteuerung 
====================================



-   **Das Modul**



![module](images/aeotec.garagedoorcontroller/module.jpg)



-   **Das Jeedom-Visual**



![vuedefaut1](images/aeotec.garagedoorcontroller/vuedefaut1.jpg)



Zusammenfassung 
------



Einfach in den vorhandenen Motor, Controller Ihrer Tür einstecken
Garagentorsensor erweitert es mit einer Reihe von Sicherheitssensoren und
Sicherheit. Die Garagentorsteuerung kann mehr als nur
Steuern Sie Ihr Garagentor, es erlaubt Ihnen auch zu überprüfen
sein Zustand. Ob motorisch oder manuell betrieben, der Detektor
Intelligent, das mit der Garagentorsteuerung geliefert wird, weiß, ob das Tor funktioniert
geöffnet oder geschlossen ist, und kann Sie benachrichtigen, wenn das, was passiert, nicht der Fall ist
sollte nicht.



Funktionen 
---------



-   Steuern und überwachen Sie Ihr Garagentor aus der Ferne.

-   Modul, das einfach auf dem Motor Ihres installiert wird
    aktuelles Tor.

-   Lokale Türsteuerung über integrierten Taster.

-   Sendet Öffnungs-/Schließwarnungen an den Z-Wave-Controller.

-   Akustische und visuelle Öffnen/Schließen-Warnungen.

-   Einstellbare Alarmtonlautstärke (105 dB max)

-   USB-Anschluss zum Laden eigener MP3-Sounds.

-   Integrierte Status-LED am Taster.

-   Teil der Gen5-Reihe von Aeon Labs.

-   Sicherheit der Funkkommunikation durch AES-128-Verschlüsselung.

-   Integriert den Chip der Z-Wave 500-Serie.

-   250 % schnellere Kommunikation im Vergleich zu Peripheriegeräten
    Standard-Z-Wave.

-   Z-Wave-Nachrichtenverstärker.

-   Antennenoptimierung, Reichweite 300 Meter.



Technische Eigenschaften 
---------------------------



-   Mod-Typ : Z-Wave+ Empfänger und Sender der Serie 500

-   Einspeisung : Stellglied : 5 VDC (Adapter im Lieferumfang enthalten) Sensor : Pile
    Lithium 3V 800mA CR2

-   Standby-Verbrauch : 1W

-   Alarmverbrauch : 2W

-   Maximales Volumen : 105dB

-   Unterstützte Audioformate : mp3 und WMV mit einer Frequenz von 320 Kbps

-   Frequenz : 868,42 MHz

-   Übertragungsdistanz : 300 m auf freiem Feld

-   Betriebstemperatur : -20 °C bis 50 °C

-   Betriebsfeuchtigkeit : 80%

-   Certifications: FCC, UL, CE, ROHS



Moduldaten 
-----------------



-   Markieren : Aeotec

-   Nachname : Garagentorsteuerung (ZW062)

-   Hersteller-ID : 134

-   Geben Sie Produkt ein : 3

-   Produkt ID : 62



Aufbau 
-------------



Um das OpenZwave-Plugin zu konfigurieren und zu wissen, wie man Jeedom einfügt
Inklusion beziehen sich darauf
[Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/openzwave/).



> **Wichtig**
>
> Um dieses Modul in den Inklusionsmodus zu versetzen, drücken Sie die Taste
> Z-Wave gemäß seiner Papierdokumentation.



![inclusion](images/aeotec.garagedoorcontroller/inclusion.jpg)



Einmal enthalten, sollten Sie dies erhalten :



![Plugin Zwave](images/aeotec.garagedoorcontroller/information.jpg)



### Aufträge 



Sobald das Modul erkannt wird, werden die dem Modul zugeordneten Befehle angezeigt
disponibles.



![Aufträge](images/aeotec.garagedoorcontroller/commandes.jpg)



Hier ist die Liste der Befehle :



-   Öffnen schließen : Öffnen, schließen oder stoppen Sie das Garagentor.

-   Position : Aktuelle Garagentorposition.

-   Volumen : Aktuelle Lautsprecherlautstärke.

-   Temperatur : Zonentemperatur, kein automatischer Lift.

-   Sabotage : Sabotagestatus im Text.



### Modulkonfiguration 



Wenn Sie dann das Modul entsprechend konfigurieren möchten
Ihrer Installation müssen Sie über die Schaltfläche gehen
"Konfiguration" des Jeedom OpenZwave Plugins.



![Aufbau plugin Zwave](images/plugin/bouton_configuration.jpg)



Sie gelangen auf diese Seite (nachdem Sie auf die Registerkarte geklickt haben
Einstellungen)



![Config1](images/aeotec.garagedoorcontroller/config1.jpg)

![Config1](images/aeotec.garagedoorcontroller/config2.jpg)



Parameterdetails :



-   34: Ermöglicht das Starten der Kalibrierung der Öffnungszeit des
    die Tür.

-   41: Ermöglicht Ihnen, den Sabotagestatus zurückzusetzen, indem Sie „Entlasten“ auswählen
    der Alarmzustand"

-   80: auf Hagel

-   255 : ermöglicht das Zurücksetzen auf die Werkskonfiguration



### Gruppen 



Dieses Modul hat zwei Assoziationsgruppen. Die erste "Lifeline" ist
indispensable.



![Groupe](images/aeotec.garagedoorcontroller/groupe.jpg)



Gut zu wissen 
------------



### Besonderheiten 

Kalibrierung der Öffnungszeit des Garagentors:

-   1 : Das Garagentor muss vollständig geschlossen sein.

-   2 : Parameter 34 auf „Kalibrierung durchführen“ aktivieren".

-   3 : Türöffnung starten

-   4 : Warten Sie, bis die Tür vollständig geöffnet ist.

-   5 : Fangen Sie an, die Tür zu schließen

Die Kalibrierung ist abgeschlossen

-   Parameter 34 wird auf „Normal“ aktualisiert".

-   Parameter 35 wird mit der berechneten Öffnungszeit aktualisiert.



Sabotage-Reset:

-   1 : Der Sensor muss ordnungsgemäß befestigt werden.

-   2 : Parameter 41 auf „Alarmzustand aufheben“ aktivieren".

-   3 : Einstellungen aktualisieren.

Die Kalibrierung ist abgeschlossen

-   Parameter 41 wird mit „Sensor wurde nicht entfernt".



Häufig gestellte Fragen. 
------





**@nechry**
