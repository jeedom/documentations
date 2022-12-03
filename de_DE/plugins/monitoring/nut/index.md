# Nut Plugin

Mit diesem Plugin können Sie Informationen von einem NUT-Server abrufen (Network UPS Tools))

# Plugin Konfiguration 

Nachdem Sie das Plugin heruntergeladen haben, aktivieren Sie es einfach und klicken Sie auf "Installieren / Aktualisieren""

![nut](./images/nut.PNG)

# Gerätekonfiguration 

Auf die Konfiguration der NUT-Geräte kann über das Plugin-Menü zugegriffen werden :

![nut2](./images/nut2.PNG)

So sieht die NUT-Plugin-Seite aus (hier mit bereits 1 Gerät) :

![nut3](./images/nut3.PNG)

Sobald Sie auf eine davon klicken, erhalten Sie :

![nut4](./images/nut4.PNG)

Hier finden Sie die gesamte Konfiguration Ihrer Geräte :

-   **Gerätename Wechselrichter** : Name Ihrer NUT-Ausrüstung,
-   **Übergeordnetes Objekt** : Gibt das übergeordnete Objekt an, zu dem das Gerät gehört,
-   **Aktivieren** : macht Ihre Ausrüstung aktiv,
-   **Sichtbar** : macht Ihre Ausrüstung auf dem Armaturenbrett sichtbar,
-   **Kategorie** : Kategorie Ihrer NUT-Ausrüstung
-   **NUT IP-Adresse** : Die IP-Adresse des NUT-Servers
-   **Benutzername** : Benutzername des NUT-Servers (leer lassen, wenn keiner vorhanden ist)
-   **Passwort** : NUT-Serverkennwort (leer lassen, wenn keines vorhanden ist)
-   **Ups id** : Ups id

> **Notiz**
>
> Ein NUT-Server kann mehrere USVs verwalten. Es ist dann die USV-ID, die Jeedom darüber informiert, auf welche USV sich das Gerät bezieht

> **Spitze**
>
> Wenn Sie die ID Ihrer USV (s) nicht kennen, lassen Sie das Feld leer und registrieren Sie das Gerät. Jeedom füllt automatisch das ID-Feld der USV aus und erstellt so viele Geräte, wie Sie über eine USV auf Ihrem NUT-Server verfügen.

Nachfolgend finden Sie die Liste der Bestellungen :

-   **Name** : Der im Dashboard angezeigte Name,
-   **Anzeige** : ermöglicht die Anzeige der Daten im Dashboard
-   **Test** : Wird zum Testen des Befehls verwendet,

> **Wichtig**
>
> Die erstellten Befehle können je nach Installation unterschiedlich sein. Dies hängt davon ab, was der NUT-Server zurücksendet

> **Spitze**
>
> Wenn sich Ihr NUT-Server auf einem Synology NAS befindet, lautet der Benutzername "monuser", das Kennwort "secret" und die ID "ups"'. Obwohl der Bereich leer bleibt, füllt das Plugin ihn in den meisten Fällen.
