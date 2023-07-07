# Enphase Envoy Plugin

Plugin zum Sammeln von Photovoltaik-Informationen von Envoy-Gateways

# Configuration

Um das Plugin zu konfigurieren, müssen die folgenden Informationen eingegeben werden :

- Gateway-IP-Adresse gesendet
- Gesandtenpasswort (falls dies nicht geändert wurde, sind es die letzten 6 Zeichen der Seriennummer.)

Durch Klicken auf die Schaltfläche "Synchronisieren" werden dann alle Geräte automatisch erstellt.

# Informationen gemeldet

Mit dem Plugin können Sie die folgenden Informationen melden (wenn Sie einen Envoy-s Metered haben) :

- Allgemein (jede Minute aktualisieren)
    - Anzahl der Mikro-Wechselrichter
    - Anzahl der Batterien
    - Batteriestatus (Laden / Entladen / Leerlauf))
    - % der Batterieladung
    - Batterieproduktion (in W)
    - Sofortige Produktion (in W)
    - Tägliche Produktion (in Wh)
    - Produktion der letzten 7 Tage (in Wh)
    - Produktion seit Inbetriebnahme (in Wh)
    - Momentane Gesamtleistung (in W)
    - Täglicher Verbrauch (in Wh)
    - Verbrauch der letzten 7 Tage (in Wh)
    - Verbrauch seit Inbetriebnahme (in Wh)
    - Momentane Nettoleistung (in W)
    - Täglicher Nettoverbrauch (in Wh)
    - Nettoverbrauch der letzten 7 Tage (in Wh)
    - Nettoverbrauch seit Inbetriebnahme (in Wh)
- Für jeden Mikro-Wechselrichter (alle 5 Minuten aktualisieren)
    - Vorausgesetzt (Ja / Nein)
    - Kommunikation (Ja / Nein)
    - Produktion (Ja / Nein)
    - Leistung (in W)
    - Maximale Leistung (in W)
- Für jede Batterie (alle 5 Minuten aktualisieren)
    - Vorausgesetzt (Ja / Nein)
    - Kommunikation (Ja / Nein)
    - Produktion (Ja / Nein)
    - Leistung (in W)
    - Maximale Leistung (in W)
    - % Last
    - Maximale Temperatur (in ° C)
