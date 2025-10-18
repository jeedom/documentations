# 

> ****
>
> .  [](https:forum.jeedom.comviewtopic.php?f=27&t=37630#p621495)

. . .()

 [](https:doc.jeedom.com/es_ES/dev)

# 

)

 : 
 : vdm

 [](https:github.comjeedomplugin-templatearchivemaster.zip)

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
  $información = $this->getCmd(null, 'story')
   (!)) {
    $información = new vdmCmd()
    $info->setName(__('Histoire', __FILE__))
  }
  $info->setLogicalId('story')
  $info->setEqLogic_id($this->getId())
  $info->setType('info')
  $info->setSubType('string')
  $info->save()

  $refresh = $this->getCmd(null, 'refresh')
   (!)) {
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
   (!)) {
    : {} }
  }
   (!)) {
    
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
    error: función (error) {
      $('#div_alert').showAlert({ message: error.message, level: 'danger' })
    },
    success: función (resultado) {
      tr.find('.cmdAttr[data-l1key=valor]').append(resultado);
      tr.setValues(_cmd, '.cmdAttr');
      jeedom.cmd.changeType(tr, init(_cmd.subType));
    }
  })
}
{% endraw %}


Esto se hace automáticamente.

Ahora todo lo que queda es recuperar un VDM aleatorio y usar los comandos.

# Recuperación de información

Para recuperar un VDM aleatorio.

php
$url = "http:www.viedemerde.fraleatoire"
$data = file_get_contents($url)
@$dom = new DOMDocument()
libxml_use_internal_errors(falso);
$dom->loadHTML('<?xml encoding="UTF-8">' .$data)
libxml_use_internal_errors(verdadero);
$xpath = new DOMXPath($dom)
$divs = $xpath->query('article[@class="art-panel col-xs-12"]div[@class="panel-content"]pa')
devuelve $divs[0]->nodeValue;


.php y para la clase vdm que hereda los métodos egLogic, creo una función randomVdm

php
función pública randomVdm() {
  $url = "http:www.viedemerde.fraleatoire"
  $data = file_get_contents($url)
  @$dom = new DOMDocument()
  libxml_use_internal_errors(verdadero);
  $dom->loadHTML($data)
  libxml_use_internal_errors(falso);
  $xpath = new DOMXPath($dom)
  $divs = $xpath->query('article[@class="art-panel col-xs-12"]div[@class="panel-content"]pa')
  devuelve $divs[0]->nodeValue;
}


Ahora actualizaremos el comando info(story) con esta información ejecutando el comando action(refresh)).
Todavía en core/class/vdm.class.php para la clase vdmCmd usaremos el método de ejecución

php
función pública ejecutar($_opciones = matriz()) {
}


C'est  qu'on va définir ce qu'il va se passer quand on actionne la commande « Rafraîchir ». La clase vdmCmd heredó todos los métodos de la clase cmd (Core jeedom)

On vérifie le logical de la commande lancée et si « refresh » on lance les actions

php
interruptor ($this->getLogicalId()) {
  caso 'actualizar': //LogicalId del comando de actualización que creamos en el método Postsave de la clase vdm .
  //código para refrescar mi pedido
  break
}


Ahora queda ejecutar la función randomVdm(). Para ello recuperamos el eqLogic (equipo) del comando y ejecutamos la función.

php
$eqlogic = $this->getEqLogic() Récupération de l'eqlogic
$información = $eqlogic->randomVdm()  Lance la fonction et stocke le résultat dans la variable $info


On met à jour la commande « story » avec la variable $info. Utilizaremos el método checkAndUpdateCmd de la clase eqlogic

php
$eqlogic->checkAndUpdateCmd('story', $info)


Lo que en última instancia da

php
función pública ejecutar($_opciones = matriz()) {
  $eqlogic = $this->getEqLogic() récupère l'éqlogic de la commande $this
  switch ($this->getLogicalId()) { //verifica el id lógico del comando
    caso 'actualizar': //LogicalId del comando de actualización que creamos en el método Postsave de la clase vdm .
    $información = $eqlogic->randomVdm() On lance la fonction randomVdm() pour récupérer une  et on la stocke dans la variable $info
    $eqlogic->checkAndUpdateCmd('story', $info) on met à jour la commande avec le Logical "story"  de l'eqlogic
    break
  }
}


Ahora vaya a un equipo creado y ejecute el comando Actualizar. Puis la commande « Histoire » qui doit être à jour.

En el Dashboard aparece la información. Haga clic en el icono de actualización para cambiar la información.

Luego definiremos el tamaño del widget y lo personalizaremos un poco, para luego automatizar la actualización.

# Actualizar información (cron)

El complemento es funcional pero por ahora no hace mucho. Si vous cliquez sur la commande « refresh » , la commande « story » se met à jour mais sinon rien.

Tenga en cuenta que para el comando lo nombro por logicalId. Y eso es importante. Tener un LogicalId único por dispositivo (eqLogic) simplifica las cosas.

Ahora veremos cómo actualizar el comando usando las funciones nativas del núcleo : Los crones

Hay varios :

- cron : refrescar cada minuto
- cron5 : actualizar cada 5 minutos
- cron15 : actualizar cada 15 minutos
- cron30 : actualizar cada 30 minutos
- cronHourly : cada hora
- cronDiario : 1jour

Dado el complemento, realizaremos una actualización cada hora (seamos locos)). Entonces usaremos la función cronHourly().

Entonces abriremos el archivo vdm.class.php y búsqueda

php
*
* Función ejecutada automáticamente cada hora por Jeedom
función estática pública cronHourly() {
}
*


Descomentar el código

php
función estática pública cronHourly() {
}


Nuestra función es operativa

Ahora necesitamos recuperar todo el equipo activo de nuestro complemento,

php
self::byType('vdm', true) //matriz que contiene todo el equipamiento del complemento, el segundo argumento, un booleano, le permite recuperar solo el equipamiento activo si es verdadero o todo el equipamiento si es falso (predeterminado))


y repasarlos uno por uno

php
foreach (yo mismo::porTipo('vdm', verdadero) como $vdm) {
}


Voila maintenant on recherche la commande « refresh » de l'équipement (eqLogic)

php
$cmd = $vdm->getCmd(null, 'refresh')


Si no existe, continuamos el bucle (foreach), en caso contrario lo ejecutamos

php
 (!es_objeto($cmd)) {
  continue
}
$cmd->execCmd()


Lo que en última instancia da

php
función estática pública cronHourly () {
  foreach (yo mismo::byType('vdm', true) como $vdm) { //recorre todos los dispositivos activos del complemento vdm
    $cmd = $vdm->getCmd(null, 'refresh') retourne la commande "refresh" si elle existe
     (!is_object($cmd)) { //Si el comando no existe
    continuar; //continuar el bucle
  }
  $cmd->execCmd() la commande existe on la lance
}
}


Pour tester, dans jeedom, allez dans configurationmoteur de tâches et lancer le cron de class « plugin » fonction « cronHourly »
La información se está actualizando.

Esta bien pero no me conviene. A la création de l'équipement, la commande « story » ne se met pas à jour.

Así que mejoramos el código.

Para crear pedidos utilizamos el método postSave(). Utilizaremos el método postUpdate() para actualizar la información.

La forma más fácil ya que solo hay un comando y se crea en postSave

php
Actualización posterior a la función pública() {
  $cmd = $this->getCmd(null, 'refresh') On recherche la commande refresh de l'équipement
  if (is_object($cmd)) { //existe y lanzamos el comando
    $cmd->execCmd()
  }
}


Tienes que probarlo, funciona?

Pero aquí hay una alternativa que puede resultar más útil en casos más complejos

En la función postUpdate(), lanzamos la función cronHourly() con el ID del dispositivo

php
Actualización posterior a la función pública() {
  self::cronHourly($this->getId()); //iniciar la función cronHourly con el id eqLogic
}


Pero en este caso cambiamos la función cronHourly()

php
función estática pública cronHourly($_eqLogic_id = null) {
  if ($_eqLogic_id == null) { //La función no tiene argumentos por lo que buscamos todos los equipos del plugin
    $eqLogics = self::byType('vdm', true)
    } )
      $eqLogics = array(self::byId($_eqLogic_id))
    }

    ) {
      $cmd = $vdm->getCmd(null, 'refresh') retourne la commande "refresh si elle existe
       (!is_object($cmd)) { //Si el comando no existe
      continuar; //continuar el bucle
    }
    $cmd->execCmd() la commande existe on la lance
  }
}


.

 ==> [](https:doc.jeedom.comdevphpdoc4.1)

 ==> [](https:github.comjeedomcore)

 .

.

 .

# 

.

. .

La commande qui apparaît est la commande «story» de  info, sous- string.

.  :D



Donc on va changer le style en affectant un template à la commande « story»

.

 ==> [](https:github.comjeedomcoretreealphacoretemplatedashboard)

.) .)

J'applique le template « cmd.info.string.tile.html » à ma commande.

.php , fonction postSave() et j'ajoute le template « tile » pour la commande « story » en appliquant la méthode setTemplate()

php
$información = $this->getCmd(null, 'story')
 (!)) {
  $información = new vdmCmd()
  $info->setName(__('Histoire', __FILE__))
}
$info->setLogicalId('story')
$info->setEqLogic_id($this->getId())
$info->setType('info')
$info->setTemplate('dashboard','tile')template pour le dashboard
$info->setSubType('string')
$info->save()


.

. .  défaut la largeur du widget de l'équipement(eqLogic) et la hauteur sont à « auto ».

 ..



php
$this->setDisplay("width","800px")


 !! . .  ? 

()

php
() {
  $this->setDisplay("width","800px")
}


.

# . 

> ****
>
> .

 : . ..

php
$plugin = plugin::byId('vdm')  appelle la classe plugin du core


.

: . :

php
$this->setConfiguration("type","mon_type")  si on veut définir un paramètre  de valeur mon_type. Comme on a défini la largeur du widget via la méthode setDisplay()


. :D

Cherchez

html
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="city" placeholder="param1">




html
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option">  de laisser la classe eqLogicAttr


).

Dans le champs «Paramètre» d'un équipement, tapez «aléatoire» et sauvegardez.

.

![image](imagestutorial_parametre1.png)

? . C'est pourquoi il ne faut surtout pas toucher à cette ligne de code comme indiqué dans le premier menu « test ». 

php
<?php include_file('core', 'plugin.template', 'js')?> Chargement du fichier corejsplugin.template.js (en partant de la racine du site)


.

html
<input type="text" class="eqLogicAttr form-control" data-l1key="id" style="display:none" >  retourne l'id(unique) de l'eqLogic(équipement) que l'on va pouvoir récupérer via $this->getId() 


html
{% raw %}<input type="text" class="eqLogicAttr form-control" data-l1key="name" placeholder="{{ de l'équipement}}"> retourne le nom de l'eqLogic(équipement) que l'on va pouvoir récupérer via $this->getName(){% endraw %}


Etc…

. 

html
{% raw %}<label class="col-sm-3 control-label">{{Paramètre}}<label>{% endraw %}


Par

html
{% raw %}<label class="col-sm-3 control-label">{{Type de vdm}}<label>{% endraw %}


 : .

.

# 

)

On pourrait le laisser taper dans l'input « Type de  » : 



html
{% raw %}
<div class="form-group">
  <label class="col-sm-3 control-label">{{Type de vdm}}<label>
  <div class="col-sm-3">
    <input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option">
  <div>
<div>
{% endraw %}




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



Cherchez

php
$url = "http:www.viedemerde.fraleatoire"




php
$ = $this->getConfiguration("type", "aleatoire") si le paramètre est vide ou n'existe pas, on prends le  aleatoire
$url = "http:www.viedemerde.fr{$type}"


.
