# Develop on Jeedom

> **IMPORTANT**
>
> This tutorial was written by ZygOm4t1k whom we warmly thank. You can find the original [here](https://forum.jeedom.com/viewtopic.php?f=27&t=37630#p621495)

Here is a short tutorial to explain how to create a plugin. For the example we will create a plugin which returns a sentence from the viedemerde site.en (The plugin will be scalable).

It does not replace the official documentation in any way.

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

2/ Nous allons renommer les fichiers nécessaires pour que le plugin soit reconnu by Jeedom

-   Renommer le fichier ``core/ajax/template.ajax.php`` en ``vdm.ajax.php``
-   Renommer le fichier ``core/class/template.class.php`` en ``vdm.class.php`` et ouvrez le pour l'éditer.
- Remplacer ``class template extends eqLogic {`` by ``class vdm extends eqLogic {``
- et ``class templateCmd extends cmd`` by ``class vdmCmd extends cmd``
- Renommer le fichier core/php/template.inc.php en core/php/vdm.inc.php
- Renommer le fichier desktop/php/template.php en desktop /php/vdm.php et ouvrez le.
- Remplacer ``$plugin = plugin::byId('template');`` Par ``$plugin = plugin::byId(‘vdm');``
- Remplacer ``{% raw %}{{Ajouter}}{% endraw %}`` Par ``{% raw %}{{Ajouter un équipement}}{% endraw %}``
- Remplacer ``{% raw %}<legend>{{Mes templates}}</legend>{% endraw %}`` Par ``{% raw %}<legend>{{Mes équipements}}</legend>{% endraw %}``
- Modifier ``{% raw %}{{Aucun équipement Template n'est parametré}}{% endraw %}`` Par ``{% raw %}{{Aucun équipement NomEquipement n'est parametré}}{% endraw %}``
- Remplacer ``<?php include_file('desktop', 'template', 'js', 'template');?>`` Par ``<?php include_file('desktop', 'vdm', 'js', 'vdm');?>``

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

Je remplace ``color:#94ca02;"`` by ``color:#00A9EC;"``

On remarque aussi que les textes ne sont pas alignés donc on rectifie le style de la configuration (propriété top)

````html
{% raw %}<span style="font-size : 1.1st; position:relative; top : 15px;word-break: break-all; white-space: pre-wrap; word-wrap: break-word; color:#767676 "> {{Configuration}} </span>{% endraw %}
````
par

````html
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

Ouvrir le fichier core/class/vdm.class.php et chercher la fonction postSave() (Lire la doc du plugin template si pas encore fait)

On crée les 2 commandes

````php
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

````html
{% raw %}<th>{{Nom}}</th><th>{{Type}}</th><th>{{Configuration}}</th><th>{{Action}}</th>{% endraw %}
````

Then edit desktop.js, find

````js
    <html>tr + = '.subType) + '">';
    tr + = '</td> ';
    tr + = '<td> ';
    if (is_numeric (_cmd.id)) {
````

On ajoute les informations souhaitées.

````js
{% raw %}
    <html>tr + = '.subType) + '">';
    tr + = '</td> ';
    tr + = '<td> ';
    tr += '<span><input type="checkbox" class="cmdAttr checkbox-inline" data-l1key="isHistorized" /> {{Historiser}}<br/></span>';
   tr += '<span><input type="checkbox" class="cmdAttr checkbox-inline" data-l1key="isVisible" /> {{Affichage}}<br/></span>';
   tr + = '</td> ';
    tr + = '<td> ';
    if (is_numeric (_cmd.id)) {
{% endraw %}
````

I leave the button to create an order but I want it to be on the left.

````html
{% raw %}<a class="btn btn-success btn-sm cmdAction pull-right" data-action="add" style="margin-top:5px; "><i class="fa fa-plus-circle"></i> {{Orders}} </a><br/><br/>{% endraw %}
````

Je change la class pull-right en pull-left

````html
{% raw %}<a class="btn btn-success btn-sm cmdAction pull-left" data-action="add" style="margin-top:5px; "><i class="fa fa-plus-circle"></i> {{Orders}} </a><br/><br/>{% endraw %}
````

Here is the rendering.The configuration options (Display and log) are present.

![image](images/tutorial_vdm_cmd2.png)

Here it remains to recover a random vdm and to use the commands.

# Information retrieval

To retrieve a vdm randomly.

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

Ouvrir le fichier core/class/vdm.class.php et pour la class vdm qui hérite des méthodes egLogic, je crée une fonction randomVdm

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

Now we will update the info (story) command with this information by launching the action (refresh).
Still in core / class / vdm.class.php for the vdmCmd class we will use the execute method

````php
public function execute ($ _ options = array()) {

}
````

C'est here qu'on va définir ce qu'il va se passer quand on lance la commande « Rafraîchir ». La classe vdmCmd a hérité de toutes les méthodes de la class cmd (Core jeedom)

On vérifie le logicalId de la commande lancée et si « refresh » on lance les actions

````php
switch ($this->getLogicalId()) {
    case 'refresh': // LogicalId of the refresh command that we created in the Postsave method of the vdm class .
    // code pour rafraîchir ma commande
    break;
}
````

Now it remains to launch the randomVdm function() . For this, we recover the eqLogic (the equipment) from the launch command and we launch the function

````php
$eqlogic = $this->getEqLogic(); // Récupération de l'eqlogic
$info = $eqlogic-> randomVdm() ; //Lance la fonction et stocke le résultat dans la variable $info
````

On met à jour la commande « story » avec la variable $info. On va utiliser la méthode checkAndUpdateCmd de la class eqlogic

````php
$eqlogic->checkAndUpdateCmd('story', $info);
````

Which ultimately gives

````php
public function execute ($ _ options = array()) {
    $eqlogic = $this->getEqLogic(); //récupère l'éqlogic de la commande $this
    switch ($ this-> getLogicalId ()) {// check the logicalid of the command
        case 'refresh': // LogicalId of the refresh command that we created in the Postsave method of the vdm class .
            $info = $eqlogic->randomVdm();  //On lance la fonction randomVdm() pour récupérer une vdm et on la stocke dans la variable $info
            $eqlogic->checkAndUpdateCmd('story', $info); // on met à jour la commande avec le LogicalId "story"  de l'eqlogic
            break;
    }
}
````

Maintenant aller dans un équipement créé et lancer la commande Rafraîchir. Puis la commande « Histoire » qui doit être à jour.

Sur le Dashboard, les informations apparaissent. Cliquez sur l'icône refresh pour changer l'information

On va définir ensuite la taille du widget et le customiser un peu

Puis automatiser le refresh.

# Update des informations (cron)

Le plugin est fonctionnel mais pour l'instant il ne fait pas grand-chose. Si vous cliquer sur la commande « refresh » , la commande « story » se met à jour mais sinon rien.

A noter que pour la commande je la nomme by logicalId. Et c'est important. Avoir un logicalId unique by équipement (eqLogic) simplifie les choses.

On va voir maintenant comment mettre à jour la commande en utilisant les fonctions natives du core : Les crons

Il y en a plusieurs :

- cron : rafraichissement toutes les minutes
- cron5 : rafraichissement toutes les 5 minutes
- cron15 : rafraichissement toutes les 15 minutes
- cron30 : rafraichissement toutes les 30 minutes
- cronHourly : euh.. toutes les heures
- cronDaily : ben 1/jour

Vu le plugin on va effectuer une mise à jour toutes les heures (soyons fous). On va donc utiliser la fonction cronHourly().

On va donc ouvrir le fichier vdm.class.php et chercher

````php
/*
 * Fonction exécutée automatiquement toutes les heures by Jeedom
  public static function cronHourly() {

  }
 */
````

Uncomment the code

````php
public static function cronHourly() {

}
````

Notre fonction est opérationnelle

Maintenant il faut récupérer tous les équipements de notre plugin,

````php
self::byType('vdm') //array contenant tous les équipements du plugin
````

and sort them 1 by 1

````php
foreach (self::byType ('vdm') as $ vdm) {

}
````

Avant d'effectuer quoique ce soit on vérifie que l'équipement est actif

````php
yew ($vdm->getIsEnable() == 1) {

}
````

Voila maintenant on recherche la commande « refresh » de l'équipement (eqLogic)

````php
$cmd = $vdm->getCmd(null, 'refresh');
````

Si elle n'existe pas on continue la boucle (foreach) sinon on l'exécute

````php
yew (!is_object($cmd)) {
continue;
}
$cmd->execCmd();
````

Which ultimately gives

````php
public static function cronHourly () {
    foreach (self::byType ('vdm') as $ vdm) {// browse all the devices of the vdm plugin
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

Pour tester, dans jeedom , aller dans configuration/moteur de tâches et lancer le cron de class « plugin » fonction « cronHourly ».

L'information se met à jour.

C'est bien mais ça ne me convient pas. A la création de l'équipement, la commande « story » ne se met pas à jour.

On améliore donc le code.

Pour la création des commandes nous avons utilisé la méthode postSave(). On va utiliser la méthode postUpdate() pour mettre à jour l'information.

La manière la plus simple vu qu'il n'y a qu'une commande et qu'elle est créé en postSave

````php
    public function postUpdate() {
        $cmd = $this->getCmd(null, 'refresh'); // On recherche la commande refresh de l'équipement
        yew (is_object($cmd)) { //elle existe et on lance la commande
             $cmd->execCmd();
        }
    }
````

You have to test, it works?

But here is an alternative which may prove more useful in more complex cases

In the postUpdate () function, we launch the cronHourly () function with the equipment id

````php
public function postUpdate() {
    self::cronHourly ($ this-> getId ()); // start the cronHourly function with the id of the eqLogic
}
````

Mais dans ce cas on change la fonction cronHourly()

````php
public static function cronHourly($_eqLogic_Id = null) {
    yew ($_eqLogic_Id == null) { // La fonction n'a pas d'argument donc on recherche tous les équipements du plugin
        $eqLogics = self::byType('vdm', true);
    } else {// La fonction a l'argument id(unique) d'un équipement(eqLogic)
        $eqLogics = array(self::byId($_eqLogic_id));
    }

    foreach ($eqLogics as $vdm) {
        yew ($vdm->getIsEnable() == 1) {//vérifie que l'équipement est acitf
            $cmd = $vdm->getCmd(null, 'refresh');//retourne la commande "refresh si elle existe
            yew (!is_object ($ cmd)) {// If the command does not exist
              keep on going; // continue the loop
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

La commande qui apparaît est la commande «story» de Type info , sous-Type string

My pleasure is to wake up in the morning is to read a vdm in the morning. It allows me to see that there is worse than me :D

But I don't have my glasses and currently rendering on the widget does not allow me to read it

Donc on va changer le style en affectant un template à la commande « story»

Nothing's easier.

I will see ==> [here](https://github.com/jeedom/core/tree/alpha/core/template/dashboard)

I'm looking for a template for cmd.info.string (our command is of type info subtype string) .Not difficult there are only two (default or tile)

J'applique le template « cmd.info.string.tile.l'opération à mener » à ma commande.

For that I open the vdm.class file.php , fonction postSave() et j'ajoute le template « tile » pour la commande « story » en appliquant la méthode setTemplate()

````php
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
````

Rafraîchir le dasboard.

C''est mieux mais le widget prend toujours la largeur du dashboard. On va donc corriger. Par défaut la largeur du widget de l'équipement(eqLogic) et la hauteur sont à « auto ».

On va donc changer la largeur du widget(équipement => eqLogic) en utilisant la méthode setDisplay() héritée de la class eqLogic .On laisse la hauteur en auto.

Pour cela il suffit d'ajouter

````php
$this->setDisplay("width","800px");
````

Yes, but !! Because there is a but. Try adding this in the postsave () or postUpdate () function and it doesn't take the change into account. Why ? Ben must read the template plugin doc ==> HERE

Now that you have read that correctly you know that you have to use the preSave method()

````php
public function preSave() {
    $this->setDisplay("width","800px");
}
````

Enregistrer un équipement et rafraîchissez le dashboard.


# Les paramètres. Les options

> **IMPORTANT**
>
> C'est un chapitre important et il faut le comprendre avant de passer à la suite.

Pour le moment, nous avons donc utiliser 3 classes du core de jeedom : EqLogic, cmd , cron . Aller pour info , On en ajoute une 4eme avec la class plugin dans le fichier vdm.php que vous ouvrez et laissez ouvert car on va l'éditer .

````php
$plugin = plugin::byId('vdm'); // appelle la classe plugin du core
````

You have to understand that everything is done to make our job easier.

For a parameter / an option internal to the plugin, we will use one of the methods of the eqLogic class of the core : setConfiguration () by adding the parameters you want. For example :

````php
$this->setConfiguration("type","mon_type"); // si on veut  définir un paramètre Type de valeur mon_type. Comme on a défini la largeur du widget via la méthode setDisplay()
````

Pour laisser le choix à l'utilisateur , on retourne sur le fichier desktop.php que vous avez laissé ouvert car vous suivez ce TP au pied de la lettre :D

Chercher

````html
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="city" placeholder="param1"/>
````

And replace with

````html
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/> //IMPORTANT de laisser la classe eqLogicAttr
````

Enregistrer et aller sur un équipement du plugin que vous avez déjà créé en suivant ce TP (Rafraîchir si besoin).

Dans le champs « Paramètre» d'un équipement, taper « aleatoire » et sauvegarder.

Parfait le paramètre est sauvegardé.

![image](images/tutorial_parametre1.png)


C'est simple,non? . C'est pourquoi il ne faut surtout pas toucher à cette ligne de code comme indiqué dans le premier menu « test » . C'est lui qui fait tout le travail

````php
<?php include_file('core', 'plugin.template', 'js');?>//Chargement du fichier core/js/plugin.template.js (en partant de la racine du site)
````

If you take a closer look at the desktop file.php ago

````html
<input type="text" class="eqLogicAttr form-control" data-l1key="id" style="display : none;" /> // retourne l'id(unique) de l'eqLogic(équipement) . Qu'on va pouvoir récupérer via $this->getId() ;
````

````html
{% raw %}
<input type="text" class="eqLogicAttr form-control" data-l1key="name" placeholder="{{Name de l'équipement}}"/>// retourne le nom de l'eqLogic(équipement) . Qu'on va pouvoir récupérer via $this->getName() ;
{% endraw %}
````

Etc…

If you have understood all of this well, we will be able to move on. But first we will change in the desktop.php file

````html
{% raw %}
<label class="col-sm-3 control-label">{{Paramètre}}</label>
{% endraw %}
````

Par

````html
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

````html
{% raw %}
 <div class="form-group">
  <label class="col-sm-3 control-label">{{Type de vdm}}</label>
  <div class="col-sm-3">
      <input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/>
  </div>
</div>
{% endraw %}
````

Qu'on va remplacer par

````html
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
