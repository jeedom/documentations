# Plantilla de complemento de documentación

Puedes encontrar una base de datos de complementos vacía [aquí](https://github.com/jeedom/plugin-template)

# Creación de complementos parte 1 : l'arborescence

Aquí esta su estructura: primero una carpeta con el nombre de su complemento (su identificador único más precisamente) que debe contener las siguientes subcarpetas :

- ``3rdparty`` : carpeta que contiene las bibliotecas externas utilizadas en el complemento (ejemplo para el complemento de SMS, una biblioteca para comunicación en serie en php)
- ``core`` : carpeta que contiene todos los archivos operativos internos
- ``class`` : carpeta que contiene la clase de complemento
- ``php`` : carpeta que puede contener funciones que no tienen que pertenecer a una clase (a menudo utilizada para permitir la inclusión de múltiples clases o archivos de configuración a la vez)
- ``config`` : archivo de configuración del complemento
- ``ajax`` : carpeta que contiene archivos de destino de llamadas AJAX
- ``desktop`` : carpeta que contiene la vista "escritorio" del complemento (en contraste con la vista "móvil"")
 -   ``js`` : carpeta que contiene todos los archivos javascript
 -   ``php`` : carpeta que contiene todos los archivos php que se muestran
 -   ``css`` : no hay ninguno aquí, pero, si es necesario, todos los archivos CSS del complemento entran
 -   ``modal`` : carpeta que contiene el código modal del complemento
- ``plugin\_info`` : contiene los archivos que permiten a Jeedom calificar el complemento, instalarlo y configurarlo
 -   ``info.json`` : archivo que contiene la información básica del complemento (es obligatorio, de lo contrario, Jeedom no verá el complemento), contiene entre otras cosas el identificador del módulo, la descripción, las instrucciones de instalación
 -   ``install.php`` : archivo que contiene (si es necesario) los métodos para instalar y desinstalar el complemento
 -   ``configuration.php`` : archivo que contiene los parámetros para configurar el complemento independientemente de su equipo (ejemplo para el módulo Zwave, la Raspberry Pi ip con la tarjeta Razberry)
- ``docs`` : debe contener el documento del complemento en formato markdown, la raíz y el archivo index.md. Todas las imágenes están en documentos / imágenes. El documento en sí está en una carpeta dependiendo del idioma (ej. En francés : ``docs/fr\_FR``)

En cuanto a la convención de nomenclatura de archivos, aquí están los
requisitos :

- los archivos de clase php deben terminar con ``.class.php``
- si no está gestionado por un archivo de inclusión, el nombre del archivo debe ser ``nom\_class.class.php``
- los archivos que solo sirven como punto de entrada para incluir varios archivos deben terminar en ``.inc.php``
- los archivos de configuración deben terminar con ``.config.php``

Aquí están las recomendaciones :

- Los archivos AJAX deben terminar con ``.ajax.php``
- el nombre de la primera página de vista de un complemento debe ser el mismo que el ID del complemento
- el nombre del archivo JS (si hay uno) de la primera página de vista del complemento debe ser el ID del complemento

# Creación de complementos parte 2 : complemento de información

## ``info.json``

Ver [aquí](https://doc.jeedom.com/es_ES/dev/structure_info_json)

## ``installation.php``

Archivo que da instrucciones para instalar un complemento :

Se compone de la siguiente manera :

La primera parte comentada contiene la licencia (es mejor). El que se usa aquí indica que el archivo pertenece a Jeedom y que es de código abierto Luego viene la inclusión del núcleo de Jeedom (esto permite el acceso a funciones internas) Luego viene las 2 funciones :

- ``install_pluginid()`` : método para instalar el complemento. Aquí la instalación agrega un trabajo cron a Jeedom
- ``update_pluginid()`` : método para instalar el complemento. Se usa aquí para reiniciar la tarea cron
- ``remove_pluginid()`` : método para eliminar el complemento. Aquí la función elimina la tarea cron de Jeedom durante la desinstalación

Ejemplo :

````
<?php
/* This file is part of Jeedom.
 *
 * Jeedom is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Jeedom is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Jeedom. If not, see <http://www.gnu.org/licenses/>.
 */
require_once dirname(__FILE__) . '/../../../core/php/core.inc.php';

function zwave_install() {
    $cron = cron::byClassAndFunction('zwave', 'pull');
    if (!is_object($cron)) {
        $cron = new cron();
        $cron->setClass('zwave');
        $cron->setFunction('pull');
        $cron->setEnable(1);
        $cron->setDeamon(1);
        $cron->setSchedule('* * * * *');
        $cron->save();
    }
}

function zwave_update() {
    $cron = cron::byClassAndFunction('zwave', 'pull');
    if (!is_object($cron)) {
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

function zwave_remove() {
    $cron = cron::byClassAndFunction('zwave', 'pull');
    if (is_object($cron)) {
        $cron->remove();
    }
}
?>
````

## ``configuration.php``

Archivo para solicitar información de configuración del usuario :

El archivo consta de :

- La licencia como antes
- La inclusión del núcleo Jeedom
- Verificación de que el usuario está bien conectado (incluyo el archivo 404 porque este archivo es un archivo de tipo vista)

Luego viene el parámetro solicitado (puede tener varios), es una sintaxis Bootstrap estándar para formularios, las únicas particularidades a respetar son la clase (``configKey``) para poner el elemento del parámetro así como la "data-l1key" que indica el nombre del parámetro. Para recuperar el valor de este en otro lugar del plugin solo haz : ``config::byKey(NOM_PARAMETRE, PLUGIN_ID)``

Ejemplo :

````
<?php
/* This file is part of Jeedom.
 *
  * Jeedom is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Jeedom is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
  * You should have received a copy of the GNU General Public License
 * along with Jeedom. If not, see <http://www.gnu.org/licenses/>.
  */

 require_once dirname(__FILE__) . '/../../../core/php/core.inc.php';
include_file('core', 'authentification', 'php');
if (!isConnect()) {
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

# Creación de complementos parte 3 : carpeta de escritorio

## PHP

Esta carpeta contiene la vista misma. En el interior, debe encontrar la página de configuración del complemento (la que aparecerá cuando el usuario realice el complemento ⇒ categoría ⇒ su complemento). Es recomendable nombrarlo con la identificación de su complemento. También puede contener el panel (página que el usuario encontrará en la página de inicio → nombre de su complemento).

Todos los archivos en esta carpeta deben terminar ``.php`` y debe comenzar con :

````
<?php
if (!isConnect('admin')) {
    throw new Exception('{{401 - Accès non autorisé}}');
 }
 sendVarToJS('eqType', 'mail');
 ?>
 ````

Una vez en esta página, tendrá acceso en php a todas las funciones del núcleo de la libertad (ver [aquí](https://www.jeedom.com/doc/documentation/code/) ) así como los de todos los módulos instalados, así que el tuyo también.

Todas estas páginas son vistas, principalmente usan sintaxis HTML. Por todo lo que se presenta, Jeedom se basa principalmente en bootstrap, por lo que todos los [Documentación](http://getbootstrap.com/) es aplicable.

Para simplificar la creación de complementos, puede incluir en su página el script de plantilla de JavaScript para complementos :

````
<?php include_file('core', 'plugin.template', 'js'); ?>
````

Para poner en la parte inferior de su página y útil solo en la página de configuración de su complemento. Este script hace posible reducir el javascript obligatorio a una sola función (ver sección sobre archivos JS).

En su página de configuración, se implementó una sintaxis HTML para simplificar su vida. Entonces, para la mayoría de los complementos, solo tendrá que hacer HTML para almacenar su información en la base de datos y, por lo tanto, usarla en el lado de su clase.

La sintaxis es bastante simple: su elemento (input, select ...) debe tener la clase css eqLogicAttr (o cmdAttr para comandos) y un atributo que indique el nombre de la propiedad :

````
<input type="text" class="eqLogicAttr form-control" data-l1key="name" placeholder="{{Nom de l'équipement mail}}"/>
````

Ahí, por ejemplo, al cargar los datos de la libertad, se colocará el valor del nombre del equipo en la entrada y al guardarlo se recuperará para volver a colocarlo en la base de datos. Pequeño consejo: algunas propiedades son en realidad cadenas JSON en BDD (esto le permite tener mucha libertad para el complemento), en este caso, simplemente haga :

````
<input class="eqLogicAttr form-control" data-l1key='configuration' data-l2key='fromName' />
````

Para ver la lista de propiedades de equipos y comandos, está aquí (para ver las propiedades que son JSON, solo mire el getter o el setter, si toma 2 parámetros, entonces es JSON)

Último punto importante en la página de configuración: esto puede contener tantos equipos y comandos como sea necesario. Sin embargo, hay algunas reglas a seguir :

Todos los elementos que tienen la clase eqLogicAttr deben estar en un elemento que tenga la clase css eqLogic Ditto para los elementos de la clase css cmdAttr que deben estar en un elemento de la clase cmd. Todos los comandos de un equipo deben estar en el elemento que tenga la clase eqLogic correspondiente

## JS

Todos los archivos JS deben estar en la carpeta JS (fácil !!!). Es aconsejable nombrarlo con la misma ID que su complemento (en la parte de configuración, para el panel que haga como desee). Este archivo JS (el de la configuración del complemento) debe contener al menos un método addCmdToTable que tome el objeto de comando para agregarlo como parámetro. Aquí hay un ejemplo simple :

````
function addCmdToTable(_cmd) {
    if (!isset(_cmd)) {
        var _cmd = {configuration: {}};
     }
    var tr = '';     tr += '';
     tr += '<input class="cmdAttr form-control input-sm" data-l1key="id" style="display : none;">';
    tr += '<input class="cmdAttr form-control input-sm" data-l1key="name">';     tr += '<input class="cmdAttr form-control input-sm" data-l1key="configuration" data-l2key="recipient">';     tr += '';
     tr += '<input class="cmdAttr form-control input-sm" data-l1key="type" value="action" style="display : none;">';
     tr += '<input class="cmdAttr form-control input-sm" data-l1key="subType" value="message" style="display : none;">';
     if (is_numeric(_cmd.id)) {
        tr += '<a class="btn btn-default btn-xs cmdAction" data-action="test"><i class="fa fa-rss"></i> {{Tester}}</a>';
     }
     tr += '<i class="fa fa-minus-circle pull-right cmdAction cursor" data-action="remove"></i></td>';
    tr += '';
     $('#table_cmd tbody').append(tr);
    $('#table_cmd tbody tr:last').setValues(_cmd, '.cmdAttr');
}
````

Notará que hay una línea por comando y que esta tiene la clase css cmd. También puede ver los elementos que tienen la clase cmdAttr.

Varios puntos importantes :

- Esta función se puede llamar con un objeto vacío (de ahí las primeras 3 líneas) al agregar un nuevo comando
- la última línea inicializa todos los campos una vez que se inserta la línea

Ultimo punto: Un ejemplo más completo con tipo de comando y subtipo :

````
function addCmdToTable(_cmd) {
    if (!isset(_cmd)) {
        var _cmd = {};
    }
     if (!isset(_cmd.configuration)) {
        _cmd.configuration = {};
    }
     var selRequestType = '<select style="width : 90px;" class="cmdAttr form-control input-sm" data-l1key="configuration" data-l2key="requestType">';
     selRequestType += '<option value="script">{{Script}}</option>';
     selRequestType += '<option value="http">{{Http}}</option>';
     selRequestType += '</select>';
    var tr = '';     tr += '<input class="cmdAttr form-control input-sm" data-l1key="name" style="width : 140px;">';
    tr += '<input class="cmdAttr form-control input-sm" data-l1key="id"  style="display : none;">';
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
    if (is_numeric(_cmd.id)) {
    tr += '<a class="btn btn-default btn-xs cmdAction" data-action="test"><i class="fa fa-rss"></i> {{Tester}}</a>';
    }
    tr += '<i class="fa fa-minus-circle pull-right cmdAction cursor" data-action="remove"></i></td>';
    tr += '';
    $('#table_cmd tbody').append(tr);
    $('#table_cmd tbody tr:last').setValues(_cmd, '.cmdAttr');

    if (isset(_cmd.configuration.requestType)) {
        $('#table_cmd tbody tr:last .cmdAttr[data-l1key=configuration][data-l2key=requestType]').value(init(_cmd.configuration.requestType));
        $('#table_cmd tbody tr:last .cmdAttr[data-l1key=configuration][data-l2key=requestType]').trigger('change');
    }

     if (isset(_cmd.type)) {
        $('#table_cmd tbody tr:last .cmdAttr[data-l1key=type]').value(init(_cmd.type));
    }
     jeedom.cmd.changeType($('#table_cmd tbody tr:last'), init(_cmd.subType));
    initTooltips();
}
````

Aquí podemos notar :

- ``jeedom.cmd.availableType()`` insertará una selección con la lista de tipos conocidos (acción e información por el momento)
- ``<span class="subType" subType="' + init(\_cmd.subType) + '"><\span>`` : el lugar donde se debe plantear la selección del subtipo
- ``jeedom.cmd.changeType(\$('\#table\_cmd tbody tr:last'), init(\_cmd.subType))`` que permite inicializar el subtipo con el valor correcto

Se pueden usar otras funciones de JavaScript :

- ``printEqLogic`` que toma el objeto completo del equipo como parámetro (útil en caso de procesamiento de datos antes de restaurarlo). Se llama cuando se muestran los datos del equipo
- ``saveEqLogic`` que toma como parámetro el objeto del equipo que se guardará en la base de datos (útil si necesita realizar algún procesamiento antes de guardar) Lo último, para los archivos JS, aquí es cómo incluirlos de manera limpia en su página php :

````
<?php include_file('desktop', 'weather', 'js', 'weather'); ?>
````

El primer argumento le da a la carpeta en la que encontrarlo (la atención es la carpeta principal de la carpeta JS), el segundo el nombre de su javascript, el tercero le dice a Jeedom que es un archivo JS y el último en el que se conecta se encuentra.

## CSS

Esta carpeta contiene sus archivos CSS (no se debe usar demasiado), aquí le mostramos cómo incluirlos en su página :

````
<?php include_file('desktop', 'weather', 'css', 'weather'); ?>
````

El primer argumento le da a la carpeta en la que encontrarlo (la atención es la carpeta principal de la carpeta CSS), el segundo el nombre de su archivo CSS, el tercero le dice a Jeedom que es un archivo CSS y el último en el que el complemento se encuentra.

## MODAL

La carpeta modal le permite almacenar sus archivos php destinados a mostrar modales. Aquí se explica cómo llamarlos desde su página principal (este código está en un archivo javascript) :

Podemos ver :

````
$('#md_modal').dialog({title: "{{Classe du périphérique}}"});
$('#md_modal').load('index.php?v=d&plugin=zwave&modal=show.class&id=' + $('.eqLogicAttr[data-l1key=id]').value()).dialog('open');
````

La primera línea le permite poner un título a su modal

La segunda línea carga su modal y pantalla. La sintaxis es bastante simple : plugin, la identificación de su plugin, modal, el nombre de su modal sin php y luego los parámetros que desea pasar

## API JS

Esta no es una carpeta, pero en las últimas versiones de Jeedom ofrece al desarrollador una API completa de JavaScript (esto evita escribir llamadas ajax en todas las direcciones)). Trataré de hacer un artículo para explicar las diferentes características, pero ya puede encontrar el código aquí.

Tanto por los detalles de la carpeta del escritorio. Sospecho que no es el más completo (intentaré completarlo de acuerdo con las diferentes solicitudes recibidas) pero espero que gracias a él puedas comenzar a hacer complementos para Jeedom.

## Trucos y astucias

### Asistente cron

````
$('body').delegate('.helpSelectCron','click',function(){
  var el = $(this).closest('.schedule').find('.scenarioAttr[data-l1key=schedule]');
  jeedom.getCronSelectModal({},function (result) {
    el.value(result.value);
  });
});
````

Cuando hacemos clic en el botón del asistente, obtenemos la entrada para escribir y luego llamamos al asistente. Una vez que la configuración finaliza en el asistente, el resultado se recupera y luego se escribe en la entrada previamente seleccionada

# Creación de complementos parte 4 : carpeta principal

Con mucho, la carpeta más importante de su complemento, puede incluir 4 subcarpetas.

Nota : a lo largo de esta parte, el ID de su complemento será referenciado por : plug-in\_id

## PHP

Contiene los archivos PHP anexos, solía poner, por ejemplo, un archivo de inclusión si, por supuesto, tiene varios archivos de clase o 3rparty para incluir

## Template

Que puede contener 2 subcarpetas, tablero y dispositivo móvil, es una carpeta que Jeedom escanea automáticamente en busca de un widget, por lo que si está utilizando widgets específicos, aquí es donde debe colocar su archivo HTML

## i18n

Aquí es donde su traducción debe estar en forma de un archivo json (mejor y busque, por ejemplo, el complemento [Zwave](https://github.com/jeedom/plugin-zwave) para ver la forma del archivo)

## ajax

Esta carpeta es para todos sus archivos ajax, aquí hay un esqueleto de archivo ajax :

````
<?php

/* This file is part of Jeedom.
 *
 * Jeedom is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Jeedom is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Jeedom. If not, see <http://www.gnu.org/licenses/>.
 */

try {
    require_once dirname(__FILE__) . '/../../../../core/php/core.inc.php';
    include_file('core', 'authentification', 'php');

    if (!isConnect('admin')) {
        throw new Exception(__('401 - Accès non autorisé', __FILE__));
    }

    if (init('action') == 'votre action') {

        ajax::success($result);
    }

    throw new Exception(__('Aucune methode correspondante à : ', __FILE__) . init('action'));
    /*     * *********Catch exeption*************** */
} catch (Exception $e) {
    ajax::error(displayExeption($e), $e->getCode());
}
?>
````

## class

Archivo muy importante, es el motor de tu plugin. Aquí es de donde provienen las 2 clases obligatorias de su complemento :

- ``plug-in\_id``
- ``plug-in\_idCmd``

El primero debe heredar de la clase eqLogic y el segundo de cmd. Aquí hay una plantilla :

````
<?php

/* This file is part of Jeedom.
 *
 * Jeedom is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Jeedom is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Jeedom. If not, see <http://www.gnu.org/licenses/>.
 */

/* * ***************************Includes********************************* */
require_once dirname(__FILE__) . '/../../../../core/php/core.inc.php';

clase plugin_id extends eqLogic {

    /*     * *************************Attributs****************************** */


    /*     * ***********************Methode static*************************** */


    /*     * *********************Methode d'instance************************* */


    /*     * **********************Getteur Setteur*************************** */

}

clase plugin_idCmd extends cmd {

    /*     * *************************Attributs****************************** */


    /*     * ***********************Methode static*************************** */


    /*     * *********************Methode d'instance************************* */


    /*     * **********************Getteur Setteur*************************** */

}

?>
````

Para la definición de clases de libertad, los invito a consultar esto [Sitio](https://doc.jeedom.com/dev/phpdoc/4.0/)

El único método obligatorio es el método de instancia en la clase de ejecución cmd, aquí hay un ejemplo con el complemento SARAH :

````
public function execute($_options = array()) {
      if (!isset($_options['title']) && !isset($_options['message'])) {
          throw new Exception(__("Le titre ou le message ne peuvent être tous les deux vide", __FILE__));
      }
      $eqLogic = $this->getEqLogic();
      $message = '';
      if (isset($_options['title'])) {
          $message = $_options['title'] . '. ';
      }
      $message .= $_options['message'];
      $http = new com_http($eqLogic->getConfiguration('addrSrvTts') . '/?tts=' . urlencode($message));
      return $http->exec();
  }
  ````

Ejemplo bastante simple pero completo, el principio es el siguiente, si el comando es una acción o una información (pero no solo en el caso y se excede su caché) entonces jeedom llama a este método.

En nuestro ejemplo aquí, es un comando para hacer que SARAH hable, donde el complemento recupera los parámetros en las opciones \ $\_ (tenga en cuenta que esta es una matriz y sus atributos cambian según el subtipo del comando : color para un subtipo de color, control deslizante para un subtipo de control deslizante, título y mensaje para un subtipo de mensaje y vacío para otro subtipo).

Aquí para la parte obligatoria, esto es lo que se puede usar a continuación (con ejemplo) :

### toHtml (\ $\_ version = 'tablero de instrumentos')

Función utilizable en el control o en el equipo, según las necesidades, aquí hay un ejemplo para el equipo

````
public function toHtml($_version = 'dashboard') {
    $replace = $this->preToHtml($_version);
    if (!is_array($replace)) {
        return $replace;
    }
    $version = jeedom::versionAlias($_version);
    $replace['#forecast#'] = '';
    if ($version != 'mobile' || $this->getConfiguration('fullMobileDisplay', 0) == 1) {
        $forcast_template = getTemplate('core', $version, 'forecast', 'weather');
        for ($i = 0; $i < 5; $i++) {
            $replaceDay = array();
            $replaceDay['#day#'] = date_fr(date('l', strtotime('+' . $i . ' days')));

            if ($i == 0) {
                $temperature_min = $this->getCmd(null, 'temperature_min');
            } else {
                $temperature_min = $this->getCmd(null, 'temperature_' . $i . '_min');
            }
            $replaceDay['#low_temperature#'] = is_object($temperature_min) ? $temperature_min->execCmd() : '';

            if ($i == 0) {
                $temperature_max = $this->getCmd(null, 'temperature_max');
            } else {
                $temperature_max = $this->getCmd(null, 'temperature_' . $i . '_max');
            }
            $replaceDay['#hight_temperature#'] = is_object($temperature_max) ? $temperature_max->execCmd() : '';
            $replaceDay['#tempid#'] = is_object($temperature_max) ? $temperature_max->getId() : '';

            if ($i == 0) {
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
    if (strlen($replace['#sunrise#']) == 3) {
        $replace['#sunrise#'] = substr($replace['#sunrise#'], 0, 1) . ':' . substr($replace['#sunrise#'], 1, 2);
    } else if (strlen($replace['#sunrise#']) == 4) {
        $replace['#sunrise#'] = substr($replace['#sunrise#'], 0, 2) . ':' . substr($replace['#sunrise#'], 2, 2);
    }

    $sunset = $this->getCmd(null, 'sunset');
    $replace['#sunset#'] = is_object($sunset) ? $sunset->execCmd() : '';
    if (strlen($replace['#sunset#']) == 3) {
        $replace['#sunset#'] = substr($replace['#sunset#'], 0, 1) . ':' . substr($replace['#sunset#'], 1, 2);
    } else if (strlen($replace['#sunset#']) == 4) {
        $replace['#sunset#'] = substr($replace['#sunset#'], 0, 2) . ':' . substr($replace['#sunset#'], 2, 2);
    }

    $wind_direction = $this->getCmd(null, 'wind_direction');
    $replace['#wind_direction#'] = is_object($wind_direction) ? $wind_direction->execCmd() : 0;

    $refresh = $this->getCmd(null, 'refresh');
    $replace['#refresh_id#'] = is_object($refresh) ? $refresh->getId() : '';

    $condition = $this->getCmd(null, 'condition_now');
    $sunset_time = is_object($sunset) ? $sunset->execCmd() : null;
    $sunrise_time = is_object($sunrise) ? $sunrise->execCmd() : null;
    if (is_object($condition)) {
        $replace['#icone#'] = self::getIconFromCondition($condition->execCmd(), $sunrise_time, $sunset_time);
        $replace['#condition#'] = $condition->execCmd();
        $replace['#conditionid#'] = $condition->getId();
        $replace['#collectDate#'] = $condition->getCollectDate();
    } else {
        $replace['#icone#'] = '';
        $replace['#condition#'] = '';
        $replace['#collectDate#'] = '';
    }
    if ($this->getConfiguration('modeImage', 0) == 1) {
        $replace['#visibilityIcon#'] = "none";
        $replace['#visibilityImage#'] = "block";
    } else {
        $replace['#visibilityIcon#'] = "block";
        $replace['#visibilityImage#'] = "none";
    }
    $html = template_replace($replace, getTemplate('core', $version, 'current', 'weather'));
    cache::set('widgetHtml' . $_version . $this->getId(), $html, 0);
    return $html;
}
````

Varias cosas interesantes aquí :

Para convertir la versión solicitada en panel de control o móvil (mview se convierte en móvil, por ejemplo, esto permite, por ejemplo, en las vistas agregar el nombre de los objetos)

````
$_version = jeedom::versionAlias($_version);
````

Recuperando una plantilla de pedido, aquí la plantilla de pedido : plugins / weather / core / template / \ $\_ version / Forecast.html (\ $\_ versión digna de móvil o tablero de instrumentos)

````
$forcast_template = getTemplate('core', $_version, 'forecast', 'weather');
````

Aquí reemplace las etiquetas rellenadas previamente en \ $ replace HTML para contener los valores

````
$html_forecast .= template_replace($replace, $forcast_template);
````

Esto le permite recuperar el comando con el\_id lógico : temperatura\_min

````
$this->getCmd(null, 'temperature_min');
````

Aquí permite poner el valor en la etiqueta, solo si el pedido ha sido recuperado

````
$replace['#temperature#'] = is_object($temperature) ? $temperature->execCmd() : '';
````

Paso importante: esto le permite recuperar las personalizaciones realizadas por el usuario en la página General → Mostrar y volver a inyectarlas en la plantilla

````
$parameters = $this->getDisplay('parameters');
if (is_array($parameters)) {
    foreach ($parameters as $key => $value) {
        $replace['#' . $key . '#'] = $value;
    }
}
````

Guardar el widget en el caché: para que durante la próxima solicitud la proporcionemos más rápido, podemos notar el 0 aquí que indica una vida útil infinita, de lo contrario, la duración es en segundos (veremos en la siguiente parte cómo el plugin meteorológico actualiza su widget).

````
cache::set('weatherWidget' . $_version . $this->getId(), $html, 0);
````

Finalmente envíe html a Jeedom :

````
return $html;
````

También debe decirle a Jeedom qué permite su widget para la personalización. Es un poco complejo (y de nuevo) pero normalmente flexible y fácil de configurar.

Funciona de la misma manera en su equipo o control, es un atributo estático de la clase \ $\_ widgetPossibility que debe ser una matriz multidimensional, pero es allí donde se complica si una dimensión de la matriz es verdadera o falso. Luego considera que todos los niños posibles están en este valor (daré un ejemplo).

Primero los casos donde debes usarlo: si en su clase, heredar de eqLogic o cmd tiene una función toHtml, de lo contrario no vale la pena leer más.

### Método pre y post

Al crear o eliminar sus objetos (equipo, orden u otro) en Jeedom, puede llamar a varios métodos antes / después de la acción :

- ``preInsert`` ⇒ Método llamado antes de la creación de su objeto
- ``postInsert`` ⇒ Método llamado después de la creación de su objeto
- ``preUpdate`` ⇒ Método llamado antes de actualizar su objeto
- ``postUpdate`` ⇒ Método llamado después de actualizar su objeto
- ``preSave`` ⇒ Método llamado antes de guardar (creación y actualización, por lo tanto) de su objeto
- ``postSave`` ⇒ Método llamado después de guardar su objeto
- ``preRemove`` ⇒ Método llamado antes de eliminar su objeto
- ``postRemove`` ⇒ Método llamado después de eliminar su objeto

Ejemplo, siempre con el complemento meteorológico para crear pedidos o actualizarlos después de guardar (el ejemplo se simplifica) :

````
public function postUpdate() {
      $weatherCmd = $this->getCmd(null, 'temperature');
      if (!is_object($weatherCmd)) {
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
      if (!is_object($cron)) {
          $cron = new cron();
          $cron->setClass('weather');
          $cron->setFunction('updateWeatherData');
          $cron->setOption(array('weather_id' => intval($this->getId())));
      }
      $cron->setSchedule($this->getConfiguration('refreshCron', '*/30 * * * *'));
      $cron->save();
}
````

El inicio es bastante estándar con la creación de un comando, el final es más interesante con la implementación de un cron que llamará al método ``weather::updateWeatherData`` pasando la identificación del equipo para actualizar cada 30 minutos por defecto.

Aquí el método updateWeatherData (también simplificado) :

````
public static function updateWeatherData($_options) {
  $weather = weather::byId($_options['weather_id']);
  if (is_object($weather)) {
      foreach ($weather->getCmd('info') as $cmd) {
        $weather->checkAndUpdateCmd($cmd,$cmd->execute());
      }
  }
}
````

Vemos aquí que durante la llamada recuperamos el equipo en cuestión y luego ejecutamos los comandos para recuperar los valores y actualizarlos si es necesario.

Parte muy importante :

````
$weather->checkAndUpdateCmd($cmd,$cmd->execute());
````

En el momento de la función ``checkAndUpdateCmd`` (que permite señalar a Jeedom una nueva actualización del valor, con la activación de todas las acciones que deben realizarse : actualización del tablero, verificación de escenarios),

Para la clase de comando, un pequeño truco para saber si usa la plantilla js básica. Al enviar el equipo Jeedom hace el diferencial en los pedidos y borrará los que están en la base pero no en la nueva definición del equipo. Así es como evitarlo :

````
public function dontRemoveCmd() {
  return true;
}
````

Para terminar aquí hay algunos consejos y trucos :

- evite (a menos que sepa lo que está haciendo) sobrescribir un método de la clase heredada (esto puede causar muchos problemas)
- Para volver a montar la batería (en%) de un equipo, hágalo (Jeedom se encargará del resto y advertirá al usuario si es necesario) :

````
$eqLogic->batteryStatus(56);
````

- En los pedidos al agregar un valor, Jeedom aplica el método de instancia ``formatValue($_value)`` que, dependiendo del subtipo, puede remodelarlo (especialmente para valores binarios)
- NUNCA haga un método en la clase que herede de cmd llamado : execCmd o evento
- si en la configuración de su pedido ha introducido returnStateTime (en minutos) y returnStateValue, Jeedom cambiará automáticamente el valor de su pedido mediante returnStateValue después de X minutos (s)
- siempre para el pedido, puede usar addHistoryValue para forzar la configuración en el historial (atención, su pedido debe ser histórico)
