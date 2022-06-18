# Plugin-Template-Dokumentation

Sie können eine leere Plugin-Basis finden [hier](https://github.com/jeedom/plugin-template)

# Plugin-Erstellung Teil 1 : l'arborescence

Hier ist seine Struktur: zunächst einen Ordner mit dem Namen Ihres Plugins (genauer seine eindeutige Kennung), der folgende Unterordner enthalten muss :

- ``3rdparty`` : Ordner mit den im Plugin verwendeten externen Bibliotheken (Beispiel für das SMS-Plugin eine Bibliothek zur seriellen Kommunikation in php).
- ``core`` : Ordner mit allen internen Arbeitsdateien.
  - ``class`` : Ordner, der die Plugin-Klasse enthält.
  - ``php`` : Ordner, der Funktionen enthalten kann, die nicht unbedingt zu einer Klasse gehören müssen (oft verwendet, um die Aufnahme mehrerer Klassen oder Konfigurationsdateien gleichzeitig zu ermöglichen).
  - ``config`` : Plugin-Konfigurationsdatei.
  - ``ajax`` : Ordner mit Zieldateien für AJA-AufrufeX.
  - ``i18n`` : Ordner mit Dateien .Plugin-Übersetzung json.
- ``desktop`` : Ordner, der die "Desktop"-Ansicht des Plugins enthält (im Gegensatz zur "mobilen" Ansicht").
  - ``js`` : Ordner, der alle Javascript-Dateien für die Plugin-Schnittstelle enthält.
  - ``php`` : Ordner, der alle PHP-Dateien für die Plugin-Schnittstelle enthält.
  - ``css`` : Bei Bedarf alle CSS-Dateien des Plugins, ggf. inkl *Schriftarten*.
  - ``modal`` : Ordner mit dem Modalcode des Plugins.
  - ``img`` : Ordner für Bilder (png, jpg usw.), die vom Plugin benötigt werden.
  - ``template`` : Ordner mit HTML-Vorlagen für Kacheln, die für Plugin-Geräte spezifisch sind, in den Unterordnern Dashboard und Mobile.
- ``plugin_info`` : Enthält die Dateien, die es Jeedom ermöglichen, das Plugin zu qualifizieren, zu installieren und zu konfigurieren.
  - ``info.json`` : Datei mit grundlegenden Plugin-Informationen .Es ist zwingend erforderlich, sonst sieht Jeedom das Plugin nicht. Es enthält unter anderem die Modulkennung, Beschreibung, Einbauhinweise etc
  - ``install.php`` : Datei, die (falls erforderlich) die Methoden zum Installieren und Deinstallieren des Plugins enthält.
  - ``configuration.php`` : Datei mit den zu konfigurierenden Parametern für das Plugin unabhängig von seiner Ausstattung (Beispiel für das Zwave-Modul, das Raspberry Pi IP mit der Razberry-Karte)
- ``docs`` : Muss Plugin-Dokument im Markdown-Format, Root und index.md-Datei enthalten. Alle Bilder befinden sich in docs/images. Das Dokument selbst befindet sich je nach Sprache in einem Ordner (z. B. in Französisch : ``docs/fr\_FR``)
- ``ressources`` : Ordner für mögliche Dämonen und Abhängigkeiten.
- ``data`` : Ordner, der für Dateien verwendet wird, die vom Plugin generiert werden, das für Jeedom des Benutzers spezifisch ist.

Was die Dateinamenskonvention betrifft, hier sind die
Imperative :

- php-Klassendateien müssen mit enden ``.class.php``
- wenn es nicht von einer Include-Datei behandelt wird, sollte der Dateiname sein ``nom\_class.class.php``
- Dateien, die nur als Einstiegspunkt zum Einschließen mehrerer Dateien dienen, müssen mit enden ``.inc.php``
- Konfigurationsdateien müssen mit enden ``.config.php``

Hier sind die Empfehlungen :

- Dateien vom Typ AJAX müssen mit enden ``.ajax.php``
- der Name der ersten Ansichtsseite eines Plugins muss mit der Plugin-ID übereinstimmen
- der Name der JS-Datei (falls vorhanden) der ersten Ansichtsseite des Plugins sollte die Plugin-ID sein

# Plugin-Erstellung Teil 2 : Plugin-Info-Ordner

## ``info.json``

Sehen [hier](https://doc.jeedom.com/de_DE/dev/structure_info_json)

## ``install.php``

Datei mit Anweisungen zum Installieren eines Plugins :

Es setzt sich wie folgt zusammen :

Der erste kommentierte Teil enthält die Lizenz (es ist besser). Die hier verwendete zeigt an, dass die Datei zu Jeedom gehört und Open Source ist. Dann kommt die Einbeziehung von Jeedoms Kern (dies ermöglicht den Zugriff auf interne Funktionen). Dann kommen die 2 Funktionen :

- ``pluginid_install()`` : Methode zum Installieren des Plugins. Hier fügt die Installation eine Crontask zu Jeedom hinzu
- ``pluginid_update()`` : Methode zum Installieren des Plugins. Wird hier verwendet, um den Cron-Job neu zu starten
- ``pluginid_remove()`` : Methode zum Entfernen des Plugins. Hier löscht die Funktion bei der Deinstallation den Jeedom Crontask

Beispiel :

````php
<?php
/* Diese Datei ist Teil von Jeedom.
 *
 * Jeedom ist freie Software: Sie können es weitergeben und/oder ändern
 * es unter den Bedingungen der GNU General Public License wie veröffentlicht von
 * die Free Software Foundation, entweder Version 3 der Lizenz, oder
 * (nach Ihrer Wahl) jede spätere Version.
 *
 * Jeedom wird in der Hoffnung verteilt, dass es nützlich sein wird,
 * aber OHNE JEGLICHE GEWÄHRLEISTUNG; sogar ohne die stillschweigende Garantie von
 * MARKTFÄHIGKEIT oder EIGNUNG FÜR EINEN BESTIMMTEN ZWECK. Siehe die
 * GNU General Public License für weitere Details.
 *
 * Sie sollten eine Kopie der GNU General Public License erhalten haben
 * zusammen mit Jeedom. If not, see <http://www.gnu.org/licenses/>.
 */
require_once dirname(__FILE__) . '/../../../core/php/core.inc.php';

Funktion openzwave_install() {
    $cron = cron::byClassAndFunction('zwave', 'pull');
    wenn (!is_object($cron)) {
        $cron = new cron();
        $cron->setClass('zwave');
        $cron->setFunction('pull');
        $cron->setEnable(1);
        $cron->setDeamon(1);
        $cron->setSchedule('* * * * *');
        $cron->save();
    }
}

Funktion openzwave_update() {
    $cron = cron::byClassAndFunction('zwave', 'pull');
    wenn (!is_object($cron)) {
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

Funktion openzwave_remove() {
    $cron = cron::byClassAndFunction('zwave', 'pull');
    if (is_object($cron)) {
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

Beispiel :

````php
<?php
/* Diese Datei ist Teil von Jeedom.
 *
  * Jeedom ist freie Software: Sie können es weitergeben und/oder ändern
 * es unter den Bedingungen der GNU General Public License wie veröffentlicht von
 * die Free Software Foundation, entweder Version 3 der Lizenz, oder
 * (nach Ihrer Wahl) jede spätere Version.
 *
 * Jeedom wird in der Hoffnung verteilt, dass es nützlich sein wird,
 * aber OHNE JEGLICHE GEWÄHRLEISTUNG; sogar ohne die stillschweigende Garantie von
 * MARKTFÄHIGKEIT oder EIGNUNG FÜR EINEN BESTIMMTEN ZWECK. Siehe die
 * GNU General Public License für weitere Details.
 *
  * Sie sollten eine Kopie der GNU General Public License erhalten haben
 * zusammen mit Jeedom. If not, see <http://www.gnu.org/licenses/>.
  */

 require_once dirname(__FILE__) . '/../../../core/php/core.inc.php';
include_file('core', 'authentication', 'php');
wenn (!isConnect()) {
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

Dieser Ordner enthält die eigentliche Ansicht. Darin müssen wir die Konfigurationsseite des Plugins finden (diejenige, die erscheint, wenn der Benutzer ein Plugin erstellt ⇒ Kategorie ⇒ Ihr Plugin). Es ist ratsam, es mit der ID Ihres Plugins zu benennen. Es kann auch das Panel enthalten (Seite, die der Benutzer auf der Startseite findet → Name Ihres Plugins).

Alle Dateien in diesem Ordner müssen mit enden ``.php`` und muss mit beginnen :

````php
<?php
wenn (!isConnect('admin')) {
    throw new Exception('{{401 - Unbefugter Zugriff}}');
 }
 sendVarToJS('eqType', 'mail');
 ?>
 ````

Une fois sur cette page vous aurez accès en php à toutes les fonctions du core de jeedom (voir [hier](https://www.jeedom.com/doc/documentation/code/) ) ainsi qu'à celles de tous les modules installés donc le vôtre aussi.

Toutes ces pages étant des vues elles utilisent principalement la syntaxe HTML. Pour tout ce qui est présentation, Jeedom se base principalement sur bootstrap donc toute la [documentation](http://getbootstrap.com/) est applicable.

Pour simplifier la création de plugin vous pouvez inclure dans votre page le script javascript de template pour les plugins :

````php
<?php include_file('core', 'plugin.template', 'js'); ?>
````

Ganz unten auf Ihrer Seite zu platzieren und nur auf der Konfigurationsseite Ihres Plugins nützlich. Dieses Skript reduziert das obligatorische Javascript auf eine einzige Funktion (siehe Abschnitt zu JS-Dateien).

In Ihrer Konfigurationsseite wurde eine HTML-Syntax implementiert, um Ihnen das Leben zu erleichtern. Für die meisten Plugins müssen Sie also nur HTML verwenden, um Ihre Informationen in der Datenbank zu speichern und sie daher auf der Seite Ihrer Klasse wieder zu verwenden.

Die Syntax ist recht einfach: Ihr Element (Eingabe, Auswahl…​) muss die CSS-Klasse eqLogicAttr (oder cmdAttr für Befehle) und ein Attribut haben, das den Namen der Eigenschaft angibt :

````html
<input type="text" class="eqLogicAttr form-control" data-l1key="name" placeholder="{{Nom de l'équipement mail}}"/>
````

Là, par exemple, lors du chargement des données jeedom mettra la valeur du nom de l'équipement dans l'input et lors de la sauvegarde récupérera celle-ci pour la remettre en base de données. Petite astuce certaines propriétés sont en fait des chaînes JSON en BDD (cela permet d'avoir vraiment pas mal de liberté pour le plugin), dans ce cas il suffit de faire :

````html
<input class="eqLogicAttr form-control" data-l1key='configuration' data-l2key='fromName' />
````

Die Liste der Eigenschaften von Geräten und Befehlen finden Sie hier (um die Eigenschaften zu sehen, die JSON sind, schauen Sie sich einfach den Getter oder den Setter an, wenn es 2 Parameter braucht, dann ist es JSON)

Letzter wichtiger Punkt auf der Konfigurationsseite: es kann beliebig viele Geräte und Befehle enthalten. Es gibt jedoch ein paar Regeln zu beachten :

Alle Elemente der Klasse eqLogicAttr müssen sich in einem Element der CSS-Klasse eqLogic befinden Dito für Elemente der CSS-Klasse cmdAttr, die sich in einem Element der Klasse cmd befinden müssen. Alle Befehle eines Geräts müssen sich im Element mit der entsprechenden eqLogic-Klasse befinden

## JS

Alle JS-Dateien sollten sich im JS-Ordner befinden (easy !!!). Es ist ratsam, es mit der gleichen ID wie Ihr Plugin zu benennen (im Konfigurationsteil, für das Panel, das Sie machen, wie Sie wollen). Diese JS-Datei (die der Konfiguration des Plugins) muss mindestens eine addCmdToTable-Methode enthalten, die als Parameter das hinzuzufügende Befehlsobjekt verwendet. Hier ist ein einfaches Beispiel :

````php
Funktion addCmdToTable(_cmd) {
    wenn (!isset(_cmd)) {
        var _cmd = {konfig: {}};
     }
    var tr = ''; tr += '';
     <html>tr += ' : keine;">';
    tr += '<input class="cmdAttr form-control input-sm" data-l1key="name"> '; tr += '<input class="cmdAttr form-control input-sm" data-l1key="configuration" data-l2key="recipient"> '; tr += '';
     <html>tr += ' : keine;">';
     <html>tr += ' : keine;">';
     if (ist_numerisch(_cmd.id)) {
        tr += ' <a class="btn btn-default btn-xs cmdAction" data-action="test"><i class="fa fa-rss"></i>{{Test}}</a> ';
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
    wenn (!isset(_cmd)) {
        var _cmd = {};
    }
     wenn (!isset(_cmd.configuration)) {
        _cmd.configuration = {};
    }
     var selRequestType = '<select style="width : 90px;" class="cmdAttr form-control input-sm" data-l1key="configuration" data-l2key="requestType">';
     selRequestType += '<option value="script">{{Script}}</option>';
     selRequestType += '<option value="http">{{Http}}</option>';
     selRequestType += '</select>';
    var tr = '';     tr += '<input class="cmdAttr form-control input-sm" data-l1key="name" style="width : 140px;">';
    tr += '<input class="cmdAttr form-control input-sm" data-l1key="id"  style="display : keine;">';
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
    if (ist_numerisch(_cmd.id)) {
    tr += ' <a class="btn btn-default btn-xs cmdAction" data-action="test"><i class="fa fa-rss"></i>{{Test}}</a> ';
    }
    tr += '<i class="fa fa-minus-circle pull-right cmdAction cursor" data-action="remove"></i></td> ';
    tr += '';
    $('#table_cmd tbody').append(tr);
    $('#table_cmd tbody tr:last').setValues(_cmd, '.cmdAttr');

    wenn (isset(_cmd.configuration.requestType)) {
        $('#table_cmd tbody tr:last .cmdAttr[data-l1key=configuration][data-l2key=requestType]').value(init(_cmd.configuration.requestType));
        $('#table_cmd tbody tr:last .cmdAttr[data-l1key=configuration][data-l2key=requestType]').trigger('change');
    }

     wenn (isset(_cmd.type)) {
        $('#table_cmd tbody tr:last .cmdAttr[data-l1key=type]').value(init(_cmd.type));
    }
     jeedom.cmd.changeType($('#table_cmd tbody tr:last'), init(_cmd.subType));
    initTooltips();
}
````

Hier können wir feststellen :

- ``jeedom.cmd.availableType()`` fügt eine Auswahl mit der Liste bekannter Typen ein (Aktion und Info vorerst)
- ``<span class="subType" subType="' + init(\_cmd.subType) + '"><\span>`` : wo die Untertypauswahl platziert werden soll
- ``jeedom.cmd.changeType(\$('\#table\_cmd tbody tr:last'), init(\_cmd.subType))`` wodurch der Untertyp mit dem richtigen Wert initialisiert werden kann

Andere Javascript-Funktionen können verwendet werden :

- ``printEqLogic`` die Parameter des gesamten Objekts der Ausrüstung aufnimmt (nützlich im Falle der Verarbeitung von Daten vor der Wiederherstellung)). Es wird aufgerufen, wenn Gerätedaten angezeigt werden
- ``saveEqLogic`` das als Parameter das Ausrüstungsobjekt nimmt, das in der Datenbank gespeichert wird (nützlich, wenn Sie vor dem Speichern etwas verarbeiten müssen). Als letztes, für JS-Dateien, hier ist, wie Sie sie sauber in Ihre PHP-Seite einfügen :

````php
<?php include_file('desktop', 'weather', 'js', 'weather'); ?>
````

Le premier argument donne le dossier dans lequel le trouver (attention c'est le dossier père du dossier JS), le deuxième le nom de votre javascript, le troisième indique à Jeedom que c'est un fichier JS et le dernier dans quel plugin il se trouve.

## CSS

Ce dossier contient vos fichiers CSS (il ne devrait pas être trop utilisé) , vohier comment les inclure sur votre page :

````php
<?php include_file('desktop', 'weather', 'css', 'weather'); ?>
````

Das erste Argument gibt den Ordner an, in dem es zu finden ist (beachten Sie, dass dies der übergeordnete Ordner des CSS-Ordners ist), das zweite den Namen Ihrer CSS-Datei, das dritte teilt Jeedom mit, dass es sich um eine CSS-Datei handelt, und das letzte, in welchem Plugin es sich befindet stellt sich heraus.

## MODAL

Der Modalordner ermöglicht es Ihnen, Ihre PHP-Dateien zu speichern, die zur Anzeige von Modalen bestimmt sind. So rufen Sie sie von Ihrer Hauptseite aus auf (dieser Code wird in eine Javascript-Datei eingefügt) :

Du kannst sehen :

````js
$('#md_modal').dialog({title: "{{Classe du périphérique}}"}).load('index.php?v=d&plugin=zwave&modal=show.class&id=' + $('.eqLogicAttr[data-l1key=id]').value()).dialog('open')
````

La première ligne permet de mettre un titre à votre modal

La deuxième ligne charge votre modal et l'affichage. Die Syntax ist recht einfach : plugin, l'Ich würde de votre plugin, modal, le nom de votre modal sans le php et ensuite les paramètres que vous voulez lui passer

## API JS

Ce n'est pas un dossier mais dans les dernières versions de Jeedom celui-ci offre au développeur toute une api javascript (cela évite d'écrire des appels ajax dans tous les sens). J'essayerai de faire un article pour expliquer les différentes fonctionnalités mais vous pouvez déjà trouver le code hier.

Voilà pour les détails du Desktop-Ordner. Je me doute qu'il n'est pas des plus complets (j'essayerai de le compléter en fonction des différentes demandes reçues) mais j'espère que grâce à lui vous pourrez commencer à faire des plugins pour Jeedom.

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

Wenn wir auf die Assistentenschaltfläche klicken, erhalten wir die Eingabe, in die wir schreiben müssen, und rufen dann den Assistenten auf. Sobald die Konfiguration im Assistenten abgeschlossen ist, wird das Ergebnis abgerufen und in den zuvor ausgewählten Eingang geschrieben

# Plugin-Erstellung Teil 4 : Core-Ordner

Der mit Abstand wichtigste Ordner Ihres Plugins, er kann 4 Unterordner haben.

Notiz : Während dieses gesamten Teils wird auf Ihre Plugin-ID verwiesen : plugin\_id

## PHP

Enthält die zusätzlichen PHP-Dateien, die ich verwendet habe, um zum Beispiel eine Einschlussdatei zu setzen, wenn Sie natürlich mehrere Klassendateien oder 3rpartys einbinden möchten

## Template

Das kann 2 Unterordner enthalten, Dashboard und Mobile, es ist ein Ordner, den Jeedom automatisch nach Widgets durchsucht, wenn Sie also bestimmte Widgets verwenden, müssen Sie hier ihre HTML-Datei ablegen

## i18n

Hier muss Ihre Übersetzung in Form einer JSON-Datei vorliegen (am besten und zum Beispiel im Plugin [zwelle](https://github.com/jeedom/plugin-openzwave) um die Form der Datei zu sehen)

## ajax

Dieser Ordner ist für alle Ihre Ajax-Dateien, hier ist eine Skelett-Ajax-Datei :

````php
<?php

/* Diese Datei ist Teil von Jeedom.
 *
 * Jeedom ist freie Software: Sie können es weitergeben und/oder ändern
 * es unter den Bedingungen der GNU General Public License wie veröffentlicht von
 * die Free Software Foundation, entweder Version 3 der Lizenz, oder
 * (nach Ihrer Wahl) jede spätere Version.
 *
 * Jeedom wird in der Hoffnung verteilt, dass es nützlich sein wird,
 * aber OHNE JEGLICHE GEWÄHRLEISTUNG; sogar ohne die stillschweigende Garantie von
 * MARKTFÄHIGKEIT oder EIGNUNG FÜR EINEN BESTIMMTEN ZWECK. Siehe die
 * GNU General Public License für weitere Details.
 *
 * Sie sollten eine Kopie der GNU General Public License erhalten haben
 * zusammen mit Jeedom. If not, see <http://www.gnu.org/licenses/>.
 */

Versuchen {
    require_once dirname(__FILE__) . '/../../../../core/php/core.inc.php';
    include_file('core', 'authentication', 'php');

    wenn (!isConnect('admin')) {
        throw new Exception(__('401 - Unauthorized access', __FILE__));
    }

    if (init('action') == 'deine Aktion') {
        ajax::Erfolg($Ergebnis);
    }

    throw new Exception(__('Keine Methodenübereinstimmung : ', __DATEI__) . init('aktion'));
    /*     * *********Wrestling-Ausnahme*************** */
} catch (Ausnahme $e) {
    ajax::error(displayException($e), $e->getCode());
}
?>
````

## class

Dossier très important, c'est le moteur de votre plugin. C'est là que viennent les 2 classes obligatoires de votre plugin :

- ``plugin\_id``
- ``plugin\_idCmd``

La première devant hériter de la classe eqLogic et la deuxième de cmd. Vohier un template :

````php
<?php

/* Diese Datei ist Teil von Jeedom.
 *
 * Jeedom ist freie Software: Sie können es weitergeben und/oder ändern
 * es unter den Bedingungen der GNU General Public License wie veröffentlicht von
 * die Free Software Foundation, entweder Version 3 der Lizenz, oder
 * (nach Ihrer Wahl) jede spätere Version.
 *
 * Jeedom wird in der Hoffnung verteilt, dass es nützlich sein wird,
 * aber OHNE JEGLICHE GEWÄHRLEISTUNG; sogar ohne die stillschweigende Garantie von
 * MARKTFÄHIGKEIT oder EIGNUNG FÜR EINEN BESTIMMTEN ZWECK. Siehe die
 * GNU General Public License für weitere Details.
 *
 * Sie sollten eine Kopie der GNU General Public License erhalten haben
 * zusammen mit Jeedom. If not, see <http://www.gnu.org/licenses/>.
 */

/* * ***************************Includes********************************* */
require_once dirname(__FILE__) . '/../../../../core/php/core.inc.php';

class plugin_Ich würde extends eqLogic {

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

Für die Definition von Jeedom-Klassen lade ich Sie ein, dies zu konsultieren [Seite? ˅](https://doc.jeedom.com/dev/phpdoc/4.0/)

Die einzige obligatorische Methode ist die Instanzmethode in der cmd execute-Klasse, hier ist ein Beispiel mit dem SARAH-Plugin :

````php
öffentliche Funktion execute($_options = array()) {
      wenn (!isset($_options['title']) && !isset($_options['nachricht'])) {
          throw new Exception(__("Titel oder Nachricht können nicht beide leer sein", __FILE__));
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

Beispiel assez simple mais complet, le principe est le suivant, si la commande est une action ou une info (mais pas en événement seulement et que son versteckt est dépassé) alors jeedom appelle cette méthode.

Dans notre exemple hier c'est une commande pour faire parler S.A.R.A.H, où le plugin récupère les paramètres dans \$\_options (attention c'est un tableau et ses attributs changent en fonction du sous-type de la commande : color pour un sous-type color, slider pour un sous-type slider, title et message pour un sous-type message et vide pour un sous-type other).

Voila pour la partie obligatoire, voila maintenant ce qui peut être utilisé à coté (avec exemple) :

### toHtml(\$\_version = 'dashboard')

Fonction utilisable dans la commande ou dans l'équipement, en fonction des besoins, vohier un exemple pour l'équipement

````php
public function toHtml($_version = 'dashboard') {
    $replace = $this->preToHtml($_version);
    wenn (!is_array($replace)) {
        return $replace;
    }
    $version = jeedom::versionAlias($_version);
    $replace['#forecast#'] = '';
    wenn ($version != 'mobile' || $this->getConfiguration('fullMobileDisplay', 0) == 1) {
        $forcast_template = getTemplate('core', $version, 'forecast', 'weather');
        for ($i = 0; $i < 5; $i++) {
            $replaceDay = array();
            $replaceDay['#day#'] = date_fr(date('l', strtotime('+' . $i . ' days')));

            wenn ($i == 0) {
                $temperature_min = $this->getCmd(null, 'temperature_min');
            } else {
                $temperature_min = $this->getCmd(null, 'temperature_' . $i . '_min');
            }
            $replaceDay['#low_temperature#'] = is_object($temperature_min) ? $temperature_min->execCmd() : '';

            wenn ($i == 0) {
                $temperature_max = $this->getCmd(null, 'temperature_max');
            } else {
                $temperature_max = $this->getCmd(null, 'temperature_' . $i . '_max');
            }
            $replaceDay['#hight_temperature#'] = is_object($temperature_max) ? $temperature_max->execCmd() : '';
            $replaceDay['#tempid#'] = is_object($temperature_max) ? $temperature_max->getId() : '';

            wenn ($i == 0) {
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
    wenn (strlen($replace['#sunrise#']) == 3) {
        $replace['#sunrise#'] = substr($replace['#sunrise#'], 0, 1) . ':' . substr($replace['#sunrise#'], 1, 2);
    } else wenn (strlen($replace['#sunrise#']) == 4) {
        $replace['#sunrise#'] = substr($replace['#sunrise#'], 0, 2) . ':' . substr($replace['#sunrise#'], 2, 2);
    }

    $sunset = $this->getCmd(null, 'sunset');
    $replace['#sunset#'] = is_object($sunset) ? $sunset->execCmd() : '';
    wenn (strlen($replace['#sunset#']) == 3) {
        $replace['#sunset#'] = substr($replace['#sunset#'], 0, 1) . ':' . substr($replace['#sunset#'], 1, 2);
    } else wenn (strlen($replace['#sunset#']) == 4) {
        $replace['#sunset#'] = substr($replace['#sunset#'], 0, 2) . ':' . substr($replace['#sunset#'], 2, 2);
    }

    $wind_direction = $this->getCmd(null, 'wind_direction');
    $replace['#wind_direction#'] = is_object($wind_direction) ? $wind_direction->execCmd() : 0;

    $refresh = $this->getCmd(null, 'refresh');
    $replace['#refresh_id#'] = is_object($refresh) ? $refresh->getId() : '';

    $condition = $this->getCmd(null, 'condition_now');
    $sunset_time = is_object($sunset) ? $sunset->execCmd() : null;
    $sunrise_time = is_object($sunrise) ? $sunrise->execCmd() : null;
    wenn (is_object($condition)) {
        $replace['#icone#'] = self::getIconFromCondition($condition->execCmd(), $sunrise_time, $sunset_time);
        $replace['#condition#'] = $condition->execCmd();
        $replace['#conditionid#'] = $condition->getId();
        $replace['#collectDate#'] = $condition->getCollectDate();
    } else {
        $replace['#icone#'] = '';
        $replace['#condition#'] = '';
        $replace['#collectDate#'] = '';
    }
    wenn ($this->getConfiguration('modeImage', 0) == 1) {
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

Um die angeforderte Version in Dashboard oder Mobile umzuwandeln (mview wird beispielsweise mobil, dies ermöglicht beispielsweise den Ansichten, den Namen der Objekte hinzuzufügen)

````php
$_version = jeedom::versionAlias($_version);
````

Récupération d'un template de commande, hier le template de commande : plugins/weather/core/template/\$\_version/forecast.html (\$\_version valant mobile ou dashboard)

````php
$forcast_template = getTemplate('core', $_version, 'forecast', 'weather');
````

Hier Ersetzung der zuvor in \$replace HTML ausgefüllten Tags, um die Werte zu enthalten

````php
$html_forecast .= template_replace($replace, $forcast_template);
````

Cela permet de récupérer la commande ayant le logical\_Ich würde : temperature\_min

````php
$this->getCmd(null, 'temperature_min');
````

Hier können Sie den Wert nur dann in das Tag einfügen, wenn die Bestellung erfolgreich abgerufen wurde

````php
$replace['#temperature#'] = is_object($temperature) ? $temperature->execCmd() : '';
````

Passage important: cela permet de récupérer les personnalisations faites par l'utilisateur sur la page Générale → Affichage et de les réinjecter dans le template

````php
$parameters = $this->getDisplay('parameters');
wenn (is_array($parameters)) {
    foreach ($parameters as $key => $value) {
        $replace['#' . $key . '#'] = $value;
    }
}
````

Widget im Cache speichern: damit wir es bei der nächsten Anfrage schneller bereitstellen, können wir hier die 0 bemerken, die eine unendliche Lebensdauer angibt, ansonsten ist die Dauer in Sekunden (wir werden im nächsten Teil sehen, wie das Wetter-Plugin sein Widget aktualisiert).

````php
cache::set('WetterWidget' . $_version . $this->getId(), $html, 0);
````

Enfin envoi du html à Jeedom :

````php
return $html;
````

Sie müssen Jeedom auch mitteilen, welche Anpassungen Ihr Widget zulässt. Es ist ein wenig komplex (und immer noch), aber normalerweise flexibel und einfach einzurichten.

Es funktioniert genauso auf Ihrer Ausrüstung oder Ihrem Befehl, es ist ein statisches Attribut der Klasse \$\_widgetPossibility, das ein mehrdimensionales Array sein muss, aber hier wird es kompliziert, wenn eine Dimension des Arrays wahr oder falsch ist. Es geht dann davon aus, dass alle möglichen untergeordneten Elemente diesen Wert haben (ich werde ein Beispiel geben).

Zunächst einmal die Fälle, in denen Sie es verwenden müssen: wenn in Ihrer Klasse das Erben von eqLogic oder cmd eine toHtml-Funktion hat, sonst lohnt es sich nicht weiter zu lesen.

### Pre- und Post-Methode

Wenn Sie Ihre Objekte (Ausrüstung, Befehl oder andere) in Jeedom erstellen oder löschen, kann es vor/nach der Aktion mehrere Methoden aufrufen :

- ``preInsert`` ⇒ Methode, die vor dem Erstellen Ihres Objekts aufgerufen wird
- ``postInsert`` ⇒ Methode, die nach der Erstellung Ihres Objekts aufgerufen wird
- ``preUpdate`` ⇒ Methode, die vor dem Aktualisieren Ihres Objekts aufgerufen wird
- ``postUpdate`` ⇒ Methode, die nach dem Aktualisieren Ihres Objekts aufgerufen wird
- ``preSave`` ⇒ Methode, die vor dem Speichern (also Erstellen und Aktualisieren) Ihres Objekts aufgerufen wird
- ``postSave`` ⇒ Methode, die nach dem Speichern Ihres Objekts aufgerufen wird
- ``preRemove`` ⇒ Methode, die vor dem Löschen Ihres Objekts aufgerufen wird
- ``postRemove`` ⇒ Methode, die nach dem Löschen Ihres Objekts aufgerufen wird

B. noch mit dem Wetter-Plugin, Aufträge zu erstellen oder nach dem Speichern zu aktualisieren (das Beispiel ist vereinfacht) :

````php
öffentliche Funktion postUpdate() {
      $weatherCmd = $this->getCmd(null, 'temperature');
      wenn (!is_object($weatherCmd)) {
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
      wenn (!is_object($cron)) {
          $cron = new cron();
          $cron->setClass('weather');
          $cron->setFunction('updateWeatherData');
          $cron->setOption(array('weather_id' => intval($this->getId())));
      }
      $cron->setSchedule($this->getConfiguration('refreshCron', '*/30 * * * *'));
      $cron->save();
}
````

Le début est assez standard avec la création d'une commande, la fin est plus intéressante avec la mise en place d'un cron qui va appeler la méthode ``weather::updateWeatherData`` en passant l'Ich würde de l'équipement à mettre à jour toute les 30min par défaut.

Ici la méthode updateWeatherData (simplifiée aussi) :

````php
public static function updateWeatherData($_options) {
  $weather = weather::byId($_options['weather_id']);
  wenn (is_object($weather)) {
      foreach ($weather->getCmd('info') as $cmd) {
        $weather->checkAndUpdateCmd($cmd,$cmd->execute());
      }
  }
}
````

Wir sehen hier, dass wir während des Anrufs die betreffenden Geräte abrufen und dann die Befehle ausführen, um die Werte abzurufen und sie bei Bedarf zu aktualisieren.

Sehr wichtiger Teil :

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

Zum Schluss noch ein paar Tipps und Tricks :

- Vermeiden Sie (es sei denn, Sie wissen, was Sie tun) das Überschreiben einer Methode der geerbten Klasse (dies kann eine Menge Ärger verursachen)
- Um die Batterie (in %) eines Gerätes zu erhöhen, tun Sie es an ihm (Jeedom kümmert sich um den Rest und warnt den Benutzer, falls nötig) :

````php
$eqLogic->batteryStatus(56);
````

- Sur les commandes au moment de l'ajout d'une valeur Jeedom applique la méthode d'instance ``formatValue($_value)`` qui, en fonction du sous-type, peut la remettre en forme (en particulier pour les valeurs binaires)
- ne faites JAMAIS une méthode dans la class héritant de cmd s'appelant : execCmd ou event
- si dans la configuration de votre commande vous avez renseigné returnStateTime (en minute) et returnStateValue, Jeedom changera automatique la valeur de votre commande par returnStateValue au bout de X minute(s)
- toujours pour la commande vous pouvez utiliser addHistoryValue pour forcer la mise en historique (attention votre commande doit être historisée)
