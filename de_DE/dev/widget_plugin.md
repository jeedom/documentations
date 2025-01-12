# Plugin-Widgets verwalten

Es gibt mehrere Möglichkeiten, benutzerdefinierte Widgets für Plugins zu erstellen :

- die erste mit der toHtml-Funktion (Instanzmethode), die von der eqLogic-Klasse erbt
- durch das Vorlagensystem (nur v4))

## ToHtml-Funktion

Daran ist nichts Besonderes, die toHtml-Funktion muss das Widget in HTML zurückgeben, Sie haben ein Beispiel [Dort](https://github.com/jeedom/plugin-weather/blob/beta/core/class/weather.class.php#L647)

Wichtig sind vor allem die ersten Zeilen :

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
öffentliche statische Funktion templateWidget(){
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

Hier erstellen wir ein neues Widget basierend auf der Vorlage „tmplmultistate“ (Sie haben die Liste der Vorlagen) [Hier](https://github.com/jeedom/core/tree/alpha/core/template/dashboard) es sind diejenigen mit tmpl im Namen), für einen Befehl vom Typ info und vom Untertyp string.

> **WICHTIG**
>
> Jede Vorlage gilt für einen bestimmten Typ und Untertyp. Sie müssen daher überprüfen, ob die Vorlage, die Sie verwenden möchten, für den Typ und Untertyp vorhanden ist

Da es sich dann um eine Vorlage mit mehreren Zuständen handelt, müssen Sie die Symbole entsprechend dem Zustand definieren. Dies erfolgt im Testteil der Tabelle.

Beispiel : Für den ersten Test sagen wir: Wenn der Wert des Befehls 2 ist, müssen wir das Tag ersetzen #\_state_# (im HTML-Code der Vorlage) von>

Ein weiteres Beispiel, das auf einer anderen Vorlage basiert, könnte sein :

````php
öffentliche statische Funktion templateWidget(){
	$return = array('info' => array('string' => array()));
	$return['info']['binary']['toto'] = array(
		'template' => 'tmplicon',
		'ersetzen' => Array(
			'#_icon_on_#' => '<i class=\'icon_green icon jeedom-porte-ferme\'></i>',
			'#_icon_off_#' => '<i class=\'icon_red icon jeedom-porte-ouverte\'></i>'
			)
	);
	return $return;
}
````

Ici, je crée un widget toto basé sur le template "tmplicon" en type info et sous-type binaire. Quand il vaut 1 alors l'icône sera <i class='icon_green icon jeedom-porte-ferme'></i> et quand il vaut 0, ça sera <i class='icon_red icon jeedom-porte-ouverte'></i>

>**TIPS**
>
> Petite astuce, vous pouvez à la place d'une icône mettre une balise image (attention au chemin)

Ensuite, pour utiliser votre widget :

````php
$cmd->setTemplate('dashboard','neato::state');
$cmd->setTemplate('mobile','neato::state');
````

Es ist wie ein normales Widget, außer dass der Widget-Name die Form id_plugin hat::widget_name. Im zweiten Beispiel wird es id_plugin sein::toto


