# Develop on Jeedom

> **IMPORTANT**
>
> This tutorial was written by ZygOm4t1k whom we sincerely thank. You can find the original [here](https://forum.jeedom.com/viewtopic.php?f=27&t=37630#p621495)

Here is a small lab to explain how to create a plugin. For the example we will create a plugin that returns a sentence from the viedemerde site.en (The plugin will be upgradeable).

It does not replace the [official documentation](https://jeedom.github.io/plugin-template/en_US/)

# Create the base of the plugin

To start, you must determine a name and an id (which must not exist) :

- Last name : Shit life
- Id : vdm

Download the template plugin to have the [based](https://github.com/jeedom/plugin-template/archive/master.zip)

Unzip the file . Vous obtiendrez un dossier « plugin-template-master » contenant des dossiers 3rparty , core , desktop…

Let's go.

Renommer le dossier « plugin-template-master » in « vdm » (l'id) du plugin.

1 / Open the plugin_info / info file.json and edit the.

````
{
    "id" : "vdm",
    "name" : "Shit life",
    "description" : "Plugin pour récupérer les dernières vdm",
    "licence" : "AGPL",
    "author" : "Zyg0m4t1k",
    "require" : "3.2",
    "category" : "monitoring",
    "changelog" : "",
    "documentation" : "",
    "language" : "",
    "compatibility" : ""
}
````

Copy paste the code above.

I changed the id (vdm), name, add description, author and category.

require : minimum version of jeedom to have access to the plugin on the market.

Changelog, documentation, language, compatibility null for the moment. I will come back to this later

2 / We will rename the files necessary for the plugin to be recognized by Jeedom

-   Rename file ``core/ajax/template.ajax.php`` in ``vdm.ajax.php``
-   Rename file ``core/class/template.class.php`` in ``vdm.class.php`` and open it to edit it.
- Replace ``class template extends eqLogic {`` by ``class vdm extends eqLogic {``
- and ``class templateCmd extends cmd`` by ``class vdmCmd extends cmd``
- Rename the core / php / template.inc file.php in core / php / vdm.inc.php
- Rename the desktop / php / template file.php to desktop / php / vdm.php and open it.
- Replace ``$plugin = plugin::byId('template');`` By ``$plugin = plugin::byId(‘vdm');``
- Replace ``{% raw %}{{Add a template}}{% endraw %}`` By ``{% raw %}{{Add equipment}}{% endraw %}``
- Replace ``<legend>{{Mes templates}}</legend>`` By ``{% raw %}<legend>{{Mes équipement}}</legend>{% endraw %}``
- Replace ``{% raw %}{{Equipment name template}}{% endraw %}`` By ``{% raw %}{{Equipment name }}{% endraw %}``
- Replace ``{% raw %}{{template param 1}}{% endraw %}`` By ``{% raw %}{{Settings}}{% endraw %}``
- Replace ``<?php include_file('desktop', 'template', 'js', 'template');?>`` By ``<?php include_file('desktop', vdm, 'js', vdm);?>``

And nothing else, don't change the line ``<?php include_file('core', 'plugin.template', 'js');?>``

- Rename file ``desktop/modal/modal.template.php`` in ``desktop/modal/modal.vdm.php``
- Rename file ``desktop/js/template.js`` in ``desktop/js/ vdm.js``
- Open file ``plugin_info/install.php``

And rename the functions as follows

````
function vdm_install() {

}

function vdm_update() {

}


function vdm_remove() {

}
````

Here is the plugin is ready but there remains the customization and the icon to update : [documentation](https://doc.jeedom.com/en_US/dev/Icone_de_plugin)

Add the icon in the plugin_info folder under the name vdm_icon.png

in my case

![image](images/tutorial_vdm_icon.png)

Now we can copy the vdm folder in the Jeedom plugin folder and go to the plugin management. We find the plugin.

![image](images/tutorial_vdm_plugin.png)

We activate it and then plugins / Monitoring / Vie de Merde

![image](images/tutorial_vdm_desktop1.png)

it is wrong because the color of the plus does not match the color of the icon.

I open the file ``desktop/php/desktop.php`` to correct.

````
{% raw %}
      <div class="cursor eqLogicAction" data-action="add" style="text-align: center; background-color : #ffffff; height : 120px;margin-bottom : 10px;padding : 5px;border-radius: 2px;width : 160px;margin-left : 10px;" >
        <i class="fa fa-plus-circle" style="font-size : 6em;color:#94ca02;"></i>
        <br>
        <span style="font-size : 1.1em;position:relative; top : 23px;word-break: break-all;white-space: pre-wrap;word-wrap: break-word;color:#94ca02">{{Ajouter}}</span>
      </div>
{% endraw %}
````

I replace ``color:#94ca02;"`` by ``color:#00A9EC;"``

We also notice that the texts are not aligned so we correct the style of the configuration (top property)

````
{% raw %}<span style="font-size : 1.1em;position:relative; top : 15px;word-break: break-all;white-space: pre-wrap;word-wrap: break-word;color:#767676">{{Configuration}}</span>{% endraw %}
````

par

````
{% raw %}<span style="font-size : 1.1em;position:relative;top : 23px;word-break: break-all;white-space: pre-wrap;word-wrap: break-word;color:#767676">{{Configuration}}</span>{% endraw %}
````

![image](images/tutorial_vdm_desktop2.png)

Here the base is ready. You should have the plugin active but at the moment it does nothing.

# The orders

The goal of the plugin will be to retrieve a random vdm and display it on the dashboard.

It is therefore necessary to create an command of type info to store this information. Elle sera de sous-type « String » car c'est une chaîne de caractère.

For the example we will add a command which refreshes the information. It will therefore be an action type command and other subtype

- Créer un équipement « vdm1 » in cliquant sur le +. Activate it and make it visible. Choose an item and the equipment must appear on the dashboard (depending on the item).

At this moment, there are no commands that appear in the command tab s, nor on the widget.

Open the core / class / vdm.class file.php and look for the postSave () function (Read the plugin template doc if not done yet)

We create the 2 commands

````
public function postSave() {
    $info = $this->getCmd(null, 'story');
    if (!is_object($info)) {
        $info = new vdmCmd();
        $info->setName(__('Histoire', __FILE__));
    }
    $info->setLogicalId('story');
    $info->setEqLogic_id($this->getId());
    $info->setType('info');
    $info->setSubType('string');
    $info->save();

    $refresh = $this->getCmd(null, 'refresh');
    if (!is_object($refresh)) {
        $refresh = new vdmCmd();
        $refresh->setName(__('Rafraichir', __FILE__));
    }
    $refresh->setEqLogic_id($this->getId());
    $refresh->setLogicalId('refresh');
    $refresh->setType('action');
    $refresh->setSubType('other');
    $refresh->save();
}
````

- Créer un autre équipement « vdm2 » in cliquant sur le +. In the Orders tab, the orders have appeared. Activate it and make it visible. Choose a parent object and go see what it looks like on the dashboard.
- Enregistrer le premier équipement « vdm1 » pour créer les commandes. See the rendering on the widget too.

In the Orders tab, you should see.

![image](images/tutorial_vdm_cmd1.png)

Open desktop / php / vdm.php to find the html code of this table.

````
{% raw %}
<a class="btn btn-success btn-sm cmdAction pull-right" data-action="add" style="margin-top:5px;"><i class="fa fa-plus-circle"></i> {{Commandes}}</a><br/><br/>
<table id="table_cmd" class="table table-bordered table-condensed">
    <thead>
        <tr>
            <th>{{Nom}}</th><th>{{Type}}</th><th>{{Action}}</th>
        </tr>
    </thead>
    <tbody>
    </tbody>
</table>
{% endraw %}
````

At display time, this is the desktop / js / vdm script.js which is called and starts the addCmdToTable function.

````
{% raw %}
function addCmdToTable(_cmd) {
    if (!isset(_cmd)) {
        var _cmd = {configuration: {}};
    }
    if (!isset(_cmd.configuration)) {
        _cmd.configuration = {};
    }
    var tr = '<tr class="cmd" data-cmd_id="' + init(_cmd.id) + '">';
    tr += '<td>';
    tr += '<span class="cmdAttr" data-l1key="id" style="display:none;"></span>';
    tr += '<input class="cmdAttr form-control input-sm" data-l1key="name" style="width : 140px;" placeholder="{{Nom}}">';
    tr += '</td>';
    tr += '<td>';
    tr += '<span class="type" type="' + init(_cmd.type) + '">' + jeedom.cmd.availableType() + '</span>';
    tr += '<span class="subType" subType="' + init(_cmd.subType) + '"></span>';
    tr += '</td>';
    tr += '<td>';
    if (is_numeric(_cmd.id)) {
        tr += '<a class="btn btn-default btn-xs cmdAction" data-action="configure"><i class="fa fa-cogs"></i></a> ';
        tr += '<a class="btn btn-default btn-xs cmdAction" data-action="test"><i class="fa fa-rss"></i> {{Tester}}</a>';
    }
    tr += '<i class="fa fa-minus-circle pull-right cmdAction cursor" data-action="remove"></i>';
    tr += '</td>';
    tr += '</tr>';
    $('#table_cmd tbody').append(tr);
    $('#table_cmd tbody tr:last').setValues(_cmd, '.cmdAttr');
    if (isset(_cmd.type)) {
        $('#table_cmd tbody tr:last .cmdAttr[data-l1key=type]').value(init(_cmd.type));
    }
    jeedom.cmd.changeType($('#table_cmd tbody tr:last'), init(_cmd.subType));
}
{% endraw %}
````

It happens automatically.

I want to add the Display and historize options for each order.

I edit the html code of the table in the desktop file.php by adding a column ..

````
{% raw %}<th>{{Nom}}</th><th>{{Type}}</th><th>{{Configuration}}</th><th>{{Action}}</th>{% endraw %}
````

Then edit desktop.js, find

````
    tr += '<span class="subType" subType="' + init(_cmd.subType) + '"></span>';
    tr += '</td>';
    tr += '<td>';
    if (is_numeric(_cmd.id)) {
````

Add the desired information.

````
{% raw %}
    tr += '<span class="subType" subType="' + init(_cmd.subType) + '"></span>';
    tr += '</td>';
    tr += '<td>';
    tr += '<span><input type="checkbox" class="cmdAttr checkbox-inline" data-l1key="isHistorized" /> {{Historiser}}<br/></span>';
   tr += '<span><input type="checkbox" class="cmdAttr checkbox-inline" data-l1key="isVisible" /> {{Affichage}}<br/></span>';
   tr += '</td>';
    tr += '<td>';
    if (is_numeric(_cmd.id)) {
{% endraw %}
````

I leave the button to create an order but I want it to be on the left.

````
{% raw %}<a class="btn btn-success btn-sm cmdAction pull-right" data-action="add" style="margin-top:5px;"><i class="fa fa-plus-circle"></i> {{Commandes}}</a><br/><br/>{% endraw %}
````

I change the class pull-right to pull-left

````
{% raw %}<a class="btn btn-success btn-sm cmdAction pull-left" data-action="add" style="margin-top:5px;"><i class="fa fa-plus-circle"></i> {{Commandes}}</a><br/><br/>{% endraw %}
````

Here is the rendering.The configuration options (Display and log) are present.

![image](images/tutorial_vdm_cmd2.png)

Here it remains to recover a random vdm and to use the commands.

# Information retrieval

To retrieve a vdm randomly.

````
$url = "http://www.viedemerde.fr/aleatoire";
$data = file_get_contents($url);
@$dom = new DOMDocument();
libxml_use_internal_errors(false);
$dom->loadHTML('<?xml encoding="UTF-8">' .$data);
libxml_use_internal_errors(true);
$xpath = new DOMXPath($dom);
$divs = $xpath->query('//article[@class="art-panel col-xs-12"]//div[@class="panel-content"]//p//a');
return $divs[0]->nodeValue ;
````

Open the core / class / vdm.class file.php and for the vdm class which inherits from egLogic methods, I create a randomVdm function

````
public function randomVdm() {
    $url = "http://www.viedemerde.fr/aleatoire";
    $data = file_get_contents($url);
    @$dom = new DOMDocument();
    libxml_use_internal_errors(true);
    $dom->loadHTML($data);
    libxml_use_internal_errors(false);
    $xpath = new DOMXPath($dom);
    $divs = $xpath->query('//article[@class="art-panel col-xs-12"]//div[@class="panel-content"]//p//a');
    return $divs[0]->nodeValue ;
}
````

Now we will update the info (story) command with this information by launching the action (refresh).
Still in core / class / vdm.class.php for the vdmCmd class we will use the execute method

````
public function execute($_options = array()) {

}
````

C'est here qu'on va définir ce qu'il va se passer quand on lance la commande « Rafraîchir ». The vdmCmd class inherited all the methods from the cmd class (Core jeedom)

On vérifie le logicalId de la commande lancée and si « refresh » on lance les actions

````
switch ($this->getLogicalId()) {
    case 'refresh': // LogicalId de la commande rafraîchir que l'on a créé dans la méthode Postsave de la classe vdm .
    // code pour rafraîchir ma commande
    break;
}
````

Now it remains to launch the randomVdm function() . For this, we recover the eqLogic (the equipment) from the launch command and we launch the function

````
$eqlogic = $this->getEqLogic(); // Récupération de l'eqlogic
$info = $eqlogic-> randomVdm() ; //Lance la fonction and stocke le résultat dans la variable $info
````

On mand à jour la commande « story » avec la variable $info. We will use the checkAndUpdateCmd method of the eqlogic class

````
$eqlogic->checkAndUpdateCmd('story', $info);
````

Which ultimately gives

````
public function execute($_options = array()) {
    $eqlogic = $this->getEqLogic(); //récupère l'éqlogic de la commande $this
    switch ($this->getLogicalId()) {    //vérifie le logicalid de la commande
        case 'refresh': // LogicalId de la commande rafraîchir que l'on a créé dans la méthode Postsave de la classe vdm .
            $info = $eqlogic->randomVdm();  //On lance la fonction randomVdm() pour récupérer une vdm and on la stocke dans la variable $info
            $eqlogic->checkAndUpdateCmd('story', $info); // on mand à jour la commande avec le LogicalId "story"  de l'eqlogic
            break;
    }
}
````

Now go to a device created and launch the Refresh command. Puis la commande « Histoire » qui doit être à jour.

On the Dashboard, the information appears. Click on the refresh icon to change the information

We will then define the size of the widget and customize it a bit

Then automate the refresh.

# Update information (cron)

The plugin is functional but for the moment it does not do much. Si vous cliquer sur la commande « refresh » , la commande « story » se mand à jour mais sinon rien.

Note that for the command I name it by logicalId. And this is important. Having a unique logicalId per device (eqLogic) simplifies things.

We will now see how to update the command using the native core functions : Crons

There are several of them :

- cron : refreshment every minute
- cron5 : refreshment every 5 minutes
- cron15 : refreshment every 15 minutes
- cron30 : refreshment every 30 minutes
- cronHourly : uh .. every hour
- cronDaily : ben 1 / day

Given the plugin we will update every hour (let's be crazy). We will therefore use the cronHourly function().

We will therefore open the vdm.class file.php and search

````
/*
 * Fonction exécutée automatiquement toutes les heures by Jeedom
  public static function cronHourly() {

  }
 */
````

Uncomment the code

````
public static function cronHourly() {

}
````

Our function is operational

Now we have to recover all the equipment of our plugin,

````
self::byType('vdm') //array contenant tous les équipements du plugin
````

and sort them 1 by 1

````
foreach (self::byType('vdm') as $vdm) {

}
````

Before doing anything we check that the equipment is active

````
if ($vdm->getIsEnable() == 1) {

}
````

Voila maintenant on recherche la commande « refresh » de l'équipement (eqLogic)

````
$cmd = $vdm->getCmd(null, 'refresh');
````

If it does not exist we continue the loop (foreach) otherwise we execute it

````
if (!is_object($cmd)) {
continue;
}
$cmd->execCmd();
````

Which ultimately gives

````
public static function cronHourly () {
    foreach (self::byType('vdm') as $vdm) {//parcours tous les équipements du plugin vdm
        if ($vdm->getIsEnable() == 1) {//vérifie que l'équipement est actif
            $cmd = $vdm->getCmd(null, 'refresh');//retourne la commande "refresh si elle existe
            if (!is_object($cmd)) {//Si la commande n'existe pas
              continue; //continue la boucle
            }
            $cmd->execCmd(); // la commande existe on la lance
        }
    }
}
````

Pour tester, dans jeedom , aller dans configuration/moteur de tâches and lancer le cron de class « plugin » fonction « cronHourly ».

The information is updated.

It's good but it doesn't suit me. A la création de l'équipement, la commande « story » ne se mand pas à jour.

We therefore improve the code.

For the creation of the orders we used the postSave method(). We will use the postUpdate () method to update the information.

The simplest way since there is only one command and it is created in postSave

````
    public function postUpdate() {
        $cmd = $this->getCmd(null, 'refresh'); // On recherche la commande refresh de l'équipement
        if (is_object($cmd)) { //elle existe and on lance la commande
             $cmd->execCmd();
        }
    }
````

You have to test, it works?

But here is an alternative which may prove more useful in more complex cases

In the postUpdate () function, we launch the cronHourly () function with the equipment id

````
public function postUpdate() {
    self::cronHourly($this->getId());// lance la fonction cronHourly avec l'id de l'eqLogic
}
````

But in this case we change the cronHourly function()

````
public static function cronHourly($_eqLogic_id = null) {
    if ($_eqLogic_id == null) { // La fonction n'a pas d'argument donc on recherche tous les équipements du plugin
        $eqLogics = self::byType('vdm', true);
    } else {// La fonction a l'argument id(unique) d'un équipement(eqLogic)
        $eqLogics = array(self::byId($_eqLogic_id));
    }

    foreach ($eqLogics as $vdm) {
        if ($vdm->getIsEnable() == 1) {//vérifie que l'équipement est acitf
            $cmd = $vdm->getCmd(null, 'refresh');//retourne la commande "refresh si elle existe
            if (!is_object($cmd)) {//Si la commande n'existe pas
              continue; //continue la boucle
            }
            $cmd->execCmd(); // la commande existe on la lance
        }
    }
}
````

Then you can change the frequency of the cron according to the importance of your information to recover.

I can only invite you to take the time to go to this page to find out more ==> [here](https://jeedom.github.io/documentation/phpdoc/index.html)

And even better to go to the core github ==> [here](https://github.com/jeedom/core/tree/alpha/core/class)

Put your nose in to master even more .

The plugin is functional as is.

I will take the time to add the way to set up a custom cron according to the equipment .

# The widget

Not an easy task the widget but we will stay on the default widget for the moment.

If you have not touched anything, equipment activated and visible, the widget takes up the entire width of the screen. So we're going to change it.

La commande qui apparaît est la commande «story» de type info , sous-type string

My pleasure is to wake up in the morning is to read a vdm in the morning. It allows me to see that there is worse than me :D

But I don't have my glasses and currently rendering on the widget does not allow me to read it

Donc on va changer le style in affectant un template à la commande « story»

Nothing's easier.

I will see ==> [here](https://github.com/jeedom/core/tree/alpha/core/template/dashboard)

I'm looking for a template for cmd.info.string (our command is of type info subtype string) .Not difficult there are only two (default or tile)

J'applique le template « cmd.info.string.tile.html » à ma commande.

For that I open the vdm.class file.php , fonction postSave() and j'ajoute le template « tile » pour la commande « story » in appliquant la méthode setTemplate()

````
$info = $this->getCmd(null, 'story');
if (!is_object($info)) {
    $info = new vdmCmd();
    $info->setName(__('Histoire', __FILE__));
}
$info->setLogicalId('story');
$info->setEqLogic_id($this->getId());
$info->setType('info');
$info->setTemplate('dashboard','tile');//template pour le dashboard
$info->setSubType('string');
$info->save();
````

Refresh the dasboard.

It's better but the widget always takes the width of the dashboard. We will therefore correct. By défaut la largeur du widgand de l'équipement(eqLogic) and la hauteur sont à « auto ».

We will therefore change the width of the widget (equipment => eqLogic) using the setDisplay () method inherited from the eqLogic class .We leave the height in the car.

To do this, just add

````
$this->setDisplay("width","800px");
````

Yes, but !! Because there is a but. Try adding this in the postsave () or postUpdate () function and it doesn't take the change into account. Why ? Ben must read the template plugin doc ==> HERE

Now that you have read that correctly you know that you have to use the preSave method()

````
public function preSave() {
    $this->setDisplay("width","800px");
}
````

Register equipment and refresh the dashboard.


# The settings. The options

> **IMPORTANT**
>
>This is an important chapter and must be understood before moving on to the next.

For the moment, we have therefore used 3 classes from the core of jeedom : EqLogic, cmd, cron . Go for info, We add a 4th with the class plugin in the vdm file.php that you open and leave open because we will edit it .

````
$plugin = plugin::byId('vdm'); // appelle la classe plugin du core
````

You have to understand that everything is done to make our job easier.

For a parameter / an option internal to the plugin, we will use one of the methods of the eqLogic class of the core : setConfiguration () by adding the parameters you want. For example :

````
$this->setConfiguration("type","mon_type"); // si on veut  définir un paramètre type de valeur mon_type. Comme on a défini la largeur du widgand via la méthode setDisplay()
````

To leave the choice to the user, we go back to the desktop file.php that you left open because you are following this TP to the letter :D

Chercher

````
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="city" placeholder="param1"/>
````

And replace with

````
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/> //Important de laisser la classe eqLogicAttr
````

Save and go to a plugin device that you have already created by following this lab (Refresh if necessary).

Dans le champs « Paramètre» d'un équipement, taper « aleatoire » and sauvegarder.

Perfect the parameter is saved.

![image](images/tutorial_parametre1.png)


It's simple, no? . C'est pourquoi il ne faut surtout pas toucher à cette ligne de code comme indiqué dans le premier menu « test » . He's the one who does all the work

````
<?php include_file('core', 'plugin.template', 'js');?>//Chargement du fichier core/js/plugin.template.js (in partant de la racine du site)
````

If you take a closer look at the desktop file.php there is

````
<input type="text" class="eqLogicAttr form-control" data-l1key="id" style="display : none;" /> // retourne l'id(unique) de l'eqLogic(équipement) . Qu'on va pouvoir récupérer via $this->getId() ;
````

````
{% raw %}
<input type="text" class="eqLogicAttr form-control" data-l1key="name" placeholder="{{Equipment name}}"/>// retourne le nom de l'eqLogic(équipement) . Qu'on va pouvoir récupérer via $this->getName() ;
{% endraw %}
````

Etc…

If you have assimilated all this we will be able to move on. But first we will change in the desktop.php file

````
{% raw %}
<label class="col-sm-3 control-label">{{Paramètre}}</label>
{% endraw %}
````

Par

````
{% raw %}
<label class="col-sm-3 control-label">{{Type de vdm}}</label>
{% endraw %}
````

Important : The text between braces corresponds to the text that will be translated if you push the plugin on the market

For the rest, we will develop the plugin by choosing a type of vdm (random or spicy or tops) that we want as well as a personalized cron for each device.

# Use of options / parameters

To go further and understand the previous chapter, we will let the user choose a type of vdm (random or spicy or tops)

On pourrait le laisser taper dans l'input « Type de vdm » : random or spicy or tops but we will do otherwise by letting it choose via a select tag

If you have followed everything you should have in the desktop.php file

````
{% raw %}
 <div class="form-group">
  <label class="col-sm-3 control-label">{{Type de vdm}}</label>
  <div class="col-sm-3">
      <input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/>
  </div>
</div>
{% endraw %}
````

That we will replace by

````
{% raw %}
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
{% endraw %}
````

Ici le paramètre « type» prendra la valeur du select choisi soit aleatoire ou epicees ou tops.


Now we will take into account our parameter in the randomVdm () function in the vdm.class.php file

Chercher

````
$url = "http://www.viedemerde.fr/aleatoire";
````

And replace with

````
$type = $this->getConfiguration("type ");
if($type == "") { //si le paramètre est vide ou n'existe pas
    $type = "aleatoire"; //on prends le type aleatoire
}
$url = "http://www.viedemerde.fr/" .$type  ;
````

Now change the value of the select on an item of equipment, save and go to the dashboard to see what it gives.
