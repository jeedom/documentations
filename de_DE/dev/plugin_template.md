# Dokumentation der Plugin-Vorlage

Möglicherweise finden Sie eine leere Plugin-Datenbank [Hier](https://github.com/jeedom/plugin-template)

# Plugin-Erstellung Teil 1 : l'arborescence

Hier ist seine Struktur: Zunächst ein Ordner mit dem Namen Ihres Plugins (genauer gesagt seiner eindeutigen Kennung), der die folgenden Unterordner enthalten muss :

- ``3rdparty`` : Ordner mit den im Plugin verwendeten externen Bibliotheken (Beispiel für das SMS-Plugin, eine Bibliothek für serielle Kommunikation in PHP)).
- ``core`` : Ordner, der alle internen Betriebsdateien enthält.
  - ``class`` : Ordner, der die Plugin-Klasse enthält.
  - ``php`` : Ordner, der Funktionen enthalten kann, die nicht unbedingt zu einer Klasse gehören müssen (wird häufig verwendet, um die Aufnahme mehrerer Klassen oder Konfigurationsdateien gleichzeitig zu ermöglichen)).
  - ``config`` : Plugin-Konfigurationsdatei.
  - ``ajax`` : Ordner mit AJA-AufrufzieldateienX.
  - ``i18n`` : Ordner mit Dateien .Plugin-Übersetzung JSON.
  - ``template`` : Ordner mit den HTML-Vorlagen für Kacheln, die für die Plugin-Ausrüstung spezifisch sind, im Dashboard und in den mobilen Unterordnern.
- ``desktop`` : Ordner, der die „Desktop“-Ansicht des Plugins enthält (im Gegensatz zur „mobilen“ Ansicht)").
  - ``js`` : Ordner, der alle Dateien vom Typ Javascript für die Plugin-Schnittstelle enthält.
  - ``php`` : Ordner, der alle PHP-Dateien für die Plugin-Schnittstelle enthält.
  - ``css`` : Bei Bedarf alle CSS-Dateien des Plugins, ggf. inkl *Schriftarten*.
  - ``modal`` : Ordner, der den Modalcode des Plugins enthält.
  - ``img`` : Ordner für Bilder (PNG, JPG usw.), die das Plugin benötigt.
- ``plugin_info`` : Enthält die Dateien, die es Jeedom ermöglichen, das Plugin zu qualifizieren, zu installieren und zu konfigurieren.
  - ``info.json`` : Datei mit grundlegenden Plugin-Informationen .Dies ist obligatorisch, andernfalls sieht Jeedom das Plugin nicht. Es enthält unter anderem die Modulkennung, Beschreibung, Installationshinweise usw
  - ``install.php`` : Datei, die (falls erforderlich) die Plugin-Installations- und Deinstallationsmethoden enthält.
  - ``configuration.php`` : Datei mit den zu konfigurierenden Parametern des Plugins unabhängig von seiner Ausstattung (Beispiel für das Zwave-Modul die IP des Raspberry Pi mit der Razberry-Karte))
- ``docs`` : Muss das Plugin-Dokument im Markdown-Format, das Stammverzeichnis und die Datei index.md enthalten. Alle Bilder sind in docs/images. Das Dokument selbst befindet sich je nach Sprache in einem Ordner (z. B. auf Französisch) : ``docs/fr\_FR``)
- ``ressources`` : Ordner für mögliche Daemons und Abhängigkeiten.
- ``data`` : Ordner, der für Dateien verwendet wird, die vom Jeedom-Plugin des Benutzers generiert werden.

Was die Dateibenennungskonvention betrifft, finden Sie hier die
Imperative :

- PHP-Klassendateien müssen mit enden ``.class.php``
- Wenn dies nicht durch eine Include-Datei erledigt wird, muss der Dateiname angegeben werden ``nom\_class.class.php``
- Dateien, die nur als Einstiegspunkt zum Einbinden mehrerer Dateien dienen, müssen mit enden ``.inc.php``
- Konfigurationsdateien müssen mit enden ``.config.php``

Hier sind die Empfehlungen :

- Dateien vom Typ AJAX müssen mit enden ``.ajax.php``
- Der Name der ersten Ansichtsseite eines Plugins muss mit der Plugin-ID übereinstimmen
- Der Name der JS-Datei (falls vorhanden) der ersten Ansichtsseite des Plugins muss die Plugin-ID sein

# Plugin-Erstellung Teil 2 : Plugin-Info-Ordner

## ``info.json``

Sehen [Hier](https://doc.jeedom.com/de_DE/dev/structure_info_json)

## ``install.php``

Datei mit Anweisungen zur Installation eines Plugins :

Es setzt sich wie folgt zusammen :

Der erste kommentierte Teil enthält die Lizenz (es ist besser). Das hier verwendete bedeutet, dass die Datei zu Jeedom gehört und Open Source ist. Dann kommt die Einbeziehung des Jeedom-Kerns (dies ermöglicht den Zugriff auf die internen Funktionen). Dann kommen die 3 Funktionen :

- ``pluginid_install()`` : Methode zur Installation des Plugins. Hier fügt die Installation Jeedom einen Cron-Task hinzu
- ``pluginid_update()`` : Methode zur Installation des Plugins. Wird hier verwendet, um den Cron-Job neu zu starten
- ``pluginid_remove()`` : Methode zum Entfernen des Plugins. Hier löscht die Funktion den Jeedom-Cronjob bei der Deinstallation

Beispiel :

````php
<?php
/* Diese Datei ist Teil von Jeedom.
 *
 * Jeedom ist freie Software: Sie können es weiterverbreiten und/oder ändern
 * es unter den Bedingungen der GNU General Public License, wie veröffentlicht von
 * der Free Software Foundation, entweder Version 3 der Lizenz, oder
 * ((nach Ihrer Wahl) jede spätere Version.
 *
 * Jeedom wird in der Hoffnung verbreitet, dass es nützlich sein wird,
 * aber OHNE JEGLICHE GARANTIE; ohne die stillschweigende Garantie von
 * MARKTGÄNGIGKEIT oder EIGNUNG FÜR EINEN BESTIMMTEN ZWECK. Siehe die
 * Weitere Informationen finden Sie unter der GNU General Public License.
 *
 * Sie sollten eine Kopie der GNU General Public License erhalten haben
 * zusammen mit Jeedom. If not, see <http://www.gnu.org/licenses/>.
 */
require_once dirname(__FILE__) . '/../../../core/php/core.inc.php';

Funktion openzwave_install() {
    $cron = cron::byClassAndFunction('zwave', 'pull');
    Wenn (!is_object($cron)) {
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
    Wenn (!is_object($cron)) {
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
  * Jeedom ist freie Software: Sie können es weiterverbreiten und/oder ändern
 * es unter den Bedingungen der GNU General Public License, wie veröffentlicht von
 * der Free Software Foundation, entweder Version 3 der Lizenz, oder
 * ((nach Ihrer Wahl) jede spätere Version.
 *
 * Jeedom wird in der Hoffnung verbreitet, dass es nützlich sein wird,
 * aber OHNE JEGLICHE GARANTIE; ohne die stillschweigende Garantie von
 * MARKTGÄNGIGKEIT oder EIGNUNG FÜR EINEN BESTIMMTEN ZWECK. Siehe die
 * Weitere Informationen finden Sie unter der GNU General Public License.
 *
  * Sie sollten eine Kopie der GNU General Public License erhalten haben
 * zusammen mit Jeedom. If not, see <http://www.gnu.org/licenses/>.
  */

 require_once dirname(__FILE__) . '/../../../core/php/core.inc.php';
include_file('core', 'authentication', 'php');
Wenn (!isConnect()) {
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

Dieser Ordner enthält die Ansicht selbst. Darin finden wir notwendigerweise die Plugin-Konfigurationsseite (diejenige, die erscheint, wenn der Benutzer Plugin ⇒ Kategorie ⇒ Ihr Plugin auswählt)). Es empfiehlt sich, es mit der ID Ihres Plugins zu benennen. Es kann auch das Panel (Seite, die der Benutzer auf der Startseite findet → Name Ihres Plugins) enthalten).

Alle Dateien in diesem Ordner müssen schließlich ``.php`` und muss damit beginnen :

````php
<?php
Wenn (!isConnect('admin')) {
    throw new Exception('{{401 - Unauthorized Access}}');
 }
 sendVarToJS('eqType', 'mail');
 ?>
 ````

Une fois sur cette page vous aurez accès en php à toutes les fonctions du core de jeedom (voir [Hier](https://www.jeedom.com/doc/documentation/code/) ) ainsi qu'à celles de tous les modules installés donc le vôtre aussi.

Toutes ces pages étant des vues elles utilisent principalement la syntaxe HTML. Pour tout ce qui est présentation, Jeedom se base principalement sur bootstrap donc toute la [documentation](http://getbootstrap.com/) est applicable.

Pour simplifier la création de plugin vous pouvez inclure dans votre page le script javascript de template pour les plugins :

````php
<?php include_file('core', 'plugin.template', 'js'); ?>
````

Wird ganz unten auf Ihrer Seite platziert und ist nur auf der Konfigurationsseite Ihres Plugins nützlich. Mit diesem Skript können Sie das obligatorische Javascript auf eine einzige Funktion reduzieren (siehe Abschnitt zu JS-Dateien)).

Auf Ihrer Konfigurationsseite wurde eine HTML-Syntax implementiert, um Ihnen das Leben zu vereinfachen. Bei den meisten Plugins müssen Sie also nur HTML verwenden, um Ihre Informationen in der Datenbank zu speichern und sie somit auf Ihrer Klassenseite zu verwenden.

Die Syntax ist recht einfach: Ihr Element (Eingabe, Auswahl ...) muss die CSS-Klasse eqLogicAttr (oder cmdAttr für Befehle) und ein Attribut haben, das den Namen der Eigenschaft angibt :

````html
<input type="text" class="eqLogicAttr form-control" data-l1key="name" placeholder="{{Nom de l'équipement mail}}"/>
````

Là, par exemple, lors du chargement des données jeedom mettra la valeur du nom de l'équipement dans l'input et lors de la sauvegarde récupérera celle-ci pour la remettre en base de données. Petite astuce certaines propriétés sont en fait des chaînes JSON en BDD (cela permet d'avoir vraiment pas mal de liberté pour le plugin), dans ce cas il suffit de faire :

````html
<input class="eqLogicAttr form-control" data-l1key='configuration' data-l2key='fromName' />
````

Die Liste der Eigenschaften von Geräten und Befehlen finden Sie hier (um die Eigenschaften zu sehen, die JSON sind, schauen Sie sich einfach den Getter oder den Setter an. Wenn er zwei Parameter benötigt, handelt es sich um JSON)

Letzter wichtiger Punkt auf der Konfigurationsseite: Dies kann so viele Geräte und Bedienelemente wie nötig enthalten. Es sind jedoch einige Regeln zu beachten :

Alle Elemente mit der Klasse eqLogicAttr müssen in einem Element mit der CSS-Klasse eqLogic sein. Das Gleiche gilt für Elemente der CSS-Klasse cmdAttr, die in einem Element der Klasse cmd sein müssen. Alle Befehle für ein Gerät müssen im Element mit der entsprechenden eqLogic-Klasse enthalten sein

## JS

Alle JS-Dateien sollten sich im JS-Ordner befinden (einfach) !!!). Es ist ratsam, es mit der gleichen ID wie Ihr Plugin zu benennen (im Konfigurationsteil für das Panel, das Sie tun, was Sie wollen)). Diese JS-Datei (die der Plugin-Konfiguration) muss mindestens eine addCmdToTable-Methode enthalten, die das hinzuzufügende Befehlsobjekt als Parameter akzeptiert. Hier ist ein einfaches Beispiel :

````php
Funktion addCmdToTable(_cmd) {
    Wenn (!isset(_cmd)) {
        var _cmd = {configuration: {}};
     }
    var tr = ''; tr += '';
     tr += ' : keine;">';
    tr += '<input class="cmdAttr form-control input-sm" data-l1key="name"> '; tr += '<input class="cmdAttr form-control input-sm" data-l1key="configuration" data-l2key="recipient"> '; tr += '';
     tr += ' : keine;">';
     tr += ' : keine;">';
     if (is_numeric(_cmd.id)) {
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
    Wenn (!isset(_cmd)) {
        var _cmd = {};
    }
     Wenn (!isset(_cmd.configuration)) {
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
    if (is_numeric(_cmd.id)) {
    tr += ' <a class="btn btn-default btn-xs cmdAction" data-action="test"><i class="fa fa-rss"></i>{{Prüfen}}</a> ';
    }
    tr += '<i class="fa fa-minus-circle pull-right cmdAction cursor" data-action="remove"></i></td> ';
    tr += '';
    $('#table_cmd tbody').append(tr);
    $('#table_cmd tbody tr:last').setValues(_cmd, '.cmdAttr');

    Wenn (isset(_cmd.configuration.requestType)) {
        $('#table_cmd tbody tr:last .cmdAttr[data-l1key=configuration][data-l2key=requestType]').value(init(_cmd.configuration.requestType));
        $('#table_cmd tbody tr:last .cmdAttr[data-l1key=configuration][data-l2key=requestType]').trigger('change');
    }

     Wenn (isset(_cmd.type)) {
        $('#table_cmd tbody tr:last .cmdAttr[data-l1key=type]').value(init(_cmd.type));
    }
     jeedom.cmd.changeType($('#table_cmd tbody tr:last'), init(_cmd.subType));
    initTooltips();
}
````

Hier können wir es bemerken :

- ``jeedom.cmd.availableType()`` fügt eine Auswahl mit der Liste der bekannten Typen (Aktion und Informationen für den Moment) ein)
- ``<span class="subType" subType="' + init(\_cmd.subType) + '"><\span>`` : die Stelle, an der die Untertypauswahl platziert werden soll
- ``jeedom.cmd.changeType(\$('\#table\_cmd tbody tr:last'), init(\_cmd.subType))`` Dadurch können Sie den Untertyp mit dem richtigen Wert initialisieren

Andere Javascript-Funktionen können verwendet werden :

- ``printEqLogic`` das den gesamten Gegenstand der Ausrüstung als Parameter verwendet (nützlich im Falle einer Datenverarbeitung vor deren Wiederherstellung)). Der Aufruf erfolgt bei der Anzeige von Anlagendaten
- ``saveEqLogic`` Als Parameter wird das Ausrüstungsobjekt verwendet, das in der Datenbank gespeichert wird (nützlich, wenn Sie vor dem Speichern eine Verarbeitung durchführen müssen). Zum Schluss erfahren Sie hier, wie Sie JS-Dateien auf saubere Weise in Ihre PHP-Seite einbinden :

````php
<?php include_file('desktop', 'weather', 'js', 'weather'); ?>
````

Le premier argument donne le dossier dans lequel le trouver (attention c'est le dossier père du dossier JS), le deuxième le nom de votre javascript, le troisième indique à Jeedom que c'est un fichier J.S. et le dernier dans quel plugin il se trouve.

## CSS

Ce dossier contient vos fichiers CSS (il ne devrait pas être trop utilisé) , voHier comment les inclure sur votre page :

````php
<?php include_file('desktop', 'weather', 'css', 'weather'); ?>
````

Das erste Argument gibt den Ordner an, in dem es zu finden ist (achten Sie darauf, dass es sich um den übergeordneten Ordner des CSS-Ordners handelt), das zweite den Namen Ihrer CSS-Datei, das dritte teilt Jeedom mit, dass es sich um eine CSS-Datei handelt und das letzte Argument, in welchem Plugin es stellt sich heraus.

## MODAL

Im Modal-Ordner können Sie Ihre PHP-Dateien speichern, die für die Anzeige von Modalitäten bestimmt sind. So rufen Sie sie von Ihrer Hauptseite aus auf (dieser Code wird in eine Javascript-Datei geschrieben)) :

Wir können sehen :

````js
$('#md_modal').dialog({title: "{{Classe du périphérique}}"}).load('index.php?v=d&plugin=zwave&modal=show.class&id=' + $('.eqLogicAttr[data-l1key=id]').value()).dialog('open')
````

La première ligne permet de mettre un titre à votre modal

La deuxième ligne charge votre modal et l'affichage. Die Syntax ist recht einfach : plugin, l'Ausweis de votre plugin, modal, le nom de votre modal sans le php et ensuite les paramètres que vous voulez lui passer

## API JS

Ce n'est pas un dossier mais dans les dernières versions de Jeedom celui-ci offre au développeur toute une api javascript (cela évite d'écrire des appels Ajax dans tous les sens). J'essayerai de faire un article pour expliquer les différentes fonctionnalités mais vous pouvez déjà trouver le code Hier.

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

Wenn wir auf die Assistentenschaltfläche klicken, rufen wir die Eingabe ab, in die wir schreiben möchten, und rufen dann den Assistenten auf. Sobald die Konfiguration im Assistenten abgeschlossen ist, wird das Ergebnis abgerufen und dann in den zuvor ausgewählten Eingang geschrieben

# Plugin-Erstellung Teil 4 : Kernordner

Der mit Abstand wichtigste Ordner Ihres Plugins kann 4 Unterordner haben.

Notiz : In diesem Teil wird auf die ID Ihres Plugins verwiesen : Plugin\_id

## PHP

Enthält die zusätzlichen PHP-Dateien. Ich habe mir angewöhnt, beispielsweise eine Einbindungsdatei einzufügen, wenn Sie natürlich mehrere Klassen- oder Drittanbieterdateien einbinden müssen

## Template

Dieser kann zwei Unterordner enthalten, „Dashboard“ und „Mobile“. Es ist ein Ordner, den Jeedom automatisch nach Widgets durchsucht. Wenn Sie also bestimmte Widgets verwenden, sollten Sie deren HTML-Datei hier ablegen

## i18n

Hier muss Ihre Übersetzung in Form einer JSON-Datei vorliegen (am besten schauen Sie sich zum Beispiel das Plugin an) [zwave](https://github.com/jeedom/plugin-openzwave) um die Form der Datei zu sehen)

## ajax

Dieser Ordner ist für alle Ihre Ajax-Dateien, hier ist eine Skelett-Ajax-Datei :

````php
<?php

/* Diese Datei ist Teil von Jeedom.
 *
 * Jeedom ist freie Software: Sie können es weiterverbreiten und/oder ändern
 * es unter den Bedingungen der GNU General Public License, wie veröffentlicht von
 * der Free Software Foundation, entweder Version 3 der Lizenz, oder
 * ((nach Ihrer Wahl) jede spätere Version.
 *
 * Jeedom wird in der Hoffnung verbreitet, dass es nützlich sein wird,
 * aber OHNE JEGLICHE GARANTIE; ohne die stillschweigende Garantie von
 * MARKTGÄNGIGKEIT oder EIGNUNG FÜR EINEN BESTIMMTEN ZWECK. Siehe die
 * Weitere Informationen finden Sie unter der GNU General Public License.
 *
 * Sie sollten eine Kopie der GNU General Public License erhalten haben
 * zusammen mit Jeedom. If not, see <http://www.gnu.org/licenses/>.
 */

versuchen {
    require_once dirname(__FILE__) . '/../../../../core/php/core.inc.php';
    include_file('core', 'authentication', 'php');

    Wenn (!isConnect('admin')) {
        throw new Exception(__('401 - Unauthorized Access', __FILE__));
    }

    if (init('action') == 'Ihre Aktion') {
        ajax::Erfolg($result);
    }

    throw new Exception(__('Keine Methodenübereinstimmung : ', __DATEI__) . init('action'));
    /*     * *********Außergewöhnliches Wrestling*************** */
} Catch (Ausnahme $e) {
    ajax::error(displayExeption($e), $e->getCode());
}
?>
````

## class

Dossier très important, c'est le moteur de votre plugin. C'est là que viennent les 2 classes obligatoires de votre plugin :

- ``Plugin\_id``
- ``Plugin\_idCmd``

La première devant hériter de la classe eqLogic et la deuxième de cmd. VoHier un template :

````php
<?php

/* Diese Datei ist Teil von Jeedom.
 *
 * Jeedom ist freie Software: Sie können es weiterverbreiten und/oder ändern
 * es unter den Bedingungen der GNU General Public License, wie veröffentlicht von
 * der Free Software Foundation, entweder Version 3 der Lizenz, oder
 * ((nach Ihrer Wahl) jede spätere Version.
 *
 * Jeedom wird in der Hoffnung verbreitet, dass es nützlich sein wird,
 * aber OHNE JEGLICHE GARANTIE; ohne die stillschweigende Garantie von
 * MARKTGÄNGIGKEIT oder EIGNUNG FÜR EINEN BESTIMMTEN ZWECK. Siehe die
 * Weitere Informationen finden Sie unter der GNU General Public License.
 *
 * Sie sollten eine Kopie der GNU General Public License erhalten haben
 * zusammen mit Jeedom. If not, see <http://www.gnu.org/licenses/>.
 */

/* * ***************************Includes********************************* */
require_once dirname(__FILE__) . '/../../../../core/php/core.inc.php';

class plugin_Ausweis extends eqLogic {

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

Für die Definition von Jeedom-Klassen lade ich Sie ein, diese zu konsultieren [Website](https://doc.jeedom.com/dev/phpdoc/4.0/)

Die einzige obligatorische Methode ist die Instanzmethode der cmd-Execute-Klasse. Hier ist ein Beispiel mit dem SARAH-Plugin :

````php
öffentliche Funktionexecute($_options = array()) {
      Wenn (!isset($_options['title']) && !isset($_options['message'])) {
          throw new Exception(__("Titel und Nachricht dürfen nicht beide leer sein", __FILE__));
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

Dans notre exemple Hier c'est une commande pour faire parler S.A.R.A.H, où le plugin récupère les paramètres dans \$\_options (attention c'est un tableau et ses attributs changent en fonction du sous-type de la commande : color pour un sous-type color, slider pour un sous-type slider, title et message pour un sous-type message et vide pour un sous-type other).

Voila pour la partie obligatoire, voila maintenant ce qui peut être utilisé à coté (avec exemple) :

### toHtml(\$\_version = 'dashboard')

Fonction utilisable dans la commande ou dans l'équipement, en fonction des besoins, voHier un exemple pour l'équipement

````php
public function toHtml($_version = 'dashboard') {
    $replace = $this->preToHtml($_version);
    Wenn (!is_array($replace)) {
        return $replace;
    }
    $version = jeedom::versionAlias($_version);
    $replace['#forecast#'] = '';
    Wenn ($version != 'mobile' || $this->getConfiguration('fullMobileDisplay', 0) == 1) {
        $forcast_template = getTemplate('core', $version, 'forecast', 'weather');
        for ($i = 0; $i < 5; $i++) {
            $replaceDay = array();
            $replaceDay['#day#'] = date_fr(date('l', strtotime('+' . $i . ' days')));

            Wenn ($i == 0) {
                $temperature_min = $this->getCmd(null, 'temperature_min');
            } else {
                $temperature_min = $this->getCmd(null, 'temperature_' . $i . '_min');
            }
            $replaceDay['#low_temperature#'] = is_object($temperature_min) ? $temperature_min->execCmd() : '';

            Wenn ($i == 0) {
                $temperature_max = $this->getCmd(null, 'temperature_max');
            } else {
                $temperature_max = $this->getCmd(null, 'temperature_' . $i . '_max');
            }
            $replaceDay['#hight_temperature#'] = is_object($temperature_max) ? $temperature_max->execCmd() : '';
            $replaceDay['#tempid#'] = is_object($temperature_max) ? $temperature_max->getId() : '';

            Wenn ($i == 0) {
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
    Wenn (strlen($replace['#sunrise#']) == 3) {
        $replace['#sunrise#'] = substr($replace['#sunrise#'], 0, 1) . ':' . substr($replace['#sunrise#'], 1, 2);
    } else Wenn (strlen($replace['#sunrise#']) == 4) {
        $replace['#sunrise#'] = substr($replace['#sunrise#'], 0, 2) . ':' . substr($replace['#sunrise#'], 2, 2);
    }

    $sunset = $this->getCmd(null, 'sunset');
    $replace['#sunset#'] = is_object($sunset) ? $sunset->execCmd() : '';
    Wenn (strlen($replace['#sunset#']) == 3) {
        $replace['#sunset#'] = substr($replace['#sunset#'], 0, 1) . ':' . substr($replace['#sunset#'], 1, 2);
    } else Wenn (strlen($replace['#sunset#']) == 4) {
        $replace['#sunset#'] = substr($replace['#sunset#'], 0, 2) . ':' . substr($replace['#sunset#'], 2, 2);
    }

    $wind_direction = $this->getCmd(null, 'wind_direction');
    $replace['#wind_direction#'] = is_object($wind_direction) ? $wind_direction->execCmd() : 0;

    $refresh = $this->getCmd(null, 'refresh');
    $replace['#refresh_id#'] = is_object($refresh) ? $refresh->getId() : '';

    $condition = $this->getCmd(null, 'condition_now');
    $sunset_time = is_object($sunset) ? $sunset->execCmd() : null;
    $sunrise_time = is_object($sunrise) ? $sunrise->execCmd() : null;
    Wenn (is_object($condition)) {
        $replace['#icone#'] = self::getIconFromCondition($condition->execCmd(), $sunrise_time, $sunset_time);
        $replace['#condition#'] = $condition->execCmd();
        $replace['#conditionid#'] = $condition->getId();
        $replace['#collectDate#'] = $condition->getCollectDate();
    } else {
        $replace['#icone#'] = '';
        $replace['#condition#'] = '';
        $replace['#collectDate#'] = '';
    }
    Wenn ($this->getConfiguration('modeImage', 0) == 1) {
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

Hier einige interessante Dinge :

Um die angeforderte Version in ein Dashboard oder eine mobile Version umzuwandeln (mview wird beispielsweise mobil, ermöglicht dies beispielsweise, den Namen von Objekten in Ansichten hinzuzufügen)

````php
$_version = jeedom::versionAlias($_version);
````

Récupération d'un template de commande, Hier le template de commande : plugins/weather/core/template/\$\_version/forecast.html (\$\_version valant mobile ou dashboard)

````php
$forcast_template = getTemplate('core', $_version, 'forecast', 'weather');
````

Hier werden zuvor in \$replace von HTML ausgefüllte Tags ersetzt, um die Werte zu enthalten

````php
$html_forecast .= template_replace($replace, $forcast_template);
````

Cela permet de récupérer la commande ayant le logical\_Ausweis : temperature\_min

````php
$this->getCmd(null, 'temperature_min');
````

Dort können Sie den Wert nur dann in das Tag einfügen, wenn die Bestellung abgerufen wurde

````php
$replace['#temperature#'] = is_object($temperature) ? $temperature->execCmd() : '';
````

Passage important: cela permet de récupérer les personnalisations faites par l'utilisateur sur la page Générale → Affichage et de les réinjecter dans le template

````php
$parameters = $this->getDisplay('parameters');
Wenn (is_array($parameters)) {
    foreach ($parameters as $key => $value) {
        $replace['#' . $key . '#'] = $value;
    }
}
````

Widget im Cache speichern: Damit wir es bei der nächsten Anfrage schneller bereitstellen können, können wir hier die 0 erkennen, die eine unendliche Lebensdauer angibt, ansonsten wird die Dauer in Sekunden angegeben (wir werden im nächsten Teil sehen, wie das Wetter-Plugin sein Widget aktualisiert)).

````php
cache::set('weatherWidget' . $_version . $this->getId(), $html, 0);
````

Enfin envoi du html à Jeedom :

````php
return $html;
````

Sie müssen Jeedom auch mitteilen, welche Personalisierungsmöglichkeiten Ihr Widget zulässt. Es ist ein wenig komplex (und immer noch), aber normalerweise flexibel und einfach einzurichten.

Auf Ihrem Gerät oder Befehl funktioniert es genauso, es ist ein statisches Attribut der Klasse \$\_widgetPossibility, das ein mehrdimensionales Array sein muss, aber hier wird es kompliziert, wenn eine Dimension des Arrays wahr oder falsch ist. Es geht dann davon aus, dass alle möglichen Kinder diesen Wert haben (ich werde ein Beispiel geben)).

Zunächst einmal die Fälle, in denen Sie es verwenden müssen: Wenn in Ihrer Klasse das Erben von eqLogic oder cmd eine toHtml-Funktion hat, lohnt es sich sonst nicht, mehr zu lesen.

### Pre- und Post-Methode

Beim Erstellen oder Löschen Ihrer Objekte (Ausrüstung, Bestellung oder andere) in Jeedom können vor/nach der Aktion mehrere Methoden aufgerufen werden :

- ``preInsert`` ⇒ Methode, die vor dem Erstellen Ihres Objekts aufgerufen wird
- ``postInsert`` ⇒ Methode, die nach dem Erstellen Ihres Objekts aufgerufen wird
- ``preUpdate`` ⇒ Methode, die vor der Aktualisierung Ihres Objekts aufgerufen wird
- ``postUpdate`` ⇒ Methode, die nach der Aktualisierung Ihres Objekts aufgerufen wird
- ``preSave`` ⇒ Methode, die vor dem Speichern (also Erstellen und Aktualisieren) Ihres Objekts aufgerufen wird
- ``postSave`` ⇒ Methode, die nach dem Speichern Ihres Objekts aufgerufen wird
- ``preRemove`` ⇒ Methode, die vor dem Löschen Ihres Objekts aufgerufen wird
- ``postRemove`` ⇒ Methode, die nach dem Löschen Ihres Objekts aufgerufen wird

Beispiel, immer noch mit dem Wetter-Plugin Befehle zu erstellen oder nach dem Speichern zu aktualisieren (das Beispiel ist vereinfacht)) :

````php
öffentliche Funktion postUpdate() {
      $weatherCmd = $this->getCmd(null, 'temperature');
      Wenn (!is_object($weatherCmd)) {
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
      Wenn (!is_object($cron)) {
          $cron = new cron();
          $cron->setClass('weather');
          $cron->setFunction('updateWeatherData');
          $cron->setOption(array('weather_id' => intval($this->getId())));
      }
      $cron->setSchedule($this->getConfiguration('refreshCron', '*/30 * * * *'));
      $cron->save();
}
````

Le début est assez standard avec la création d'une commande, la fin est plus intéressante avec la mise en place d'un cron qui va appeler la méthode ``weather::updateWeatherData`` en passant l'Ausweis de l'équipement à mettre à jour toute les 30min par défaut.

Ici la méthode updateWeatherData (simplifiée aussi) :

````php
public static function updateWeatherData($_options) {
  $weather = weather::byId($_options['weather_id']);
  Wenn (is_object($weather)) {
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

Abschließend finden Sie hier noch einige Tipps und Tricks :

- Vermeiden Sie es (es sei denn, Sie wissen, was Sie tun), eine Methode der geerbten Klasse zu überschreiben (dies kann viele Probleme verursachen))
- Um die Batterie (in %) eines Geräts wieder zusammenzubauen, tun Sie dies an diesem (Jeedom kümmert sich um den Rest und benachrichtigt den Benutzer bei Bedarf) :

````php
$eqLogic->batteryStatus(56);
````

- Sur les commandes au moment de l'ajout d'une valeur Jeedom applique la méthode d'instance ``formatValue($_value)`` qui, en fonction du sous-type, peut la remettre en forme (en particulier pour les valeurs binaires)
- ne faites JAMAIS une méthode dans la class héritant de cmd s'appelant : execCmd ou event
- si dans la configuration de votre commande vous avez renseigné returnStateTime (en minute) et returnStateValue, Jeedom changera automatique la valeur de votre commande par returnStateValue au bout de X minute(s)
- toujours pour la commande vous pouvez utiliser addHistoryValue pour forcer la mise en historique (attention votre commande doit être historisée)
