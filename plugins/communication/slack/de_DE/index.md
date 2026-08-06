# Slack Plugin

Mit diesem Plugin können Sie eine Verbindung zwischen Slack und Jeedom herstellen, um Benachrichtigungen von Jeedom zu senden oder mit Jeedom zu chatten (mithilfe von Interaktionen)).

# Plugin Konfiguration 

Nach dem Herunterladen des Plugins müssen Sie es aktivieren, es erfordert keine andere Konfiguration.

![slack1](../images/slack1.PNG)

# Gerätekonfiguration 

Auf die Konfiguration der Slack-Geräte kann über das Plugins-Menü zugegriffen werden :

![slack2](../images/slack2.PNG)

So sieht die Slack-Plugin-Seite aus (hier mit bereits 1 Gerät) :

![slack3](../images/slack3.PNG)

Sobald Sie auf eine davon klicken, erhalten Sie :

![slack4](../images/slack4.PNG)

Hier finden Sie die gesamte Konfiguration Ihrer Geräte :

-   **Name der Ausrüstung** : Name Ihrer Slack-Ausrüstung
-   **Aktivieren** : macht Ihre Ausrüstung aktiv
-   **Sichtbar** : macht es auf dem Dashboard sichtbar
-   **Domain** : Domainname Ihres Slack (insbesondere wenn Sie mehrere Slacks zur Unterscheidung haben)
-   **Token-Authentifizierung** : Slack-API-Token, das nur zum Senden von Dateien (z. B. zum Erfassen einer Kamera) nützlich ist (siehe unten)
-   **URL zurückgeben** : Dies ist die URL, die im Slack-Webhook angegeben werden muss (Vorsicht, Ihr Jeedom muss von außen zugänglich sein)

Nachfolgend finden Sie die Konfiguration der Befehle :

-   **Name** : Name der Bestellung
-   **Webhook** : URL zum Anrufen, um eine Nachricht auf Slack zu senden
-   **Ziel** : Nicht obligatorisch, ermöglicht das Erzwingen des Sendens einer Nachricht an einen Kanal oder einen Benutzer
-   Erweiterte Konfiguration (kleine gekerbte Räder) : Dient zum Anzeigen der erweiterten Konfiguration des Befehls (Protokollierungsmethode, Widget usw.))
-   Test : Wird zum Testen des Befehls verwendet
-   Löschen (unterschreiben -) : ermöglicht das Löschen des Befehls

> **Spitze**
>
> Standardmäßig gibt es 2 Befehle : Absender, der Ihnen den Namen des letzten Absenders der Nachricht gibt, und Nachricht, die Ihnen die Nachricht gibt. Dies kann verwendet werden, wenn Sie etwas tun möchten, das mit den Interaktionen nicht möglich ist, um ein Szenario beim Eintreffen eines neuen auszulösen Nachricht zum Beispiel und rufen Sie den Wert davon ab (wir können uns zum Beispiel vorstellen, die Nachricht auf Sonos oder Karotz lesen zu lassen)

Lockere Kontoerstellung 

Nichts mehr einfach gehen [hier](:https://slack.com/), und geben Sie beispielsweise eine E-Mail-Adresse und einen Domainnamen / eine Firma ein :

![slack5](../images/slack5.PNG)

Sie müssen nur validieren, Sie erhalten eine E-Mail, Sie müssen auf den Link klicken, um Ihr Konto zu aktivieren, und es ist gut

Dann kommen Sie auf Ihrem Slack an :

![slack6](../images/slack6.PNG)

Von dort finden Sie links die Kanäle und die Benutzer, in der Mitte können Sie die Slack-App für iOS, Android, Mac oder Windows herunterladen

# Hinausgehenden Webhook hinzufügen 

Mit den Webshooks kann Slack Jeedom über das Eintreffen einer Nachricht informieren und auf die Antwort von Jeedom warten, um sie erneut zu übertragen. Dazu müssen Sie zu den Einstellungen gehen :

![slack7](../images/slack7.PNG)

Klicken Sie dann auf Integration :

![slack8](../images/slack8.PNG)

Unten finden Sie "Ausgehende WebHooks"" :

![slack9](../images/slack9.PNG)

Klicken Sie auf "Hinzufügen" :

![slack10](../images/slack10.PNG)

Dann "Outgoing WebHooks Integration hinzufügen" :

![slack11](../images/slack11.PNG)

Die verschiedenen Parameter finden Sie unten auf der Seite :

-   **Kanal** : nicht erforderlich, lassen Sie uns Slack anweisen, alles in diesem Kanal an Jeedom zu senden. Zum Beispiel können wir einen Kanal nur für Jeedom erstellen (praktischer als ein Triggerwort zu setzen)
-   **Wort auslösen (s))** : nicht obligatorisch, wenn Sie einen Kanal gesetzt haben, sonst ist es absolut notwendig. In diesem Feld können Sie ein Auslösewort für das Senden an Jeedom definieren. Wenn Sie beispielsweise Jeedom eingeben, müssen alle Ihre Anforderungen mit Jeedom beginnen (z : Jeedom wie viel kostet es im Schlafzimmer)
-   **URL (s))** : Die anzurufende URL finden Sie auf Ihrer Ausrüstungsseite unter Jeedom unter dem Namen "Return URL""

Die anderen Felder sind nicht nützlich, außer vielleicht dem "Namen anpassen", mit dem der Name des Jeedom-Bots definiert werden kann (Name, mit dem Jeedom antwortet). Sie können auch mit "Symbol anpassen" das Symbol von Jeedom ändern.

Klicken Sie dann auf "Einstellungen speichern" und es ist gut

![slack12](../images/slack12.PNG)

Dort kannst du über Slack mit Jeedom sprechen

> **Wichtig**
>
> Vergessen Sie in Jeedom nicht, Ihren Domainnamen (Firmennamen) einzugeben, da sich Jeedom sonst weigert, Ihnen zu antworten (beachten Sie, dass dieses Feld für das Feld empfindlich ist).

> **Spitze**
>
> Da Jeedom die Geräte nach Domänen trennt, ist es möglich, dass Sie mehrere Geräte haben, um die Geräte und damit die dahinter stehenden Szenarien zu trennen.

# Hinzufügen eines eingehenden Webhooks 

Eingehende Webhooks ermöglichen es Jeedom, eine Nachricht auf einem Kanal oder direkt an eine Person zu übermitteln. Ohne diese Webhooks kann Jeedom nicht die Initiative ergreifen, um Ihnen eine Nachricht zu senden.

Dazu müssen Sie zu den Einstellungen gehen :

![slack7](../images/slack7.PNG)

Klicken Sie dann auf Integration :

![slack8](../images/slack8.PNG)

Ganz unten finden Sie "Incoming WebHooks" :

![slack13](../images/slack13.PNG)

Anschließend müssen Sie einen Kanal oder einen Standardzielbenutzer auswählen (Sie können dann einen Befehl per Befehl in Jeedom angeben) :

![slack14](../images/slack14.PNG)

Klicken Sie dann auf "Eingehende WebHooks-Integration hinzufügen"".

![slack15](../images/slack15.PNG)

Am Ende der Seite finden Sie die Informationen zum Webhook. Sie müssen lediglich den Wert des Felds "Webhook-URL" abrufen und in das Webhook-Feld Ihrer Bestellung kopieren.

> **Spitze**
>
> Im Befehlszielfeld in Jeedom können Sie einen Kanal (ex \#monchannel) oder einen Benutzer (ex @toto) angeben).

Hier unter Jeedom müssen Sie nur speichern und dort können Sie von Jeedom aus Nachrichten auf Slack senden

# Token-Wiederherstellung 

Hier erfahren Sie, wie Sie Ihr Token wiederherstellen, damit Jeedom Dateien an Slack senden kann, insbesondere beispielsweise Aufnahmen von Kameras. Zuerst musst du gehen [hier](https://api.slack.com/custom-integrations/legacy-tokens), dann ganz unten weiter :

![slack17](../images/slack17.PNG)

Bitten Sie Slack hier vor Ihrem Team, das Token zu generieren. Es fragt Sie nach Ihrem Passwort und sendet Sie dann zurück zur gleichen Seite. Unten fragen Sie erneut nach dem Token. Nach einigen Sekunden wird es angezeigt. Kopieren Sie es einfach in das Token-Feld von Jeedom

> **Spitze**
>
> Dieser Schritt ist optional. Es ist nur nützlich, beispielsweise Aufnahmen Ihrer Kamera von Slack zu senden.

# Was ist das Ergebnis? ? 

Hier ist ein Beispiel dafür, was möglich ist, wenn das Plugin korrekt konfiguriert und die Interaktionen erstellt wurden :

![slack16](../images/slack16.PNG)

> **Wichtig**
>
> Wenn Sie die "Fragen" -Funktion der Szenarien verwenden, müssen Sie die Anfrage auf einem Kanal senden, auf dem Jeedom die Antworten abhört. Andernfalls fällt Ihre "Fragen" -Anforderung in eine "Zeitüberschreitung""
