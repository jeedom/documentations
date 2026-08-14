# Entwicklung des Kerns

## Baumstruktur

Der Code ist auf verschiedene Verzeichnisse im Stammverzeichnis von Jeedom verteilt *(`/var/www/html` Standard)*:

- **3rdparty**: Ordner mit den von Jeedom verwendeten externen Bibliotheken *(jQuery, CodeMirror usw.)*.
- **Backup**: Ordner mit den Jeedom-Sicherungen.
- **core**: Ordner mit den internen Funktionen des Core:
	- **Ajax**: PHP-Dateien, die als Schnittstelle zwischen den JavaScript- und den PHP-Klassen dienen.
	- **API**: PHP-Dateien der APIs.
	- **class**: PHP-Klassendateien *(eqLogic, cmd, jeeObject, history, cron usw.)*.
	- **com**: PHP-Klassendateien für die Kommunikation *(HTTP, Shell)*.
	- **config**: PHP-Konfigurationsdateien des Core und *default.config.ini* mit den Standardkonfigurationsparametern. Versionsdatei für die Core-Version.
	- **CSS**: Im Core verfügbare Symbole und deren CSS.
	- **i18n**: JSON-Dateien mit den übersetzten Zeichenfolgen.
	- **img**: Bilder (Logos, Hintergründe usw.) des Core.
	- **js**: JS-Klassendateien, die insbesondere von den Jeedom-Seiten aufgerufen werden.
	- **php**: Für den Core erforderliche PHP-Dateien (ohne Klassen).
	- **Repo**: Marktplatzspezifische PHP-Dateien, Samba usw.
	- **Vorlage**: HTML-Dateien *(Dashboard und Mobile)* zur Anzeige von eqLogics (Kacheln), Befehlen (Widgets) und Szenarien.
	- **Themes**: CSS-Dateien der drei Core-Themes (Dark, Light, Legacy) für das Dashboard und die mobile Ansicht.
- **data**: Ordner mit den Benutzerdaten (Berichte, Ansichten, CSS-/JS-Dateien für die erweiterte Anpassung, 3D-Design usw.).
- **Desktop**: Ordner mit allen auf dem Desktop angezeigten Seiten (der Benutzeroberfläche) und deren Funktionen.
	- **common**: JS-/PHP-Dateien, die auf mehreren Seiten verwendet werden. Enthält Funktionen, die von mehreren Seiten aus aufgerufen werden können, insbesondere die Datei *utils.js*, die auf allen Desktop-Seiten vorhanden ist.
	- **CSS**: CSS-Dateien speziell für die Desktop-Anzeige.
	- **img**: Bilder speziell für die Desktop-Ansicht.
	- **js**: JS-Dateien für die einzelnen Seiten *(Verwaltung, Dashboard, Szenario usw.)*.
	- **Modal**: PHP-Dateien für Modals, einschließlich PHP-/HTML-Code und JavaScript-Code.
	- **php**: PHP-Dateien für die einzelnen Seiten *(Verwaltung, Dashboard, Szenario usw.)*.
- **docs**: Dokumentation.
- **Installation**: Installationsdateien für Jeedom.
- **log**: Ordner, der alle Protokolle (http.error, update usw.) sowie die Protokolle der Szenarien enthält (Unterordner „scenarioLog“, benannt nach der ID).
- **Mobil**: Übersicht über alle auf Mobilgeräten angezeigten Seiten (die Webapp-Oberfläche) und deren Funktionen.
	- **CSS**: CSS-Dateien speziell für die mobile Darstellung.
	- **html**: HTML-Dateien für die einzelnen Seiten *(Startseite, Ausstattung, Zeitleiste usw.)*.
	- **js**: JS-Dateien für die einzelnen Seiten *(Startseite, Ausstattung, Zeitleiste usw.)*.
	- **Modal**: HTML-Dateien für die Modal-Fenster auf Mobilgeräten.
- **Plugins**: Ordner mit allen installierten Plugins.
- **Skript**: Bereitstellungsskript, Zertifikate.
- **Support**: Ordner, der bei Supportanfragen verwendet wird.
- **vendor**: Ordner mit PHP-Bibliotheken von Drittanbietern.

## Frontend

Die Benutzeroberfläche von Jeedom funktioniert wie eine Website und basiert auf PHP in Verbindung mit SQL sowie JavaScript und CSS.

Zunächst lädt der Browser die Datei `/index.php` :
- Überprüfung der Jeedom-Installation, Weiterleitung zu `install/setup.php` falls erforderlich.
- Überprüfung der Herkunft (Desktop oder Mobilgerät).
- Laden der erforderlichen Dateien und Klassen mit `/core/php/core.inc.php`.
- Überprüfung der Benutzerauthentifizierung.
- Überprüfung der Parameter in der URL, um direkt den richtigen Inhalt zu laden.
- Weiterleitung zur Desktop-Version `/desktop/php/index.php` oder Mobil `mobile/html/home.html` abhängig von den Parametern der URL.

### Desktop

Die Benutzeroberfläche von Jeedom basiert auf dem One-Page-Prinzip. Nach dem Laden werden die verschiedenen Seiten durch Ändern des Inhalts eines Containers angezeigt.

Die Hauptdatei auf dem Desktop ist `/desktop/php/index.php`.

Jede Seite enthält mindestens zwei Parameter in der URL. Beispiel:

`https://my.dns1.jeedom.com/index.php?v=d&p=dashboard` :
- **v**: Version der Benutzeroberfläche: `d` für den Desktop, `m` für Mobilgeräte.
- **p**: Anzuzeigende Seite. Hier, `dashboard`.

In diesem Fall die Datei `/desktop/php/index.php` Die Datei wird geladen `/desktop/php/dashboard.php` in der div `div_pageContainer`. Dieser lädt außerdem die Datei `/desktop/js/dashboard.js` einschließlich der JavaScript-Funktionen, die für die Anzeige dieser Seite (hier: das Dashboard) erforderlich sind.

Die Datei `/desktop/php/index.php` kümmert sich außerdem um:
- *Rescue*-Modus prüfen
- Die Authentifizierung des Benutzers überprüfen.
- Überprüfen Sie gegebenenfalls, welche Seite je nach Konfiguration geladen werden soll (Standardseite des Benutzers).
- Erstellen Sie die HTML-Struktur *(head, body, div_pageContainer usw.)*.
- CSS-Dateien, Bibliotheken usw. laden
- Benutzer-Design laden.
- Menüleiste erstellen.
- Bestimmte globale PHP-/JS-Variablen setzen.
- JS-Datei laden `desktop/common/js/utils.js`

Die Datei `desktop/common/js/utils.js` ist also immer vorhanden und wird einmal geladen. Es ermöglicht:
- Verwaltung der JavaScript-Ereignisse des Menüs.
- Die URL-Parameter entsprechend der angeforderten Seite verwalten.
- Die angeforderte Seite in das div laden `div_pageContainer`.
- Das Öffnen und Schließen von Dialogfenstern verwalten.
- Eine eventuelle Themenumstellung je nach Uhrzeit verwalten.
- Den verschiedenen JS-Dateien den Zugriff auf gemeinsame Funktionen ermöglichen.

So stellen die Dateien „index.php“ und „utils.js“ die Struktur und die Grundfunktionen der Benutzeroberfläche bereit.
Anschließend wird der Inhalt der aufgerufenen Seite aus den Dateien „desktop/php/page.php“ und „desktop/js/page.js“ geladen.
Diese rein auf die Benutzeroberfläche ausgerichteten Inhaltsdateien können auf die Funktionen des Core zugreifen (die Klassen `/core/class`) direkt in PHP oder in JavaScript mithilfe von JavaScript-Klassen (`/core/js`) über AJAX-Aufrufe (`/core/ajax`).

Die internen Funktionen des Core sind somit für den internen Betrieb (Backend) klar voneinander getrennt, sind aber über die Benutzeroberfläche zugänglich. Ebenso verfügt jede Seite über ihren eigenen PHP- und JS-Code. Dies ermöglicht eine bessere Weiterentwicklung und Wartung des Codes sowie eine Leistungsoptimierung, da nur die erforderlichen Klassen und Funktionen geladen werden.

#### Core v4.2
Seit Core v4.2 werden alle JavaScript-Funktionen aus der Datei `desktop/common/js/utils.js` sind in einem Namespace isoliert `jeedomUtils{}`.
Beispielsweise die zuvor im Root-Fenster angezeigte Funktion `loadPage()` wird `jeedomUtils.loadPage()`.

Aus Gründen der Abwärtskompatibilität für Plugins werden die alten Funktionen weiterhin deklariert und werden in einer späteren Version als veraltet markiert. [Liste hier anzeigen](https://github.com/jeedom/core/blob/alpha/desktop/common/js/utils.js#L1423).

#### Core v4.3
In Anlehnung an Version 4.2 wurden die Frontend-Seiten für den Desktop isoliert, um zu vermeiden, dass Variablen und Funktionen im Root-Fenster referenziert werden. Dies schützt vor möglichen Deklarationskonflikten und erleichtert das Lesen und Verstehen des Codes sowie dessen Debugging.

Die Datei `core/js/jeedom.class.js`definiert zwei neue Namespaces:
##### jeeFrontEnd

Einige globale Variablen befinden sich nun in diesem Namespace:

```js
jeeFrontEnd = {
  __description: 'Global object where each Core page register its own functions and variable in its sub-object name.',
  jeedom_firstUse: '',
  language: '',
  userProfils: {},
  planEditOption: {state: false, snap: false, grid: false, gridSize: false, highlight: true},
  //loadPage history:
  PREVIOUS_PAGE: null,
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

Typisches Beispiel für `desktop/js/corepage.js` :

```js
"use strict"

if (!jeeFrontEnd.corepage) {
	jeeFrontEnd.corepage = {
		myVar: 'oneVar',
		init: function() {
			window.jeeP = this //root shortcut
		},
		postInit: function() {
			//Do stuff once page loaded
		},
		myFunction: function(_var) {
			var myFuncContextVar = this.myVar + ' -> ' + _var
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

> Der Namespace der Seite wird daher beim erneuten Aufrufen derselben Seite nicht neu erstellt. Außerdem wird die Variable `jeeP` ermöglicht die Nutzung `jeeFrontEnd.corepage` mit einer kurzen Syntax, sie entspricht einem `self` spezifisch für diese Seite.

##### jeephp2js

Wird verwendet, um Variablen von einem PHP-Skript an das JavaScript-Frontend zu übergeben. Beispiel:

```php
sendVarToJS([
  'jeephp2js.myjsvar1' => init('type', ''),
  'jeephp2js.myjsvar2' => config::byKey('enableCustomCss')
]);
```

Dann

```js
$(function() {
  if (jeephp2js.myjsvar1 == '1') { ... }
})
```

> Der Namespace jeephp2js{} wird beim Seitenwechsel geleert, um unerwartete Restvariablen zu vermeiden.

### Mobil

Die Desktop-Oberfläche ist responsiv und passt sich der Größe des Browsers an. Allerdings wären bestimmte Vorgänge, wie beispielsweise das Bearbeiten eines Szenarios, auf einem kleinen Bildschirm schwierig. Außerdem ist es wichtig, die Ladegeschwindigkeit zu optimieren, wenn man unterwegs mit einem Smartphone über 3G oder sogar 4G surft. Aus diesem Grund verfügt Jeedom über eine mobile Oberfläche, die schlanker und für kleine Bildschirme optimiert ist.

Die Referenzseite lautet `/mobile/html/index.html`, das folgende Aufgaben übernimmt:
- Die Authentifizierung des Benutzers überprüfen.
- Erstellen Sie die HTML-Struktur *(head, body, div_pageContainer usw.)*.
- CSS-Dateien, Bibliotheken usw. laden
- Benutzer-Design laden.
- Bestimmte globale PHP-/JS-Variablen setzen.
- JS-Datei laden `mobile/js/application.js`

Die Datei `mobile/js/application.js` enthält die Funktionen, die auf allen Seiten gemeinsam sind.

Wie bei der Desktop-Oberfläche besteht die aufgerufene Seite aus zwei Dateien:
- `/mobile/html/home.html` : Der HTML-Code.
- `/mobile/js/home.js` : Die für diese Seite spezifischen JavaScript-Funktionen.

Ein wesentlicher Unterschied bei der mobilen Version ist das Fehlen von PHP-Seiten. Die Codegenerierung basiert daher auf JavaScript-Klassen, die weiterhin über AJAX-Aufrufe Funktionen des Core aufrufen können.

### CSS-Dateien

Die CSS-Dateien des Core basieren hauptsächlich auf diesen Dateien:
- Auf dem Desktop:
	- `desktop/css/boostrap.css` : Vom CSS-Bootstrap-v3.3.7-Team bereinigte Version.
	- `desktop/css/desktop.main.css` : Haupt-CSS der Benutzeroberfläche.
	- `desktop/css/coreWidgets.css` : Core-spezifische CSS-Dateien für Widgets.

- Auf dem Handy:
	- `mobile/css/mobile.main.css` : Haupt-CSS der Benutzeroberfläche.
	- `mobile/css/coreWidgets.css` : Core-spezifische CSS-Dateien für Widgets.

Die Themes enthalten themenspezifische CSS-Dateien, insbesondere die „colors.css“-Datei.

Reihenfolge beim Laden der CSS-Dateien auf dem Desktop:
- CSS von Drittanbietern (CodeMirror usw.).
- Schriftarten (Roboto, Camingocode, Text-Security-Disc).
- coreWidgets.css
- desktop.main.css
- colors.css (Farbvariablen des Themes).
- core2019_xx.css (Hauptdatei des Themes).
- shadows.css (sofern in den Einstellungen aktiviert).
- custom.css (CSS-Datei für erweiterte Anpassungen).


## Backend

*in Arbeit*

Die Benutzeroberfläche ist eine Sache, aber natürlich ist Ihr Jeedom weiterhin aktiv, um Szenarien, Cron-Jobs, Protokolle, Verlaufsdaten usw. auszuführen.

Das Backend basiert auf denselben PHP-Klassen wie das Frontend, die sich in `/core/class/`. Jeder Teil von Jeedom verfügt über eine eigene PHP-Klasse, darunter insbesondere:

- `jeeObject.class.php` : Fasst die Funktionen zusammen, die sich auf Jeedom-Objekte beziehen.
- `eqLogic.class.php` : Fasst die Funktionen zusammen, die die Jeedom-Geräte betreffen.
- `cmd.class.php` : Fasst die Funktionen zur Steuerung von Jeedom zusammen.
- `cron.class.php` : Fasst die Funktionen zu den geplanten Aufgaben von Jeedom zusammen.
- `config.class.php` : Hier sind die Funktionen zusammengefasst, die sich auf die Konfigurationseinstellungen von Jeedom beziehen.
- `scenario.class.php` : Fasst die Funktionen zu den Jeedom-Szenarien zusammen.
- `DB.class.php` : Fasst alle Funktionen für den Zugriff auf die Jeedom-Datenbank zusammen. Alle von den anderen Klassen benötigten SQL-Zugriffe werden von dieser Klasse verwaltet.

usw.
