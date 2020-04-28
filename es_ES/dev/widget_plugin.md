# Gestión de widgets de complementos

Hay varias posibilidades para crear widgets personalizados para complementos : 

- el primero con la función toHtml (método de instancia) que hereda de la clase eqLogic
- por el sistema de plantillas (solo v4)

## Función ToHtml

La dessus rien de spécial la fonction toHtml doit retourner le widget en html, vous avez un exemple [la](https://github.com/jeedom/plugin-weather/blob/beta/core/class/weather.class.php#L647)

Lo importante es especialmente las primeras líneas. : 

````
$replace = $this->preToHtml($_version);
if (!is_array($replace)) {
	return $replace;
}
````

La función preToHtml devuelve :

- una cadena si el widget está en caché (si está en caché, no ha habido cambios desde la última generación, por lo que es posible que desee enviarlo de inmediato)
- un tableau avec les replaces principaux, vous avez la liste [ici](https://github.com/jeedom/core/blob/alpha/core/class/eqLogic.class.php#L663)

## El sistema de plantillas

El sistema de plantillas de widgets en el código es exactamente el mismo que el de Herramientas -> Página de widgets de jeedom.

Aquí un ejemplo :

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

Ici on va creer un nouveau widget basé sur le template "tmplmultistate" (vous avez la liste des templates [ici](https://github.com / jeedom / core / tree / alpha / core / template / dashboard) son aquellos con tmpl en su nombre), para un comando de tipo de información y bajo tipo de cadena.

>**Importante
>
>Cada plantilla es para un tipo y subtipo dado, por lo que debe verificar que la plantilla que desea usar existe para el tipo y subtipo

Luego, dado que es una plantilla con varios estados, debe definir los iconos de acuerdo con el estado. Se realiza en la parte de prueba de la tabla..

Ejemplo : para la primera prueba, decimos que si el valor del comando vale 2, entonces tendremos que reemplazar la etiqueta # \ _ state_ # (en el código html de la plantilla) por </i>

Otro ejemplo basado en otra plantilla podría ser : 

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
  
Aquí creo un widget de toto basado en la plantilla "tmplicon" en tipo de información y en tipo binario. Cuando es 1, entonces el ícono será <i class='icon_green icon jeedom-porte-ferme'></i> y cuando tome 0 será </i>
  
>**Consejos**
>
> Pequeño consejo que puede en lugar de un icono poner una etiqueta de imagen (tenga cuidado con la ruta)
  
Luego para usar tu widget : 
  
````
$cmd->setTemplate('dashboard','neato::state');
$cmd->setTemplate('mobile','neato::state');
````

Es como un widget normal, excepto por el nombre del widget que tiene el formato id_plugin::nombre_widget. Para el segundo ejemplo, será id_plugin::toto
  
  
