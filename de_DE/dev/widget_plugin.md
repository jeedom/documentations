# Plugin-Widgets verwalten

Es gibt verschiedene Möglichkeiten, benutzerdefinierte Widgets für Plugins zu erstellen :

- die erste mit der toHtml-Funktion (Instanzmethode), die von der eqLogic-Klasse erbt
- vom Vorlagensystem (nur v4)

## ToHtml-Funktion

Daraufhin muss die Funktion toHtml, nichts Besonderes, das Widget in HTML zurückgeben, Sie haben ein Beispiel [das](https://github.com/jeedom/plugin-weather/blob/beta/core/class/weather.class.php#L647)

Das Wichtigste ist vor allem die 1. Zeile :

````
$replace = $this->preToHtml($_version);
if (!is_array($replace)) {
	return $replace;
}
````

Die Funktion preToHtml gibt zurück :

- Eine Zeichenfolge, wenn das Widget zwischengespeichert ist (wenn es zwischengespeichert ist, bedeutet dies, dass seit der letzten Generation keine Änderungen vorgenommen wurden. Sie können es also genauso gut sofort zurücksenden)
- Wenn Sie eine Tabelle mit den wichtigsten ersetzen, haben Sie die Liste [Hier](https://github.com/jeedom/core/blob/alpha/core/class/eqLogic.class.php#L663)

## Das Vorlagensystem

Das Widget-Vorlagensystem im Code ist genau das gleiche wie das auf der Seite Extras -> Widget von jeedom.

Hier ist ein Beispiel :

````
public static function templateWidget(){
	$return = array('info' => array('string' => array()));
	$return['info']['string']['state'] = array(
		'template' => 'tmplmultistate',
		'test' => array(
			array('operation' => '#value# == 2','state' => '<i class="icon maison-vacuum6"></i>'),
			array('operation' => '#value# == 3','state' => '<i class="fa fa-pause"></i>'),
			array('operation' => '#value# > 3 || #value# < 2','state' => '<i class="fa fa-home"></i>')
		)
	);
	return $return;
}
````

Hier erstellen wir ein neues Widget basierend auf der Vorlage "tmplmultistate" (Sie haben die Liste der Vorlagen [Hier](https://github.com/jeedom/core/tree/alpha/core/template/dashboard) Es sind diejenigen mit tmpl im Namen) für einen Befehl vom Typ info und unter type string.

> **WICHTIG**
>
> Jede Vorlage ist für einen bestimmten Typ und Subtyp bestimmt. Sie müssen daher überprüfen, ob die Vorlage, die Sie verwenden möchten, für den Typ und den Subtyp vorhanden ist

Da es sich dann um eine Vorlage mit mehreren Status handelt, müssen Sie die Symbole entsprechend dem Status definieren. Dies erfolgt im Testteil der Tabelle.

Beispiel : Für den ersten Test sagen wir, wenn der Wert des Befehls 2 wert ist, muss das Tag ersetzt werden #\_state_# (im HTML-Code der Vorlage) von </i>

Ein anderes Beispiel, das auf einer anderen Vorlage basiert, könnte sein :

````
public static function templateWidget(){
	$return = array('info' => array('string' => array()));
	$return['info']['binary']['toto'] = array(
		'template' => 'tmplicon',
		'replace' => array(
			'#_icon_on_#' => '<i class=\'icon_green icon jeedom-porte-ferme\'></i>',
			'#_icon_off_#' => '<i class=\'icon_red icon jeedom-porte-ouverte\'></i>'
			)
	);
	return $return;
}
````

Hier erstelle ich ein Toto-Widget basierend auf der Vorlage "tmplicon" im Infotyp und im binären Subtyp. Wenn es 1 ist, wird das Symbol sein<i class='icon_green icon jeedom-porte-ferme'></i> und wenn es 0 ist, wird es sein </i>

>**TIPPS**
>
> Kleiner Tipp, Sie können anstelle eines Symbols ein Bild-Tag einfügen (achten Sie auf den Pfad)

Dann verwenden Sie Ihr Widget :

````
$cmd->setTemplate('dashboard','neato::state');
$cmd->setTemplate('mobile','neato::state');
````

Es ist wie ein normales Widget, mit Ausnahme des Namens des Widgets in der Form id_plugin::Widget Name. Für das zweite Beispiel ist es id_plugin::toto


