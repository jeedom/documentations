# Modbus

#Description

Plugin zum Lesen und Schreiben auf Ihren ModbusTCP/IP- und RTU-Geräten
Nicht kompatibel mit Wago zur Zeit



# Plugin-Setup

Nachdem Sie das Plugin heruntergeladen haben, müssen Sie es wie jedes Jeedom-Plugin zuerst aktivieren :

![config](../images/ModbusActiv.png)

Dann müssen Sie die Installation der Abhängigkeiten starten (auch wenn sie OK erscheinen) :

![dependances](../images/ModbusDep.png)

Starten Sie abschließend den Daemon :

![demon](../images/ModbusDemon.png)

Rien n'est à modifier dans le champ « Port socket interne » de la section « Configuration ».

![socket](../images/ModbusConfig.png)

Auf derselben Registerkarte müssen Sie den Ruhewert zwischen dem Aktualisieren Ihrer Ausrüstung auswählen (standardmäßig 5 Sek)

Sie können auch einen Wiederholungsversuch setzen, um die Anforderung für einen Befehl/eine Ausrüstung erneut auszuführen, die fehlerhaft wäre (standardmäßig False)
Sie können auch die Anzahl der Versuche und die Verzögerung zwischen diesen Versuchen auswählen.




# Nutzung des Plugins


WICHTIG :

Um das Plugin zu verwenden, müssen Sie die Parameter Ihrer Ein-/Ausgänge Ihrer Modbus-Peripherie kennen (Datenformat, Bitreihenfolge usw...)

Für Befehle gibt es Parameter zur Auswahl :

Parameterdetails :
- Negativer Wert : für Formate vom Typ LONG/INT müssen Sie angeben, ob der Schreib-/Lesewert negativ sein soll
- Versatz : ob der Offset in den Registernummern bestimmter Modbus-Geräte berücksichtigt wird oder nicht
- Wählen Sie die Slider-Tonhöhe : Hiermit wählen Sie den Schritt des Schiebereglers im Falle eines Befehls vom Typ Aktion/Schieberegler, wenn Sie nicht ganzzahlige Werte senden möchten.




WICHTIG :

In Anbetracht der Zeit, die für die Konfiguration bestimmter Geräte aufgewendet werden muss, ist es möglich, die Befehle eines bereits erstellten Geräts zu exportieren und es lokal in .json herunterzuladen.

Sie können es also entweder auf eine andere Box problemlos auf ein neues Gerät des gleichen Typs importieren (nur um das zu ändern, was sich in Bezug auf seine Verbindung unterscheidet)


Auf der Ausrüstungsseite unten rechts haben Sie diesen Einsatz : 

![dependances](../images/exportFunction.png)


Klicken Sie auf Liste der zu exportierenden Bestellungen; Es öffnet sich ein Fenster mit den vorhandenen Befehlen auf diesem Gerät:

![dependances](../images/choiceCmds.png)

Sie können sie bei Bedarf alle auswählen, indem Sie die Schaltfläche oben im Fenster verwenden. 
Wenn die Befehle ausgewählt sind, klicken Sie auf Validieren.



In diesem Feld sehen Sie nun die ausgewählten Bestellungen, die für den Export bereit sind :

![dependances](../images/exportCmds.png)

Sie müssen nur auf Download Config der gerade erschienenen Bestellungen klicken.



Importieren von Befehlen in Geräte : Klicken Sie oben rechts neben dem Gerät auf die Schaltfläche Import Json :

![dependances](../images/importFunction.png)





Sie können auch direkt ein Gerätemodell auswählen, das in der Konfiguration des Plugins verfügbar ist, um die in diesem Modell bereitgestellten Befehle zu laden; 
Wählen Sie das ausgewählte Modell und dann Validieren. Dann können Sie speichern. 






WIEDERGABESTEUERUNG :

Für Spulen und diskrete Eingänge :  
  - Sie fügen einen neuen Modbus-Befehl hinzu und benennen den Befehl. Sie wählen einen Befehl vom Typ Info unter Binary oder Numeric type aus.
  - Wählen Sie den entsprechenden Funktionscode : FC01 oder FC02
  - Es ist dann notwendig, das Startregister sowie die Anzahl der zu lesenden Bytes (Anzahl der Register)
  Beim Speichern wird der erstellte Befehl gelöscht, um so viele Befehle wie die angegebene Anzahl von Bytes zu erstellen.
  Ex: Wenn Sie ein Startregister von 1 und eine Anzahl von Bytes von 4 wählen, werden die Befehle erstellt : ReadCoil_1, ReadCoil_2, ReadCoil_3, ReadCoil_4
  - Sie können die ReadCoils/Discretes dann natürlich nach Ihren Wünschen umbenennen.



  Für Halteregister und Eingangsregister:
  - Sie fügen einen neuen Modbus-Befehl hinzu und benennen den Befehl. Sie wählen einen Befehl vom Typ Info unter Numerischer Typ.
  - Wählen Sie das entsprechende Format aus : Float , Long/Integer oder Bits
  - Wählen Sie den entsprechenden Funktionscode : FC04 oder FC03
  - Das Startregister sowie die Anzahl der Bytes : Für Gleitkommazahlen beträgt die maximale Anzahl codierter Register 4 Register.
  
  
Einige Register können nur gelesen werden, indem mehrere Register gleichzeitig mit demselben Befehl gelesen werden :

Beispiel : Wir erstellen einen Befehl, wählen Info und einen anderen Untertyp und geben 10 Bytes (10 Register) an; Durch Aktivieren von LectureMultiRegistres werden automatisch 10 neue Bestellungen erstellt, wobei der Name der ursprünglichen Bestellung plus die ID der Bestellung in Iteration verwendet wird. Sie können die Befehle natürlich umbenennen; Beim Lesen des ursprünglichen Befehls enthält sein Wert eine Zeichenfolge der 10 Registerwerte und aktualisiert die 10 entsprechenden Befehle.



Einige Register müssen möglicherweise in mehrere Bytes aufgeteilt werden :
Beispiel : Ein Register 17 muss laut Dokumentation des Geräts einen Wert FF oder 00 (um zu wissen, ob ein Lüfter funktioniert oder nicht) im ersten Byte des Registers sowie einen numerischen Wert im zweiten Byte des Registers zurückgeben.
Es ist dann notwendig, einen Befehl in fc3 zu erstellen und im Feld nbOctets die Ziffer 2 anzugeben; Dadurch werden 2 zusätzliche Befehle erstellt, basierend auf dem Namen des ursprünglichen Befehls. diese 2 Befehle entsprechen jeweils einem Byte. Die oben zurückgegebenen Werte sind hexadezimal; Wenn Sie den numerischen Wert benötigen, müssen Sie Hexa2dec mit demselben Befehl überprüfen.



BEFEHLE SCHREIBEN:

 Auf Ihrem Gerät werden standardmäßig 3 Aktions-/Nachrichtentyp-Befehle erstellt; Multiregister-Schreiben, Bit-Schreiben und Multicoil-Schreiben


WICHTIG :


 Ihr Funktionsprinzip:



![cmdEcritures](../images/modbusCmdsEcritures.png)


NEUES SCHREIBEN :

 - Indem wir einen Befehl Action -> Other subtype erstellen, dann Fc16 wählen und das Startregister und die neue Registertabellenzeile in den Parametern des Befehls ausfüllen, können wir diesen Befehl ausführen, um die eingegebenen Werte aus dem Startregister zu schreiben :

 Ex : Registrierung starten : 10
      Zeilentabellenregister : 10-45-22-25.6-2360
      Wir senden auf den Registern 10,11,12,13 und 14 die Werte 10,45,22,22.6 und 2360
      Werte müssen durch ein - getrennt werden, und für Dezimalzahlen setzen Sie a .


  - MultiRegister-Schreiben : In der Konfiguration des Befehls müssen Sie das Startregister sowie die Reihenfolge der Bytes und des Wortes eingeben.
  Standardmäßig ist der Funktionscode FC16. Bitte belassen Sie diese Konfiguration als Standard.

  Verwenden Sie diese Syntax, um die Werte in den Registern zu ändern:
  - valuetosend&nbofregister, getrennt durch | :   Ex:  120&1|214.5&4 Wir senden die Ganzzahl 120 an ein Register, beginnend mit dem konfigurierten Startregister,
  dann 214.5 in Float auf 4 Registern, die dem vorherigen folgen.

  Schreiben Sie für Float-Typen den Wert wie oben mit a .


  - Multicoil-Schreiben : In der Konfiguration des Befehls müssen Sie das Startregister eingeben
  Standardmäßig ist der Funktionscode fc15. Bitte belassen Sie diese Konfiguration als Standard.

  Verwenden Sie diese Syntax, um die Werte in den Registern zu ändern:
  -  Ex : 01110111 Damit werden vom konfigurierten Startregister die Werte True(1) oder False(0) an die Register gesendet



  - Bit schreiben : In der Konfiguration des Befehls müssen Sie das Startregister sowie die Reihenfolge der Bytes und des Wortes eingeben.
  Standardmäßig ist der Funktionscode fc03, da dieser Befehl den Wert des Registersatzes binär an die Befehlsinfo "infobitbinary".

  Bitte belassen Sie diese Konfiguration als Standard.

  Beim Befehl info "infobitbinary" haben Sie den Binärwert des Parameterregisters beim Befehl Write Bit.
  Um das Bit im Register zu ändern

  - valuetosend&PositionBit :   Ex:  1&4 Wir senden den Wert 1 an das Bit der Position 4 von rechts beginnend
  Auf dem Info-Befehl „infobitbinary“ sehen Sie den Wert 10000101, was dem binären Wert des Parameterregisters entspricht.
  Indem Sie 1&6 schreiben, haben Sie jetzt den Wert : 10100101 auf dem konfigurierten Register.



WICHTIG :


Einige SPS haben die Funktion fc06 nicht
Sie können unter Nachrichtentyp einen Aktionsbefehl erstellen und fc16 auswählen
Überprüfen Sie das Fc16-Register nicht verfolgt
Im Dashboard müssen Sie diese Syntax verwenden :
Abgangsregister ! Wert & nbRegister durch a getrennt |

Ex: 7!122.5&2|10!22&2

Wir schreiben aus Register 7 den Wert 122.5 auf 2 Register und auch von Register 10, der Wert 22, auf 2 Register



Auf einer Spule schreiben :

Beispiel für Register 1 Ein:
- Sie fügen einen neuen Modbus-Befehl hinzu und benennen den Befehl. Sie wählen einen Aktionstypbefehl unter Standardtyp aus.
- Wählen Sie Fc5 Write Single Coil
- Abgangsregister : 1
- Anzahl Bytes : 1
- Geben Sie 1 in den zu sendenden Wert ein

Beispiel für Register 1 Aus:
- Sie fügen einen neuen Modbus-Befehl hinzu und benennen den Befehl. Sie wählen einen Aktionstypbefehl unter Standardtyp aus.
- Wählen Sie Fc5 Write Single Coil
- Abgangsregister : 1
- Anzahl Bytes : 1
- Geben Sie 0 in den zu sendenden Wert ein


Indem Sie auf diese Aktionsbefehle auf Ihrem Dashboard reagieren, senden Sie daher True oder False an Ihre Coils.




In ein Halteregister schreiben :

- Sie fügen einen neuen Modbus-Befehl hinzu und benennen den Befehl. Sie wählen einen Aktionstypbefehl unter Schiebereglertyp aus.
- Wählen Sie auch einen Min- und Max-Wert für diesen Schieberegler (denken Sie daran, einen Min-Wert zu verwenden, um einen negativen Wert zu senden)
- Wählen Sie Bc6 Write Single Register
- Wählen Sie die Anzahl der Register : 1
- Wählen Sie den Schritt des Schiebereglers (für Dezimalzahlen schreiben Sie mit a .   ex: 0.2)



Wenn ein Schreibvorgang abgeschlossen ist, unabhängig davon, ob er erfolgreich ist oder nicht, wird auf Jeedom eine Nachricht angezeigt. 
Sie können diese Meldung in der Plugin-Konfiguration deaktivieren/aktivieren.
