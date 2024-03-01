
## Jeedom Beta- und Alpha-Test

### Definition

Ein Betatester ist ein Benutzer, der Versionen der Software testet, bevor sie für alle Benutzer freigegeben werden. Betatests ermöglichen die Meldung von Fehlern (z. B. Funktionsfehler oder Bedenken bezüglich der Benutzeroberfläche) während der Entwicklungsphase. Es ist daher eine wichtige Quelle der Verbesserung für das Projekt, die frische Ideen einbringen und die Neuheiten unter realen Bedingungen testen kann. 

### Vorsichtsmaßnahmen

Die Versionen **Beta** und **Alpha** Core oder Plugins sind Entwicklungsversionen. Auch wenn die Entwickler natürlich Vorkehrungen treffen, können diese Versionen Fehler enthalten, die ein Plugin oder den Core komplett funktionsunfähig machen könnten. Sie müssen daher mit Backup, Recovery usw. vertraut sein.

Die Kernentwicklung ist abgeschlossen am [Github](https://github.com/jeedom/core) auf der Version **Alpha**. Es hat daher alle zukünftigen Neuheiten, aber auch die meisten Bugs. Darüber hinaus werden Entwicklungen an dieser Version wahrscheinlich abgesagt oder verschoben. Die Version **Alpha** geht dann zurück zu **Beta**, wer ist normalerweise *Featured behoben* und besteht daher darin, die Stabilität zu gewährleisten, während Plugin-Entwickler ihre zukünftigen Versionen testen können.

> **Wichtig**
> Die Umstellung eines Plugins oder Core auf Beta (oder Alpha) ist riskant und verbietet jeglichen Zugriff auf offiziellen Support durch das Jeedom-Team. Die Entwickler sind jedoch auf [Gemeinschaft](https://community.jeedom.com/) um bei Problemen zu helfen, jedoch ohne Gewähr.

> **Wichtig**
> Es wird dringend empfohlen, keine Beta- oder Alpha-Versionen auf einem Produktions-Jeedom zu installieren ! Es ist unbedingt erforderlich, auf einem Raspberry oder einer Test-VM zu testen, und das Jeedom-Team kann nicht für Fehlfunktionen verantwortlich gemacht werden.

### Comment

Jeedoms Kern ist Open-Source. Jeder kann sich entscheiden, seinen Jeedom von einer stabilen Version auf eine Beta- oder Alpha-Version umzustellen, mit allen oben genannten notwendigen Vorsichtsmaßnahmen.

Der Kern hat drei Hauptzweige auf [Github](https://github.com/jeedom/core):

-  **Alpha** : Zweig der Version V4 alpha. Hauptsächlich für Entwickler der folgenden Version von Jeedom gedacht.
-  **Beta** : Zweig der Version V4 Beta. Hauptsächlich für Betatester gedacht, um vor dem Wechsel zu Stable zu testen.
-  **V4-stabil** : Stabiler Zweig von V4.

> **Warnung**
> Auch hier sollte diese Manipulation fortgeschrittenen Benutzern mit voller Kenntnis der Fakten vorbehalten bleiben.

> **Warnung**
> Das *Herabstufung* Version wird komplett davon abgeraten und kann Jeedom komplett funktionsunfähig machen. Zum Beispiel Updater von Beta v4.2 bis Stable v4.1 darf nicht gemacht werden ! In diesem Fall ist die beste Lösung, auf die zukünftige Stable-Version der aktuellen Beta zu warten, dann die Jeedom-Konfiguration wieder in die Stable-Version zu übertragen und ein manuelles Update durchzuführen. Ebenso darf ein Backup einer neueren Version nicht auf eine frühere Version wiederhergestellt werden (zum Beispiel Backup 4.2 auf Core 4.1).

Um die Version zu ändern, gehen Sie zu *Einstellungen → System → Konfiguration*, Tab *Updates / Markt*. Update-Quelle belassen bei **Fehler** und wähle die gewünschte Version.

Dann speichern und dann weiter zu *Einstellungen → System → Update Center*. Starten Sie hier ein Update des Core.

### Feedbacks

Das Ziel eines Betatesters ist es, die während seiner Tests aufgetretenen Bedenken zu melden.
Diese Aufzüge sind gemacht auf **[Gemeinschaft](https://community.jeedom.com/)** im Bereich **[Betatester](https://community.jeedom.com/c/salon-des-beta-testeurs/6)**

In diesem Abschnitt kann ein Tester auch ein Thema erstellen, um eine Verbesserung vorzuschlagen.

> Jedes Thema in diesem Abschnitt muss mit dem Tag der in Entwicklung befindlichen Version identifiziert werden. Beispielsweise : Tag v4_4 (ein Unterstrich wird verwendet, da Punkte in Tags auf Discourse verboten sind.

Dieser Abschnitt ist nicht öffentlich zugänglich. Um darauf zuzugreifen, müssen Sie ein Formular ausfüllen, damit das Jeedom-Team geben kann [Zugriff auf Ihr Konto](https://blog.jeedom.com/jeedom-partenaire-beta-testeur/).

> Bevor Sie ein Problem eskalieren, aktualisieren Sie den Core und versuchen Sie erneut, es zu reproduzieren. Siehe unten.

### Verwaltung von Core-Updates

In Version **Stabil**, jede Änderung führt zu einer Änderung der Version (geringfügig, zum Beispiel 4.1.xx), die, wenn Sie überprüft haben **Automatische Suche nach Updates**, bewirkt eine Meldung und das Erscheinen des roten Punktes in der Menüleiste. Diese Updates werden auch in . angezeigt *Einstellungen → System → Update Center* indem Sie manuell auf klicken *Auf Updates prüfen*.

In Version **Beta** und **Alpha**, Änderungen sind viel häufiger (mehrmals am Tag) und führen nicht zu einem Versionswechsel. Sie erscheinen daher nicht im *Update-Center*, Es obliegt dem Tester, den Core regelmäßig zu aktualisieren, vorzugsweise vor jeder Testphase und bevor ein Problem gemeldet wird, um sicherzustellen, dass es nicht bereits früher behoben wurde.

> Das Team ändert manchmal die Version während der Entwicklung, um bestimmte Phasen zu markieren. Aber im Gegensatz zur stabilen Version werden viele Änderungen zwischen zwei Versionen vorgenommen. Jeder Tester kann Commits auf Branches folgen [Github](https://github.com/jeedom/core).

### Changelog

Von Beginn der Versionsentwicklung **Alpha**, Das Team versucht, die Zukunft auf dem Laufenden zu halten [Änderungsprotokoll](/de_DE/core/4.4/changelog). Neue Funktionen können sich erheblich ändern oder gelöscht oder verschoben werden, daher ist dies nicht unbedingt aktuell und hat keinen Referenzwert.

In Version **Stabil**, das Changelog übernimmt jede Nebenversion (4.1.26 -> 4.1.27 usw). In Version **Beta** und **Alpha** das Changelog hat die Nummer x.0.0 und entspricht daher nicht unbedingt der aktuellen Minor-Version. Zum Beispiel während der Entwicklung von v4.2, das Changelog ist nur 4.2 notiert.0, während eine Beta in 4.2.7 sein kann. Beim Wechsel zu **Stabil**, das Changelog berücksichtigt dann jede zukünftige Nebenversion.

### Ressouces

 [Community-Zugang](https://blog.jeedom.com/jeedom-partenaire-beta-testeur/)
 
Gemeinschaft [Betatester](https://community.jeedom.com/c/salon-des-beta-testeurs/6)

[Doc-Beitrag](/de_DE/contribute/)

[Doc-Entwickler](/de_DE/dev/)

[Github](https://github.com/jeedom/core)
