# Github-Tutorial

Dieses Tutorial stellt Sie vor :

-   Erstellen eines GitHub-Kontos
-   Fork of Jeedom Core oder Dokumentation
-   Bearbeiten einer oder mehrerer Dateien
-   Senden Sie eine Änderung
-   Aktualisieren Sie Ihre Gabel

Damit Sie zu Jeedom beitragen können, müssen Sie die Änderungen vorschlagen (PR : Pull-Anfrage).

# Erstellen eines GitHub-Kontos

Wir werden in diesem Tutorial besprechen, wie man ein GitHub-Konto erstellt, um Fehler (Problem in der GitHub-Sprache) melden oder sogar Korrekturen (Pull Request oder PR in GitHub-Sprache) für das gesamte Jeedom-Projekt, einschließlich seines, vorschlagen zu können kostenlose Plugins oder Dokumentation oder jedes andere Github-Projekt, an dem Sie teilnehmen möchten.

Gehe zu [github](https://github.com) und klicken Sie auf die Anmeldeschaltfläche. Sie sollten sich daher auf einer ähnlichen Seite wie der folgenden befinden und müssen daher einen Benutzernamen, eine E-Mail und ein Passwort eingeben und dann auf klicken **Ein Konto erstellen**

![tuto.github1](images/tuto.github1.png)

Sie gelangen also auf eine 2. Seite wie unten und Sie ändern nichts, Sie klicken auf **Mach weiter**

![tuto.github2](images/tuto.github2.png)

Sie sind jetzt registriert und auf der Konfigurationsseite Ihrer Kontooptionen. Ich rate Ihnen, die E-Mail-Adresse zu überprüfen, um beispielsweise Ihr Konto wiederherstellen zu können, falls Sie Ihr Passwort vergessen haben, aber auch um Änderungen einreichen zu können. Ich lasse Sie auch die anderen Optionen entdecken, wenn Sie neugierig sind.

![tuto.github3](images/tuto.github3.png)

# Fork of Jeedom Core oder Dokumentation

**Gabel - Warum - Wie**

Fork soll ein Projekt in Ihren Github-Bereich kopieren, um den Code und die Dokumentationsdateien ändern zu können, und dann einen Pull-Request an das ursprüngliche Projekt senden, das dann von den Entwicklern des besagten Projekts untersucht wird

Jetzt, wo Sie ein Github-Konto haben und bei einem Besuch mit Ihrer verifizierten E-Mail-Adresse angemeldet sind [hier](https://github.com/jeedom/core) Sie befinden sich im Jeedom-Projekt, auf der rechten Seite befindet sich ein Fork-Button, mit dem Sie es in Ihren Github-Bereich kopieren können.

![tuto.github4](images/tuto.github4.png)

## Bearbeiten einer oder mehrerer Dateien

In meinem Fall möchte ich also eine Änderung an der Datei vornehmen *history.class.php* Diese Datei befindet sich im Jeedom-Core und genauer gesagt hier : Kern/Klasse/

- Wir befinden uns daher auf meinem Repository (TaGGoU91 / core), das als Fork von Jeedom / core angegeben ist
- Wir gehen daher zu /core/class (der erste Kern ist fett gedruckt, das ist das Repository, in dem ich mich befinde (Kern, siehe Petit 1)
- Wir haben also unsere Datei *history.class.php* - Klicken Sie auf die Datei

![tuto.github5](images/tuto.github5.png)

- Wir sind daher in unserer Akte
- Wir klicken auf den Stift, um die Änderung einzugeben

![tuto.github6](images/tuto.github6.png)

Um in der Datei zu suchen, positionieren Sie sich mit dem Bleistift im Textblock der Datei, die Sie gerade im Bearbeitungsmodus geöffnet haben, und aktivieren mit „Strg + F“ die Suche. Fügen Sie den gesuchten Text ein oder geben Sie ihn an (nur ein aussagekräftiges Element und eine Zeile, nicht ein ganzer Block auf einmal). Bestätigen Sie mit „Enter“, um die Suche zu starten.
> **Tipp**
>
> Wenn Sie nicht in das Fenster klicken, das den gesuchten Text oder Code enthält, öffnet sich die Browsersuche und in meinem Fall auf Google Chrome weiß es nicht, wie man direkt im Code oder in der Dokumentation sucht.

- Das Suchfeld, ja, es ist ziemlich dünn als Information, die kopierte Zeile ist viel größer;).

![tuto.github7](images/tuto.github7.png)

- In Gelb ist es das Ergebnis der Suche
- In Blau, was ich gerade ausgewählt habe und mit meinem Code ändern/ersetzen möchte. Meine Bearbeitung

![tuto.github14](images/tuto.github14.png)

Also lösche ich den Block und ersetze ihn dann.

Dann finden wir im unteren Teil dies : 1. Geben Sie nach Möglichkeit einen eindeutigen Titel an 2. Wir geben eine etwas genauere Beschreibung ein (in meinem Fall wäre es zu lang, der Link zum Forum wird aussagekräftiger) 3. Wir stellen sicher, dass es so überprüft wird 4. Bei Commit = Änderung übermitteln

![tuto.github8](images/tuto.github8.png)

## Senden Sie eine Änderung

Das **verpflichten** Das oben Gesagte betrifft nur den Fork des Projekts in Ihrem GitHub-Space. Um die Änderungen am ursprünglichen Projekt einzureichen, müssen Sie einen PR (Pull Request)

- Klicken Sie auf die Registerkarte Pull-Request
- Neuer Pull-Request (PR für Freunde)

![tuto.github9](images/tuto.github9.png)

- Der PR startet einen Vergleich zwischen der Jeedom-Basis mit Ihrem Repository (der Fork).
- Dies zeigt die Änderungen an (der erste ist, weil ich von jeedom aktualisiert habe, der zweite betrifft genau die Änderung in der lastchangestateduration-Funktion, perfekt !!!)
- Der alte Code
- Der neue Code
- Wir erstellen den Pull Request (PR)

![tuto.github10](images/tuto.github10.png)

Es ist wichtig, die eingereichten Änderungen klar zu erläutern, damit der/die Entwickler des ursprünglichen Projekts Ihre Anfrage verstehen und validieren können.

- Wir klicken auf die drei kleinen Punkte
- Wir kopieren die Informationen, die wir zuvor eingegeben haben
- Dito, wir kopieren (daher die Verwendung von …​ in Schritt 1, um ein Umschreiben zu vermeiden)
- Wir klicken auf Pull Request erstellen

![tuto.github11](images/tuto.github11.png)

**Es ist vorbei.** Sie müssen warten, bis Ihre PR validiert ist.

NB: Nur Benutzer mit einem Push-Recht auf Jeedom können die PR validieren.

Um sicherzustellen, dass Ihre Änderung in der Liste enthalten ist, können Sie auf Pull Requests klicken

![tuto.github12](images/tuto.github12.png)

Wir erhalten die Liste der PR, die auf Validierung warten. Wir können unsere sehen

![tuto.github13](images/tuto.github13.png)
