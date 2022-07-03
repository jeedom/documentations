# Offene Garagennutzung

OpenGarage ist ein DIY-Objekt, aber auch auf Bestellung montiert und in der Garage einsetzbar.

Es bietet die Aktivierung eines Relais (zum Öffnen der Garage) und eines Abstandssensors, um die Anwesenheit des Autos zu überprüfen.

<http://opengarage.io/>

# Lesen von OpenGarage-Zuständen

Um den Status des Relais und des Abstandssensors abzurufen, ist die URL zu verwenden ``http://addropengarage/jc``

Das Ergebnis ist ein json. Es ist daher notwendig, eine Ausrüstung vom Typ Skript und einen info-Befehl vom Typ json zu verwenden

Für den Status des Relays der Name der Eigenschaft der json : ``door``

Für den Abstandssensor : dist

# Aktion auf der OpenGarage

Die Adresse für die Relaisaktivierung lautet ``http://addropengarage/cc?dkey=xxxx&click=1``

``dkey`` ist der API-Schlüssel, Standard ist Opendoor

# Mehr Informationen

Die vollständige API-Dokumentation ist verfügbar unter [github](https://github.com/OpenGarage/OpenGarage-Firmware/tree/master/docs)
