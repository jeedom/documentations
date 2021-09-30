# Neato Plugin

# Description

Mit diesem Plugin können Sie die Statusinformationen Ihres NeatoBotvac Connected Staubsaugers abrufen und steuern.

# Configuration

# Installation / Erstellung

Um das Plugin verwenden zu können, müssen Sie es wie jedes Jeedom-Plugin herunterladen, installieren und aktivieren.

Danach müssen Sie Ihr Neato-Konto eingeben *(E-Mail und Passwort)*.

Nach dem Speichern wird Ihr Neato automatisch erkannt und Ihrem Jeedom hinzugefügt.

Gehen Sie zum Menü Plugins → Comfort, um darauf zuzugreifen.

# Bedienfeld

    -   **Warnung** : Meldung, wenn ein Fehler vorliegt (Bürste blockiert, Staubbehälter voll usw.)).
    -   **Beenden** : Roboter stoppen.
    -   **Code Zustand** : Technischen Code angeben.
    -   **Starten Sie das Öko-Haus** : Starten Sie die Öko-Reinigung.
    -   **Starten Sie das Turbohaus** : Starten Sie die Turbo-Reinigung.
    -   **Aufladen** : Verantwortlich oder nicht.
    -   **Zustand** : Statusmeldung (bereit zum Reinigen, Reinigen, angehalten, etc).
    -   **Pause** : Halten Sie den Roboter an.
    -   **Programmierung** : Wird verwendet, um herauszufinden, ob die Programmierung ausgeführt wird (saubere Programmierung)).
    -   **Aktualisieren** : Ermöglicht das Aktualisieren der Informationen.
    -   **Zusammenfassung** : Setzen Sie die Reinigung fort *(wenn angehalten)*.
    -   **Zurück zur Basis** : zurück zum Start *(wenn angehalten)*.
    -   **Auf der Station** : Lässt Sie wissen, ob sich der Roboter auf dem Dock befindet oder nicht.

Alle diese Befehle sind über Szenarien und im Dashboard verfügbar.

## Wie werden die Nachrichten aktualisiert?

Die Informationen werden alle 15 Minuten und nach jeder von Jeedom ausgeführten Aktion aktualisiert. Sie können sie bei Bedarf über ein Szenario mit dem Befehl refresh oder über das Dahsboard aktualisieren, indem Sie auf die Doppelpfeile klicken.

# FAQ

>**Ich erhalte die Fehlermeldung "robot_serial für den angegebenen Herstellernamen konnte nicht gefunden werden"** :
>
> Sie müssen in der Konfiguration des Plugins (Plugins -> Plugins-Verwaltung) auf die Schaltfläche "Speichern" klicken, damit der Erkennungsvorgang Ihres Roboterstaubsaugers neu gestartet wird.

>**Der Reinigungsbefehl funktioniert nicht, der Roboter geht aus und kehrt zu seiner Basis zurück oder er beachtet die Einschränkungen nicht (Karte))** :
>
>Bei einigen Robotermodellen ist es unbedingt erforderlich, einen Karten- / Navigationsplan zu definieren. Sie finden die Informationen [hier](https://support.neatorobotics.com/hc/fr/articles/360009513113-Comment-cr%C3%A9er-un-plan-d-%C3%A9tage-).
