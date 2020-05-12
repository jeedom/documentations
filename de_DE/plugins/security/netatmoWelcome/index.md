# Neatmo Security Plugin (Sicherheit)

Plugin zum Abrufen von Informationen von Netatmo Security-Geräten

# Plugin Konfiguration

Sobald das Plugin installiert ist, müssen Sie Ihre Netatmo-Verbindungsinformationen eingeben :

-   **Kunden-ID** : Ihre Client-ID (siehe Konfigurationsabschnitt)
-   **Geheimer Kunde** : Ihr geheimer Client (siehe Konfigurationsabschnitt)
-   **Benutzername** : Benutzername Ihres Netatmo-Kontos
-   **Passwort** : Passwort für Ihr Netatmo-Konto
-   **Synchronize** : Mit dieser Option können Sie Jeedom mit Ihrem Netamo-Konto synchronisieren, um Ihre Netamo-Geräte automatisch zu erkennen. A
    tun, nachdem Sie die vorherigen Einstellungen gespeichert haben.

# Verbindungsinformationen abrufen

Pour intégrer votre Welcome, vous devez posséder un client\_id et unclient\_secret généré sur le site <http://dev.netatmo.com>.

Klicken Sie einmal auf Start :

![netatmoWelcome10](./images/netatmoWelcome10.png)

Dann auf "App erstellen"

![netatmoWelcome11](./images/netatmoWelcome11.png)

Identifizieren Sie sich mit Ihrer E-Mail-Adresse und Ihrem Passwort

![netatmoWelcome12](./images/netatmoWelcome12.png)

Füllen Sie die Felder "Name" und "Beschreibung" aus (was auch immer Sie eingeben, spielt keine Rolle) :

![netatmoWelcome13](./images/netatmoWelcome13.png)

Aktivieren Sie dann ganz unten auf der Seite das Kontrollkästchen "Ich akzeptiere die Nutzungsbedingungen" und klicken Sie auf "Erstellen""

![netatmoWelcome14](./images/netatmoWelcome14.png)

Stellen Sie die Informationen "CLient ID" und "Secret Client" wieder her und kopieren Sie sie in den Konfigurationsteil des Plugins in Jeedom (siehe vorheriges Kapitel)

![netatmoWelcome15](./images/netatmoWelcome15.png)

# Gerätekonfiguration

Auf die Konfiguration von Netatmo-Geräten kann über das Plugin-Menü -> Sicherheit -> Netatmo-Sicherheit zugegriffen werden

Sobald Sie auf ein Gerät klicken, finden Sie hier die gesamte Konfiguration Ihrer Geräte :

-   **Name des Netatmo-Geräts** : Name Ihrer Netatmo-Ausrüstung
-   **Übergeordnetes Objekt** : Gibt das übergeordnete Objekt an, zu dem das Gerät gehört
-   **Aktivieren** : macht Ihre Ausrüstung aktiv
-   **Sichtbar** : macht es auf dem Dashboard sichtbar

Nachfolgend finden Sie die Liste der Bestellungen :

-   der Name des Befehls
-   Chronik : ermöglicht das Historisieren der Daten
-   erweiterte Konfiguration (kleine gekerbte Räder) : Anzeigen
    erweiterte Konfiguration des Befehls (Protokollierungsmethode, Widget usw.)
-   Test : Wird zum Testen des Befehls verwendet

# FAQ

>**Ich habe die Ereignisse nicht in Echtzeit, sondern nach 15 Minuten**
>
>Um Ereignisse in Echtzeit zurückgeben zu können (Auslösen eines Feueralarms, Person, die vor der Kamera vorbeikommt usw.), MUSS Ihr Jeedom ABSOLUT eine externe URL in https mit einem gültigen Zertifikat an Port 443 (und nur an diesem Port) haben. Es ist eine Verpflichtung von Netatmo

>**Ich kann die Überwachung nicht deaktivieren / aktivieren**
>
>Achtung, wenn Sie einen Code eingeben, ist diese Funktion vom jeedom-Plugin nicht möglich
