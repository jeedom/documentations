# GitHub-Tutorial

In diesem Tutorial erfahren Sie:

-   Ein GitHub-Konto erstellen
-   Fork von Jeedom Core oder der Dokumentation
-   Änderung einer oder mehrerer Dateien
-   Änderung einreichen
-   Das Update Ihres Forks

Um zu Jeedom beitragen zu können, müssen Sie Änderungsvorschläge (PR: Pull Request) einreichen.

# Ein GitHub-Konto erstellen

In diesem Tutorial erklären wir Ihnen, wie Sie ein GitHub-Konto erstellen, um Fehler zu melden (in der GitHub-Sprache „Issue“ genannt) oder sogar Korrekturen vorzuschlagen (in der GitHub-Sprache „Pull Request“ oder „PR“ genannt) – sei es für das gesamte Jeedom-Projekt einschließlich seiner kostenlosen Plugins oder der Dokumentation oder für jedes andere GitHub-Projekt, an dem Sie mitwirken möchten.

Weiter zu [GitHub](https://github.com) und klicken Sie auf die Schaltfläche „Sign up“. Sie sollten sich nun auf einer Seite befinden, die der unten abgebildeten ähnelt. Geben Sie dort einen Benutzernamen, eine E-Mail-Adresse und ein Passwort ein und klicken Sie anschließend auf **„Create an account“**.

![Tutorial.github1](../images/tuto.github1.png)

Sie gelangen nun auf eine zweite Seite wie unten abgebildet und nehmen keine Änderungen vor, sondern klicken auf **Weiter**

![Tutorial.github2](../images/tuto.github2.png)

Sie sind nun registriert und befinden sich auf der Seite zur Konfiguration Ihrer Kontoeinstellungen. Ich empfehle Ihnen, die E-Mail-Adresse zu überprüfen, damit Sie Ihr Konto beispielsweise bei einem vergessenen Passwort wiederherstellen können, aber auch, um Änderungen vornehmen zu können. Wenn Sie neugierig sind, können Sie sich gerne auch die anderen Optionen ansehen.

![Tutorial.github3](../images/tuto.github3.png)

# Fork von Jeedom Core oder der Dokumentation

**Fork – Warum – Wie**

„Fork“ bedeutet, ein Projekt in Ihren GitHub-Bereich zu kopieren, um die Code- und Dokumentationsdateien bearbeiten zu können und anschließend einen Pull Request an das Originalprojekt zu senden, der dann von dem oder den Entwicklern des betreffenden Projekts geprüft wird.

Nachdem Sie nun ein GitHub-Konto haben und mit Ihrer verifizierten E-Mail-Adresse angemeldet sind, gehen Sie bitte auf [hier](https://github.com/jeedom/core) Sie befinden sich auf dem Jeedom-Projekt. Rechts sehen Sie eine Schaltfläche „Fork“, mit der Sie das Projekt in Ihren GitHub-Bereich kopieren können.

![Tutorial.github4](../images/tuto.github4.png)

## Änderung einer oder mehrerer Dateien

In meinem Fall möchte ich also eine Änderung an der Datei *history.class.php* vornehmen. Diese Datei befindet sich im Core von Jeedom, genauer gesagt hier: core/class/

- Wir befinden uns also in meinem Repository (TaGGoU91 / core), das als Fork von Jeedom/core gekennzeichnet ist.
- Wir gehen also zu /core/class (der erste „core“ ist fett gedruckt, das ist das Repository, in dem ich mich befinde (core, siehe Petit 1))
- Wir haben also unsere Datei *history.class.php* – Wir klicken auf die Datei

![Tutorial.github5](../images/tuto.github5.png)

- Wir befinden uns also tatsächlich in unserer Datei
- Klicken Sie auf den Bleistift, um in den Bearbeitungsmodus zu wechseln.

![Tutorial.github6](../images/tuto.github6.png)

Um in der Datei zu suchen, positionieren Sie den Cursor im Textblock der Datei, die Sie gerade im Bearbeitungsmodus mit dem Bleistift-Symbol geöffnet haben, und drücken Sie „Strg + F“, um die Suche zu aktivieren. Fügen Sie den gesuchten Text ein oder geben Sie ihn ein (ein aussagekräftiges Element und nur eine Zeile, nicht gleich einen ganzen Block auf einmal). Bestätigen Sie mit der Eingabetaste, um die Suche zu starten.
> **Tipp**
>
> Wenn Sie nicht in das Fenster klicken, das den gesuchten Text oder Code enthält, wird die Suchfunktion des Browsers geöffnet, und in meinem Fall – bei Google Chrome – kann diese nicht direkt im Code oder in der Dokumentation suchen.

- Das Suchfeld – ja, das ist als Information ziemlich dürftig, die kopierte Zeile ist viel länger ;).

![Tutorial.github7](../images/tuto.github7.png)

- Das Suchergebnis ist gelb markiert.
- In Blau ist das markiert, was ich gerade ausgewählt habe und was ich ändern/durch meinen Code ersetzen möchte. Meine Änderung

![Tutorial.github14](../images/tuto.github14.png)

Ich lösche also den Block und ersetze ihn anschließend.

Im unteren Bereich finden Sie Folgendes: 1. Geben Sie nach Möglichkeit einen aussagekräftigen Titel an. 2. Geben Sie eine etwas genauere Beschreibung ein (in meinem Fall wäre das zu lang, der Link zum Forum ist aussagekräftiger). 3. Stellen Sie sicher, dass das Kästchen wie hier gezeigt angekreuzt ist. 4. Committen = Die Änderung übermitteln

![Tutorial.github8](../images/tuto.github8.png)

## Änderung einreichen

Der oben durchgeführte **Commit** betrifft nur den Fork des Projekts in Ihrem GitHub-Bereich. Um die Änderungen an das Originalprojekt zu übermitteln, müssen Sie einen PR (Pull Request) erstellen.

- Klicken Sie auf die Registerkarte „Pull Request“
- Neuer Pull Request (kurz: PR)

![Tutorial.github9](../images/tuto.github9.png)

- Das PR wird einen Vergleich zwischen der Jeedom-Basis und Ihrem Repository (dem Fork) starten.
- Hier sind die Änderungen aufgeführt (die erste betrifft die Aktualisierung von SinceJeedom, die zweite genau die Änderung der Funktion „lastchangestateduration“ – perfekt!!!)
- Der alte Code
- Der neue Code
- Wir erstellen den Pull Request (PR)

![Tutorial.github10](../images/tuto.github10.png)

Es ist wichtig, die vorgeschlagenen Änderungen ausführlich zu erläutern, damit die Entwickler des ursprünglichen Projekts diese verstehen und Ihre Anfrage genehmigen können.

- Klicken Sie auf die drei kleinen Punkte
- Man gibt die zuvor eingegebenen Informationen erneut ein
- Ebenso wird der Code kopiert (daher die Verwendung von …​ in Schritt 1, um ein erneutes Schreiben zu vermeiden)
- Klicken Sie auf „Create Pull Request“

![Tutorial.github11](../images/tuto.github11.png)

**Das war's.** Jetzt müssen Sie warten, bis Ihr PR freigegeben wird.

Hinweis: Nur Benutzer mit Push-Rechten auf Jeedom können den PR freigeben.

Um sicherzustellen, dass Ihre Änderung tatsächlich in der Liste aufgeführt ist, können Sie auf „Pull Requests“ klicken.

![Tutorial.github12](../images/tuto.github12.png)

Man erhält die Liste der PRs, die auf ihre Freigabe warten. Unser PR ist deutlich zu erkennen.

![Tutorial.github13](../images/tuto.github13.png)
