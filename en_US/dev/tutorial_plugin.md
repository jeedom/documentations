# 

> ****
>
> .  [](https://forum.jeedom.com/viewtopic.php?f=27&t=37630#p621495)

. . .()

 [](https://doc.jeedom.com/en_US/dev/)

# 

)

 : 
 : vdm

 [](https://github.com/jeedom/plugin-template/archive/master.zip)

. Vous obtiendrez un dossier « plugin-template-master » contenant des dossiers 3rparty, core, desktop…

.

> ****
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
$plugin = plugin::byId('template');


Par

php
$plugin = plugin::byId('vdm');


------------------------

html
{% raw %}<legend><i class="fas fa-table"></i> {{Mes templates}}</legend>{% endraw %}


Par

html
{% raw %}<legend><i class="fas fa-table"></i> {{Mes équipements}}</legend>{% endraw %}


------------------------

php
<?php include_file('desktop', 'template', 'js', 'template');?>


Par

php
<?php include_file('desktop', 'vdm', 'js', 'vdm');?>


 , **** ``<?php include_file('core', 'plugin.template', 'js');?>``.

- .

- .

- .php and rename the functions as follows

php
function vdm_install() {
}

function vdm_update() {
}

function vdm_remove() {
}


Here is the plugin ready but there is still the customization and the icon to update : [Developer Documentation - Plugin Icon](https://doc.jeedom.com/en_US/dev/Icone_de_plugin)

Add the icon to the plugin_info folder with the name vdm_icon.png

in my case

![image](images/tutorial_vdm_icon.png)

Now we can copy the vdm folder into the Jeedom plugin folder and go to plugin management. We find the plugin again.

![image](images/tutorial_vdm_plugin.png)

We activate it and then plugins/Monitoring/Crappy Life

Here is the base ready. You should have the plugin active but at the moment it does nothing.

# The orders

The purpose of the plugin will be to retrieve a random vdm and display it on the dashboard.

So you need to create an info type command to store this information. Elle sera de sous-kind « string » car c'est une chaîne de caractère.

For the example we will add a command that refreshes the information. So it will be a command of type action and subtype other

-Créez un équipement « vdm1 » en cliquant sur le +. Activate it and make it visible. Choose an item and the equipment should appear on the dashboard (depending on the item).

At this time, there are no orders appearing in the orders tab, nor on the widget.

Open the core/class/vdm.class file.php and search for the postSave() function (Read the template plugin documentation if you haven't already done so)

We create the 2 orders

php
public function postSave() {
  $ = $this->getCmd(null, 'story');
  if (!is_object($info)) {
    $ = new vdmCmd();
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


- Créez un autre équipement « vdm2 » en cliquant sur le +. In the commands tab, the commands appeared. Activate it and make it visible. Choose a parent object and see what it looks like on the dashboard.

- Enregistrez le premier équipement « vdm1 » pour créer les commandes. See the rendering on the widget too.

In the orders tab you should see.

![image](images/tutorial_vdm_cmd1.png)

Open desktop/php/vdm.php to find the html code of this table.

html
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


At the time of display, it is the desktop/js/vdm script.js which is called and launches the addCmdToTable function.

html
{% raw %}
/* Function allowing the display of commands in the equipment */
function addCmdToTable(_cmd) {
  if (!isset(_cmd)) {
    var _cmd = { configuration: {} };
  }
  if (!isset(_cmd.configuration)) {
    _cmd.configuration = {};
  }
  var tr = '.id) + '">';
  tr += ':60px;">';
  tr += '<span class="cmdAttr" data-l1key="id"></span> ';
  tr += '</td> ';
  tr += ':300px;width:350px;">';
  tr += '<div class="row"> ';
  tr += '<div class="col-xs-7"> ';
  tr += '<input class="cmdAttr form-control input-sm" data-l1key="name" placeholder="{{Nom de la commande}}">';
  tr += ' : none;margin-top : 5px;" title="{{Order related information}}">';
  tr += '<option value=""> {{None}}</option> ';
  tr += '</select> ';
  tr += '</div> ';
  tr += '<div class="col-xs-5"> ';
  tr += ' <a class="cmdAction btn btn-default btn-sm" data-l1key="chooseIcon"><i class="fas fa-flag"></i>{{Icon}}</a> ';
  tr += ' : 10px;">';
  tr += '</div> ';
  tr += '</div> ';
  tr += '</td> ';
  tr += '<td> ';
  tr += '.type) + '">' + jeedom.cmd.availableType() + ' ';
  tr += '.subType) + '"> ';
  tr += '</td> ';
  tr += ':150px;width:350px;">';
  tr += '.}}" title="{{Min.}}" style="width:30%;display:inline-block;"/> ';
  tr += '.}}" title="{{Max.}}" style="width:30%;display:inline-block;"/> ';
  tr += ':30%;display:inline-block;"/>';
  tr += '</td> ';
  tr += ':80px;width:350px;">';
  tr += ' <label class="checkbox-inline"><input type="checkbox" class="cmdAttr" data-l1key="isVisible" checked/>{{Display}}</label> ';
  tr += ' <label class="checkbox-inline"><input type="checkbox" class="cmdAttr" data-l1key="isHistorized" checked/>{{Historize}}</label> ';
  tr += ' <label class="checkbox-inline"><input type="checkbox" class="cmdAttr" data-l1key="display" data-l2key="invertBinary"/>{{Invert}}</label> ';
  tr += '</td> ';
  tr += ':80px;width:200px;">';
  if (is_numeric(_cmd.id)) {
    tr += '<a class="btn btn-default btn-xs cmdAction" data-action="configure"><i class="fas fa-cogs"></i></a> ';
    tr += ' <a class="btn btn-default btn-xs cmdAction" data-action="test"><i class="fas fa-rss"></i>Test</a> ';
  }
  tr += '<i class="fas fa-minus-circle pull-right cmdAction cursor" data-action="remove"></i></td> ';
  tr += '</tr> ';
  $('#table_cmd tbody').append(tr);
  var tr = $('#table_cmd tbody tr').last();
  jeedom.eqLogic.builSelectCmd({
    id: $('.eqLogicAttr[data-l1key=id]').value(),
    filter: { type: 'info' },
    error: ) {
      $('#div_alert').showAlert({ message: .message, level: 'danger' });
    },
    success: ) {
      
      
      
    }
  });
}
{% endraw %}


.

.

# 

.

php
$url = "http://www.viedemerde.fr/aleatoire";
$data = file_get_contents($url);
@$dom = new DOMDocument();

$dom->loadHTML('<?xml encoding="UTF-8">' .$data);

$xpath = new DOMXPath($dom);
$divs = $xpath->query('//article[@class="art-panel col-xs-12"]//div[@class="panel-content"]//p//a');



Open the core/class/vdm.class file.

php
() {
  $url = "http://www.viedemerde.fr/aleatoire";
  $data = file_get_contents($url);
  @$dom = new DOMDocument();
  
  $dom->loadHTML($data);
  
  $xpath = new DOMXPath($dom);
  $divs = $xpath->query('//article[@class="art-panel col-xs-12"]//div[@class="panel-content"]//p//a');
  
}


).
.

php
()) {
}


C'est  qu'on va définir ce qu'il va se passer quand on actionne la commande « Rafraîchir ». )

On vérifie le logical de la commande lancée et si « refresh » on lance les actions

php
()) {
  ':  .
  
  break;
}


(). .

php
$eqlogic = $this->getEqLogic(); //Récupération de l'eqlogic
$ = $eqlogic->randomVdm() ; //Lance la fonction et stocke le résultat dans la variable $info


On met à jour la commande « story » avec la variable $info. 

php
$eqlogic->checkAndUpdateCmd('story', $info);




php
()) {
  $eqlogic = $this->getEqLogic(); //récupère l'éqlogic de la commande $this
  
    ':  .
    $ = $eqlogic->randomVdm(); //On lance la fonction randomVdm() pour récupérer une  et on la stocke dans la variable $info
    $eqlogic->checkAndUpdateCmd('story', $info); //on met à jour la commande avec le Logical "story"  de l'eqlogic
    break;
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
-  : 1/jour

). ().

.

php
/*
* 
() {
}
*/




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
$cmd = $vdm->getCmd(null, 'refresh');




php
if (!)) {
  continue;
}
$cmd->execCmd();




php
 () {
  ::
    $cmd = $vdm->getCmd(null, 'refresh'); //retourne la commande "refresh" si elle existe
    if (!
    
  }
  $cmd->execCmd(); //la commande existe on la lance
}
}


Pour tester, dans jeedom, allez dans configuration/moteur de tâches et lancer le  de class « plugin » fonction «  »
.

. A la création de l'équipement, la commande « story » ne se met pas à jour.

.

(). .



php
() {
  $cmd = $this->getCmd(null, 'refresh'); //On recherche la commande refresh de l'équipement
  
    $cmd->execCmd();
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
  
    $eqLogics = self::byType('vdm', true);
    } )
      $eqLogics = array(self::byId($_eqLogic_id));
    }

    ) {
      $cmd = $vdm->getCmd(null, 'refresh'); //retourne la commande "refresh si elle existe
      if (!
      
    }
    $cmd->execCmd(); //la commande existe on la lance
  }
}


.

 ==> [](https://doc.jeedom.com/dev/phpdoc/4.1/)

 ==> [](https://github.com/jeedom/core)

 .

.

 .

# 

.

. .

La commande qui apparaît est la commande «story» de kind info, sous-kind string.

.  :D



Donc on va changer le style en affectant un template à la commande « story»

.

 ==> [](https://github.com/jeedom/core/tree/alpha/core/template/dashboard)

.) .)

J'applique le template « cmd.info.string.tile.html » à ma commande.

.php , fonction postSave() et j'ajoute le template « tile » pour la commande « story » en appliquant la méthode setTemplate()

php
$ = $this->getCmd(null, 'story');
if (!is_object($info)) {
  $ = new vdmCmd();
  $info->setName(__('Histoire', __FILE__));
}
$info->setLogicalId('story');
$info->setEqLogic_id($this->getId());
$info->setType('info');
$info->setTemplate('dashboard','tile');//template pour le dashboard
$info->setSubType('string');
$info->save();


.

. .  défaut la largeur du widget de l'équipement(eqLogic) et la hauteur sont à « auto ».

 ..



php
$this->setDisplay("width","800px");


 !! . .  ? 

()

php
() {
  $this->setDisplay("width","800px");
}


.

# . 

> ****
>
> .

 : . ..

php
$plugin = plugin::byId('vdm'); // appelle la classe plugin du core


.

: . :

php
$this->setConfiguration("type","mon_type"); // si on veut définir un paramètre kind de valeur mon_type. Comme on a défini la largeur du widget via la méthode setDisplay()


. :D

Cherchez

html
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="city" placeholder="param1"/>




html
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/> // de laisser la classe eqLogicAttr


).

Dans le champs «Paramètre» d'un équipement, tapez «aléatoire» et sauvegardez.

.

![image](images/tutorial_parametre1.png)

? . C'est pourquoi il ne faut surtout pas toucher à cette ligne de code comme indiqué dans le premier menu « test ». 

php
<?php include_file('core', 'plugin.template', 'js');?> //Chargement du fichier core/js/plugin.template.js (en partant de la racine du site)


.

html
<input type="text" class="eqLogicAttr form-control" data-l1key="id" style="display:none;" /> // retourne l'id(unique) de l'eqLogic(équipement) que l'on va pouvoir récupérer via $this->getId() ;


html
{% raw %}<input type="text" class="eqLogicAttr form-control" data-l1key="name" placeholder="{{ de l'équipement}}"/>// retourne le nom de l'eqLogic(équipement) que l'on va pouvoir récupérer via $this->getName();{% endraw %}


Etc…

. 

html
{% raw %}<label class="col-sm-3 control-label">{{Paramètre}}</label>{% endraw %}


Par

html
{% raw %}<label class="col-sm-3 control-label">{{Type de vdm}}</label>{% endraw %}


 : .

.

# 

)

On pourrait le laisser taper dans l'input « Type de  » : 



html
{% raw %}
<div class="form-group">
  <label class="col-sm-3 control-label">{{Type de vdm}}</label>
  <div class="col-sm-3">
    <input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/>
  </div>
</div>
{% endraw %}




html
{% raw %}
<div class="form-group">
  <label class="col-sm-3 control-label" >{{ Type de  }}</label>
  <div class="col-sm-3">
    <select class="form-control eqLogicAttr" data-l1key="configuration" data-l2key="kind ">
      <option value="aleatoire">{{Aleatoire}}</option>
      <option value="epicees">{{Coquin}}</option>
      <option value="tops">{{Best}}</option>
    </select>
  </div>
</div>
{% endraw %}


Ici le paramètre «type» prendra la valeur du select choisi soit aleatoire ou epicees ou tops.



Cherchez

php
$url = "http://www.viedemerde.fr/aleatoire";




php
$kind = $this->getConfiguration("type", "aleatoire"); //si le paramètre est vide ou n'existe pas, on prends le kind aleatoire
$url = "http://www.viedemerde.fr/{$type}";


.
