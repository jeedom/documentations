# Plugin-Vorlagendokumentation

Sie finden eine leere Plugin-Basis [Hier](https://github.com/jeedom/plugin-template)

# Plugin-Erstellung Teil 1 : l'arborescence

Hier ist seine Struktur: zunächst einen Ordner mit dem Namen Ihres Plugins (genauer gesagt seiner eindeutigen Kennung), der die folgenden Unterordner enthalten muss :

- ``3rdparty`` : Ordner mit den im Plugin verwendeten externen Bibliotheken (Beispiel für das SMS-Plugin eine Bibliothek für die serielle Kommunikation in PHP).
- ``core`` : Ordner mit allen internen Betriebsdateien.
  - ``class`` : Ordner mit der Plugin-Klasse.
  - ``php`` : Ordner, der Funktionen enthalten kann, die nicht unbedingt zu einer Klasse gehören müssen (wird oft verwendet, um die Einbindung mehrerer Klassen oder Konfigurationsdateien auf einmal zu ermöglichen)).
  - ``config`` : Plugin-Konfigurationsdatei.
  - ``ajax`` : Ordner mit den AJA-AufrufzieldateienX.
  - ```` : Ordner mit den Dateien .Plugin-Übersetzung JSON.
  - ``template`` : Ordner mit den HTML-Vorlagen für Kacheln, die für die Ausstattung des Plugins spezifisch sind, in den Unterordnern Dashboard und Mobile.
- ``desktop`` : Ordner mit der "Desktop"-Ansicht des Plugins (im Gegensatz zur "mobilen" Ansicht)").
  - ``js`` : Ordner mit allen Javascript-Dateien für die Plugin-Schnittstelle.
  - ``php`` : Ordner mit allen PHP-Dateien für die Plugin-Schnittstelle.
  - ``css`` : Falls erforderlich, alle CSS-Dateien des Plugins, einschließlich möglicherweise *Schriftarten*.
  - ``modal`` : Ordner mit dem Modalcode des Plugins.
  - ``img`` : Ordner für Bilder (png, jpg etc.), die das Plugin benötigt.
- ``plugin_info`` : Enthält die Dateien, die es Jeedom ermöglichen, das Plugin zu qualifizieren, seine Installation und Konfiguration durchzuführen.
  - ``info.json`` : Datei mit grundlegenden Plug-In-Informationen .Dies ist zwingend erforderlich, sonst erkennt Jeedom das Plugin nicht. Es enthält unter anderem die Modulkennung, Beschreibung, Installationshinweise etc
  - ``install.php`` : Datei, die (falls erforderlich) die Methoden zur Installation und Deinstallation des Plugins enthält.
  - ``configuration.php`` : Datei mit den Parametern zur Konfiguration des Plugins unabhängig von dessen Ausstattung (Beispiel für das Zwave-Modul die IP des Raspberry Pi mit der Razberry-Karte)
- ``docs`` : Muss das Plugin-Dokument im Markdown-Format, das Stammverzeichnis und die Datei index.md enthalten. Alle Bilder befinden sich in docs/images. Das Dokument selbst befindet sich in einem Ordner, abhängig von der Sprache (z. B. auf Französisch : ``docs/fr\_FR``)
- ``ressources`` : Ordner für mögliche Daemons und Abhängigkeiten.
- ``data`` : Ordner für Dateien, die vom benutzereigenen Jeedom-Plugin generiert werden.

Was die Dateibenennungskonvention betrifft, sind hier die
Imperative :

- PHP-Klassendateien müssen mit enden ``.class.php``
- Wenn die Datei nicht über eine Include-Datei verwaltet wird, muss der Dateiname ``nom\_class.class.php``
- Dateien, die nur als Einstiegspunkt für die Einbindung mehrerer Dateien dienen, müssen mit ``.inc.php``
- Konfigurationsdateien müssen mit enden ``.config.php``

Hier sind die Empfehlungen :

- AJAX-Dateien müssen mit enden ``.ajax.php``
- Der Name der ersten Ansichtsseite eines Plugins muss mit der ID des Plugins übereinstimmen
- Der Name der JS-Datei (falls vorhanden) der ersten Ansichtsseite des Plugins sollte die Plugin-ID sein

# Plugin-Erstellung Teil 2 : Plugin-Infoordner

## ``info.json``

Sehen [Hier](https://doc.jeedom.com/de_DE/dev/structure_info_json)

## ``install.php``

Datei mit Anweisungen zur Installation eines Plugins :

Es setzt sich wie folgt zusammen: :

Der erste kommentierte Teil enthält die Lizenz (es ist besser). Die hier verwendete Datei zeigt an, dass die Datei zu Jeedom gehört und Open Source ist. Dann folgt die Einbindung des Jeedom-Kerns (dies ermöglicht den Zugriff auf die internen Funktionen). Dann folgen die 3 Funktionen :

- ``pluginid_install()`` : Methode zum Installieren des Plugins. Hier fügt die Installation eine Cron-Aufgabe zu Jeedom hinzu
- ``pluginid_update()`` : Methode zum Installieren des Plugins. Wird hier verwendet, um den Cron-Job neu zu starten
- ``pluginid_remove()`` : Methode zum Entfernen des Plugins. Hier löscht die Funktion den Jeedom-Crontask bei der Deinstallation

Beispiel :

````php
<?php
/* Diese Datei ist Teil von Jeedom.
 *
 * Jeedom ist kostenlose Software: Sie können es weitergeben und/oder ändern
 * es unter den Bedingungen der GNU General Public License, wie veröffentlicht von
 * die Free Software Foundation, entweder Version 3 der Lizenz oder
 * (nach Ihrer Wahl) jede spätere Version.
 *
 * Jeedom wird in der Hoffnung verbreitet, dass es nützlich sein wird,
 * aber OHNE JEGLICHE GARANTIE; ohne auch nur die implizite Garantie von
 * MARKTGÄNGIGKEIT oder EIGNUNG FÜR EINEN BESTIMMTEN ZWECK. Sehen Sie sich die
 * GNU General Public License für weitere Details.
 *
 * Sie sollten eine Kopie der GNU General Public License erhalten haben
 * zusammen mit Jeedom. If not, see <http://www.gnu.org/licenses/>.
 */
require_once Verzeichnisname(__FILE__) . '/../../../core/php/core.inc.php';

Funktion openzwave_install() {
    $cron = cron::byClassAndFunction('zwave', 'pull')
    Wenn (!is_object($cron)) {
        $cron = new cron()
        $cron->setClass('zwave')
        $cron->setFunction('pull')
        $cron->setEnable(1)
        $cron->setDeamon(1)
        $cron->setSchedule('* * * * *')
        $cron->save()
    }
}

Funktion openzwave_update() {
    $cron = cron::byClassAndFunction('zwave', 'pull')
    Wenn (!is_object($cron)) {
        $cron = new cron()
        $cron->setClass('zwave')
        $cron->setFunction('pull')
        $cron->setEnable(1)
        $cron->setDeamon(1)
        $cron->setSchedule('* * * * *')
        $cron->save()
    }
    $cron->stop()
}

Funktion openzwave_remove() {
    $cron = cron::byClassAndFunction('zwave', 'pull')
    wenn (is_object($cron)) {
        $cron->remove()
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
  * Jeedom ist kostenlose Software: Sie können es weitergeben und/oder ändern
 * es unter den Bedingungen der GNU General Public License, wie veröffentlicht von
 * die Free Software Foundation, entweder Version 3 der Lizenz oder
 * (nach Ihrer Wahl) jede spätere Version.
 *
 * Jeedom wird in der Hoffnung verbreitet, dass es nützlich sein wird,
 * aber OHNE JEGLICHE GARANTIE; ohne auch nur die implizite Garantie von
 * MARKTGÄNGIGKEIT oder EIGNUNG FÜR EINEN BESTIMMTEN ZWECK. Sehen Sie sich die
 * GNU General Public License für weitere Details.
 *
  * Sie sollten eine Kopie der GNU General Public License erhalten haben
 * zusammen mit Jeedom. If not, see <http://www.gnu.org/licenses/>.
  */

 require_once Verzeichnisname(__FILE__) . '/../../../core/php/core.inc.php';

Wenn (!isConnect()) {
    include_file('desktop', '404', 'php')
    die()
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

Dieser Ordner enthält die Ansicht selbst. Darin finden wir unbedingt die Plugin-Konfigurationsseite (diejenige, die angezeigt wird, wenn der Benutzer Plugin ⇒ Kategorie ⇒ Ihr Plugin ausführt). Es wird empfohlen, dieses mit der ID Ihres Plugins zu benennen. Es kann auch das Panel enthalten (Seite, die der Benutzer auf der Startseite findet → Name Ihres Plugins).

Alle Dateien in diesem Ordner müssen mit enden ``.php`` und muss beginnen mit :

````php
<?php
Wenn (!isConnect('admin')) {
    neue Ausnahme auslösen('{{401 - Unauthorized Access}}');
 }
 sendVarToJS('eqType', 'mail');
 ?>
 ````

Une fois sur cette page vous aurez accès en php à toutes les fonctions du core de jeedom (voir [Hier](https://www.jeedom.com/doc/documentation/code/) ) ainsi qu'à celles de tous les modules installés donc le vôtre aussi.

Toutes ces pages étant des vues elles utilisent principalement la syntaxe HTML. Pour tout ce qui est présentation, Jeedom se base principalement sur bootstrap donc toute la [documentation](http://getbootstrap.com/) est applicable.

Pour simplifier la création de plugin vous pouvez inclure dans votre page le script javascript de template pour les plugins :

````php
<?php include_file('core', 'plugin.template', 'js') ?>
````

Wird ganz unten auf Ihrer Seite platziert und ist nur auf der Konfigurationsseite Ihres Plugins nützlich. Mit diesem Skript können Sie das obligatorische Javascript auf eine einzige Funktion reduzieren (siehe Abschnitt zu JS-Dateien).

Auf Ihrer Konfigurationsseite wurde eine HTML-Syntax implementiert, um Ihnen das Leben zu erleichtern. Für die meisten Plugins müssen Sie also nur HTML ausführen, um Ihre Informationen in der Datenbank zu speichern und sie dann auf Ihrer Klassenseite wieder zu verwenden.

Die Syntax ist recht einfach: Ihr Element (Eingabe, Auswahl…) muss die CSS-Klasse eqLogicAttr (oder cmdAttr für Befehle) und ein Attribut haben, das den Namen der Eigenschaft angibt :

````html
<input type="text" class="eqLogicAttr form-control" data-l1key="name" placeholder="{{Nom de l'équipement mail}}"/>
````

Là, par exemple, lors du chargement des données jeedom mettra la valeur du nom de l'équipement dans l'input et lors de la sauvegarde récupérera celle-ci pour la remettre en base de données. Petite astuce certaines propriétés sont en fait des chaînes JSON en BDD (cela permet d'avoir vraiment pas mal de liberté pour le plugin), dans ce cas il suffit de faire :

````html
<input class="eqLogicAttr form-control" data-l1key='configuration' data-l2key='fromName' />
````

)

: .  :

. 

## JS

 !!!). ). .  :

````php
) {
    Wenn (!)) {
        : {}}
     }
    
      : 
    
      : 
      : 
     .id)) {
        
     }
     
    
     $('#table_cmd tbody').append(tr)
    $('#table_cmd tbody tr:last').setValues(_cmd, '.cmdAttr')
}
````

Vous remarquerez qu'il y a une ligne par commande et que celle-ci a bien la classe css cmd. Vous pouvez aussi voir les éléments qui ont la classe cmdAttr.

Plusieurs points importants :

- cette fonction peut être appelée avec un objet vide (d'où les 3 premières lignes) lors de l'ajout d'une nouvelle commande
- la dernière ligne permet d'initialiser tous les champs une fois la ligne insérée

Dernier point: un exemple plus complet avec type et sous-type de commande :

````php
) {
    Wenn (!)) {
        var _cmd = {}
    }
     Wenn (!.configuration)) {
        _cmd.configuration = {}
    }
     var selRequestType = '<select style="width : 90px" class="cmdAttr form-control input-sm" data-l1key="configuration" data-l2key="requestType">'
     selRequestType += '<option value="script">{{Script}}</option>'
     selRequestType += '<option value="http">{{Http}}</option>'
     selRequestType += '</select>'
    var tr = ''     tr += '<input class="cmdAttr form-control input-sm" data-l1key="name" style="width : 140px">'
    tr += '<input class="cmdAttr form-control input-sm" data-l1key="id"  style="display : 
    tr += '' + selRequestType
    tr += '<div class="requestTypeConfig" data-type="http">'
    tr += '<input type="checkbox" class="cmdAttr" data-l1key="configuration" data-l2key="noSslCheck" />Ne pas vérifier SSL'
    tr += '</div>'
         
    tr += '<span class="type" type="' + init(_cmd.type) + '">' + jeedom.cmd.availableType() + '</span>'
    tr += '<span class="subType" subType="' + init(_cmd.subType) + '"></span>'
         tr += '<textarea style="height : 95px" class="cmdAttr form-control input-sm" data-l1key="configuration" data-l2key="request"></textarea>'
    tr += '<a class="btn btn-default browseScriptFile cursor input-sm" style="margin-top : 5px"><i class="fa fa-folder-open"></i> {{Parcourir}}</a> '
    tr += '<a class="btn btn-default editScriptFile cursor input-sm" style="margin-top : 5px"><i class="fa fa-edit"></i> {{Editer}}</a> '
    tr += '<a class="btn btn-success newScriptFile cursor input-sm" style="margin-top : 5px"><i class="fa fa-file-o"></i> {{Nouveau}}</a> '
    tr += '<a class="btn btn-danger removeScriptFile cursor input-sm" style="margin-top : 5px"><i class="fa fa-trash-o"></i> {{Supprimer}}</a> '
    tr += '<a class="btn btn-warning bt_shareOnMarket cursor input-sm" style="margin-top : 5px"><i class="fa fa-cloud-upload"></i> {{Partager}}</a> '
    tr += '</div>'
         
    tr += '<input class="cmdAttr form-control tooltips input-sm" data-l1key="unite"  style="width : 100px" placeholder="{{Unité}}" title="{{Unité}}">'
    tr += '<input class="tooltips cmdAttr form-control input-sm" data-l1key="configuration" data-l2key="minValue" placeholder="{{Min}}" title="{{Min}}"> '
    tr += '<input class="tooltips cmdAttr form-control input-sm" data-l1key="configuration" data-l2key="maxValue" placeholder="{{Max}}" title="{{Max}}">'
         
    tr += '<span><input type="checkbox" class="cmdAttr" data-l1key="isHistorized" /> {{Historiser}}<br/></span>'
         
    .id)) {
    
    }
    
    
    $('#table_cmd tbody').append(tr)
    $('#table_cmd tbody tr:last').setValues(_cmd, '.cmdAttr')

    Wenn (.configuration.requestType)) {
        $('#table_cmd tbody tr:last .cmdAttr[data-l1key=configuration][data-l2key=requestType]').value(init(_cmd.configuration.requestType))
        $('#table_cmd tbody tr:last .cmdAttr[data-l1key=configuration][data-l2key=requestType]').trigger('change')
    }

     Wenn (.type)) {
        $('#table_cmd tbody tr:last .cmdAttr[data-l1key=type]').value(init(_cmd.type))
    }
     jeedom.cmd.changeType($('#table_cmd tbody tr:last'), init(_cmd.subType))
    initTooltips()
}
````

 :

- ``jeedom.cmd.availableType()`` )
- ``<span class="subType" subType="' + init(\_cmd.subType) + '"><\span>`` : 
- ``jeedom.cmd.changeType(\$('\#table\_cmd tbody tr:last'), init(\_cmd.subType))`` 

 :

- ``printEqLogic`` ). 
- ``saveEqLogic``  :

````php
<?php include_file('desktop', 'weather', 'js', 'weather') ?>
````

Le premier argument donne le dossier dans lequel le trouver (attention c'est le dossier père du dossier JS), le deuxième le nom de votre javascript, le troisième indique à Jeedom que c'est un fichier  et le dernier dans quel plugin il se trouve.

## CSS

Ce dossier contient vos fichiers CSS (il ne devrait pas être trop utilisé) , voHier comment les inclure sur votre page :

````php
<?php include_file('desktop', 'weather', 'css', 'weather') ?>
````

.

## MODAL

. ) :

 :

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

. 

#  : 

.

 :  : 

## PHP



## Template



## 

 [](https://github.com/jeedom/plugin-openzwave) )

## ajax

 :

````php
<?php

/* Diese Datei ist Teil von Jeedom.
 *
 * Jeedom ist kostenlose Software: Sie können es weitergeben und/oder ändern
 * es unter den Bedingungen der GNU General Public License, wie veröffentlicht von
 * die Free Software Foundation, entweder Version 3 der Lizenz oder
 * (nach Ihrer Wahl) jede spätere Version.
 *
 * Jeedom wird in der Hoffnung verbreitet, dass es nützlich sein wird,
 * aber OHNE JEGLICHE GARANTIE; ohne auch nur die implizite Garantie von
 * MARKTGÄNGIGKEIT oder EIGNUNG FÜR EINEN BESTIMMTEN ZWECK. Sehen Sie sich die
 * GNU General Public License für weitere Details.
 *
 * Sie sollten eine Kopie der GNU General Public License erhalten haben
 * zusammen mit Jeedom. If not, see <http://www.gnu.org/licenses/>.
 */

versuchen {
    
    

    Wenn (!isConnect('admin')) {
        
    }

    ') {
        ajax::
    }

     : ', 
    /*     * ************************ */
} catch (Ausnahme $e) {
    ajax::
}
?>
````

## class

Dossier très important, c'est le moteur de votre plugin. C'est là que viennent les 2 classes obligatoires de votre plugin :

- ````
- ``Cmd``

La première devant hériter de la classe eqLogic et la deuxième de cmd. VoHier un template :

````php
<?php

/* Diese Datei ist Teil von Jeedom.
 *
 * Jeedom ist kostenlose Software: Sie können es weitergeben und/oder ändern
 * es unter den Bedingungen der GNU General Public License, wie veröffentlicht von
 * die Free Software Foundation, entweder Version 3 der Lizenz oder
 * (nach Ihrer Wahl) jede spätere Version.
 *
 * Jeedom wird in der Hoffnung verbreitet, dass es nützlich sein wird,
 * aber OHNE JEGLICHE GARANTIE; ohne auch nur die implizite Garantie von
 * MARKTGÄNGIGKEIT oder EIGNUNG FÜR EINEN BESTIMMTEN ZWECK. Sehen Sie sich die
 * GNU General Public License für weitere Details.
 *
 * Sie sollten eine Kopie der GNU General Public License erhalten haben
 * zusammen mit Jeedom. If not, see <http://www.gnu.org/licenses/>.
 */

/* * ***************************Includes********************************* */


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

 [](https://doc.jeedom.com/dev/phpdoc/4.0/)

 :

````php
()) {
      Wenn (! !'])) {
          
      }
      $eqLogic = $this->getEqLogic()
      $message = ''
      '])) {
          $message = $_options['title'] . '. '
      }
      $message .= $_options['message']
      $http = new com_http($eqLogic->getConfiguration('addrSrvTts') . '/?tts=' . urlencode($message))
      
  }
  ````

Beispiel assez simple mais complet, le principe est le suivant, si la commande est une action ou une info (mais pas en événement seulement et que son  est dépassé) alors jeedom appelle cette méthode.

Dans notre exemple Hier c'est une commande pour faire parler S.A.R.A.H, où le plugin récupère les paramètres dans \$\_options (attention c'est un tableau et ses attributs changent en fonction du sous-type de la commande : color pour un sous-type color, slider pour un sous-type slider, title et message pour un sous-type message et vide pour un sous-type other).

Voila pour la partie obligatoire, voila maintenant ce qui peut être utilisé à coté (avec exemple) :

### toHtml(\$\_version = 'dashboard')

Fonction utilisable dans la commande ou dans l'équipement, en fonction des besoins, voHier un exemple pour l'équipement

````php
public function toHtml($_version = 'dashboard') {
    $replace = $this->preToHtml($_version)
    Wenn (!is_array($replace)) {
        return $replace
    }
    $version = jeedom::versionAlias($_version)
    $replace['#forecast#'] = ''
    Wenn ($version != 'mobile' || $this->getConfiguration('fullMobileDisplay', 0) == 1) {
        $forcast_template = getTemplate('core', $version, 'forecast', 'weather')
        for ($i = 0 $i < 5 $i++) {
            $replaceDay = array()
            $replaceDay['#day#'] = date_fr(date('l', strtotime('+' . $i . ' days')))

            Wenn ($i == 0) {
                $temperature_min = $this->getCmd(null, 'temperature_min')
            } else {
                $temperature_min = $this->getCmd(null, 'temperature_' . $i . '_min')
            }
            $replaceDay['#low_temperature#'] = is_object($temperature_min) ? $temperature_min->execCmd() : ''

            Wenn ($i == 0) {
                $temperature_max = $this->getCmd(null, 'temperature_max')
            } else {
                $temperature_max = $this->getCmd(null, 'temperature_' . $i . '_max')
            }
            $replaceDay['#hight_temperature#'] = is_object($temperature_max) ? $temperature_max->execCmd() : ''
            $replaceDay['#tempid#'] = is_object($temperature_max) ? $temperature_max->getId() : ''

            Wenn ($i == 0) {
                $condition = $this->getCmd(null, 'condition')
            } else {
                $condition = $this->getCmd(null, 'condition_' . $i)
            }
            $replaceDay['#icone#'] = is_object($condition) ? self::getIconFromCondition($condition->execCmd()) : ''
            $replaceDay['#conditionid#'] = is_object($condition) ? $condition->getId() : ''
            $replace['#forecast#'] .= template_replace($replaceDay, $forcast_template)
        }
    }
    $temperature = $this->getCmd(null, 'temperature')
    $replace['#temperature#'] = is_object($temperature) ? $temperature->execCmd() : ''
    $replace['#tempid#'] = is_object($temperature) ? $temperature->getId() : ''

    $humidity = $this->getCmd(null, 'humidity')
    $replace['#humidity#'] = is_object($humidity) ? $humidity->execCmd() : ''

    $pressure = $this->getCmd(null, 'pressure')
    $replace['#pressure#'] = is_object($pressure) ? $pressure->execCmd() : ''
    $replace['#pressureid#'] = is_object($pressure) ? $pressure->getId() : ''

    $wind_speed = $this->getCmd(null, 'wind_speed')
    $replace['#windspeed#'] = is_object($wind_speed) ? $wind_speed->execCmd() : ''
    $replace['#windid#'] = is_object($wind_speed) ? $wind_speed->getId() : ''

    $sunrise = $this->getCmd(null, 'sunrise')
    $replace['#sunrise#'] = is_object($sunrise) ? $sunrise->execCmd() : ''
    $replace['#sunid#'] = is_object($sunrise) ? $sunrise->getId() : ''
    Wenn (strlen($replace['#sunrise#']) == 3) {
        $replace['#sunrise#'] = substr($replace['#sunrise#'], 0, 1) . ':' . substr($replace['#sunrise#'], 1, 2)
    } else Wenn (strlen($replace['#sunrise#']) == 4) {
        $replace['#sunrise#'] = substr($replace['#sunrise#'], 0, 2) . ':' . substr($replace['#sunrise#'], 2, 2)
    }

    $sunset = $this->getCmd(null, 'sunset')
    $replace['#sunset#'] = is_object($sunset) ? $sunset->execCmd() : ''
    Wenn (strlen($replace['#sunset#']) == 3) {
        $replace['#sunset#'] = substr($replace['#sunset#'], 0, 1) . ':' . substr($replace['#sunset#'], 1, 2)
    } else Wenn (strlen($replace['#sunset#']) == 4) {
        $replace['#sunset#'] = substr($replace['#sunset#'], 0, 2) . ':' . substr($replace['#sunset#'], 2, 2)
    }

    $wind_direction = $this->getCmd(null, 'wind_direction')
    $replace['#wind_direction#'] = is_object($wind_direction) ? $wind_direction->execCmd() : 0

    $refresh = $this->getCmd(null, 'refresh')
    $replace['#refresh_id#'] = is_object($refresh) ? $refresh->getId() : ''

    $condition = $this->getCmd(null, 'condition_now')
    $sunset_time = is_object($sunset) ? $sunset->execCmd() : null
    $sunrise_time = is_object($sunrise) ? $sunrise->execCmd() : null
    Wenn (is_object($condition)) {
        $replace['#icone#'] = self::getIconFromCondition($condition->execCmd(), $sunrise_time, $sunset_time)
        $replace['#condition#'] = $condition->execCmd()
        $replace['#conditionid#'] = $condition->getId()
        $replace['#collectDate#'] = $condition->getCollectDate()
    } else {
        $replace['#icone#'] = ''
        $replace['#condition#'] = ''
        $replace['#collectDate#'] = ''
    }
    Wenn ($this->getConfiguration('modeImage', 0) == 1) {
        $replace['#visibilityIcon#'] = "none"
        $replace['#visibilityImage#'] = "block"
    } else {
        $replace['#visibilityIcon#'] = "block"
        $replace['#visibilityImage#'] = "none"
    }
    $html = template_replace($replace, getTemplate('core', $version, 'current', 'weather'))
    cache::set('widgetHtml' . $_version . $this->getId(), $html, 0)
    return $html
}
````

 :

)

````php
$_version = jeedom::versionAlias($_version)
````

Récupération d'un template de commande, Hier le template de commande : plugins/weather/core/template/\$\_version/forecast.html (\$\_version valant mobile ou dashboard)

````php
$forcast_template = getTemplate('core', $_version, 'forecast', 'weather')
````



````php
$html_forecast .= template_replace($replace, $forcast_template)
````

Cela permet de récupérer la commande ayant le logical\_Ausweis : temperature\_min

````php
$this->getCmd(null, 'temperature_min')
````



````php
$replace['#temperature#'] = is_object($temperature) ? $temperature->execCmd() : ''
````

Passage important: cela permet de récupérer les personnalisations faites par l'utilisateur sur la page Générale → Affichage et de les réinjecter dans le template

````php
$parameters = $this->getDisplay('parameters')
Wenn (is_array($parameters)) {
    foreach ($parameters as $key => $value) {
        $replace['#' . $key . '#'] = $value
    }
}
````

: ).

````php
cache::' . $_version . $this->getId(), $html, 0)
````

Enfin envoi du html à Jeedom :

````php
return $html
````

. .

. ).

: .

### 

 :

- ``preInsert`` 
- ``postInsert`` 
- ``preUpdate`` 
- ``postUpdate`` 
- ``preSave`` 
- ``postSave`` 
- ``preRemove`` 
- ``postRemove`` 

) :

````php
() {
      $weatherCmd = $this->getCmd(null, 'temperature')
      Wenn (!)) {
          $weatherCmd = new weatherCmd()
      }
      $weatherCmd->setName(__('Température', __FILE__))
      $weatherCmd->setLogicalId('temperature')
      $weatherCmd->setEqLogic_id($this->getId())
      $weatherCmd->setConfiguration('day', '-1')
      $weatherCmd->setConfiguration('data', 'temp')
      $weatherCmd->setUnite('°C')
      $weatherCmd->setType('info')
      $weatherCmd->setSubType('numeric')
      $weatherCmd->save()

      $cron = cron::byClassAndFunction('weather', 'updateWeatherData', array('weather_id' => intval($this->getId())))
      Wenn (!is_object($cron)) {
          $cron = new cron()
          $cron->setClass('weather')
          $cron->setFunction('updateWeatherData')
          $cron->setOption(array('weather_id' => intval($this->getId())))
      }
      $cron->setSchedule($this->getConfiguration('refreshCron', '*/30 * * * *'))
      $cron->save()
}
````

Le début est assez standard avec la création d'une commande, la fin est plus intéressante avec la mise en place d'un cron qui va appeler la méthode ``weather::updateWeatherData`` en passant l'Ausweis de l'équipement à mettre à jour toute les 30min par défaut.

Ici la méthode updateWeatherData (simplifiée aussi) :

````php
public static function updateWeatherData($_options) {
  $weather = weather::byId($_options['weather_id'])
  Wenn (is_object($weather)) {
      foreach ($weather->getCmd('info') as $cmd) {
        $weather->checkAndUpdateCmd($cmd,$cmd->execute())
      }
  }
}
````

.

 :

````php
$weather->checkAndUpdateCmd($cmd,$cmd->execute())
````

Au moment de la fonction ``checkAndUpdateCmd`` (qui permet de signaler à Jeedom une nouvelle mise à jour de la valeur, avec déclenchement de toutes les actions qui doivent être faites : mise à jour du dashboard, vérification des scénarios…​),

Pour la classe commande, un petit truc à savoir si vous utilisez le template  de base. Lors de l'envoi de l'équipement Jeedom fait du différentiel sur les commandes et va supprimer celles qui sont en base mais pas dans la nouvelle définition de l'équipement. Voilà comment l'éviter :

````php
public function dontRemoveCmd() {
  return true
}
````

 :

- )
- ) :

````php
$eqLogic->batteryStatus(56)
````

- Sur les commandes au moment de l'ajout d'une valeur Jeedom applique la méthode d'instance ``formatValue($_value)`` qui, en fonction du sous-type, peut la remettre en forme (en particulier pour les valeurs binaires)
- ne faites JAMAIS une méthode dans la class héritant de cmd s'appelant : execCmd ou event
- si dans la configuration de votre commande vous avez renseigné returnStateTime (en minute) et returnStateValue, Jeedom changera automatique la valeur de votre commande par returnStateValue au bout de X minute(s)
- toujours pour la commande vous pouvez utiliser addHistoryValue pour forcer la mise en historique (attention votre commande doit être historisée)
