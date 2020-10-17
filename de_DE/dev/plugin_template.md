# Dokumentations-Plugin-Vorlage

Sie finden eine leere Plugin-Datenbank [Hier](https://github.com/jeedom/plugin-template)

# Plugin-Erstellung Teil 1 : l'arborescence

Hier ist seine Struktur: Zunächst ein Ordner mit dem Namen Ihres Plugins (genauer gesagt seiner eindeutigen Kennung), der die folgenden Unterordner enthalten muss :

- ``3rdparty`` : Ordner mit den im Plugin verwendeten externen Bibliotheken (Beispiel für das SMS-Plugin eine Bibliothek für die serielle Kommunikation in PHP)
- ``core`` : Ordner mit allen internen Arbeitsdateien
  - ``class`` : Ordner mit der Plugin-Klasse
  - ``php`` : Ordner, der Funktionen enthalten kann, die nicht unbedingt zu einer Klasse gehören müssen (häufig verwendet, um mehrere Klassen oder Konfigurationsdateien gleichzeitig einzuschließen)
  - ``config`` : Plugin-Konfigurationsdatei
  - ``ajax`` : Ordner mit den Zieldateien von AJA-AufrufenX
- ``desktop`` : Ordner mit der "Desktop" -Ansicht des Plugins (im Gegensatz zur "mobilen Ansicht"")
  -   ``js`` : Ordner mit allen Dateien vom Typ Javascript
  -   ``php`` : Ordner mit allen PHP-Dateien, die die Anzeige machen
  -   ``css`` : Hier gibt es keine, aber bei Bedarf gehen alle CSS-Dateien des Plugins ein
  -   ``modal`` : Ordner mit dem Code der Modalitäten des Plugins
- ``plugin_info`` : enthält die Dateien, mit denen Jeedom das Plugin qualifizieren, installieren und konfigurieren kann
  -   ``info.json`` : Datei mit den grundlegenden Informationen des Plugins (es ist obligatorisch, sonst sieht Jeedom das Plugin nicht), enthält unter anderem die Kennung des Moduls, eine Beschreibung, Installationsanweisungen
  -   ``install.php`` : Datei, die (falls erforderlich) die Methoden zum Installieren und Deinstallieren des Plugins enthält
  -   ``configuration.php`` : Datei mit den Parametern zum Konfigurieren des Plugins unabhängig von seiner Ausstattung (Beispiel für das Zwave-Modul die IP des Raspberry Pi mit der Razberry-Karte)
- ``docs`` : muss das Plugin-Dokument im Markdown-Format, das Stammverzeichnis und die Datei index.md enthalten. Alle Bilder sind in Dokumenten / Bildern. Das Dokument selbst befindet sich je nach Sprache in einer Datei (z. B. in Französisch : ``docs/fr\_FR``)

In Bezug auf die Dateinamenskonvention sind hier die
Imperative :

- Die PHP-Klassendateien müssen mit enden ``.class.php``
- Wenn es nicht von einer Include-Datei verwaltet wird, muss der Dateiname lauten ``nom\_class.class.php``
- Dateien, die nur als Einstiegspunkt für mehrere Dateien verwendet werden, müssen mit enden ``.inc.php``
- Konfigurationsdateien müssen mit enden ``.config.php``

Hier sind die Empfehlungen :

- Dateien vom Typ AJAX müssen mit enden ``.ajax.php``
- Der Name der ersten Seitenansicht eines Plugins muss mit der Plugin-ID übereinstimmen
- Der Name der JS-Datei (falls vorhanden) der ersten Seitenansicht des Plugins muss die Plugin-ID sein

# Plugin-Erstellung Teil 2 : Plugin Info Ordner

## ``info.json``

Sehen [Hier](https://doc.jeedom.com/de_DE/dev/structure_info_json)

## ``install.php``

Datei mit den Installationsanweisungen eines Plugins :

Es setzt sich wie folgt zusammen :

Der erste kommentierte Teil enthält die Lizenz (es ist besser). Die hier verwendete zeigt an, dass die Datei zu Jeedom gehört und Open Source ist. Dann kommt die Aufnahme des Jeedom-Kerns (dies ermöglicht den Zugriff auf interne Funktionen). Dann kommen die 2 Funktionen :

- ``pluginid_install()`` : Methode zur Installation des Plugins. Hier fügt die Installation Jeedom einen Cron-Job hinzu
- ``pluginid_update()`` : Methode zur Installation des Plugins. Wird hier verwendet, um den Cron-Job neu zu starten
- ``pluginid_remove()`` : Methode zum Entfernen des Plugins. Hier löscht die Funktion den Cron-Job von Jeedom während der Deinstallation

Beispiel :

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

Datei, mit der Konfigurationsinformationen vom Benutzer angefordert werden :

Die Datei besteht aus :

- Die Lizenz wie bisher
- Die Einbeziehung des Jeedom-Kerns
- Überprüfen, ob der Benutzer angemeldet ist (ich füge die 404-Datei hinzu, da es sich bei dieser Datei um eine Ansichtsdatei handelt)

Dann kommt der angeforderte Parameter (er kann mehrere haben), es ist eine Standard-Bootstrap-Syntax für Formulare. Die einzigen zu beachtenden Besonderheiten sind die Klassen (``configKey``) um das Parameterelement sowie den "data-l1key" anzugeben, der den Namen des Parameters angibt. Um den Wert an anderer Stelle im Plugin abzurufen, tun Sie dies einfach : ``config::byKey(NOM_PARAMETRE, PLUGIN_ID)``

Beispiel :

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

# Plugin-Erstellung Teil 3 : Desktop-Ordner

## PHP

Dieser Ordner enthält die Ansicht selbst. Darin müssen wir die Plugin-Konfigurationsseite finden (die, die angezeigt wird, wenn der Benutzer das Plugin ⇒ Kategorie ⇒ Ihr Plugin erstellt). Es ist ratsam, es mit der ID Ihres Plugins zu benennen. Es kann auch das Panel enthalten (Seite, die der Benutzer unter Startseite → Name Ihres Plugins findet).

Alle Dateien in diesem Ordner müssen mit enden ``.php`` und muss mit beginnen :

````
<?php
if (!isConnect('admin')) {
    throw new Exception('{{401 - Accès non autorisé}}');
 }
 sendVarToJS('eqType', 'mail');
 ?>
 ````

Sobald Sie auf dieser Seite sind, haben Sie in PHP Zugriff auf alle Funktionen des Jeedom-Kerns (siehe [Hier](https://www.jeedom.com/doc/documentation/code/) ) sowie die aller installierten Module, also auch Ihre.

Alle diese Seiten sind Ansichten und verwenden hauptsächlich HTML-Syntax. Für alles, was Präsentation ist, basiert Jeedom hauptsächlich auf Bootstrap [Dokumentation](http://getbootstrap.com/) anwendbar.

Um die Erstellung von Plugins zu vereinfachen, können Sie das Javascript-Vorlagenskript für Plugins in Ihre Seite aufnehmen :

````
<?php include_file('core', 'plugin.template', 'js'); ?>
````

Am Ende Ihrer Seite platzieren und nur auf der Konfigurationsseite Ihres Plugins nützlich. Dieses Skript ermöglicht es, das obligatorische Javascript auf eine einzige Funktion zu reduzieren (siehe Abschnitt über JS-Dateien).

Auf Ihrer Konfigurationsseite wurde eine HTML-Syntax implementiert, um Ihr Leben zu vereinfachen. Für die meisten Plugins müssen Sie also nur HTML ausführen, um Ihre Informationen in der Datenbank zu speichern und sie daher auf der Seite Ihrer Klasse erneut zu verwenden.

Die Syntax ist recht einfach: Ihr Element (Eingabe, Auswahl ...) muss die Klasse css eqLogicAttr (oder cmdAttr für Befehle) und ein Attribut enthalten, das den Namen der Eigenschaft angibt :

````
<input type="text" class="eqLogicAttr form-control" data-l1key="name" placeholder="{{Nom de l'équipement mail}}"/>
````

Dort wird beispielsweise beim Laden der Daten jeedom der Wert des Gerätenamens in die Eingabe eingegeben und beim Speichern wiederhergestellt, um es wieder in die Datenbank aufzunehmen. Kleiner Tipp, einige Eigenschaften sind tatsächlich JSON-Strings in BDD (dies ermöglicht dem Plugin viel Freiheit). In diesem Fall müssen Sie dies nur tun :

````
<input class="eqLogicAttr form-control" data-l1key='configuration' data-l2key='fromName' />
````

Die Liste der Geräte- und Befehlseigenschaften finden Sie hier (um die Eigenschaften von JSON anzuzeigen, sehen Sie sich nur den Getter oder den Setter an. Wenn zwei Parameter erforderlich sind, handelt es sich um JSON)

Letzter wichtiger Punkt auf der Konfigurationsseite: Dies kann so viele Geräte und Steuerungen enthalten, wie benötigt werden. Es gibt jedoch einige Regeln zu befolgen :

Alle Elemente mit der Klasse eqLogicAttr müssen sich in einem Element mit der Klasse css eqLogic befinden. Gleiches gilt für die Elemente der Klasse css cmdAttr, die sich in einem Element der Klasse cmd befinden müssen. Alle Befehle eines Geräts müssen sich im Element mit der entsprechenden eqLogic-Klasse befinden

## JS

Alle JS-Dateien sollten sich im JS-Ordner befinden (einfach !!!). Es ist ratsam, es mit der gleichen ID wie Ihr Plugin zu benennen (im Konfigurationsteil für das Panel, das Sie tun, was Sie wollen). Diese JS-Datei (die der Plugin-Konfiguration) muss mindestens eine addCmdToTable-Methode enthalten, die das hinzuzufügende Befehlsobjekt als Parameter verwendet. Hier ist ein einfaches Beispiel :

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

Sie werden feststellen, dass es eine Zeile pro Befehl gibt und dass diese die Klasse css cmd hat. Sie können auch die Elemente mit der Klasse cmdAttr anzeigen.

Mehrere wichtige Punkte :

- Diese Funktion kann mit einem leeren Objekt (daher die ersten 3 Zeilen) aufgerufen werden, wenn ein neuer Befehl hinzugefügt wird
- Die letzte Zeile wird verwendet, um alle Felder zu initialisieren, nachdem die Zeile eingefügt wurde

Letzter Punkt: Ein vollständigeres Beispiel mit Befehlstyp und Untertyp :

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

Hier können wir feststellen :

- ``jeedom.cmd.availableType()`` fügt eine Auswahl mit der Liste der bekannten Typen ein (Aktion und Informationen für den Moment)
- ``<span class="subType" subType="' + init(\_cmd.subType) + '"><\span>`` : wo die Untertypauswahl eingestellt werden soll
- ``jeedom.cmd.changeType(\$('\#table\_cmd tbody tr:last'), init(\_cmd.subType))`` Hiermit können Sie den Subtyp mit dem richtigen Wert initialisieren

Andere Javascript-Funktionen können verwendet werden :

- ``printEqLogic`` Dies nimmt als Parameter das gesamte Objekt des Geräts (nützlich bei Datenverarbeitung vor der Rückgabe). Es wird aufgerufen, wenn die Gerätedaten angezeigt werden
- ``saveEqLogic`` Als Parameter wird das Geräteobjekt verwendet, das in der Datenbank gespeichert wird (nützlich, wenn Sie vor dem Speichern eine Verarbeitung durchführen müssen). Als letztes können Sie JS-Dateien auf saubere Weise in Ihre PHP-Seite aufnehmen :

````
<?php include_file('desktop', 'weather', 'js', 'weather'); ?>
````

Das erste Argument gibt den Ordner an, in dem es gefunden werden soll (seien Sie vorsichtig, es ist der übergeordnete Ordner des JS-Ordners), das zweite den Namen Ihres Javascript, das dritte sagt Jeedom, dass es sich um eine JS-Datei handelt und das letzte, in dem es sich befindet befindet sich.

## CSS

Dieser Ordner enthält Ihre CSS-Dateien (sie sollten nicht überbeansprucht werden). So fügen Sie sie in Ihre Seite ein :

````
<?php include_file('desktop', 'weather', 'css', 'weather'); ?>
````

Das erste Argument gibt den Ordner an, in dem es gefunden werden soll (seien Sie vorsichtig, es ist der übergeordnete Ordner des CSS-Ordners), das zweite den Namen Ihrer CSS-Datei, das dritte sagt Jeedom, dass es sich um eine CSS-Datei handelt und das letzte, in dem sich das Plugin befindet es stellt sich heraus, dass.

## MODAL

Im modalen Ordner können Sie Ihre PHP-Dateien speichern, um Modale anzuzeigen. So rufen Sie sie von Ihrer Hauptseite aus auf (dieser Code wird in eine Javascript-Datei eingefügt) :

Du kannst sehen :

````
$('#md_modal').dialog({title: "{{Classe du périphérique}}"});
$('#md_modal').load('index.php?v=d&plugin=zwave&modal=show.class&id=' + $('.eqLogicAttr[data-l1key=id]').value()).dialog('open');
````

In der ersten Zeile können Sie Ihrem Modal einen Titel hinzufügen

Die zweite Zeile lädt Ihr Modal und Ihre Anzeige. Die Syntax ist recht einfach : Plugin, die ID Ihres Plugins, Modal, der Name Ihres Modals ohne PHP und dann die Parameter, die Sie an es übergeben möchten

## JS API

Dies ist kein Ordner, aber in den neuesten Versionen von Jeedom bietet es dem Entwickler eine vollständige Javascript-API (dies vermeidet das Schreiben von Ajax-Aufrufen in alle Richtungen). Ich werde versuchen, einen Artikel zu verfassen, um die verschiedenen Funktionen zu erklären, aber Sie können den Code bereits hier finden.

Soviel zu den Details des Desktop-Ordners. Ich vermute, dass es nicht das vollständigste ist (ich werde versuchen, es gemäß den verschiedenen eingegangenen Anfragen zu vervollständigen), aber ich hoffe, dass Sie dank dessen Plugins für Jeedom erstellen können.

## Tipps und Tricks

### Assitant Cron

````
$('body').delegate('.helpSelectCron','click',function(){
  var el = $(this).closest('.schedule').find('.scenarioAttr[data-l1key=schedule]');
  jeedom.getCronSelectModal({},function (result) {
    el.value(result.value);
  });
});
````

Wenn wir auf die Schaltfläche Assistent klicken, rufen wir die Eingabe ab, in die geschrieben werden soll, und rufen dann den Assistenten an. Sobald die Konfiguration im Assistenten abgeschlossen ist, wird das Ergebnis abgerufen und in die zuvor ausgewählte Eingabe geschrieben

# Plugin-Erstellung Teil 4 : Kernordner

Der mit Abstand wichtigste Ordner Ihres Plugins kann 4 Unterordner haben.

Hinweis : In diesem Teil wird auf die ID Ihres Plugins verwiesen : Plugin\_id

## PHP

Enthält die zusätzlichen PHP-Dateien, die ich zum Einfügen einer Include-Datei verwendet habe, zum Beispiel, wenn Sie natürlich mehrere Klassendateien oder 3rparty-Dateien zum Einschließen haben

## Template

Jeedom kann 2 Unterordner enthalten, Dashboard und Mobile. Es ist ein Ordner, den Jeedom automatisch nach Widgets durchsucht. Wenn Sie also bestimmte Widgets verwenden, müssen Sie hier deren HTML-Datei ablegen

## i18n

Hier sollte Ihre Übersetzung in Form einer JSON-Datei vorliegen (am besten und schauen Sie sich zum Beispiel das Plugin an [zwave](https://github.com/jeedom/plugin-openzwave) um die Form der Datei zu sehen)

## ajax

Dieser Ordner ist für alle Ihre Ajax-Dateien vorgesehen. Hier ist ein Skelett der Ajax-Datei :

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

Sehr wichtige Datei, es ist die Engine Ihres Plugins. Hierher kommen die 2 obligatorischen Klassen Ihres Plugins :

- ``Plugin\_id``
- ``Plugin\_idCmd``

Der erste erbt von der eqLogic-Klasse und der zweite von cmd. Hier ist eine Vorlage :

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

Klasse plugin_id extends eqLogic {

    /*     * *************************Attributs****************************** */


    /*     * ***********************Methode static*************************** */


    /*     * *********************Methode d'instance************************* */


    /*     * **********************Getteur Setteur*************************** */

}

Klasse plugin_idCmd extends cmd {

    /*     * *************************Attributs****************************** */


    /*     * ***********************Methode static*************************** */


    /*     * *********************Methode d'instance************************* */


    /*     * **********************Getteur Setteur*************************** */

}

?>
````

Für die Definition von Jeedom-Klassen lade ich Sie ein, dies zu konsultieren [Seite? ˅](https://doc.jeedom.com/dev/phpdoc/4.0/)

Die einzige obligatorische Methode ist die Instanzmethode für die cmd execute-Klasse. Hier ist ein Beispiel mit dem SARAH-Plugin :

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

Als ziemlich einfaches, aber vollständiges Beispiel lautet das Prinzip wie folgt: Wenn der Befehl eine Aktion oder eine Information ist (aber nicht nur ein Ereignis und sein Cache überschritten wird), ruft jeedom diese Methode auf.

In unserem Beispiel hier ist es ein Befehl, SARAH zum Sprechen zu bringen, wobei das Plugin die Parameter in den Optionen \ $\_ abruft (Vorsicht, dies ist ein Array und seine Attribute ändern sich je nach Subtyp des Befehls : Farbe für einen Farbuntertyp, Schieberegler für einen Untertyp-Schieberegler, Titel und Nachricht für einen Nachrichtenuntertyp und leer für einen anderen Untertyp).

Hier ist für den obligatorischen Teil, hier ist jetzt, was daneben verwendet werden kann (mit Beispiel) :

### toHtml (\ $\_ version = 'Dashboard')

Eine Funktion, die je nach Anforderung in der Steuerung oder im Gerät verwendet werden kann, ist hier ein Beispiel für das Gerät

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

Einige interessante Dinge hier :

Um die angeforderte Version in ein Dashboard oder ein Mobiltelefon zu konvertieren (mview wird beispielsweise mobil, können Sie beispielsweise in den Ansichten den Namen der Objekte hinzufügen)

````
$_version = jeedom::versionAlias($_version);
````

Abrufen einer Bestellvorlage, hier die Bestellvorlage : Plugins / Wetter / Kern / Vorlage / \ $\_ Version / Vorhersage.html (\ $\_ Version gültig für Handy oder Dashboard)

````
$forcast_template = getTemplate('core', $_version, 'forecast', 'weather');
````

Hier ersetzen die zuvor ausgefüllten Tags \ $ den HTML-Code, um die Werte zu enthalten

````
$html_forecast .= template_replace($replace, $forcast_template);
````

Auf diese Weise können Sie den Befehl mit der logischen\_id abrufen : Temperatur\_min

````
$this->getCmd(null, 'temperature_min');
````

Dort kann der Wert nur dann in das Tag eingefügt werden, wenn die Bestellung erfolgreich abgerufen wurde

````
$replace['#temperature#'] = is_object($temperature) ? $temperature->execCmd() : '';
````

Wichtige Passage: Auf diese Weise können Sie die vom Benutzer auf der Seite Allgemein → Anzeige vorgenommenen Anpassungen abrufen und erneut in die Vorlage einfügen

````
$parameters = $this->getDisplay('parameters');
if (is_array($parameters)) {
    foreach ($parameters as $key => $value) {
        $replace['#' . $key . '#'] = $value;
    }
}
````

Speichern des Widgets im Cache: Damit wir es bei der nächsten Anfrage schneller bereitstellen können, können wir hier die 0 bemerken, die eine unendliche Lebensdauer anzeigt, andernfalls ist die Dauer in Sekunden (wir werden im nächsten Teil sehen, wie das Wetter-Plugin sein Widget aktualisiert).

````
cache::set('weatherWidget' . $_version . $this->getId(), $html, 0);
````

Endlich das HTML an Jeedom senden :

````
return $html;
````

Sie müssen Jeedom auch mitteilen, was Ihr Widget in Bezug auf die Anpassung zulässt. Es ist ein bisschen komplex (und immer noch), aber normalerweise flexibel und einfach einzurichten.

Es funktioniert auf Ihrem Gerät oder Steuerelement genauso. Es ist ein statisches Attribut der Klasse \ $\_ widgetPossibility, das ein mehrdimensionales Array sein muss. Hier wird es jedoch kompliziert, wenn eine Array-Dimension wahr ist oder falsch. Es wird dann davon ausgegangen, dass alle möglichen Kinder diesen Wert haben (ich werde ein Beispiel geben).

Zuallererst die Fälle, in denen Sie es verwenden müssen: Wenn in Ihrer Klasse das Erben von eqLogic oder von cmd eine toHtml-Funktion hat, lohnt es sich nicht, Folgendes zu lesen.

### Pre- und Post-Methode

Beim Erstellen oder Löschen Ihrer Objekte (Ausrüstung, Befehl oder andere) in Jeedom können vor / nach der Aktion verschiedene Methoden aufgerufen werden :

- ``preInsert`` ⇒ Methode, die vor der Erstellung Ihres Objekts aufgerufen wurde
- ``postInsert`` ⇒ Methode, die nach der Erstellung Ihres Objekts aufgerufen wird
- ``preUpdate`` ⇒ Methode, die vor dem Aktualisieren Ihres Objekts aufgerufen wird
- ``postUpdate`` ⇒ Methode, die nach dem Aktualisieren Ihres Objekts aufgerufen wird
- ``preSave`` ⇒ Methode, die vor dem Speichern (Erstellen und Aktualisieren) Ihres Objekts aufgerufen wird
- ``postSave`` ⇒ Methode, die nach dem Speichern Ihres Objekts aufgerufen wird
- ``preRemove`` ⇒ Methode, die vor dem Löschen Ihres Objekts aufgerufen wird
- ``postRemove`` ⇒ Methode, die nach dem Löschen Ihres Objekts aufgerufen wird

Beispiel, noch mit dem Wetter-Plugin zum Erstellen oder Aktualisieren von Bestellungen nach dem Speichern (das Beispiel ist vereinfacht) :

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

Der Anfang ist ziemlich normal bei der Erstellung eines Auftrags, das Ende ist interessanter bei der Implementierung eines Cron, der die Methode aufruft ``weather::updateWeatherData`` indem Sie die ID des Geräts übergeben, das standardmäßig alle 30 Minuten aktualisiert werden soll.

Hier die updateWeatherData-Methode (ebenfalls vereinfacht) :

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

Wir sehen hier, dass wir während des Aufrufs die betreffenden Geräte abrufen und dann die Befehle ausführen, um die Werte abzurufen und gegebenenfalls zu aktualisieren.

Sehr wichtiger Teil :

````
$weather->checkAndUpdateCmd($cmd,$cmd->execute());
````

Zum Zeitpunkt der Funktion ``checkAndUpdateCmd`` (Dies ermöglicht es Jeedom, eine neue Aktualisierung des Werts zu signalisieren, wobei alle Aktionen ausgelöst werden, die ausgeführt werden müssen : Dashboard-Update, Szenarioüberprüfung),

Für die Befehlsklasse ein kleiner Tipp, um zu wissen, ob Sie die grundlegende js-Vorlage verwenden. Beim Senden der Jeedom-Ausrüstung wird ein Differential an den Bedienelementen vorgenommen und diejenigen entfernt, die sich in der Basis befinden, jedoch nicht in der neuen Definition der Ausrüstung. Hier erfahren Sie, wie Sie dies vermeiden können :

````
public function dontRemoveCmd() {
  return true;
}
````

Zum Schluss noch ein paar Tipps und Tricks :

- Vermeiden Sie (es sei denn, Sie wissen, was Sie tun) das Überschreiben einer Methode der geerbten Klasse (dies kann viele Probleme verursachen)
- Um die Batterie (in%) eines Geräts wieder zusammenzubauen, tun Sie dies (Jeedom kümmert sich um den Rest und benachrichtigt den Benutzer gegebenenfalls) :

````
$eqLogic->batteryStatus(56);
````

- Bei den Aufträgen beim Hinzufügen eines Wertes wendet Jeedom die Instanzmethode an ``formatValue($_value)`` Dies kann je nach Subtyp neu formatiert werden (insbesondere für Binärwerte)
- Führen Sie NIEMALS eine Methode in der Klasse aus, die vom Aufruf von cmd erbt : execCmd oder Ereignis
- Wenn Sie in der Konfiguration Ihrer Bestellung returnStateTime (in Minuten) und returnStateValue eingegeben haben, ändert Jeedom nach X Minute (n) automatisch den Wert Ihrer Bestellung durch returnStateValue)
- Für den Befehl können Sie dennoch addHistoryValue verwenden, um die Einstellung im Verlauf zu erzwingen (beachten Sie, dass Ihre Bestellung historisiert werden muss)
