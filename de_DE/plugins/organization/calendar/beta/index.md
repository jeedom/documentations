# Kalender-Plugin

Plugin zum Erstellen einer Agenda und Auslösen von Aktionen (Befehl oder Szenario)).

# Plugin Konfiguration

Die Konfiguration ist sehr einfach. Nach dem Herunterladen des Plugins müssen Sie es nur noch aktivieren und fertig.

# Gerätekonfiguration

Auf die Konfiguration der Agenda-Geräte kann über das Plugins-Menü und dann über Organisation zugegriffen werden.

Sobald Sie darauf sind, finden Sie die Liste Ihrer Agenda.

Hier finden Sie die gesamte Konfiguration Ihrer Geräte :

-   **Name der Ausrüstung** : Name Ihres Kalenders.
-   **Übergeordnetes Objekt** : Gibt das übergeordnete Objekt an, zu dem das Gerät gehört.
-   **Kategorie** : Gerätekategorien (es kann zu mehreren Kategorien gehören).
-   **Aktivieren** : macht Ihre Ausrüstung aktiv.
-   **Sichtbar** : macht es auf dem Dashboard sichtbar.
-   **Widget, Anzahl der Tage** : Legt die Anzahl der Ereignistage fest, die im Widget angezeigt werden sollen.
-   **Maximale Anzahl von Ereignissen** : Definiert die maximale Anzahl von Ereignissen, die im Dashboard angezeigt werden sollen.
-   **Status- und Aktivierungs- / Deaktivierungsbefehle nicht anzeigen** : Mit dieser Option können Sie den Status des Kalenders sowie die Befehle zum Aktivieren oder Nichtaktivieren des Kalenders ausblenden.
-   **Liste der Kalenderereignisse** : Anzeige unter der Liste aller Kalenderereignisse (durch Klicken darauf können Sie das Ereignis direkt bearbeiten).
-   **Ereignis hinzufügen** : Fügen Sie dem Kalender ein Ereignis hinzu.
-   **Agenda** : Anzeige einer Agenda-Ansicht mit allen Ereignissen, in die Sie sich bewegen können. Wählen Sie diese nach Woche oder Tag aus, verschieben Sie Ereignisse (Drag & Drop) und ein Klick auf ein Ereignis öffnet das Bearbeitungsfenster.

# Ereignis bearbeiten

Der wichtigste Teil des Plugins ist, dass Sie hier Ihre Veranstaltung konfigurieren können.

## Ereignis

Hier finden Sie :

-   **Name der Veranstaltung** : Name Ihrer Veranstaltung.
-   **Symbol** : Mit dieser Option können Sie ein Symbol vor dem Namen Ihres Geräts einfügen (dazu müssen Sie auf "Symbol auswählen" klicken").
-   **Farbe** : Mit dieser Option können Sie die Farbe Ihrer Veranstaltung auswählen (mit einem Häkchen können Sie sie auch transparent machen).
-   **Textfarbe** : Mit dieser Option können Sie die Farbe Ihres Veranstaltungstextes auswählen.
-   **Nicht im Dashboard anzeigen** : erlaubt, dieses Ereignis nicht im Widget anzuzeigen.

## Aktion starten

Ermöglicht die Auswahl der Aktion (en), die beim Starten des Ereignisses ausgeführt werden sollen.

Um eine Aktion hinzuzufügen, klicken Sie einfach auf die Schaltfläche + am Ende der Zeile. Sie haben dann eine Schaltfläche, mit der Sie nach einer Bestellung suchen können, sobald diese gefunden wurde. Sie haben die Wahl zwischen Optionen, falls vorhanden. Sie können so viel Aktion hinzufügen, wie Sie möchten.

> **Spitze**
>
> Es ist möglich, die Reihenfolge der Aktionen durch Halten / Ziehen zu ändern


> **Spitze**
>
>Es ist möglich, die gleichen Aktionen wie in den Szenarien auszuführen (siehe [hier](https://jeedom.github.io/core/de_DE/scenario))

## Aktion beenden

Wie die Startaktion, diesmal jedoch die Aktion (en), die am Ende des Ereignisses ausgeführt werden sollen.

## Programmation

Hier befindet sich das gesamte Zeitmanagement Ihrer Veranstaltung :

-   **Anfang** : Startdatum des Ereignisses.
-   **Ende** : Ereignisenddatum.
-   **Den ganzen Tag** : ermöglicht es, das Ereignis über den ganzen Tag zu definieren.
-   **In einen anderen Kalender aufnehmen** : Ermöglicht es Ihnen, ein anderes Ereignis in Ihr aktuelles Ereignis aufzunehmen. Wenn Sie beispielsweise ein Ereignis A jeden Montag wiederholen lassen und dieses Ereignis A in Ihr aktuelles Ereignis aufnehmen, wird dieses Ereignis automatisch jeden Montag wiederholt.
-   **Einschließen** : Ermöglicht das Erzwingen eines Auftrittsdatums. Sie können mehrere setzen, indem Sie sie durch (Kommas) trennen. Sie können auch einen Bereich mit definieren : (zwei Punkte).
-   **Wiederholt** : Mit dieser Option können Sie sagen, dass Ihr Ereignis wiederholt wird (wenn dieses Kontrollkästchen nicht aktiviert ist, stehen Ihnen die folgenden Optionen nicht zur Verfügung).
-   **Wiederholungsmodus** : ermöglicht die Angabe des Wiederholungsmodus, entweder einfach : jeden Tag, alle X Tage ... oder jeden 1., 2. ... wiederholen, um beispielsweise jeden 3. Montag im Monat ein Ereignis zu wiederholen (die folgenden Optionen können je nach Auswahl unterschiedlich sein).
-   **Wiederholen Sie alle** : Mit \ [nur Einzelwiederholungsmodus \] können Sie festlegen, wie oft das Ereignis wiederholt werden soll (z. B. alle 3 Tage oder alle 2 Monate).
-   **Die** : Mit \ [Wiederholungsmodus der erste, der zweite… nur \] können Sie beispielsweise jeden 2. Montag im Monat eine Wiederholung auswählen.
-   **Nur die** : Mit dieser Option können Sie die Wiederholung auf bestimmte Wochentage beschränken.
-   **Einschränkung** : erlaubt es, die Veranstaltung nur an Feiertagen einzuschränken oder Feiertage auszuschließen.
-   **Bis zu** : gibt das Enddatum des Auftretens des Ereignisses an.
-   **Durch einen anderen Kalender ausschließen** : Mit dieser Option können Sie dieses Ereignis gemäß einer anderen Agenda ausschließen (um beispielsweise zu vermeiden, dass zwei widersprüchliche Ereignisse zusammen gefunden werden).
-   **Ausschließen** : wie "Einschließen", diesmal jedoch, um Daten auszuschließen.

> **Notiz**
>
> Feiertage sind französisch und nur französisch, dies funktioniert nicht für andere Länder

> **Notiz**
>
> Oben rechts haben Sie 3 Schaltflächen, eine zum Löschen, eine zum Speichern und eine zum Duplizieren. Wenn Sie auf das letztere klicken, zeigt jeedom das Ereignis an, das sich aus der Duplizierung ergibt, so dass Sie beispielsweise den Namen ändern können.Vergessen Sie also nicht, nach einem Klick auf die Schaltfläche "Duplizieren" zu speichern

## Tagebuch, Bestellungen und Szenario

Eine Agenda hat Kontrollen :

-   **In Bearbeitung** : gibt eine Liste von aktuellen Ereignissen an, die durch Kommas getrennt sind, um sie im einfachsten Szenario zu verwenden und um den Operator zu verwenden, der beispielsweise enthält (Übereinstimmungen) oder nicht enthält (keine Übereinstimmungen) *\ [Wohnung \] \ [Test \] \ [In Bearbeitung \]* entspricht "/ Anniv /", ist wahr, wenn in der Liste der aktuellen Ereignisse ein "Anniv"
- **Fügen Sie ein Datum hinzu** : Ermöglicht es einem Szenario, einem Ereignis ein Datum hinzuzufügen (seien Sie vorsichtig, wenn Sie den Namen des Ereignisses ändern, müssen Sie es auch im Szenario korrigieren). Sie können mehrere Ereignisse getrennt durch setzen ,
- **Entfernen Sie ein Datum** : Ermöglicht es einem Szenario, ein Datum von einem Ereignis auszuschließen (seien Sie vorsichtig, wenn Sie den Namen des Ereignisses ändern, müssen Sie ihn auch im Szenario korrigieren). Sie können mehrere Ereignisse getrennt durch setzen ,

> **Notiz**
>
> Es ist möglich, den Befehl "In Bearbeitung" als Auslöser in einem Szenario zu verwenden. Jede Aktualisierung der Informationen löst die Ausführung des Szenarios aus. Es ist jedoch vorzuziehen, diesen Befehl in einem programmierten Szenario mit einem Test des Werts zu verwenden.
