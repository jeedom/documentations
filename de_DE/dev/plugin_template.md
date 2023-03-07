# Dokumentations-Plugin-Vorlage

Sie finden eine leere Plugin-Datenbank [hier](https:/./.github.com/.jeedom/.plugin-template)

# Plugin-Erstellung Teil 1 : l'arborescence

Hier ist seine Struktur: Zuerst einen Ordner mit dem Namen Ihres Plugins (genauer gesagt seiner eindeutigen Kennung), der die folgenden Unterordner enthalten muss :

- ``3rdparty`` : Ordner mit den im Plugin verwendeten externen Bibliotheken (Beispiel für das SMS-Plugin eine Bibliothek für die serielle Kommunikation in PHP).
- ``core`` : Ordner mit allen internen Betriebsdateien.
  - ``class`` : Ordner mit der Plugin-Klasse.
  - ``php`` : Ordner, der Funktionen enthalten kann, die nicht zu einer Klasse gehören müssen (häufig verwendet, um mehrere Klassen oder Konfigurationsdateien gleichzeitig einzuschließen).
  - ``config`` : Plugin-Konfigurationsdatei.
  - ``ajax`` : Ordner mit AJA-AufrufzieldateienX.
  - ``i18n`` : Ordner mit Dateien .Plugin-Übersetzung json.
  - ``template`` : Ordner mit den HTML-Vorlagen für Kacheln, die für die Geräte des Plugins spezifisch sind, im Dashboard und in den Unterordnern für Mobilgeräte.
- ``desktop`` : Ordner mit der "Desktop" -Ansicht des Plugins (im Gegensatz zur "mobilen" Ansicht").
  - ``js`` : Ordner mit allen Javascript-Dateien für die Plugin-Schnittstelle.
  - ``php`` : Ordner mit allen PHP-Typ-Dateien für die Plugin-Schnittstelle.
  - ``css`` : Bei Bedarf alle CSS-Dateien des Plugins, ggf. inklusive *Schriftarten*.
  - ``modal`` : Ordner mit dem Modalcode des Plugins.
  - ``img`` : Ordner für die Bilder (png, jpg etc), die vom Plugin benötigt werden.
- ``plugin_info`` : Enthält die Dateien, mit denen Jeedom das Plugin qualifizieren, installieren und konfigurieren kann.
  - ``info.json`` : Datei mit grundlegenden Plugin-Informationen .Es ist obligatorisch, sonst wird Jeedom das Plugin nicht sehen. Es enthält unter anderem die Modulkennung, Beschreibung, Installationsanleitung usw
  - ``install.php`` : Datei, die (falls erforderlich) die Methoden zum Installieren und Deinstallieren des Plugins enthält.
  - ``configuration.php`` : Datei mit den Parametern zum Konfigurieren des Plugins unabhängig von seiner Ausstattung (Beispiel für das Zwave-Modul, die Raspberry Pi IP mit der Razberry-Karte)
- ``docs`` : Muss das Plugin-Dokument im Markdown-Format, das Stammverzeichnis und die Datei index.md enthalten. Alle Bilder sind in Dokumenten / Bildern. Das Dokument selbst befindet sich je nach Sprache in einem Ordner (z. B. in Französisch : ``docs/.fr\_FR``)
- ``ressources`` : Ordner für mögliche Daemons und Abhängigkeiten.
- ``data`` : Ordner, der für Dateien verwendet wird, die vom Plugin speziell für das Jeedom des Benutzers generiert werden.

In Bezug auf die Dateinamenskonvention sind hier die
Bedarf :

- Klasse PHP-Dateien müssen mit enden ``.class.php``
- Wenn es nicht von einer Include-Datei verwaltet wird, muss der Name der Datei lauten ``nom\_class.class.php``
- Dateien, die nur als Einstiegspunkt für mehrere Dateien dienen, müssen mit enden ``.inc.php``
- Konfigurationsdateien müssen mit enden ``.config.php``

Hier sind die Empfehlungen :

- AJAX-Dateien müssen mit enden ``.ajax.php``
- Der Name der ersten Ansichtsseite eines Plugins muss mit der Plugin-ID übereinstimmen
- Der Name der JS-Datei (falls vorhanden) der ersten Plugin-Ansichtsseite muss die Plugin-ID sein

# Plugin-Erstellung Teil 2 : Info Plugin Ordner

## ``info.json``

Sehen [hier](https:/./.doc.jeedom.com/de_DE/dev/.structure_info_json)

## ``install.php``

Datei mit Anweisungen zum Installieren eines Plugins :

Es setzt sich wie folgt zusammen :

Der erste kommentierte Teil enthält die Lizenz (es ist besser). Die hier verwendete zeigt an, dass die Datei zu Jeedom gehört und Open Source ist. Dann kommt die Einbeziehung von Jeedoms Kern (dies ermöglicht den Zugriff auf interne Funktionen). Dann kommen die 3 Funktionen :

- ``pluginid_install()`` : Methode zur Installation des Plugins. Hier fügt die Installation Jeedom einen Cron-Job hinzu
- ``pluginid_update()`` : Methode zur Installation des Plugins. Wird hier verwendet, um die Cron-Task neu zu starten
- ``pluginid_remove()`` : Methode zum Entfernen des Plugins. Hier entfernt die Funktion die Cron-Task während der Deinstallation aus Jeedom

Beispiel :

````php
<?php
/ * Diese Datei ist Teil von Jeedom.
 *
 * Jeedom ist freie Software: Sie können es weitergeben und / oder ändern
 * es unter den Bedingungen der GNU General Public License, wie von veröffentlicht
 * die Free Software Foundation, entweder Version 3 der Lizenz oder
 * (nach Ihrer Wahl) jede spätere Version.
 *
 * Jeedom wird in der Hoffnung verteilt, dass es nützlich sein wird,
 * Ziel OHNE JEGLICHE GARANTIE; ohne auch nur die implizite Garantie von
 * MARKTGÄNGIGKEIT oder EIGNUNG FÜR EINEN BESTIMMTEN ZWECK. Siehe die
 * GNU General Public License für weitere Details.
 *
 * Sie sollten eine Kopie der GNU General Public License erhalten haben
 * zusammen mit Jeedom. If not, see <http:/./.www.gnu.org/.licenses/.>.
 */.
require_once dirname (__ FILE__). '/../../../core/php/core.inc.php';

Funktion openzwave_install() {
    $cron = cron::byClassAndFunction('zwave', 'pull');;
    Eibe (!is_object ($ cron)) {
        $cron = new cron();;
        $cron->setClass('zwave');;
        $cron->setFunction('pull');;
        $cron->setEnable(1);;
        $cron->setDeamon(1);;
        $cron->setSchedule('* * * * *');;
        $cron->save();;
    }
}

Funktion openzwave_update() {
    $cron = cron::byClassAndFunction('zwave', 'pull');;
    Eibe (!is_object ($ cron)) {
        $cron = new cron();;
        $cron->setClass('zwave');;
        $cron->setFunction('pull');;
        $cron->setEnable(1);;
        $cron->setDeamon(1);;
        $cron->setSchedule('* * * * *');;
        $cron->save();;
    }
    $cron->stop();;
}

Funktion openzwave_remove() {
    $cron = cron::byClassAndFunction('zwave', 'pull');;
    if (is_object ($ cron)) {
        $cron->remove();;
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
/ * Diese Datei ist Teil von Jeedom.
 *
  * Jeedom ist freie Software: Sie können es weitergeben und / oder ändern
 * es unter den Bedingungen der GNU General Public License, wie von veröffentlicht
 * die Free Software Foundation, entweder Version 3 der Lizenz oder
 * (nach Ihrer Wahl) jede spätere Version.
 *
 * Jeedom wird in der Hoffnung verteilt, dass es nützlich sein wird,
 * Ziel OHNE JEGLICHE GARANTIE; ohne auch nur die implizite Garantie von
 * MARKTGÄNGIGKEIT oder EIGNUNG FÜR EINEN BESTIMMTEN ZWECK. Siehe die
 * GNU General Public License für weitere Details.
 *
  * Sie sollten eine Kopie der GNU General Public License erhalten haben
 * zusammen mit Jeedom. If not, see <http:/./.www.gnu.org/.licenses/.>.
  */.

 require_once dirname (__ FILE__). '/../../../core/php/core.inc.php';
include_file ('core', 'authentication', 'php');
Eibe (!isConnect()) {
    include_file('desktop', '404', 'php');;
    die();;
 }
 ?>
 <form class="form-horizontal">
     <fieldset>
         <div class="form-group">
             <label class="col-lg-2 control-label">Zway IP</.label>
             <div class="col-lg-2">
                 <input class="configKey form-control" data-l1key="zwaveAddr" /.>
             </.div>
         </.div>
         <div class="form-group">
             <label class="col-lg-4 control-label">Supprimer automatiquement les périphériques exclus</.label>
             <div class="col-lg-4">
                 <input type="checkbox" class="configKey" data-l1key="autoRemoveExcludeDevice" /.>
             </.div>
         </.div>
         <div class="form-group">
             <label class="col-lg-4 control-label">J'utilise un serveur openzwave</.label>
             <div class="col-lg-4">
                 <input type="checkbox" class="configKey" data-l1key="isOpenZwave" /.>
             </.div>
         </.div>
     </.fieldset>
 </.form>
 ````

# Plugin-Erstellung Teil 3 : Desktop-Ordner

## PHP

Dieser Ordner enthält die Ansicht selbst. Im Inneren müssen Sie die Plugin-Konfigurationsseite finden (die angezeigt wird, wenn der Benutzer das Plugin ⇒ Kategorie ⇒ Ihr Plugin erstellt). Es ist ratsam, es mit der ID Ihres Plugins zu benennen. Es kann auch das Panel enthalten (Seite, die der Benutzer unter Startseite → Name Ihres Plugins findet).

Alle Dateien in diesem Ordner müssen enden ``.php`` und muss mit beginnen :

````php
<?php
Eibe (!isConnect ('admin')) {
    neue Ausnahme auslösen ('{{401 - Nicht autorisierter Zugriff}}');
 }
 sendVarToJS ('eqType', 'mail');
 ?>
 ````

Une fois sur cette page vous aurez accès en php à toutes les fonctions du core de jeedom (voir [hier](https:/./.www.jeedom.com/.doc/.documentation/.code/.) ) ainsi qu'à celles de tous les modules installés donc le vôtre aussi.

Toutes ces pages étant des vues elles utilisent principalement la syntaxe HTML. Pour tout ce qui est présentation, Jeedom se base principalement sur bootstrap donc toute la [documentation](http:/./.getbootstrap.com/.) est applicable.

Pour simplifier la création de plugin vous pouvez inclure dans votre page le script javascript de template pour les plugins :

````php
<?php include_file('core', 'plugin.template', 'js');; ?>
````

Am Ende Ihrer Seite zu platzieren und nur auf der Konfigurationsseite Ihres Plugins nützlich. Dieses Skript ermöglicht es, das obligatorische Javascript auf eine einzige Funktion zu reduzieren (siehe Abschnitt über JS-Dateien).

Auf Ihrer Konfigurationsseite wurde eine HTML-Syntax implementiert, um Ihr Leben zu vereinfachen. Für die meisten Plugins müssen Sie also nur HTML ausführen, um Ihre Informationen in der Datenbank zu speichern und sie daher auf der Seite Ihrer Klasse zu verwenden.

Die Syntax ist recht einfach: Ihr Element (Eingabe, Auswahl…) muss die Klasse css eqLogicAttr (oder cmdAttr für Befehle) und ein Attribut enthalten, das den Namen der Eigenschaft angibt :

````html
<input type="text" class="eqLogicAttr form-control" data-l1key="name" placeholder="{{Nom de l'équipement mail}}"/.>
````

Là, par exemple, lors du chargement des données jeedom mettra la valeur du nom de l'équipement dans l'input et lors de la sauvegarde récupérera celle-ci pour la remettre en base de données. Petite astuce certaines propriétés sont en fait des chaînes JSON en BDD (cela permet d'avoir vraiment pas mal de liberté pour le plugin), dans ce cas il suffit de faire :

````html
<input class="eqLogicAttr form-control" data-l1key='configuration' data-l2key='fromName' /.>
````

Die Liste der Eigenschaften von Geräten und Befehlen finden Sie hier (um die Eigenschaften von JSON anzuzeigen, sehen Sie sich nur den Getter oder den Setter an. Wenn zwei Parameter erforderlich sind, handelt es sich um JSON)

Letzter wichtiger Punkt auf der Konfigurationsseite: Dies kann so viele Geräte und Befehle wie nötig enthalten. Es gibt jedoch einige Regeln zu befolgen :

Alle Elemente mit der Klasse eqLogicAttr müssen sich in einem Element mit der Klasse css eqLogic Ditto für die Elemente der Klasse css cmdAttr befinden, die sich in einem Element der Klasse cmd befinden müssen. Alle Befehle eines Geräts müssen sich in dem Element mit der entsprechenden eqLogic-Klasse befinden

## JS

Alle JS-Dateien müssen sich im JS-Ordner befinden (einfach !!!). Es ist ratsam, es mit der gleichen ID wie Ihr Plugin zu benennen (im Konfigurationsteil für das Panel, das Sie tun, was Sie wollen). Diese JS-Datei (die der Plugin-Konfiguration) muss mindestens eine addCmdToTable-Methode enthalten, die das hinzuzufügende Befehlsobjekt als Parameter verwendet. Hier ist ein einfaches Beispiel :

````php
Funktion addCmdToTable (_cmd) {
    Eibe (!isset (_cmd)) {
        var _cmd = {Konfiguration: {}};;
     }
    var tr = ''; tr + = '';
     <html>tr + = ' : keine; "> ';
    tr + = '<input class="cmdAttr form-control input-sm" data-l1key="name"> '; tr + = '<input class="cmdAttr form-control input-sm" data-l1key="configuration" data-l2key="recipient"> '; tr + = '';
     <html>tr + = ' : keine; "> ';
     <html>tr + = ' : keine; "> ';
     if (is_numeric (_cmd.id)) {
        tr + = ' <a class="btn btn-default btn-xs cmdAction" data-action="test"><i class="fa fa-rss"></i>{{Test}}</a> ';
     }
     tr + = '<i class="fa fa-minus-circle pull-right cmdAction cursor" data-action="remove"></i></td> ';
    tr + = '';
     $('#table_cmd tbody').append(tr);;
    $('#table_cmd tbody tr:last').setValues(_cmd, '.cmdAttr');;
}
````

Vous remarquerez qu'il y a une ligne par commande et que celle-ci a bien la classe css cmd. Vous pouvez aussi voir les éléments qui ont la classe cmdAttr.

Plusieurs points importants :

- cette fonction peut être appelée avec un objet vide (d'où les 3 premières lignes) lors de l'ajout d'une nouvelle commande
- la dernière ligne permet d'initialiser tous les champs une fois la ligne insérée

Dernier point: un exemple plus complet avec type et sous-type de commande :

````php
Funktion addCmdToTable (_cmd) {
    Eibe (!isset (_cmd)) {
        var _cmd = {};;
    }
     Eibe (!isset (_cmd.configuration)) {
        _cmd.configuration = {};;
    }
     var selRequestType = '<select style="width : 90px;;" class="cmdAttr form-control input-sm" data-l1key="configuration" data-l2key="requestType">';;
     selRequestType += '<option value="script">{{Script}}</.option>';;
     selRequestType += '<option value="http">{{Http}}</.option>';;
     selRequestType += '</.select>';;
    var tr = '';;     tr += '<input class="cmdAttr form-control input-sm" data-l1key="name" style="width : 140px;;">';;
    tr += '<input class="cmdAttr form-control input-sm" data-l1key="id"  style="display : keine; "> ';
    tr += '' + selRequestType;;
    tr += '<div class="requestTypeConfig" data-type="http">';;
    tr += '<input type="checkbox" class="cmdAttr" data-l1key="configuration" data-l2key="noSslCheck" /.>Ne pas vérifier SSL';;
    tr += '</.div>';;
    tr + = '';     tr + = '';
    tr += '<span class="type" type="' + init(_cmd.type) + '">' + jeedom.cmd.availableType() + '</.span>';;
    tr += '<span class="subType" subType="' + init(_cmd.subType) + '"></.span>';;
    tr + = '';     tr += '<textarea style="height : 95px;;" class="cmdAttr form-control input-sm" data-l1key="configuration" data-l2key="request"></.textarea>';;
    tr += '<a class="btn btn-default browseScriptFile cursor input-sm" style="margin-top : 5px;;"><i class="fa fa-folder-open"></.i> {{Parcourir}}</.a> ';;
    tr += '<a class="btn btn-default editScriptFile cursor input-sm" style="margin-top : 5px;;"><i class="fa fa-edit"></.i> {{Editer}}</.a> ';;
    tr += '<a class="btn btn-success newScriptFile cursor input-sm" style="margin-top : 5px;;"><i class="fa fa-file-o"></.i> {{Nouveau}}</.a> ';;
    tr += '<a class="btn btn-danger removeScriptFile cursor input-sm" style="margin-top : 5px;;"><i class="fa fa-trash-o"></.i> {{Supprimer}}</.a> ';;
    tr += '<a class="btn btn-warning bt_shareOnMarket cursor input-sm" style="margin-top : 5px;;"><i class="fa fa-cloud-upload"></.i> {{Partager}}</.a> ';;
    tr += '</.div>';;
    tr + = '';     tr + = '';
    tr += '<input class="cmdAttr form-control tooltips input-sm" data-l1key="unite"  style="width : 100px;;" placeholder="{{Unité}}" title="{{Unité}}">';;
    tr += '<input class="tooltips cmdAttr form-control input-sm" data-l1key="configuration" data-l2key="minValue" placeholder="{{Min}}" title="{{Min}}"> ';;
    tr += '<input class="tooltips cmdAttr form-control input-sm" data-l1key="configuration" data-l2key="maxValue" placeholder="{{Max}}" title="{{Max}}">';;
    tr + = '';     tr + = '';
    tr += '<span><input type="checkbox" class="cmdAttr" data-l1key="isHistorized" /.> {{Historiser}}<br/.></.span>';;
    tr + = '';     tr + = '';
    if (is_numeric (_cmd.id)) {
    tr + = ' <a class="btn btn-default btn-xs cmdAction" data-action="test"><i class="fa fa-rss"></i>{{Test}}</a> ';
    }
    tr + = '<i class="fa fa-minus-circle pull-right cmdAction cursor" data-action="remove"></i></td> ';
    tr + = '';
    $('#table_cmd tbody').append(tr);;
    $('#table_cmd tbody tr:last').setValues(_cmd, '.cmdAttr');;

    Eibe (isset (_cmd.configuration.requestType)) {
        $('#table_cmd tbody tr:last .cmdAttr[data-l1key=configuration][data-l2key=requestType]').value(init(_cmd.configuration.requestType));;
        $('#table_cmd tbody tr:last .cmdAttr[data-l1key=configuration][data-l2key=requestType]').trigger('change');;
    }

     Eibe (isset (_cmd.type)) {
        $('#table_cmd tbody tr:last .cmdAttr[data-l1key=type]').value(init(_cmd.type));;
    }
     jeedom.cmd.changeType($('#table_cmd tbody tr:last'), init(_cmd.subType));;
    initTooltips();;
}
````

Hier können wir feststellen :

- ``jeedom.cmd.availableType()`` fügt eine Auswahl mit der Liste der bekannten Typen ein (Aktion und Informationen für den Moment)
- ``<span class="subType" subType="' + init(\_cmd.subType) + '"><\span>`` : der Ort, an dem die Auswahl des Untertyps gestellt werden muss
- ``jeedom.cmd.changeType(\$('\#table\_cmd tbody tr:last'), init(\_cmd.subType))`` Dadurch kann der Subtyp mit dem richtigen Wert initialisiert werden

Andere Javascript-Funktionen können verwendet werden :

- ``printEqLogic`` Dabei wird das gesamte Objekt des Geräts als Parameter verwendet (nützlich bei der Datenverarbeitung vor der Wiederherstellung). Es wird aufgerufen, wenn die Gerätedaten angezeigt werden
- ``saveEqLogic`` Als Parameter wird das Geräteobjekt verwendet, das in der Datenbank gespeichert wird (nützlich, wenn Sie vor dem Speichern eine Verarbeitung durchführen müssen). Als letztes können Sie JS-Dateien auf saubere Weise in Ihre PHP-Seite aufnehmen :

````php
<?php include_file('desktop', 'weather', 'js', 'weather');; ?>
````

Le premier argument donne le dossier dans lequel le trouver (attention c'est le dossier père du dossier JS), le deuxième le nom de votre javascript, le troisième indique à Jeedom que c'est un fichier Js et le dernier dans quel plugin il se trouve.

## CSS

Ce dossier contient vos fichiers CSS (il ne devrait pas être trop utilisé) , vohier comment les inclure sur votre page :

````php
<?php include_file('desktop', 'weather', 'css', 'weather');; ?>
````

Das erste Argument gibt den Ordner an, in dem es gefunden werden soll (Aufmerksamkeit ist der übergeordnete Ordner des CSS-Ordners), das zweite den Namen Ihrer CSS-Datei, das dritte sagt Jeedom, dass es sich um eine CSS-Datei handelt und das letzte, in dem sich das Plugin befindet es stellt sich heraus, dass.

## MODAL

Im modalen Ordner können Sie Ihre PHP-Dateien speichern, die für die Anzeige von Modalen vorgesehen sind. So rufen Sie sie von Ihrer Hauptseite aus auf (dieser Code befindet sich in einer Javascript-Datei) :

Wir können sehen :

````js
$('#md_modal').dialog({title: "{{Classe du périphérique}}"}).load('index.php?v=d&plugin=zwave&modal=show.class&id=' + $('.eqLogicAttr[data-l1key=id]').value()).dialog('open')
````

La première ligne permet de mettre un titre à votre modal

La deuxième ligne charge votre modal et l'affichage. Die Syntax ist recht einfach : plugin, l'Identifikation de votre plugin, modal, le nom de votre modal sans le php et ensuite les paramètres que vous voulez lui passer

## API JS

Ce n'est pas un dossier mais dans les dernières versions de Jeedom celui-ci offre au développeur toute une api javascript (cela évite d'écrire des appels Ajax dans tous les sens). J'essayerai de faire un article pour expliquer les différentes fonctionnalités mais vous pouvez déjà trouver le code hier.

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

Wenn wir auf die Schaltfläche "Assistent" klicken, erhalten wir die Eingabe zum Schreiben und rufen den Assistenten an. Sobald die Konfiguration im Assistenten abgeschlossen ist, wird das Ergebnis abgerufen und in die zuvor ausgewählte Eingabe geschrieben

# Plugin-Erstellung Teil 4 : Kernordner

Der mit Abstand wichtigste Ordner Ihres Plugins kann 4 Unterordner enthalten.

Notiz : In diesem Teil wird auf die ID Ihres Plugins verwiesen : plugin\_id

## PHP

Enthält die Anhang-PHP-Dateien, die ich zum Beispiel verwendet habe, um eine Einschlussdatei zu erstellen, wenn Sie natürlich mehrere Klassendateien oder 3rparty zum Einschließen haben

## Template

Jeedom kann 2 Unterordner enthalten, Dashboard und Mobile. Es ist ein Ordner, den Jeedom automatisch nach einem Widget durchsucht. Wenn Sie also bestimmte Widgets verwenden, müssen Sie hier deren HTML-Datei ablegen

## i18n

Hier sollte Ihre Übersetzung in Form einer JSON-Datei vorliegen (am besten und schauen Sie sich zum Beispiel das Plugin an [Zwave](https:/./.github.com/.jeedom/.plugin-openzwave) um die Form der Datei zu sehen)

## ajax

Dieser Ordner ist für alle Ihre Ajax-Dateien bestimmt. Hier ist ein Skelett der Ajax-Datei :

````php
<?php

/ * Diese Datei ist Teil von Jeedom.
 *
 * Jeedom ist freie Software: Sie können es weitergeben und / oder ändern
 * es unter den Bedingungen der GNU General Public License, wie von veröffentlicht
 * die Free Software Foundation, entweder Version 3 der Lizenz oder
 * (nach Ihrer Wahl) jede spätere Version.
 *
 * Jeedom wird in der Hoffnung verteilt, dass es nützlich sein wird,
 * Ziel OHNE JEGLICHE GARANTIE; ohne auch nur die implizite Garantie von
 * MARKTGÄNGIGKEIT oder EIGNUNG FÜR EINEN BESTIMMTEN ZWECK. Siehe die
 * GNU General Public License für weitere Details.
 *
 * Sie sollten eine Kopie der GNU General Public License erhalten haben
 * zusammen mit Jeedom. If not, see <http:/./.www.gnu.org/.licenses/.>.
 */.

Versuchen {
    require_once dirname (__ FILE__). '/../../../../core/php/core.inc.php';
    include_file ('core', 'authentication', 'php');

    Eibe (!isConnect ('admin')) {
        neue Ausnahme auslösen (__ ('401 - Zugriff nicht erlaubt', __FILE__));
    }

    if (init ('action') == 'deine Aktion') {
        ajax::Erfolg ($ Ergebnis);
    }

    Neue Ausnahme auslösen (__ ('Keine Methodenübereinstimmung : ', __DATEI__). init ('Aktion'));
    /.*     * *********Ausnahme fangen*************** */.
} catch (Ausnahme $ e) {
    ajax::Fehler (displayExeption ($ e), $ e-> getCode ());
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

/ * Diese Datei ist Teil von Jeedom.
 *
 * Jeedom ist freie Software: Sie können es weitergeben und / oder ändern
 * es unter den Bedingungen der GNU General Public License, wie von veröffentlicht
 * die Free Software Foundation, entweder Version 3 der Lizenz oder
 * (nach Ihrer Wahl) jede spätere Version.
 *
 * Jeedom wird in der Hoffnung verteilt, dass es nützlich sein wird,
 * Ziel OHNE JEGLICHE GARANTIE; ohne auch nur die implizite Garantie von
 * MARKTGÄNGIGKEIT oder EIGNUNG FÜR EINEN BESTIMMTEN ZWECK. Siehe die
 * GNU General Public License für weitere Details.
 *
 * Sie sollten eine Kopie der GNU General Public License erhalten haben
 * zusammen mit Jeedom. If not, see <http:/./.www.gnu.org/.licenses/.>.
 */.

/.* * ***************************Includes********************************* */.
require_once dirname (__ FILE__). '/../../../../core/php/core.inc.php';

class plugin_Identifikation extends eqLogic {

    /.*     * *************************Attributs****************************** */.


    /.*     * ***********************Methode static*************************** */.


    /.*     * *********************Methode d'instance************************* */.


    /.*     * **********************Getteur Setteur*************************** */.

}

class plugin_idCmd extends cmd {

    /.*     * *************************Attributs****************************** */.


    /.*     * ***********************Methode static*************************** */.


    /.*     * *********************Methode d'instance************************* */.


    /.*     * **********************Getteur Setteur*************************** */.

}

?>
````

Für die Definition von Jeedom-Klassen lade ich Sie ein, dies zu konsultieren [Standort](https:/./.doc.jeedom.com/.dev/.phpdoc/.4.0/.)

Die einzige obligatorische Methode ist die Instanzmethode für die cmd execute-Klasse. Hier ist ein Beispiel mit dem SARAH-Plugin :

````php
public function execute ($ _ options = array()) {
      Eibe (!isset ($ _ options ['title']) && !isset ($ _ options ['message'])) {
          neue Ausnahme auslösen (__ ("Titel oder Nachricht dürfen nicht beide leer sein", __FILE__));
      }
      $eqLogic = $this->getEqLogic();;
      $message = '';;
      if (isset ($ _ options ['title'])) {
          $message = $_options['title'] . '. ';;
      }
      $message .= $_options['message'];;
      $http = new com_http($eqLogic->getConfiguration('addrSrvTts') . '/.?tts=' . urlencode($message));;
      return $ http-> exec ();
  }
  ````

Beispiel assez simple mais complet, le principe est le suivant, si la commande est une action ou une info (mais pas en événement seulement et que son Abdeckung est dépassé) alors jeedom appelle cette méthode.

Dans notre exemple hier c'est une commande pour faire parler S.A.R.A.H, où le plugin récupère les paramètres dans \$\_options (attention c'est un tableau et ses attributs changent en fonction du sous-type de la commande : color pour un sous-type color, slider pour un sous-type slider, title et message pour un sous-type message et vide pour un sous-type other).

Voila pour la partie obligatoire, voila maintenant ce qui peut être utilisé à coté (avec exemple) :

### toHtml(\$\_version = 'dashboard')

Fonction utilisable dans la commande ou dans l'équipement, en fonction des besoins, vohier un exemple pour l'équipement

````php
public function toHtml($_version = 'dashboard') {
    $replace = $this->preToHtml($_version);;
    Eibe (!is_array($replace)) {
        return $replace;;
    }
    $version = jeedom::versionAlias($_version);;
    $replace['#forecast#'] = '';;
    Eibe ($version != 'mobile' || $this->getConfiguration('fullMobileDisplay', 0) == 1) {
        $forcast_template = getTemplate('core', $version, 'forecast', 'weather');;
        for ($i = 0;; $i < 5;; $i++) {
            $replaceDay = array();;
            $replaceDay['#day#'] = date_fr(date('l', strtotime('+' . $i . ' days')));;

            Eibe ($i == 0) {
                $temperature_min = $this->getCmd(null, 'temperature_min');;
            } else {
                $temperature_min = $this->getCmd(null, 'temperature_' . $i . '_min');;
            }
            $replaceDay['#low_temperature#'] = is_object($temperature_min) ? $temperature_min->execCmd() : '';;

            Eibe ($i == 0) {
                $temperature_max = $this->getCmd(null, 'temperature_max');;
            } else {
                $temperature_max = $this->getCmd(null, 'temperature_' . $i . '_max');;
            }
            $replaceDay['#hight_temperature#'] = is_object($temperature_max) ? $temperature_max->execCmd() : '';;
            $replaceDay['#tempid#'] = is_object($temperature_max) ? $temperature_max->getId() : '';;

            Eibe ($i == 0) {
                $condition = $this->getCmd(null, 'condition');;
            } else {
                $condition = $this->getCmd(null, 'condition_' . $i);;
            }
            $replaceDay['#icone#'] = is_object($condition) ? self::getIconFromCondition($condition->execCmd()) : '';;
            $replaceDay['#conditionid#'] = is_object($condition) ? $condition->getId() : '';;
            $replace['#forecast#'] .= template_replace($replaceDay, $forcast_template);;
        }
    }
    $temperature = $this->getCmd(null, 'temperature');;
    $replace['#temperature#'] = is_object($temperature) ? $temperature->execCmd() : '';;
    $replace['#tempid#'] = is_object($temperature) ? $temperature->getId() : '';;

    $humidity = $this->getCmd(null, 'humidity');;
    $replace['#humidity#'] = is_object($humidity) ? $humidity->execCmd() : '';;

    $pressure = $this->getCmd(null, 'pressure');;
    $replace['#pressure#'] = is_object($pressure) ? $pressure->execCmd() : '';;
    $replace['#pressureid#'] = is_object($pressure) ? $pressure->getId() : '';;

    $wind_speed = $this->getCmd(null, 'wind_speed');;
    $replace['#windspeed#'] = is_object($wind_speed) ? $wind_speed->execCmd() : '';;
    $replace['#windid#'] = is_object($wind_speed) ? $wind_speed->getId() : '';;

    $sunrise = $this->getCmd(null, 'sunrise');;
    $replace['#sunrise#'] = is_object($sunrise) ? $sunrise->execCmd() : '';;
    $replace['#sunid#'] = is_object($sunrise) ? $sunrise->getId() : '';;
    Eibe (strlen($replace['#sunrise#']) == 3) {
        $replace['#sunrise#'] = substr($replace['#sunrise#'], 0, 1) . ':' . substr($replace['#sunrise#'], 1, 2);;
    } else Eibe (strlen($replace['#sunrise#']) == 4) {
        $replace['#sunrise#'] = substr($replace['#sunrise#'], 0, 2) . ':' . substr($replace['#sunrise#'], 2, 2);;
    }

    $sunset = $this->getCmd(null, 'sunset');;
    $replace['#sunset#'] = is_object($sunset) ? $sunset->execCmd() : '';;
    Eibe (strlen($replace['#sunset#']) == 3) {
        $replace['#sunset#'] = substr($replace['#sunset#'], 0, 1) . ':' . substr($replace['#sunset#'], 1, 2);;
    } else Eibe (strlen($replace['#sunset#']) == 4) {
        $replace['#sunset#'] = substr($replace['#sunset#'], 0, 2) . ':' . substr($replace['#sunset#'], 2, 2);;
    }

    $wind_direction = $this->getCmd(null, 'wind_direction');;
    $replace['#wind_direction#'] = is_object($wind_direction) ? $wind_direction->execCmd() : 0;;

    $refresh = $this->getCmd(null, 'refresh');;
    $replace['#refresh_id#'] = is_object($refresh) ? $refresh->getId() : '';;

    $condition = $this->getCmd(null, 'condition_now');;
    $sunset_time = is_object($sunset) ? $sunset->execCmd() : null;;
    $sunrise_time = is_object($sunrise) ? $sunrise->execCmd() : null;;
    Eibe (is_object($condition)) {
        $replace['#icone#'] = self::getIconFromCondition($condition->execCmd(), $sunrise_time, $sunset_time);;
        $replace['#condition#'] = $condition->execCmd();;
        $replace['#conditionid#'] = $condition->getId();;
        $replace['#collectDate#'] = $condition->getCollectDate();;
    } else {
        $replace['#icone#'] = '';;
        $replace['#condition#'] = '';;
        $replace['#collectDate#'] = '';;
    }
    Eibe ($this->getConfiguration('modeImage', 0) == 1) {
        $replace['#visibilityIcon#'] = "none";;
        $replace['#visibilityImage#'] = "block";;
    } else {
        $replace['#visibilityIcon#'] = "block";;
        $replace['#visibilityImage#'] = "none";;
    }
    $HTML = template_replace($replace, getTemplate('core', $version, 'current', 'weather'));;
    cache::set('widgetHtml' . $_version . $this->getId(), $html, 0);;
    return $html;;
}
````

Einige interessante Dinge hier :

Um die angeforderte Version in ein Dashboard oder ein Mobilgerät zu konvertieren (mview wird beispielsweise mobil, können Sie beispielsweise in den Ansichten den Namen der Objekte hinzufügen)

````php
$_version = jeedom::versionAlias($_version);;
````

Récupération d'un template de commande, hier le template de commande : plugins/.weather/.core/.template/.\$\_version/.forecast.HTML (\$\_version valant mobile ou dashboard)

````php
$forcast_template = getTemplate('core', $_version, 'forecast', 'weather');;
````

Ersetzen Sie hier die zuvor ausgefüllten Tags in \ $ HTML ersetzen, um die Werte zu enthalten

````php
$html_forecast .= template_replace($replace, $forcast_template);;
````

Cela permet de récupérer la commande ayant le logical\_Identifikation : temperature\_min

````php
$this->getCmd(null, 'temperature_min');;
````

Hier kann der Wert nur dann in das Tag eingefügt werden, wenn die Bestellung abgerufen wurde

````php
$replace['#temperature#'] = is_object($temperature) ? $temperature->execCmd() : '';;
````

Passage important: cela permet de récupérer les personnalisations faites par l'utilisateur sur la page Générale → Affichage et de les réinjecter dans le template

````php
$parameters = $this->getDisplay('parameters');;
Eibe (is_array($parameters)) {
    foreach ($parameters as $key => $value) {
        $replace['#' . $key . '#'] = $value;;
    }
}
````

Speichern des Widgets im Cache: Damit wir es bei der nächsten Anfrage schneller bereitstellen können, können wir hier die 0 bemerken, die eine unendliche Lebensdauer anzeigt, andernfalls ist die Dauer in Sekunden (wir werden im nächsten Teil sehen, wie das Wetter-Plugin sein Widget aktualisiert).

````php
cache::set ('weatherWidget' . $_version . $this->getId(), $html, 0);;
````

Enfin envoi du HTML à Jeedom :

````php
return $html;;
````

Sie müssen Jeedom auch mitteilen, was Ihr Widget in Bezug auf die Anpassung zulässt. Es ist ein bisschen komplex (und wieder), aber normalerweise flexibel und einfach einzurichten.

Es funktioniert genauso auf Ihrem Gerät oder Steuerelement. Es ist ein statisches Attribut der Klasse \ $\_ widgetPossibility, das ein mehrdimensionales Array sein muss. Dort wird es jedoch kompliziert, wenn eine Dimension des Arrays wahr ist oder falsch. Es wird dann davon ausgegangen, dass alle möglichen Kinder diesen Wert haben (ich werde ein Beispiel geben).

Zuerst die Fälle, in denen Sie es verwenden müssen: Wenn in Ihrer Klasse das Erben von eqLogic oder cmd eine toHtml-Funktion hat, lohnt es sich nicht, mehr zu lesen.

### Pre- und Post-Methode

Beim Erstellen oder Löschen Ihrer Objekte (Ausrüstung, Bestellung oder andere) in Jeedom können vor / nach der Aktion verschiedene Methoden aufgerufen werden :

- ``preInsert`` ⇒ Methode, die vor der Erstellung Ihres Objekts aufgerufen wurde
- ``postInsert`` ⇒ Methode, die nach der Erstellung Ihres Objekts aufgerufen wird
- ``preUpdate`` ⇒ Methode, die vor dem Aktualisieren Ihres Objekts aufgerufen wird
- ``postUpdate`` ⇒ Methode, die nach dem Aktualisieren Ihres Objekts aufgerufen wird
- ``preSave`` ⇒ Methode, die vor dem Speichern (daher Erstellung und Aktualisierung) Ihres Objekts aufgerufen wird
- ``postSave`` ⇒ Methode, die nach dem Speichern Ihres Objekts aufgerufen wird
- ``preRemove`` ⇒ Methode, die vor dem Löschen Ihres Objekts aufgerufen wird
- ``postRemove`` ⇒ Methode, die nach dem Löschen Ihres Objekts aufgerufen wird

Beispiel: Immer mit dem Wetter-Plugin zum Erstellen oder Aktualisieren von Bestellungen nach dem Speichern (das Beispiel ist vereinfacht) :

````php
öffentliche Funktion postUpdate() {
      $weatherCmd = $this->getCmd(null, 'temperature');;
      Eibe (!is_object ($ weatherCmd)) {
          $weatherCmd = new weatherCmd();;
      }
      $weatherCmd->setName(__('Température', __FILE__));;
      $weatherCmd->setLogicalId('temperature');;
      $weatherCmd->setEqLogic_id($this->getId());;
      $weatherCmd->setConfiguration('day', '-1');;
      $weatherCmd->setConfiguration('data', 'temp');;
      $weatherCmd->setUnite('°C');;
      $weatherCmd->setType('info');;
      $weatherCmd->setSubType('numeric');;
      $weatherCmd->save();;

      $cron = cron::byClassAndFunction('weather', 'updateWeatherData', array('weather_id' => intval($this->getId())));;
      Eibe (!is_object ($ cron)) {
          $cron = new cron();;
          $cron->setClass('weather');;
          $cron->setFunction('updateWeatherData');;
          $cron->setOption(array('weather_id' => intval($this->getId())));;
      }
      $cron->setSchedule($this->getConfiguration('refreshCron', '*/.30 * * * *'));;
      $cron->save();;
}
````

Le début est assez standard avec la création d'une commande, la fin est plus intéressante avec la mise en place d'un cron qui va appeler la méthode ``weather::updateWeatherData`` en passant l'Identifikation de l'équipement à mettre à jour toute les 30min par défaut.

Ici la méthode updateWeatherData (simplifiée aussi) :

````php
public static function updateWeatherData($_options) {
  $weather = weather::byId($_options['weather_id']);;
  Eibe (is_object($weather)) {
      foreach ($weather->getCmd('info') as $cmd) {
        $weather->checkAndUpdateCmd($cmd,$cmd->execute());;
      }
  }
}
````

Wir sehen hier, dass wir während des Aufrufs die betreffenden Geräte wiederherstellen und dann die Befehle ausführen, um die Werte wiederherzustellen und sie gegebenenfalls zu aktualisieren.

Sehr wichtiger Teil :

````php
$weather->checkAndUpdateCmd($cmd,$cmd->execute());;
````

Au moment de la fonction ``checkAndUpdateCmd`` (qui permet de signaler à Jeedom une nouvelle mise à jour de la valeur, avec déclenchement de toutes les actions qui doivent être faites : mise à jour du dashboard, vérification des scénarios…​),

Pour la classe commande, un petit truc à savoir si vous utilisez le template js de base. Lors de l'envoi de l'équipement Jeedom fait du différentiel sur les commandes et va supprimer celles qui sont en base mais pas dans la nouvelle définition de l'équipement. Voilà comment l'éviter :

````php
public function dontRemoveCmd() {
  return true;;
}
````

Zum Abschluss hier einige Tipps und Tricks :

- Vermeiden Sie (es sei denn, Sie wissen, was Sie tun) das Überschreiben einer Methode der geerbten Klasse (dies kann viele Probleme verursachen)
- Um die Batterie (in%) eines Geräts wieder zusammenzubauen, tun Sie dies (Jeedom kümmert sich um den Rest und warnt den Benutzer, falls erforderlich) :

````php
$eqLogic->batteryStatus(56);;
````

- Sur les commandes au moment de l'ajout d'une valeur Jeedom applique la méthode d'instance ``formatValue($_value)`` qui, en fonction du sous-type, peut la remettre en forme (en particulier pour les valeurs binaires)
- ne faites JAMAIS une méthode dans la class héritant de cmd s'appelant : execCmd ou event
- si dans la configuration de votre commande vous avez renseigné returnStateTime (en minute) et returnStateValue, Jeedom changera automatique la valeur de votre commande par returnStateValue au bout de X minute(s)
- toujours pour la commande vous pouvez utiliser addHistoryValue pour forcer la mise en historique (attention votre commande doit être historisée)
