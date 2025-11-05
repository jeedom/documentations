# OpenGarage verwenden

OpenGarage ist ein Objekt zum Selbstbau, kann aber auch vormontiert bestellt werden und wird in der Garage verwendet.

Es bietet die Möglichkeit, ein Relais (zum Öffnen der Garage) und einen Abstandssensor zu aktivieren, um die Anwesenheit des Fahrzeugs zu überprüfen.

<http://opengarage.io/>

# OpenGarage-Status lesen

Um den Status des Relais und des Distanzsensors abzurufen, verwenden Sie die folgende URL: ``http://addropengarage/jc``

Das Ergebnis ist eine JSON-Datei. Daher benötigen Sie ein Gerät vom Skripttyp und einen Info-Befehl vom JSON-Typ

Für den Relaisstatus der Eigenschaftsname in der JSON-Datei : ``door``

Für den Abstandssensor : dist

# Aktionen auf OpenGarage

Die Adresse zum Aktivieren des Relais lautet: ``http://addropengarage/cc?dkey=xxxx&click=1``

``dkey`` ist der API-Schlüssel; standardmäßig lautet er opendoor

# Weitere Informationen

Die vollständige API-Dokumentation ist verfügbar unter [GitHub](https://github.com/OpenGarage/OpenGarage-Firmware/tree/master/docs)
