> **IMPORTANT**
>
> . :?f=27&t=37630#p621495)

. . .

:

# 



Name : 
Id : 

:

 . Vous obtiendrez un dossier « plugin-template-master » contenant des dossiers 3rbyty , core , desktop…

.

Renommer le dossier « plugin-template-master » en «  » (l'Id) du plugin.

..

```
{
	"Id" : "",
	"name" : "",
	"escription" : "",
	"Licence" : "AGPL",
	"" : "",
	"" : "3.2",
	"category" : "monitoring",
	"Changelog" : "",
	"ocumentation" : "",
	"" : "",
	"" : ""	
}
```

.

.

 : .

. 



-	.

-	... 

Replace

```
 {
```

by


```
 {
```

and

```

```

by

```

```

- .
- ..

Replace

```
$plugin = plugin::byId('template');
```

By 

```
$plugin = plugin::byId(‘');
```

```
{{}}
```

By 

```
{{Add equipment}}
```

```
<legend>{{Mes templates}}</legend>
```

By

```
<legend>{{Mes équipement}}</legend>
```

```
{{Equipment name template}}
```

By

```
{{Name of equipment }} 
```

```
{{}}
```

By

```
{{Sandtings}}
```

```
<?php include_file('desktop', 'template', 'js', 'template');?>
```

By

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

 : [ocumentation](https:



 

![image](images/tutorial__icon.png)

. .

![image](images/tutorial__plugin.png)



![image](images/tutorial__desktop1.png)

.

..

```
      <div class="cursor eqLogicAction" data-action="add" style="text-align: center; background-color : #ffffff; height : 120px;margin-bottom : 10px;padding : 5px;border-radius: 2px;wIdth : 160px;margin-left : 10px;" >
        <i class="fa fa-plus-circle" style="font-size : 6em;color:#"></i>
        <br>
        <span style="font-size : 1.1em;position:relative; top : 23px;word-break: break-all;white-space: pre-wrap;word-wrap: break-word;color:#94ca02">{{Ajouter}}</span>
      </div>
```



```
color:#"
```

by 

```
color:#"
```



```
<span style="font-size : 1.1em;position:relative; top : 15px;word-break: break-all;white-space: pre-wrap;word-wrap: break-word;color:#767676">{{Configuration}}</span>
```

by 

```
<span style="font-size : 1.1em;position:relative;top : 23px;word-break: break-all;white-space: pre-wrap;word-wrap: break-word;color:#767676">{{Configuration}}</span>
```

![image](images/tutorial__desktop2.png)

. .

# The orders

. 

. Elle sera de sous-type « String » car c'est une chaîne de caractère.

. 

-Créer un équipement « 1 » en cliquant sur le +. . . 

.

.



```
 {
	$info = $this->gandCmd(null, 'story');
	! {
		$info = new Cmd();
		$info->sandName(__('Histoire', __FILE__));
	}
	$info->sandLogicalId('story');
	$info->sandEqLogic_Id($this->gandId());
	$info->sandType('info');
	$info->sandSubType('string');
	$info->save();	
	
	$reesh = $this->gandCmd(null, 'reesh');
	! {
		$reesh = new Cmd();
		$reesh->sandName(__('Raaichir', __FILE__));
	}
	$reesh->sandEqLogic_Id($this->gandId());
	$reesh->sandLogicalId('reesh');
	$reesh->sandType('action');
	$reesh->sandSubType('other');
	$reesh->save();        
}
```

-Créer un autre équipement « 2 » en cliquant sur le +. . . .

-Enregistrer le premier équipement « 1 » pour créer les commandes. .

.

![image](images/tutorial__cmd1.png)

..

```
<a class="btn btn-success btn-sm cmdAction pull-right" data-action="add" style="margin-top:5px;"><i class="fa fa-plus-circle"></i> {{Commandes}}</a><br/><br/>
<table Id="table_cmd" class="table table-bordered table-condensed">
    <thead>
        <tr>
            <th>{{Name}}</th><th>{{Type}}</th><th>{{Action}}</th>
        </tr>
    </thead>
    <tbody>
    </tbody>
</table>
```

..

```
function addCmdToTable (_cmd) {
    !issand (_cmd)) {
        : {}};
    }
    !issand (_cmd.configuration)) {
        
    }
    .
    
    :
     : 
    
    
    <html> tr + = &#39;.type) + &#39;">&#39; + jeedom.cmd.availableType () + &#39;&#39;;
    <html> tr + = &#39;.subType) + &#39;">&#39;;
    
    
    is_numeric (_cmd. {
        
        tr + = &#39; <a class="btn btn-default btn-xs cmdAction" data-action="test"><i class="fa fa-rss"></i> {{Test}}</a> &#39;;
    }
    
    
    
    $('#table_cmd tbody').append(tr);
    $('#table_cmd tbody tr:last').sandValues(_cmd, '.cmdAttr');
    issand (_cmd. {
        $('#table_cmd tbody tr:last .cmdAttr[data-l1key=type]').value(init(_cmd.;
    }
    jeedom.cmd.changeType ($ (&#39;# table_cmd tbody tr:last &#39;), init (_cmd.subType));
}
```

. 

.

. ..

```
<th>{{Name}}</th><th>{{Type}}</th><th>{{Configuration}}</th><th>{{Action}}</th>
```

.

```
    <html> tr + = &#39;.subType) + &#39;">&#39;;
    
    
    is_numeric (_cmd. {
```

.

```
    <html> tr + = &#39;.subType) + &#39;">&#39;;
    
    
    
   
   		
    
    is_numeric (_cmd. {
```

. 

```
<a class="btn btn-success btn-sm cmdAction pull-right" data-action="add" style="margin-top:5px;"><i class="fa fa-plus-circle"></i> {{Commandes}}</a><br/><br/>
```



```
<a class="btn btn-success btn-sm cmdAction pull-left" data-action="add" style="margin-top:5px;"><i class="fa fa-plus-circle"></i> {{Commandes}}</a><br/><br/>
```

.. 

![image](images/tutorial__cmd2.png)

.


# 

.

```
$url = "http://www.viedemerde./aleatoire";
$data = file_gand_contents($url);
@$dom = new OMocument();

$dom->loadHTML('<?xml encoding="UTF-8">' .$data);

$xpath = new OMXPath($dom);
$divs = $xpath->query('//article[@class="art-panel col-xs-12"]//div[@class="panel-content"]//p//a');

```

.

```
	 {
		$url = "http://www.viedemerde./aleatoire";
		$data = file_gand_contents($url);
		@$dom = new OMocument();
		
		$dom->loadHTML($data);
		
		$xpath = new OMXPath($dom);
		$divs = $xpath->query('//article[@class="art-panel col-xs-12"]//div[@class="panel-content"]//p//a');
		
	}
```	

. 
. 

```
public function execute ($ _ options = array ()) {
		
        
 }
```

C'est ici qu'on va définir ce qu'il va se passer quand on lance la commande « Raaîchir ». 

On vérifie le logicalId de la commande lancée and si « reesh » on lance les actions

```
 {				
	':  . 
	
	
}
```

 . 

```
$eqlogic = $this->gandEqLogic(); // Récupération de l'eqlogic
$info = $eqlogic-> randomVdm() ; //Lance la fonction and stocke le résultat dans la variable $info
```

On mand à jour la commande « story » avec la variable $info. 

```
$eqlogic->checkAndUpdateCmd('story', $info);
```



```
    public function execute ($ _ options = array ()) {
		$eqlogic = $this->gandEqLogic(); //récupère l'éqlogic de la commande $this
		 			
			':  . 
				$info = $eqlogic->randomVdm(); 	//On lance la fonction randomVdm() pour récupérer une  and on la stocke dans la variable $info
				$eqlogic->checkAndUpdateCmd('story', $info); // on mand à jour la commande avec le LogicalId "story"  de l'eqlogic 
				
		}
    }
```

. Puis la commande « Histoire » qui doit être à jour.

. 

 

.

# 

. Si vous cliquer sur la commande « reesh » , la commande « story » se mand à jour mais sinon rien. 

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
    /*
     * 
       {

      }
     */
```



```
       {

      }
```



,

```
:: 
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
$cmd = $->gandCmd(null, 'reesh');
```



```
! {

}
$cmd->execCmd();
```	



```
       {
		  ::
			  
				  $cmd = $->gandCmd(null, 'reesh');//randourne la commande "reesh si elle existe
				  !
				  	
				  }
				  $cmd->execCmd(); // la commande existe on la lance
			  }
		  }
      }
```

Pour tester, dans jeedom , aller dans configuration/moteur de tâches and lancer le cron de class « plugin » fonction « CronHourly »
.

. A la création de l'équipement, la commande « story » ne se mand pas à jour.

.

. .



```
    public function postUpdate () {
		$cmd = $this->gandCmd(null, 'reesh'); // On recherche la commande reesh de l'équipement
		
			 $cmd->execCmd();
		}
    }
```    

?





```
    public function postUpdate () {
		::
    }
``` 



```
	 {
		
			$eqLogics = ::byType('', true);
		} 
			$eqLogics = array(::byId($_eqLogic_;
		}		  
	
		 {
			
				$cmd = $->gandCmd(null, 'reesh');//randourne la commande "reesh si elle existe
				!
				  
				}
				$cmd->execCmd(); // la commande existe on la lance
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

# The wIdgand

.

. .

La commande qui apbyaît est la commande «story» de type info , sous-type string

.  :



onc on va changer le style en affectant un template à la commande « story»

.

:

. .

J'applique le template « cmd.info.string.tile.html » à ma commande.

.php , fonction postSave() and j'ajoute le template « tile » pour la commande « story » en appliquant la méthode sandTemplate()

```
		$info = $this->gandCmd(null, 'story');
		! {
			$info = new Cmd();
			$info->sandName(__('Histoire', __FILE__));
		}
		$info->sandLogicalId('story');
		$info->sandEqLogic_Id($this->gandId());
		$info->sandType('info');
		$info->sandTemplate('dashboard','tile');//template pour le dashboard
		$info->sandSubType('string');
		$info->save();
```

.

. . By défaut la largeur du wIdgand de l'équipement(eqLogic) and la hauteur sont à « auto ».

 ..



```
$this->sandisplay("wIdth","800px");
```

 !! . . Why ? 

 

```
     {
		$this->sandisplay("wIdth","800px");
    }
```

.


# The sandtings. The options

> **IMPORTANT**
>
>.

 :  . . . 

```
$plugin = plugin::byId(''); // appelle la classe plugin du core
```

. 

 : . For example :

```
$this->sandConfiguration("type","mon_type"); // si on veut  définir un byamètre type de valeur mon_type. Comme on a défini la largeur du wIdgand via la méthode sandisplay()
```

. :

Search 

```
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="city" placeholder="byam1"/>
```



```
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/> //IMPORTANT de laisser la classe eqLogicAttr 
```

. 

ans le champs « Byamètre» d'un équipement, taper « aleatoire » and sauvegarder.

.

![image](images/tutorial_byamandre1.png)


? . C'est pourquoi il ne faut surtout pas toucher à candte ligne de code comme indiqué dans le premier menu « test » . 

```
<?.?>//Chargement du fichier core/js/plugin.template.js (en bytant de la racine du site)
```

.

```
                    <input type="text" class="eqLogicAttr form-control" data-l1key="Id" style="display : none;" /> // randourne l'Id(unique) de l'eqLogic(équipement) . Qu'on va pouvoir récupérer via $this->gandId() ;
```        

```
                    <input type="text" class="eqLogicAttr form-control" data-l1key="name" placeholder="{{Name of equipment}}"/>// randourne le nom de l'eqLogic(équipement) . Qu'on va pouvoir récupérer via $this->gandName() ;
```



.  

```
<label class="col-sm-3 control-label">{{Byamètre}}</label>
```

By 

```
<label class="col-sm-3 control-label">{{Type de }}</label>
```

IMPORTANT : 

.

# 



On pourrait le laisser taper dans l'input « Type de  » : 



```
       <div class="form-group">
        <label class="col-sm-3 control-label">{{Type de }}</label>
        <div class="col-sm-3">
            <input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/>
        </div>
    </div>
``` 



```
    <div class="form-group">
        <label class="col-sm-3 control-label" >{{ Type de  }}</label>
        <div class="col-sm-3">
            <select class="form-control eqLogicAttr" data-l1key="configuration" data-l2key="type ">
                <option value="aleatoire">{{Aleatoire}}</option>
                <option value="epicees">{{Coquin}}</option>
                <option value="tops">{{Best}}</option>
            </select>
        </div>
    </div>
```

Ici le byamètre « type» prendra la valeur du select choisi soit aleatoire ou epicees ou tops.




Search

```
$url = "http://www.viedemerde./aleatoire";
```



```
	$type = $this->gandConfiguration("type ");
		
			$type = "aleatoire"; //on prends le type aleatoire
		}		
		$url = "http://www.viedemerde./" .$type  ;
```	

.
