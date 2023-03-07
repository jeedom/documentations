# Plantilla de complemento de documentación

Puedes encontrar una base de datos de complementos vacía [aquí](https:/ // /github.com/ /jeedom/ /plugin-template)

# Creación de complementos parte 1 : l'arborescence

Aquí esta su estructura: primero una carpeta con el nombre de su complemento (su identificador único más precisamente) que debe contener las siguientes subcarpetas :

- ``3rdparty`` : Carpeta que contiene las bibliotecas externas utilizadas en el complemento (ejemplo para el complemento de SMS, una biblioteca para comunicación en serie en php).
- ``core`` : Carpeta que contiene todos los archivos operativos internos.
  - ``class`` : Carpeta que contiene la clase de complemento.
  - ``php`` : Carpeta que puede contener funciones que no tienen que pertenecer a una clase (a menudo utilizada para permitir la inclusión de múltiples clases o archivos de configuración a la vez).
  - ``config`` : Archivo de configuración del complemento.
  - ``ajax`` : Carpeta que contiene archivos de destino de llamadas AJAX.
  - ``i18n`` : Carpeta que contiene archivos .plugin traducción json.
  - ``template`` : Carpeta que contiene las plantillas html para mosaicos específicos del equipo del complemento, en el tablero y las subcarpetas móviles.
- ``desktop`` : Carpeta que contiene la vista "escritorio" del complemento (en contraste con la vista "móvil"").
  - ``js`` : Carpeta que contiene todos los archivos de tipo javascript para la interfaz del complemento.
  - ``php`` : Carpeta que contiene todos los archivos de tipo php para la interfaz del complemento.
  - ``css`` : Si es necesario, todos los archivos css del complemento, posiblemente incluidos *fuentes*.
  - ``modal`` : Carpeta que contiene el código modal del complemento.
  - ``img`` : Carpeta para las imágenes (png, jpg, etc.) que necesita el complemento.
- ``plugin_info`` : Contiene los archivos que permiten a Jeedom calificar el complemento, instalarlo y configurarlo.
  - ``info.json`` : Archivo que contiene información básica sobre el complemento .Es obligatorio, de lo contrario, Jeedom no verá el complemento. Contiene, entre otras cosas, el identificador del módulo, descripción, instrucciones de instalación, etc
  - ``install.php`` : Archivo que contiene (si es necesario) los métodos para instalar y desinstalar el complemento.
  - ``configuration.php`` : Archivo que contiene los parámetros para configurar el complemento independientemente de su equipo (ejemplo para el módulo Zwave, la Raspberry Pi ip con la tarjeta Razberry)
- ``docs`` : Debe contener el documento del complemento en formato markdown, la raíz y el archivo index.md. Todas las imágenes están en documentos / imágenes. El documento en sí está en una carpeta dependiendo del idioma (ej. En francés : ``docs/ /fr\_FR``)
- ``ressources`` : Carpeta para posibles demonios y dependencias.
- ``data`` : Carpeta utilizada para archivos generados por el complemento específico para Jeedom del usuario.

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

# Creación de complementos parte 2 : carpeta del complemento de información

## ``info.json``

Ver [aquí](https:/ // /doc.jeedom.com/es_ES/dev/ /structure_info_json)

## ``install.php``

Archivo que da instrucciones para instalar un complemento :

Se compone de la siguiente manera :

La primera parte comentada contiene la licencia (es mejor). El que se usa aquí indica que el archivo pertenece a Jeedom y que es de código abierto Luego viene la inclusión del núcleo de Jeedom (esto permite el acceso a las funciones internas) Luego vienen las 3 funciones :

- ``pluginid_install()`` : método para instalar el complemento. Aquí la instalación agrega un trabajo cron a Jeedom
- ``pluginid_update()`` : método para instalar el complemento. Se usa aquí para reiniciar la tarea cron
- ``pluginid_remove()`` : método para eliminar el complemento. Aquí la función elimina la tarea cron de Jeedom durante la desinstalación

Ejemplo :

````php
<?php
/ * Este archivo es parte de Jeedom.
 *
 * Jeedom es software libre: puedes redistribuirlo y / o modificar
 * bajo los términos de la Licencia Pública General GNU publicada por
 * la Free Software Foundation, ya sea la versión 3 de la Licencia, o
 * (a su elección) cualquier versión posterior.
 *
 * Jeedom se distribuye con la esperanza de que sea útil,
 * objetivo SIN NINGUNA GARANTÍA; sin siquiera la garantía implícita de
 * COMERCIABILIDAD o APTITUD PARA UN PROPÓSITO PARTICULAR. Ver el
 * Licencia pública general GNU para más detalles.
 *
 * Debería haber recibido una copia de la Licencia Pública General GNU
 * junto con Jeedom. If not, see <http:/ // /www.gnu.org/ /licenses/ />.
 */ /
require_once dirname (__ FILE__). '/../../../core/php/core.inc.php';

función openzwave_install() {
    $cron = cron::byClassAndFunction('zwave', 'pull');
    tejo (!is_object ($ cron)) {
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
    tejo (!is_object ($ cron)) {
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
    si (is_object ($ cron)) {
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
/ * Este archivo es parte de Jeedom.
 *
  * Jeedom es software libre: puedes redistribuirlo y / o modificar
 * bajo los términos de la Licencia Pública General GNU publicada por
 * la Free Software Foundation, ya sea la versión 3 de la Licencia, o
 * (a su elección) cualquier versión posterior.
 *
 * Jeedom se distribuye con la esperanza de que sea útil,
 * objetivo SIN NINGUNA GARANTÍA; sin siquiera la garantía implícita de
 * COMERCIABILIDAD o APTITUD PARA UN PROPÓSITO PARTICULAR. Ver el
 * Licencia pública general GNU para más detalles.
 *
  * Debería haber recibido una copia de la Licencia Pública General GNU
 * junto con Jeedom. If not, see <http:/ // /www.gnu.org/ /licenses/ />.
  */ /

 require_once dirname (__ FILE__). '/../../../core/php/core.inc.php';
include_file ('núcleo', 'autenticación', 'php');
tejo (!isConnect()) {
    include_file('desktop', '404', 'php');
    die();
 }
 ?>
 <form class="form-horizontal">
     <fieldset>
         <div class="form-group">
             <label class="col-lg-2 control-label">Zway IP</ /label>
             <div class="col-lg-2">
                 <input class="configKey form-control" data-l1key="zwaveAddr" / />
             </ /div>
         </ /div>
         <div class="form-group">
             <label class="col-lg-4 control-label">Supprimer automatiquement les périphériques exclus</ /label>
             <div class="col-lg-4">
                 <input type="checkbox" class="configKey" data-l1key="autoRemoveExcludeDevice" / />
             </ /div>
         </ /div>
         <div class="form-group">
             <label class="col-lg-4 control-label">J'utilise un serveur openzwave</ /label>
             <div class="col-lg-4">
                 <input type="checkbox" class="configKey" data-l1key="isOpenZwave" / />
             </ /div>
         </ /div>
     </ /fieldset>
 </ /form>
 ````

# Creación de complementos parte 3 : carpeta de escritorio

## PHP

Esta carpeta contiene la vista misma. En el interior, debe encontrar la página de configuración del complemento (la que aparecerá cuando el usuario realice el complemento ⇒ categoría ⇒ su complemento). Es recomendable nombrarlo con la identificación de su complemento. También puede contener el panel (página que el usuario encontrará en la página de inicio → nombre de su complemento).

Todos los archivos en esta carpeta deben terminar ``.php`` y debe comenzar con :

````php
<?php
tejo (!isConnect ('administrador')) {
    lanzar una nueva excepción ('{{401 - Acceso no autorizado}}');
 }
 sendVarToJS ('eqType', 'correo');
 ?>
 ````

Une fois sur cette page vous aurez accès en php à toutes les fonctions du core de jeedom (voir [aquí](https:/ // /www.jeedom.com/ /doc/ /documentation/ /code/ /) ) ainsi qu'à celles de tous les modules installés donc le vôtre aussi.

Toutes ces pages étant des vues elles utilisent principalement la syntaxe HTML. Pour tout ce qui est présentation, Jeedom se base principalement sur bootstrap donc toute la [documentation](http:/ // /getbootstrap.com/ /) est applicable.

Pour simplifier la création de plugin vous pouvez inclure dans votre page le script javascript de template pour les plugins :

````php
<?php include_file('core', 'plugin.template', 'js'); ?>
````

Para poner en la parte inferior de su página y útil solo en la página de configuración de su complemento. Este script hace posible reducir el javascript obligatorio a una sola función (ver sección sobre archivos JS).

En su página de configuración, se implementó una sintaxis HTML para simplificar su vida. Entonces, para la mayoría de los complementos, solo tendrá que hacer HTML para almacenar su información en la base de datos y, por lo tanto, usarla en el lado de su clase.

La sintaxis es bastante simple: su elemento (input, select ...) debe tener la clase css eqLogicAttr (o cmdAttr para comandos) y un atributo que indique el nombre de la propiedad :

````html
<input type="text" class="eqLogicAttr form-control" data-l1key="name" placeholder="{{Nom de l'équipement mail}}"/ />
````

Là, par exemple, lors du chargement des données jeedom mettra la valeur du nom de l'équipement dans l'input et lors de la sauvegarde récupérera celle-ci pour la remettre en base de données. Petite astuce certaines propriétés sont en fait des chaînes JSON en BDD (cela permet d'avoir vraiment pas mal de liberté pour le plugin), dans ce cas il suffit de faire :

````html
<input class="eqLogicAttr form-control" data-l1key='configuration' data-l2key='fromName' / />
````

Para ver la lista de propiedades de equipos y comandos, está aquí (para ver las propiedades que son JSON, solo mire el getter o el setter, si toma 2 parámetros, entonces es JSON)

Último punto importante en la página de configuración: esto puede contener tantos equipos y comandos como sea necesario. Sin embargo, hay algunas reglas a seguir :

Todos los elementos que tienen la clase eqLogicAttr deben estar en un elemento que tenga la clase css eqLogic Ditto para los elementos de la clase css cmdAttr que deben estar en un elemento de la clase cmd. Todos los comandos de un equipo deben estar en el elemento que tenga la clase eqLogic correspondiente

## JS

Todos los archivos JS deben estar en la carpeta JS (fácil !!!). Es aconsejable nombrarlo con la misma ID que su complemento (en la parte de configuración, para el panel que haga como desee). Este archivo JS (el de la configuración del complemento) debe contener al menos un método addCmdToTable que tome el objeto de comando para agregarlo como parámetro. Aquí hay un ejemplo simple :

````php
función addCmdToTable (_cmd) {
    tejo (!isset (_cmd)) {
        var _cmd = {configuración: {}};
     }
    var tr = ''; tr + = '';
     <html>tr + = ' : ninguno; "> ';
    tr + = '<input class="cmdAttr form-control input-sm" data-l1key="name"> '; tr + = '<input class="cmdAttr form-control input-sm" data-l1key="configuration" data-l2key="recipient"> '; tr + = '';
     <html>tr + = ' : ninguno; "> ';
     <html>tr + = ' : ninguno; "> ';
     si (es_numeric (_cmd.id)) {
        tr + = ' <a class="btn btn-default btn-xs cmdAction" data-action="test"><i class="fa fa-rss"></i>{{Prueba}}</a> ';
     }
     tr + = '<i class="fa fa-minus-circle pull-right cmdAction cursor" data-action="remove"></i></td> ';
    tr + = '';
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
función addCmdToTable (_cmd) {
    tejo (!isset (_cmd)) {
        var _cmd = {};
    }
     tejo (!isset (_cmd.configuration)) {
        _cmd.configuration = {};
    }
     var selRequestType = '<select style="width : 90px;" class="cmdAttr form-control input-sm" data-l1key="configuration" data-l2key="requestType">';
     selRequestType += '<option value="script">{{Script}}</ /option>';
     selRequestType += '<option value="http">{{Http}}</ /option>';
     selRequestType += '</ /select>';
    var tr = '';     tr += '<input class="cmdAttr form-control input-sm" data-l1key="name" style="width : 140px;">';
    tr += '<input class="cmdAttr form-control input-sm" data-l1key="id"  style="display : ninguno; "> ';
    tr += '' + selRequestType;
    tr += '<div class="requestTypeConfig" data-type="http">';
    tr += '<input type="checkbox" class="cmdAttr" data-l1key="configuration" data-l2key="noSslCheck" / />Ne pas vérifier SSL';
    tr += '</ /div>';
    tr + = '';     tr + = '';
    tr += '<span class="type" type="' + init(_cmd.type) + '">' + jeedom.cmd.availableType() + '</ /span>';
    tr += '<span class="subType" subType="' + init(_cmd.subType) + '"></ /span>';
    tr + = '';     tr += '<textarea style="height : 95px;" class="cmdAttr form-control input-sm" data-l1key="configuration" data-l2key="request"></ /textarea>';
    tr += '<a class="btn btn-default browseScriptFile cursor input-sm" style="margin-top : 5px;"><i class="fa fa-folder-open"></ /i> {{Parcourir}}</ /a> ';
    tr += '<a class="btn btn-default editScriptFile cursor input-sm" style="margin-top : 5px;"><i class="fa fa-edit"></ /i> {{Editer}}</ /a> ';
    tr += '<a class="btn btn-success newScriptFile cursor input-sm" style="margin-top : 5px;"><i class="fa fa-file-o"></ /i> {{Nouveau}}</ /a> ';
    tr += '<a class="btn btn-danger removeScriptFile cursor input-sm" style="margin-top : 5px;"><i class="fa fa-trash-o"></ /i> {{Supprimer}}</ /a> ';
    tr += '<a class="btn btn-warning bt_shareOnMarket cursor input-sm" style="margin-top : 5px;"><i class="fa fa-cloud-upload"></ /i> {{Partager}}</ /a> ';
    tr += '</ /div>';
    tr + = '';     tr + = '';
    tr += '<input class="cmdAttr form-control tooltips input-sm" data-l1key="unite"  style="width : 100px;" placeholder="{{Unité}}" title="{{Unité}}">';
    tr += '<input class="tooltips cmdAttr form-control input-sm" data-l1key="configuration" data-l2key="minValue" placeholder="{{Min}}" title="{{Min}}"> ';
    tr += '<input class="tooltips cmdAttr form-control input-sm" data-l1key="configuration" data-l2key="maxValue" placeholder="{{Max}}" title="{{Max}}">';
    tr + = '';     tr + = '';
    tr += '<span><input type="checkbox" class="cmdAttr" data-l1key="isHistorized" / /> {{Historiser}}<br/ /></ /span>';
    tr + = '';     tr + = '';
    si (es_numeric (_cmd.id)) {
    tr + = ' <a class="btn btn-default btn-xs cmdAction" data-action="test"><i class="fa fa-rss"></i>{{Prueba}}</a> ';
    }
    tr + = '<i class="fa fa-minus-circle pull-right cmdAction cursor" data-action="remove"></i></td> ';
    tr + = '';
    $('#table_cmd tbody').append(tr);
    $('#table_cmd tbody tr:last').setValues(_cmd, '.cmdAttr');

    tejo (isset (_cmd.configuration.requestType)) {
        $('#table_cmd tbody tr:last .cmdAttr[data-l1key=configuration][data-l2key=requestType]').value(init(_cmd.configuration.requestType));
        $('#table_cmd tbody tr:last .cmdAttr[data-l1key=configuration][data-l2key=requestType]').trigger('change');
    }

     tejo (isset (_cmd.type)) {
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

````php
<?php include_file('desktop', 'weather', 'js', 'weather'); ?>
````

Le premier argument donne le dossier dans lequel le trouver (attention c'est le dossier père du dossier JS), le deuxième le nom de votre javascript, le troisième indique à Jeedom que c'est un fichier Js et le dernier dans quel plugin il se trouve.

## CSS

Ce dossier contient vos fichiers CSS (il ne devrait pas être trop utilisé) , voaquí comment les inclure sur votre page :

````php
<?php include_file('desktop', 'weather', 'css', 'weather'); ?>
````

El primer argumento le da a la carpeta en la que encontrarlo (la atención es la carpeta principal de la carpeta CSS), el segundo el nombre de su archivo CSS, el tercero le dice a Jeedom que es un archivo CSS y el último en el que el complemento se encuentra.

## MODAL

La carpeta modal le permite almacenar sus archivos php destinados a mostrar modales. Aquí se explica cómo llamarlos desde su página principal (este código está en un archivo javascript) :

Podemos ver :

````js
$('#md_modal').dialog({title: "{{Classe du périphérique}}"}).load('index.php?v=d&plugin=zwave&modal=show.class&id=' + $('.eqLogicAttr[data-l1key=id]').value()).dialog('open')
````

La première ligne permet de mettre un titre à votre modal

La deuxième ligne charge votre modal et l'affichage. La sintaxis es bastante simple : plugin, l'Identificación de votre plugin, modal, le nom de votre modal sans le php et ensuite les paramètres que vous voulez lui passer

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

Cuando hacemos clic en el botón del asistente, obtenemos la entrada para escribir y luego llamamos al asistente. Una vez que la configuración finaliza en el asistente, el resultado se recupera y luego se escribe en la entrada previamente seleccionada

# Creación de complementos parte 4 : carpeta principal

Con mucho, la carpeta más importante de su complemento, puede incluir 4 subcarpetas.

Nota : a lo largo de esta parte, el ID de su complemento será referenciado por : plug-in\_id

## PHP

Contiene los archivos PHP anexos, solía poner, por ejemplo, un archivo de inclusión si, por supuesto, tiene varios archivos de clase o 3rparty para incluir

## Template

Que puede contener 2 subcarpetas, tablero y dispositivo móvil, es una carpeta que Jeedom escanea automáticamente en busca de un widget, por lo que si está utilizando widgets específicos, aquí es donde debe colocar su archivo HTML

## i18n

Aquí es donde su traducción debe estar en forma de un archivo json (mejor y busque, por ejemplo, el complemento [Zwave](https:/ // /github.com/ /jeedom/ /plugin-openzwave) para ver la forma del archivo)

## ajax

Esta carpeta es para todos sus archivos ajax, aquí hay un esqueleto de archivo ajax :

````php
<?php

/ * Este archivo es parte de Jeedom.
 *
 * Jeedom es software libre: puedes redistribuirlo y / o modificar
 * bajo los términos de la Licencia Pública General GNU publicada por
 * la Free Software Foundation, ya sea la versión 3 de la Licencia, o
 * (a su elección) cualquier versión posterior.
 *
 * Jeedom se distribuye con la esperanza de que sea útil,
 * objetivo SIN NINGUNA GARANTÍA; sin siquiera la garantía implícita de
 * COMERCIABILIDAD o APTITUD PARA UN PROPÓSITO PARTICULAR. Ver el
 * Licencia pública general GNU para más detalles.
 *
 * Debería haber recibido una copia de la Licencia Pública General GNU
 * junto con Jeedom. If not, see <http:/ // /www.gnu.org/ /licenses/ />.
 */ /

tratar {
    require_once dirname (__ FILE__). '/../../../../core/php/core.inc.php';
    include_file ('núcleo', 'autenticación', 'php');

    tejo (!isConnect ('administrador')) {
        lanzar nueva Excepción (__ ('401 - Acceso no permitido', __FILE__));
    }

    if (init ('acción') == 'tu acción') {
        ajax::éxito ($ resultado);
    }

    lanzar nueva Excepción (__ ('No hay coincidencia de método : ', __ARCHIVO__). init ('acción'));
    / /*     * *********Captura de excepción*************** */ /
} catch (Excepción $ e) {
    ajax::error (displayExeption ($ e), $ e-> getCode ());
}
?>
````

## class

Dossier très important, c'est le moteur de votre plugin. C'est là que viennent les 2 classes obligatoires de votre plugin :

- ``plug-in\_id``
- ``plug-in\_idCmd``

La première devant hériter de la classe eqLogic et la deuxième de cmd. Voaquí un template :

````php
<?php

/ * Este archivo es parte de Jeedom.
 *
 * Jeedom es software libre: puedes redistribuirlo y / o modificar
 * bajo los términos de la Licencia Pública General GNU publicada por
 * la Free Software Foundation, ya sea la versión 3 de la Licencia, o
 * (a su elección) cualquier versión posterior.
 *
 * Jeedom se distribuye con la esperanza de que sea útil,
 * objetivo SIN NINGUNA GARANTÍA; sin siquiera la garantía implícita de
 * COMERCIABILIDAD o APTITUD PARA UN PROPÓSITO PARTICULAR. Ver el
 * Licencia pública general GNU para más detalles.
 *
 * Debería haber recibido una copia de la Licencia Pública General GNU
 * junto con Jeedom. If not, see <http:/ // /www.gnu.org/ /licenses/ />.
 */ /

/ /* * ***************************Includes********************************* */ /
require_once dirname (__ FILE__). '/../../../../core/php/core.inc.php';

class plugin_Identificación extends eqLogic {

    / /*     * *************************Attributs****************************** */ /


    / /*     * ***********************Methode static*************************** */ /


    / /*     * *********************Methode d'instance************************* */ /


    / /*     * **********************Getteur Setteur*************************** */ /

}

class plugin_idCmd extends cmd {

    / /*     * *************************Attributs****************************** */ /


    / /*     * ***********************Methode static*************************** */ /


    / /*     * *********************Methode d'instance************************* */ /


    / /*     * **********************Getteur Setteur*************************** */ /

}

?>
````

Para la definición de clases de libertad, los invito a consultar esto [Sitio](https:/ // /doc.jeedom.com/ /dev/ /phpdoc/ /4.0/ /)

El único método obligatorio es el método de instancia en la clase de ejecución cmd, aquí hay un ejemplo con el complemento SARAH :

````php
función pública ejecutar ($ _ opciones = matriz()) {
      tejo (!isset ($ _ opciones ['título']) && !isset ($ _ opciones ['mensaje'])) {
          lanzar nueva Excepción (__ ("El título o el mensaje no pueden estar vacíos al mismo tiempo", __FILE__));
      }
      $eqLogic = $this->getEqLogic();
      $message = '';
      if (isset ($ _ opciones ['título'])) {
          $message = $_options['title'] . '. ';
      }
      $message .= $_options['message'];
      $http = new com_http($eqLogic->getConfiguration('addrSrvTts') . '/ /?tts=' . urlencode($message));
      return $ http-> exec ();
  }
  ````

Ejemplo assez simple mais complet, le principe est le suivant, si la commande est une action ou une info (mais pas en événement seulement et que son Cubierta est dépassé) alors jeedom appelle cette méthode.

Dans notre exemple aquí c'est une commande pour faire parler S.A.R.A.H, où le plugin récupère les paramètres dans \$\_options (attention c'est un tableau et ses attributs changent en fonction du sous-type de la commande : color pour un sous-type color, slider pour un sous-type slider, title et message pour un sous-type message et vide pour un sous-type other).

Voila pour la partie obligatoire, voila maintenant ce qui peut être utilisé à coté (avec exemple) :

### toHtml(\$\_version = 'dashboard')

Fonction utilisable dans la commande ou dans l'équipement, en fonction des besoins, voaquí un exemple pour l'équipement

````php
public function toHtml($_version = 'dashboard') {
    $replace = $this->preToHtml($_version);
    tejo (!is_array($replace)) {
        return $replace;
    }
    $version = jeedom::versionAlias($_version);
    $replace['#forecast#'] = '';
    tejo ($version != 'mobile' || $this->getConfiguration('fullMobileDisplay', 0) == 1) {
        $forcast_template = getTemplate('core', $version, 'forecast', 'weather');
        for ($i = 0; $i < 5; $i++) {
            $replaceDay = array();
            $replaceDay['#day#'] = date_fr(date('l', strtotime('+' . $i . ' days')));

            tejo ($i == 0) {
                $temperature_min = $this->getCmd(null, 'temperature_min');
            } else {
                $temperature_min = $this->getCmd(null, 'temperature_' . $i . '_min');
            }
            $replaceDay['#low_temperature#'] = is_object($temperature_min) ? $temperature_min->execCmd() : '';

            tejo ($i == 0) {
                $temperature_max = $this->getCmd(null, 'temperature_max');
            } else {
                $temperature_max = $this->getCmd(null, 'temperature_' . $i . '_max');
            }
            $replaceDay['#hight_temperature#'] = is_object($temperature_max) ? $temperature_max->execCmd() : '';
            $replaceDay['#tempid#'] = is_object($temperature_max) ? $temperature_max->getId() : '';

            tejo ($i == 0) {
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
    tejo (strlen($replace['#sunrise#']) == 3) {
        $replace['#sunrise#'] = substr($replace['#sunrise#'], 0, 1) . ':' . substr($replace['#sunrise#'], 1, 2);
    } else tejo (strlen($replace['#sunrise#']) == 4) {
        $replace['#sunrise#'] = substr($replace['#sunrise#'], 0, 2) . ':' . substr($replace['#sunrise#'], 2, 2);
    }

    $sunset = $this->getCmd(null, 'sunset');
    $replace['#sunset#'] = is_object($sunset) ? $sunset->execCmd() : '';
    tejo (strlen($replace['#sunset#']) == 3) {
        $replace['#sunset#'] = substr($replace['#sunset#'], 0, 1) . ':' . substr($replace['#sunset#'], 1, 2);
    } else tejo (strlen($replace['#sunset#']) == 4) {
        $replace['#sunset#'] = substr($replace['#sunset#'], 0, 2) . ':' . substr($replace['#sunset#'], 2, 2);
    }

    $wind_direction = $this->getCmd(null, 'wind_direction');
    $replace['#wind_direction#'] = is_object($wind_direction) ? $wind_direction->execCmd() : 0;

    $refresh = $this->getCmd(null, 'refresh');
    $replace['#refresh_id#'] = is_object($refresh) ? $refresh->getId() : '';

    $condition = $this->getCmd(null, 'condition_now');
    $sunset_time = is_object($sunset) ? $sunset->execCmd() : null;
    $sunrise_time = is_object($sunrise) ? $sunrise->execCmd() : null;
    tejo (is_object($condition)) {
        $replace['#icone#'] = self::getIconFromCondition($condition->execCmd(), $sunrise_time, $sunset_time);
        $replace['#condition#'] = $condition->execCmd();
        $replace['#conditionid#'] = $condition->getId();
        $replace['#collectDate#'] = $condition->getCollectDate();
    } else {
        $replace['#icone#'] = '';
        $replace['#condition#'] = '';
        $replace['#collectDate#'] = '';
    }
    tejo ($this->getConfiguration('modeImage', 0) == 1) {
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

Para convertir la versión solicitada en panel de control o móvil (mview se convierte en móvil, por ejemplo, esto permite, por ejemplo, en las vistas agregar el nombre de los objetos)

````php
$_version = jeedom::versionAlias($_version);
````

Récupération d'un template de commande, aquí le template de commande : plugins/ /weather/ /core/ /template/ /\$\_version/ /forecast.HTML (\$\_version valant mobile ou dashboard)

````php
$forcast_template = getTemplate('core', $_version, 'forecast', 'weather');
````

Aquí reemplace las etiquetas rellenadas previamente en \ $ replace HTML para contener los valores

````php
$html_forecast .= template_replace($replace, $forcast_template);
````

Cela permet de récupérer la commande ayant le logical\_Identificación : temperature\_min

````php
$this->getCmd(null, 'temperature_min');
````

Aquí permite poner el valor en la etiqueta, solo si el pedido ha sido recuperado

````php
$replace['#temperature#'] = is_object($temperature) ? $temperature->execCmd() : '';
````

Passage important: cela permet de récupérer les personnalisations faites par l'utilisateur sur la page Générale → Affichage et de les réinjecter dans le template

````php
$parameters = $this->getDisplay('parameters');
tejo (is_array($parameters)) {
    foreach ($parameters as $key => $value) {
        $replace['#' . $key . '#'] = $value;
    }
}
````

Guardar el widget en el caché: para que durante la próxima solicitud la proporcionemos más rápido, podemos notar el 0 aquí que indica una vida útil infinita, de lo contrario, la duración es en segundos (veremos en la siguiente parte cómo el plugin meteorológico actualiza su widget).

````php
cache::set ('weatherWidget' . $_version . $this->getId(), $html, 0);
````

Enfin envoi du HTML à Jeedom :

````php
return $html;
````

También debes decirle a Jeedom lo que permite tu widget en términos de personalización. Es un poco complejo (y de nuevo) pero normalmente flexible y fácil de configurar.

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

````php
función pública postUpdate() {
      $weatherCmd = $this->getCmd(null, 'temperature');
      tejo (!is_object ($ weatherCmd)) {
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
      tejo (!is_object ($ cron)) {
          $cron = new cron();
          $cron->setClass('weather');
          $cron->setFunction('updateWeatherData');
          $cron->setOption(array('weather_id' => intval($this->getId())));
      }
      $cron->setSchedule($this->getConfiguration('refreshCron', '*/ /30 * * * *'));
      $cron->save();
}
````

Le début est assez standard avec la création d'une commande, la fin est plus intéressante avec la mise en place d'un cron qui va appeler la méthode ``weather::updateWeatherData`` en passant l'Identificación de l'équipement à mettre à jour toute les 30min par défaut.

Ici la méthode updateWeatherData (simplifiée aussi) :

````php
public static function updateWeatherData($_options) {
  $weather = weather::byId($_options['weather_id']);
  tejo (is_object($weather)) {
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

Para terminar aquí hay algunos consejos y trucos :

- evite (a menos que sepa lo que está haciendo) sobrescribir un método de la clase heredada (esto puede causar muchos problemas)
- Para volver a montar la batería (en%) de un equipo, hágalo (Jeedom se encargará del resto y advertirá al usuario si es necesario) :

````php
$eqLogic->batteryStatus(56);
````

- Sur les commandes au moment de l'ajout d'une valeur Jeedom applique la méthode d'instance ``formatValue($_value)`` qui, en fonction du sous-type, peut la remettre en forme (en particulier pour les valeurs binaires)
- ne faites JAMAIS une méthode dans la class héritant de cmd s'appelant : execCmd ou event
- si dans la configuration de votre commande vous avez renseigné returnStateTime (en minute) et returnStateValue, Jeedom changera automatique la valeur de votre commande par returnStateValue au bout de X minute(s)
- toujours pour la commande vous pouvez utiliser addHistoryValue pour forcer la mise en historique (attention votre commande doit être historisée)
