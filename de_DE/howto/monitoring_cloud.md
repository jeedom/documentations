# Cloud-Überwachung

## Description

Die Cloud-Überwachung ist ein kostenpflichtiger SAS-Dienst von Jeedom, der Ihr(e) Jeedom(s) ständig überwacht und Sie vor Problemen warnt.

Abhängig von der Anzahl der in Anspruch genommenen Monate stehen Ihnen Freimonate zu : 

- 12 Monate : 1 Monat kostenlos
- 24 Monate : 4 Monate kostenlos
- 36 Monate : 8 Monate kostenlos

## Was überwacht wird

Jeedom sendet regelmäßig Informationen von der Gesundheitsseite an unseren Überwachungsdienst, der sie analysiert und Sie im Falle eines Problems warnt. Wenn Ihre Box länger als 15 Minuten keine Informationen sendet, warnt Sie unser Überwachungsdienst darüber hinaus, dass ein Problem vorliegt.

## Wie werde ich benachrichtigt

Standardmäßig werden Sie per E-Mail an Ihre in Ihren Profilen konfigurierte E-Mail benachrichtigt, aber Sie können in der Cloud-Überwachungskonfiguration (auf Ihrer Marktprofilseite) : 

- Geben Sie eine andere E-Mail-Adresse ein (nur eine möglich)
- Füge eine Benachrichtigung zu Telegram hinzu
- Fügen Sie eine Benachrichtigung zu Slack hinzu (Sie müssen nur die Webhook-Adresse angeben)
- Fügen Sie eine SMS-Benachrichtigung hinzu (beachten Sie, dass Sie dafür SMS-Guthaben auf dem Markt haben müssen)
- Fügen Sie eine Benachrichtigung per Benachrichtigung hinzu (erfordert die mobile App) 

> **Telegramm**
>
> Sie finden Ihre Chatid von jeedom, indem Sie auf die Telegrammausrüstung gehen, dann die erweiterte Konfiguration der Bestellung des gewünschten Empfängers, dann die Informationsschaltfläche und dort im Konfigurationsfeld die Chatid haben

> **WICHTIG**
>
> Seien Sie vorsichtig, wir sehen viele Benutzer mit "mailinblack"-Postfächern, die während des ersten Austauschs den Absender bitten, einen Link zu validieren, um zu beweisen, dass es sich tatsächlich um einen Menschen handelt. Dieses System ist nicht mit dem E-Mail-Versandsystem des Überwachungsdienstes kompatibel. Vielen Dank also, dass Sie auf Ihrer Marktprofilseite eine E-Mail-Adresse angeben, die dieses System nicht verwendet, ohne die Sie niemals eine Benachrichtigung vom System erhalten.

## So aktivieren Sie es

Das Verfahren ist ganz einfach, man muss : 

- Haben Sie Cloud-Überwachungsguthaben (es wird in Paketen von 1 Monat gekauft, Sie können also 2 Monate dauern, dann 6 Monate aufhören und danach fortfahren)
- Jeedom haben 3.3.Mindestens 44

Nachdem Sie Cloud-Überwachungsguthaben hinzugefügt haben, müssen Sie entweder ein paar Stunden warten (etwa 24 Stunden) oder in Jeedom im Konfigurationsteil dann aktualisieren und auf die Schaltfläche „Test“ klicken, um eine Verbindung zum Markt herzustellen (dies zwingt Jeedom, den Markt zu erholen Informationen und damit die Tatsache, dass der Cloud-Überwachungsdienst aktiv ist).

>**WICHTIG**
>
> Sobald der Dienst aktiviert ist, überwacht er alle mit Ihrem Konto verbundenen Jeedom. Es ist jedoch ab Jeedom 4 möglich.2, um die Überwachung aus seiner Konfiguration zu deaktivieren (Register Markt/Aktualisierung))

>**WICHTIG**
>
> Rufen Sie für Benachrichtigungen einfach den Arn Ihres Mobiltelefons ab, er befindet sich im mobilen Plugin auf Ihrem Mobilgerät, greifen Sie dann auf die Registerkarte „Benachrichtigung“ zu und kopieren Sie die Zeile „ARN“. Seien Sie vorsichtig, Sie müssen nur das nehmen, was danach kommt "arn:aws:sns:eu-west-1:507915066327:endpoint/"

## Es ist mit allem kompatibel ?

- Smart (getestet)
- Debian x64 Stretch (getestet)
- Debian x64 Jessie
- RPI
