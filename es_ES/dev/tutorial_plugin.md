# 

> **IMPORTANTE**
>
> .  [aquí](https:forum.jeedom.comviewtopic.php?f=27&t=37630#p621495)

. . .()

 [](https:doc.jeedom.com/es_ES/dev)

# 

)

 : 
 : vdm

 [](https:github.comjeedomplugin-templatearchivemaster.zip)

. Vous obtiendrez un dossier « plugin-template-master » contenant des dossiers 3rparty, core, desktop…

.

> **IMPORTANTE**
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


 : [](https:doc.jeedom.com/es_ES/devIcone_de_plugin)





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
  si (!)) {
    $ = new vdmCmd()
    $info->setName(__('Histoire', __FILE__))
  }
  $info->setLogicalId('story')
  $info->setEqLogic_id($this->getId())
  $info->setType('info')
  $info->setSubType('string')
  $info->save()

  $refresh = $this->getCmd(null, 'refresh')
  si (!)) {
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
  si (!)) {
    : {} }
  }
  si (!)) {
    
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


C'est aquí qu'on va définir ce qu'il va se passer quand on actionne la commande « Rafraîchir ». )

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
si (!)) {
  continue
}
$cmd->execCmd()




php
 () {
  ::
    $cmd = $vdm->getCmd(null, 'refresh') retourne la commande "refresh" si elle existe
    si (!
    
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
    } else { //La función tiene el argumento id(unique) de un dispositivo(eqLogic))
      $eqLogics = array(self::byId($_eqLogic_id))
    }

    foreach ($eqLogics como $vdm) {
      $cmd = $vdm->getCmd(null, 'refresh') retourne la commande "refresh si elle existe
      si (!
      
    }
    $cmd->execCmd() la commande existe on la lance
  }
}


Posteriormente podrás cambiar la frecuencia del cron según la importancia de tu información a recuperar.

Sólo puedo invitarte a que te tomes el tiempo de visitar esta página para obtener más información ==> [aquí](https:doc.jeedom.comdevphpdoc4.1)

Y aún mejor ir al núcleo de Github ==> [AQUÍ](https:github.comjeedomcore)

Métete de lleno en ello para dominar aún más .

El complemento es funcional tal como está.

Me tomaré el tiempo para agregar cómo configurar un cron personalizado según el equipo .

# El widget

No es una tarea fácil el widget, pero por el momento nos quedaremos con el widget predeterminado.

Si no has tocado nada, equipo activado y visible, el widget ocupa todo el ancho de la pantalla. Así que vamos a cambiarlo.

La commande qui apparaît est la commande «story» de  info, sous- string.

Mi placer es levantarme por la mañana y leer un VDM cuando me despierto. Me permite ver que hay personas que están en peor situación que yo :D

Pero no tengo mis gafas y actualmente el renderizado en el widget no me permite leerlo

Donc on va changer le style en affectant un template à la commande « story»

Nada podría ser más sencillo.

Ya veré ==> [AQUÍ](https:github.comjeedomcoretreealphacoretemplatedashboard)

Estoy buscando una plantilla para cmd.info.cadena(nuestro comando es del tipo info subtipo cadena) .No es difícil, solo hay dos (predeterminado o mosaico))

J'applique le template « cmd.info.string.tile.html » à ma commande.

Para esto abro el archivo vdm.class.php , fonction postSave() et j'ajoute le template « tile » pour la commande « story » en appliquant la méthode setTemplate()

php
$ = $this->getCmd(null, 'story')
si (!)) {
  $ = new vdmCmd()
  $info->setName(__('Histoire', __FILE__))
}
$info->setLogicalId('story')
$info->setEqLogic_id($this->getId())
$info->setType('info')
$info->setTemplate('dashboard','tile')template pour le dashboard
$info->setSubType('string')
$info->save()


Actualizar el panel de control.

Es mejor, pero el widget aún ocupa el ancho del tablero. Así que lo corregiremos.  défaut la largeur du widget de l'équipement(eqLogic) et la hauteur sont à « auto ».

Por lo tanto, cambiaremos el ancho del widget (equipment => eqLogic) usando el método setDisplay() heredado de la clase eqLogic .Dejamos la altura en auto.

Para ello, simplemente añada

php
$this->setDisplay("width","800px")


Sí, pero !! Porque hay un pero. Intente agregar esto en la función postsave() o postUpdate() y no tendrá en cuenta el cambio. Para qué ? Bueno, tienes que leer la documentación del complemento de plantilla ==>AQUÍ

Ahora que lo has leído bien ya sabes que debes utilizar el método preSave()

php
función pública preSave() {
  $this->setDisplay("width","800px")
}


Guardar equipo y actualizar el panel de control.

# Los ajustes. Las opciones

> **IMPORTANTE**
>
> Este es un capítulo importante y debe entenderse antes de continuar.

Por el momento, hemos utilizado 3 clases del núcleo de Jeedom : EqLogic, comando, cron. Vamos a buscar información, agregamos un cuarto con la clase de complemento en el archivo vdm.php que abres y dejas abierto porque lo vamos a editar.

php
$plugin = plugin::byId('vdm')  appelle la classe plugin du core


Debemos entender que todo se hace para facilitarnos la tarea.

Para un parámetro/opción interna del complemento, utilizaremos uno de los métodos de la clase principal eqLogic: setConfiguration() agregando los parámetros deseados. Por ejemplo:

php
$this->setConfiguration("type","mon_type")  si on veut définir un paramètre  de valeur mon_type. Comme on a défini la largeur du widget via la méthode setDisplay()


Para darle una opción al usuario, volvemos al archivo del escritorio.php que dejaste abierto porque estás siguiendo este TP al pie de la letra :D

Cherchez

html
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="city" placeholder="param1">


Y reemplazar con

html
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"> Importante de laisser la classe eqLogicAttr


Guarde y vaya a un equipo de complemento que ya haya creado siguiendo este TP (Actualice si es necesario)).

Dans le champs «Paramètre» d'un équipement, tapez «aléatoire» et sauvegardez.

Perfecto la configuración está guardada.

![image](imagestutorial_parametre1.png)

Es simple ¿verdad?? . C'est pourquoi il ne faut surtout pas toucher à cette ligne de code comme indiqué dans le premier menu « test ». Él es quien hace todo el trabajo

php
<?php include_file('core', 'plugin.template', 'js')?> Chargement du fichier corejsplugin.template.js (en partant de la racine du site)


Si miras más de cerca el archivo del escritorio.php hay

html
<input type="text" class="eqLogicAttr form-control" data-l1key="id" style="display:none" >  retourne l'id(unique) de l'eqLogic(équipement) que l'on va pouvoir récupérer via $this->getId() 


html
{% raw %}<input type="text" class="eqLogicAttr form-control" data-l1key="name" placeholder="{{ de l'équipement}}"> retourne le nom de l'eqLogic(équipement) que l'on va pouvoir récupérer via $this->getName(){% endraw %}


Etc…

Si has entendido bien todo esto, podemos pasar al siguiente paso. Pero primero cambiaremos el archivo desktop.php

html
{% raw %}<label class="col-sm-3 control-label">{{Paramètre}}<label>{% endraw %}


Par

html
{% raw %}<label class="col-sm-3 control-label">{{Type de vdm}}<label>{% endraw %}


Importante : El texto entre llaves es el texto que se traducirá si lanzas el complemento al mercado.

Por lo demás, desarrollaremos el plugin eligiendo un tipo de vdm (random o spicy o tops) que queramos así como un cron personalizado para cada equipo.

# Uso de opciones/parámetros

Para ir más allá y comprender el capítulo anterior, permitiremos al usuario elegir un tipo de vdm (aleatorio o picante o tops))

On pourrait le laisser taper dans l'input « Type de  » : Al azar o picante o tops, pero lo haremos de manera diferente al permitirle elegir a través de una etiqueta de selección

Si seguiste todo, deberías tener en el archivo desktop.php

html
{% raw %}
<div class="form-group">
  <label class="col-sm-3 control-label">{{Type de vdm}}<label>
  <div class="col-sm-3">
    <input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option">
  <div>
<div>
{% endraw %}


Que reemplazaremos con

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

Ahora tendremos en cuenta nuestro parámetro en la función randomVdm() en el archivo vdm.class.php

Cherchez

php
$url = "http:www.viedemerde.fraleatoire"


Y reemplazar con

php
$ = $this->getConfiguration("type", "aleatoire") si le paramètre est vide ou n'existe pas, on prends le  aleatoire
$url = "http:www.viedemerde.fr{$type}"


Ahora cambie el valor seleccionado en un dispositivo, guárdelo y vaya al panel para ver cómo se ve.
