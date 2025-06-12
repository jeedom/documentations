# 

> ****
>
> .  [aquí](https://forum.jeedom.com/viewtopic.php?f=27&t=37630#p621495)

. . .()

 [](https://doc.jeedom.com/es_ES/dev/)

# 

)

Nombre : 
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

```

```

.


Renommez le dossier « plugin-template-master » en «  » (l'id) du plugin.

..

```json
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
```

.

 *(vdm)*, .

 : .

. 



- .

- ...

Remplacez

```php

```

par

```php

```

------------------------

```php

```

par

```php

```

- .
- ..

 :

```php
$plugin = plugin::byId('template');
```

Par

```php
$plugin = plugin::byId('vdm');
```

------------------------

```html
{% raw %}<legend><i class="fas fa-table"></i> {{Mes templates}}</legend>{% endraw %}
```

Par

```html
{% raw %}<legend><i class="fas fa-table"></i> {{Mes équipements}}</legend>{% endraw %}
```

------------------------

```php
<?php include_file('desktop', 'template', 'js', 'template');?>
```

Par

```php
<?php include_file('desktop', 'vdm', 'js', 'vdm');?>
```

 , **** ``<?php include_file('core', 'plugin.template', 'js');?>``.

- .

- .

- .php y renombra las funciones de la siguiente manera

```php
función vdm_install() {
}

función vdm_update() {
}

función vdm_remove() {
}
```

Aquí está el complemento listo, pero aún falta la personalización y el ícono para actualizar : [Documentación para desarrolladores: icono del complemento](https://doc.jeedom.com/es_ES/dev/Icone_de_plugin)

Agregue el ícono a la carpeta plugin_info con el nombre vdm_icon.png

en mi caso

![image](images/tutorial_vdm_icon.png)

Ahora podemos copiar la carpeta vdm en la carpeta del complemento Jeedom e ir a la administración de complementos. Encontramos nuevamente el plugin.

![image](images/tutorial_vdm_plugin.png)

Lo activamos y luego plugins/Monitoreo/Crappy Life

Aquí está la base lista. Deberías tener el plugin activo pero por el momento no hace nada.

# Las órdenes

El propósito del complemento será recuperar un vdm aleatorio y mostrarlo en el panel.

Por lo tanto, necesita crear un comando de tipo información para almacenar esta información. Elle sera de sous-amable « string » car c'est une chaîne de caractère.

Para el ejemplo agregaremos un comando que refresque la información. Entonces será un comando de tipo acción y subtipo otro

-Créez un équipement « vdm1 » en cliquant sur le +. Activarlo y hacerlo visible. Elige un elemento y el equipo debería aparecer en el tablero (dependiendo del elemento)).

En este momento no aparecen pedidos en la pestaña de pedidos ni en el widget.

Abra el archivo core/class/vdm.class.php y busque la función postSave() (Lea la documentación del complemento de plantilla si aún no lo ha hecho))

Creamos los 2 pedidos

```php
puesto de función públicaGuardar() {
  $información = $this->getCmd(null, 'story');
  si (!es_objeto($información)) {
    $información = new vdmCmd();
    $info->setName(__('Histoire', __FILE__));
  }
  $info->setLogicalId('story');
  $info->setEqLogic_id($this->getId());
  $info->setType('info');
  $info->setSubType('string');
  $info->save();

  $refresh = $this->getCmd(null, 'refresh');
  si (!es_objeto($actualizar)) {
    $refresh = new vdmCmd();
    $refresh->setName(__('Rafraichir', __FILE__));
  }
  $refresh->setEqLogic_id($this->getId());
  $refresh->setLogicalId('refresh');
  $refresh->setType('action');
  $refresh->setSubType('other');
  $refresh->save();
}
```

- Créez un autre équipement « vdm2 » en cliquant sur le +. En la pestaña de comandos, aparecieron los comandos. Activarlo y hacerlo visible. Elija un objeto principal y vea cómo se ve en el panel.

- Enregistrez le premier équipement « vdm1 » pour créer les commandes. Vea también la representación en el widget.

En la pestaña de pedidos deberías ver.

![image](images/tutorial_vdm_cmd1.png)

Abra el escritorio/php/vdm.php para encontrar el código html de esta tabla.

```html
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
```

En el momento de la visualización, es el script de escritorio/js/vdm.js que se llama y lanza la función addCmdToTable.

```html
{% raw %}
/* Función que permite la visualización de comandos en el equipo */
función addCmdToTable(_cmd) {
  si (!isset(_cmd)) {
    var _cmd = { configuración: {} };
  }
  si (!isset(_cmd.configuración)) {
    _cmd.configuration = {};
  }
  var tr = '.id) + '">';
  tr += ':60px;">';
  tr += '<span class="cmdAttr" data-l1key="id"></span> ';
  tr += '</td> ';
  tr += ':300px;ancho:350px;">';
  tr += '<div class="row"> ';
  tr += '<div class="col-xs-7"> ';
  tr += '<input class="cmdAttr form-control input-sm" data-l1key="name" placeholder="{{Nom de la commande}}">';
  tr += ' : ninguno;margen superior : 5px;" title="{{Información relacionada con el pedido}}">';
  tr += '<option value=""> {{Ninguno}}</option> ';
  tr += '</select> ';
  tr += '</div> ';
  tr += '<div class="col-xs-5"> ';
  tr += ' <a class="cmdAction btn btn-default btn-sm" data-l1key="chooseIcon"><i class="fas fa-flag"></i>{{Icono}}</a> ';
  tr += ' : 10px;">';
  tr += '</div> ';
  tr += '</div> ';
  tr += '</td> ';
  tr += '<td> ';
  tr += '.tipo) + '">' + jeedom.cmd.tipoDisponible() + ' ';
  tr += '.subTipo) + '"> ';
  tr += '</td> ';
  tr += ':150px;ancho:350px;">';
  tr += '.}}" título="{{Mín.}}" estilo="ancho:30%;display:bloque en línea;"/> ';
  tr += '.}}" título="{{Máx.}}" estilo="ancho:30%;display:bloque en línea;"/> ';
  tr += ':30%;display:bloque en línea;"/>';
  tr += '</td> ';
  tr += ':80px;ancho:350px;">';
  tr += ' <label class="checkbox-inline"><input type="checkbox" class="cmdAttr" data-l1key="isVisible" checked/>{{Mostrar}}</label> ';
  tr += ' <label class="checkbox-inline"><input type="checkbox" class="cmdAttr" data-l1key="isHistorized" checked/>{{Historizar}}</label> ';
  tr += ' <label class="checkbox-inline"><input type="checkbox" class="cmdAttr" data-l1key="display" data-l2key="invertBinary"/>{{Invertir}}</label> ';
  tr += '</td> ';
  tr += ':80px;ancho:200px;">';
  si (es_numérico(_cmd.id)) {
    tr += '<a class="btn btn-default btn-xs cmdAction" data-action="configure"><i class="fas fa-cogs"></i></a> ';
    tr += ' <a class="btn btn-default btn-xs cmdAction" data-action="test"><i class="fas fa-rss"></i>Prueba</a> ';
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
```

.

.

# 

.

```php
$url = "http://www.viedemerde.fr/aleatoire";
$data = file_get_contents($url);
@$dom = new DOMDocument();

$dom->loadHTML('<?xml encoding="UTF-8">' .$data);

$xpath = new DOMXPath($dom);
$divs = $xpath->query('//article[@class="art-panel col-xs-12"]//div[@class="panel-content"]//p//a');

```

Abra el archivo core/class/vdm.class.

```php
() {
  $url = "http://www.viedemerde.fr/aleatoire";
  $data = file_get_contents($url);
  @$dom = new DOMDocument();
  
  $dom->loadHTML($data);
  
  $xpath = new DOMXPath($dom);
  $divs = $xpath->query('//article[@class="art-panel col-xs-12"]//div[@class="panel-content"]//p//a');
  
}
```

).
.

```php
()) {
}
```

C'est aquí qu'on va définir ce qu'il va se passer quand on actionne la commande « Rafraîchir ». )

On vérifie le logical de la commande lancée et si « refresh » on lance les actions

```php
()) {
  ':  .
  
  break;
}
```

(). .

```php
$eqlogic = $this->getEqLogic(); //Récupération de l'eqlogic
$información = $eqlogic->randomVdm() ; //Lance la fonction et stocke le résultat dans la variable $info
```

On met à jour la commande « story » avec la variable $info. 

```php
$eqlogic->checkAndUpdateCmd('story', $info);
```



```php
()) {
  $eqlogic = $this->getEqLogic(); //récupère l'éqlogic de la commande $this
  
    ':  .
    $información = $eqlogic->randomVdm(); //On lance la fonction randomVdm() pour récupérer une  et on la stocke dans la variable $info
    $eqlogic->checkAndUpdateCmd('story', $info); //on met à jour la commande avec le Logical "story"  de l'eqlogic
    break;
  }
}
```

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

```php
/*
* 
() {
}
*/
```



```php
() {
}
```



,

```php
self::)
```



```php
::) {
}
```

Voila maintenant on recherche la commande « refresh » de l'équipement (eqLogic)

```php
$cmd = $vdm->getCmd(null, 'refresh');
```



```php
si (!)) {
  continue;
}
$cmd->execCmd();
```



```php
 () {
  ::
    $cmd = $vdm->getCmd(null, 'refresh'); //retourne la commande "refresh" si elle existe
    si (!
    
  }
  $cmd->execCmd(); //la commande existe on la lance
}
}
```

Pour tester, dans jeedom, allez dans configuration/moteur de tâches et lancer le  de class « plugin » fonction «  »
.

. A la création de l'équipement, la commande « story » ne se met pas à jour.

.

(). .



```php
Actualización posterior a la función pública() {
  $cmd = $this->getCmd(null, 'refresh'); //On recherche la commande refresh de l'équipement
  
    $cmd->execCmd();
  }
}
```

?





```php
Actualización posterior a la función pública() {
  self::
}
```

()

```php
) {
  
    $eqLogics = self::byType('vdm', true);
    } )
      $eqLogics = array(self::byId($_eqLogic_id));
    }

    ) {
      $cmd = $vdm->getCmd(null, 'refresh'); //retourne la commande "refresh si elle existe
      si (!
      
    }
    $cmd->execCmd(); //la commande existe on la lance
  }
}
```

.

 ==> [aquí](https://doc.jeedom.com/dev/phpdoc/4.1/)

 ==> [](https://github.com/jeedom/core)

 .

.

 .

# 

.

. .

La commande qui apparaît est la commande «story» de amable info, sous-amable string.

.  :D



Donc on va changer le style en affectant un template à la commande « story»

.

 ==> [](https://github.com/jeedom/core/tree/alpha/core/template/dashboard)

.) .)

J'applique le template « cmd.info.string.tile.html » à ma commande.

.php , fonction postSave() et j'ajoute le template « tile » pour la commande « story » en appliquant la méthode setTemplate()

```php
$información = $this->getCmd(null, 'story');
si (!es_objeto($información)) {
  $información = new vdmCmd();
  $info->setName(__('Histoire', __FILE__));
}
$info->setLogicalId('story');
$info->setEqLogic_id($this->getId());
$info->setType('info');
$info->setTemplate('dashboard','tile');//template pour le dashboard
$info->setSubType('string');
$info->save();
```

.

. .  défaut la largeur du widget de l'équipement(eqLogic) et la hauteur sont à « auto ».

 ..



```php
$this->setDisplay("width","800px");
```

 !! . .  ? 

()

```php
() {
  $this->setDisplay("width","800px");
}
```

.

# . 

> ****
>
> .

 : . ..

```php
$plugin = plugin::byId('vdm'); // appelle la classe plugin du core
```

.

: . :

```php
$this->setConfiguration("type","mon_type"); // si on veut définir un paramètre amable de valeur mon_type. Comme on a défini la largeur du widget via la méthode setDisplay()
```

. :D

Cherchez

```html
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="city" placeholder="param1"/>
```



```html
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/> // de laisser la classe eqLogicAttr
```

).

Dans le champs «Paramètre» d'un équipement, tapez «aléatoire» et sauvegardez.

.

![image](images/tutorial_parametre1.png)

? . C'est pourquoi il ne faut surtout pas toucher à cette ligne de code comme indiqué dans le premier menu « test ». 

```php
<?php include_file('core', 'plugin.template', 'js');?> //Chargement du fichier core/js/plugin.template.js (en partant de la racine du site)
```

.

```html
<input type="text" class="eqLogicAttr form-control" data-l1key="id" style="display:none;" /> // retourne l'id(unique) de l'eqLogic(équipement) que l'on va pouvoir récupérer via $this->getId() ;
```

```html
{% raw %}<input type="text" class="eqLogicAttr form-control" data-l1key="name" placeholder="{{Nombre de l'équipement}}"/>// retourne le nom de l'eqLogic(équipement) que l'on va pouvoir récupérer via $this->getName();{% endraw %}
```

Etc…

. 

```html
{% raw %}<label class="col-sm-3 control-label">{{Paramètre}}</label>{% endraw %}
```

Par

```html
{% raw %}<label class="col-sm-3 control-label">{{Type de vdm}}</label>{% endraw %}
```

 : .

.

# 

)

On pourrait le laisser taper dans l'input « Type de  » : 



```html
{% raw %}
<div class="form-group">
  <label class="col-sm-3 control-label">{{Type de vdm}}</label>
  <div class="col-sm-3">
    <input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/>
  </div>
</div>
{% endraw %}
```



```html
{% raw %}
<div class="form-group">
  <label class="col-sm-3 control-label" >{{ Type de  }}</label>
  <div class="col-sm-3">
    <select class="form-control eqLogicAttr" data-l1key="configuration" data-l2key="amable ">
      <option value="aleatoire">{{Aleatoire}}</option>
      <option value="epicees">{{Coquin}}</option>
      <option value="tops">{{Best}}</option>
    </select>
  </div>
</div>
{% endraw %}
```

Ici le paramètre «type» prendra la valeur du select choisi soit aleatoire ou epicees ou tops.



Cherchez

```php
$url = "http://www.viedemerde.fr/aleatoire";
```



```php
$amable = $this->getConfiguration("type", "aleatoire"); //si le paramètre est vide ou n'existe pas, on prends le amable aleatoire
$url = "http://www.viedemerde.fr/{$type}";
```

.
