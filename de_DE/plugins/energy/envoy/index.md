Description
===

Plugin zum Sammeln von Photovoltaik-Informationen von Envoy-Gateways

Configuration
===

Um das Plugin zu konfigurieren, müssen die folgenden Informationen eingegeben werden :

- Gateway-IP-Adresse gesendet
- Absenderpasswort (falls es nicht geändert wurde, sind dies die letzten 6 Zeichen der Seriennummer.)

Durch Klicken auf die Schaltfläche "Synchronisieren" werden dann alle Geräte automatisch erstellt.

Informationen gemeldet
===

Mit dem Plugin können Sie die folgenden Informationen hochladen (wenn Sie einen Envoy-s Metered haben) :

__ * - Allgemein (jede Minute wechseln) * __

    - Anzahl der Mikro-Wechselrichter
    - Anzahl der Batterien
    - Batteriestatus (Laden / Entladen / Leerlauf)
    - % der Batterieladung
    - Batterieproduktion (in W)
    - Sofortige Produktion (in W)
    - Produktion des Tages (in Wh)
    - Produktion der letzten 7 Tage (in Wh)
    - Produktion seit Inbetriebnahme (in Wh)
    - Momentane Gesamtleistung (in W)
    - Verbrauch des Tages (in Wh)
    - Verbrauch der letzten 7 Tage (in Wh)
    - Verbrauch seit Inbetriebnahme (in Wh)
    - Momentane Nettoleistung (in W)
    - Täglicher Nettoverbrauch (in Wh)
    - Nettoverbrauch der letzten 7 Tage (in Wh)
    - Nettoverbrauch seit Inbetriebnahme (in Wh)

  __ * - Für jeden Mikro-Wechselrichter (Schicht alle 5 Minuten) * __

    - Vorausgesetzt (Ja / Nein)
    - Kommunikation (Ja / Nein)
    - Produktion (Ja / Nein)
    - Leistung (in W)
    - Maximale Leistung (in W)

  __ * - Für jede Batterie (alle 5 Minuten wechseln) * __

    - Vorausgesetzt (Ja / Nein)
    - Kommunikation (Ja / Nein)
    - Produktion (Ja / Nein)
    - Leistung (in W)
    - Maximale Leistung (in W)
    - % Last
    - Maximale Temperatur (in ° C)
