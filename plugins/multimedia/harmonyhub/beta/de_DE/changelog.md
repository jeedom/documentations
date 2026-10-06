# Änderungsprotokoll Harmony Hub

>**WICHTIG**
>
>Zur Erinnerung: Wenn keine Informationen zum Update vorhanden sind, bedeutet dies, dass es sich ausschließlich um eine Aktualisierung der Dokumentation, der Übersetzung oder des Textes handelt.

# 18/05/2026

- Überprüfung der Verbindung zwischen dem Daemon und dem Hub beim Senden von Befehlen

# 10/07/2025

- Behebung eines Absturzes beim Start des Daemons, falls ein Hub falsch konfiguriert oder nicht erreichbar ist: Der Daemon kann nun zusammen mit den anderen Hubs starten, sofern diese vorhanden sind, oder wird ordnungsgemäß beendet, wenn kein Hub erreichbar ist
- Anpassung der Protokolle

# 30/04/2025

- Behebung eines Problems beim Ausführen von Befehlen für bestimmte Installationen (unbekannter Hub) nach der Version vom 28.04.

# 28/04/2025

> Aufmerksamkeit
> Umfassende Überarbeitung des Plugins: Das Plugin wurde komplett neu geschrieben, einschließlich der Kommunikation mit dem Harmony-Hub (jetzt über einen Daemon).
>
> Erfordert Jeedom 4.4.8
>
> Kompatibel mit Debian 11 und 12! Das Plugin ist nicht mehr mit Debian 10 kompatibel. Wenn Sie noch Debian 10 verwenden, installieren Sie diese Version bitte nicht.
>
> Ältere Geräte werden als veraltet gekennzeichnet und nicht migriert. Verwenden Sie das Tool „Ersetzen“ des Core, wenn Sie Ihre Szenarien einfach anpassen möchten.
>
> Siehe auch [dieses Thema auf Community](https://community.jeedom.com/t/importante-mise-a-jour-pour-debian-11-et-debian-12/129908) Weitere Informationen

- Komplette Neufassung des Plugins
- Verwenden der Kernabhängigkeitsinstallationsmethode
- Ändern der Bibliothek zur Kommunikation mit dem Harmony-Hub, um eine Bibliothek mit besserer Nachverfolgung zu verwenden
- Verwendung eines Daemons, um:
  - um die Reaktionsfähigkeit von Aktionen zu verbessern
  - um Status-Feedback in Echtzeit zu erhalten
- Vereinfachte Konfiguration: Sie müssen lediglich die IP-Adresse des Hubs in den Plugin-Einstellungen eingeben und den Daemon starten – schon synchronisieren sich die Geräte von selbst mit Jeedom.
- Hinzufügen eines Befehls **Aktivität starten**, der angibt, welche Aktivität gerade gestartet wird (leer, falls keine vorhanden ist)
- Blockiert die Version einer Abhängigkeit, um eine Breaking Change zu vermeiden (async-timeout v5 bricht den Timeout-Kontext)

# 17/09/2023

- Korrigieren Sie die Debian 11- und Python 3-Kompatibilität
- Erforderliche Mindestversion des Core: v4.2

# 19/10/2022

- Aktualisierte Befehlsliste für Jeedom v4.3
- Kleinere Korrekturen und Optimierungen im Ausrüstungsverwaltungsbildschirm

# 18/05/2021

- Korrektur einer Fehlfunktion einiger Steuerungen
- Schnittstellenüberprüfung
- Überprüfung der Dokumentation

# 20/11/2020

- Allgemeine Optimierungen
- Neue Darstellung der Objektliste
- Hinzufügen des Tags „V4-Kompatibilität“

# 20-09-2019

- V4 Anpassung

# 07-06-2019

- Bugfix für NOK-Abhängigkeiten bei OK

# 23-05-2019

- Installation der Ausrüstungsseite für zukünftige Jeedom

# 19-02-2019

Dieses Update ist ein größeres Update im Zusammenhang mit dem Logitech-Update, das XMMP wieder aktiviert. Sie müssen die Konfigurationsdatei neu erstellen und vor allem in der Harmony-App den Entwicklermodus aktivieren, um XMMP zu aktivieren.
Zur Information: Dieses Update erscheint am selben Tag wie der Patch von Logitech. Genau wie die Umgehungslösung vom 21.12.2018, die vielen Nutzern geholfen hat, da sie bei allen funktionierte, die Debian Stretch nutzten (besser als nichts). Wir wussten nicht, wann Logitech die Unterstützung für XMMP wiederherstellen würde. Doch kurz darauf gab es eine Reaktion.

# 21-12-2018

Dringende Korrektur im Zusammenhang mit dem Logitech-Update (vorläufige Lösung zur Behebung des Problems; bitte denken Sie daran, die Abhängigkeiten neu zu starten)
