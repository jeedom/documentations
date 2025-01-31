# 

 :

- 
- )

## 

 [](https://github.com/jeedom/plugin-weather/blob/beta/core/class/weather.class.php#L647)

 :

````php
$replace = $this->preToHtml($_version)
 (!)) {
	
}
````

La fonction preToHtml renvoi :

- une string si le widget est en cache (si il est en cache, c'est qu'il n'y a pas eu de changements depuis la dernière génération donc autant le renvoyer tout de suite)
- un tableau avec les replaces principaux, vous avez la liste [](https://github.com/jeedom/core/blob/alpha/core/class/eqLogic.class.php#L663)

## Le système de template

Le système de template de widget dans le code est en fait exactement le même que celui sur la page Outils -> Widget de jeedom.

Vo un exemple :

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

 [](https://github.com/jeedom/core/tree/alpha/core/template/dashboard) .

> ****
>
> 

. .

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


