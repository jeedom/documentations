# Tragen Sie zur Entwicklung des Kerns bei

Sie möchten zur Entwicklung des Jeedom Core beitragen ?

- Sie können PRs machen (*Anfragen ziehen*) Auf dem *Repository* vom Kern.
- Wenn Sie Ideen für die Entwicklung haben und langfristig teilnehmen möchten, zögern Sie nicht [Kontaktieren Sie das Projektteam](mailto:contact@jeedom.com).

Hier sind die Grundlagen zu wissen.

## Github-Zweige

Um an der Entwicklung von Jeedom teilnehmen zu können, müssen Sie über einen Github-Account verfügen.
Der Kerncode ist Open Source und verfügbar [hier](https://github.com/jeedom/core) durch mehrere Zweige :

- **Alpha** :  V4 Alpha-Zweig. Hauptsächlich für Entwickler für die nächste Version von Jeedom.
- **Beta** : V4 Beta-Zweig. Hauptsächlich für Betatester.
- **V4-stabil** : Stabiler Zweig von V4
- **Veröffentlichung** : Geben Sie den Kandidatenzweig von V3 frei. Nur für Bugfixes.
- **Meister** : Zweig der stabilen Version V3. Nur für Bugfixes.

Aktualisierungen werden in diesen Zweigen abhängig von der Konfiguration von Jeedom durchgeführt **Einstellungen → System → Konfiguration / Updates / Markt**.

PRs (*Anfragen ziehen*) sollte immer auf dem Alpha-Zweig durchgeführt werden.

Ebenso, um an Diskussionen über teilzunehmen [Gemeinschaft](https://community.jeedom.com/), Registrieren Sie sich als Entwickler : [Jeedom dev](https://www.jeedom.com/fr/dev.html).

## Entwicklung

Um die Entwicklung des Kerns zu unterstützen, müssen Sie diese beherrschen :

- php : Entwicklung von PHP-Klassen, Ajax ruft vom Frontend auf.
- JavaScript : Entwicklung von js Klassen und Frontend.
- CSS : Schnittstellenentwicklung.

Kenntnisse der Linux-Umgebung sind ebenfalls wünschenswert.

## Kernbaum

Der Code wird in verschiedenen Verzeichnissen im Stammverzeichnis von Jeedom verteilt (standardmäßig) : var / www / html) :

- 3. Partei : Datei mit den von Jeedom verwendeten externen Bibliotheken (jQuery, CodeMirror usw).
- Sicherungskopie : Jeedom-Sicherungsordner.
- **Ader** : Datei mit den internen Funktionen des Core:
	- **Ajax** : Schnittstelle zwischen PHP-Dateien zwischen JS-Klassen und PHP-Klassen.
	- API : API PHP-Dateien.
	- **Klasse** : PHP-Klassendateien (*eqLogic, cmd, jeeObject, history, cron usw.*).
	- com : Kommunikations-PHP-Klassendateien (*http, Shell*).
	- Config : Kernkonfiguration PHP-Dateien und *default.config.ini* einschließlich Standardkonfigurationseinstellungen.
	- CSS : Mit Core und deren CSS verfügbare Symbole.
	- i18n : Json-Dateien einschließlich übersetzter Zeichenfolgen.
	- img : Kernbilder (Logos, Hintergründe usw.).
	- **js** : Class js-Dateien, insbesondere von Jeedom-Seiten aufgerufen.
	- php : PHP-Dateien für Core erforderlich (außer Klassen).
	- Repo : Marktspezifische PHP-Dateien, Samba usw.
	- **Schablone** : HTML-Dateien (*Dashboard und Mobile*) zum Anzeigen von eqLogics (Tile), Befehlen (Widgets) und Szenarien.
	- **Themes** : CSS-Dateien der drei Kernthemen (Dark, Light, Legacy) für Dashboard und Mobile.
- Daten : Datei mit Benutzerdaten (Berichte, Ansichten, CSS / JS für erweiterte Personalisierung, 3D-Design usw.)).
- **Desktop** : Datei mit allen auf dem Desktop angezeigten Seiten (Benutzeroberfläche) und deren Funktionen.
	- verbreitet : Js / PHP-Dateien, die allen oder mehreren Seiten gemeinsam sind. Gruppenfunktionen, die von mehreren Seiten aufgerufen werden können, insbesondere die *utils.js*, auf allen Seiten in Desktop vorhanden.
	- CSS : Desktop View-spezifische CSS-Dateien.
	- img : Desktop-spezifische Bilder.
	- js : Js-Dateien, die jeder Seite entsprechen (*Verwaltung, Dashboard, Szenario usw.*).
	- modal : Modale PHP-Dateien, einschließlich PHP / HTML-Code und JS-Code.
	- php : PHP-Dateien für jede Seite (*Verwaltung, Dashboard, Szenario usw.*).
- docs : Dokumentation.
- installieren : Jeedom-Installationsdateien.
- log : Datei mit allen Protokollen (http.Fehler, Aktualisierung usw.) und solche von Szenarien (SzenarioLog-Unterordner, benannt nach ID).
- **Handy** : Datei mit allen im Handy angezeigten Seiten (Webapp-Oberfläche) und deren Funktionen.
	- CSS : Mobile spezifische CSS-Dateien anzeigen.
	- HTML : HTML-Dateien, die jeder Seite entsprechen (*Haus, Ausrüstung, Zeitachse usw.*).
	- js : Js-Dateien, die jeder Seite entsprechen (*Haus, Ausrüstung, Zeitachse usw.*).
	- modal : HTML-Dateien, die modal in Mobile entsprechen.
- Plugins : Datei mit allen installierten Plugins.
- Skript : Bereitstellungsskript, Zertifikate.
- Unterstützung : Datei, die beim Anfordern von Support verwendet wird.
- Verkäufer : Datei mit PHP-Bibliotheken von Drittanbietern.


## Front-end

Die Jeedom-Schnittstelle funktioniert wie eine Website, von PHP mit SQL-Schnittstelle und von JS / CSS.

Zunächst lädt der Browser die Datei `/ index.php` :
- Überprüfung der Installation von Jeedom, Verweis auf `install / setup.php` falls nötig.
- Desktop- oder Mobile-Herkunftsprüfung.
- Laden Sie die erforderlichen Dateien und Klassen mit `/ core / php / core.inc.php`.
- Überprüfung der Benutzerauthentifizierung.
- Überprüfen Sie die Parameter in der URL, um den richtigen Inhalt direkt zu laden.
- Weiterleiten an die Desktop-Version `/ desktop / php / index.php` oder Mobile` mobile / html / home.html` oder andere abhängig von den Parametern der URL.

### Desktop

Die Jeedom-Schnittstelle arbeitet nach dem One-Page-Prinzip. Nach dem Laden werden die verschiedenen Seiten angezeigt, indem der Inhalt eines Containers geändert wird.

Die Hauptdatei in Desktop ist "/ desktop / php / index.php".

Jede Seite enthält mindestens zwei Parameter in der URL. Beispiel :

`https://my.dns1.jeedom.com/index.php?v = d & p = Armaturenbrett " :
- **v** : Schnittstellenversion. d für Desktop, m für Mobilgeräte.
- **p** : Seite zum Anzeigen. Hier "Dashboard".

In diesem Fall die Datei `/ desktop / php / index.php` lädt die Datei `/ desktop / php / dashboard.php` im div `div_pageContainer`. Dadurch wird auch die Datei `/ desktop / js / dashboard geladen.js` einschließlich der für die Anzeige dieser Seite spezifischen js-Funktionen (hier das Dashboard)).

Die Datei `/ desktop / php / index.php` kümmert sich auch darum :
- Überprüfen Sie den Modus *Rettung*
- Überprüfen Sie die Benutzerauthentifizierung.
- Überprüfen Sie gegebenenfalls, welche Seite gemäß der Konfiguration geladen werden soll (Standardseite des Benutzers)).
- Erstellen Sie die HTML-Struktur (*Kopf, Körper, div_pageContainer usw*).
- Laden Sie CSS, Bibliotheken usw.
- Benutzerthema laden.
- Erstellen Sie die Menüleiste.
- Geben Sie einige globale PHP / JS-Variablen ein.
- Laden Sie die js-Datei `desktop / common / js / utils.js`

Die Datei `desktop / common / js / utils.js` ist daher immer vorhanden und wird einmal geladen. Es erlaubt zu :
- Verwalten Sie js Ereignisse aus dem Menü.
- Verwalten Sie URL-Parameter gemäß der angeforderten Seite.
- Laden Sie die angeforderte Seite in den div `div_pageContainer`.
- Verwalten Sie das Öffnen / Schließen von Modalen (Dialogfenster)).
- Verwalten Sie einen möglichen Themenwechsel entsprechend der Zeit.
- Ermöglichen Sie verschiedenen js-Dateien den Zugriff auf allgemeine Funktionen.

Also der Index.PHP und die Utensilien.js bieten die grundlegende Struktur und Funktionen der Schnittstelle.
Anschließend wird der Inhalt der aufgerufenen Seite von desktop / php / page geladen.PHP und Desktop / js / page.js.
Diese rein schnittstellenorientierten Inhaltsdateien können direkt in PHP oder dank der js-Klassen (`/ core / js`) über Ajax-Aufrufe auf Core-Funktionen (die` / core / class`-Klassen) zugreifen (`/ core / ajax`).

Die internen Funktionen des Core sind somit für den internen Betrieb (Back-End) gut getrennt, aber über die Schnittstelle zugänglich. Ebenso hat jede Seite ihren eigenen PHP- und JS-Code. Dies ermöglicht eine bessere Entwicklung und Pflege des Codes, aber auch eine Optimierung der Leistung, indem nur die erforderlichen Klassen und Funktionen geladen werden.

### Mobile

Die Desktop-Oberfläche reagiert und passt sich der Größe des Browsers an. Einige Dinge, wie das Bearbeiten eines Skripts, wären jedoch auf einem kleinen Bildschirm kompliziert. Darüber hinaus ist es bei einem Smartphone im Freien, in 3G oder sogar 4G, wichtig, die Geschwindigkeit des Displays zu optimieren. Aus diesem Grund verfügt Jeedom über eine leichtere mobile Oberfläche, die für kleine Bildschirme geeignet ist.

Die Referenzseite lautet `/ mobile / html / index.html`, die sich darum kümmert :
- Überprüfen Sie die Benutzerauthentifizierung.
- Erstellen Sie die HTML-Struktur (*Kopf, Körper, div_pageContainer usw*).
- Laden Sie CSS, Bibliotheken usw.
- Benutzerthema laden.
- Geben Sie einige globale PHP / JS-Variablen ein.
- Laden Sie die js-Datei `mobile / js / application.js`

Die `mobile / js / Anwendungsdatei.js` enthält die Funktionen, die allen Seiten gemeinsam sind.

Was die Desktop-Oberfläche betrifft, besteht die aufgerufene Seite aus zwei Dateien :
- `/ mobile / html / home.html` : HTML Quelltext.
- `/ mobile / js / home.js` : Die für diese Seite spezifischen js-Funktionen.

Ein bemerkenswerter Unterschied bei Mobile ist das Fehlen von PHP-Seiten. Die Generierung des Codes basiert daher auf den js-Klassen, die bei Ajax-Aufrufen immer die Core-Funktionen aufrufen können.

### Verweise

*In Bearbeitung*



## Back-end

*In Bearbeitung*

Die Schnittstelle ist eine Sache, aber natürlich ist Ihr Jeedom immer aktiv, um die Szenarien, die Crones, die Protokolle, die Historien usw. auszuführen.

Das Back-End basiert auf denselben PHP-Klassen wie das Front-End, das in `/ core / class /` vorhanden ist. Jeder Teil von Jeedom hat insbesondere seine PHP-Klasse :

- jeeObject.class.php : Gruppiert Funktionen in Bezug auf Jeedom-Objekte.
- eqLogic.class.php : Kombiniert Funktionen für Jeedom-Geräte.
- cmd.class.php : Kombiniert Funktionen in Bezug auf Jeedom-Befehle.
- cron.class.php : Kombiniert Funktionen in Bezug auf die geplanten Aufgaben von Jeedom.
- Config.class.php : Gruppiert Funktionen in Bezug auf Jeedom-Konfigurationsparameter.
- Szenario.Klasse.php : Kombiniert die Funktionen in Bezug auf Jeedom-Szenarien.
- DB.class.php : Kombiniert alle Jeedom-Datenbankzugriffsfunktionen. Der gesamte SQL-Zugriff, der von den anderen Klassen benötigt wird, wird von dieser verwaltet.

etc.

## Documentation

Über die reine Entwicklung des Kerns hinaus können Sie auch an der Dokumentation von Jeedom teilnehmen.

Dies kann in `docs / fr_FR /` gefunden werden. Sie können PRs machen (*Anfragen ziehen*) auf Dateien .md, vorzugsweise auf dem Alpha-Zweig.

Die Übersetzungen sind in den anderen Sprachdateien vorhanden. Das Verzeichnis `docs / i18n /` enthält Dateien .json by language für die Übersetzung der Zeichenketten der Core-Schnittstelle selbst.

Diese werden automatisch von einem Jeedom-spezifischen Übersetzungssystem generiert. Es besteht daher keine Notwendigkeit, Änderungen daran vorzunehmen, da diese vom System überschrieben werden. Wenn Sie Übersetzungen verbessern möchten, können Sie darüber berichten [Gemeinschaft](https://community.jeedom.com/). Wenn Sie eine der Sprachen von Jeedom beherrschen und weiter gehen möchten, können Sie den Zugriff auf das Übersetzungssystem anfordern, mit dem Sie alle Übersetzungen jeder Sprache aus den verschiedenen Versionen von Core und offiziellen Plugins korrigieren können : [Kontaktieren Sie das Projektteam](mailto:contact@jeedom.com).

Im Code können Sie Zeichenfolgen angeben, die wie folgt übersetzt werden sollen :

In php : `$ $ myString = __ ('Mein zu übersetzender Satz', __FILE __);`

In js : ``{% raw %}var myString = '{{Mein zu übersetzender Satz}}'{% endraw %}``

Das Übersetzungssystem kümmert sich dann um die Übersetzung und Referenzierung in den JSON-Dateien (`docs / i18n /`) sowie um den Kern ihres Ersatzes in der Schnittstelle.

