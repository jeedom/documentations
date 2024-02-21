# Changelog Lora Nutzlast

# Änderungsprotokoll LoraPayload

>**WICHTIG**
>
>Zur Erinnerung: Wenn keine Informationen über die Aktualisierung vorliegen, liegt dies daran, dass es sich nur um die Aktualisierung von Dokumentation, Übersetzung oder Text handelt

# 21.02.2024
- Ändern der Protokollebene für bestimmte vom Plugin generierte Informationen

- Ändern des Modultyps *Milesight EM500 PT100*

- Bestell-ID zum Lorapayload-Plugin hinzufügen

- Konfiguration hinzufügen *Dragino D20-LB* (Eigenschaften : Batterie, Temperatur rot, Alarm, PA8-Pegel, MOD)


# 19.01.2024
- Konfiguration hinzufügen *RAK c15003* (Eigenschaften : Temperatur, Luftfeuchtigkeit, Druck, Temperatur2)

- Ändern der Konfiguration *Mclimate Vicki* (Eigenschaften : GetKeepAlive, KeepAlive, GetDevicePrimaryOperationalMode, DevicePrimaryOperationalMode, GetOperationalMode, OperationalMode, Proportionalsteuerung, Gleichrichtungssteuerung, Proportional-Integralsteuerung, GetControlAlgorithm, ControlAlgorithm, Parameter zur Erkennung offener Fenster (1.0 Genauigkeit), Parameter zur Erkennung offener Fenster (0.1 Genauigkeit))

- Spalte hinzufügen *Zustand* um den Wert der Info-Bestellungen anzuzeigen

- Konfiguration hinzufügen *Citylone SmartLighting-Box 2* (Eigenschaften : stateS1, stateS2, stateS3, stateS4, statusS1, statusS2, statusS3, statusS4, input1, input2, Aus Ausgang 1 fest, Ein Ausgang 1 fest, Auto Ausgang 1 fest, Aus Ausgang 2 fest, Ein Ausgang 2 fest, Auto Ausgang 2 fest, Aus Ausgang 3 fest, Ein Ausgang 3 fest, Auto Ausgang 3, Aus Ausgang 4 fest, Ein Ausgang 4 fest, Auto Ausgang 4 fest, Aus alle fest, Ein alle fest, Auto alle fest, DureeOnS1, DureeOnS2, DureeOnS3, DureeOnS4, DureeOffS1 , DureeOffS2, DureeOffS3, DureeOffS4, RSSI, Zeitstempel GMT, Zeitstempel lokal, Aktualisierung über LNS, Längengrad, Breitengrad, Indexbasis, HCHC-Index, HCHP-Index, TIC-Zähler-ID, Tarifoption, einphasiger Momentanstrom, Phase1-Momentanstrom, Phase2 Momentanstrom, Momentanstrom Phase3, Max. Momentanstrom Einphasig, Max. Momentanstrom Phase1, Max. Momentanstrom Phase2, Max. Momentanstrom Phase3, Max. Wirkleistung, Schwellenwertalarmleistung, Scheinbare Momentanleistung, Stromausfall, Zeitänderungsstatus)

- Konfiguration hinzufügen *RAK2171* (Eigenschaften : Nachrichten-ID, Anwendungs-ID, Geräte-ID, Akku, Zeitstempel, GPS-Fix-Status, Nutzlasttyp, Längengrad, Breitengrad, Genauigkeit, GPS-Startnummer, SOS, Alarmstufe)

- Konfiguration hinzufügen *Milesight WS50x* (Eigenschaften : Version, Spannung, Aktivierungsleistung, Aktivfaktor, Stromverbrauch, Strom, Schalter 1, Schalter 2, Schalter 3)

- Konfiguration hinzufügen *Milesight WS51x* (Eigenschaften : Version, Spannung, Aktivierungsleistung, Aktivfaktor, Stromverbrauch, Strom, Zustand)

- Ändern der Konfiguration *SIE MIO LORA V2* (Eigenschaften : EIN 1-2, AUS 1-2, EIN 1-3, AUS 1-3...)

# 27.03.2023

- Schaltfläche „ChildLockDisable“ hinzugefügt – Damit die Kindersicherung automatisch deaktiviert wird, wenn das Gerät offline ist
- Schaltfläche "ChildLockUnchange" hinzugefügt - Damit die Kindersicherung unverändert bleibt, wenn das Gerät offline ist

# 10.03.2023

- Entfernen von doppelten Downlinks, wenn „Bestätigung haben“ aktiviert ist
- Hinzufügen einer Schaltfläche „Version“, um die Hardware- und Softwareversion anzuzeigen
- Stellen Sie das Payload-Format standardmäßig auf „Base64“ ein
- Option hinzugefügt, um Lora-Ausrüstung in der Liste anzuzeigen

# 17.01.2023

- Möglichkeit hinzugefügt, Anweisungen an Lorawan-Module zu senden

# 10.06.2021

- Plugin-Dokumentation
