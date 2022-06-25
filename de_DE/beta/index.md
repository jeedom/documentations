
## Beta- und Alpha-Tests von Jeedom

### Definition

Ein Betatester ist ein Benutzer, der Softwareversionen testet, bevor sie für alle Benutzer freigegeben werden. Beta-Tests ermöglichen es, Fehler (z. B. funktionale Fehler oder Probleme mit der Benutzeroberfläche) während der Entwicklungsphase zu melden. Es ist daher eine wichtige Verbesserungsquelle für das Projekt, das frische Ideen einbringen und neue Funktionen unter realen Bedingungen testen kann. 

### Vorsichtsmaßnahmen

Versionen **Beta** und **Alpha** Core oder Plugins sind Entwicklungsversionen. Obwohl die Entwickler natürlich Vorkehrungen treffen, können diese Versionen Fehler enthalten, die ein Plugin oder den Core vollständig funktionsunfähig machen könnten. Sie müssen daher mit Sicherungs- und Wiederherstellungsverfahren usw. vertraut sein.

Die Kernentwicklung wird durchgeführt [GitHub](https://github.com/jeedom/core) auf der Version **Alpha**. Dieser hat also alle zukünftigen Neuheiten, aber auch die meisten Bugs. Darüber hinaus werden die an dieser Version vorgenommenen Entwicklungen wahrscheinlich abgebrochen oder verschoben. Die Version **Alpha** geht dann zurück zu **Beta**, was normalerweise ist *Hervorgehoben behoben* und soll daher seine Stabilität gewährleisten, während Plugin-Entwickler ihre zukünftigen Versionen testen können.

> **Wichtig**
> Die Passage in Beta (oder Alpha) eines Plugins oder des Kerns ist riskant und verbietet jeglichen Zugriff auf den offiziellen Support des Jeedom-Teams. Die Entwickler sind jedoch auf anwesend [Gemeinschaft](https://community.jeedom.com/) um im Problemfall zu helfen, jedoch ohne Gewähr.

> **Wichtig**
> Es wird dringend davon abgeraten, eine Beta oder Alpha auf einem Produktions-Jeedom zu installieren ! Es ist wichtig, auf einem Raspberry oder einer Test-VM zu testen, und das Jeedom-Team kann nicht für Fehlfunktionen verantwortlich gemacht werden.

### Comment

Jeedom Core ist Open-Source. Jeder kann entscheiden, sein Jeedom von einer stabilen Version auf eine Beta- oder Alpha-Version zu aktualisieren, mit allen oben genannten notwendigen Vorsichtsmaßnahmen.

Der Kern weist drei Hauptzweige auf [GitHub](https://github.com/jeedom/core):

-  **Alpha** : V4-Alpha-Zweig. Hauptsächlich für Entwickler der nächsten Version von Jeedom gedacht.
-  **Beta** : Zweig der Beta-Version von V4. Hauptsächlich für Betatester gedacht, um zu testen, bevor sie zu Stable wechseln.
-  **V4-stabil** : Stabiler Zweig von V4.

> **Aufmerksamkeit**
> Noch einmal, diese Manipulation ist fortgeschrittenen Benutzern mit voller Sachkenntnis vorbehalten.

> **Aufmerksamkeit**
> Das *herabstufen* Version wird völlig abgeraten und kann Jeedom völlig funktionsunfähig machen. Zum Beispiel Beta v4 Updater.2 auf Stable v4.1 darf nicht erfolgen ! In diesem Fall besteht die beste Lösung darin, auf die zukünftige Stable-Version der aktuellen Beta zu warten, dann die Jeedom-Konfiguration auf die Stable-Version zurückzusetzen und ein manuelles Update durchzuführen. Ebenso darf ein Backup einer neueren Version nicht auf eine frühere Version wiederhergestellt werden (z.B. Backup 4.2 auf Core 4.1).

Um die Version zu ändern, gehen Sie zu *Einstellungen → System → Konfiguration*, Tab *Updates/Markt*. Belassen Sie die Update-Quelle bei **Standard** und wählen Sie die gewünschte Version aus.

Dann speichern und dann zu gehen *Einstellungen → System → Update Center*. Starten Sie hier ein Core-Update.

### Feedbacks

Das Ziel eines Betatesters ist es, die während seiner Tests aufgetretenen Probleme zu melden.
Diese Aufzüge werden auf gemacht **[Gemeinschaft](https://community.jeedom.com/)** im Bereich **[Beta-Tester](https://community.jeedom.com/c/salon-des-beta-testeurs/6)**

In diesem Abschnitt kann ein Tester auch ein Thema erstellen, um eine Verbesserung vorzuschlagen.

> Jedes Thema in diesem Abschnitt muss mit dem Tag der in Entwicklung befindlichen Version gekennzeichnet sein. Zum Beispiel : Tag v4_2 (ein Unterstrich wird verwendet, weil Punkte in Tags auf Discourse verboten sind.

Dieser Bereich ist nicht öffentlich zugänglich. Um darauf zugreifen zu können, müssen Sie ein Formular ausfüllen, das das Jeedom-Team bereitstellt [Zugriff auf Ihr Konto](https://blog.jeedom.com/jeedom-partenaire-beta-testeur/).

### Core-Update-Verwaltung

In Fassung **Stetig**, jede Änderung bewirkt eine Versionsänderung (minor, zum Beispiel 4.1.xx), die, wenn Sie überprüft haben **Automatische Suche nach Updates**, führt zu einer Meldung und dem Erscheinen des roten Punktes in der Menüleiste. Diese Updates werden auch in angezeigt *Einstellungen → System → Update Center* manuell anklicken *Auf Updates prüfen*.

In Fassung **Beta** und **Alpha**, die Änderungen sind viel häufiger (mehrmals täglich) und verursachen keinen Versionswechsel. Sie erscheinen daher nicht in der *Update-Center*, Es ist Sache des Testers, den Core regelmäßig zu aktualisieren, vorzugsweise vor jeder Testphase und bevor er ein Problem meldet, um sicherzustellen, dass es nicht bereits früher behoben wurde.

> Das Team ändert manchmal die Version während der Entwicklung, um bestimmte Phasen zu markieren. Aber im Gegensatz zur Stable-Version werden viele Änderungen zwischen zwei Versionen vorgenommen. Jeder Tester kann Commits in Branches nachverfolgen [GitHub](https://github.com/jeedom/core).

### Changelog

Von Beginn der Entwicklung der Version **Alpha**, das Team versucht, die Zukunft [Changelog](/fr_FR/core/#VERSION#/Änderungsprotokoll). Neue Funktionen können sich erheblich ändern oder gelöscht oder verschoben werden, daher ist diese nicht unbedingt aktuell und hat keinen Referenzwert.

In Fassung **Stetig**, Das Änderungsprotokoll enthält jede Nebenversion (4.1.26 -> 4.1.27 usw.). In Fassung **Beta** und **Alpha** das Änderungsprotokoll ist mit x.0 nummeriert.0 und entspricht daher nicht zwingend der aktuellen Minor-Version. Bei der Entwicklung von v4.2, das Changelog wird nur mit 4,2 bewertet.0 während eine Beta in 4.2.7 sein kann. Beim Durchfahren **Stetig**, das Änderungsprotokoll berücksichtigt dann jede zukünftige Unterversion.

### Ressouces

 [Community-Zugriff](https://blog.jeedom.com/jeedom-partenaire-beta-testeur/)
 
Gemeinschaft [Beta-Tester](https://community.jeedom.com/c/salon-des-beta-testeurs/6)

[Dok beitragen](/de_DE/contribute/)

[Doc-Entwickler](/de_DE/dev/)

[GitHub](https://github.com/jeedom/core)
