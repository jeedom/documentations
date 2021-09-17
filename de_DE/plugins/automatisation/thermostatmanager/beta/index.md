# Plugin für die Thermostatverwaltung

## Description

Mit diesem Plugin können Sie den Thermostat in einem Raum in Abhängigkeit von der An- oder Abwesenheit einer Person, dem Modus (z. B. Tag / Nacht) und den geöffneten Fenstern / Türen / Türen verwalten)

## Configuration

Das Plugin hat keine spezifische Konfiguration

## Equipement

### Allgemein

Sie haben hier (außer Gerätename, aktiv / inaktiv, sichtbar / unsichtbar...) : 

- "Nichts automatisch tun, wenn" : Wenn das Haus jemals im Sommermodus * ist oder wenn das Haus im Abwesenheitsmodus ist (also niemand anwesend ist) oder wenn wir außerhalb der Arbeitszeiten sind, dann keine Kontrolle über das Plugin (da das Büro auch als Schlafzimmer dient, ist es bequemer bei Nacht)
- "Übernimm die Kontrolle nach (min), ziehe für immer nichts an" : weist das Plugin an, die Kontrolle über den Raumthermostat nach 30 Minuten wieder zu übernehmen, wenn ihn jemand berührt hat

### Thermostat

Hier geben Sie den Befehl zur Aktion und den Status des Thermostats an

### Mouvement

Hier definieren wir den Begriff der Präsenz in einem Raum. Dies geschieht mit einem einfachen Präsenzsensor, aber wir wollten den Anstieg der Sollwerte vermeiden, wenn wir nur durch den Raum gehen. Wir haben also Parameter, um festzulegen, was eine Anwesenheit ist, die einzustellende Solltemperatur und die Verzögerung, bevor der vorherige Wert wiederhergestellt wird. Wenn beispielsweise in den letzten 5 Minuten mehr als 70 % der Zeit anwesend war, stellen Sie den Sollwert auf 20 . ein.5 und wenn dann 10 Minuten lang niemand da ist, dann setze den Sollwert auf den ursprünglichen Wert zurück

### Ouverture

Sie geben hier Ihre Öffnung sowie die verschiedenen Parameter an
- Zeit vor Sollwertänderung während einer Öffnung
- Anweisung zu setzen
- Verzögerung vor der Rückkehr zum vorherigen Sollwert nach dem Schließen

### Commande

Hier können Sie je nach Modus nur Modusbefehle vor dem Sollwert erstellen