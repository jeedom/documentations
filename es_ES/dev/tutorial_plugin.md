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

. .

# Las órdenes

. 

. Elle sera de sous-type « String » car c'est une chaîne de caractère.

. 

-Créer un équipement « 1 » en cliquant sur le +. . . 

.

.



```
 {
	$info = $this->gyCmd(null, 'story');
	si (! {
		$info = new Cmd();
		$info->syName(__('Histoire', __FILE__));
	}
	$info->syLogicalIdentificación('story');
	$info->syEqLogic_Identificación($this->gyIdentificación());
	$info->syType('info');
	$info->sySubType('string');
	$info->save();	
	
	$reesh = $this->gyCmd(null, 'reesh');
	si (! {
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

-Créer un autre équipement « 2 » en cliquant sur le +. . . .

-Enregistrer le premier équipement « 1 » pour créer les commandes. .

.

![image](images/ /tutorial__cmd1.png)

..

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

..

```
función addCmdToTable (_cmd) {
    si (!issy (_cmd)) {
        var _cmd = {configuración: {}};
    }
    si (!issy (_cmd.configuration)) {
        
    }
    .
    
    :
     : 
    
    
    <html> tr + = &#39;.tipo) + &#39;">&#39; + jeedom.cmd.availableType () + &#39;&#39;;
    <html> tr + = &#39;.subType) + &#39;">&#39;;
    
    
    si (es_numeric (_cmd. {
        
        tr + = &#39; <a class="btn btn-default btn-xs cmdAction" data-action="test"><i class="fa fa-rss"></ /i> {{Test}}</ /a> &#39;;
    }
    
    
    
    $('#table_cmd tbody').append(tr);
    $('#table_cmd tbody tr:last').syValues(_cmd, '.cmdAttr');
    si (issy (_cmd.tipo)) {
        $('#table_cmd tbody tr:last .cmdAttr[data-l1key=type]').value(init(_cmd.tipo));
    }
    jeedom.cmd.changeType ($ (&#39;# table_cmd tbody tr:last &#39;), init (_cmd.subType));
}
```

. 

.

. ..

```
<th>{{Nombre}}</ /th><th>{{Type}}</ /th><th>{{Configuration}}</ /th><th>{{Action}}</ /th>
```

.

```
    <html> tr + = &#39;.subType) + &#39;">&#39;;
    
    
    si (es_numeric (_cmd. {
```

.

```
    <html> tr + = &#39;.subType) + &#39;">&#39;;
    
    
    
   
   		
    
    si (es_numeric (_cmd. {
```

. 

```
<a class="btn btn-success btn-sm cmdAction pull-right" data-action="add" style="margin-top:5px;"><i class="fa fa-plus-circle"></ /i> {{Commandes}}</ /a><br/ /><br/ />
```



```
<a class="btn btn-success btn-sm cmdAction pull-left" data-action="add" style="margin-top:5px;"><i class="fa fa-plus-circle"></ /i> {{Commandes}}</ /a><br/ /><br/ />
```

.. 

![image](images/ /tutorial__cmd2.png)

.


# 

.

```
$url = "http:/ // /www.viedemerde./ /aleatoire";
$data = file_gy_contents($url);
@$dom = new OMocument();

$dom->loadHTML('<?xml encoding="UTF-8">' .$data);

$xpath = new OMXPath($dom);
$divs = $xpath->query('/ // /article[@class="art-panel col-xs-12"]/ // /div[@class="panel-content"]/ // /p/ // /a');

```

.

```
	 {
		$url = "http:/ // /www.viedemerde./ /aleatoire";
		$data = file_gy_contents($url);
		@$dom = new OMocument();
		
		$dom->loadHTML($data);
		
		$xpath = new OMXPath($dom);
		$divs = $xpath->query('/ // /article[@class="art-panel col-xs-12"]/ // /div[@class="panel-content"]/ // /p/ // /a');
		
	}
```	

. 
. 

```
función pública ejecutar ($ _ options = array ()) {
		
        
 }
```

C'est ici qu'on va définir ce qu'il va se passer quand on lance la commande « Raaîchir ». 

On vérifie le logicalIdentificación de la commande lancée y si « reesh » on lance les actions

```
 {				
	':  . 
	
	
}
```

 . 

```
$eqlogic = $this->gyEqLogic(); / // / Récupération de l'eqlogic
$info = $eqlogic-> randomVdm() ; / // /Lance la fonction y stocke le résultat dans la variable $info
```

On my à jour la commande « story » avec la variable $info. 

```
$eqlogic->checkAndUpdateCmd('story', $info);
```



```
    función pública ejecutar ($ _ options = array ()) {
		$eqlogic = $this->gyEqLogic(); / // /récupère l'éqlogic de la commande $this
		 			
			':  . 
				$info = $eqlogic->randomVdm(); 	/ // /On lance la fonction randomVdm() pour récupérer une  y on la stocke dans la variable $info
				$eqlogic->checkAndUpdateCmd('story', $info); / // / on my à jour la commande avec le LogicalIdentificación "story"  de l'eqlogic 
				
		}
    }
```

. Puis la commande « Histoire » qui doit être à jour.

. 

 

.

# 

. Si vous cliquer sur la commande « reesh » , la commande « story » se my à jour mais sinon rien. 

. . .

 : 

 : 

- cron : 
- Cron5 : 
- Cron15 : 
- Cron30 : 
- CronHourly : 
- Cronaily : 

. .

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
			$eqLogics = array(yo::byIdentificación($_eqLogic_;
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
		si (! {
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
