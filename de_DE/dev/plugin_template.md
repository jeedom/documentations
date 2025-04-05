# 

 [](https:github.comjeedomplugin-template)

#  : l'arborescence

:  :

- ``3rdparty`` : ).
- ``core`` : .
  - ``class`` : .
  - ``php`` : ).
  - ``config`` : .
  - ``ajax`` : X.
  - ``i18n`` :  ..
  - ``template`` : .
- ``desktop`` : ").
  - ``js`` : .
  - ``php`` : .
  - ``css`` :  **.
  - ``modal`` : .
  - ``img`` : .
- ``plugin_info`` : .
  - ``info.json`` :  .. 
  - ``install.php`` : .
  - ``configuration.php`` : )
- ``docs`` : . .  : ``docsfr\_FR``)
- ``ressources`` : .
- ``data`` : .


 :

-  ``.class.php``
-  ``nom\_class.class.php``
-  ``.inc.php``
-  ``.config.php``

 :

-  ``.ajax.php``
- 
- 

#  : 

## ``info.json``

 [](https:doc.jeedom.com/de_DE/devstructure_info_json)

## ``install.php``

 :

 :

).  :

- ``pluginid_install()`` : . 
- ``pluginid_update()`` : . 
- ``pluginid_remove()`` : . 

 :

````php
<?php
.
 *
 * : 
 * 
 * 
 * (.
 *
 * ,
 * 
 * . 
 * .
 *
 * 
 * . If not, see <http:www.gnu.orglicenses>.
 *


() {
    $cron = cron::byClassAndFunction('zwave', 'pull');
     (!)) {
        $cron = new cron();
        $cron->setClass('zwave');
        $cron->setFunction('pull');
        $cron->setEnable(1);
        $cron->setDeamon(1);
        $cron->setSchedule('* * * * *');
        $cron->save();
    }
}

() {
    $cron = cron::byClassAndFunction('zwave', 'pull');
     (!)) {
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

() {
    $cron = cron::byClassAndFunction('zwave', 'pull');
    )) {
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

 :

````php
<?php
.
 *
  * : 
 * 
 * 
 * (.
 *
 * ,
 * 
 * . 
 * .
 *
  * 
 * . If not, see <http:www.gnu.orglicenses>.
  *

 
include_file('core', 'authentication', 'php');
 (!isConnect()) {
    include_file('desktop', '404', 'php');
    die();
 }
 ?>
 <form class="form-horizontal">
     <fieldset>
         <div class="form-group">
             <label class="col-lg-2 control-label">Zway IP<label>
             <div class="col-lg-2">
                 <input class="configKey form-control" data-l1key="zwaveAddr" >
             <div>
         <div>
         <div class="form-group">
             <label class="col-lg-4 control-label">Supprimer automatiquement les périphériques exclus<label>
             <div class="col-lg-4">
                 <input type="checkbox" class="configKey" data-l1key="autoRemoveExcludeDevice" >
             <div>
         <div>
         <div class="form-group">
             <label class="col-lg-4 control-label">J'utilise un serveur openzwave<label>
             <div class="col-lg-4">
                 <input type="checkbox" class="configKey" data-l1key="isOpenZwave" >
             <div>
         <div>
     <fieldset>
 <form>
 ````

#  : 

## PHP

. ). . ).

 ``.php``  :

````php
<?php
 (!')) {
    
 }
 
 ?>
 ````

Une fois sur cette page vous aurez accès en  à toutes les fonctions du core de jeedom (voir [](https:www.jeedom.comdocdocumentationcode) ) ainsi qu'à celles de tous les modules installés donc le vôtre aussi.

Toutes ces pages étant des vues elles utilisent principalement la syntaxe HTML. Pour tout ce qui est présentation, Jeedom se base principalement sur bootstrap donc toute la [documentation](http:getbootstrap.com) est applicable.

Pour simplifier la création de plugin vous pouvez inclure dans votre page le script javascript de template pour les plugins :

````php
<? include_file('core', 'plugin.template', 'js'); ?>
````

. ).

. .

:  :

````html
<input type="text" class="eqLogicAttr form-control" data-l1key="name" placeholder="{{Nom de l'équipement mail}}">
````

Là, par exemple, lors du chargement des données jeedom mettra la valeur du nom de l'équipement dans l'input et lors de la sauvegarde récupérera celle-ci pour la remettre en base de données. Petite astuce certaines propriétés sont en fait des chaînes JSON en BDD (cela permet d'avoir vraiment pas mal de liberté pour le plugin), dans ce cas il suffit de faire :

````html
<input class="eqLogicAttr form-control" data-l1key='configuration' data-l2key='fromName' >
````

Die Liste der Geräte- und Befehlseigenschaften finden Sie hier (um die Eigenschaften im JSON-Format anzuzeigen, schauen Sie sich einfach den Getter oder Setter an. Wenn er 2 Parameter benötigt, handelt es sich um JSON)

Letzter wichtiger Punkt auf der Konfigurationsseite: Dieser kann so viele Geräte und Steuerungen enthalten wie nötig. Es gibt jedoch einige Regeln, die befolgt werden müssen :

Alle Elemente mit der Klasse eqLogicAttr müssen sich in einem Element mit der CSS-Klasse eqLogic befinden. Dasselbe gilt für Elemente mit der CSS-Klasse cmdAttr, die sich in einem Element mit der Klasse cmd befinden müssen. Alle Befehle für ein Gerät müssen sich im Element mit der entsprechenden eqLogic-Klasse befinden

## JS

Alle JS-Dateien sollten sich im JS-Ordner befinden (einfach !!!). Es wird empfohlen, es mit der gleichen ID wie Ihr Plugin zu benennen (im Konfigurationsteil können Sie für das Panel tun, was Sie wollen). Diese JS-Datei (die für die Plugin-Konfiguration) muss mindestens eine addCmdToTable-Methode enthalten, die als Parameter das hinzuzufügende Befehlsobjekt verwendet. Hier ist ein einfaches Beispiel :

````php
Funktion addCmdToTable(_cmd) {
     (!isset(_cmd)) {
        var _cmd = {Konfiguration: {}};
     }
    var tr = ''; tr += '';
     tr += ' : keine;">';
    tr += '<input class="cmdAttr form-control input-sm" data-l1key="name"> '; tr += '<input class="cmdAttr form-control input-sm" data-l1key="configuration" data-l2key="recipient"> '; tr += '';
     tr += ' : keine;">';
     tr += ' : keine;">';
     if (ist_numerisch(_cmd.id)) {
        tr += ' <a class="btn btn-default btn-xs cmdAction" data-action="test"><i class="fa fa-rss"></i>{{Prüfen}}</a> ';
     }
     tr += '<i class="fa fa-minus-circle pull-right cmdAction cursor" data-action="remove"></i></td> ';
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
Funktion addCmdToTable(_cmd) {
     (!isset(_cmd)) {
        var _cmd = {};
    }
      (!isset(_cmd.configuration)) {
        _cmd.configuration = {};
    }
     var selRequestType = '<select style="width : 90px;" class="cmdAttr form-control input-sm" data-l1key="configuration" data-l2key="requestType">';
     selRequestType += '<option value="script">{{Script}}<option>';
     selRequestType += '<option value="http">{{Http}}<option>';
     selRequestType += '<select>';
    var tr = '';     tr += '<input class="cmdAttr form-control input-sm" data-l1key="name" style="width : 140px;">';
    tr += '<input class="cmdAttr form-control input-sm" data-l1key="id"  style="display : keine;">';
    tr += '' + selRequestType;
    tr += '<div class="requestTypeConfig" data-type="http">';
    tr += '<input type="checkbox" class="cmdAttr" data-l1key="configuration" data-l2key="noSslCheck" >Ne pas vérifier SSL';
    tr += '<div>';
    tr += '';     tr += '';
    tr += '<span class="type" type="' + init(_cmd.type) + '">' + jeedom.cmd.availableType() + '<span>';
    tr += '<span class="subType" subType="' + init(_cmd.subType) + '"><span>';
    tr += '';     tr += '<textarea style="height : 95px;" class="cmdAttr form-control input-sm" data-l1key="configuration" data-l2key="request"><textarea>';
    tr += '<a class="btn btn-default browseScriptFile cursor input-sm" style="margin-top : 5px;"><i class="fa fa-folder-open"><i> {{Parcourir}}<a> ';
    tr += '<a class="btn btn-default editScriptFile cursor input-sm" style="margin-top : 5px;"><i class="fa fa-edit"><i> {{Editer}}<a> ';
    tr += '<a class="btn btn-success newScriptFile cursor input-sm" style="margin-top : 5px;"><i class="fa fa-file-o"><i> {{Nouveau}}<a> ';
    tr += '<a class="btn btn-danger removeScriptFile cursor input-sm" style="margin-top : 5px;"><i class="fa fa-trash-o"><i> {{Supprimer}}<a> ';
    tr += '<a class="btn btn-warning bt_shareOnMarket cursor input-sm" style="margin-top : 5px;"><i class="fa fa-cloud-upload"><i> {{Partager}}<a> ';
    tr += '<div>';
    tr += '';     tr += '';
    tr += '<input class="cmdAttr form-control tooltips input-sm" data-l1key="unite"  style="width : 100px;" placeholder="{{Unité}}" title="{{Unité}}">';
    tr += '<input class="tooltips cmdAttr form-control input-sm" data-l1key="configuration" data-l2key="minValue" placeholder="{{Min}}" title="{{Min}}"> ';
    tr += '<input class="tooltips cmdAttr form-control input-sm" data-l1key="configuration" data-l2key="maxValue" placeholder="{{Max}}" title="{{Max}}">';
    tr += '';     tr += '';
    tr += '<span><input type="checkbox" class="cmdAttr" data-l1key="isHistorized" > {{Historiser}}<br><span>';
    tr += '';     tr += '';
    if (ist_numerisch(_cmd.id)) {
    tr += ' <a class="btn btn-default btn-xs cmdAction" data-action="test"><i class="fa fa-rss"></i>{{Prüfen}}</a> ';
    }
    tr += '<i class="fa fa-minus-circle pull-right cmdAction cursor" data-action="remove"></i></td> ';
    tr += '';
    $('#table_cmd tbody').append(tr);
    $('#table_cmd tbody tr:last').setValues(_cmd, '.cmdAttr');

     (isset(_cmd.configuration.requestType)) {
        $('#table_cmd tbody tr:last .cmdAttr[data-l1key=configuration][data-l2key=requestType]').value(init(_cmd.configuration.requestType));
        $('#table_cmd tbody tr:last .cmdAttr[data-l1key=configuration][data-l2key=requestType]').trigger('change');
    }

      (isset(_cmd.type)) {
        $('#table_cmd tbody tr:last .cmdAttr[data-l1key=type]').value(init(_cmd.type));
    }
     jeedom.cmd.changeType($('#table_cmd tbody tr:last'), init(_cmd.subType));
    initTooltips();
}
````

Hier können wir feststellen :

- ``jeedom.cmd.availableType()`` fügt eine Auswahl mit der Liste der bekannten Typen ein (Aktion und Informationen für den Moment)
- ``<span class="subType" subType="' + init(\_cmd.subType) + '"><\span>`` : die Stelle, an der der Subtyp-Selektor platziert werden soll
- ``jeedom.cmd.changeType(\$('\#table\_cmd tbody tr:last'), init(\_cmd.subType))`` Dadurch kann der Subtyp mit dem richtigen Wert initialisiert werden

Andere Javascript-Funktionen können verwendet werden :

- ``printEqLogic`` die als Parameter das gesamte Objekt der Ausrüstung nimmt (nützlich im Falle der Datenverarbeitung, bevor sie zurückgegeben werden). Es wird aufgerufen, wenn Gerätedaten angezeigt werden
- ``saveEqLogic`` Dies nimmt als Parameter das Ausrüstungsobjekt an, das in der Datenbank gespeichert wird (nützlich, wenn Sie vor dem Speichern eine Verarbeitung durchführen müssen). Und schließlich zu den JS-Dateien: Hier erfahren Sie, wie Sie sie sauber in Ihre PHP-Seite einbinden :

````php
<? include_file('desktop', 'weather', 'js', 'weather'); ?>
````

Le premier argument donne le dossier dans lequel le trouver (attention c'est le dossier père du dossier JS), le deuxième le nom de votre javascript, le troisième indique à Jeedom que c'est un fichier JS et le dernier dans quel plugin il se trouve.

## CSS

Ce dossier contient vos fichiers CSS (il ne devrait pas être trop utilisé) , vo comment les inclure sur votre page :

````php
<? include_file('desktop', 'weather', 'css', 'weather'); ?>
````

Das erste Argument gibt den Ordner an, in dem es zu finden ist (Vorsicht, es ist der übergeordnete Ordner des CSS-Ordners), das zweite den Namen Ihrer CSS-Datei, das dritte teilt Jeedom mit, dass es sich um eine CSS-Datei handelt und das letzte, in welchem Plugin sie sich befindet.

## MODAL

Im Modalordner können Sie Ihre PHP-Dateien speichern, die zur Anzeige von Modalfenstern bestimmt sind. So rufen Sie sie von Ihrer Hauptseite aus auf (dieser Code wird in eine JavaScript-Datei eingefügt)) :

Wir können sehen :

````js
$('#md_modal').dialog({title: "{{Classe du périphérique}}"}).load('index.php?v=d&plugin=zwave&modal=show.class&id=' + $('.eqLogicAttr[data-l1key=id]').value()).dialog('open')
````

La première ligne permet de mettre un titre à votre modal

La deuxième ligne charge votre modal et l'affichage.  : plugin, l'Ausweis de votre plugin, modal, le nom de votre modal sans le  et ensuite les paramètres que vous voulez lui passer

## API JS

Ce n'est pas un dossier mais dans les dernières versions de Jeedom celui-ci offre au développeur toute une api javascript (cela évite d'écrire des appels Ajax dans tous les sens). J'essayerai de faire un article pour expliquer les différentes fonctionnalités mais vous pouvez déjà trouver le code .

Voilà pour les détails du . Je me doute qu'il n'est pas des plus complets (j'essayerai de le compléter en fonction des différentes demandes reçues) mais j'espère que grâce à lui vous pourrez commencer à faire des plugins pour Jeedom.

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

Mit einem Klick auf den Assistenten-Button rufen Sie die Eingaben ab und rufen anschließend den Assistenten auf. Sobald die Konfiguration im Assistenten abgeschlossen ist, wird das Ergebnis abgerufen und anschließend in den zuvor ausgewählten Eingang geschrieben

# Plugin-Erstellung Teil 4 : Kernordner

Der mit Abstand wichtigste Ordner in Ihrem Plugin. Er kann 4 Unterordner haben.

Notiz : In diesem Teil wird Ihre Plugin-ID referenziert durch : plugin_id

## PHP

Enthält die angehängten PHP-Dateien. Ich habe mir angewöhnt, beispielsweise eine Einschlussdatei einzufügen, wenn Sie natürlich mehrere Klassendateien oder Dateien von Drittanbietern einschließen müssen

## Template

Dieser Ordner kann zwei Unterordner enthalten: Dashboard und Mobile. Jeedom durchsucht diesen Ordner automatisch nach Widgets. Wenn Sie also bestimmte Widgets verwenden, sollten Sie deren HTML-Datei hier ablegen

## i18n

Hier sollte Ihre Übersetzung in Form einer JSON-Datei vorliegen (am besten schauen Sie sich beispielsweise das Plugin an [Z-Wave](https:github.comjeedomplugin-openzwave) um die Dateiform anzuzeigen)

## ajax

Dieser Ordner ist für alle Ihre Ajax-Dateien, hier ist ein Skelett einer Ajax-Datei :

````php
<?php

.
 *
 * : 
 * 
 * 
 * (.
 *
 * ,
 * 
 * . 
 * .
 *
 * 
 * . If not, see <http:www.gnu.orglicenses>.
 *

versuchen {
    require_once Verzeichnisname(__FILE__) . '/../../../../core/php/core.inc.php';
    include_file('core', 'authentication', 'php');

     (!')) {
        neue Ausnahme werfen(__('401 - Unautorisierter Zugriff', __FILE__));
    }

    if (init('action') == 'Ihre Aktion') {
        ajax::Erfolg($Ergebnis);
    }

    throw new Exception(__('Keine passende Methode : ', __DATEI__) . init('Aktion'));
    *     * *********Ausnahme abfangen*************** *
} catch (Ausnahme $e) {
    ajax::Fehler(displayException($e), $e->getCode());
}
?>
````

## class

Dossier très important, c'est le moteur de votre plugin. C'est là que viennent les 2 classes obligatoires de votre plugin :

- ``plugin_id``
- ``plugin_idCmd``

La première devant hériter de la classe eqLogic et la deuxième de cmd. Vo un template :

````php
<?php

.
 *
 * : 
 * 
 * 
 * (.
 *
 * ,
 * 
 * . 
 * .
 *
 * 
 * . If not, see <http:www.gnu.orglicenses>.
 *

* * ***************************Includes********************************* *
require_once Verzeichnisname(__FILE__) . '/../../../../core/php/core.inc.php';

class plugin_Ausweis extends eqLogic {

    *     * *************************Attributs****************************** *


    *     * ***********************Methode static*************************** *


    *     * *********************Methode d'instance************************* *


    *     * **********************Getteur Setteur*************************** *

}

class plugin_idCmd extends cmd {

    *     * *************************Attributs****************************** *


    *     * ***********************Methode static*************************** *


    *     * *********************Methode d'instance************************* *


    *     * **********************Getteur Setteur*************************** *

}

?>
````

Für die Definition der Jeedom-Klassen lade ich Sie ein, dies zu konsultieren [Website](https:doc.jeedom.comdevphpdoc4.0)

Die einzige obligatorische Methode ist die Instanzmethode der cmd-Execute-Klasse. Hier ist ein Beispiel mit dem SARAH-Plugin :

````php
öffentliche Funktion ausführen($_options = Array()) {
       (!isset($_options['title']) && !isset($_options['message'])) {
          throw new Exception(__("Titel und Nachricht dürfen nicht beide leer sein", __FILE__));
      }
      $eqLogic = $this->getEqLogic();
      $message = '';
      wenn (isset($_options['title'])) {
          $message = $_options['title'] . '. ';
      }
      $message .= $_options['message'];
      $http = new com_http($eqLogic->getConfiguration('addrSrvTts') . '?tts=' . urlencode($message));
      return $http->exec();
  }
  ````

 assez simple mais complet, le principe est le suivant, si la commande est une action ou une info (mais pas en événement seulement et que son versteckt est dépassé) alors jeedom appelle cette méthode.

Dans notre exemple  c'est une commande pour faire parler S.A.R.A.H, où le plugin récupère les paramètres dans \$\_options (attention c'est un tableau et ses attributs changent en fonction du sous-type de la commande : color pour un sous-type color, slider pour un sous-type slider, title et message pour un sous-type message et vide pour un sous-type other).

Voila pour la partie obligatoire, voila maintenant ce qui peut être utilisé à coté (avec exemple) :

### toHtml(\$\_version = 'dashboard')

Fonction utilisable dans la commande ou dans l'équipement, en fonction des besoins, vo un exemple pour l'équipement

````php
public function toHtml($_version = 'dashboard') {
    $replace = $this->preToHtml($_version);
     (!is_array($replace)) {
        return $replace;
    }
    $version = jeedom::versionAlias($_version);
    $replace['#forecast#'] = '';
     ($version != 'mobile' || $this->getConfiguration('fullMobileDisplay', 0) == 1) {
        $forcast_template = getTemplate('core', $version, 'forecast', 'weather');
        for ($i = 0; $i < 5; $i++) {
            $replaceDay = array();
            $replaceDay['#day#'] = date_fr(date('l', strtotime('+' . $i . ' days')));

             ($i == 0) {
                $temperature_min = $this->getCmd(null, 'temperature_min');
            } else {
                $temperature_min = $this->getCmd(null, 'temperature_' . $i . '_min');
            }
            $replaceDay['#low_temperature#'] = is_object($temperature_min) ? $temperature_min->execCmd() : '';

             ($i == 0) {
                $temperature_max = $this->getCmd(null, 'temperature_max');
            } else {
                $temperature_max = $this->getCmd(null, 'temperature_' . $i . '_max');
            }
            $replaceDay['#hight_temperature#'] = is_object($temperature_max) ? $temperature_max->execCmd() : '';
            $replaceDay['#tempid#'] = is_object($temperature_max) ? $temperature_max->getId() : '';

             ($i == 0) {
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
     (strlen($replace['#sunrise#']) == 3) {
        $replace['#sunrise#'] = substr($replace['#sunrise#'], 0, 1) . ':' . substr($replace['#sunrise#'], 1, 2);
    } else  (strlen($replace['#sunrise#']) == 4) {
        $replace['#sunrise#'] = substr($replace['#sunrise#'], 0, 2) . ':' . substr($replace['#sunrise#'], 2, 2);
    }

    $sunset = $this->getCmd(null, 'sunset');
    $replace['#sunset#'] = is_object($sunset) ? $sunset->execCmd() : '';
     (strlen($replace['#sunset#']) == 3) {
        $replace['#sunset#'] = substr($replace['#sunset#'], 0, 1) . ':' . substr($replace['#sunset#'], 1, 2);
    } else  (strlen($replace['#sunset#']) == 4) {
        $replace['#sunset#'] = substr($replace['#sunset#'], 0, 2) . ':' . substr($replace['#sunset#'], 2, 2);
    }

    $wind_direction = $this->getCmd(null, 'wind_direction');
    $replace['#wind_direction#'] = is_object($wind_direction) ? $wind_direction->execCmd() : 0;

    $refresh = $this->getCmd(null, 'refresh');
    $replace['#refresh_id#'] = is_object($refresh) ? $refresh->getId() : '';

    $condition = $this->getCmd(null, 'condition_now');
    $sunset_time = is_object($sunset) ? $sunset->execCmd() : null;
    $sunrise_time = is_object($sunrise) ? $sunrise->execCmd() : null;
     (is_object($condition)) {
        $replace['#icone#'] = self::getIconFromCondition($condition->execCmd(), $sunrise_time, $sunset_time);
        $replace['#condition#'] = $condition->execCmd();
        $replace['#conditionid#'] = $condition->getId();
        $replace['#collectDate#'] = $condition->getCollectDate();
    } else {
        $replace['#icone#'] = '';
        $replace['#condition#'] = '';
        $replace['#collectDate#'] = '';
    }
     ($this->getConfiguration('modeImage', 0) == 1) {
        $replace['#visibilityIcon#'] = "none";
        $replace['#visibilityImage#'] = "block";
    } else {
        $replace['#visibilityIcon#'] = "block";
        $replace['#visibilityImage#'] = "none";
    }
    $ = template_replace($replace, getTemplate('core', $version, 'current', 'weather'));
    cache::set('widgetHtml' . $_version . $this->getId(), $html, 0);
    return $html;
}
````

Mehrere interessante Dinge hier :

Um die gewünschte Version in Dashboard oder Mobile zu konvertieren (mview wird beispielsweise Mobile), ermöglicht dies beispielsweise, in den Ansichten den Namen der Objekte hinzuzufügen)

````php
$_version = jeedom::versionAlias($_version);
````

Récupération d'un template de commande,  le template de commande : pluginsweathercoretemplate\$\_versionforecast. (\$\_version valant mobile ou dashboard)

````php
$forcast_template = getTemplate('core', $_version, 'forecast', 'weather');
````

Hier werden die zuvor in \$replace des HTML-Codes ausgefüllten Tags ersetzt, um die Werte zu enthalten

````php
$html_forecast .= template_replace($replace, $forcast_template);
````

Cela permet de récupérer la commande ayant le logical\_Ausweis : temperature\_min

````php
$this->getCmd(null, 'temperature_min');
````

Dadurch können Sie den Wert nur dann in das Tag einfügen, wenn die Bestellung erfolgreich abgerufen wurde

````php
$replace['#temperature#'] = is_object($temperature) ? $temperature->execCmd() : '';
````

Passage important: cela permet de récupérer les personnalisations faites par l'utilisateur sur la page Générale → Affichage et de les réinjecter dans le template

````php
$parameters = $this->getDisplay('parameters');
 (is_array($parameters)) {
    foreach ($parameters as $key => $value) {
        $replace['#' . $key . '#'] = $value;
    }
}
````

Speichern des Widgets im Cache: damit es bei der nächsten Anforderung schneller bereitgestellt wird, können wir hier die 0 beachten, die eine unendliche Lebensdauer anzeigt, andernfalls wird die Dauer in Sekunden angegeben (wir werden im nächsten Teil sehen, wie das Wetter-Plugin sein Widget aktualisiert).

````php
cache::set('wetterWidget' . $_version . $this->getId(), $html, 0);
````

Enfin envoi du  à Jeedom :

````php
return $html;
````

Sie müssen Jeedom auch mitteilen, welche Anpassungsmöglichkeiten Ihr Widget bietet. Es ist ein bisschen komplex (und ist es immer noch), aber normalerweise flexibel und einfach einzurichten.

Es funktioniert auf Ihrem Gerät oder Ihrer Steuerung genauso, es ist ein statisches Attribut der Klasse \$\_widgetPossibility, die ein mehrdimensionales Array sein muss, aber hier wird es kompliziert, wenn eine Dimension des Arrays wahr oder falsch ist. Es wird dann davon ausgegangen, dass alle möglichen Kinder diesen Wert haben (ich gebe ein Beispiel).

Zunächst einmal die Fälle, in denen Sie es verwenden müssen: wenn Ihre von eqLogic oder cmd erbende Klasse eine toHtml-Funktion hat, ansonsten macht es keinen Sinn, weiterzulesen.

### Pre- und Post-Methode

Beim Erstellen oder Löschen Ihrer Objekte (Ausrüstung, Befehl oder anderes) in Jeedom können vor/nach der Aktion mehrere Methoden aufgerufen werden :

- ``preInsert`` ⇒ Methode, die vor dem Erstellen Ihres Objekts aufgerufen wird
- ``postInsert`` ⇒ Methode, die nach dem Erstellen Ihres Objekts aufgerufen wird
- ``preUpdate`` ⇒ Methode, die vor der Aktualisierung Ihres Objekts aufgerufen wird
- ``postUpdate`` ⇒ Methode, die nach der Aktualisierung Ihres Objekts aufgerufen wird
- ``preSave`` ⇒ Methode, die vor dem Speichern (Erstellen und somit Aktualisieren) Ihres Objekts aufgerufen wird
- ``postSave`` ⇒ Methode, die nach dem Speichern Ihres Objekts aufgerufen wird
- ``preRemove`` ⇒ Methode, die vor dem Löschen Ihres Objekts aufgerufen wird
- ``postRemove`` 

) :

````php
() {
      $weatherCmd = $this->getCmd(null, 'temperature');
       (!)) {
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
       (!)) {
          $cron = new cron();
          $cron->setClass('weather');
          $cron->setFunction('updateWeatherData');
          $cron->setOption(array('weather_id' => intval($this->getId())));
      }
      $cron->setSchedule($this->getConfiguration('refreshCron', '*30 * * * *'));
      $cron->save();
}
````

Le début est assez standard avec la création d'une commande, la fin est plus intéressante avec la mise en place d'un cron qui va appeler la méthode ``weather::updateWeatherData`` en passant l'Ausweis de l'équipement à mettre à jour toute les 30min par défaut.

Ici la méthode updateWeatherData (simplifiée aussi) :

````php
public static function updateWeatherData($_options) {
  $weather = weather::byId($_options['weather_id']);
   (is_object($weather)) {
      foreach ($weather->getCmd('info') as $cmd) {
        $weather->checkAndUpdateCmd($cmd,$cmd->execute());
      }
  }
}
````

.

 :

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

 :

- )
- ) :

````php
$eqLogic->batteryStatus(56);
````

- Sur les commandes au moment de l'ajout d'une valeur Jeedom applique la méthode d'instance ``formatValue($_value)`` qui, en fonction du sous-type, peut la remettre en forme (en particulier pour les valeurs binaires)
- ne faites JAMAIS une méthode dans la class héritant de cmd s'appelant : execCmd ou event
- si dans la configuration de votre commande vous avez renseigné returnStateTime (en minute) et returnStateValue, Jeedom changera automatique la valeur de votre commande par returnStateValue au bout de X minute(s)
- toujours pour la commande vous pouvez utiliser addHistoryValue pour forcer la mise en historique (attention votre commande doit être historisée)
