# Unifi Protect-Plugin

## Description

Plugin zum Verbinden von Jeedom mit Unifi Protect

>**WICHTIG**
>
>Es gibt keine offizielle API für Unifi Protect, das Plugin kann daher nach einem Update von Unifi Protect über Nacht nicht mehr funktionieren. Unter keinen Umständen kann Jeedom verantwortlich gemacht werden und / oder hat die Pflicht zur Korrektur

## Compatibilité

Sie finden [Hier](https://compatibility.jeedom.com/index.php?v=d&p=home&plugin=unifiprotect) die Liste der Module, die mit dem Plugin kompatibel sind

## Plugin-Konfiguration

Nach der Installation des Plugins müssen Sie es nur noch aktivieren. Einige Parameter müssen in der Plugin-Konfiguration eingegeben werden :

-   **Unifi Protect-Controller** : Sie müssen den Pfad zu Ihrem Unifi-Controller angeben (in den meisten Fällen nur die IP))
-   **Unifi-Benutzer schützen** : Geben Sie hier einen lokalen Benutzernamen an (der Benutzer kann "Limeted Admin" mit "View only" auf Unifi Protect sein) 
-   **Unifi-Schutz-Passwort** : Geben Sie hier das Passwort des Benutzers ein
-   **Aktualisierungsrate** : Häufigkeit von Informationsanfragen an den Controller (je niedriger, desto mehr Ressourcen werden benötigt, achten Sie auf die von UDM-Pro)
-   **Keine Ereignisse sammeln** : Rufen Sie keine Ereignisse von Kameras ab (ermöglicht den Verbrauch von weniger Ressourcen, aber Sie verlieren die Erkennung von Bewegungen / Personen / Autos /...)
-   **Unifi Protect-Geräte finden** : Startet die Synchronisierung mit Unifi Protect

>**WICHTIG**
>
>Wenn Sie das Kamera-Plugin installiert haben, erstellt das Unifi Protect-Plugin automatisch die Kameras im Kamera-Plugin 

## Informationsfeedback

### Controleur

- Etat
- Uptime
- Zuletzt gesehen
- SSH Active (SSH-Verbindung auf dem Controller möglich)
- Code Fehler
- CPU auslastung
- CPU-Temperatur (wenn möglich)
- Speichernutzung
- Tmpfs verwenden
- Festplattennutzung

### Kamera 

- In Verbindung gebracht
- Etat
- Zuletzt gesehen
- Aufnahme (ist die Kameraaufnahme)
- Letzte Veranstaltung
- Datum der letzten Veranstaltung
- Letzter Event-Score (wenn das Event ein Smart Event ist)