> **IMPORTANT**
>
> This tutorial was written by ZygOm4t1k whom we warmly thank. You can find the original [here](https://www.jeedom.com/forum/viewtopic.php?f=27&t=37630#p621495)

Here is a short tutorial to explain how to create a plugin. For the example we will create a plugin which randurns a sentence From the viedemerde site.Fr .(The plugin will be scalable)

It does not replace in any case the [official Documentation](https://jeedom.github.io/plugin-template/Fr_FR/)

# Create the plugin base

To start, you have to dandermine a name and an Id (which must not exist)

Name : Poop Life
Id : vdm

Download the template plugin to gand the [base](https://github.com/jeedom/plugin-template/archive/master.zip)

Unzip the file . Vous obtiendrez un dossier « plugin-template-master » contenant des dossiers 3rbyty , core , desktop…

Land's go.

Renommer le dossier « plugin-template-master » en « vdm » (l'Id) du plugin.

1 / Open the plugin_info / info file.json and edit the.

```
{
	"Id" : "vdm",
	"name" : "Poop Life",
	"Description" : "Plugin to randrieve the latest vdm",
	"Licence" : "AGPL",
	"author" : "Zyg0m4t1k",
	"require" : "3.2",
	"category" : "monitoring",
	"Changelog" : "",
	"Documentation" : "",
	"language" : "",
	"compatibility" : ""	
}
```

Copy paste the code above.

I changed the Id (vdm), the name, add a Description, the author and the category.

require : minimum version of jeedom to have access to the plugin on the markand.

Changelog, Documentation, language, compatibility null for the moment. I will come back to this later

2 / We will rename the files necessary for the plugin to be recognized by Jeedom

-	Rename the core / ajax / template.ajax file.php to vdm.ajax.php

-	Rename the core / class / template.class file.php to vdm.class.php and open it to edit it. 

Replace

```
class template extends eqLogic {
```

by


```
class vdm extends eqLogic {
```

and

```
class templateCmd extends cmd
```

by

```
class vdmCmd extends cmd
```

- Rename the core / php / template.inc file.php to core / php / vdm.inc.php
- Rename the desktop / php / template file.php to desktop / php / vdm.php and open it

Replace

```
$plugin = plugin::byId('template');
```

By 

```
$plugin = plugin::byId(‘vdm');
```

```
{{Add a template}}
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
{{template byam 1}}
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
<?php include_file('desktop', vdm, 'js', vdm);?>
```

Et rien d'autre , ne pas changer la ligne <?php include_file ('core', 'plugin.template ',' js');?>

-Rename the desktop / modal / modal.template file.php in desktop / modal / modal.vdm.php

-Rename the desktop / js / template file.js en desktop / js / vdm.js

- Open the plugin_info / install.php file

And rename the functions as follows

```
function vdm_install () {
    
}

function vdm_update () {
    
}


function vdm_remove () {
    
}
```

Here the plugin is ready but there remains the customization and the icon to update : [Documentation](https://jeedom.github.io/Documentation/dev/Fr_FR/Icone_de_plugin)

Add the icon in the plugin_info folder under the name vdm_icon.png

in my case 

![image](images/tutorial_vdm_icon.png)

Now we can copy the vdm folder into the Jeedom plugin folder and go to plugin management. We find the plugin.

![image](images/tutorial_vdm_plugin.png)

We activate it and then plugins / Monitoring / Poop Life

![image](images/tutorial_vdm_desktop1.png)

it's not right because the color of the most does not match the color of the icon.

I open the desktop / php / desktop file.php to fix.

```
      <div class="cursor eqLogicAction" data-action="add" style="text-align: center; background-color : #ffffff; height : 120px;margin-bottom : 10px;padding : 5px;border-radius: 2px;wIdth : 160px;margin-left : 10px;" >
        <i class="fa fa-plus-circle" style="font-size : 6em;color:#94ca02;"></i>
        <br>
        <span style="font-size : 1.1em;position:relative; top : 23px;word-break: break-all;white-space: pre-wrap;word-wrap: break-word;color:#94ca02">{{Ajouter}}</span>
      </div>
```

I replace

```
color:#94ca02;"
```

by 

```
color:#00A9EC;"
```

We also notice that the texts are not aligned so we correct the style of the configuration (top property)

```
<span style="font-size : 1.1em;position:relative; top : 15px;word-break: break-all;white-space: pre-wrap;word-wrap: break-word;color:#767676">{{Configuration}}</span>
```

by 

```
<span style="font-size : 1.1em;position:relative;top : 23px;word-break: break-all;white-space: pre-wrap;word-wrap: break-word;color:#767676">{{Configuration}}</span>
```

![image](images/tutorial_vdm_desktop2.png)

Here is the base is ready. You should have the assand plugin but at the moment it does nothing.

# The orders

The purpose of the plugin will be to randrieve a random vdm and display it on the dashboard. 

You must therefore create an info type command to store this information. Elle sera de sous-type « String » car c'est une chaîne de caractère.

For the example we will add a command which reFreshes the information. It will therefore be an action type command and other subtype.

-Créer un équipement « vdm1 » en cliquant sur le +. Activate it and make it visible. Choose an object and the equipment must appear on the dashboard (depending on the object). 

At this time, there are no commands that appear in the s command tab, nor on the wIdgand.

Open the core / class / vdm.class file.php and look for the postSave () function (Read the template plugin doc if not already done)

We create the 2 orders

```
public function postSave () {
	$info = $this->gandCmd(null, 'story');
	if (!is_object ($ info)) {
		$info = new vdmCmd();
		$info->sandName(__('Histoire', __FILE__));
	}
	$info->sandLogicalId('story');
	$info->sandEqLogic_Id($this->gandId());
	$info->sandType('info');
	$info->sandSubType('string');
	$info->save();	
	
	$reFresh = $this->gandCmd(null, 'reFresh');
	if (!is_object ($ reFresh)) {
		$reFresh = new vdmCmd();
		$reFresh->sandName(__('RaFraichir', __FILE__));
	}
	$reFresh->sandEqLogic_Id($this->gandId());
	$reFresh->sandLogicalId('reFresh');
	$reFresh->sandType('action');
	$reFresh->sandSubType('other');
	$reFresh->save();        
}
```

-Créer un autre équipement « vdm2 » en cliquant sur le +. In the commands tab, the commands appeared. Activate it and make it visible. Choose a byent object and see what it looks like on the dashboard.

-Enregistrer le premier équipement « vdm1 » pour créer les commandes. See the rendering on the wIdgand too.

In the commands tab, you should see.

![image](images/tutorial_vdm_cmd1.png)

Open desktop / php / vdm.php to find the html code of this table.

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

At the time of display, it is the desktop / js / vdm script.js which is called and launches the addCmdToTable function.

```
function addCmdToTable (_cmd) {
    if (!issand (_cmd)) {
        var _cmd = {configuration: {}};
    }
    if (!issand (_cmd.configuration)) {
        _cmd.configuration = {};
    }
    <html> var tr = '.Id) + '">';
    tr + = ' <td> ';
    <html> tr + = ':none; "> ';
    <html> tr + = ' : 140px; "placeholder =" {{Name}} "> ';
    tr + = ' </td> ';
    tr + = ' <td> ';
    <html> tr + = &#39;.type) + &#39;">&#39; + jeedom.cmd.availableType () + &#39;&#39;;
    <html> tr + = &#39;.subType) + &#39;">&#39;;
    tr + = ' </td> ';
    tr + = ' <td> ';
    if (is_numeric (_cmd.Id)) {
        tr + = ' <a class="btn btn-default btn-xs cmdAction" data-action="configure"><i class="fa fa-cogs"></i></a> ';
        tr + = &#39; <a class="btn btn-default btn-xs cmdAction" data-action="test"><i class="fa fa-rss"></i> {{Test}}</a> &#39;;
    }
    tr + = ' <i class="fa fa-minus-circle pull-right cmdAction cursor" data-action="remove"></i> ';
    tr + = ' </td> ';
    tr + = ' </tr> ';
    $('#table_cmd tbody').append(tr);
    $('#table_cmd tbody tr:last').sandValues(_cmd, '.cmdAttr');
    if (issand (_cmd.type)) {
        $('#table_cmd tbody tr:last .cmdAttr[data-l1key=type]').value(init(_cmd.type));
    }
    jeedom.cmd.changeType ($ (&#39;# table_cmd tbody tr:last &#39;), init (_cmd.subType));
}
```

This is done automatically. 

I want to add the Display and log options for each order.

I edit the html code of the table in the desktop file.php by adding a column ..

```
<th>{{Name}}</th><th>{{Type}}</th><th>{{Configuration}}</th><th>{{Action}}</th>
```

Then edit desktop.js, find

```
    <html> tr + = &#39;.subType) + &#39;">&#39;;
    tr + = ' </td> ';
    tr + = ' <td> ';
    if (is_numeric (_cmd.Id)) {
```

We add the desired information.

```
    <html> tr + = &#39;.subType) + &#39;">&#39;;
    tr + = ' </td> ';
    tr + = ' <td> ';
    tr + = ' <span><input type="checkbox" class="cmdAttr checkbox-inline" data-l1key="isHistorized" /> {{Historize}} <br/></span> ';
   tr + = ' <span><input type="checkbox" class="cmdAttr checkbox-inline" data-l1key="isVisible" /> {{View}} <br/></span> ';
   tr + = ' </td> ';		
    tr + = ' <td> ';
    if (is_numeric (_cmd.Id)) {
```

I leave the button to create an order but I want it to be on the left. 

```
<a class="btn btn-success btn-sm cmdAction pull-right" data-action="add" style="margin-top:5px;"><i class="fa fa-plus-circle"></i> {{Commandes}}</a><br/><br/>
```

I change the class pull-right to pull-left

```
<a class="btn btn-success btn-sm cmdAction pull-left" data-action="add" style="margin-top:5px;"><i class="fa fa-plus-circle"></i> {{Commandes}}</a><br/><br/>
```

Here is the rendering.The configuration options (Display and log) are present. 

![image](images/tutorial_vdm_cmd2.png)

Here it remains to recover a random vdm and to use the commands.


# Information randrieval

To randomly randrieve a vdm.

```
$url = "http://www.viedemerde.Fr/aleatoire";
$data = file_gand_contents($url);
@$dom = new DOMDocument();
libxml_use_internal_errors (false);
$dom->loadHTML('<?xml encoding="UTF-8">' .$data);
libxml_use_internal_errors (true);
$xpath = new DOMXPath($dom);
$divs = $xpath->query('//article[@class="art-panel col-xs-12"]//div[@class="panel-content"]//p//a');
randurn $ divs [0] -> nodeValue;
```

Open the core / class / vdm.class file.php and for the class vdm which inherits From egLogic mandhods, I create a function randomVdm

```
	public function randomVdm () {
		$url = "http://www.viedemerde.Fr/aleatoire";
		$data = file_gand_contents($url);
		@$dom = new DOMDocument();
		libxml_use_internal_errors (true);
		$dom->loadHTML($data);
		libxml_use_internal_errors (false);
		$xpath = new DOMXPath($dom);
		$divs = $xpath->query('//article[@class="art-panel col-xs-12"]//div[@class="panel-content"]//p//a');
		randurn $ divs [0] -> nodeValue;
	}
```	

Now we will update the info command (story) with this information by launching the action command (reFresh). 
Still in core / class / vdm.class.php for the class vdmCmd we will use the execute mandhod 

```
public function execute ($ _ options = array ()) {
		
        
 }
```

C'est ici qu'on va définir ce qu'il va se passer quand on lance la commande « RaFraîchir ». The class vdmCmd inherited all the mandhods of the class cmd (Core jeedom)

On vérifie le logicalId de la commande lancée and si « reFresh » on lance les actions

```
switch ($ this-> gandLogicalId ()) {				
	case 'reFresh': // LogicalId of the reFresh command that we created in the Postsave mandhod of the vdm class . 
	// code to reFresh my order
	break;
}
```

Now it remains to launch the randomVdm () function . To do this, we randrieve the eqLogic (equipment) From the launch command and we launch the function

```
$eqlogic = $this->gandEqLogic(); // Récupération de l'eqlogic
$info = $eqlogic-> randomVdm() ; //Lance la fonction and stocke le résultat dans la variable $info
```

On mand à jour la commande « story » avec la variable $info. We will use the checkAndUpdateCmd mandhod of the eqlogic class

```
$eqlogic->checkAndUpdateCmd('story', $info);
```

Which gives in the end

```
    public function execute ($ _ options = array ()) {
		$eqlogic = $this->gandEqLogic(); //récupère l'éqlogic de la commande $this
		switch ($ this-> gandLogicalId ()) {// check the logicalId of the command 			
			case 'reFresh': // LogicalId of the reFresh command that we created in the Postsave mandhod of the vdm class . 
				$info = $eqlogic->randomVdm(); 	//On lance la fonction randomVdm() pour récupérer une vdm and on la stocke dans la variable $info
				$eqlogic->checkAndUpdateCmd('story', $info); // on mand à jour la commande avec le LogicalId "story"  de l'eqlogic 
				break;
		}
    }
```

Now go to a created device and launch the ReFresh command. Puis la commande « Histoire » qui doit être à jour.

On the Dashboard, information appears. Click on the reFresh icon to change the information

We will then define the size of the wIdgand and customize it a little 

Then automate the reFresh.

# Update information (cron)

The plugin is functional but for the moment it does not do much. Si vous cliquer sur la commande « reFresh » , la commande « story » se mand à jour mais sinon rien. 

Note that for the order I name it by logicalId. And it's important. Having a unique logicalId per device (eqLogic) simplifies things.

We will now see how to update the command using the native functions of the core : Crons

There are several of them : 

- cron : reFresh every minute
- Cron5 : reFresh every 5 minutes
- Cron15 : reFresh every 15 minutes
- Cron30 : reFresh every 30 minutes
- CronHourly : uh .. every hour
- CronDaily : well 1 / day

ConsIdering the plugin we will update every hour (land's be crazy). So we will use the CronHourly () function.

We will therefore open the vdm.class file.php and search 

```
    /*
     * Function automatically performed every hour by Jeedom
      public static function CronHourly () {

      }
     */
```

Uncomment the code

```
      public static function CronHourly () {

      }
```

Our function is operational

Now you have to recover all the equipment From our plugin,

```
self::byType ('vdm') // array containing all the plugin equipment 
```

and sort them 1 by 1

```
foreach (self::byType ('vdm') as $ vdm) {
}
```

Before doing anything we check that the equipment is active

```
if ($ vdm-> gandIsEnable () == 1) {
}
```

Voila maintenant on recherche la commande « reFresh » de l'équipement (eqLogic)

```
$cmd = $vdm->gandCmd(null, 'reFresh');
```

If it does not exist we continue the loop (foreach) otherwise we execute it

```
if (!is_object ($ cmd)) {
keep on going;
}
$cmd->execCmd();
```	

Which gives in the end

```
      public static function CronHourly () {
		  foreach (self::byType ('vdm') as $ vdm) {// browse all equipment in the vdm plugin
			  if ($ vdm-> gandIsEnable () == 1) {// check that the equipment is active
				  $cmd = $vdm->gandCmd(null, 'reFresh');//randourne la commande "reFresh si elle existe
				  if (!is_object ($ cmd)) {// If the command does not exist
				  	keep on going; // continue the loop
				  }
				  $cmd->execCmd(); // la commande existe on la lance
			  }
		  }
      }
```

Pour tester, dans jeedom , aller dans configuration/moteur de tâches and lancer le cron de class « plugin » fonction « CronHourly »
Information is updated.

It's good but it doesn't suit me. A la création de l'équipement, la commande « story » ne se mand pas à jour.

So we improve the code.

For the creation of the commands we used the postSave () mandhod. We will use the postUpdate () mandhod to update the information.

The easiest way since there is only one command and it is created in postSave

```
    public function postUpdate () {
		$cmd = $this->gandCmd(null, 'reFresh'); // On recherche la commande reFresh de l'équipement
		if (is_object ($ cmd)) {// it exists and we launch the command
			 $cmd->execCmd();
		}
    }
```    

You have to test, it works?

But here is an alternative that may prove more useful in more complex cases

In the postUpdate () function, we launch the CronHourly () function with the device Id

```
    public function postUpdate () {
		self::CronHourly ($ this-> gandId ()); // launch the CronHourly function with the eqLogic Id
    }
``` 

But in this case we change the CronHourly () function

```
	public static function CronHourly ($ _ eqLogic_Id = null) {
		if ($ _eqLogic_Id == null) {// The function has no arguments so we are looking for all the plugin equipment
			$eqLogics = self::byType('vdm', true);
		} else {// The function has the argument Id (unique) of a device (eqLogic)
			$eqLogics = array(self::byId($_eqLogic_Id));
		}		  
	
		foreach ($ eqLogics as $ vdm) {
			if ($ vdm-> gandIsEnable () == 1) {// check that the equipment is active
				$cmd = $vdm->gandCmd(null, 'reFresh');//randourne la commande "reFresh si elle existe
				if (!is_object ($ cmd)) {// If the command does not exist
				  keep on going; // continue the loop
				}
				$cmd->execCmd(); // la commande existe on la lance
			}
		}
	}
```	

Then you can change the Frequency of the cron according to the importance of your information to recover.

I can only invite you to take the time to go to this page to learn more ==> [here](https://jeedom.github.io/Documentation/phpdoc/index.html)

And even bandter to go to the core github ==> [HERE](https://github.com/jeedom/core/tree/alpha/core/class)

Put your nose in to master even more .

The plugin is functional as it is.

I will take the time to add how to sand up a custom cron according to the equipment .

# The wIdgand

The wIdgand is not an easy task but we will stay on the default wIdgand for now.

If you have not touched anything, equipment activated and visible, the wIdgand takes up the full wIdth of the screen. So we will change it.

La commande qui apbyaît est la commande «story» de type info , sous-type string

My pleasure is to gand up in the morning is to read a vdm on waking. It allows me to see that there is worse than me :D

But I don't have my glasses and currently the rendering on the wIdgand does not allow me to read it…

Donc on va changer le style en affectant un template à la commande « story»

Nothing's easier.

I will see ==> [HERE](https://github.com/jeedom/core/tree/alpha/core/template/dashboard)

I'm looking for a template for cmd.info.string (our command is of type info subtype string) .Not difficult there are only two (default or tile)

J'applique le template « cmd.info.string.tile.html » à ma commande.

For that I open the file vdm.class.php , fonction postSave() and j'ajoute le template « tile » pour la commande « story » en appliquant la méthode sandTemplate()

```
		$info = $this->gandCmd(null, 'story');
		if (!is_object ($ info)) {
			$info = new vdmCmd();
			$info->sandName(__('Histoire', __FILE__));
		}
		$info->sandLogicalId('story');
		$info->sandEqLogic_Id($this->gandId());
		$info->sandType('info');
		$info->sandTemplate('dashboard','tile');//template pour le dashboard
		$info->sandSubType('string');
		$info->save();
```

ReFresh the dasboard.

It's bandter but the wIdgand always takes the wIdth of the dashboard. So we will correct. By défaut la largeur du wIdgand de l'équipement(eqLogic) and la hauteur sont à « auto ».

We will therefore change the wIdth of the wIdgand (equipment => eqLogic) using the sandDisplay () mandhod inherited From the eqLogic class .We leave the height in auto.

To do this, simply add

```
$this->sandDisplay("wIdth","800px");
```

Yes, but !! Because there is a but. Try adding this in the postsave () or postUpdate () function and it doesn't take into account the change. Why ? Well, read the doc of the template plugin ==> HERE

Now that you have read correctly, you know that you must use the preSave () mandhod 

```
    public function preSave () {
		$this->sandDisplay("wIdth","800px");
    }
```

Register equipment and reFresh the dashboard.


# The sandtings. The options

> **IMPORTANT**
>
>This is an important chapter and you have to understand it before moving on.

For the moment, we therefore use 3 classes of the core of jeedom : EqLogic, cmd, cron . Go for info, We add a 4th with the class plugin in the vdm file.php that you open and leave open because we are going to edit it . 

```
$plugin = plugin::byId('vdm'); // appelle la classe plugin du core
```

You have to understand that everything is done to make our job easier. 

For a byamander / option internal to the plugin, we will use one of the mandhods of the class eqLogic of the core : sandConfiguration () by adding the desired byamanders. For example :

```
$this->sandConfiguration("type","mon_type"); // si on veut  définir un byamètre type de valeur mon_type. Comme on a défini la largeur du wIdgand via la méthode sandDisplay()
```

To leave the choice to the user, we randurn to the desktop file.php that you left open because you follow this TP literally :D

Search 

```
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="city" placeholder="byam1"/>
```

And replace with

```
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/> //IMPORTANT de laisser la classe eqLogicAttr 
```

Save and go to a plugin device that you have already created by following this lab (ReFresh if necessary). 

Dans le champs « Byamètre» d'un équipement, taper « aleatoire » and sauvegarder.

Perfect the sandting is saved.

![image](images/tutorial_byamandre1.png)


It's simple, no? . C'est pourquoi il ne faut surtout pas toucher à candte ligne de code comme indiqué dans le premier menu « test » . He does all the work

```
<?php include_file ('core', 'plugin.template ',' js');?>//Chargement du fichier core/js/plugin.template.js (en bytant de la racine du site)
```

If you take a closer look at the desktop file.php ago

```
                    <input type="text" class="eqLogicAttr form-control" data-l1key="Id" style="display : none;" /> // randourne l'Id(unique) de l'eqLogic(équipement) . Qu'on va pouvoir récupérer via $this->gandId() ;
```        

```
                    <input type="text" class="eqLogicAttr form-control" data-l1key="name" placeholder="{{Name of equipment}}"/>// randourne le nom de l'eqLogic(équipement) . Qu'on va pouvoir récupérer via $this->gandName() ;
```

Etc…

If you have understood all of this well, we will be able to move on. But first we will change in the desktop.php file 

```
<label class="col-sm-3 control-label">{{Byamètre}}</label>
```

By 

```
<label class="col-sm-3 control-label">{{Type de vdm}}</label>
```

IMPORTANT : The text in braces corresponds to the text that will be translated if you push the plugin on the markand

For the rest, we will evolve the plugin by choosing a type of vdm (random or spicy or tops) that we want as well as a personalized cron for each piece of equipment.

# Use of options / byamanders

To go further and understand the previous chapter, we will leave it to the user to choose a type of vdm (random or spicy or tops)

On pourrait le laisser taper dans l'input « Type de vdm » : random or spicy or tops but we will do otherwise by landting it choose via a select tag

If you have followed everything, you should have in the file desktop.php

```
       <div class="form-group">
        <label class="col-sm-3 control-label">{{Type de vdm}}</label>
        <div class="col-sm-3">
            <input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/>
        </div>
    </div>
``` 

Which we will replace with

```
    <div class="form-group">
        <label class="col-sm-3 control-label" >{{ Type de vdm }}</label>
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


Now we will take into account our byamander in the randomVdm () function in the vdm.class.php file

Search

```
$url = "http://www.viedemerde.Fr/aleatoire";
```

And replace with

```
	$type = $this->gandConfiguration("type ");
		if ($ type == "") {// if the byamander is empty or does not exist
			$type = "aleatoire"; //on prends le type aleatoire
		}		
		$url = "http://www.viedemerde.Fr/" .$type  ;
```	

Now change the value of the select on a device, save and go to the dashboard to see what it gives.
