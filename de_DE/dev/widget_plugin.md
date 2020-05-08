# 

 :

- 
- 

## 

 [](https://github.com/jeedom/plugin-weather/blob/beta/core/class/weather.class.php#L647)

 :

````
$replace = $this->preToHtml($_version);
if (!is_array($replace)) {
	return $replace;
}
````

 :

- 
-  [hier](https://github.com/jeedom/core/blob/alpha/core/class/eqLogic.class.php#L663)

## 

.

 :

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

 [hier](https://github.com/jeedom/core/tree/alpha/core/template/dashboard) .

> **IMPORTANT**
>
> 

. .

Beispiel :  #\_state_# >

 :

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

. >

>**TIPS**
>
> 

 :

````
$cmd->setTemplate('dashboard','neato::state');
$cmd->setTemplate('mobile','neato::state');
````

::. ::toto


