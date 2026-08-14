# Plantilla de documentación del complemento

Puedes encontrar una base de plugins vacía [aquí](https://github.com/jeedom/plugin-template)

# Creación de un complemento, parte 1: la estructura de árbol

Esta es su estructura: en primer lugar, una carpeta con el nombre de tu plugin (más concretamente, su identificador único), que debe contener las siguientes subcarpetas:

- ``3rdparty`` : Carpeta que contiene las bibliotecas externas utilizadas en el complemento (por ejemplo, para el complemento de SMS, una biblioteca para la comunicación en serie en PHP).
- ``core`` : Carpeta que contiene todos los archivos de funcionamiento interno.
  - ``class`` : Carpeta que contiene la clase del complemento.
  - ``php`` : Archivo que puede contener funciones que no tienen por qué pertenecer necesariamente a una clase (se utiliza a menudo para permitir la inclusión de varias clases o archivos de configuración a la vez).
  - ``config`` : Archivo de configuración del complemento.
  - ``ajax`` : Carpeta que contiene los archivos de destino de las llamadas AJAX.
  - ``i18n`` : Carpeta que contiene los archivos .json de traducción del complemento.
  - ``template`` : Carpeta que contiene las plantillas HTML para los mosaicos específicos de los dispositivos del complemento, en las subcarpetas «dashboard» y «mobile».
- ``desktop`` : Carpeta que contiene la vista «de escritorio» del complemento (en contraposición a la vista «móvil»).
  - ``js`` : Carpeta que contiene todos los archivos de tipo JavaScript para la interfaz del complemento.
  - ``php`` : Carpeta que contiene todos los archivos de tipo php para la interfaz del complemento.
  - ``css`` : Si es necesario, todos los archivos CSS del complemento, incluidas, en su caso, las *fuentes*.
  - ``modal`` : Carpeta que contiene el código de las ventanas modales del complemento.
  - ``img`` : Carpeta para las imágenes (png, jpg, etc.) necesarias para el complemento.
- ``plugin_info`` : Contiene los archivos que permiten a Jeedom identificar el complemento, así como realizar su instalación y configuración.
  - ``info.json`` : Archivo que contiene la información básica del complemento. Es obligatorio; de lo contrario, Jeedom no detectará el complemento. Contiene, entre otras cosas, el identificador del módulo, la descripción y las instrucciones de instalación…​
  - ``install.php`` : Archivo que contiene (si es necesario) las instrucciones de instalación y desinstalación del complemento.
  - ``configuration.php`` : Archivo que contiene los parámetros que hay que configurar en el complemento, independientes de los dispositivos que este gestiona (por ejemplo, para el módulo Z-Wave, la dirección IP de la Raspberry Pi que lleva la tarjeta Razberry)
- ``docs`` : Debe contener la documentación del complemento en formato Markdown, el directorio raíz y el archivo index.md. Todas las imágenes se encuentran en docs/images. La documentación propiamente dicha se encuentra en una carpeta según el idioma (por ejemplo, en francés: ``docs/fr\_FR``)
- ``ressources`` : Carpeta para posibles paquetes de demostración y dependencias.
- ``data`` : Carpeta utilizada para los archivos generados por el complemento propio de Jeedom del usuario.

En cuanto a la convención de nomenclatura de los archivos, aquí tienes las
Requisitos:

- Los archivos de clase PHP deben terminar obligatoriamente en ``.class.php``
- si no se gestiona mediante un archivo de inclusión, el nombre del archivo debe ser ``nom\_class.class.php``
- los archivos que sirvan únicamente como punto de entrada para incluir varios archivos deben terminar en ``.inc.php``
- los archivos de configuración deben terminar en ``.config.php``

Estas son las recomendaciones:

- Los archivos de tipo AJAX deben terminar en ``.ajax.php``
- El nombre de la primera página de vista de un plugin debe ser el mismo que el ID del plugin
- El nombre del archivo JS (si lo hay) de la primera página de vista del plugin debe ser el ID del plugin

# Creación del complemento, parte 2: carpeta «plugin info»

## ``info.json``

Ver [aquí](structure_info_json)

## ``install.php``

Archivo con las instrucciones de instalación de un complemento:

Su composición es la siguiente:

La primera parte comentada contiene la licencia (mejor así). La que se utiliza aquí indica que el archivo pertenece a Jeedom y que es de código abierto. A continuación viene la inclusión del núcleo de Jeedom (esto permite acceder a las funciones internas). Después vienen las tres funciones:

- ``pluginid_install()`` : método que permite instalar el complemento. En este caso, la instalación añade una tarea cron a Jeedom
- ``pluginid_update()`` : método que permite instalar el complemento. Se utiliza aquí para reiniciar la tarea cron
- ``pluginid_remove()`` : método que permite eliminar el complemento. En este caso, la función elimina la tarea cron de Jeedom al desinstalarlo

Ejemplo:

````php
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

function openzwave_install() {
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

function openzwave_update() {
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

function openzwave_remove() {
    $cron = cron::byClassAndFunction('zwave', 'pull');
    if (is_object($cron)) {
        $cron->remove();
    }
}
?>
````

## ``configuration.php``

Archivo que permite solicitar información de configuración al usuario:

El archivo consta de:

- La licencia es la misma que antes
- La incorporación del núcleo de Jeedom
- Comprobación de que el usuario está correctamente conectado (incluyo el archivo 404 porque se trata de un archivo de tipo vista)

A continuación viene el parámetro solicitado (puede haber varios); se trata de una sintaxis estándar de Bootstrap para formularios, y las únicas particularidades que hay que respetar son la clase (``configKey``) en el elemento de parámetro, así como el atributo «data-l1key», que indica el nombre del parámetro. Para recuperar el valor de este en cualquier otra parte del complemento, basta con hacer lo siguiente: ``config::byKey(NOM_PARAMETRE, PLUGIN_ID)``

Ejemplo:

````php
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

# Creación del complemento, parte 3: carpeta del escritorio

## PHP

Esta carpeta contiene la vista propiamente dicha. En ella se encuentra obligatoriamente la página de configuración del plugin (la que aparecerá cuando el usuario seleccione «plugins» ⇒ «categorías» ⇒ «tu plugin»). Se recomienda nombrarla con el ID de tu plugin. También puede contener el panel (página que el usuario encontrará en «Inicio» → «nombre de tu plugin»).

Todos los archivos de esta carpeta deben terminar en ``.php`` y deben comenzar obligatoriamente por:

````php
{% raw %}
<?php
if (!isConnect('admin')) {
    throw new Exception('{{401 - Accès non autorisé}}');
 }
 sendVarToJS('eqType', 'mail');
 ?>
 {% endraw %}
 ````

Una vez en esta página, tendrás acceso mediante PHP a todas las funciones del núcleo de Jeedom (véase [aquí](https://www.jeedom.com/doc/documentation/code/) ), así como a las de todos los módulos instalados, incluido el tuyo.

Dado que todas estas páginas son vistas, utilizan principalmente la sintaxis HTML. En cuanto a la presentación, Jeedom se basa principalmente en Bootstrap, por lo que toda la [documentación](http://getbootstrap.com/) es aplicable.

Para simplificar la creación de plugins, puedes incluir en tu página el script JavaScript de plantilla para los plugins:

````php
<?php include_file('core', 'plugin.template', 'js'); ?>
````

Debe colocarse al final de la página y solo es útil en la página de configuración de tu plugin. Este script permite reducir el código JavaScript obligatorio a una sola función (véase la sección sobre los archivos JS).

En tu página de configuración se ha implementado una sintaxis HTML para facilitarte las cosas. Así pues, para la mayoría de los plugins solo tendrás que utilizar HTML para almacenar tu información en la base de datos y poder volver a utilizarla desde tu clase.

La sintaxis es bastante sencilla: tu elemento (input, select…​) debe tener la clase CSS eqLogicAttr (o cmdAttr para los comandos) y un atributo que indique el nombre de la propiedad:

````html
{% raw %}
<input type="text" class="eqLogicAttr form-control" data-l1key="name" placeholder="{{Nom de l'équipement mail}}"/>
{% endraw %}
````

En este caso, por ejemplo, al cargar los datos, Jeedom introducirá el valor del nombre del dispositivo en el campo de entrada y, al guardar, lo recuperará para volver a introducirlo en la base de datos. Un pequeño truco: algunas propiedades son, en realidad, cadenas JSON en la base de datos (lo que permite una gran libertad para el complemento); en este caso, basta con hacer lo siguiente:

````html
<input class="eqLogicAttr form-control" data-l1key='configuration' data-l2key='fromName' />
````

Aquí encontrarás la lista de propiedades de los dispositivos y los comandos (para saber qué propiedades están en formato JSON, basta con fijarse en el getter o el setter; si este admite dos parámetros, entonces es JSON).

Último punto importante sobre la página de configuración: esta puede contener tantos dispositivos y comandos como sea necesario. Sin embargo, hay que respetar algunas normas:

Todos los elementos con la clase eqLogicAttr deben estar dentro de un elemento con la clase css eqLogic. Lo mismo ocurre con los elementos de la clase css cmdAttr, que deben estar dentro de un elemento de la clase cmd. Todos los comandos de un equipo deben encontrarse dentro del elemento con la clase eqLogic correspondiente.

## JS

Todos los archivos JS deben estar en la carpeta JS (¡¡¡fácil!!!). Se recomienda darle el mismo nombre que tu plugin (en la parte de configuración; para el panel, hazlo como prefieras). Este archivo JS (el de la configuración del plugin) debe contener, como mínimo, un método addCmdToTable que tome como parámetro el objeto del comando que se va a añadir. Aquí tienes un ejemplo sencillo:

````php
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

Verás que hay una línea por comando y que cada una tiene la clase CSS «cmd». También puedes ver los elementos que tienen la clase «cmdAttr».

Varios puntos importantes:

- Esta función se puede invocar con un objeto vacío (de ahí las tres primeras líneas) al añadir un nuevo comando
- la última línea permite inicializar todos los campos una vez insertada la línea

Último punto: un ejemplo más completo con tipo y subtipo de comando:

````php
{% raw %}
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
{% endraw %}
````

Aquí se puede observar lo siguiente:

- ``jeedom.cmd.availableType()`` Se insertará un menú desplegable con la lista de tipos conocidos (por ahora, «acción» e «información»).
- ``<span class="subType" subType="' + init(\_cmd.subType) + '"><\span>`` : el lugar donde debe colocarse el selector de subtipo
- ``jeedom.cmd.changeType(\$('\#table\_cmd tbody tr:last'), init(\_cmd.subType))`` que permite inicializar el subtipo con el valor correcto

Se pueden utilizar otras funciones de JavaScript:

- ``printEqLogic`` que toma como parámetro el objeto completo del equipo (útil en caso de que haya que procesar los datos antes de mostrarlos). Se invoca al mostrar los datos del equipo
- ``saveEqLogic`` que toma como parámetro el objeto «equipamiento» que se va a guardar en la base de datos (útil si necesitas realizar algún procesamiento antes de guardarlo). Por último, en cuanto a los archivos JS, así es como puedes incluirlos de forma ordenada en tu página PHP:

````php
<?php include_file('desktop', 'weather', 'js', 'weather'); ?>
````

El primer argumento indica la carpeta en la que se encuentra (atención: es la carpeta principal de la carpeta JS), el segundo, el nombre de tu archivo JavaScript, el tercero indica a Jeedom que se trata de un archivo JS y el último, en qué plugin se encuentra.

## CSS

Esta carpeta contiene tus archivos CSS (no debería utilizarse demasiado); a continuación te explicamos cómo incluirlos en tu página:

````php
<?php include_file('desktop', 'weather', 'css', 'weather'); ?>
````

El primer argumento indica la carpeta en la que se encuentra (atención: es la carpeta principal de la carpeta CSS), el segundo, el nombre de tu archivo CSS, el tercero le indica a Jeedom que se trata de un archivo CSS y el último, en qué plugin se encuentra.

## MODAL

La carpeta «modal» te permite almacenar tus archivos PHP destinados a mostrar ventanas modales. A continuación te explicamos cómo llamarlos desde tu página principal (este código se debe incluir en un archivo JavaScript):

Se puede ver:

````js
{% raw %}
$('#md_modal').dialog({title: "{{Classe du périphérique}}"}).load('index.php?v=d&plugin=zwave&modal=show.class&id=' + $('.eqLogicAttr[data-l1key=id]').value()).dialog('open')
{% endraw %}
````

La primera línea te permite ponerle un título a tu ventana modal

La segunda línea carga tu modal y la visualización. La sintaxis es bastante sencilla: plugin, el ID de tu plugin, modal, el nombre de tu modal sin el «php» y, a continuación, los parámetros que quieras pasarle.

## API de JavaScript

No se trata de un dossier, pero en las últimas versiones de Jeedom se ofrece al desarrollador toda una API de JavaScript (lo que evita tener que escribir llamadas AJAX por todas partes). Intentaré escribir un artículo para explicar las diferentes funcionalidades, pero ya podéis encontrar el código aquí.

Esto es todo en cuanto a los detalles del dossier sobre el escritorio. Supongo que no es del todo completo (intentaré completarlo en función de las diferentes solicitudes que reciba), pero espero que, gracias a él, podáis empezar a crear plugins para Jeedom.

## Consejos y trucos

### Asistente de cron

````js
$('body').delegate('.helpSelectCron','click',function() {
  var el = $(this).closest('.schedule').find('.scenarioAttr[data-l1key=schedule]')
  jeedom.getCronSelectModal({},function (result) {
    el.value(result.value)
  })
})
````

Al hacer clic en el botón del asistente, se abre el campo de entrada en el que escribir y, a continuación, se activa el asistente. Una vez finalizada la configuración en el asistente, se recupera el resultado y se escribe en el campo de entrada seleccionado anteriormente.

# Creación del plugin, parte 4: carpeta «core»

Es, con diferencia, la carpeta más importante de tu plugin y puede contener hasta 4 subcarpetas.

Nota: a lo largo de esta sección, el ID de tu plugin se indicará como: plugin\_id

## PHP

Contiene los archivos PHP complementarios; suelo incluir, por ejemplo, un archivo de inclusión si, claro está, tienes varios archivos de clase o de terceros que incluir.

## Plantilla

Esta carpeta, que puede contener dos subcarpetas («dashboard» y «mobile»), es una carpeta que Jeedom analiza automáticamente en busca de widgets, por lo que, si utilizas widgets específicos, es aquí donde debes colocar sus archivos HTML.

## i18n

Aquí es donde debe encontrarse tu traducción en formato JSON (lo mejor es consultar, por ejemplo, el plugin [Z-Wave](https://github.com/jeedom/plugin-openzwave), para ver el formato del archivo)

## AJAX

Esta carpeta es para todos tus archivos AJAX; aquí tienes un modelo de archivo AJAX:

````php
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

## clase

Este es un archivo muy importante, ya que es el motor de tu plugin. Aquí es donde se incluyen las dos clases obligatorias de tu plugin:

- ``plugin\_id``
- ``plugin\_idCmd``

La primera debe heredar de la clase eqLogic y la segunda, de cmd. Aquí tienes una plantilla:

````php
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

class plugin_id extends eqLogic {

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

Para conocer la definición de las clases de Jeedom, te invito a consultar este [página web](/phpdoc/)

El único método obligatorio es el método de instancia de la clase `cmd.execute`. A continuación se muestra un ejemplo con el complemento S.A.R.A.H:

````php
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

Un ejemplo bastante sencillo pero completo: el principio es el siguiente: si el comando es una acción o una información (pero no solo un evento y su caché ha caducado), entonces Jeedom llama a este método.

En nuestro ejemplo, se trata de un comando para hacer que S.A.R.A.H hable, en el que el complemento recupera los parámetros de \$\_options (atención: se trata de un array y sus atributos varían en función del subtipo del comando: «color» para un subtipo «color», «slider» para un subtipo «slider», «title» y «message» para un subtipo «message» y vacío para un subtipo «other»).

Esto es lo que hay que saber sobre la parte obligatoria; a continuación, te mostramos lo que se puede utilizar además (con ejemplos):

### toHtml(\$\_version = 'dashboard')

Función que se puede utilizar en el sistema de control o en el equipo, según las necesidades; a continuación se muestra un ejemplo para el equipo

````php
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

Hay varias cosas interesantes aquí:

Para convertir la versión solicitada en un panel de control o en una versión móvil (por ejemplo, «mview» pasa a ser «mobile», lo que permite, entre otras cosas, añadir el nombre de los objetos en las vistas)

````php
$_version = jeedom::versionAlias($_version);
````

Recuperación de una plantilla de comando; en este caso, la plantilla de comando: plugins/weather/core/template/\$\_version/forecast.html (\$\_version puede ser «mobile» o «dashboard»)

````php
$forcast_template = getTemplate('core', $_version, 'forecast', 'weather');
````

Aquí se sustituyen las etiquetas previamente rellenadas en \$replace del HTML para que contengan los valores

````php
$html_forecast .= template_replace($replace, $forcast_template);
````

Esto permite recuperar el comando con el identificador logical\_id: temperature\_min

````php
$this->getCmd(null, 'temperature_min');
````

En este caso, permite introducir el valor en la etiqueta, solo si el comando se ha recuperado correctamente

````php
$replace['#temperature#'] = is_object($temperature) ? $temperature->execCmd() : '';
````

Punto importante: esto permite recuperar las personalizaciones realizadas por el usuario en la página General → Visualización y volver a aplicarlas a la plantilla

````php
$parameters = $this->getDisplay('parameters');
if (is_array($parameters)) {
    foreach ($parameters as $key => $value) {
        $replace['#' . $key . '#'] = $value;
    }
}
````

Almacenamiento del widget en la caché: para que, en la próxima solicitud, se muestre más rápidamente, cabe destacar el 0 que aparece aquí, que indica una vida útil infinita; de lo contrario, la duración se mide en segundos (en la siguiente sección veremos cómo el plugin de tiempo actualiza su widget).

````php
cache::set('weatherWidget' . $_version . $this->getId(), $html, 0);
````

Por último, envío del código HTML a Jeedom:

````php
return $html;
````

También hay que indicar a Jeedom qué opciones de personalización permite tu widget. Es un poco complejo (aunque no tanto), pero normalmente es flexible y fácil de configurar.

Funciona de la misma manera en tu equipo o control: es un atributo estático de la clase \$\_widgetPossibility que debe ser una matriz multidimensional, pero ahí es donde se complica la cosa si una dimensión de la matriz tiene el valor «true» o «false». En ese caso, considera que todos los elementos secundarios posibles tienen ese valor (voy a poner un ejemplo).

En primer lugar, los casos en los que debes utilizarlo: si tu clase, que hereda de eqLogic o de cmd, tiene una función toHtml; de lo contrario, no vale la pena seguir leyendo.

### Método previo y posterior

Al crear o eliminar tus objetos (equipos, controles u otros) en Jeedom, este puede llamar a varios métodos antes y después de la acción:

- ``preInsert`` ⇒ Método que se invoca antes de crear tu objeto
- ``postInsert`` ⇒ Método que se invoca tras la creación de tu objeto
- ``preUpdate`` ⇒ Método que se invoca antes de actualizar tu objeto
- ``postUpdate`` ⇒ Método que se invoca tras la actualización de tu objeto
- ``preSave`` ⇒ Método que se invoca antes de guardar (es decir, crear y actualizar) tu objeto
- ``postSave`` ⇒ Método que se invoca tras guardar el objeto
- ``preRemove`` ⇒ Método que se invoca antes de eliminar tu objeto
- ``postRemove`` ⇒ Método que se invoca tras la eliminación de tu objeto

Ejemplo, siempre con el plugin de tiempo, sobre la creación de comandos o su actualización tras guardarlos (el ejemplo está simplificado):

````php
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

El principio es bastante estándar, con la creación de un comando; el final es más interesante, con la configuración de un cron que llamará al método ``weather::updateWeatherData`` pasando el ID del dispositivo que se va a actualizar cada 30 minutos por defecto.

Aquí está el método updateWeatherData (también simplificado):

````php
public static function updateWeatherData($_options) {
  $weather = weather::byId($_options['weather_id']);
  if (is_object($weather)) {
      foreach ($weather->getCmd('info') as $cmd) {
        $weather->checkAndUpdateCmd($cmd,$cmd->execute());
      }
  }
}
````

Aquí vemos que, al realizar la llamada, se recupera el equipo en cuestión y, a continuación, se ejecutan los comandos para obtener los valores y actualizarlos si es necesario.

Parte muy importante:

````php
$weather->checkAndUpdateCmd($cmd,$cmd->execute());
````

En el momento de la función ``checkAndUpdateCmd`` (que permite notificar a Jeedom una nueva actualización del valor, lo que activa todas las acciones que deben realizarse: actualización del panel de control, comprobación de los escenarios…​),

En cuanto a la clase «command», hay un pequeño detalle que debes tener en cuenta si utilizas la plantilla js básica. Al enviar los comandos, Jeedom compara los comandos y elimina aquellos que están en la plantilla básica pero no en la nueva definición del dispositivo. Así es como puedes evitarlo:

````php
public function dontRemoveCmd() {
  return true;
}
````

Para terminar, aquí tienes algunos consejos y trucos:

- Evita (a menos que sepas lo que estás haciendo) sobrescribir un método de la clase heredada (esto puede causar muchos problemas)
- Para mostrar el nivel de batería (en %) de un dispositivo, haz lo siguiente en dicho dispositivo (Jeedom se encargará del resto y avisará al usuario si es necesario):

````php
$eqLogic->batteryStatus(56);
````

- En los comandos, al añadir un valor, Jeedom aplica el método de instancia ``formatValue($_value)`` que, según el subtipo, puede reformatearla (especialmente en el caso de los valores binarios)
- NUNCA crees un método en la clase que herede de cmd llamado: execCmd o event
- Si en la configuración de tu comando has introducido returnStateTime (en minutos) y returnStateValue, Jeedom cambiará automáticamente el valor de tu comando por returnStateValue al cabo de X minutos.
- Además, para el comando, puedes utilizar addHistoryValue para forzar el registro en el historial (atención: tu comando debe poder registrarse en el historial)
