# Cloud-Überwachung

## Beschreibung

Cloud Monitoring ist ein kostenpflichtiger Jeedom SAS-Dienst, der Ihre Jeedoms oder Jeedoms permanent überwacht und Sie bei Problemen warnt.

Abhängig von der Anzahl der Monate haben Sie das Recht, Monate freizugeben : 

- 12 Monate : 1 Monat frei
- 24 Monate : 4 Monate frei
- 36 Monate : 8 Monate frei

## Was wird überwacht?

Die Liste der überwachten Elemente wird so entwickelt, dass versucht wird, in den grundlegenden Steuerelementen, die Sie haben, so reaktiv / proaktiv wie möglich zu sein : 

- System verfügbar
- Webserver (apache2) gestartet
- Datenbank (MySQL) gestartet
- CPU-Auslastung
- Speicherlast
- SWAP laden
- Disc-Ein- / Ausgabe
- Freier Speicherplatz

Sie werden auch gewarnt, wenn Ihr Jeedom neu startet.

# Chronik

Auf dem Markt von Ihrer Profilseite aus haben Sie dann durch Klicken auf Informationen in der Registerkarte Meine Service-Teil-Service-Überwachung alle aktuellen Daten, die auf Ihrem Jeedom bekannt sind, und Sie können durch Klicken auf die Grafik den Verlauf der letzten 24 Stunden anzeigen (wir Bewahren Sie nicht mehr Daten als in den letzten 24 Stunden auf.

## Wie werde ich gewarnt?

Standardmäßig werden Sie durch eine E-Mail in Ihrer E-Mail benachrichtigt, die in Ihren Profilen konfiguriert ist. Sie können dies jedoch in der Konfiguration der Cloud-Überwachung (auf Ihrer Marktprofilseite) tun. : 

- Geben Sie eine andere E-Mail-Adresse ein (nur eine möglich)
- Fügen Sie eine Warnung zum Telegm hinzu
- Fügen Sie eine Warnung zu Slack hinzu (geben Sie einfach die Adresse von Webhook an)
- Fügen Sie eine SMS-Benachrichtigung hinzu (beachten Sie, dass hierfür ein SMS-Guthaben auf dem Markt erforderlich ist).
- Hinzufügen einer Benachrichtigung per Benachrichtigung (erfordert die mobile App) 

> **Teleg**
>
> Sie können Ihre Chat-ID von jeedom aus finden, indem Sie zur Telegmausrüstung gehen, die erweiterte Konfiguration des Befehls des gewünschten Empfängers und dann die Informationstaste ausführen und im Konfigurationsfeld die Chat-ID haben

## Wie man es aktiviert

Das Verfahren ist recht einfach, das muss man : 

- Haben Sie ein Guthaben für die Cloud-Überwachung (Sie können es in einem 1-Monats-Stapel kaufen, also können Sie 2 Monate dauern, dann 6 Monate anhalten und danach fortfahren)
- habe Freiheit 3.2.9 min

Nachdem Sie das Guthaben für die Cloud-Überwachung hinzugefügt haben, müssen Sie entweder einige Stunden (ca. 24 Stunden) oder in Jeedom im Konfigurationsbereich warten und dann auf die Schaltfläche "Test" klicken, um eine Verbindung zum Markt herzustellen (dies zwingt Jeedom zur Wiederherstellung Marktinformationen und damit die Tatsache, dass der Cloud-Überwachungsdienst aktiv ist).

Dann können Sie im Gesundheitsbereich von Jeedom sehen, ob es aktiv ist. Nach der Synchronisierung mit dem Markt dauert der Start ungefähr 10 Minuten (klicken Sie auf die Schaltfläche Test)..

>**Wichtig**
>
>Während der ersten Aktivierung oder Reaktivierung erhalten Sie möglicherweise eine E-Mail / ein Telegm / eine Slack / SMS, in der Sie darüber informiert werden, dass Ihr Jeedom nicht verfügbar ist. Es ist normal, dass das betreffende Jeedom die Überwachungsdienste aktiviert..

>**Wichtig**
>
> Sobald der Dienst aktiviert ist, überwacht er alle mit Ihrem Konto verbundenen Jeedom

>**Wichtig**
>
> Für Benachrichtigungen sammeln Sie einfach den Arn von Ihrem Handy. Er befindet sich im mobilen Plugin auf Ihrem Mobilgerät. Rufen Sie dann die Registerkarte "Benachrichtigung" auf und kopieren Sie die Zeile "ARN". dass es nach "arn::::507915066327:Endpunkt /"

## Es ist mit allem kompatibel ?

- Smart (getestet)
- Debian x64 Stretch (getestet)
- 
- 

# Faq

>**Ich erhalte alle 10 Minuten eine Nachricht, dass Jeedom neu gestartet wurde, wenn dies nicht der Fall ist**
>
>Dies geschieht, wenn Sie mehrere Jeedom-Boxen haben, darunter 2 (oder mehr) mit demselben Installationsschlüssel (Seite Einstellungen -> System -> Konfiguration).. In diesem Fall sieht der Markt nur eine Box, das Überwachungssystem auch, außer dass sich einmal in 2 die Zeit seit dem Start der Maschinen ändert (eine Trefferbox 1, eine Trefferbox 2), daher die Warnungen. Um dies zu korrigieren, reicht es in einem der Jeedoms auf der Seite aus, auf der sich der Installationsschlüssel befindet, um "Zurücksetzen" auszuführen"
