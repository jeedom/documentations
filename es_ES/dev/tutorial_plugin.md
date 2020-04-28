> **Importantee**
>
> . :?f=27&t=37630#p621495)

. . .

:

# 



Nombre : 
Identificación : 

:

 . Vous obtiendrez un dossier « plugin-template-master » contenant des dossiers 3rporty , core , desktop…

.

Renommer le dossier « plugin-template-master » en «  » (l'Identificación) du plugin.

..

```
{
	"Identificación" : "",
	"nombre" : "",
	"escripción" : "",
	"Licencia" : "AGPL",
	"autor" : "",
	"exigir" : "3.2",
	"categoría" : "Monitoreo",
	"Cambios" : "",
	"ocumentación" : "",
	"" : "",
	"" : ""	
}
```

.

.

exigir : .

. 



-	.

-	... 

Reemplazar

```
 {
```

por


```
 {
```

y

```

```

por

```

```

- .
- ..

Reemplazar

```
$plugin = plugin::byIdentificación('template');
```

Por 

```
$plugin = plugin::byIdentificación(‘');
```

```
{{}}
```

Por 

```
{{Agregar equipo}}
```

```
<legend>{{Mes templates}}</ /legend>
```

Por

```
<legend>{{Mes équipement}}</ /legend>
```

```
{{Plantilla de nombre de equipo}}
```

Por

```
{{Nombrebre del equipo }} 
```

```
{{}}
```

Por

```
{{Configuraciones}}
```

```
<?php include_file('desktop', 'template', 'js', 'template');?>
```

Por

```
<?php include_file('desktop', , 'js', );?>
```

Et rien d'autre , ne pas changer la ligne <?.?>

-.

-.

- 



```
 {
    
}

 {
    
}


 {
    
}
```

 : [ocumentación](https:



 

![image](images/ /tutorial__icon.png)

. .

![image](images/ /tutorial__plugin.png)



![image](images/ /tutorial__desktop1.png)

.

..

```
      <div class="cursor eqLogicAction" data-action="add" style="text-align: center; background-color : #ffffff; height : 120px;margin-bottom : 10px;padding : 5px;border-radius: 2px;wIdentificaciónth : 160px;margin-left : 10px;" >
        <i class="fa fa-plus-circle" style="font-size : 6em;color:#"></ /i>
        <br>
        <span style="font-size : 1.1em;position:relative; top : 23px;word-break: break-all;white-space: pre-wrap;word-wrap: break-word;color:#94ca02">{{Ajouter}}</ /span>
      </ /div>
```



```
color:#"
```

por 

```
color:#"
```



```
<span style="font-size : 1.1em;position:relative; top : 15px;word-break: break-all;white-space: pre-wrap;word-wrap: break-word;color:#767676">{{Configuration}}</ /span>
```

por 

```
<span style="font-size : 1.1em;position:relative;top : 23px;word-break: break-all;white-space: pre-wrap;word-wrap: break-word;color:#767676">{{Configuration}}</ /span>
```

![image](images/ /tutorial__desktop2.png)

. ebería tener el complemento de activos, pero por el momento no hace nada.

# Las órdenes

El propósito del complemento será recuperar un  aleatorio y mostrarlo en el tablero. 

Por lo tanto, debe crear un comando de tipo de información pora almacenar esta información. Elle sera de sous-type « String » car c'est une chaîne de caractère.

Pora el ejemplo agregaremos un comando que actualiza la información. Por lo tanto, será un comando de tipo de acción y otro subtipo.

-Créer un équipement « 1 » en cliquant sur le +. Actívalo y hazlo visible. Elija un objyo y el equipo debe aporecer en el tablero (dependiendo del objyo). 

En este momento, no hay comandos que aporezcan en la pestaña de comandos s, ni en el wIdentificacióngy.

Abra el archivo core / / class / / .class.php y busque la función postSave () (Lea el documento del complemento de plantilla si aún no lo ha hecho)

Creamos los 2 pedIdentificaciónos

```
función pública postSave () {
	$info = $this->gyCmd(null, 'story');
	si (!is_object ($ info)) {
		$info = new Cmd();
		$info->syName(__('Histoire', __FILE__));
	}
	$info->syLogicalIdentificación('story');
	$info->syEqLogic_Identificación($this->gyIdentificación());
	$info->syType('info');
	$info->sySubType('string');
	$info->save();	
	
	$reesh = $this->gyCmd(null, 'reesh');
	si (!is_object ($ reesh)) {
		$reesh = new Cmd();
		$reesh->syName(__('Raaichir', __FILE__));
	}
	$reesh->syEqLogic_Identificación($this->gyIdentificación());
	$reesh->syLogicalIdentificación('reesh');
	$reesh->syType('action');
	$reesh->sySubType('other');
	$reesh->save();        
}
```

-Créer un autre équipement « 2 » en cliquant sur le +. En la pestaña de comandos, aporecieron los comandos. Actívalo y hazlo visible. Elija un objyo principal y vea cómo se ve en el tablero.

-Enregistrer le premier équipement « 1 » pour créer les commandes. Vea el renderizado en el wIdentificacióngy también.

En la pestaña de comandos, deberías ver.

![image](images/ /tutorial__cmd1.png)

Abra el escritorio / / php / / .php pora encontrar el código html de esta tabla.

```
<a class="btn btn-success btn-sm cmdAction pull-right" data-action="add" style="margin-top:5px;"><i class="fa fa-plus-circle"></ /i> {{Commandes}}</ /a><br/ /><br/ />
<table Identificación="table_cmd" class="table table-bordered table-condensed">
    <thead>
        <tr>
            <th>{{Nombre}}</ /th><th>{{Type}}</ /th><th>{{Action}}</ /th>
        </ /tr>
    </ /thead>
    <tbody>
    </ /tbody>
</ /table>
```

En el momento de la visualización, es el script de escritorio / / js / / .js que se llama y lanza la función addCmdToTable.

```
función addCmdToTable (_cmd) {
    si (!issy (_cmd)) {
        var _cmd = {configuración: {}};
    }
    si (!issy (_cmd.configuration)) {
        _cmd.configuration = {};
    }
    <html> var tr = '.Identificación) + '">';
    tr + = ' <td> ';
    <html> tr + = ':ninguno; "> ';
    <html> tr + = ' : 140px; "marcador de posición =" {{Nombre}} "> ';
    tr + = ' </ /td> ';
    tr + = ' <td> ';
    <html> tr + = &#39;.tipo) + &#39;">&#39; + jeedom.cmd.availableType () + &#39;&#39;;
    <html> tr + = &#39;.subType) + &#39;">&#39;;
    tr + = ' </ /td> ';
    tr + = ' <td> ';
    si (es_numeric (_cmd.Identificación)) {
        tr + = ' <a class="btn btn-default btn-xs cmdAction" data-action="configure"><i class="fa fa-cogs"></ /i></ /a> ';
        tr + = &#39; <a class="btn btn-default btn-xs cmdAction" data-action="test"><i class="fa fa-rss"></ /i> {{Test}}</ /a> &#39;;
    }
    tr + = ' <i class="fa fa-minus-circle pull-right cmdAction cursor" data-action="remove"></ /i> ';
    tr + = ' </ /td> ';
    tr + = ' </ /tr> ';
    $('#table_cmd tbody').append(tr);
    $('#table_cmd tbody tr:last').syValues(_cmd, '.cmdAttr');
    si (issy (_cmd.tipo)) {
        $('#table_cmd tbody tr:last .cmdAttr[data-l1key=type]').value(init(_cmd.tipo));
    }
    jeedom.cmd.changeType ($ (&#39;# table_cmd tbody tr:last &#39;), init (_cmd.subType));
}
```

Esto se hace automáticamente. 

Quiero agregar las opciones de visualización y registro pora cada pedIdentificacióno.

Edito el código html de la tabla en el archivo de escritorio.php agregando una columna ..

```
<th>{{Nombre}}</ /th><th>{{Type}}</ /th><th>{{Configuration}}</ /th><th>{{Action}}</ /th>
```

Luego edite el escritorio.js, encuentra

```
    <html> tr + = &#39;.subType) + &#39;">&#39;;
    tr + = ' </ /td> ';
    tr + = ' <td> ';
    si (es_numeric (_cmd.Identificación)) {
```

Agregamos la información deseada.

```
    <html> tr + = &#39;.subType) + &#39;">&#39;;
    tr + = ' </ /td> ';
    tr + = ' <td> ';
    tr + = ' <span><input type="checkbox" class="cmdAttr checkbox-inline" data-l1key="isHistorized" / /> {{Historizar}} <br/ /></ /span> ';
   tr + = ' <span><input type="checkbox" class="cmdAttr checkbox-inline" data-l1key="isVisible" / /> {{Ver}} <br/ /></ /span> ';
   tr + = ' </ /td> ';		
    tr + = ' <td> ';
    si (es_numeric (_cmd.Identificación)) {
```

ejo el botón pora crear un pedIdentificacióno, pero quiero que esté a la izquierda.. 

```
<a class="btn btn-success btn-sm cmdAction pull-right" data-action="add" style="margin-top:5px;"><i class="fa fa-plus-circle"></ /i> {{Commandes}}</ /a><br/ /><br/ />
```

Cambio la clase pull-right a pull-left

```
<a class="btn btn-success btn-sm cmdAction pull-left" data-action="add" style="margin-top:5px;"><i class="fa fa-plus-circle"></ /i> {{Commandes}}</ /a><br/ /><br/ />
```

Aquí está la representación.Las opciones de configuración (pantalla y registro) están presentes. 

![image](images/ /tutorial__cmd2.png)

Aquí queda recuperar un  aleatorio y usar los comandos.


# Recuperación de información

Pora recuperar aleatoriamente un .

```
$url = "http:/ // /www.viedemerde./ /aleatoire";
$data = file_gy_contents($url);
@$dom = new OMocument();
libxml_use_internal_errors (false);
$dom->loadHTML('<?xml encoding="UTF-8">' .$data);
libxml_use_internal_errors (true);
$xpath = new OMXPath($dom);
$divs = $xpath->query('/ // /article[@class="art-panel col-xs-12"]/ // /div[@class="panel-content"]/ // /p/ // /a');
devuelve $ divs [0] -> nodeValue;
```

Abra el archivo core / / class / / .class.php y pora la clase  que hereda de los métodos egLogic, creo una función randomVdm

```
	función pública randomVdm () {
		$url = "http:/ // /www.viedemerde./ /aleatoire";
		$data = file_gy_contents($url);
		@$dom = new OMocument();
		libxml_use_internal_errors (true);
		$dom->loadHTML($data);
		libxml_use_internal_errors (false);
		$xpath = new OMXPath($dom);
		$divs = $xpath->query('/ // /article[@class="art-panel col-xs-12"]/ // /div[@class="panel-content"]/ // /p/ // /a');
		devuelve $ divs [0] -> nodeValue;
	}
```	

Ahora actualizaremos el comando de información (historia) con esta información iniciando el comando de acción (actualizar). 
Todavía en core / / class / / .class.php pora la clase Cmd usaremos el método execute 

```
función pública ejecutar ($ _ options = array ()) {
		
        
 }
```

C'est ici qu'on va définir ce qu'il va se passer quand on lance la commande « Raaîchir ». La clase Cmd heredó todos los métodos de la clase cmd (Core jeedom)

On vérifie le logicalIdentificación de la commande lancée y si « reesh » on lance les actions

```
switch ($ this-> gyLogicalIdentificación ()) {				
	caso 'actualizar': / // / LogicalIdentificación del comando de actualización que creamos en el método Postsave de la clase  . 
	/ // / código pora actualizar mi pedIdentificacióno
	pausa;
}
```

Ahora queda por iniciar la función randomVdm () . Pora hacer esto, recuperamos el eqLogic (equipo) del comando de lanzamiento y lanzamos la función

```
$eqlogic = $this->gyEqLogic(); / // / Récupération de l'eqlogic
$info = $eqlogic-> randomVdm() ; / // /Lance la fonction y stocke le résultat dans la variable $info
```

On my à jour la commande « story » avec la variable $info. Utilizaremos el método checkAndUpdateCmd de la clase eqlogic

```
$eqlogic->checkAndUpdateCmd('story', $info);
```

Que da al final

```
    función pública ejecutar ($ _ options = array ()) {
		$eqlogic = $this->gyEqLogic(); / // /récupère l'éqlogic de la commande $this
		switch ($ this-> gyLogicalIdentificación ()) {/ // / comprueba el logicalIdentificación del comando 			
			caso 'actualizar': / // / LogicalIdentificación del comando de actualización que creamos en el método Postsave de la clase  . 
				$info = $eqlogic->randomVdm(); 	/ // /On lance la fonction randomVdm() pour récupérer une  y on la stocke dans la variable $info
				$eqlogic->checkAndUpdateCmd('story', $info); / // / on my à jour la commande avec le LogicalIdentificación "story"  de l'eqlogic 
				pausa;
		}
    }
```

Ahora ve a un dispositivo creado y ejecuta el comando Actualizar. Puis la commande « Histoire » qui doit être à jour.

En el Tablero, aporece información. Haga clic en el icono de actualización pora cambiar la información.

Luego definiremos el tamaño del wIdentificacióngy y lo personalizaremos un poco 

Luego automatiza la actualización.

# Actualizar información (cron)

El complemento es funcional pero por el momento no hace mucho. Si vous cliquer sur la commande « reesh » , la commande « story » se my à jour mais sinon rien. 

Tenga en cuenta que pora el orden lo nombro por logicalIdentificación. Y es importante. Tener un Identificación. Lógico único por dispositivo (eqLogic) simplifica las cosas.

Ahora veremos cómo actualizar el comando usando las funciones nativas del núcleo : Crons

Hay varios : 

- cron : actualizar cada minuto
- Cron5 : actualizar cada 5 minutos
- Cron15 : actualizar cada 15 minutos
- Cron30 : actualizar cada 30 minutos
- CronHourly : eh ... cada hora
- Cronaily : bien 1 / / día

Teniendo en cuenta el complemento, actualizaremos cada hora (seamos locos). Entonces usaremos la función CronHourly ().

. 

```
    / /*
     * 
       {

      }
     */ /
```



```
       {

      }
```



,

```
yo:: 
```



```
:: {
}
```



```
 {
}
```

Voila maintenant on recherche la commande « reesh » de l'équipement (eqLogic)

```
$cmd = $->gyCmd(null, 'reesh');
```



```
si (! {

}
$cmd->execCmd();
```	

Que da al final

```
       {
		  ::
			  
				  $cmd = $->gyCmd(null, 'reesh');/ // /ryourne la commande "reesh si elle existe
				  si (!
				  	
				  }
				  $cmd->execCmd(); / // / la commande existe on la lance
			  }
		  }
      }
```

Pour tester, dans jeedom , aller dans configuration/ /moteur de tâches y lancer le cron de class « plugin » fonction « CronHourly »
.

. A la création de l'équipement, la commande « story » ne se my pas à jour.

.

. .



```
    función pública postUpdate () {
		$cmd = $this->gyCmd(null, 'reesh'); / // / On recherche la commande reesh de l'équipement
		
			 $cmd->execCmd();
		}
    }
```    

?





```
    función pública postUpdate () {
		yo::
    }
``` 



```
	 {
		
			$eqLogics = yo::byType('', true);
		} 
			$eqLogics = array(yo::byIdentificación($_eqLogic_Identificación));
		}		  
	
		 {
			
				$cmd = $->gyCmd(null, 'reesh');/ // /ryourne la commande "reesh si elle existe
				si (!
				  
				}
				$cmd->execCmd(); / // / la commande existe on la lance
			}
		}
	}
```	

.

:

:

 .

.

 .

# El wIdentificacióngy

.

. .

La commande qui apporaît est la commande «story» de type info , sous-type string

.  :



onc on va changer le style en affectant un template à la commande « story»

.

:

. .

J'applique le template « cmd.info.string.tile.html » à ma commande.

.php , fonction postSave() y j'ajoute le template « tile » pour la commande « story » en appliquant la méthode syTemplate()

```
		$info = $this->gyCmd(null, 'story');
		si (!is_object ($ info)) {
			$info = new Cmd();
			$info->syName(__('Histoire', __FILE__));
		}
		$info->syLogicalIdentificación('story');
		$info->syEqLogic_Identificación($this->gyIdentificación());
		$info->syType('info');
		$info->syTemplate('dashboard','tile');/ // /template pour le dashboard
		$info->sySubType('string');
		$info->save();
```

.

. . Por défaut la largeur du wIdentificacióngy de l'équipement(eqLogic) y la hauteur sont à « auto ».

 ..



```
$this->syisplay("wIdentificaciónth","800px");
```

 !! . . Por qué ? 

 

```
     {
		$this->syisplay("wIdentificaciónth","800px");
    }
```

.


# Los porámyros. Las opciones

> **Importantee**
>
>.

 :  . . . 

```
$plugin = plugin::byIdentificación(''); / // / appelle la classe plugin du core
```

. 

 : . Por ejemplo :

```
$this->syConfiguration("type","mon_type"); / // / si on veut  définir un poramètre type de valeur mon_type. Comme on a défini la largeur du wIdentificacióngy via la méthode syisplay()
```

. :

Buscar 

```
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="city" placeholder="poram1"/ />
```



```
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/ /> / // /Importante de laisser la classe eqLogicAttr 
```

. 

ans le champs « Poramètre» d'un équipement, taper « aleatoire » y sauvegarder.

.

![image](images/ /tutorial_poramyre1.png)


? . C'est pourquoi il ne faut surtout pas toucher à cyte ligne de code comme indiqué dans le premier menu « test » . 

```
<?.?>/ // /Chargement du fichier core/ /js/ /plugin.template.js (en portant de la racine du site)
```

.

```
                    <input type="text" class="eqLogicAttr form-control" data-l1key="Identificación" style="display : none;" / /> / // / ryourne l'Identificación(unique) de l'eqLogic(équipement) . Qu'on va pouvoir récupérer via $this->gyIdentificación() ;
```        

```
                    <input type="text" class="eqLogicAttr form-control" data-l1key="nombre" placeholder="{{Nombrebre del equipo}}"/ />/ // / ryourne le nom de l'eqLogic(équipement) . Qu'on va pouvoir récupérer via $this->gyName() ;
```



.  

```
<label class="col-sm-3 control-label">{{Poramètre}}</ /label>
```

Por 

```
<label class="col-sm-3 control-label">{{Type de }}</ /label>
```

Importante : 

.

# 



On pourrait le laisser taper dans l'input « Type de  » : 



```
       <div class="form-group">
        <label class="col-sm-3 control-label">{{Type de }}</ /label>
        <div class="col-sm-3">
            <input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/ />
        </ /div>
    </ /div>
``` 



```
    <div class="form-group">
        <label class="col-sm-3 control-label" >{{ Type de  }}</ /label>
        <div class="col-sm-3">
            <select class="form-control eqLogicAttr" data-l1key="configuration" data-l2key="type ">
                <option value="aleatoire">{{Aleatoire}}</ /option>
                <option value="epicees">{{Coquin}}</ /option>
                <option value="tops">{{Best}}</ /option>
            </ /select>
        </ /div>
    </ /div>
```

Ici le poramètre « type» prendra la valeur du select choisi soit aleatoire ou epicees ou tops.




Buscar

```
$url = "http:/ // /www.viedemerde./ /aleatoire";
```



```
	$type = $this->gyConfiguration("type ");
		
			$type = "aleatoire"; / // /on prends le type aleatoire
		}		
		$url = "http:/ // /www.viedemerde./ /" .$type  ;
```	

.
