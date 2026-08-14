# Dokumentation zur Plugin-Vorlage

Hier finden Sie eine leere Plugin-Vorlage [hier](https://github.com/jeedom/plugin-template)

# Erstellung eines Plugins, Teil 1: Die Verzeichnisstruktur

Hier ist die Struktur: Zunächst ein Ordner mit dem Namen Ihres Plugins (genauer gesagt dessen eindeutige Kennung), der die folgenden Unterordner enthalten muss:

- ``3rdparty`` : Ordner mit den im Plugin verwendeten externen Bibliotheken (Beispiel: Für das SMS-Plugin eine Bibliothek für die serielle Kommunikation in PHP).
- ``core`` : Ordner, der alle internen Betriebsdateien enthält.
  - ``class`` : Ordner, der die Plugin-Klasse enthält.
  - ``php`` : Ein Ordner, der Funktionen enthalten kann, die nicht unbedingt zu einer Klasse gehören müssen (wird häufig verwendet, um mehrere Klassen oder Konfigurationsdateien gleichzeitig einzubinden).
  - ``config`` : Konfigurationsdatei des Plugins.
  - ``ajax`` : Ordner, der die Ziel-Dateien für AJAX-Aufrufe enthält.
  - ``i18n`` : Ordner mit den .json-Dateien für die Übersetzung des Plugins.
  - ``template`` : Ordner mit den HTML-Vorlagen für die gerätespezifischen Kacheln des Plugins in den Unterordnern „dashboard“ und „mobile“.
- ``desktop`` : Ordner, der die „Desktop“-Ansicht des Plugins enthält (im Gegensatz zur „Mobile“-Ansicht).
  - ``js`` : Ordner, der alle JavaScript-Dateien für die Benutzeroberfläche des Plugins enthält.
  - ``php`` : Ordner, der alle PHP-Dateien für die Benutzeroberfläche des Plugins enthält.
  - ``css`` : Bei Bedarf alle CSS-Dateien des Plugins, gegebenenfalls einschließlich *Schriftarten*.
  - ``modal`` : Ordner mit dem Code für die Modal-Fenster des Plugins.
  - ``img`` : Ordner für die vom Plugin benötigten Bilder (png, jpg usw.).
- ``plugin_info`` : Enthält die Dateien, mit denen Jeedom das Plugin identifizieren, installieren und konfigurieren kann.
  - ``info.json`` : Datei mit den grundlegenden Informationen zum Plugin. Sie ist zwingend erforderlich, da Jeedom das Plugin sonst nicht erkennt. Sie enthält unter anderem die Modul-ID, die Beschreibung, die Installationsanweisungen …​
  - ``install.php`` : Datei, die (falls erforderlich) die Anweisungen zur Installation und Deinstallation des Plugins enthält.
  - ``configuration.php`` : Datei mit den zu konfigurierenden Parametern des Plugins, die unabhängig von dessen Geräten sind (Beispiel für das Z-Wave-Modul: die IP-Adresse des Raspberry Pi mit der Razberry-Karte)
- ``docs`` : Muss die Dokumentation des Plugins im Markdown-Format, das Stammverzeichnis und die Datei „index.md“ enthalten. Alle Bilder befinden sich im Ordner „docs/images“. Die Dokumentation selbst befindet sich in einem sprachspezifischen Ordner (z. B. auf Französisch: ``docs/fr\_FR``)
- ``ressources`` : Ordner für eventuelle Dämonen und Abhängigkeiten.
- ``data`` : Ordner für Dateien, die vom Jeedom-spezifischen Plugin des Benutzers erstellt werden.

Was die Namenskonvention für Dateien betrifft, so gelten folgende
Anforderungen:

- PHP-Klassendateien müssen zwingend mit ``.class.php``
- Wenn dies nicht über eine Einbindungsdatei verwaltet wird, muss der Dateiname lauten ``nom\_class.class.php``
- Dateien, die ausschließlich als Einstiegspunkt für das Einbinden mehrerer Dateien dienen, müssen mit ``.inc.php``
- Die Konfigurationsdateien müssen mit ``.config.php``

Hier sind die Empfehlungen:

- AJAX-Dateien müssen mit ``.ajax.php``
- Der Name der ersten Ansicht eines Plugins muss mit der ID des Plugins übereinstimmen
- Der Name der JS-Datei (falls vorhanden) der ersten Ansicht des Plugins muss der ID des Plugins entsprechen

# Erstellung eines Plugins, Teil 2: Ordner „plugin-info“

## ``info.json``

Siehe [hier](structure_info_json)

## ``install.php``

Datei mit Anweisungen zur Installation eines Plugins:

Es setzt sich wie folgt zusammen:

Der erste kommentierte Abschnitt enthält die Lizenz (das ist besser). Die hier verwendete Lizenz gibt an, dass die Datei Jeedom gehört und dass es sich um Open Source handelt. Anschließend folgt die Einbindung des Jeedom-Kerns (dies ermöglicht den Zugriff auf interne Funktionen). Danach folgen die drei Funktionen:

- ``pluginid_install()`` : Methode zur Installation des Plugins. Bei dieser Installation wird eine Cron-Aufgabe zu Jeedom hinzugefügt
- ``pluginid_update()`` : Methode zur Installation des Plugins. Wird hier verwendet, um den Cron-Job neu zu starten
- ``pluginid_remove()`` : Methode zum Entfernen des Plugins. Hier löscht die Funktion bei der Deinstallation den Jeedom-Cron-Job.

Beispiel:

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

Datei, mit der Konfigurationsinformationen vom Benutzer abgefragt werden können:

Die Datei besteht aus:

- Die Lizenz wie bisher
- Einbindung des Jeedom-Kerns
- Überprüfung, ob der Benutzer tatsächlich angemeldet ist (ich füge die Datei 404 ein, da es sich bei dieser Datei um eine Ansichtsdatei handelt)

Anschließend folgt der angeforderte Parameter (es können mehrere sein); dies ist eine Standard-Bootstrap-Syntax für Formulare, wobei lediglich die Klasse (``configKey``) muss dem Parameterelement hinzugefügt werden, ebenso wie das Attribut „data-l1key“, das den Namen des Parameters angibt. Um den Wert dieses Parameters an anderer Stelle im Plugin abzurufen, reicht es aus, Folgendes zu tun: ``config::byKey(NOM_PARAMETRE, PLUGIN_ID)``

Beispiel:

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

# Erstellung eines Plugins, Teil 3: Desktop-Ordner

## PHP

Dieser Ordner enthält die eigentliche Ansicht. Darin muss sich zwingend die Konfigurationsseite des Plugins befinden (die Seite, die angezeigt wird, wenn der Benutzer „Plugins ⇒ Kategorie ⇒ Ihr Plugin“ aufruft). Es wird empfohlen, diese Seite mit der ID Ihres Plugins zu benennen. Der Ordner kann auch das Bedienfeld enthalten (die Seite, die der Benutzer unter „Startseite → Name Ihres Plugins“ findet).

Alle Dateien in diesem Ordner müssen mit ``.php`` und müssen zwingend mit folgendem beginnen:

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

Sobald Sie sich auf dieser Seite befinden, haben Sie über PHP Zugriff auf alle Funktionen des Jeedom-Kerns (siehe [hier](https://www.jeedom.com/doc/documentation/code/) ) sowie die aller installierten Module, also auch Ihres.

Da es sich bei all diesen Seiten um Ansichten handelt, verwenden sie hauptsächlich HTML-Syntax. Was die Darstellung angeht, stützt sich Jeedom hauptsächlich auf Bootstrap, daher ist die gesamte [Dokumentation](http://getbootstrap.com/) ist anwendbar.

Um die Erstellung von Plugins zu vereinfachen, können Sie das JavaScript-Skript der Plugin-Vorlage in Ihre Seite einbinden:

````php
<?php include_file('core', 'plugin.template', 'js'); ?>
````

Dies sollte ganz unten auf Ihrer Seite eingefügt werden und ist nur auf der Konfigurationsseite Ihres Plugins von Nutzen. Mit diesem Skript lässt sich das erforderliche JavaScript auf eine einzige Funktion reduzieren (siehe Abschnitt über JS-Dateien).

Auf Ihrer Konfigurationsseite wurde eine HTML-Syntax implementiert, um Ihnen die Arbeit zu erleichtern. Bei den meisten Plugins müssen Sie daher lediglich HTML-Code verwenden, um Ihre Informationen in der Datenbank zu speichern und sie anschließend in Ihrer Klasse wieder abzurufen.

Die Syntax ist recht einfach: Ihr Element (input, select…​) muss die CSS-Klasse eqLogicAttr (oder cmdAttr für Befehle) sowie ein Attribut haben, das den Namen der Eigenschaft angibt:

````html
{% raw %}
<input type="text" class="eqLogicAttr form-control" data-l1key="name" placeholder="{{Nom de l'équipement mail}}"/>
{% endraw %}
````

Hier wird beispielsweise beim Laden der Daten von Jeedom der Name des Geräts in das Eingabefeld eingefügt und beim Speichern wieder abgerufen, um ihn in die Datenbank zu schreiben. Ein kleiner Tipp: Einige Eigenschaften sind in der Datenbank tatsächlich JSON-Strings (das bietet dem Plugin wirklich viel Spielraum). In diesem Fall reicht es aus, Folgendes zu tun:

````html
<input class="eqLogicAttr form-control" data-l1key='configuration' data-l2key='fromName' />
````

Die Liste der Eigenschaften der Geräte und Befehle finden Sie hier (um zu erkennen, welche Eigenschaften im JSON-Format vorliegen, schauen Sie einfach auf den Getter oder Setter: Wenn dieser zwei Parameter akzeptiert, handelt es sich um JSON).

Ein letzter wichtiger Hinweis zur Konfigurationsseite: Diese kann so viele Geräte und Befehle enthalten, wie nötig sind. Allerdings sind dabei einige Regeln zu beachten:

Alle Elemente mit der Klasse „eqLogicAttr“ müssen sich in einem Element mit der CSS-Klasse „eqLogic“ befinden. Gleiches gilt für Elemente der CSS-Klasse „cmdAttr“, die sich in einem Element der Klasse „cmd“ befinden müssen. Alle Befehle eines Geräts müssen sich in dem Element mit der entsprechenden „eqLogic“-Klasse befinden.

## JS

Alle JS-Dateien müssen sich im Ordner „JS“ befinden (ganz einfach!!!). Es wird empfohlen, diesen Ordner mit derselben ID wie Ihr Plugin zu benennen (im Konfigurationsbereich; für das Panel können Sie es so handhaben, wie Sie möchten). Diese JS-Datei (die für die Plugin-Konfiguration) muss mindestens eine Methode „addCmdToTable“ enthalten, die das hinzuzufügende Objekt des Befehls als Parameter entgegennimmt. Hier ein einfaches Beispiel:

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

Sie werden feststellen, dass pro Befehl eine Zeile vorhanden ist und dass diese die CSS-Klasse „cmd“ trägt. Außerdem können Sie die Elemente erkennen, die die Klasse „cmdAttr“ tragen.

Einige wichtige Punkte:

- Diese Funktion kann beim Hinzufügen eines neuen Befehls mit einem leeren Objekt aufgerufen werden (daher die ersten drei Zeilen).
- Mit der letzten Zeile werden alle Felder initialisiert, sobald die Zeile eingefügt wurde

Letzter Punkt: Ein umfassenderes Beispiel mit Befehlstyp und Untertyp:

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

Hier fällt Folgendes auf:

- ``jeedom.cmd.availableType()`` wird ein Auswahlfeld mit der Liste der bekannten Typen einfügen (derzeit „Aktion“ und „Info“)
- ``<span class="subType" subType="' + init(\_cmd.subType) + '"><\span>`` : Der Ort, an dem das Select-Element des Untertyps platziert werden muss
- ``jeedom.cmd.changeType(\$('\#table\_cmd tbody tr:last'), init(\_cmd.subType))`` mit der der Untertyp mit dem richtigen Wert initialisiert werden kann

Es können weitere JavaScript-Funktionen verwendet werden:

- ``printEqLogic`` die das gesamte Objekt des Geräts als Parameter übernimmt (nützlich bei der Datenverarbeitung vor der Ausgabe). Sie wird bei der Anzeige der Gerätedaten aufgerufen
- ``saveEqLogic`` die als Parameter das Geräteobjekt übernimmt, das in der Datenbank gespeichert werden soll (nützlich, wenn Sie vor dem Speichern eine Verarbeitung durchführen müssen) Zu guter Letzt: So binden Sie JS-Dateien sauber in Ihre PHP-Seite ein:

````php
<?php include_file('desktop', 'weather', 'js', 'weather'); ?>
````

Das erste Argument gibt den Ordner an, in dem sich die Datei befindet (Achtung: Es handelt sich um den übergeordneten Ordner des JS-Ordners), das zweite den Namen Ihrer JavaScript-Datei, das dritte teilt Jeedom mit, dass es sich um eine JS-Datei handelt, und das letzte, in welchem Plugin sie sich befindet.

## CSS

Dieser Ordner enthält Ihre CSS-Dateien (er sollte nicht allzu häufig verwendet werden). So binden Sie diese in Ihre Seite ein:

````php
<?php include_file('desktop', 'weather', 'css', 'weather'); ?>
````

Das erste Argument gibt den Ordner an, in dem sich die Datei befindet (Achtung: Es handelt sich um den übergeordneten Ordner des CSS-Ordners), das zweite den Namen Ihrer CSS-Datei, das dritte teilt Jeedom mit, dass es sich um eine CSS-Datei handelt, und das letzte, in welchem Plugin sie sich befindet.

## MODAL

Im Ordner „modal“ können Sie Ihre PHP-Dateien speichern, die zur Anzeige von Modalen dienen. So rufen Sie diese von Ihrer Hauptseite aus auf (dieser Code wird in eine JavaScript-Datei eingefügt):

Man sieht:

````js
{% raw %}
$('#md_modal').dialog({title: "{{Classe du périphérique}}"}).load('index.php?v=d&plugin=zwave&modal=show.class&id=' + $('.eqLogicAttr[data-l1key=id]').value()).dialog('open')
{% endraw %}
````

In der ersten Zeile können Sie Ihrem Modal einen Titel geben

Die zweite Zeile lädt Ihr Modal und die Anzeige. Die Syntax ist recht einfach: plugin, die ID Ihres Plugins, modal, der Name Ihres Modals ohne „php“ und anschließend die Parameter, die Sie ihm übergeben möchten

## JS-API

Es handelt sich zwar nicht um ein Modul, aber in den neuesten Versionen von Jeedom bietet es Entwicklern eine umfassende JavaScript-API (wodurch das Schreiben von AJAX-Aufrufen in alle Richtungen vermieden wird). Ich werde versuchen, einen Artikel zu verfassen, um die verschiedenen Funktionen zu erläutern, aber den Code finden Sie bereits hier.

Das waren die Details zum Desktop-Ordner. Ich gehe davon aus, dass er nicht ganz vollständig ist (ich werde versuchen, ihn entsprechend den verschiedenen eingegangenen Anfragen zu ergänzen), aber ich hoffe, dass ihr damit beginnen könnt, Plugins für Jeedom zu entwickeln.

## Tipps und Tricks

### Cron-Assistent

````js
$('body').delegate('.helpSelectCron','click',function() {
  var el = $(this).closest('.schedule').find('.scenarioAttr[data-l1key=schedule]')
  jeedom.getCronSelectModal({},function (result) {
    el.value(result.value)
  })
})
````

Wenn man auf die Schaltfläche „Assistent“ klickt, wird das Eingabefeld zum Bearbeiten angezeigt und anschließend der Assistent aufgerufen. Sobald die Konfiguration im Assistenten abgeschlossen ist, wird das Ergebnis abgerufen und in das zuvor ausgewählte Eingabefeld geschrieben.

# Erstellung eines Plugins, Teil 4: Ordner „core“

Dies ist mit Abstand der wichtigste Ordner Ihres Plugins; er kann vier Unterordner enthalten.

Hinweis: In diesem Abschnitt wird die ID Ihres Plugins durchgehend als „plugin\_id“ bezeichnet.

## PHP

Enthält die zugehörigen PHP-Dateien. Ich habe mir angewöhnt, beispielsweise eine Include-Datei einzufügen, falls Sie natürlich mehrere Klassendateien oder Dateien von Drittanbietern einbinden müssen.

## Vorlage

Dieser Ordner kann zwei Unterordner enthalten: „Dashboard“ und „Mobile“. Jeedom durchsucht diesen Ordner automatisch nach Widgets. Wenn Sie also bestimmte Widgets verwenden, müssen Sie deren HTML-Dateien hier ablegen.

## i18n

Hier muss Ihre Übersetzung als JSON-Datei vorliegen (am besten sehen Sie sich beispielsweise das Plugin an [Z-Wave](https://github.com/jeedom/plugin-openzwave) (um das Dateiformat anzuzeigen)

## Ajax

Dieser Ordner ist für alle Ihre AJAX-Dateien vorgesehen. Hier ist ein Beispiel für eine AJAX-Datei:

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

## Klasse

Ein sehr wichtiger Ordner, er ist das Herzstück Ihres Plugins. Hier befinden sich die beiden obligatorischen Klassen Ihres Plugins:

- ``plugin\_id``
- ``plugin\_idCmd``

Die erste muss von der Klasse „eqLogic“ erben, die zweite von „cmd“. Hier ist eine Vorlage:

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

Zur Definition der Jeedom-Klassen empfehle ich Ihnen, diesen Artikel zu lesen [Website](/phpdoc/)

Die einzige obligatorische Methode ist die Instanzmethode der Klasse „cmd execute“. Hier ein Beispiel mit dem S.A.R.A.H-Plugin:

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

Ein recht einfaches, aber umfassendes Beispiel: Das Prinzip ist wie folgt: Wenn es sich bei dem Befehl um eine Aktion oder eine Information handelt (jedoch nicht nur um ein Ereignis und sofern der Cache abgelaufen ist), ruft Jeedom diese Methode auf.

In unserem Beispiel hier handelt es sich um einen Befehl, um S.A.R.A.H sprechen zu lassen, wobei das Plugin die Parameter aus \$\_options abruft (Achtung: Es handelt sich um ein Array, dessen Attribute je nach Untertyp des Befehls variieren: „color“ für den Untertyp „color“, „slider“ für den Untertyp „slider“, „title“ und „message“ für den Untertyp „message“ sowie leer für den Untertyp „other“).

Das war der obligatorische Teil, nun folgt, was zusätzlich verwendet werden kann (mit Beispiel):

### toHtml(\$\_version = 'dashboard')

Diese Funktion kann je nach Bedarf in der Steuerung oder im Gerät verwendet werden. Hier ein Beispiel für das Gerät

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

Hier gibt es einige interessante Aspekte:

Um die angeforderte Version in ein Dashboard oder eine mobile Ansicht umzuwandeln (z. B. wird „mview“ zu „mobile“; dadurch können beispielsweise in den Ansichten die Namen der Objekte hinzugefügt werden)

````php
$_version = jeedom::versionAlias($_version);
````

Abrufen einer Bestellvorlage, in diesem Fall die Bestellvorlage: plugins/weather/core/template/\$\_version/forecast.html (\$\_version hat den Wert „mobile“ oder „dashboard“)

````php
$forcast_template = getTemplate('core', $_version, 'forecast', 'weather');
````

Hier werden die zuvor in \$replace des HTML-Codes eingefügten Tags durch die entsprechenden Werte ersetzt

````php
$html_forecast .= template_replace($replace, $forcast_template);
````

Damit lässt sich der Befehl mit der logical\_id „temperature\_min“ abrufen.

````php
$this->getCmd(null, 'temperature_min');
````

Hiermit wird der Wert nur dann in das Tag gesetzt, wenn der Befehl erfolgreich abgerufen wurde

````php
$replace['#temperature#'] = is_object($temperature) ? $temperature->execCmd() : '';
````

Wichtiger Hinweis: Auf diese Weise können die vom Benutzer auf der Seite „Allgemein → Anzeige“ vorgenommenen Anpassungen abgerufen und wieder in die Vorlage übernommen werden.

````php
$parameters = $this->getDisplay('parameters');
if (is_array($parameters)) {
    foreach ($parameters as $key => $value) {
        $replace['#' . $key . '#'] = $value;
    }
}
````

Zwischenspeicherung des Widgets im Cache: Damit es bei der nächsten Anfrage schneller bereitgestellt wird, ist hier die 0 zu beachten, die eine unbegrenzte Lebensdauer angibt; andernfalls wird die Dauer in Sekunden angegeben (im nächsten Abschnitt werden wir sehen, wie das Wetter-Plugin sein Widget aktualisiert).

````php
cache::set('weatherWidget' . $_version . $this->getId(), $html, 0);
````

Schließlich wird der HTML-Code an Jeedom gesendet:

````php
return $html;
````

Außerdem muss man Jeedom mitteilen, welche Anpassungsmöglichkeiten Ihr Widget zulässt. Das ist zwar etwas komplex (und noch nicht ganz ausgereift), aber normalerweise flexibel und einfach einzurichten.

Es funktioniert auf Ihrem Gerät oder Ihrer Steuerung auf dieselbe Weise: Es handelt sich um ein statisches Attribut der Klasse \$\_widgetPossibility, das ein mehrdimensionales Array sein muss. Kompliziert wird es jedoch, wenn eine Dimension des Arrays den Wert „true“ oder „false“ annimmt. In diesem Fall geht das System davon aus, dass alle möglichen untergeordneten Elemente diesen Wert haben (ich werde ein Beispiel nennen).

Zunächst einmal die Fälle, in denen Sie diese Funktion verwenden müssen: Wenn Ihre Klasse, die von eqLogic oder cmd erbt, über eine toHtml-Funktion verfügt, brauchen Sie den Rest nicht weiterzulesen.

### Vor- und Nachbehandlung

Beim Anlegen oder Löschen Ihrer Objekte (Geräte, Steuerungen oder Sonstiges) in Jeedom kann das System vor und nach der Aktion mehrere Methoden aufrufen:

- ``preInsert`` ⇒ Methode, die vor der Erstellung Ihres Objekts aufgerufen wird
- ``postInsert`` ⇒ Methode, die nach der Erstellung Ihres Objekts aufgerufen wird
- ``preUpdate`` ⇒ Methode, die vor der Aktualisierung Ihres Objekts aufgerufen wird
- ``postUpdate`` ⇒ Methode, die nach der Aktualisierung Ihres Objekts aufgerufen wird
- ``preSave`` ⇒ Methode, die vor dem Speichern (also beim Anlegen und Aktualisieren) Ihres Objekts aufgerufen wird
- ``postSave`` ⇒ Methode, die nach dem Speichern Ihres Objekts aufgerufen wird
- ``preRemove`` ⇒ Methode, die vor dem Löschen Ihres Objekts aufgerufen wird
- ``postRemove`` ⇒ Methode, die nach dem Löschen Ihres Objekts aufgerufen wird

Beispiel, wiederum mit dem Wetter-Plugin, zur Erstellung von Befehlen oder deren Aktualisierung nach dem Speichern (das Beispiel ist vereinfacht):

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

Der Anfang ist mit der Erstellung eines Befehls recht standardmäßig, das Ende ist mit der Einrichtung eines Cron-Jobs, der die Methode aufruft, interessanter ``weather::updateWeatherData`` wobei standardmäßig alle 30 Minuten die ID des zu aktualisierenden Geräts übergeben wird.

Hier die Methode „updateWeatherData“ (ebenfalls vereinfacht):

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

Hier sieht man, dass beim Aufruf das betreffende Gerät abgerufen wird und anschließend die Befehle ausgeführt werden, um die Werte abzurufen und diese gegebenenfalls zu aktualisieren.

Ein sehr wichtiger Teil:

````php
$weather->checkAndUpdateCmd($cmd,$cmd->execute());
````

Zum Zeitpunkt der Ausführung ``checkAndUpdateCmd`` (wodurch Jeedom über eine neue Wertaktualisierung informiert wird, wodurch alle erforderlichen Aktionen ausgelöst werden: Aktualisierung des Dashboards, Überprüfung der Szenarien…​),

Für die Steuerungsklasse gibt es einen kleinen Tipp, den Sie beachten sollten, wenn Sie die Basis-JS-Vorlage verwenden. Beim Senden der Gerätebefehle führt Jeedom einen Abgleich durch und löscht diejenigen Befehle, die in der Basisvorlage enthalten sind, aber nicht in der neuen Gerätedefinition vorkommen. So können Sie dies vermeiden:

````php
public function dontRemoveCmd() {
  return true;
}
````

Zum Schluss noch ein paar Tipps und Tricks:

- Vermeiden Sie es (es sei denn, Sie wissen genau, was Sie tun), eine Methode der übergeordneten Klasse zu überschreiben (dies kann zu zahlreichen Problemen führen)
- Um den Stand der Batterie (in %) eines Geräts anzuzeigen, führen Sie folgende Schritte auf dem Gerät aus (Jeedom kümmert sich um den Rest und benachrichtigt den Benutzer bei Bedarf):

````php
$eqLogic->batteryStatus(56);
````

- Bei Befehlen zum Zeitpunkt des Hinzufügens eines Werts wendet Jeedom die Instanzmethode an ``formatValue($_value)`` die je nach Untertyp die Werte umformatieren kann (insbesondere bei binären Werten)
- Erstellen Sie NIEMALS eine Methode in der Klasse, die von cmd erbt, mit dem Namen: execCmd oder event
- Wenn Sie in der Konfiguration Ihres Befehls „returnStateTime“ (in Minuten) und „returnStateValue“ angegeben haben, ändert Jeedom den Wert Ihres Befehls nach X Minuten automatisch auf „returnStateValue“.
- Für den Befehl können Sie außerdem „addHistoryValue“ verwenden, um die Protokollierung zu erzwingen (Achtung: Ihr Befehl muss protokolliert werden)
