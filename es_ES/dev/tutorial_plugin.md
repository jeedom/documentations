# Desarrollar en Jeedom

> **IMPORTANT**
>
> Este tutorial fue escrito por ZygOm4t1k a quien agradecemos calurosamente. Puedes encontrar el original [aquí](https://forum.jeedom.com/viewtopic.php?f=27&t=37630#p621495)

Aquí hay un breve tutorial para explicar cómo crear un complemento. Para el ejemplo crearemos un complemento que devuelve una oración del sitio viedemerde.es (El complemento será escalable).

No reemplaza el [documentación oficial](https://jeedom.github.io/plugin-template/es_ES/)

# Crear la base del complemento

Para comenzar, debe determinar un nombre y una identificación (que no debe existir)

Nombre : Vida de caca
Identificación : vdm

Descargue el complemento de plantilla para tener el [base](https://github.com/jeedom/plugin-template/archive/master.zip)

Descomprime el archivo . Vous obtiendrez un dossier « plugin-template-master » contenant des dossiers 3rparty , core , desktop…

Vamos.

Renommer le dossier « plugin-template-master » en « vdm » (l'id) du plugin.

1 / Abra el archivo plugin_info / info.json y edita el.

````
{
	"id" : "vdm",
	"name" : "Vida de caca",
	"description" : "Plugin pour récupérer les dernières vdm",
	"licence" : "AGPL",
	"author" : "Zyg0m4t1k",
	"require" : "3.2",
	"category" : "monitoring",
	"changelog" : "",
	"documentation" : "",
	"language" : "",
	"compatibility" : ""
}
````

Copia y pega el código de arriba.

Cambié la identificación (vdm), el nombre, agregué una descripción, el autor y la categoría.

exigir : versión mínima de jeedom para tener acceso al complemento en el mercado.

Registro de cambios, documentación, idioma, compatibilidad nula por el momento. Volveré a esto más tarde.

2 / Cambiaremos el nombre de los archivos necesarios para que Jeedom reconozca el complemento

-   Renombrar archivo ``core/ajax/template.ajax.php`` en ``vdm.ajax.php``

-   Renombrar archivo ``core/class/template.class.php`` en ``vdm.class.php`` y ábrelo para editarlo.

- Reemplazar ``class template extends eqLogic {``

    por ``class vdm extends eqLogic {``

- y ``class templateCmd extends cmd``

    por ``class vdmCmd extends cmd``

- Cambie el nombre del archivo core / php / template.inc.php a core / php / vdm.inc.php
- Cambie el nombre del archivo de escritorio / php / template.php a escritorio / php / vdm.php y ábrelo.

- Reemplazar ``$plugin = plugin::byId('template');``

    Por ``$plugin = plugin::byId(‘vdm');``

- Reemplazar ``{% raw %}{{Agregar una plantilla}}{% endraw %}``

    Por ``{% raw %}{{Agregar equipo}}{% endraw %}``

- Reemplazar ``<legend>{{Mes templates}}</legend>``

    Par` <legend> {{Mi equipo}} </legend> ``

- Reemplazar ``{% raw %}{{Plantilla de nombre de equipo}}{% endraw %}``

    Por ``{% raw %}{{Nombre del equipo }}{% endraw %}``

- Reemplazar ``{% raw %}{{plantilla param 1}}{% endraw %}``

    Por ``{% raw %}{{Configuraciones}}{% endraw %}``

- Reemplazar ``<?php include_file('desktop', 'template', 'js', 'template');?>``

    Por ``<?php include_file('desktop', vdm, 'js', vdm);?>``

Y nada más, no cambies la línea ``<?php include_file('core', 'plugin.template', 'js');?>``

-Renombrar archivo ``desktop/modal/modal.template.php`` en ``desktop/modal/modal.vdm.php``

-Renombrar archivo ``desktop/js/template.js`` en ``desktop/js/ vdm.js``

- Abrir archivo ``plugin_info/install.php``

Y cambie el nombre de las funciones de la siguiente manera

````
function vdm_install() {

}

function vdm_update() {

}


function vdm_remove() {

}
````

Aquí el complemento está listo pero queda la personalización y el ícono para actualizar : [Documentación](https://doc.jeedom.com/es_ES/dev/Icone_de_plugin)

Agregue el icono en la carpeta plugin_info bajo el nombre vdm_icon.png

en mi caso

![image](images/tutorial_vdm_icon.png)

Ahora podemos copiar la carpeta vdm en la carpeta del complemento Jeedom e ir a la administración del complemento. Encontramos el complemento.

![image](images/tutorial_vdm_plugin.png)

Lo activamos y luego complementos / Monitoreo / Vida de caca

![image](images/tutorial_vdm_desktop1.png)

no está bien porque el color de la mayoría no coincide con el color del icono.

Abro el archivo ``desktop/php/desktop.php`` para corregir.

````
{% raw %}
      <div class="cursor eqLogicAction" data-action="add" style="text-align: center; background-color : #ffffff; height : 120px;margin-bottom : 10px;padding : 5px;border-radius: 2px;width : 160px;margin-left : 10px;" >
        <i class="fa fa-plus-circle" style="font-size : 6em;color:#94ca02;"></i>
        <br>
        <span style="font-size : 1.1em;position:relative; top : 23px;word-break: break-all;white-space: pre-wrap;word-wrap: break-word;color:#94ca02">{{Ajouter}}</span>
      </div>
{% endraw %}
````

Sustituyo ``color:#94ca02;"`` por ``color:#00A9EC;"``

También notamos que los textos no están alineados, por lo que corregimos el estilo de la configuración (propiedad superior)

````
{% raw %}<span style="font-size : 1.1em;position:relative; top : 15px;word-break: break-all;white-space: pre-wrap;word-wrap: break-word;color:#767676">{{Configuration}}</span>{% endraw %}
````

par

````
{% raw %}<span style="font-size : 1.1em;position:relative;top : 23px;word-break: break-all;white-space: pre-wrap;word-wrap: break-word;color:#767676">{{Configuration}}</span>{% endraw %}
````

![image](images/tutorial_vdm_desktop2.png)

Aquí está la base está lista. Debería tener el complemento de activos, pero por el momento no hace nada.

# Las órdenes

El propósito del complemento será recuperar un vdm aleatorio y mostrarlo en el tablero.

Por lo tanto, debe crear un comando de tipo de información para almacenar esta información. Elle sera de sous-type « String » car c'est une chaîne de caractère.

Para el ejemplo agregaremos un comando que actualiza la información. Por lo tanto, será un comando de tipo de acción y otro subtipo.

-Créer un équipement « vdm1 » en cliquant sur le +. Actívalo y hazlo visible. Elija un objeto y el equipo debe aparecer en el tablero (dependiendo del objeto).

En este momento, no hay comandos que aparezcan en la pestaña de comandos s, ni en el widget.

Abra el archivo core / class / vdm.class.php y busque la función postSave () (Lea el documento del complemento de plantilla si aún no lo ha hecho)

Creamos los 2 pedidos

````
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
````

-Créer un autre équipement « vdm2 » en cliquant sur le +. En la pestaña de comandos, aparecieron los comandos. Actívalo y hazlo visible. Elija un objeto principal y vea cómo se ve en el tablero.

-Enregistrer le premier équipement « vdm1 » pour créer les commandes. Vea el renderizado en el widgy también.

En la pestaña de comandos, deberías ver.

![image](images/tutorial_vdm_cmd1.png)

Abra el escritorio / php / vdm.php para encontrar el código html de esta tabla.

````
{% raw %}
<a class="btn btn-success btn-sm cmdAction pull-right" data-action="add" style="margin-top:5px;"><i class="fa fa-plus-circle"></i> {{Commandes}}</a><br/><br/>
<table id="table_cmd" class="table table-bordered table-condensed">
    <thead>
        <tr>
            <th>{{Nom}}</th><th>{{Type}}</th><th>{{Action}}</th>
        </tr>
    </thead>
    <tbody>
    </tbody>
</table>
{% endraw %}
````

En el momento de la visualización, es el script de escritorio / js / vdm.js que se llama y lanza la función addCmdToTable.

````
{% raw %}
function addCmdToTable(_cmd) {
    if (!isset(_cmd)) {
        var _cmd = {configuration: {}};
    }
    if (!isset(_cmd.configuration)) {
        _cmd.configuration = {};
    }
    var tr = '<tr class="cmd" data-cmd_id="' + init(_cmd.id) + '">';
    tr += '<td>';
    tr += '<span class="cmdAttr" data-l1key="id" style="display:none;"></span>';
    tr += '<input class="cmdAttr form-control input-sm" data-l1key="name" style="width : 140px;" placeholder="{{Nom}}">';
    tr += '</td>';
    tr += '<td>';
    tr += '<span class="type" type="' + init(_cmd.type) + '">' + jeedom.cmd.availableType() + '</span>';
    tr += '<span class="subType" subType="' + init(_cmd.subType) + '"></span>';
    tr += '</td>';
    tr += '<td>';
    if (is_numeric(_cmd.id)) {
        tr += '<a class="btn btn-default btn-xs cmdAction" data-action="configure"><i class="fa fa-cogs"></i></a> ';
        tr += '<a class="btn btn-default btn-xs cmdAction" data-action="test"><i class="fa fa-rss"></i> {{Tester}}</a>';
    }
    tr += '<i class="fa fa-minus-circle pull-right cmdAction cursor" data-action="remove"></i>';
    tr += '</td>';
    tr += '</tr>';
    $('#table_cmd tbody').append(tr);
    $('#table_cmd tbody tr:last').setValues(_cmd, '.cmdAttr');
    if (isset(_cmd.type)) {
        $('#table_cmd tbody tr:last .cmdAttr[data-l1key=type]').value(init(_cmd.type));
    }
    jeedom.cmd.changeType($('#table_cmd tbody tr:last'), init(_cmd.subType));
}
{% endraw %}
````

Esto se hace automáticamente.

Quiero agregar las opciones de visualización y registro para cada pedido.

Edito el código html de la tabla en el archivo de escritorio.php agregando una columna ..

````
{% raw %}<th>{{Nom}}</th><th>{{Type}}</th><th>{{Configuration}}</th><th>{{Action}}</th>{% endraw %}
````

Luego edite el escritorio.js, encuentra

````
    tr += '<span class="subType" subType="' + init(_cmd.subType) + '"></span>';
    tr += '</td>';
    tr += '<td>';
    if (is_numeric(_cmd.id)) {
````

Agregamos la información deseada.

````
{% raw %}
    tr += '<span class="subType" subType="' + init(_cmd.subType) + '"></span>';
    tr += '</td>';
    tr += '<td>';
    tr += '<span><input type="checkbox" class="cmdAttr checkbox-inline" data-l1key="isHistorized" /> {{Historiser}}<br/></span>';
   tr += '<span><input type="checkbox" class="cmdAttr checkbox-inline" data-l1key="isVisible" /> {{Affichage}}<br/></span>';
   tr += '</td>';
    tr += '<td>';
    if (is_numeric(_cmd.id)) {
{% endraw %}
````

Dejo el botón para crear un pedido, pero quiero que esté a la izquierda..

````
{% raw %}<a class="btn btn-success btn-sm cmdAction pull-right" data-action="add" style="margin-top:5px;"><i class="fa fa-plus-circle"></i> {{Commandes}}</a><br/><br/>{% endraw %}
````

Cambio la clase pull-right a pull-left

````
{% raw %}<a class="btn btn-success btn-sm cmdAction pull-left" data-action="add" style="margin-top:5px;"><i class="fa fa-plus-circle"></i> {{Commandes}}</a><br/><br/>{% endraw %}
````

Aquí está la representación.Las opciones de configuración (pantalla y registro) están presentes.

![image](images/tutorial_vdm_cmd2.png)

Aquí queda recuperar un vdm aleatorio y usar los comandos.


# Recuperación de información

Para recuperar aleatoriamente un vdm.

````
$url = "http://www.viedemerde.fr/aleatoire";
$data = file_get_contents($url);
@$dom = new DOMDocument();
libxml_use_internal_errors(false);
$dom->loadHTML('<?xml encoding="UTF-8">' .$data);
libxml_use_internal_errors(true);
$xpath = new DOMXPath($dom);
$divs = $xpath->query('//article[@class="art-panel col-xs-12"]//div[@class="panel-content"]//p//a');
return $divs[0]->nodeValue ;
````

Abra el archivo core / class / vdm.class.php y para la clase vdm que hereda de los métodos egLogic, creo una función randomVdm

````
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
````

Ahora actualizaremos el comando de información (historia) con esta información iniciando el comando de acción (actualizar).
Todavía en core / class / vdm.class.php para la clase vdmCmd usaremos el método execute

````
public function execute($_options = array()) {


 }
````

C'est aquí qu'on va définir ce qu'il va se passer quand on lance la commande « Rafraîchir ». La clase vdmCmd heredó todos los métodos de la clase cmd (Core jeedom)

On vérifie le logicalIdentificación de la commande lancée y si « refresh » on lance les actions

````
switch ($this->getLogicalId()) {
	case 'refresh': // LogicalIdentificación de la commande rafraîchir que l'on a créé dans la méthode Postsave de la classe vdm .
	// code pour rafraîchir ma commande
	break;
}
````

Ahora queda por iniciar la función randomVdm () . Para hacer esto, recuperamos el eqLogic (equipo) del comando de lanzamiento y lanzamos la función

````
$eqlogic = $this->getEqLogic(); // Récupération de l'eqlogic
$info = $eqlogic-> randomVdm() ; //Lance la fonction y stocke le résultat dans la variable $info
````

On my à jour la commande « story » avec la variable $info. Utilizaremos el método checkAndUpdateCmd de la clase eqlogic

````
$eqlogic->checkAndUpdateCmd('story', $info);
````

Que da al final

````
    public function execute($_options = array()) {
		$eqlogic = $this->getEqLogic(); //récupère l'éqlogic de la commande $this
		switch ($this->getLogicalId()) {	//vérifie le logicalid de la commande
			case 'refresh': // LogicalIdentificación de la commande rafraîchir que l'on a créé dans la méthode Postsave de la classe vdm .
				$info = $eqlogic->randomVdm(); 	//On lance la fonction randomVdm() pour récupérer une vdm y on la stocke dans la variable $info
				$eqlogic->checkAndUpdateCmd('story', $info); // on my à jour la commande avec le LogicalIdentificación "story"  de l'eqlogic
				break;
		}
    }
````

Ahora ve a un dispositivo creado y ejecuta el comando Actualizar. Puis la commande « Histoire » qui doit être à jour.

En el Tablero, aparece información. Haga clic en el icono de actualización para cambiar la información.

Luego definiremos el tamaño del widgy y lo personalizaremos un poco

Luego automatiza la actualización.

# Actualizar información (cron)

El complemento es funcional pero por el momento no hace mucho. Si vous cliquer sur la commande « refresh » , la commande « story » se my à jour mais sinon rien.

Tenga en cuenta que para el orden lo nombro por logicalId. Y es importante. Tener un Identificación. Lógico único por dispositivo (eqLogic) simplifica las cosas.

Ahora veremos cómo actualizar el comando usando las funciones nativas del núcleo : Crons

Hay varios :

- cron : actualizar cada minuto
- Cron5 : actualizar cada 5 minutos
- Cron15 : actualizar cada 15 minutos
- Cron30 : actualizar cada 30 minutos
- CronHourly : eh ... cada hora
- CronDaily : bien 1 / día

Teniendo en cuenta el complemento, actualizaremos cada hora (seamos locos). Entonces usaremos la función CronHourly ().

Por lo tanto, abriremos el archivo vdm.class.PHP y búsqueda

````
    /*
     * Fonction exécutée automatiquement toutes les heures por Jeedom
      public static function cronHourly() {

      }
     */
````

Descomenta el código

````
      public static function cronHourly() {

      }
````

Nuestra función es operativa

Ahora tienes que recuperar todo el equipo de nuestro complemento,

````
self::byType('vdm') //array contenant tous les équipements du plugin
````

y ordenarlos 1 por 1

````
foreach (self::byType('vdm') as $vdm) {
}
````

Antes de hacer nada, verificamos que el equipo esté activo

````
if ($vdm->getIsEnable() == 1) {
}
````

Voila maintenant on recherche la commande « refresh » de l'équipement (eqLogic)

````
$cmd = $vdm->getCmd(null, 'refresh');
````

Si no existe, continuamos el ciclo (foreach), de lo contrario lo ejecutamos

````
if (!is_object($cmd)) {
continue;
}
$cmd->execCmd();
````

Que da al final

````
      public static function CronHourly () {
		  foreach (self::byType('vdm') as $vdm) {//parcours tous les équipements du plugin vdm
			  if ($vdm->getIsEnable() == 1) {//vérifie que l'équipement est actif
				  $cmd = $vdm->getCmd(null, 'refresh');//retourne la commande "refresh si elle existe
				  if (!is_object($cmd)) {//Si la commande n'existe pas
				  	continue; //continue la boucle
				  }
				  $cmd->execCmd(); // la commande existe on la lance
			  }
		  }
      }
````

Pour tester, dans jeedom , aller dans configuration/moteur de tâches y lancer le cron de class « plugin » fonction « CronHourly »
La información se actualiza.

Es bueno pero no me conviene. A la création de l'équipement, la commande « story » ne se my pas à jour.

Entonces mejoramos el código.

Para la creación de los comandos usamos el método postSave (). Utilizaremos el método postUpdate () para actualizar la información.

La forma más fácil ya que solo hay un comando y se crea en postSave

````
    public function postUpdate() {
		$cmd = $this->getCmd(null, 'refresh'); // On recherche la commande refresh de l'équipement
		if (is_object($cmd)) { //elle existe y on lance la commande
			 $cmd->execCmd();
		}
    }
````

Tienes que probar, funciona?

Pero aquí hay una alternativa que puede resultar más útil en casos más complejos.

En la función postUpdate (), iniciamos la función CronHourly () con la identificación del dispositivo

````
    public function postUpdate() {
		self::cronHourly($this->getId());// lance la fonction CronHourly avec l'id de l'eqLogic
    }
````

Pero en este caso cambiamos la función CronHourly ()

````
	public static function cronHourly($_eqLogic_id = null) {
		if ($_eqLogic_id == null) { // La fonction n'a pas d'argument donc on recherche tous les équipements du plugin
			$eqLogics = self::byType('vdm', true);
		} else {// La fonction a l'argument id(unique) d'un équipement(eqLogic)
			$eqLogics = array(self::byId($_eqLogic_id));
		}

		foreach ($eqLogics as $vdm) {
			if ($vdm->getIsEnable() == 1) {//vérifie que l'équipement est acitf
				$cmd = $vdm->getCmd(null, 'refresh');//retourne la commande "refresh si elle existe
				if (!is_object($cmd)) {//Si la commande n'existe pas
				  continue; //continue la boucle
				}
				$cmd->execCmd(); // la commande existe on la lance
			}
		}
	}
````

Luego puede cambiar la frecuencia del cron de acuerdo con la importancia de su información para recuperar.

Solo puedo invitarte a que te tomes el tiempo de visitar esta página para obtener más información. ==> [aquí](https://jeedom.github.io/documentation/phpdoc/index.html)

Y aún mejor ir al núcleo de Github ==> [Aquí](https://github.com/jeedom/core/tree/alpha/core/class)

Pon tu nariz para dominar aún más .

El complemento es funcional como es.

Me tomaré el tiempo para agregar cómo configurar un cron personalizado de acuerdo con el equipo .

# El widget

El widgy no es una tarea fácil, pero por ahora nos quedaremos en el widgy predeterminado.

Si no ha tocado nada, el equipo está activado y visible, el widgy ocupa todo el ancho de la pantalla. Entonces lo cambiaremos.

La commande qui apparaît est la commande «story» de type info , sous-type string

Mi placer es levantarme por la mañana es leer un vdm al despertar. Me permite ver que hay algo peor que yo. :D

Pero no tengo mis lentes y actualmente el renderizado en el widgy no me permite leerlo ...

Donc on va changer le style en affectant un template à la commande « story»

Nada podría ser más simple.

Voy a ver ==> [Aquí](https://github.com/jeedom/core/tree/alpha/core/template/dashboard)

Estoy buscando una plantilla para cmd.info.string (nuestro comando es de tipo info subtipo string) .No es difícil, solo hay dos (predeterminado o mosaico)

J'applique le template « cmd.info.string.tile.html » à ma commande.

Para eso abro el archivo vdm.class.php , fonction postSave() y j'ajoute le template « tile » pour la commande « story » en appliquant la méthode setTemplate()

````
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
````

Actualizar el tablero.

Es mejor, pero el widgy siempre toma el ancho del tablero. Entonces corregiremos. Por défaut la largeur du widgy de l'équipement(eqLogic) y la hauteur sont à « auto ».

Por lo tanto, cambiaremos el ancho del widgy (equipment => eqLogic) usando el método setDisplay () heredado de la clase eqLogic .Dejamos la altura en auto.

Para hacer esto, simplemente agregue

````
$this->setDisplay("width","800px");
````

Si pero !! Porque hay un pero. Intente agregar esto en la función postsave () o postUpdate () y no tendrá en cuenta el cambio. Por qué ? Bueno, lea el documento del complemento de plantilla ==> AQUÍ

Ahora que ha leído correctamente, sabe que debe usar el método preSave ()

````
    public function preSave() {
		$this->setDisplay("width","800px");
    }
````

Registre el equipo y actualice el tablero.


# Los parámetros. Las opciones

> **IMPORTANT**
>
>Este es un capítulo importante y debes entenderlo antes de continuar.

Por el momento, usamos 3 clases del núcleo de la libertad : EqLogic, cmd, cron . Ir para obtener información, agregamos un cuarto con el complemento de clase en el archivo vdm.php que abres y dejas abierto porque vamos a editarlo .

````
$plugin = plugin::byId('vdm'); // appelle la classe plugin du core
````

Tienes que entender que todo se hace para facilitar nuestro trabajo..

Para un parámetro / opción interno del complemento, utilizaremos uno de los métodos de la clase eqLogic del núcleo : setConfiguration () agregando los parámetros deseados. Por ejemplo :

````
$this->setConfiguration("type","mon_type"); // si on veut  définir un paramètre type de valeur mon_type. Comme on a défini la largeur du widgy via la méthode setDisplay()
````

Para dejar la elección al usuario, volvemos al archivo de escritorio.PHP que dejaste abierto porque sigues este TP literalmente :D

Chercher

````
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="city" placeholder="param1"/>
````

Y reemplazar con

````
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/> //Importante de laisser la classe eqLogicAttr
````

Guarde y vaya a un dispositivo de complemento que ya ha creado siguiendo este laboratorio (Actualice si es necesario).

Dans le champs « Paramètre» d'un équipement, taper « aleatoire » y sauvegarder.

Perfecto se guarda la configuración.

![image](images/tutorial_parametre1.png)


Es simple, no? . C'est pourquoi il ne faut surtout pas toucher à cette ligne de code comme indiqué dans le premier menu « test » . El hace todo el trabajo

````
<?php include_file('core', 'plugin.template', 'js');?>//Chargement du fichier core/js/plugin.template.js (en partant de la racine du site)
````

Si observa de cerca el archivo de escritorio.Hace php

````
                    <input type="text" class="eqLogicAttr form-control" data-l1key="id" style="display : none;" /> // retourne l'id(unique) de l'eqLogic(équipement) . Qu'on va pouvoir récupérer via $this->getId() ;
````

````
{% raw %}
                    <input type="text" class="eqLogicAttr form-control" data-l1key="name" placeholder="{{Nombre del equipo}}"/>// retourne le nom de l'eqLogic(équipement) . Qu'on va pouvoir récupérer via $this->getName() ;
{% endraw %}
````

Etc…

Si ha entendido todo esto bien, podremos seguir adelante. Pero primero cambiaremos en el archivo desktop.php

````
{% raw %}
<label class="col-sm-3 control-label">{{Paramètre}}</label>
{% endraw %}
````

Par

````
{% raw %}
<label class="col-sm-3 control-label">{{Type de vdm}}</label>
{% endraw %}
````

Importante : El texto entre llaves corresponde al texto que se traducirá si empuja el complemento en el mercado

Por lo demás, desarrollaremos el complemento eligiendo un tipo de vdm (aleatorio o picante o superior) que queramos, así como un cron personalizado para cada equipo.

# Uso de opciones / parámetros

Para ir más allá y comprender el capítulo anterior, dejaremos que el usuario elija un tipo de vdm (aleatorio o picante o superior)

On pourrait le laisser taper dans l'input « Type de vdm » : al azar o picante o superior, pero haremos lo contrario dejándolo elegir a través de una etiqueta de selección

Si has seguido todo, deberías tenerlo en el archivo desktop.php

````
{% raw %}
       <div class="form-group">
        <label class="col-sm-3 control-label">{{Type de vdm}}</label>
        <div class="col-sm-3">
            <input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/>
        </div>
    </div>
{% endraw %}
````

Que reemplazaremos con

````
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
````

Ici le paramètre « type» prendra la valeur du select choisi soit aleatoire ou epicees ou tops.


Ahora tendremos en cuenta nuestro parámetro en la función randomVdm () en el archivo vdm.class.php

Chercher

````
$url = "http://www.viedemerde.fr/aleatoire";
````

Y reemplazar con

````
	$type = $this->getConfiguration("type ");
		if($type == "") { //si le paramètre est vide ou n'existe pas
			$type = "aleatoire"; //on prends le type aleatoire
		}
		$url = "http://www.viedemerde.fr/" .$type  ;
````

Ahora cambie el valor de la selección en un dispositivo, guarde y vaya al panel de control para ver qué ofrece.
