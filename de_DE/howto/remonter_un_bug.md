# So melden Sie einen Fehler ?

In Jeedom gibt es verschiedene Möglichkeiten, Bedenken zu melden :

- Setzen Sie die Besorgnis wieder auf die [Gemeinschaft](https://community.jeedom.com), Hier erhalten Sie normalerweise die schnellste Antwort.
- Melden Sie dem Jeedom-Team Bedenken :
  - **Supportanfrage** (erfordert eine Service Pack-Leistung oder mehr oder auch wenn das Problem bei einem Plugin / kostenpflichtigen Dienst liegt), ist diese Anforderung **privat** und bringt Sie direkt in Kontakt mit dem Jeedom-Support-Team, das Ihren speziellen Fall analysiert.
  - **Fehlerbericht**, in diesem Fall ist die Anfrage **publique** und wird in der Community veröffentlicht.
  - **Bitte um Verbesserung**, in diesem Fall ist die Anfrage **publique** und wird in der Community veröffentlicht.

> **NOTE**
>
> Bei einer Supportanfrage für ein Plugin eines Drittanbieters wird eine E-Mail an den Plugin-Entwickler gesendet.

> **IMPORTANT**
>
> Denken Sie daran, Ihren Spam zu überwachen, da der Support ausschließlich per E-Mail erfolgt. Meistens reagiert der Support schnell (Verzögerung vor der Antwort durchschnittlich weniger als 72 Stunden, Vorsicht, je nach Problem kann es viel länger dauern).

## Welche Informationen müssen gesendet werden, um so schnell wie möglich eine Lösung zu finden? ?

Unabhängig davon, mit welcher Methode das aufgetretene Problem gemeldet wird, ist es sehr wichtig, so viele Informationen wie möglich anzugeben. Zu unserem größten Bedauern haben 80% der Anfragen die erste Standardantwort : "Bitte geben Sie uns weitere Informationen zum Problem, damit wir Ihnen helfen können. [...]". Und ja ... trotz unseres guten Willens sehen wir Ihren Bildschirm nicht, wir haben keine Geschichte darüber, was Sie als Manipulation getan haben, und wir verwenden manchmal ein anderes Vokabular, um über dieselben Dinge zu sprechen...

Da wir Ihnen jedoch wirklich helfen möchten, finden Sie hier einige Hinweise, die uns wertvolle Informationen geben :

- Ihr Anliegen betrifft ein Problem mit der grafischen Anzeige (Widget, Seite, Textfelder ...). Auch wenn es Ihnen während der Erklärung offensichtlich erscheint, setzen Sie einen Screenshot (tatsächlich ist es möglich, das zu kopieren Bild direkt in der Community!), es dauert 30s für Sie, es spart einige zehn Minuten für die Person, die versucht, Ihnen zu helfen, und Sie erhalten schneller eine relevante Antwort.
- Sie haben einen "500" -Fehler oder "\ {\ {" bei Jeedom : In diesem Fall legen Sie die http-Datei direkt ab.Fehler (Sie finden ihn schnell in Analyse -> Protokolle), ohne diesen können wir nicht wissen, woher das Problem kommt (wieder keine Warnleuchte bei jeedom oder bei Drittentwicklern für der Moment !^^)
- Sie haben einen Javascript-Fehler (Warnfeld oben rechts) oder wenn Sie F12 ausführen, trösten Sie eine rote Linie. In diesem Fall geben Sie uns zunächst die vollständige Fehlermeldung. Leider kann diese Fehlermeldung in den meisten Fällen, die manchmal etwas vage ist, das aufgetretene Problem nicht identifizieren. So auch F12 (im Browser auf der Registerkarte Jeedom, wo Sie Probleme haben). Klicken Sie dann auf "Konsole" und versuchen Sie, das aufgetretene Problem zu reproduzieren (aktualisieren Sie zunächst die Seite und wiederholen Sie gegebenenfalls die gleichen Aktionen).. Normalerweise wird die Fehlermeldung erneut angezeigt, diesmal müssen Sie jedoch auf das Ende der Zeile klicken (dies kann entweder wie im folgenden Screenshot oder in der Formular-VM seinXXX.js) :

![remonter_un_bug001](images/remonter_un_bug001.png)

Machen Sie dann einen Screenshot von dem, was angezeigt wird, insbesondere von der roten Linie :

![remonter_un_bug002](images/remonter_un_bug002.png)

Wenn Sie all dies gut verfolgen, sollten Sie Antworten auf Ihr Problem viel schneller und genauer haben und vielleicht sogar zulassen, dass die Person, die Ihnen geholfen hat, einer anderen Person schneller hilft.

- Du hast ein Problem mit einem Dämon ? Es ist absolut notwendig, das Log in Debug zu setzen, sonst ist keine Hilfe möglich. Sie können auch das Installationsprotokoll für Abhängigkeiten hinzufügen (häufig in\_update)..
- Sie haben ein Problem bei der Installation von Abhängigkeiten ? Es ist unbedingt erforderlich, das Protokoll ihrer Installation abzulegen (häufig in\_update)..
