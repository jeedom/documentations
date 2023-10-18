# Téléinfo SME-SMI-Plugin

Das Plugin **Teleinfo KMU-SMI** ermöglicht das Auslesen und Interpretieren von Teleinformationen von SME-PMI-kommunizierenden Industriezählern, die in Reihe geschaltet sind (USB, GPIO)).

# Configuration

Wie jedes Jeedom-Plugin ist das Plugin **Teleinfo KMU-SMI** muss nach der Installation aktiviert werden.

## Plugin-Setup

Sobald die Abhängigkeiten korrekt installiert sind, wählen Sie einfach den seriellen Port aus, an den das Messgerät angeschlossen ist, und speichern Sie dann die Konfiguration. Anschließend kann der Daemon gestartet werden.

## Gerätekonfiguration

Die Ausstattung rund um den Zähler wird in Jeedom automatisch erstellt, nachdem der Daemon gestartet und ein erster vollständiger Frame empfangen wurde. Hinsichtlich der Ausstattung ist keine besondere Konfiguration festzulegen.

# Commandes

Auch Bestellungen werden automatisch erstellt, basierend auf den erhaltenen Informationen, insbesondere dem Preiszeitraum.

>Beispiel :
>![Fliesenbeispiel](./images/tile.png)
