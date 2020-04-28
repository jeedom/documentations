# 

 : 

- 
- 

## 

:

 : 

````
$replace = $this->preToHtml($_version);
if (!is_array($replace)) {
	return $replace;
}
````

 :

- 
- :

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

:// github..

>**IMPORTANT
>
>

. .

Example : >

 : 

````
public static function templateWidget(){
	$return = array('info' => array('string' => array()));
	$return['info']['binary'][''] = array(
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

::. ::
  
  
