# Entwickle auf Jeedom

> **IMPORTANT**
>
> Dieses Tutorial wurde von ZygOm4t1k geschrieben, dem wir herzlich danken. Sie finden das Original [hier](https://forum.jeedom.com/viewtopic.php?f=27&t=37630#p621495)

In diesem kurzen Tutorial wird erklärt, wie Sie ein Plugin erstellen. Für das Beispiel erstellen wir ein Plugin, das einen Satz von der viedemerde-Site zurückgibt.de (Das Plugin ist skalierbar).

Es ersetzt nicht die [Dokumentation officielle](https://jeedom.github.io/plugin-template/de_DE/)

# Erstellen Sie die Plugin-Basis

Zu Beginn müssen Sie einen Namen und eine ID bestimmen (die nicht existieren dürfen).

Name : Kacke das Leben
Identifikation : vdm

Laden Sie das Vorlagen-Plugin herunter, um das zu erhalten [Basis](https://github.com/jeedom/plugin-template/archive/master.zip)

Entpacken Sie die Datei . Vous obtiendrez un dossier « plugin-template-master » contenant des dossiers 3rparty , core , desktop…

Los geht's.

Renommer le dossier « plugin-template-master » In « vdm » (l'id) du plugin.

1 / Öffnen Sie die Datei plugin_info / info.json und bearbeiten Sie die.

````
{
    "id" : "vdm",
    "name" : "Kacke das Leben",
    "description" : "Plugin pour récupérer les dernières vdm",
    "licence" : "AGPL",
    "author" : "Zyg0m4t1k",
    "require" : "3.2",
    "category" : "monitoring",
    "changelog" : "",
    "documentation" : "",
    "language" : "",
    "compatibility" : ""
}
````

Kopieren Sie den obigen Code und fügen Sie ihn ein.

Ich habe die ID (vdm), den Namen, eine Beschreibung, den Autor und die Kategorie geändert.

erfordern : Mindestversion von jeedom, um Zugriff auf das Plugin auf dem Markt zu haben.

Änderungsprotokoll, Dokumentation, Sprache, Kompatibilität für den Moment null. Ich werde später darauf zurückkommen

2 / Wir werden die Dateien umbenennen, die erforderlich sind, damit das Plugin von Jeedom erkannt wird

-   Datei umbenennen ``core/ajax/template.ajax.php`` In ``vdm.ajax.php``

-   Datei umbenennen ``core/class/template.class.php`` In ``vdm.class.php`` und öffnen Sie es, um es zu bearbeiten.

- Ersetzen Sie ``class template extends eqLogic {``

    Von ``class vdm extends eqLogic {``

- und ``class templateCmd extends cmd``

    Von ``class vdmCmd extends cmd``

- Benennen Sie die Datei core / php / template.inc um.php to core / php / vdm.inc.php
- Benennen Sie die Desktop- / PHP- / Vorlagendatei um.PHP zu Desktop / PHP / VDM.PHP und öffne es.

- Ersetzen Sie ``$plugin = plugin::byId('template');``

    Mit ``$plugin = plugin::byId(‘vdm');``

- Ersetzen Sie ``{% raw %}{{Fügen Sie eine Vorlage hinzu}}{% endraw %}``

    Mit ``{% raw %}{{Ausrüstung hinzufügen}}{% endraw %}``

- Ersetzen {% raw %}`` <legend> {{Meine Vorlagen}} </legend> ``{% endraw %}

    Von {% raw %}`` <legend> {{Meine Ausrüstung}} </legend> ``{% endraw %}

- Ersetzen Sie ``{% raw %}{{Gerätename Vorlage}}{% endraw %}``

    Mit ``{% raw %}{{Name der Ausrüstung }}{% endraw %}``

- Ersetzen Sie ``{% raw %}{{Vorlage Parameter 1}}{% endraw %}``

    Mit ``{% raw %}{{Einstellungen}}{% endraw %}``

- Ersetzen Sie ``<?php include_file('desktop', 'template', 'js', 'template');?>``

    Mit ``<?php include_file('desktop', vdm, 'js', vdm);?>``

Und sonst nichts, ändern Sie nicht die Linie ``<?php include_file('core', 'plugin.template', 'js');?>``

-Datei umbenennen ``desktop/modal/modal.template.php`` In ``desktop/modal/modal.vdm.php``

-Datei umbenennen ``desktop/js/template.js`` In ``desktop/js/ vdm.js``

- Datei öffnen ``plugin_info/install.php``

Und benennen Sie die Funktionen wie folgt um

````
function vdm_install() {

}

function vdm_update() {

}


function vdm_remove() {

}
````

Hier ist das Plugin fertig, aber es bleibt die Anpassung und das zu aktualisierende Symbol : [Dokumentation](https://doc.jeedom.com/de_DE/dev/Icone_de_plugin)

Fügen Sie das Symbol im Ordner plugin_info unter dem Namen vdm_icon.png hinzu

in meinem Fall

![image](images/tutorial_vdm_icon.png)

Jetzt können wir den vdm-Ordner in den Jeedom-Plugin-Ordner kopieren und zur Plugin-Verwaltung gehen. Wir finden das Plugin.

![image](images/tutorial_vdm_plugin.png)

Wir aktivieren es und dann Plugins / Monitoring / Vie de Merde

![image](images/tutorial_vdm_desktop1.png)

Es ist nicht richtig, weil die Farbe der meisten nicht mit der Farbe des Symbols übereinstimmt.

Ich öffne die Datei ``desktop/php/desktop.php`` zu korrigieren.

````
{% raw %}
      <div class="cursor eqLogicAction" data-action="add" style="text-align: center; background-color : #ffffff; height : 120px;margin-bottom : 10px;padding : 5px;border-radius: 2px;width : 160px;margin-left : 10px;" >
        <i class="fa fa-plus-circle" style="font-size : 6em;color:#94ca02;"></i>
        <br>
        <span style="font-size : 1.1em;position:relative; top : 23px;word-break: break-all;white-space: pre-wrap;word-wrap: break-word;color:#94ca02">{{Ajouter}}</span>
      </div>
{% endraw %}
````

Ich ersetze ``color:#94ca02;"`` Von ``color:#00A9EC;"``

Wir stellen auch fest, dass die Texte nicht ausgerichtet sind, sodass wir den Stil der Konfiguration korrigieren (Eigenschaft top).

````
{% raw %}<span style="font-size : 1.1em;position:relative; top : 15px;word-break: break-all;white-space: pre-wrap;word-wrap: break-word;color:#767676">{{Configuration}}</span>{% endraw %}
````

par

````
{% raw %}<span style="font-size : 1.1em;position:relative;top : 23px;word-break: break-all;white-space: pre-wrap;word-wrap: break-word;color:#767676">{{Configuration}}</span>{% endraw %}
````

![image](images/tutorial_vdm_desktop2.png)

Hier ist die Basis fertig. Sie sollten das Asset-Plugin haben, aber im Moment tut es nichts.

# Bestellungen

Der Zweck des Plugins besteht darin, einen zufälligen vdm abzurufen und im Dashboard anzuzeigen.

Sie müssen daher einen Befehl vom Typ info erstellen, um diese Informationen zu speichern. Elle sera de sous-type « String » car c'est une chaîne de caractère.

Für das Beispiel fügen wir einen Befehl hinzu, der die Informationen aktualisiert. Es wird daher ein Aktionstypbefehl und ein anderer Subtyp sein.

-Créer un équipement « vdm1 » In cliquant sur le +. Aktivieren Sie es und machen Sie es sichtbar. Wählen Sie ein Objekt aus und die Ausrüstung muss im Dashboard angezeigt werden (je nach Objekt)..

Derzeit werden weder auf der Befehlsregisterkarte s noch im Widget Befehle angezeigt.

Öffnen Sie die Datei core / class / vdm.class.PHP und suchen Sie nach der Funktion postSave () (Lesen Sie das Template-Plugin-Dokument, falls noch nicht geschehen)

Wir erstellen die 2 Bestellungen

````
public function postSave() {
    $info = $this->getCmd(null, 'story');
    if (!is_object($info)) {
        $info = new vdmCmd();
        $info->setName(__('Histoire', __FILE__));
    }
    $info->setLogicalId('story');
    $info->setEqLogic_id($this->getId());
    $info->setType('info');
    $info->setSubType('string');
    $info->save();

    $refresh = $this->getCmd(null, 'refresh');
    if (!is_object($refresh)) {
        $refresh = new vdmCmd();
        $refresh->setName(__('Rafraichir', __FILE__));
    }
    $refresh->setEqLogic_id($this->getId());
    $refresh->setLogicalId('refresh');
    $refresh->setType('action');
    $refresh->setSubType('other');
    $refresh->save();
}
````

-Créer un autre équipement « vdm2 » In cliquant sur le +. Auf der Registerkarte Befehle wurden die Befehle angezeigt. Aktivieren Sie es und machen Sie es sichtbar. Wählen Sie ein übergeordnetes Objekt aus und sehen Sie, wie es im Dashboard aussieht.

-Enregistrer le premier équipement « vdm1 » pour créer les commandes. Siehe auch das Rendering im Widget.

Auf der Registerkarte Befehle sollten Sie sehen.

![image](images/tutorial_vdm_cmd1.png)

Öffnen Sie desktop / php / vdm.PHP, um den HTML-Code dieser Tabelle zu finden.

````
{% raw %}
<a class="btn btn-success btn-sm cmdAction pull-right" data-action="add" style="margin-top:5px;"><i class="fa fa-plus-circle"></i> {{Commandes}}</a><br/><br/>
<table id="table_cmd" class="table table-bordered table-condensed">
    <thead>
        <tr>
            <th>{{Nom}}</th><th>{{Type}}</th><th>{{Action}}</th>
        </tr>
    </thead>
    <tbody>
    </tbody>
</table>
{% endraw %}
````

Zum Zeitpunkt der Anzeige ist dies das Desktop / js / vdm-Skript.js, das aufgerufen wird und die Funktion addCmdToTable startet.

````
{% raw %}
function addCmdToTable(_cmd) {
    if (!isset(_cmd)) {
        var _cmd = {configuration: {}};
    }
    if (!isset(_cmd.configuration)) {
        _cmd.configuration = {};
    }
    var tr = '<tr class="cmd" data-cmd_id="' + init(_cmd.id) + '">';
    tr += '<td>';
    tr += '<span class="cmdAttr" data-l1key="id" style="display:none;"></span>';
    tr += '<input class="cmdAttr form-control input-sm" data-l1key="name" style="width : 140px;" placeholder="{{Nom}}">';
    tr += '</td>';
    tr += '<td>';
    tr += '<span class="type" type="' + init(_cmd.type) + '">' + jeedom.cmd.availableType() + '</span>';
    tr += '<span class="subType" subType="' + init(_cmd.subType) + '"></span>';
    tr += '</td>';
    tr += '<td>';
    if (is_numeric(_cmd.id)) {
        tr += '<a class="btn btn-default btn-xs cmdAction" data-action="configure"><i class="fa fa-cogs"></i></a> ';
        tr += '<a class="btn btn-default btn-xs cmdAction" data-action="test"><i class="fa fa-rss"></i> {{Tester}}</a>';
    }
    tr += '<i class="fa fa-minus-circle pull-right cmdAction cursor" data-action="remove"></i>';
    tr += '</td>';
    tr += '</tr>';
    $('#table_cmd tbody').append(tr);
    $('#table_cmd tbody tr:last').setValues(_cmd, '.cmdAttr');
    if (isset(_cmd.type)) {
        $('#table_cmd tbody tr:last .cmdAttr[data-l1key=type]').value(init(_cmd.type));
    }
    jeedom.cmd.changeType($('#table_cmd tbody tr:last'), init(_cmd.subType));
}
{% endraw %}
````

Dies erfolgt automatisch.

Ich möchte die Anzeige- und Protokolloptionen für jede Bestellung hinzufügen.

Ich bearbeite den HTML-Code der Tabelle in der Desktop-Datei.PHP durch Hinzufügen einer Spalte ..

````
{% raw %}<th>{{Nom}}</th><th>{{Type}}</th><th>{{Configuration}}</th><th>{{Action}}</th>{% endraw %}
````

Bearbeiten Sie dann den Desktop.js, finde

````
    tr += '<span class="subType" subType="' + init(_cmd.subType) + '"></span>';
    tr += '</td>';
    tr += '<td>';
    if (is_numeric(_cmd.id)) {
````

Wir fügen die gewünschten Informationen hinzu.

````
{% raw %}
    tr += '<span class="subType" subType="' + init(_cmd.subType) + '"></span>';
    tr += '</td>';
    tr += '<td>';
    tr += '<span><input type="checkbox" class="cmdAttr checkbox-inline" data-l1key="isHistorized" /> {{Historiser}}<br/></span>';
   tr += '<span><input type="checkbox" class="cmdAttr checkbox-inline" data-l1key="isVisible" /> {{Affichage}}<br/></span>';
   tr += '</td>';
    tr += '<td>';
    if (is_numeric(_cmd.id)) {
{% endraw %}
````

Ich lasse die Schaltfläche, um eine Bestellung zu erstellen, aber ich möchte, dass sie links ist.

````
{% raw %}<a class="btn btn-success btn-sm cmdAction pull-right" data-action="add" style="margin-top:5px;"><i class="fa fa-plus-circle"></i> {{Commandes}}</a><br/><br/>{% endraw %}
````

Ich ändere die Klasse Pull-Right in Pull-Left

````
{% raw %}<a class="btn btn-success btn-sm cmdAction pull-left" data-action="add" style="margin-top:5px;"><i class="fa fa-plus-circle"></i> {{Commandes}}</a><br/><br/>{% endraw %}
````

Hier ist das Rendering.Die Konfigurationsoptionen (Anzeige und Protokoll) sind vorhanden.

![image](images/tutorial_vdm_cmd2.png)

Hier bleibt es, einen zufälligen vdm wiederherzustellen und die Befehle zu verwenden.


# Informationsabruf

Um zufällig einen vdm abzurufen.

````
$url = "http://www.viedemerde.fr/aleatoire";
$data = file_get_contents($url);
@$dom = new DOMDocument();
libxml_use_internal_errors(false);
$dom->loadHTML('<?xml encoding="UTF-8">' .$data);
libxml_use_internal_errors(true);
$xpath = new DOMXPath($dom);
$divs = $xpath->query('//article[@class="art-panel col-xs-12"]//div[@class="panel-content"]//p//a');
return $divs[0]->nodeValue ;
````

Öffnen Sie die Datei core / class / vdm.class.php und für die Klasse vdm, die von egLogic-Methoden erbt, erstelle ich eine Funktion randomVdm

````
    public function randomVdm() {
        $url = "http://www.viedemerde.fr/aleatoire";
        $data = file_get_contents($url);
        @$dom = new DOMDocument();
        libxml_use_internal_errors(true);
        $dom->loadHTML($data);
        libxml_use_internal_errors(false);
        $xpath = new DOMXPath($dom);
        $divs = $xpath->query('//article[@class="art-panel col-xs-12"]//div[@class="panel-content"]//p//a');
        return $divs[0]->nodeValue ;
    }
````

Jetzt aktualisieren wir den Info-Befehl (Story) mit diesen Informationen, indem wir den Aktionsbefehl (Aktualisieren) starten..
Immer noch in core / class / vdm.class.PHP für die Klasse vdmCmd verwenden wir die Methode execute

````
public function execute($_options = array()) {


 }
````

C'est hier qu'on va définir ce qu'il va se passer quand on lance la commande « Rafraîchir ». Die Klasse vdmCmd hat alle Methoden der Klasse cmd (Core jeedom) geerbt.

On vérifie le logicalIdentifikation de la commande lancée und si « refresh » on lance les actions

````
switch ($this->getLogicalId()) {
    case 'refresh': // LogicalIdentifikation de la commande rafraîchir que l'on a créé dans la méthode Postsave de la classe vdm .
    // code pour rafraîchir ma commande
    break;
}
````

Jetzt muss noch die Funktion randomVdm () gestartet werden . Dazu rufen wir die eqLogic (Ausrüstung) aus dem Startbefehl ab und starten die Funktion

````
$eqlogic = $this->getEqLogic(); // Récupération de l'eqlogic
$info = $eqlogic-> randomVdm() ; //Lance la fonction und stocke le résultat dans la variable $info
````

On mund à jour la commande « story » avec la variable $info. Wir werden die checkAndUpdateCmd-Methode der eqlogic-Klasse verwenden

````
$eqlogic->checkAndUpdateCmd('story', $info);
````

Was am Ende gibt

````
    public function execute($_options = array()) {
        $eqlogic = $this->getEqLogic(); //récupère l'éqlogic de la commande $this
        switch ($this->getLogicalId()) {    //vérifie le logicalid de la commande
            case 'refresh': // LogicalIdentifikation de la commande rafraîchir que l'on a créé dans la méthode Postsave de la classe vdm .
                $info = $eqlogic->randomVdm();  //On lance la fonction randomVdm() pour récupérer une vdm und on la stocke dans la variable $info
                $eqlogic->checkAndUpdateCmd('story', $info); // on mund à jour la commande avec le LogicalIdentifikation "story"  de l'eqlogic
                break;
        }
    }
````

Gehen Sie nun zu einem erstellten Gerät und starten Sie den Befehl Aktualisieren. Puis la commande « Histoire » qui doit être à jour.

Im Dashboard werden Informationen angezeigt. Klicken Sie auf das Aktualisierungssymbol, um die Informationen zu ändern

Wir werden dann die Größe des Widgets definieren und es ein wenig anpassen

Automatisieren Sie dann die Aktualisierung.

# Informationen aktualisieren (cron)

Das Plugin ist funktionsfähig, macht aber im Moment nicht viel. Si vous cliquer sur la commande « refresh » , la commande « story » se mund à jour mais sinon rien.

Beachten Sie, dass ich es für die Bestellung mit logischer ID benenne. Und es ist wichtig. Eine eindeutige logische ID pro Gerät (eqLogic) vereinfacht die Arbeit.

Wir werden nun sehen, wie der Befehl mit den nativen Funktionen des Kerns aktualisiert wird : Crons

Es gibt mehrere :

- cron : jede Minute aktualisieren
- Cron5 : Alle 5 Minuten aktualisieren
- Cron15 : Alle 15 Minuten aktualisieren
- Cron30 : Alle 30 Minuten aktualisieren
- CronHourly : äh ... jede Stunde
- CronDaily : gut 1 / Tag

In Anbetracht des Plugins werden wir jede Stunde aktualisieren (lasst uns verrückt sein). Also werden wir die Funktion cronHourly () verwenden.

Wir werden daher die Datei vdm.class öffnen.PHP und Suche

````
    /*
     * Fonction exécutée automatiquement toutes les heures Von Jeedom
      public static function cronHourly() {

      }
     */
````

Kommentieren Sie den Code aus

````
      public static function cronHourly() {

      }
````

Unsere Funktion ist betriebsbereit

Jetzt müssen Sie alle Geräte von unserem Plugin wiederherstellen,

````
self::byType('vdm') //array contenant tous les équipements du plugin
````

und sortiere sie 1 nach 1

````
foreach (self::byType('vdm') as $vdm) {
}
````

Bevor wir etwas unternehmen, überprüfen wir, ob das Gerät aktiv ist

````
if ($vdm->getIsEnable() == 1) {
}
````

Voila maintenant on recherche la commande « refresh » de l'équipement (eqLogic)

````
$cmd = $vdm->getCmd(null, 'refresh');
````

Wenn es nicht existiert, setzen wir die Schleife (foreach) fort, andernfalls führen wir sie aus

````
if (!is_object($cmd)) {
continue;
}
$cmd->execCmd();
````

Was am Ende gibt

````
      public static function CronHourly () {
          foreach (self::byType('vdm') as $vdm) {//parcours tous les équipements du plugin vdm
              if ($vdm->getIsEnable() == 1) {//vérifie que l'équipement est actif
                  $cmd = $vdm->getCmd(null, 'refresh');//retourne la commande "refresh si elle existe
                  if (!is_object($cmd)) {//Si la commande n'existe pas
                    continue; //continue la boucle
                  }
                  $cmd->execCmd(); // la commande existe on la lance
              }
          }
      }
````

Pour tester, dans jeedom , aller dans configuration/moteur de tâches und lancer le cron de class « plugin » fonction « CronHourly »
Informationen werden aktualisiert.

Es ist gut, aber es passt nicht zu mir. A la création de l'équipement, la commande « story » ne se mund pas à jour.

Also verbessern wir den Code.

Für die Erstellung der Befehle haben wir die postSave () -Methode verwendet. Wir werden die postUpdate () -Methode verwenden, um die Informationen zu aktualisieren.

Der einfachste Weg, da es nur einen Befehl gibt und dieser in postSave erstellt wird

````
    public function postUpdate() {
        $cmd = $this->getCmd(null, 'refresh'); // On recherche la commande refresh de l'équipement
        if (is_object($cmd)) { //elle existe und on lance la commande
             $cmd->execCmd();
        }
    }
````

Sie müssen testen, es funktioniert?

Hier ist jedoch eine Alternative, die sich in komplexeren Fällen als nützlicher erweisen kann

In der Funktion postUpdate () starten wir die Funktion cronHourly () mit der Geräte-ID

````
    public function postUpdate() {
        self::cronHourly($this->getId());// lance la fonction CronHourly avec l'id de l'eqLogic
    }
````

In diesem Fall ändern wir jedoch die Funktion cronHourly ()

````
    public static function cronHourly($_eqLogic_id = null) {
        if ($_eqLogic_id == null) { // La fonction n'a pas d'argument donc on recherche tous les équipements du plugin
            $eqLogics = self::byType('vdm', true);
        } else {// La fonction a l'argument id(unique) d'un équipement(eqLogic)
            $eqLogics = array(self::byId($_eqLogic_id));
        }

        foreach ($eqLogics as $vdm) {
            if ($vdm->getIsEnable() == 1) {//vérifie que l'équipement est acitf
                $cmd = $vdm->getCmd(null, 'refresh');//retourne la commande "refresh si elle existe
                if (!is_object($cmd)) {//Si la commande n'existe pas
                  continue; //continue la boucle
                }
                $cmd->execCmd(); // la commande existe on la lance
            }
        }
    }
````

Anschließend können Sie die Häufigkeit des Cron entsprechend der Wichtigkeit der Wiederherstellung Ihrer Informationen ändern.

Ich kann Sie nur einladen, sich die Zeit zu nehmen, um auf dieser Seite mehr zu erfahren ==> [hier](https://jeedom.github.io/documentation/phpdoc/index.html)

Und noch besser, um zum Kern-Github zu gehen ==> [Hier](https://github.com/jeedom/core/tree/alpha/core/class)

Setzen Sie Ihre Nase ein, um noch mehr zu meistern .

Das Plugin ist so wie es ist funktionsfähig.

Ich werde mir die Zeit nehmen, um hinzuzufügen, wie ein benutzerdefiniertes Cron entsprechend der Ausrüstung eingerichtet wird .

# Das Widget

Das Widget ist keine leichte Aufgabe, aber wir bleiben vorerst beim Standard-Widget.

Wenn Sie nichts berührt haben, die Ausrüstung aktiviert und sichtbar ist, nimmt das Widget die gesamte Bildschirmbreite ein. Also werden wir es ändern.

La commande qui apparaît est la commande «story» de type info , sous-type string

Es ist mir ein Vergnügen, morgens aufzustehen und beim Aufwachen einen Vdm zu lesen. Es erlaubt mir zu sehen, dass es schlimmer ist als ich :D

Aber ich habe meine Brille nicht und momentan kann ich sie beim Rendern im Widget nicht lesen ...

Donc on va changer le style In affectant un template à la commande « story»

Nichts könnte einfacher sein.

Ich werde sehen ==> [Hier](https://github.com/jeedom/core/tree/alpha/core/template/dashboard)

Ich suche eine Vorlage für cmd.info.string (unser Befehl ist vom Typ info subtype string) .Nicht schwer, es gibt nur zwei (Standard oder Kachel)

J'applique le template « cmd.info.string.tile.html » à ma commande.

Dafür öffne ich die Datei vdm.class.php , fonction postSave() und j'ajoute le template « tile » pour la commande « story » In appliquant la méthode setTemplate()

````
        $info = $this->getCmd(null, 'story');
        if (!is_object($info)) {
            $info = new vdmCmd();
            $info->setName(__('Histoire', __FILE__));
        }
        $info->setLogicalId('story');
        $info->setEqLogic_id($this->getId());
        $info->setType('info');
        $info->setTemplate('dashboard','tile');//template pour le dashboard
        $info->setSubType('string');
        $info->save();
````

Aktualisieren Sie das Dasboard.

Es ist besser, aber das Widget nimmt immer die Breite des Dashboards an. Also werden wir korrigieren. Von défaut la largeur du widgund de l'équipement(eqLogic) und la hauteur sont à « auto ».

Wir werden daher die Breite des Widgets (Ausrüstung => eqLogic) mit der von der eqLogic-Klasse geerbten Methode setDisplay () ändern .Wir lassen die Höhe in Auto.

Fügen Sie dazu einfach hinzu

````
$this->setDisplay("width","800px");
````

Ja aber !! Weil es ein aber gibt. Versuchen Sie, dies in der Funktion postsave () oder postUpdate () hinzuzufügen, ohne die Änderung zu berücksichtigen. Warum ? Lesen Sie das Dokument des Vorlagen-Plugins ==> HIER

Nachdem Sie richtig gelesen haben, wissen Sie, dass Sie die preSave () -Methode verwenden müssen

````
    public function preSave() {
        $this->setDisplay("width","800px");
    }
````

Registrieren Sie Geräte und aktualisieren Sie das Dashboard.


# Die Parameter. Die Optionen

> **IMPORTANT**
>
>Dies ist ein wichtiges Kapitel, das Sie verstehen müssen, bevor Sie fortfahren.

Im Moment verwenden wir daher 3 Klassen des Kerns der Freiheit : EqLogic, cmd, cron . Gehen Sie für Informationen, Wir fügen ein 4. mit dem Klassen-Plugin in der vdm-Datei.PHP, dass Sie öffnen und offen lassen, weil wir es bearbeiten werden .

````
$plugin = plugin::byId('vdm'); // appelle la classe plugin du core
````

Sie müssen verstehen, dass alles getan wird, um unsere Arbeit zu erleichtern.

Für einen Parameter / eine Option innerhalb des Plugins verwenden wir eine der Methoden der Klasse eqLogic des Kerns : setConfiguration () durch Hinzufügen der gewünschten Parameter. Zum Beispiel :

````
$this->setConfiguration("type","mon_type"); // si on veut  définir un paramètre type de valeur mon_type. Comme on a défini la largeur du widgund via la méthode setDisplay()
````

Um die Auswahl dem Benutzer zu überlassen, kehren wir zur Desktop-Datei zurück.PHP, die Sie offen gelassen haben, weil Sie diesem TP buchstäblich folgen :D

Chercher

````
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="city" placeholder="param1"/>
````

Und ersetzen durch

````
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/> //Wichtig de laisser la classe eqLogicAttr
````

Speichern Sie und gehen Sie zu einem Plugin-Gerät, das Sie bereits erstellt haben, indem Sie dieser Übung folgen (ggf. aktualisieren)..

Dans le champs « Paramètre» d'un équipement, taper « aleatoire » und sauvegarder.

Perfekt ist die Einstellung gespeichert.

![image](images/tutorial_parametre1.png)


Es ist einfach, nein? . C'est pourquoi il ne faut surtout pas toucher à cette ligne de code comme indiqué dans le premier menu « test » . Er macht die ganze Arbeit

````
<?php include_file('core', 'plugin.template', 'js');?>//Chargement du fichier core/js/plugin.template.js (In partant de la racine du site)
````

Wenn Sie sich die Desktop-Datei genauer ansehen.PHP vor

````
                    <input type="text" class="eqLogicAttr form-control" data-l1key="id" style="display : none;" /> // retourne l'id(unique) de l'eqLogic(équipement) . Qu'on va pouvoir récupérer via $this->getId() ;
````

````
{% raw %}
                    <input type="text" class="eqLogicAttr form-control" data-l1key="name" placeholder="{{Name der Ausrüstung}}"/>// retourne le nom de l'eqLogic(équipement) . Qu'on va pouvoir récupérer via $this->getName() ;
{% endraw %}
````

Etc…

Wenn Sie das alles gut verstanden haben, können wir weitermachen. Aber zuerst werden wir die Datei desktop.php ändern

````
{% raw %}
<label class="col-sm-3 control-label">{{Paramètre}}</label>
{% endraw %}
````

Par

````
{% raw %}
<label class="col-sm-3 control-label">{{Type de vdm}}</label>
{% endraw %}
````

Wichtig : Der Text in geschweiften Klammern entspricht dem Text, der übersetzt wird, wenn Sie das Plugin auf den Markt bringen

Im Übrigen werden wir das Plugin weiterentwickeln, indem wir einen gewünschten vdm-Typ (zufällig oder scharf oder oben) sowie einen personalisierten Cron für jedes Gerät auswählen.

# Verwendung von Optionen / Parametern

Um weiter zu gehen und das vorherige Kapitel zu verstehen, überlassen wir es dem Benutzer, einen Typ von vdm auszuwählen (zufällig oder scharf oder oben).

On pourrait le laisser taper dans l'input « Type de vdm » : zufällig oder scharf oder oben, aber wir werden es anders machen, indem wir es über ein Auswahl-Tag auswählen lassen

Wenn Sie alles befolgt haben, sollten Sie in der Datei desktop.php haben

````
{% raw %}
       <div class="form-group">
        <label class="col-sm-3 control-label">{{Type de vdm}}</label>
        <div class="col-sm-3">
            <input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/>
        </div>
    </div>
{% endraw %}
````

Was wir ersetzen werden

````
{% raw %}
    <div class="form-group">
        <label class="col-sm-3 control-label" >{{ Type de vdm }}</label>
        <div class="col-sm-3">
            <select class="form-control eqLogicAttr" data-l1key="configuration" data-l2key="type ">
                <option value="aleatoire">{{Aleatoire}}</option>
                <option value="epicees">{{Coquin}}</option>
                <option value="tops">{{Best}}</option>
            </select>
        </div>
    </div>
{% endraw %}
````

Ici le paramètre « type» prendra la valeur du select choisi soit aleatoire ou epicees ou tops.


Jetzt werden wir unseren Parameter in der Funktion randomVdm () in der Datei vdm.class.php berücksichtigen

Chercher

````
$url = "http://www.viedemerde.fr/aleatoire";
````

Und ersetzen durch

````
    $type = $this->getConfiguration("type ");
        if($type == "") { //si le paramètre est vide ou n'existe pas
            $type = "aleatoire"; //on prends le type aleatoire
        }
        $url = "http://www.viedemerde.fr/" .$type  ;
````

Ändern Sie nun den Wert der Auswahl auf einem Gerät, speichern Sie und gehen Sie zum Dashboard, um zu sehen, was es gibt.
