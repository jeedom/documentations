# Thermostat-Plugin

# Beschreibung

Mit diesem Plugin können Sie Thermostate erstellen und verwalten, um die Heizung in Ihrem Zuhause zu steuern. Es verfügt über zwei wählbare Betriebsmodi:

-   Der **Hysterese**-Modus dient dazu, die Heizung in Abhängigkeit von der Raumtemperatur ein- und auszuschalten, wobei ein Schwellenwert als Bezugspunkt dient, der dem Sollwert entspricht. Die Hysterese verhindert zu häufiges Ein- und Ausschalten, wenn die Temperatur nahe am Sollwert liegt.
-   Der **Zeitmodus** berechnet einen Heizprozentsatz für einen vordefinierten Zeitzyklus unter Berücksichtigung der Abweichungen zwischen dem Sollwert und den Innen- und Außentemperaturen (Wärmedämmung). Dieser Modus ist präziser, verfügt über eine Lernfunktion zur automatischen Anpassung der Koeffizienten, erfordert jedoch möglicherweise einige manuelle Einstellungen, um ihn an Ihre Anlage anzupassen. Wichtig: Damit der Zeitmodus funktioniert, sind unbedingt ein Innen- UND ein Außentemperaturfühler erforderlich.

# Konfiguration

Dieses Plugin dient zur Erstellung von Thermostaten in Jeedom. Es ermöglicht die Steuerung der Heizung, der Klimaanlage oder beider Systeme gleichzeitig.

Der Vorteil gegenüber einem herkömmlichen Thermostat besteht darin, dass er sich vollständig in Ihr Hausautomationssystem integrieren lässt. Neben der Temperaturregelung – denn das ist ja in erster Linie seine Aufgabe – kann der Thermostat mit allen Geräten im Haus interagieren.

Zu den Funktionen gehören:

-   die Berücksichtigung der Außentemperatur und damit des Dämmkoeffizienten des Hauses,
-   ein Regelungssystem, das lernt, um die Regelung zu optimieren,
-   die Möglichkeit, die Fenster und Türen zu steuern, um den Thermostat auszuschalten,
-   Fehlermanagement bei Geräten, Temperatursensoren und Heizgeräten,
-   Umfassende Programmierung mit dem Kalender-Plugin, insbesondere mit der Möglichkeit, die Änderung des Sollwerts vorwegzunehmen, damit die Temperatur zur programmierten Uhrzeit erreicht wird (Smartstart)

Zunächst zeigen wir Ihnen die Implementierung, gehen dann detailliert auf die verschiedenen Einstellungsmöglichkeiten des Thermostats ein und erläutern schließlich anhand einiger Anwendungsbeispiele, wie man dessen Funktionen in Kombination mit anderen Plugins oder mithilfe von Szenarien erweitern kann.

## Konfiguration mit wenigen Klicks

Der Jeedom-Thermostat ist sehr leistungsstark, aber für den herkömmlichen Einsatz ist die Einrichtung wirklich einfach und schnell, sobald man die wesentlichen Schritte verstanden hat:

-   Festlegung des Thermostat-Reglers (Hysterese oder zeitgesteuert). Dabei handelt es sich um die Wahl des Regelalgorithmus.
-   Konfiguration und Betriebsbereich: nur Heizen, nur Kühlen oder beides, minimale und maximale Betriebstemperaturen.
-   Die Festlegung der Maßnahmen, die der Thermostat zum Heizen, Kühlen oder Abschalten ausführen soll.

Anschließend gibt es verschiedene Registerkarten:

-   Die Konfiguration der Modi legt vorgegebene Solltemperaturen fest. Zum Beispiel den Komfortmodus bei 20 °C und den Eco-Modus bei 18 °C. Es kann auch Modi wie „Tag“, „Nacht“, „Urlaub“, „Abwesenheit“ usw. geben … Hier erkennen Sie bereits die Möglichkeiten zur individuellen Anpassung des Plugins.
-   Um die Funktionsweise des Thermostats zu optimieren, können Sie außerdem Öffnungen konfigurieren, die die Regelung vorübergehend unterbrechen (beispielsweise kann ein offenes Fenster die Heizung ausschalten). Die Einstellung dieser Unterbrechung lässt sich hier ganz einfach vornehmen.
-   Die Verwaltung von Fehlermodi für Temperatursensoren oder die Heizung ermöglicht es, Maßnahmen festzulegen, die im Falle eines Betriebs mit eingeschränkter Leistung auszuführen sind.
-   Auf der Registerkarte „Erweiterte Einstellungen“ können Sie die Parameter für die Heizungsregelung anpassen.
-   Wenn Sie zudem über das Plugin „Agenda“ verfügen, können Sie die Moduswechsel direkt über die Registerkarte „Programmierung“ einrichten.

Ihr Thermostat ist nun betriebsbereit und lässt sich durch die Verwendung von Szenarien oder in Kombination mit anderen Plugins (Kalender, virtueller Nutzer, Anwesenheit usw.) nahtlos in Ihr Hausautomationssystem integrieren. Folgendes wird standardmäßig auf dem Dashboard angezeigt:

![Ansicht auf dem Dashboard](./images/thermostat.png)

Mit dem Schloss-Symbol auf dem Widget lässt sich der Thermostat bei unvorhergesehenen Ereignissen – wie Urlaub, Besuch usw. – auf einen bestimmten Sollwert festlegen.

## Die Entwicklung eines Thermostats im Detail

Um einen neuen Thermostat anzulegen, rufen Sie die Konfigurationsseite auf, indem Sie das Menü **Plugins → Komfort** öffnen und **Thermostat** auswählen. Klicken Sie oben links auf die Schaltfläche **Hinzufügen** und geben Sie den gewünschten Namen für Ihren Thermostat ein.

![Allgemeine Konfiguration](./images/thermostat_config_générale.png)

Zunächst geben wir die allgemeinen Einstellungen des Thermostats ein. Diese finden Sie oben links im Abschnitt „Allgemein“. Hier müssen Sie das übergeordnete Objekt, die Aktivierung und die Sichtbarkeit des Thermostats festlegen – Informationen, die jedem Jeedom-Nutzer bekannt sein dürften.

## Die Wahl des Algorithmus für den Thermostat

![Wahl des Algorithmus](./images/thermostat31.png)

Auf diesem Bild ist der Antrieb des Thermostats zu sehen. Für die Temperaturregelung stehen zwei Algorithmen zur Verfügung.

Wenn Sie den Modus **Hysterese** auswählen, schaltet sich Ihre Heizung ein, sobald die Temperatur unter den Sollwert minus der Hysterese fällt, und sie schaltet sich aus, sobald die Temperatur den Sollwert plus der Hysterese überschreitet.

![Funktionsprinzip des Hysterese-Modus](./images/PrincipeHysteresis.png)

Wenn man beispielsweise die Hysterese auf 1 °C einstellt und der Sollwert 19 °C beträgt, schaltet sich die Heizung ein, sobald die Temperatur unter 18 °C fällt, und schaltet sich aus, sobald sie 20 °C erreicht.

Als Parameter müssen der Hysteresewert in °C und der Befehl zum Abrufen des Temperaturmesswerts angegeben werden. Die Hysterese wird entsprechend der Genauigkeit des Sensors eingestellt; bei einem Sensor mit einer Genauigkeit von 0,5 °C ist beispielsweise eine Hysterese von 0,2 °C ein guter Kompromiss.

Durch Aktivieren des Kontrollkästchens **Positive Hysterese** kann nur die positive Hysterese berücksichtigt werden. Im Modus „Heizen“ schaltet sich der Thermostat dann ein, sobald die Raumtemperatur unter den Sollwert fällt, bzw. im Modus „Kühlen“, sobald die Raumtemperatur über den Sollwert steigt.

![Hysterese](./images/thermostat1.png)

> **INFORMATION**
>
> Die Einstellungen zur Hysterese finden Sie auf der Registerkarte **Erweitert**.

Im **Zeitmodus** wird die Heiz- oder Klimatisierungssteuerung auf einen vordefinierten Zyklus eingestellt, und die Ausführungsdauer des Befehls hängt von der Abweichung zwischen dem Sollwert und der vom Sensor gemessenen Temperatur ab. Der Algorithmus berechnet außerdem die Aufheiz- (oder Kühl-)zeit pro Zyklus in Abhängigkeit von der Trägheit und der Isolierung des Raums.

![Funktionsweise des Zeitmodus](./images/PrincipeTemporel.png)

Je länger die Zykluszeit ist, desto langsamer erfolgt die Regelung. Umgekehrt führt eine zu kurze Zykluszeit zu häufigen Schaltvorgängen Ihrer Heizungsanlage, die möglicherweise nicht genügend Zeit hat, den Raum effizient zu beheizen. Es wird empfohlen, diese Zykluszeit nicht zu stark zu verkürzen (akzeptable Werte liegen zwischen 30 und 60 Minuten).

Diese Art der Regelung ist optimierter, erhöht den Komfort und ermöglicht erhebliche Energieeinsparungen.

## Die allgemeine Konfiguration

Neben der Betriebsart des Thermostats können Sie festlegen, ob das Thermostat im Heiz-, Kühl- oder im kombinierten Modus betrieben wird. Anschließend geben Sie den Einsatzbereich an: Die Mindest- und Höchstwerte legen die möglichen Sollwerte fest, die im Widget verfügbar sind.

![Einrichtung des Betriebs](./images/configFonctionnement.png)

Anschließend müssen die Befehle festgelegt werden, mit denen die Temperaturen gemessen werden können. Beachten Sie, dass der Zeitmodus unbedingt die Außentemperatur kennen muss. Wenn Sie keinen Außensensor haben, kann diese vom Plugin „Wetter“ bereitgestellt werden.

![Auswahl der Fühler](./images/selectionsondes.png)

> **TIPP**
>
> Die Felder `Température minimale` und `Température maximale` legen den Betriebsbereich des Thermostats fest, außerhalb dessen ein Fühlerfehler ausgelöst wird *(siehe unten den Abschnitt über Fehlermaßnahmen*).

Es ist außerdem möglich, den täglichen Verbrauch Ihrer Heizung in kWh anzugeben *(optional)*, wodurch eine Leistungsangabe Ihrer Heizung angezeigt wird, die sich aus der Berechnung **Verbrauch/DJU** *(standardisierte Gradtage)* ergibt. Sie können außerdem einen beliebigen Befehl Ihrer Wahl auf dem Thermostat anzeigen lassen, indem Sie ihn in das Feld **Benutzerdefinierter Befehl** eingeben.

## Aktionen

Alles, was die Steuerung des Heizkörpers oder der Klimaanlage betrifft, wird auf der Registerkarte **Aktionen** beschrieben. Dort können mehrere Aktionen definiert werden, wodurch unser Thermostat verschiedene Geräte steuern kann (z. B. im Falle eines zonenweisen Betriebs oder zur Steuerung eines anderen Thermostats).

![Aktionen an Geräten](./images/actionssurappareil.png)

Aktionen sind Vorgänge, die das Heizen, Kühlen (Klimaanlage) oder das Stoppen der Steuerung ermöglichen. Bei jeder Änderung des Sollwerts kann eine zusätzliche Aktion vorgesehen werden, sei es im manuellen oder im automatischen Modus.

## Modi: Der Ausgangspunkt für die Automatisierung

Die Modi (definiert auf der Registerkarte **Modi**) sind voreingestellte Werte des Thermostats, die Ihrem Lebensrhythmus entsprechen. Der Modus *Nacht* oder *Eco* sorgt beispielsweise für die gewünschte Temperatur, wenn alle schlafen. Der Modus *Tag* oder *Komfort* legt fest, wie sich der Thermostat verhält, um eine angenehme Temperatur zu gewährleisten, wenn Sie zu Hause sind. Hier ist nichts festgeschrieben. Sie können so viele Modi festlegen, wie Sie möchten, um sie über Szenarien zu nutzen (darauf kommen wir später noch zurück).

In der Abbildung unten hat der Modus *Komfort* einen Sollwert von 19 °C, und für den Modus *Eco* ist der Thermostat auf 17 °C eingestellt. Der Modus *Urlaub* stellt den Thermostat bei längerer Abwesenheit auf 15 °C ein. Er ist auf dem Dashboard nicht sichtbar, da es sich um ein Szenario handelt, das alle Geräte auf *Urlaub* programmiert und somit den Thermostat in diesen Modus versetzt.

![Definition der Modi](./images/Definitionmodes.png)

Um einen Modus festzulegen, gehen Sie wie folgt vor:

-   Klicken Sie auf die Schaltfläche *Modus hinzufügen*,
-   Geben Sie diesem Modus einen Namen, zum Beispiel `Eco`,
-   Fügen Sie eine Aktion hinzu und wählen Sie den Befehl *Thermostat* Ihres Thermostats aus,
-   Stellen Sie die gewünschte Temperatur für diesen Modus ein,
-   Aktivieren Sie das Kontrollkästchen **Sichtbar**, damit dieser Modus im Thermostat-Widget auf dem Dashboard angezeigt wird.

>**WICHTIG**
>
>Achtung: Beim Umbenennen eines Modus müssen unbedingt die Szenarien und Geräte, die den alten Namen verwenden, überprüft und auf den neuen Namen umgestellt werden.

## Öffnungen: zum vorübergehenden Ausschalten des Thermostats

Nehmen wir an, Sie möchten Ihre Heizung oder Klimaanlage vorübergehend ausschalten, beispielsweise um den Raum zu lüften, für den der Thermostat aktiv ist. Um das Öffnen des Fensters zu erkennen, verwenden Sie einen Sensor, der am Flügel Ihres Fensters angebracht ist. So können Sie diese Unterbrechung vornehmen, indem Sie den Sensor im Konfigurationsregister „Öffnungen“ hinzufügen. Hier lassen sich zwei weitere Parameter einstellen: die Dauer des Öffnens und Schließens des Fensters, die die Unterbrechung bzw. die Wiederaufnahme des Thermostatbetriebs auslösen.

![Konfiguration der Öffnungen](./images/configouvertures.png)

Sie können festlegen, dass eine Benachrichtigung gesendet wird, wenn eines der auf dieser Seite angegebenen Fenster oder Türen länger als `XX` Minuten.

So konfigurieren Sie die Funktion beim Öffnen des Fensters:

-   Wählen Sie die Informationen des Öffnungssensors im Feld aus `Ouvrant`
-   Die Zeit bis zur Abschaltung des Thermostats nach dem Öffnen im Feld einstellen `Éteindre si ouvert plus de (min.) :`
-   Anpassung der Zeit nach dem Schließen des Fensters, nach der der Thermostat im Feld neu gestartet werden kann `Rallumer si fermé depuis (min.) :`
-   Klicken Sie auf die Schaltfläche *Speichern*, um die Erfassung der Öffnungsvorgänge zu speichern

> **TIPP**
>
> Es ist möglich, mehrere Öffnungen zu definieren. Dies ist erforderlich, wenn der Thermostat einen Bereich steuert, der aus mehreren Räumen besteht.

## Vorhersage eines verschlechterten Modus dank Fehlermanagement

Störungen können entweder von den Temperaturfühlern oder von der Heizungssteuerung herrühren. Der Thermostat kann einen Fehler erkennen, wenn die Temperatur über einen längeren Zeitraum vom Sollwert abweicht.

### Ausfall der Temperatursonde

Der Thermostat löst einen Fühlerfehler aus, wenn die letzte Temperaturerfassung zu lange zurückliegt, wenn die Innentemperatur unter dem eingestellten Mindestwert oder über dem eingestellten Höchstwert liegt oder wenn der Wert ungültig ist. Wenn der Fehler auftritt, kann das Gerät in einen vorgegebenen Betriebsmodus versetzt werden, beispielsweise um den Befehl für einen Heizkörper mit Steuerdraht zu erzwingen. Einfacher ausgedrückt: Durch das Versenden einer SMS oder einer Benachrichtigung wird man gewarnt und kann manuell eingreifen.

> **WICHTIG**
>
> Die `Délai entre 2 réceptions de T°` befindet sich auf der Registerkarte *Erweitert*. Diese Steuerung verwendet das Erfassungsdatum des Temperaturbefehls des Thermostats. Lassen Sie dieses Feld leer oder setzen Sie es auf `0` deaktiviert die Zeitüberwachung. Die Grenzwerte `Température minimale` und `Température maximale` befinden sich auf der Registerkarte *Ausstattung*; ein leeres Feld deaktiviert die entsprechende Steuerung.

![Ausfall der Fühler](./images/defaillancesonde.png)

So definieren Sie eine Fehleraktion:

-   Klicken Sie auf die Registerkarte *Fehler Fühler*,
-   Klicken Sie auf die Schaltfläche *Fehleraktion hinzufügen*
-   Wählen Sie eine Aktion aus und füllen Sie die zugehörigen Felder aus

Sie können mehrere Aktionen eingeben, die nacheinander ausgeführt werden. Bei komplexeren Aktionen können Sie ein Szenario verwenden *(eingeben `scenario` (ohne Akzent im Feld „Aktion“ eingeben und dann an eine andere Stelle klicken, um den Namen des Szenarios eingeben zu können)*.

In den Optionen für Fühlerausfall-Aktionen können die Benachrichtigungen mithilfe der folgenden Tags individuell angepasst werden:

| Tag | Inhalt |
| --- | --- |
| `#failure_message#` | Detaillierte Meldung mit dem Namen des Thermostats, den Ursachen, der Temperatur und den betroffenen Grenzwerten oder der Zeit und dem Datum des letzten Empfangs. |
| `#failure_reason#` | Codes der aktiven Ursachen, durch Kommas getrennt: `timeout`, `temperature_low`, `temperature_high`, `invalid_temperature`. |
| `#temperature#` | Zuletzt gemessener Temperaturwert. |
| `#last_collect#` | Datum der letzten Erfassung des Temperaturbefehls. |
| `#slider#` | Thermostat-Einstellung wie bisher. |

Zum Beispiel: Angaben machen `#failure_message#` in der Benachrichtigung ergibt sich `[Maison][Salon] : Température intérieure 32 °C supérieure au maximum autorisé 30 °C` oder `[Maison][Salon] : Aucune mise à jour de la température depuis 47 minutes (délai maximal : 30 minutes, dernière réception : …)`.

Der allgemeine Status bleibt bestehen `Défaillance sonde`. Details zum Fehler finden Sie in den Protokollen und in den Optionen der Aktionen über die oben genannten Tags.

Bestehende Aktionen bleiben erhalten. Ein anhaltender Fehler löst die Aktionen nicht bei jeder Überprüfung erneut aus; das Auftreten einer neuen Fehlerursache löst sie nur einmal aus, wobei eine Meldung angezeigt wird, die alle aktiven Fehler zusammenfasst. Bei Rückkehr zum Normalzustand wird jede Fehlerursache separat zurückgesetzt. Die Überprüfungen auf Zeitüberschreitungen und ungültige Werte werden von den Zeit- und Hysterese-Modulen gemeinsam durchgeführt; Überschreitungen der Min-/Max-Grenzwerte lösen ihre Aktionen weiterhin im Rahmen der periodischen Überprüfung aus.

### Ausfall der Heizung / Klimaanlage

Der ordnungsgemäße Betrieb der Heizung oder Klimaanlage hängt von einer genauen Einhaltung des Sollwerts ab. Der Thermostat analysiert über mehrere Zyklen hinweg die Temperaturentwicklung im Vergleich zum Sollwert und zu den Ausfallgrenzen für Heizen/Kühlen. Die absoluten Grenzwerte für die Mindest- und Höchsttemperatur ergeben sich aus dem oben beschriebenen Fühlerausfall.

> **WICHTIG**
>
> Die Einstellungen zur Erkennung einer Störung der Heizung/Klimaanlage befinden sich auf der Registerkarte *Erweitert*. Dabei handelt es sich um die `Marge de défaillance chaud` für die Heizung und die `Marge de défaillance froid` für die Klimatisierung.

![Ausfall der Heizung](./images/defaillancechauffage.png)

So definieren Sie eine Fehleraktion:

-   Klicken Sie auf die Registerkarte *Störung der Heizung/Klimaanlage*,
-   Klicken Sie auf die Schaltfläche *Fehleraktion hinzufügen*
-   Wählen Sie eine Aktion aus und füllen Sie die zugehörigen Felder aus

Sie können mehrere Aktionen eingeben, die nacheinander ausgeführt werden. Bei komplexeren Aktionen können Sie ein Szenario verwenden *(eingeben `scenario` (ohne Akzent im Feld „Aktion“ eingeben und dann an eine andere Stelle klicken, um den Namen des Szenarios eingeben zu können)*.

## Verwalten Sie Sonderfälle mit der erweiterten Thermostatkonfiguration

Diese Registerkarte enthält alle Einstellparameter des Thermostats im Zeitmodus. In den meisten Fällen ist es nicht erforderlich, diese Werte zu ändern, da die Selbstlernfunktion die Koeffizienten automatisch berechnet. Auch wenn sich der Thermostat an die meisten Situationen anpassen kann, ist es dennoch möglich, die Koeffizienten anzupassen, um eine für Ihre Anlage optimierte Konfiguration zu erzielen.

![Erweiterte Thermostat-Einstellungen](./images/configurationavancee.png)

Die Koeffizienten lauten wie folgt:

-   **Heiz- bzw. Kühlkoeffizient**: Hierbei handelt es sich um den Verstärkungsfaktor des Regelsystems. Dieser Wert wird mit der Differenz zwischen dem Sollwert und der gemessenen Raumtemperatur multipliziert, um die Heiz- bzw. Kühlzeit zu berechnen.
-   **Heizungs-Lernphase / Kühlungs-Lernphase**: Dieser Parameter gibt den Fortschritt des Lernvorgangs an. Der Wert 1 kennzeichnet den Beginn des Lernvorgangs; der Algorithmus nimmt eine Grobeinstellung der Koeffizienten vor. Mit steigendem Wert dieses Parameters wird die Einstellung verfeinert. Der Wert 50 kennzeichnet das Ende des Lernvorgangs.
-   **Heizungsisolierung / Klimaanlagenisolierung**: Dieser Koeffizient wird mit der Differenz zwischen dem Sollwert und der gemessenen Außentemperatur multipliziert, um die Heiz- bzw. Kühlzeit zu berechnen. Er gibt den Einfluss der Außentemperatur auf die Heiz- bzw. Kühlzeit an und ist bei einem gut isolierten Raum in der Regel kleiner als der Heiz- bzw. Kühlkoeffizient.
-   **Lernfunktion „Wärmedämmung“ / Lernfunktion „Kältedämmung“**: gleiche Funktion wie oben, jedoch für die Dämmkoeffizienten.
-   **Heizungs-Offset (%) / Klimaanlagen-Offset (%)**: Der Heizungs-Offset ermöglicht es, *interne Wärmequellen* zu berücksichtigen. Normalerweise sollte er nicht fest eingestellt sein, aber es wird davon ausgegangen, dass der Lernvorgang den dynamischen Anteil in die beiden anderen Koeffizienten einbezieht. Zu den *internen Wärmequellen* gehören beispielsweise ein Computer, der beim Einschalten einen Temperaturanstieg verursacht, aber auch Personen (1 Person = durchschnittlich 80 W) oder der Kühlschrank in der Küche. In einem nach Süden ausgerichteten Raum kann eine sonnenexponierte Fassade für einen zusätzlichen Energiezuwachs sorgen. Theoretisch ist dieser Koeffizient negativ.
- **Offset, der anzuwenden ist, wenn der Heizkörper als warm gilt (%)**: Zu verwenden, wenn Ihr Heizungsregelsystem eine nicht zu vernachlässigende Trägheit aufweist, sei es aufgrund der Heizkörper, der Raumaufteilung (Abstand zwischen Heizkörper und Temperaturfühler) oder des Temperaturfühlers selbst (je nach Modell ist dessen Reaktionsfähigkeit mehr oder weniger ausgeprägt). Die sichtbare Folge dieser Trägheit ist eine vorübergehende Überschreitung des Sollwerts bei starken Temperaturanstiegen (der Sollwert steigt beispielsweise von 15 °C auf 19 °C). Dieser Parameter entspricht der festgestellten Verzögerung zwischen der Heizphase (= die Heizung ist eingeschaltet) und dem Zeitpunkt, zu dem die vom Fühler gemessene Temperatur ansteigt, geteilt durch die eingestellte Zyklusdauer. Wenn beispielsweise eine Verzögerung von 30 Minuten zwischen dem Beginn des Heizvorgangs und dem Beginn des Temperaturanstiegs festgestellt wird und die Dauer der Heizzyklen auf 60 Minuten eingestellt ist, kann dieser Parameter auf 50 % gesetzt werden. Wenn also auf einen Heizzyklus bei 100 % ein weiterer Heizzyklus folgt, ermöglicht dieser Parameter, die vom Heizkörper im ersten Zyklus erzeugte, aber vom Fühler noch nicht gemessene Wärme bei der Berechnung des zweiten Zyklus zu berücksichtigen, indem dessen Heizleistung entsprechend verringert wird. Die Leistung des zweiten Zyklus wird dann im Vergleich zur Berechnung auf Basis der vom Fühler gemessenen Temperatur um 50 % reduziert.
-   **Automatisches Einlernen**: Kontrollkästchen zum Aktivieren/Deaktivieren des Einlernens der Koeffizienten.
-   **Smart Start**: Diese Option macht den Thermostat „intelligent“, indem sie die Änderung des Sollwerts vorwegnimmt, damit die Temperatur zur programmierten Uhrzeit erreicht wird. Für diese Option ist das Kalender-Plugin erforderlich. Achtung: Damit Smart Start funktioniert, muss der Lernwert unbedingt über 25 liegen. Außerdem wird nur das nächstliegende Ereignis berücksichtigt.
-   **Zyklus (min)**: Hierbei handelt es sich um den Berechnungszyklus des Thermostats. Am Ende des Zyklus berechnet der Thermostat – abhängig von der Abweichung zwischen den Temperaturen und dem Sollwert – die Heizzeit für den nächsten Zyklus.
-   **Mindestheizzeit (% des Zyklus)**: Wenn die Berechnung eine Heizzeit ergibt, die unter diesem Wert liegt, geht der Thermostat davon aus, dass kein Heizen/Kühlen erforderlich ist, und verschiebt die Steuerung auf den nächsten Zyklus. Dadurch werden Schäden an bestimmten Geräten wie Öfen vermieden und gleichzeitig eine echte Energieeffizienz erreicht.
-   **Fehlerbereich Heizung / Fehlerbereich Kühlung**: Dieser Wert dient zur Erkennung einer Fehlfunktion der Heizung bzw. Klimaanlage. Wenn die Temperatur über mehr als drei aufeinanderfolgende Zyklen hinweg diesen Bereich gegenüber dem Sollwert verlässt, wechselt der Thermostat in den Heizungsfehlermodus.
- **Begrenzung der ständigen Ein-/Ausschaltzyklen (Pellets, Gas, Heizöl) und PID**: Diese Option ermöglicht die Regelung mit verschiedenen Heizstufen. Die Leistungsrückmeldung des nächsten Zyklus muss dem Heizgerät den neuen Sollwert für die Heizstufe liefern. Die Zyklen enden bei 100 %, daher ist eine kurze Zykluszeit erforderlich.
- **Delta-Sollwert – Außentemperatur für Heiz- oder Kühlbetrieb**: Der Thermostat wählt den Betriebsmodus (Heizen oder Kühlen) anhand des Sollwerts und der Außentemperatur aus (aus Energiespargründen wird davon ausgegangen, dass sich die Innentemperatur der Außentemperatur annähert). Mit diesen Einstellungen können Sie den Schwellenwert ändern. Beispiel: Wenn Sie 25 °C wünschen und es draußen 22 °C sind, schaltet der Thermostat standardmäßig in den Heizbetrieb (er wechselt nur für die Berechnung in diesen Modus, was nicht bedeutet, dass er tatsächlich heizt), wenn Sie die Heizdifferenz auf 4 einstellen, heizt er nicht mehr, da 25–22 = 3 und 3 < 4 ist; er wechselt also in den Kühlmodus (sofern natürlich die Innentemperatur über dem Sollwert liegt).

> **WISSENSWERTES**
>
> Das Selbstlernverfahren ist stets aktiv. Die Initialisierungsphase kann jedoch relativ lang sein *(ca. 3 Tage)*. Während dieser Phase sollten ausreichend lange Zeiträume vorhanden sein, in denen sich der Sollwert nicht ändert.

## Thermostatsteuerungen

![Liste der Befehle in der Hausautomationsübersicht](./images/thermostatlistecommandes.png)

Nicht alle Befehle sind in der Programmierung verfügbar; bei einigen handelt es sich um Statusinformationen, die vom Plugin zurückgegeben werden. In den Szenarien finden sich:

![Liste der Befehle in den Szenarien](./images/thermostatcommandesscenario.png)

-   **Betriebsmodi**: Sie können zwischen den Betriebsmodi wechseln, indem Sie die Befehle direkt ausführen (hier: Komfort, Komfort morgens, Eco, Urlaub)
-   **Aus**: Dieser Befehl schaltet den Thermostat aus, die Regelung ist nicht mehr aktiv, die Heizung/Klimaanlage ist ausgeschaltet
-   **Thermostat**: Dabei handelt es sich um den Sollwert des Thermostats
-   **lock**: Sperrbefehl; der Status des Thermostats kann nicht geändert werden (Wechsel des Betriebsmodus, Sollwert)
-   **unlock**: Entsperrt den Thermostat, sodass dessen Status geändert werden kann
-   **Nur Heizung**: Die Regelung greift nur beim Heizen ein
-   **Nur Klimatisierung**: Die Regelung ist nur zum Kühlen aktiv
-   **Heizungs-Offset**: Ändert den Offset-Koeffizienten der Heizung entsprechend den internen Wärmezufuhren: Ein Szenario kann diesen Parameter beispielsweise anhand eines Präsenzmelders anpassen.
-   **Kühlungs-Offset**: wie oben, jedoch für die Klimaanlage
-   **Alles aktiviert**: Ändert das Verhalten des Thermostats, sodass er sowohl im Heiz- als auch im Kühlbetrieb funktioniert
-   **Leistung**: Diese Einstellung ist nur im Zeitmodus verfügbar und gibt den prozentualen Anteil der Heiz- bzw. Kühlzeit an der Gesamtzykluszeit an.
-   **Leistung**: Nur verfügbar, wenn Sie über eine Außentemperaturregelung und eine Verbrauchsanzeige (in kWh, die täglich um 00:00 Uhr auf 0 zurückgesetzt wird) verfügen. Diese zeigt Ihnen die Leistung Ihres Heizsystems im Verhältnis zum einheitlichen Gradtag an.
-   **Sollwert-Delta**: Dieser Befehl ist nur im Zeitmodus verfügbar und ermöglicht die Eingabe eines Berechnungs-Deltas für den Sollwert. Ist das Delta größer als 0, prüft der Thermostat, ob er um (Sollwert – Delta/2) heizen muss; ist dies der Fall, heizt er bis auf (Sollwert + Delta/2) auf. Der Vorteil besteht darin, dass länger, aber seltener geheizt wird.

> **Tipp**
>
> Die Verwendung des Thermostats im Modus `Chauffage seulement` erfordert die Definition der Befehle *„Wie heize ich?“* und *„Wie schalte ich alles aus?“* Im Modus `Climatisation seulement`, es werden die Befehle *„Wie kühle ich?“* und *„Wie schalte ich alles aus?“* benötigt. Und im Modus `Tout autorisé`: Dazu müssen alle drei Befehle eingegeben worden sein.

## Ein konkretes Anwendungsbeispiel für den Thermostat

Sobald Ihr Thermostat eingerichtet ist, müssen Sie die Programmierung vornehmen. Am besten lässt sich dies anhand eines Anwendungsbeispiels erklären. Wir möchten unser Thermostat also entsprechend den Anwesenheitszeiten der Hausbewohner programmieren.

Zunächst werden wir zwei Szenarien verwenden, um die Heizung jeden Morgen unter der Woche zwischen 5:00 und 7:30 Uhr sowie abends zwischen 17:00 und 21:00 Uhr in den Modus **Komfort** (Sollwert 20 °C) zu schalten. Der **Komfort**-Modus wird außerdem mittwochnachmittags von 12:00 bis 21:00 Uhr sowie am Wochenende von 8:00 bis 22:00 Uhr aktiviert. In der übrigen Zeit schaltet die Heizung in den **Eco**-Modus mit einer Solltemperatur von 18 °C um.

Wir erstellen also das Szenario ***Komfortheizung*** im Programmiermodus:

![Voreingestelltes Szenario](./images/thermostat11.png)

und der Code:

![Szenario „Komfortmodus“](./images/scenarioconfort.png)

Nach dem gleichen Prinzip funktioniert auch das Szenario „Eco-Heizung“:

![Im Eco-Modus programmiertes Szenario](./images/thermostat13.png)

und der dazugehörige Code:

![Szenario im Eco-Modus](./images/scenarioeco.png)

Beachten Sie, dass in den Szenarien die Steuerung des Thermostats umfassend ist, da Sie den Betriebsmodus (nur Heizen oder nur Kühlen), die Betriebsarten, den Sollwert und die Sperre (Sperren, Entsperren) einstellen können.

Auch wenn die Erstellung von Szenarien manchmal kompliziert ist, lässt sich dies im Falle der Programmierung eines Thermostats durch die Kombination der Aktionen des Thermostats mit dem Kalender des Kalender-Plugins ganz einfach realisieren.

Das Kalender-Plugin ermöglicht eine detailliertere Programmierung und verringert vor allem das Risiko von Fehlern. Im Gegensatz zur bisherigen Programmierung wird der Kalender nämlich deutlich auf dem Bildschirm angezeigt, sodass Feiertage, Ferien usw. berücksichtigt werden können. Kurz gesagt: Der Thermostat lässt sich ganz an den eigenen Lebensrhythmus anpassen.

## Programmieren mit dem Agenda Plugin

Das Plugin „Agenda“ wird hier nicht vorgestellt, da es darum geht, es mit der Programmierung des Thermostats zu verknüpfen. Beachten Sie bitte: Wenn Sie über das Plugin „Agenda“ verfügen, erscheint in den Einstellungen des Thermostats die Registerkarte *Programmierung*, über die Sie direkt auf den zugehörigen Kalender zugreifen können.

Wir werden also einen neuen Kalender mit dem Namen **Heizungsprogrammierung** erstellen, dem wir die Ereignisse zum Wechsel des Thermostatmodus hinzufügen werden.
Sobald der Zeitplan erstellt ist, fügen wir die folgenden Ereignisse hinzu: Vormittag (montags bis freitags von 5:00 bis 7:30 Uhr), Abend (montags, dienstags, donnerstags und freitags von 17:00 bis 21:00 Uhr), Mittwoch (mittwochs von 12:00 bis 21:00 Uhr), Wochenende (von 8:00 bis 22:00 Uhr) und Feiertage. Alle diese Ereignisse haben als Startaktion die Auswahl des Modus **Komfort** am Thermostat und als Endaktion den Modus **Eco**:

![Termine im Kalender](./images/agendaactions.png)

Zum Programm des Abendprogramms:

![Veranstaltungsprogramm](./images/agendaprogrammation.png)

Man muss dies lediglich für jedes Ereignis wiederholen, um diesen farbenfrohen Monatskalender zu erhalten:

![Monatsansicht des Kalenders](./images/agendamensuel.png)

Wenn man zur Konfiguration des Thermostats zurückkehrt, kann man direkt über die Registerkarte „Programmierung“ auf die Termine im Kalender zugreifen:

![Registerkarte „Programmierung“ des Thermostats](./images/thermostatongletprogrammation.png)

## Visualisierung des Thermostatbetriebs

Sobald der Thermostat eingerichtet ist, sollte man seine Funktionsfähigkeit überprüfen.

![Menü zur Anzeige der Thermostate](./images/menuaccueilthermostats.png)

Im Menü `Accueil`, dort findet man das Untermenü `Thermostat`. Das Fenster, das bei Auswahl dieses Menüs angezeigt wird, ist in drei Bereiche unterteilt:

-   Das *Widget* „Thermostat“ zur Anzeige des aktuellen Status des Thermostats,
-   ein Diagramm, das die kumulierte Heizzeit pro Tag (in Stunden) darstellt,
-   Eine weitere Grafik, die die Sollwertkurven, die Raumtemperatur und den Betriebszustand der Heizung anzeigt.

![Gesamtheizzeit des Thermostats](./images/graphecumultempsdechauffe.png)

*Grafik zur kumulierten Aufheizzeit*

![Diagramm der Thermostatkurven](./images/graphecourbesthermostat.png)

*Diagramm der Thermostatkurven*

# Faq

>**Kann man den Thermostat mit einer Fußbodenheizung verwenden, die eine hohe Trägheit aufweist?**
>
>Der Thermostat lässt sich praktisch an alle Situationen anpassen, allerdings ist eine gründliche Analyse Ihrer Anlage erforderlich, um die Koeffizienten anzupassen, falls Sie sich in einer besonderen Situation befinden. Lesen Sie den Abschnitt über die *erweiterte Konfiguration*, um die Koeffizienten anzupassen, insbesondere im Falle einer Fußbodenheizung. Im Forum gibt es mehrere Themen, die sich mit der Verwendung des Thermostats für verschiedene Heizungsarten (Ofen, Heizkessel, Fußbodenheizung usw.) befassen.

>**Meine Koeffizienten schwanken ständig**
>
>   Das ist normal, das System passt seine Koeffizienten dank des Selbstlernsystems ständig an.

>**Wie lange dauert das Einlernen im Zeitmodus?**
>
>Im Durchschnitt dauert es 7 Tage, bis das System das System gelernt hat und es optimal regelt

>**Ich schaffe es nicht, meinen Thermostat zu programmieren**
>
>Die Programmierung des Thermostats kann entweder über ein Szenario oder mithilfe des Plugins „Agenda“ erfolgen.

>**Mein Thermostat scheint nie in den Heiz- oder Kühlmodus zu wechseln**
>
>Wenn der Thermostat über keine entsprechende Steuerung für die Heizung und/oder die Klimaanlage verfügt, kann er nicht in diese Betriebsarten wechseln.

>**Egal, wie oft ich die Temperatur oder den Modus ändere, der Thermostat kehrt immer wieder in den vorherigen Zustand zurück**
>
>Stellen Sie sicher, dass Ihr Thermostat nicht gesperrt ist

>**Im Hysterese-Modus wechselt mein Thermostat nie den Zustand**
>
>Da die Temperatursensoren ihre Werte nicht automatisch übermitteln, empfiehlt es sich, einen „Kontroll-Cron“ einzurichten.

>**Die Kurven des Thermostats (insbesondere der Sollwert) scheinen nicht korrekt zu sein**
>
>Prüfen Sie, ob der Verlauf der betreffenden Befehle geglättet wird. Um die Effizienz zu steigern, bildet Jeedom nämlich einen Mittelwert der Werte über 5 Minuten und anschließend über eine Stunde.

>**Die Registerkarte „Modus/Aktion“ ist leer, und wenn ich auf die Schaltflächen „Hinzufügen“ klicke, passiert nichts**
>
>Versuchen Sie, Adblock (oder einen anderen Werbeblocker) zu deaktivieren, da diese aus unbekannten Gründen das JavaScript der Seite grundlos blockieren.
