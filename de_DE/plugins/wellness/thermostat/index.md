Beschreibung
===========

Mit diesem Plugin können Sie Thermostate erstellen und verwalten, um das zu steuern
Heizen Sie Ihr Zuhause. Es arbeitet in 2 Modi Ihrer Wahl :

-   der Modus **Hysterese** entspricht dem Ein- und Ausschalten
    Erwärmung in Abhängigkeit von der Innentemperatur relativ zu a
    Schwelle entsprechend dem Sollwert. Hysterese herft zu verhindern
    zu häufiges Umschalten bei Temperaturen
    die Kaution.

<!-- -->

-   der Modus **zeitlich** berechnet einen Heizprozentsatz für a
    vordefinierter Zeitzyklus unter Berücksichtigung der Unterschiede zwischen dem
    Sollwert sowie Innen- und Außentemperaturen (Isolierung).
    Dieser Modus ist präziser, hat eine Lernerlaubnis
    Passen Sie die Koeffizienten automatisch an, dies kann jedoch erforderlich sein
    Einige manuelle Anpassungen, um es an Ihre Installation anzupassen.
    Wichtig, damit der Zeitmodus funktioniert, benötigen Sie unbedingt eine
    Innen- UND Außentemperatursensor.

Konfiguration
=============

Dieses Plugin ist für die Erstellung von Thermostaten in Jeedom vorgesehen. Er
kann Heizung, Klimaanlage oder beides steuern.

Der Vorteer gegenüber einem herkömmlichen Thermostat besteht darin, dass dies der Fall ist
vollständig in Ihr Hausautomationssystem integrieren. Neben dem
Temperaturregelung, denn darum bitten wir ihn
Erstens kann der Thermostat mit allen Geräten interagieren
das Haus.

Zu seinen Merkmalen gehören :

-   unter Berücksichtigung der Außentemperatur, folglich der
    Hausisolationskoeffizient,

-   ein Regulierungssystem, das lernt, die Regulierung zu optimieren,

-   die Möglichkeit, die Türen zu verwalten, um den Thermostat auszuschalten,

-   Geräteausfallmanagement, Temperatursonden
    und Heizungen,

-   vollständige Programmierung mit dem Agenda-Plugin, insbesondere dem
    Möglichkeit, die Änderung des Sollwerts vorwegzunehmen, so dass die
    Temperatur wird zum geplanten Zeitpunkt erreicht (Smart Start)

Zuerst zeigen wir Ihnen dann die Implementierung
detaerliert die verschiedenen Einstellungen der Thermostatkonfiguration und
Schließlich, durch einige Anwendungsfälle, wie wir können
bereichern Sie es in Kombination mit anderen Plugins oder mit
Szenarien.

Konfiguration mit wenigen Klicks
----------------------------------

Der Jeedom-Thermostat ist sehr leistungsstark, aber für den Gebrauch
traditionell ist seine Implementierung wirklich einfach und schnell
Von dem Moment an verstehen wir die wesentlichen Schritte :

-   Definition des Thermostatmotors (Hysterese oder Zeit). Es ist
    die Wahl des Regelungsalgorithmus.

-   Konfiguration und Betriebsbereich : Heizung
    nur Klimaanlage oder beides, min und
    maximale Nutzung.

-   Definieren der Aktionen, die der Thermostat ausführen soll
    erhitzen, abkühlen oder aufhören.

Dann gibt es verschiedene Registerkarten :

-   Die Konfiguration der Modi definiert Temperaturen von
    vorgegebene Anweisungen. Zum Beispiel Komfortmodus bei 20 ° C, Öko
    bei 18 ° C.. Es kann auch Tag, Nacht, Urlaub, Abwesenheit, ... Sie geben
    Sehen Sie hier die Möglichkeiten zur Anpassung
    Plugin.

-   Um die Betriebsart des Thermostats zu verfeinern, werden Sie
    Sie können auch Öffnungen konfigurieren, die unterbrechen
    vorübergehend regeln (zum Beispiel kann ein offenes Fenster
    Heizung einstellen). Die Definition dieser Unterbrechung
    wird hier einfach gemacht.

-   Management von Fehlermodi für Temperatursensoren
    oder zum Heizen können Aktionen definiert werden, für die ausgeführt werden soll
    ein verschlechterter Modus.

-   Auf der Registerkarte Erweiterte Konfiguration können Sie die Parameter von anpassen
    Heizungsregelung.

-   Wenn Sie zusätzlich das Agenda Plugin haben, ist die Programmierung von
    Moduswechsel werden direkt ab möglich
    die Registerkarte Programmierung.

Ihr Thermostat ist jetzt betriebsbereit und wird verwendet
Szenarien oder durch Kombination mit anderen Plugins (Agenda,
Präsenz, ...), es fügt sich nahtlos in Ihre Installation ein
Hausautomation. Das bekommen wir auf dem Dashboard :

![Aspect sur le dashboard](../images/Thermostat.png)

Mit der Sperre im Widget können Sie den Thermostat in einem sperren
Anweisung nach einem unvorhergesehenen Ereignis : verlassen, Gäste, ....


Die Erstellung eines Thermostats im Detaer
-------------------------------------

Um einen neuen Thermostat zu erstellen, gehen Sie zur Seite
Konfiguration durch Herunterziehen des Plugins / Well-Being-Menüs und Auswahl
Thermostat. Klicken Sie oben links auf die Schaltfläche * Hinzufügen * und
Geben Sie den gewünschten Namen für Ihren Thermostat ein.

![Konfiguration générale](../images/Thermostat_config_générale.png)

Zunächst werden wir die allgemeinen Parameter der
Thermostat. Sie befinden sich oben links im allgemeinen Abschnitt und sind erforderlich
Geben Sie hier das übergeordnete Objekt, die Aktivierung und die Sichtbarkeit des an
Thermostat, übliche Informationen für jeden Jeedom-Benutzer.

Die Wahl des Thermostat-Algorithmus
--------------------------------------

![Choix de l'algorithme](../images/Thermostat31.png)

In diesem Berd ist der Thermostatbetriebsmotor hervorgehoben..
Es gibt 2 mögliche Algorithmen zur Temperaturregelung.

Wenn Sie den Hysteresemodus auswählen, wird der Start Ihres
Die Erwärmung erfolgt, sobald die Temperatur unter dem Sollwert liegt
abzüglich der Hysterese und schaltet sich aus, sobald die Temperatur die überschreitet
Sollwert plus Hysterese.

![Principe du Modus hystérésis](../images/PrincipeHysteresis.png)

Zum Beispiel, wenn Sie die Hysterese auf 1 ° C und den Sollwert einstellen
beträgt 19 ° C, dann wird die Heizung aktiviert, wenn die Temperatur sinkt
unter 18 ° C und stoppt, sobald es 20 ° C erreicht.

Die anzugebenden Parameter sind die Hysterese in ° C und der Befehl welche
ermöglicht das Abrufen der Temperaturmessung. Wir werden die Hysterese in einstellen
abhängig von der Genauigkeit des Sensors, zum Beispiel für eine präzise Sonde
bei 0.5 ° C, eine Hysterese von 0.2 ° C ist ein guter Kompromiss.

> **Spitze**
>
> Der Hystereseparameter befindet sich auf der Registerkarte * Erweitert*.

Im Zeitmodus ist die Heizung oder
Die Klimatisierung wird in einem vordefinierten Zyklus und der Ausführungsdauer definiert
des Befehls ist eine Funktion der Differenz zwischen dem Sollwert und dem
vom Sensor gemessene Temperatur. Der Algorithmus berechnet ebenfalls
die Heiz- (oder Kühl-) Zeit in einem Zyklus abhängig von
Trägheit und Raumdämmung.

![Principe du Modus zeitlich](../images/PrincipeTemporel.png)

Schließlich ist die Regelung umso langsamer, je länger die Zykluszeit ist.
Umgekehrt führt eine zu kurze Zeit zu häufigem Umschalten
Ihres Heizungssystems, die möglicherweise keine Zeit dazu haben
Raumvolumen effektiv erwärmen. Es wird empfohlen, dies nicht zu tun
Reduzieren Sie diese Zykluszeit zu stark (akzeptable Werte sind enthalten
zwischen 30 und 60 Minuten).

Diese Art der Regelung ist optimierter, verbessert den Komfort und
ermöglicht erhebliche Energieeinsparungen.

Die Konfiguration
----------------

Neben dem Thermostatbetriebsmotor können Sie entscheiden, ob
Der Thermostat wird in Heizung, Klimaanlage oder beidem verwendet.
Dann geben Sie den Einsatzbereich an : Mindesttemperaturen und
Maximum definiert die möglichen Sollwerte, auf die zugegriffen werden kann
das Widget.

![Konfiguration du fonctionnement](../images/configFonctionnement.png)

Geben Sie als Nächstes die Befehle an, mit denen das gemessen wird
Temperatur und Steuerung der Heizung oder Klimaanlage. Beachten Sie, dass die
Zeitmotor muss die Außentemperatur kennen. Wenn du
Haben Sie keinen externen Sensor, dies kann von bereitgestellt werden
das Wetter Plugin.

![Sélection des sondes](../images/selectionsondes.png)

> **Spitze**
>
> Die Felder "Untere Temperaturgrenze" und
> `Borne de température supérieure` définissent la plage de
> Thermostatbetrieb, außerhalb dessen ein Ausfall des
> Heizung ist an. Siehe unten den Absatz über
> Standardaktionen.

Zur Steuerung des Kühlers oder der Klimaanlage wird dies in beschrieben
* Registerkarte Aktionen*. Hier können wir mehrere definieren
Aktionen, die unserem Thermostat die Möglichkeit geben, zu steuern
unterschiedliche Ausrüstung (z. B. Betriebsfall nach Zone oder
Steuerung eines anderen Thermostats)

![Actions sur les appareers](../images/actionssurappareer.png)

Aktionen sind solche, die heizen, kühlen
(Klimaanlage), stoppen Sie den Befehl. Eine ergänzende Aktion kann
bei jeder Sollwertänderung berücksichtigt werden, ob im Modus
manuell oder automatisch.

Mode : der Ausgangspunkt für die Automatisierung
----------------------------------------------------

Die Modi (definiert auf der Registerkarte * Modi *) sind
vorgegebene Thermostat-Sollwerte, die Ihrem Modus von entsprechen
Leben. Zum Beispiel der Modus **Nacht** oder **Eco** Geben Sie die Temperatur an, die
Sie wünschen, wenn alle schlafen. Der Modus **Tag** oder
**Komfort** bestimmt das Verhalten des Thermostats, um a
Komforttemperatur, wenn Sie zu Hause sind. Nichts hier
ist nicht gefroren. Sie können beliebig viele Modi definieren
Verwenden Sie sie über Szenarien (wir werden später darauf zurückkommen).

Im Berd unten der Modus **Komfort** hat einen Sollwert von
19 ° C und für Modus **Eco**, Der Thermostat ist auf 17 ° C eingestellt. Der Modus
**Urlaub** programmiert den Thermostat bei längerer Abwesenheit auf 15 ° C..
Es ist im Dashboard nicht sichtbar, da es sich um ein Szenario handelt, das
Programmieren Sie alle Geräte im * Urlaub * und positionieren Sie so die
Thermostat in diesem Modus.

![Définition des Moduss](../images/DefinitionModuss.png)

Gehen Sie wie folgt vor, um einen Modus zu definieren :

-   Klicken Sie auf die Schaltfläche * Add Mode*,

-   donnez un nom à ce Modus, par exemple `Eco`,

-   Fügen Sie eine Aktion hinzu und wählen Sie den Befehl * Thermostat * auf Ihrem
    Thermostatausrüstung,

-   Stellen Sie die gewünschte Temperatur für diesen Modus ein,

-   Aktivieren Sie das Kontrollkästchen **Sichtbar** um diesen Modus auf dem
    Thermostat-Widget auf dem Armaturenbrett.


>**Wichtig**
>
>Achtung beim Umbenennen eines Modus ist es unbedingt erforderlich, die Szenarien / Geräte zu überprüfen, die den alten Namen verwenden, um sie an den neuen weiterzugeben


Die Öffnungen : den Thermostat vorübergehend zu unterbrechen
--------------------------------------------------------------

Stellen Sie sich vor, Sie möchten Ihre Heizung vorübergehend stoppen oder
Ihre Klimaanlage, zum Beispiel um den Raum zu lüften, für den die
Thermostat ist aktiv. Um das Öffnen des Fensters zu erkennen, müssen Sie
Verwenden Sie einen Sensor an der Öffnung Ihres Fensters
Dies ermöglicht es, diese Unterbrechung durch Hinzufügen durchzuführen
Registerkarte Konfiguration der Öffnungen. Zwei Parameter
zusätzlich sind hier einstellbar, dies sind die Öffnungszeiten und
Schließen des Fensters, das die Unterbrechung und die Wiederaufnahme verursacht
wie der Thermostat funktioniert.

![Konfiguration des odervertures](../images/configodervertures.png)

So konfigurieren Sie den Vorgang beim Öffnen des Fensters :

-   sélectionnez l'info du capteur d'oderverture dans le champ `Ouverture`

-   Stellen Sie die Zeit ein, bevor sich der Thermostat nach dem Öffnen ausschaltet
    das Feld `Ausschalten, wenn mehr als (min) geöffnet ist :`

-   Passen Sie die Zeit nach dem Schließen des Fensters an
    Starten Sie den Thermostat vor Ort neu
    `Rallumer si fermé depuis (min) :`

-   Klicken Sie auf die Schaltfläche * Speichern *, um die Aufnahme zu speichern
    Konto der Eröffnungen

> **Spitze**
>
> Es können mehrere Öffnungen definiert werden, dies ist notwendig
> wenn der Thermostat einen Bereich steuert, der aus mehreren Räumen besteht.

> **Spitze**
>
> Es ist möglich, einen Alarm einzustellen, wenn die Öffnung länger als xx Minuten dauert.


Vorhersage eines verschlechterten Modus dank Fehlermanagement
-----------------------------------------------------------

Fehler können entweder von Temperatursensoren oder von
der Heizungssteuerung. Der Thermostat kann während einen Fehler erkennen
eine längere Abweichung der Temperatur vom Sollwert.

### Ausfall der Temperatursonde

Wenn die vom Thermostat verwendeten Sonden keine zurückgeben **ändern**
Temperatur, zum Beispiel wenn die Batterien abgenutzt sind, dann die
Thermostat löst Fehleraktionen aus. Wenn der Fehler
auftritt, ist es möglich, das Gerät in eine zu setzen
vorbestimmter Betrieb, zum Beispiel Erzwingen der Ordnung eines Kühlers
Perotdraht. Einfacher eine SMS senden oder a
Benachrichtigung ermöglicht es, gewarnt zu werden und manuell einzugreifen.

> **Spitze**
>
> Der Parameter, mit dem der Thermostat über einen Ausfall von entscheiden kann
> Die Sonde befindet sich auf der Registerkarte * Erweitert*. Das ist der
> `délai max entre 2 relevés de température`.

![Défaerlance des sondes](../images/defaerlancesonde.png)

So definieren Sie eine Fehleraktion :

-   Klicken Sie auf die Registerkarte * Sondenfehler*,

-   Klicken Sie auf die Schaltfläche * Fügen Sie eine Fehleraktion hinzu*

-   Wählen Sie eine Aktion aus und füllen Sie die zugehörigen Felder aus

Sie können mehrere Aktionen eingeben, die nacheinander ausgeführt werden
Verwenden Sie bei komplexeren Aktionen ein Szenario
(Geben Sie "Szenario" ohne Akzent in das Aktionsfeld ein und klicken Sie dann auf
an anderer Stelle, um den Namen des Szenarios eingeben zu können).

### Ausfall der Heizung / Klimaanlage

Die ordnungsgemäße Funktion der Heizung oder Klimaanlage ist
bedingt durch eine gute Nachverfolgung der Anzahlung. Also wenn die Temperatur
weicht vom Betriebsbereich des Thermostats ab, er schaltet sich ein
Ausfall von Heizung / Klimaanlage. Diese Analyse
erfolgt über mehrere Zyklen.

> **Spitze**
>
> Der Parameter, mit dem der Thermostat über einen Ausfall von entscheiden kann
> Die Sonde befindet sich auf der Registerkarte * Erweitert*. Das ist der
> `Marge de défaerlance chaud` poderr le Heizung et de la
> `Marge de défaerlance froid` poderr la climatisation.

In diesem Berd sendet die Fehleraktion den Befehl zum Wechseln
ECO-Modus des Kühlers durch das Perotkabel, sendet dann eine Nachricht von der
Pushbullet Plugin.

![Défaerlance Heizung](../images/defaerlanceHeizung.png)

So definieren Sie eine Fehleraktion :

-   Klicken Sie auf die Registerkarte * Heizungs- / Klimaanlagenfehler*,

-   Klicken Sie auf die Schaltfläche * Fügen Sie eine Fehleraktion hinzu*

-   Wählen Sie eine Aktion aus und füllen Sie die zugehörigen Felder aus

Sie können mehrere Aktionen eingeben, die nacheinander ausgeführt werden
Verwenden Sie bei komplexeren Aktionen ein Szenario
(Geben Sie "Szenario" ohne Akzent in das Aktionsfeld ein und klicken Sie dann auf
an anderer Stelle, um den Namen des Szenarios eingeben zu können).

Verwalten Sie Sonderfälle mit der erweiterten Thermostatkonfiguration
---------------------------------------------------------------------

Diese Registerkarte enthält alle Parameter zum Einstellen des Thermostats im Modus
zeitlich. In den meisten Fällen müssen keine Änderungen vorgenommen werden
diese Werte, weer das Selbstlernen automatisch die berechnet
Koeffizienten. Selbst wenn sich der Thermostat an die anpassen kann
In den meisten Fällen ist es möglich, die Koeffizienten anzupassen
für eine optimierte Konfiguration für Ihre Installation.

![Konfiguration avancée du
Thermostat] (../ images / configurationavancee.png)

Die Koeffizienten sind wie folgt :

-   **Heizkoeffizient / Kühlkoeffizient** : er
    ist der Gewinn des Regulierungssystems . Dieser Wert ist
    multipliziert mit der Differenz zwischen Sollwert und Temperatur
    Innenraum gemessen, um die Heiz- / Kühlzeit abzuziehen.

-   **Heißes Lernen / Kaltes Lernen** : Dieser Parameter zeigt an
    Lernfortschritt. Ein Wert von 1 gibt die an
    Beginn des Lernens führt der Algorithmus eine grobe Anpassung durch
    Koeffizienten. Dann, wenn dieser Parameter zunimmt,
    Die Einstellung wird verfeinert. Ein Wert von 50 gibt das Ende an
    des Lernens.

-   **Heizungsisolierung / Klimadämmung** : Dieser Koeffizient ist
    multipliziert mit der Differenz zwischen Sollwert und Außentemperatur
    gemessen, um die Heiz- / Kühlzeit abzuziehen. Er
    repräsentiert den Beitrag der Außentemperatur zur Zeit von
    Heizung / Klimaanlage und ihr Wert ist normalerweise kleiner als
    Heizungs- / Klimakoeffizient bei einem Raum
    gut isoliert.

-   **Heiße Isolierung lernen / Kaltisolierung lernen** :
    gleiche Funktion wie oben, jedoch für die Isolationskoeffizienten.

-   **Heizungsversatz (%) / Klimaanlagenversatz (%)** : Der Heizungsversatz
    erlaubt * interne Beiträge * zu berücksichtigen, normalerweise nicht
    sollte nicht festgelegt werden, aber es wird angenommen, dass das Lernen das integriert
    dynamischer Teer in den anderen 2 Koeffizienten. Die * Beiträge
    intern *, es ist zum Beispiel ein Computer, der a verursacht
    Temperaturanstieg beim Einschalten, kann aber auch sein
    Einzelpersonen (1 Person = 80W im Durchschnitt), der Kühlschrank in
    die Küche. In einem Raum im Süden ist es eine sonnige Fassade, die
    kann zusätzliche Energie liefern. Theoretisch ist dies
    Koeffizient ist negativ.

- **Ausset, der angewendet werden soll, wenn der Kühler als heiß eingestuft wird (%)** : zu verwenden, wenn Ihr Heizungssteuerungssystem eine erhebliche Trägheit aufweist, sei es aufgrund der Heizkörper, der Konfiguration des Raums (Abstand zwischen Heizkörper und Temperatursensor) oder des Temperatursensors selbst ( je nach Modell ist ihre Reaktivität mehr oder weniger). Die sichtbare Folge dieser Trägheit ist ein vorübergehendes Überschwingen des Sollwerts bei erheblichen Temperaturerhöhungen (Sollwert beispielsweise von 15 ° C auf 19 ° C).. Dieser Parameter entspricht der Differenz, die zwischen der Heizperiode (= Heizung ist eingeschaltet) und der Periode, in der die von der Sonde gemessene Temperatur ansteigt, geteert durch die Länge des konfigurierten Zyklus, beobachtet wird.. Wenn beispielsweise zwischen dem Beginn des Erhitzens und dem Beginn des Temperaturanstiegs ein Unterschied von 30 Minuten besteht und die Dauer der Heizzyklen auf 60 Minuten eingestellt ist, können wir diesen Parameter auf 50% einstellen. Wenn also auf einen 100% igen Heizzyklus eine weitere Erwärmung folgt, kann mit diesem Parameter die vom Kühler im ersten Zyklus erzeugte, aber noch nicht von der Sonde gemessene Wärme für die Berechnung des zweiten Zyklus berücksichtigt werden, indem d reduziert wird '' seine Heizleistung. Die Leistung des zweiten Zyklus wird dann gegenüber der Berechnung anhand der von der Sonde gemessenen Temperatur um 50% reduziert..

-   **Selbstlernen** : Kontrollkästchen zum Aktivieren / Deaktivieren
    Lernen der Koeffizienten.

-   **Smart start ** : Diese Option gibt dem
    Thermostat, der die Sollwertänderung vorwegnimmt, so dass die
    Temperatur zum geplanten Zeitpunkt erreicht. Diese Option
    benötigt das Agenda Plugin. Aufmerksamkeit für den intelligenten Start zu arbeiten
    Lernen muss mehr als 25 sein. Ein weiterer Punkt
    nimmt das nächste Ereignis zu kommen

-   **Zyklus (min)** : Dies ist der Berechnungszyklus des Thermostats. Am Ende
    Zyklus und als Funktion der Differenz zwischen den Temperaturen und der
    Sollwert berechnet der Thermostat die Aufheizzeit für die
    nächster Zyklus.

-   **Minimale Aufheizzeit (in % des Zyklus)** : Wenn die Berechnung ergibt
    eine Heizzeit niedriger als dieser Wert, dann der Thermostat
    ist der Ansicht, dass es nicht notwendig ist, zu heizen / kühlen, die
    Befehl wird auf den nächsten Zyklus übertragen. Dies vermeidet
    Beschädigen Sie bestimmte Geräte wie Öfen, aber auch
    echte Energieeffizienz erreichen.

-   **Hot Faerure Margin / Cold Faerure Margin** : das
    Wert wird verwendet, um eine Fehlfunktion zu erkennen
    Heizung / Klimaanlage. Wenn die Temperatur dabei herauskommt
    Marge im Vergleich zum Sollwert für mehr als 3 Zyklen
    Der Thermostat schaltet in den Fehlermodus
    Heizung.

- **Begrenzt unaufhörliche Ein- / Ausschaltzyklen (Pellet, Gas, Heizöl) und PID** : Mit dieser Option können Sie mit verschiedenen Heizstufen regeln. Die Stromrückführung aus dem nächsten Zyklus muss dem Heizgerät den neuen Heizpegelsollwert geben. Die Zyklen enden bei 100%, haben also eine kurze Zykluszeit.

> **Spitze**
>
> Lernen ist immer aktiv. Aber die Initialisierungsphase
> kann relativ lang sein (ca. 3 Tage). Währenddessen
> Phase ist es notwendig, ausreichend lange Zeiträume während zu haben
> was der Sollwert nicht ändert.

Thermostatsteuerungen
---------------------------

Das Thermostat-Widget ist in das Plugin integriert, die Steuerung des
Thermostat sind daher nicht alle direkt in der
Plugin Konfiguration. Sie müssen das Menü * Home Automation Summary * (Menü) verwenden
Allgemein), um sie zu konfigurieren. Sie werden auch in verwendbar sein
die Szenarien.

![Liste des Befehle dans le résumé
Hausautomation] (../ images / ThermostatlisteBefehle.png)

Einige sind in der Programmierung nicht auf alle Befehle zugänglich
sind Statusinformationen, die vom Plugin zurückgegeben werden. In der
Szenarien finden wir :

![Liste des Befehle dans les
Szenarien] (../ images / ThermostatBefehlescenario.png)

-   **Mode** : Es ist möglich, Modusänderungen vorzunehmen, indem
    direktes Ausführen der Befehle (hier Komfort, Komfortmorgen,
    Öko, Feiertage)

-   **Aus** : Dieser Befehl schaltet den Thermostat ab, die Regelung nicht
    aktiver, Heizung / Klimaanlage wird gestoppt

-   **Thermostat** : Dies ist der Thermostat-Sollwert

-   **Schloss** : Sperrbefehl ist nicht möglich
    Ändern Sie den Thermostatstatus (Modusänderung, Sollwert).

-   **entsperren** : Schaltet den Thermostat frei und Sie können ihn ändern
    Zustand

-   **Nur Heizung** : Die Verordnung greift nur ein für
    Hitze

-   **Nur Klimaanlage** : Regulierung ist nur aktiv für
    cool

-   **Heizungsoffset** : ändert den Versatzkoeffizienten der Heizung
    entsprechend internen Beiträgen : Ein Szenario kann dies ändern
    Parameter, der beispielsweise auf einem Präsenzmelder basiert

-   **Kaltversatz** : wie oben, aber für die Klimaanlage

-   **Jeder autorisierte** : ändert das Verhalten des Thermostats
    sowohl Heizung als auch Klimaanlage

-   **Macht** : Dieser Befehl ist nur im Zeitmodus verfügbar und gibt den Prozentsatz der Heiz- / Kühlzeit über die Zykluszeit an.

-   **Leistung** : Nur verfügbar, wenn Sie über eine Außentemperaturregelung und eine Verbrauchsregelung verfügen (in kWh jeden Tag um 00:00 Uhr auf 0 zurückgesetzt).. Dies zeigt Ihnen die Leistung Ihres Heizungssystems im Vergleich zum Tag mit einheitlichem Grad.

-   **Delta-Sollwert** : Mit diesem Befehl, der nur im Zeitmodus verfügbar ist, können Sie ein Berechnungsdelta für den Sollwert eingeben. Wenn> 0, sucht der Thermostat, ob er heizen soll (Sollwert - Delta / 2). Wenn ja, versucht er, sich auf (Sollwert + Delta / 2) zu erwärmen.. Der Vorteer ist, länger, aber seltener zu heizen.

> **Spitze**
>
> Die Verwendung des Thermostats im Modus "Nur Heizen" erfordert
> die Befehle definiert haben * Zum Heizen muss ich ?* und * für alles
> Hör auf, ich muss ?* Im Modus "Nur Klimaanlage" müssen Sie
> * Um mich abzukühlen, muss ich ?* und * Um alles zu stoppen, was ich muss ?*.
> Und im Modus "Alle autorisiert" müssen Sie die 3 eingegeben haben
> Befehle.

Ein konkretes Beispiel für die Verwendung des Thermostats
----------------------------------------------

Wenn Ihr Thermostat konfiguriert ist, müssen Sie die
Programmierung. Der beste Weg, es zu erklären, ist ein
Anwendungsfall. Also wollen wir unseren Thermostat einprogrammieren
nach den Stunden der Anwesenheit der Bewohner des Hauses.

Zuerst werden wir 2 Szenarien verwenden, um das zu setzen
Heizung im Modus **Komfort** (Sollwert 20 ° C) jeden Morgen des
Woche zwischen 17.00 und 19.30 Uhr, dann abends zwischen 17.00 und 21.00 Uhr. Der Modus
**Komfort** wird auch am Mittwochnachmittag von 12 bis 21 Uhr aktiviert und
Wochenenden von 8 bis 22 Uhr. Den Rest der Zeit schaltet die Heizung auf
**Eco**, mit einem Sollwert von 18 ° C..

Also erstellen wir das Szenario ***Komfortheizung***, im programmierten Modus :

![Scénario programmé](../images/Thermostat11.png)

und der Code :

![Scenario Modus confort](../images/scenarioconfort.png)

Nach dem gleichen Prinzip das Szenario "Öko-Heizung"" :

![Scénario programmé en Modus Eco](../images/Thermostat13.png)

und sein Code :

![Scénario en Modus Eco](../images/scenarioeco.png)

Beachten Sie, dass in den Szenarien die Thermostatsteuerung abgeschlossen ist
da können wir auf die betriebsart (heizung oder
nur), Modi, Sollwert und Sperre
(sperren, entsperren).

Wenn die Erstellung von Szenarien manchmal kompliziert ist, z
Programmieren eines Thermostats, die Kombination von Thermostataktionen
Mit dem Kalender des Agenda-Plugins können Sie dies einfach tun.

Mit dem Agenda-Plugin können Sie weiter programmieren und
Insbesondere besteht ein geringeres Risiko, falsch zu liegen. In der Tat im Vergleich zu
Bei der vorherigen Programmierung wird der Kalender deutlich angezeigt
den Berdschirm und wir werden in der Lage sein, Feiertage zu nehmen,
Urlaub .... Kurz gesagt, steuern Sie den Thermostat entsprechend seinem Lebensster.

Programmieren mit dem Agenda Plugin
-----------------------------------

Wir präsentieren hier nicht das Agenda Plugin, das Ziel ist es
Paar mit Thermostatprogrammierung. Beachten Sie das, wenn Sie
Haben Sie das Agenda-Plugin, erscheint eine Registerkarte * Programmierung * in der
Konfiguration des Thermostats für direkten Zugriff auf die Tagesordnung
assoziieren.

Also werden wir eine neue Agenda mit dem Namen erstellen **Programmierung
Heizung**, zu dem wir die Moduswechselereignisse der hinzufügen
Thermostat.

Sobald der Kalender erstellt ist, fügen wir die Morgenereignisse hinzu (Montag bis
Freitag von 5 bis 7:30 Uhr), Abend (Montag, Dienstag, Donnerstag und Freitag ab 17 Uhr)
21.00 Uhr), Mittwoch (Mittwoch 12.00 bis 21.00 Uhr), Wochenende (8.00 bis 22.00 Uhr),
Feiertage. Alle diese Ereignisse haben die Startaktion
Modusauswahl **Komfort** des Thermostats und als Endaktion die
Modus **Eco** :

![Actions de l'agenda](../images/agendaactions.png)

Für die Programmierung der Abendveranstaltung :

![Programmierung de l'évènement](../images/agendaprogrammation.png)

Wiederholen Sie dies einfach für jede Veranstaltung, um diese Agenda zu erhalten
bunt monatlich :

![affichage mensuel de l'agenda](../images/agendamensuel.png)

Zurück zur Thermostatkonfiguration können Sie auf die zugreifen
Kalenderereignisse direkt über die Registerkarte Programmierung :

![onglet programmation du
Thermostat] (../ images / Thermostat tabprogrammation.png)

Visualisierung des Thermostatbetriebs
---------------------------------------------

Sobald der Thermostat konfiguriert ist, ist es wichtig, ihn zu überprüfen
Effizienz.

![Menu de visualisation des
Thermostate] (../ images / menuaccueerThermostats.png)

Dans le menu `Accueer`, on troderve le soders-menu `Thermostat`. Das Fenster
Das bei Auswahl dieses Menüs angezeigte Menü ist in drei Bereiche unterteert
:

-   Das Thermostat-Widget, um den sofortigen Status des anzuzeigen
    Thermostat,

-   ein Diagramm, das die kumulierte Heizzeit pro Tag darstellt (in
    Anzahl der Stunden),

-   Ein weiteres Diagramm, das den Sollwert anzeigt, sind Temperaturkurven
    Innen- und Heizungsstatus.

![cumul du temps de chauffe du
Thermostat] (../ images / graphecumultempsdechauffe.png)

*Diagramm der kumulativen Heizzeit*

![graphe des coderrbes du
Thermostat] (../ images / graphecoderrbesThermostat.png)

*Thermostatkurvendiagramm*

Faq
===

>**Können wir den Thermostat mit einer Fußbodenheizung verwenden, die eine hohe Trägheit hat? ?**
>
>    Der Thermostat passt sich aber praktisch allen Fällen an
>    Dies erfordert eine gründliche Analyse Ihrer Installation
>    Passen Sie die Koeffizienten an, wenn Sie sich in a befinden
>    besondere Situation. Siehe den Abschnitt zur * Konfiguration
>    Erweitert *, um die Koeffizienten anzupassen, insbesondere im Fall von a
>    Fußbodenheizung. Mehrere Themen im Forum beschäftigen sich
>    Verwendung des Thermostats für verschiedene Heizarten
>    (Herd, Fußbodenheizungskessel usw.)

>**Meine Koeffizienten bleiben in Bewegung**
>
>   Dies ist normal, das System korrigiert ständig seine Koeffizienten
>   dank des selbstlernenden Systems

>**Wie lange dauert das Lernen im Zeitmodus? ?**
>
>   Es dauert durchschnittlich 7 Tage, bis das System gelernt und reguliert hat
>   optimaler Weg

>**Ich kann meinen Thermostat nicht programmieren**
>
>   Die Thermostatprogrammierung kann entweder durch ein Szenario erfolgen,
>   entweder mit dem Agenda Plugin.

>**Mein Thermostat scheint nie in den Heizungs- oder Klimamodus zu wechseln**
>
>   Wenn der Thermostat keine der Heizung entsprechende Steuerung hat
>    und / oder Klimaanlage kann nicht in diese Modi umgeschaltet werden.

>**Egal wie ich die Temperatur oder den Modus ändere, der Thermostat kehrt immer zum vorherigen Zustand zurück**
>
>   Stellen Sie sicher, dass Ihr Thermostat nicht verriegelt ist

>**Im Verlaufsmodus ändert mein Thermostat nie den Zustand**
>
>   Ist das, dass die Temperatursensoren nicht automatisch hochfahren
>    Für ihren Wert ist es ratsam, eine "Cron de
>    Kontrolle"

>**Thermostatkurven (insbesondere der Sollwert) scheinen nicht richtig zu sein**
>
>   Schauen Sie sich die Glättungsseite des betreffenden Bestellverlaufs an. Um die Effizienz zu steigern, mittelt Jeedom die Werte über 5 Minuten und dann über die Stunde.

>**Die Registerkarte Modus / Aktion ist leer und wenn ich auf die Schaltfläche Hinzufügen klicke, geschieht nichts**
>
> Versuchen Sie, AdbSchloss (oder einen anderen WerbebSchlosser) zu deaktivieren. Aus unbekannten Gründen bSchlossieren diese das JavaScript der Seite ohne Grund.
