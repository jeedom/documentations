# Spotify Connect Plugin

Mit diesem Plugin können Sie den Status von Spotify Connect-Playern abrufen und über Jeedom steuern.

# Configuration

## Plugin Konfiguration

Wie jedes Jeedom-Plugin auch das Plugin **Spotify Connect** muss nach der Installation aktiviert werden. Nach der Aktivierung müssen Sie jeedom mit Ihrem Spotify-Konto verknüpfen. Gehen Sie dazu zu Plugin -> Plugin-Verwaltung -> Spotify und klicken Sie dann auf die Schaltfläche, um eine Verknüpfung mit einem Benutzerkonto herzustellen.

### Entdeckung der Leser

Spotify Connect-Player werden bei Verwendung automatisch erkannt. Es reicht daher aus, eine Medienwiedergabe auf dem Spotify Connect-Gerät zu starten und 30 Sekunden zu warten, bis der Player automatisch in Jeedom angezeigt wird.

Sie können auch auf die Schaltfläche klicken **Synchronisieren Sie die Liste der Leser** diese Entdeckung zu erzwingen.

### Abrufhäufigkeit

Um maximal Ressourcen zu sparen, verwendet das Plugin je nach Status der Spotify Connect-Geräte zwei verschiedene Aktualisierungsraten :

- **Es wird keine Ausrüstung gespielt** : Das Plugin fragt die Spotify-Server am ab **Aktualisierungsrate** Standard 20 Sekunden standardmäßig.
- **Es wird mindestens ein Gerät gelesen** : Das Plugin fragt dann die Spotify-Server mit einer höheren Frequenz ab (**Aktualisierungsrate während der Wiedergabe** Standardmäßig auf 5 Sekunden eingestellt).

>**WICHTIG**
>
>Wir empfehlen Ihnen, diese Einstellungen nicht zu ändern, da das Risiko besteht, dass Ihr Spotify-Konto aufgrund einer zu hohen Abrufhäufigkeit für einige zehn Minuten gesperrt wird..

### Benutzerkonten verknüpfen

Mit dem Plugin können Sie eine Verbindung zu zwei separaten Spotify Connect-Konten herstellen.

Dazu müssen Sie nur das Kontrollkästchen aktivieren, um den Benutzer zu aktivieren und dann zu speichern. Klicken Sie dann auf die Schaltfläche **Link zu Jeedom** auf jeden Benutzer, um die Verbindung zwischen Spotify und Jeedom herzustellen.

### Sonderfall von Chromecast

Es ist normalerweise nicht möglich, eine Wiedergabe auf einem Spotify Connect-Gerät über das Plugin zu starten *(Dies ist eine Einschränkung von Spotify)* außer für Geräte des Typs **Chromecast**.

Spotify erlaubt nicht, dass Anwendungen von Drittanbietern auf einem Chromecast-Gerät abgespielt werden. Sie müssen dieses Verfahren befolgen, um die 2 erforderlichen Cookies abzurufen *(mit Google Chrome Browser)* :

- Geplanter Termin [an dieser Adresse](https://open.spotify.com/) und melden Sie sich bei Bedarf an,
- Drücken Sie die Taste F12 auf der Tastatur und gehen Sie zur Registerkarte **Anwendung** in dem Fenster, das sich öffnete,
- Überprüfen Sie, ob Sie in sind **Storage → Cookies → https://open.spotify.com** im linken Menü,
- Suche über das Feld **Suchen / Filtern** während der Eingabe ``sp_``,
- Rufen Sie abschließend die Cookie-Werte ab ``sp_key`` und ``sp_dc`` und geben Sie sie in die dafür vorgesehenen Felder in der Plugin-Konfiguration ein.

>**WICHTIG**
>
>Diese Funktion ist weder von Spotify autorisiert noch von Google dokumentiert und kann daher von Jeedom SAS nicht offiziell unterstützt werden. Es funktioniert für weniger als 50 % der Benutzer (hängt von externen Parametern ab, die wir leider nicht definieren können).

>**WICHTIG**
>
>Diese Cookies sind für jeden Benutzer spezifisch. Es ist daher erforderlich, den Vorgang für jeden von ihnen zu wiederholen, indem jedes Mal eine Verbindung zum betreffenden Spotify-Konto hergestellt wird.

## Gerätekonfiguration

Ausrüstungen **Spotify Connect** haben keine spezifischen Parameter außer für Geräte des Typs **Chromecast** Sie sind die einzigen, die die Wiedergabe eines Mediums steuern können.

Für dieses Gerät muss daher die IP-Adresse eingegeben werden, nachdem sichergestellt wurde, dass die in der Konfiguration des Plugins erwarteten Cookies korrekt eingegeben wurden (siehe Abschnitt) **Sonderfall von Chromecast**).

Das Gerät verfügt über zwei Bedienelemente zum Abspielen von Playlists : "Playlist abspielen "und" URI abspielen" :

- Play Playlist ermöglicht es dem Gerät, eine Playlist aus Ihrer persönlichen Bibliothek abzuspielen. Die Bestellung besteht aus zwei Teilen : den Titel der gewünschten Plaliste (setzen Sie dort den genauen Namen ohne Anführungszeichen) und Option (nur Zufall wird berücksichtigt, um die Lieder zufällig abzuspielen).
- Play Playlist URI ermöglicht es dem Gerät, eine auf Spotify verfügbare Playlist, einen Künstler oder ein Lied dank seiner URI (einem einzigartigen Code, der mit diesem Element verknüpft ist) abzuspielen). Um es zu finden, müssen Sie auf der Spotify-Weboberfläche mit der rechten Maustaste auf das gewünschte Element (Track, Interpret, Playlist ...) klicken, "Teilen" auswählen, Strg (Windows) oder Alt (MAC) gedrückt halten und dann "Spotify-URI kopieren"". Fügen Sie die erhaltene Zeile in das URI-Feld des Befehls ein.

>**WICHTIG**
>
>Chromecast-Geräte müssen sich im selben lokalen Netzwerk wie Jeedom befinden.
