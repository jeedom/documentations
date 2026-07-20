# Die Zusammenfassungen

## Entdeckung von Zusammenfassungen

Jeedom bietet eine sehr einfache und übersichtliche Möglichkeit, die Situation verschiedener Komponenten Ihres Hauses anzuzeigen, sodass Sie sofort sehen können, wie viele Lichter an sind, welche Rollläden geöffnet sind, den Alarmstatus, die Temperatur usw.

Die Zusammenfassungen werden in Form kleiner Symbole in der Jeedom-Leiste oben und auf jedem Objekt (Dashboard und Zusammenfassung) angezeigt). Beim Anklicken können Sie direkt die in der Zusammenfassung enthaltene Ausrüstung sehen, auf die Sie geklickt haben, um gegebenenfalls darauf zu reagieren.

Es sind zwei Arten von Zusammenfassungen zu unterscheiden :

- Die Gesamtzusammenfassung : Dies ist der Satz von Zusammenfassungssymbolen, die in der Jeedom-Leiste angezeigt werden.
- Themenzusammenfassungen : Für jedes Objekt gibt es eine eigene Zusammenfassung, die in der Zusammenfassung im Objekt und im Dashboard rechts neben dem Objektnamen angezeigt wird.

![Entdeckung von Zusammenfassungen](images/summary-intro.gif)

Die globale Zusammenfassung kann nicht direkt eingestellt werden. Es ist ein Konzentrat von Zusammenfassungen anderer Objekte. Wenn zum Beispiel ein Licht in der Küche und zwei im Wohnzimmer leuchten, zeigt die Gesamtübersicht drei Lichter an. All dies ist natürlich konfigurierbar, wie wir weiter unten sehen werden.

Die Zusammenfassungen werden daher für jedes Objekt auf der Registerkarte „Zusammenfassung“ konfiguriert !

> Remarque
>
> Diese Dokumentation wurde auf einem Core v4.2 . geschrieben und illustriert. Einige Optionen können daher je nach Version variieren.

## Allgemeine Konfiguration von Zusammenfassungen

Bevor die Konfiguration eines Objekts angezeigt wird, um eine Zusammenfassung konfigurieren zu können, muss Folgendes vorhanden sein:.

Gehe zu **Einstellungen → System → Konfiguration** dann auf der Registerkarte **Zusammenfassungen**.

{% include lightbox.html src="images/summary-admin.jpg" data="settings" title="Zusammenfassungen konfigurieren" imgstyle="width:auto;display: block;margin: 0 auto;" %}

Hier haben Sie die Liste aller Zusammenfassungen, die Sie für jedes Objekt konfigurieren können. Hier können wir die Zusammenfassungen konfigurieren *Gegenwart* (wenn man genau hinschaut, sieht man in der Gesamtzusammenfassung, dass eine Person zu Hause ist), *Alarm*, *Bewegung*, *Heizung* etc. Et bien sûr, vous pouvez supprimer et ajouter des types de résumé ici afin de les avoir à disposition ensuite sur les objets.

Seien Sie versichert, dass einige Dinge in dieser Vorschau konfiguriert wurden, aber standardmäßig hat Jeedom eine Liste von Zusammenfassungen mit Standardparametern.

Lass uns durchgehen, was wir hier definieren werden:

- **Taste** : Es ist ein Wert, der in dieser Liste eindeutig sein muss, die als Referenz für den Core dient.
- **Name** : Der Name (Typ) der Zusammenfassung, die Sie in den Objektparametern finden.
- **Berechnung** : Die für den angezeigten Wert verwendete Berechnungsart. Die Summe für Zustände, der Durchschnitt für z.B. Temperaturen, Luftfeuchtigkeit oder der Textwert.
- **Symbol** : Das Zusammenfassungssymbol, das auf dem Objekt und möglicherweise in der Gesamtzusammenfassung angezeigt wird.
- **Wenn null-Symbol** : Zusammenfassungssymbol, wenn der Wert 0 beträgt. Ermöglicht Ihnen die Angabe eines anderen Symbols, z. B. eines geschlossenen Verschlusses, ausgeschaltetem Licht oder einer anderen Farbe usw.
- **Einheit** : Zusammenfassungseinheit, die rechts neben dem Wert angezeigt wird.
- **Nummer verstecken** : Zeigt nie den Summenwert an (die Zahl rechts neben dem Symbol).
- **Zahl ausblenden, wenn Null** : Ermöglicht das Ausblenden des Zusammenfassungswerts, nur wenn er 0 ist. Wir können uns daher wünschen, dass das Symbol für den offenen Fensterladen mit der Anzahl der geöffneten Fensterläden angezeigt wird und das Symbol für den geschlossenen Fensterladen ohne die Nummer, wenn alle Fensterläden geschlossen sind.
- **Zählmethode** : Wenn Sie Binärdaten zählen, müssen Sie diesen Wert auf „Binär“ setzen. Beispiel : Wenn Sie die Anzahl der leuchtenden Lampen zählen, aber nur den Wert des Dimmers (0 bis 100) haben, müssen Sie einen Binärwert eingeben, so dass Jeedom davon ausgeht, dass die Lampe eingeschaltet ist, wenn der Wert größer als 1 ist.
- **Wenn nein** : Zusammenfassung anzeigen, auch wenn der Wert 0 ist.
- **Ignorieren, wenn** : Eine Bestellung für diese Zusammenfassung ignorieren, wenn sie x Minuten lang nicht aktualisiert wurde.
- **Link zu einem virtuellen** : Startet die Erstellung eines virtuellen Geräts mit Befehlen, die den Werten der Zusammenfassung entsprechen.
- **Zusammenfassung löschen** : Mit der letzten Schaltfläche ganz rechts können Sie die Zusammenfassung löschen.

>**HINWEIS**
>
>Um ein Symbol zu löschen, doppelklicken Sie einfach darauf

Zum Beispiel hier :

- Wenn wir uns die Animation am Anfang der Seite ansehen, entspricht die dritte Zusammenfassung **Bewegung**, zeigt in rot an, dass es gibt *1* Bewegung. In der obigen Vorschau sehen wir, dass es sich um das Symbol des grünen Kreises ohne Nummer handelt. In der Tat, wenn Sie sich die Zeile ansehen, ist das grüne Symbol konfiguriert als **Wenn null-Symbol** und der Wert wird nicht angezeigt, weil **Zahl ausblenden, wenn Null** wird geprüft. Ebenso die Zusammenfassung *Tür* ist grün, ohne Zahl, während die Zusammenfassung *Hell* ist gelb, mit der Anzahl der Lichter an.

> Conseil
>
> Sie können auch die Reihenfolge ändern, in der die Zusammenfassungen angezeigt werden, indem Sie eine Linie mit der Maus nach oben oder unten ziehen.


## Objektzusammenfassungen konfigurieren

Sobald die Liste der Zusammenfassungen in der Jeedom-Konfiguration verfügbar ist, können wir sie daher für jedes Objekt verwenden.

In **Werkzeuge → Objekte**, hier auf dem Objekt Salon :

{% include lightbox.html src="images/summary-object-1.jpg" data="settings" title="Abstrakt objet" imgstyle="width:auto;display: block;margin: 0 auto;" %}

Hier haben wir zwei Teile :

### Zusammenfassungen konfigurieren

In den Spalten der Tabelle werden alle Arten von Zusammenfassungen angezeigt, die in der oben gezeigten Konfiguration verfügbar sind. Für jede Zusammenfassung gibt es drei Optionen :

- **In der globalen Zusammenfassung nach oben gehen** : Hier wählen Sie für jede Zusammenfassung aus, ob die dieses Objekts in der Gesamtzusammenfassung berücksichtigt werden soll. Hier zum Beispiel die Zusammenfassung *Verschluss* du Salon ist markiert, also taucht es in der globalen Zusammenfassung auf. Wenn wir uns die Gesamtübersicht ansehen, sind in den 6 angezeigten geöffneten Fenstern die der Show ! Umgekehrt, wenn wir uns die Zusammenfassung ansehen *TempExt* (16,1 °C in der globalen Zusammenfassung), ist es deaktiviert, da ich nur die Temperatur des Garden-Objekts in der globalen Zusammenfassung zurückgeben möchte.
- **Auf dem Desktop ausblenden** : Um diese Zusammenfassung nicht neben dem Namen des Objekts auf dem Dashboard anzuzeigen.
- **Auf dem Handy ausblenden** : Um diese Zusammenfassung nicht neben dem Namen des Objekts in Mobile anzuzeigen.

### Zusammenfassungen Bestellungen

Jede Registerkarte stellt eine Art von Zusammenfassung dar, die in der Jeedom-Konfiguration definiert ist. Klicke auf **Bestellung hinzufügen** damit es in der Zusammenfassung berücksichtigt wird. Sie haben die Wahl, den Befehl jeder Jeedom-Ausrüstung auszuwählen, auch wenn sie dieses Objekt nicht als Elternteil hat.

Hier sehen wir die drei Komponenten, die in der Zusammenfassung dieses Objekts vorhanden sind. Und *Verschluss* Wenn sie in der globalen Zusammenfassung aktiviert sind, werden sie auch in dieser gezählt.

### Tab "Übersicht" nach Gerät

Auf dieser Seite können Sie die Sammelbestellungen auf andere Weise auswählen : es zeigt alle Geräte an, die das Objekt als Eltern haben. Auf jedem Gerät wird durch Anklicken die Liste der Geräteinfo-Befehle angezeigt, rechts die Möglichkeit, diesen Befehl einer oder mehreren Zusammenfassungen des Objekts zuzuweisen.

Wenn bereits mindestens eine Zusammenfassung definiert ist, wird die Auswahl orange angezeigt und rechts sind die Zusammenfassungstypen aktiviert.

## Zusammenfassungen und virtuelle

Die Zusammenfassungen pflegen mit dem [Virtuelles Plugin](https://market.jeedom.com/index.php?v=d&p=market_display&id=21) eine mehrdeutige Beziehung, nicht immer leicht zu verstehen, aber dennoch sehr mächtig, zumal seit Core v4.2 und Aktionen auf Zusammenfassung ! Noch da ? Wir machen weiter...

Normalerweise sollten Sie nun einige Zusammenfassungen zu Ihren Objekten erstellt haben und somit mehrere Informationen zu Ihren Objekten und in der Gesamtzusammenfassung haben, wie z. B. Ihre geöffneten Fensterläden, Ihre Lichter usw.

Diese Zusammenfassungen sind äußerst praktisch, um sehr schnell einen Gesamt- und visuellen Zustand der Unterkunft zu erhalten, und mit einem Klick können Sie darauf reagieren, indem Sie die Ausstattung in einer Zusammenfassung anzeigen. Aber wenn wir mit der Argumentation fortfahren, bedeutet das, dass diese Informationen vorhanden sind ... und dass wir es zu schätzen wissen würden, sie in einem Szenario zu verwenden !

In der Tat, da meine Zusammenfassung weiß, dass ich 3 Lichter habe, warum kann ich dann nicht in einem Szenario testen, ob ein Licht an ist? ? Oder lösen Sie das Szenario sogar aus, wenn ein Licht angeht ? Oder schalten Sie mit nur einem Handgriff alle Lichter im Wohnzimmer aus ? Nun, all dies ist möglich, indem ein Virtual mit einer Zusammenfassung verknüpft wird !

Gehe zu **Einstellungen → System → Konfiguration** dann auf der Registerkarte **Zusammenfassungen**.

An der Leitung *Hell*, ganz rechts auf den Button klicken **Virtuell erstellen**.

Gehe jetzt zu **Plugins → Programmierung → Virtuell**

Für jedes Objekt mit Befehlen in der Zusammenfassung *Hell*, Sie haben jetzt einen neuen virtuellen Namen *Abstrakt* mit dem übergeordneten Objekt. Sie haben auch ein neues virtuelles *Gesamtübersicht* ohne übergeordnetes Objekt, entsprechend der globalen Zusammenfassung von Jeedom.

Indem Sie die virtuelle Show öffnen und auf die Registerkarte gehen **Aufträge**, hier ist was wir finden :

{% include lightbox.html src="images/summary-virtual.jpg" data="settings" title="Virtuel résumé" imgstyle="width:auto;display: block;margin: 0 auto;" %}

- Eine Bestellung **Die Info** *Hell* : Hier finden Sie Informationen zur Anzahl der eingeschalteten Lichter im Salon, da wir uns in der virtuellen Zusammenfassung des Salons befinden.
- Eine Bestellung **Handlung** *Lichttaste auf Licht* : Durch Auslösen dieser Aktion schalten wir alle Zusammenfassungsbefehle ein **Hell**, hier vom Salonobjekt.
- Eine Bestellung **Handlung** *Lichttaste Aus Licht* : Durch das Auslösen dieser Aktion werden alle Zusammenfassungsbefehle deaktiviert **Hell**, hier vom Salonobjekt.
etc.

Du solltest das Prinzip verstanden haben ! Nun stehen uns für jedes Objekt und für die globale Zusammenfassung die entsprechenden Informationen und Aktionen zur Verfügung, für jede Zusammenfassung, für die wir ein Virtual verknüpft haben !

Wir können es jetzt wie jede andere Information oder Aktion einer realen Ausrüstung in einem Szenario verwenden !

Zum Beispiel :

- Ein Schalter#[None][Global Summary][Bewegung]# > 0`, das ein Szenario auslöst, sobald eine Bewegung in der Unterkunft erkannt wird.
- Ein IF-Ausdruck#[Salon][Summary][Hell]# > 0 `der testet, ob ein Licht im Wohnzimmer an ist.
- Eine Aktion `#[Salon][Summary][Verschluss Shutter Button Slider]#`mit dem Wert 0, der alle Fensterläden der Show schließt.

### Aktionen für Zusammenfassungen

Wie bereits erwähnt, haben Summary Virtuals nicht nur die *Die Info* Zusammenfassungen, aber auch *Handlung* verfügbar auf den verschiedenen konfigurierten Geräten in der Zusammenfassung. Diese Aktionen sind natürlich im Szenario zugänglich, aber auch über die Benutzeroberfläche, von den Zusammenfassungssymbolen hier und da !

Wenn Sie beispielsweise Summary Virtuals für die Zusammenfassung erstellt haben *Hell*, Sie können Strg + Klicken Sie auf das Symbol dieser Zusammenfassung. Anschließend erscheint ein Popup mit den verschiedenen Aktionen, mit denen Sie beispielsweise alle Lichter im Haus auf einmal ausschalten können !

{% include lightbox.html src="images/summary-virtual-actions.jpg" data="settings" title="Aktionen für Zusammenfassungen" imgstyle="width:auto;display: block;margin: 0 auto;" %}

Wie wir gesehen haben, stellen die Zusammenfassungen ein weites Thema dar, das zu Beginn des Lebens eines Jeedomianers nicht immer ganz einfach zu erfassen, aber gut zu wissen ist !
