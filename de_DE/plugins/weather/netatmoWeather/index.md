# Netatmo Wetter Plugin

Plugin zum Abrufen von Informationen von Wetterstationen Netatmo.

# Plugin Konfiguration

Sobald das Plugin installiert ist, müssen Sie Ihre Netatmo-Verbindungsinformationen eingeben :

![netatmoWeather2](./images/netatmoWeather2.png)

-   **Kunden-ID** : Ihre Client-ID (siehe Abschnitt Konfiguration)
-   **Geheimer Kunde** : Ihr geheimer Client (siehe Abschnitt Konfiguration)
-   **Benutzername** : Benutzername Ihres Netatmo-Kontos
-   **Passwort** : Passwort für Ihr Netatmo-Konto
-   **Synchronize** : Mit dieser Option können Sie Jeedom mit Ihrem Netamo-Konto synchronisieren, um Ihre Netamo-Geräte automatisch zu erkennen. Nach dem Speichern der vorherigen Parameter.

# Verbindungsinformationen abrufen

Pour intégrer votre station, vous devez posséder un client\_id et unclient\_secret généré sur le site <http://dev.netatmo.com>.

Pour créer un compte > https://auth.netatmo.com/fr-fr/access/signup?next_url=https%3A%2F%2Fdev.netatmo.com%2Fbusiness-showcase

Klicken Sie einmal auf Start :

![netatmoWeather10](./images/netatmoWeather10.png)

Dann auf "App erstellen"

![netatmoWeather11](./images/netatmoWeather11.png)

Identifizieren Sie sich mit Ihrer E-Mail-Adresse und Ihrem Passwort

![netatmoWeather12](./images/netatmoWeather12.png)

Füllen Sie die Felder "Name" und "Beschreibung" aus (was auch immer Sie eingeben, spielt keine Rolle) :

![netatmoWeather13](./images/netatmoWeather13.png)

Aktivieren Sie dann ganz unten auf der Seite das Kontrollkästchen "Ich akzeptiere die Nutzungsbedingungen" und klicken Sie auf "Erstellen""

![netatmoWeather14](./images/netatmoWeather14.png)

Rufen Sie die Informationen "Client-ID" und "Client-Geheimnis" ab und kopieren Sie sie in den Konfigurationsteil des Plugins in Jeedom (siehe vorheriges Kapitel))

![netatmoWeather15](./images/netatmoWeather15.png)

> **Wichtig**
>
> Bitte beachten Sie, dass die Rückruf-URL "Keine" sein muss, sonst funktioniert es nicht.

# Gerätekonfiguration

Auf die Konfiguration der Netatmo-Geräte kann über das Menuplugin zugegriffen werden :

![netatmoWeather3](./images/netatmoWeather3.png)

So sieht die Netatmo-Plugin-Seite aus (hier mit bereits 2 Geräten) :

![netatmoWeather4](./images/netatmoWeather4.png)

> **Spitze**
>
> Wie an vielen Stellen in Jeedom wird durch Platzieren der Maus ganz links ein Schnellzugriffsmenü angezeigt (Sie können es in Ihrem Profil immer sichtbar lassen).

Sobald Sie auf ein Gerät klicken, erhalten Sie :

![netatmoWeather5](./images/netatmoWeather5.png)

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
-   Erweiterte Konfiguration (kleine gekerbte Räder) : Zeigt die erweiterte Konfiguration des Befehls an (Protokollierungsmethode, Widget usw.))
-   Test : Wird zum Testen des Befehls verwendet

# Widget

Hier ist das Standard-Widget für eine Station im Dashboard :

![netatmoWeather6](./images/netatmoWeather6.png)

Und auf dem Handy :

![netatmoWeather7](./images/netatmoWeather7.png)

# FAQ

>**Was ist die Bildwiederholfrequenz? ?**
>
>Das System ruft alle 15 Minuten Informationen ab.

>**Ich habe meine Sonden, aber keinen Wert, der zurückgeht**
>
>Dies tritt auf, wenn ein Problem bei der Aktualisierung von Modulen oder Netatmo aufgeführt ist. Der einfachste Weg ist, ein Modul hinzuzufügen / zu entfernen. Um den Vorgang zu verfolgen, wird eine Aktualisierung aller Elemente erzwungen und das Problem sollte behoben werden.
