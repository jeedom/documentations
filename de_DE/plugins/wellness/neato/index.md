# Neato Plugin

Mit diesem Plugin können Sie die Statusinformationen Ihres NeatoBotvac Connected Staubsaugers abrufen und steuern

# Configuration

# Installation / Erstellung

Um das Plugin verwenden zu können, müssen Sie es wie jedes Jeedom-Plugin herunterladen, installieren und aktivieren.

Danach müssen Sie Ihr Neato-Konto eingeben

Nach dem Speichern wird Ihr Neato automatisch erkannt und Ihrem Jeedom hinzugefügt

Gehen Sie zum Plugins / Wellness-Menü, um es zu finden.

# Bedienfeld

    -   Warnung : Meldung, wenn ein Fehler vorliegt (Bürste blockiert, voller Staubbehälter usw.)
    -   Beenden : Roboter stoppen
    -   Code Zustand : Technischen Code angeben
    -   Starten Sie das Öko-Haus : Starten Sie die Öko-Reinigung
    -   Starten Sie das Turbohaus : Starten Sie die Turbo-Reinigung
    -   Aufladen : Verantwortlich oder nicht
    -   Zustand : Statusmeldung (bereit zum Reinigen, während der Reinigung, angehalten usw.)
    -   Pause : Halten Sie den Roboter an
    -   Programmierung : Wird verwendet, um herauszufinden, ob eine Programmierung ausgeführt wird (ordentliche Programmierung)
    -   Aktualisieren : Informationen aktualisieren
    -   Zusammenfassung : Reinigung fortsetzen (falls angehalten)
    -   Zurück zur Basis : Rückkehr zur Abreise (falls in der Pause)
    -   Auf der Station : Lässt Sie wissen, ob sich der Roboter auf dem Dock befindet oder nicht

Alle diese Befehle sind über Szenarien und über das Dashboard verfügbar


## Wie werden die Nachrichten aktualisiert?

Die Informationen werden alle 15 Minuten und nach jeder von Jeedom ausgeführten Aktion aktualisiert. Sie können sie bei Bedarf über ein Szenario mit dem Befehl refresh oder über den Bindestrich mit den Doppelpfeilen aktualisieren

# Faq

>**Ich erhalte die Fehlermeldung "robot_serial für den angegebenen Herstellernamen konnte nicht gefunden werden"**
>
> In der Konfiguration des Plugins (Plugins -> Management Plugins) muss gespeichert werden, damit die Erkennung Ihres Roboterstaubsaugers wiederhergestellt wird

>**Der Reinigungsbefehl funktioniert nicht, der Roboter verlässt die Basis und kehrt zu seiner Basis zurück oder er beachtet die Einschränkungen nicht (Karte)**
>
>Bei bestimmten Robotermodellen ist es unbedingt erforderlich, eine Navigationskarte / -palme zu definieren [hier](https://support.neatorobotics.com/hc/fr/articles/360009513113-Comment-cr%C3%A9er-un-plan-d-%C3%A9tage-) um es zu tun
