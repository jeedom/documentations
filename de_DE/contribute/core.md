

# Tragen Sie zur Core-Entwicklung bei

Du möchtest zur Entwicklung des Core of Jeedom beitragen ?

- Sie können PR machen (*Pull-Requests*) auf der *Repository* von Kern.
- Wenn Sie Ideen für Entwicklungen haben und sich langfristig beteiligen möchten, zögern Sie nicht [wenden Sie sich an das Projektteam](mailto:contact@jeedom.com).

Hier sind die Grundlagen, die Sie wissen müssen :

## Github-Zweige

Um an der Entwicklung von Jeedom teilnehmen zu können, müssen Sie über ein Konto verfügen [GitHub](https://github.com/).

Der Kerncode ist Open-Source und verfügbar [hier](https://github.com/jeedom/core).

- **Alpha** :  V4-Alpha-Zweig. Hauptsächlich für Entwickler der nächsten Version von Jeedom gedacht.
- **Beta** : Zweig der Beta-Version von V4. Hauptsächlich für Betatester gedacht, um zu testen, bevor sie zu Stable wechseln.
- **V4-stabil** : Stabiler Zweig von V4.
- **Veröffentlichung** : Release Candidate-Zweig von V3. Nur für Bugfixes.
- **Meister** : V3 Stable-Release-Zweig.

Aktualisierungen werden an diesen Zweigen gemäß der Konfiguration von Jeedom vorgenommen **Einstellungen → System → Konfiguration / Updates / Markt**.

Die PRs (*Pull-Requests*) muss immer auf dem Alpha-Zweig erfolgen.

Ebenso, um an Diskussionen teilzunehmen [Gemeinschaft](https://community.jeedom.com/), als Entwickler registrieren : [Jeedom-Entwickler](https://www.jeedom.com/fr/dev.html).

## Entwicklung

Um bei der Core-Entwicklung zu helfen, müssen Sie eine oder mehrere der folgenden Sprachen beherrschen:

- PHP : Entwicklung von PHP-Klassen, Ajax-Aufrufe vom Frontend.
- Javascript : Entwicklung von js-Klassen und Front-End.
- CSS : Schnittstellenentwicklung.

Kenntnisse im Linux-Umfeld sind ebenfalls wünschenswert.

## Kernbaum

Der Code wird in verschiedenen Verzeichnissen im Stammverzeichnis von Jeedom verteilt (standardmäßig : var/www/html) :

- Dritter : Ordner mit den von Jeedom verwendeten externen Bibliotheken (jQuery, CodeMirror usw.)).
- Sicherung : Jeedom-Backup-Ordner.
- **Ader** : Ordner mit Core-internen Funktionen:
	- **ajax** : Schnittstellen-PHP-Dateien zwischen js-Klassen und PHP-Klassen.
	- API : API-PHP-Dateien.
	- **Klasse** : Php-Klassendateien (*eqLogic, cmd, jeeObject, Verlauf, Cron usw.*).
	- com : Kommunikation von PHP-Klassendateien (*http, Schale*).
	- Konfig : Core-Konfigurations-PHP-Dateien und *default.config.ini* einschließlich Standardkonfigurationseinstellungen. Versionsdatei für die Core-Version.
	- css : Mit dem Core verfügbare Symbole und deren CSS.
	- i18n : Json-Dateien inklusive übersetzter Zeichenketten.
	- Bild : Bilder (Logos, Hintergründe usw.) von Core.
	- **js** : Klasse js-Dateien, die insbesondere von Jeedom-Seiten aufgerufen werden.
	- php : PHP-Dateien, die für den Kern erforderlich sind (ausgenommen die Klassen).
	- Repos : PHP-Dateien, die für Market, Samba usw. spezifisch sind.
	- **Schablone** : Html-Dateien (*Dashboard und Mobil*) zum Anzeigen von eqLogics (Tile), Befehlen (Widgets) und Szenarien.
	- **Themen** : CSS-Dateien der drei Core-Designs (Dark, Light, Legacy) für Dashboard und Mobile.
- Daten : Ordner mit Benutzerdaten (Berichte, Ansichten, erweiterte Anpassung css/js, 3D-Design usw.)).
- **Schreibtisch** : Ordner mit allen im Desktop angezeigten Seiten (der Oberfläche) und deren Funktionen.
	- gemeinsames : Js/php-Dateien, die allen oder mehreren Seiten gemeinsam sind. Gruppiert Funktionen, die von mehreren Seiten aufgerufen werden können, insbesondere die *utils.js*, auf allen Seiten in Desktop vorhanden.
	- css : Css-Dateien, die für die Desktop-Anzeige spezifisch sind.
	- Bild : Bilder, die für die Desktop-Anzeige spezifisch sind.
	- js : Js-Dateien, die jeder Seite entsprechen (*Administration, Dashboard, Szenarien etc.*).
	- modal : Modale PHP-Dateien, einschließlich PHP/HTML-Code und js-Code.
	- php : Php-Dateien, die jeder Seite entsprechen (*Administration, Dashboard, Szenarien etc.*).
- Unterlagen : Dokumentation.
- Installieren : Jeedom-Installationsdateien.
- Protokoll : Ordner mit allen Protokollen (http.error, update, etc) und die der Szenarien (Unterordner SzenarioLog, benannt nach id).
- **Handy, Mobiltelefon** : Datei mit allen angezeigten Seiten (der Webapp-Oberfläche) auf Mobilgeräten und deren Funktionen.
	- css : Css-Dateien, die für die mobile Ansicht spezifisch sind.
	- html : HTML-Dateien, die jeder Seite entsprechen (*Zuhause, Ausrüstung, Zeitplan usw.*).
	- js : Js-Dateien, die jeder Seite entsprechen (*Zuhause, Ausrüstung, Zeitplan usw.*).
	- modal : HTML-Dateien, die Modalen in Mobile entsprechen.
- Plugins : Ordner mit allen installierten Plugins.
- Skript : Bereitstellungsskript, Zertifikate.
- Unterstützung : Ordner, der im Falle einer Supportanfrage verwendet wird.
- Verkäufer : Ordner mit PHP-Bibliotheken von Drittanbietern.


## Front-end

Die Jeedom-Schnittstelle funktioniert wie eine Website, von PHP mit SQL und js / CSS.

Zunächst lädt der Browser die Datei `/index.php` :
- Überprüfung der Jeedom-Installation, Verweis auf `install/setup.php` falls nötig.
- Desktop- oder mobile Herkunftsprüfung.
- Laden der notwendigen Dateien und Klassen mit `/core/php/core.inc.php`.
- Überprüfung der Benutzerauthentifizierung.
- Überprüfung von Parametern in der URL, um direkt den richtigen Inhalt zu laden.
- Umleitung zur Desktop-Version `/desktop/php/index.php` oder Mobile`mobile/html/home.html` abhängig von URL-Parametern.

### Desktop

Die Jeedom-Schnittstelle funktioniert nach dem One-Page-Prinzip. Nach dem Laden werden die verschiedenen Seiten angezeigt, indem der Inhalt eines Containers geändert wird.

Die Hauptdatei in Desktop ist `/desktop/php/index.php`.

Jede Seite hat mindestens zwei Parameter in der URL. Beispiel :

`https://my.dns1.jeedom.com/index.php?v=d&p=Dashboard` :
- **v** : Schnittstellenversion. d für Desktop, m für Handy.
- **p** : Seite anzuzeigen. Hier „Dashboard“.

In diesem Fall ist die Datei `/desktop/php/index.php` lädt die Datei `/desktop/php/dashboard.php` im div `div_pageContainer`. Dadurch wird auch die Datei `/desktop/js/dashboard.js‘ einschließlich der für die Anzeige dieser Seite spezifischen js-Funktionen (hier das Dashboard).

Die Datei `/desktop/php/index.php` kümmert sich auch darum :
- Prüfmodus *Rettung*
- Überprüfen Sie die Benutzerauthentifizierung.
- Überprüfen Sie ggf. die Seite, die gemäß der Konfiguration geladen werden soll (Standardseite des Benutzers).
- Erstellen Sie die HTML-Struktur (*Kopf, Körper, div_pageContainer usw*).
- Laden Sie CSS, Bibliotheken usw.
- Benutzerthema laden.
- Erstellen Sie die Menüleiste.
- Füllen Sie einige globale PHP/JS-Variablen aus.
- Laden Sie die js-Datei `desktop/common/js/utils.js`

Die Datei `desktop/common/js/utils.js` ist also immer vorhanden und wird einmal geladen. Es erlaubt :
- Menü js-Ereignisse verwalten.
- URL-Parameter entsprechend der angeforderten Seite verwalten.
- Laden Sie die angeforderte Seite in das div `div_pageContainer`.
- Öffnen/Schließen von Mods verwalten (Dialogfenster).
- Verwalten Sie einen möglichen Themenwechsel in Abhängigkeit von der Zeit.
- Zulassen, dass verschiedene js-Dateien auf allgemeine Funktionen zugreifen.

Also der Index.php und die utils.js stellen die grundlegende Struktur und Funktionen der Schnittstelle bereit.
Dann wird der aufgerufene Seiteninhalt von desktop/php/page geladen.php und desktop/js/page.js.
Diese rein schnittstellenorientierten Inhaltsdateien können auf Core-Funktionen (`/core/class`-Klassen) direkt in PHP oder in js unter Verwendung von js-Klassen (`/core/js`) über Ajax-Aufrufe (`/core/ajax`).

Die internen Funktionen des Core sind somit für den internen Betrieb (Back-End) gut getrennt, aber über die Schnittstelle zugänglich. Ebenso hat jede Seite ihren eigenen PHP- und JS-Code. Dies ermöglicht eine bessere Weiterentwicklung und Wartung des Codes, aber auch eine Optimierung der Leistung, indem nur die erforderlichen Klassen und Funktionen geladen werden.

#### Kern v4.2
Seit Core v4.2, alle js-Funktionen aus der Datei „desktop/common/js/utils.js` sind in einem Namespace `jeedomUtils{}` isoliert.
Beispielsweise wird die Funktion „loadPage()“ zuvor im Stammfenster zu „jeedomUtils.loadPage()“.

Aus Gründen der Abwärtskompatibilität für Plugins werden alte Funktionen noch deklariert und werden in einer späteren Version veraltet sein. [Siehe die Liste hier](https://github.com/jeedom/core/blob/alpha/desktop/common/js/utils.js#L1423).

#### Kern v4.3
Fortsetzung von Version 4.2 wurden die Desktop-Frontend-Seiten isoliert, um zu vermeiden, dass Variablen und Funktionen im Root-Fenster referenziert werden. Dies sichert mögliche Deklarationskollisionen ab, erleichtert das Lesen und Verstehen des Codes sowie dessen Debugging.

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

Wird verwendet, um Variablen von einem PHP-Skript an das js-Frontend zu übergeben. Zum Beispiel:

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

Die Desktop-Oberfläche ist responsiv und passt sich der Größe des Browsers an. Einige Dinge, wie z. B. das Bearbeiten eines Szenarios, wären jedoch auf einem kleinen Bildschirm kompliziert. Darüber hinaus ist es auf einem Smartphone im Freien, in 3G oder sogar 4G, wichtig, die Geschwindigkeit der Anzeige zu optimieren. Aus diesem Grund hat Jeedom eine mobile Benutzeroberfläche, die leichter und an kleine Bildschirme angepasst ist.

Die verweisende Seite ist `/mobile/html/index.html`, das sich darum kümmert :
- Überprüfen Sie die Benutzerauthentifizierung.
- Erstellen Sie die HTML-Struktur (*Kopf, Körper, div_pageContainer usw*).
- Laden Sie CSS, Bibliotheken usw.
- Benutzerthema laden.
- Füllen Sie einige globale PHP/JS-Variablen aus.
- Laden Sie die js-Datei `mobile/js/application.js`

Die Datei `mobile/js/application.js` enthält Funktionen, die allen Seiten gemeinsam sind.

Wie bei der Desktop-Oberfläche besteht die aufgerufene Seite aus zwei Dateien :
- `/mobile/html/home.html` : der HTML-Code.
- `/mobile/js/home.js` : die für diese Seite spezifischen js-Funktionen.

Ein wahrnehmbarer Unterschied in Mobile ist das Fehlen von PHP-Seiten. Die Codegenerierung setzt daher auf js-Klassen, die Core-Funktionen nach wie vor mit Ajax-Aufrufen aufrufen können.

### CSS-Dateien

Core CSS stützt sich hauptsächlich auf diese Dateien:
- Im Desktop :
	- desktop/css/boostrap.css : Vom Team bereinigte Version von CSS Bootstrap v3.3.7.
	- desktop/css/desktop.main.css : Hauptschnittstelle CSS.
	- desktop/css/coreWidgets.css : CSS-spezifisch für Core-Widgets.

- Handy, Mobiltelefon :
	- mobiles/css/mobile.main.css : Hauptschnittstelle CSS.
	- mobiles/css/coreWidgets.css : CSS-spezifisch für Core-Widgets.

Themen enthalten themenspezifisches CSS, einschließlich colors.css.

Desktop-CSS-Ladereihenfolge :
- CSS von Drittanbietern (CodeMirror usw.).).
- Schriftarten (roboto, camingocode, text-security-disc).
- coreWidgets.css
- Schreibtisch.main.css
- Farben.css (Designfarbvariablen).
- core2019_xx.css (Theme-Hauptdatei)).
- Schatten.css (falls in configuration).
- Brauch.css (erweiterte Anpassungs-CSS-Datei).


## Back-end

*Im Gange*

Das Interface ist das eine, aber natürlich ist Ihr Jeedom immer aktiv, um Szenarien, Crons, Logs, Historien usw. auszuführen.

Das Back-End stützt sich auf die gleichen PHP-Klassen wie das Front-End, vorhanden in `/core/class/`. Jeder Teil von Jeedom hat insbesondere seine eigene PHP-Klasse :

- jeeObject.class.php : Gruppiert die Funktionen, die Jeedom-Objekte betreffen.
- eqLogic.class.php : Kombiniert die Funktionen bezüglich Jeedom-Ausrüstung.
- cmd.class.php : Gruppiert die Funktionen bezüglich Jeedom-Befehlen.
- cron.class.php : Gruppiert die Funktionen bezüglich der geplanten Aufgaben von Jeedom.
- Konfig.class.php : Gruppiert die Funktionen bezüglich der Konfigurationsparameter von Jeedom.
- Szenario.Klasse.php : Gruppiert die Funktionen bezüglich Jeedom-Szenarien.
- DB.Klasse.php : Beinhaltet alle Jeedom-Datenbankzugriffsfunktionen. Alle SQL-Zugriffe, die von anderen Klassen benötigt werden, werden von dieser behandelt.

etc.

