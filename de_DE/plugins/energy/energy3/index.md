# Energie-Plugin

Plugin, mit dem Sie ein globales Diagramm der häuslichen Energie (Wasser, Gas, Strom, Stromproduktion) anzeigen können).

Außerdem wird ein Dashboard angezeigt, das die Leistung eines Solarpanelsystems, den Verbrauch (Wasser, Gas und Strom) sowie Einzelheiten zum Stromverbrauch bestimmter Geräte anzeigt (natürlich ist ein Modul zur Messung erforderlich))

Für diejenigen, die über Solarenergie verfügen, kann es Ihnen auch die Produktionsprognose gemäß den Eigenschaften Ihrer Anlage anzeigen (auszufüllen)

Bitte beachten Sie, dass das Plugin keine Kostenberechnung durchführt und dies auch nicht tun wird (dies ist und wird nicht sein Zweck sein))

Um zu funktionieren, müssen Sie über Module verfügen, die diese Informationen hochladen :

## Gaz

- Verbrauchstag
- Sofortiger Verbrauch

## Eau

- Verbrauchstag
- Sofortiger Verbrauch

## Electricité

- Verbrauchstag
- Sofortiger Verbrauch

Wenn Sie Sonnenkollektoren haben, brauchen Sie mehr : 

- Netzstromimport
- Netzstromexport
- Produktionstag
- Nettoleistung

>**WICHTIG**
>
>Abhängig von Ihren Bestellungen müssen Sie möglicherweise die Einheit auf der Bestellkonfigurationsseite der von Ihnen erstellten Energieausrüstung anpassen

## Einzelheiten

Für Strom ist es möglich, Verbraucher in der Registerkarte „Details“ anzugeben, es kann sich entweder um einen Leistungstypbefehl (muss dann protokolliert werden) oder um einen Verbrauchstypbefehl handeln. Handelt es sich um den absoluten Verbrauch (kein Reset um Mitternacht) ist nichts weiter zu tun, handelt es sich um einen Verbrauch pro Tag (Reset um Mitternacht) muss das Häkchen in der Endzeile "Verbrauch pro Tag (wenn Wh oder kWh)"

# Panel

Um die Historien, Produktionsprognosen und andere Dinge anzuzeigen, müssen Sie auf der Plugin-Konfigurationsseite (Plugins -> Plugin-Verwaltung) sorgfältig überlegen, das Panel zu aktivieren (auf dem Desktop und/oder auf Mobilgeräten) und dann die Seite aktualisieren (F5). Dann finden Sie zu Hause das Plugin-Panel.
