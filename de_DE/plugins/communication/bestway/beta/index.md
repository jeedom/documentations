# Bestway Plugin

Plugin zur Steuerung des Bestway Lazy Spa Milan über Jeedom.

Es verwaltet automatisch die Filtration und ihre Dauer entsprechend der Wassertemperatur

## Aufbau 

Geben Sie einfach Ihre Bestway-Anmeldeinformationen ein

## Compatibilité

Sie finden [Hier](https://compatibility.jeedom.com/index.php?v=d&p=home&plugin=bestway) die Liste der Module, die mit dem Plugin kompatibel sind

## Automatische Filterung

Wenn Sie das Kontrollkästchen Automatische Filterverwaltung aktivieren, berechnet das Plugin zu Beginn jeder Stunde selbst die erforderliche Filterzeit gemäß der durchschnittlichen Wassertemperatur der vorherigen Stunde (basierend auf der Formel Filterzeit in Stunden = Wassertemperatur / 2)