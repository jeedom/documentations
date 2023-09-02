# Energie-Plugin

Plugin, das es ermöglicht, ein globales Diagramm der Energien des Hauses (Wasser, Gas, Strom, Stromerzeugung) anzuzeigen).

Es zeigt auch ein Dashboard an, das die Leistung einer Solaranlage, den Verbrauch (Wasser, Gas und Strom) sowie die Details des Stromverbrauchs bestimmter Geräte anzeigt (muss natürlich ein Modul haben, um es zu messen)

Für diejenigen, die über Solarenergie verfügen, kann es Ihnen auch die Produktionsprognose gemäß den Eigenschaften Ihrer Anlage anzeigen (auszufüllen)

Bitte beachten Sie, dass das Plugin keine Kosten berechnet und berechnet (es ist nicht und wird nicht sein Zweck sein))

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
>Abhängig von Ihren Befehlen müssen Sie möglicherweise die Einheit auf der Befehlskonfigurationsseite für das von Ihnen erstellte Energiegerät anpassen

## Einzelheiten

Für Strom ist es möglich, Verbraucher in der Registerkarte „Details“ anzugeben, es kann sich entweder um einen Leistungstypbefehl (muss dann protokolliert werden) oder um einen Verbrauchstypbefehl handeln. Handelt es sich um den absoluten Verbrauch (kein Reset um Mitternacht) ist nichts weiter zu tun, handelt es sich um einen Verbrauch pro Tag (Reset um Mitternacht) muss das Häkchen in der Endzeile "Verbrauch pro Tag (wenn Wh oder kWh)"

# Panel

Um die Historien, Produktionsprognosen und andere anzuzeigen, müssen Sie daran denken, auf der Plugin-Konfigurationsseite (Plugin -> Plugin-Verwaltung) das Panel (auf dem Desktop und/oder Mobilgerät) zu aktivieren und dann die Seite zu aktualisieren (f5). Dann finden Sie zu Hause das Panel des Plugins.