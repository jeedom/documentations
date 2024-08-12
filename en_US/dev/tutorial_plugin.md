# To begin

> **IMPORTANT**
>
> This tutorial was written by ZygOm4t1k whom we sincerely thank. You can find the original [here](https://forum.jeedom.com/viewtopic.php?f=27&t=37630#p621495)

Here is a short tutorial to explain how to create a plugin. For the example we will create a plugin which returns a sentence from the viedemerde site.Fr .(The plugin will be scalable)

It does not replace the [official documentation](https://doc.jeedom.com/en_US/dev/)

# Create the plugin base

To start, you have to determine a name and an id (which must not exist))

Name : Poop Life
Id : vdm

Download the template plugin to have the [based](https://github.com/jeedom/plugin-template/archive/master.zip)

Unzip the file. Vous obtiendrez un dossier « plugin-template-master » contenant des dossiers 3rparty, core, desktop…

Let's go.

Renommez le dossier « plugin-template-master » en « vdm » (l'id) du plugin.

1 / Open the plugin_info / info file.json and edit the.

`` ``json
{
  "id" : "vdm",
  "name" : "Poop Life",
  "description" : "Plugin to retrieve the latest vdm",
  "licence" : "AGPL",
  "author" : "Zyg0m4t1k",
  "require" : "3.3.39",
  "category" : "monitoring",
  "changelog" : "",
  "documentation" : "",
  "language" : "",
  "compatibility" : ""
}
`` ``

Copy paste the code above.

I changed the id *(vdm)*, name, added description, author and category.

require : minimum version of jeedom to have access to the plugin on the market.

Changelog, documentation, language, compatibility null for the moment. I will come back to this later

2 / We will rename the files necessary for the plugin to be recognized by Jeedom

- Rename the file core / ajax / template.ajax.php to vdm.ajax.php

- Rename the file core / class / template.class.php to vdm.class.php and open it to edit it.

Remplacez

`` ``php
class template extends eqLogic
`` ``

par

`` ``php
class vdm extends eqLogic
`` ``

------------------------

`` ``php
class templateCmd extends cmd
`` ``

par

`` ``php
class vdmCmd extends cmd
`` ``

- Rename the file core / php / template.inc.php in core / php / vdm.inc.php
- Rename the desktop / php / template file.php to desktop / php / vdm.php and open it

Replace :

`` ``php
$plugin = plugin::byId('template');
`` ``

Par

`` ``php
$plugin = plugin::byId('vdm');
`` ``

------------------------

`` ``html
{% raw %}<legend><i class="fas fa-table"></i> {{Mes templates}}</legend>{% endraw %}
`` ``

Par

`` ``html
{% raw %}<legend><i class="fas fa-table"></i> {{Mes équipements}}</legend>{% endraw %}
`` ``

------------------------

`` ``php
<?php include_file('desktop', 'template', 'js', 'template');?>
`` ``

Par

`` ``php
<?php include_file('desktop', 'vdm', 'js', 'vdm');?>
`` ``

And nothing else , **don't change the line** ``<?php include_file('core', 'plugin.template', 'js');?>``.

- Rename the file desktop / modal / modal.template.php to desktop / modal / modal.vdm.php

- Rename the desktop / js / template file.js to desktop / js / vdm.js

- Open the plugin_info / install file.php and rename the functions as follows

`` ``php
function vdm_install() {
}

function vdm_update() {
}

function vdm_remove() {
}
`` ``

Here the plugin is ready but there remains the customization and the icon to update : [Developer documentation - Plugin icon](https://doc.jeedom.com/en_US/dev/Icone_de_plugin)

Add the icon in the plugin_info folder under the name vdm_icon.png

in my case

![image](images/tutorial_vdm_icon.png)

Now we can copy the vdm folder into the Jeedom plugin folder and go to plugin management. We find the plugin.

![image](images/tutorial_vdm_plugin.png)

We activate it and then plugins / Monitoring / Vie de Merde

Here the base is ready. You should have the plugin active but at the moment it doesn't do anything.

# The orders

The goal of the plugin will be to retrieve a random vdm and display it on the dashboard.

It is therefore necessary to create an command of type info to store this information. Elle sera de sous-kind « string » car c'est une chaîne de caractère.

For the example we will add a command that refreshes the information. It will therefore be an action type command and other subtype

-Créez un équipement « vdm1 » en cliquant sur le +. Activate it and make it visible. Choose an item and the equipment should appear on the dashboard (depending on the item).

At this moment, there are no commands that appear in the commands tab, nor on the widget.

Open the core / class / vdm.class file.php and look for the postSave () function (Read the template plugin doc if not done yet)

We create the 2 orders

`` ``php
public function postSave() {
  $info = $this->getCmd(null, 'story');
  yew (!is_object ($ info)) {
    $info = new vdmCmd();
    $info->setName(__('Histoire', __FILE__));
  }
  $info->setLogicalId('story');
  $info->setEqLogic_id($this->getId());
  $info->setType('info');
  $info->setSubType('string');
  $info->save();

  $refresh = $this->getCmd(null, 'refresh');
  yew (!is_object ($ refresh)) {
    $refresh = new vdmCmd();
    $refresh->setName(__('Rafraichir', __FILE__));
  }
  $refresh->setEqLogic_id($this->getId());
  $refresh->setLogicalId('refresh');
  $refresh->setType('action');
  $refresh->setSubType('other');
  $refresh->save();
}
`` ``

- Créez un autre équipement « vdm2 » en cliquant sur le +. In the commands tab, the commands appeared. Activate it and make it visible. Choose a parent object and see what it looks like on the dashboard.

- Enregistrez le premier équipement « vdm1 » pour créer les commandes. See the rendering on the widget too.

In the Orders tab, you should see.

![image](images/tutorial_vdm_cmd1.png)

Open desktop / php / vdm.php to find the html code of this table.

`` ``html
{% raw %}
<!-- Onglet des commandes de l'équipement -->
<div role="tabpanel" class="tab-pane" id="commandtab">
<a class="btn btn-default btn-sm pull-right cmdAction" data-action="add" style="margin-top:5px;"><i class="fas fa-plus-circle"></i> {{Ajouter une commande}}</a>
<br/><br/>
<div class="table-responsive">
<table id="table_cmd" class="table table-bordered table-condensed">
<thead>
<tr>
<th>{{Id}}</th>
<th>{{Nom}}</th>
<th>{{Type}}</th>
<th>{{Paramètres}}</th>
<th>{{Options}}</th>
<th>{{Action}}</th>
</tr>
</thead>
<tbody>
</tbody>
</table>
</div>
</div><!-- /.tabpanel #commandtab-->
{% endraw %}
`` ``

At the time of display, it is the desktop / js / vdm script.js which is called and launches the addCmdToTable function.

`` ``html
{% raw %}
/* Function allowing the display of commands in the equipment */
function addCmdToTable (_cmd) {
  yew (!isset (_cmd)) {
    var _cmd = {configuration: {} };
  }
  yew (!isset (_cmd.configuration)) {
    _cmd.configuration = {};
  }
  <html>var tr = '.id) + '">';
  <html>tr + = ':60px; "> ';
  tr + = '<span class="cmdAttr" data-l1key="id"></span> ';
  tr + = '</td> ';
  <html>tr + = ':300px; width:350px; "> ';
  tr + = '<div class="row"> ';
  tr + = '<div class="col-xs-7"> ';
  tr + = '<input class="cmdAttr form-control input-sm" data-l1key="name" placeholder="{{Nom de la commande}}">';
  <html>tr + = ' : none; margin-top : 5px; "title =" {{Command related information}} "> ';
  tr + = '<option value=""> {{Any}}</option> ';
  tr + = '</select> ';
  tr + = '</div> ';
  tr + = '<div class="col-xs-5"> ';
  tr + = ' <a class="cmdAction btn btn-default btn-sm" data-l1key="chooseIcon"><i class="fas fa-flag"></i>{{Icon}}</a> ';
  <html>tr + = ' : 10px; "> ';
  tr + = '</div> ';
  tr + = '</div> ';
  tr + = '</td> ';
  tr + = '<td> ';
  <html>tr + = '.type) + '">' + jeedom.cmd.availableType () + '';
  <html>tr + = '.subType) + '">';
  tr + = '</td> ';
  <html>tr + = ':150px; width:350px; "> ';
  <html>tr + = '.}}" title = "{{Min.}}" style = "width:30%;display:inline-block; "/> ';
  <html>tr + = '.}}" title = "{{Max.}}" style = "width:30%;display:inline-block; "/> ';
  <html>tr + = ':30%;display:inline-block; "/> ';
  tr + = '</td> ';
  <html>tr + = ':80px; width:350px; "> ';
  tr + = ' <label class="checkbox-inline"><input type="checkbox" class="cmdAttr" data-l1key="isVisible" checked/>{{Show}}</label> ';
  tr + = ' <label class="checkbox-inline"><input type="checkbox" class="cmdAttr" data-l1key="isHistorized" checked/>{{Historize}}</label> ';
  tr + = ' <label class="checkbox-inline"><input type="checkbox" class="cmdAttr" data-l1key="display" data-l2key="invertBinary"/>{{Invert}}</label> ';
  tr + = '</td> ';
  <html>tr + = ':80px; width:200px; "> ';
  if (is_numeric (_cmd.id)) {
    tr + = '<a class="btn btn-default btn-xs cmdAction" data-action="configure"><i class="fas fa-cogs"></i></a> ';
    tr + = ' <a class="btn btn-default btn-xs cmdAction" data-action="test"><i class="fas fa-rss"></i>Test</a> ';
  }
  tr + = '<i class="fas fa-minus-circle pull-right cmdAction cursor" data-action="remove"></i></td> ';
  tr + = '</tr> ';
  $('#table_cmd tbody').append(tr);
  var tr = $ ('# table_cmd tbody tr'). last ();
  jeedom.eqLogic.builSelectCmd({
    id: $('.eqLogicAttr[data-l1key=id]').value(),
    filter: { type: 'info' },
    error: function (error) {
      $('#div_alert').showAlert({ message: error.message, level: 'danger' });
    },
    success: function (result) {
      tr.find ('. cmdAttr [data-l1key = value]'). append (result);
      tr.setValues (_cmd, '.cmdAttr');
      jeedom.cmd.changeType (tr, init (_cmd.subType));
    }
  });
}
{% endraw %}
`` ``

It happens automatically.

Here it remains to recover a random vdm and to use the commands.

# Information retrieval

To retrieve a vdm randomly.

`` ``php
$url = "http://www.viedemerde.fr/aleatoire";
$data = file_get_contents($url);
@$dom = new DOMDocument();
libxml_use_internal_errors (false);
$dom->loadHTML('<?xml encoding="UTF-8">' .$data);
libxml_use_internal_errors (true);
$xpath = new DOMXPath($dom);
$divs = $xpath->query('//article[@class="art-panel col-xs-12"]//div[@class="panel-content"]//p//a');
return $ divs [0] -> nodeValue;
`` ``

Open the core / class / vdm.class file.php and for the vdm class which inherits from egLogic methods, I create a randomVdm function

`` ``php
public function randomVdm() {
  $url = "http://www.viedemerde.fr/aleatoire";
  $data = file_get_contents($url);
  @$dom = new DOMDocument();
  libxml_use_internal_errors (true);
  $dom->loadHTML($data);
  libxml_use_internal_errors (false);
  $xpath = new DOMXPath($dom);
  $divs = $xpath->query('//article[@class="art-panel col-xs-12"]//div[@class="panel-content"]//p//a');
  return $ divs [0] -> nodeValue;
}
`` ``

Now we will update the info (story) command with this information by launching the action command (refresh).
Still in core / class / vdm.class.php for the vdmCmd class we will use the execute method

`` ``php
public function execute ($ _ options = array()) {
}
`` ``

C'est here qu'on va définir ce qu'il va se passer quand on actionne la commande « Rafraîchir ». The vdmCmd class inherited all the methods from the cmd class (Core jeedom)

On vérifie le logicalId de la commande lancée et si « refresh » on lance les actions

`` ``php
switch ($ this-> getLogicalId()) {
  case 'refresh': // LogicalId of the refresh command that we created in the Postsave method of the vdm class .
  // code to refresh my order
  break;
}
`` ``

Now it remains to execute the randomVdm function(). For this, we retrieve the eqLogic (the equipment) of the control and we execute the function.

`` ``php
$eqlogic = $this->getEqLogic(); //Récupération de l'eqlogic
$info = $eqlogic->randomVdm() ; //Lance la fonction et stocke le résultat dans la variable $info
`` ``

On met à jour la commande « story » avec la variable $info. We will use the checkAndUpdateCmd method of the eqlogic class

`` ``php
$eqlogic->checkAndUpdateCmd('story', $info);
`` ``

Which ultimately gives

`` ``php
public function execute ($ _ options = array()) {
  $eqlogic = $this->getEqLogic(); //récupère l'éqlogic de la commande $this
  switch ($ this-> getLogicalId ()) {// check the logicalid of the command
    case 'refresh': // LogicalId of the refresh command that we created in the Postsave method of the vdm class .
    $info = $eqlogic->randomVdm(); //On lance la fonction randomVdm() pour récupérer une vdm et on la stocke dans la variable $info
    $eqlogic->checkAndUpdateCmd('story', $info); //on met à jour la commande avec le LogicalId "story"  de l'eqlogic
    break;
  }
}
`` ``

Now go to a created device and run the Refresh command. Puis la commande « Histoire » qui doit être à jour.

On the Dashboard, the information appears. Click on the refresh icon to change the information.

We will then define the size of the widget and customize it a little then automate the refresh.

# Update information (cron)

The plugin is functional but for the moment it does not do much. Si vous cliquez sur la commande « refresh » , la commande « story » se met à jour mais sinon rien.

Note that for the command I name it by logicalId. And this is important. Having a unique logicalId per device (eqLogic) simplifies things.

We will now see how to update the command using the native functions of the core : Crons

There are several of them :

- cron : refreshment every minute
- cron5 : refreshment every 5 minutes
- cron15 : refreshment every 15 minutes
- cron30 : refreshment every 30 minutes
- cronHourly : every hour
- cronDaily : 1/jour

Given the plugin we will update every hour (let's be crazy). We will therefore use the cronHourly function().

We will therefore open the vdm.class file.php and search

`` ``php
/*
* Function performed automatically every hour by Jeedom
public static function cronHourly() {
}
*/
`` ``

Uncomment the code

`` ``php
public static function cronHourly() {
}
`` ``

Our function is operational

Now we have to recover all the active equipment of our plugin,

`` ``php
self::byType ('vdm', true) // array containing all the devices of the plugin, the second argument, a boolean, allows to retrieve only the active devices if true or all the devices if false (default)
`` ``

and browse them 1 by 1

`` ``php
foreach (self::byType ('vdm', true) as $ vdm) {
}
`` ``

Voila maintenant on recherche la commande « refresh » de l'équipement (eqLogic)

`` ``php
$cmd = $vdm->getCmd(null, 'refresh');
`` ``

If it does not exist we continue the loop (foreach) otherwise we execute it

`` ``php
yew (!is_object ($ cmd)) {
  continue;
}
$cmd->execCmd();
`` ``

Which ultimately gives

`` ``php
public static function cronHourly () {
  foreach (self::byType ('vdm', true) as $ vdm) {// browse all active devices of the vdm plugin
    $cmd = $vdm->getCmd(null, 'refresh'); //retourne la commande "refresh" si elle existe
    yew (!is_object ($ cmd)) {// If the command does not exist
    keep on going; // continue the loop
  }
  $cmd->execCmd(); //la commande existe on la lance
}
}
`` ``

Pour tester, dans jeedom, allez dans configuration/moteur de tâches et lancer le cron de class « plugin » fonction « cronHourly »
Information updates.

It's good but it doesn't suit me. A la création de l'équipement, la commande « story » ne se met pas à jour.

We therefore improve the code.

For the creation of the orders we used the postSave method(). We will use the postUpdate () method to update the information.

The easiest way since there is only one command and it is created in postSave

`` ``php
public function postUpdate() {
  $cmd = $this->getCmd(null, 'refresh'); //On recherche la commande refresh de l'équipement
  if (is_object ($ cmd)) {// it exists and we run the command
    $cmd->execCmd();
  }
}
`` ``

You have to test, it works?

But here is an alternative which may prove more useful in more complex cases

In the postUpdate () function, we launch the cronHourly () function with the equipment id

`` ``php
public function postUpdate() {
  self::cronHourly ($ this-> getId ()); // start the cronHourly function with the eqLogic id
}
`` ``

But in this case we change the cronHourly function()

`` ``php
public static function cronHourly ($ _ eqLogic_id = null) {
  if ($ _eqLogic_id == null) {// The function has no argument so we search for all the equipment of the plugin
    $eqLogics = self::byType('vdm', true);
    } else {// The function has the (unique) argument id of a device (eqLogic)
      $eqLogics = array(self::byId($_eqLogic_id));
    }

    foreach ($ eqLogics as $ vdm) {
      $cmd = $vdm->getCmd(null, 'refresh'); //retourne la commande "refresh si elle existe
      yew (!is_object ($ cmd)) {// If the command does not exist
      keep on going; // continue the loop
    }
    $cmd->execCmd(); //la commande existe on la lance
  }
}
`` ``

Then you can change the frequency of the cron according to the importance of your information to recover.

I can only invite you to take the time to go to this page to find out more ==> [here](https://doc.jeedom.com/dev/phpdoc/4.1/)

And even better to go to the core github ==> [Here](https://github.com/jeedom/core)

Put your nose in to master even more .

The plugin is functional as is.

I will take the time to add the way to set up a custom cron according to the equipment .

# The widget

Not an easy task the widget but we will stay on the default widget for the moment.

If you have not touched anything, equipment activated and visible, the widget takes up the entire width of the screen. So we're going to change it.

La commande qui apparaît est la commande «story» de kind info, sous-kind string.

My pleasure is to wake up in the morning is to read a vdm in the morning. It allows me to see that there is worse than me :D

But I don't have my glasses and currently rendering on the widget does not allow me to read it

Donc on va changer le style en affectant un template à la commande « story»

Nothing's easier.

I will see ==> [Here](https://github.com/jeedom/core/tree/alpha/core/template/dashboard)

I'm looking for a template for cmd.info.string (our command is of type info subtype string) .Not difficult there are only two (default or tile)

J'applique le template « cmd.info.string.tile.html » à ma commande.

For that I open the vdm.class file.php , fonction postSave() et j'ajoute le template « tile » pour la commande « story » en appliquant la méthode setTemplate()

`` ``php
$info = $this->getCmd(null, 'story');
yew (!is_object ($ info)) {
  $info = new vdmCmd();
  $info->setName(__('Histoire', __FILE__));
}
$info->setLogicalId('story');
$info->setEqLogic_id($this->getId());
$info->setType('info');
$info->setTemplate('dashboard','tile');//template pour le dashboard
$info->setSubType('string');
$info->save();
`` ``

Refresh the dashboard.

It's better but the widget always takes the width of the dashboard. We will therefore correct. By défaut la largeur du widget de l'équipement(eqLogic) et la hauteur sont à « auto ».

We will therefore change the width of the widget (equipment => eqLogic) using the setDisplay () method inherited from the eqLogic class .We leave the height in the car.

To do this, just add

`` ``php
$this->setDisplay("width","800px");
`` ``

Yes, but !! Because there is a but. Try adding this in the postsave () or postUpdate () function and it doesn't take the change into account. Why ? Ben must read the template plugin doc ==> HERE

Now that you have read that correctly you know that you have to use the preSave method()

`` ``php
public function preSave() {
  $this->setDisplay("width","800px");
}
`` ``

Register equipment and refresh the dashboard.

# The settings. The options

> **IMPORTANT**
>
> This is an important chapter and you have to understand it before moving on.

For the moment, we therefore have to use 3 classes of the core of jeedom : EqLogic, cmd, cron. Go for info, we add a 4th with the class plugin in the vdm file.php that you open and leave open because we will edit it.

`` ``php
$plugin = plugin::byId('vdm'); // appelle la classe plugin du core
`` ``

You have to understand that everything is done to make our job easier.

For a parameter / an option internal to the plugin, we will use one of the methods of the eqLogic class of the core: setConfiguration () by adding the parameters you want. For example:

`` ``php
$this->setConfiguration("type","mon_type"); // si on veut définir un paramètre kind de valeur mon_type. Comme on a défini la largeur du widget via la méthode setDisplay()
`` ``

To leave the choice to the user, we go back to the desktop file.php that you left open because you are following this TP to the letter :D

Cherchez

`` ``html
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="city" placeholder="param1"/>
`` ``

And replace with

`` ``html
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/> //IMPORTANT de laisser la classe eqLogicAttr
`` ``

Save and go to a plugin device that you have already created by following this lab (Refresh if necessary).

Dans le champs «Paramètre» d'un équipement, tapez «aléatoire» et sauvegardez.

Perfect the parameter is saved.

![image](images/tutorial_parametre1.png)

It's simple, no? . C'est pourquoi il ne faut surtout pas toucher à cette ligne de code comme indiqué dans le premier menu « test ». He's the one who does all the work

`` ``php
<?php include_file('core', 'plugin.template', 'js');?> //Chargement du fichier core/js/plugin.template.js (en partant de la racine du site)
`` ``

If you take a closer look at the desktop file.php ago

`` ``html
<input type="text" class="eqLogicAttr form-control" data-l1key="id" style="display:none;" /> // retourne l'id(unique) de l'eqLogic(équipement) que l'on va pouvoir récupérer via $this->getId() ;
`` ``

`` ``html
{% raw %}<input type="text" class="eqLogicAttr form-control" data-l1key="name" placeholder="{{Name de l'équipement}}"/>// retourne le nom de l'eqLogic(équipement) que l'on va pouvoir récupérer via $this->getName();{% endraw %}
`` ``

Etc…

If you have understood all of this well, we will be able to move on. But first we will change in the desktop.php file

`` ``html
{% raw %}<label class="col-sm-3 control-label">{{Paramètre}}</label>{% endraw %}
`` ``

Par

`` ``html
{% raw %}<label class="col-sm-3 control-label">{{Type de vdm}}</label>{% endraw %}
`` ``

IMPORTANT : The text in braces corresponds to the text that will be translated if you push the plugin on the market.

For the rest, we will develop the plugin by choosing a type of vdm (random or spicy or tops) that we want as well as a personalized cron for each device.

# Use of options / parameters

To go further and understand the previous chapter, we will allow the user to choose a type of vdm (random or spicy or tops)

On pourrait le laisser taper dans l'input « Type de vdm » : random or spicy or tops but we will do otherwise by letting it choose via a select tag

If you have followed everything you should have in the desktop.php file

`` ``html
{% raw %}
<div class="form-group">
  <label class="col-sm-3 control-label">{{Type de vdm}}</label>
  <div class="col-sm-3">
    <input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/>
  </div>
</div>
{% endraw %}
`` ``

That we will replace by

`` ``html
{% raw %}
<div class="form-group">
  <label class="col-sm-3 control-label" >{{ Type de vdm }}</label>
  <div class="col-sm-3">
    <select class="form-control eqLogicAttr" data-l1key="configuration" data-l2key="kind ">
      <option value="aleatoire">{{Aleatoire}}</option>
      <option value="epicees">{{Coquin}}</option>
      <option value="tops">{{Best}}</option>
    </select>
  </div>
</div>
{% endraw %}
`` ``

Ici le paramètre «type» prendra la valeur du select choisi soit aleatoire ou epicees ou tops.

Now we will take into account our parameter in the randomVdm () function in the vdm.class.php file

Cherchez

`` ``php
$url = "http://www.viedemerde.fr/aleatoire";
`` ``

And replace with

`` ``php
$kind = $this->getConfiguration("type", "aleatoire"); //si le paramètre est vide ou n'existe pas, on prends le kind aleatoire
$url = "http://www.viedemerde.fr/{$type}";
`` ``

Now change the value of the select on an item of equipment, save and go to the dashboard to see what it looks like.
