# Präsentation

Das Dialogflow-Plugin ermöglicht die Verbindung von Jeedom mit Google Home / Assistant über eine native Anwendung und Interaktionen

> **Notiz**
>
> Es gibt auch das Google Smarthome-Plugin, mit dem Sie Jeedom mit Google Home / Assistant verbinden können. Diesmal werden jedoch für die Smarthome-Integration von Google keine Interaktionen verwendet.

> **Wichtig**
>
> Das Plugin erfordert ein Abonnement für Sprachdienste. Sie können Ihr Abonnement [hier] verwalten (https://www.jeedom.com/market/index.php?v=d&p=profils#services)

## Synchronisation und Verzögerung

Im Cloud-Modus (und nur im Cloud-Modus) treten bei den folgenden Aktionen Verzögerungen bei der Synchronisierung auf :

- Kontoaktivierung
- Kauf des Jahres über den Voice Assistant-Dienst
- Änderung des API-Smarthome-Plugin-API-Schlüssels
- Jeedom URL ändern
- Passwortmarkt ändern

# Konfiguration

Installieren Sie das Plugin und aktivieren Sie es. Klicken Sie dann immer auf der Plugin-Konfigurationsseite auf "Senden", um Ihre Konfiguration an den Markt zu senden.

![dialogflow](../images/dialogflow1.png)

> **Wichtig**
>
> Sie müssen keine Ausrüstung für dieses Plugin erstellen. Folgen Sie einfach den Anweisungen unten.

Auf dem Markt müssen Sie "Google Smarthome" auf der Registerkarte "Meine Dienste" und dann "Konfigurieren" in der Zeile "Sprachassistent" in Ihren Profilen aktivieren und warten, bis sich der Status in "Aktiv" ändert (dies dauert ca. 6 Stunden)..

> **Wichtig**
>
> Die Zugangs-URL Ihres Jeedom muss unbedingt in https sein

> **Notiz**
>
> Sie können nur ein Jeedom pro Marktkonto mit Google verbinden

> **Wichtig**
>
> Nach der Aktivierung und / oder Änderung von Informationen für Google Smarthome müssen Sie **24h warten** damit dies berücksichtigt wird

Wenn Sie auf einem Telefon mit Google Assistant "Mit Jeedom sprechen" sagen, werden Sie von Google aufgefordert, Ihr Jeedom-Konto zu verknüpfen, und Google klickt auf "Ja" : 

![dialogflow](../images/dialogflow2.png)

Geben Sie Ihre Marktkennungen an : 

![dialogflow](../images/dialogflow3.png)

Google teilt Ihnen mit, dass die Konfiguration erfolgreich erstellt / aktualisiert wurde : 

![dialogflow](../images/dialogflow4.png)

Hier wird die Verbindung zwischen Ihrem Jeedom und Google Home / Assistant hergestellt.

Sie können jetzt mit Ihrem Jeedom sprechen und alle Interaktionen Ihres Jeedom direkt von Ihrem Google-Startseite / Assistenten aus nutzen.
Sagen Sie in Ihrem Google-Startseite / Assistenten einfach "Mit Jeedom sprechen", "Jeedom fragen" oder sogar "Mit Jeedom sagen", um die Interaktion mit Jeedom zu starten, und "Danke", wenn Sie mit dem Beenden des Gesprächs fertig sind.

# Sicherer Modus

Im sicheren Modus wird bei Jeedom eine Berechtigungsschicht hinzugefügt. Standardmäßig ist im sicheren Modus nur der API-Schlüssel erforderlich. Pro Benutzer gibt es eine zweite eindeutige Zeichenfolge (nicht vollständig in der Datenbank gespeichert), die gültig sein muss.

Um es nicht einfacher zu verwenden, müssen Sie auf die Plugin-Konfigurationsseite gehen, den sicheren Modus aktivieren und dann bei Google eine Anfrage nach Jeedom stellen. Gehen Sie schließlich zur Seite Plugin -> Kommunikation -> Dialogfluss. Sie sehen eine Aufforderung zur Annahme einer Kennung. Überprüfen Sie diese einfach..

> **Notiz**
>
> Der Sicherheitsmodus ist standardmäßig nicht aktiv, um die Google-Validierung bestehen zu können. Es wird jedoch dringend empfohlen, sie zu aktivieren

# Konfiguration zurücksetzen

Wenn Sie eine falsche URL oder einen falschen API-Schlüssel oder eine Änderung der URL oder des API-Schlüssels eingegeben haben, müssen Sie die Konfiguration zurücksetzen und den Verbindungsvorgang wiederholen..

Sagen Sie dann in der Google Assistant-Anwendung "Mit Jeedom sprechen" und dann "Konfiguration löschen"". Die Anwendung sollte Ihnen mitteilen, dass die Konfiguration erfolgreich gelöscht wurde. Wiederholen Sie dann den Verbindungsvorgang.

# Faq

>**Ich habe den Fehler ESOCKETTIMEDOUT**
>
>Ist das Ihre auf dem Markt konfigurierte URL oder API-Schlüssel nicht gut. Beachten Sie auch die in den Interaktionen definierte Antwortzeit. Google legt eine Antwortzeit vor dem Timeout von 4 Sekunden fest.

>**Während eines "Talk to Jeedom" erhalten Sie SOFORT einen "Fehler, dass Ihr Konfigurationsserver nicht richtig reagiert hat. Bitte gehen Sie zum Dokumentationscode 500"**
>
>Gehen Sie zu dieser [url] (https://gala-demo.appspot.com), wählen Sie auf dieser Seite Ihr Google-Konto (das von Google Home / Assistant verwendete) in "Service ID" aus, setzen Sie jeedom-183212 und klicken Sie auf "Mein Konto trennen" (Schaltfläche rechts).. Wiederholen Sie dann in Google Assistant die Konfiguration (außer Marktteil).

>**Fehler, dass Ihr Jeedom den ETIMEDOUT-Code nicht richtig beantwortet hat. Noch etwas**
>
>Dies kommt von Ihrem Jeedom, das nicht innerhalb der von Google auferlegten Frist geantwortet hat.. Dies kann auf zwei Dinge zurückzuführen sein: eine langsame Internetverbindung oder zu lange Aktionen..

>**Bei jeder Anfrage gibt Google an, dass Ihre Konfiguration aktualisiert wurde**
>
>Wenn Google Ihre Stimme nicht erkennt, werden Sie als neuer Nutzer betrachtet. Zur Korrektur können Sie versuchen, die Sprachübereinstimmung neu zu konfigurieren.
