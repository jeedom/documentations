# Beginnen

> **Wichtig**
>
> Dieses Tutorial wurde von ZygOm4t1k geschrieben, dem wir aufrichtig danken. Sie finden das Original [hier](https://forum.jeedom.com/viewtopic.php?f=27&t=37630#p621495)

In diesem kurzen Tutorial wird erklärt, wie Sie ein Plugin erstellen. Für das Beispiel erstellen wir ein Plugin, das einen Satz von der viedemerde-Site zurückgibt.Fr .(Das Plugin wird skalierbar sein)

Es ersetzt nicht die [offizielle Dokumentation](https://doc.jeedom.com/de_DE/dev/)

# Erstellen Sie die Plugin-Basis

Zu Beginn müssen Sie einen Namen und eine ID ermitteln (die nicht existieren dürfen))

Name : Kacke das Leben
Identifikation : vdm

Laden Sie das Vorlagen-Plugin herunter, um das zu erhalten [Basis](https://github.com/jeedom/plugin-template/archive/master.zip)

Entpacken Sie die Datei. Vous obtiendrez un dossier « plugin-template-master » contenant des dossiers 3rparty, core, desktop…

Los geht's.

Renommez le dossier « plugin-template-master » en « vdm » (l'id) du plugin.

1 / Öffnen Sie die Datei plugin_info / info.json und bearbeiten Sie die.

`` ``json
{
  "id" : "vdm",
  "name" : "Kacke das Leben",
  "description" : "Plugin zum Abrufen des neuesten vdm",
  "licence" : "AGPL",
  "author" : "Zyg0m4t1k",
  "require" : "3.3.39",
  "category" : "monitoring",
  "changelog" : "",
  "documentation" : "",
  "language" : "",
  "compatibility" : ""
}
`` ``

Kopieren Sie den obigen Code und fügen Sie ihn ein.

Ich habe die ID geändert *(vdm)*, Name, hinzugefügte Beschreibung, Autor und Kategorie.

erfordern : Mindestversion von jeedom, um Zugriff auf das Plugin auf dem Markt zu haben.

Changelog, Dokumentation, Sprache, Kompatibilität im Moment null. Ich komme später darauf zurück

2 / Wir werden die Dateien umbenennen, die für die Erkennung des Plugins von Jeedom erforderlich sind

- Benennen Sie die Datei core / ajax / template.ajax um.php zu vdm.ajax.php

- Benennen Sie die Datei core / class / template.class um.php zu vdm.class.php und öffnen Sie es, um es zu bearbeiten.

Remplacez

`` ``php
Klassenvorlage erweitert eqLogic
`` ``

par

`` ``php
Klasse vdm erweitert eqLogic
`` ``

------------------------

`` ``php
class templateCmd erweitert cmd
`` ``

par

`` ``php
Klasse vdmCmd erweitert cmd
`` ``

- Benennen Sie die Datei core/php/template.inc um.php im Kern / php / vdm.inc.php
- Benennen Sie die Desktop- / PHP- / Vorlagendatei um.php zum Desktop / php / vdm.php und öffne es

Ersetzen :

`` ``php
$plugin = plugin::byId('template');;
`` ``

Par

`` ``php
$plugin = plugin::byId('vdm');;
`` ``

------------------------

`` ``html
{% raw %}<legend><i class="fas fa-table"></i> {{Mes templates}}</legend>{% endraw %}
`` ``

Par

`` ``html
{% raw %}<legend><i class="fas fa-table"></i> {{Mes équipements}}</legend>{% endraw %}
`` ``

------------------------

`` ``php
<?php include_file('desktop', 'template', 'js', 'template');;?>
`` ``

Par

`` ``php
<?php include_file('desktop', 'vdm', 'js', 'vdm');;?>
`` ``

Und sonst nichts , **ändere nicht die Zeile** ``<?php include_file('core', 'plugin.template', 'js');;?>``.

- Benennen Sie die Datei desktop / modal / modal.template um.php zum Desktop / modal / modal.vdm.php

- Benennen Sie die Desktop- / js- / Vorlagendatei um.js zum Desktop / js / vdm.js

- Öffne die plugin_info / install-Datei.php und benennen Sie die Funktionen wie folgt um

`` ``php
Funktion vdm_install() {
}

Funktion vdm_update() {
}

Funktion vdm_remove() {
}
`` ``

Hier ist das Plugin fertig, aber es bleibt die Anpassung und das zu aktualisierende Symbol : [Entwicklerdokumentation - Plugin-Symbol](https://doc.jeedom.com/de_DE/dev/Icone_de_plugin)

Fügen Sie das Symbol im Ordner plugin_info unter dem Namen vdm_icon.png hinzu

in meinem Fall

![image](images/tutorial_vdm_icon.png)

Jetzt können wir den vdm-Ordner in den Jeedom-Plugin-Ordner kopieren und zur Plugin-Verwaltung gehen. Wir finden das Plugin.

![image](images/tutorial_vdm_plugin.png)

Wir aktivieren es und dann Plugins / Monitoring / Vie de Merde

Hier ist die Basis fertig. Sie sollten das Plugin aktiv haben, aber im Moment tut es nichts.

# Die Bestellungen

Das Ziel des Plugins ist es, einen zufälligen vdm abzurufen und auf dem Dashboard anzuzeigen.

Es ist daher notwendig, einen Befehl vom Typ info zu erstellen, um diese Informationen zu speichern. Elle sera de sous-Art « string » car c'est une chaîne de caractère.

Für das Beispiel fügen wir einen Befehl hinzu, der die Informationen aktualisiert. Es wird daher ein Befehl vom Aktionstyp und ein anderer Untertyp sein

-Créez un équipement « vdm1 » en cliquant sur le +. Aktivieren und sichtbar machen. Wählen Sie einen Artikel und die Ausrüstung sollte auf dem Dashboard erscheinen (je nach Artikel).

Im Moment gibt es keine Befehle, die auf der Registerkarte Befehle oder im Widget angezeigt werden.

Öffnen Sie die Datei core/class/vdm.class.php und suchen Sie nach der Funktion postSave() (Lesen Sie das Template-Plugin-Dokument, falls noch nicht geschehen)

Wir erstellen die 2 Bestellungen

`` ``php
öffentliche Funktion postSpeichern() {
  $die Info = $this->getCmd(null, 'story');;
  Eibe (!is_object ($ info)) {
    $die Info = new vdmCmd();;
    $info->setName(__('Histoire', __FILE__));;
  }
  $info->setLogicalId('story');;
  $info->setEqLogic_id($this->getId());;
  $info->setType('info');;
  $info->setSubType('string');;
  $info->save();;

  $refresh = $this->getCmd(null, 'refresh');;
  Eibe (!is_object ($ aktualisieren)) {
    $refresh = new vdmCmd();;
    $refresh->setName(__('Rafraichir', __FILE__));;
  }
  $refresh->setEqLogic_id($this->getId());;
  $refresh->setLogicalId('refresh');;
  $refresh->setType('action');;
  $refresh->setSubType('other');;
  $refresh->save();;
}
`` ``

- Créez un autre équipement « vdm2 » en cliquant sur le +. Auf der Registerkarte Befehle wurden die Befehle angezeigt. Aktivieren und sichtbar machen. Wählen Sie ein übergeordnetes Objekt aus und sehen Sie, wie es im Dashboard aussieht.

- Enregistrez le premier équipement « vdm1 » pour créer les commandes. Siehe auch das Rendering im Widget.

Auf der Registerkarte Bestellungen sollten Sie sehen:.

![image](images/tutorial_vdm_cmd1.png)

Öffnen Sie desktop / php / vdm.PHP, um den HTML-Code dieser Tabelle zu finden.

`` ``html
{% raw %}
<!-- Onglet des commandes de l'équipement -->
<div role="tabpanel" class="tab-pane" id="commandtab">
<a class="btn btn-default btn-sm pull-right cmdAction" data-action="add" style="margin-top:5px;;"><i class="fas fa-plus-circle"></i> {{Ajouter une commande}}</a>
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
`` ``

Zum Zeitpunkt der Anzeige ist dies das Desktop / js / vdm-Skript.js, das aufgerufen wird und die Funktion addCmdToTable startet.

`` ``html
{% raw %}
/* Funktion zur Anzeige von Befehlen im Gerät */
Funktion addCmdToTable (_cmd) {
  Eibe (!isset (_cmd)) {
    var _cmd = {Konfiguration: {} };;
  }
  Eibe (!isset (_cmd.configuration)) {
    _cmd.configuration = {};
  }
  <html>var tr = '.id) + '">';
  <html>tr + = ':60px; "> ';
  tr + = '<span class="cmdAttr" data-l1key="id"></span> ';
  tr + = '</td> ';
  <html>tr + = ':300px; Breite:350px; "> ';
  tr + = '<div class="row"> ';
  tr + = '<div class="col-xs-7"> ';
  tr + = '<input class="cmdAttr form-control input-sm" data-l1key="name" placeholder="{{Nom de la commande}}">';
  <html>tr + = ' : keine; Rand-oben : 5px; "title =" {{Befehlsbezogene Informationen}} "> ';
  tr + = '<option value=""> {{Irgendein}}</option> ';
  tr + = '</select> ';
  tr + = '</div> ';
  tr + = '<div class="col-xs-5"> ';
  tr + = ' <a class="cmdAction btn btn-default btn-sm" data-l1key="chooseIcon"><i class="fas fa-flag"></i>{{Symbol}}</a> ';
  <html>tr + = ' : 10px; "> ';
  tr + = '</div> ';
  tr + = '</div> ';
  tr + = '</td> ';
  tr + = '<td> ';
  <html>tr + = '.Typ) + '">' + jeedom.cmd.availableType () + '';
  <html>tr + = '.Subtyp) + '">';
  tr + = '</td> ';
  <html>tr + = ':150px; Breite:350px; "> ';
  <html>tr + = '.}}" title = "{{Min.}}" Stil = "Breite:30%;;display:Inline-Block; "/> ';
  <html>tr + = '.}}" title = "{{Max.}}" Stil = "Breite:30%;;display:Inline-Block; "/> ';
  <html>tr + = ':30%;;display:Inline-Block; "/> ';
  tr + = '</td> ';
  <html>tr + = ':80px; Breite:350px; "> ';
  tr + = ' <label class="checkbox-inline"><input type="checkbox" class="cmdAttr" data-l1key="isVisible" checked/>{{Zeigen}}</label> ';
  tr + = ' <label class="checkbox-inline"><input type="checkbox" class="cmdAttr" data-l1key="isHistorized" checked/>{{Historisieren}}</label> ';
  tr + = ' <label class="checkbox-inline"><input type="checkbox" class="cmdAttr" data-l1key="display" data-l2key="invertBinary"/>{{Invertieren}}</label> ';
  tr + = '</td> ';
  <html>tr + = ':80px; Breite:200px; "> ';
  if (is_numeric (_cmd.id)) {
    tr + = '<a class="btn btn-default btn-xs cmdAction" data-action="configure"><i class="fas fa-cogs"></i></a> ';
    tr + = ' <a class="btn btn-default btn-xs cmdAction" data-action="test"><i class="fas fa-rss"></i>Testen</a> ';
  }
  tr + = '<i class="fas fa-minus-circle pull-right cmdAction cursor" data-action="remove"></i></td> ';
  tr + = '</tr> ';
  $('#table_cmd tbody').append(tr);;
  var tr = $ ('# table_cmd tbody tr').last();
  jeedom.eqLogic.builSelectCmd({
    id: $('.eqLogicAttr[data-l1key=id]').value(),
    filter: { type: 'info' },
    error: Funktion (Fehler) {
      $('#div_alert').showAlert({ message: Error.message, level: 'danger' });;
    },
    success: Funktion (Ergebnis) {
      tr.find ('. cmdAttr [data-l1key = Wert]').append (Ergebnis);
      tr.setValues (_cmd, '.cmdAttr');
      jeedom.cmd.changeType (tr, init (_cmd.subType));
    }
  });;
}
{% endraw %}
`` ``

Es passiert automatisch.

Hier bleibt es, einen zufälligen vdm wiederherzustellen und die Befehle zu verwenden.

# Informationsrückgewinnung

Um einen vdm zufällig abzurufen.

`` ``php
$url = "http://www.viedemerde.fr/aleatoire";;
$data = file_get_contents($url);;
@$dom = new DOMDocument();;
libxml_use_internal_errors (false);
$dom->loadHTML('<?xml encoding="UTF-8">' .$data);;
libxml_use_internal_errors (true);
$xpath = new DOMXPath($dom);;
$divs = $xpath->query('//article[@class="art-panel col-xs-12"]//div[@class="panel-content"]//p//a');;
return $ divs [0] -> nodeValue;
`` ``

Öffnen Sie die Datei core/class/vdm.class.php und für die vdm-Klasse, die von egLogic-Methoden erbt, erstelle ich eine randomVdm-Funktion

`` ``php
öffentliche Funktion randomVdm() {
  $url = "http://www.viedemerde.fr/aleatoire";;
  $data = file_get_contents($url);;
  @$dom = new DOMDocument();;
  libxml_use_internal_errors (true);
  $dom->loadHTML($data);;
  libxml_use_internal_errors (false);
  $xpath = new DOMXPath($dom);;
  $divs = $xpath->query('//article[@class="art-panel col-xs-12"]//div[@class="panel-content"]//p//a');;
  return $ divs [0] -> nodeValue;
}
`` ``

Jetzt aktualisieren wir den Befehl info (story) mit diesen Informationen, indem wir den Befehl action (refresh).
Immer noch in core / class / vdm.class.PHP für die Klasse vdmCmd verwenden wir die Methode execute

`` ``php
public function execute ($ _ options = array()) {
}
`` ``

C'est hier qu'on va définir ce qu'il va se passer quand on actionne la commande « Rafraîchir ». Die vdmCmd-Klasse hat alle Methoden von der cmd-Klasse geerbt (Core jeedom)

On vérifie le logicalIdentifikation de la commande lancée et si « refresh » on lance les actions

`` ``php
switch ($ this-> getLogicalId()) {
  Fall 'aktualisieren': // LogicalId des Refresh-Befehls, den wir in der Postsave-Methode der vdm-Klasse erstellt haben .
  // Code zum Auffrischen meiner Bestellung
  break;;
}
`` ``

Jetzt muss noch die randomVdm-Funktion ausgeführt werden(). Dazu rufen wir die eqLogic (das Equipment) der Steuerung ab und führen die Funktion aus.

`` ``php
$eqlogic = $this->getEqLogic();; //Récupération de l'eqlogic
$die Info = $eqlogic->randomVdm() ;; //Lance la fonction et stocke le résultat dans la variable $info
`` ``

On met à jour la commande « story » avec la variable $info. Wir verwenden die Methode checkAndUpdateCmd der Klasse eqlogic

`` ``php
$eqlogic->checkAndUpdateCmd('story', $info);;
`` ``

Was letztendlich gibt

`` ``php
public function execute ($ _ options = array()) {
  $eqlogic = $this->getEqLogic();; //récupère l'éqlogic de la commande $this
  switch ($ this-> getLogicalId ()) {// Überprüfe die logische ID des Befehls
    Fall 'aktualisieren': // LogicalId des Aktualisierungsbefehls, den wir in der Postsave-Methode der vdm-Klasse erstellt haben .
    $die Info = $eqlogic->randomVdm();; //On lance la fonction randomVdm() pour récupérer une vdm et on la stocke dans la variable $info
    $eqlogic->checkAndUpdateCmd('story', $info);; //on met à jour la commande avec le LogicalIdentifikation "story"  de l'eqlogic
    break;;
  }
}
`` ``

Gehen Sie nun zu einem erstellten Gerät und führen Sie den Befehl Aktualisieren aus. Puis la commande « Histoire » qui doit être à jour.

Auf dem Dashboard erscheinen die Informationen. Klicken Sie auf das Aktualisierungssymbol, um die Informationen zu ändern.

Wir werden dann die Größe des Widgets definieren und es ein wenig anpassen und dann die Aktualisierung automatisieren.

# Informationen aktualisieren (cron)

Das Plugin ist funktionsfähig, aber im Moment macht es nicht viel. Si vous cliquez sur la commande « refresh » , la commande « story » se met à jour mais sinon rien.

Beachten Sie, dass ich für den Befehl den Namen von logicId bezeichne. Und das ist wichtig. Eine eindeutige logischeId pro Gerät (eqLogic) zu haben, vereinfacht die Dinge.

Wir werden nun sehen, wie Sie den Befehl mit den nativen Funktionen des Kerns aktualisieren : Crons

Es gibt mehrere davon :

- cron : Erfrischung jede Minute
- cron5 : Erfrischung alle 5 Minuten
- cron15 : Erfrischung alle 15 Minuten
- cron30 : Erfrischung alle 30 Minuten
- cronStündlich : jede Stunde
- cronDaily : 1/jour

Angesichts des Plugins werden wir jede Stunde aktualisieren (seien wir verrückt .)). Wir werden daher die cronHourly-Funktion verwenden().

Wir werden daher die Datei vdm.class öffnen.php und suchen

`` ``php
/*
* Funktion wird von Jeedom automatisch stündlich ausgeführt
öffentliche statische Funktion cronHourly() {
}
*/
`` ``

Entkommentieren Sie den Code

`` ``php
öffentliche statische Funktion cronHourly() {
}
`` ``

Unsere Funktion ist operativ

Jetzt müssen wir alle aktiven Geräte unseres Plugins wiederherstellen,

`` ``php
self::byType ('vdm', true) // Array, das alle Geräte des Plugins enthält, das zweite Argument, ein boolescher Wert, ermöglicht es, nur die aktiven Geräte abzurufen, wenn wahr oder alle Geräte, wenn falsch)
`` ``

und durchsuchen Sie sie 1 für 1

`` ``php
foreach (selbst::byType ('vdm', true) als $ vdm) {
}
`` ``

Voila maintenant on recherche la commande « refresh » de l'équipement (eqLogic)

`` ``php
$cmd = $vdm->getCmd(null, 'refresh');;
`` ``

Wenn es nicht existiert, setzen wir die Schleife fort (foreach), ansonsten führen wir sie aus

`` ``php
Eibe (!is_object ($ cmd)) {
  continue;;
}
$cmd->execCmd();;
`` ``

Was letztendlich gibt

`` ``php
öffentliche statische Funktion cronHourly () {
  foreach (selbst::byType ('vdm', true) als $ vdm) {// alle aktiven Geräte des vdm-Plugins durchsuchen
    $cmd = $vdm->getCmd(null, 'refresh');; //retourne la commande "refresh" si elle existe
    Eibe (!is_object ($ cmd)) {// Wenn der Befehl nicht existiert
    mach weiter; // setze die Schleife fort
  }
  $cmd->execCmd();; //la commande existe on la lance
}
}
`` ``

Pour tester, dans jeedom, allez dans configuration/moteur de tâches et lancer le cron de class « plugin » fonction « cronStündlich »
Informationsaktualisierungen.

Es ist gut, aber es passt nicht zu mir. A la création de l'équipement, la commande « story » ne se met pas à jour.

Wir verbessern daher den Code.

Für die Erstellung der Bestellungen haben wir die Methode postSave verwendet(). Wir verwenden die Methode postUpdate(), um die Informationen zu aktualisieren.

Der einfachste Weg, da es nur einen Befehl gibt und dieser in postSave erstellt wird

`` ``php
öffentliche Funktion postUpdate() {
  $cmd = $this->getCmd(null, 'refresh');; //On recherche la commande refresh de l'équipement
  if (is_object ($ cmd)) {// es existiert und wir führen den Befehl aus
    $cmd->execCmd();;
  }
}
`` ``

Sie müssen testen, es funktioniert?

Aber hier ist eine Alternative, die sich in komplexeren Fällen als nützlicher erweisen kann

In der Funktion postUpdate () starten wir die Funktion cronHourly () mit der Geräte-ID

`` ``php
öffentliche Funktion postUpdate() {
  self::cronHourly ($ this-> getId ()); // starte die cronHourly-Funktion mit der eqLogic-ID
}
`` ``

Aber in diesem Fall ändern wir die cronHourly-Funktion()

`` ``php
öffentliche statische Funktion cronHourly ($ _ eqLogic_id = null) {
  if ($ _eqLogic_id == null) {// Die Funktion hat kein Argument, also suchen wir nach der gesamten Ausrüstung des Plugins
    $eqLogics = self::byType('vdm', true);;
    } else {// Die Funktion hat die (eindeutige) Argument-ID eines Geräts (eqLogic)
      $eqLogics = array(self::byId($_eqLogic_id));;
    }

    foreach ($ eqLogics als $ vdm) {
      $cmd = $vdm->getCmd(null, 'refresh');; //retourne la commande "refresh si elle existe
      Eibe (!is_object ($ cmd)) {// Wenn der Befehl nicht existiert
      mach weiter; // setze die Schleife fort
    }
    $cmd->execCmd();; //la commande existe on la lance
  }
}
`` ``

Anschließend können Sie die Häufigkeit des Cron entsprechend der Wichtigkeit der Wiederherstellung Ihrer Informationen ändern.

Ich kann Sie nur einladen, sich die Zeit zu nehmen, um auf dieser Seite mehr zu erfahren ==> [hier](https://doc.jeedom.com/dev/phpdoc/4.1/)

Und noch besser, um zum Kern-Github zu gehen ==> [Hier](https://github.com/jeedom/core)

Steck deine Nase rein, um noch mehr zu meistern .

Das Plugin funktioniert wie es ist.

Ich werde mir die Zeit nehmen, um die Möglichkeit hinzuzufügen, einen benutzerdefinierten Cron entsprechend der Ausrüstung einzurichten .

# Das Widget

Das Widget ist keine leichte Aufgabe, aber wir bleiben vorerst beim Standard-Widget.

Wenn Sie nichts berührt haben, die Ausrüstung aktiviert und sichtbar ist, nimmt das Widget die gesamte Bildschirmbreite ein. Also werden wir es ändern.

La commande qui apparaît est la commande «story» de Art info, sous-Art string.

Es ist mir ein Vergnügen, morgens aufzuwachen und morgens einen Vdm zu lesen. Es erlaubt mir zu sehen, dass es schlimmer ist als ich :D

Aber ich habe meine Brille nicht und beim Rendern im Widget kann ich sie nicht lesen

Donc on va changer le style en affectant un template à la commande « story»

Nichts ist einfacher.

Ich werde sehen ==> [Hier](https://github.com/jeedom/core/tree/alpha/core/template/dashboard)

Ich suche eine Vorlage für cmd.info.string (unser Befehl ist vom Typ info subtype string) .Nicht schwer, es gibt nur zwei (Standard oder Kachel)

J'applique le template « cmd.info.string.tile.html » à ma commande.

Dafür öffne ich die Datei vdm.class.php , fonction postSave() et j'ajoute le template « tile » pour la commande « story » en appliquant la méthode setTemplate()

`` ``php
$die Info = $this->getCmd(null, 'story');;
Eibe (!is_object ($ info)) {
  $die Info = new vdmCmd();;
  $info->setName(__('Histoire', __FILE__));;
}
$info->setLogicalId('story');;
$info->setEqLogic_id($this->getId());;
$info->setType('info');;
$info->setTemplate('dashboard','tile');;//template pour le dashboard
$info->setSubType('string');;
$info->save();;
`` ``

Aktualisieren Sie das Dashboard.

Es ist besser, aber das Widget nimmt immer die Breite des Dashboards ein. Wir werden daher korrigieren. Von défaut la largeur du widget de l'équipement(eqLogic) et la hauteur sont à « auto ».

Wir werden daher die Breite des Widgets (Equipment => eqLogic) mit der setDisplay()-Methode ändern, die von der eqLogic-Klasse geerbt wurde .Wir lassen die Höhe im Auto.

Fügen Sie dazu einfach hinzu

`` ``php
$this->setDisplay("width","800px");;
`` ``

Ja aber !! Weil es ein aber gibt. Versuchen Sie, dies in der Funktion postsave () oder postUpdate () hinzuzufügen, ohne die Änderung zu berücksichtigen. Warum ? Ben muss das Template Plugin doc ==> HIER lesen

Nachdem Sie das richtig gelesen haben, wissen Sie, dass Sie die preSave-Methode verwenden müssen()

`` ``php
öffentliche Funktion preSave() {
  $this->setDisplay("width","800px");;
}
`` ``

Geräte registrieren und Dashboard aktualisieren.

# Einstellungen. Die Optionen

> **Wichtig**
>
> Dies ist ein wichtiges Kapitel und Sie müssen es verstehen, bevor Sie fortfahren können.

Im Moment müssen wir daher 3 Klassen des Kerns von jeedom verwenden : EqLogic, cmd, cron. Gehen Sie für Informationen, wir fügen eine 4. mit dem Klassen-Plugin in der vdm-Datei hinzu.php, die Sie öffnen und offen lassen, weil wir sie bearbeiten werden.

`` ``php
$plugin = plugin::byId('vdm');; // appelle la classe plugin du core
`` ``

Sie müssen verstehen, dass alles getan wird, um unsere Arbeit zu erleichtern.

Für einen Parameter / eine Option innerhalb des Plugins verwenden wir eine der Methoden der eqLogic-Klasse des Kerns: setConfiguration () durch Hinzufügen der gewünschten Parameter. Zum Beispiel:

`` ``php
$this->setConfiguration("type","mon_type");; // si on veut définir un paramètre Art de valeur mon_type. Comme on a défini la largeur du widget via la méthode setDisplay()
`` ``

Um dem Benutzer die Wahl zu überlassen, gehen wir zurück zur Desktop-Datei.php, die Sie offen gelassen haben, weil Sie dieser TP genau folgen :D

Cherchez

`` ``html
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="city" placeholder="param1"/>
`` ``

Und ersetzen durch

`` ``html
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/> //Wichtig de laisser la classe eqLogicAttr
`` ``

Speichern Sie ein Plug-in-Gerät, das Sie bereits erstellt haben, und rufen Sie es auf, indem Sie dieser Übung folgen (bei Bedarf aktualisieren).

Dans le champs «Paramètre» d'un équipement, tapez «aléatoire» et sauvegardez.

Perfekt der Parameter ist gespeichert.

![image](images/tutorial_parametre1.png)

Es ist einfach, nein? . C'est pourquoi il ne faut surtout pas toucher à cette ligne de code comme indiqué dans le premier menu « test ». Er ist derjenige, der die ganze Arbeit macht

`` ``php
<?php include_file('core', 'plugin.template', 'js');;?> //Chargement du fichier core/js/plugin.template.js (en partant de la racine du site)
`` ``

Wenn Sie sich die Desktop-Datei genauer ansehen.PHP vor

`` ``html
<input type="text" class="eqLogicAttr form-control" data-l1key="id" style="display:none;;" /> // retourne l'id(unique) de l'eqLogic(équipement) que l'on va pouvoir récupérer via $this->getId() ;;
`` ``

`` ``html
{% raw %}<input type="text" class="eqLogicAttr form-control" data-l1key="name" placeholder="{{Name de l'équipement}}"/>// retourne le nom de l'eqLogic(équipement) que l'on va pouvoir récupérer via $this->getName();;{% endraw %}
`` ``

Etc…

Wenn Sie das alles gut verstanden haben, können wir weitermachen. Aber zuerst werden wir die Datei desktop.php ändern

`` ``html
{% raw %}<label class="col-sm-3 control-label">{{Paramètre}}</label>{% endraw %}
`` ``

Par

`` ``html
{% raw %}<label class="col-sm-3 control-label">{{Type de vdm}}</label>{% endraw %}
`` ``

Wichtig : Der Text in geschweiften Klammern entspricht dem Text, der übersetzt wird, wenn Sie das Plugin auf den Markt bringen.

Im Übrigen entwickeln wir das Plugin, indem wir eine Art von vdm (zufällig oder scharf oder tops) auswählen, die wir wollen, sowie einen personalisierten Cron für jedes Gerät.

# Verwendung von Optionen / Parametern

Um weiter zu gehen und das vorherige Kapitel zu verstehen, werden wir dem Benutzer erlauben, eine Art von vdm auszuwählen (zufällig oder scharf oder tops .))

On pourrait le laisser taper dans l'input « Type de vdm » : zufällig oder scharf oder oben, aber wir werden es anders machen, indem wir es über ein Auswahl-Tag auswählen lassen

Wenn Sie alles befolgt haben, was Sie in der Datei desktop.php haben sollten

`` ``html
{% raw %}
<div class="form-group">
  <label class="col-sm-3 control-label">{{Type de vdm}}</label>
  <div class="col-sm-3">
    <input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/>
  </div>
</div>
{% endraw %}
`` ``

Die wir ersetzen durch

`` ``html
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
`` ``

Ici le paramètre «type» prendra la valeur du select choisi soit aleatoire ou epicees ou tops.

Jetzt werden wir unseren Parameter in der Funktion randomVdm () in der Datei vdm.class.php berücksichtigen

Cherchez

`` ``php
$url = "http://www.viedemerde.fr/aleatoire";;
`` ``

Und ersetzen durch

`` ``php
$Art = $this->getConfiguration("type", "aleatoire");; //si le paramètre est vide ou n'existe pas, on prends le Art aleatoire
$url = "http://www.viedemerde.fr/{$type}";;
`` ``

Ändern Sie nun den Wert der Auswahl an einem Ausrüstungsgegenstand, speichern Sie und gehen Sie zum Dashboard, um zu sehen, wie es aussieht.
