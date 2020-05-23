# Documentation plugin template

You can find an empty plugin database [here](https://github.com/jeedom/plugin-template)

# Plugin creation part 1 : l'arborescence

Here is its structure: first a folder with the name of your plugin (its unique identifier more precisely) which must contain the following sub-folders :

- ``3rdparty`` : folder containing the external libraries used in the plugin (example for the SMS plugin a library for serial communication in php)
- ``core`` : folder containing all internal operating files
- ``class`` : folder containing the plugin class
- ``php`` : folder that can contain functions that do not have to belong to a class (often used to allow the inclusion of multiple classes or configuration files at once)
- ``config`` : plugin configuration file
- ``ajax`` : folder containing AJA call target filesX
- ``desktop`` : folder containing the "desktop" view of the plugin (in contrast to the "mobile" view")
 -   ``js`` : folder containing all javascript files
 -   ``php`` : folder containing all the php files that display
 -   ``css`` : there is none here but, if necessary, all the plugin css files go into it
 -   ``modal`` : folder containing the modal code of the plugin
- ``plugin\_info`` : contains the files allowing Jeedom to qualify the plugin, to install and configure it
 -   ``info.json`` : file containing the basic information of the plugin (it is mandatory otherwise Jeedom will not see the plugin), it contains among other things the module identifier, description, installation instructions…
 -   ``install.php`` : file containing (if necessary) the methods for installing and uninstalling the plugin
 -   ``configuration.php`` : file containing the parameters to configure the plugin independent of its equipment (example for the Zwave module, the Raspberry Pi ip with the Razberry card)
- ``docs`` : must contain the plugin doc in markdown format, the root and the index.md file. All images are in docs / images. The doc itself is in a folder depending on the language (ex in French : ``docs/fr\_FR``)

As for the file naming convention, here are the
requirements :

- class php files must end with ``.class.php``
- if it is not managed by an include file, the name of the file must be ``nom\_class.class.php``
- files that serve only as an entry point to include multiple files must end in ``.inc.php``
- configuration files must end with ``.config.php``

Here are the recommendations :

- AJAX files must end with ``.ajax.php``
- the name of the first view page of a plugin must be the same as the plugin ID
- the name of the JS file (if there is one) of the first plugin view page must be the plugin ID

# Plugin creation part 2 : info plugin

## ``info.json``

View [here](https://doc.jeedom.com/en_US/dev/structure_info_json)

## ``installation.php``

File giving instructions for installing a plugin :

It is composed as follows :

The first commented part contains the license (it's better). The one used here indicates that the file belongs to Jeedom and that it is open source Then comes the inclusion of the core of Jeedom (this allows access to internal functions) Then comes the 2 functions :

- ``install_pluginid()`` : method to install the plugin. Here the installation adds a cron job to Jeedom
- ``update_pluginid()`` : method to install the plugin. Used here to restart the cron task
- ``remove_pluginid()`` : method to remove the plugin. Here the function removes the cron task from Jeedom during the uninstall

Example :

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

File for requesting configuration information from the user :

The file consists of :

- The license as before
- The inclusion of the Jeedom core
- Verification that the user is well connected (I include the 404 file because this file is a view type file)

Then comes the requested parameter (it can have several), it is a standard Bootstrap syntax for forms, the only particularities to respect are the class (``configKey``) to put on the parameter element as well as the "data-l1key" which indicates the name of the parameter. To recover the value of it elsewhere in the plugin just do : ``config::byKey(NOM_PARAMETRE, PLUGIN_ID)``

Example :

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

# Plugin creation part 3 : desktop folder

## Php

This folder contains the view itself. Inside, you must find the plugin configuration page (the one that will appear when the user does the plugin ⇒ category ⇒ your plugin). It is advisable to name it with the id of your plugin. It can also contain the panel (page that the user will find in home → name of your plugin).

All files in this folder must end up ``.php`` and must start with :

````
<?php
if (!isConnect('admin')) {
    throw new Exception('{{401 - Accès non autorisé}}');
 }
 sendVarToJS('eqType', 'mail');
 ?>
 ````

Once on this page you will have access in php to all the functions of the core of jeedom (see [here](https://www.jeedom.com/doc/documentation/code/) ) as well as those of all installed modules so yours too.

All these pages being views, they mainly use HTML syntax. For all that is presented, Jeedom is mainly based on bootstrap so all the [Documentation](http://getbootstrap.com/) is applicable.

To simplify the creation of plugins you can include in your page the javascript template script for plugins :

````
<?php include_file('core', 'plugin.template', 'js'); ?>
````

To put at the bottom of your page and useful only on the configuration page of your plugin. This script makes it possible to reduce the compulsory javascript to a single function (see section on JS files).

In your configuration page an HTML syntax has been implemented to simplify your life. So for most plugins you will only have to do HTML to store your information in the database and therefore use it on the side of your class.

The syntax is quite simple: your element (input, select…) must have the class css eqLogicAttr (or cmdAttr for commands) and an attribute indicating the name of the property :

````
<input type="text" class="eqLogicAttr form-control" data-l1key="name" placeholder="{{Nom de l'équipement mail}}"/>
````

There, for example, when loading the jeedom data will put the value of the name of the equipment in the input and when saving it will recover it to put it back in the database. Small tip some properties are actually JSON strings in BDD (this allows you to have a lot of freedom for the plugin), in this case just do :

````
<input class="eqLogicAttr form-control" data-l1key='configuration' data-l2key='fromName' />
````

For the list of properties of equipment and commands it is here (to see the properties that are JSON just look at the getter or the setter, if it takes 2 parameters then it is JSON)

Last important point on the configuration page: this can contain as many equipment and commands as necessary. However there are a few rules to follow :

All elements having the class eqLogicAttr must be in an element having the class css eqLogic Ditto for elements of class css cmdAttr which must be in an element of class cmd. All the commands of an equipment must be in the element having the corresponding eqLogic class

## Js

All JS files must be in the JS folder (easy !!!). It is advisable to name it with the same ID as your plugin (in the configuration part, for the panel you do as you want). This JS file (that of the plugin configuration) must at least contain an addCmdToTable method which takes the command object to add as a parameter. Here is a simple example :

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

You will notice that there is one line per command and that this one has the class css cmd. You can also see the elements that have the class cmdAttr.

Several important points :

- this function can be called with an empty object (hence the first 3 lines) when adding a new command
- the last line initializes all the fields once the line is inserted

Last point: a more complete example with command type and subtype :

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

Here we can notice :

- ``jeedom.cmd.availableType()`` will insert a select with the list of known types (action and info for the moment)
- ``<span class="subType" subType="' + init(\_cmd.subType) + '"><\span>`` : the place where the select of sub type must be posed
- ``jeedom.cmd.changeType(\$('\#table\_cmd tbody tr:last'), init(\_cmd.subType))`` which allows to initialize the subtype with the right value

Other javascript functions can be used :

- ``printEqLogic`` which takes the entire object of the equipment as a parameter (useful in the event of data processing before restoring it). It is called when the equipment data is displayed
- ``saveEqLogic`` which takes as a parameter the equipment object which will be saved in the database (useful if you need to do some processing before saving) Last thing, for JS files, here is how to include them in a clean way on your php page :

````
<?php include_file('desktop', 'weather', 'js', 'weather'); ?>
````

The first argument gives the folder in which to find it (attention is the parent folder of the JS folder), the second the name of your javascript, the third tells Jeedom that it is a JS file and the last one in which plugin it is located.

## Css

This folder contains your CSS files (it should not be used too much), here is how to include them on your page :

````
<?php include_file('desktop', 'weather', 'css', 'weather'); ?>
````

The first argument gives the folder in which to find it (attention is the parent folder of the CSS folder), the second the name of your css file, the third tells Jeedom that it is a CSS file and the last in which plugin it turns out that.

## Modal

The modal folder allows you to store your php files intended to display modals. Here's how to call them from your main page (this code is in a javascript file) :

You can see :

````
$('#md_modal').dialog({title: "{{Classe du périphérique}}"});
$('#md_modal').load('index.php?v=d&plugin=zwave&modal=show.class&id=' + $('.eqLogicAttr[data-l1key=id]').value()).dialog('open');
````

The first line allows you to put a title to your modal

The second line loads your modal and display. The syntax is quite simple : plugin, the id of your plugin, modal, the name of your modal without php and then the parameters you want to pass it

## JS API

This is not a folder but in the latest versions of Jeedom it offers the developer a whole javascript api (this avoids writing ajax calls in all directions). I will try to make an article to explain the different features but you can already find the code here.

So much for the details of the desktop folder. I suspect that it is not the most complete (I will try to complete it according to the different requests received) but I hope that thanks to him you can start making plugins for Jeedom.

## Tips and tricks

### Assistant cron

````
$('body').delegate('.helpSelectCron','click',function(){
  var el = $(this).closest('.schedule').find('.scenarioAttr[data-l1key=schedule]');
  jeedom.getCronSelectModal({},function (result) {
    el.value(result.value);
  });
});
````

When we click on the assistant button, we get the input to write in then we call the assistant. Once the configuration is finished in the wizard, the result is retrieved then written in the previously selected input

# Plugin creation part 4 : core folder

By far the most important folder of your plugin, it can include 4 subfolders.

NOTE : all along this part the id of your plugin will be referenced by : plugin\_id

## Php

Contains the annex PHP files, I used to put for example an inclusion file if, of course, you have several class files or 3rparty to include

## Template

Which can contain 2 subfolders, dashboard and mobile, it is a folder that Jeedom automatically scans for a widget, so if you use specific widgets this is where you have to put their HTML file

## i18n

This is where your translation should be in the form of a json file (best and look for example the plugin [Zwave](https://github.com/jeedom/plugin-zwave) to see the shape of the file)

## ajax

This folder is for all your ajax files, here is a skeleton of ajax file :

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

Very important file, it is the engine of your plugin. This is where the 2 compulsory classes of your plugin come from :

- ``plugin\_id``
- ``plugin\_idCmd``

The first must inherit from the eqLogic class and the second from cmd. Here is a template :

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

For the definition of jeedom classes, I invite you to consult this [SIte](https://doc.jeedom.com/dev/phpdoc/4.0/)

The only mandatory method is the instance method on the cmd execute class, here is an example with the SARAH plugin :

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

Quite simple but complete example, the principle is as follows, if the command is an action or an info (but not in event only and its cache is exceeded) then jeedom calls this method.

In our example here it is a command to make SARAH speak, where the plugin retrieves the parameters in \ $\_ options (note that this is an array and its attributes change depending on the subtype of the command : color for a color subtype, slider for a slider subtype, title and message for a message subtype and empty for a other subtype).

Here for the compulsory part, here is what can be used next (with example) :

### toHtml (\ $\_ version = 'dashboard')

Function usable in the control or in the equipment, according to the needs, here is an example for the equipment

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

Several interesting things here :

To convert the requested version into dashboard or mobile (mview becomes mobile for example, this allows for example on the views to add the name of the objects)

````
$_version = jeedom::versionAlias($_version);
````

Retrieving an order template, here the order template : plugins / weather / core / template / \ $\_ version / forecast.html (\ $\_ version worth mobile or dashboard)

````
$forcast_template = getTemplate('core', $_version, 'forecast', 'weather');
````

Here replace the previously filled tags in \ $ replace HTML to contain the values

````
$html_forecast .= template_replace($replace, $forcast_template);
````

This allows you to retrieve the command with the logical\_id : temperature\_min

````
$this->getCmd(null, 'temperature_min');
````

Here it allows to put the value in the tag, only if the order has been retrieved

````
$replace['#temperature#'] = is_object($temperature) ? $temperature->execCmd() : '';
````

Important passage: this allows you to retrieve the customizations made by the user on the General → Display page and to re-inject them into the template

````
$parameters = $this->getDisplay('parameters');
if (is_array($parameters)) {
    foreach ($parameters as $key => $value) {
        $replace['#' . $key . '#'] = $value;
    }
}
````

Saving the widget in the cache: so that during the next request we provide it faster, we can notice the 0 here which indicates an infinite lifespan, otherwise the duration is in seconds (we will see in the next part how the weather plugin updates its widget).

````
cache::set('weatherWidget' . $_version . $this->getId(), $html, 0);
````

Finally send html to Jeedom :

````
return $html;
````

You should also tell Jeedom what your widget allows for personalization. It's a bit complex (and again) but normally flexible and simple to set up.

It works the same way on your equipment or control, it is a static attribute of the class \ $\_ widgetPossibility which must be a multidimensional array, but it is there that it becomes complicated if a dimension of the array is true or false. It then considers that all possible children are at this value (I will give an example).

First the cases where you must use it: if in your class inheriting from eqLogic or cmd has a toHtml function otherwise it is not worth reading more.

### Pre and post method

When creating or deleting your objects (equipment, order or other) in Jeedom, it can call several methods before / after the action :

- ``preInsert`` ⇒ Method called before the creation of your object
- ``postInsert`` ⇒ Method called after the creation of your object
- ``preUpdate`` ⇒ Method called before updating your object
- ``postUpdate`` ⇒ Method called after updating your object
- ``preSave`` ⇒ Method called before saving (creation and update therefore) of your object
- ``postSave`` ⇒ Method called after saving your object
- ``preRemove`` ⇒ Method called before deleting your object
- ``postRemove`` ⇒ Method called after deleting your object

Example, always with the weather plugin for creating orders or updating them after saving (the example is simplified) :

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

The start is fairly standard with the creation of a command, the end is more interesting with the implementation of a cron which will call the method ``weather::updateWeatherData`` by passing the id of the equipment to update every 30min by default.

Here the updateWeatherData method (also simplified) :

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

We see here that during the call we recover the equipment concerned then we execute the commands to recover the values and update them if necessary.

Very important part :

````
$weather->checkAndUpdateCmd($cmd,$cmd->execute());
````

At the time of the function ``checkAndUpdateCmd`` (which allows to signal to Jeedom a new update of the value, with triggering of all the actions which must be made : update of the dashboard, verification of scenarios…),

For the command class, a little trick to know if you use the basic js template. When sending the Jeedom equipment makes the differential on the orders and will delete those which are in base but not in the new definition of the equipment. This is how to avoid it :

````
public function dontRemoveCmd() {
  return true;
}
````

To finish here are some tips and tricks :

- avoid (unless you know what you are doing) overwriting a method of the inherited class (this can cause a lot of problems)
- To reassemble the battery (in%) of an equipment, do it (Jeedom will take care of the rest and warn the user if necessary) :

````
$eqLogic->batteryStatus(56);
````

- On orders when adding a value Jeedom applies the instance method ``formatValue($_value)`` which, depending on the subtype, can reshape it (especially for binary values)
- NEVER do a method in the class inheriting from cmd called : execCmd or event
- if in the configuration of your order you have entered returnStateTime (in minutes) and returnStateValue, Jeedom will automatically change the value of your order by returnStateValue after X minutes (s)
- always for the order you can use addHistoryValue to force the setting in history (attention your order must be historical)
