# Änderungsprotokoll Z-Wave JS

>**WICHTIG**
>
>Wenn es keine Informationen über die Aktualisierung gibt, bedeutet dies, dass es sich nur um die Aktualisierung von Dokumentation, Übersetzung oder Text handelt.

# 31.07.2023

**Verbesserungen**

- Zur Version wechseln *8.21.2* von ZwaveJsUI.
- Addition von allem *tty* in der Liste der Ports (dies wird mit dem neuen Kern nutzlos sein, der es Ihnen ermöglicht, einen Port direkt anhand der ID auszuwählen)
- Letzte Route auf der Statistikseite eines Knotens hinzugefügt (abhängig vom Controller-SDK))
- Letzte Geschwindigkeits-Baudrate auf der Statistikseite eines Knotens hinzugefügt (abhängig vom Controller-SDK))
- Letzte Geschwindigkeits-Baudrate auf der globalen Statistikseite hinzugefügt (abhängig vom Controller-SDK))
- Letzte Route auf der globalen Statistikseite hinzugefügt (abhängig vom Controller-SDK))
- Neueste RSSI auf der globalen Statistikseite hinzugefügt (abhängig vom Controller-SDK))
- Neueste RSSI auf der Statistikseite eines Knotens hinzugefügt (abhängig vom Controller-SDK))
- Hinzufügen eines Diagramms *Netzwerkroute* Stellt die zuletzt genommenen Routen dar (wird skaliert und kann möglicherweise nicht alle Fälle verarbeiten, abhängig vom Controller-SDK)
- Hinzufügen einer Nachricht im Nachrichtencenter, wenn ein Knoten ausfällt (zusätzlich zum Gerätestatusbefehl))
- Hinzufügen einer Nachricht im Nachrichtencenter, wenn ein Knoten aktiv wird, nachdem er tot ist (zusätzlich zum Gerätestatusbefehl))
- Hinzufügen einer Nachricht im Nachrichtencenter, wenn ein Knoten nach dem 4-fachen seines Weckintervalls nicht aufgewacht ist 


**Konfigurationsergänzungen**

- Hinzufügen einer Eigenschaft *ThermostatFanState*
- Hinzufügen eines Unterbefehls *Etikettenstatus* auf die Barriere-Operator-Eigenschaft (um zusätzlich zum numerischen Befehl einen Beschriftungsbefehl mit Text zu haben))
- Konfig hinzugefügt *MCOhome Mh8FC* (Eigenschaften : ThermostatMode, ThermostatModeAction, ThermostatSetpoint, ThermostatFanMode, ThermostatFanModeAction, ThermostatOperatingState, ThermostatFanState, Temperatur)
- Konfig hinzugefügt *Heltun HE-FT01* (Eigenschaften : ThermostatMode, ThermostatModeAction, ThermostatSetpoint, ThermostatFanMode, ThermostatFanModeAction, ThermostatOperatingState, ThermostatFanState, Temperatur, Beleuchtungsstärke, Luftfeuchtigkeit, Leistung, Energie)
- Konfig hinzugefügt *MCOhome MH3901* (Eigenschaften : ThermostatMode, ThermostatModeAction, ThermostatSetpoint, ThermostatOperatingState, Temperatur)
- Hinzufügen eines Unterbefehls *Etikettenstatus* auf die Eigenschaft „Thermostat-Betriebszustand“ (um zusätzlich zum numerischen Befehl einen Beschriftungsbefehl mit Text zu haben))

**Konfigurationsänderungen**

- Ändern der Konfiguration *HRT4_SRT321* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *SRT323* um die Eigenschaften zu verwenden
- Bearbeiten des Bildes *HRT4_SRT321* (Ausschnitt)
- Bearbeiten des Bildes *SRT323* (Ausschnitt)
- Bearbeiten des Bildes *SSR303* (Ausschnitt)
- Bearbeiten des Bildes *SIR321* (Ausschnitt)
- Bearbeiten des Bildes *SES303* (Ausschnitt)
- Bearbeiten des Bildes *SES302* (Ausschnitt)
- Bearbeiten des Bildes *SCSC17* (Ausschnitt)

# 26.06.2023

**Verbesserungen**

- Zur Version wechseln *8.19.0* von ZwaveJsUI.
- Module *FLIRS* werden im Netz im Netzwerkdiagramm nicht mehr als aktiv betrachtet

**Konfigurationsänderungen**

- Ändern der Konfiguration *Aeotec DSB04100 Türfenstersensor* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Aeotec DSC10 Hochleistungsschalter* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Aeotec DSC06106 Intelligenter Energieschalter* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Aeotec DSC11 Smart Strip* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Aeotec DSC08101 Smart Energy Illuminator* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Aeotec DSC014104 Jalousiesteuerung* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Aeotec DSC17103 Mikro-Doppelschalter* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Aeotec DSC18103 Mikroschalter 2* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Aeotec DSC26103 Mikroschalter 2* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Aeotec DSC27103 Mikrodimmer 2* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Benext Panikuhr* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Nächster Panikknopf* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Benext Plug-In-Dimmer* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Dome On Off Plug-In-Schalter Plug-In-Dimmer* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Domux Dx2skz* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Everspring AD142* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Everspring AN145* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Everspring EH403 LED-Flutlicht* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Heiman Dx2skz* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Philio Smart Dimmer E27* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Philio Pan03* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Popp Smart Plug* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Popp 009105* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Schlage an der Wand* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Sigma-Netzstecker* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Swiid-Stecker* um die Eigenschaften zu verwenden

**Konfigurationsergänzungen**

- Konfig hinzugefügt *Heat It ZM Dimmer* (Eigenschaften : Mehrstufig, Strom, Energie, CentralScene, Benachrichtigung)
- Konfig hinzugefügt *Sigma PZ701U* (Eigenschaften : Switch)
- Konfig hinzugefügt *Neo RC03Z* (Eigenschaften : Zentrale Szene, Batterie)
- Hinzufügen einer Untereigenschaft *Wärmesensor* im Eigentum *Benachrichtigung*
- Konfig hinzugefügt *U-Fee GR-201N* (Eigenschaften : Switch)

# 10.04.2023

**Verbesserungen**

- DER *Aktualisierung* kann jetzt bis zu 100 Sekunden statt 60 gehen
- Zur Version wechseln *8.13.1* von ZwaveJsUI.
- Ändern der Funktion *pollValue* für Immobilien bei *Wert* (danke @superbricolo)

**Konfigurationsänderungen**

- Ändern der Konfiguration *Aeotec ZWA19 Wassersensor* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Aeotec ZWA24 7in1* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Everspring SM810* um die Eigenschaften zu verwenden
- Bearbeiten einer Eigenschaft *Geschwindigkeit*
- Bearbeiten des Bildes *Dlink 510* (Ausschnitt)
- Bearbeiten des Bildes *Fibaro Fgs-213* (Ausschnitt)

**Konfigurationsergänzungen**

- Konfig hinzugefügt *Sigma PZ701U* (Eigenschaften : Switch)
- Konfig hinzugefügt *Neo RC03Z* (Eigenschaften : Zentrale Szene, Batterie)
- Hinzufügen einer Untereigenschaft *Wärmesensor* im Eigentum *Benachrichtigung*
- Konfig hinzugefügt *U-Fee GR-201N* (Eigenschaften : Switch)

# 14.02.2023

**Konfigurationsänderungen**

- Ändern der Konfiguration *Aeotec ZWA24 7in1* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Everspring SM810* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Aeotec ZW122* um die Eigenschaften zu verwenden
- Gruppierung von Konfigurationen *Danfoss Living Connect*
- Ändern der Konfiguration *Fibaro FGR-223* Änderung von Leistungs- und Energieendpunkten
- Ändern der Konfiguration *Fibaro FGR-223* Hinzufügen von Hardware und Überstrombenachrichtigung
- Ändern der Konfiguration *Fibaro FGS213* auf Endpunkt 1 wechseln (Firmware >=3.3) und hinzugefügter Wärmesensor und Überstrombenachrichtigung
- Bearbeiten des Bildes *Aeotec ZWA24 7in1* (Ausschnitt)
- Bearbeiten einer Eigenschaft *Geschwindigkeit*
- Bearbeiten des Bildes *Dlink 510* (Ausschnitt)
- Bearbeiten des Bildes *Fibaro Fgs-213* (Ausschnitt)
- Bearbeiten des Bildes *Fibaro Fgs-221* (Ausschnitt)
- Bearbeiten des Bildes *Fibaro Fgs-223* (Ausschnitt)
- Bearbeiten des Bildes *Fibaro-Wandstecker* (Ausschnitt)
- Bearbeiten des Bildes *Fibaro Wandstecker GEN5* (Ausschnitt)

**Konfigurationsergänzungen**

- Hinzufügen einer Untereigenschaft *Wärmesensor* im Eigentum *Benachrichtigung*
- Konfig hinzugefügt *U-Fee GR-201N* (Eigenschaften : Switch)
- Konfig hinzugefügt *Danfoss Kesselrelais* (Eigenschaften : Switch)
- Konfig hinzugefügt *Nächster Alarmton* (Eigenschaften : Switch)


# 24.12.2022

**Konfigurationsänderungen**

- Ändern der Konfiguration *Aeotec ZWA008 Türsensor* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Qubino ZMNHLAX PWM-Thermostat* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Qubino ZMNHDA2 Dimmer* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Fibaro FGR-223* Änderung der Endpunkte von *Aktualisierung*
- Ändern der Konfiguration *Fibaro Fgrgbwm442* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Fibaro FGD212* Benachrichtigungseigenschaften hinzugefügt
- Ändern der Konfiguration *Qubino ZMNHBA2 Unterputz 2 Relais* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Fibaro Walli-Schalter* Benachrichtigungseigenschaften hinzugefügt
- Ändern der Konfiguration *Dlink Dchz110* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Intelligentes LED-Licht von Domitech* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Duwii-Schalter* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Everspring AN157* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Popp Rauchmelder* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Duwi Edan 300* um die Eigenschaften zu verwenden
- Bearbeiten des Bildes *Duwii Dimmer* (Ausschnitt)
- Bearbeiten des Bildes *Aeotec ZWA008 Türsensor* (Ausschnitt)
- Bearbeiten des Bildes *Duwii-Schalter* (Ausschnitt)
- Bearbeiten des Bildes *Duwi Edan 300* (Ausschnitt)
- Bearbeiten des Bildes *Duwii Jalousiesteuerung* (Ausschnitt)
- Bearbeiten des Bildes *Duwii-Fernbedienung* (Ausschnitt)
- Bearbeiten des Bildes *Duwii Zs3500* (Ausschnitt)
- Bearbeiten des Bildes *MCO Zipato p210 Dimmer* (Ausschnitt)

**Konfigurationsergänzungen**

- Hinzufügen einer Untereigenschaft *Ladefehler* im Eigentum *Benachrichtigung*
- Hinzufügen einer Untereigenschaft *Fibaro-Effekte2* im Eigentum *Farbe*

*Wenn Sie von einer Änderung oder Hinzufügung der Konfiguration betroffen sind, führen Sie eine Synchronisierung durch und laden Sie dann die Befehle des Geräts neu, indem Sie nach dem Update „alle Befehle neu erstellen“.*

# 22.12.2022

**Verbesserungen**

- Hinzufügung eines kompletten Motors *Aktualisierungsverwaltung*, nützlich für einige Module, die einige Änderungen nach der Aktion nicht korrekt melden. Nicht ohne triftigen Grund verwenden. Die Konfigurationsdateien tragen die Elemente bei Bedarf
- Registerkarte hinzufügen *Optionen* auf der Ausstattungsseite. Zum Anzeigen und Konfigurieren von Aktualisierungen und möglichen zukünftigen Optionen
- Addition der Anzahl von *Aktualisierung* auf der Seite *Die Gesundheit*

**Konfigurationsänderungen**

- Ändern der Konfiguration *Qubino Luxy Smart Light* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Popp Regenmesser* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Fibaro FGR-223* erste Konfiguration zur Verwendung der Refresh-Engine (in der Tat hat dieses Modul einen bekannten Fehler, es kehrt nicht zu den Positionen oder auf irrtümliche Weise zurück, wenn eine Bewegung vom Z-Wave initiiert wird), um die Aktualisierung wiederherzustellen (gehen Sie zum Reload-Befehl, indem Sie auswählen "ohne Neuanlage von Bestellungen") sollten Sie "Aktualisieren" auf der Registerkarte "Optionen" sehen.
- Ändern der Konfiguration *Fibaro FGR-223* Änderung von Leistungs- und Energieendpunkten
- Ändern der Konfiguration *Fibaro FGR-223* Hinzufügen von Hardware und Überstrombenachrichtigung
- Ändern der Konfiguration *Fibaro FGR-223* Ersetzen Sie die Eigenschaft scene durch centralscene

**Konfigurationsergänzungen**

- Konfig hinzugefügt *Qubino Luxy Smart-Schalter* (Eigenschaften : Schalter, Mehrstufig, Leistung, Energie, Farbe, Benachrichtigung, Benachrichtigungsereignis)
- Bild hinzufügen *Qubino Luxy Smart-Schalter*
- Konfig hinzugefügt *Abus Security Center SHSG10000* (Eigenschaften : Schalter, Batterie)
- Bild hinzufügen *Abus Security Center SHSG10000*
- Hinzufügen einer Untereigenschaft *Gesamt* im Eigentum *Regen*
- Hinzufügen einer Untereigenschaft *Basic* im Eigentum *Regen*
- Hinzufügen einer Untereigenschaft *Überlast* im Eigentum *Benachrichtigung*
- Hinzufügen einer Eigenschaft *Wasserverbrauch*
- Hinzufügen einer Eigenschaft *Benachrichtigungsereignis*

*Wenn Sie von einer Änderung oder Hinzufügung der Konfiguration betroffen sind, führen Sie eine Synchronisierung durch und laden Sie dann die Befehle des Geräts neu, indem Sie nach dem Update „alle Befehle neu erstellen“.*

# 21.12.2022

**Verbesserungen**

- Hinzufügen der Verwaltung von Knotenbenachrichtigungen

**Konfigurationsänderungen**

- Ändern der Konfiguration *Aeotec-Range-Extender 6* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Zipato PD01z* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *NeoCoolCam PD01zt* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *NeoCoolCam PD01z* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Philio/Zipato Mikromodul-Energiezähler* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Fibaro FGS214* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Fibaro FGS213* auf Endpunkt 0 wechseln (noch zu bestätigen)
- Konfigurations-Rollback *Fibaro FGD212-Firmware 3.5*
- Ändern der Konfiguration *Zipato-Tastatur* Hinzufügung von Eigentum *NodeNotification*
- Ändern der Konfiguration *Schlage Tastatur* Hinzufügung von Eigentum *NodeNotification*
- Ändern der Konfiguration *Eurotronic Ventilgeist* um die Eigenschaften zu verwenden
- Gruppierung von Konfigurationen *Danfoss Living Connect*
- Ändern der Konfiguration *Danfoss Devolo Living Connect* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Danfoss Living Connect* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Danfoss Pop Heizkörperthermostat* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Philio PSP05* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Zipato ZP3102* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Vision ZP3102* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Remotec ZXT-120* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Everspring Ad147* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Heatit ThermoFloor Ztemp2* um die Eigenschaften zu verwenden
- Bearbeiten des Bildes *Horstmann Secure SRT321* (Ausschnitt)
- Bearbeiten des Bildes *Remotec ZXT-120* (Ausschnitt)
- Bearbeiten des Bildes *Fibaro FGS224* (Ausschnitt)
- Bearbeiten des Bildes *Fibaro FGS213* (Ausschnitt)
- Bearbeiten des Bildes *Fibaro-Knopf* (Ausschnitt)

**Konfigurationsergänzungen**

- Konfig hinzugefügt *Cherubini ORA ZRX* (Eigenschaften : Auslöser, Benachrichtigung)
- Bild hinzufügen *Cherubini ORA ZRX*
- Konfig hinzugefügt *Heiman HS2WD Sirene* (Eigenschaften : Schalter, Batterie)
- Bild hinzufügen *Heiman HS2WD Sirene*
- Hinzufügen einer Untereigenschaft *Stromstatus* im Eigentum *Benachrichtigung*
- Hinzufügen einer Eigenschaft *NodeNotification*

*Wenn Sie von einer Änderung oder Hinzufügung der Konfiguration betroffen sind, führen Sie eine Synchronisierung durch und laden Sie dann die Befehle des Geräts neu, indem Sie nach dem Update „alle Befehle neu erstellen“.*

# 19.12.2022

**Behebt**

- Beheben Sie einige *fehlende Attribute* auf der Gesundheitsseite auf einigen Knoten, um Fehler (ohne Folgen) in der zu vermeiden *HTTP Fehler*

**Verbesserungen**

- Teil von *ZwaveJS-Benutzeroberfläche* zu Version *8.6.1*
- Ergänzung der *S2-Verwaltung* (Die ZwaveJS-Benutzeroberfläche hat die erwarteten Änderungen vorgenommen)
- Zusatz von *Art von Sicherheit* auf der Seite *Knoteninformationen*

**Konfigurationsänderungen**

- Ändern der Konfiguration *Heiman CO-Sensor* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Heiman Rauchmelder* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Domux CO-Sensor* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Vision-Sicherheit ZS5101* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *HomeSeer Ez Motion* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Shenzhen Rauchmelder* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Vision-Sicherheit ZD2102* um die Eigenschaften zu verwenden
- Bearbeiten des Bildes *Vision-Sicherheit ZD2102* (Ausschnitt)
- Ändern der Konfiguration *Aeotec-Range-Extender 7* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Zipato ZD2102* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Qubino Wetterstation* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Everspring ST814* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Hank HKZW-SO08* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Hank HKZW-SO01* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Hank HKZW-SCN01* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Philio PAT02-B* um die Eigenschaften zu verwenden
- Bearbeiten des Bildes *Philio PAT02-B* (Ausschnitt)
- Bearbeiten des Bildes *Missbrauch von SHWM1000*

**Konfigurationsergänzungen**

- Konfig hinzugefügt *Zipato Energiezähler* (Eigenschaften : Leistung, Energie, Spannung, Strom)
- Bild hinzugefügt für *Zipato Energiezähler*
- Konfig hinzugefügt *Airzone Aidoo Zwave* (Eigenschaften : Temperatur, Thermostatmodus, Thermostatmodusaktion, Thermostatlüftermodus, Thermostatlüftermodusaktion, Thermostatsollwert, Benachrichtigung)
- Bild hinzugefügt für *Airzone Aidoo Zwave*
- Hinzufügen einer Eigenschaft *Thermostatlüftermodus*
- Hinzufügen einer Eigenschaft *Thermostatlüftermodusaktion*
- Hinzufügen einer Eigenschaft *Richtung*
- Hinzufügen einer Eigenschaft *Geschwindigkeit*
- Hinzufügen einer Eigenschaft *Regen*
- Hinzufügen einer Eigenschaft *Co*
- Hinzufügen einer Untereigenschaft *Grundbewegung* im Eigentum *Bewegung*
- Hinzufügen einer Untereigenschaft *Staub im Gerät* im Eigentum *Benachrichtigung*

*Wenn Sie von einer Änderung oder Hinzufügung der Konfiguration betroffen sind, führen Sie eine Synchronisierung durch und laden Sie dann die Befehle des Geräts neu, indem Sie nach dem Update „alle Befehle neu erstellen“.*

# 15.12.2022

**Verbesserungen**

- Anzeigemöglichkeit hinzugefügt *erklärende Assistenten* auf der Seite bestimmter Geräte (Keypad Zipato zum Beispiel, um die Funktionsweise der Codes zu erklären)

**Konfigurationsänderungen**

- Ändern der Konfiguration *Aetoec Nanomote Quad* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Fibaro Fgs211* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Fibaro fgwreu111 Walli Shutter* Übergeben einer Shutter/Level-Eigenschaft und Übergeben von Strom und Energie an Endpunkt 1
- Ändern der Konfiguration *Zipato-Tastatur* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Schlage Tastatur* um die Eigenschaften zu verwenden

**Konfigurationsergänzungen**

- Konfig hinzugefügt *Zoom ZEN17* (Eigenschaften : Switch)
- Bild hinzugefügt für *Zoom ZEN17*
- Konfig hinzugefügt *Abus Hochwassersensor* (Eigenschaften : Überschwemmung, Sabotage, Batterie)
- Bild hinzugefügt für *Abus Hochwassersensor*
- Hinzufügen einer Eigenschaft *Benutzercode*

*Wenn Sie von einer Änderung oder Hinzufügung der Konfiguration betroffen sind, führen Sie eine Synchronisierung durch und laden Sie dann die Befehle des Geräts neu, indem Sie nach dem Update „alle Befehle neu erstellen“.*

# 12.05.2022

**Verbesserungen**

- Registerkarte hinzufügen *NVM-Verwaltung* auf der Netzwerkseite. Sichern, Herunterladen, Senden und Wiederherstellen
- Registerkarte hinzufügen *Aktualisieren* auf einer Knotenseite.
- Ergänzung der Version von *SDKs* auf der Informationsseite eines Controllers oder der ihn erhebenden Module

**Konfigurationsänderungen**

- Ändern der Konfiguration *Cherubini Widom Smart Plug* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Qubino 3-Phasen-Meter* um die Eigenschaften zu verwenden
- Besitzwechsel *Leistungsfaktor* für Option *Produktion*

**Konfigurationsergänzungen**

- Konfig hinzugefügt *Cherubini Widom Meta Doppelschalter* (Eigenschaften : Schalter, zentrale Szene)
- Bild hinzugefügt für *Cherubini Widom Meta Doppelschalter*
- Konfig hinzugefügt *Cherubini Widom Meta kabelgebundener Motor CONTR.7* (Eigenschaften : Shutter)
- Bild hinzugefügt für *Cherubini Widom Meta kabelgebundener Motor CONTR.7*

*Wenn Sie von einer Änderung oder Hinzufügung der Konfiguration betroffen sind, führen Sie eine Synchronisierung durch und laden Sie dann die Befehle des Geräts neu, indem Sie nach dem Update „alle Befehle neu erstellen“.*

# 12.01.2022

**Verbesserungen**

- Management *Befehle ohne Einheiten* während es (in der zwaveJS-Rückgabe) sollte, um das Protokoll nicht zu verschmutzen 

**Konfigurationsänderungen**

- Ändern der Konfiguration *Qubino ZMNHNDX Flush 1D* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Fibaro FGSS101 Rauch* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Smarthome Everspring AN-179* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Aeotec ZWA009 AERQ* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Popp Außensirene* um die Eigenschaften zu nutzen (teilweise)
- Ändern der Konfiguration *Aetoec ZWA080* um die Eigenschaften (teilweise) zu verwenden und Tonsteuerungen hinzuzufügen (Lautstärke und Sound)
- Besitzwechsel *Hitze* mit Klassenfallmanagement *ALARMSENSOR*
- Besitzwechsel *Rauch* mit Klassenfallmanagement *ALARMSENSOR*
- Besitzwechsel *Sollwertthermostat* um die Anweisungen mit dem Widget zu haben *Taste* standardmäßig
- Bearbeiten des Bildes *Popp Außensirene* Ausschnitt

**Konfigurationsergänzungen**

- Konfig hinzugefügt *Sicherer Hortsmann SRT321* (Eigenschaften : ThermostatMode, ThermostatOperatingState, ThermostatModeAction, ThermostatSetpoint, Temperatur, Batterie)
- Bild hinzugefügt für *Sicherer Hortsmann SRT321*
- Konfig hinzugefügt *Hoppe ConnectSense-Schloss* (Eigenschaften : Öffnung, Benachrichtigungssensor, Neigung, Batterie)
- Bild hinzugefügt für *Hoppe ConnectSense-Schloss*
- Parameter hinzugefügt für *Hoppe ConnectSense-Schloss*

*Wenn Sie von einer Änderung oder Hinzufügung der Konfiguration betroffen sind, führen Sie eine Synchronisierung durch und laden Sie dann die Befehle des Geräts neu, indem Sie nach dem Update „alle Befehle neu erstellen“.*

# 28.11.2022

**Behebt**

- Korrektur an *Konfigurationsparameter* um zu *um zu vermeiden, dass 0 überhaupt gesendet wird* während einer Auswahl vom Listentyp (auf einem Parameter, der dies vorschlägt)

**Verbesserungen**

- Ergänzung von a *NEUSTART* des Motors notwendig *bei gescheitertem Ausschluss*
- Anzeige der Meldung bezüglich der *0 Bestellung* das im Fall von a *initiierter Knoten*

**Konfigurationsänderungen**

- Ändern der Konfiguration *Aeotec TriSensor* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Hank HKZW-MS02* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Philio PSM02* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Everspring AN158* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Raumfühler von Danfoss* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Vision ZS Schock und Vibration* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Fibaro Walli-Controller* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Fibaro FGD211* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Fibaro Wandstecker UK* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Fibaro Walli Outlet F* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Fibaro Walli Dimmer* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Fibaro RGBW441* das Grundstück zu nutzen *Fibaro-Effekte*
- Besitzwechsel *Leuchtdichte* mit Zusatz eines Modus in %
- Besitzwechsel *Sollwertthermostat* um die Anweisungen mit dem Widget zu haben *Taste* standardmäßig
- Besitzwechsel *Farbe* mit Zusatz eines Typs *Fibaro-Effekte* (aufhören, die Befehle zu beschreiben)
- Ergänzung von a *empfohlene Einstellung* für die *Philio PST02*

*Wenn Sie von einer Änderung oder Hinzufügung der Konfiguration betroffen sind, führen Sie eine Synchronisierung durch und laden Sie dann die Befehle des Geräts neu, indem Sie nach dem Update „alle Befehle neu erstellen“.*

# 25.11.2022

**Verbesserungen**

- Ergänzung von a *Versionsverwaltung der ZwaveJS-Benutzeroberfläche*
- Hinzufügen einer Nachricht in der *Nachrichtenzentrum* und auf der Plugin-Seite, wenn ZwaveJS UI *muss aktualisiert werden*
- Durchgang der *ZwaveJS-UI-Version* zu Version *8.5.1* 

**Konfigurationsänderungen**

- Einstellungen ändern für *Hank Smart Plug (HKZW-SO08)* (Anzeigeproblem)

*Wenn Sie von einer Änderung oder Hinzufügung der Konfiguration betroffen sind, führen Sie eine Synchronisierung durch und laden Sie dann die Befehle des Geräts neu, indem Sie nach dem Update „alle Befehle neu erstellen“.*

# 23.11.2022

**Verbesserungen**

- Hinzufügen eines Bildmaterials für a *Parameter oder Wakeup* steht aus
- Hinzufügung einer Seite, auf der alle angezeigt werden können *die Einstellungen* steht aus
- Hinzufügen einer Webapp-Seite, auf der alle angezeigt werden können *die Einstellungen* steht aus
- Hinzufügen einer Schaltfläche zum Löschen auf der Seite *Steht aus*. Ermöglicht das Löschen einer gehaltenen Leitung. Dies löscht nicht den Auftrag, der an den Controller gesendet wurde, sondern nur die in Jeedom anstehenden Informationen (nützlich für Kalibrierungsparameter zum Beispiel, die niemals den gesendeten Wert annehmen, oder andere Parameter, bei denen er unbrauchbar wäre)


**Konfigurationsänderungen**

- Ändern der Konfiguration *Popp Strike Lock* um die Öffnungseigenschaft zu verwenden (für den Kontakt)
- Ändern der Konfiguration *Fibaro FGD212* Unterschiedsverwaltung von Firmware 3 hinzuzufügen.5 (Endpunkt 1 auf Firmware <= 3.4 Endpunkt 0 auf Ziel nur sonst)
- Besitzwechsel *Türschloss* Unlock (mit Timeout) auf allen Geräten hinzuzufügen, die diese Eigenschaft verwenden

**Konfigurationsergänzungen**

- Konfig hinzugefügt *Hank Smart Plug (HKZW-SO08)* (Eigenschaften : Schalter, Leistung, Energie, Spannung, Strom, Szene)
- Konfig hinzugefügt *Idinio Fußdimmer* (Eigenschaften : Multilevel, Leistung, Energie)
- Parameter hinzugefügt für *Hank Smart Plug (HKZW-SO08)*

*Wenn Sie von einer Änderung oder Hinzufügung der Konfiguration betroffen sind, führen Sie eine Synchronisierung durch und laden Sie dann die Befehle des Geräts neu, indem Sie nach dem Update „alle Befehle neu erstellen“.*

# 21.11.2022

**Behebt**

- Wechsel am *grafische Netzwerke* : Nur die ersten direkten Routen werden rot, wenn Sie mit der Maus über einen Knoten fahren, um den Fehler bei bestimmten Installationen und bestimmten Browsern zu vermeiden *Maximale Stapelgröße überschritten* im Zusammenhang mit Rekursionen

**Verbesserungen**

- Zu berücksichtigen *refreshNodeCC* als Eigenschaft eines manuell erstellten Befehls zum Aktualisieren eines CC
- Ergänzung von a *horizontales Scrollen* auf dem Netzwerk modal/Tab *Routing-Tabelle* (Danke @Salvialf)
- Verschiebung von *Bestellschalter* auf der rechten Seite der Ausrüstungsseite

**Konfigurationsänderungen**

- Ändern der Konfiguration *Fibaro FGR223* um die Macht der Multilevel-Klasse zu nutzen
- Ändern der Konfiguration *Fibaro FGR222* um die Macht der Multilevel-Klasse zu nutzen
- Ändern der Konfiguration *Fibaro FGRM222* um die Macht der Multilevel-Klasse zu nutzen
- Ändern der Konfiguration *Devolo Mt02648* um Eigenschaften zu verwenden und empfohlene Einstellungen hinzuzufügen
- Ändern der Konfiguration *Devolo Mt02647* um Eigenschaften zu verwenden und empfohlene Einstellungen hinzuzufügen
- Ändern der Konfiguration *Popp Strike Lock* um die Eigenschaften zu verwenden
- Ändern der Konfiguration *Aeotec ZWA011* um die Eigenschaften zu verwenden und sein Bild hinzuzufügen

*Wenn Sie von einer Änderung oder Hinzufügung der Konfiguration betroffen sind, führen Sie eine Synchronisierung durch und laden Sie dann die Befehle des Geräts neu, indem Sie nach dem Update „alle Befehle neu erstellen“.*

# 18.11.2022

**Verbesserungen**

- Zugriff auf die Benutzeroberfläche von ZwaveJS hinzugefügt *(im Menü Z-Wave-Netzwerk, Registerkarte Aktionen)*. Verwenden Sie es nicht, um Einstellungen zu ändern!
- Hinzufügen eines Ports für den speziellen Fall einiger Raspberry Pi *(Weitere werden nach Bedarf hinzugefügt)*
- Befehlszähler für jede Ausrüstung hinzugefügt *(Ignorieren der 4 technischen Befehle)*
- Dynamische Hilfe bei Nullbefehlen hinzugefügt.

# 15.11.2022

- Wechseln Sie zur stabilen Version

# 04.05.2022

- Beta 1. Phase
