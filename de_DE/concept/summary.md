# Die Zusammenfassungen

## Entdeckung von Zusammenfassungen

Jeedom bietet eine sehr einfache und übersichtliche Möglichkeit, die Situation verschiedener Komponenten Ihres Hauses anzuzeigen, sodass Sie sofort sehen können, wie viele Lichter an sind, Rollläden geöffnet, der Alarmzustand, die Temperatur usw.

Die Zusammenfassungen werden als kleine Symbole in der Jeedom-Leiste oben und auf jedem Objekt angezeigt. Bei einem Klick können Sie die Ausrüstung direkt sehen, die in der Zusammenfassung enthalten ist, auf die Sie geklickt haben.

Wir müssen zwei Arten von Zusammenfassungen unterscheiden :

- Die Gesamtzusammenfassung : Dies ist der Satz von Zusammenfassungssymbolen, die in der Jeedom-Leiste angezeigt werden.
- Themenzusammenfassungen : Jedes Objekt hat seine eigene Zusammenfassung, die in der Zusammenfassung im Objekt und im Dashboard rechts neben dem Namen des Objekts angezeigt wird.

![Entdeckung von Zusammenfassungen](images/summary-intro.gif)

Die globale Zusammenfassung kann nicht direkt eingestellt werden. Es ist ein Konzentrat von Zusammenfassungen anderer Objekte. Wenn zum Beispiel ein Licht in der Küche und zwei im Wohnzimmer leuchten, zeigt die Gesamtübersicht drei Lichter an. All dies ist natürlich konfigurierbar, wie wir weiter unten sehen werden.

Die Zusammenfassungen werden daher für jedes Objekt in der Registerkarte ... Zusammenfassung konfiguriert !

> Remarque
>
> Diese Dokumentation wurde auf einem Core v4.2 . geschrieben und illustriert. Einige Optionen können daher je nach Version variieren.

## Allgemeine Übersichtskonfiguration

Bevor die Konfiguration eines Objekts angezeigt wird, um eine Zusammenfassung konfigurieren zu können, muss Folgendes vorhanden sein:.

Gehe zu **Einstellungen → System → Konfiguration** dann auf der Registerkarte **Zusammenfassungen**.

![Zusammenfassungen konfigurieren](images/summary-admin.jpg)

Hier haben Sie die Liste aller Zusammenfassungen, die Sie für jedes Objekt konfigurieren können. Hier können wir die Zusammenfassungen konfigurieren *Gegenwart* (wenn man genau hinschaut, sieht man in der Gesamtzusammenfassung, dass eine Person zu Hause ist), *Alarm*, *Bewegung*, *Heizung* etc. Et bien sûr, vous pouvez supprimer et ajouter des types de résumé ici, afin de les avoir à disposition ensuite sur les objets.

Seien Sie versichert, dass einige Dinge in dieser Vorschau konfiguriert wurden, aber standardmäßig hat Jeedom eine Liste von Zusammenfassungen mit Standardparametern.

Lass uns durchgehen, was wir hier definieren werden:

- **Taste** : Es ist ein Wert, der in dieser Liste eindeutig sein muss, die als Referenz für den Core dient.
- **Name** : Der Name (Typ) der Zusammenfassung, die Sie in den Objektparametern finden.
- **Berechnung** : Die für den angezeigten Wert verwendete Berechnungsart. Die Summe für Zustände, der Durchschnitt für z.B. Temperaturen, Luftfeuchtigkeit oder der Textwert.
- **Symbol** : Das Zusammenfassungssymbol, das auf dem Objekt und möglicherweise in der Gesamtzusammenfassung angezeigt wird.
- **Wenn null-Symbol** : Zusammenfassungssymbol, wenn der Wert 0 beträgt. Ermöglicht Ihnen, ein anderes Symbol anzugeben, z. B. einen geschlossenen Verschluss, ein ausgeschaltetes Licht oder eine andere Farbe usw.
- **Einheit** : Summeneinheit, die rechts neben dem Wert angezeigt wird.
- **Nummer verstecken** : Zeigt nie den Summenwert an (die Zahl rechts neben dem Symbol).
- **Zahl ausblenden, wenn Null** : Ermöglicht das Ausblenden des Zusammenfassungswerts, nur wenn er 0 ist. Wir können also wünschen, dass das Rollladensymbol mit ihrer Nummer geöffnet ist und das Rollladensymbol ohne die Nummer geschlossen ist, wenn alle Rollläden geschlossen sind.
- **Zählmethode** : Wenn Sie binäre Daten zählen, müssen Sie diesen Wert auf binär setzen, zum Beispiel, wenn Sie die Anzahl der brennenden Lampen zählen, aber nur den Wert des Dimmers (0 bis 100) haben, dann müssen Sie binär setzen, wie Jeedom berücksichtigt, dass, wenn der Wert größer als 1 ist, die Lampe eingeschaltet ist.
- **Wenn nein** : Zusammenfassung anzeigen, auch wenn der Wert 0 ist.
- **Ignorieren, wenn** : Eine Bestellung für diese Zusammenfassung ignorieren, wenn sie x Minuten lang nicht aktualisiert wurde.
- **Link zu einem virtuellen** : Startet die Erstellung eines virtuellen Geräts mit Befehlen, die den Werten der Zusammenfassung entsprechen.
- **Zusammenfassung löschen** : Mit der letzten Schaltfläche ganz rechts können Sie die Zusammenfassung der Zeile löschen.


Zum Beispiel hier :

- Wenn wir uns die Animation ansehen, die 3. Zusammenfassung, die entspricht **Bewegung** zeigt in rot an, dass es gibt *1* Bewegung. In der obigen Vorschau sehen wir, dass es sich um das Symbol des grünen Kreises ohne Nummer handelt. In der Tat, wenn Sie sich die Zeile ansehen, ist das grüne Symbol konfiguriert als **Wenn null-Symbol** und der Wert wird nicht angezeigt, weil **Zahl ausblenden, wenn Null** wird geprüft. Ebenso in der Vorschau die Zusammenfassung *Tür* ist grün, ohne Zahl, während die Zusammenfassung *Hell* ist gelb, mit der Anzahl der Lichter an.

> Tip
>
> Sie können auch die Reihenfolge ändern, in der die Zusammenfassungen angezeigt werden, indem Sie eine Linie mit der Maus nach oben oder unten ziehen.


## Objektzusammenfassungen konfigurieren

Sobald die Liste der Zusammenfassungen in der Jeedom-Konfiguration verfügbar ist, können wir sie daher für jedes Objekt verwenden.

In **Werkzeuge → Objekte**, hier auf dem Objekt Salon :

![Zusammenfassungen konfigurieren](images/summary-object-1.jpg)

Hier haben wir zwei Teile :

### Zusammenfassungen konfigurieren

Die Spalten der Tabelle zeigen jede Art von Zusammenfassung, die in der Konfiguration verfügbar ist, wie oben gezeigt. Für jede Zusammenfassung gibt es drei Optionen :

- **In der globalen Zusammenfassung nach oben gehen** : Hier wählen Sie für jede Zusammenfassung aus, ob die dieses Objekts in der Gesamtzusammenfassung berücksichtigt werden soll. Hier zum Beispiel die Zusammenfassung *Verschluss* du Salon ist markiert, also taucht es in der globalen Zusammenfassung auf. Wenn wir uns also die Gesamtübersicht ansehen, gibt es in den 6 angezeigten geöffneten Fenstern die der Show ! Umgekehrt, wenn wir uns die Zusammenfassung ansehen *TempExt* (16,1 °C in der globalen Zusammenfassung), ist es deaktiviert, da ich nur die Temperatur des Garden-Objekts in der globalen Zusammenfassung zurückgeben möchte.
- **Auf dem Desktop ausblenden** : Um diese Zusammenfassung nicht neben dem Namen des Objekts auf dem Dashboard anzuzeigen.
- **Auf dem Handy ausblenden** : Um diese Zusammenfassung nicht neben dem Namen des Objekts in Mobile anzuzeigen.

### Zusammenfassungen Bestellungen

Jede Registerkarte stellt eine Art von Zusammenfassung dar, die in der Jeedom-Konfiguration definiert ist. Klicke auf **Bestellung hinzufügen** damit es in der Zusammenfassung berücksichtigt wird. Sie haben die Wahl, den Befehl jeder Jeedom-Ausrüstung auszuwählen, auch wenn sie dieses Objekt nicht als Elternteil hat.

Hier sehen wir die drei Komponenten, die in der Zusammenfassung dieses Objekts vorhanden sind. Und *Verschluss* Wenn sie in der globalen Zusammenfassung aktiviert sind, werden sie auch in dieser gezählt.

### Tab "Übersicht" nach Gerät

Auf dieser Seite können Sie die Sammelbestellungen auf andere Weise auswählen : es zeigt alle Geräte an, die das Objekt als Eltern haben. Auf jedem Gerät wird durch Anklicken die Liste der Geräteinfo-Befehle angezeigt, rechts die Möglichkeit, diesen Befehl einer oder mehreren Zusammenfassungen des Objekts zuzuweisen.

Wenn bereits eine oder mehrere Zusammenfassungen definiert sind, wird der Selektor orange angezeigt, wobei die Zusammenfassungstypen rechts markiert sind.

## Zusammenfassungen und virtuelle

Die Zusammenfassungen pflegen mit dem [Virtuelles Plugin](https://market.jeedom.com/index.php?v=d&p=market_display&id=21) eine mehrdeutige Beziehung, nicht immer leicht zu verstehen, aber dennoch sehr mächtig, zumal seit Core v4.2 und Aktionen auf Zusammenfassung ! Noch da ? Wir machen weiter ...

Normalerweise sollten Sie jetzt einige Zusammenfassungen zu Ihren Objekten erstellt haben und daher mehrere Informationen zu Ihren Objekten und in der globalen Zusammenfassung haben, wie Ihre offenen Fensterläden, Ihre Lichter usw.

Diese Zusammenfassungen sind äußerst praktisch, um sehr schnell einen Gesamt- und visuellen Zustand der Unterkunft zu erhalten und auf Knopfdruck darauf reagieren zu können, indem die Ausstattung einer Zusammenfassung angezeigt wird. Aber wenn wir die Argumentation fortsetzen, bedeutet dies, dass diese Informationen vorhanden sind ... und dass wir sie in einem Szenario verwenden können !

In der Tat, da meine Zusammenfassung weiß, dass ich 3 Lichter habe, warum kann ich dann nicht in einem Szenario testen, ob ein Licht an ist? ? Oder lösen Sie das Szenario sogar aus, wenn ein Licht angeht ? Sehen Sie sogar, wie Sie mit einer einzigen Aktion alle Lichter im Wohnzimmer ausschalten ? Nun, all dies ist möglich, indem ein Virtual mit einer Zusammenfassung verknüpft wird !

Gehe zu **Einstellungen → System → Konfiguration** dann auf der Registerkarte **Zusammenfassungen**.

An der Leitung *Hell*, ganz rechts auf den Button klicken **Virtuell erstellen**.

Gehe jetzt zu **Plugins → Programmierung → Virtuell**

Für jedes Objekt mit Befehlen in der Zusammenfassung *Hell*, Sie haben jetzt einen neuen virtuellen Namen *Abstrakt* mit dem übergeordneten Objekt. Sie haben auch ein neues virtuelles *Gesamtübersicht* ohne übergeordnetes Objekt, entsprechend der globalen Zusammenfassung von Jeedom.

Indem Sie die virtuelle Show öffnen und auf die Registerkarte gehen **Aufträge**, hier ist was wir finden :

![Virtuel résumé](images/summary-virtual.jpg)

- Eine Bestellung **Die Info** *Hell* : Dies hat Informationen über die Anzahl der eingeschalteten Lichter. In der Show, da wir auf der Virtual der Zusammenfassung der Show sind.
- Eine Bestellung **Handlung** *Lichttaste auf Licht* : Durch Auslösen dieser Aktion schalten wir alle Zusammenfassungsbefehle ein **Hell**, hier vom Salonobjekt.
- Eine Bestellung **Handlung** *Lichttaste Aus Licht* : Durch das Auslösen dieser Aktion werden alle Zusammenfassungsbefehle deaktiviert **Hell**, hier vom Salonobjekt.
etc.

Du solltest das Prinzip verstanden haben ! Wir haben jetzt für jede Zusammenfassung, für die wir ein Virtual verknüpft haben, die entsprechenden Informationen und Aktionen für jedes Objekt und für die globale Zusammenfassung verfügbar !

Wir können es daher jetzt wie jede Info oder Aktion einer echten Ausrüstung in einem Szenario verwenden !

Zum Beispiel :

- Ein Schalter#[None][Global Summary][Bewegung]# > 0`, das ein Szenario auslöst, sobald eine Bewegung in der Unterkunft erkannt wird.
- Ein IF-Ausdruck#[Salon][Summary][Hell]# > 0 `der testet, ob ein Licht im Wohnzimmer an ist.
- Eine Aktion `#[Salon][Summary][Verschluss Shutter Button Slider]#`mit dem Wert 0, der alle Rollläden schließt.

### Aktionen für Zusammenfassungen

Wie bereits erwähnt, haben Summary Virtuals nicht nur die *die Info* Zusammenfassungen, aber auch *Handlung* verfügbar auf den verschiedenen konfigurierten Geräten in der Zusammenfassung. Diese Aktionen sind natürlich im Szenario zugänglich, aber auch über die Benutzeroberfläche, von den Zusammenfassungssymbolen hier und da !

Wenn Sie beispielsweise die virtuellen Zusammenfassungen für die Zusammenfassung erstellt haben *Hell*, Sie können Strg + Klicken Sie auf das Symbol dieser Zusammenfassung. Es erscheint dann ein Popup mit den verschiedenen Aktionen, mit dem Sie beispielsweise alle Lichter im Haus auf einmal ausschalten können !

![Virtuel résumé](images/summary-virtual-actions.jpg)


Wir haben es, die Zusammenfassungen stellen ein riesiges Thema dar, das zu Beginn des Lebens eines Jeedomiers nicht immer ganz einfach zu erfassen, aber gut zu wissen ist !
