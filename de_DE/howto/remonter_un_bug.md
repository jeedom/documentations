# Wie man einen Fehler meldet ?

Es gibt mehrere Möglichkeiten in Jeedom, ein Problem zu melden :

- Erhöhen Sie die Besorgnis über die [Gemeinschaft](https://community.jeedom.com), Dort erhalten Sie normalerweise die schnellste Antwort.
- Melden Sie dem Jeedom-Team Bedenken :
  - **Unterstützungsanfrage** (erfordert ein Power Service Pack oder mehr oder es geht um ein kostenpflichtiges Plugin/Dienst), ist diese Anfrage **Privatgelände** und wird Sie direkt mit dem Jeedom-Support-Team in Kontakt bringen, das Ihren speziellen Fall analysiert.
  - **Fehlerbericht**, in diesem Fall ist die Anfrage **Öffentlichkeit** und werden in der Community veröffentlicht.
  - **Bitte um Verbesserung**, in diesem Fall ist die Anfrage **Öffentlichkeit** und werden in der Community veröffentlicht.

> **HINWEIS**
>
> Im Falle einer Supportanfrage zu einem Drittanbieter-Plugin wird eine E-Mail an den Plugin-Entwickler gesendet.

> **WICHTIG**
>
> Da der Support ausschließlich per E-Mail erfolgt, denken Sie daran, Ihren Spam im Auge zu behalten. Meistens antwortet der Support schnell (durchschnittliche Reaktionszeit von weniger als 72 Stunden, Achtung je nach Problem kann es auch deutlich länger dauern).

## Welche Informationen zu senden sind, um so schnell wie möglich eine Lösung zu erhalten ?

Unabhängig von der Methode, mit der das aufgetretene Problem gemeldet wird, ist es sehr wichtig, so viele Informationen wie möglich zu geben. Tatsächlich haben 80 % der Anfragen zu unserem größten Bedauern als ersten Antworttyp " : "Bitte geben Sie uns weitere Informationen zu dem aufgetretenen Problem, damit wir Ihnen helfen können. [...]". Und ja ... trotz unseres guten Willens sehen wir Ihren Bildschirm nicht, wir haben keine Geschichte darüber, was Sie als Manipulation getan haben, und wir verwenden manchmal unterschiedliche Vokabeln, um über dieselben Dinge zu sprechen...

Aber da wir Ihnen wirklich helfen möchten, sind hier einige Hinweise, die uns einige wertvolle Informationen geben :

- Ihr Anliegen betrifft ein Grafikanzeigeproblem (Widget, Seite, Textfelder...), auch wenn es Ihnen während der Erklärung offensichtlich erscheint, stellen Sie einen Screenshot ein (tatsächlich ist es möglich, das 'Bild direkt in die Community zu kopieren!) , es dauert 30 Sekunden für Sie, es spart mehrere zehn Minuten für die Person, die versucht, Ihnen zu helfen, und Sie erhalten schneller eine relevante Antwort.
- Sie haben einen "500"-Fehler oder "\{\{" auf Jeedom : Legen Sie in diesem Fall die http-Datei direkt ab.Fehler (Sie finden ihn schnell unter Analyse -> Protokolle), ohne den ist es für uns unmöglich zu wissen, woher das Problem kommt (wieder keine Anzeige(n) bei jeedom oder bei Drittentwicklern im Moment !^^)
- Sie haben einen Javascript-Fehler (Warnfeld oben rechts) oder wenn Sie F12 drücken, dann trösten Sie eine rote Linie. Beginnen Sie in diesem Fall damit, uns die betreffende Fehlermeldung vollständig mitzuteilen. Leider ist in den meisten Fällen diese Fehlermeldung, die manchmal etwas vage ist, nicht allein das aufgetretene Problem. Sie müssen daher F12 (im Browser auf der Registerkarte Jeedom, wo Sie auf die Schwierigkeit stoßen). Klicken Sie dann auf "Konsole" und versuchen Sie dann, das aufgetretene Problem zu reproduzieren (beginnen Sie mit dem Aktualisieren der Seite, und wiederholen Sie bei Bedarf dieselben Aktionen). Normalerweise erhalten Sie die Fehlermeldung erneut, aber dieses Mal müssen Sie auf das Ende der Zeile klicken (dies kann entweder wie in der Abbildung unten oder in der Form VMXXX.js) :

![remonter_un_bug001](images/remonter_un_bug001.png)

Machen Sie dann eine Aufnahme von dem, was angezeigt wird, insbesondere von der roten Linie :

![remonter_un_bug002](images/remonter_un_bug002.png)

Wenn Sie dies alles richtig befolgen, sollten Sie hier viel schnellere und genauere Antworten auf Ihr Problem haben und vielleicht sogar der Person, die Ihnen geholfen hat, ermöglichen, einer anderen Person schneller zu helfen.

- Du hast ein Problem mit einem Dämon ? es ist unbedingt erforderlich, das log in debug von diesem zu legen, sonst ist keine hilfe möglich. Sie können auch das Installationsprotokoll der Abhängigkeiten hinzufügen (häufig in \_update).
- Sie haben ein Problem beim Installieren von Abhängigkeiten ? Es ist absolut notwendig, das Protokoll ihrer Installation (oft in \_update).

# Hilfe- und Supportanfragen (oder Tickets)

Wenn Sie keine Lösung für Ihr Problem gefunden haben, können Sie eine Support-Anfrage an das Jeedom-Team senden. 
Diese Anfrage läuft über ein Ticket. 

Support ist basierend auf Ihrem Service Pack verfügbar
- Service Pack Community (kostenlose Version von Jeedom): 2 Tickets/Monat nur für kostenpflichtige Plugins
- Power- und Ultimate-Servicepakete: 10 Karten/Monat
- Service Pack Pro: 100 Karten/Monat

Es gibt mehrere Möglichkeiten, eine Anfrage zu öffnen:
[Dokumentation Supportanfragen oder Tickets](https://doc.jeedom.com/de_DE/premiers-pas/#Les%20demandes%20de%20support%20\(ou%20tickets\))

>**WICHTIG**
>
>Seien Sie vorsichtig, wir sehen viele Benutzer mit "mailinblack"-Postfächern, die während des ersten Austauschs den Absender bitten, einen Link zu validieren, um zu beweisen, dass es sich tatsächlich um einen Menschen handelt. Dieses System ist nicht mit unserem Ticketing-System kompatibel. Selbst wenn wir Ihnen antworten, erhalten Sie die Antwort nie in Ihrer Mailbox, da sie uns blockiert. Vielen Dank, dass Sie auf Ihrer Marktprofilseite eine E-Mail-Adresse angeben, die dieses System nicht verwendet, da Sie sonst nie unsere Antwort erhalten.

