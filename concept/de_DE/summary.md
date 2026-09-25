# Zusammenfassungen

## Übersicht über die Zusammenfassungen

Jeedom bietet eine sehr einfache und übersichtliche Möglichkeit, den Status verschiedener Komponenten in Ihrem Zuhause anzuzeigen, sodass Sie auf einen Blick sehen können, wie viele Lampen eingeschaltet sind, welche Rollläden geöffnet sind, wie der Status der Alarmanlage ist, wie hoch die Temperatur ist usw.

Die Übersichten werden als kleine Symbole in der Jeedom-Leiste oben und bei jedem Objekt (Dashboard und Übersicht) angezeigt. Wenn Sie darauf klicken, können Sie direkt die Geräte anzeigen, die in der angeklickten Übersicht enthalten sind, um bei Bedarf Maßnahmen zu ergreifen.

Man muss zwischen zwei Arten von Zusammenfassungen unterscheiden:

- Gesamtübersicht: Dies ist die Gesamtheit der Übersichts-Symbole, die in der Jeedom-Leiste angezeigt werden.
- Objektzusammenfassungen: Jedes Objekt verfügt über eine eigene Zusammenfassung, die in der Objektübersicht und auf dem Dashboard rechts neben dem Objektnamen angezeigt wird.

![Übersicht über die Zusammenfassungen](../images/summary-intro.gif)

Die Gesamtübersicht lässt sich nicht direkt konfigurieren. Sie ist eine Zusammenfassung der Übersichten der anderen Objekte. Wenn beispielsweise eine Lampe in der Küche und zwei im Wohnzimmer eingeschaltet sind, zeigt die Gesamtübersicht an, dass drei Lampen eingeschaltet sind. All dies ist natürlich konfigurierbar, wie wir weiter unten sehen werden.

Die Zusammenfassungen lassen sich also für jedes Objekt auf der Registerkarte „Zusammenfassung“ konfigurieren!

> Anmerkung
>
> Diese Dokumentation wurde auf einem Core v4.2 verfasst und illustriert. Einige Optionen können daher je nach Ihrer Version abweichen.

## Allgemeine Konfiguration der Zusammenfassungen

Bevor man die Konfiguration für ein Objekt anzeigen kann, muss dieses Objekt bereits vorhanden sein, damit eine Zusammenfassung konfiguriert werden kann.

Gehen Sie zu **Einstellungen → System → Konfiguration** und dann auf die Registerkarte **Übersicht**.

{% include lightbox.html src="../images/summary-admin.jpg" data="settings" title="Configuration des résumés" imgstyle="width:auto;display: block;margin: 0 auto;" %}

Hier finden Sie eine Liste aller Übersichten, die Sie für jedes Objekt konfigurieren können. Hier können wir die Meldungsarten *Anwesenheit* (wenn Sie genau hinschauen, sehen Sie in der Gesamtübersicht, dass sich eine Person im Haus befindet), *Alarm*, *Bewegung*, *Heizung* usw. konfigurieren. Und natürlich können Sie hier Meldungsarten löschen und hinzufügen, um sie anschließend für die einzelnen Objekte zur Verfügung zu haben.

Keine Sorge, einige Elemente in dieser Übersicht wurden zwar angepasst, aber standardmäßig verfügt Jeedom über eine Liste von Übersichten mit Standardeinstellungen.

Lassen Sie uns einen Blick darauf werfen, was wir hier definieren werden:

- **Schlüssel**: Dies ist ein Wert, der in dieser Liste eindeutig sein muss und dem Core als Referenz dient.
- **Name**: Der Name (Typ) der Zusammenfassung, den Sie in den Einstellungen der Objekte finden.
- **Berechnung**: Die Art der Berechnung, die für den angezeigten Wert verwendet wird. Die Summe für Berichte, der Durchschnitt beispielsweise für Temperaturen, Luftfeuchtigkeit oder der Textwert.
- **Symbol**: Das Symbol der Zusammenfassung, das auf dem Objekt und gegebenenfalls in der Gesamtzusammenfassung angezeigt wird.
- **Symbol „Null“**: Symbol der Zusammenfassung, wenn deren Wert 0 ist. Ermöglicht die Festlegung eines anderen Symbols, z. B. eines geschlossenen Rollladens, eines ausgeschalteten Lichts oder einer anderen Farbe usw.
- **Einheit**: Einheit der Zusammenfassung, die rechts neben dem Wert angezeigt wird.
- **Zahl ausblenden**: Der Wert der Zusammenfassung (die Zahl rechts neben dem Symbol) wird niemals angezeigt.
- **Zahl ausblenden, wenn null**: Ermöglicht es, den Wert der Zusammenfassung auszublenden, sofern dieser 0 beträgt. So kann man beispielsweise das Symbol für „Fensterläden geöffnet“ mit der Anzahl der geöffneten Fensterläden anzeigen lassen und das Symbol für „Fensterläden geschlossen“ ohne die Anzahl, wenn alle Fensterläden geschlossen sind.
- **Zählmethode**: Wenn Sie einen binären Wert zählen, müssen Sie diesen Wert auf „binär“ setzen. Beispiel: Wenn Sie die Anzahl der eingeschalteten Lampen zählen, aber nur den Wert des Dimmers (0 bis 100) haben, müssen Sie „binär“ auswählen, damit Jeedom davon ausgeht, dass die Lampe eingeschaltet ist, wenn der Wert größer als 1 ist.
- **Wenn null**: Die Zusammenfassung auch dann anzeigen, wenn ihr Wert 0 ist.
- **Ignorieren, wenn**: Einen Befehl für diese Zusammenfassung ignorieren, wenn seit x Minuten kein Update vorliegt.
- **Mit einem virtuellen Gerät verknüpfen**: Startet die Erstellung eines virtuellen Geräts mit Befehlen, die den Werten in der Zusammenfassung entsprechen.
- **Zusammenfassung löschen**: Mit der letzten Schaltfläche ganz rechts können Sie die Zusammenfassung löschen.

>**HINWEIS**
>
>Um ein Symbol zu löschen, doppelklicken Sie einfach darauf

Zum Beispiel hier:

- Wenn wir uns die Animation am Anfang der Seite ansehen, zeigt die dritte Zusammenfassung, die **Bewegung** entspricht, in Rot an, dass *1* Bewegung vorliegt. In der obigen Vorschau sehen wir, dass es sich um das Symbol mit dem grünen Kreis ohne Zahl handelt. Wenn Sie sich die Zeile genauer ansehen, ist das grüne Symbol tatsächlich als **Symbol bei Null** konfiguriert, und der Wert wird nicht angezeigt, da **Zahl bei Null ausblenden** aktiviert ist. Ebenso ist die Zusammenfassung *Tür* grün und ohne Zahl, während die Zusammenfassung *Licht* gelb ist und die Anzahl der eingeschalteten Lichter anzeigt.

> Beratung
>
> Sie können die Reihenfolge, in der die Zusammenfassungen angezeigt werden, auch ändern, indem Sie eine Zeile mit der Maus nach oben oder unten verschieben.


## Konfiguration der Objektzusammenfassungen

Sobald die Liste der Zusammenfassungen in der Jeedom-Konfiguration verfügbar ist, können wir sie für jedes Objekt verwenden.

Unter **Extras → Objekte**, hier beim Objekt „Wohnzimmer“:

{% include lightbox.html src="../images/summary-object-1.jpg" data="settings" title="Résumé objet" imgstyle="width:auto;display: block;margin: 0 auto;" %}

Hier haben wir zwei Teile:

### Einrichtung von Zusammenfassungen

Die Spalten der Tabelle zeigen die einzelnen Arten von Zusammenfassungen, die in der Konfiguration verfügbar sind, wie oben dargestellt. Für jede Zusammenfassung gibt es drei Optionen:

- **In die Gesamtübersicht aufnehmen**: Hier legen Sie für jede Übersicht fest, ob die Übersicht dieses Objekts in die Gesamtübersicht aufgenommen werden soll. In diesem Beispiel ist beispielsweise die Übersicht *Fensterläden* im Wohnzimmer angekreuzt, sodass sie in die Gesamtübersicht aufgenommen wird. Wenn man sich die Gesamtübersicht ansieht, sind unter den 6 angezeigten geöffneten Fenstern auch die des Wohnzimmers zu sehen! Umgekehrt ist die Übersicht *TempExt* (16,1 °C in der Gesamtübersicht) nicht markiert, da ich nur die Temperatur des Objekts „Garten“ in die Gesamtübersicht aufnehmen möchte.
- **Auf dem Desktop ausblenden**: Damit diese Zusammenfassung nicht neben dem Namen des Objekts auf dem Dashboard angezeigt wird.
- **Auf Mobilgeräten ausblenden**: Damit diese Zusammenfassung auf Mobilgeräten nicht neben dem Objektnamen angezeigt wird.

### Befehle für Zusammenfassungen

Jede Registerkarte steht für eine in der Jeedom-Konfiguration definierte Zusammenfassungsart. Klicken Sie auf **Befehl hinzufügen**, damit dieser in der Zusammenfassung berücksichtigt wird. Sie können einen Befehl von jedem beliebigen Jeedom-Gerät auswählen, auch wenn dieses nicht diesem Objekt untergeordnet ist.

Hier sehen wir die drei Bereiche, die in der Zusammenfassung dieses Objekts enthalten sind. Und da *Bereich* in der Gesamtzusammenfassung aktiviert ist, werden sie auch dort mitgezählt.

### Registerkarte „Zusammenfassung nach Gerät“

Auf dieser Seite können Sie die Befehle für Zusammenfassungen auf andere Weise auswählen: Hier werden alle Geräte angezeigt, die das Objekt als übergeordnetes Element haben. Wenn Sie auf ein Gerät klicken, wird die Liste der Info-Befehle für dieses Gerät angezeigt, wobei Sie rechts die Möglichkeit haben, diesen Befehl einer oder mehreren Zusammenfassungen des Objekts zuzuweisen.

Wenn bereits mindestens eine Zusammenfassung definiert ist, wird die Auswahlleiste orange angezeigt, wobei die Zusammenfassungstypen auf der rechten Seite markiert sind.

## Zusammenfassungen und virtuelle Inhalte

Die Zusammenfassungen beziehen sich auf das [Virtuelles Plugin](https://market.jeedom.com/index.php?v=d&p=market_display&id=21) Eine vieldeutige Beziehung, die nicht immer leicht zu verstehen ist, aber dennoch sehr leistungsstark ist, insbesondere seit Core v4.2 und den Aktionen in der Zusammenfassung! Noch da? Dann geht’s weiter...

Normalerweise sollten Sie inzwischen einige Zusammenfassungen zu Ihren Objekten erstellt haben und somit über verschiedene Informationen zu Ihren Objekten sowie in der Gesamtübersicht verfügen, wie z. B. Ihre geöffneten Rollläden, Ihre Beleuchtung usw.

Diese Übersichten sind äußerst praktisch, um sich sehr schnell einen umfassenden und visuellen Überblick über die Wohnung zu verschaffen und mit einem Klick darauf zu reagieren, indem man die Geräte einer Übersicht anzeigt. Wenn man diesen Gedanken jedoch weiterführt, bedeutet das, dass diese Informationen vorhanden sind... Und dass man sie gerne in einem Szenario nutzen würde!

Da mein Überblick ja weiß, dass drei Lampen eingeschaltet sind, warum sollte man dann nicht in einem Szenario prüfen können, OB eine Lampe eingeschaltet ist? Oder das Szenario sogar auslösen, wenn eine Lampe eingeschaltet wird? Oder sogar alle Lampen im Wohnzimmer mit einer einzigen Aktion ausschalten? All das ist möglich, indem man ein virtuelles Objekt mit einem Überblick verknüpft!

Gehen Sie zu **Einstellungen → System → Konfiguration** und dann auf die Registerkarte **Übersicht**.

Klicken Sie in der Zeile *Licht* ganz rechts auf die Schaltfläche **Virtuell erstellen**.

Gehen Sie nun zu **Plugins → Programmierung → Virtuell**

Für jedes Objekt, das über Steuerelemente in der Übersicht *Beleuchtung* verfügt, gibt es nun ein neues virtuelles Objekt namens *Übersicht* mit dem Objekt als übergeordnetem Element. Außerdem gibt es ein neues virtuelles Objekt *Gesamtübersicht* ohne übergeordnetes Objekt, das der Gesamtübersicht von Jeedom entspricht.

Wenn man die virtuelle Messe öffnet und auf die Registerkarte **Bestellungen** wechselt, findet man Folgendes:

{% include lightbox.html src="../images/summary-virtual.jpg" data="settings" title="Virtuel résumé" imgstyle="width:auto;display: block;margin: 0 auto;" %}

- Ein **Info**-Befehl *Licht*: Dieser enthält Informationen zur Anzahl der eingeschalteten Lampen im Wohnzimmer, da wir uns in der virtuellen Übersicht des Wohnzimmers befinden.
- Ein **Aktion**-Befehl *Licht Light Button On*: Durch Auslösen dieser Aktion werden alle Befehle der Übersicht **Licht** eingeschaltet, in diesem Fall die des Objekts „Wohnzimmer“.
- Ein **Aktion**-Befehl *Licht Light Button Off*: Durch Auslösen dieser Aktion werden alle Befehle der Übersicht **Licht** ausgeschaltet, in diesem Fall die des Objekts „Wohnzimmer“.
usw.

Das Prinzip sollten Sie nun verstanden haben! Wir verfügen nun über die entsprechenden Informationen und Aktionen für jedes Objekt sowie für die Gesamtübersicht – und zwar für jede Übersicht, der ein virtuelles Objekt zugeordnet wurde!

Wir können diese Informationen nun also wie jede andere Information oder Aktion eines realen Geräts in einem Szenario nutzen!

Zum Beispiel:

- Ein Auslöser `#[None][Global Summary][Mouvement]# > 0` die ein Szenario auslöst, sobald in der Wohnung eine Bewegung erkannt wird.
- Ein IF-Ausdruck `#[Salon][Summary][Lumière]# > 0 ` die prüft, ob im Wohnzimmer ein Licht an ist.
- Eine Aktion `#[Salon][Summary][Volet Shutter Button Slider]#` mit dem Wert 0, wodurch alle Rollläden im Wohnzimmer geschlossen werden.

### Aktionen in Zusammenfassungen

Wie bereits erwähnt, enthalten die Übersichts-Virtuelle nicht nur die *Info*-Daten der Übersichten, sondern auch die *Aktionen*, die für die verschiedenen in der Übersicht konfigurierten Geräte verfügbar sind. Diese Aktionen sind natürlich in Szenarien verfügbar, aber auch über die Benutzeroberfläche, und zwar über die hier und da angezeigten Übersichts-Symbole!

Wenn Sie beispielsweise die virtuellen Gruppen für die Gruppe *Licht* erstellt haben, können Sie mit Strg+Klick auf das Symbol dieser Gruppe klicken. Daraufhin erscheint ein Popup-Fenster mit verschiedenen Aktionen, mit denen Sie beispielsweise alle Lichter im Haus auf einmal ausschalten können!

{% include lightbox.html src="../images/summary-virtual-actions.jpg" data="settings" title="Actions sur résumés" imgstyle="width:auto;display: block;margin: 0 auto;" %}

Wie wir gesehen haben, sind Zusammenfassungen ein umfangreiches Thema, das für Jeedom-Neulinge anfangs nicht immer ganz einfach zu verstehen ist, das man aber unbedingt kennen sollte!
