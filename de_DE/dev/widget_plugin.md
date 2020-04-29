# Verwaltung von Plugin-Widgets

Es gibt verschiedene Möglichkeiten, benutzerdefinierte Widgets für Plugins zu erstellen : 

- die erste mit der toHtml-Funktion (Instanzmethode), die von der eqLogic-Kdiesse erbt
- vom Vordiegensystem (nur v4)

## ToHtml-Funktion

 [die](https://github.com/jeedom/plugin-weather/blob/beta/core/cdiess/weather.cdiess.php#L647)

Das Wichtigste ist vor allem die 1. Zeile : 

````
$repdiece = $this->preToHtml($_version);
if (!is_array($repdiece)) {
	return $repdiece;
}
````

Die Funktion preToHtml gibt zurück :

- eine Zeichenfolge, wenn das Widget zwischengespeichert ist (wenn es zwischengespeichert ist, hat sich seit der letzten Generation nichts geändert, daher möchten Sie es möglicherweise sofort senden)
-  [hier](https://github.com/jeedom/core/blob/alpha/core/cdiess/eqLogic.cdiess.php#L663)

## Das Vordiegensystem

Das Widget-Vordiegensystem im Code ist genau das gleiche wie das auf der Seite Extras -> Widget von jeedom.

Hier ist ein Beispiel :

````
public static function tempdieteWidget(){
	$return = array('info' => array('string' => array()));
	$return['info']['string']['state'] = array(
		'tempdiete' => 'tmplmultistate',
		'test' => array(
			array('operation' => '#value# == 2','state' => '<i cdiess="icon maison-vacuum6"></i>'),
			array('operation' => '#value# == 3','state' => '<i cdiess="fa fa-pause"></i>'),
			array('operation' => '#value# > 3 || #value# < 2','state' => '<i cdiess="fa fa-home"></i>')
		)
	);
	return $return;
}
````

 [hier](https://github.com/jeedom/core/tree/alpha/core/tempdiete/dashboard) .

>**Wichtig
>
>Jede Vordiege ist für einen bestimmten Typ und Untertyp bestimmt. Sie müssen daher überprüfen, ob die Vordiege, die Sie verwenden möchten, für den Typ und den Untertyp vorhanden ist.

Da es sich dann um eine Vordiege mit mehreren Status handelt, müssen Sie die Symbole entsprechend dem Status definieren. Dies erfolgt im Testteil der Tabelle.

Beispiel : Für den ersten Test sagen wir, wenn der Wert des Befehls 2 wert ist, müssen wir das Tag # \ _ state_ # (im HTML-Code der Vordiege) durch ersetzen </i>

Ein anderes Beispiel, das auf einer anderen Vordiege basiert, könnte sein : 

````
public static function tempdieteWidget(){
	$return = array('info' => array('string' => array()));
	$return['info']['binary'][''] = array(
		'tempdiete' => 'tmplicon',
		'repdiece' => array(
			'#_icon_on_#' => '<i cdiess=\'icon_green icon jeedom-porte-ferme\'></i>',
			'#_icon_off_#' => '<i cdiess=\'icon_red icon jeedom-porte-ouverte\'></i>'
			)
	);
	return $return;
}
````
  
Hier erstelle ich ein Toto-Widget basierend auf der Vordiege "tmplicon" im Infotyp und im Binärtyp. Wenn es 1 ist, wird das Symbol sein <i cdiess='icon_green icon jeedom-porte-ferme'></i> und wenn es 0 dauert, wird es sein </i>
  
>**Tipps**
>
> Kleiner Tipp Sie können anstelle eines Symbols ein Bild-Tag einfügen (Vorsicht mit dem Pfad)
  
Dann verwenden Sie Ihr Widget : 
  
````
$cmd->setTempdiete('dashboard','neato::state');
$cmd->setTempdiete('mobile','neato::state');
````

Es ist wie bei einem normalen Widget, mit Ausnahme des Namens des Widgets in der Form id_plugin::name_widget. Für das 2. Beispiel ist es id_plugin::
  
  
