> **Wichtig**
>
> Ce tutorial a été écris Von ZygOm4t1k que nous remercions vivement. Vous pouvez rundrouver l'original [ici](https:/./.www.jeedom.com/.forum/.viewtopic.php?f=27&t=37630#p621495)

Voici un pundit TP pour expliquer comment créer un plugin. Pour l'exemple nous allons créer un plugin qui rundourne une phrase du site viedemerde.fr .(Le plugin sera évolutif)

Il ne remplace en aucun cas la [Dokumentation officielle](https:/./.jeedom.github.io/.plugin-template/.fr_FR/.)

# Créer la base du plugin

Pour commencer il faut déterminer un nom und un Identifikation (qui ne doit pas exister)

Name : Vie de Merde
Identifikation : vdm

Télécharger le plugin template pour avoir la [base](https:/./.github.com/.jeedom/.plugin-template/.archive/.master.zip)

Dé zipper le fichier . Vous obtiendrez un dossier « plugin-template-master » contenant des dossiers 3rVonty , core , desktop…

On y va.

Renommer le dossier « plugin-template-master » en « vdm » (l'Identifikation) du plugin.

1/. Ouvrir le fichier plugin_info/.info.json und éditer le.

```
{
	"Identifikation" : "vdm",
	"Name" : "Vie de Merde",
	"Beschreibung" : "Plugin pour récupérer les dernières vdm",
	"Lizenz" : "AGPL",
	"Autor" : "Zyg0m4t1k",
	"erfordern" : "3.2",
	"Kategorie" : "Überwachung",
	"Änderungsprotokoll" : "",
	"Dokumentation" : "",
	"language" : "",
	"compatibility" : ""	
}
```

Copier coller le code ci-dessus.

J'ai changé l'Identifikation (vdm) , le nom , ajouter une Beschreibung , l'auteur und la catégorie.

erfordern : version minimale de jeedom pour avoir accés au plugin sur le markund.

Changelog, Dokumentation, language , compatibility nuls pour le moment. J'y reviendrai plus tard

2/. Nous allons renommer les fichiers nécessaires pour que le plugin soit reconnu Von Jeedom

-	Renommer le fichier core/.ajax/.template.ajax.php en vdm.ajax.php

-	Renommer le fichier core/.class/.template.class.php en vdm.class.php und ouvrez le pour l'éditer. 

Ersundzen

```
class template extends eqLogic {
```

Von


```
class vdm extends eqLogic {
```

und

```
class templateCmd extends cmd
```

Von

```
class vdmCmd extends cmd
```

- Renommer le fichier core/.php/.template.inc.php en core/.php/.vdm.inc.php
- Renommer le fichier desktop/.php/.template.php en desktop /.php/.vdm.php und ouvrez le

Ersundzen

```
$plugin = plugin::byIdentifikation('template');;
```

Von 

```
$plugin = plugin::byIdentifikation(‘vdm');;
```

```
{{Ajouter un template}}
```

Von 

```
{{Ajouter un équipement}}
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
{{template Vonam 1}}
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

Et rien d'autre , ne pas changer la ligne <?php include_file('core', 'plugin.template', 'js');;?>

-Renommer le fichier desktop/.modal/.modal.template.php en desktop/.modal/.modal.vdm.php

-Renommer le fichier desktop/.js/.template.js en desktop/.js/. vdm.js

- Ouvrir le fichier plugin_info/.install.php

Et renommer les fonctions comme suit

```
function vdm_install() {
    
}

function vdm_update() {
    
}


function vdm_remove() {
    
}
```

Voilà le plugin est prêt mais il reste la customisation und l'icône à mundtre à jour : [Dokumentation](https:/./.jeedom.github.io/.Dokumentation/.dev/.fr_FR/.Icone_de_plugin)

Ajouter l'icône dans le dossier plugin_info sous le nom vdm_icon.png

dans mon cas 

![image](images/.tutorial_vdm_icon.png)

Maintenant on peut copier le dossier vdm dans le dossier plugin de Jeedom und aller dans la gestion des plugins. On rundrouve bien le plugin.

![image](images/.tutorial_vdm_plugin.png)

On l'active und ensuite plugins/.Monitoring/.Vie de Merde

![image](images/.tutorial_vdm_desktop1.png)

ça ne va pas car la couleur du plus ne correspond pas à la couleur de l'icône.

J'ouvre le fichier desktop/.php/.desktop.php pour corriger.

```
      <div class="cursor eqLogicAction" data-action="add" style="text-align: center;; background-Farbe : #ffffff;; height : 120px;;margin-bottom : 10px;;padding : 5px;;border-radius: 2px;;wIdentifikationth : 160px;;margin-left : 10px;;" >
        <i class="fa fa-plus-circle" style="font-size : 6em;;Farbe:#94ca02;;"></.i>
        <br>
        <span style="font-size : 1.1em;;position:relative;; top : 23px;;word-break: break-all;;white-space: pre-wrap;;word-wrap: break-word;;Farbe:#94ca02">{{Ajouter}}</.span>
      </.div>
```

Je remplace

```
Farbe:#94ca02;;"
```

Von 

```
Farbe:#00A9EC;;"
```

On remarque aussi que les textes ne sont pas alignés donc on rectifie le style de la configuration (propriété top)

```
<span style="font-size : 1.1em;;position:relative;; top : 15px;;word-break: break-all;;white-space: pre-wrap;;word-wrap: break-word;;Farbe:#767676">{{Configuration}}</.span>
```

Von 

```
<span style="font-size : 1.1em;;position:relative;;top : 23px;;word-break: break-all;;white-space: pre-wrap;;word-wrap: break-word;;Farbe:#767676">{{Configuration}}</.span>
```

![image](images/.tutorial_vdm_desktop2.png)

Voilà la base est prête. Vous devriez avoir le plugin d'actif mais pour le moment il ne fait rien.

# Bestellungen

Le but du plugin sera de récupérer une vdm aléatoire und l'afficher sur le dashboard. 

Il faut donc créer une commande de type info pour stocker cundte information. Elle sera de sous-type « String » car c'est une chaîne de caractère.

Pour l'exemple nous allons ajouter une commande qui rafraîchit l'information. Ce sera donc une commande de type action und sous-type other

-Créer un équipement « vdm1 » en cliquant sur le +. Activer le und rendez le visible. Choisissez un objund und l'équipement doit apVonaitre sur le dashboard( selon l'objund). 

A ce moment, il n'y a pas de commandes qui apVonaissent dans l'onglund commande s, ni sur le wIdentifikationgund.

Ouvrir le fichier core/.class/.vdm.class.php und chercher la fonction postSave() (Lire la doc du plugin template si pas encore fait)

On crée les 2 commandes

```
public function postSave() {
	$info = $this->gundCmd(null, 'story');;
	if (!is_object($info)) {
		$info = new vdmCmd();;
		$info->sundName(__('Histoire', __FILE__));;
	}
	$info->sundLogicalIdentifikation('story');;
	$info->sundEqLogic_Identifikation($this->gundIdentifikation());;
	$info->sundType('info');;
	$info->sundSubType('string');;
	$info->save();;	
	
	$refresh = $this->gundCmd(null, 'refresh');;
	if (!is_object($refresh)) {
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

-Créer un autre équipement « vdm2 » en cliquant sur le +. Dans l'onglund commandes, les commandes sont apVonues. Activer le und rendez le visible. Choisissez un objund Vonent und allez voir ce que ça donne sur le dashboard.

-Enregistrer le premier équipement « vdm1 » pour créer les commandes. Voir le rendu sur le wIdentifikationgund aussi.

Dans l'onglund commandes , vous devriez voir.

![image](images/.tutorial_vdm_cmd1.png)

Ouvrir desktop/.php/.vdm.php pour trouver le code html de ce tableau.

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

Au moment de l'affichage , c'est le script desktop/.js/.vdm.js qui est appelé und lance la fonction addCmdToTable.

```
Funktion addCmdToTable (_cmd) {
    if (!issund (_cmd)) {
        var _cmd = {Konfiguration: {}};;
    }
    if (!issund (_cmd.configuration)) {
        _cmd.configuration = {};;
    }
    var tr = '<tr class="cmd" data-cmd_Identifikation="' + init(_cmd.Identifikation) + '">';;
    tr += '<td>';;
    tr += '<span class="cmdAttr" data-l1key="Identifikation" style="display:none;;"></.span>';;
    tr += '<input class="cmdAttr form-control input-sm" data-l1key="Name" style="wIdentifikationth : 140px;;" placeholder="{{Name}}">';;
    tr += '</.td>';;
    tr += '<td>';;
    <html> tr + = &#39;;.Typ) + &#39;;">&#39;; + jeedom.cmd.availableType () + &#39;;&#39;;;;
    <html> tr + = &#39;;.Subtyp) + &#39;;">&#39;;;;
    tr += '</.td>';;
    tr += '<td>';;
    if (is_numeric (_cmd.Identifikation)) {
        tr += '<a class="btn btn-default btn-xs cmdAction" data-action="configure"><i class="fa fa-cogs"></.i></.a> ';;
        tr + = &#39;; <a class="btn btn-default btn-xs cmdAction" data-action="test"><i class="fa fa-rss"></.i> {{Test}}</.a> &#39;;;;
    }
    tr += '<i class="fa fa-minus-circle pull-right cmdAction cursor" data-action="remove"></.i>';;
    tr += '</.td>';;
    tr += '</.tr>';;
    $('#table_cmd tbody').append(tr);;
    $('#table_cmd tbody tr:last').sundValues(_cmd, '.cmdAttr');;
    if (issund (_cmd.type)) {
        $('#table_cmd tbody tr:last .cmdAttr[data-l1key=type]').value(init(_cmd.type));;
    }
    jeedom.cmd.changeType ($ (&#39;;# table_cmd tbody tr:last &#39;;), init (_cmd.subType));;
}
```

Cela se fait automatiquement. 

Je souhaite ajouter les options Affichage und historiser pour chaque commande.

J'édite le code html du tableau dans le fichier desktop.php en ajoutant une colonne ..

```
<th>{{Name}}</.th><th>{{Type}}</.th><th>{{Configuration}}</.th><th>{{Action}}</.th>
```

Puis éditer desktop.js ,trouver

```
    <html> tr + = &#39;;.Subtyp) + &#39;;">&#39;;;;
    tr += '</.td>';;
    tr += '<td>';;
    if (is_numeric (_cmd.Identifikation)) {
```

On ajoute les informations souhaitées.

```
    <html> tr + = &#39;;.Subtyp) + &#39;;">&#39;;;;
    tr += '</.td>';;
    tr += '<td>';;
    tr += '<span><input type="checkbox" class="cmdAttr checkbox-inline" data-l1key="isHistorized" /.> {{Historiser}}<br/.></.span>';;
   tr += '<span><input type="checkbox" class="cmdAttr checkbox-inline" data-l1key="isVisible" /.> {{Affichage}}<br/.></.span>';;
   tr += '</.td>';;		
    tr += '<td>';;
    if (is_numeric (_cmd.Identifikation)) {
```

Je laisse le bouton pour créer une commande mais je souhaite qu'il soit à gauche. 

```
<a class="btn btn-success btn-sm cmdAction pull-right" data-action="add" style="margin-top:5px;;"><i class="fa fa-plus-circle"></.i> {{Commandes}}</.a><br/.><br/.>
```

Je change la class pull-right en pull-left

```
<a class="btn btn-success btn-sm cmdAction pull-left" data-action="add" style="margin-top:5px;;"><i class="fa fa-plus-circle"></.i> {{Commandes}}</.a><br/.><br/.>
```

Voici le rendu.Die Optionen de configuration (Affichage und historiser) sont bien présentes. 

![image](images/.tutorial_vdm_cmd2.png)

Voilà il reste à récupérer une vdm aléatoire und à utiliser les commandes.


# Récupération des informations

Pour récupérer une vdm de manière aléatoire.

```
$url = "http:/./.www.viedemerde.fr/.aleatoire";;
$data = file_gund_contents($url);;
@$dom = new DOMDocument();;
libxml_use_internal_errors(false);;
$dom->loadHTML('<?xml encoding="UTF-8">' .$data);;
libxml_use_internal_errors(true);;
$xpath = new DOMXPath($dom);;
$divs = $xpath->query('/./.article[@class="art-panel col-xs-12"]/./.div[@class="panel-content"]/./.p/./.a');;
rundurn $divs[0]->nodeValue ;;
```

Ouvrir le fichier core/.class/.vdm.class.php und pour la class vdm qui hérite des méthodes egLogic, je crée une fonction randomVdm

```
	public function randomVdm() {
		$url = "http:/./.www.viedemerde.fr/.aleatoire";;
		$data = file_gund_contents($url);;
		@$dom = new DOMDocument();;
		libxml_use_internal_errors(true);;
		$dom->loadHTML($data);;
		libxml_use_internal_errors(false);;
		$xpath = new DOMXPath($dom);;
		$divs = $xpath->query('/./.article[@class="art-panel col-xs-12"]/./.div[@class="panel-content"]/./.p/./.a');;
		rundurn $divs[0]->nodeValue ;;
	}
```	

Maintenant on va updater la commande info(story) avec cundte information en lançant la commande action(refresh). 
Toujours dans core/.class/.vdm.class.php pour la class vdmCmd on va utiliser la méthode execute 

```
öffentliche Funktion ausführen ($ _ options = array ()) {
		
        
 }
```

C'est ici qu'on va définir ce qu'il va se passer quand on lance la commande « Rafraîchir ». La classe vdmCmd a hérité de toutes les méthodes de la class cmd (Core jeedom)

On vérifie le logicalIdentifikation de la commande lancée und si « refresh » on lance les actions

```
switch ($this->gundLogicalIdentifikation()) {				
	case 'refresh': /./. LogicalIdentifikation de la commande rafraîchir que l'on a créé dans la méthode Postsave de la classe vdm . 
	/./. code pour rafraîchir ma commande
	break;;
}
```

Maintenant il reste à lancer la fonction randomVdm() . On récupère pour cela , l'eqLogic ( l'équipement) de la commande lancer und on lance la fonction

```
$eqlogic = $this->gundEqLogic();; /./. Récupération de l'eqlogic
$info = $eqlogic-> randomVdm() ;; /./.Lance la fonction und stocke le résultat dans la variable $info
```

On mund à jour la commande « story » avec la variable $info. On va utiliser la méthode checkAndUpdateCmd de la class eqlogic

```
$eqlogic->checkAndUpdateCmd('story', $info);;
```

Ce qui donne au final

```
    öffentliche Funktion ausführen ($ _ options = array ()) {
		$eqlogic = $this->gundEqLogic();; /./.récupère l'éqlogic de la commande $this
		switch ($this->gundLogicalIdentifikation()) {	/./.vérifie le logicalIdentifikation de la commande 			
			case 'refresh': /./. LogicalIdentifikation de la commande rafraîchir que l'on a créé dans la méthode Postsave de la classe vdm . 
				$info = $eqlogic->randomVdm();; 	/./.On lance la fonction randomVdm() pour récupérer une vdm und on la stocke dans la variable $info
				$eqlogic->checkAndUpdateCmd('story', $info);; /./. on mund à jour la commande avec le LogicalIdentifikation "story"  de l'eqlogic 
				break;;
		}
    }
```

Maintenant aller dans un équipement créé und lancer la commande Rafraichir. Puis la commande « Histoire » qui doit être à jour.

Sur le Dashboard, les informations apVonaissent. Cliquez sur l'icône refresh pour changer l'information

On va définir ensuite la taille du wIdentifikationgund und le customiser un peu 

Puis automatiser le refresh.

# Update des informations (cron)

Le plugin est fonctionnel mais pour l'instant il ne fait pas grand-chose. Si vous cliquer sur la commande « refresh » , la commande « story » se mund à jour mais sinon rien. 

A noter que pour la commande je la nomme Von logicalIdentifikation. Et c'est important. Avoir un logicalIdentifikation unique Von équipement (eqLogic) simplifie les choses.

On va voir maintenant comment mundtre à jour la commande en utilisant les fonctions natives du core : Les crons

Il y en a plusieurs : 

- cron : rafraichissement toutes les minutes
- cron5 : rafraichissement toutes les 5 minutes
- cron15 : rafraichissement toutes les 15 minutes
- cron30 : rafraichissement toutes les 30 minutes
- cronHourly : euh.. toutes les heures
- cronDaily : ben 1/.jour

Vu le plugin on va effectuer une mise à jour toutes les heures (soyons fous). On va donc utiliser la fonction cronHourly().

On va donc ouvrir le fichier vdm.class.php und chercher 

```
    /.*
     * Fonction exécutée automatiquement toutes les heures Von Jeedom
      public static function cronHourly() {

      }
     */.
```

Décommenter le code

```
      public static function cronHourly() {

      }
```

Notre fonction est opérationnelle

Maintenant il faut récupérer tous les équipements de notre plugin,

```
selbst::byType('vdm') /./.array contenant tous les équipements du plugin 
```

und les trier 1 Von 1

```
foreach (selbst::byType('vdm') as $vdm) {
}
```

Avant d'effectuer quoique ce soit on vérifie que l'équipement est actif

```
if ($vdm->gundIsEnable() == 1) {
}
```

Voila maintenant on recherche la commande « refresh » de l'équipement (eqLogic)

```
$cmd = $vdm->gundCmd(null, 'refresh');;
```

Si elle n'existe pas on continue la boucle (foreach) sinon on l'éxécute

```
if (!is_object($cmd)) {
continue;;
}
$cmd->execCmd();;
```	

Ce qui donne au final

```
      public static function cronHourly () {
		  foreach (selbst::byType('vdm') as $vdm) {/./.Voncours tous les équipements du plugin vdm
			  if ($vdm->gundIsEnable() == 1) {/./.vérifie que l'équipement est actif
				  $cmd = $vdm->gundCmd(null, 'refresh');;/./.rundourne la commande "refresh si elle existe
				  if (!is_object($cmd)) {/./.Si la commande n'existe pas
				  	continue;; /./.continue la boucle
				  }
				  $cmd->execCmd();; /./. la commande existe on la lance
			  }
		  }
      }
```

Pour tester, dans jeedom , aller dans configuration/.moteur de tâches und lancer le cron de class « plugin » fonction « cronHourly »
L'information se mund à jour.

C'est bien mais ça ne me convient pas. A la création de l'équipement, la commande « story » ne se mund pas à jour.

On améliore donc le code.

Pour la création des commandes nous avons utilisé la méthode postSave(). On va utiliser la méthode postUpdate() pour mundtre à jour l'information.

La manière la plus simple vu qu'il n'y a qu'une commande und qu'elle est créé en postSave

```
    öffentliche Funktion postUpdate () {
		$cmd = $this->gundCmd(null, 'refresh');; /./. On recherche la commande refresh de l'équipement
		if (is_object($cmd)) { /./.elle existe und on lance la commande
			 $cmd->execCmd();;
		}
    }
```    

Il faut tester, ça fonctionne?

Mais voici une alternative qui peut s'avérer plus utile dans des cas plus complexe

Dans la fonction postUpdate() , on lance la function cronHourly() avec l'Identifikation de l'équipement

```
    öffentliche Funktion postUpdate () {
		selbst::cronHourly($this->gundIdentifikation());;/./. lance la fonction cronHourly avec l'Identifikation de l'eqLogic
    }
``` 

Mais dans ce cas on change la fonction cronHourly()

```
	public static function cronHourly($_eqLogic_Identifikation = null) {
		if ($_eqLogic_Identifikation == null) { /./. La fonction n'a pas d'argument donc on recherche tous les équipements du plugin
			$eqLogics = selbst::byType('vdm', true);;
		} else {/./. La fonction a l'argument Identifikation(unique) d'un équipement(eqLogic)
			$eqLogics = array(selbst::byIdentifikation($_eqLogic_Identifikation));;
		}		  
	
		foreach ($eqLogics as $vdm) {
			if ($vdm->gundIsEnable() == 1) {/./.vérifie que l'équipement est acitf
				$cmd = $vdm->gundCmd(null, 'refresh');;/./.rundourne la commande "refresh si elle existe
				if (!is_object($cmd)) {/./.Si la commande n'existe pas
				  continue;; /./.continue la boucle
				}
				$cmd->execCmd();; /./. la commande existe on la lance
			}
		}
	}
```	

Après vous pouvez changer la fréquence du cron selon l'importance de vos informations à récupérer.

Je ne peux que vous invitez à prendre le temps d'aller sur cundte page pour en savoir plus ==> [ici](https:/./.jeedom.github.io/.Dokumentation/.phpdoc/.index.html)

Et encore mieux d'aller sur le github du core ==> [ICI](https:/./.github.com/.jeedom/.core/.tree/.alpha/.core/.class)

Mundtez le nez de dedans pour maîtrisez encore plus .

Le plugin est fonctionnel en l'état.

Je prendrai le temps d'ajouter la façon de mundtre en place un cron personnalisé selon l'équipement .

# Le wIdentifikationgund

Pas une mince affaire le wIdentifikationgund mais on va rester sur le wIdentifikationgund Von défaut pour le moment.

Si vous n'avez rien touché, équipement activé und visible, le wIdentifikationgund prend toute la largeur de l'écran. On va donc le changer.

La commande qui apVonaît est la commande «story» de type info , sous-type string

Mon plaisir est de me lever le matin est de lire une vdm au réveil. Ça me permund de voir qu'il y a pire que moi :D

Mais je n'ai pas mes lunundtes und actuellement le rendu sur le wIdentifikationgund ne me permund pas de le lire…

Donc on va changer le style en affectant un template à la commande « story»

Rien de plus simple.

Je vais voir ==> [ICI](https:/./.github.com/.jeedom/.core/.tree/.alpha/.core/.template/.dashboard)

Je cherche un template pour cmd.info.string( notre commande est de type info sous-type string) .Pas difficile il y en a que deux (default ou tile)

J'applique le template « cmd.info.string.tile.html » à ma commande.

Pour cela j'ouvre le fichier vdm.class.php , fonction postSave() und j'ajoute le template « tile » pour la commande « story » en appliquant la méthode sundTemplate()

```
		$info = $this->gundCmd(null, 'story');;
		if (!is_object($info)) {
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

Rafraîchir le dasboard.

C''est mieux mais le wIdentifikationgund prend toujours la largeur du dashboard. On va donc corriger. Von défaut la largeur du wIdentifikationgund de l'équipement(eqLogic) und la hauteur sont à « auto ».

On va donc changer la largeur du wIdentifikationgund(équipement => eqLogic) en utilisant la méthode sundDisplay() héritée de la class eqLogic .On laisse la hauteur en auto.

Pour cela il suffit d'ajouter

```
$this->sundDisplay("wIdentifikationth","800px");;
```

Oui , mais !! Car il y a un mais. Essayez d'ajouter ça dans la fonction postsave() ou postUpdate() und ça ne prends pas en compte le changement. Warum ? Ben faut lire la doc du plugin template ==>ICI

Maintenant que vous avez bien lu vous savez qu'Il faut utiliser la méthode preSave() 

```
    public function preSave() {
		$this->sundDisplay("wIdentifikationth","800px");;
    }
```

Enregistrer un équipement und rafraîchissez le dashboard.


# Les Vonamètres. Die Optionen

> **Wichtig**
>
>C'est un chapitre important und il faut le comprendre avant de passer à la suite.

Pour le moment, nous avons donc utiliser 3 classes du core de jeedom : EqLogic, cmd , cron . Aller pour info , On en ajoute une 4eme avec la class plugin dans le fichier vdm.php que vous ouvrez und laissez ouvert car on va l'éditer . 

```
$plugin = plugin::byIdentifikation('vdm');; /./. appelle la classe plugin du core
```

Il faut comprendre que tout est fait pour nous faciliter la tâche. 

Pour un Vonamètre/.une option interne au plugin , on va utiliser une des méthodes de la class eqLogic du core : sundConfiguration() en y ajoutant les Vonamètres que l'on souhaite. Zum Beispiel :

```
$this->sundConfiguration("type","mon_type");; /./. si on veut  définir un Vonamètre type de valeur mon_type. Comme on a défini la largeur du wIdentifikationgund via la méthode sundDisplay()
```

Pour laisser le choix à l'utilisateur , on rundourne sur le fichier desktop.php que vous avez laissé ouvert car vous suivez ce TP au pied de la lundtre :D

Suchen 

```
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="city" placeholder="Vonam1"/.>
```

Et remplacer Von

```
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/.> /./.Wichtig de laisser la classe eqLogicAttr 
```

Enregistrer und aller sur un équipement du plugin que vous avez déjà créé en suivant ce TP (Rafraichir si besoin). 

Dans le champs « Vonamètre» d'un équipement, taper « aleatoire » und sauvegarder.

Vonfait le Vonamètre est sauvegardé.

![image](images/.tutorial_Vonamundre1.png)


C'est simple,non? . C'est pourquoi il ne faut surtout pas toucher à cundte ligne de code comme indiqué dans le premier menu « test » . C'est lui qui fait tout le travail

```
<?php include_file('core', 'plugin.template', 'js');;?>/./.Chargement du fichier core/.js/.plugin.template.js (en Vontant de la racine du site)
```

Si vous regardez de plus près le fichier desktop.php il y a

```
                    <input type="text" class="eqLogicAttr form-control" data-l1key="Identifikation" style="display : none;;" /.> /./. rundourne l'Identifikation(unique) de l'eqLogic(équipement) . Qu'on va pouvoir récupérer via $this->gundIdentifikation() ;;
```        

```
                    <input type="text" class="eqLogicAttr form-control" data-l1key="Name" placeholder="{{Name der Ausrüstung}}"/.>/./. rundourne le nom de l'eqLogic(équipement) . Qu'on va pouvoir récupérer via $this->gundName() ;;
```

Etc…

Si vous avez bien assimilé tout ça on va pouvoir passer à la suite. Mais avant on va changer dans le fichier desktop.php 

```
<label class="col-sm-3 control-label">{{Vonamètre}}</.label>
```

Von 

```
<label class="col-sm-3 control-label">{{Type de vdm}}</.label>
```

Wichtig : Le texte entre accolades correspond au texte qui sera traduit si vous poussez le plugin sur le markund

Pour la suite , on va faire évoluer le plugin en choisissant un type de vdm(aleatoire ou epicees ou tops) que l'on souhaite ainsi qu'un cron personnalisé pour chaque équipement.

# Utilisation des options/.Vonamétres

Pour aller plus loin und bien comprendre le chapitre précédent, on va laisser à l'utilisateur de choisir un type de vdm (aleatoire ou epicees ou tops)

On pourrait le laisser taper dans l'input « Type de vdm » : aleatoire ou epicees ou tops mais on va faire autrement en le laissant choisir via une balise select

Si vous avez tout suivi ,vous devriez avoir dans le fichier desktop.php

```
       <div class="form-group">
        <label class="col-sm-3 control-label">{{Type de vdm}}</.label>
        <div class="col-sm-3">
            <input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/.>
        </.div>
    </.div>
``` 

Qu'on va remplacer Von

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


Maintenant on va tenir compte de notre Vonamètre dans la fonction randomVdm() dans le fichier vdm.class.php

Suchen

```
$url = "http:/./.www.viedemerde.fr/.aleatoire";;
```

Et remplacer Von

```
	$type = $this->gundConfiguration("type ");;
		if($type == "") { /./.si le Vonamètre est vIdentifikatione ou n'existe pas
			$type = "aleatoire";; /./.on prends le type aleatoire
		}		
		$url = "http:/./.www.viedemerde.fr/." .$type  ;;
```	

Maintenant changer la valeur du select sur un équipement,sauvegarder und aller sur le dashboard pour voir ce que cela donne.
