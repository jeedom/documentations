# Nutzung von OpenGarage

OpenGarage ist ein Objekt zum Selberbauen, das aber auch auf Bestellung fertig montiert erhältlich ist und in der Garage zum Einsatz kommt.

Es bietet die Aktivierung eines Relais (zum Öffnen der Garage) und einen Abstandssensor zur Erkennung des Autos.

<http://opengarage.io/>

# Auslesen der Statusmeldungen von OpenGarage

Um den Status des Relais und des Abstandssensors abzurufen, lautet die zu verwendende URL ``http://addropengarage/jc``

Das Ergebnis ist ein JSON-Objekt. Daher muss ein Gerät vom Typ „Skript“ und ein Befehl vom Typ „Info“ (JSON) verwendet werden.

Für den Status des Relais lautet der Name der Eigenschaft im JSON: ``door``

Für den Abstandssensor: dist

# Aktion bei OpenGarage

Die Adresse für die Aktivierung des Relais lautet ``http://addropengarage/cc?dkey=xxxx&click=1``

``dkey`` ist der API-Schlüssel; standardmäßig lautet er „opendoor“

# Weitere Informationen

Die vollständige API-Dokumentation ist verfügbar unter [GitHub](https://github.com/OpenGarage/OpenGarage-Firmware/tree/master/docs)
