# Verwaltung von Plugin-Widgets

Es gibt verschiedene Möglichkeiten, benutzerdefinierte Widgets für Plugins zu erstellen :

- Die erste verwendet die toHtml-Funktion (Instanzmethode), die von der eqLogic-Klasse erbt
- unter Verwendung des Vorlagensystems (nur Version 4))

## ToHml-Funktion

Nichts Besonderes, die Funktion `toHtml` sollte das Widget im HTML-Format zurückgeben; Sie haben ein Beispiel [Dort](https://github.com/jeedom/plugin-weather/blob/beta/core/class/weather.class.php#L647)

Das Wichtigste sind die Frontlinien :

````php
$replace = $this->preToHtml($_version);
Wenn (!is_array($replace)) {
	return $replace;
}
````

La fonction preToHtml renvoi :

- une string si le widget est en cache (si il est en cache, c'est qu'il n'y a pas eu de changements depuis la dernière génération donc autant le renvoyer tout de suite)
- un tableau avec les replaces principaux, vous avez la liste [Hier](https://github.com/jeedom/core/blob/alpha/core/class/eqLogic.class.php#L663)

## Le système de template

Le système de template de widget dans le code est en fait exactement le même que celui sur la page Outils -> Widget de jeedom.

VoHier un exemple :

````php
public static function templateWidget(){
	$return = array('info' => array('string' => array()));
	$return['info']['string']['state'] = array(
		'template' => 'tmplmultistate',
		'test' => array(
			array('operation' => '#value# == 2','state_light' => '<i class="icon maison-vacuum6"></i>','state_dark' => '<i class="icon maison-vacuum6"></i>'),
			array('operation' => '#value# == 3','state_light' => '<i class="fa fa-pause"></i>','state_dark' => '<i class="fa fa-pause"></i>'),
			array('operation' => '#value# > 3 || #value# < 2','state_light' => '<i class="fa fa-home"></i>','state_dark' => '<i class="fa fa-home"></i>')
		)
	);
	return $return;
}
````

Hier erstellen wir ein neues Widget basierend auf der Vorlage "tmplmultistate" (Sie haben die Liste der Vorlagen) [Hier](https://github.com/jeedom/core/tree/alpha/core/template/dashboard) (diejenigen mit "tmpl" im Namen), für einen Befehl vom Typ Info und Subtyp String.

> **WICHTIG**
>
> Jede Vorlage ist für einen bestimmten Typ und Subtyp vorgesehen. Sie müssen daher überprüfen, ob die Vorlage, die Sie verwenden möchten, für diesen Typ und Subtyp existiert

Da es sich um eine Vorlage mit mehreren Zuständen handelt, müssen als Nächstes die Symbole entsprechend dem jeweiligen Zustand definiert werden. Dies geschieht im Testteil der Tabelle.

Beispiel : Im ersten Test legen wir fest: Wenn der Wert des Befehls 2 ist, muss das Tag ersetzt werden #\_state_# ((im HTML-Code der Vorlage) von>

Ein weiteres Beispiel, basierend auf einer anderen Vorlage, könnte sein :

````php
public static function templateWidget(){
	$return = array('info' => array('string' => array()));
	$return['info']['binary']['toto'] = array(
		'template' => 'tmplicon',
		'Ersetzen' => Array(
			'#_icon_on_#' => '<i class=\'icon_green icon jeedom-porte-ferme\'></i>',
			'#_icon_off_#' => '<i class=\'icon_red icon jeedom-porte-ouverte\'></i>'
			)
	);
	return $return;
}
````

Ici, je crée un widget Toto basé sur le template "tmplicon" en type info et sous-type binaire. Quand il vaut 1 alors l'icône sera <i class='icon_green icon jeedom-porte-ferme'></i> et quand il vaut 0, ça sera <i class='icon_red icon jeedom-porte-ouverte'></i>

>**TIPS**
>
> Petite astuce, vous pouvez à la place d'une icône mettre une balise image (attention au chemin)

Ensuite, pour utiliser votre widget :

````php
$cmd->setTemplate('dashboard','neato::state');
$cmd->setTemplate('mobile','neato::state');
````

Es ist genau wie ein normales Widget, nur der Widget-Name hat die Form id_plugin::Widget-Name. Im zweiten Beispiel lautet die ID_Plugin::toto


