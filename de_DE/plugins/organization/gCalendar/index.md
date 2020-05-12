# Google Kalender Plugin

Mit dem Agenda-Plugin können Sie Ereignisse aus Ihrem Google Kalender abrufen. Er kann auch während eines Ereignisses eine Interaktion initiieren

# Konfiguration 

## Erstellen Sie ein Google Kalender-Gerät 

Auf der Jeedom-Seite müssen Sie ein Google Kalender-Gerät erstellen und die Weiterleitungs-URL abrufen. 

> **Wichtig**
>
> Die URL des externen Zugriffs auf Ihr Jeedom muss unbedingt in https angegeben sein. Google erlaubt keine unverschlüsselten Verbindungen.

## Erstellen Sie ein Entwicklerkonto bei Google 

Sie müssen ein Entwicklerkonto bei Google erstellen, um auf die APIs zugreifen zu können [hier](https://console.developers.google.com/apis/credentials) Führen Sie dann "Identifikatoren erstellen" und "Oauth-Client-ID erstellen" aus, wählen Sie "Webanwendung" aus und geben Sie unter "Autorisierte Weiterleitungs-URIs" die auf der Konfigurationsseite des Jeedom-Geräts angegebene ein.

> **Wichtig**
>
> Seien Sie vorsichtig, wenn Sie "Authorized Redirect URIs" eingeben, auf die Sie achten müssen : 
> - die Domain hier schon einmal autorisiert zu haben [hier](https://console.developers.google.com/apis/credentials/consent). Google wird Sie normal signalisieren
> - Drücken Sie die Eingabetaste, nachdem Sie die Weiterleitungs-URL von jeedom auf die Google-Konfigurationsseite kopiert / eingefügt haben (das Drücken der Schaltfläche Speichern direkt nach dem Kopieren / Sortieren ohne Drücken der Eingabetaste funktioniert nicht !!!)

Stellen Sie den Client-Schlüssel und das Client-Geheimnis wieder her (Sie müssen sie in der Ausrüstung auf die Jeedom-Seite legen)

Anschließend müssen Sie die Google Kalender-API hinzufügen, indem Sie fortfahren [hier](https://console.developers.google.com/apis/dashboard), Klicken Sie dann auf "API aktivieren" und suchen Sie nach "Google Kalender-API". Fügen Sie dann die hinzu.

## Verknüpft das Google-Konto mit jeedom 

Kopieren Sie den Kundenschlüssel und das Kunden-Secrey auf der Jeedom-Seite, klicken Sie dann auf die Schaltfläche Link, und überprüfen Sie alles.

>**Wichtig**
>
>Um die beiden Konten (Google und Jeedom) zu verknüpfen, ist es ABSOLUT erforderlich, über die externe URL mit Jeedom verbunden zu sein (Sie können dies im Jeedom-Teilnetzwerk des Konfigurationszentrums sehen)

# Befehl 

Das Plugin enthält nur Befehle, die Ihnen den Titel des Ereignisses geben

# Interaktion 

Jeedom kann den Titel eines Ereignisses als Interaktion interpretieren und somit eine Aktion auslösen. Dazu müssen Sie die Interaktionen auf der Gerätekonfigurationsseite aktivieren.

Sie können auch einen Rückgabebefehl angeben, mit dem jeedom nach Ausführung der Interaktion reagiert.
