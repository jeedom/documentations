# Para empezar

> **Importante**
>
> Este tutorial fue escrito por ZygOm4t1k a quien agradecemos sinceramente. Puedes encontrar el original [aquí](https://forum.jeedom.com/viewtopic.php?f=27&t=37630#p621495)

Aquí hay un breve tutorial para explicar cómo crear un complemento. Para el ejemplo crearemos un complemento que devuelve una oración del sitio viedemerde.P. .(El complemento será escalable)

No reemplaza al [documentación oficial](https://doc.jeedom.com/es_ES/dev/)

# Crear la base del complemento

Para comenzar, debe determinar un nombre y una identificación (que no debe existir))

Nombre : Vida de caca
Identificación : vdm

Descargue el complemento de plantilla para tener el [base](https://github.com/jeedom/plugin-template/archive/master.zip)

Descomprime el archivo. Vous obtiendrez un dossier « plugin-template-master » contenant des dossiers 3rparty, core, desktop…

Vamos.

Renommez le dossier « plugin-template-master » en « vdm » (l'id) du plugin.

1 / Abra el archivo plugin_info / info.json y edita el.

`` ``json
{
  "id" : "vdm",
  "name" : "Vida de caca",
  "description" : "Complemento para recuperar el último vdm",
  "licence" : "AGPL",
  "author" : "Zyg0m4t1k",
  "require" : "3.3.39",
  "category" : "monitoring",
  "changelog" : "",
  "documentation" : "",
  "language" : "",
  "compatibility" : ""
}
`` ``

Copie y pegue el código de arriba.

Cambié la identificación *(vdm)*, nombre, descripción agregada, autor y categoría.

exigir : versión mínima de jeedom para tener acceso al complemento en el mercado.

Registro de cambios, documentación, idioma, compatibilidad nula por el momento. Volveré a esto más tarde

2 / Cambiaremos el nombre de los archivos necesarios para que Jeedom reconozca el complemento

- Cambie el nombre del archivo core / ajax / template.ajax.php a vdm.ajax.php

- Cambiar el nombre del archivo core / class / template.class.php a vdm.class.php y ábrelo para editarlo.

Remplacez

`` ``php
plantilla de clase extiende eqLogic
`` ``

par

`` ``php
class vdm extiende eqLogic
`` ``

------------------------

`` ``php
class templateCmd extiende cmd
`` ``

par

`` ``php
la clase vdmCmd extiende cmd
`` ``

- Cambie el nombre del archivo core / php / template.inc.php en core / php / vdm.inc.php
- Cambiar el nombre del archivo de escritorio / php / plantilla.php a escritorio / php / vdm.php y ábrelo

Reemplazar :

`` ``php
$plugin = plugin::byId('template');
`` ``

Par

`` ``php
$plugin = plugin::byId('vdm');
`` ``

------------------------

`` ``html
{% raw %}<legend><i class="fas fa-table"></i> {{Mes templates}}</legend>{% endraw %}
`` ``

Par

`` ``html
{% raw %}<legend><i class="fas fa-table"></i> {{Mes équipements}}</legend>{% endraw %}
`` ``

------------------------

`` ``php
<?php include_file('desktop', 'template', 'js', 'template');?>
`` ``

Par

`` ``php
<?php include_file('desktop', 'vdm', 'js', 'vdm');?>
`` ``

Y nada más , **no cambies la linea** ``<?php include_file('core', 'plugin.template', 'js');?>``.

- Cambiar el nombre del archivo desktop / modal / modal.template.php al escritorio / modal / modal.vdm.php

- Cambiar el nombre del archivo desktop / js / template.js al escritorio / js / vdm.js

- Abra el archivo plugin_info / install.php y cambie el nombre de las funciones de la siguiente manera

`` ``php
función vdm_install() {
}

función vdm_update() {
}

función vdm_remove() {
}
`` ``

Aquí el complemento está listo pero queda la personalización y el ícono para actualizar : [Documentación para desarrolladores: icono de complemento](https://doc.jeedom.com/es_ES/dev/Icone_de_plugin)

Agregue el icono en la carpeta plugin_info con el nombre vdm_icon.png

en mi caso

![image](images/tutorial_vdm_icon.png)

Ahora podemos copiar la carpeta vdm en la carpeta del complemento Jeedom e ir a la administración del complemento. Encontramos el complemento.

![image](images/tutorial_vdm_plugin.png)

Lo activamos y luego complementos / Monitoreo / Vie de Merde

Aquí la base está lista. Debería tener el complemento activo, pero por el momento no hace nada.

# Las órdenes

El objetivo del complemento será recuperar un vdm aleatorio y mostrarlo en el tablero.

Por tanto, es necesario crear un comando de tipo info para almacenar esta información. Elle sera de sous-Tipo « string » car c'est une chaîne de caractère.

Para el ejemplo, agregaremos un comando que actualiza la información. Por lo tanto, será un comando de tipo de acción y otro subtipo

-Créez un équipement « vdm1 » en cliquant sur le +. Actívala y hazla visible. Elija un elemento y el equipo debe aparecer en el tablero (según el elemento).

En este momento, no hay comandos que aparezcan en la pestaña de comandos, ni en el widget.

Abra el archivo core / class / vdm.class.php y busque la función postSave () (lea el documento del complemento de plantilla si aún no lo ha hecho)

Creamos los 2 pedidos

`` ``php
publicación de función pública() {
  $info = $this->getCmd(null, 'story');
  tejo (!is_object ($ info)) {
    $info = new vdmCmd();
    $info->setName(__('Histoire', __FILE__));
  }
  $info->setLogicalId('story');
  $info->setEqLogic_id($this->getId());
  $info->setType('info');
  $info->setSubType('string');
  $info->save();

  $refresh = $this->getCmd(null, 'refresh');
  tejo (!is_object ($ actualizar)) {
    $refresh = new vdmCmd();
    $refresh->setName(__('Rafraichir', __FILE__));
  }
  $refresh->setEqLogic_id($this->getId());
  $refresh->setLogicalId('refresh');
  $refresh->setType('action');
  $refresh->setSubType('other');
  $refresh->save();
}
`` ``

- Créez un autre équipement « vdm2 » en cliquant sur le +. En la pestaña de comandos, aparecieron los comandos. Actívala y hazla visible. Elija un objeto principal y vea cómo se ve en el tablero.

- Enregistrez le premier équipement « vdm1 » pour créer les commandes. Vea el renderizado en el widget también.

En la pestaña Pedidos, debería ver.

![image](images/tutorial_vdm_cmd1.png)

Abra el escritorio / php / vdm.php para encontrar el código html de esta tabla.

`` ``html
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
`` ``

En el momento de la visualización, es el script de escritorio / js / vdm.js que se llama y lanza la función addCmdToTable.

`` ``html
{% raw %}
/* Función que permite la visualización de comandos en el equipo */
función addCmdToTable (_cmd) {
  tejo (!isset (_cmd)) {
    var _cmd = {configuración: {} };
  }
  tejo (!isset (_cmd.configuration)) {
    _cmd.configuration = {};
  }
  <html>var tr = '.id) + '">';
  <html>tr + = ':60px; "> ';
  tr + = '<span class="cmdAttr" data-l1key="id"></span> ';
  tr + = '</td> ';
  <html>tr + = ':300px; ancho:350px; "> ';
  tr + = '<div class="row"> ';
  tr + = '<div class="col-xs-7"> ';
  tr + = '<input class="cmdAttr form-control input-sm" data-l1key="name" placeholder="{{Nom de la commande}}">';
  <html>tr + = ' : ninguno; margen superior : 5px; "title =" {{Información relacionada con el comando}} "> ';
  tr + = '<option value=""> {{Alguna}}</option> ';
  tr + = '</select> ';
  tr + = '</div> ';
  tr + = '<div class="col-xs-5"> ';
  tr + = ' <a class="cmdAction btn btn-default btn-sm" data-l1key="chooseIcon"><i class="fas fa-flag"></i>{{Icon}}</a> ';
  <html>tr + = ' : 10px; "> ';
  tr + = '</div> ';
  tr + = '</div> ';
  tr + = '</td> ';
  tr + = '<td> ';
  <html>tr + = '.tipo) + '">' + jeedom.cmd.availableType () + '';
  <html>tr + = '.subType) + '">';
  tr + = '</td> ';
  <html>tr + = ':150px; ancho:350px; "> ';
  <html>tr + = '.}}" title = "{{Min.}}" style = "ancho:30%;display:bloque en línea; "/> ';
  <html>tr + = '.}}" title = "{{Max.}}" style = "ancho:30%;display:bloque en línea; "/> ';
  <html>tr + = ':30%;display:bloque en línea; "/> ';
  tr + = '</td> ';
  <html>tr + = ':80px; ancho:350px; "> ';
  tr + = ' <label class="checkbox-inline"><input type="checkbox" class="cmdAttr" data-l1key="isVisible" checked/>{{Mostrar}}</label> ';
  tr + = ' <label class="checkbox-inline"><input type="checkbox" class="cmdAttr" data-l1key="isHistorized" checked/>{{Historizar}}</label> ';
  tr + = ' <label class="checkbox-inline"><input type="checkbox" class="cmdAttr" data-l1key="display" data-l2key="invertBinary"/>{{Invertir}}</label> ';
  tr + = '</td> ';
  <html>tr + = ':80px; ancho:200px; "> ';
  si (es_numeric (_cmd.id)) {
    tr + = '<a class="btn btn-default btn-xs cmdAction" data-action="configure"><i class="fas fa-cogs"></i></a> ';
    tr + = ' <a class="btn btn-default btn-xs cmdAction" data-action="test"><i class="fas fa-rss"></i>Prueba</a> ';
  }
  tr + = '<i class="fas fa-minus-circle pull-right cmdAction cursor" data-action="remove"></i></td> ';
  tr + = '</tr> ';
  $('#table_cmd tbody').append(tr);
  var tr = $ ('# table_cmd tbody tr'). last ();
  jeedom.eqLogic.builSelectCmd({
    id: $('.eqLogicAttr[data-l1key=id]').value(),
    filter: { type: 'info' },
    error: función (error) {
      $('#div_alert').showAlert({ message: error.message, level: 'danger' });
    },
    success: función (resultado) {
      tr.find ('. cmdAttr [data-l1key = value]'). append (resultado);
      tr.setValues (_cmd, '.cmdAttr');
      jeedom.cmd.changeType (tr, init (_cmd.subType));
    }
  });
}
{% endraw %}
`` ``

Sucede automaticamente.

Aquí queda recuperar un vdm aleatorio y usar los comandos.

# Recuperación de información

Para recuperar un vdm aleatoriamente.

`` ``php
$url = "http://www.viedemerde.fr/aleatoire";
$data = file_get_contents($url);
@$dom = new DOMDocument();
libxml_use_internal_errors (falso);
$dom->loadHTML('<?xml encoding="UTF-8">' .$data);
libxml_use_internal_errors (verdadero);
$xpath = new DOMXPath($dom);
$divs = $xpath->query('//article[@class="art-panel col-xs-12"]//div[@class="panel-content"]//p//a');
return $ divs [0] -> nodeValue;
`` ``

Abra el archivo core / class / vdm.class.php y para la clase vdm que hereda de los métodos egLogic, creo una función randomVdm

`` ``php
función pública randomVdm() {
  $url = "http://www.viedemerde.fr/aleatoire";
  $data = file_get_contents($url);
  @$dom = new DOMDocument();
  libxml_use_internal_errors (verdadero);
  $dom->loadHTML($data);
  libxml_use_internal_errors (falso);
  $xpath = new DOMXPath($dom);
  $divs = $xpath->query('//article[@class="art-panel col-xs-12"]//div[@class="panel-content"]//p//a');
  return $ divs [0] -> nodeValue;
}
`` ``

Ahora actualizaremos el comando info (historia) con esta información lanzando el comando de acción (actualizar).
Todavía en core / class / vdm.class.php para la clase vdmCmd usaremos el método de ejecución

`` ``php
función pública ejecutar ($ _ opciones = matriz()) {
}
`` ``

C'est aquí qu'on va définir ce qu'il va se passer quand on actionne la commande « Rafraîchir ». La clase vdmCmd heredó todos los métodos de la clase cmd (Core jeedom)

On vérifie le logicalIdentificación de la commande lancée et si « refresh » on lance les actions

`` ``php
cambiar ($ this-> getLogicalId()) {
  caso 'actualizar': // LogicalId del comando de actualización que creamos en el método Postsave de la clase vdm .
  // código para actualizar mi pedido
  break;
}
`` ``

Ahora queda ejecutar la función randomVdm(). Para ello recuperamos el eqLogic (el equipo) del control y ejecutamos la función.

`` ``php
$eqlogic = $this->getEqLogic(); //Récupération de l'eqlogic
$info = $eqlogic->randomVdm() ; //Lance la fonction et stocke le résultat dans la variable $info
`` ``

On met à jour la commande « story » avec la variable $info. Usaremos el método checkAndUpdateCmd de la clase eqlogic

`` ``php
$eqlogic->checkAndUpdateCmd('story', $info);
`` ``

Que finalmente da

`` ``php
función pública ejecutar ($ _ opciones = matriz()) {
  $eqlogic = $this->getEqLogic(); //récupère l'éqlogic de la commande $this
  switch ($ this-> getLogicalId ()) {// verifica el ID lógico del comando
    caso 'actualizar': // LogicalId del comando de actualización que creamos en el método Postsave de la clase vdm .
    $info = $eqlogic->randomVdm(); //On lance la fonction randomVdm() pour récupérer une vdm et on la stocke dans la variable $info
    $eqlogic->checkAndUpdateCmd('story', $info); //on met à jour la commande avec le LogicalIdentificación "story"  de l'eqlogic
    break;
  }
}
`` ``

Ahora vaya a un dispositivo creado y ejecute el comando Actualizar. Puis la commande « Histoire » qui doit être à jour.

En el Tablero, aparece la información. Haga clic en el icono de actualización para cambiar la información.

Luego definiremos el tamaño del widget y lo personalizaremos un poco y luego automatizaremos la actualización.

# Actualizar información (cron)

El complemento es funcional pero por el momento no hace mucho. Si vous cliquez sur la commande « refresh » , la commande « story » se met à jour mais sinon rien.

Tenga en cuenta que para el comando lo nombre por logicId. Y esto es importante. Tener un Identificador lógico único por dispositivo (eqLogic) simplifica las cosas.

Ahora veremos cómo actualizar el comando usando las funciones nativas del núcleo : Crons

Hay varios :

- cron : refresco cada minuto
- cron5 : refresco cada 5 minutos
- cron15 : refresco cada 15 minutos
- cron30 : refresco cada 30 minutos
- cronHourly : cada hora
- cronDaily : 1/jour

Dado el complemento, actualizaremos cada hora (seamos locos). Por lo tanto, usaremos la función cronHourly().

Por lo tanto, abriremos el archivo vdm.class.php y búsqueda

`` ``php
/*
* Función realizada automáticamente cada hora por Jeedom
función estática pública cronHourly() {
}
*/
`` ``

Descomentar el código

`` ``php
función estática pública cronHourly() {
}
`` ``

Nuestra función es operativa

Ahora tenemos que recuperar todo el equipo activo de nuestro plugin,

`` ``php
self::byType ('vdm', true) // matriz que contiene todos los dispositivos del complemento, el segundo argumento, un booleano, permite recuperar solo los dispositivos activos si es verdadero o todos los dispositivos si es falso (predeterminado)
`` ``

y búsquelos 1 por 1

`` ``php
foreach (yo::byType ('vdm', verdadero) como $ vdm) {
}
`` ``

Voila maintenant on recherche la commande « refresh » de l'équipement (eqLogic)

`` ``php
$cmd = $vdm->getCmd(null, 'refresh');
`` ``

Si no existe continuamos el bucle (foreach) de lo contrario lo ejecutamos

`` ``php
tejo (!is_object ($ cmd)) {
  continue;
}
$cmd->execCmd();
`` ``

Que finalmente da

`` ``php
función estática pública cronHourly () {
  foreach (yo::byType ('vdm', true) as $ vdm) {// buscar todos los dispositivos activos del complemento vdm
    $cmd = $vdm->getCmd(null, 'refresh'); //retourne la commande "refresh" si elle existe
    tejo (!is_object ($ cmd)) {// Si el comando no existe
    continúa; // continuar el ciclo
  }
  $cmd->execCmd(); //la commande existe on la lance
}
}
`` ``

Pour tester, dans jeedom, allez dans configuration/moteur de tâches et lancer le cron de class « plugin » fonction « cronHourly »
Actualizaciones de información.

Es bueno pero no me queda bien. A la création de l'équipement, la commande « story » ne se met pas à jour.

Por tanto, mejoramos el código.

Para la creación de los pedidos utilizamos el método postSave(). Usaremos el método postUpdate () para actualizar la información.

La forma más fácil ya que solo hay un comando y se crea en postSave

`` ``php
función pública postUpdate() {
  $cmd = $this->getCmd(null, 'refresh'); //On recherche la commande refresh de l'équipement
  if (is_object ($ cmd)) {// existe y ejecutamos el comando
    $cmd->execCmd();
  }
}
`` ``

Tienes que probar, funciona?

Pero aquí hay una alternativa que puede resultar más útil en casos más complejos

En la función postUpdate (), lanzamos la función cronHourly () con la identificación del equipo

`` ``php
función pública postUpdate() {
  self::cronHourly ($ esto-> getId ()); // inicia la función cronHourly con el id de eqLogic
}
`` ``

Pero en este caso cambiamos la función cronHourly()

`` ``php
función estática pública cronHourly ($ _ eqLogic_id = null) {
  if ($ _eqLogic_id == null) {// La función no tiene argumento por lo que buscamos todo el equipo del complemento
    $eqLogics = self::byType('vdm', true);
    } else {// La función tiene el ID de argumento (único) de un dispositivo (eqLogic)
      $eqLogics = array(self::byId($_eqLogic_id));
    }

    foreach ($ eqLogics como $ vdm) {
      $cmd = $vdm->getCmd(null, 'refresh'); //retourne la commande "refresh si elle existe
      tejo (!is_object ($ cmd)) {// Si el comando no existe
      continúa; // continuar el ciclo
    }
    $cmd->execCmd(); //la commande existe on la lance
  }
}
`` ``

Luego puede cambiar la frecuencia del cron según la importancia de su información para recuperar.

Solo puedo invitarlo a que se tome el tiempo de ir a esta página para obtener más información ==> [aquí](https://doc.jeedom.com/dev/phpdoc/4.1/)

Y aún mejor ir al núcleo de github ==> [Aquí](https://github.com/jeedom/core)

Pon tu nariz para dominar aún más .

El complemento es funcional tal cual.

Me tomaré el tiempo para agregar la forma de configurar un cron personalizado de acuerdo con el equipo .

# El widget

No es una tarea fácil el widget, pero nos quedaremos en el widget predeterminado por el momento.

Si no ha tocado nada, equipo activado y visible, el widget ocupa todo el ancho de la pantalla. Entonces lo vamos a cambiar.

La commande qui apparaît est la commande «story» de Tipo info, sous-Tipo string.

Mi placer es despertarme por la mañana es leer un vdm por la mañana. Me permite ver que hay peor que yo :D

Pero no tengo mis lentes y actualmente el renderizado en el widget no me permite leerlo

Donc on va changer le style en affectant un template à la commande « story»

Nada es mas facil.

Voy a ver ==> [Aquí](https://github.com/jeedom/core/tree/alpha/core/template/dashboard)

Estoy buscando una plantilla para cmd.info.cadena (nuestro comando es de tipo info subtipo cadena) .No es difícil, solo hay dos (predeterminado o mosaico)

J'applique le template « cmd.info.string.tile.html » à ma commande.

Para eso abro el archivo vdm.class.php , fonction postSave() et j'ajoute le template « tile » pour la commande « story » en appliquant la méthode setTemplate()

`` ``php
$info = $this->getCmd(null, 'story');
tejo (!is_object ($ info)) {
  $info = new vdmCmd();
  $info->setName(__('Histoire', __FILE__));
}
$info->setLogicalId('story');
$info->setEqLogic_id($this->getId());
$info->setType('info');
$info->setTemplate('dashboard','tile');//template pour le dashboard
$info->setSubType('string');
$info->save();
`` ``

Actualizar el tablero.

Es mejor, pero el widget siempre ocupa el ancho del tablero. Por lo tanto, corregiremos. Por défaut la largeur du widget de l'équipement(eqLogic) et la hauteur sont à « auto ».

Por lo tanto, cambiaremos el ancho del widget (equipo => eqLogic) usando el método setDisplay () heredado de la clase eqLogic .Dejamos la altura en el coche.

Para hacer esto, simplemente agregue

`` ``php
$this->setDisplay("width","800px");
`` ``

Si pero !! Porque hay un pero. Intente agregar esto en la función postsave () o postUpdate () y no toma en cuenta el cambio. Por qué ? Ben debe leer el plugin de plantilla doc ==> AQUÍ

Ahora que lo ha leído correctamente, sabe que debe utilizar el método preSave()

`` ``php
función pública preSave() {
  $this->setDisplay("width","800px");
}
`` ``

Registre el equipo y actualice el tablero.

# La configuración. Las opciones

> **Importante**
>
> Este es un capítulo importante y debes entenderlo antes de continuar.

Por el momento, tenemos que utilizar 3 clases del núcleo de jeedom : EqLogic, cmd, cron. Vaya para obtener información, agregamos un cuarto con el complemento de clase en el archivo vdm.php que abres y dejas abierto porque lo editaremos.

`` ``php
$plugin = plugin::byId('vdm'); // appelle la classe plugin du core
`` ``

Tienes que entender que todo está hecho para facilitar nuestro trabajo.

Para un parámetro / una opción interna al complemento, usaremos uno de los métodos de la clase eqLogic del núcleo: setConfiguration () agregando los parámetros que desee. Por ejemplo:

`` ``php
$this->setConfiguration("type","mon_type"); // si on veut définir un paramètre Tipo de valeur mon_type. Comme on a défini la largeur du widget via la méthode setDisplay()
`` ``

Para dejar la elección al usuario, volvemos al archivo del escritorio.php que dejaste abierto porque estás siguiendo este TP al pie de la letra :D

Cherchez

`` ``html
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="city" placeholder="param1"/>
`` ``

Y reemplazar con

`` ``html
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/> //Importante de laisser la classe eqLogicAttr
`` ``

Guarde y vaya a un dispositivo de complemento que ya haya creado siguiendo esta práctica de laboratorio (actualice si es necesario).

Dans le champs «Paramètre» d'un équipement, tapez «aléatoire» et sauvegardez.

Perfecto, el parámetro se guarda.

![image](images/tutorial_parametre1.png)

Es simple no? . C'est pourquoi il ne faut surtout pas toucher à cette ligne de code comme indiqué dans le premier menu « test ». Es el que hace todo el trabajo

`` ``php
<?php include_file('core', 'plugin.template', 'js');?> //Chargement du fichier core/js/plugin.template.js (en partant de la racine du site)
`` ``

Si observa de cerca el archivo de escritorio.Hace php

`` ``html
<input type="text" class="eqLogicAttr form-control" data-l1key="id" style="display:none;" /> // retourne l'id(unique) de l'eqLogic(équipement) que l'on va pouvoir récupérer via $this->getId() ;
`` ``

`` ``html
{% raw %}<input type="text" class="eqLogicAttr form-control" data-l1key="name" placeholder="{{Nombre de l'équipement}}"/>// retourne le nom de l'eqLogic(équipement) que l'on va pouvoir récupérer via $this->getName();{% endraw %}
`` ``

Etc…

Si ha entendido todo esto bien, podremos seguir adelante. Pero primero cambiaremos en el archivo desktop.php

`` ``html
{% raw %}<label class="col-sm-3 control-label">{{Paramètre}}</label>{% endraw %}
`` ``

Par

`` ``html
{% raw %}<label class="col-sm-3 control-label">{{Type de vdm}}</label>{% endraw %}
`` ``

Importante : El texto entre llaves corresponde al texto que se traducirá si empuja el complemento en el mercado.

Por lo demás, desarrollaremos el plugin eligiendo un tipo de vdm (aleatorio o picante o tops) que queramos así como un cron personalizado para cada dispositivo.

# Uso de opciones / parámetros

Para ir más allá y entender el capítulo anterior, permitiremos al usuario elegir un tipo de vdm (aleatorio o picante o tops)

On pourrait le laisser taper dans l'input « Type de vdm » : al azar o picante o superior, pero haremos lo contrario dejándolo elegir a través de una etiqueta de selección

Si ha seguido todo lo que debería tener en el archivo desktop.php

`` ``html
{% raw %}
<div class="form-group">
  <label class="col-sm-3 control-label">{{Type de vdm}}</label>
  <div class="col-sm-3">
    <input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/>
  </div>
</div>
{% endraw %}
`` ``

Que reemplazaremos por

`` ``html
{% raw %}
<div class="form-group">
  <label class="col-sm-3 control-label" >{{ Type de vdm }}</label>
  <div class="col-sm-3">
    <select class="form-control eqLogicAttr" data-l1key="configuration" data-l2key="Tipo ">
      <option value="aleatoire">{{Aleatoire}}</option>
      <option value="epicees">{{Coquin}}</option>
      <option value="tops">{{Best}}</option>
    </select>
  </div>
</div>
{% endraw %}
`` ``

Ici le paramètre «type» prendra la valeur du select choisi soit aleatoire ou epicees ou tops.

Ahora tendremos en cuenta nuestro parámetro en la función randomVdm () en el archivo vdm.class.php

Cherchez

`` ``php
$url = "http://www.viedemerde.fr/aleatoire";
`` ``

Y reemplazar con

`` ``php
$Tipo = $this->getConfiguration("type", "aleatoire"); //si le paramètre est vide ou n'existe pas, on prends le Tipo aleatoire
$url = "http://www.viedemerde.fr/{$type}";
`` ``

Ahora cambie el valor de la selección en un elemento del equipo, guarde y vaya al tablero para ver cómo se ve.
