# Cloud-Überwachung

## Beschreibung

Das Cloud-Monitoring ist ein kostenpflichtiger Dienst von Jeedom SAS, der Ihr Jeedom-System bzw. Ihre Jeedom-Systeme rund um die Uhr überwacht und Sie bei Problemen benachrichtigt.

Je nach Anzahl der gebuchten Monate haben Sie Anspruch auf Gratis-Monate:

- 12 Monate: 1 Monat gratis
- 24 Monate: 4 Monate gratis
- 36 Monate: 8 Monate gratis

## Was wird überwacht?

Jeedom sendet regelmäßig die Informationen der Statusseite an unseren Überwachungsdienst, der diese analysiert und Sie im Falle von Problemen benachrichtigt. Sollte Ihre Box zudem länger als 60 Minuten keine Informationen senden, benachrichtigt Sie unser Überwachungsdienst, dass ein Problem vorliegt.

## Wie werde ich benachrichtigt?

Standardmäßig erhalten Sie eine Benachrichtigung per E-Mail an die in Ihrem Profil angegebene E-Mail-Adresse. Sie können jedoch in den Einstellungen der Cloud-Überwachung (auf Ihrer Profilseite im Market) Folgendes festlegen:

- Eine andere E-Mail-Adresse eingeben (nur eine möglich)
- Benachrichtigung auf Telegram hinzufügen
- Eine Benachrichtigung auf Slack hinzufügen (man muss nur die Webhook-Adresse angeben)
- SMS-Benachrichtigung hinzufügen (Achtung: Dazu benötigen Sie ein SMS-Guthaben im Market)
- Benachrichtigung hinzufügen (erfordert die mobile App)

> **Telegram**
>
> Sie können Ihre Chat-ID in Jeedom finden, indem Sie zu den Telegram-Geräten gehen, dann die erweiterten Einstellungen für den gewünschten Empfänger aufrufen, auf die Schaltfläche „Informationen“ klicken und dort im Feld „Konfiguration“ die Chat-ID finden.

> **WICHTIG**
>
> Achtung: Es gibt viele Nutzer mit E-Mail-Adressen im Format „mailinblack“, bei denen der Absender beim ersten E-Mail-Austausch aufgefordert wird, einen Link zu bestätigen, um nachzuweisen, dass es sich tatsächlich um einen Menschen handelt. Dieses System ist nicht mit dem E-Mail-Versandsystem des Monitoring-Dienstes kompatibel. Bitte geben Sie daher auf Ihrer Profilseite im Marktplatz eine E-Mail-Adresse an, die dieses System nicht nutzt. Andernfalls erhalten Sie niemals Benachrichtigungen vom System.

## So aktivieren Sie die Funktion

Die Vorgehensweise ist recht einfach. Man muss:

- Cloud-Monitoring-Guthaben haben (es wird in 1-Monats-Paketen erworben, Sie können also 2 Monate buchen, dann 6 Monate pausieren und danach wieder weitermachen)
- Jeedom 3.3.44 oder höher erforderlich

Nachdem Sie das Cloud-Monitoring-Guthaben hinzugefügt haben, müssen Sie entweder einige Stunden (ca. 24 Stunden) warten oder in Jeedom im Bereich „Konfiguration“ unter „Aktualisierung“ auf die Schaltfläche „Test“ klicken, um die Verbindung zum Market herzustellen (dadurch wird Jeedom dazu veranlasst, die Informationen aus dem Market abzurufen und somit festzustellen, dass der Cloud-Monitoring-Dienst aktiv ist).

>**WICHTIG**
>
> Sobald der Dienst aktiviert ist, überwacht er alle mit Ihrem Konto verbundenen Jeedom-Geräte. Ab Jeedom 4.2 ist es jedoch möglich, die Überwachung in den Einstellungen zu deaktivieren (Registerkarte „Market/Update“).

>**WICHTIG**
>
> Für Benachrichtigungen müssen Sie lediglich die ARN Ihres Mobilgeräts abrufen. Diese finden Sie im Mobil-Plugin auf Ihrem Mobilgerät. Rufen Sie dort den Reiter „Benachrichtigungen“ auf und kopieren Sie die Zeile „ARN“. Achtung: Sie dürfen nur den Teil kopieren, der nach „arn:aws:sns:eu-west-1:507915066327:endpoint/“ steht.

## Ist das mit allem kompatibel?

- Smart (getestet)
- Debian x64 Stretch (getestet)
- Debian x64 Jessie
- RPI
