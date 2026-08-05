# Gestion des widgets des plugins

Il existe plusieurs possibilités pour faire des widgets personnalisés pour les plugins :

- la première avec la fonction toHtml (méthode d'instance) qui hérite de la classe eqLogic
- par le système de template (v4 only)

## Fonction toHtml

Là-dessus, rien de spécial, la fonction toHtml doit retourner le widget en html, vous avez un exemple [là](https://github.com/jeedom/plugin-weather/blob/beta/core/class/weather.class.php#L647)

L'important est surtout les 1ères lignes :

````php
$replace = $this->preToHtml($_version);
if (!is_array($replace)) {
	return $replace;
}
````

La fonction preToHtml renvoi :

- une string si le widget est en cache (si il est en cache, c'est qu'il n'y a pas eu de changements depuis la dernière génération donc autant le renvoyer tout de suite)
- un tableau avec les replaces principaux, vous avez la liste [ici](https://github.com/jeedom/core/blob/alpha/core/class/eqLogic.class.php#L663)

## Le système de template

Le système de template de widget dans le code est en fait exactement le même que celui sur la page Outils -> Widget de jeedom.

Voici un exemple :

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

Ici, on va créer un nouveau widget basé sur le template "tmplmultistate" (vous avez la liste des templates [ici](https://github.com/jeedom/core/tree/alpha/core/template/dashboard) c'est ceux avec tmpl dans leur nom), pour une commande de type info et sous type string.

> **IMPORTANT**
>
> Chaque template est pour un type et sous-type donnés, il faut donc bien vérifier que le template que vous voulez utiliser existe pour le type et sous-type

Ensuite, vu que c'est un template avec plusieurs états, il faut définir les icônes en fonction de l'état. Ça se fait dans la partie test du tableau.

Exemple : pour le premier test, on dit si la valeur de la commande vaut 2 alors il faudra remplacer le tag #\_state_# (dans le code html du template) par <i class="icon maison-vacuum6"></i>

Un autre exemple basé sur un autre template pourrait être :

````php
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

Ici, je crée un widget toto basé sur le template "tmplicon" en type info et sous-type binaire. Quand il vaut 1 alors l'icône sera <i class='icon_green icon jeedom-porte-ferme'></i> et quand il vaut 0, ça sera <i class='icon_red icon jeedom-porte-ouverte'></i>

>**TIPS**
>
> Petite astuce, vous pouvez à la place d'une icône mettre une balise image (attention au chemin)

Ensuite, pour utiliser votre widget :

````php
$cmd->setTemplate('dashboard','neato::state');
$cmd->setTemplate('mobile','neato::state');
````

C'est comme pour un widget normal sauf pour le nom du widget qui est sous la forme id_plugin::nom_widget. Pour le 2eme exemple, ça sera id_plugin::toto


