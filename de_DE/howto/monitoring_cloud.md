# Cloud-Überwachung

## Description

Cloud Monitoring ist ein kostenpflichtiger Jeedom SAS-Dienst, der Ihre Jeedoms oder Jeedoms permanent überwacht und Sie bei Problemen warnt.

Abhängig von der Anzahl der Monate haben Sie das Recht, Monate freizugeben : 

- 12 Monate : 1 Monat frei
- 24 Monate : 4 Monate frei
- 36 Monate : 8 Monate frei

## Was wird überwacht?

Jeedom sendet die Informationen auf der Gesundheitsseite regelmäßig an unseren Überwachungsdienst, der sie analysiert und Sie benachrichtigt, wenn Sie Bedenken haben. Wenn Ihre Box länger als 15 Minuten keine Informationen sendet, warnt Sie unser Überwachungsdienst vor einem Problem.

## Wie werde ich gewarnt?

Standardmäßig werden Sie durch eine E-Mail in Ihrer E-Mail benachrichtigt, die in Ihren Profilen konfiguriert ist. Sie können dies jedoch in der Konfiguration der Cloud-Überwachung (auf Ihrer Marktprofilseite) tun : 

- Geben Sie eine andere E-Mail-Adresse ein (nur eine möglich)
- Fügen Sie eine Warnung zum Telegramm hinzu
- Fügen Sie eine Warnung zu Slack hinzu (geben Sie einfach die Adresse von Webhook an)
- Fügen Sie eine SMS-Benachrichtigung hinzu (beachten Sie, dass hierfür ein SMS-Guthaben auf dem Markt erforderlich ist)
- Hinzufügen einer Benachrichtigung per Benachrichtigung (erfordert die mobile App) 

> **Teleg**
>
> Sie können Ihre Chat-ID von jeedom aus finden, indem Sie zur Telegrammausrüstung gehen, die erweiterte Konfiguration des Befehls des gewünschten Empfängers und dann die Informationstaste ausführen und im Konfigurationsfeld die Chat-ID haben

## Wie man es aktiviert

Das Verfahren ist recht einfach, das muss man : 

- Haben Sie ein Guthaben für die Cloud-Überwachung (Sie können es in einem 1-Monats-Stapel kaufen, also können Sie 2 Monate dauern, dann 6 Monate anhalten und danach fortfahren)
- habe Freiheit 3.3.44 min

Nachdem Sie das Guthaben für die Cloud-Überwachung hinzugefügt haben, müssen Sie entweder einige Stunden (ca. 24 Stunden) oder in Jeedom im Konfigurationsbereich warten und dann auf die Schaltfläche "Test" klicken, um eine Verbindung zum Markt herzustellen (dies zwingt Jeedom zur Wiederherstellung Marktinformationen und damit die Tatsache, dass der Cloud-Überwachungsdienst aktiv ist).

>**Wichtig**
>
> Sobald der Dienst aktiviert ist, überwacht er alle mit Ihrem Konto verbundenen Jeedom

>**Wichtig**
>
> Für Benachrichtigungen sammeln Sie einfach den Arn von Ihrem Handy. Er befindet sich im mobilen Plugin auf Ihrem Mobilgerät. Rufen Sie dann die Registerkarte "Benachrichtigung" auf und kopieren Sie die Zeile "ARN". dass es nach "arn:aws:sns:eu-west-1:507915066327:endpoint/"

## Es ist mit allem kompatibel ?

- Smart (getestet)
- Debian x64 Stretch (getestet)
- Debian x64 Jessie
- RPI
