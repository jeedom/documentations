OpenGarage ist ein DIY-Objekt, das aber auch montiert erhältlich ist
in der Garage verwendet.

Es bietet die Aktivierung eines Relais (zum Öffnen der Garage) und eines
Abstandssensor zur Überprüfung des Vorhandenseins des Fahrzeugs.

<http://opengarage.io/>

Lesen von OpenGarage-Zuständen 
===============================

Um den Status des Relais und des Abstandssensors wiederherzustellen, muss die URL an
Verwendung ist :

    http://addropengarage/jc

Das Ergebnis ist ein Json. Verwenden Sie also Geräte
Skript- und Infobefehl vom Typ json

Für den Status des Relais der Name der Eigenschaft des JSON : Tür

Für den Abstandssensor : 

Aktion auf OpenGarage 
========================

Die Adresse für die Relaisaktivierung lautet :

    http://addropengarage/cc?dkey=xxxx&click=1

dkey ist der Schlüssel zur API, standardmäßig ist es openTür

Weitere Infos 
============

Die vollständige API-Dokumentation ist auf github verfügbar :

<https://github.com/OpenGarage/OpenGarage-Firmware/tree/master/docs>
