# Rfplayer 2 Plugin

Plugin zur Verwendung des RFPLAYER 1000. Dieses Plugin wird eventuell das erste Plugin ersetzen. Es wird allen Besitzern des ersten Plugins zur Verfügung gestellt.

Dadurch kann jeder ruhig migrieren. Da sich die Philosophie des Plugins geändert hat und auch die IDs, müssen Sie Ihre Geräte in dieses neue Plugin aufnehmen.

# Konfiguration des RFPlayer-Plugins 

Nach der Installation des Plugins müssen Sie es nur noch aktivieren :

**Konfiguration**

Um das Plugin zu konfigurieren, müssen Sie nur automatisch oder den RFPlayer auswählen.

# Fügen Sie ein Modul hinzu 

Der RFPlayer ist mit vielen Modulen kompatibel. Das RFPlayer2-Plugin ändert seine Philosophie vollständig.
Es ist generell eine faire Kompatibilität mit dem RFplayer selbst zu gewährleisten.

Um ein Modul einzuschließen, klicken Sie einfach auf Einschluss und folgen Sie den Anweisungen Schritt für Schritt. Dieser wird Sie bitten zu wählen
Das Protokoll, dann der Typ (Aktor / Sender) im Fall eines Senders, den die Konfiguration erstellt hat, enthält alle vom RF-Player übertragenen Rohdaten (einige können für Ihre Verwendung unbrauchbar sein, Sie können sie ausblenden). Der Vorteil dieser Methode besteht darin, dass sie auf den Rfplayer abgestimmt ist (einige Geräte geben die Informationen an einer Stelle, andere an einer anderen) und dass während des Einschlusses das einzuschließende Protokoll fein gefiltert werden kann.

Sie müssen sich keine Gedanken über die Aufnahme von Oregon-Sonden machen, wenn Sie einen X2D-Sensor einbauen möchten.
 
Das gleiche Prinzip gilt für Aktuatoren. Sie müssen auch den Aktuatortyp gemäß dem Protokoll auswählen. Sobald dies erledigt ist, wird die Ausrüstung in Jeedom erstellt. Und Sie müssen eine Protokoll-ID eingeben, die mit dem Protokoll übereinstimmt (normalerweise wird dieses Feld intelligent vorab ausgefüllt), dann zum Bedienfeld gehen und im Zuordnungsbefehl auf "Test" klicken.
Natürlich ist es im Voraus erforderlich, dass Sie das Modul gemäß der Dokumentation des Herstellers des Moduls zum Lernen gebracht haben.
 
Einige Besonderheiten :

**Oregon**

Durch Ändern der Batterien wird die Produkt-ID geändert. Wenn Sie die Batterien wechseln, müssen Sie daher ein neues Modul hinzufügen und dann vor "Batteriewechsel" auf "ID wiederherstellen" klicken". Diese Aktion muss für das neue Modul ausgeführt werden und der Name des entsprechenden Moduls ausgewählt werden (der alte Name des Moduls, dessen Batterien gerade ausgetauscht wurden).

**Papagei**

Für den Papageienmodus werden Geräte erstellt. Dieser hat eine Schaltfläche, mit der der Rfplayer trainiert werden kann, und erstellt den zugehörigen Befehl. Es gibt einen Statusbefehl, mit dem Sie den Rfplayer auffordern können, sich beim Log-Debug anzumelden. Alle gelernten Papageienbefehle.

Sie werden im Changelog über das Plugin informiert, wenn es aktualisiert wird.
