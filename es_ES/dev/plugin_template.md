# Documentación de plantilla de complemento

Es posible que encuentres una base de datos de complementos vacía [aquí](https://github.com/jeedom/plugin-template)

# Creación de complementos, parte 1 : l'arborescence

Aquí está su estructura: En primer lugar, una carpeta con el nombre de su complemento (su identificador único, más precisamente) que debe contener las siguientes subcarpetas :

- ``3rdparty`` : Carpeta que contiene las bibliotecas externas utilizadas en el complemento (ejemplo para el complemento SMS, una biblioteca para comunicación en serie en PHP).
- ``core`` : Carpeta que contiene todos los archivos operativos internos.
  - ``class`` : Carpeta que contiene la clase de complemento.
  - ``php`` : Carpeta que puede contener funciones que no necesariamente tienen que pertenecer a una clase (a menudo se usa para permitir la inclusión de múltiples clases o archivos de configuración a la vez)).
  - ``config`` : Archivo de configuración del complemento.
  - ``ajax`` : Carpeta que contiene archivos de destino de llamadas AJAX.
  - ``i18n`` : Carpeta que contiene archivos .complemento de traducción json.
  - ``template`` : Carpeta que contiene las plantillas html para mosaicos específicos del equipo del complemento, en el tablero y en las subcarpetas móviles.
- ``desktop`` : Carpeta que contiene la vista "escritorio" del complemento (a diferencia de la vista "móvil"").
  - ``js`` : Carpeta que contiene todos los archivos de tipo javascript para la interfaz del complemento.
  - ``php`` : Carpeta que contiene todos los archivos tipo php para la interfaz del complemento.
  - ``css`` : Si es necesario, todos los archivos CSS del complemento, posiblemente incluidos *fuentes*.
  - ``modal`` : Carpeta que contiene el código de modales del complemento.
  - ``img`` : Carpeta para imágenes (png, jpg, etc.) que necesita el complemento.
- ``plugin_info`` : Contiene los archivos que permiten a Jeedom calificar el complemento, instalarlo y configurarlo.
  - ``info.json`` : Archivo que contiene información básica del complemento .Es obligatorio, de lo contrario Jeedom no verá el complemento. Contiene, entre otras cosas, el identificador del módulo, descripción, instrucciones de instalación, etc
  - ``install.php`` : Archivo que contiene (si es necesario) los métodos de instalación y desinstalación del complemento.
  - ``configuration.php`` : Archivo que contiene los parámetros a configurar del plugin independientemente de su equipo (ejemplo para el módulo Zwave la IP de la Raspberry Pi que tiene la tarjeta Razberry)
- ``docs`` : Debe contener el documento del complemento en formato Markdown, la raíz y el archivo index.md. Todas las imágenes están en documentos/imágenes. El documento en sí está en una carpeta según el idioma (por ejemplo, en francés) : ``docs/fr\_FR``)
- ``ressources`` : Carpeta para posibles demonios y dependencias.
- ``data`` : Carpeta utilizada para archivos generados por el complemento Jeedom del usuario.

En cuanto a la convención de nomenclatura de archivos, aquí están las
imperativos :

- Los archivos de clase php deben terminar con ``.class.php``
- Si esto no es manejado por un archivo de inclusión, el nombre del archivo debe ser ``nom\_class.class.php``
- Los archivos que sirven sólo como punto de entrada para incluir varios archivos deben terminar con ``.inc.php``
- Los archivos de configuración deben terminar con ``.config.php``

Aquí están las recomendaciones :

- Los archivos tipo AJAX deben terminar en ``.ajax.php``
- el nombre de la primera página de visualización de un complemento debe ser el mismo que el ID del complemento
- el nombre del archivo JS (si lo hay) de la primera página de vista del complemento debe ser el ID del complemento

# Creación de complementos, parte 2 : carpeta de información del complemento

## ``info.json``

Ver [aquí](https://doc.jeedom.com/es_ES/dev/structure_info_json)

## ``install.php``

Archivo con instrucciones de instalación para un complemento :

Está compuesto de la siguiente manera :

La primera parte comentada contiene la licencia (es mejor). El usado aquí indica que el archivo pertenece a Jeedom y que es de código abierto Luego viene la inclusión del núcleo de Jeedom (esto permite el acceso a las funciones internas) Luego vienen las 3 funciones :

- ``pluginid_install()`` : método para instalar el complemento. Aquí la instalación agrega una tarea cron a Jeedom
- ``pluginid_update()`` : método para instalar el complemento. Se utiliza aquí para reiniciar el trabajo cron
- ``pluginid_remove()`` : método para eliminar el complemento. Aquí la función elimina el trabajo cron de Jeedom durante la desinstalación

Ejemplo :

````php
<?php
/* Este archivo es parte de Jeedom.
 *
 * Jeedom es software libre: puedes redistribuirlo y/o modificarlo
 * bajo los términos de la Licencia Pública General GNU publicada por
 * la Free Software Foundation, ya sea la versión 3 de la Licencia, o
 * (a su elección) cualquier versión posterior.
 *
 * Jeedom se distribuye con la esperanza de que sea útil,
 * pero SIN NINGUNA GARANTÍA; sin siquiera la garantía implícita de
 * COMERCIABILIDAD o IDONEIDAD PARA UN PROPÓSITO PARTICULAR. Ver el
 * Licencia pública general GNU para más detalles.
 *
 * Debería haber recibido una copia de la Licencia Pública General GNU
 * junto con Jeedom. If not, see <http://www.gnu.org/licenses/>.
 */
require_once nombredir(__FILE__) . '/../../../core/php/core.inc.php';

función openzwave_install() {
    $cron = cron::byClassAndFunction('zwave', 'pull');
    si (!es_objeto($cron)) {
        $cron = new cron();
        $cron->setClass('zwave');
        $cron->setFunction('pull');
        $cron->setEnable(1);
        $cron->setDeamon(1);
        $cron->setSchedule('* * * * *');
        $cron->save();
    }
}

función openzwave_update() {
    $cron = cron::byClassAndFunction('zwave', 'pull');
    si (!es_objeto($cron)) {
        $cron = new cron();
        $cron->setClass('zwave');
        $cron->setFunction('pull');
        $cron->setEnable(1);
        $cron->setDeamon(1);
        $cron->setSchedule('* * * * *');
        $cron->save();
    }
    $cron->stop();
}

función openzwave_remove() {
    $cron = cron::byClassAndFunction('zwave', 'pull');
    si (is_object($cron)) {
        $cron->remove();
    }
}
?>
````

## ``configuration.php``

Fichier permettant de demander des informations de configuration à l'utilisateur :

Le fichier est constitué de :

- La licence comme précédemment
- L'inclusion du core de Jeedom
- La vérification que l'utilisateur est bien connecté (j'inclue le fichier 404 car ce fichier est un fichier de type vue)

Ensuite vient le paramètre demandé (il peut en avoir plusieurs), c'est une syntaxe standard Bootstrap pour les formulaires, les seules particularités à respecter sont la classe (``configKey``) à mettre sur l'élément de paramètre ainsi que le "data-l1key" qui indique le nom du paramètre. Pour récupérer la valeur de celui-ci ailleurs dans le plugin il suffit de faire : ``config::byKey(NOM_PARAMETRE, PLUGIN_ID)``

Ejemplo :

````php
<?php
/* Este archivo es parte de Jeedom.
 *
  * Jeedom es software libre: puedes redistribuirlo y/o modificarlo
 * bajo los términos de la Licencia Pública General GNU publicada por
 * la Free Software Foundation, ya sea la versión 3 de la Licencia, o
 * (a su elección) cualquier versión posterior.
 *
 * Jeedom se distribuye con la esperanza de que sea útil,
 * pero SIN NINGUNA GARANTÍA; sin siquiera la garantía implícita de
 * COMERCIABILIDAD o IDONEIDAD PARA UN PROPÓSITO PARTICULAR. Ver el
 * Licencia pública general GNU para más detalles.
 *
  * Debería haber recibido una copia de la Licencia Pública General GNU
 * junto con Jeedom. If not, see <http://www.gnu.org/licenses/>.
  */

 require_once nombredir(__FILE__) . '/../../../core/php/core.inc.php';
include_file('núcleo', 'autenticación', 'php');
si (!isConnect()) {
    include_file('desktop', '404', 'php');
    die();
 }
 ?>
 <form class="form-horizontal">
     <fieldset>
         <div class="form-group">
             <label class="col-lg-2 control-label">Zway IP</label>
             <div class="col-lg-2">
                 <input class="configKey form-control" data-l1key="zwaveAddr" />
             </div>
         </div>
         <div class="form-group">
             <label class="col-lg-4 control-label">Supprimer automatiquement les périphériques exclus</label>
             <div class="col-lg-4">
                 <input type="checkbox" class="configKey" data-l1key="autoRemoveExcludeDevice" />
             </div>
         </div>
         <div class="form-group">
             <label class="col-lg-4 control-label">J'utilise un serveur openzwave</label>
             <div class="col-lg-4">
                 <input type="checkbox" class="configKey" data-l1key="isOpenZwave" />
             </div>
         </div>
     </fieldset>
 </form>
 ````

# Creación de complementos, parte 3 : carpeta de escritorio

## PHP

Esta carpeta contiene la vista en sí. Dentro necesariamente encontramos la página de configuración del complemento (la que aparecerá cuando el usuario haga el complemento ⇒ categoría ⇒ su complemento). Es recomendable nombrarlo con el id de tu complemento. También puede contener el panel (página que el usuario encontrará en inicio → nombre de su complemento).

Todos los archivos de esta carpeta deben terminar ``.php`` y debe comenzar con :

````php
<?php
si (!isConnect('admin')) {
    lanzar nueva excepción ('{{401 - Acceso no autorizado}}');
 }
 sendVarToJS('eqType', 'correo');
 ?>
 ````

Une fois sur cette page vous aurez accès en PHP à toutes les fonctions du core de jeedom (voir [aquí](https://www.jeedom.com/doc/documentation/code/) ) ainsi qu'à celles de tous les modules installés donc le vôtre aussi.

Toutes ces pages étant des vues elles utilisent principalement la syntaxe HTML. Pour tout ce qui est présentation, Jeedom se base principalement sur bootstrap donc toute la [documentation](http://getbootstrap.com/) est applicable.

Pour simplifier la création de plugin vous pouvez inclure dans votre page le script javascript de template pour les plugins :

````php
<?PHP include_file('core', 'plugin.template', 'js'); ?>
````

Se colocará en la parte inferior de su página y solo será útil en la página de configuración de su complemento. Este script le permite reducir el javascript obligatorio a una sola función (ver parte sobre archivos JS).

En su página de configuración se ha implementado una sintaxis HTML para simplificar su vida. Entonces, para la mayoría de los complementos, solo tendrás que usar HTML para almacenar tu información en la base de datos y, por lo tanto, usarla en tu clase.

La sintaxis es bastante simple: su elemento (input, select...) debe tener la clase css eqLogicAttr (o cmdAttr para comandos) y un atributo que indique el nombre de la propiedad :

````html
<input type="text" class="eqLogicAttr form-control" data-l1key="name" placeholder="{{Nom de l'équipement mail}}"/>
````

Là, par exemple, lors du chargement des données jeedom mettra la valeur du nom de l'équipement dans l'input et lors de la sauvegarde récupérera celle-ci pour la remettre en base de données. Petite astuce certaines propriétés sont en fait des chaînes JSON en BDD (cela permet d'avoir vraiment pas mal de liberté pour le plugin), dans ce cas il suffit de faire :

````html
<input class="eqLogicAttr form-control" data-l1key='configuration' data-l2key='fromName' />
````

Para ver la lista de propiedades de equipos y comandos está aquí (para ver las propiedades que son JSON, simplemente mire el getter o el setter, si toma 2 parámetros entonces es JSON)

Último punto importante en la página de configuración: Esto puede contener tanto equipo y controles como sea necesario. Sin embargo, hay algunas reglas a seguir :

Todos los elementos que tienen la clase eqLogicAttr deben estar en un elemento que tiene la clase css eqLogic. Lo mismo ocurre con los elementos de la clase css cmdAttr, que deben estar en un elemento de la clase cmd. Todos los comandos de un equipo deben encontrarse en el elemento con la clase eqLogic correspondiente

## JS

Todos los archivos JS deben estar en la carpeta JS (fácil !!!). Es recomendable nombrarlo con el mismo ID que tu plugin (en la parte de configuración, para el panel haces lo que quieras). Este archivo JS (el de la configuración del complemento) debe contener al menos un método addCmdToTable que toma el objeto de comando a agregar como parámetro. Aquí hay un ejemplo sencillo :

````php
función agregarCmdToTable(_cmd) {
    si (!isset(_cmd)) {
        var _cmd = {configuración: {}};
     }
    var tr = ''; tr += '';
     tr+= ' : ninguno;">';
    tr+= '<input class="cmdAttr form-control input-sm" data-l1key="name"> '; tr+= '<input class="cmdAttr form-control input-sm" data-l1key="configuration" data-l2key="recipient"> '; tr += '';
     tr+=' : ninguno;">';
     tr+= ' : ninguno;">';
     si (is_numeric(_cmd.id)) {
        tr+=' <a class="btn btn-default btn-xs cmdAction" data-action="test"><i class="fa fa-rss"></i>{{Prueba}}</a> ';
     }
     tr+='<i class="fa fa-minus-circle pull-right cmdAction cursor" data-action="remove"></i></td> ';
    tr += '';
     $('#table_cmd tbody').append(tr);
    $('#table_cmd tbody tr:last').setValues(_cmd, '.cmdAttr');
}
````

Vous remarquerez qu'il y a une ligne par commande et que celle-ci a bien la classe css cmd. Vous pouvez aussi voir les éléments qui ont la classe cmdAttr.

Plusieurs points importants :

- cette fonction peut être appelée avec un objet vide (d'où les 3 premières lignes) lors de l'ajout d'une nouvelle commande
- la dernière ligne permet d'initialiser tous les champs une fois la ligne insérée

Dernier point: un exemple plus complet avec type et sous-type de commande :

````php
función agregarCmdToTable(_cmd) {
    si (!isset(_cmd)) {
        var _cmd = {};
    }
     si (!isset(_cmd.configuration)) {
        _cmd.configuration = {};
    }
     var selRequestType = '<select style="width : 90px;" class="cmdAttr form-control input-sm" data-l1key="configuration" data-l2key="requestType">';
     selRequestType += '<option value="script">{{Script}}</option>';
     selRequestType += '<option value="http">{{Http}}</option>';
     selRequestType += '</select>';
    var tr = '';     tr += '<input class="cmdAttr form-control input-sm" data-l1key="name" style="width : 140px;">';
    tr += '<input class="cmdAttr form-control input-sm" data-l1key="id"  style="display : ninguno;">';
    tr += '' + selRequestType;
    tr += '<div class="requestTypeConfig" data-type="http">';
    tr += '<input type="checkbox" class="cmdAttr" data-l1key="configuration" data-l2key="noSslCheck" />Ne pas vérifier SSL';
    tr += '</div>';
    tr += '';     tr += '';
    tr += '<span class="type" type="' + init(_cmd.type) + '">' + jeedom.cmd.availableType() + '</span>';
    tr += '<span class="subType" subType="' + init(_cmd.subType) + '"></span>';
    tr += '';     tr += '<textarea style="height : 95px;" class="cmdAttr form-control input-sm" data-l1key="configuration" data-l2key="request"></textarea>';
    tr += '<a class="btn btn-default browseScriptFile cursor input-sm" style="margin-top : 5px;"><i class="fa fa-folder-open"></i> {{Parcourir}}</a> ';
    tr += '<a class="btn btn-default editScriptFile cursor input-sm" style="margin-top : 5px;"><i class="fa fa-edit"></i> {{Editer}}</a> ';
    tr += '<a class="btn btn-success newScriptFile cursor input-sm" style="margin-top : 5px;"><i class="fa fa-file-o"></i> {{Nouveau}}</a> ';
    tr += '<a class="btn btn-danger removeScriptFile cursor input-sm" style="margin-top : 5px;"><i class="fa fa-trash-o"></i> {{Supprimer}}</a> ';
    tr += '<a class="btn btn-warning bt_shareOnMarket cursor input-sm" style="margin-top : 5px;"><i class="fa fa-cloud-upload"></i> {{Partager}}</a> ';
    tr += '</div>';
    tr += '';     tr += '';
    tr += '<input class="cmdAttr form-control tooltips input-sm" data-l1key="unite"  style="width : 100px;" placeholder="{{Unité}}" title="{{Unité}}">';
    tr += '<input class="tooltips cmdAttr form-control input-sm" data-l1key="configuration" data-l2key="minValue" placeholder="{{Min}}" title="{{Min}}"> ';
    tr += '<input class="tooltips cmdAttr form-control input-sm" data-l1key="configuration" data-l2key="maxValue" placeholder="{{Max}}" title="{{Max}}">';
    tr += '';     tr += '';
    tr += '<span><input type="checkbox" class="cmdAttr" data-l1key="isHistorized" /> {{Historiser}}<br/></span>';
    tr += '';     tr += '';
    si (is_numeric(_cmd.id)) {
    tr+=' <a class="btn btn-default btn-xs cmdAction" data-action="test"><i class="fa fa-rss"></i>{{Prueba}}</a> ';
    }
    tr+='<i class="fa fa-minus-circle pull-right cmdAction cursor" data-action="remove"></i></td> ';
    tr += '';
    $('#table_cmd tbody').append(tr);
    $('#table_cmd tbody tr:last').setValues(_cmd, '.cmdAttr');

    si (isset(_cmd.configuration.requestType)) {
        $('#table_cmd tbody tr:last .cmdAttr[data-l1key=configuration][data-l2key=requestType]').value(init(_cmd.configuration.requestType));
        $('#table_cmd tbody tr:last .cmdAttr[data-l1key=configuration][data-l2key=requestType]').trigger('change');
    }

     si (isset(_cmd.type)) {
        $('#table_cmd tbody tr:last .cmdAttr[data-l1key=type]').value(init(_cmd.type));
    }
     jeedom.cmd.changeType($('#table_cmd tbody tr:last'), init(_cmd.subType));
    initTooltips();
}
````

Aquí podemos notar :

- ``jeedom.cmd.availableType()`` insertará una selección con la lista de tipos conocidos (acción e información por el momento))
- ``<span class="subType" subType="' + init(\_cmd.subType) + '"><\span>`` : el lugar donde se debe colocar la selección de subtipo
- ``jeedom.cmd.changeType(\$('\#table\_cmd tbody tr:last'), init(\_cmd.subType))`` que le permite inicializar el subtipo con el valor correcto

Se pueden utilizar otras funciones de JavaScript :

- ``printEqLogic`` que toma como parámetro todo el objeto del equipo (útil en caso de procesamiento de datos antes de restaurarlos)). Se llama cuando se muestran datos del equipo
- ``saveEqLogic`` que toma como parámetro el objeto del equipo que se guardará en la base de datos (útil si necesita realizar un procesamiento antes de guardar) Lo último, para los archivos JS, aquí se explica cómo incluirlos de forma limpia en su página PHP :

````php
<?PHP include_file('desktop', 'weather', 'js', 'weather'); ?>
````

Le premier argument donne le dossier dans lequel le trouver (attention c'est le dossier père du dossier JS), le deuxième le nom de votre javascript, le troisième indique à Jeedom que c'est un fichier J.S. et le dernier dans quel plugin il se trouve.

## CSS

Ce dossier contient vos fichiers CSS (il ne devrait pas être trop utilisé) , voaquí comment les inclure sur votre page :

````php
<?PHP include_file('desktop', 'weather', 'css', 'weather'); ?>
````

El primer argumento proporciona la carpeta donde encontrarlo (tenga cuidado, es la carpeta principal de la carpeta CSS), el segundo el nombre de su archivo css, el tercero le dice a Jeedom que es un archivo CSS y el último en qué complemento resulta.

## MODAL

La carpeta modal le permite almacenar sus archivos php destinados a mostrar modales. Aquí se explica cómo llamarlos desde su página principal (este código va en un archivo javascript) :

Podemos ver :

````js
$('#md_modal').dialog({title: "{{Classe du périphérique}}"}).load('index.php?v=d&plugin=zwave&modal=show.class&id=' + $('.eqLogicAttr[data-l1key=id]').value()).dialog('open')
````

La première ligne permet de mettre un titre à votre modal

La deuxième ligne charge votre modal et l'affichage. La sintaxis es bastante simple : plugin, l'identificación de votre plugin, modal, le nom de votre modal sans le PHP et ensuite les paramètres que vous voulez lui passer

## API JS

Ce n'est pas un dossier mais dans les dernières versions de Jeedom celui-ci offre au développeur toute une api javascript (cela évite d'écrire des appels ajax dans tous les sens). J'essayerai de faire un article pour expliquer les différentes fonctionnalités mais vous pouvez déjà trouver le code aquí.

Voilà pour les détails du carpeta de escritorio. Je me doute qu'il n'est pas des plus complets (j'essayerai de le compléter en fonction des différentes demandes reçues) mais j'espère que grâce à lui vous pourrez commencer à faire des plugins pour Jeedom.

## Trucs et astuces

### Assitant cron

````js
$('body').delegate('.helpSelectCron','click',function() {
  var el = $(this).closest('.schedule').find('.scenarioAttr[data-l1key=schedule]')
  jeedom.getCronSelectModal({},function (result) {
    el.value(result.value)
  })
})
````

Cuando hacemos clic en el botón del asistente, recuperamos la entrada en la que escribir y luego llamamos al asistente. Una vez finalizada la configuración en el asistente, el resultado se recupera y luego se escribe en la entrada previamente seleccionada

# Creación de complementos, parte 4 : carpeta principal

Con diferencia, la carpeta más importante de tu complemento, puede tener 4 subcarpetas.

Nota : A lo largo de esta parte, la identificación de su complemento será referenciada por : complemento\_id

## PHP

Contiene los archivos PHP adicionales. Me acostumbré a poner, por ejemplo, un archivo de inclusión si, por supuesto, tienes varios archivos de clase o de terceros para incluir

## Template

Que puede contener 2 subcarpetas, panel y móvil, es una carpeta que Jeedom escanea automáticamente en busca de widgets, por lo que si usa widgets específicos aquí es donde debe colocar su archivo HTML

## i18n

Aquí es donde debe estar tu traducción en forma de archivo json (lo mejor es mirar el complemento, por ejemplo) [onda z](https://github.com/jeedom/plugin-openzwave) para ver la forma del archivo)

## ajax

Esta carpeta es para todos sus archivos ajax, aquí hay un archivo ajax esqueleto :

````php
<?php

/* Este archivo es parte de Jeedom.
 *
 * Jeedom es software libre: puedes redistribuirlo y/o modificarlo
 * bajo los términos de la Licencia Pública General GNU publicada por
 * la Free Software Foundation, ya sea la versión 3 de la Licencia, o
 * (a su elección) cualquier versión posterior.
 *
 * Jeedom se distribuye con la esperanza de que sea útil,
 * pero SIN NINGUNA GARANTÍA; sin siquiera la garantía implícita de
 * COMERCIABILIDAD o IDONEIDAD PARA UN PROPÓSITO PARTICULAR. Ver el
 * Licencia pública general GNU para más detalles.
 *
 * Debería haber recibido una copia de la Licencia Pública General GNU
 * junto con Jeedom. If not, see <http://www.gnu.org/licenses/>.
 */

intentar {
    require_once nombredir(__FILE__) . '/../../../../core/php/core.inc.php';
    include_file('núcleo', 'autenticación', 'php');

    si (!isConnect('admin')) {
        lanzar nueva excepción (__('401 - Acceso no autorizado', __FILE__));
    }

    if (init('acción') == 'tu acción') {
        ajax::éxito($resultado);
    }

    lanzar nueva excepción (__ ('No hay coincidencia de método : ', __ARCHIVO__) . init('acción'));
    /*     * *********Lucha excepcional*************** */
} captura (Excepción $e) {
    ajax::error(displayExeption($e), $e->getCode());
}
?>
````

## class

Dossier très important, c'est le moteur de votre plugin. C'est là que viennent les 2 classes obligatoires de votre plugin :

- ``complemento\_id``
- ``complemento\_idCmd``

La première devant hériter de la classe eqLogic et la deuxième de cmd. Voaquí un template :

````php
<?php

/* Este archivo es parte de Jeedom.
 *
 * Jeedom es software libre: puedes redistribuirlo y/o modificarlo
 * bajo los términos de la Licencia Pública General GNU publicada por
 * la Free Software Foundation, ya sea la versión 3 de la Licencia, o
 * (a su elección) cualquier versión posterior.
 *
 * Jeedom se distribuye con la esperanza de que sea útil,
 * pero SIN NINGUNA GARANTÍA; sin siquiera la garantía implícita de
 * COMERCIABILIDAD o IDONEIDAD PARA UN PROPÓSITO PARTICULAR. Ver el
 * Licencia pública general GNU para más detalles.
 *
 * Debería haber recibido una copia de la Licencia Pública General GNU
 * junto con Jeedom. If not, see <http://www.gnu.org/licenses/>.
 */

/* * ***************************Includes********************************* */
require_once nombredir(__FILE__) . '/../../../../core/php/core.inc.php';

class plugin_identificación extends eqLogic {

    /*     * *************************Attributs****************************** */


    /*     * ***********************Methode static*************************** */


    /*     * *********************Methode d'instance************************* */


    /*     * **********************Getteur Setteur*************************** */

}

class plugin_idCmd extends cmd {

    /*     * *************************Attributs****************************** */


    /*     * ***********************Methode static*************************** */


    /*     * *********************Methode d'instance************************* */


    /*     * **********************Getteur Setteur*************************** */

}

?>
````

Para la definición de clases de jeedom, los invito a consultar esto [sitio](https://doc.jeedom.com/dev/phpdoc/4.0/)

El único método obligatorio es el método de instancia en la clase de ejecución cmd. Aquí hay un ejemplo con el complemento SARAH :

````php
función pública ejecutar ($_options = matriz()) {
      si (!isset($_options['título']) && !isset($_opciones['mensaje'])) {
          throw new Exception(__("El título o el mensaje no pueden estar vacíos", __FILE__));
      }
      $eqLogic = $this->getEqLogic();
      $message = '';
      si (isset($_options['título'])) {
          $message = $_options['title'] . '. ';
      }
      $message .= $_options['message'];
      $http = new com_http($eqLogic->getConfiguration('addrSrvTts') . '/?tts=' . urlencode($message));
      devolver $http->exec();
  }
  ````

Ejemplo assez simple mais complet, le principe est le suivant, si la commande est une action ou une info (mais pas en événement seulement et que son oculto est dépassé) alors jeedom appelle cette méthode.

Dans notre exemple aquí c'est une commande pour faire parler S.A.R.A.H, où le plugin récupère les paramètres dans \$\_options (attention c'est un tableau et ses attributs changent en fonction du sous-type de la commande : color pour un sous-type color, slider pour un sous-type slider, title et message pour un sous-type message et vide pour un sous-type other).

Voila pour la partie obligatoire, voila maintenant ce qui peut être utilisé à coté (avec exemple) :

### toHtml(\$\_version = 'dashboard')

Fonction utilisable dans la commande ou dans l'équipement, en fonction des besoins, voaquí un exemple pour l'équipement

````php
public function toHtml($_version = 'dashboard') {
    $replace = $this->preToHtml($_version);
    si (!is_array($replace)) {
        return $replace;
    }
    $version = jeedom::versionAlias($_version);
    $replace['#forecast#'] = '';
    si ($version != 'mobile' || $this->getConfiguration('fullMobileDisplay', 0) == 1) {
        $forcast_template = getTemplate('core', $version, 'forecast', 'weather');
        for ($i = 0; $i < 5; $i++) {
            $replaceDay = array();
            $replaceDay['#day#'] = date_fr(date('l', strtotime('+' . $i . ' days')));

            si ($i == 0) {
                $temperature_min = $this->getCmd(null, 'temperature_min');
            } else {
                $temperature_min = $this->getCmd(null, 'temperature_' . $i . '_min');
            }
            $replaceDay['#low_temperature#'] = is_object($temperature_min) ? $temperature_min->execCmd() : '';

            si ($i == 0) {
                $temperature_max = $this->getCmd(null, 'temperature_max');
            } else {
                $temperature_max = $this->getCmd(null, 'temperature_' . $i . '_max');
            }
            $replaceDay['#hight_temperature#'] = is_object($temperature_max) ? $temperature_max->execCmd() : '';
            $replaceDay['#tempid#'] = is_object($temperature_max) ? $temperature_max->getId() : '';

            si ($i == 0) {
                $condition = $this->getCmd(null, 'condition');
            } else {
                $condition = $this->getCmd(null, 'condition_' . $i);
            }
            $replaceDay['#icone#'] = is_object($condition) ? self::getIconFromCondition($condition->execCmd()) : '';
            $replaceDay['#conditionid#'] = is_object($condition) ? $condition->getId() : '';
            $replace['#forecast#'] .= template_replace($replaceDay, $forcast_template);
        }
    }
    $temperature = $this->getCmd(null, 'temperature');
    $replace['#temperature#'] = is_object($temperature) ? $temperature->execCmd() : '';
    $replace['#tempid#'] = is_object($temperature) ? $temperature->getId() : '';

    $humidity = $this->getCmd(null, 'humidity');
    $replace['#humidity#'] = is_object($humidity) ? $humidity->execCmd() : '';

    $pressure = $this->getCmd(null, 'pressure');
    $replace['#pressure#'] = is_object($pressure) ? $pressure->execCmd() : '';
    $replace['#pressureid#'] = is_object($pressure) ? $pressure->getId() : '';

    $wind_speed = $this->getCmd(null, 'wind_speed');
    $replace['#windspeed#'] = is_object($wind_speed) ? $wind_speed->execCmd() : '';
    $replace['#windid#'] = is_object($wind_speed) ? $wind_speed->getId() : '';

    $sunrise = $this->getCmd(null, 'sunrise');
    $replace['#sunrise#'] = is_object($sunrise) ? $sunrise->execCmd() : '';
    $replace['#sunid#'] = is_object($sunrise) ? $sunrise->getId() : '';
    si (strlen($replace['#sunrise#']) == 3) {
        $replace['#sunrise#'] = substr($replace['#sunrise#'], 0, 1) . ':' . substr($replace['#sunrise#'], 1, 2);
    } else si (strlen($replace['#sunrise#']) == 4) {
        $replace['#sunrise#'] = substr($replace['#sunrise#'], 0, 2) . ':' . substr($replace['#sunrise#'], 2, 2);
    }

    $sunset = $this->getCmd(null, 'sunset');
    $replace['#sunset#'] = is_object($sunset) ? $sunset->execCmd() : '';
    si (strlen($replace['#sunset#']) == 3) {
        $replace['#sunset#'] = substr($replace['#sunset#'], 0, 1) . ':' . substr($replace['#sunset#'], 1, 2);
    } else si (strlen($replace['#sunset#']) == 4) {
        $replace['#sunset#'] = substr($replace['#sunset#'], 0, 2) . ':' . substr($replace['#sunset#'], 2, 2);
    }

    $wind_direction = $this->getCmd(null, 'wind_direction');
    $replace['#wind_direction#'] = is_object($wind_direction) ? $wind_direction->execCmd() : 0;

    $refresh = $this->getCmd(null, 'refresh');
    $replace['#refresh_id#'] = is_object($refresh) ? $refresh->getId() : '';

    $condition = $this->getCmd(null, 'condition_now');
    $sunset_time = is_object($sunset) ? $sunset->execCmd() : null;
    $sunrise_time = is_object($sunrise) ? $sunrise->execCmd() : null;
    si (is_object($condition)) {
        $replace['#icone#'] = self::getIconFromCondition($condition->execCmd(), $sunrise_time, $sunset_time);
        $replace['#condition#'] = $condition->execCmd();
        $replace['#conditionid#'] = $condition->getId();
        $replace['#collectDate#'] = $condition->getCollectDate();
    } else {
        $replace['#icone#'] = '';
        $replace['#condition#'] = '';
        $replace['#collectDate#'] = '';
    }
    si ($this->getConfiguration('modeImage', 0) == 1) {
        $replace['#visibilityIcon#'] = "none";
        $replace['#visibilityImage#'] = "block";
    } else {
        $replace['#visibilityIcon#'] = "block";
        $replace['#visibilityImage#'] = "none";
    }
    $HTML = template_replace($replace, getTemplate('core', $version, 'current', 'weather'));
    cache::set('widgetHtml' . $_version . $this->getId(), $html, 0);
    return $html;
}
````

Varias cosas interesantes aquí :

Para convertir la versión solicitada en un tablero o en un dispositivo móvil (mview se convierte en móvil, por ejemplo), esto permite, por ejemplo, agregar en las vistas el nombre de los objetos)

````php
$_version = jeedom::versionAlias($_version);
````

Récupération d'un template de commande, aquí le template de commande : plugins/weather/core/template/\$\_version/forecast.HTML (\$\_version valant mobile ou dashboard)

````php
$forcast_template = getTemplate('core', $_version, 'forecast', 'weather');
````

Aquí reemplazo de etiquetas previamente completadas \$reemplazar HTML para contener los valores

````php
$html_forecast .= template_replace($replace, $forcast_template);
````

Cela permet de récupérer la commande ayant le logical\_identificación : temperature\_min

````php
$this->getCmd(null, 'temperature_min');
````

Allí esto te permite poner el valor en la etiqueta, sólo si el pedido ha sido recuperado

````php
$replace['#temperature#'] = is_object($temperature) ? $temperature->execCmd() : '';
````

Passage important: cela permet de récupérer les personnalisations faites par l'utilisateur sur la page Générale → Affichage et de les réinjecter dans le template

````php
$parameters = $this->getDisplay('parameters');
si (is_array($parameters)) {
    foreach ($parameters as $key => $value) {
        $replace['#' . $key . '#'] = $value;
    }
}
````

Guardar widget en caché: para que durante la próxima solicitud lo proporcionemos más rápidamente, podemos notar el 0 aquí que indica una vida útil infinita, de lo contrario la duración es en segundos (veremos en la siguiente parte cómo el complemento meteorológico actualiza su widget).

````php
cache::set('climaWidget' . $_version . $this->getId(), $html, 0);
````

Enfin envoi du HTML à Jeedom :

````php
return $html;
````

También debes decirle a Jeedom qué permite tu widget en términos de personalización. Es un poco complejo (y aún así), pero normalmente flexible y sencillo de configurar.

Funciona de la misma manera en tu dispositivo o comando, es un atributo estático de la clase \$\_widgetPossibility que debe ser una matriz multidimensional, pero aquí es donde se complica si una dimensión de la matriz es verdadera o falsa. Luego considera que todos los hijos posibles tienen este valor (daré un ejemplo).

En primer lugar, los casos en los que es necesario utilizarlo: si en tu clase hereda de eqLogic o cmd tiene una función toHtml en caso contrario no vale la pena leer más.

### Método previo y posterior

Al crear o eliminar sus objetos (equipo, pedido u otros) en Jeedom, puede llamar a varios métodos antes/después de la acción :

- ``preInsert`` ⇒ Método llamado antes de crear su objeto
- ``postInsert`` ⇒ Método llamado después de crear su objeto
- ``preUpdate`` ⇒ Método llamado antes de actualizar su objeto
- ``postUpdate`` ⇒ Método llamado después de actualizar su objeto
- ``preSave`` ⇒ Método llamado antes de guardar (creación y actualización, por lo tanto) de su objeto
- ``postSave`` ⇒ Método llamado después de guardar su objeto
- ``preRemove`` ⇒ Método llamado antes de eliminar su objeto
- ``postRemove`` ⇒ Método llamado después de eliminar su objeto

Ejemplo, todavía con el complemento meteorológico de crear comandos o actualizarlos después de guardar (el ejemplo está simplificado) :

````php
publicación de función públicaActualización() {
      $weatherCmd = $this->getCmd(null, 'temperature');
      si (!is_object($climaCmd)) {
          $weatherCmd = new weatherCmd();
      }
      $weatherCmd->setName(__('Température', __FILE__));
      $weatherCmd->setLogicalId('temperature');
      $weatherCmd->setEqLogic_id($this->getId());
      $weatherCmd->setConfiguration('day', '-1');
      $weatherCmd->setConfiguration('data', 'temp');
      $weatherCmd->setUnite('°C');
      $weatherCmd->setType('info');
      $weatherCmd->setSubType('numeric');
      $weatherCmd->save();

      $cron = cron::byClassAndFunction('weather', 'updateWeatherData', array('weather_id' => intval($this->getId())));
      si (!es_objeto($cron)) {
          $cron = new cron();
          $cron->setClass('weather');
          $cron->setFunction('updateWeatherData');
          $cron->setOption(array('weather_id' => intval($this->getId())));
      }
      $cron->setSchedule($this->getConfiguration('refreshCron', '*/30 * * * *'));
      $cron->save();
}
````

Le début est assez standard avec la création d'une commande, la fin est plus intéressante avec la mise en place d'un cron qui va appeler la méthode ``weather::updateWeatherData`` en passant l'identificación de l'équipement à mettre à jour toute les 30min par défaut.

Ici la méthode updateWeatherData (simplifiée aussi) :

````php
public static function updateWeatherData($_options) {
  $weather = weather::byId($_options['weather_id']);
  si (is_object($weather)) {
      foreach ($weather->getCmd('info') as $cmd) {
        $weather->checkAndUpdateCmd($cmd,$cmd->execute());
      }
  }
}
````

Vemos aquí que durante la llamada recuperamos el equipo en cuestión y luego ejecutamos los comandos para recuperar los valores y actualizarlos si es necesario.

Parte muy importante :

````php
$weather->checkAndUpdateCmd($cmd,$cmd->execute());
````

Au moment de la fonction ``checkAndUpdateCmd`` (qui permet de signaler à Jeedom une nouvelle mise à jour de la valeur, avec déclenchement de toutes les actions qui doivent être faites : mise à jour du dashboard, vérification des scénarios…​),

Pour la classe commande, un petit truc à savoir si vous utilisez le template js de base. Lors de l'envoi de l'équipement Jeedom fait du différentiel sur les commandes et va supprimer celles qui sont en base mais pas dans la nouvelle définition de l'équipement. Voilà comment l'éviter :

````php
public function dontRemoveCmd() {
  return true;
}
````

Finalmente, aquí tienes algunos consejos y trucos :

- Evite (a menos que sepa lo que está haciendo) anular un método de la clase heredada (esto puede causar muchos problemas))
- Para volver a montar la batería (en %) de un equipo, hazlo sobre él (Jeedom se encargará del resto y avisará al usuario si es necesario)) :

````php
$eqLogic->batteryStatus(56);
````

- Sur les commandes au moment de l'ajout d'une valeur Jeedom applique la méthode d'instance ``formatValue($_value)`` qui, en fonction du sous-type, peut la remettre en forme (en particulier pour les valeurs binaires)
- ne faites JAMAIS une méthode dans la class héritant de cmd s'appelant : execCmd ou event
- si dans la configuration de votre commande vous avez renseigné returnStateTime (en minute) et returnStateValue, Jeedom changera automatique la valeur de votre commande par returnStateValue au bout de X minute(s)
- toujours pour la commande vous pouvez utiliser addHistoryValue pour forcer la mise en historique (attention votre commande doit être historisée)
