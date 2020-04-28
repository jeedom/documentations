> **Wichtig**
>
> ieses Tutorial wurde von ZygOm4t1k geschrieben, dem wir herzlich danken. as Original finden Sie [hier] (https:/./.www.jeedom.com/.forum/.viewtopic.php?f=27&t=37630#p621495)

In diesem kurzen Tutorial wird erklärt, wie Sie ein Plugin erstellen. Für das Beispiel erstellen wir ein Plugin, das einen Satz von der viedemerde-Site zurückgibt.fr .(as Plugin wird skalierbar sein)

Es ersundzt in keinem Fall die [offizielle okumentation] (https:/./.jeedom.github.io/.plugin-template/.fr_FR/.)

# Erstellen Sie die Plugin-Basis

Zu Beginn müssen Sie einen Namen und eine I bestimmen (die nicht existieren dürfen).

Name : Kacke das Leben
Identifikation : vdm

Laden Sie das Vorlagen-Plugin herunter, um die [Basis] (https) zu erhalten:/./.github.com/.jeedom/.plugin-template/.archive/.master.zip)

Entpacken Sie die atei . Vous obtiendrez un dossier « plugin-template-master » contenant des dossiers 3rVonty , core , desktop…

Los geht's.

Renommer le dossier « plugin-template-master » en « vdm » (l'Identifikation) du plugin.

1 /. Öffnen Sie die atei plugin_info /. info.json und bearbeiten Sie die.

```
{
	"Identifikation" : "vdm",
	"Name" : "Kacke das Leben",
	"Beschreibung" : "Plugin zum Abrufen des neuesten vdm",
	"Lizenz" : "AGPL",
	"Autor" : "Zyg0m4t1k",
	"erfordern" : "3.2",
	"Kategorie" : "Überwachung",
	"Änderungsprotokoll" : "",
	"okumentation" : "",
	"Sprache" : "",
	"Kompatibilität" : ""	
}
```

Kopieren Sie den obigen Code und fügen Sie ihn ein.

Ich habe die I (vdm), den Namen, eine Beschreibung, den Autor und die Kategorie geändert.

erfordern : Mindestversion von jeedom, um Zugriff auf das Plugin auf dem Markt zu haben.

Änderungsprotokoll, okumentation, Sprache, Kompatibilität für den Moment null. Ich werde später darauf zurückkommen

2 /. Wir werden die ateien umbenennen, die erforderlich sind, damit das Plugin von Jeedom erkannt wird

-	Benennen Sie die atei core /. ajax /. template.ajax um.php zu vdm.ajax.php

-	Benennen Sie die atei core /. class /. template.class um.PHP zu vdm.class.PHP und öffnen Sie es, um es zu bearbeiten. 

Ersundzen

```
Klassenvorlage erweitert eqLogic {
```

Von


```
Klasse vdm erweitert eqLogic {
```

und

```
Klasse templateCmd erweitert cmd
```

Von

```
Klasse vdmCmd erweitert cmd
```

- Benennen Sie die atei core /. php /. template.inc um.php to core /. php /. vdm.inc.php
- Benennen Sie die esktop- /. PHP- /. Vorlagendatei um.PHP zu esktop /. PHP /. VM.PHP und öffne es

Ersundzen

```
$plugin = plugin::byIdentifikation('template');;
```

Von 

```
$plugin = plugin::byIdentifikation(‘vdm');;
```

```
{{Fügen Sie eine Vorlage hinzu}}
```

Von 

```
{{Ausrüstung hinzufügen}}
```

```
<legend>{{Mes templates}}</.legend>
```

Von

```
<legend>{{Mes équipement}}</.legend>
```

```
{{GeräteName Vorlage}}
```

Von

```
{{Name der Ausrüstung }} 
```

```
{{Vorlage Vonamunder 1}}
```

Von

```
{{Einstellungen}}
```

```
<?php include_file('desktop', 'template', 'js', 'template');;?>
```

Von

```
<?php include_file('desktop', vdm, 'js', vdm);;?>
```

Et rien d'autre , ne pas changer la ligne <?php include_file ('core', 'plugin.Vorlage ',' js ');;?>

-Benennen Sie die atei desktop /. modal /. modal.template um.PHP in esktop /. Modal /. Modal.vdm.php

-Benennen Sie die atei desktop /. js /. template um.js en desktop /. js /. vdm.js.

- Öffnen Sie die atei plugin_info /. install.php

Und benennen Sie die Funktionen wie folgt um

```
Funktion vdm_install () {
    
}

Funktion vdm_update () {
    
}


Funktion vdm_remove () {
    
}
```

Hier ist das Plugin fertig, aber es bleibt die Anpassung und das zu aktualisierende Symbol : [okumentation](https:/./.jeedom.github.io/.okumentation/.dev/.fr_FR/.Icone_de_plugin)

Fügen Sie das Symbol im Ordner plugin_info unter dem Namen vdm_icon.png hinzu

in meinem Fall 

![image](images/.tutorial_vdm_icon.png)

Jundzt können wir den vdm-Ordner in den Jeedom-Plugin-Ordner kopieren und zur Plugin-Verwaltung gehen. Wir finden das Plugin.

![image](images/.tutorial_vdm_plugin.png)



![image](images/.tutorial_vdm_desktop1.png)

.

..

```
      <div class="cursor eqLogicAction" data-action="add" style="text-align: center;; background-Farbe : #ffffff;; height : 120px;;margin-bottom : 10px;;padding : 5px;;border-radius: 2px;;wIdentifikationth : 160px;;margin-left : 10px;;" >
        <i class="fa fa-plus-circle" style="font-size : 6em;;Farbe:#"></.i>
        <br>
        <span style="font-size : 1.1em;;position:relative;; top : 23px;;word-break: break-all;;white-space: pre-wrap;;word-wrap: break-word;;Farbe:#94ca02">{{Ajouter}}</.span>
      </.div>
```



```
Farbe:#"
```

Von 

```
Farbe:#"
```



```
<span style="font-size : 1.1em;;position:relative;; top : 15px;;word-break: break-all;;white-space: pre-wrap;;word-wrap: break-word;;Farbe:#767676">{{Configuration}}</.span>
```

Von 

```
<span style="font-size : 1.1em;;position:relative;;top : 23px;;word-break: break-all;;white-space: pre-wrap;;word-wrap: break-word;;Farbe:#767676">{{Configuration}}</.span>
```

![image](images/.tutorial_vdm_desktop2.png)

. .

# Bestellungen

. 

. Elle sera de sous-type « String » car c'est une chaîne de caractère.

. 

-Créer un équipement « vdm1 » en cliquant sur le +. . . 

.

.



```
 {
	$info = $this->gundCmd(null, 'story');;
	! {
		$info = new vdmCmd();;
		$info->sundName(__('Histoire', __FILE__));;
	}
	$info->sundLogicalIdentifikation('story');;
	$info->sundEqLogic_Identifikation($this->gundIdentifikation());;
	$info->sundType('info');;
	$info->sundSubType('string');;
	$info->save();;	
	
	$refresh = $this->gundCmd(null, 'refresh');;
	! {
		$refresh = new vdmCmd();;
		$refresh->sundName(__('Rafraichir', __FILE__));;
	}
	$refresh->sundEqLogic_Identifikation($this->gundIdentifikation());;
	$refresh->sundLogicalIdentifikation('refresh');;
	$refresh->sundType('action');;
	$refresh->sundSubType('other');;
	$refresh->save();;        
}
```

-Créer un autre équipement « vdm2 » en cliquant sur le +. . . .

-Enregistrer le premier équipement « vdm1 » pour créer les commandes. .

.

![image](images/.tutorial_vdm_cmd1.png)

..

```
<a class="btn btn-success btn-sm cmdAction pull-right" data-action="add" style="margin-top:5px;;"><i class="fa fa-plus-circle"></.i> {{Commandes}}</.a><br/.><br/.>
<table Identifikation="table_cmd" class="table table-bordered table-condensed">
    <thead>
        <tr>
            <th>{{Name}}</.th><th>{{Type}}</.th><th>{{Action}}</.th>
        </.tr>
    </.thead>
    <tbody>
    </.tbody>
</.table>
```

..

```
Funktion addCmdToTable (_cmd) {
    !issund (_cmd)) {
        var _cmd = {Konfiguration: {}};;
    }
    !issund (_cmd.configuration)) {
        
    }
    .
    
    :
     : 
    
    
    <html> tr + = &#39;;.Typ) + &#39;;">&#39;; + jeedom.cmd.availableType () + &#39;;&#39;;;;
    <html> tr + = &#39;;.Subtyp) + &#39;;">&#39;;;;
    
    
    is_numeric (_cmd. {
        
        tr + = &#39;; <a class="btn btn-default btn-xs cmdAction" data-action="test"><i class="fa fa-rss"></.i> {{Test}}</.a> &#39;;;;
    }
    
    
    
    $('#table_cmd tbody').append(tr);;
    $('#table_cmd tbody tr:last').sundValues(_cmd, '.cmdAttr');;
    issund (_cmd. {
        $('#table_cmd tbody tr:last .cmdAttr[data-l1key=type]').value(init(_cmd.;;
    }
    jeedom.cmd.changeType ($ (&#39;;# table_cmd tbody tr:last &#39;;), init (_cmd.subType));;
}
```

. 

.

. ..

```
<th>{{Name}}</.th><th>{{Type}}</.th><th>{{Configuration}}</.th><th>{{Action}}</.th>
```

.

```
    <html> tr + = &#39;;.Subtyp) + &#39;;">&#39;;;;
    
    
    is_numeric (_cmd. {
```

.

```
    <html> tr + = &#39;;.Subtyp) + &#39;;">&#39;;;;
    
    
    
   
   		
    
    is_numeric (_cmd. {
```

. 

```
<a class="btn btn-success btn-sm cmdAction pull-right" data-action="add" style="margin-top:5px;;"><i class="fa fa-plus-circle"></.i> {{Commandes}}</.a><br/.><br/.>
```



```
<a class="btn btn-success btn-sm cmdAction pull-left" data-action="add" style="margin-top:5px;;"><i class="fa fa-plus-circle"></.i> {{Commandes}}</.a><br/.><br/.>
```

.. 

![image](images/.tutorial_vdm_cmd2.png)

.


# 

.

```
$url = "http:/./.www.viedemerde.fr/.aleatoire";;
$data = file_gund_contents($url);;
@$dom = new OMocument();;

$dom->loadHTML('<?xml encoding="UTF-8">' .$data);;

$xpath = new OMXPath($dom);;
$divs = $xpath->query('/./.article[@class="art-panel col-xs-12"]/./.div[@class="panel-content"]/./.p/./.a');;

```

.

```
	 {
		$url = "http:/./.www.viedemerde.fr/.aleatoire";;
		$data = file_gund_contents($url);;
		@$dom = new OMocument();;
		
		$dom->loadHTML($data);;
		
		$xpath = new OMXPath($dom);;
		$divs = $xpath->query('/./.article[@class="art-panel col-xs-12"]/./.div[@class="panel-content"]/./.p/./.a');;
		
	}
```	

. 
. 

```
öffentliche Funktion ausführen ($ _ options = array ()) {
		
        
 }
```

C'est ici qu'on va définir ce qu'il va se passer quand on lance la commande « Rafraîchir ». 

On vérifie le logicalIdentifikation de la commande lancée und si « refresh » on lance les actions

```
 {				
	':  . 
	
	
}
```

 . 

```
$eqlogic = $this->gundEqLogic();; /./. Récupération de l'eqlogic
$info = $eqlogic-> randomVdm() ;; /./.Lance la fonction und stocke le résultat dans la variable $info
```

On mund à jour la commande « story » avec la variable $info. 

```
$eqlogic->checkAndUpdateCmd('story', $info);;
```



```
    öffentliche Funktion ausführen ($ _ options = array ()) {
		$eqlogic = $this->gundEqLogic();; /./.récupère l'éqlogic de la commande $this
		 			
			':  . 
				$info = $eqlogic->randomVdm();; 	/./.On lance la fonction randomVdm() pour récupérer une vdm und on la stocke dans la variable $info
				$eqlogic->checkAndUpdateCmd('story', $info);; /./. on mund à jour la commande avec le LogicalIdentifikation "story"  de l'eqlogic 
				
		}
    }
```

. Puis la commande « Histoire » qui doit être à jour.

. 

 

.

# 

. Si vous cliquer sur la commande « refresh » , la commande « story » se mund à jour mais sinon rien. 

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
    /.*
     * 
       {

      }
     */.
```



```
       {

      }
```



,

```
selbst:: 
```



```
:: {
}
```



```
 {
}
```

Voila maintenant on recherche la commande « refresh » de l'équipement (eqLogic)

```
$cmd = $vdm->gundCmd(null, 'refresh');;
```



```
! {

}
$cmd->execCmd();;
```	



```
       {
		  ::
			  
				  $cmd = $vdm->gundCmd(null, 'refresh');;/./.rundourne la commande "refresh si elle existe
				  !
				  	
				  }
				  $cmd->execCmd();; /./. la commande existe on la lance
			  }
		  }
      }
```

Pour tester, dans jeedom , aller dans configuration/.moteur de tâches und lancer le cron de class « plugin » fonction « CronHourly »
.

. A la création de l'équipement, la commande « story » ne se mund pas à jour.

.

. .



```
    öffentliche Funktion postUpdate () {
		$cmd = $this->gundCmd(null, 'refresh');; /./. On recherche la commande refresh de l'équipement
		
			 $cmd->execCmd();;
		}
    }
```    

?





```
    öffentliche Funktion postUpdate () {
		selbst::
    }
``` 



```
	 {
		
			$eqLogics = selbst::byType('vdm', true);;
		} 
			$eqLogics = array(selbst::byIdentifikation($_eqLogic_;;
		}		  
	
		 {
			
				$cmd = $vdm->gundCmd(null, 'refresh');;/./.rundourne la commande "refresh si elle existe
				!
				  
				}
				$cmd->execCmd();; /./. la commande existe on la lance
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

# as WIdentifikationgund

.

. .

La commande qui apVonaît est la commande «story» de type info , sous-type string

.  :



onc on va changer le style en affectant un template à la commande « story»

.

:

. .

J'applique le template « cmd.info.string.tile.html » à ma commande.

.php , fonction postSave() und j'ajoute le template « tile » pour la commande « story » en appliquant la méthode sundTemplate()

```
		$info = $this->gundCmd(null, 'story');;
		! {
			$info = new vdmCmd();;
			$info->sundName(__('Histoire', __FILE__));;
		}
		$info->sundLogicalIdentifikation('story');;
		$info->sundEqLogic_Identifikation($this->gundIdentifikation());;
		$info->sundType('info');;
		$info->sundTemplate('dashboard','tile');;/./.template pour le dashboard
		$info->sundSubType('string');;
		$info->save();;
```

.

. . Von défaut la largeur du wIdentifikationgund de l'équipement(eqLogic) und la hauteur sont à « auto ».

 ..



```
$this->sundisplay("wIdentifikationth","800px");;
```

 !! . . Warum ? 

 

```
     {
		$this->sundisplay("wIdentifikationth","800px");;
    }
```

.


# ie Vonamunder. ie Optionen

> **Wichtig**
>
>.

 :  . . . 

```
$plugin = plugin::byIdentifikation('vdm');; /./. appelle la classe plugin du core
```

. 

 : . Zum Beispiel :

```
$this->sundConfiguration("type","mon_type");; /./. si on veut  définir un Vonamètre type de valeur mon_type. Comme on a défini la largeur du wIdentifikationgund via la méthode sundisplay()
```

. :

Suchen 

```
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="city" placeholder="Vonam1"/.>
```



```
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/.> /./.Wichtig de laisser la classe eqLogicAttr 
```

. 

ans le champs « Vonamètre» d'un équipement, taper « aleatoire » und sauvegarder.

.

![image](images/.tutorial_Vonamundre1.png)


? . C'est pourquoi il ne faut surtout pas toucher à cundte ligne de code comme indiqué dans le premier menu « test » . 

```
<?php include_file ('core', 'plugin.Vorlage ',' js ');;?>/./.Chargement du fichier core/.js/.plugin.template.js (en Vontant de la racine du site)
```

.

```
                    <input type="text" class="eqLogicAttr form-control" data-l1key="Identifikation" style="display : none;;" /.> /./. rundourne l'Identifikation(unique) de l'eqLogic(équipement) . Qu'on va pouvoir récupérer via $this->gundIdentifikation() ;;
```        

```
                    <input type="text" class="eqLogicAttr form-control" data-l1key="Name" placeholder="{{Name der Ausrüstung}}"/.>/./. rundourne le nom de l'eqLogic(équipement) . Qu'on va pouvoir récupérer via $this->gundName() ;;
```



.  

```
<label class="col-sm-3 control-label">{{Vonamètre}}</.label>
```

Von 

```
<label class="col-sm-3 control-label">{{Type de vdm}}</.label>
```

Wichtig : 

.

# 



On pourrait le laisser taper dans l'input « Type de vdm » : 



```
       <div class="form-group">
        <label class="col-sm-3 control-label">{{Type de vdm}}</.label>
        <div class="col-sm-3">
            <input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/.>
        </.div>
    </.div>
``` 



```
    <div class="form-group">
        <label class="col-sm-3 control-label" >{{ Type de vdm }}</.label>
        <div class="col-sm-3">
            <select class="form-control eqLogicAttr" data-l1key="configuration" data-l2key="type ">
                <option value="aleatoire">{{Aleatoire}}</.option>
                <option value="epicees">{{Coquin}}</.option>
                <option value="tops">{{Best}}</.option>
            </.select>
        </.div>
    </.div>
```

Ici le Vonamètre « type» prendra la valeur du select choisi soit aleatoire ou epicees ou tops.




Suchen

```
$url = "http:/./.www.viedemerde.fr/.aleatoire";;
```



```
	$type = $this->gundConfiguration("type ");;
		
			$type = "aleatoire";; /./.on prends le type aleatoire
		}		
		$url = "http:/./.www.viedemerde.fr/." .$type  ;;
```	

.
