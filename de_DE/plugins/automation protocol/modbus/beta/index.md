## 

### Description

Plugin zum Lesen und Schreiben auf Ihren ModbusTCP/IP- und RTU-Geräten



### Plugin-Setup

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




### Nutzung des Plugins


WICHTIG :

Um das Plugin zu verwenden, müssen Sie die Parameter Ihrer Ein-/Ausgänge Ihrer Modbus-Peripherie kennen (Datenformat, Bitreihenfolge usw...)

Für Befehle gibt es Parameter zur Auswahl :

Parameterdetails :
- Versatz : ob der Offset in den Registernummern bestimmter Modbus-Geräte berücksichtigt wird oder nicht
- Wählen Sie die Slider-Tonhöhe : Hiermit wählen Sie den Schritt des Schiebereglers im Falle eines Befehls vom Typ Aktion/Schieberegler, wenn Sie nicht ganzzahlige Werte senden möchten.




WICHTIG :

In Anbetracht der Zeit, die für die Konfiguration bestimmter Geräte aufgewendet werden muss, ist es möglich, die Befehle eines bereits erstellten Geräts zu exportieren und es lokal in .json herunterzuladen.

Sie können es also entweder auf eine andere Box problemlos auf ein neues Gerät des gleichen Typs importieren (nur um das zu ändern, was sich in Bezug auf seine Verbindung unterscheidet)


 :

![dependances](../images/importJson.png)





### WIEDERGABESTEUERUNG :

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






   #### :

  ######  : 
        
   :
  . 

 ![cmdEcritures](../images/configFc16.png)

  .

  ![cmdEcritures](../images/bootboxFc16.png)
 
  

  

  . 
  . 
  . 

   :

  php
  $cmd = cmd::byId(iddevotrecommande);
  )){
      $cmd->setConfiguration('arrayRegisters', [['value' => '10', 'format' => 'intformat16'],['value' => '12', 'format' => 'intformat16']]);
      $cmd->save();
  }
  

  ######  : 

  


   :
   : : ). 
   :

          adresseRegistre|valeur||valeur|

           :
          










  ###### Bit schreiben : In der Befehlskonfiguration benötigen Sie die Reihenfolge von Bytes und Wörtern.

  .

  ".

  Bitte belassen Sie diese Konfiguration als Standard.

  Beim Befehl info "infobitbinary" haben Sie den Binärwert des Parameterregisters beim Befehl Write Bit.
  
   :

  valuetosend&PositionBit&Register :   Ex:  1&4 Wir senden den Wert 1 an Bitposition 4 von rechts in das angegebene Register
  Auf dem Info-Befehl „infobitbinary“ sehen Sie den Wert 10000101, was dem binären Wert des Parameterregisters entspricht.
  Indem Sie 1&6 schreiben, haben Sie jetzt den Wert : 10100101 auf dem konfigurierten Register.





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




# Spezifische Parameter

###### HEX-RÜCKKEHR :
  Um einen Befehl zu haben, der den Wert des Registers in Hexadezimalform zurückgibt (für einen Befehl, der beispielsweise die Fehler eines Geräts meldet), erstellen Sie Ihren Befehl und konfigurieren ihn wie gewohnt,
  und kreuzen Sie Return Hexa an.
    



###### MEHRREGISTERLESEN :
  Durch Aktivieren von „LectureMultiRegistres“ werden automatisch so viele neue Befehle erstellt, wie in „Anzahl der Register“ angegeben, unter Verwendung des Namens des ursprünglichen Befehls und der ID des Befehls in der Iteration. Sie können die Befehle natürlich umbenennen; Beim Lesen des ursprünglichen Befehls enthält sein Wert eine Zeichenfolge der 10 Registerwerte und aktualisiert die 10 entsprechenden Befehle.


###### BETRIEB AUF BESTELLUNG :
  Für eine Operation zur Wertrückgabe : Im Feld „Operation“ der Bestellung können Sie eine mathematische Operation ausfüllen, indem Sie das Tag einfügen #value# um den Wert dieses Befehls anzugeben :
  Beispiel : (#value# / 10 ) * 2
  Die Berechnung wird bei der Rückgabe von Daten von diesem Befehl durchgeführt.
  Nutzen Sie * gut für Multiplikationen


###### Registerbits lesen :
Wenn Sie dies in einem Info-Befehl auswählen, wird ein Info-Befehl erstellt, der die 16 Bits dieses Registers darstellt. Dieser neue Befehl wird erstellt, wenn die Werte zum ersten Mal gemeldet werden, und wird dann bei jedem neuen Bericht aktualisiert.




# XLS-Befehle importieren/exportierenX

Nach der Anlage eines Equipments können Sie eine xlsx-Datei zur Erstellung Ihrer Aufträge importieren
Die Vorlagendatei finden Sie unter „plugins/modbus/data/templateXlsx/exportModbus.xls“
Sie können darauf zugreifen und es über Ihren Jeedom -> Einstellungen -> System -> Dateieditor herunterladen



# MQTT


 :




 :

![renammeTopic](../images/renammeTopic.png)




