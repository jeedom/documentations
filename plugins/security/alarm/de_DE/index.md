# Alarm Plugin

Mit dem Alarm-Plugin verfügt Jeedom über ein echtes Alarmsystem für die Heimautomation, das sehr einfach zu bedienen und zu konfigurieren ist.

## Plugin Konfiguration

Nach dem Herunterladen des Plugins müssen Sie es nur noch aktivieren. Auf dieser Ebene gibt es keine zusätzliche Konfiguration.

## Sofortiges Konzept

Dies ist ein sehr wichtiger Begriff des Alarm-Plugins und es ist sehr wichtig, ihn gut zu verstehen. Zur Vereinfachung ist es so, als hätten Sie zwei Alarme, den ersten : der sofortige Alarm, der die Auslösezeiten nicht berücksichtigt (beachten Sie, dass die Aktivierungszeiten berücksichtigt werden) und ein zweiter Alarm, der die Auslösezeiten berücksichtigt.

**Warum diese unmittelbare Vorstellung ?**

Diese unmittelbare Vorstellung ermöglicht es, sehr spezifische Aktionen auszulösen. Zum Beispiel : Wenn Sie nach Hause gehen und den Alarm nicht deaktiviert haben, kann es sinnvoll sein, vor dem Aktivieren der Sirene eine Nachricht zu senden, die Sie daran erinnert, den Alarm zu deaktivieren. Wenn dies nicht 1 Minute später erfolgt (Verzögerung d '' Aktivierung von 1 Minute), um die Sirene zu aktivieren.

Dieser Begriff findet sich in verschiedenen Arten von Aktionen, jedes Mal, wenn sein Prinzip detailliert beschrieben wird.

## Equipements

Die Konfiguration der Alarmausrüstung ist über das Menü Plugin => Sicherheit zugänglich.

Sobald ein Alarm hinzugefügt wurde, erhalten Sie :

-   **Name der Alarmausrüstung** : Name Ihres Alarms,
-   **Übergeordnetes Objekt** : Gibt das übergeordnete Objekt an, zu dem das Gerät gehört,
-   **Kategorie** : die Kategorie der Ausrüstung (Sicherheit im Allgemeinen für einen Alarm),
-   **Aktivieren** : macht Ihre Ausrüstung aktiv,
-   **Sichtbar** : macht Ihre Ausrüstung auf dem Armaturenbrett sichtbar,
-   **Immer aktiv** : zeigt an, dass der Alarm permanent aktiv ist (z. B. für einen Branderkennungsalarm),
-   **Sichtbare Waffen** : Ermöglicht es, den Alarmaktivierungsbefehl im Widget sichtbar zu machen oder nicht,
-   **Sofort sichtbarer Status** : Mit dieser Option können Sie den sofortigen Status des Alarms sichtbar machen (Erläuterungen siehe unten)),
-   **Alarmstatus und -status protokollieren** : Ermöglicht das Protokollieren oder Nicht-Protokollieren des Status und des Status des Alarms.
-   **Separate Zonen** : macht die Zonen in Bezug auf Warnungen unabhängig. Normalerweise ignoriert das Plugin die anderen Zonen, wenn eine Zone in Alarmbereitschaft ist. Durch Trennen der Zonen werden die Aktionen für die anderen Zonen wiederholt, die in Alarmbereitschaft eintreten würden
-   **Automatischer Reset** : Beim Auslösen wird der vollständige Alarm erneut aktiviert, um nachfolgende Auslöser zu verhindern (in normalen Zeiten wird er erst dann wieder aktiviert, wenn ein Szenario / eine menschliche Aktion dazu durchgeführt wurde)
-   **Ergreifen Sie keine sofortigen Maßnahmen, wenn der Sensor keine Verzögerung aufweist** : Weist den Alarm an, keine sofortigen Maßnahmen zu ergreifen, wenn der Sensor keine Auslöseverzögerung hat. Der Alarm führt daher nur die Aktionen aus

> **Spitze**
>
> Für jede Aktion kann der Modus angegeben werden, in dem sie ausgeführt werden soll, oder in allen Modi

## Zones

Hauptteil des Alarms. Hier konfigurieren Sie die verschiedenen Zonen und die Aktionen (sofort und verzögert nach Zone, beachten Sie, dass es auch möglich ist, sie global zu konfigurieren), die im Falle einer Auslösung ausgeführt werden sollen. Ein Bereich kann entweder volumetrisch (zum Beispiel für den Tag) oder perimeter (für die Nacht) oder auch Bereiche des Hauses (Garage, Schlafzimmer, Nebengebäude…) sein.).

Über eine Schaltfläche oben rechts können Sie so viele hinzufügen, wie Sie möchten.

> **Spitze**
>
> Sie können den Namen des Bereichs bearbeiten, indem Sie auf den Namen des Bereichs klicken (gegenüber der Bezeichnung "Bereichsname")").

Ein Bereich besteht aus verschiedenen Elementen : - auslösen, - sofortige Aktion, - Aktion.

## Auslöser

Ein Trigger ist ein binärer Befehl, der bei Einstellung auf 1 den Alarm auslöst. Es ist möglich, den Auslöser umzukehren, so dass es der Zustand 0 des Sensors ist, der den Alarm auslöst, indem "Rückwärts" auf JA gesetzt wird. Nachdem Sie Ihren Auslöser ausgewählt haben, können Sie eine Aktivierungsverzögerung in Minuten festlegen (es ist nicht möglich, unter die Minute abzusinken). Diese Verzögerung ermöglicht es beispielsweise, wenn Sie den Alarm aktivieren, bevor Sie Ihr Zuhause verlassen, den Alarm eine Minute lang nicht auszulösen (die Zeit, um Sie ausgehen zu lassen). In anderen Fällen bleiben einige Bewegungsmelder für eine bestimmte Zeit im ausgelösten Modus (Wert 1), auch wenn keine Erkennung erfolgt, z. B. 4 Minuten. Daher ist es sinnvoll, die Aktivierung dieser Sensoren um 4 oder 5 zu verzögern min, damit der Alarm nicht sofort nach der Aktivierung ausgelöst wird. Dann haben Sie die Auslöseverzögerung, im Gegensatz zu der Aktivierungsverzögerung, die nur einmal auftritt, wenn der Alarm aktiviert wird, wird sie nach jedem Auslöser eines Sensors eingerichtet. Die Kinematik ist wie folgt, wenn der Sensor ausgelöst wird (Türöffnung, Anwesenheitserkennung). Wenn die Aktivierungszeiten abgelaufen sind, löst der Alarm die sofortigen Aktionen aus, wartet jedoch, bis die Auslösezeit abgelaufen ist, bevor er ausgelöst wird die Taten. Schließlich haben Sie die Schaltfläche "Umkehren", mit der Sie den Auslösezustand des Sensors umkehren können (0 statt 1)).

Sie haben auch einen Parameter **Pflegt** Hier können Sie eine Trigger-Haltezeit festlegen, bevor Sie den Alarm auslösen. Wenn Sie beispielsweise einen Rauchmelder haben, der manchmal Fehlalarme auslöst, können Sie eine Verzögerung von 2 Sekunden angeben. Wenn der Alarm ausgelöst wird, wartet Jeedom 2 Sekunden und überprüft, ob der Rauchmelder immer noch in Alarmbereitschaft ist, wenn dies nicht der Fall ist, löst er den Alarm nicht aus.  

Kleines Beispiel zu verstehen : beim ersten Auslöser (*\ [Salon \] \ [Auge \] \ [Präsenz \]*) Ich habe hier eine Aktivierungszeit von 5 Minuten und eine Auslösezeit von 1 Minute. Das heißt, wenn ich den Alarm aktiviere, kann in den ersten 5 Minuten aufgrund dieses Sensors kein Alarm ausgelöst werden. Wenn nach dieser Verzögerung von 5 Minuten eine Bewegung vom Sensor erkannt wird, wartet der Alarm 1 Minute (die Zeit, in der ich den Alarm deaktivieren kann), bevor die Aktionen ausgelöst werden. Wenn ich sofortige Aktionen gehabt hätte, wären diese sofort ausgelöst worden, ohne auf das Ende des Aktivierungszeitraums zu warten. Die nicht sofortigen Aktionen hätten danach (1 Minute nach den sofortigen Aktionen) stattgefunden).

### Sofortige Aktion

Wie oben beschrieben, sind dies Aktionen, die beim Auslösen ausgelöst werden, ohne die Auslöseverzögerung zu berücksichtigen (aber immer noch die Aktivierungsverzögerung zu berücksichtigen). Sie müssen nur den gewünschten Aktionsbefehl auswählen und dann die Ausführungsparameter entsprechend ausfüllen.

> **Notiz**
>
> Wenn mehrere Zonen nacheinander ausgelöst werden, werden nur die unmittelbaren Aktionen der ausgelösten 1. Zone ausgeführt.

## Modes

Die Modi sind recht einfach zu konfigurieren, Sie müssen nur die aktiven Zonen entsprechend dem Modus angeben.

> **Spitze**
>
> Sie können den Modus umbenennen, indem Sie auf seinen Namen klicken (gegenüber der Bezeichnung "Modusname")"). Achtung beim Umbenennen eines Modus ist es unbedingt erforderlich, die Szenarien / Geräte zu überprüfen, die den alten Namen verwenden, um sie an den neuen weiterzugeben

> **Notiz**
>
> Wenn Sie einen Modus umbenennen, müssen Sie auf das Alarm-Widget des betreffenden Modus klicken, um eine vollständige Überlegung zu erhalten (andernfalls bleibt Jeedom im alten Modus)

> **Wichtig**
>
> Es ist unbedingt erforderlich, mindestens einen Modus zu erstellen und ihm Zonen zuzuweisen, da sonst Ihr Alarm nicht funktioniert.

## Aktivierung OK

Dieser Teil definiert die Aktionen, die nach einer Aktivierung des Alarms ausgeführt werden sollen. Auch hier finden Sie den unmittelbaren Begriff, der die Aktionen darstellt, die unmittelbar nach dem Aktivieren des Alarms ausgeführt werden sollen, und anschließend die Aktivierungsaktionen, die nach den Auslösezeiten ausgeführt werden.

Im Beispiel schalte ich hier zum Beispiel eine rote Lampe ein, um zu signalisieren, dass die Scharfschaltung berücksichtigt wurde, und schalte sie aus, sobald die Scharfschaltung abgeschlossen ist (da normalerweise niemand in der Scharfschaltung ist Umfang des Alarms, sonst wird er ausgelöst).

> **Wichtig**
>
> Aktivierungsaktionen OK berücksichtigen die Aktivierungszeiten nicht. Wenn die Aktivierung eines Öffnungssensors verzögert ist, werden die Aktivierungsaktionen ausgeführt, auch wenn Ihre Tür geöffnet ist.

## KO-Aktivierung

Diese Aktionen werden ausgeführt, wenn ein Sensor nach der Aktivierung des Alarms ausgelöst wird oder nach der Aktivierungsverzögerung eines Sensors, wenn dieser in Alarmbereitschaft ist

Hier können Sie auch Aktionen hinzufügen, wenn Sie die Überwachung eines Sensors fortsetzen

## Veröffentlichung

Hier können Sie die globalen Aktionen konfigurieren, die ausgeführt werden sollen, wenn ein Alarm ausgelöst wird. Sie müssen keine weiteren hinzufügen, wenn Sie bestimmte Aktionen nach Zone konfiguriert haben.

## Deaktivierung OK

Diese Aktionen werden ausgeführt, wenn der Alarm deaktiviert und nicht ausgelöst wird. Beispiel: Wenn Sie nach Hause gehen und die Tür öffnen, wird der Alarm ausgelöst. Sie haben jedoch eine Auslöseverzögerung am Sensor eingestellt und den Alarm vor dem Ende der Verzögerung unterbrochen. Die Deaktivierungsaktionen OK werden ausgeführt. Wenn Sie andererseits den Alarm nach dem Ende der Auslöseverzögerung gestoppt hätten, wäre dies nicht der Fall gewesen.

## Zurücksetzen

In diesem Teil können Sie die Aktionen definieren, die ausgeführt werden sollen, wenn der Alarm ausgelöst und dann deaktiviert wird. Auch hier gibt es sofortige und zurückgestellte Maßnahmen. Hier ist ein Beispiel : Wenn Sie nach Hause gehen, sind die Aktivierungszeiten abgelaufen, aber das Öffnen der Tür löst den Alarm aus. Wenn Sie es deaktivieren (vor den Auslösezeiten), werden sofortige Rücksetzaktionen ausgeführt, jedoch keine normalen Rücksetzaktionen. Wenn Sie es nach den Auslösezeiten deaktivieren, werden die sofortigen und normalen Rücksetzaktionen ausgeführt.

## FAQ

>**Was sind die möglichen Tags ?**
>
> Mögliche Tags sind :
>
> - #mode# : Name des aktuellen Modus
> - #alarm_trigger# : Name des Befehls, der die Warnung ausgelöst hat
> - #zone# : Name des Bereichs des Befehls, der die Warnung ausgelöst hat

>**So setzen Sie einen permanenten Alarm zurück ?**
>
>Klicken Sie einfach auf einen der Alarmmodi (auch den aktiven)).

>**Können wir die Verzögerungen in Sekunden setzen? ?**
>
>Es ist möglich für die "Trigger Delay" (Sie müssen Dezimalzahlen eingeben, z : 0.5 für 30 Sekunden), jedoch nicht für die "Aktivierungsverzögerung" (verwenden Sie für diesen Parameter keine Dezimalstellen).

>**Ich verstehe nicht, dass mein Alarm nichts bewirkt**
>
>Überprüfen Sie, ob der Alarm aktiv ist
