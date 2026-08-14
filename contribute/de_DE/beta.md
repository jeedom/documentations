
# Jeedom-Beta-Test

Ein Beta-Tester ist ein Nutzer, der Softwareversionen testet, bevor diese für alle Nutzer freigegeben werden. Durch das Beta-Testing können Fehler gemeldet werden, die während der Entwicklungsphase auftreten könnten *(z. B. Funktionsfehler oder Probleme mit der Benutzeroberfläche)*. Dies ist eine wichtige Quelle für Verbesserungen im Projekt, da so neue Ideen eingebracht und Neuerungen unter realen Bedingungen getestet werden können.

## Warnhinweise

Obwohl die Entwickler größte Sorgfalt walten lassen, können in den in der Entwicklung befindlichen Versionen Fehler enthalten sein, die dazu führen können, dass ein Plugin oder der Kern vollständig funktionsunfähig wird. Ebenso können Funktionen, die sich in der Entwicklung befinden, je nach den Umständen verschoben oder sogar aufgegeben werden. Man sollte daher mit den Verfahren zur Sicherungs- und Wiederherstellung von Jeedom gut vertraut sein, bevor man mit dem Beta-Testing beginnt.

Wie oben erwähnt, birgt das Umstellen von Jeedom oder eines Plugins auf eine Version, die sich noch in der Entwicklung befindet, Risiken. Daher **wird dringend empfohlen, dies auf einer eigens dafür vorgesehenen Testumgebung durchzuführen *([eine virtuelle Maschine](/installation/vm) zum Beispiel)* statt auf einem Jeedom im Produktivbetrieb**.

>**WICHTIG**
>
>Das Jeedom-Team übernimmt keine Haftung für Fehlfunktionen, die durch die Installation einer anderen als der stabilen Version entstehen. In diesem Fall **ist der Zugang zum offiziellen Support nicht möglich**, daher müssen Sie [eine Rückmeldung geben](#Faire%20une%20remontée).

## Zweige

Jeedom ist eine Open-Source-Software, deren Entwicklung in Echtzeit unter [GitHub](https://github.com/jeedom/core){:target="_blank"}. Jeder dieser Bereiche entspricht unterschiedlichen Entwicklungsstufen.

### Hauptzweige

-  **Entwicklung**: Version, die sich derzeit in der Entwicklung befindet und regelmäßig aktualisiert wird *(kontinuierliche Integration)*.
-  **Release**: Die nächste Version wird einige Tage vor der Übernahme in die stabile Version bereitgestellt, um unter realen Bedingungen getestet und bei Bedarf schnell korrigiert zu werden.
-  **master**: Stabile Version von Jeedom *(Standard-Zweig mit offizieller Unterstützung)*.

>**INFORMATION**
>
>Obwohl im Forum mehr als hundert Beta-Tester registriert sind, erhalten wir nur wenig Feedback zu den laufenden Entwicklungen *(Zweig `develop`)*. Ob aus Zeitmangel oder wegen Unsicherheiten hinsichtlich der eigenen technischen Kenntnisse – wer dennoch an den Weiterentwicklungen von Jeedom mitwirken möchte, kann den Branch testen `release` *(bereits weitgehend stabilisiert)* bevor sie allen Nutzern als stabile Version zur Verfügung gestellt wird.

### Nebenzweige

Nebenzweige sind eigenständige, punktuelle Entwicklungen, die dazu bestimmt sind, in einen Hauptzweig integriert zu werden.

-  **feat/xxxxx-yyyyy**: Neue Funktion, die vor ihrer Einführung in `develop`.
-  **fix/xxxxx-yyyyy**: Nicht dringender Patch, der einige Tage vor seiner Bereitstellung in `develop`.
-  **Hotfix/xxxxx-yyyyy**: Dringender Hotfix, der umgehend auf den drei Hauptzweigen bereitgestellt wurde.

>**INFORMATION**
>
>`xxxxx-yyyyy` entspricht dem kurzen Betreff der betreffenden Funktion oder des betreffenden Patches.

### Version wechseln

Beim Lesen der [Warnhinweise](#Mises%20en%20garde) Wie bereits dargelegt, ist es offensichtlich, dass **diese Vorgehensweise ausschließlich erfahrenen Benutzern vorbehalten ist, die sich der Risiken voll bewusst sind**.

Um den Zweig und damit die Jeedom-Version zu wechseln, gehen Sie im Menü zu **Einstellungen → System → Konfiguration**, Registerkarte **Updates/Market**. Belassen Sie die Update-Quelle auf **Standard** und wählen Sie die Version des Core *(Zweig)* aus, die Sie installieren möchten.

Klicken Sie anschließend auf die Schaltfläche **Speichern** und gehen Sie dann zum Menü **Einstellungen → System → Update-Center**. Auf dieser Seite müssen Sie nur noch ein Update des Core durchführen, um auf die neue Version umzustellen.

>**WICHTIG**
>
>Im Falle einer Änderung der Core-Versionsnummer wird dringend davon abgeraten, auf eine niedrigere Version *(Downgrade)* zurückzuwechseln. Es wird vielmehr empfohlen, abzuwarten, bis die Änderungen in einer stabilen Version verfügbar sind, um dann wieder darauf umzusteigen.\
>Was die Nebenzweige betrifft, muss man, sobald die Funktion oder der Patch getestet wurde, zur Basisversion zurückkehren *(`develop` in den meisten Fällen)*.

## Aktualisierungen

In `master` *(stabil)* oder `release`: Jede neue Version führt zu einer Änderung der Versionsnummerierung *(x.y.z)*. Wenn das Kontrollkästchen **Automatische Überprüfung auf Updates** aktiviert ist, wird in Jeedom eine Benachrichtigung angezeigt, begleitet von einem roten Symbol in der Menüleiste. Andernfalls müssen Sie im Menü **Einstellungen → System → Update-Center** die Schaltfläche **Auf Updates prüfen** anklicken.

Im Gegensatz dazu lösen die anderen Zweige trotz regelmäßiger Änderungen keine Benachrichtigungen oder Warnmeldungen im Update-Center aus. Es obliegt daher dem Beta-Tester, den Core manuell und regelmäßig zu aktualisieren. Insbesondere vor jeder Testphase und vor allem vor der Meldung eines Problems, um sicherzustellen, dass das Problem nicht bereits behoben wurde.

## Änderungsprotokoll

Das **Änderungsprotokoll** *(oder Changelog)* bietet einen Überblick über die Änderungen, die mit jeder Version von Jeedom vorgenommen wurden.

Nur die Versionen `master` *(stabil)* und `release` *(nächste stabile Version)* gewährleisten das Vorhandensein eines [Detailliertes und aktuelles Änderungsprotokoll](/core/changelog){:target="_blank"}.

In `develop`Da die Integrationen noch andauern, wird das Änderungsprotokoll in dieser Phase noch nicht erstellt. Um sich über die seit der letzten stabilen Version vorgenommenen Änderungen zu informieren, lesen Sie bitte die [Versionshinweise](https://github.com/jeedom/core/blob/develop/docs/release-notes.md){:target="_blank"} die die auf diesem Zweig genehmigten *Pull Requests* auflisten.

Da sich die Nebenzweige hingegen auf ein bestimmtes Element beziehen, sind auf den ersten Blick keine weiteren Details erforderlich, um sie zu verstehen.

## Plugins

Diese Seite befasst sich hauptsächlich mit den Beta-Tests rund um den Jeedom-Kern, doch das Prinzip bleibt für die Plugins im Wesentlichen dasselbe. Tatsächlich werden die Plugins in einer stabilen Version *(Zweig `master`)* standardmäßig, es gibt jedoch auch Versionen `beta` für laufende Entwicklungen.

So greifen Sie auf die Plugins in der Version `beta`: Dazu muss das Kontrollkästchen **Zugriff auf Beta-Plugins aktivieren** in [Ihr Market-Profil](https://market.jeedom.com/index.php?v=d&p=profils){:target="_blank"}. Anschließend müssen Sie das Plugin in dieser Version installieren oder neu installieren.

>**WICHTIG**
>
>Die Installation eines Plugins in der Version `beta` führt zum Verlust jeglichen Anspruchs auf offiziellen Support.

## Eine Rückmeldung senden

Beta-Tester sind an vorderster Front dabei, wenn es darum geht, Fehlfunktionen zu erkennen, neue Funktionen zu testen oder Korrekturen vor der Veröffentlichung in der stabilen Version zu validieren.

Nach einer gründlichen Analyse der Situation stehen mehrere Kanäle zur Verfügung, um möglichst detaillierte Rückmeldungen mit allen notwendigen Hintergrundinformationen zu übermitteln. Unabhängig vom gewählten Kanal besteht der erste unverzichtbare Schritt darin, eine Recherche durchzuführen, um sicherzustellen, dass das Thema nicht bereits behandelt wurde, damit keine Doppelungen entstehen.

>**WICHTIG**
>
>Es ist entscheidend, sich selbst ein Mindestmaß an Verständnis für das Thema anzueignen, ohne sich vollständig auf die Analyse einer künstlichen Intelligenz zu verlassen. Diese kann jedoch weiterhin nützlich sein, um die Rückmeldung zu strukturieren oder *(geprüfte)* Ergänzungen hinzuzufügen.

### Jeedom-Forum

Feedback kann direkt in [Der Treffpunkt für Beta-Tester des Jeedom-Forums](https://community.jeedom.com/c/salon-des-beta-testeurs/6){:target="_blank"}.

Wählen Sie den passenden Bereich für die Kategorie des Beitrags aus und fügen Sie dann die zum Thema passenden *Tags* hinzu *(`v4_5` zum Beispiel)*. Nun müssen Sie nur noch Ihr Feedback verfassen und dabei so viele Informationen wie möglich angeben, damit auch Außenstehende die Situation nachvollziehen, nachstellen und analysieren können.

>**INFORMATION**
>
>Der Beta-Tester-Bereich umfasst außerdem [ein Abschnitt **Vorschläge**](https://community.jeedom.com/c/salon-des-beta-testeurs/suggestion/29){:target="_blank"} um Verbesserungsvorschläge zu unterbreiten.

### GitHub-Issue

Wenn Sie nach einer Recherche feststellen, dass bereits ein *Issue* oder ein *Pull Request* zum gleichen Thema eröffnet wurde, können Sie Ihre Analyse dort hinzufügen, sofern sie relevante Aspekte im Rahmen der betreffenden Entwicklung beiträgt.

Alternativ können Sie [ein *Issue* auf GitHub](https://github.com/jeedom/core/issues){:target="_blank"} mit einer ausführlichen Beschreibung der aufgetretenen Störung.

>**INFORMATION**
>
>Auf GitHub ist Englisch die Standardsprache, damit jeder das Thema verstehen kann, aber wir akzeptieren auch Texte in Französisch.

## Zur Entwicklung beitragen

Ob es nun darum geht, einen einfachen Rechtschreib- oder Syntaxfehler zu korrigieren oder sogar eine größere Änderung vorzuschlagen – jeder kann auf seiner Ebene zur Entwicklung und Weiterentwicklung der Jeedom-Lösung beitragen.

### Dokumentation

Die Dokumentationsseiten, die Sie gerade lesen, müssen regelmäßig aktualisiert und angepasst werden, damit sie aktuell und zuverlässig bleiben. Die Unterstützung durch die Community wird in diesem Zusammenhang sehr geschätzt.

Bevor Änderungen an der Dokumentation vorgeschlagen werden, sind einige Besonderheiten zu berücksichtigen. Es ist daher unerlässlich, sich mit den bewährten Vorgehensweisen vertraut zu machen, um [Zur Dokumentation beitragen](/contribute/doc) an erster Stelle.

### Kern und Plugins

Genau wie die Dokumentation sind auch der Jeedom-Kern sowie die meisten Plugins für externe Beiträge offen. Weitere Informationen finden Sie auf der Seite [„Zum Kern oder zu den Plugins beitragen“](/contribute/core) Weitere Informationen.
