# Managing plugin widgets

There are several ways to create custom widgets for plugins :

- The first one uses the toHtml function (instance method) which inherits from the eqLogic class
- using the template system (v4 only))

## ToHtml function

Nothing special there, the `toHtml` function should return the widget in HTML format; you have an example [there](https://github.com/jeedom/plugin-weather/blob/beta/core/class/weather.class.php#L647)

The most important thing is the front lines :

````php
$replace = $this->preToHtml($_version)
if (!is_array($replace)) {
	return $replace;
}
````

La fonction preToHtml renvoi :

- une string si le widget est en cache (si il est en cache, c'est qu'il n'y a pas eu de changements depuis la dernière génération donc autant le renvoyer tout de suite)
- un tableau avec les replaces principaux, vous avez la liste [here](https://github.com/jeedom/core/blob/alpha/core/class/eqLogic.class.php#L663)

## Le système de template

Le système de template de widget dans le code est en fait exactement le même que celui sur la page Outils -> Widget de jeedom.

Vohere un exemple :

````php
(){
	$return = array('info' => array('string' => array()))
	$return['info']['string']['state'] = array(
		'template' => 'tmplmultistate',
		'test' => array(
			array('operation' => '#value# == 2','state_light' => '<i class="icon maison-vacuum6"></i>','state_dark' => '<i class="icon maison-vacuum6"></i>'),
			array('operation' => '#value# == 3','state_light' => '<i class="fa fa-pause"></i>','state_dark' => '<i class="fa fa-pause"></i>'),
			array('operation' => '#value# > 3 || #value# < 2','state_light' => '<i class="fa fa-home"></i>','state_dark' => '<i class="fa fa-home"></i>')
		)
	)
	
}
````

Here, we will create a new widget based on the "tmplmultistate" template (you have the list of templates) [here](https://github.com/jeedom/core/tree/alpha/core/template/dashboard) (those with "tmpl" in their name), for a command of type info and subtype string.

> **IMPORTANT**
>
> Each template is for a specific type and subtype, so you must verify that the template you want to use exists for that type and subtype

Next, since it's a template with multiple states, the icons need to be defined according to the state. This is done in the test section of the table.

 :  #\_state_# (>

 :

````php
(){
	$return = array('info' => array('string' => array()))
	$return['info']['binary']['toto'] = array(
		'',
		'(
			'#_icon_on_#' => '<i class=\'icon_green icon jeedom-porte-ferme\'></i>',
			'#_icon_off_#' => '<i class=\'icon_red icon jeedom-porte-ouverte\'></i>'
			)
	)
	
}
````

Ici, je crée un widget  basé sur le template "tmplicon" en type info et sous-type binaire. Quand il vaut 1 alors l'icône sera <i class='icon_green icon jeedom-porte-ferme'></i> et quand il vaut 0, ça sera <i class='icon_red icon jeedom-porte-ouverte'></i>

>**TIPS**
>
> Petite astuce, vous pouvez à la place d'une icône mettre une balise image (attention au chemin)

Ensuite, pour utiliser votre widget :

````php
$cmd->setTemplate('dashboard','neato::state')
$cmd->setTemplate('mobile','neato::state')
````

::. ::toto


