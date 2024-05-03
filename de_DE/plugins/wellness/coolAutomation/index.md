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


