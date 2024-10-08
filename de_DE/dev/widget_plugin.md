# Verwaltung von Plugin-Widgets

Es gibt verschiedene Möglichkeiten, benutzerdefinierte Widgets für Plugins zu erstellen :

- die erste mit der toHtml-Funktion (Instanzmethode), die von der eqLogic-Klasse erbt
- vom Vorlagensystem (nur v4)

## ToHtml-Funktion

Daraufhin muss die Funktion toHtml, nichts Besonderes, das Widget in HTML zurückgeben, Sie haben ein Beispiel [die](https://github.com/jeedom/plugin-weather/blob/beta/core/class/weather.class.php#L647)

Das Wichtigste ist vor allem die 1. Zeile :

````php
$replace = $this->preToHtml($_version);;
Eibe (!is_array ($ replace)) {
	return $ replace;
}
````

La fonction preToHtml renvoi :

- une string si le widget est en cache (si il est en cache, c'est qu'il n'y a pas eu de changements depuis la dernière génération donc autant le renvoyer tout de suite)
- un tableau avec les replaces principaux, vous avez la liste [hier](https://github.com/jeedom/core/blob/alpha/core/class/eqLogic.class.php#L663)

## Le système de template

Le système de template de widget dans le code est en fait exactement le même que celui sur la page Outils -> Widget de jeedom.

Vohier un exemple :

````php
öffentliche statische Funktion templateWidget(){
	$return = array('info' => array('string' => array()));;
	$return['info']['string']['state'] = array(
		'template' => 'tmplmultistate',
		'test' => array(
			array('operation' => '#value# == 2','state_light' => '<i class="icon maison-vacuum6"></i>','state_dark' => '<i class="icon maison-vacuum6"></i>'),
			array('operation' => '#value# == 3','state_light' => '<i class="fa fa-pause"></i>','state_dark' => '<i class="fa fa-pause"></i>'),
			array('operation' => '#value# > 3 || #value# < 2','state_light' => '<i class="fa fa-home"></i>','state_dark' => '<i class="fa fa-home"></i>')
		)
	);;
	return $ return;
}
````

Hier erstellen wir ein neues Widget basierend auf der Vorlage "tmplmultistate" (Sie haben die Liste der Vorlagen [hier](https://github.com/jeedom/core/tree/alpha/core/template/dashboard) Es sind diejenigen mit tmpl im Namen), für einen Befehl vom Typ info und unter Zeichenfolgentyp.

> **Wichtig**
>
> Jede Vorlage ist für einen bestimmten Typ und Subtyp bestimmt. Sie müssen daher überprüfen, ob die Vorlage, die Sie verwenden möchten, für den Typ und den Subtyp vorhanden ist

Da es sich dann um eine Vorlage mit mehreren Status handelt, müssen Sie die Symbole entsprechend dem Status definieren. Dies erfolgt im Testteil der Tabelle.

Beispiel : Für den ersten Test sagen wir, wenn der Wert des Befehls 2 wert ist, muss das Tag ersetzt werden #\_state_# (im HTML-Code der Vorlage) von </i>

Ein anderes Beispiel, das auf einer anderen Vorlage basiert, könnte sein :

````php
öffentliche statische Funktion templateWidget(){
	$return = array('info' => array('string' => array()));;
	$return['info']['binary']['toto'] = array(
		'template '=>' tmplicon',
		'Ersetzen Sie '=> Array(
			'#_icon_on_#' => '<i class=\'icon_green icon jeedom-porte-ferme\'></i>',
			'#_icon_off_#' => '<i class=\'icon_red icon jeedom-porte-ouverte\'></i>'
			)
	);;
	return $ return;
}
````

Ici, je crée un widget toto basé sur le template "tmplicon" en type info et sous-type binaire. Quand il vaut 1 alors l'icône sera <i class='icon_green icon jeedom-porte-ferme'></i> et quand il vaut 0, ça sera <i class='icon_red icon jeedom-porte-ouverte'></i>

>**TIPS**
>
> Petite astuce, vous pouvez à la place d'une icône mettre une balise image (attention au chemin)

Ensuite, pour utiliser votre widget :

````php
$cmd->setTemplate('dashboard','neato::state');;
$cmd->setTemplate('mobile','neato::state');;
````

Es ist wie bei einem normalen Widget, mit Ausnahme des Namens des Widgets in der Form id_plugin::name_widget. Für das zweite Beispiel ist es id_plugin::toto


