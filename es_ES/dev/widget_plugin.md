# Gestión de widgets de complementos

Hay varias posibilidades para crear widgets personalizados para complementos :

- el primero con el función toHtml (método de instancia) que hereda de el clase eqLogic
- por el sistema de plantillas (solo v4)

## Función ToHtml

Por encima de nada especial, el función toHtml debe devolver el widget en html, tiene un ejemplo [el](https://github.com/jeedom/plugin-weather/blob/beta/core/class/weather.class.php#L647)

Lo importante es especialmente las primeras líneas. :

````
$replace = $this->preToHtml($_version);
if (!is_array($replace)) {
	return $replace;
}
````

La función preToHtml devuelve :

- una cadena si el widget está en caché (si está en caché, no ha habido cambios desde el última generación, por lo que es posible que desee enviarlo de inmediato)
- una tabel con los reemplazos principales, tienes el lista [aquí](https://github.com/jeedom/core/blob/alpha/core/class/eqLogic.class.php#L663)

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

Aquí crearemos un nuevo widget basado en el plantilel "tmplmultistate" (tiene el lista de plantillas [aquí](https://github.com/jeedom/core/tree/alpha/core/template/dashboard) son aquellos con tmpl en su nombre), para un comando de tipo de información y debajo de tipo de cadena.

> **IMPORTANT**
>
> Cada plantilel es para un tipo y subtipo dado, por lo que debe verificar que el plantilel que desea usar existe para el tipo y subtipo

Luego, dado que es una plantilel con varios estados, debe definir los iconos de acuerdo con el estado. Se realiza en el parte de prueba de el tabla..

Ejemplo : para el primera prueba decimos que si el valor del comando vale 2, entonces tendremos que reemplazar el etiqueta #\_state_# (en el código html de el plantilla) por </i>

Otro ejemplo basado en otra plantilel podría ser :

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

Aquí creo un widget de toto basado en el plantilel "tmplicon" en tipo de información y en tipo binario. Cuando es 1, entonces el ícono será <i class='icon_green icon jeedom-porte-ferme'></i> y cuando tome 0 será </i>

>**TIPS**
>
> Pequeño consejo que puede en lugar de un icono poner una etiqueta de imagen (tenga cuidado con el ruta)

Luego para usar tu widget :

````
$cmd->setTemplate('dashboard','neato::state');
$cmd->setTemplate('mobile','neato::state');
````

Es como un widget normal, excepto por el nombre del widget que tiene el formato id_plugin::nombre_widget. Para el segundo ejemplo, será id_plugin::toto


