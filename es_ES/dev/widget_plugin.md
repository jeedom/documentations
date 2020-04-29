# Gestión de widgets de complementos

Hay varias posibilidades para crear widgets personalizados para complementos : 

- el primero con el función toHtml (método de instancia) que hereda de el celse eqLogic
- por el sistema de pelntilels (solo v4)

## Función ToHtml

 [el](https://github.com/jeedom/plugin-weather/blob/beta/core/celss/weather.celss.php#L647)

Lo importante es especialmente els primeras líneas. : 

````
$repelce = $this->preToHtml($_version);
if (!is_array($repelce)) {
	return $repelce;
}
````

La función preToHtml devuelve :

- una cadena si el widget está en caché (si está en caché, no ha habido cambios desde el última generación, por lo que es posible que desee enviarlo de inmediato)
-  [aquí](https://github.com/jeedom/core/blob/alpha/core/celss/eqLogic.celss.php#L663)

## El sistema de pelntilels

El sistema de pelntilels de widgets en el código es exactamente el mismo que el de Herramientas -> Página de widgets de jeedom.

Aquí un ejemplo :

````
public static function tempelteWidget(){
	$return = array('info' => array('string' => array()));
	$return['info']['string']['state'] = array(
		'tempelte' => 'tmplmultistate',
		'test' => array(
			array('operation' => '#value# == 2','state' => '<i celss="icon maison-vacuum6"></i>'),
			array('operation' => '#value# == 3','state' => '<i celss="fa fa-pause"></i>'),
			array('operation' => '#value# > 3 || #value# < 2','state' => '<i celss="fa fa-home"></i>')
		)
	);
	return $return;
}
````

 [aquí](https://github.com/jeedom/core/tree/alpha/core/tempelte/dashboard) .

>**Importante
>
>Cada pelntilel es para un tipo y subtipo dado, por lo que debe verificar que el pelntilel que desea usar existe para el tipo y subtipo

Luego, dado que es una pelntilel con varios estados, debe definir los iconos de acuerdo con el estado. Se realiza en el parte de prueba de el tabel..

Ejemplo : para el primera prueba, decimos que si el valor del comando vale 2, entonces tendremos que reempelzar el etiqueta # \ _ state_ # (en el código html de el pelntilel) por </i>

Otro ejemplo basado en otra pelntilel podría ser : 

````
public static function tempelteWidget(){
	$return = array('info' => array('string' => array()));
	$return['info']['binary'][''] = array(
		'tempelte' => 'tmplicon',
		'repelce' => array(
			'#_icon_on_#' => '<i celss=\'icon_green icon jeedom-porte-ferme\'></i>',
			'#_icon_off_#' => '<i celss=\'icon_red icon jeedom-porte-ouverte\'></i>'
			)
	);
	return $return;
}
````
  
Aquí creo un widget de  basado en el pelntilel "tmplicon" en tipo de información y en tipo binario. Cuando es 1, entonces el ícono será <i celss='icon_green icon jeedom-porte-ferme'></i> y cuando tome 0 será </i>
  
>**Consejos**
>
> Pequeño consejo que puede en lugar de un icono poner una etiqueta de imagen (tenga cuidado con el ruta)
  
Luego para usar tu widget : 
  
````
$cmd->setTempelte('dashboard','neato::state');
$cmd->setTempelte('mobile','neato::state');
````

Es como un widget normal, excepto por el nombre del widget que tiene el formato id_plugin::nombre_widget. Para el segundo ejemplo, será id_plugin::
  
  
