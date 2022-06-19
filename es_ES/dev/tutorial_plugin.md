# Para empezar

> **IMPORTANTE**
>
> Este tutorial fue escrito por ZygOm4t1k a quien agradecemos calurosamente. Puedes encontrar el original [aquí](https://forum.jeedom.com/viewtopic.php?f=27&t=37630#p621495)

Aquí hay un pequeño TP para explicar cómo crear un complemento. Para el ejemplo, crearemos un complemento que devuelva una oración del sitio viedemerde.fr .(El plugin será escalable)

De ninguna manera reemplaza la [documentación oficial](https://doc.jeedom.com/es_ES/dev/)

# Crear la base del complemento

Para comenzar, debe determinar un nombre y una identificación (que no debe existir)

Apellido : Vida de mierda
IDENTIFICACIÓN : vdm

Descargue el complemento de plantilla para tener la [base](https://github.com/jeedom/plugin-template/archive/master.zip)

Descomprimir el archivo. Vous obtiendrez un dossier « plugin-template-master » contenant des dossiers 3rparty, core, desktop…

Vamos.

Renommez le dossier « plugin-template-master » en « vdm » (l'id) du plugin.

1/ Abra el archivo plugin_info/info.json y editar el.

```json
{
  "id" : "vdm",
  "name" : "Vida de mierda",
  "description" : "Complemento para recuperar los últimos vdms",
  "licence" : "AGPL",
  "author" : "Zyg0m4t1k",
  "require" : "3.3.39",
  "category" : "monitoring",
  "changelog" : "",
  "documentation" : "",
  "language" : "",
  "compatibility" : ""
}
```

Copia y pega el código de arriba.

Cambié la identificación *(vdm)*, el nombre, añadido una descripción, el autor y la categoría.

requerir : versión mínima de jeedom para tener acceso al complemento en el mercado.

Changelog, documentación, idioma, compatibilidad nula por el momento. Volveré a eso más tarde

2/ Cambiaremos el nombre de los archivos necesarios para que Jeedom reconozca el complemento

- Cambie el nombre del archivo core/ajax/template.ajax.php a vdm.ajax.php

- Cambiar el nombre del archivo core/class/template.class.php a vdm.clase.php y ábralo para editarlo.

Remplacez

```php
plantilla de clase extiende eqLogic
```

par

```php
clase vdm extiende eqLogic
```

------------------------

```php
clase templateCmd extiende cmd
```

par

```php
clase vdmCmd extiende cmd
```

- Cambiar el nombre del archivo core/php/template.inc.php en core/php/vdm.inc.php
- Cambie el nombre del archivo escritorio/php/plantilla.php en el escritorio /php/vdm.php y abrirlo

Reemplazar :

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

Y nada más , **no cambies la línea** ``<?php include_file('core', 'plugin.template', 'js');?>``.

- Cambie el nombre del archivo escritorio/modal/modal.template.php al escritorio/modal/modal.vdm.php

- Cambie el nombre del archivo desktop/js/template.js en escritorio/js/vdm.js

- Abra el archivo plugin_info/install.php y cambie el nombre de las funciones de la siguiente manera

```php
función vdm_install() {
}

función vdm_update() {
}

función vdm_remove() {
}
```

Aquí está el complemento listo, pero aún queda la personalización y el ícono para actualizar : [Documentación del desarrollador: icono del complemento](https://doc.jeedom.com/es_ES/dev/Icone_de_plugin)

Agregue el ícono en la carpeta plugin_info como vdm_icon.png

en mi caso

![image](images/tutorial_vdm_icon.png)

Ahora podemos copiar la carpeta vdm en la carpeta de complementos de Jeedom e ir a la administración de complementos. Encontramos el complemento.

![image](images/tutorial_vdm_plugin.png)

Lo activamos y luego plugins/Monitoring/Vie de Merde

Ahora la base está lista. Deberías tener activo el plugin pero de momento no hace nada.

# Las órdenes

El propósito del complemento será recuperar un vdm aleatorio y mostrarlo en el tablero.

Por lo tanto, es necesario crear un comando de tipo info para almacenar esta información. Elle sera de sous-tipo « string » car c'est une chaîne de caractère.

Para el ejemplo agregaremos un comando que refresca la información. Será por tanto un mando de tipo acción y subtipo otro

-Créez un équipement « vdm1 » en cliquant sur le +. Actívala y hazla visible. Elija un objeto y el equipo debería aparecer en el tablero (dependiendo del objeto).

En este momento, no hay comandos que aparezcan en la pestaña de comandos, ni en el widget.

Abra el archivo core/class/vdm.class.php y busque la función postSave () (Lea el documento del complemento de plantilla si aún no lo ha hecho)

Creamos los 2 comandos

```php
publicación de función públicaGuardar() {
  $información = $this->getCmd(null, 'story');
  si (!es_objeto($info)) {
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

- Créez un autre équipement « vdm2 » en cliquant sur le +. En la pestaña de comandos, aparecieron los comandos. Actívala y hazla visible. Elija un objeto principal y vea cómo se ve en el tablero.

- Enregistrez le premier équipement « vdm1 » pour créer les commandes. Ver renderizar en el widget también.

En la pestaña de comandos, deberías ver.

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

En el momento de la visualización, es el script desktop/js/vdm.js que se llama y lanza la función addCmdToTable.

```html
{% raw %}
/* Función que permite la visualización de comandos en el equipo */
función agregarCmdToTable(_cmd) {
  si (!isset(_cmd)) {
    var _cmd = {configuración: {} };
  }
  si (!isset(_cmd.configuration)) {
    _cmd.configuración = {};
  }
  <html>var tr = '.identificación) + '">';
  <html>tr += ':60px;">';
  tr += '<span class="cmdAttr" data-l1key="id"></span> ';
  tr += '</td> ';
  <html>tr += ':300px;ancho:350px;">';
  tr += '<div class="row"> ';
  tr += '<div class="col-xs-7"> ';
  tr += '<input class="cmdAttr form-control input-sm" data-l1key="name" placeholder="{{Nom de la commande}}">';
  <html>tr += ' : ninguno; margen superior : 5px;" title="{{Información relacionada con el comando}}">';
  tr += '<option value=""> {{Ninguna}}</option> ';
  tr += '</select> ';
  tr += '</div> ';
  tr += '<div class="col-xs-5"> ';
  tr += ' <a class="cmdAction btn btn-default btn-sm" data-l1key="chooseIcon"><i class="fas fa-flag"></i>{{Icono}}</a> ';
  <html>tr += ' : 10px;"> ';
  tr += '</div> ';
  tr += '</div> ';
  tr += '</td> ';
  tr += '<td> ';
  <html>tr += '.tipo) + '">' + jeedom.cmd.tipoDisponible() + ' ';
  <html>tr += '.subTipo) + '"> ';
  tr += '</td> ';
  <html>tr += ':150px;ancho:350px;">';
  <html>tr += '.}}" title="{{Mín.}}" estilo = "ancho:30%;display:bloque en línea;"/> ';
  <html>tr += '.}}" title="{{Máx.}}" estilo = "ancho:30%;display:bloque en línea;"/> ';
  <html>tr += ':30%;display:bloque en línea;"/>';
  tr += '</td> ';
  <html>tr += ':80px;ancho:350px;">';
  tr += ' <label class="checkbox-inline"><input type="checkbox" class="cmdAttr" data-l1key="isVisible" checked/>{{Mostrar}}</label> ';
  tr += ' <label class="checkbox-inline"><input type="checkbox" class="cmdAttr" data-l1key="isHistorized" checked/>{{Registro}}</label> ';
  tr += ' <label class="checkbox-inline"><input type="checkbox" class="cmdAttr" data-l1key="display" data-l2key="invertBinary"/>{{Reversa}}</label> ';
  tr += '</td> ';
  <html>tr += ':80px;ancho:200px;">';
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
    error: función (error) {
      $('#div_alert').showAlert({ message: error.message, level: 'danger' });
    },
    success: función (resultado) {
      tr.find('.cmdAttr[data-l1key=value]').append(resultado);
      tr.setValues(_cmd, '.cmdAttr');
      jeedom.cmd.changeType(tr, init(_cmd.subType));
    }
  });
}
{% endraw %}
```

Esto sucede automáticamente.

Aquí queda recuperar un vdm aleatorio y usar los comandos.

# Recuperación de información

Para obtener un vdm aleatorio.

```php
$url = "http://www.viedemerde.fr/aleatoire";
$data = file_get_contents($url);
@$dom = new DOMDocument();
libxml_use_internal_errors(falso);
$dom->loadHTML('<?xml encoding="UTF-8">' .$data);
libxml_use_internal_errors(verdadero);
$xpath = new DOMXPath($dom);
$divs = $xpath->query('//article[@class="art-panel col-xs-12"]//div[@class="panel-content"]//p//a');
devuelve $divs[0]->nodeValue;
```

Abra el archivo core/class/vdm.class.php y para la clase vdm que hereda los métodos egLogic, creo una función randomVdm

```php
función pública randomVdm() {
  $url = "http://www.viedemerde.fr/aleatoire";
  $data = file_get_contents($url);
  @$dom = new DOMDocument();
  libxml_use_internal_errors(verdadero);
  $dom->loadHTML($data);
  libxml_use_internal_errors(falso);
  $xpath = new DOMXPath($dom);
  $divs = $xpath->query('//article[@class="art-panel col-xs-12"]//div[@class="panel-content"]//p//a');
  devuelve $divs[0]->nodeValue;
}
```

Ahora actualizaremos el comando info (historia) con esta información ejecutando el comando acción (actualizar)).
Todavía en core/class/vdm.class.php para la clase vdmCmd usaremos el método de ejecución

```php
función pública ejecutar ($_opciones = matriz()) {
}
```

C'est aquí qu'on va définir ce qu'il va se passer quand on actionne la commande « Rafraîchir ». La clase vdmCmd heredó todos los métodos de la clase cmd (Core jeedom)

On vérifie le logicalIDENTIFICACIÓN de la commande lancée et si « refresh » on lance les actions

```php
cambiar ($this->getLogicalId()) {
  cuadro 'actualizar': //LogicalId del comando de actualización que creamos en el método Postsave de la clase vdm .
  // código para actualizar mi comando
  break;
}
```

Ahora queda ejecutar la función randomVdm(). Para ello recuperamos el eqLogic (equipo) del mando y ejecutamos la función.

```php
$eqlogic = $this->getEqLogic(); //Récupération de l'eqlogic
$información = $eqlogic->randomVdm() ; //Lance la fonction et stocke le résultat dans la variable $info
```

On met à jour la commande « story » avec la variable $info. Usaremos el método checkAndUpdateCmd de la clase eqlogic

```php
$eqlogic->checkAndUpdateCmd('story', $info);
```

Lo que finalmente da

```php
función pública ejecutar ($_opciones = matriz()) {
  $eqlogic = $this->getEqLogic(); //récupère l'éqlogic de la commande $this
  switch ($this->getLogicalId()) { //verifica el ID lógico del comando
    cuadro 'actualizar': // LogicalId del comando de actualización que creamos en el método Postsave de la clase vdm .
    $información = $eqlogic->randomVdm(); //On lance la fonction randomVdm() pour récupérer une vdm et on la stocke dans la variable $info
    $eqlogic->checkAndUpdateCmd('story', $info); //on met à jour la commande avec le LogicalIDENTIFICACIÓN "story"  de l'eqlogic
    break;
  }
}
```

Ahora vaya a un equipo creado y ejecute el comando Actualizar. Puis la commande « Histoire » qui doit être à jour.

En el Dashboard, aparece la información. Haga clic en el icono de actualización para cambiar la información.

Luego definiremos el tamaño del widget y lo personalizaremos un poco y luego automatizaremos la actualización.

# Actualizar información (cron)

El complemento es funcional pero por ahora no hace mucho. Si vous cliquez sur la commande « refresh » , la commande « story » se met à jour mais sinon rien.

Tenga en cuenta que para el comando lo nombro por logicalId. Y es importante. Tener un ID lógico único por dispositivo (eqLogic) simplifica las cosas.

Ahora veremos cómo actualizar el comando usando las funciones nativas del núcleo : Los crones

Hay varios :

- cron : actualizar cada minuto
- cron5 : actualizar cada 5 minutos
- cron15 : actualizar cada 15 minutos
- cron30 : actualizar cada 30 minutos
- cron por hora : cada hora
- cronDaily : 1/jour

Dado el complemento, realizaremos una actualización cada hora (vamos a volvernos locos). Por lo tanto, usaremos la función cronHourly().

Por lo tanto, abriremos el archivo vdm.class.

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

Lo que finalmente da

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

Pour tester, dans jeedom, allez dans configuration/moteur de tâches et lancer le cron de class « plugin » fonction « cron por hora »
.

. A la création de l'équipement, la commande « story » ne se met pas à jour.

.

(). .



```php
publicación de la función públicaActualización() {
  $cmd = $this->getCmd(null, 'refresh'); //On recherche la commande refresh de l'équipement
  
    $cmd->execCmd();
  }
}
```

?





```php
publicación de la función públicaActualización() {
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

La commande qui apparaît est la commande «story» de tipo info, sous-tipo string.

.  :D



Donc on va changer le style en affectant un template à la commande « story»

.

 ==> [](https://github.com/jeedom/core/tree/alpha/core/template/dashboard)

.) .)

J'applique le template « cmd.info.string.tile.html » à ma commande.

.php , fonction postSave() et j'ajoute le template « tile » pour la commande « story » en appliquant la méthode setTemplate()

```php
$información = $this->getCmd(null, 'story');
si (!es_objeto($info)) {
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

. . Por défaut la largeur du widget de l'équipement(eqLogic) et la hauteur sont à « auto ».

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

> **IMPORTANTE**
>
> .

 : . ..

```php
$plugin = plugin::byId('vdm'); // appelle la classe plugin du core
```

.

: . :

```php
$this->setConfiguration("type","mon_type"); // si on veut définir un paramètre tipo de valeur mon_type. Comme on a défini la largeur du widget via la méthode setDisplay()
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
{% raw %}<input type="text" class="eqLogicAttr form-control" data-l1key="name" placeholder="{{Apellido de l'équipement}}"/>// retourne le nom de l'eqLogic(équipement) que l'on va pouvoir récupérer via $this->getName();{% endraw %}
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

On pourrait le laisser taper dans l'input « Type de vdm » : 



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
  <label class="col-sm-3 control-label" >{{ Type de vdm }}</label>
  <div class="col-sm-3">
    <select class="form-control eqLogicAttr" data-l1key="configuration" data-l2key="tipo ">
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
$tipo = $this->getConfiguration("type", "aleatoire"); //si le paramètre est vide ou n'existe pas, on prends le tipo aleatoire
$url = "http://www.viedemerde.fr/{$type}";
```

.
