# Changelog Harmony Hub

>**Wichtig**
>
>Zur Erinnerung: Wenn keine Informationen zum Update vorhanden sind, handelt es sich nur um die Aktualisierung von Dokumentation, Übersetzung oder Text.

> Attention
> Bedeutende Neugestaltung des Plugins: Das Plugin wurde komplett neu geschrieben, einschließlich der Kommunikation mit dem Harmony-Hub (jetzt über Daemon))
>
> Erfordert Jeedom 4.4.8
>
> Debian 11 und 12 kompatibel! Das Plugin ist nicht mehr mit Debian 10 kompatibel. Wenn Sie noch Debian 10 verwenden, installieren Sie diese Version nicht.
>
> Alte Geräte werden als veraltet markiert und nicht migriert. Nutzen Sie das „Replace“-Tool des Cores, wenn Sie Ihre Szenarien einfach anpassen möchten.
>
> Siehe auch [dieses Thema auf Community](https://community.jeedom.com/t/importante-mise-a-jour-pour-debian-11-et-debian-12/129908) für weitere Details

# 25.11.2024

- Korrigieren Sie die Version einer Abhängigkeit, um eine Breaking Change zu vermeiden (async-timeout v5 Break Timeout-Kontext))

# 28.08.2024

- Komplette Neufassung des Plugins
- Verwenden der Kernabhängigkeitsinstallationsmethode
- Ändern der Bibliothek zur Kommunikation mit dem Harmony-Hub, um eine Bibliothek mit besserer Nachverfolgung zu verwenden
- Verwenden eines Daemons, um:
  - um die Reaktionsfähigkeit von Aktionen zu verbessern
  - um Status-Feedback in Echtzeit zu erhalten
- Vereinfachte Konfiguration: Es bleibt nur noch die Konfiguration der Hub-IP in die Plugin-Konfiguration einzutragen und den Daemon zu starten und schon synchronisiert sich das Gerät mit Jeedom.
- Bestellung hinzufügen **Aktivität starten** Gibt die Aktivität an, die gestartet wird (leer, wenn keine Aktivität vorhanden ist))

# 17.09.2023

- Korrigieren Sie die Debian 11- und Python 3-Kompatibilität
- Mindestkernversion erforderlich: v4.2

# 19.10.2022

- Aktualisierte Befehlsliste für Jeedom v4.3
- Kleinere Korrekturen und Optimierungen im Ausrüstungsverwaltungsbildschirm

# 18.05.2021

- Korrektur einer Fehlfunktion einiger Steuerungen
- Schnittstellenüberprüfung
- Überprüfung der Dokumentation

# 20/11/2020

- Allgemeine Optimierungen
- Neue Darstellung der Objektliste
- Hinzufügung des Tags "V4-Kompatibilität"

# 20.09.2019

- V4 Anpassung

# 07-06-2019

- Bugfix für NOK-Abhängigkeiten bei OK

# 2019-05-23

- Installation der Ausrüstungsseite für zukünftige Jeedom

# 2019-02-19

Dieses Update ist ein wichtiger Bestandteil des Updates von Logitech, mit dem XMMP reaktiviert wird. Sie müssen die conf-Datei neu erstellen und insbesondere in der Harmony-Anwendung den Entwicklermodus aktivieren, der das XMMP aktiviert
Zur Information: Diese Verschiebung erfolgt am selben Tag wie der Logitech-Patch. Genau wie die Problemumgehung vom 21-12-2018, die es vielen Menschen ermöglichte, repariert zu werden, da sie für alle Personen funktionierte, die sich unter Debian-Dehnung befanden (besser als nichts)). Wir wussten nicht, wann Logitech die Unterstützung für XMMP veröffentlichen würde. Aber Schlag auf Schlag gab es eine Reaktion.

# 2018-12-21

Notfallkorrektur in Bezug auf den Hauptteil von Logitech (vorübergehend zur Fehlerbehebung, denken Sie daran, die Abhängigkeiten neu zu starten)
