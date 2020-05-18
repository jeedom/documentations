# Verwenden Sie Opengarage

OpenGarage ist ein DIY-Objekt, das aber auch auf Bestellung montiert erhältlich ist und in der Garage verwendet wird.

Es bietet die Aktivierung eines Relais (zum Öffnen der Garage) und eines Abstandssensors zur Überprüfung des Vorhandenseins des Fahrzeugs.

<http://opengarage.io/>

# Lesen von OpenGarage-Zuständen

Um den Status des Relais und des Abstandssensors abzurufen, lautet die zu verwendende URL ``http://addropengarage/jc``

Das Ergebnis ist ein Json. Es ist daher erforderlich, ein Skriptgerät und einen Infobefehl vom Typ json zu verwenden

Für den Status des Relais der Name der Eigenschaft des JSON : ``door``

Für den Abstandssensor : dist

# Aktion auf OpenGarage

Die Adresse für die Relaisaktivierung lautet ``http://addropengarage/cc?dkey=xxxx&click=1``

``dkey`` ist der Schlüssel zur API, standardmäßig ist es opendoor

# Weitere Infos

Die vollständige API-Dokumentation finden Sie unter [Github](https://github.com/OpenGarage/OpenGarage-Firmware/tree/master/docs)
