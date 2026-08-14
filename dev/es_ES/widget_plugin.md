# Gestión de los widgets de los complementos

Existen varias opciones para crear widgets personalizados para los plugins:

- la primera con la función toHtml (método de instancia) que hereda de la clase eqLogic
- mediante el sistema de plantillas (solo v4)

## Función toHtml

En este sentido, no hay nada especial: la función toHtml debe devolver el widget en formato HTML. Aquí tienes un ejemplo. [allí](https://github.com/jeedom/plugin-weather/blob/beta/core/class/weather.class.php#L647)

Lo importante son sobre todo las primeras líneas:

````php
$replace = $this->preToHtml($_version);
if (!is_array($replace)) {
	return $replace;
}
````

La función preToHtml devuelve:

- una cadena si el widget está en caché (si está en caché, significa que no ha habido cambios desde la última generación, así que más vale devolverlo enseguida)
- una tabla con los principales sustitutos; aquí tienes la lista [aquí](https://github.com/jeedom/core/blob/alpha/core/class/eqLogic.class.php#L663)

## El sistema de plantillas

El sistema de plantillas de widgets del código es, de hecho, exactamente el mismo que el de la página Herramientas -> Widgets de Jeedom.

He aquí un ejemplo:

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

Aquí vamos a crear un nuevo widget basado en la plantilla «tmplmultistate» (tienes la lista de plantillas [aquí](https://github.com/jeedom/core/tree/alpha/core/template/dashboard) (son los que llevan «tmpl» en el nombre), para un comando de tipo «info» y subtipo «string».

> **IMPORTANTE**
>
> Cada plantilla corresponde a un tipo y subtipo concretos, por lo que debes comprobar bien que la plantilla que quieres utilizar exista para ese tipo y subtipo.

A continuación, dado que se trata de una plantilla con varios estados, hay que definir los iconos en función del estado. Esto se hace en la sección de pruebas de la tabla.

Ejemplo: para la primera prueba, se establece que si el valor del comando es 2, habrá que sustituir la etiqueta #\_state_# (en el código HTML de la plantilla) por <i class="icon maison-vacuum6"></i>

Otro ejemplo basado en otra plantilla podría ser:

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

Aquí creo un widget «toto» basado en la plantilla «tmplicon», de tipo «info» y subtipo «binario». Cuando su valor sea 1, el icono será <i class='icon_green icon jeedom-porte-ferme'></i> y cuando sea 0, será <i class='icon_red icon jeedom-porte-ouverte'></i>

>**CONSEJOS**
>
> Un pequeño consejo: en lugar de un icono, puedes poner una etiqueta de imagen (ten cuidado con la ruta).

A continuación, para utilizar tu widget:

````php
$cmd->setTemplate('dashboard','neato::state');
$cmd->setTemplate('mobile','neato::state');
````

Es igual que con un widget normal, salvo por el nombre del widget, que tiene el formato id_plugin::nombre_widget. En el segundo ejemplo, sería id_plugin::toto


