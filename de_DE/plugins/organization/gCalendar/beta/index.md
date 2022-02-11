# Google Kalender Plugin

Das Plugin **Google Kalender** Mit dieser Option können Sie Ereignisse aus Ihren Google-Kalendern abrufen. Es kann auch eine Interaktion während eines Ereignisses auslösen.

> **Wichtig**
>
> Google erzwingt jetzt aus Sicherheitsgründen alle 7 Tage eine erneute Verbindung.

# Configuration

## Erstellen Sie ein Google Kalender-Gerät

Auf der Jeedom-Seite müssen Sie ein Google Kalender-Gerät erstellen und die Weiterleitungs-URL abrufen.

> **Wichtig**
>
> Die URL für den externen Zugriff auf Ihr Jeedom muss unbedingt in https angegeben sein. Google erlaubt keine unverschlüsselten Verbindungen.

## Erstellen Sie ein Google Developer-Konto

Sie müssen ein Entwicklerkonto bei Google erstellen, um auf die API zugreifen zu können. Machen, [folgen Sie diesem Link](https://console.developers.google.com/apis/credentials), Erstellen Sie bei Bedarf ein neues Projekt und klicken Sie dann auf "**+ Bezeichner erstellen**" und auswählen "**Oauth Client ID**".     
 Dann wähle "**Internetanwendung**" Fügen Sie dann im Dropdown-Menü die hinzu'"*URL zurückgeben*" angegeben auf der Jeedom-Ausrüstungsseite in "**Zulässige Umleitungs-URIs**".

> **Wichtig**
>
>Wenn Sie "Autorisierte Umleitungs-URIs" eingeben, müssen Sie darauf achten :
> - habe die Domain schon einmal autorisiert [hier](https://console.developers.google.com/apis/credentials/consent). Google wird Sie normal signalisieren
> - Drücken Sie die Eingabetaste, nachdem Sie die Umleitungs-URL von jeedom auf die Google-Konfigurationsseite kopiert / eingefügt haben (*Das Drücken der Speichern-Taste direkt nach dem Kopieren / Kragen ohne Drücken der Eingabetaste funktioniert nicht!*)     

Sammle die'**Kundennummer**' und die **Geheimcode des Kunden** (Sie müssen sie in die Jeedom-Seitenausrüstung eingeben)

Anschließend müssen Sie die Google Kalender-API hinzufügen, indem Sie fortfahren [hier](https://console.developers.google.com/apis/dashboard). Klicken Sie auf "**+ Aktivieren Sie APIs und Dienste**" Suchen Sie dann nach "Google Kalender API" und fügen Sie die hinzu.

> **Wissen**
>
>Das obige Verfahren kann sich im Laufe der Zeit ändern. Wir empfehlen Ihnen, die Anweisungen auf der Website zu befolgen.

## Verknüpfen Sie das Google-Konto mit jeedom

Kopiere es **Kunden-ID** und das **Geheimschlüssel** Jeedom Seite dann klicken Sie auf die Schaltfläche "**Binden**". Vergessen Sie nicht, die Ausrüstung aufzubewahren.

>**Wichtig**
>
>Um die beiden Konten (Google und Jeedom) zu verknüpfen, ist es ABSOLUT erforderlich, über die externe URL mit Jeedom verbunden zu sein (Sie können dies im Jeedom-Teilnetzwerk des Konfigurationszentrums sehen)

# Commandes

Das Plugin enthält nur Befehle, die den Titel von Ereignissen angeben.

# Interaction

Jeedom kann den Titel eines Ereignisses als Interaktion interpretieren und somit eine Aktion auslösen. Dazu müssen Sie die Interaktionen auf der Gerätekonfigurationsseite aktivieren.

Sie können auch einen Rückgabebefehl angeben, mit dem jeedom nach Ausführung der Interaktion reagiert.    
