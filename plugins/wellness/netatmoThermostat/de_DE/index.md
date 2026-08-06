# Netatmo Thermostat Plugin

Plugin zur Steuerung von Netatmo-Thermostaten

# Plugin Konfiguration 

Sobald das Plugin installiert ist, müssen Sie Ihre Netatmo-Verbindungsinformationen eingeben :

-   **Kunden-ID** : Ihre Client-ID (siehe Abschnitt Konfiguration)
-   **Geheimer Kunde** : Ihr geheimer Client (siehe Abschnitt Konfiguration)
-   **Benutzername** : Benutzername Ihres Netatmo-Kontos
-   **Passwort** : Passwort für Ihr Netatmo-Konto
-   **Verwenden Sie ein alternatives Design** : Ermöglicht die Verwendung eines anderen Designs (siehe Widget-Teil)
-   **Synchronize** : Mit dieser Option können Sie Jeedom mit Ihrem Netamo-Konto synchronisieren, um Ihre Netamo-Geräte automatisch zu erkennen. Nach dem Speichern der vorherigen Parameter.

# Verbindungsinformationen abrufen 

Pour intégrer votre station, vous devez posséder un client\_id et un client\_secret généré sur le site <http://dev.netatmo.com>.

Klicken Sie einmal auf Start :

![netatmoWeather10](../images/netatmoWeather10.png)

Dann auf "App erstellen"

![netatmoWeather11](../images/netatmoWeather11.png)

Identifizieren Sie sich mit Ihrer E-Mail-Adresse und Ihrem Passwort

![netatmoWeather12](../images/netatmoWeather12.png)

Füllen Sie die Felder "Name" und "Beschreibung" aus (es spielt keine Rolle, was Sie eingeben, es spielt keine Rolle) :

![netatmoWeather13](../images/netatmoWeather13.png)

Aktivieren Sie dann ganz unten auf der Seite das Kontrollkästchen "Ich akzeptiere die Nutzungsbedingungen" und klicken Sie auf "Erstellen""

![netatmoWeather14](../images/netatmoWeather14.png)

Rufen Sie die Informationen "CLient ID" und "Secret Client" ab und kopieren Sie sie in den Konfigurationsteil des Plugins in Jeedom (siehe vorheriges Kapitel))

![netatmoWeather15](../images/netatmoWeather15.png)

# Gerätekonfiguration 

Auf die Konfiguration der Netatmo-Geräte kann über das Plugin-Menü zugegriffen werden.

Hier finden Sie die gesamte Konfiguration Ihrer Geräte :

-   **Name des Netatmo-Geräts** : Name Ihrer Netatmo-Ausrüstung
-   **Übergeordnetes Objekt** : Gibt das übergeordnete Objekt an, zu dem das Gerät gehört
-   **Aktivieren** : macht Ihre Ausrüstung aktiv
-   **Sichtbar** : macht es auf dem Dashboard sichtbar
-   **Login** : eindeutige Gerätekennung
-   **Typ** : Art Ihrer Ausrüstung (Station, Innensonde, Außensonde)

Nachfolgend finden Sie die Liste der Bestellungen :

-   Der im Dashboard angezeigte Name
-   Chronik : ermöglicht das Historisieren der Daten
-   Erweiterte Konfiguration (kleine gekerbte Räder) : Dient zum Anzeigen der erweiterten Konfiguration des Befehls (Protokollierungsmethode, Widget usw.))
-   Test : Wird zum Testen des Befehls verwendet

> **Spitze**
>
> Wenn Sie den Widget-Modus ändern, sollten Sie auf Synchronisieren klicken, um das Ergebnis sofort anzuzeigen

# Faq 

**Was ist die Bildwiederholfrequenz? ?**
Das System ruft alle 15 Minuten Informationen ab.
