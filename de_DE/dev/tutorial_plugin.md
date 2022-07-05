# Anfangen

> **WICHTIG**
>
> Dieses Tutorial wurde von ZygOm4t1k geschrieben, dem wir herzlich danken. Sie können das Original finden [hier](https://forum.jeedom.com/viewtopic.php?f=27&t=37630#p621495)

Hier ist ein kleines TP, um zu erklären, wie man ein Plugin erstellt. Für das Beispiel erstellen wir ein Plugin, das einen Satz von der Seite viedemerde zurückgibt.Fr .(Das Plugin wird skalierbar sein)

Es ersetzt keinesfalls die [amtliche Dokumentation](https://doc.jeedom.com/de_DE/dev/)

# Erstellen Sie die Basis des Plugins

Zunächst müssen Sie einen Namen und eine ID festlegen (die nicht existieren darf)

Nachname : Beschissenes Leben
ICH WÜRDE : vdm

Laden Sie das Vorlagen-Plugin herunter, um die [Base](https://github.com/jeedom/plugin-template/archive/master.zip)

Entpacken Sie die Datei. Vous obtiendrez un dossier « plugin-template-master » contenant des dossiers 3rparty, core, desktop…

Lass uns gehen.

Renommez le dossier « plugin-template-master » en « vdm » (l'id) du plugin.

1/ Öffnen Sie die Datei plugin_info/info.json und bearbeite die.

```json
{
  "id" : "vdm",
  "name" : "Beschissenes Leben",
  "description" : "Plugin zum Abrufen der neuesten vdms",
  "licence" : "AGPL",
  "author" : "Zyg0m4t1k",
  "require" : "3.3.39",
  "category" : "monitoring",
  "changelog" : "",
  "documentation" : "",
  "language" : "",
  "compatibility" : ""
}
```

Kopieren Sie den obigen Code und fügen Sie ihn ein.

Ich habe die ID geändert *(vdm)*, den Namen, eine Beschreibung, den Autor und die Kategorie hinzugefügt.

benötigen : Mindestversion von jeedom, um Zugriff auf das Plugin auf dem Markt zu haben.

Änderungsprotokoll, Dokumentation, Sprache, Kompatibilität im Moment null. Ich komme später darauf zurück

2/ Wir werden die Dateien umbenennen, die erforderlich sind, damit das Plugin von Jeedom erkannt wird

- Benennen Sie die Datei core/ajax/template.ajax um.php nach vdm.ajax.php

- Benennen Sie die Datei core/class/template.class um.php zu vdm.class.php und öffne sie zum Bearbeiten.

Remplacez

```php
Klassenvorlage erweitert eqLogic
```

par

```php
class vdm erweitert eqLogic
```

------------------------

```php
Klasse templateCmd erweitert cmd
```

par

```php
Klasse vdmCmd erweitert cmd
```

- Benennen Sie die Datei core/php/template.inc um.php in core/php/vdm.inc.php
- Benennen Sie die Datei desktop/php/template um.php im Desktop /php/vdm.php und öffne sie

Ersetzen :

```php
$plugin = plugin::byId('template');
```

Par

```php
$plugin = plugin::byId('vdm');
```

------------------------

```html
{% raw %}<legend><i class="fas fa-table"></i> {{Mes templates}}</legend>{% endraw %}
```

Par

```html
{% raw %}<legend><i class="fas fa-table"></i> {{Mes équipements}}</legend>{% endraw %}
```

------------------------

```php
<?php include_file('desktop', 'template', 'js', 'template');?>
```

Par

```php
<?php include_file('desktop', 'vdm', 'js', 'vdm');?>
```

Und sonst nichts , **ändern Sie nicht die Linie** ``<?php include_file('core', 'plugin.template', 'js');?>``.

- Benennen Sie die Datei desktop/modal/modal.template um.php nach desktop/modal/modal.vdm.php

- Benennen Sie die Datei desktop/js/template um.js in desktop/js/vdm.js

- Öffnen Sie die Datei plugin_info/install.php und benennen Sie die Funktionen wie folgt um

```php
Funktion vdm_install() {
}

Funktion vdm_update() {
}

Funktion vdm_remove() {
}
```

Hier ist das Plugin fertig, aber es müssen noch die Anpassung und das Symbol aktualisiert werden : [Entwicklerdokumentation - Plugin-Symbol](https://doc.jeedom.com/de_DE/dev/Icone_de_plugin)

Fügen Sie das Symbol im Ordner plugin_info als vdm_icon.png hinzu

in meinem Fall

![image](images/tutorial_vdm_icon.png)

Jetzt können wir den vdm-Ordner in den Jeedom-Plugin-Ordner kopieren und zur Plugin-Verwaltung gehen. Wir finden das Plugin.

![image](images/tutorial_vdm_plugin.png)

Wir aktivieren es und dann Plugins/Monitoring/Vie de Merde

Jetzt ist die Basis fertig. Sie sollten das Plugin aktiv haben, aber im Moment tut es nichts.

# Die Bestellungen

Der Zweck des Plugins besteht darin, ein zufälliges vdm abzurufen und auf dem Dashboard anzuzeigen.

Es ist daher erforderlich, einen Befehl vom Typ Info zu erstellen, um diese Informationen zu speichern. Elle sera de sous-nett « string » car c'est une chaîne de caractère.

Für das Beispiel fügen wir einen Befehl hinzu, der die Informationen aktualisiert. Es handelt sich also um einen Befehl vom Typ action und dem Subtyp other

-Créez un équipement « vdm1 » en cliquant sur le +. Aktivieren Sie es und machen Sie es sichtbar. Wählen Sie ein Objekt aus und die Ausrüstung sollte auf dem Dashboard erscheinen (je nach Objekt).

Derzeit gibt es keine Befehle, die auf der Registerkarte „Befehle“ oder im Widget angezeigt werden.

Öffnen Sie die Datei core/class/vdm.class.php und suchen Sie nach der Funktion postSave() (Lesen Sie das Template-Plugin-Dokument, falls noch nicht geschehen)

Wir erstellen die 2 Befehle

```php
öffentliche Funktion postSave() {
  $Information = $this->getCmd(null, 'story');
  wenn (!is_object($info)) {
    $Information = new vdmCmd();
    $info->setName(__('Histoire', __FILE__));
  }
  $info->setLogicalId('story');
  $info->setEqLogic_id($this->getId());
  $info->setType('info');
  $info->setSubType('string');
  $info->save();

  $refresh = $this->getCmd(null, 'refresh');
  wenn (!is_object($aktualisierung)) {
    $refresh = new vdmCmd();
    $refresh->setName(__('Rafraichir', __FILE__));
  }
  $refresh->setEqLogic_id($this->getId());
  $refresh->setLogicalId('refresh');
  $refresh->setType('action');
  $refresh->setSubType('other');
  $refresh->save();
}
```

- Créez un autre équipement « vdm2 » en cliquant sur le +. Auf der Registerkarte Befehle wurden die Befehle angezeigt. Aktivieren Sie es und machen Sie es sichtbar. Wählen Sie ein übergeordnetes Objekt aus und sehen Sie, wie es auf dem Dashboard aussieht.

- Enregistrez le premier équipement « vdm1 » pour créer les commandes. Siehe auch Render-on-Widget.

Auf der Registerkarte Befehle sollten Sie sehen.

![image](images/tutorial_vdm_cmd1.png)

Öffnen Sie desktop/php/vdm.php, um den HTML-Code dieser Tabelle zu finden.

```html
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
```

Zum Zeitpunkt der Anzeige ist es das Skript desktop/js/vdm.js, die aufgerufen wird und die Funktion addCmdToTable startet.

```html
{% raw %}
/* Funktion zur Anzeige von Befehlen im Gerät */
Funktion addCmdToTable(_cmd) {
  wenn (!isset(_cmd)) {
    var _cmd = {konfig: {} };
  }
  wenn (!isset(_cmd.configuration)) {
    _cmd.configuration = {};
  }
  <html>var tr = '.id) + '">';
  <html>tr += ':60px;">';
  tr += '<span class="cmdAttr" data-l1key="id"></span> ';
  tr += '</td> ';
  <html>tr += ':300px;Breite:350px;">';
  tr += '<div class="row"> ';
  tr += '<div class="col-xs-7"> ';
  tr += '<input class="cmdAttr form-control input-sm" data-l1key="name" placeholder="{{Nom de la commande}}">';
  <html>tr += ' : keine;Margin-top : 5px;" title="{{Befehlsbezogene Informationen}}">';
  tr += '<option value=""> {{Keiner}}</option> ';
  tr += '</select> ';
  tr += '</div> ';
  tr += '<div class="col-xs-5"> ';
  tr += ' <a class="cmdAction btn btn-default btn-sm" data-l1key="chooseIcon"><i class="fas fa-flag"></i>{{Icon}}</a> ';
  <html>tr += ' : 10px;"> ';
  tr += '</div> ';
  tr += '</div> ';
  tr += '</td> ';
  tr += '<td> ';
  <html>tr += '.Typ) + '">' + jeedom.cmd.verfügbarTyp() + ' ';
  <html>tr += '.Untertyp) + '"> ';
  tr += '</td> ';
  <html>tr += ':150px;Breite:350px;">';
  <html>tr += '.}}" title="{{Min.}}" style="Breite:30%;display:Inline-Block;"/> ';
  <html>tr += '.}}" Titel = "{{Max.}}" style="Breite:30%;display:Inline-Block;"/> ';
  <html>tr += ':30%;display:Inline-Block;"/>';
  tr += '</td> ';
  <html>tr += ':80px;Breite:350px;">';
  tr += ' <label class="checkbox-inline"><input type="checkbox" class="cmdAttr" data-l1key="isVisible" checked/>{{Anzeigen}}</label> ';
  tr += ' <label class="checkbox-inline"><input type="checkbox" class="cmdAttr" data-l1key="isHistorized" checked/>{{Protokoll}}</label> ';
  tr += ' <label class="checkbox-inline"><input type="checkbox" class="cmdAttr" data-l1key="display" data-l2key="invertBinary"/>{{Umgekehrt}}</label> ';
  tr += '</td> ';
  <html>tr += ':80px;Breite:200px;">';
  if (ist_numerisch(_cmd.id)) {
    tr += '<a class="btn btn-default btn-xs cmdAction" data-action="configure"><i class="fas fa-cogs"></i></a> ';
    tr += ' <a class="btn btn-default btn-xs cmdAction" data-action="test"><i class="fas fa-rss"></i>Test</a> ';
  }
  tr += '<i class="fas fa-minus-circle pull-right cmdAction cursor" data-action="remove"></i></td> ';
  tr += '</tr> ';
  $('#table_cmd tbody').append(tr);
  var tr = $('#table_cmd tbody tr').last();
  jeedom.eqLogic.builSelectCmd({
    id: $('.eqLogicAttr[data-l1key=id]').value(),
    filter: { type: 'info' },
    error: Funktion (Fehler) {
      $('#div_alert').showAlert({ message: Error.message, level: 'danger' });
    },
    success: Funktion (Ergebnis) {
      tr.find('.cmdAttr[data-l1key=value]').append(result);
      tr.setValues(_cmd, '.cmdAttr');
      jeedom.cmd.changeType (tr, init (_cmd.subType));
    }
  });
}
{% endraw %}
```

Dies geschieht automatisch.

Hier bleibt es, einen zufälligen vdm wiederherzustellen und die Befehle zu verwenden.

# Informationsrückgewinnung

Zum Abrufen einer zufälligen vdm.

```php
$url = "http://www.viedemerde.fr/aleatoire";
$data = file_get_contents($url);
@$dom = new DOMDocument();
libxml_use_internal_errors(false);
$dom->loadHTML('<?xml encoding="UTF-8">' .$data);
libxml_use_internal_errors(true);
$xpath = new DOMXPath($dom);
$divs = $xpath->query('//article[@class="art-panel col-xs-12"]//div[@class="panel-content"]//p//a');
$divs[0]->nodeValue zurückgeben;
```

Öffnen Sie die Datei core/class/vdm.class.php und für die vdm-Klasse, die die egLogic-Methoden erbt, erstelle ich eine randomVdm-Funktion

```php
öffentliche Funktion randomVdm() {
  $url = "http://www.viedemerde.fr/aleatoire";
  $data = file_get_contents($url);
  @$dom = new DOMDocument();
  libxml_use_internal_errors(true);
  $dom->loadHTML($data);
  libxml_use_internal_errors(false);
  $xpath = new DOMXPath($dom);
  $divs = $xpath->query('//article[@class="art-panel col-xs-12"]//div[@class="panel-content"]//p//a');
  $divs[0]->nodeValue zurückgeben;
}
```

Jetzt aktualisieren wir den Befehl info(story) mit diesen Informationen, indem wir den Befehl action(refresh) ausführen).
Immer noch in core/class/vdm.class.php für die vdmCmd-Klasse verwenden wir die execute-Methode

```php
öffentliche Funktion execute($_options = array()) {
}
```

C'est hier qu'on va définir ce qu'il va se passer quand on actionne la commande « Rafraîchir ». Die vdmCmd-Klasse erbte alle Methoden von der cmd-Klasse (Core jeedom)

On vérifie le logicalICH WÜRDE de la commande lancée et si « refresh » on lance les actions

```php
Schalter ($this->getLogicalId()) {
  Feld „aktualisieren': //LogicalId des Aktualisierungsbefehls, den wir in der Postsave-Methode der vdm-Klasse erstellt haben .
  // Code zum Aktualisieren meines Befehls
  break;
}
```

Nun muss noch die Funktion randomVdm ausgeführt werden(). Dazu rufen wir die eqLogic (Ausrüstung) des Befehls ab und führen die Funktion aus.

```php
$eqlogic = $this->getEqLogic(); //Récupération de l'eqlogic
$Information = $eqlogic->randomVdm() ; //Lance la fonction et stocke le résultat dans la variable $info
```

On met à jour la commande « story » avec la variable $info. Wir verwenden die Methode checkAndUpdateCmd der Klasse eqlogic

```php
$eqlogic->checkAndUpdateCmd('story', $info);
```

Was letztendlich gibt

```php
öffentliche Funktion execute($_options = array()) {
  $eqlogic = $this->getEqLogic(); //récupère l'éqlogic de la commande $this
  switch ($this->getLogicalId()) { //überprüfe die logische ID des Befehls
    Feld „aktualisieren': // LogicalId des Aktualisierungsbefehls, den wir in der Postsave-Methode der vdm-Klasse erstellt haben .
    $Information = $eqlogic->randomVdm(); //On lance la fonction randomVdm() pour récupérer une vdm et on la stocke dans la variable $info
    $eqlogic->checkAndUpdateCmd('story', $info); //on met à jour la commande avec le LogicalICH WÜRDE "story"  de l'eqlogic
    break;
  }
}
```

Gehen Sie nun zu einem erstellten Gerät und starten Sie den Befehl Aktualisieren. Puis la commande « Histoire » qui doit être à jour.

Auf dem Dashboard werden die Informationen angezeigt. Klicken Sie auf das Aktualisierungssymbol, um die Informationen zu ändern.

Wir werden dann die Größe des Widgets definieren und es ein wenig anpassen und dann die Aktualisierung automatisieren.

# Aktualisierungsinformationen (cron)

Das Plugin ist funktionsfähig, aber im Moment macht es nicht viel. Si vous cliquez sur la commande « refresh » , la commande « story » se met à jour mais sinon rien.

Beachten Sie, dass ich den Befehl mit logicalId benenne. Und es ist wichtig. Eine eindeutige logische ID pro Gerät (eqLogic) vereinfacht die Dinge.

Wir werden nun sehen, wie der Befehl mit den nativen Funktionen des Kerns aktualisiert wird : Die Kronen

Es gibt mehrere davon :

- Cron : jede Minute aktualisieren
- cron5 : alle 5 Minuten aktualisieren
- cron15 : alle 15 Minuten aktualisieren
- cron30 : alle 30 Minuten aktualisieren
- cron stündlich : jede Stunde
- cronDaily : 1/jour

Angesichts des Plugins werden wir jede Stunde ein Update durchführen (lasst uns verrückt sein). Wir werden daher die cronHourly-Funktion verwenden().

Wir werden daher die Datei vdm.class öffnen.php und suchen

```php
/*
* Funktion wird automatisch stündlich von Jeedom ausgeführt
öffentliche statische Funktion cronHourly() {
}
*/
```

Kommentieren Sie den Code aus

```php
öffentliche statische Funktion cronHourly() {
}
```

Unsere Funktion ist operativ

Jetzt müssen wir alle aktiven Geräte unseres Plugins abrufen,

```php
self::byType('vdm', true) //Array, das alle Geräte des Plugins enthält, das zweite Argument, ein boolescher Wert, ermöglicht es, nur das aktive Gerät abzurufen, wenn es wahr ist, oder das gesamte Gerät, wenn es falsch ist (Standard)
```

und gehe sie 1 nach 1 durch

```php
für jeden (selbst::byType('vdm', true) als $vdm) {
}
```

Voila maintenant on recherche la commande « refresh » de l'équipement (eqLogic)

```php
$cmd = $vdm->getCmd(null, 'refresh');
```

Wenn es nicht existiert, setzen wir die Schleife fort (foreach), andernfalls führen wir sie aus

```php
wenn (!is_object($cmd)) {
  continue;
}
$cmd->execCmd();
```

Was letztendlich gibt

```php
öffentliche statische Funktion cronHourly () {
  für jeden (selbst::byType('vdm', true) as $vdm) { // Alle aktiven Geräte des vdm-Plugins durchsuchen
    $cmd = $vdm->getCmd(null, 'refresh'); //retourne la commande "refresh" si elle existe
    wenn (!is_object($cmd)) { //Wenn der Befehl nicht existiert
    mach weiter; // Fortsetzung der Schleife
  }
  $cmd->execCmd(); //la commande existe on la lance
}
}
```

Pour tester, dans jeedom, allez dans configuration/moteur de tâches et lancer le Cron de class « plugin » fonction « cron stündlich »
Informationen werden aktualisiert.

Es ist gut, aber es passt nicht zu mir. A la création de l'équipement, la commande « story » ne se met pas à jour.

Also verbessern wir den Code.

Für die Erstellung von Bestellungen haben wir die postSave-Methode verwendet(). Wir werden die Methode postUpdate() verwenden, um die Informationen zu aktualisieren.

Der einfachste Weg, da es nur einen Befehl gibt und dieser in postSave erstellt wird

```php
öffentliche Funktion postUpdate() {
  $cmd = $this->getCmd(null, 'refresh'); //On recherche la commande refresh de l'équipement
  if (is_object($cmd)) { //es existiert und wir führen den Befehl aus
    $cmd->execCmd();
  }
}
```

Musst du testen, es funktioniert?

Aber hier ist eine Alternative, die in komplexeren Fällen nützlicher sein kann

In der Funktion postUpdate() starten wir die Funktion cronHourly() mit der Geräte-ID

```php
öffentliche Funktion postUpdate() {
  self::cronHourly($this->getId()); //Starte die cronHourly-Funktion mit der ID von eqLogic
}
```

Aber in diesem Fall ändern wir die cronHourly-Funktion()

```php
öffentliche statische Funktion cronHourly($_eqLogic_id = null) {
  if ($_eqLogic_id == null) { //Die Funktion hat kein Argument, also suchen wir nach allen Geräten des Plugins
    $eqLogics = self::byType('vdm', true);
    } else { //Die Funktion hat das Argument id(unique) eines Geräts(eqLogic)
      $eqLogics = array(self::byId($_eqLogic_id));
    }

    foreach ($eqLogics als $vdm) {
      $cmd = $vdm->getCmd(null, 'refresh'); //retourne la commande "refresh si elle existe
      wenn (!is_object($cmd)) { //Wenn der Befehl nicht existiert
      mach weiter; // Fortsetzung der Schleife
    }
    $cmd->execCmd(); //la commande existe on la lance
  }
}
```

Dann können Sie die Häufigkeit des Crons entsprechend der Wichtigkeit Ihrer wiederherzustellenden Informationen ändern.

Ich kann Sie nur einladen, sich die Zeit zu nehmen, diese Seite zu besuchen, um mehr zu erfahren ==> [hier](https://doc.jeedom.com/dev/phpdoc/4.1/)

Und noch besser, zum Core Github zu gehen ==> [HIER](https://github.com/jeedom/core)

Stecken Sie Ihre Nase hinein, um noch mehr zu kontrollieren .

Das Plugin funktioniert so wie es ist.

Ich werde mir die Zeit nehmen, um hinzuzufügen, wie man je nach Ausrüstung einen benutzerdefinierten Cron einrichtet .

# Das Widget

Das Widget ist keine leichte Aufgabe, aber wir bleiben vorerst beim Standard-Widget.

Wenn Sie nichts berührt haben, Geräte aktiviert und sichtbar sind, nimmt das Widget die gesamte Breite des Bildschirms ein. Also werden wir es ändern.

La commande qui apparaît est la commande «story» de nett info, sous-nett string.

Mein Vergnügen ist es, morgens aufzustehen und einen vdm zu lesen, wenn ich aufwache. Es erlaubt mir zu sehen, dass es Schlimmeres gibt als mich :D

Aber ich habe meine Brille nicht und das derzeitige Rendern auf dem Widget erlaubt es mir nicht, es zu lesen

Donc on va changer le style en affectant un template à la commande « story»

Nichts ist einfacher.

Ich werde sehen ==> [HIER](https://github.com/jeedom/core/tree/alpha/core/template/dashboard)

Ich suche eine Vorlage für cmd.info.string( unser Befehl ist vom Typ info subtype string) .Nicht schwierig, es gibt nur zwei (Standard oder Kachel)

J'applique le template « cmd.info.string.tile.html » à ma commande.

Dazu öffne ich die Datei vdm.class.php , fonction postSave() et j'ajoute le template « tile » pour la commande « story » en appliquant la méthode setTemplate()

```php
$Information = $this->getCmd(null, 'story');
wenn (!is_object($info)) {
  $Information = new vdmCmd();
  $info->setName(__('Histoire', __FILE__));
}
$info->setLogicalId('story');
$info->setEqLogic_id($this->getId());
$info->setType('info');
$info->setTemplate('dashboard','tile');//template pour le dashboard
$info->setSubType('string');
$info->save();
```

Aktualisieren Sie das Dashboard.

Es ist besser, aber das Widget nimmt immer noch die Breite des Dashboards ein. Wir werden daher korrigieren. Durch défaut la largeur du widget de l'équipement(eqLogic) et la hauteur sont à « auto ».

Wir ändern daher die Breite des Widgets (Equipment => eqLogic) mit der von der Klasse eqLogic geerbten Methode setDisplay() .Wir lassen die Höhe im Auto.

Fügen Sie dazu einfach hinzu

```php
$this->setDisplay("width","800px");
```

Ja aber !! Denn es gibt ein Aber. Versuchen Sie, dies in der Funktion postsave() oder postUpdate() hinzuzufügen, und die Änderung wird nicht berücksichtigt. Warum ? Nun, Sie müssen das Dokument des Template-Plugins lesen ==>HIER

Nachdem Sie nun richtig gelesen haben, wissen Sie, dass Sie die preSave-Methode verwenden müssen()

```php
öffentliche Funktion preSave() {
  $this->setDisplay("width","800px");
}
```

Registrieren Sie ein Gerät und aktualisieren Sie das Dashboard.

# Einstellungen. Die Optionen

> **WICHTIG**
>
> Dies ist ein wichtiges Kapitel und Sie müssen es verstehen, bevor Sie fortfahren.

Im Moment haben wir daher 3 Klassen aus dem Kern von Jeedom verwendet : EqLogic, cmd, cron. Gehen Sie zur Info, wir fügen eine vierte mit dem Klassen-Plugin in der vdm-Datei hinzu.php, die Sie öffnen und offen lassen, weil wir sie bearbeiten werden.

```php
$plugin = plugin::byId('vdm'); // appelle la classe plugin du core
```

Sie müssen verstehen, dass alles getan wird, um es uns leichter zu machen.

Für einen Plugin-internen Parameter / eine Option verwenden wir eine der Methoden der eqLogic-Klasse des Kerns: setConfiguration() durch Hinzufügen der gewünschten Parameter. Zum Beispiel:

```php
$this->setConfiguration("type","mon_type"); // si on veut définir un paramètre nett de valeur mon_type. Comme on a défini la largeur du widget via la méthode setDisplay()
```

Um dem Benutzer die Wahl zu überlassen, kehren wir zur Desktop-Datei zurück.php, die Sie offen gelassen haben, weil Sie dieses Lab genau befolgen :D

Cherchez

```html
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="city" placeholder="param1"/>
```

Und durch ersetzen

```html
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/> //Wichtig de laisser la classe eqLogicAttr
```

Speichern Sie und wechseln Sie zu einem Plug-in-Gerät, das Sie bereits erstellt haben, indem Sie diesem Lab folgen (aktualisieren Sie ggf).

Dans le champs «Paramètre» d'un équipement, tapez «aléatoire» et sauvegardez.

Perfekt wird der Parameter gespeichert.

![image](images/tutorial_parametre1.png)

Es ist einfach, nein? . C'est pourquoi il ne faut surtout pas toucher à cette ligne de code comme indiqué dans le premier menu « test ». Er macht die ganze Arbeit

```php
<?php include_file('core', 'plugin.template', 'js');?> //Chargement du fichier core/js/plugin.template.js (en partant de la racine du site)
```

Wenn Sie sich die Desktop-Datei genauer ansehen.php vor

```html
<input type="text" class="eqLogicAttr form-control" data-l1key="id" style="display:none;" /> // retourne l'id(unique) de l'eqLogic(équipement) que l'on va pouvoir récupérer via $this->getId() ;
```

```html
{% raw %}<input type="text" class="eqLogicAttr form-control" data-l1key="name" placeholder="{{Nachname de l'équipement}}"/>// retourne le nom de l'eqLogic(équipement) que l'on va pouvoir récupérer via $this->getName();{% endraw %}
```

Etc…

Wenn Sie das alles gut aufgenommen haben, können wir weitermachen. Aber vorher ändern wir noch die Datei desktop.php

```html
{% raw %}<label class="col-sm-3 control-label">{{Paramètre}}</label>{% endraw %}
```

Par

```html
{% raw %}<label class="col-sm-3 control-label">{{Type de vdm}}</label>{% endraw %}
```

Wichtig : Der Text zwischen geschweiften Klammern entspricht dem Text, der übersetzt wird, wenn Sie das Plugin auf den Markt bringen.

Im Übrigen werden wir das Plugin weiterentwickeln, indem wir eine Art von vdm (zufällig oder scharf oder Spitzen) auswählen, die wir wollen, sowie einen personalisierten Cron für jedes Gerät.

# Verwenden von Optionen/Parametern

Um weiter zu gehen und das vorherige Kapitel zu verstehen, erlauben wir dem Benutzer, eine Art von vdm auszuwählen (zufällig oder scharf oder tops)

On pourrait le laisser taper dans l'input « Type de vdm » : zufällig oder würzig oder tops, aber wir werden es anders machen, indem wir ihn über ein Auswahl-Tag auswählen lassen

Wenn Sie alles befolgt haben, was Sie in der Datei desktop.php haben sollten

```html
{% raw %}
<div class="form-group">
  <label class="col-sm-3 control-label">{{Type de vdm}}</label>
  <div class="col-sm-3">
    <input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/>
  </div>
</div>
{% endraw %}
```

Durch die wir ersetzen werden

```html
{% raw %}
<div class="form-group">
  <label class="col-sm-3 control-label" >{{ Type de vdm }}</label>
  <div class="col-sm-3">
    <select class="form-control eqLogicAttr" data-l1key="configuration" data-l2key="nett ">
      <option value="aleatoire">{{Aleatoire}}</option>
      <option value="epicees">{{Coquin}}</option>
      <option value="tops">{{Best}}</option>
    </select>
  </div>
</div>
{% endraw %}
```

Ici le paramètre «type» prendra la valeur du select choisi soit aleatoire ou epicees ou tops.

Jetzt werden wir unseren Parameter in der Funktion randomVdm() in der Datei vdm.class.php berücksichtigen

Cherchez

```php
$url = "http://www.viedemerde.fr/aleatoire";
```

Und durch ersetzen

```php
$nett = $this->getConfiguration("type", "aleatoire"); //si le paramètre est vide ou n'existe pas, on prends le nett aleatoire
$url = "http://www.viedemerde.fr/{$type}";
```

Ändern Sie nun den Wert der Auswahl auf einem Gerät, speichern Sie und gehen Sie zum Dashboard, um zu sehen, was passiert.
