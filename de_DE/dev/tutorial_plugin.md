# Um zu beginnen

> **WICHTIG**
>
> Dieses Tutorial wurde von ZygOm4t1k geschrieben, dem wir sehr danken. Sie können das Original finden [Hier](https://forum.jeedom.com/viewtopic.php?f=27&t=37630#p621495)

Hier ist eine kleine praktische Arbeit, die erklärt, wie man ein Plugin erstellt. Für das Beispiel erstellen wir ein Plugin, das einen Satz von der Site viedemerde zurückgibt.de .(Das Plugin wird skalierbar sein)

Es ersetzt in keiner Weise das [offizielle Dokumentation](https://doc.jeedom.com/de_DE/dev/)

# Erstellen Sie die Plugin-Basis

Zunächst müssen Sie einen Namen und eine ID festlegen (die nicht existieren dürfen))

Name : Beschissenes Leben
AUSWEIS : vdm

Laden Sie das Vorlagen-Plugin herunter, um das zu erhalten [Base](https://github.com/jeedom/plugin-template/archive/master.zip)

Entpacken Sie die Datei. Vous obtiendrez un dossier « plugin-template-master » contenant des dossiers 3rparty, core, desktop…

Auf geht's.

> **WICHTIG**
>
>Ein Konfigurationsassistent steht zur Verfügung, mit dem Sie Ihr Plugin schnell anpassen können.
>Mit diesem interaktiven Tool können Sie den Plugin-Namen einfach festlegen, angeben, ob ein Daemon erforderlich ist, und die automatische Änderung aller erforderlichen Dateien unterstützen.
>Seine Verwendung vereinfacht den Konfigurationsprozess und spart Ihnen wertvolle Zeit bei der Entwicklung Ihres Plugins.

👉 Um den Assistenten zu starten, öffnen Sie ein Terminal im Vorlagen-Plugin-Verzeichnis und führen Sie den folgenden Befehl aus :

„
phpplugin_info/helperConfiguration.php
„

Wenn Sie dieses Skript nicht verwenden möchten, können Sie die folgenden Schritte ausführen, um die Dateien umzubenennen.


Renommez le dossier « plugin-template-master » en « vdm » (l'id) du plugin.

1/ Öffnen Sie die Datei „plugin_info/info“.json und bearbeiten Sie es.

„json
{
  "id" : "vdm",
  "name" : "Beschissenes Leben",
  "description" : "Plugin zum Abrufen des neuesten VDM",
  "licence" : "AGPL",
  "author" : "Zyg0m4t1k",
  "require" : "3.3.39",
  "category" : "monitoring",
  "changelog" : "",
  "documentation" : "",
  "language" : "",
  "compatibility" : ""
}
„

Kopieren Sie den obigen Code und fügen Sie ihn ein.

Ich habe die ID geändert *(vdm)*, den Namen, eine Beschreibung, einen Autor und eine Kategorie hinzugefügt.

erfordern : Mindestversion von Jeedom, um Zugriff auf das Plugin auf dem Markt zu haben.

Changelog, Dokumentation, Sprache, Kompatibilität sind im Moment beschissen. Ich werde später darauf zurückkommen

2/ Wir werden die notwendigen Dateien umbenennen, damit das Plugin von Jeedom erkannt wird

- Benennen Sie die Datei core/ajax/template.ajax um.php nach vdm.ajax.php

- Benennen Sie die Datei core/class/template.class um.php zu vdm.class.php und öffnen Sie es zur Bearbeitung.

Remplacez

„php
Klassenvorlage erweitert eqLogic
„

par

„php
Die Klasse vdm erweitert eqLogic
„

------------------------

„php
Die Klasse templateCmd erweitert cmd
„

par

„php
Die Klasse vdmCmd erweitert cmd
„

- Benennen Sie die Datei core/php/template.inc um.php in core/php/vdm.inc.php
- Benennen Sie die Datei „desktop/php/template“ um.php zum Desktop /php/vdm.php und öffnen Sie es

Ersetzen :

„php
$plugin = plugin::byId('template');
„

Par

„php
$plugin = plugin::byId('vdm');
„

------------------------

„html
{% raw %}<legend><i class="fas fa-table"></i> {{Mes templates}}</legend>{% endraw %}
„

Par

„html
{% raw %}<legend><i class="fas fa-table"></i> {{Mes équipements}}</legend>{% endraw %}
„

------------------------

„php
<?php include_file('desktop', 'template', 'js', 'template');?>
„

Par

„php
<?php include_file('desktop', 'vdm', 'js', 'vdm');?>
„

Und sonst nichts , **Ändere die Zeile nicht** ``<?php include_file('core', 'plugin.template', 'js');?>``.

- Benennen Sie die Datei „desktop/modal/modal.template“ um.php in desktop/modal/modal.vdm.php

- Benennen Sie die Datei „desktop/js/template“ um.js nach desktop/js/vdm.js

- Öffnen Sie die Datei „plugin_info/install“.php und benennen Sie die Funktionen wie folgt um

„php
Funktion vdm_install() {
}

Funktion vdm_update() {
}

Funktion vdm_remove() {
}
„

Hier ist das Plugin fertig, aber es bleiben noch die Anpassung und das zu aktualisierende Symbol : [Entwicklerdokumentation – Plugin-Symbol](https://doc.jeedom.com/de_DE/dev/Icone_de_plugin)

Fügen Sie das Symbol unter dem Namen vdm_icon.png zum Ordner „plugin_info“ hinzu

in meinem Fall

![image](images/tutorial_vdm_icon.png)

Jetzt können wir den vdm-Ordner in den Jeedom-Plugin-Ordner kopieren und zur Plugin-Verwaltung gehen. Wir finden das Plugin.

![image](images/tutorial_vdm_plugin.png)

Wir aktivieren es und dann Plugins/Monitoring/Vie de Merde

Hier ist die Basis fertig. Sie sollten das Plugin aktiv haben, aber im Moment führt es nichts aus.

# Bestellungen

Das Ziel des Plugins besteht darin, einen zufälligen VDM abzurufen und ihn im Dashboard anzuzeigen.

Sie müssen daher einen Infotyp-Befehl erstellen, um diese Informationen zu speichern. Elle sera de sous-Art « string » car c'est une chaîne de caractère.

Für das Beispiel fügen wir einen Befehl hinzu, der die Informationen aktualisiert. Es handelt sich also um einen Befehl vom Typ „Aktion“ und vom Untertyp „Andere“

-Créez un équipement « vdm1 » en cliquant sur le +. Aktivieren Sie es und machen Sie es sichtbar. Wählen Sie einen Artikel aus und die Ausrüstung sollte auf dem Dashboard erscheinen (je nach Artikel)).

Derzeit werden weder auf der Registerkarte „Befehle“ noch im Widget Befehle angezeigt.

Öffnen Sie die Datei core/class/vdm.class.php und suchen Sie nach der postSave()-Funktion (Lesen Sie das Template-Plugin-Dokument, falls noch nicht geschehen)

Wir erstellen die 2 Bestellungen

„php
öffentliche Funktion postSave() {
  $Information = $this->getCmd(null, 'story');
  Wenn (!is_object($info)) {
    $Information = new vdmCmd();
    $info->setName(__('Histoire', __FILE__));
  }
  $info->setLogicalId('story');
  $info->setEqLogic_id($this->getId());
  $info->setType('info');
  $info->setSubType('string');
  $info->save();

  $refresh = $this->getCmd(null, 'refresh');
  Wenn (!is_object($refresh)) {
    $refresh = new vdmCmd();
    $refresh->setName(__('Rafraichir', __FILE__));
  }
  $refresh->setEqLogic_id($this->getId());
  $refresh->setLogicalId('refresh');
  $refresh->setType('action');
  $refresh->setSubType('other');
  $refresh->save();
}
„

- Créez un autre équipement « vdm2 » en cliquant sur le +. Auf der Registerkarte „Bestellungen“ wurden die Bestellungen angezeigt. Aktivieren Sie es und machen Sie es sichtbar. Wählen Sie ein übergeordnetes Objekt aus und sehen Sie, wie es auf dem Dashboard aussieht.

- Enregistrez le premier équipement « vdm1 » pour créer les commandes. Sehen Sie sich auch die Darstellung im Widget an.

Auf der Registerkarte „Bestellungen“ sollte Folgendes angezeigt werden:.

![image](images/tutorial_vdm_cmd1.png)

Öffnen Sie „desktop/php/vdm“.php, um den HTML-Code dieser Tabelle zu finden.

„html
{% raw %}
<!-- Onglet des commandes de l'équipement -->
<div role="tabpanel" class="tab-pane" id="commandtab">
<a class="btn btn-default btn-sm pull-right cmdAction" data-action="add" style="margin-top:5px;"><i class="fas fa-plus-circle"></i> {{Ajouter une commande}}</a>
<br/><br/>
<div class="table-responsive">
<table id="table_cmd" class="table table-bordered table-condensed">
<thead>
<tr>
<th>{{Id}}</th>
<th>{{Nom}}</th>
<th>{{Type}}</th>
<th>{{Paramètres}}</th>
<th>{{Options}}</th>
<th>{{Action}}</th>
</tr>
</thead>
<tbody>
</tbody>
</table>
</div>
</div><!-- /.tabpanel #commandtab-->
{% endraw %}
„

Zur Anzeigezeit ist es das Skript „desktop/js/vdm“.js, das aufgerufen wird und die Funktion addCmdToTable startet.

„html
{% raw %}
/* Funktion, die die Anzeige von Befehlen im Gerät ermöglicht */
Funktion addCmdToTable(_cmd) {
  Wenn (!isset(_cmd)) {
    var _cmd = { Konfiguration: {} };
  }
  Wenn (!isset(_cmd.configuration)) {
    _cmd.configuration = {};
  }
  var tr = '.id) + '">';
  tr += ':60px;">';
  tr += '<span class="cmdAttr" data-l1key="id"></span> ';
  tr += '</td> ';
  tr += ':300px;Breite:350px;">';
  tr += '<div class="row"> ';
  tr += '<div class="col-xs-7"> ';
  tr += '<input class="cmdAttr form-control input-sm" data-l1key="name" placeholder="{{Nom de la commande}}">';
  tr += ' : keine;margin-top : 5px;" title="{{Auftragsbezogene Informationen}}">';
  tr += '<option value=""> {{Keiner}}</option> ';
  tr += '</select> ';
  tr += '</div> ';
  tr += '<div class="col-xs-5"> ';
  tr += ' <a class="cmdAction btn btn-default btn-sm" data-l1key="chooseIcon"><i class="fas fa-flag"></i>{{Symbol}}</a> ';
  tr += ' : 10px;"> ';
  tr += '</div> ';
  tr += '</div> ';
  tr += '</td> ';
  tr += '<td> ';
  tr += '.Typ) + '">' + jeedom.cmd.availableType() + ' ';
  tr += '.subType) + '"> ';
  tr += '</td> ';
  tr += ':150px;Breite:350px;">';
  tr += '.}}" title="{{Min.}}" style="width:30%;display:inline-block;"/> ';
  tr += '.}}" title="{{Max.}}" style="width:30%;display:inline-block;"/> ';
  tr += ':30%;display:inline-block;"/>';
  tr += '</td> ';
  tr += ':80px;Breite:350px;">';
  tr += ' <label class="checkbox-inline"><input type="checkbox" class="cmdAttr" data-l1key="isVisible" checked/>{{Anzeige}}</label> ';
  tr += ' <label class="checkbox-inline"><input type="checkbox" class="cmdAttr" data-l1key="isHistorized" checked/>{{Geschichte}}</label> ';
  tr += ' <label class="checkbox-inline"><input type="checkbox" class="cmdAttr" data-l1key="display" data-l2key="invertBinary"/>{{Umkehren}}</label> ';
  tr += '</td> ';
  tr += ':80px;Breite:200px;">';
  if (is_numeric(_cmd.id)) {
    tr += '<a class="btn btn-default btn-xs cmdAction" data-action="configure"><i class="fas fa-cogs"></i></a> ';
    tr += ' <a class="btn btn-default btn-xs cmdAction" data-action="test"><i class="fas fa-rss"></i>Prüfen</a> ';
  }
  tr += '<i class="fas fa-minus-circle pull-right cmdAction cursor" data-action="remove"></i></td> ';
  tr += '</tr> ';
  $('#table_cmd tbody').append(tr);
  var tr = $('#table_cmd tbody tr').last();
  jeedom.eqLogic.builSelectCmd({
    id: $('.eqLogicAttr[data-l1key=id]').value(),
    filter: { type: 'info' },
    error: Funktion (Fehler) {
      $('#div_alert').showAlert({ message: Fehler.message, level: 'danger' });
    },
    success: Funktion (Ergebnis) {
      tr.find('.cmdAttr[data-l1key=value]').append(result);
      tr.setValues(_cmd, '.cmdAttr');
      jeedom.cmd.changeType(tr, init(_cmd.subType));
    }
  });
}
{% endraw %}
„

Dies geschieht automatisch.

Das war's, es bleibt nur noch, einen zufälligen VDM abzurufen und die Befehle zu verwenden.

# Abrufen von Informationen

Um einen VDM zufällig abzurufen.

„php
$url = "http://www.viedemerde.fr/aleatoire";
$data = file_get_contents($url);
@$dom = new DOMDocument();
libxml_use_internal_errors(false);
$dom->loadHTML('<?xml encoding="UTF-8">' .$data);
libxml_use_internal_errors(true);
$xpath = new DOMXPath($dom);
$divs = $xpath->query('//article[@class="art-panel col-xs-12"]//div[@class="panel-content"]//p//a');
return $divs[0]->nodeValue;
„

Öffnen Sie die Datei core/class/vdm.class.php und für die vdm-Klasse, die die egLogic-Methoden erbt, erstelle ich eine randomVdm-Funktion

„php
öffentliche Funktion randomVdm() {
  $url = "http://www.viedemerde.fr/aleatoire";
  $data = file_get_contents($url);
  @$dom = new DOMDocument();
  libxml_use_internal_errors(true);
  $dom->loadHTML($data);
  libxml_use_internal_errors(false);
  $xpath = new DOMXPath($dom);
  $divs = $xpath->query('//article[@class="art-panel col-xs-12"]//div[@class="panel-content"]//p//a');
  return $divs[0]->nodeValue;
}
„

Jetzt aktualisieren wir den Befehl info(story) mit diesen Informationen, indem wir den Befehl action(refresh) starten).
Immer noch in core/class/vdm.class.php für die vdmCmd-Klasse verwenden wir die Methode „execute“

„php
öffentliche Funktionexecute($_options = array()) {
}
„

C'est Hier qu'on va définir ce qu'il va se passer quand on actionne la commande « Rafraîchir ». Die vdmCmd-Klasse hat alle Methoden der cmd-Klasse geerbt (Core jeedom)

On vérifie le logicalAUSWEIS de la commande lancée et si « refresh » on lance les actions

„php
switch ($this->getLogicalId()) {
  Fall 'aktualisieren'': //Logische ID des Aktualisierungsbefehls, den wir in der Postsave-Methode der vdm-Klasse erstellt haben .
  //Code zum Aktualisieren meiner Bestellung
  break;
}
„

Jetzt muss noch die Funktion randomVdm ausgeführt werden(). Dazu rufen wir die eqLogic (Ausrüstung) des Befehls ab und führen die Funktion aus.

„php
$eqlogic = $this->getEqLogic(); //Récupération de l'eqlogic
$Information = $eqlogic->randomVdm() ; //Lance la fonction et stocke le résultat dans la variable $info
„

On met à jour la commande « story » avec la variable $info. Wir werden die Methode checkAndUpdateCmd der Klasse eqlogic verwenden

„php
$eqlogic->checkAndUpdateCmd('story', $info);
„

Was letztendlich ergibt

„php
öffentliche Funktionexecute($_options = array()) {
  $eqlogic = $this->getEqLogic(); //récupère l'éqlogic de la commande $this
  switch ($this->getLogicalId()) { //überprüft die logische ID des Befehls
    Fall 'aktualisieren'': // LogicalId des Aktualisierungsbefehls, den wir in der Postsave-Methode der vdm-Klasse erstellt haben .
    $Information = $eqlogic->randomVdm(); //On lance la fonction randomVdm() pour récupérer une vdm et on la stocke dans la variable $info
    $eqlogic->checkAndUpdateCmd('story', $info); //on met à jour la commande avec le LogicalAUSWEIS "story"  de l'eqlogic
    break;
  }
}
„

Gehen Sie nun zu einem erstellten Gerät und führen Sie den Befehl „Aktualisieren“ aus. Puis la commande « Histoire » qui doit être à jour.

Auf dem Dashboard werden die Informationen angezeigt. Klicken Sie auf das Aktualisierungssymbol, um die Informationen zu ändern.

Anschließend definieren wir die Größe des Widgets, passen es ein wenig an und automatisieren dann die Aktualisierung.

# Informationen aktualisieren (cron)

Das Plugin ist funktionsfähig, macht aber im Moment nicht viel. Si vous cliquez sur la commande « refresh » , la commande « story » se met à jour mais sinon rien.

Beachten Sie, dass ich den Befehl mit logicalId benenne. Und es ist wichtig. Eine eindeutige logische ID pro Gerät (eqLogic) vereinfacht die Dinge.

Wir werden nun sehen, wie der Befehl mithilfe der nativen Kernfunktionen aktualisiert wird : Die Crons

Es gibt mehrere :

- cron : Jede Minute aktualisieren
- cron5 : alle 5 Minuten aktualisieren
- cron15 : alle 15 Minuten aktualisieren
- cron30 : alle 30 Minuten aktualisieren
- cronHourly : stündlich
- cronDaily : 1/jour

Angesichts des Plugins werden wir jede Stunde ein Update durchführen (seien wir verrückt)). Wir werden daher die Funktion cronHourly verwenden().

Wir werden daher die Datei vdm.class öffnen.PHP und Suche

„php
/*
* Funktion wird von Jeedom stündlich automatisch ausgeführt
öffentliche statische Funktion cronHourly() {
}
*/
„

Kommentieren Sie den Code aus

„php
öffentliche statische Funktion cronHourly() {
}
„

Unsere Funktion ist operativ

Jetzt müssen wir alle aktiven Geräte von unserem Plugin wiederherstellen,

„php
self::byType('vdm', true) //Array, das die gesamte Plugin-Ausrüstung enthält. Das zweite Argument, ein boolescher Wert, ermöglicht Ihnen, nur die aktive Ausrüstung abzurufen, wenn true, oder die gesamte Ausrüstung, wenn false (Standard))
„

und gehen Sie sie einzeln durch

„php
foreach (selbst::byType('vdm', true) als $vdm) {
}
„

Voila maintenant on recherche la commande « refresh » de l'équipement (eqLogic)

„php
$cmd = $vdm->getCmd(null, 'refresh');
„

Wenn es nicht existiert, setzen wir die Schleife fort (foreach), andernfalls führen wir es aus

„php
Wenn (!is_object($cmd)) {
  continue;
}
$cmd->execCmd();
„

Was letztendlich ergibt

„php
öffentliche statische Funktion cronHourly () {
  foreach (selbst::byType('vdm', true) as $vdm) { //Alle aktiven Geräte des VDM-Plugins durchsuchen
    $cmd = $vdm->getCmd(null, 'refresh'); //retourne la commande "refresh" si elle existe
    Wenn (!is_object($cmd)) { //Wenn der Befehl nicht existiert
    geht weiter; //Setze die Schleife fort
  }
  $cmd->execCmd(); //la commande existe on la lance
}
}
„

Pour tester, dans jeedom, allez dans configuration/moteur de tâches et lancer le cron de class « plugin » fonction « cronHourly »
Informationsaktualisierungen.

Es ist gut, aber es passt nicht zu mir. A la création de l'équipement, la commande « story » ne se met pas à jour.

Also verbessern wir den Code.

Für die Erstellung von Bestellungen haben wir die postSave-Methode verwendet(). Wir werden die Methode postUpdate() verwenden, um die Informationen zu aktualisieren.

Der einfachste Weg, da es nur einen Befehl gibt und dieser in postSave erstellt wird

„php
öffentliche Funktion postUpdate() {
  $cmd = $this->getCmd(null, 'refresh'); //On recherche la commande refresh de l'équipement
  if (is_object($cmd)) { //es existiert und wir starten den Befehl
    $cmd->execCmd();
  }
}
„

Das muss man testen, es funktioniert?

Aber hier ist eine Alternative, die sich in komplexeren Fällen als nützlicher erweisen kann

In der Funktion postUpdate() starten wir die Funktion cronHourly() mit der Geräte-ID

„php
öffentliche Funktion postUpdate() {
  self::cronHourly($this->getId()); //starten Sie die cronHourly-Funktion mit der eqLogic-ID
}
„

Aber in diesem Fall ändern wir die cronHourly-Funktion()

„php
öffentliche statische Funktion cronHourly($_eqLogic_id = null) {
  if ($_eqLogic_id == null) { //Die Funktion hat kein Argument, also suchen wir nach der gesamten Plugin-Ausrüstung
    $eqLogics = self::byType('vdm', true);
    } else { //Die Funktion hat das Argument id(unique) eines Geräts(eqLogic)
      $eqLogics = array(self::byId($_eqLogic_id));
    }

    foreach ($eqLogics als $vdm) {
      $cmd = $vdm->getCmd(null, 'refresh'); //retourne la commande "refresh si elle existe
      Wenn (!is_object($cmd)) { //Wenn der Befehl nicht existiert
      geht weiter; //Setze die Schleife fort
    }
    $cmd->execCmd(); //la commande existe on la lance
  }
}
„

Anschließend können Sie die Cron-Frequenz je nach Wichtigkeit der wiederherzustellenden Informationen ändern.

Ich kann Sie nur einladen, sich die Zeit zu nehmen, diese Seite zu besuchen, um mehr zu erfahren ==> [Hier](https://doc.jeedom.com/dev/phpdoc/4.1/)

Und noch besser, zum Kern-Github zu gehen ==> [HIER](https://github.com/jeedom/core)

Stecken Sie Ihre Nase hinein, um noch mehr zu meistern .

Das Plugin ist so wie es ist funktionsfähig.

Ich werde mir die Zeit nehmen, hinzuzufügen, wie man je nach Ausrüstung einen benutzerdefinierten Cron einrichtet .

# Das Widget

Keine leichte Aufgabe, das Widget, aber wir bleiben vorerst beim Standard-Widget.

Wenn Sie nichts berührt haben, die Ausrüstung aktiviert und sichtbar ist, nimmt das Widget die gesamte Breite des Bildschirms ein. Also werden wir es ändern.

La commande qui apparaît est la commande «story» de Art info, sous-Art string.

Es macht mir Freude, morgens aufzustehen und nach dem Aufwachen einen VDM zu lesen. Dadurch kann ich erkennen, dass es Menschen gibt, die schlimmer sind als ich :D

Aber ich habe meine Brille nicht und die Darstellung im Widget erlaubt mir derzeit nicht, es zu lesen

Donc on va changer le style en affectant un template à la commande « story»

Nichts könnte einfacher sein.

Ich werde sehen ==> [HIER](https://github.com/jeedom/core/tree/alpha/core/template/dashboard)

Ich suche eine Vorlage für cmd.info.string( unser Befehl ist vom Typ info-Subtyp string) .Nicht schwierig, es gibt nur zwei (Standard oder Kachel))

J'applique le template « cmd.info.string.tile.html » à ma commande.

Dazu öffne ich die Datei vdm.class.php , fonction postSave() et j'ajoute le template « tile » pour la commande « story » en appliquant la méthode setTemplate()

„php
$Information = $this->getCmd(null, 'story');
Wenn (!is_object($info)) {
  $Information = new vdmCmd();
  $info->setName(__('Histoire', __FILE__));
}
$info->setLogicalId('story');
$info->setEqLogic_id($this->getId());
$info->setType('info');
$info->setTemplate('dashboard','tile');//template pour le dashboard
$info->setSubType('string');
$info->save();
„

Aktualisieren Sie das Dashboard.

Es ist besser, aber das Widget nimmt immer noch die Breite des Dashboards ein. Wir werden daher korrigieren. Von défaut la largeur du widget de l'équipement(eqLogic) et la hauteur sont à « auto ».

Wir werden daher die Breite des Widgets (Equipment => eqLogic) mithilfe der von der eqLogic-Klasse geerbten Methode setDisplay() ändern .Die Höhe belassen wir auf Auto.

Dazu einfach hinzufügen

„php
$this->setDisplay("width","800px");
„

Ja, aber !! Denn es gibt ein Aber. Versuchen Sie, dies zur Funktion postsave() oder postUpdate() hinzuzufügen, da die Änderung nicht berücksichtigt wird. Wofür ? Nun, Sie müssen das Template-Plugin-Dokument ==>HIER lesen

Nachdem Sie nun richtig gelesen haben, wissen Sie, dass Sie die preSave-Methode verwenden müssen()

„php
öffentliche Funktion preSave() {
  $this->setDisplay("width","800px");
}
„

Registrieren Sie Geräte und aktualisieren Sie das Dashboard.

# Einstellungen. Die Optionen

> **WICHTIG**
>
> Dies ist ein wichtiges Kapitel und Sie müssen es verstehen, bevor Sie fortfahren.

Im Moment haben wir daher 3 Klassen aus dem Kern von Jeedom verwendet : EqLogic, cmd, cron. Gehen Sie zur Info, wir fügen eine vierte mit der Plugin-Klasse in der VDM-Datei hinzu.php, die Sie öffnen und offen lassen, weil wir sie bearbeiten werden.

„php
$plugin = plugin::byId('vdm'); // appelle la classe plugin du core
„

Wir müssen verstehen, dass alles getan wird, um unsere Aufgabe zu erleichtern.

Für einen Parameter/eine interne Option des Plugins verwenden wir eine der Methoden der Kernklasse eqLogic: setConfiguration() durch Hinzufügen der gewünschten Parameter. Zum Beispiel:

„php
$this->setConfiguration("type","mon_type"); // si on veut définir un paramètre Art de valeur mon_type. Comme on a défini la largeur du widget via la méthode setDisplay()
„

Um dem Benutzer die Wahl zu überlassen, kehren wir zur Desktop-Datei zurück.php, die Sie offen gelassen haben, weil Sie diese Praxis wörtlich befolgen :D

Cherchez

„html
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="city" placeholder="param1"/>
„

Und ersetzen durch

„html
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/> //Wichtig de laisser la classe eqLogicAttr
„

Speichern Sie und wechseln Sie zu einem Plugin-Gerät, das Sie bereits erstellt haben, indem Sie diesem TP folgen (bei Bedarf aktualisieren)).

Dans le champs «Paramètre» d'un équipement, tapez «aléatoire» et sauvegardez.

Perfekt, die Einstellung ist gespeichert.

![image](images/tutorial_parametre1.png)

Es ist einfach, nein? . C'est pourquoi il ne faut surtout pas toucher à cette ligne de code comme indiqué dans le premier menu « test ». Er ist derjenige, der die ganze Arbeit macht

„php
<?php include_file('core', 'plugin.template', 'js');?> //Chargement du fichier core/js/plugin.template.js (en partant de la racine du site)
„

Wenn Sie sich die Desktop-Datei genauer ansehen.php vor

„html
<input type="text" class="eqLogicAttr form-control" data-l1key="id" style="display:none;" /> // retourne l'id(unique) de l'eqLogic(équipement) que l'on va pouvoir récupérer via $this->getId() ;
„

„html
{% raw %}<input type="text" class="eqLogicAttr form-control" data-l1key="name" placeholder="{{Name de l'équipement}}"/>// retourne le nom de l'eqLogic(équipement) que l'on va pouvoir récupérer via $this->getName();{% endraw %}
„

Etc…

Wenn Sie das alles verinnerlicht haben, können wir weitermachen. Aber zuerst werden wir die Datei „desktop.php“ ändern

„html
{% raw %}<label class="col-sm-3 control-label">{{Paramètre}}</label>{% endraw %}
„

Par

„html
{% raw %}<label class="col-sm-3 control-label">{{Type de vdm}}</label>{% endraw %}
„

Wichtig : Der Text in geschweiften Klammern entspricht dem Text, der übersetzt wird, wenn Sie das Plugin auf den Markt bringen.

Im Übrigen werden wir das Plugin weiterentwickeln, indem wir einen VDM-Typ (Random oder Spicy oder Tops) auswählen, den wir wollen, sowie einen personalisierten Cron für jedes Gerät.

# Verwenden von Optionen/Einstellungen

Um weiterzugehen und das vorherige Kapitel vollständig zu verstehen, erlauben wir dem Benutzer, einen VDM-Typ auszuwählen (zufällig oder würzig oder Spitzen))

On pourrait le laisser taper dans l'input « Type de vdm » : zufällig oder scharf oder Spitzen, aber wir machen es anders, indem wir ihn über ein Select-Tag auswählen lassen

Wenn Sie alles befolgt haben, sollten Sie die Datei „desktop.php“ gefunden haben

„html
{% raw %}
<div class="form-group">
  <label class="col-sm-3 control-label">{{Type de vdm}}</label>
  <div class="col-sm-3">
    <input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/>
  </div>
</div>
{% endraw %}
„

Womit wir es ersetzen werden

„html
{% raw %}
<div class="form-group">
  <label class="col-sm-3 control-label" >{{ Type de vdm }}</label>
  <div class="col-sm-3">
    <select class="form-control eqLogicAttr" data-l1key="configuration" data-l2key="Art ">
      <option value="aleatoire">{{Aleatoire}}</option>
      <option value="epicees">{{Coquin}}</option>
      <option value="tops">{{Best}}</option>
    </select>
  </div>
</div>
{% endraw %}
„

Ici le paramètre «type» prendra la valeur du select choisi soit aleatoire ou epicees ou tops.

Jetzt berücksichtigen wir unseren Parameter in der Funktion randomVdm() in der Datei vdm.class.php

Cherchez

„php
$url = "http://www.viedemerde.fr/aleatoire";
„

Und ersetzen durch

„php
$Art = $this->getConfiguration("type", "aleatoire"); //si le paramètre est vide ou n'existe pas, on prends le Art aleatoire
$url = "http://www.viedemerde.fr/{$type}";
„

Ändern Sie nun den ausgewählten Wert für ein Gerät, speichern Sie und gehen Sie zum Dashboard, um zu sehen, was das ergibt.
