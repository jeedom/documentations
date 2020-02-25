# Gestion des widgets des plugins

Il existe plusieurs possibilité pour faire des widgets personalisé pour les plugins : 

- la premiere avec la fonction toHtml (methode d'instance) qui herite de la class eqLogic
- par le systeme de template (v4 only)

## Fonction toHtml

La dessus rien de spécial la fonction toHtml doit retourner le widget en html, vous avez un exemple [la](https://github.com/jeedom/plugin-weather/blob/beta/core/class/weather.class.php#L647)

L'important est surtout les 1er lignes : 

````
$replace = $this->preToHtml($_version);
if (!is_array($replace)) {
	return $replace;
}
````

La fonction preToHtml renvoi :

- une string si le widget est en cache (si il est en cache c'est qu'il n'y a pas eu de changement depuis la derniere génération donc autant le renvoyer tout de suite)
- un tableau avec les replaces principaux, vous avez la liste [ici](https://github.com/jeedom/core/blob/alpha/core/class/eqLogic.class.php#L663)

## Le système de template

Le systeme de template de widget dans la code est en faite exactement le meme que celui sur la page Outils -> Widget de jeedom.

Voici un exemple :

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

Ici on va creer un nouveau widget basé sur le template "tmplmultistate" (vous avez la liste des templates [ici](https://github.com/jeedom/core/tree/alpha/core/template/dashboard) c'est ceux avec tmpl dans leur nom), pour une commande de type info et sous type string.

>**IMPORTANT
>
>Chaque template est pour un type et sous type donné il faut donc bien verifier que le template que vous voulez utilisé existe pour le type et sous type

Ensuite vu que c'est un template avec plusieurs état il faut definir les icones en fonction de l'état. Ca se fait dans la partie test du tableau.

Exemple : pour le premier test on dit si la valeur de la commande vaut 2 alors il faudra remplacer le tage #\_state_# (dans le code html du template) par <i class="icon maison-vacuum6"></i>

Un autre exemple basé sur un autre template pourrait être : 

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
  
Ici je crée un widget toto basé sur le template "tmplicon" en type info et sous type binaire. Quand il vaut 1 alors l'icone sera <i class='icon_green icon jeedom-porte-ferme'></i> et quand il faut 0 ca sera <i class='icon_red icon jeedom-porte-ouverte'></i>
  
>**TIPS**
>
> Petite astuce vous pouvez a la place d'une icone mettre une balise image (attention au chemin)
  
Ensuite pour utiliser votre widget : 
  
````
$cmd->setTemplate('dashboard','neato::state');
$cmd->setTemplate('mobile','neato::state');
````

C'est comme pour un widget normal sauf pour le nom du widget qui est sous la forme id_plugin::nom_widget. Pour le 2eme exemple ca sera id_plugin::toto
  
  
