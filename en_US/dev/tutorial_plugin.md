# 

> **IMPORTANT**
>
> .  [here](https:forum.jeedom.comviewtopic.php?f=27&t=37630#p621495)

. . .()

 [](https:doc.jeedom.com/en_US/dev)

# 

)

 : 
 : vdm

 [](https:github.comjeedomplugin-templatearchivemaster.zip)

. Vous obtiendrez un dossier « plugin-template-master » contenant des dossiers 3rparty, core, desktop…

.

> **IMPORTANT**
>
>.
>.
>.

 :





.


Renommez le dossier « plugin-template-master » en «  » (l'id) du plugin.

..

json
{
  "id" : "vdm",
  "name" : "",
  "description" : "",
  "licence" : "AGPL",
  "author" : "",
  "require" : "",
  "category" : "monitoring",
  "changelog" : "",
  "documentation" : "",
  "language" : "",
  "compatibility" : ""
}


.

 *(vdm)*, .

 : .

. 



- .

- ...

Remplacez

php



par

php



------------------------

php



par

php



- .
- ..

 :

php
$plugin = plugin::byId('template')


Par

php
$plugin = plugin::byId('vdm')


------------------------

html
{% raw %}<legend><i class="fas fa-table"><i> {{Mes templates}}<legend>{% endraw %}


Par

html
{% raw %}<legend><i class="fas fa-table"><i> {{Mes équipements}}<legend>{% endraw %}


------------------------

php
<?php include_file('desktop', 'template', 'js', 'template')?>


Par

php
<?php include_file('desktop', 'vdm', 'js', 'vdm')?>


 , **** ``<?php include_file('core', 'plugin.template', 'js')?>``.

- .

- .

- .

php
() {
}

() {
}

() {
}


 : [](https:doc.jeedom.com/en_US/devIcone_de_plugin)





![image](imagestutorial_vdm_icon.png)

. .

![image](imagestutorial_vdm_plugin.png)



. .

# 

.

. Elle sera de sous- « string » car c'est une chaîne de caractère.

. 

-Créez un équipement « vdm1 » en cliquant sur le +. . ).

.

.)



php
() {
  $ = $this->getCmd(null, 'story')
  if (!)) {
    $ = new vdmCmd()
    $info->setName(__('Histoire', __FILE__))
  }
  $info->setLogicalId('story')
  $info->setEqLogic_id($this->getId())
  $info->setType('info')
  $info->setSubType('string')
  $info->save()

  $refresh = $this->getCmd(null, 'refresh')
  if (!)) {
    $refresh = new vdmCmd()
    $refresh->setName(__('Rafraichir', __FILE__))
  }
  $refresh->setEqLogic_id($this->getId())
  $refresh->setLogicalId('refresh')
  $refresh->setType('action')
  $refresh->setSubType('other')
  $refresh->save()
}


- Créez un autre équipement « vdm2 » en cliquant sur le +. . . .

- Enregistrez le premier équipement « vdm1 » pour créer les commandes. .

.

![image](imagestutorial_vdm_cmd1.png)

..

html
{% raw %}
<!-- Onglet des commandes de l'équipement -->
<div role="tabpanel" class="tab-pane" id="commandtab">
<a class="btn btn-default btn-sm pull-right cmdAction" data-action="add" style="margin-top:5px"><i class="fas fa-plus-circle"><i> {{Ajouter une commande}}<a>
<br><br>
<div class="table-responsive">
<table id="table_cmd" class="table table-bordered table-condensed">
<thead>
<tr>
<th>{{Id}}<th>
<th>{{Nom}}<th>
<th>{{Type}}<th>
<th>{{Paramètres}}<th>
<th>{{Options}}<th>
<th>{{Action}}<th>
<tr>
<thead>
<tbody>
<tbody>
<table>
<div>
<div><!-- .tabpanel #commandtab-->
{% endraw %}


..

html
{% raw %}
*  *
) {
  if (!)) {
    : {} }
  }
  if (!)) {
    
  }
  .
  :
  
  
  ::
  
  
  
   :  : 
  
  
  
  
  
   : 
  
  
  
  
  ..
  .
  
  ::
  .}}" .}}" :30%display:
  .}}" .}}" :30%display:
  :30%display:
  
  ::
  
  
  
  
  ::
  .id)) {
    
    
  }
  
  
  $('#table_cmd tbody').append(tr)
  
  ({
    id: $('.eqLogicAttr[data-l1key=id]').value(),
    filter: { type: 'info' },
    error: ) {
      $('#div_alert').showAlert({ message: .message, level: 'danger' })
    },
    success: ) {
      
      
      
    }
  })
}
{% endraw %}


.

.

# 

.

php
$url = "http:www.viedemerde.fraleatoire"
$data = file_get_contents($url)
@$dom = new DOMDocument()

$dom->loadHTML('<?xml encoding="UTF-8">' .$data)

$xpath = new DOMXPath($dom)
$divs = $xpath->query('article[@class="art-panel col-xs-12"]div[@class="panel-content"]pa')



.

php
() {
  $url = "http:www.viedemerde.fraleatoire"
  $data = file_get_contents($url)
  @$dom = new DOMDocument()
  
  $dom->loadHTML($data)
  
  $xpath = new DOMXPath($dom)
  $divs = $xpath->query('article[@class="art-panel col-xs-12"]div[@class="panel-content"]pa')
  
}


).
.

php
()) {
}


C'est here qu'on va définir ce qu'il va se passer quand on actionne la commande « Rafraîchir ». )

On vérifie le logical de la commande lancée et si « refresh » on lance les actions

php
()) {
  ':  .
  
  break
}


(). .

php
$eqlogic = $this->getEqLogic() Récupération de l'eqlogic
$ = $eqlogic->randomVdm()  Lance la fonction et stocke le résultat dans la variable $info


On met à jour la commande « story » avec la variable $info. 

php
$eqlogic->checkAndUpdateCmd('story', $info)




php
()) {
  $eqlogic = $this->getEqLogic() récupère l'éqlogic de la commande $this
  
    ':  .
    $ = $eqlogic->randomVdm() On lance la fonction randomVdm() pour récupérer une  et on la stocke dans la variable $info
    $eqlogic->checkAndUpdateCmd('story', $info) on met à jour la commande avec le Logical "story"  de l'eqlogic
    break
  }
}


. Puis la commande « Histoire » qui doit être à jour.

. .

.

# )

. Si vous cliquez sur la commande « refresh » , la commande « story » se met à jour mais sinon rien.

. . .

 : 

 :

-  : 
-  : 
-  : 
-  : 
-  : 
-  : 1jour

). ().

.

php
*
* 
() {
}
*




php
() {
}




,

php
self::)




php
::) {
}


Voila maintenant on recherche la commande « refresh » de l'équipement (eqLogic)

php
$cmd = $vdm->getCmd(null, 'refresh')




php
if (!)) {
  continue
}
$cmd->execCmd()




php
 () {
  ::
    $cmd = $vdm->getCmd(null, 'refresh') retourne la commande "refresh" si elle existe
    if (!
    
  }
  $cmd->execCmd() la commande existe on la lance
}
}


Pour tester, dans jeedom, allez dans configurationmoteur de tâches et lancer le  de class « plugin » fonction «  »
.

. A la création de l'équipement, la commande « story » ne se met pas à jour.

.

(). .



php
() {
  $cmd = $this->getCmd(null, 'refresh') On recherche la commande refresh de l'équipement
  
    $cmd->execCmd()
  }
}


?





php
() {
  self::
}


()

php
) {
  
    $eqLogics = self::byType('vdm', true)
    } else { //The function has the argument id(unique) of a device(eqLogic)
      $eqLogics = array(self::byId($_eqLogic_id))
    }

    foreach ($eqLogics as $vdm) {
      $cmd = $vdm->getCmd(null, 'refresh') retourne la commande "refresh si elle existe
      if (!
      
    }
    $cmd->execCmd() la commande existe on la lance
  }
}


Afterwards you can change the frequency of the cron according to the importance of your information to be retrieved.

I can only invite you to take the time to go to this page to find out more ==> [here](https:doc.jeedom.comdevphpdoc4.1)

And even better to go to the core github ==> [HERE](https:github.comjeedomcore)

Get your nose in it to master even more .

The plugin is functional as is.

I will take the time to add how to set up a custom cron depending on the equipment .

# The widget

Not an easy task the widget but we will stick with the default widget for the moment.

If you have not touched anything, equipment activated and visible, the widget takes the entire width of the screen. So we're going to change it.

La commande qui apparaît est la commande «story» de  info, sous- string.

My pleasure is to get up in the morning and read a VDM when I wake up. It allows me to see that there are people worse off than me :D

But I don't have my glasses and currently the rendering on the widget doesn't allow me to read it

Donc on va changer le style en affectant un template à la commande « story»

Nothing could be simpler.

I will see ==> [HERE](https:github.comjeedomcoretreealphacoretemplatedashboard)

I am looking for a template for cmd.info.string( our command is of type info subtype string) .Not difficult there are only two (default or tile))

J'applique le template « cmd.info.string.tile.html » à ma commande.

For this I open the vdm.class file.php , fonction postSave() et j'ajoute le template « tile » pour la commande « story » en appliquant la méthode setTemplate()

php
$ = $this->getCmd(null, 'story')
if (!)) {
  $ = new vdmCmd()
  $info->setName(__('Histoire', __FILE__))
}
$info->setLogicalId('story')
$info->setEqLogic_id($this->getId())
$info->setType('info')
$info->setTemplate('dashboard','tile')template pour le dashboard
$info->setSubType('string')
$info->save()


Refresh the dashboard.

It's better but the widget still takes the width of the dashboard. So we will correct.  défaut la largeur du widget de l'équipement(eqLogic) et la hauteur sont à « auto ».

We will therefore change the width of the widget (equipment => eqLogic) using the setDisplay() method inherited from the eqLogic class .We leave the height in auto.

To do this, simply add

php
$this->setDisplay("width","800px")


Yes, but !! Because there is a but. Try adding this in the postsave() or postUpdate() function and it doesn't take the change into account. For what ? Well, you have to read the docs for the template plugin ==>HERE

Now that you have read it well you know that you must use the preSave method()

php
public function preSave() {
  $this->setDisplay("width","800px")
}


Save equipment and refresh the dashboard.

# The settings. The options

> **IMPORTANT**
>
> This is an important chapter and it must be understood before moving on.

For the moment, we have therefore used 3 classes from the Jeedom core : EqLogic, cmd, cron. Go for info, we add a 4th one with the plugin class in the vdm file.php that you open and leave open because we are going to edit it.

php
$plugin = plugin::byId('vdm')  appelle la classe plugin du core


We must understand that everything is done to make our task easier.

For a parameter/option internal to the plugin, we will use one of the methods of the core eqLogic class: setConfiguration() adding the desired parameters. For example:

php
$this->setConfiguration("type","mon_type")  si on veut définir un paramètre  de valeur mon_type. Comme on a défini la largeur du widget via la méthode setDisplay()


To give the user a choice, we return to the desktop file.php that you left open because you are following this TP to the letter :D

Cherchez

html
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="city" placeholder="param1">


And replace with

html
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"> Important de laisser la classe eqLogicAttr


Save and go to a plugin equipment that you have already created by following this TP (Refresh if necessary)).

Dans le champs «Paramètre» d'un équipement, tapez «aléatoire» et sauvegardez.

Perfect the setting is saved.

![image](imagestutorial_parametre1.png)

It's simple, right?? . C'est pourquoi il ne faut surtout pas toucher à cette ligne de code comme indiqué dans le premier menu « test ». He is the one who does all the work

php
<?php include_file('core', 'plugin.template', 'js')?> Chargement du fichier corejsplugin.template.js (en partant de la racine du site)


If you look more closely at the desktop file.php there is

html
<input type="text" class="eqLogicAttr form-control" data-l1key="id" style="display:none" >  retourne l'id(unique) de l'eqLogic(équipement) que l'on va pouvoir récupérer via $this->getId() 


html
{% raw %}<input type="text" class="eqLogicAttr form-control" data-l1key="name" placeholder="{{ de l'équipement}}"> retourne le nom de l'eqLogic(équipement) que l'on va pouvoir récupérer via $this->getName(){% endraw %}


Etc…

If you have understood all of this well, we can move on to the next step. But first we will change in the desktop.php file

html
{% raw %}<label class="col-sm-3 control-label">{{Paramètre}}<label>{% endraw %}


Par

html
{% raw %}<label class="col-sm-3 control-label">{{Type de vdm}}<label>{% endraw %}


Important : The text in curly brackets is the text that will be translated if you push the plugin to the market.

For the rest, we will develop the plugin by choosing a type of vdm (random or spicy or tops) that we want as well as a personalized cron for each equipment.

# Using Options/Parameters

To go further and understand the previous chapter, we will allow the user to choose a type of vdm (random or spicy or tops)

On pourrait le laisser taper dans l'input « Type de  » : random or spicy or tops but we will do it differently by letting him choose via a select tag

If you followed everything, you should have in the desktop.php file

html
{% raw %}
<div class="form-group">
  <label class="col-sm-3 control-label">{{Type de vdm}}<label>
  <div class="col-sm-3">
    <input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option">
  <div>
<div>
{% endraw %}


Which we will replace with

html
{% raw %}
<div class="form-group">
  <label class="col-sm-3 control-label" >{{ Type de  }}<label>
  <div class="col-sm-3">
    <select class="form-control eqLogicAttr" data-l1key="configuration" data-l2key=" ">
      <option value="aleatoire">{{Aleatoire}}<option>
      <option value="epicees">{{Coquin}}<option>
      <option value="tops">{{Best}}<option>
    <select>
  <div>
<div>
{% endraw %}


Ici le paramètre «type» prendra la valeur du select choisi soit aleatoire ou epicees ou tops.

Now we will take into account our parameter in the randomVdm() function in the vdm.class.php file

Cherchez

php
$url = "http:www.viedemerde.fraleatoire"


And replace with

php
$ = $this->getConfiguration("type", "aleatoire") si le paramètre est vide ou n'existe pas, on prends le  aleatoire
$url = "http:www.viedemerde.fr{$type}"


Now change the select value on a device, save and go to the dashboard to see what it looks like.
