# ModbusServer-Plugin


# Plugin-Setup

Nachdem Sie das Plugin heruntergeladen haben, müssen Sie es wie jedes Jeedom-Plugin zuerst aktivieren :

![config](../images/ModbusServerActiv.png)

Dann müssen Sie die Installation der Abhängigkeiten starten (auch wenn sie OK erscheinen) :

![dependances](../images/ModbusServerDep.png)

Starten Sie abschließend den Daemon :

![demon](../images/ModbusServerDemon.png)

Rien n'est à modifier dans le champ « Port socket interne » de la section « Configuration ».

![socket](../images/ModbusServerConfig.png)

Standardmäßig ist der ModbusServer-Port 1048; es ist dieser Port, der auf der Client-Seite eingegeben werden muss, um den Server abzufragen
Sie können diesen Port nach Bedarf ändern

Sie können auch den Cron des Plugins einstellen, der sich um die Aktualisierung der auf dem Server registrierten Bestellungen kümmert. 



# Nutzung des Plugins

Wenn wir zum Plugin gehen, gibt es die jeeModbusServer-Ausrüstung, die erstellt wird; Auf diesem Gerät fügen wir die Jeedom-Befehle hinzu, die wir dem Server hinzufügen möchten

![jeeServer](../images/ModbusServerEqLogicServer.png)


Wenn Sie das Gerät betreten, können Sie die Schaltfläche Befehlszuordnung sehen, mit der die hinzugefügten Befehle in Register „umgewandelt“ werden, die von einem Modbus-Client gelesen werden können


Zuerst gehen wir zur Registerkarte Befehle, um Befehle von unserem Jeedom hinzuzufügen

![addCmdInfo](../images/ModbusServerAddCmdInfo.png)


Wir fügen zum Beispiel einen Info-Befehl hinzu :

Wir benennen den Befehl und suchen auf unserem Jeedom über die Objekte nach dem Befehl, den wir dem jeeModbusServer hinzufügen möchten. 

![cmdAdded](../images/ModbusServerCmdAdded.png)


Sobald Sie fertig sind, können Sie die Ausrüstung speichern.



Von dort aus können wir den Befehl einem „Modbus“-Befehl zuordnen'.

Wir gehen zurück zur Registerkarte Ausrüstung und können auf Auftragszuordnung klicken :
![btnServer](../images/ModbusServerBtnMapping.png)

Wenn Sie auf Order Mapping klicken und keine Order zum Server hinzugefügt wurde, sehen Sie diese Fehlermeldung :
![noCmd](../images/ModbusServerNoCmd.png)


Wenn Befehle vorhanden sind, erhalten wir eine Schnittstelle wie diese:
![cmdMapped](../images/ModbusServerCmdMapped.png)

Sie können das Jeedom-Objekt, in dem sich die Bestellung befindet, seine Ausrüstung sowie seinen aktuellen Wert finden. 

Die Auswahlmenüs werden verwendet, um das Modbus-Register zu konfigurieren : 

- Der Eingangstyp, um den Typ des Modbus-Registers auszuwählen (Halten, Coil)
- Registrierung starten : Startregister dieses Modbus-Befehls
- Anzahl Bytes : Bei Modbus kann ein Register auf mehrere Bytes geschrieben werden (ein Register entspricht 16 Bit, also 1 Byte).
- Datei Format : der Typ des Werts (Integer(Integer), Float(Dezimal) oder Bit(0 oder 1)))
- ByteOrder und WordOrder : Im Allgemeinen sind diese Einstellungen in Big auf den Modbus-SPSen. Optional können Sie den Wert Little angeben


Nachdem die Befehle konfiguriert wurden, können Sie auf Validieren klicken. 

Die Befehle werden auf dem ServerModbus injiziert und sind daher über einen ClientModbus auf dem in der Konfiguration ausgewählten Port zugänglich


Beim Konfigurieren und Hinzufügen eines Befehls zum Modbus-Server über das Modal wird ein Jeedom-Listener im Plugin erstellt, um Änderungen im Status des ursprünglichen Befehls zu überwachen und so den Alias-Befehl auf dem jeeModbusServer zu aktualisieren




