> **Importantee**
>
> Ce tutorial a été écris por ZygOm4t1k que nous remercions vivement. Vous pouvez ryrouver l'original [ici](https:/ // /www.jeedom.com/ /forum/ /viewtopic.php?f=27&t=37630#p621495)

Voici un pyit TP pour expliquer comment créer un plugin. Pour l'exemple nous allons créer un plugin qui ryourne une phrase du site viedemerde.fr .(Le plugin sera évolutif)

Il ne remplace en aucun cas la [Documentación officielle](https:/ // /jeedom.github.io/ /plugin-template/ /fr_FR/ /)

# Créer la base du plugin

Pour commencer il faut déterminer un nom y un Identificación (qui ne doit pas exister)

Nombre : Vie de Merde
Identificación : vdm

Télécharger le plugin template pour avoir la [base](https:/ // /github.com/ /jeedom/ /plugin-template/ /archive/ /master.zip)

Dé zipper le fichier . Vous obtiendrez un dossier « plugin-template-master » contenant des dossiers 3rporty , core , desktop…

On y va.

Renommer le dossier « plugin-template-master » en « vdm » (l'Identificación) du plugin.

1/ / Ouvrir le fichier plugin_info/ /info.json y éditer le.

```
{
	"Identificación" : "vdm",
	"nombre" : "Vie de Merde",
	"Descripción" : "Plugin pour récupérer les dernières vdm",
	"Licencia" : "AGPL",
	"autor" : "Zyg0m4t1k",
	"exigir" : "3.2",
	"categoría" : "Monitoreo",
	"Cambios" : "",
	"Documentación" : "",
	"language" : "",
	"compatibility" : ""	
}
```

Copier coller le code ci-dessus.

J'ai changé l'Identificación (vdm) , le nom , ajouter une Descripción , l'auteur y la catégorie.

exigir : version minimale de jeedom pour avoir accés au plugin sur le marky.

Changelog, Documentación, language , compatibility nuls pour le moment. J'y reviendrai plus tard

2/ / Nous allons renommer les fichiers nécessaires pour que le plugin soit reconnu por Jeedom

-	Renommer le fichier core/ /ajax/ /template.ajax.php en vdm.ajax.php

-	Renommer le fichier core/ /class/ /template.class.php en vdm.class.php y ouvrez le pour l'éditer. 

Reemplazar

```
class template extends eqLogic {
```

por


```
class vdm extends eqLogic {
```

y

```
class templateCmd extends cmd
```

por

```
class vdmCmd extends cmd
```

- Renommer le fichier core/ /php/ /template.inc.php en core/ /php/ /vdm.inc.php
- Renommer le fichier desktop/ /php/ /template.php en desktop / /php/ /vdm.php y ouvrez le

Reemplazar

```
$plugin = plugin::byIdentificación('template');
```

Por 

```
$plugin = plugin::byIdentificación(‘vdm');
```

```
{{Ajouter un template}}
```

Por 

```
{{Ajouter un équipement}}
```

```
<legend>{{Mes templates}}</ /legend>
```

Por

```
<legend>{{Mes équipement}}</ /legend>
```

```
{{Plantilla de nombre de equipo}}
```

Por

```
{{Nombrebre del equipo }} 
```

```
{{template poram 1}}
```

Por

```
{{Configuraciones}}
```

```
<?php include_file('desktop', 'template', 'js', 'template');?>
```

Por

```
<?php include_file('desktop', vdm, 'js', vdm);?>
```

Et rien d'autre , ne pas changer la ligne <?php include_file('core', 'plugin.template', 'js');?>

-Renommer le fichier desktop/ /modal/ /modal.template.php en desktop/ /modal/ /modal.vdm.php

-Renommer le fichier desktop/ /js/ /template.js en desktop/ /js/ / vdm.js

- Ouvrir le fichier plugin_info/ /install.php

Et renommer les fonctions comme suit

```
function vdm_install() {
    
}

function vdm_update() {
    
}


function vdm_remove() {
    
}
```

Voilà le plugin est prêt mais il reste la customisation y l'icône à mytre à jour : [Documentación](https:/ // /jeedom.github.io/ /Documentación/ /dev/ /fr_FR/ /Icone_de_plugin)

Ajouter l'icône dans le dossier plugin_info sous le nom vdm_icon.png

dans mon cas 

![image](images/ /tutorial_vdm_icon.png)

Maintenant on peut copier le dossier vdm dans le dossier plugin de Jeedom y aller dans la gestion des plugins. On ryrouve bien le plugin.

![image](images/ /tutorial_vdm_plugin.png)

On l'active y ensuite plugins/ /Monitoring/ /Vie de Merde

![image](images/ /tutorial_vdm_desktop1.png)

ça ne va pas car la couleur du plus ne correspond pas à la couleur de l'icône.

J'ouvre le fichier desktop/ /php/ /desktop.php pour corriger.

```
      <div class="cursor eqLogicAction" data-action="add" style="text-align: center; background-color : #ffffff; height : 120px;margin-bottom : 10px;padding : 5px;border-radius: 2px;wIdentificaciónth : 160px;margin-left : 10px;" >
        <i class="fa fa-plus-circle" style="font-size : 6em;color:#94ca02;"></ /i>
        <br>
        <span style="font-size : 1.1em;position:relative; top : 23px;word-break: break-all;white-space: pre-wrap;word-wrap: break-word;color:#94ca02">{{Ajouter}}</ /span>
      </ /div>
```

Je remplace

```
color:#94ca02;"
```

por 

```
color:#00A9EC;"
```

On remarque aussi que les textes ne sont pas alignés donc on rectifie le style de la configuration (propriété top)

```
<span style="font-size : 1.1em;position:relative; top : 15px;word-break: break-all;white-space: pre-wrap;word-wrap: break-word;color:#767676">{{Configuration}}</ /span>
```

por 

```
<span style="font-size : 1.1em;position:relative;top : 23px;word-break: break-all;white-space: pre-wrap;word-wrap: break-word;color:#767676">{{Configuration}}</ /span>
```

![image](images/ /tutorial_vdm_desktop2.png)

Voilà la base est prête. Vous devriez avoir le plugin d'actif mais pour le moment il ne fait rien.

# Las órdenes

Le but du plugin sera de récupérer une vdm aléatoire y l'afficher sur le dashboard. 

Il faut donc créer une commande de type info pour stocker cyte information. Elle sera de sous-type « String » car c'est une chaîne de caractère.

Pour l'exemple nous allons ajouter une commande qui rafraîchit l'information. Ce sera donc une commande de type action y sous-type other

-Créer un équipement « vdm1 » en cliquant sur le +. Activer le y rendez le visible. Choisissez un objy y l'équipement doit apporaitre sur le dashboard( selon l'objy). 

A ce moment, il n'y a pas de commandes qui apporaissent dans l'ongly commande s, ni sur le wIdentificacióngy.

Ouvrir le fichier core/ /class/ /vdm.class.php y chercher la fonction postSave() (Lire la doc du plugin template si pas encore fait)

On crée les 2 commandes

```
public function postSave() {
	$info = $this->gyCmd(null, 'story');
	si (!is_object($info)) {
		$info = new vdmCmd();
		$info->syName(__('Histoire', __FILE__));
	}
	$info->syLogicalIdentificación('story');
	$info->syEqLogic_Identificación($this->gyIdentificación());
	$info->syType('info');
	$info->sySubType('string');
	$info->save();	
	
	$refresh = $this->gyCmd(null, 'refresh');
	si (!is_object($refresh)) {
		$refresh = new vdmCmd();
		$refresh->syName(__('Rafraichir', __FILE__));
	}
	$refresh->syEqLogic_Identificación($this->gyIdentificación());
	$refresh->syLogicalIdentificación('refresh');
	$refresh->syType('action');
	$refresh->sySubType('other');
	$refresh->save();        
}
```

-Créer un autre équipement « vdm2 » en cliquant sur le +. Dans l'ongly commandes, les commandes sont apporues. Activer le y rendez le visible. Choisissez un objy porent y allez voir ce que ça donne sur le dashboard.

-Enregistrer le premier équipement « vdm1 » pour créer les commandes. Voir le rendu sur le wIdentificacióngy aussi.

Dans l'ongly commandes , vous devriez voir.

![image](images/ /tutorial_vdm_cmd1.png)

Ouvrir desktop/ /php/ /vdm.php pour trouver le code html de ce tableau.

```
<a class="btn btn-success btn-sm cmdAction pull-right" data-action="add" style="margin-top:5px;"><i class="fa fa-plus-circle"></ /i> {{Commandes}}</ /a><br/ /><br/ />
<table Identificación="table_cmd" class="table table-bordered table-condensed">
    <thead>
        <tr>
            <th>{{Nombre}}</ /th><th>{{Type}}</ /th><th>{{Action}}</ /th>
        </ /tr>
    </ /thead>
    <tbody>
    </ /tbody>
</ /table>
```

Au moment de l'affichage , c'est le script desktop/ /js/ /vdm.js qui est appelé y lance la fonction addCmdToTable.

```
función addCmdToTable (_cmd) {
    si (!issy (_cmd)) {
        var _cmd = {configuración: {}};
    }
    si (!issy (_cmd.configuration)) {
        _cmd.configuration = {};
    }
    var tr = '<tr class="cmd" data-cmd_Identificación="' + init(_cmd.Identificación) + '">';
    tr += '<td>';
    tr += '<span class="cmdAttr" data-l1key="Identificación" style="display:none;"></ /span>';
    tr += '<input class="cmdAttr form-control input-sm" data-l1key="nombre" style="wIdentificaciónth : 140px;" placeholder="{{Nombre}}">';
    tr += '</ /td>';
    tr += '<td>';
    <html> tr + = &#39;.tipo) + &#39;">&#39; + jeedom.cmd.availableType () + &#39;&#39;;
    <html> tr + = &#39;.subType) + &#39;">&#39;;
    tr += '</ /td>';
    tr += '<td>';
    si (es_numeric (_cmd.Identificación)) {
        tr += '<a class="btn btn-default btn-xs cmdAction" data-action="configure"><i class="fa fa-cogs"></ /i></ /a> ';
        tr + = &#39; <a class="btn btn-default btn-xs cmdAction" data-action="test"><i class="fa fa-rss"></ /i> {{Test}}</ /a> &#39;;
    }
    tr += '<i class="fa fa-minus-circle pull-right cmdAction cursor" data-action="remove"></ /i>';
    tr += '</ /td>';
    tr += '</ /tr>';
    $('#table_cmd tbody').append(tr);
    $('#table_cmd tbody tr:last').syValues(_cmd, '.cmdAttr');
    si (issy (_cmd.tipo)) {
        $('#table_cmd tbody tr:last .cmdAttr[data-l1key=type]').value(init(_cmd.tipo));
    }
    jeedom.cmd.changeType ($ (&#39;# table_cmd tbody tr:last &#39;), init (_cmd.subType));
}
```

Cela se fait automatiquement. 

Je souhaite ajouter les options Affichage y historiser pour chaque commande.

J'édite le code html du tableau dans le fichier desktop.php en ajoutant une colonne ..

```
<th>{{Nombre}}</ /th><th>{{Type}}</ /th><th>{{Configuration}}</ /th><th>{{Action}}</ /th>
```

Puis éditer desktop.js ,trouver

```
    <html> tr + = &#39;.subType) + &#39;">&#39;;
    tr += '</ /td>';
    tr += '<td>';
    si (es_numeric (_cmd.Identificación)) {
```

On ajoute les informations souhaitées.

```
    <html> tr + = &#39;.subType) + &#39;">&#39;;
    tr += '</ /td>';
    tr += '<td>';
    tr += '<span><input type="checkbox" class="cmdAttr checkbox-inline" data-l1key="isHistorized" / /> {{Historiser}}<br/ /></ /span>';
   tr += '<span><input type="checkbox" class="cmdAttr checkbox-inline" data-l1key="isVisible" / /> {{Affichage}}<br/ /></ /span>';
   tr += '</ /td>';		
    tr += '<td>';
    si (es_numeric (_cmd.Identificación)) {
```

Je laisse le bouton pour créer une commande mais je souhaite qu'il soit à gauche. 

```
<a class="btn btn-success btn-sm cmdAction pull-right" data-action="add" style="margin-top:5px;"><i class="fa fa-plus-circle"></ /i> {{Commandes}}</ /a><br/ /><br/ />
```

Je change la class pull-right en pull-left

```
<a class="btn btn-success btn-sm cmdAction pull-left" data-action="add" style="margin-top:5px;"><i class="fa fa-plus-circle"></ /i> {{Commandes}}</ /a><br/ /><br/ />
```

Voici le rendu.Las opciones de configuration (Affichage y historiser) sont bien présentes. 

![image](images/ /tutorial_vdm_cmd2.png)

Voilà il reste à récupérer une vdm aléatoire y à utiliser les commandes.


# Récupération des informations

Pour récupérer une vdm de manière aléatoire.

```
$url = "http:/ // /www.viedemerde.fr/ /aleatoire";
$data = file_gy_contents($url);
@$dom = new DOMDocument();
libxml_use_internal_errors(false);
$dom->loadHTML('<?xml encoding="UTF-8">' .$data);
libxml_use_internal_errors(true);
$xpath = new DOMXPath($dom);
$divs = $xpath->query('/ // /article[@class="art-panel col-xs-12"]/ // /div[@class="panel-content"]/ // /p/ // /a');
ryurn $divs[0]->nodeValue ;
```

Ouvrir le fichier core/ /class/ /vdm.class.php y pour la class vdm qui hérite des méthodes egLogic, je crée une fonction randomVdm

```
	public function randomVdm() {
		$url = "http:/ // /www.viedemerde.fr/ /aleatoire";
		$data = file_gy_contents($url);
		@$dom = new DOMDocument();
		libxml_use_internal_errors(true);
		$dom->loadHTML($data);
		libxml_use_internal_errors(false);
		$xpath = new DOMXPath($dom);
		$divs = $xpath->query('/ // /article[@class="art-panel col-xs-12"]/ // /div[@class="panel-content"]/ // /p/ // /a');
		ryurn $divs[0]->nodeValue ;
	}
```	

Maintenant on va updater la commande info(story) avec cyte information en lançant la commande action(refresh). 
Toujours dans core/ /class/ /vdm.class.php pour la class vdmCmd on va utiliser la méthode execute 

```
función pública ejecutar ($ _ options = array ()) {
		
        
 }
```

C'est ici qu'on va définir ce qu'il va se passer quand on lance la commande « Rafraîchir ». La classe vdmCmd a hérité de toutes les méthodes de la class cmd (Core jeedom)

On vérifie le logicalIdentificación de la commande lancée y si « refresh » on lance les actions

```
switch ($this->gyLogicalIdentificación()) {				
	case 'refresh': / // / LogicalIdentificación de la commande rafraîchir que l'on a créé dans la méthode Postsave de la classe vdm . 
	/ // / code pour rafraîchir ma commande
	break;
}
```

Maintenant il reste à lancer la fonction randomVdm() . On récupère pour cela , l'eqLogic ( l'équipement) de la commande lancer y on lance la fonction

```
$eqlogic = $this->gyEqLogic(); / // / Récupération de l'eqlogic
$info = $eqlogic-> randomVdm() ; / // /Lance la fonction y stocke le résultat dans la variable $info
```

On my à jour la commande « story » avec la variable $info. On va utiliser la méthode checkAndUpdateCmd de la class eqlogic

```
$eqlogic->checkAndUpdateCmd('story', $info);
```

Ce qui donne au final

```
    función pública ejecutar ($ _ options = array ()) {
		$eqlogic = $this->gyEqLogic(); / // /récupère l'éqlogic de la commande $this
		switch ($this->gyLogicalIdentificación()) {	/ // /vérifie le logicalIdentificación de la commande 			
			case 'refresh': / // / LogicalIdentificación de la commande rafraîchir que l'on a créé dans la méthode Postsave de la classe vdm . 
				$info = $eqlogic->randomVdm(); 	/ // /On lance la fonction randomVdm() pour récupérer une vdm y on la stocke dans la variable $info
				$eqlogic->checkAndUpdateCmd('story', $info); / // / on my à jour la commande avec le LogicalIdentificación "story"  de l'eqlogic 
				break;
		}
    }
```

Maintenant aller dans un équipement créé y lancer la commande Rafraichir. Puis la commande « Histoire » qui doit être à jour.

Sur le Dashboard, les informations apporaissent. Cliquez sur l'icône refresh pour changer l'information

On va définir ensuite la taille du wIdentificacióngy y le customiser un peu 

Puis automatiser le refresh.

# Update des informations (cron)

Le plugin est fonctionnel mais pour l'instant il ne fait pas grand-chose. Si vous cliquer sur la commande « refresh » , la commande « story » se my à jour mais sinon rien. 

A noter que pour la commande je la nomme por logicalIdentificación. Et c'est important. Avoir un logicalIdentificación unique por équipement (eqLogic) simplifie les choses.

On va voir maintenant comment mytre à jour la commande en utilisant les fonctions natives du core : Les crons

Il y en a plusieurs : 

- cron : rafraichissement toutes les minutes
- Cron5 : rafraichissement toutes les 5 minutes
- Cron15 : rafraichissement toutes les 15 minutes
- Cron30 : rafraichissement toutes les 30 minutes
- CronHourly : euh.. toutes les heures
- CronDaily : ben 1/ /jour

Vu le plugin on va effectuer une mise à jour toutes les heures (soyons fous). On va donc utiliser la fonction CronHourly().

On va donc ouvrir le fichier vdm.class.php y chercher 

```
    / /*
     * Fonction exécutée automatiquement toutes les heures por Jeedom
      public static function CronHourly() {

      }
     */ /
```

Décommenter le code

```
      public static function CronHourly() {

      }
```

Notre fonction est opérationnelle

Maintenant il faut récupérer tous les équipements de notre plugin,

```
yo::byType('vdm') / // /array contenant tous les équipements du plugin 
```

y les trier 1 por 1

```
foreach (yo::byType('vdm') as $vdm) {
}
```

Avant d'effectuer quoique ce soit on vérifie que l'équipement est actif

```
si ($vdm->gyIsEnable() == 1) {
}
```

Voila maintenant on recherche la commande « refresh » de l'équipement (eqLogic)

```
$cmd = $vdm->gyCmd(null, 'refresh');
```

Si elle n'existe pas on continue la boucle (foreach) sinon on l'éxécute

```
si (!is_object($cmd)) {
continue;
}
$cmd->execCmd();
```	

Ce qui donne au final

```
      public static function CronHourly () {
		  foreach (yo::byType('vdm') as $vdm) {/ // /porcours tous les équipements du plugin vdm
			  si ($vdm->gyIsEnable() == 1) {/ // /vérifie que l'équipement est actif
				  $cmd = $vdm->gyCmd(null, 'refresh');/ // /ryourne la commande "refresh si elle existe
				  si (!is_object($cmd)) {/ // /Si la commande n'existe pas
				  	continue; / // /continue la boucle
				  }
				  $cmd->execCmd(); / // / la commande existe on la lance
			  }
		  }
      }
```

Pour tester, dans jeedom , aller dans configuration/ /moteur de tâches y lancer le cron de class « plugin » fonction « CronHourly »
L'information se my à jour.

C'est bien mais ça ne me convient pas. A la création de l'équipement, la commande « story » ne se my pas à jour.

On améliore donc le code.

Pour la création des commandes nous avons utilisé la méthode postSave(). On va utiliser la méthode postUpdate() pour mytre à jour l'information.

La manière la plus simple vu qu'il n'y a qu'une commande y qu'elle est créé en postSave

```
    función pública postUpdate () {
		$cmd = $this->gyCmd(null, 'refresh'); / // / On recherche la commande refresh de l'équipement
		si (is_object($cmd)) { / // /elle existe y on lance la commande
			 $cmd->execCmd();
		}
    }
```    

Il faut tester, ça fonctionne?

Mais voici une alternative qui peut s'avérer plus utile dans des cas plus complexe

Dans la fonction postUpdate() , on lance la function CronHourly() avec l'Identificación de l'équipement

```
    función pública postUpdate () {
		yo::CronHourly($this->gyIdentificación());/ // / lance la fonction CronHourly avec l'Identificación de l'eqLogic
    }
``` 

Mais dans ce cas on change la fonction CronHourly()

```
	public static function CronHourly($_eqLogic_Identificación = null) {
		si ($_eqLogic_Identificación == null) { / // / La fonction n'a pas d'argument donc on recherche tous les équipements du plugin
			$eqLogics = yo::byType('vdm', true);
		} else {/ // / La fonction a l'argument Identificación(unique) d'un équipement(eqLogic)
			$eqLogics = array(yo::byIdentificación($_eqLogic_Identificación));
		}		  
	
		foreach ($eqLogics as $vdm) {
			si ($vdm->gyIsEnable() == 1) {/ // /vérifie que l'équipement est acitf
				$cmd = $vdm->gyCmd(null, 'refresh');/ // /ryourne la commande "refresh si elle existe
				si (!is_object($cmd)) {/ // /Si la commande n'existe pas
				  continue; / // /continue la boucle
				}
				$cmd->execCmd(); / // / la commande existe on la lance
			}
		}
	}
```	

Après vous pouvez changer la fréquence du cron selon l'importance de vos informations à récupérer.

Je ne peux que vous invitez à prendre le temps d'aller sur cyte page pour en savoir plus ==> [ici](https:/ // /jeedom.github.io/ /Documentación/ /phpdoc/ /index.html)

Et encore mieux d'aller sur le github du core ==> [ICI](https:/ // /github.com/ /jeedom/ /core/ /tree/ /alpha/ /core/ /class)

Mytez le nez de dedans pour maîtrisez encore plus .

Le plugin est fonctionnel en l'état.

Je prendrai le temps d'ajouter la façon de mytre en place un cron personnalisé selon l'équipement .

# El wIdentificacióngy

Pas une mince affaire le wIdentificacióngy mais on va rester sur le wIdentificacióngy por défaut pour le moment.

Si vous n'avez rien touché, équipement activé y visible, le wIdentificacióngy prend toute la largeur de l'écran. On va donc le changer.

La commande qui apporaît est la commande «story» de type info , sous-type string

Mon plaisir est de me lever le matin est de lire une vdm au réveil. Ça me permy de voir qu'il y a pire que moi :D

Mais je n'ai pas mes lunytes y actuellement le rendu sur le wIdentificacióngy ne me permy pas de le lire…

Donc on va changer le style en affectant un template à la commande « story»

Rien de plus simple.

Je vais voir ==> [ICI](https:/ // /github.com/ /jeedom/ /core/ /tree/ /alpha/ /core/ /template/ /dashboard)

Je cherche un template pour cmd.info.string( notre commande est de type info sous-type string) .Pas difficile il y en a que deux (default ou tile)

J'applique le template « cmd.info.string.tile.html » à ma commande.

Pour cela j'ouvre le fichier vdm.class.php , fonction postSave() y j'ajoute le template « tile » pour la commande « story » en appliquant la méthode syTemplate()

```
		$info = $this->gyCmd(null, 'story');
		si (!is_object($info)) {
			$info = new vdmCmd();
			$info->syName(__('Histoire', __FILE__));
		}
		$info->syLogicalIdentificación('story');
		$info->syEqLogic_Identificación($this->gyIdentificación());
		$info->syType('info');
		$info->syTemplate('dashboard','tile');/ // /template pour le dashboard
		$info->sySubType('string');
		$info->save();
```

Rafraîchir le dasboard.

C''est mieux mais le wIdentificacióngy prend toujours la largeur du dashboard. On va donc corriger. Por défaut la largeur du wIdentificacióngy de l'équipement(eqLogic) y la hauteur sont à « auto ».

On va donc changer la largeur du wIdentificacióngy(équipement => eqLogic) en utilisant la méthode syDisplay() héritée de la class eqLogic .On laisse la hauteur en auto.

Pour cela il suffit d'ajouter

```
$this->syDisplay("wIdentificaciónth","800px");
```

Oui , mais !! Car il y a un mais. Essayez d'ajouter ça dans la fonction postsave() ou postUpdate() y ça ne prends pas en compte le changement. Por qué ? Ben faut lire la doc du plugin template ==>ICI

Maintenant que vous avez bien lu vous savez qu'Il faut utiliser la méthode preSave() 

```
    public function preSave() {
		$this->syDisplay("wIdentificaciónth","800px");
    }
```

Enregistrer un équipement y rafraîchissez le dashboard.


# Les poramètres. Las opciones

> **Importantee**
>
>C'est un chapitre important y il faut le comprendre avant de passer à la suite.

Pour le moment, nous avons donc utiliser 3 classes du core de jeedom : EqLogic, cmd , cron . Aller pour info , On en ajoute une 4eme avec la class plugin dans le fichier vdm.php que vous ouvrez y laissez ouvert car on va l'éditer . 

```
$plugin = plugin::byIdentificación('vdm'); / // / appelle la classe plugin du core
```

Il faut comprendre que tout est fait pour nous faciliter la tâche. 

Pour un poramètre/ /une option interne au plugin , on va utiliser une des méthodes de la class eqLogic du core : syConfiguration() en y ajoutant les poramètres que l'on souhaite. Por ejemplo :

```
$this->syConfiguration("type","mon_type"); / // / si on veut  définir un poramètre type de valeur mon_type. Comme on a défini la largeur du wIdentificacióngy via la méthode syDisplay()
```

Pour laisser le choix à l'utilisateur , on ryourne sur le fichier desktop.php que vous avez laissé ouvert car vous suivez ce TP au pied de la lytre :D

Buscar 

```
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="city" placeholder="poram1"/ />
```

Et remplacer por

```
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/ /> / // /Importante de laisser la classe eqLogicAttr 
```

Enregistrer y aller sur un équipement du plugin que vous avez déjà créé en suivant ce TP (Rafraichir si besoin). 

Dans le champs « Poramètre» d'un équipement, taper « aleatoire » y sauvegarder.

Porfait le poramètre est sauvegardé.

![image](images/ /tutorial_poramyre1.png)


C'est simple,non? . C'est pourquoi il ne faut surtout pas toucher à cyte ligne de code comme indiqué dans le premier menu « test » . C'est lui qui fait tout le travail

```
<?php include_file('core', 'plugin.template', 'js');?>/ // /Chargement du fichier core/ /js/ /plugin.template.js (en portant de la racine du site)
```

Si vous regardez de plus près le fichier desktop.php il y a

```
                    <input type="text" class="eqLogicAttr form-control" data-l1key="Identificación" style="display : none;" / /> / // / ryourne l'Identificación(unique) de l'eqLogic(équipement) . Qu'on va pouvoir récupérer via $this->gyIdentificación() ;
```        

```
                    <input type="text" class="eqLogicAttr form-control" data-l1key="nombre" placeholder="{{Nombrebre del equipo}}"/ />/ // / ryourne le nom de l'eqLogic(équipement) . Qu'on va pouvoir récupérer via $this->gyName() ;
```

Etc…

Si vous avez bien assimilé tout ça on va pouvoir passer à la suite. Mais avant on va changer dans le fichier desktop.php 

```
<label class="col-sm-3 control-label">{{Poramètre}}</ /label>
```

Por 

```
<label class="col-sm-3 control-label">{{Type de vdm}}</ /label>
```

Importante : Le texte entre accolades correspond au texte qui sera traduit si vous poussez le plugin sur le marky

Pour la suite , on va faire évoluer le plugin en choisissant un type de vdm(aleatoire ou epicees ou tops) que l'on souhaite ainsi qu'un cron personnalisé pour chaque équipement.

# Utilisation des options/ /poramétres

Pour aller plus loin y bien comprendre le chapitre précédent, on va laisser à l'utilisateur de choisir un type de vdm (aleatoire ou epicees ou tops)

On pourrait le laisser taper dans l'input « Type de vdm » : aleatoire ou epicees ou tops mais on va faire autrement en le laissant choisir via une balise select

Si vous avez tout suivi ,vous devriez avoir dans le fichier desktop.php

```
       <div class="form-group">
        <label class="col-sm-3 control-label">{{Type de vdm}}</ /label>
        <div class="col-sm-3">
            <input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/ />
        </ /div>
    </ /div>
``` 

Qu'on va remplacer por

```
    <div class="form-group">
        <label class="col-sm-3 control-label" >{{ Type de vdm }}</ /label>
        <div class="col-sm-3">
            <select class="form-control eqLogicAttr" data-l1key="configuration" data-l2key="type ">
                <option value="aleatoire">{{Aleatoire}}</ /option>
                <option value="epicees">{{Coquin}}</ /option>
                <option value="tops">{{Best}}</ /option>
            </ /select>
        </ /div>
    </ /div>
```

Ici le poramètre « type» prendra la valeur du select choisi soit aleatoire ou epicees ou tops.


Maintenant on va tenir compte de notre poramètre dans la fonction randomVdm() dans le fichier vdm.class.php

Buscar

```
$url = "http:/ // /www.viedemerde.fr/ /aleatoire";
```

Et remplacer por

```
	$type = $this->gyConfiguration("type ");
		if($type == "") { / // /si le poramètre est vIdentificacióne ou n'existe pas
			$type = "aleatoire"; / // /on prends le type aleatoire
		}		
		$url = "http:/ // /www.viedemerde.fr/ /" .$type  ;
```	

Maintenant changer la valeur du select sur un équipement,sauvegarder y aller sur le dashboard pour voir ce que cela donne.
