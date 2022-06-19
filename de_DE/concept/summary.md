# Zusammenfassungen

## Entdeckung von Zusammenfassungen

Jeedom bietet eine sehr einfache und übersichtliche Möglichkeit, die Situation verschiedener Komponenten Ihres Hauses anzuzeigen, um sofort zu sehen, wie viele Lichter eingeschaltet sind, Rollläden geöffnet sind, Alarmstatus, Temperatur usw.

Die Zusammenfassungen werden in Form kleiner Symbole in der Jeedom-Leiste oben und auf jedem Objekt (Dashboard und Synthesis). Wenn Sie darauf klicken, können Sie direkt die in der Zusammenfassung enthaltenen Geräte sehen, auf die Sie geklickt haben, um bei Bedarf darauf zu reagieren.

Es sind zwei Arten von Zusammenfassungen zu unterscheiden :

- Die Gesamtzusammenfassung : Dies ist der Satz von Zusammenfassungssymbolen, die in der Leiste von Jeedom angezeigt werden.
- Die Objektzusammenfassungen : Jedes Objekt hat seine eigene Zusammenfassung, die in der Zusammenfassung im Objekt und im Dashboard rechts neben dem Objektnamen angezeigt wird.

![Entdeckung von Zusammenfassungen](images/summary-intro.gif)

Die globale Zusammenfassung wird nicht direkt parametrisiert. Es ist ein Konzentrat der Zusammenfassungen der anderen Objekte. Wenn beispielsweise ein Licht in der Küche und zwei im Wohnzimmer brennen, zeigt die Gesamtübersicht drei Lichter an. All dies kann natürlich konfiguriert werden, wie wir weiter unten sehen werden.

Die Zusammenfassungen werden daher an jedem Objekt konfiguriert, in der Registerkarte ... Zusammenfassung !

> Remarque
>
> Diese Dokumentation wurde auf einem Core v4.2 geschrieben und illustriert. Einige Optionen können daher je nach Version variieren.

## Allgemeine Konfiguration von Zusammenfassungen

Bevor die Konfiguration eines Objekts angezeigt wird, muss es vorhanden sein, um eine Zusammenfassung konfigurieren zu können.

Gehen in **Einstellungen → System → Konfiguration** dann auf der Registerkarte **Zusammenfassungen**.

{% include lightbox.html src="images/summary-admin.jpg" data="settings" title="Zusammenfassungen konfigurieren" imgstyle="width:auto;display: block;margin: 0 auto;" %}

Hier haben Sie die Liste aller Zusammenfassungen, die Sie für jedes Objekt konfigurieren können. Hier können wir die Zusammenfassungen konfigurieren *Gegenwart* (Wenn Sie genau hinsehen, sehen Sie in der globalen Zusammenfassung, dass eine Person zu Hause ist), *Alarm*, *Bewegung*, *Heizung* etc. Et bien sûr, vous pouvez supprimer et ajouter des types de résumé ici, afin de les avoir à disposition ensuite sur les objets.

Seien Sie versichert, einige Dinge in dieser Vorschau wurden konfiguriert, aber standardmäßig hat Jeedom eine Liste von Zusammenfassungen mit Standardparametern.

Lassen Sie uns durchgehen, was wir hier definieren werden:

- **Taste** : Es handelt sich um einen Wert, der in dieser Liste, die als Referenz für den Core dient, eindeutig sein muss.
- **Nachname** : Der Name (Typ) der Zusammenfassung, den Sie in den Objektparametern finden.
- **Berechnung** : Der für den angezeigten Wert verwendete Berechnungstyp. Die Summe für Zustände, der Durchschnitt für z.B. Temperaturen, Luftfeuchtigkeit oder der Textwert.
- **Symbol** : Das Zusammenfassungssymbol, das auf dem Objekt und optional in der globalen Zusammenfassung angezeigt wird.
- **Symbol, wenn null** : Zusammenfassungssymbol, wenn sein Wert 0 ist. Ermöglicht es Ihnen, ein anderes Symbol festzulegen, z. B. Verschluss geschlossen, Licht aus oder andere Farbe usw.
- **Einheit** : Summeneinheit, die rechts neben dem Wert angezeigt wird.
- **Nummer verstecken** : Zeigt niemals den Zusammenfassungswert an (die Zahl rechts neben dem Symbol).
- **Zahl ausblenden, wenn Null** : Ermöglicht das Ausblenden des Zusammenfassungswerts, nur wenn er 0 ist. Wir können also wünschen, dass das Symbol für das geöffnete Fenster mit ihrer Nummer und das Symbol für das geschlossene Fenster ohne die Nummer angezeigt wird, wenn alle Fenster geschlossen sind.
- **Zählmethode** : Wenn Sie binäre Daten zählen, müssen Sie diesen Wert auf binär setzen, wenn Sie beispielsweise die Anzahl der leuchtenden Lampen zählen, aber nur den Wert des Dimmers (0 bis 100) haben, dann müssen Sie binär setzen, so wie es Jeedom tut Beachten Sie, dass die Lampe eingeschaltet ist, wenn der Wert größer als 1 ist.
- **Wenn Null** : Zusammenfassung anzeigen, auch wenn der Wert 0 ist.
- **Ignoriere wenn** : Ignorieren Sie einen Befehl für diese Zusammenfassung, wenn sie seit x Minuten nicht aktualisiert wurde.
- **Link zu einem virtuellen** : Startet die Erstellung eines virtuellen Geräts mit Befehlen, die den Werten in der Zusammenfassung entsprechen.
- **Zusammenfassung löschen** : Mit der letzten Schaltfläche ganz rechts können Sie die Zusammenfassung löschen.

>**HINWEIS**
>
>Um ein Symbol zu entfernen, doppelklicken Sie einfach darauf

Zum Beispiel hier :

- Wenn wir uns die Animation oben auf der Seite ansehen, entspricht die 3. Zusammenfassung **Bewegung** zeigt in rot an, dass es eine gibt *1* Bewegung. In der Vorschau oben sehen wir das grüne Kreissymbol ohne Zahlen. Wenn Sie sich die Zeile ansehen, ist das grüne Symbol tatsächlich so konfiguriert **Symbol, wenn null** und der Wert wird nicht angezeigt, weil **Zahl ausblenden, wenn Null** wird geprüft. Ebenso die Zusammenfassung *Tor* ist grün, ohne Zahl, während die Zusammenfassung *Licht* ist gelb, mit der Anzahl der Lichter an.

> Tip
>
> Sie können auch die Reihenfolge ändern, in der die Zusammenfassungen angezeigt werden, indem Sie mit der Maus eine Zeile nach oben oder unten verschieben.


## Konfigurieren von Objektzusammenfassungen

Sobald die Liste der Zusammenfassungen in der Jeedom-Konfiguration verfügbar ist, können wir sie daher für jedes Objekt verwenden.

Im **Extras → Objekte**, hier zum Thema Salon :

{% include lightbox.html src="images/summary-object-1.jpg" data="settings" title="Zusammenfassung objet" imgstyle="width:auto;display: block;margin: 0 auto;" %}

Hier haben wir zwei Teile :

### Zusammenfassungen konfigurieren

Die Spalten der Tabelle stellen alle Arten von Zusammenfassungen dar, die in der oben gezeigten Konfiguration verfügbar sind. Für jede Zusammenfassung drei Optionen :

- **Gehen Sie in der globalen Zusammenfassung nach oben** : Hier wählen Sie für jede Zusammenfassung aus, ob die dieses Objekts in der globalen Zusammenfassung berücksichtigt werden soll. Hier zum Beispiel die Zusammenfassung *Verschluss* der Show angekreuzt ist, sodass sie in der globalen Zusammenfassung aufsteigt. Wenn wir in der Gesamtübersicht nachsehen, gibt es in den 6 angezeigten offenen Abschnitten die des Salons ! Umgekehrt, wenn wir uns die Zusammenfassung ansehen *TempExt* (16,1 °C in der globalen Zusammenfassung), ist es deaktiviert, da ich nur die Temperatur des Gartenobjekts in der globalen Zusammenfassung melden möchte.
- **Auf dem Desktop verstecken** : Um diese Zusammenfassung nicht neben dem Objektnamen auf dem Dashboard anzuzeigen.
- **Im Handy verstecken** : Um diese Zusammenfassung nicht neben dem Objektnamen in Mobile anzuzeigen.

### Abstrakte Befehle

Jede Registerkarte stellt eine Art von Zusammenfassung dar, die in der Jeedom-Konfiguration definiert ist. Klicke auf **Bestellung hinzufügen** damit es in der Zusammenfassung berücksichtigt wird. Sie haben die Wahl, den Befehl eines beliebigen Jeedom-Geräts auszuwählen, auch wenn es dieses Objekt nicht als übergeordnetes Objekt hat.

Hier sehen wir die drei Bereiche, die in der Zusammenfassung dieses Objekts vorhanden sind. Und *Verschluss* in der globalen Zusammenfassung aktiviert werden, werden sie auch in dieser gezählt.

### Registerkarte „Zusammenfassung“ nach Geräten

Auf dieser Seite können Sie Sammelbestellungen auf andere Weise auswählen : Es zeigt alle Geräte an, die das Objekt als übergeordnetes Objekt haben. Auf jedem Gerät wird durch Anklicken die Liste der Info-Befehle des Geräts angezeigt, mit rechts der Möglichkeit, diesen Befehl einer oder mehreren Zusammenfassungen des Objekts zuzuordnen.

Wenn bereits eine oder mehrere Zusammenfassungen definiert sind, wird der Selektor in Orange angezeigt, wobei die Arten von Zusammenfassungen auf der rechten Seite aktiviert sind.

## Zusammenfassungen und virtuell

Abstracts pflegen mit dem [Virtuelles Plugin](https://market.jeedom.com/index.php?v=d&p=market_display&id=21) ein zwiespältiges Verhältnis, nicht immer leicht zu verstehen, aber dennoch sehr mächtig, besonders seit Core v4.2 und Aktionen auf Zusammenfassung ! Noch da ? Wir machen weiter ...

Normalerweise sollten Sie jetzt einige Zusammenfassungen zu Ihren Objekten erstellt haben und daher mehrere Informationen zu Ihren Objekten und in der globalen Zusammenfassung haben, wie Ihre offenen Rollläden, Ihre Lichter usw.

Diese Übersichten sind äußerst praktisch, um sehr schnell einen allgemeinen und visuellen Zustand der Unterkunft zu haben und auf einen Klick darauf reagieren zu können, indem die Ausstattung einer Übersicht angezeigt wird. Aber wenn wir mit der Argumentation fortfahren, bedeutet das, dass diese Informationen existieren ... Und dass wir es schätzen könnten, sie in einem Szenario zu verwenden !

In der Tat, da meine Zusammenfassung weiß, dass ich 3 Lichter an habe, warum nicht in einem Szenario testen können, OB ein Licht an ist ? Oder lösen Sie sogar das Szenario aus, wenn ein Licht aufleuchtet ? Sehen Sie sogar, wie Sie alle Lichter im Salon mit einer einzigen Aktion ausschalten ? Nun, all dies ist möglich, indem ein Virtual mit einer Zusammenfassung verknüpft wird !

Gehen in **Einstellungen → System → Konfiguration** dann auf der Registerkarte **Zusammenfassungen**.

An der Leitung *Licht*, Klicken Sie ganz rechts auf die Schaltfläche **Virtuell erstellen**.

Gehen Sie jetzt hinein **Plugins → Programmierung → Virtuell**

Für jedes Objekt mit Befehlen in der Zusammenfassung *Licht*, Sie haben jetzt einen neuen virtuellen Namen *Zusammenfassung* mit Objekt als Elternteil. Sie haben auch eine neue Virtual *Gesamtübersicht* ohne übergeordnetes Objekt, entsprechend der globalen Zusammenfassung von Jeedom.

Indem Sie Show Virtual öffnen und zur Registerkarte gehen **Aufträge**, Hier ist, was wir finden :

{% include lightbox.html src="images/summary-virtual.jpg" data="settings" title="Virtuel résumé" imgstyle="width:auto;display: block;margin: 0 auto;" %}

- Eine Bestellung **Information** *Licht* : Dies hat die Information über die Anzahl der eingeschalteten Lichter. Im Salon, da sind wir auf der virtuellen Salon-Zusammenfassung.
- Eine Bestellung **Aktie** *Lichttaste an* : Durch das Auslösen dieser Aktion aktivieren wir alle Befehle in der Zusammenfassung **Licht**, hier aus dem Salon-Objekt.
- Eine Bestellung **Aktie** *Lichttaste Aus Licht* : Durch das Auslösen dieser Aktion werden alle Befehle in der Zusammenfassung deaktiviert **Licht**, hier aus dem Salon-Objekt.
etc.

Sie sollten das Prinzip verstanden haben ! Wir haben jetzt für jede Zusammenfassung, für die wir ein Virtual verknüpft haben, die entsprechenden Informationen und Aktionen für jedes Objekt und für die globale Zusammenfassung verfügbar !

Wir können es jetzt wie jede Information oder Aktion von realen Geräten in einem Szenario verwenden !

Zum Beispiel :

- Ein Auslöser `#[None][Global Summary][Bewegung]# > 0“, die ein Szenario auslöst, sobald eine Bewegung in der Wohnung erkannt wird.
- Ein IF-Ausdruck `#[Salon][Summary][Licht]# > 0 `, die testet, ob im Salon Licht an ist.
- Eine Aktion `#[Salon][Summary][Verschluss Shutter Button Slider]#` mit dem Wert 0, wodurch alle Fensterläden des Salons geschlossen werden.

### Digest-Aktionen

Wie bereits erwähnt, verfügen Summary Virtuals nicht nur über die *Information* Zusammenfassungen, aber auch *Lager* verfügbar auf den verschiedenen Geräten, die zusammenfassend konfiguriert sind. Diese Aktionen sind natürlich im Szenario zugänglich, aber auch über die Benutzeroberfläche, hier und da über die Übersichtssymbole !

Zum Beispiel, wenn Sie die Zusammenfassung Virtuals für die Zusammenfassung erstellt haben *Licht*, Sie können Strg+Klicken Sie auf das Symbol dieser Zusammenfassung. Daraufhin erscheint ein Popup mit den verschiedenen Aktionen, mit denen Sie beispielsweise alle Lichter im Haus auf einmal ausschalten können !

{% include lightbox.html src="images/summary-virtual-actions.jpg" data="settings" title="Digest-Aktionen" imgstyle="width:auto;display: block;margin: 0 auto;" %}


Wie wir gesehen haben, stellen die Zusammenfassungen ein riesiges Thema dar, das zu Beginn des Lebens eines Jeedomianers nicht immer leicht zu verstehen ist, aber gut zu wissen ist !
