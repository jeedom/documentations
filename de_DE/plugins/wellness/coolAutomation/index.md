# CoolAutomation-Plugin




# Automatische Erkennung von CoolAutomation-Geräten


Klicken Sie einfach auf Netzwerk-Scan, um mit der Erkennung von Geräten in Ihrem Netzwerk zu beginnen


![scanNetwok](./images/scanNetwork.png)


Sobald sie gefunden wurden, werden die entsprechenden Eqlogics erstellt




# Detailausrüstung


Die Ausrüstungsseite fasst die Informationen zusammen, die für die Erstellung der davon abhängigen Ausrüstungen erforderlich sind

** Alle Informationen auf dieser Seite werden aktualisiert, wenn Sie auf dieser Seite ankommen.


![eqlogicMain](./images/eqlogicMain.png)

Auf der rechten Seite finden Sie die Geräteparameter : Firmware-Version, maximale Anzahl an Leitungen auf dem Gerät, maximale Anzahl an Einheiten usw.
Diese Daten dienen nur zu Informationszwecken und können nicht geändert werden



Auf der linken Seite finden wir die IP-Adresse des Geräts sowie seine Seriennummer : Diese beiden Informationen sind sehr wichtig, da sie zum Senden von Anfragen an die API des Geräts verwendet werden. 


Unterhalb dieser Informationen finden wir den Status des REST-Servers : Hierbei handelt es sich um den Webserver des Geräts, über den mit dem Plugin kommuniziert wird. Sie müssen es daher aktivieren, sofern es noch nicht aktiviert ist. 
Die Aktivierung erfolgt über das Plugin, indem Sie einfach auf den entsprechenden Button klicken

![activateRestServer](./images/activateRestServer.png)

> ATTENTION

> Dadurch wird das Gerät neu gestartet


Schließlich finden Sie im Abschnitt „Aktives Leitungsmanagement“ die Einheiten, die mit der Ausrüstung verbunden sind und zur Erstellung verfügbar sind.



# Ausrüstungsbild ändern

Wenn Sie zur Cool Automation-Ausrüstung gehen, können Sie das entsprechende Bild auswählen und dann speichern

![chooseImg](./images/chooseImg.png)


# Erstellung von Einheiten und ihrer Hauptausrüstung

Um die Geräte zu erstellen, die die angeschlossenen Einheiten steuern, markieren Sie diese einfach im Abschnitt „Active Line Management“ und speichern Sie sie

![checkboxLines](./images/checkboxLines.png)

Dadurch werden die entsprechenden Eqlogics sowie Master-Geräte erstellt, sodass Sie eine gesamte Linie steuern können.

> ATTENTION

> Wenn Sie eine bereits erstellte Einheit deaktivieren und speichern, wird die Ausrüstung gelöscht. 
> Wenn alle Kästchen einer Linie deaktiviert sind, wird auch das Master-Equipment der Linie gelöscht


# Übersicht über die Ausrüstung und ihre Einheiten

![linesCreated](./images/linesCreated.png)


![detailsChilds](./images/detailsChilds.png)





# Einem Objekt Einheiten zuweisen


Möglicherweise wurden Dutzende Einheiten erstellt, und es ist mühsam, zu jeder einzelnen gehen zu müssen, um ihnen ein übergeordnetes Objekt zuzuweisen. 

![attribuateObjects](./images/attribuateObjects.png)

Um dies zu erleichtern, wurde ein System bereitgestellt : Sie müssen lediglich die Einheiten in einer Zeile markieren und dann auf „Auswahl einem Objekt zuweisen“ klicken, um das übergeordnete Objekt auszuwählen, an das die Einheiten angehängt werden sollen
Sie können sogar alle Einheiten über die Checkbox neben der Schaltfläche auswählen



# Datenaktualisierung 


Abhängig von der Konfiguration des Plugins werden die Daten aller Geräte in dieser Häufigkeit aktualisiert

Es gibt zwei weitere Methoden, um die Daten gezielter zu aktualisieren, ohne eine globale Anfrage für alle Geräte zu stellen :

- indem Sie auf das Aktualisierungssymbol eines Line Master-Geräts klicken : Die Daten der verbundenen Einheiten werden wiederhergestellt
- indem Sie auf das Symbol „Aktualisieren“ einer untergeordneten Ausrüstung des Masters klicken : Nur die Daten dieses Geräts werden wiederhergestellt


# Verwaltung von Einheiten und Meistern


Jede Einheit kann einzeln gesteuert werden

Um alle Einheiten einer Linie zu steuern, können Sie die Befehle des zugehörigen Masters verwenden. 

> Bei den Anweisungen sind diese einem Modus zugeordnet: Heiß oder kalt
> Eine Änderung des Sollwerts an einem Master ändert den Sollwert der abhängigen Einheiten, aber auch den zugehörigen Modus : Heiß oder kalt
> Denken Sie also daran, nach der Zuweisung des Gesamtsollwerts in den gewünschten Modus zurückzukehren



# Massenprotokollierung


Sie können bestimmte Befehle auf einer einzelnen Einheit, allen untergeordneten Einheiten von coolMaster/coolLinkHub-Geräten oder allen im Plugin vorhandenen Einheiten protokollieren

Klicken Sie dazu hier :



![linesCreated](./images/modalHistorize.png)



Nun wählen Sie die gewünschte Option aus :


![linesCreated](./images/chooseOptionHistorize.png)


Abhängig von Ihrer Wahl erscheint ein zweiter Selektor, mit dem Sie die entsprechende sekundäre Option auswählen können :


![linesCreated](./images/secondSelect.png)


Sobald Sie Ihre Wahl getroffen haben, müssen Sie nur noch die gewünschten Befehle auswählen und dann auf „Protokollieren“ klicken, damit die Befehle der ausgewählten Geräte protokolliert werden
Sie können sie alle über die erste Checkbox auswählen

![linesCreated](./images/selectedCmds.png)