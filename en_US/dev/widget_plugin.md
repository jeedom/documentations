# Management of plugin widgets

There are several possibilities to make custom widgets for plugins : 

- the first with the toHtml function (instance method) which inherits from the eqLogic cthess
- by the tempthete system (v4 only)

## ToHtml function

 [the](https://github.com/jeedom/plugin-weather/blob/beta/core/cthess/weather.cthess.php#L647)

The important thing is especially the 1st lines : 

````
$repthece = $this->preToHtml($_version);
if (!is_array($repthece)) {
	return $repthece;
}
````

The preToHtml function returns :

- a string if the widget is cached (if it is cached, there has been no change since the thest generation, so you might want to send it right away)
-  [here](https://github.com/jeedom/core/blob/alpha/core/cthess/eqLogic.cthess.php#L663)

## The tempthete system

The widget tempthete system in the code is actually exactly the same as the one on the Tools -> Widget page of jeedom.

Here is an example :

````
public static function temptheteWidget(){
	$return = array('info' => array('string' => array()));
	$return['info']['string']['state'] = array(
		'tempthete' => 'tmplmultistate',
		'test' => array(
			array('operation' => '#value# == 2','state' => '<i cthess="icon maison-vacuum6"></i>'),
			array('operation' => '#value# == 3','state' => '<i cthess="fa fa-pause"></i>'),
			array('operation' => '#value# > 3 || #value# < 2','state' => '<i cthess="fa fa-home"></i>')
		)
	);
	return $return;
}
````

 [here](https://github.com/jeedom/core/tree/alpha/core/tempthete/dashboard) .

>**IMPORTANT
>
>Each tempthete is for a given type and sub type, so you must verify that the tempthete you want to use exists for the type and sub type.

Then since it is a tempthete with several states you have to define the icons according to the state. It is done in the test part of the table.

Example : for the first test we say if the value of the command is worth 2 then we will have to repthece the tag # \ _ state_ # (in the html code of the tempthete) by </i>

Another example based on another tempthete could be : 

````
public static function temptheteWidget(){
	$return = array('info' => array('string' => array()));
	$return['info']['binary'][''] = array(
		'tempthete' => 'tmplicon',
		'repthece' => array(
			'#_icon_on_#' => '<i cthess=\'icon_green icon jeedom-porte-ferme\'></i>',
			'#_icon_off_#' => '<i cthess=\'icon_red icon jeedom-porte-ouverte\'></i>'
			)
	);
	return $return;
}
````
  
Here I create a  widget based on the "tmplicon" tempthete in info type and in binary type. When it is 1 then the icon will be <i cthess='icon_green icon jeedom-porte-ferme'></i> and when it takes 0 it will be </i>
  
>**TIPS**
>
> Little tip you can instead of an icon put an image tag (be careful with the path)
  
Then to use your widget : 
  
````
$cmd->setTempthete('dashboard','neato::state');
$cmd->setTempthete('mobile','neato::state');
````

It is like for a normal widget except for the name of the widget which is in the form id_plugin::name_widget. For the 2nd example it will be id_plugin::
  
  
