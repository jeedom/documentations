# Lichtmanager)

## Description

Mit diesem Plugin können Sie das Licht je nach Anwesenheit einer Person und des Außenlichts ein- oder ausschalten. Es ist in der Lage, die Verzögerung nach der Abwesenheit von Bewegung zu verwalten. Es verwaltet auch das Konzept der Debryage, um das Licht nicht zu früh auszuschalten, wenn Sie es manuell eingeschaltet haben und es keine Bewegung gibt.

## Configuration

Das Plugin hat keine spezifische Konfiguration

## Equipement

### Allgemein

Hier legen Sie den Namen des Geräts fest, ob es aktiv ist oder nicht, die Sichtbarkeit...

### Hell

Hier müssen Sie den Befehl geben, das Licht ein- und auszuschalten und den Status zu kennen. Dieses Plugin funktioniert nur mit Lampen mit binärer Statusrückmeldung (ein oder aus)).

### Mouvement

Dort definieren Sie Ihre Bewegungsmelder, Sie können so viele haben, wie Sie möchten.

### Luminosité

Sie setzen Ihren Lichtsensor und die Schwelle, um das Licht einzuschalten. Es ist möglich, mehrere zu setzen. In diesem Fall wird das Licht während der Bewegung eingeschaltet, wenn einer der Melder den Schwellenwert unterschreitet.

>**HINWEIS**
>
>Sie können das Plugin auch bitten, den minimalen Wert der Helligkeit über die letzten X Minuten abzurufen, in diesem Fall ist es unbedingt erforderlich, dass die Helligkeitssteuerung protokolliert wird.

### Temporisation

Hier kannst du :

- Stellen Sie die Ausschaltverzögerung ein, wenn keine Bewegung mehr erfolgt
- Aktivieren oder deaktivieren Sie die Ausschaltung, wenn das Licht nicht im erwarteten Zustand ist (jemand hat es eingeschaltet))
- Die Zeit bevor das Plugin das Lichtmanagement übernimmt 

Bei den letzten 2 Parametern ist der Fall ganz einfach : jemand schaltet das Licht ein geht vor dem Detektor vorbei und geht dann, nach XX Sekunden gibt der Detektor die Information zurück, dass niemand da ist, dann sollte nach 1 Minute (in meinem Fall) das Plugin das Licht ausschalten. Bei der Deaktivierung tut das Plugin nichts und wartet 5 Minuten, bevor es die automatische Verwaltung wieder aufnimmt und das Licht ausschaltet. </p>
