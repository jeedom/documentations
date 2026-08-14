# Managing plugin widgets

There are several ways to create custom widgets for plugins:

- the first one with the toHtml function (instance method) that inherits from the eqLogic class
- using the template system (v4 only)

## toHtml function

Nothing special there—the toHtml function should return the widget as HTML. Here's an example: [there](https://github.com/jeedom/plugin-weather/blob/beta/core/class/weather.class.php#L647)

The most important part is the first few lines:

````php
$replace = $this->preToHtml($_version);
if (!is_array($replace)) {
	return $replace;
}
````

The preToHtml function returns:

- a string if the widget is cached (if it's cached, it means there haven't been any changes since the last fetch, so we might as well return it right away)
- A table with the main components—here's the list [here](https://github.com/jeedom/core/blob/alpha/core/class/eqLogic.class.php#L663)

## The template system

The widget template system in the code is actually exactly the same as the one on the Tools -> Widgets page in Jeedom.

Here is an example:

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

Here, we're going to create a new widget based on the "tmplmultistate" template (you have the list of templates [here](https://github.com/jeedom/core/tree/alpha/core/template/dashboard) these are the ones with "tmpl" in their names, for a command of type "info" and subtype "string."

> **IMPORTANT**
>
> Each template is designed for a specific type and subtype, so be sure to verify that the template you want to use is available for that type and subtype.

Next, since this is a template with multiple states, you need to define the icons based on the state. This is done in the test section of the table.

Example: For the first test, if the command value is 2, then the tag #\_state_# (in the template's HTML code) must be replaced with <i class="icon maison-vacuum6"></i>

Another example based on a different template could be:

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

Here, I'm creating a "toto" widget based on the "tmplicon" template, with the type set to "info" and the subtype set to "binary." When its value is 1, the icon will be <i class='icon_green icon jeedom-porte-ferme'></i> and when it's 0, it will be <i class='icon_red icon jeedom-porte-ouverte'></i>

>**TIPS**
>
> Here's a quick tip: Instead of an icon, you can use an image tag (be careful with the path).

Next, to use your widget:

````php
$cmd->setTemplate('dashboard','neato::state');
$cmd->setTemplate('mobile','neato::state');
````

It's just like a normal widget, except that the widget name follows the format id_plugin::widget_name. For the second example, it would be id_plugin::toto


