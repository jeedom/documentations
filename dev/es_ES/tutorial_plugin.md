# Para empezar

> **IMPORTANTE**
>
> Este tutorial lo ha escrito ZygOm4t1k, a quien damos las gracias de todo corazón. Puedes consultar el original [aquí](https://forum.jeedom.com/viewtopic.php?f=27&t=37630#p621495)

Aquí tienes un pequeño ejercicio práctico para explicar cómo crear un plugin. A modo de ejemplo, vamos a crear un plugin que devuelva una frase de la web viedemerde.fr. (El plugin se irá ampliando).

En ningún caso sustituye a la [documentación oficial](index)

# Crear la base del complemento

Para empezar, hay que elegir un nombre y un identificador (que no debe existir ya).

Nombre: Vida de mierda
Id: vdm

Descarga la plantilla del complemento para obtener la [básica](https://github.com/jeedom/plugin-template/archive/master.zip)

Descomprime el archivo. Obtendrás una carpeta llamada «plugin-template-master» que contiene las carpetas 3rparty, core, desktop…

Allá vamos.

> **IMPORTANTE**
>
>Hay disponible un asistente de configuración para ayudarte a personalizar rápidamente tu complemento.
>Esta herramienta interactiva te permite definir fácilmente el nombre del complemento, indicar si se necesita un servicio en segundo plano y se encarga de modificar automáticamente todos los archivos necesarios.
>Su uso simplifica el proceso de configuración y te permite ahorrar un tiempo muy valioso en el desarrollo de tu plugin.

👉 Para iniciar el asistente, abre un terminal en el directorio del plugin template y ejecuta el siguiente comando:

```
php plugin_info/helperConfiguration.php
```

Si no quieres utilizar este script, puedes seguir los siguientes pasos para cambiar el nombre de los archivos.


Cambia el nombre de la carpeta «plugin-template-master» por «vdm» (el ID) del plugin.

1/ Abre el archivo plugin_info/info.json y edítalo.

```json
{
  "id" : "vdm",
  "name" : "Vie de Merde",
  "description" : "Plugin pour récupérer les dernières vdm",
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

Copia y pega el código anterior.

He cambiado el ID *(vdm)*, el nombre, he añadido una descripción, el autor y la categoría.

Requisito: versión mínima de Jeedom para poder acceder al complemento en el Market.

Por el momento, no hay registro de cambios, documentación, idiomas ni compatibilidad. Volveré sobre ello más adelante.

2/ Vamos a cambiar el nombre de los archivos necesarios para que Jeedom reconozca el complemento

- Cambia el nombre del archivo core/ajax/template.ajax.php por vdm.ajax.php

- Cambia el nombre del archivo core/class/template.class.php por vdm.class.php y ábrelo para editarlo.

Sustituir

```php
class template extends eqLogic
```

por

```php
class vdm extends eqLogic
```

------------------------

```php
class templateCmd extends cmd
```

por

```php
class vdmCmd extends cmd
```

- Cambia el nombre del archivo core/php/template.inc.php por core/php/vdm.inc.php
- Cambia el nombre del archivo desktop/php/template.php por desktop/php/vdm.php y ábrelo

Sustituye:

```php
$plugin = plugin::byId('template');
```

Por

```php
$plugin = plugin::byId('vdm');
```

------------------------

```html
{% raw %}<legend><i class="fas fa-table"></i> {{Mes templates}}</legend>{% endraw %}
```

Por

```html
{% raw %}<legend><i class="fas fa-table"></i> {{Mes équipements}}</legend>{% endraw %}
```

------------------------

```php
<?php include_file('desktop', 'template', 'js', 'template');?>
```

Por

```php
<?php include_file('desktop', 'vdm', 'js', 'vdm');?>
```

Y nada más, **no modifiques esta línea** ``<?php include_file('core', 'plugin.template', 'js');?>``.

- Cambia el nombre del archivo desktop/modal/modal.template.php por desktop/modal/modal.vdm.php

- Cambia el nombre del archivo desktop/js/template.js por desktop/js/vdm.js

- Abre el archivo plugin_info/install.php y cambia el nombre de las funciones de la siguiente manera

```php
function vdm_install() {
}

function vdm_update() {
}

function vdm_remove() {
}
```

Ya está listo el complemento, pero aún queda por personalizarlo y actualizar el icono: [Documentación para desarrolladores - Icono del complemento](Icone_de_plugin)

Añade el icono a la carpeta plugin_info con el nombre vdm_icon.png

en mi caso

![imagen](../images/tutorial_vdm_icon.png)

Ahora podemos copiar la carpeta «vdm» en la carpeta «plugin» de Jeedom y acceder a la gestión de plugins. El plugin aparece correctamente.

![imagen](../images/tutorial_vdm_plugin.png)

Lo activamos y, a continuación, plugins/Monitoring/Vie de Merde

Ya está lista la base. Deberías tener el plugin activado, pero por ahora no hace nada.

# Los mandos

El objetivo del complemento será recuperar un vdm aleatorio y mostrarlo en el panel de control.

Por lo tanto, hay que crear un comando de tipo «info» para almacenar esta información. Será de subtipo «string», ya que se trata de una cadena de caracteres.

A modo de ejemplo, vamos a añadir un comando que actualice la información. Por lo tanto, será un comando de tipo «acción» y subtipo «otro».

-Crea un dispositivo «vdm1» haciendo clic en el signo +. Actívalo y hazlo visible. Elige un objeto y el dispositivo debería aparecer en el panel de control (dependiendo del objeto).

En este momento, no aparece ningún pedido ni en la pestaña «Pedidos» ni en el widget.

Abre el archivo core/class/vdm.class.php y busca la función postSave() (lee la documentación del plugin template si aún no lo has hecho).

Creamos los dos comandos

```php
public function postSave() {
  $info = $this->getCmd(null, 'story');
  if (!is_object($info)) {
    $info = new vdmCmd();
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
```

- Crea otro dispositivo «vdm2» haciendo clic en el signo +. En la pestaña «Comandos», aparecerán los comandos. Actívalo y hazlo visible. Elige un objeto principal y comprueba cómo queda en el panel de control.

- Registra el primer dispositivo «vdm1» para crear los comandos. Comprueba también cómo se muestra en el widget.

En la pestaña «Comandos», deberías verlo.

![imagen](../images/tutorial_vdm_cmd1.png)

Abre el archivo desktop/php/vdm.php para encontrar el código HTML de esta tabla.

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

En el momento de la visualización, se ejecuta el script desktop/js/vdm.js, que activa la función addCmdToTable.

```html
{% raw %}
/* Fonction permettant l'affichage des commandes dans l'équipement */
function addCmdToTable(_cmd) {
  if (!isset(_cmd)) {
    var _cmd = { configuration: {} };
  }
  if (!isset(_cmd.configuration)) {
    _cmd.configuration = {};
  }
  var tr = '<tr class="cmd" data-cmd_id="' + init(_cmd.id) + '">';
  tr += '<td style="width:60px;">';
  tr += '<span class="cmdAttr" data-l1key="id"></span>';
  tr += '</td>';
  tr += '<td style="min-width:300px;width:350px;">';
  tr += '<div class="row">';
  tr += '<div class="col-xs-7">';
  tr += '<input class="cmdAttr form-control input-sm" data-l1key="name" placeholder="{{Nom de la commande}}">';
  tr += '<select class="cmdAttr form-control input-sm" data-l1key="value" style="display : none;margin-top : 5px;" title="{{Commande information liée}}">';
  tr += '<option value="">{{Aucune}}</option>';
  tr += '</select>';
  tr += '</div>';
  tr += '<div class="col-xs-5">';
  tr += '<a class="cmdAction btn btn-default btn-sm" data-l1key="chooseIcon"><i class="fas fa-flag"></i> {{Icône}}</a>';
  tr += '<span class="cmdAttr" data-l1key="display" data-l2key="icon" style="margin-left : 10px;"></span>';
  tr += '</div>';
  tr += '</div>';
  tr += '</td>';
  tr += '<td>';
  tr += '<span class="type" type="' + init(_cmd.type) + '">' + jeedom.cmd.availableType() + '</span>';
  tr += '<span class="subType" subType="' + init(_cmd.subType) + '"></span>';
  tr += '</td>';
  tr += '<td style="min-width:150px;width:350px;">';
  tr += '<input class="cmdAttr form-control input-sm" data-l1key="configuration" data-l2key="minValue" placeholder="{{Min.}}" title="{{Min.}}" style="width:30%;display:inline-block;"/> ';
  tr += '<input class="cmdAttr form-control input-sm" data-l1key="configuration" data-l2key="maxValue" placeholder="{{Max.}}" title="{{Max.}}" style="width:30%;display:inline-block;"/> ';
  tr += '<input class="cmdAttr form-control input-sm" data-l1key="unite" placeholder="{{Unité}}" title="{{Unité}}" style="width:30%;display:inline-block;"/>';
  tr += '</td>';
  tr += '<td style="min-width:80px;width:350px;">';
  tr += '<label class="checkbox-inline"><input type="checkbox" class="cmdAttr" data-l1key="isVisible" checked/>{{Afficher}}</label>';
  tr += '<label class="checkbox-inline"><input type="checkbox" class="cmdAttr" data-l1key="isHistorized" checked/>{{Historiser}}</label>';
  tr += '<label class="checkbox-inline"><input type="checkbox" class="cmdAttr" data-l1key="display" data-l2key="invertBinary"/>{{Inverser}}</label>';
  tr += '</td>';
  tr += '<td style="min-width:80px;width:200px;">';
  if (is_numeric(_cmd.id)) {
    tr += '<a class="btn btn-default btn-xs cmdAction" data-action="configure"><i class="fas fa-cogs"></i></a> ';
    tr += '<a class="btn btn-default btn-xs cmdAction" data-action="test"><i class="fas fa-rss"></i> Tester</a>';
  }
  tr += '<i class="fas fa-minus-circle pull-right cmdAction cursor" data-action="remove"></i></td>';
  tr += '</tr>';
  $('#table_cmd tbody').append(tr);
  var tr = $('#table_cmd tbody tr').last();
  jeedom.eqLogic.builSelectCmd({
    id: $('.eqLogicAttr[data-l1key=id]').value(),
    filter: { type: 'info' },
    error: function (error) {
      $('#div_alert').showAlert({ message: error.message, level: 'danger' });
    },
    success: function (result) {
      tr.find('.cmdAttr[data-l1key=value]').append(result);
      tr.setValues(_cmd, '.cmdAttr');
      jeedom.cmd.changeType(tr, init(_cmd.subType));
    }
  });
}
{% endraw %}
```

Esto se hace automáticamente.

Bueno, ahora solo queda obtener un VDM aleatorio y utilizar los comandos.

# Recuperación de información

Para recuperar un vdm de forma aleatoria.

```php
$url = "http://www.viedemerde.fr/aleatoire";
$data = file_get_contents($url);
@$dom = new DOMDocument();
libxml_use_internal_errors(false);
$dom->loadHTML('<?xml encoding="UTF-8">' .$data);
libxml_use_internal_errors(true);
$xpath = new DOMXPath($dom);
$divs = $xpath->query('//article[@class="art-panel col-xs-12"]//div[@class="panel-content"]//p//a');
return $divs[0]->nodeValue ;
```

Abre el archivo core/class/vdm.class.php y, para la clase vdm que hereda los métodos de egLogic, creo una función llamada randomVdm

```php
public function randomVdm() {
  $url = "http://www.viedemerde.fr/aleatoire";
  $data = file_get_contents($url);
  @$dom = new DOMDocument();
  libxml_use_internal_errors(true);
  $dom->loadHTML($data);
  libxml_use_internal_errors(false);
  $xpath = new DOMXPath($dom);
  $divs = $xpath->query('//article[@class="art-panel col-xs-12"]//div[@class="panel-content"]//p//a');
  return $divs[0]->nodeValue ;
}
```

Ahora vamos a actualizar el comando info(story) con esta información ejecutando el comando action(refresh).
Siguiendo en core/class/vdm.class.php, para la clase vdmCmd vamos a utilizar el método execute

```php
public function execute($_options = array()) {
}
```

Aquí es donde vamos a definir qué va a pasar cuando se active el comando «Actualizar». La clase vdmCmd ha heredado todos los métodos de la clase cmd (Core Jeedom).

Se comprueba el «logicalId» del comando ejecutado y, si es «refresh», se ejecutan las acciones

```php
switch ($this->getLogicalId()) {
  case 'refresh': //LogicalId de la commande rafraîchir que l’on a créé dans la méthode Postsave de la classe vdm .
  //code pour rafraîchir ma commande
  break;
}
```

Ahora solo queda ejecutar la función randomVdm(). Para ello, se recupera el eqLogic (el equipo) del comando y se ejecuta la función.

```php
$eqlogic = $this->getEqLogic(); //Récupération de l’eqlogic
$info = $eqlogic->randomVdm() ; //Lance la fonction et stocke le résultat dans la variable $info
```

Actualizamos el comando «story» con la variable $info. Vamos a utilizar el método checkAndUpdateCmd de la clase eqlogic

```php
$eqlogic->checkAndUpdateCmd('story', $info);
```

Lo que da como resultado

```php
public function execute($_options = array()) {
  $eqlogic = $this->getEqLogic(); //récupère l'éqlogic de la commande $this
  switch ($this->getLogicalId()) { //vérifie le logicalid de la commande
    case 'refresh': // LogicalId de la commande rafraîchir que l’on a créé dans la méthode Postsave de la classe vdm .
    $info = $eqlogic->randomVdm(); //On lance la fonction randomVdm() pour récupérer une vdm et on la stocke dans la variable $info
    $eqlogic->checkAndUpdateCmd('story', $info); //on met à jour la commande avec le LogicalId "story"  de l'eqlogic
    break;
  }
}
```

Ahora ve a un dispositivo creado y ejecuta el comando «Actualizar». A continuación, ejecuta el comando «Historial», que debería estar actualizado.

En el panel de control aparece la información. Haz clic en el icono de actualización para actualizar la información.

A continuación, vamos a definir el tamaño del widget, personalizarlo un poco y automatizar la actualización.

# Actualización de la información (cron)

El complemento funciona, pero por ahora no hace gran cosa. Si haces clic en el comando «refresh», el comando «story» se actualiza, pero por lo demás no pasa nada.

Cabe destacar que, para el control, lo denomino mediante el logicalId. Y esto es importante. Disponer de un logicalId único por dispositivo (eqLogic) simplifica las cosas.

Ahora vamos a ver cómo actualizar el comando utilizando las funciones nativas del núcleo: los crons

Hay varios:

- cron: actualización cada minuto
- cron5: actualización cada 5 minutos
- cron15: actualización cada 15 minutos
- cron30: actualización cada 30 minutos
- cronHourly: cada hora
- cronDaily: 1 vez al día

Dado que se trata de un plugin, vamos a realizar una actualización cada hora (vamos a atrevernos). Por lo tanto, utilizaremos la función cronHourly().

Así pues, vamos a abrir el archivo vdm.class.php y buscar

```php
/*
* Fonction exécutée automatiquement toutes les heures par Jeedom
public static function cronHourly() {
}
*/
```

Descomenta el código

```php
public static function cronHourly() {
}
```

Nuestra función ya está operativa

Ahora hay que recuperar todos los dispositivos activos de nuestro complemento,

```php
self::byType('vdm', true) //array contenant tous les équipements du plugin, le deuxième argument, un boolean, permet de ne récupérer que les équipements actifs si true ou tous les équipements si false (défaut)
```

y revisarlas una por una

```php
foreach (self::byType('vdm', true) as $vdm) {
}
```

Bien, ahora buscamos el comando «refresh» del equipo (eqLogic)

```php
$cmd = $vdm->getCmd(null, 'refresh');
```

Si no existe, continuamos con el bucle (foreach); en caso contrario, la ejecutamos

```php
if (!is_object($cmd)) {
  continue;
}
$cmd->execCmd();
```

Lo que da como resultado

```php
public static function cronHourly () {
  foreach (self::byType('vdm', true) as $vdm) { //parcours tous les équipements actifs du plugin vdm
    $cmd = $vdm->getCmd(null, 'refresh'); //retourne la commande "refresh" si elle existe
    if (!is_object($cmd)) { //Si la commande n'existe pas
    continue; //continue la boucle
  }
  $cmd->execCmd(); //la commande existe on la lance
}
}
```

Para probarlo, en Jeedom, ve a «Configuración» > «Motor de tareas» y ejecuta el cron de la clase «plugin» con la función «cronHourly».
La información se está actualizando.

Está bien, pero no me conviene. Al crear el equipo, el comando «story» no se actualiza.

Así que vamos a mejorar el código.

Para crear los comandos hemos utilizado el método postSave(). Vamos a utilizar el método postUpdate() para actualizar la información.

Es la forma más sencilla, ya que solo hay un comando y se crea en postSave

```php
public function postUpdate() {
  $cmd = $this->getCmd(null, 'refresh'); //On recherche la commande refresh de l’équipement
  if (is_object($cmd)) { //elle existe et on lance la commande
    $cmd->execCmd();
  }
}
```

Hay que probarlo, ¿funciona?

Pero aquí tienes una alternativa que puede resultar más útil en casos más complejos

En la función postUpdate(), se ejecuta la función cronHourly() con el ID del dispositivo

```php
public function postUpdate() {
  self::cronHourly($this->getId()); //lance la fonction cronHourly avec l’id de l’eqLogic
}
```

Pero en este caso se modifica la función cronHourly()

```php
public static function cronHourly($_eqLogic_id = null) {
  if ($_eqLogic_id == null) { //La fonction n’a pas d’argument donc on recherche tous les équipements du plugin
    $eqLogics = self::byType('vdm', true);
    } else { //La fonction a l’argument id(unique) d’un équipement(eqLogic)
      $eqLogics = array(self::byId($_eqLogic_id));
    }

    foreach ($eqLogics as $vdm) {
      $cmd = $vdm->getCmd(null, 'refresh'); //retourne la commande "refresh si elle existe
      if (!is_object($cmd)) { //Si la commande n'existe pas
      continue; //continue la boucle
    }
    $cmd->execCmd(); //la commande existe on la lance
  }
}
```

Después, puedes modificar la frecuencia del cron en función de la importancia de la información que quieras recuperar.

No puedo sino invitaros a que os toméis un momento para visitar esta página y obtener más información ==> [aquí](/phpdoc/)

Y aún mejor, entra en el GitHub del núcleo ==> [AQUÍ](https://github.com/jeedom/core)

Echa un vistazo para tener aún más control.

El complemento funciona tal y como está.

Me tomaré un tiempo para añadir cómo configurar un cron personalizado según el equipo.

# El widget

El widget no es precisamente pan comido, pero de momento nos quedaremos con el widget predeterminado.

Si no has tocado nada, con el dispositivo activado y visible, el widget ocupa todo el ancho de la pantalla. Así que vamos a cambiarlo.

El comando que aparece es el comando «story», de tipo «info» y subtipo «string».

Lo que más me gusta al levantarme por la mañana es leer un «vdm» nada más despertarme. Así veo que hay gente peor que yo :D

Pero no tengo mis gafas y, de momento, la visualización en el widget no me permite leerlo…

Así que vamos a cambiar el estilo asignando una plantilla al comando «story».

No hay nada más sencillo.

Voy a ver ==> [AQUÍ](https://github.com/jeedom/core/tree/alpha/core/template/dashboard)

Busco una plantilla para cmd.info.string (nuestro comando es de tipo «info» y subtipo «string»). No es difícil, solo hay dos (por defecto o mosaico).

Aplico la plantilla «cmd.info.string.tile.html» a mi comando.

Para ello, abro el archivo vdm.class.php, la función postSave(), y añado la plantilla «tile» para el comando «story» aplicando el método setTemplate()

```php
$info = $this->getCmd(null, 'story');
if (!is_object($info)) {
  $info = new vdmCmd();
  $info->setName(__('Histoire', __FILE__));
}
$info->setLogicalId('story');
$info->setEqLogic_id($this->getId());
$info->setType('info');
$info->setTemplate('dashboard','tile');//template pour le dashboard
$info->setSubType('string');
$info->save();
```

Actualizar el panel de control.

Está mejor, pero el widget sigue ocupando todo el ancho del panel de control. Así que lo vamos a corregir. Por defecto, el ancho y la altura del widget del equipo (eqLogic) están en «auto».

Por lo tanto, vamos a cambiar el ancho del widget (equipamiento => eqLogic) utilizando el método setDisplay() heredado de la clase eqLogic. Dejamos la altura en modo automático.

Para ello, basta con añadir

```php
$this->setDisplay("width","800px");
```

Sí, ¡pero…! Porque hay un «pero». Intenta añadir esto en la función postsave() o postUpdate() y verás que no se tiene en cuenta el cambio. ¿Por qué? Pues hay que leer la documentación del plugin template ==> AQUÍ

Ahora que lo has leído con atención, ya sabes que hay que utilizar el método preSave()

```php
public function preSave() {
  $this->setDisplay("width","800px");
}
```

Registra un dispositivo y actualiza el panel de control.

# Configuración. Opciones

> **IMPORTANTE**
>
> Es un tema importante y hay que entenderlo antes de continuar.

Por el momento, hemos utilizado tres clases del núcleo de Jeedom: EqLogic, cmd y cron. A título informativo, vamos a añadir una cuarta con la clase «plugin» en el archivo vdm.php, que debes abrir y dejar abierto, ya que vamos a editarlo.

```php
$plugin = plugin::byId('vdm'); // appelle la classe plugin du core
```

Hay que entender que todo está pensado para facilitarnos la vida.

Para un parámetro u opción interna del plugin, utilizaremos uno de los métodos de la clase eqLogic del núcleo: setConfiguration(), añadiéndole los parámetros que queramos. Por ejemplo:

```php
$this->setConfiguration("type","mon_type"); // si on veut définir un paramètre type de valeur mon_type. Comme on a défini la largeur du widget via la méthode setDisplay()
```

Para que el usuario pueda elegir, volvemos al archivo desktop.php que has dejado abierto porque estás siguiendo este ejercicio al pie de la letra :D

Buscar

```html
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="city" placeholder="param1"/>
```

Y sustitúyelo por

```html
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/> //Important de laisser la classe eqLogicAttr
```

Guarda y accede a un dispositivo del complemento que ya hayas creado siguiendo este ejercicio práctico (actualiza la página si es necesario).

En el campo «Parámetros» de un dispositivo, escribe «aleatorio» y guarda los cambios.

Perfecto, el parámetro se ha guardado.

![imagen](../images/tutorial_parametre1.png)

Es sencillo, ¿no? Por eso es muy importante que no modifiques esta línea de código, tal y como se indica en el primer menú «test». Es esta línea la que hace todo el trabajo.

```php
<?php include_file('core', 'plugin.template', 'js');?> //Chargement du fichier core/js/plugin.template.js (en partant de la racine du site)
```

Si te fijas bien en el archivo desktop.php, verás que hay

```html
<input type="text" class="eqLogicAttr form-control" data-l1key="id" style="display:none;" /> // retourne l’id(unique) de l’eqLogic(équipement) que l’on va pouvoir récupérer via $this->getId() ;
```

```html
{% raw %}<input type="text" class="eqLogicAttr form-control" data-l1key="name" placeholder="{{Nom de l'équipement}}"/>// retourne le nom de l’eqLogic(équipement) que l’on va pouvoir récupérer via $this->getName();{% endraw %}
```

Etc…

Si lo has entendido todo bien, podremos pasar a lo siguiente. Pero antes vamos a hacer algunos cambios en el archivo desktop.php

```html
{% raw %}<label class="col-sm-3 control-label">{{Paramètre}}</label>{% endraw %}
```

Por

```html
{% raw %}<label class="col-sm-3 control-label">{{Type de vdm}}</label>{% endraw %}
```

Importante: El texto entre llaves es el que se traducirá si publicas el plugin en el mercado.

A continuación, vamos a mejorar el plugin seleccionando el tipo de vdm que queramos (aleatorio, picante o los más populares), así como una programación personalizada para cada dispositivo.

# Uso de las opciones y ajustes

Para profundizar y comprender bien el capítulo anterior, vamos a permitir que el usuario elija un tipo de vdm (aleatorio, especialidades o más vendidos).

Podríamos dejar que escribiera en el campo «Tipo de vdm»: «aleatorio», «especias» o «top», pero lo haremos de otra forma, dejándole elegir mediante un menú desplegable.

Si has seguido todos los pasos, deberías tener en el archivo desktop.php

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

Que vamos a sustituir por

```html
{% raw %}
<div class="form-group">
  <label class="col-sm-3 control-label" >{{ Type de vdm }}</label>
  <div class="col-sm-3">
    <select class="form-control eqLogicAttr" data-l1key="configuration" data-l2key="type ">
      <option value="aleatoire">{{Aleatoire}}</option>
      <option value="epicees">{{Coquin}}</option>
      <option value="tops">{{Best}}</option>
    </select>
  </div>
</div>
{% endraw %}
```

En este caso, el parámetro «type» adoptará el valor seleccionado en el menú desplegable: «aleatorio», «especias» o «top».

Ahora vamos a tener en cuenta nuestro parámetro en la función randomVdm() del archivo vdm.class.php

Buscar

```php
$url = "http://www.viedemerde.fr/aleatoire";
```

Y sustitúyelo por

```php
$type = $this->getConfiguration("type", "aleatoire"); //si le paramètre est vide ou n’existe pas, on prends le type aleatoire
$url = "http://www.viedemerde.fr/{$type}";
```

Ahora cambia el valor del menú desplegable de un dispositivo, guarda los cambios y ve al panel de control para ver cómo queda.
