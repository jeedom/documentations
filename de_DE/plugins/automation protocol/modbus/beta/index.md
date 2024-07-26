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





 :warning: Auswahl der Protokollebene der Modbus-Bibliothek :

 Standardmäßig ist sie auf FEHLER konfiguriert, da die Bibliothek ausführlich ist
 Sie können die Stufe ändern : Sie müssen den Daemon speichern und neu starten




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


MODBUS-DETAILS :


Die Größe eines Modbus-Registers beträgt 2 Byte (2 Bytes), also 16 Bit



WIEDERGABESTEUERUNG :

Für Spuleneingänge  :  
  - Sie fügen einen neuen Modbus-Befehl hinzu und benennen den Befehl. Sie wählen einen Befehl vom Typ Info unter Binary oder Numeric type aus.
  - Wählen Sie den entsprechenden Funktionscode : FC01
  - Anschließend müssen das Startregister sowie die Anzahl der zu lesenden Register ausgewählt werden
  Beim Speichern wird der erstellte Befehl gelöscht, um so viele Befehle wie die angegebene Anzahl an Registern zu erstellen.
  Ex: Wenn Sie ein Startregister von 1 und eine Registeranzahl von 4 wählen, werden die Befehle erstellt : ReadCoil_1, ReadCoil_2, ReadCoil_3, ReadCoil_4
  - Sie können die ReadCoils dann natürlich nach Ihren Wünschen umbenennen.

Für Fc2 lesen Sie diskret :

- Erstellen Sie unter „Anderer Typ“ eine Bestellung vom Typ „Info“
- Wählen Sie fc02
- Wählen Sie das Format „Bits“, „Big Endian“ und „Big Word“
- Vervollständigen Sie das Register
- Und füllen Sie das Feld aus : Anzahl der zu lesenden Bits (0 bis 15))

Wenn Sie vom Lesen zurückkehren, erhalten Sie einen Befehl vom Typ „String“ mit dem Wert der angeforderten Bits


  Für Halteregister und Eingangsregister:
  - Sie fügen einen neuen Modbus-Befehl hinzu und benennen den Befehl. Sie wählen einen Befehl vom Typ Info unter Numerischer Typ.
  - Wählen Sie das entsprechende Format aus : Float , Long/Integer oder Bits
  - Wählen Sie den entsprechenden Funktionscode : FC04 oder FC03
  - Das Startregister sowie die Anzahl der Register : Bei Floats wird der Wert in maximal 4 Registern codiert, das Minimum beträgt 2.



Einige Register können nur gelesen werden, indem mehrere Register gleichzeitig mit demselben Befehl gelesen werden :

Beispiel : Wir erstellen einen Befehl, wählen „Info“ und einen anderen Untertyp und geben 10 Register an
Siehe Spezifische Parameter am Ende der Dokumentation


BEFEHLE SCHREIBEN:

 Auf Ihrem Gerät werden standardmäßig 3 Aktions-/Nachrichtentyp-Befehle erstellt; Multiregister-Schreiben, Bit-Schreiben und Multicoil-Schreiben


WICHTIG :


 Ihr Funktionsprinzip:


![cmdEcritures](../images/modbusCmdsEcritures.png)

 :warning: NEUE ONE-BIT-SCHREIBMETHODE :

 Um ein bestimmtes Bit in einem Register zu ändern : Sie können einen Befehl vom Typ Aktion erstellen und die Codefunktion „Bit schreiben“ auswählen'. Es werden Ihnen nur die beiden auszufüllenden Felder angezeigt : Startregister und Bitposition. 
 Beim Speichern werden dadurch 2 Aktionsbefehle erstellt : Eine zum Senden von 0 und eine zum Senden von 1. Dadurch wird die von Ihnen konfigurierte gelöscht.
 Die beiden neuen Befehle erhalten ihren Typnamen :

 WriteBit_Register(RegisterNum)_Position(BitPosition)_1 und WriteBit_Register(RegisterNum)_Position(BitPosition)_0

 


  ÄNDERUNG DER BITS EINES REGISTERS (Alte Methode):

  Um das Bit eines Registers zu ändern, müssen Sie den Befehl message WriteBit verwenden. In der Konfiguration des Befehls müssen Sie im Feld Startregister die Nummer des zu schreibenden Registers auswählen. Keine weitere Konfiguration erforderlich
  Anschließend müssen Sie im Nachrichtentext des Befehls im Dashboard die folgende Syntax verwenden : bitWert&indexbit
  Möglicher Bitwert 0 oder 1
  indexBit ist der Wert zwischen 0 und 15 (einschließlich der Werte))
  Den Index des zu ändernden Bits entnehmen Sie bitte der Dokumentation Ihres Geräts




   NEUES SCHREIBEN IN MEHREREN REGISTERN EINER ANFRAGE:

      - Indem wir einen Befehl „Aktion -> Anderer Untertyp“ erstellen, dann Fc16 auswählen und das Startregister und die neue Registertabellenzeile in den Befehlsparametern ausfüllen, können wir diesen Befehl ausführen, um die eingegebenen Werte aus dem Startregister zu schreiben :

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
      Ex : 01110111 Damit werden vom konfigurierten Startregister die Werte True(1) oder False(0) an die Register gesendet



  - Bit schreiben : In der Konfiguration des Befehls müssen Sie das Startregister sowie die Reihenfolge der Bytes und des Wortes eingeben.
     Standardmäßig ist der Funktionscode fc03, da dieser Befehl den Wert des Registersatzes binär an die Befehlsinfo "infobitbinary".

     Bitte belassen Sie diese Konfiguration als Standard.

     Beim Befehl info "infobitbinary" haben Sie den Binärwert des Parameterregisters beim Befehl Write Bit.
     Um das Bit im Register zu ändern :

        valuetosend&PositionBit :   Ex:  1&4 Wir senden den Wert 1 an das Bit der Position 4 von rechts beginnend
        Auf dem Info-Befehl „infobitbinary“ sehen Sie den Wert 10000101, was dem binären Wert des Parameterregisters entspricht.
        Indem Sie 1&6 schreiben, haben Sie jetzt den Wert : 10100101 auf dem konfigurierten Register.



WICHTIG :


Einige SPS haben die Funktion fc06 nicht
  Siehe Spezifische Parameter am Ende der Dokumentation



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





# Spezifische Parameter

HEX-RÜCKKEHR :
  Um einen Befehl zu haben, der den Wert des Registers in Hexadezimalform zurückgibt (für einen Befehl, der beispielsweise die Fehler eines Geräts meldet), erstellen Sie Ihren Befehl und konfigurieren ihn wie gewohnt,
  und kreuzen Sie Return Hexa an.

  Dadurch wird bei der Rückkehr ein neuer Befehl erstellt, der den Namen des ursprünglichen Befehls hat, gefolgt von _HEXAVALUE



MEHRREGISTERLESEN :
  Durch Aktivieren von „LectureMultiRegistres“ werden automatisch so viele neue Befehle erstellt, wie in „Anzahl der Register“ angegeben, unter Verwendung des Namens des ursprünglichen Befehls und der ID des Befehls in der Iteration. Sie können die Befehle natürlich umbenennen; Beim Lesen des ursprünglichen Befehls enthält sein Wert eine Zeichenfolge der 10 Registerwerte und aktualisiert die 10 entsprechenden Befehle.



Fc16 UNVERFOLGTE REGISTER :
  Einige SPS haben die Funktion fc06 nicht
  Sie können unter Nachrichtentyp einen Aktionsbefehl erstellen und fc16 auswählen
  Überprüfen Sie das Fc16-Register nicht verfolgt
  Im Dashboard müssen Sie diese Syntax verwenden :
  Abgangsregister ! Wert & nbRegister durch a getrennt |

  Ex: 7!122.5&2|10!22&2

  Wir schreiben aus Register 7 den Wert 122.5 auf 2 Register und auch von Register 10, der Wert 22, auf 2 Register



BETRIEB AUF BESTELLUNG :
  Für eine Operation zur Wertrückgabe : Im Feld „Operation“ der Bestellung können Sie eine mathematische Operation ausfüllen, indem Sie das Tag einfügen #value# um den Wert dieses Befehls anzugeben :
  Beispiel : (#value# / 10 ) * 2
  Die Berechnung wird bei der Rückgabe von Daten von diesem Befehl durchgeführt.
  Nutzen Sie * gut für Multiplikationen






# XLS-Befehle importieren/exportierenX

Nach der Anlage eines Equipments können Sie eine xlsx-Datei zur Erstellung Ihrer Aufträge importieren
Die Vorlagendatei finden Sie unter „plugins/modbus/data/templateXlsx/exportModbus.xls“
Sie können darauf zugreifen und es über Ihren Jeedom -> Einstellungen -> System -> Dateieditor herunterladen
