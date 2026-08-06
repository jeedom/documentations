# Netatmo Thermostat Plugin

# Description

Plugin zur Steuerung von Netatmo-Thermostaten.

# Plugin Konfiguration

Sobald das Plugin installiert ist, müssen Sie Ihre Netatmo-Verbindungsinformationen eingeben :

-   **Kunden-ID** : Ihre Kunden-ID *(siehe Konfigurationsteil)*.
-   **Geheimer Kunde** : Ihr geheimer Kunde *(siehe Konfigurationsteil)*.
-   **Benutzername** : Benutzername Ihres Netatmo-Kontos.
-   **Passwort** : Passwort für Ihr Netatmo-Konto.
-   **Verwenden Sie ein alternatives Design** : ermöglicht die Verwendung eines anderen Designs *(siehe Widget-Teil)*.
-   **Synchronize** : Mit dieser Option können Sie Jeedom mit Ihrem Netamo-Konto synchronisieren, um Ihre Netamo-Geräte automatisch zu erkennen. Nach dem Speichern der vorherigen Einstellungen.

# Verbindungsinformationen abrufen

Pour intégrer votre station, vous devez posséder un client\_id et un client\_secret généré sur le site <http://dev.netatmo.com>.

Pour créer un compte > https://auth.netatmo.com/fr-fr/access/signup?next_url=https%3A%2F%2Fdev.netatmo.com%2Fbusiness-showcase

Sobald Sie darauf sind, klicken Sie auf "START" :

![netatmoWeather10](../images/netatmoWeather10.png)

Dann auf "App erstellen" :

![netatmoWeather11](../images/netatmoWeather11.png)

Identifizieren Sie sich mit Ihrer E-Mail-Adresse und Ihrem Passwort :

![netatmoWeather12](../images/netatmoWeather12.png)

Füllen Sie die Felder "Name" und "Beschreibung" aus (es spielt keine Rolle, was Sie eingeben, es spielt keine Rolle) :

![netatmoWeather13](../images/netatmoWeather13.png)

Aktivieren Sie dann ganz unten auf der Seite das Kontrollkästchen "Ich akzeptiere die Nutzungsbedingungen" und klicken Sie auf "Erstellen"" :

![netatmoWeather14](../images/netatmoWeather14.png)

Rufen Sie die Informationen "Client-ID" und "Client-Geheimnis" ab und kopieren Sie sie in den Konfigurationsteil des Plugins in Jeedom *(siehe vorheriges Kapitel)*.

![netatmoWeather15](../images/netatmoWeather15.png)

# Gerätekonfiguration

Auf die Konfiguration der Netatmo-Geräte kann über das Plugin-Menü zugegriffen werden.

Hier finden Sie die gesamte Konfiguration Ihrer Geräte :

-   **Name des Netatmo-Geräts** : Name Ihrer Netatmo-Ausrüstung.
-   **Übergeordnetes Objekt** : Gibt das übergeordnete Objekt an, zu dem das Gerät gehört.
-   **Aktivieren** : macht Ihre Ausrüstung aktiv.
-   **Sichtbar** : macht es auf dem Dashboard sichtbar.
-   **Login** : eindeutige Gerätekennung.
-   **Typ** : Art Ihrer Ausrüstung (Station, Innensensor, Außensensor usw.)).

Nachfolgend finden Sie die Liste der Bestellungen :

-   Der im Dashboard angezeigte Name
-   Chronik : ermöglicht das Historisieren der Daten
-   Erweiterte Konfiguration (kleine gekerbte Räder) : Dient zum Anzeigen der erweiterten Konfiguration des Befehls (Protokollierungsmethode, Widget usw.))
-   Test : Wird zum Testen des Befehls verwendet

> **TIPP**
>
> Wenn Sie den Widget-Modus ändern, sollten Sie auf Synchronisieren klicken, um das Ergebnis sofort anzuzeigen.

# FAQ

>**Was ist die Bildwiederholfrequenz? ?**
>
>Das System ruft alle 15 Minuten Informationen ab.
