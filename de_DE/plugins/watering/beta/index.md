# Bewässerung)

>**WICHTIG**
>
>Dieses Plugin ist nicht "benutzerfreundlich", es ist komplex zu erlernen und wird lange brauchen, um ein zufriedenstellendes Ergebnis zu erzielen

## Description

Das Prinzip des Plugins ist wie folgt, der Bewässerungsbedarf hängt davon ab :

- die Pflanze : mit Sprinklerköpfen mit variablem Durchfluss verwaltet, um die Bewässerung entsprechend den Pflanzen auszugleichen
- die Sonne die da war
- die Temperatur, die er gemacht hat
- der Regen ist gefallen

Wir kommen zu einer Bewässerungsprozentsatzformel : (C1 * Sonnenschein + C2 * Temperatur - C3 * Regen) + C4. Dies ist die nicht benutzerfreundliche Seite des Plugins, da es die Koeffizienten nicht für Sie finden kann, also müssen Sie nach und nach dorthin gehen.

Du kannst sehen [Hier](https://blog.jeedom.com/5529-gestion-de-larrosage/) ein Beispiel für die Verwendung des Plugins.

## Configuration

Das Plugin hat keine spezifische Konfiguration

## Equipement

### Allgemein

Hier legen Sie den Namen des Geräts fest, ob es aktiv ist oder nicht, die Sichtbarkeit...

### Arrosage

Hier die Befehle, um mit dem Gießen zu beginnen, es zu schneiden und den Status zu sehen.

### Capteurs

Hier geben Sie den Außenlichtsensor (mit der Schwelle, über der es als sonnig gilt), den Temperatur- und Regensensor (der den Regen der letzten 24 Stunden angibt) an).

### Configuration

Hier hast du : 

- der Bewässerungsstart-Cron (der mehrere sein kann))
- die Grunddauer der Bewässerung
- keine Bewässerungsgrenze, wenn es mehr als XX mm geregnet hat
- die Bewässerungsgrenze, wenn die Durchschnittstemperatur einen bestimmten Schwellenwert nicht überschritten hat
- eine kostenlose Nicht-Bewässerungsbedingung (hier stütze ich mich auf den Bodenfeuchtesensor)
- ein Bewässerungsverbot, wenn nicht mehr als XX Minuten Sonnenschein vorhanden sind
- das ist ein bisschen speziell : on peut spécifier au plugin « si l'arrosage se fait après une certaine heure, prendre les données sur XX heures au lieu de la journée en cours ». Dies ist zum Beispiel sinnvoll, wenn wir morgens gießen, um die Daten vom Vortag zu nehmen, anstatt die seit 00:00 (was keinen Sinn machen würde, da nachts nicht zu viel Sonne scheint .)).

Schließlich kommt der komplizierte Teil der Koeffizienten. Hier zwei Spalten : eine für die Berechnung in der normalen Zeit und eine für die Berechnung, wenn wir die letzten XX Stunden nehmen (also der Fall, in dem es morgens gegossen wird)). Natürlich kann ich dir dazu nicht allzu viele Ratschläge geben, es ist wirklich eine Verfeinerung nach und nach.

## Panel

Wenn Sie das Panel in der Konfiguration von jeedom aktivieren, können Sie eine Seite haben, die Ihnen den aktuellen Status der Ausrüstung anzeigt, die die Bewässerung verwaltet, sowie eine Grafik mit der Anzahl der Sonnenstunden, der Regenmenge und der Bewässerungszeit.

## Widget

Wir sehen die letzte Bewässerungsdauer, die Sonnenscheindauer, die Regenmenge, den zuletzt praktizierten Bewässerungsprozentsatz, die nächste geschätzte Bewässerungsdauer und den Status. Sie können die Bewässerung auch für den aktuellen Tag verbieten, die Bewässerung stoppen, im erzwungenen Modus starten oder gemäß der Berechnung zum Zeitpunkt T . starten.