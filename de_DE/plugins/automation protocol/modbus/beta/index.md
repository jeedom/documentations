## Plugin Modbus

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


Sur la page d'un équipement, sur la droite, vous avez boutons :

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






   #### ECRITURE MULTI REGISTRES:

  ###### Ecriture FC16 : registres suivis
        
  En Modbus, la fonction FC16 sert à écrire sur plusieurs registres consécutifs, pour cela :
  En créant une commande puis en choisissant Fc16, la commande sera parametrée en action/defaut et un bouton Configuer Fc16 apparaitra. 

 ![cmdEcritures](../images/configFc16.png)

  Il suffit de cliquer dessus, et on entre ici la valeur à attribuée à chaque registre ainsi que le format de la donnée.

  ![cmdEcritures](../images/bootboxFc16.png)
 
  

  Vous pouvez ajouter ou enlever des valeurs

  Il faut parametrer le registre de départ sur la commande. 
  Et de ce registre de départ que les valeurs seront écrites. 
  Les formats de données entrent en compte également, et si le registre de départ est 10, et que la premiere valeur a envoyée est 15 en int32, alors cela écrira 15 sur le registre 10 et 11. Et l'ecriture suivante si renseignée, sera sur le registre 12 à minima

  Vous pouvez également créer cette commande fc16, et venir changer les valeurs via scenario par exemple, sans repasser par l'UI du plugin :

  ```php
  $cmd = cmd::byId(iddevotrecommande);
  if(is_object($cmd)){
      $cmd->setConfiguration('arrayRegisters', [['value' => '10', 'format' => 'intformat16'],['value' => '12', 'format' => 'intformat16']]);
      $cmd->save();
  }
  ```

  ###### Ecriture FC6 : écriture simple ou registres non-suivis

  En créant une commande puis en choisissant Fc6, sur une commande Action/Curseur, vous n'avez qu'a renseigner le registre, le format de données, et c'est en actionnant ce curseur que la valeur choisie sera envoyée sur le registre


  Pour une écriture multiple, 2 choix possibles :
  En crééant une commmande Action/Défaut, il faut cocher Ecriture Registres non suivis : un bouton Configurer Fc6 apparaitra: vous pouvez cliquez dessus, pour configurer les registres d'ecritures (numero du registre, la valeur à envoyer, et le format). 
  En crééant une commande Action/Message, c'est via le dashboard que l'on entre les valeurs et registres dans le corps du message, avec la syntaxe suivante :

          adresseRegistre|valeur|format;adresseRegistre2|valeur|format;etccc

          Pour le format, vous disposez de :
          int16, int32, uint16, uint32, int64, uint64










  ###### Bit schreiben : In der Befehlskonfiguration benötigen Sie die Reihenfolge von Bytes und Wörtern.

  Une commande Ecriture Bit est incluse sur vos équipements et doit etre utilisée pour venir changer un bit sur un registre.

  Par défaut, le fonctionCode est de fc03, car cette commande sert à donner la valeur du registre parametré en binaire à la commande info "infobitbinary".

  Bitte belassen Sie diese Konfiguration als Standard.

  Beim Befehl info "infobitbinary" haben Sie den Binärwert des Parameterregisters beim Befehl Write Bit.
  
  Pour changer le bit sur le registre , on utilise sur le corps du message de la commande Ecriture Bit :

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
  Au changement de valeur, la commande passera en sous type String,et prendra le retour hexa  



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

Dans la configuration du plugin, vous pouvez cocher Utilisation de MQTT
Si le plugin officiel MQTT est installé et configuré, alors au demarrage du demon de Modbus, un topic sera créé sur le broker, et à la mise à jour des valeurs via le cron, les informations des registres seront également publiés sur le broker via le topic suivant :

jeeModbusMQTT/nomDeL'equipement/dataCmds


Sur la page d'un équipement, vous pouvez changer le topic par défaut (nom de l'équipement), par ce que vous désirez :

![renammeTopic](../images/renammeTopic.png)




