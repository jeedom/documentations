# 

> **WICHTIG**
>
> .  [Hier](https:forum.jeedom.comviewtopic.php?f=27&t=37630#p621495)

. . .()

 [](https:doc.jeedom.com/de_DE/dev)

# 

)

 : 
 : vdm

 [](https:github.comjeedomplugin-templatearchivemaster.zip)

. Vous obtiendrez un dossier « plugin-template-master » contenant des dossiers 3rparty, core, desktop…

.

> **WICHTIG**
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
{% raw %}<legend><i class="fas fa-table"><i> {{Mes templates}}<legend>{% endraw %}


Par

html
{% raw %}<legend><i class="fas fa-table"><i> {{Mes équipements}}<legend>{% endraw %}


------------------------

php
<?php include_file('desktop', 'template', 'js', 'template');?>


Par

php
<?php include_file('desktop', 'vdm', 'js', 'vdm');?>


 , **** ``<?php include_file('core', 'plugin.template', 'js');?>``.

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


 : [](https:doc.jeedom.com/de_DE/devIcone_de_plugin)





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
  $ = $this->getCmd(null, 'story');
  Wenn (!)) {
    $ = new vdmCmd();
    $info->setName(__('Histoire', __FILE__));
  }
  $info->setLogicalId('story');
  $info->setEqLogic_id($this->getId());
  $info->setType('info');
  $info->setSubType('string');
  $info->save();

  $refresh = $this->getCmd(null, 'refresh');
  Wenn (!)) {
    $refresh = new vdmCmd();
    $refresh->setName(__('Rafraichir', __FILE__));
  }
  $refresh->setEqLogic_id($this->getId());
  $refresh->setLogicalId('refresh');
  $refresh->setType('action');
  $refresh->setSubType('other');
  $refresh->save();
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
<a class="btn btn-default btn-sm pull-right cmdAction" data-action="add" style="margin-top:5px;"><i class="fas fa-plus-circle"><i> {{Ajouter une commande}}<a>
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
  Wenn (!)) {
    : {} };
  }
  Wenn (!)) {
    
  }
  .
  :
  
  
  ::
  
  
  
   :  : 
  
  
  
  
  
   : 
  
  
  
  
  ..
  .
  
  ::
  .}}" .}}" :30%;display:
  .}}" .}}" :30%;display:
  :30%;display:
  
  ::
  
  
  
  
  ::
  .id)) {
    
    
  }
  
  
  $('#table_cmd tbody').append(tr);
  
  ({
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
$url = "http:www.viedemerde.fraleatoire";
$data = file_get_contents($url);
@$dom = new DOMDocument();

$dom->loadHTML('<?xml encoding="UTF-8">' .$data);

$xpath = new DOMXPath($dom);
$divs = $xpath->query('article[@class="art-panel col-xs-12"]div[@class="panel-content"]pa');



.

php
() {
  $url = "http:www.viedemerde.fraleatoire";
  $data = file_get_contents($url);
  @$dom = new DOMDocument();
  
  $dom->loadHTML($data);
  
  $xpath = new DOMXPath($dom);
  $divs = $xpath->query('article[@class="art-panel col-xs-12"]div[@class="panel-content"]pa');
  
}


).
.

php
()) {
}


C'est Hier qu'on va définir ce qu'il va se passer quand on actionne la commande « Rafraîchir ». )

On vérifie le logical de la commande lancée et si « refresh » on lance les actions

php
()) {
  ':  .
  
  break;
}


(). .

php
$eqlogic = $this->getEqLogic(); Récupération de l'eqlogic
$ = $eqlogic->randomVdm() ; Lance la fonction et stocke le résultat dans la variable $info


On met à jour la commande « story » avec la variable $info. 

php
$eqlogic->checkAndUpdateCmd('story', $info);




php
()) {
  $eqlogic = $this->getEqLogic(); récupère l'éqlogic de la commande $this
  
    ':  .
    $ = $eqlogic->randomVdm(); On lance la fonction randomVdm() pour récupérer une  et on la stocke dans la variable $info
    $eqlogic->checkAndUpdateCmd('story', $info); on met à jour la commande avec le Logical "story"  de l'eqlogic
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
$cmd = $vdm->getCmd(null, 'refresh');




php
Wenn (!)) {
  continue;
}
$cmd->execCmd();




php
 () {
  ::
    $cmd = $vdm->getCmd(null, 'refresh'); retourne la commande "refresh" si elle existe
    Wenn (!
    
  }
  $cmd->execCmd(); la commande existe on la lance
}
}


Pour tester, dans jeedom, allez dans configurationmoteur de tâches et lancer le  de class « plugin » fonction «  »
.

. A la création de l'équipement, la commande « story » ne se met pas à jour.

.

(). .



php
() {
  $cmd = $this->getCmd(null, 'refresh'); On recherche la commande refresh de l'équipement
  
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
      $cmd = $vdm->getCmd(null, 'refresh'); retourne la commande "refresh si elle existe
      Wenn (!
      
    }
    $cmd->execCmd(); la commande existe on la lance
  }
}


.

 ==> [Hier](https:doc.jeedom.comdevphpdoc4.1)

 ==> [](https:github.comjeedomcore)

 .

.

 .

# 

.

. .

La commande qui apparaît est la commande «story» de  info, sous- string.

Mein Vergnügen besteht darin, morgens aufzustehen und nach dem Aufwachen eine VDM (Vie de Merde – Das Leben ist eine Bitch) zu lesen. Es erlaubt mir zu erkennen, dass es Menschen gibt, denen es viel schlechter geht als mir :D

Aber ich habe meine Brille nicht dabei und das Display des Widgets erlaubt mir derzeit nicht, es zu lesen…

Donc on va changer le style en affectant un template à la commande « story»

Nichts könnte einfacher sein.

Ich werde sehen ==> [](https:github.comjeedomcoretreealphacoretemplatedashboard)

Ich suche eine Vorlage für cmd.info.string(Unser Befehl ist vom Typ Info, Untertyp String)) .Nicht schwierig, es gibt nur zwei (Standard oder Kachel))

J'applique le template « cmd.info.string.tile.html » à ma commande.

Dazu öffne ich die Datei vdm.class.php , fonction postSave() et j'ajoute le template « tile » pour la commande « story » en appliquant la méthode setTemplate()

php
$ = $this->getCmd(null, 'story');
Wenn (!)) {
  $ = new vdmCmd();
  $info->setName(__('Histoire', __FILE__));
}
$info->setLogicalId('story');
$info->setEqLogic_id($this->getId());
$info->setType('info');
$info->setTemplate('dashboard','tile');template pour le dashboard
$info->setSubType('string');
$info->save();


Aktualisieren Sie das Dashboard.

Es ist besser, aber das Widget nimmt immer noch die gesamte Breite des Dashboards ein. Wir werden das also korrigieren.  défaut la largeur du widget de l'équipement(eqLogic) et la hauteur sont à « auto ».

Wir werden daher die Breite des Widgets (equipment => eqLogic) mithilfe der von der Klasse eqLogic geerbten Methode setDisplay() ändern .Wir lassen die Höhenverstellung auf Automatik.

Dazu fügen Sie einfach Folgendes hinzu:

php
$this->setDisplay("width","800px");


Ja, aber !! Denn es gibt ein Aber. Wenn Sie das zur Funktion postsave() oder postUpdate() hinzufügen, wird die Änderung nicht berücksichtigt. Wofür ? Sie müssen die Dokumentation der Plugin-Vorlage lesen ==>HIER

Nachdem Sie es nun sorgfältig gelesen haben, wissen Sie, dass Sie die preSave-Methode verwenden müssen()

php
öffentliche Funktion preSave() {
  $this->setDisplay("width","800px");
}


Registrieren Sie ein Gerät und aktualisieren Sie das Dashboard.

# Die Parameter. Die Optionen

> **WICHTIG**
>
> Dies ist ein wichtiges Kapitel, das Sie verstehen müssen, bevor Sie fortfahren.

Fürs Erste haben wir daher 3 Klassen aus dem Jeedom-Kern verwendet : EqLogic, cmd, cron. Nur zur Information: Wir fügen eine vierte Klasse mit dem Plugin in der VDM-Datei hinzu.Öffnen Sie die PHP-Datei und lassen Sie sie geöffnet, da wir sie bearbeiten werden.

php
$plugin = plugin::byId('vdm');  appelle la classe plugin du core


Es ist wichtig zu verstehen, dass alles getan wird, um uns die Aufgabe zu erleichtern.

Für einen Parameter/eine Option innerhalb des Plugins verwenden wir eine der Methoden der Klasse eqLogic aus dem Kern: setConfiguration() durch Hinzufügen der gewünschten Parameter. Zum Beispiel:

php
$this->setConfiguration("type","mon_type");  si on veut définir un paramètre  de valeur mon_type. Comme on a défini la largeur du widget via la méthode setDisplay()


Um dem Benutzer eine Wahlmöglichkeit zu geben, kehren wir zur Desktop-Datei zurück.Die PHP-Datei, die Sie offen gelassen haben, weil Sie diese Aufgabe genau befolgen, haben Sie offen gelassen :D

Cherchez

html
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="city" placeholder="param1">


Und ersetzen Sie durch

html
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"> Wichtig de laisser la classe eqLogicAttr


Speichern Sie die Einstellungen und wechseln Sie zu einem Gerät im Plugin, das Sie bereits mithilfe dieser Anleitung erstellt haben (aktualisieren Sie die Seite gegebenenfalls)).

Dans le champs «Paramètre» d'un équipement, tapez «aléatoire» et sauvegardez.

Perfekt, die Einstellung ist gespeichert.

![image](imagestutorial_parametre1.png)

Ganz einfach, nicht wahr?? . C'est pourquoi il ne faut surtout pas toucher à cette ligne de code comme indiqué dans le premier menu « test ». Er ist derjenige, der die ganze Arbeit erledigt

php
<?php include_file('core', 'plugin.template', 'js');?> Chargement du fichier corejsplugin.template.js (en partant de la racine du site)


Wenn Sie sich die Desktop-Datei genauer ansehen.PHP, da gibt es

html
<input type="text" class="eqLogicAttr form-control" data-l1key="id" style="display:none;" >  retourne l'id(unique) de l'eqLogic(équipement) que l'on va pouvoir récupérer via $this->getId() ;


html
{% raw %}<input type="text" class="eqLogicAttr form-control" data-l1key="name" placeholder="{{ de l'équipement}}"> retourne le nom de l'eqLogic(équipement) que l'on va pouvoir récupérer via $this->getName();{% endraw %}


Etc…

Wenn Sie das alles verstanden haben, können wir zum nächsten Schritt übergehen. Aber zuerst werden wir eine Änderung in der Datei desktop.php vornehmen

html
{% raw %}<label class="col-sm-3 control-label">{{Paramètre}}<label>{% endraw %}


Par

html
{% raw %}<label class="col-sm-3 control-label">{{Type de vdm}}<label>{% endraw %}


Wichtig : Der Text in den geschweiften Klammern ist der Text, der übersetzt wird, wenn Sie das Plugin im Marketplace veröffentlichen.

Als nächstes entwickeln wir das Plugin weiter, indem wir einen gewünschten VDM-Typ (random, spicy oder tops) auswählen und für jedes Gerät einen benutzerdefinierten Cronjob erstellen.

# Verwendung der Optionen/Einstellungen

Um das vorherige Kapitel noch besser zu verstehen, ermöglichen wir dem Benutzer, einen VDM-Typ auszuwählen (zufällig, scharf oder Top))

On pourrait le laisser taper dans l'input « Type de  » : Zufällig, pikant oder erstklassig – wir machen es anders und lassen ihn über ein Auswahlfeld selbst entscheiden

Wenn Sie alle Anweisungen befolgt haben, sollte Folgendes in der Datei desktop.php stehen

html
{% raw %}
<div class="form-group">
  <label class="col-sm-3 control-label">{{Type de vdm}}<label>
  <div class="col-sm-3">
    <input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option">
  <div>
<div>
{% endraw %}


Welche wir ersetzen werden durch

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

Nun werden wir unseren Parameter in der Funktion randomVdm() in der Datei vdm.class.php berücksichtigen

Cherchez

php
$url = "http:www.viedemerde.fraleatoire";


Und ersetzen Sie durch

php
$ = $this->getConfiguration("type", "aleatoire"); si le paramètre est vide ou n'existe pas, on prends le  aleatoire
$url = "http:www.viedemerde.fr{$type}";


Ändern Sie nun den ausgewählten Wert auf einem Gerät, speichern Sie die Einstellungen und rufen Sie das Dashboard auf, um das Ergebnis zu sehen.
