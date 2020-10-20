# Philips Hue Plugin

Plugin zur Integration in das Philips Hue-Ökosystem (kann bis zu 2 Bridges gleichzeitig verwalten).

# Plugin Konfiguration

Nach dem Herunterladen des Plugins müssen Sie die IP-Adresse Ihrer Farbtonbrücke (n) eingeben.

# Gerätekonfiguration

> **Notiz**
>
> Sie haben immer "Alle Lampen" Geräte, die tatsächlich der Gruppe 0 entsprechen, die ständig existiert

Hier finden Sie die gesamte Konfiguration Ihrer Geräte :

-   **Name der Farbtonausrüstung** : Name Ihrer Hue-Ausrüstung,
-   **Übergeordnetes Objekt** : Gibt das übergeordnete Objekt an, zu dem das Gerät gehört,
-   **Kategorie** : Gerätekategorien (es kann zu mehreren Kategorien gehören),
-   **Aktivieren** : macht Ihre Ausrüstung aktiv,
-   **Sichtbar** : macht Ihre Ausrüstung auf dem Armaturenbrett sichtbar,
-   **Brücke** : zeigt die Brücke an, an die die Lampe angeschlossen ist
-   **Immer an** : Sagen Sie jeedom, dass die Lampe niemals als nicht erreichbar markiert werden soll

Nachfolgend finden Sie die Liste der Bestellungen :

-   **Name** : Der im Dashboard angezeigte Name,
-   **Erweiterte Konfiguration** : Zeigt das erweiterte Konfigurationsfenster des Befehls an,
-   **Optionen** : Mit dieser Option können Sie bestimmte Befehle anzeigen oder ausblenden und / oder protokollieren
-   **Test** : Wird zum Testen des Befehls verwendet

# Gruppe 0 (Alle Lampen)

Gruppe 0 ist etwas Besonderes, da sie nicht gelöscht oder geändert werden kann, notwendigerweise alle Lampen antreibt und auch die Szenen trägt.

In der Tat können Sie "Szenen" auf Philips Hue machen. Diese müssen unbedingt über die mobile Anwendung erfolgen (in Jeedom ist dies nicht möglich)). Und nach dem Hinzufügen einer Szene müssen Sie Jeedom unbedingt mit der richtigen synchronisieren (indem Sie einfach die Konfiguration des Plugins speichern)

# Tansition

Befehl ein wenig speziell, der in einem Szenario verwendet werden muss, macht es möglich zu sagen, dass der Übergang zwischen dem aktuellen Status und dem nächsten Befehl X Sekunden dauern muss.

Zum Beispiel möchten Sie am Morgen den Sonnenaufgang in 3 Minuten simulieren. In Ihrem Szenario müssen Sie daher nur den Übergangsbefehl und im Parametersatz 180 aufrufen und dann den Farbbefehl in Richtung der gewünschten Farbe aufrufen.

# Animation

Die Animationen sind Übergangssequenzen, derzeit gibt es :

-   Sonnenaufgang : einen Sonnenaufgang simulieren. Es kann als Parameter verwendet werden :
    -   Dauer : Um die Dauer zu definieren, müssen Sie standardmäßig 720s, z. B. für 5 Minuten, eingeben : duration=300
-   Sonnenuntergang : einen Sonnenuntergang simulieren. Es kann als Parameter verwendet werden :
    -   Dauer : Um die Dauer zu definieren, müssen Sie standardmäßig 720s, z. B. für 5 Minuten, eingeben : duration=300

# Fernbedienungstaste

Hier ist die Liste der Codes für die Schaltflächen :

- 1002 für die Ein-Taste
- 2002 für den Erhöhungsknopf
- 3002 für die Minimierungstaste
- 4002 für die Aus-Taste

Das gleiche gilt für XXX0 für die gedrückte Taste, XXX1 für die gehaltene Taste und XXX2 für die freigegebene Taste.

Hier sind zum Beispiel die Sequenzen für die Schaltfläche Ein :

- Kurz drücken : Wenn gedrückt, gehen wir zu 1000 und wenn wir loslassen, gehen wir zu 1002
- Lange drücken : Während der Presse geben wir 1000 weiter, während der Presse geben wir 1001 weiter, wenn wir loslassen, geben wir 1002 weiter

# FAQ

> **Ich habe den Eindruck, dass es in bestimmten Farben einen Unterschied zwischen dem, was ich frage, und der Farbe der Glühbirne gibt.**
>
> Es scheint, dass das Farbraster der Glühbirnen einen Versatz hat. Wir suchen nach einer Korrektur

> **Was ist die Bildwiederholfrequenz? ?**
>
> Das System ruft alle 2 Sekunden Informationen ab.

> **Meine Ausrüstung (Lampe / Schalter ....) wird vom Plugin nicht erkannt ?**
>
> Du musst :
> - Schreiben Sie uns die Ausrüstung, die Sie hinzufügen möchten, mit Foto und Möglichkeiten - senden Sie uns das Protokoll-Debug der Synchronisation mit der Bridge, während Sie uns mit einer Support-Anfrage kontaktieren

>**Ich habe die Historisierung eines Auftrags hinzugefügt, aber es funktioniert nicht**
>
>Bei Leistungsproblemen müssen Sie den philips hue-Daemon neu starten, damit diese Änderung berücksichtigt wird.
