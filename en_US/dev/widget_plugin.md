# Management of plugin widgets

There are several possibilities to make custom widgets for plugins :

- the first with the toHtml function (instance method) which inherits from the eqLogic class
- by the template system (v4 only)

## ToHtml function

Above nothing special the toHtml function must return the widget in html, you have an example [the](https://github.com/jeedom/plugin-weather/blob/beta/core/class/weather.class.php#L647)

The important thing is especially the 1st lines :

````
$replace = $this->preToHtml($_version);
if (!is_array($replace)) {
	return $replace;
}
````

The preToHtml function returns :

- a string if the widget is cached (if it is cached it means that there has been no change since the last generation, so you might as well send it back)
- a table with the main replaces, you have the list [here](https://github.com/jeedom/core/blob/alpha/core/class/eqLogic.class.php#L663)

## The template system

The widget template system in the code is actually exactly the same as the one on the Tools -> Widget page of jeedom.

Here is an example :

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

Here we will create a new widget based on the "tmplmultistate" template (you have the list of templates [here](https://github.com/jeedom/core/tree/alpha/core/template/dashboard) it's those with tmpl in their name), for an info type command and under string type.

> **IMPORTANT**
>
> Each template is for a given type and sub type, so you must verify that the template you want to use exists for the type and sub type

Then since it is a template with several states you have to define the icons according to the state. It is done in the test part of the table.

Example : for the first test we say if the value of the command is worth 2 then we will have to replace the tag #\_state_# (in the html code of the template) by </i>

Another example based on another template could be :

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

Here I create a toto widget based on the "tmplicon" template in info type and in binary type. When it is 1 then the icon will be <i class='icon_green icon jeedom-porte-ferme'></i> and when it takes 0 it will be </i>

>**TIPS**
>
> Little tip you can instead of an icon put an image tag (watch out for the path)

Then to use your widget :

````
$cmd->setTemplate('dashboard','neato::state');
$cmd->setTemplate('mobile','neato::state');
````

It is like for a normal widget except for the name of the widget which is in the form id_plugin::name_widget. For the 2nd example it will be id_plugin::toto


