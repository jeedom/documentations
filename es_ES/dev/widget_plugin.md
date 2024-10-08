# Gestión de widgets de complementos

Hay varias posibilidades para crear widgets personalizados para complementos :

- el primero con la función toHtml (método de instancia) que hereda de la clase eqLogic
- por el sistema de plantillas (solo v4)

## Función ToHtml

Entonces, nada especial, la función toHtml debe devolver el widget en html, tienes un ejemplo [el](https://github.com/jeedom/plugin-weather/blob/beta/core/class/weather.class.php#L647)

Lo importante son sobre todo las primeras líneas :

````php
$replace = $this->preToHtml($_version);
tejo (!is_array ($ reemplazar)) {
	return $ reemplazar;
}
````

La fonction preToHtml renvoi :

- une string si le widget est en cache (si il est en cache, c'est qu'il n'y a pas eu de changements depuis la dernière génération donc autant le renvoyer tout de suite)
- un tableau avec les replaces principaux, vous avez la liste [aquí](https://github.com/jeedom/core/blob/alpha/core/class/eqLogic.class.php#L663)

## Le système de template

Le système de template de widget dans le code est en fait exactement le même que celui sur la page Outils -> Widget de jeedom.

Voaquí un exemple :

````php
plantilla de función estática pública(){
	$return = array('info' => array('string' => array()));
	$return['info']['string']['state'] = array(
		'template' => 'tmplmultistate',
		'test' => array(
			array('operation' => '#value# == 2','state_light' => '<i class="icon maison-vacuum6"></i>','state_dark' => '<i class="icon maison-vacuum6"></i>'),
			array('operation' => '#value# == 3','state_light' => '<i class="fa fa-pause"></i>','state_dark' => '<i class="fa fa-pause"></i>'),
			array('operation' => '#value# > 3 || #value# < 2','state_light' => '<i class="fa fa-home"></i>','state_dark' => '<i class="fa fa-home"></i>')
		)
	);
	return $ return;
}
````

Aquí, crearemos un nuevo widget basado en la plantilla "tmplmultistate" (tienes la lista de plantillas [aquí](https://github.com/jeedom/core/tree/alpha/core/template/dashboard) son aquellos con tmpl en su nombre), para un comando de tipo de información y debajo de tipo de cadena.

> **Importante**
>
> Cada plantilla es para un tipo y subtipo determinados, por lo que debe verificar que la plantilla que desea usar exista para el tipo y subtipo

Luego, como es una plantilla con varios estados, hay que definir los iconos según el estado. Se realiza en la parte de prueba de la tabla.

Ejemplo : para la primera prueba, decimos que si el valor del comando vale 2, entonces será necesario reemplazar la etiqueta #\_state_# (en el código html de la plantilla) por </i>

Otro ejemplo basado en otra plantilla podría ser :

````php
plantilla de función estática pública(){
	$return = array('info' => array('string' => array()));
	$return['info']['binary']['toto'] = array(
		'template '=>' tmplicon',
		'reemplazar '=> matriz(
			'#_icon_on_#' => '<i class=\'icon_green icon jeedom-porte-ferme\'></i>',
			'#_icon_off_#' => '<i class=\'icon_red icon jeedom-porte-ouverte\'></i>'
			)
	);
	return $ return;
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

Es como un widget normal, excepto por el nombre del widget que tiene el formato id_plugin::nombre_widget. Para el segundo ejemplo, será id_plugin::toto


