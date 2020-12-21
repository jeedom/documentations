# Develop on Jeedom

> **IMPORTANT**
>
> This tutorial was written by ZygOm4t1k whom we warmly thank. You can find the original [here](https://forum.jeedom.com/viewtopic.php?f=27&t=37630#p621495)

Here is a short tutorial to explain how to create a plugin. For the example we will create a plugin which returns a sentence from the viedemerde site.en (The plugin will be scalable).

It does not replace the [official documentation](https://jeedom.github.io/plugin-template/en_US/)

# Create the plugin base

To start, you have to determine a name and an id (which must not exist)) :

- Name : Poop Life
- Id : vdm

Download the template plugin to have the [based](https://github.com/jeedom/plugin-template/archive/master.zip)

Unzip the file . Vous obtiendrez un dossier « plugin-template-master » contenant des dossiers 3rdparty , core , desktop…

Let's go.

Renommer le dossier « plugin-template-master » en « vdm » (l'id) du plugin.

1 / Open the plugin_info / info file.json and edit the.

````json
{
    "id" : "vdm",
    "name" : "Poop Life",
    "description" : "Plugin to retrieve the latest vdm",
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

Copier coller le code ci-dessus.

J'ai changé l'Id (vdm) , le nom , ajouter une Description , l'auteur et la catégorie.

require : version minimale de jeedom pour avoir accés au plugin sur le market.

Changelog, documentation, Language , compatibility nuls pour le moment. J'y reviendrai plus tard

2/ Nous allons renommer les fichiers nécessaires pour que le plugin soit reconnu par Jeedom

-   Renommer le fichier ``core/ajax/template.ajax.php`` en ``vdm.ajax.php``
-   Renommer le fichier ``core/class/template.class.php`` en ``vdm.class.php`` et ouvrez le pour l'éditer.
- Remplacer ``class template extends eqLogic {`` par ``class vdm extends eqLogic {``
- et ``class templateCmd extends cmd`` par ``class vdmCmd extends cmd``
- Renommer le fichier core/php/template.inc.php en core/php/vdm.inc.php
- Renommer le fichier desktop/php/template.php en desktop /php/vdm.php et ouvrez le.
- Remplacer ``$plugin = plugin::byId('template');`` By ``$plugin = plugin::byId(‘vdm');``
- Remplacer ``{% raw %}{{Ajouter un template}}{% endraw %}`` By ``{% raw %}{{Ajouter un équipement}}{% endraw %}``
- Remplacer ``<legend>{{Mes templates}}</legend>`` By ``{% raw %}<legend>{{Mes équipement}}</legend>{% endraw %}``
- Remplacer ``{% raw %}{{Name de l'équipement template}}{% endraw %}`` By ``{% raw %}{{Name de l'équipement }}{% endraw %}``
- Remplacer ``{% raw %}{{template param 1}}{% endraw %}`` By ``{% raw %}{{Paramètres}}{% endraw %}``
- Remplacer ``<?php include_file('desktop', 'template', 'js', 'template');?>`` By ``<?php include_file('desktop', vdm, 'js', vdm);?>``

Et rien d'autre , ne pas changer la ligne ``<?php include_file('core', 'plugin.template', 'js');?>``

- Renommer le fichier ``desktop/modal/modal.template.php`` en ``desktop/modal/modal.vdm.php``
- Renommer le fichier ``desktop/js/template.js`` en ``desktop/js/ vdm.js``
- Ouvrir le fichier ``plugin_info/install.php``

Et renommer les fonctions comme suit

````php
function vdm_install() {

}

function vdm_update() {

}


function vdm_remove() {

}
````

Here the plugin is ready but there remains the customization and the icon to update : [Documentation](https://doc.jeedom.com/en_US/dev/Icone_de_plugin)

Add the icon in the plugin_info folder under the name vdm_icon.png

in my case

![image](images/tutorial_vdm_icon.png)

Now we can copy the vdm folder into the Jeedom plugin folder and go to plugin management. We find the plugin.

![image](images/tutorial_vdm_plugin.png)

We activate it and then plugins / Monitoring / Vie de Merde

![image](images/tutorial_vdm_desktop1.png)

it's not right because the color of the most does not match the color of the icon.

I open the file ``desktop/php/desktop.php`` to correct.

````html
{% raw %}
      <div class="cursor eqLogicAction" data-action="add" style="text-align: center; background-color : #ffffff; height : 120px;margin-bottom : 10px;padding : 5px;border-radius: 2px;width : 160px;margin-left : 10px;" >
        <i class="fa fa-plus-circle" style="font-size : 6em;color:#94ca02;"></i>
        <br>
        <span style="font-size : 1.1st; position:relative; top : 23px; word-break: break-all; white-space: pre-wrap; word-wrap: break-word; color:#94ca02">{{Ajouter}}</span>
      </div>
{% endraw %}
````

Je remplace ``color:#94ca02;"`` par ``color:#00A9EC;"``

On remarque aussi que les textes ne sont pas alignés donc on rectifie le style de la configuration (propriété top)

````
{% raw %}<span style="font-size : 1.1st; position:relative; top : 15px; word-break: break-all; white-space: pre-wrap; word-wrap: break-word; color:#767676 "> {{Configuration}} </span>{% endraw %}
````

par

````
{% raw %}<span style="font-size : 1.1st; position:relative; top : 23px; word-break: break-all; white-space: pre-wrap; word-wrap: break-word; color:#767676 "> {{Configuration}} </span>{% endraw %}
````

![image](images/tutorial_vdm_desktop2.png)

Voilà la based est prête. Vous devriez avoir le plugin d'actyew mais pour le moment il ne fait rien.

# Les commandes

Le but du plugin sera de récupérer une vdm aléatoire et l'afficher sur le dashboard.

Il faut donc créer une commande de Type info pour stocker cette information. Elle sera de sous-Type « String » car c'est une chaîne de caractère.

Pour l'exemple nous allons ajouter une commande qui rafraîchit l'information. Ce sera donc une commande de Type action et sous-Type other

- Créer un équipement « vdm1 » en cliquant sur le +. Activate it and make it visible. Choisissez un objet et l'équipement doit apparaître sur le dashboard( selon l'objet).

A ce moment, il n'y a pas de commandes qui apparaissent dans l'onglet commande s, ni sur le widget.

Open the core / class / vdm.class file.php and search la fonction postSave() (Lire la doc du plugin template si pas encore fait)

On crée les 2 commandes

````php
public function postSave() {
    $info = $this->getCmd(null, 'story');
    yew (!is_object($info)) {
        $info = new vdmCmd();
        $info->setName(__('Histoire', __FILE__));
    }
    $info->setLogicalId('story');
    $info->setEqLogic_id($this->getId());
    $info->setType('info');
    $info->setSubType('string');
    $info->save();

    $refresh = $this->getCmd(null, 'refresh');
    yew (!is_object($refresh)) {
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

- Créer un autre équipement « vdm2 » en cliquant sur le +. In the commands tab, the commands appeared. Activate it and make it visible. Choose a parent object and see what it looks like on the dashboard.
- Enregistrer le premier équipement « vdm1 » pour créer les commandes. See the rendering on the widget too.

In the commands tab, you should see.

![image](images/tutorial_vdm_cmd1.png)

Open desktop / php / vdm.php to find the html code of this table.

````
{% raw %}
<a class="btn btn-success btn-sm cmdAction pull-right" data-action="add" style="margin-top:5px; "><i class="fa fa-plus-circle"></i> {{Orders}} </a><br/><br/>
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

At the time of display, it is the desktop / js / vdm script.js which is called and launches the addCmdToTable function.

````js
{% raw %}
function addCmdToTable (_cmd) {
    yew (!isset (_cmd)) {
        var _cmd = {configuration: {}};
    }
    yew (!isset (_cmd.configuration)) {
        _cmd.configuration = {};
    }
    <html>var tr = '.id) + '">';
    tr + = '<td> ';
    <html>tr + = ':none; "> ';
    <html>tr + = ' : 140px; "placeholder =" {{Name}} "> ';
    tr + = '</td> ';
    tr + = '<td> ';
    <html>tr + = '.type) + '">' + jeedom.cmd.availableType () + '';
    <html>tr + = '.subType) + '">';
    tr + = '</td> ';
    tr + = '<td> ';
    if (is_numeric (_cmd.id)) {
        tr + = '<a class="btn btn-default btn-xs cmdAction" data-action="configure"><i class="fa fa-cogs"></i></a> ';
        tr + = ' <a class="btn btn-default btn-xs cmdAction" data-action="test"><i class="fa fa-rss"></i>{{Test}}</a> ';
    }
    tr + = '<i class="fa fa-minus-circle pull-right cmdAction cursor" data-action="remove"></i> ';
    tr + = '</td> ';
    tr + = '</tr> ';
    $('#table_cmd tbody').append(tr);
    $('#table_cmd tbody tr:last').setValues(_cmd, '.cmdAttr');
    if (isset (_cmd.type)) {
        $('#table_cmd tbody tr:last .cmdAttr[data-l1key=type]').value(init(_cmd.type));
    }
    jeedom.cmd.changeType ($ ('# table_cmd tbody tr:last '), init (_cmd.subType));
}
{% endraw %}
````

Cela se fait automatiquement.

Je souhaite ajouter les options Affichage et historiser pour chaque commande.

J'édite le code l'opération à mener du tableau dans le fichier desktop.php en ajoutant une colonne ..

````
{% raw %}<th>{{Nom}}</th><th>{{Type}}</th><th>{{Configuration}}</th><th>{{Action}}</th>{% endraw %}
````

Puis éditer desktop.js ,trouver

````js
    <html>tr + = '.subType) + '">';
    tr + = '</td> ';
    tr + = '<td> ';
    if (is_numeric (_cmd.id)) {
````

We add the desired information.

````js
{% raw %}
    <html>tr + = '.subType) + '">';
    tr + = '</td> ';
    tr + = '<td> ';
    tr + = ' <span><input type="checkbox" class="cmdAttr checkbox-inline" data-l1key="isHistorized" />{{Historize</span>}}<br/></span>';
   tr + = ' <span><input type="checkbox" class="cmdAttr checkbox-inline" data-l1key="isVisible" />{{Display</span>}}<br/></span>';
   tr + = '</td> ';
    tr + = '<td> ';
    if (is_numeric (_cmd.id)) {
{% endraw %}
````

Je laisse le bouton pour créer une commande mais je souhaite qu'il soit à gauche.

````
{% raw %}<a class="btn btn-success btn-sm cmdAction pull-right" data-action="add" style="margin-top:5px; "><i class="fa fa-plus-circle"></i> {{Orders}} </a><br/><br/>{% endraw %}
````

Je change la class pull-right en pull-left

````
{% raw %}<a class="btn btn-success btn-sm cmdAction pull-left" data-action="add" style="margin-top:5px; "><i class="fa fa-plus-circle"></i> {{Orders}} </a><br/><br/>{% endraw %}
````

Vohere le rendu.The options de configuration (Affichage et historiser) sont bien présentes.

![image](images/tutorial_vdm_cmd2.png)

Voilà il reste à récupérer une vdm aléatoire et à utiliser les commandes.

# Récupération des informations

Pour récupérer une vdm de manière aléatoire.

````php
$url = "http://www.viedemerde.fr/aleatoire";
$data = file_get_contents($url);
@$dom = new DOMDocument();
libxml_use_internal_errors (false);
$dom->loadHTML('<?xml encoding="UTF-8">' .$data);
libxml_use_internal_errors (true);
$xpath = new DOMXPath($dom);
$divs = $xpath->query('//article[@class="art-panel col-xs-12"]//div[@class="panel-content"]//p//a');
return $ divs [0] -> nodeValue;
````

Open the core / class / vdm.class file.php and for the class vdm which inherits from egLogic methods, I create a function randomVdm

````php
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
````

Maintenant on va updater la commande info(story) avec cette information en lançant la commande action(refresh).
Toujours dans core/class/vdm.class.php pour la class vdmCmd on va utiliser la méthode execute

````php
public function execute($_options = array()) {

}
````

C'est here qu'on va définir ce qu'il va se passer quand on lance la commande « Rafraîchir ». The class vdmCmd inherited all the methods of the class cmd (Core jeedom)

On vérifie le logicalId de la commande lancée et si « refresh » on lance les actions

````php
switch ($ this-> getLogicalId()) {
    case 'refresh': // LogicalId of the refresh command that we created in the Postsave method of the vdm class .
    // code to refresh my order
    break;
}
````

Maintenant il reste à lancer la fonction randomVdm() . On récupère pour cela , l'eqLogic ( l'équipement) de la commande lancer et on lance la fonction

````php
$eqlogic = $this->getEqLogic(); // Récupération de l'eqlogic
$info = $eqlogic-> randomVdm() ; //Lance la fonction et stocke le résultat dans la variable $info
````

On met à jour la commande « story » avec la variable $info. We will use the checkAndUpdateCmd method of the eqlogic class

````php
$eqlogic->checkAndUpdateCmd('story', $info);
````

Ce qui donne au final

````php
public function execute($_options = array()) {
    $eqlogic = $this->getEqLogic(); //récupère l'éqlogic de la commande $this
    switch ($ this-> getLogicalId()) {    //vérifie le logicalId de la commande
        case 'refresh': // LogicalId of the refresh command that we created in the Postsave method of the vdm class .
            $info = $eqlogic->randomVdm();  //On lance la fonction randomVdm() pour récupérer une vdm et on la stocke dans la variable $info
            $eqlogic->checkAndUpdateCmd('story', $info); // on met à jour la commande avec le LogicalId "story"  de l'eqlogic
            break;
    }
}
````

Now go to a created device and launch the Refresh command. Puis la commande « Histoire » qui doit être à jour.

On the Dashboard, information appears. Click on the refresh icon to change the information

We will then define the size of the widget and customize it a little

Then automate the refresh.

# Update information (cron)

The plugin is functional but for the moment it does not do much. Si vous cliquer sur la commande « refresh » , la commande « story » se met à jour mais sinon rien.

Note that for the order I name it by logicalId. And it's important. Having a unique logicalId per device (eqLogic) simplifies things.

We will now see how to update the command using the native functions of the core : Crons

There are several of them :

- cron : refresh every minute
- Cron5 : refresh every 5 minutes
- Cron15 : refresh every 15 minutes
- Cron30 : refresh every 30 minutes
- CronHourly : uh .. every hour
- CronDaily : well 1 / day

Considering the plugin we will update every hour (let's be crazy). So we will use the cronHourly function().

We will therefore open the vdm.class file.php and search

````php
/*
 * Function performed automatically every hour by Jeedom
  public static function cronHourly() {

  }
 */
````

Décommenter le code

````php
public static function cronHourly() {

}
````

Our function is operational

Now you have to recover all the equipment from our plugin,

````php
self::byType ('vdm') // array containing all the plugin equipment
````

et les trier 1 par 1

````php
foreach (self::byType('vdm') as $vdm) {

}
````

Before doing anything we check that the equipment is active

````php
if ($ vdm-> getIsEnable () == 1) {

}
````

Voila maintenant on recherche la commande « refresh » de l'équipement (eqLogic)

````php
$cmd = $vdm->getCmd(null, 'refresh');
````

If it does not exist we continue the loop (foreach) otherwise we execute it

````php
yew (!is_object ($ cmd)) {
continue;
}
$cmd->execCmd();
````

Ce qui donne au final

````php
public static function cronHourly () {
    foreach (self::byType('vdm') as $vdm) {//parcours tous les équipements du plugin vdm
        if ($ vdm-> getIsEnable () == 1) {//vérifie que l'équipement est actif
            $cmd = $vdm->getCmd(null, 'refresh');//retourne la commande "refresh si elle existe
            yew (!is_object ($ cmd)) {// If the command does not exist
              keep on going; // continue the loop
            }
            $cmd->execCmd(); // la commande existe on la lance
        }
    }
}
````

Pour tester, dans jeedom , aller dans configuration/moteur de tâches et lancer le cron de class « plugin » fonction « CronHourly ».

Information is updated.

It's good but it doesn't suit me. A la création de l'équipement, la commande « story » ne se met pas à jour.

So we improve the code.

For the creation of the orders we used the postSave method(). We will use the postUpdate () method to update the information.

The easiest way since there is only one command and it is created in postSave

````php
    public function postUpdate() {
        $cmd = $this->getCmd(null, 'refresh'); // On recherche la commande refresh de l'équipement
        if (is_object ($ cmd)) {// it exists and we run the command
             $cmd->execCmd();
        }
    }
````

Il faut tester, ça fonctionne?

Mais vohere une alternative qui peut s'avérer plus utile dans des cas plus complexe

Dans la fonction postUpdate() , on lance la function cronHourly() avec l'Id de l'équipement

````php
public function postUpdate() {
    self::cronHourly($this->getId());// lance la fonction CronHourly avec l'Id de l'eqLogic
}
````

But in this case we change the cronHourly function()

````php
public static function cronHourly ($ _ eqLogic_id = null) {
    if ($ _eqLogic_id == null) {// The function has no argument so we search for all the plugin equipment
        $eqLogics = self::byType('vdm', true);
    } else {// The function has the (unique) argument id of a device (eqLogic)
        $eqLogics = array(self::byId($_eqLogic_id));
    }

    foreach ($ eqLogics as $ vdm) {
        if ($ vdm-> getIsEnable () == 1) {// check that the device is active
            $cmd = $vdm->getCmd(null, 'refresh');//retourne la commande "refresh si elle existe
            yew (!is_object ($ cmd)) {// If the command does not exist
              keep on going; // continue the loop
            }
            $cmd->execCmd(); // la commande existe on la lance
        }
    }
}
````

Après vous pouvez changer la fréquence du cron selon l'importance de vos informations à récupérer.

Je ne peux que vous invitez à prendre le temps d'aller sur cette page pour en savoir plus ==> [here](https://jeedom.github.io/documentation/phpdoc/index.html)

Et encore mieux d'aller sur le github du core ==> [here](https://github.com/jeedom/core/tree/alpha/core/class)

Mettez le nez de dedans pour maîtrisez encore plus .

Le plugin est fonctionnel en l'état.

Je prendrai le temps d'ajouter la façon de mettre en place un cron personnalisé selon l'équipement .

# Le widget

Pas une mince affaire le widget mais on va rester sur le widget par défaut pour le moment.

Si vous n'avez rien touché, équipement activé et visible, le widget prend toute la largeur de l'écran. On va donc le changer.

La commande qui apparaît est la commande «story» de Type info , sous-Type string

Mon plaisir est de me lever le matin est de lire une vdm au réveil. Ça me permet de voir qu'il y a pire que moi :D

Mais je n'ai pas mes lunettes et actuellement le rendu sur le widget ne me permet pas de le lire…

Donc on va changer le style en affectant un template à la commande « story»

Rien de plus simple.

Je vais voir ==> [here](https://github.com/jeedom/core/tree/alpha/core/template/dashboard)

Je cherche un template pour cmd.info.string( notre commande est de Type info sous-Type string) .Pas difficile il y en a que deux (default ou tile)

J'applique le template « cmd.info.string.tile.l'opération à mener » à ma commande.

Pour cela j'ouvre le fichier vdm.class.php , fonction postSave() et j'ajoute le template « tile » pour la commande « story » en appliquant la méthode setTemplate()

````php
$info = $this->getCmd(null, 'story');
yew (!is_object($info)) {
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

It's better but the widget always takes the width of the dashboard. So we will correct. By défaut la largeur du widget de l'équipement(eqLogic) et la hauteur sont à « auto ».

We will therefore change the width of the widget (equipment => eqLogic) using the setDisplay () method inherited from the eqLogic class .We leave the height in auto.

To do this, simply add

````php
$this->setDisplay("width","800px");
````

Oui , mais !! Car il y a un mais. Essayez d'ajouter ça dans la fonction postsave() ou postUpdate() et ça ne prends pas en compte le changement. Pourquoi ? Ben faut lire la doc du plugin template ==>ICI

Maintenant que vous avez bien lu vous savez qu'Il faut utiliser la méthode preSave()

````php
public function preSave() {
    $this->setDisplay("width","800px");
}
````

Register equipment and refresh the dashboard.


# The settings. The options

> **IMPORTANT**
>
> This is an important chapter and you have to understand it before moving on.

For the moment, we therefore use 3 classes of the core of jeedom : EqLogic, cmd, cron . Go for info, We add a 4th with the class plugin in the vdm file.php that you open and leave open because we are going to edit it .

````php
$plugin = plugin::byId('vdm'); // appelle la classe plugin du core
````

Il faut comprendre que tout est fait pour nous faciliter la tâche.

Pour un paramètre/une option interne au plugin , on va utiliser une des méthodes de la class eqLogic du core : setConfiguration() en y ajoutant les paramètres que l'on souhaite. By exemple :

````php
$this->setConfiguration("type","mon_type"); // si on veut  définir un paramètre Type de valeur mon_type. Comme on a défini la largeur du widget via la méthode setDisplay()
````

To leave the choice to the user, we return to the desktop file.php that you left open because you follow this TP literally :D

Chercher

````
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="city" placeholder="param1"/>
````

And replace with

````
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/> //IMPORTANT de laisser la classe eqLogicAttr
````

Save and go to a plugin device that you have already created by following this lab (Refresh if necessary).

Dans le champs « Paramètre» d'un équipement, taper « aleatoire » et sauvegarder.

Perfect the setting is saved.

![image](images/tutorial_parametre1.png)


It's simple, no? . C'est pourquoi il ne faut surtout pas toucher à cette ligne de code comme indiqué dans le premier menu « test » . He does all the work

````
<?php include_file('core', 'plugin.template', 'js');?>//Chargement du fichier core/js/plugin.template.js (en partant de la racine du site)
````

If you take a closer look at the desktop file.php ago

````
<input type="text" class="eqLogicAttr form-control" data-l1key="id" style="display : none;" /> // retourne l'id(unique) de l'eqLogic(équipement) . Qu'on va pouvoir récupérer via $this->getId() ;
````

````
{% raw %}
<input type="text" class="eqLogicAttr form-control" data-l1key="name" placeholder="{{Name de l'équipement}}"/>// retourne le nom de l'eqLogic(équipement) . Qu'on va pouvoir récupérer via $this->getName() ;
{% endraw %}
````

Etc…

If you have understood all of this well, we will be able to move on. But first we will change in the desktop.php file

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

IMPORTANT : The text in braces corresponds to the text that will be translated if you push the plugin on the market

For the rest, we will develop the plugin by choosing a type of vdm (random or spicy or tops) that we want as well as a personalized cron for each device.

# Use of options / parameters

To go further and understand the previous chapter, we will leave it to the user to choose a type of vdm (random or spicy or tops)

On pourrait le laisser taper dans l'input « Type de vdm » : random or spicy or tops but we will do otherwise by letting it choose via a select tag

If you have followed everything, you should have in the file desktop.php

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

Which we will replace with

````
{% raw %}
<div class="form-group">
    <label class="col-sm-3 control-label" >{{ Type de vdm }}</label>
    <div class="col-sm-3">
        <select class="form-control eqLogicAttr" data-l1key="configuration" data-l2key="Type ">
            <option value="aleatoire">{{Aleatoire}}</option>
            <option value="epicees">{{Coquin}}</option>
            <option value="tops">{{Best}}</option>
        </select>
    </div>
</div>
{% endraw %}
````

Ici le paramètre « type» prendra la valeur du select choisi soit aléatoire ou epicees ou tops.

Now we will take into account our parameter in the randomVdm () function in the vdm.class.php file

Chercher

````php
$url = "http://www.viedemerde.fr/aleatoire";
````

And replace with

````php
$Type = $this->getConfiguration("Type ");
if($Type == "") { //si le paramètre est vide ou n'existe pas
    $Type = "aleatoire"; //on prends le Type aleatoire
}
$url = "http://www.viedemerde.fr/" .$Type  ;
````

Now change the value of the select on a device, save and go to the dashboard to see what it gives.
