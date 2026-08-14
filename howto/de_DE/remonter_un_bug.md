# Wie melde ich einen Fehler?

In Jeedom gibt es mehrere Möglichkeiten, ein Problem zu melden:

- Das Problem auf der [Community](https://community.jeedom.com)– dort erhalten Sie in der Regel am schnellsten eine Antwort.
- Ein Problem an das Jeedom-Team melden:
  - **Supportanfrage** (erfordert ein Power-Service-Pack oder höher oder das Problem betrifft ein kostenpflichtiges Plugin/einen kostenpflichtigen Dienst). Diese Anfrage ist **vertraulich** und verbindet Sie direkt mit dem Jeedom-Supportteam, das Ihren speziellen Fall analysiert.
  - **Fehlermeldung**: In diesem Fall ist die Meldung **öffentlich** und wird in der Community veröffentlicht.
  - **Verbesserungsvorschlag**: In diesem Fall ist der Vorschlag **öffentlich** und wird in der Community veröffentlicht.

> **HINWEIS**
>
> Bei einer Supportanfrage zu einem Plugin eines Drittanbieters wird eine E-Mail an den Entwickler des Plugins gesendet.

> **WICHTIG**
>
> Da der Support ausschließlich per E-Mail erfolgt, denken Sie bitte daran, Ihren Spam-Ordner zu überprüfen. In den meisten Fällen antwortet der Support schnell (die durchschnittliche Antwortzeit beträgt weniger als 72 Stunden; bitte beachten Sie jedoch, dass es je nach Problem auch deutlich länger dauern kann).

## Welche Informationen muss ich übermitteln, um so schnell wie möglich eine Lösung zu erhalten?

Unabhängig davon, auf welchem Weg Sie das aufgetretene Problem melden, ist es sehr wichtig, so viele Informationen wie möglich anzugeben. Zu unserem großen Bedauern lautet die erste Standardantwort auf 80 % der Anfragen nämlich: „Bitte geben Sie uns weitere Informationen zu dem aufgetretenen Problem, damit wir Ihnen helfen können. [...]“. Und ja … trotz unseres guten Willens können wir Ihren Bildschirm nicht sehen, haben keinen Überblick darüber, welche Schritte Sie unternommen haben, und verwenden manchmal unterschiedliche Begriffe, um dieselben Dinge zu beschreiben …

Da wir Ihnen aber wirklich gerne helfen möchten, finden Sie hier einige Hinweise, die uns wertvolle Informationen liefern:

- Wenn Ihr Anliegen ein Problem mit der grafischen Darstellung betrifft (Widget, Seite, Textfelder …), fügen Sie bitte einen Screenshot bei, auch wenn es Ihnen bei der Erklärung offensichtlich erscheint (das Bild lässt sich nämlich direkt in die Community hochladen!). Das kostet Sie nur 30 Sekunden, spart der Person, die Ihnen helfen möchte, mehrere Dutzend Minuten Zeit und Sie erhalten schneller eine treffende Antwort.
- Sie erhalten bei Jeedom einen „500“-Fehler oder „\{\{“-Zeichen: In diesem Fall fügen Sie bitte direkt die Datei „http.error“ ein (Sie finden sie schnell unter „Analyse“ -> „Protokolle“). Ohne diese Datei können wir nicht feststellen, woher das Problem stammt (noch einmal: Derzeit gibt es weder bei Jeedom noch unter den Drittentwicklern einen Hellseher!^^)
- Sie erhalten eine JavaScript-Fehlermeldung (Warnfeld oben rechts) oder sehen eine rote Zeile, wenn Sie F12 drücken und dann die Konsole aufrufen. Geben Sie uns in diesem Fall zunächst die vollständige Fehlermeldung an. Leider ist diese Fehlermeldung in den meisten Fällen etwas vage und reicht allein nicht aus, um das aufgetretene Problem zu identifizieren. Drücken Sie daher F12 (im Browser, auf der Jeedom-Registerkarte, auf der das Problem auftritt). Klicken Sie anschließend auf „Konsole“ und versuchen Sie, das aufgetretene Problem zu reproduzieren (beginnen Sie damit, die Seite zu aktualisieren, und führen Sie gegebenenfalls dieselben Aktionen erneut aus). Normalerweise wird die Fehlermeldung erneut angezeigt, doch dieses Mal müssen Sie am Ende der Zeile klicken (dies kann entweder wie im Screenshot unten oder in der Form „VMXXX.js“ geschehen):

![Fehler melden 001](../images/remonter_un_bug001.png)

Machen Sie anschließend einen Screenshot von dem, was angezeigt wird, insbesondere von der roten Zeile:

![Fehler melden 002](../images/remonter_un_bug002.png)

Wenn Sie all das befolgen, sollten Sie viel schnellere und treffendere Antworten auf Ihr Problem erhalten und vielleicht sogar der Person, die Ihnen geholfen hat, ermöglichen, einer anderen Person schneller zu helfen.

- Haben Sie ein Problem mit einem Daemon? Dann müssen Sie unbedingt dessen Debug-Protokoll bereitstellen, da sonst keine Hilfe möglich ist. Sie können auch das Installationsprotokoll der Abhängigkeiten hinzufügen (oft unter \_update).
- Haben Sie ein Problem bei der Installation von Abhängigkeiten? Dann müssen Sie unbedingt das Installationsprotokoll (oft unter \_update) beifügen.

# Anfragen an den Kundendienst und Support (oder Tickets)

Wenn Sie keine Lösung für Ihr Problem gefunden haben, können Sie eine Supportanfrage an das Jeedom-Team stellen.
Diese Anfrage muss über ein Ticket eingereicht werden.

Der Support ist je nach Ihrem Service Pack verfügbar
- Service Pack Community (kostenlose Version von Jeedom): 2 Support-Anfragen pro Monat, ausschließlich für kostenpflichtige Plugins
- Service Pack Power und Ultimate: 10 Support-Anfragen pro Monat
- Service Pack Pro: 100 Tickets/Monat

Es gibt verschiedene Möglichkeiten, eine Anfrage zu stellen:
[Dokumentation Supportanfragen oder Tickets](/premiers-pas#Les%20demandes%20de%20support%20\(ou%20tickets\))

>**WICHTIG**
>
>Achtung: Wir stellen fest, dass viele Nutzer E-Mail-Adressen mit dem Präfix „mailinblack“ verwenden, bei denen der Absender beim ersten Kontakt aufgefordert wird, einen Link zu bestätigen, um nachzuweisen, dass es sich tatsächlich um einen Menschen handelt. Dieses System ist nicht mit unserem Ticket-System kompatibel. Selbst wenn wir Ihnen antworten, erhalten Sie die Antwort daher niemals in Ihrem E-Mail-Postfach, da dieses unsere E-Mails blockiert. Bitte geben Sie daher auf Ihrer Profilseite im Marktplatz eine E-Mail-Adresse an, die dieses System nicht nutzt. Andernfalls werden Sie unsere Antwort niemals erhalten.

