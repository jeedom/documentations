# Tragen Sie zur Entwicklung des Kerns bei

Sie möchten zur Entwicklung des Jeedom Core beitragen ?

- Sie können PRs machen (*Anfragen ziehen*) Auf dem *Repository* vom Kern.
- Wenn Sie Ideen für Entwicklungen haben und langfristig teilnehmen möchten, zögern Sie nicht [Kontaktieren Sie das Projektteam](mailto:contact@jeedom.com).

Hier sind die Grundlagen zu wissen :

> Bevor Sie eine PR einreichen, aktualisieren Sie Ihre Alpha, um sicherzustellen, dass der Fehler nicht bereits behoben wurde. Und synchronisieren Sie Ihr Github-Repository.

> Stellen Sie sicher, dass das, was Sie beheben, keine anderen Fehler verursacht. Die meisten Kernfunktionen werden von verschiedenen Frontend-Seiten oder von anderen Kernfunktionen und von Plugins aufgerufen. Führen Sie eine Suche im Core durch, um zu sehen/zu verstehen, wo die Funktionen verwendet werden, und melden Sie im Zweifelsfall das Problem und Ihre Korrektur [Gemeinschaft](https://community.jeedom.com/).

## Github-Zweige

Um an der Entwicklung von Jeedom teilnehmen zu können, müssen Sie einen Account haben [Github](https://github.com/).

Der Kerncode ist Open-Source und verfügbar [hier](https://github.com/jeedom/core).

- **Alpha** :  Zweig der Version V4 alpha. Hauptsächlich für Entwickler der nächsten Version von Jeedom gedacht.
- **Beta** : Zweig der Version V4 Beta. Hauptsächlich für Betatester gedacht, um vor dem Wechsel zu Stable zu testen.
- **Meister** : Stabiler Zweig von V4.

Die Aktualisierungen werden in diesen Zweigen gemäß der Konfiguration von Jeedom vorgenommen **Einstellungen → System → Konfiguration / Updates / Markt**.

PRs (*Anfragen ziehen*) muss immer auf dem Alpha-Zweig erfolgen.

Ebenso, um an Diskussionen über teilzunehmen [Gemeinschaft](https://community.jeedom.com/), Registrieren Sie sich als Entwickler : [Jeedom dev](https://www.jeedom.com/fr/dev.html).

## Entwicklung

Um die Entwicklung des Kerns zu unterstützen, müssen Sie eine oder mehrere der folgenden Sprachen beherrschen:

- Php : Entwicklung von PHP-Klassen, Ajax ruft vom Frontend auf.
- JavaScript : Entwicklung von js Klassen und Frontend.
- CSS : Schnittstellenentwicklung.

Kenntnisse im Linux-Umfeld sind ebenfalls wünschenswert.

## Kernbaum

Der Code wird in verschiedenen Verzeichnissen im Stammverzeichnis von Jeedom verteilt (standardmäßig) : /var/www/html) :

- **3. Partei** : Ordner mit externen Bibliotheken, die von Jeedom verwendet werden (jQuery, CodeMirror usw.)).
- **Sicherungskopie** : Jeedom Backup-Ordner.
- **Ader** : Datei mit den internen Funktionen des Core:
	- **Ajax** : Schnittstelle zwischen PHP-Dateien zwischen JS-Klassen und PHP-Klassen.
	- **API** : API PHP-Dateien.
	- **Klasse** : PHP-Klassendateien (*eqLogic, cmd, jeeObject, history, cron usw.*).
	- **com** : Kommunikations-PHP-Klassendateien (*http, Shell*).
	- **Config** : Kernkonfiguration PHP-Dateien und *default.config.ini* einschließlich Standardkonfigurationseinstellungen. Versionsdatei für die Core-Version.
	- **CSS** : Mit Core und deren CSS verfügbare Symbole.
	- **i18n** : Json-Dateien einschließlich übersetzter Zeichenfolgen.
	- **img** : Kernbilder (Logos, Hintergründe usw.).
	- **js** : Class js-Dateien, die insbesondere von den Jeedom-Seiten aufgerufen werden.
	- **php** : Von Core benötigte PHP-Dateien (ausgenommen Klassen)).
	- **Repo** : Marktspezifische PHP-Dateien, Samba usw.
	- **Schablone** : HTML-Dateien (*Dashboard und Mobile*) zum Anzeigen von eqLogics (Tile), Befehlen (Widgets) und Szenarien.
	- **Themes** : CSS-Dateien der drei Kernthemen (Dark, Light, Legacy) für Dashboard und Mobile.
- **Daten** : Ordner mit Benutzerdaten (Berichte, Ansichten, CSS / JS für erweiterte Personalisierung, 3D-Design usw.)).
- **Desktop** : Ordner mit allen auf dem Desktop angezeigten Seiten (der Benutzeroberfläche) und ihren Funktionen.
	- **verbreitet** : Js/php-Dateien, die für mehrere Seiten gelten. Gruppenfunktionen, die von mehreren Seiten aufgerufen werden können, insbesondere die *utils.js*, auf allen Seiten in Desktop vorhanden.
	- **CSS** : Desktop-Ansicht spezifische CSS-Dateien.
	- **img** : Spezifische Bilder für die Desktop-Ansicht.
	- **js** : Js-Dateien, die jeder Seite entsprechen (*Verwaltung, Dashboard, Szenario usw.*).
	- **modal** : Modale PHP-Dateien, einschließlich PHP / HTML-Code und JS-Code.
	- **php** : PHP-Dateien für jede Seite (*Verwaltung, Dashboard, Szenario usw.*).
- **docs** : Dokumentation.
- **installieren** : Jeedom-Installationsdateien.
- **log** : Ordner mit allen Protokollen (http.Fehler, Aktualisierung usw.) und die der Szenarien (SzenarioLog-Unterordner, benannt nach ID).
- **Handy** : Ordner mit allen auf dem Handy angezeigten Seiten (Webanwendungsoberfläche) und deren Funktionen.
	- **CSS** : Mobile spezifische CSS-Dateien anzeigen.
	- **HTML** : HTML-Dateien für jede Seite (*Haus, Ausrüstung, Zeitachse usw.*).
	- **js** : Js-Dateien, die jeder Seite entsprechen (*Haus, Ausrüstung, Zeitachse usw.*).
	- **modal** : HTML-Dateien, die den Modalitäten in Mobile entsprechen.
- **Plugins** : Ordner mit allen installierten Plugins.
- **Skript** : Bereitstellungsskript, Zertifikate.
- **Unterstützung** : Ordner, der bei Supportanfragen verwendet wird.
- **Verkäufer** : Ordner mit PHP-Bibliotheken von Drittanbietern.


## Front-end

Die Schnittstelle von Jeedom funktioniert wie eine Website, bestehend aus PHP, verbunden mit SQL und JS/CSS.

Zunächst lädt der Browser die Datei `/ index.php :
- Überprüfen Sie die Installation von Jeedom und verweisen Sie auf "Installieren / Einrichten".php` falls nötig.
- Überprüfung des Desktop- oder Mobile-Ursprungs.
- Laden der erforderlichen Dateien und Klassen mit `/ core / php / core.inc.php`.
- Überprüfen der Benutzerauthentifizierung.
- Überprüfen Sie die Parameter in der URL, um den richtigen Inhalt direkt zu laden.
- Weiterleiten an die Desktop-Version `/ desktop / php / index.php` oder Mobile` mobile / html / home.html` nach URL-Parametern.

### Desktop

Die Benutzeroberfläche von Jeedom arbeitet nach dem One-Page-Prinzip. Nach dem Laden werden die verschiedenen Seiten angezeigt, indem der Inhalt eines Containers geändert wird.

Die Hauptdatei in Desktop ist `/ desktop / php / index.php`.

Jede Seite enthält mindestens zwei Parameter in der URL. Beispiel :

`https://my.dns1.jeedom.com/index.php?v = d & p = Armaturenbrett " :
- **v** : Schnittstellenversion : d für Desktop, m für Mobilgeräte.
- **p** : Seite zum Anzeigen. Hier "Dashboard".

In diesem Fall die Datei `/ desktop / php / index.php` lädt die Datei `/ desktop / php / dashboard.php` im `div_pageContainer` div. Dadurch wird auch die Datei `/ desktop / js / dashboard geladen.js` einschließlich der für die Anzeige dieser Seite spezifischen js-Funktionen (hier das Dashboard)).

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

Der `desktop / common / js / utils.js` ist daher immer vorhanden und wird einmal geladen. Es erlaubt zu :
- Menü js Ereignisse verwalten.
- Verwalten Sie URL-Parameter gemäß der angeforderten Seite.
- Laden Sie die angeforderte Seite in den div `div_pageContainer`.
- Verwalten des Öffnens / Schließens von Modalen (Dialogfenster)).
- Verwalten Sie je nach Zeit einen möglichen Themenwechsel.
- Ermöglichen Sie verschiedenen js-Dateien den Zugriff auf allgemeine Funktionen.

Also die Indexdateien.PHP und Dienstprogramme.js liefern die Grundstruktur und Funktionen der Schnittstelle.
Dann wird der Inhalt der aufgerufenen Seite von desktop / php / page geladen.PHP und Desktop / js / page.js.
Diese rein schnittstellenorientierten Inhaltsdateien können direkt in PHP oder dank js-Klassen (`/ core / js`) über Ajax-Aufrufe auf Core-Funktionen (` / core / class`-Klassen) zugreifen (`/ core / ajax`).

Die internen Funktionen des Core sind somit für den internen Betrieb (Back-End) gut getrennt, aber über die Schnittstelle zugänglich. Ebenso hat jede Seite ihren eigenen PHP- und JS-Code. Dies ermöglicht eine bessere Entwicklung und Pflege des Codes, aber auch eine Optimierung der Leistung, indem nur die erforderlichen Klassen und Funktionen geladen werden.

#### Kern v4.2
Seit Core v4.2, alle js-Funktionen aus der Datei „desktop/common/js/utils.js` sind in einem Namespace `jeedomUtils{}` isoliert.
Beispielsweise wird die Funktion „loadPage()“ zuvor im Stammfenster zu „jeedomUtils.loadPage()“.

Aus Gründen der Abwärtskompatibilität für Plugins werden alte Funktionen noch deklariert und werden in einer späteren Version veraltet sein. [Siehe die Liste hier](https://github.com/jeedom/core/blob/alpha/desktop/common/js/utils.js#L1423).

#### Kern v4.3
Fortsetzung von Version 4.2 wurden die Desktop-Frontend-Seiten isoliert, um zu vermeiden, dass Variablen und Funktionen im Root-Fenster referenziert werden. Dies schützt vor möglichen Deklarationskollisionen und erleichtert das Lesen und Verstehen des Codes sowie dessen Debugging.

Die Datei `core/js/jeedom.class.js` deklariert zwei neue Namespaces :
##### jeeFrontEnd[}

Einige globale Variablen befinden sich jetzt in diesem Namensraum :

```js
jeeFrontEnd = {
  __description: 'Globales Objekt, bei dem jede Kernseite ihre eigenen Funktionen und Variablen in ihrem Unterobjektnamen registriert.',
  jeedom_firstUse: '',
  language: '',
  userProfils: {},
  planEditOption: {state: falsch, schnappen: falsch, Gitter: falsch, GridSize: falsch, hervorheben: true},
  //Seitenverlauf laden:
  VORHERIGE SEITE: null,
  PREVIOUS_LOCATION: null,
  NO_POPSTAT: false,
  modifyWithoutSave: false,
  //@index.php
  serverDatetime: null,
  clientServerDiffDatetime: null,
  serverDatetime: null,
  serverTZoffsetMin: null,
}
```

Typisches Beispiel für desktop/js/corepage.js :

```js
"strenge Verwendung"

wenn (!jeeFrontEnd.corepage) {
	jeeFrontEnd.corepage = {
		myVar: 'oneVar',
		init: function() {
			window.jeeP = diese //root-Verknüpfung
		},
		postInit: function() {
			// Dinge tun, sobald die Seite geladen ist
		},
		myFunction: funktion(_var) {
			var myFuncContextVar = dies.meineVar + ' -> ' + _var
			console.log(myFuncContextVar)
		}
	}
}

jeeFrontEnd.corepage.init()

$(function() {
  jeeFrontEnd.corepage.postInit()
})

$('#myButton').on('click', function() {
	jeeP.myFunction('test')
})
```

> Der Namensraum der Seite wird daher bei der Rückkehr zu derselben Seite nicht neu erstellt. Außerdem ermöglicht die Variable „jeeP“ die Verwendung von „jeeFrontEnd“.corepage` mit einer kurzen Syntax entspricht es einem seitenspezifischen `self`.

##### jeephp2js[}

Wird verwendet, um Variablen von einem PHP-Skript an das js-Frontend zu übergeben. Zum Beispiel :

```php
sendVarToJS([
  'jeephp2js.myjsvar1' => init('typ', ''),
  'jeephp2js.myjsvar2' => Konfig::byKey('enableCustomCss')
]);
```

Puis

```js
$(function() {
  wenn (jeephp2js.myjsvar1 == '1') { ... }
})
```

> Der Namensraum jeephp2js{} wird beim Seitenwechsel geleert, um unerwartete Restvariablen zu vermeiden.

### Mobile

Die Desktop-Oberfläche reagiert und passt sich der Größe des Browsers an. Einige Dinge, wie das Bearbeiten eines Szenarios, wären jedoch auf einem kleinen Bildschirm kompliziert. Darüber hinaus ist es auf einem Smartphone im Freien, in 3G oder sogar 4G, wichtig, die Geschwindigkeit des Displays zu optimieren. Aus diesem Grund verfügt Jeedom über eine mobile Oberfläche, die leichter und an kleine Bildschirme angepasst ist.

Die verweisende Seite lautet `/ mobile / html / index.html`, die sich darum kümmert :
- Überprüfen Sie die Benutzerauthentifizierung.
- Erstellen Sie die HTML-Struktur (*Kopf, Körper, div_pageContainer usw*).
- Laden Sie CSS, Bibliotheken usw.
- Benutzerthema laden.
- Geben Sie einige globale PHP / JS-Variablen ein.
- Laden Sie die js-Datei `mobile / js / application.js`

Die Datei `mobile / js / application.js` enthält Funktionen, die allen Seiten gemeinsam sind.

Die aufgerufene Seite der Desktop-Oberfläche besteht aus zwei Dateien :
- `/ mobile / html / home.html` : der HTML-Code.
- `/ mobile / js / home.js` : Die für diese Seite spezifischen js-Funktionen.

Ein bemerkenswerter Unterschied bei Mobile ist das Fehlen von PHP-Seiten. Die Codegenerierung basiert daher auf den js-Klassen, die bei Ajax-Aufrufen immer Core-Funktionen aufrufen können.

### CSS-Dateien

Core CSS basiert hauptsächlich auf diesen Dateien :
- In Desktop :
	- Desktop / CSS / Boostrap.CSS : Vom CSS Bootstrap v3.3.7-Team bereinigte Version.
	- desktop / css / desktop.main.CSS : Hauptschnittstelle CSS.
	- desktop / css / coreWidgets.CSS : CSS-spezifisch für Core-Widgets.

- In Mobile :
	- mobiles / css / mobile.main.CSS : Hauptschnittstelle CSS.
	- mobiles / css / coreWidgets.CSS : CSS-spezifisch für Core-Widgets.

Themen enthalten CSS, das für jedes Thema spezifisch ist, einschließlich colours.css.

CSS-Ladereihenfolge in Desktop :
- 3rdParty CSS (CodeMirror usw.).
- Schriftarten (Roboto, Camingocode, Text-Security-Disc).
- coreWidgets.css
- Desktop.main.css
- Farben.CSS (Themenfarbvariablen).
- core2019_xx.CSS (Hauptdesign-Datei).
- Schatten.CSS (falls in der Konfiguration aktiviert).
- Benutzerdefiniert.CSS (erweiterte Anpassung CSS-Datei).


## Back-end

*In Bearbeitung*

Die Schnittstelle ist eine Sache, aber natürlich ist Ihr Jeedom immer aktiv, um Szenarien, Crones, Protokolle, Historien usw. auszuführen.

Das Back-End basiert auf denselben PHP-Klassen wie das Front-End, das in `/ core / class /` vorhanden ist. Jeder Teil von Jeedom hat insbesondere seine eigene PHP-Klasse :

- jeeObject.class.php : Gruppiert die Funktionen für Jeedom-Objekte neu.
- eqLogic.class.php : Gruppiert die Funktionen für Jeedom-Geräte.
- cmd.class.php : Gruppiert die Funktionen für Jeedom-Steuerelemente.
- cron.class.php : Gruppiert die Funktionen bezüglich der geplanten Aufgaben von Jeedom.
- Config.class.php : Gruppiert die Funktionen bezüglich der Konfigurationsparameter von Jeedom.
- Szenario.Klasse.php : Sammelt die Funktionen bezüglich der Jeedom-Szenarien.
- DB.class.php : Bringt alle Funktionen für den Zugriff auf die Jeedom-Datenbank zusammen. Alle SQL-Zugriffe, die von anderen Klassen benötigt werden, werden von dieser verwaltet.

etc.

