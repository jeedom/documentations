# Erste Schritte

> **WICHTIG**
>
> Dieses Tutorial wurde von ZygOm4t1k verfasst, dem wir herzlich danken. Das Original finden Sie hier [hier](https://forum.jeedom.com/viewtopic.php?f=27&t=37630#p621495)

Hier ist eine kleine Übung, um zu erklären, wie man ein Plugin erstellt. Als Beispiel erstellen wir ein Plugin, das einen Satz von der Website viedemerde.fr zurückgibt. (Das Plugin wird weiterentwickelt.)

Es ersetzt keinesfalls die [offizielle Dokumentation](index)

# Die Grundlage für das Plugin erstellen

Zunächst müssen Sie einen Namen und eine ID festlegen (die noch nicht vergeben sein darf).

Name: Scheißleben
ID: vdm

Laden Sie das Template-Plugin herunter, um die [Grundlagen](https://github.com/jeedom/plugin-template/archive/master.zip)

Entpacken Sie die Datei. Sie erhalten einen Ordner „plugin-template-master“, der die Ordner „3rparty“, „core“, „desktop“ usw. enthält.

Los geht’s.

> **WICHTIG**
>
>Es steht ein Konfigurationsassistent zur Verfügung, der Ihnen hilft, Ihr Plugin schnell anzupassen.
>Mit diesem interaktiven Tool können Sie ganz einfach den Namen des Plugins festlegen, angeben, ob ein Daemon erforderlich ist, und es übernimmt automatisch die Anpassung aller erforderlichen Dateien.
>Die Verwendung vereinfacht den Konfigurationsprozess und spart Ihnen wertvolle Zeit bei der Entwicklung Ihres Plugins.

👉 Um den Assistenten zu starten, öffnen Sie ein Terminal im Verzeichnis des Template-Plugins und führen Sie den folgenden Befehl aus:

```
php plugin_info/helperConfiguration.php
```

Wenn Sie dieses Skript nicht verwenden möchten, können Sie die folgenden Schritte ausführen, um die Dateien umzubenennen.


Benennen Sie den Ordner „plugin-template-master“ in „vdm“ (die ID) des Plugins um.

1. Öffnen Sie die Datei „plugin_info/info.json“ und bearbeiten Sie sie.

```json
{
  "id" : "vdm",
  "name" : "Vie de Merde",
  "description" : "Plugin pour récupérer les dernières vdm",
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

Ich habe die ID *(vdm)*, den Namen geändert, eine Beschreibung, den Autor und die Kategorie hinzugefügt.

Voraussetzung: Mindestversion von Jeedom, um Zugriff auf das Plugin im Market zu erhalten.

Changelog, Dokumentation, Sprache und Kompatibilität fehlen derzeit noch. Ich werde später darauf zurückkommen.

2/ Wir werden die erforderlichen Dateien umbenennen, damit das Plugin von Jeedom erkannt wird

- Benennen Sie die Datei „core/ajax/template.ajax.php“ in „vdm.ajax.php“ um.

- Benennen Sie die Datei „core/class/template.class.php“ in „vdm.class.php“ um und öffnen Sie sie zur Bearbeitung.

Ersetzen

```php
class template extends eqLogic
```

von

```php
class vdm extends eqLogic
```

------------------------

```php
class templateCmd extends cmd
```

von

```php
class vdmCmd extends cmd
```

- Benennen Sie die Datei „core/php/template.inc.php“ in „core/php/vdm.inc.php“ um.
- Benennen Sie die Datei „desktop/php/template.php“ in „desktop/php/vdm.php“ um und öffnen Sie sie.

Ersetzen Sie:

```php
$plugin = plugin::byId('template');
```

Von

```php
$plugin = plugin::byId('vdm');
```

------------------------

```html
{% raw %}<legend><i class="fas fa-table"></i> {{Mes templates}}</legend>{% endraw %}
```

Von

```html
{% raw %}<legend><i class="fas fa-table"></i> {{Mes équipements}}</legend>{% endraw %}
```

------------------------

```php
<?php include_file('desktop', 'template', 'js', 'template');?>
```

Von

```php
<?php include_file('desktop', 'vdm', 'js', 'vdm');?>
```

Und sonst nichts, **ändern Sie diese Zeile nicht** ``<?php include_file('core', 'plugin.template', 'js');?>``.

- Benennen Sie die Datei „desktop/modal/modal.template.php“ in „desktop/modal/modal.vdm.php“ um.

- Benennen Sie die Datei „desktop/js/template.js“ in „desktop/js/vdm.js“ um.

- Öffnen Sie die Datei „plugin_info/install.php“ und benennen Sie die Funktionen wie folgt um

```php
function vdm_install() {
}

function vdm_update() {
}

function vdm_remove() {
}
```

Das Plugin ist nun fertig, aber es müssen noch Anpassungen vorgenommen und das Symbol aktualisiert werden: [Entwicklerdokumentation – Plugin-Symbol](Icone_de_plugin)

Fügen Sie das Symbol im Ordner „plugin_info“ unter dem Namen „vdm_icon.png“ hinzu

in meinem Fall

![Bild](../images/tutorial_vdm_icon.png)

Nun kann man den Ordner „vdm“ in den Plugin-Ordner von Jeedom kopieren und die Plugin-Verwaltung aufrufen. Das Plugin ist dort tatsächlich zu finden.

![Bild](../images/tutorial_vdm_plugin.png)

Man aktiviert es und geht dann zu Plugins/Monitoring/Vie de Merde

So, die Grundlage ist nun geschaffen. Das Plugin sollte aktiviert sein, aber im Moment hat es noch keine Funktion.

# Die Befehle

Das Ziel des Plugins ist es, einen zufälligen VDM abzurufen und diesen auf dem Dashboard anzuzeigen.

Es muss also ein Befehl vom Typ „info“ erstellt werden, um diese Information zu speichern. Er wird den Subtyp „string“ haben, da es sich um eine Zeichenkette handelt.

In diesem Beispiel fügen wir einen Befehl hinzu, der die Informationen aktualisiert. Es handelt sich also um einen Befehl vom Typ „Action“ und vom Untertyp „Other“.

-Erstellen Sie ein Gerät namens „vdm1“, indem Sie auf das „+“ klicken. Aktivieren Sie es und machen Sie es sichtbar. Wählen Sie ein Objekt aus, und das Gerät sollte (je nach Objekt) auf dem Dashboard erscheinen.

Derzeit werden weder im Reiter „Aufträge“ noch im Widget Aufträge angezeigt.

Öffnen Sie die Datei „core/class/vdm.class.php“ und suchen Sie nach der Funktion „postSave()“ (Lesen Sie die Dokumentation zum Template-Plugin, falls Sie dies noch nicht getan haben).

Wir erstellen die beiden Befehle

```php
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
```

- Erstellen Sie ein weiteres Gerät „vdm2“, indem Sie auf das „+“ klicken. Auf der Registerkarte „Befehle“ werden nun die Befehle angezeigt. Aktivieren Sie das Gerät und machen Sie es sichtbar. Wählen Sie ein übergeordnetes Objekt aus und sehen Sie sich das Ergebnis auf dem Dashboard an.

- Registrieren Sie das erste Gerät „vdm1“, um die Befehle zu erstellen. Sehen Sie sich auch die Darstellung im Widget an.

Auf der Registerkarte „Befehle“ sollten Sie Folgendes sehen.

![Bild](../images/tutorial_vdm_cmd1.png)

Öffnen Sie die Datei „desktop/php/vdm.php“, um den HTML-Code dieser Tabelle zu finden.

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

Zum Zeitpunkt der Anzeige wird das Skript „desktop/js/vdm.js“ aufgerufen, das die Funktion „addCmdToTable“ auslöst.

```html
{% raw %}
/* Fonction permettant l'affichage des commandes dans l'équipement */
function addCmdToTable(_cmd) {
  if (!isset(_cmd)) {
    var _cmd = { configuration: {} };
  }
  if (!isset(_cmd.configuration)) {
    _cmd.configuration = {};
  }
  var tr = '<tr class="cmd" data-cmd_id="' + init(_cmd.id) + '">';
  tr += '<td style="width:60px;">';
  tr += '<span class="cmdAttr" data-l1key="id"></span>';
  tr += '</td>';
  tr += '<td style="min-width:300px;width:350px;">';
  tr += '<div class="row">';
  tr += '<div class="col-xs-7">';
  tr += '<input class="cmdAttr form-control input-sm" data-l1key="name" placeholder="{{Nom de la commande}}">';
  tr += '<select class="cmdAttr form-control input-sm" data-l1key="value" style="display : none;margin-top : 5px;" title="{{Commande information liée}}">';
  tr += '<option value="">{{Aucune}}</option>';
  tr += '</select>';
  tr += '</div>';
  tr += '<div class="col-xs-5">';
  tr += '<a class="cmdAction btn btn-default btn-sm" data-l1key="chooseIcon"><i class="fas fa-flag"></i> {{Icône}}</a>';
  tr += '<span class="cmdAttr" data-l1key="display" data-l2key="icon" style="margin-left : 10px;"></span>';
  tr += '</div>';
  tr += '</div>';
  tr += '</td>';
  tr += '<td>';
  tr += '<span class="type" type="' + init(_cmd.type) + '">' + jeedom.cmd.availableType() + '</span>';
  tr += '<span class="subType" subType="' + init(_cmd.subType) + '"></span>';
  tr += '</td>';
  tr += '<td style="min-width:150px;width:350px;">';
  tr += '<input class="cmdAttr form-control input-sm" data-l1key="configuration" data-l2key="minValue" placeholder="{{Min.}}" title="{{Min.}}" style="width:30%;display:inline-block;"/> ';
  tr += '<input class="cmdAttr form-control input-sm" data-l1key="configuration" data-l2key="maxValue" placeholder="{{Max.}}" title="{{Max.}}" style="width:30%;display:inline-block;"/> ';
  tr += '<input class="cmdAttr form-control input-sm" data-l1key="unite" placeholder="{{Unité}}" title="{{Unité}}" style="width:30%;display:inline-block;"/>';
  tr += '</td>';
  tr += '<td style="min-width:80px;width:350px;">';
  tr += '<label class="checkbox-inline"><input type="checkbox" class="cmdAttr" data-l1key="isVisible" checked/>{{Afficher}}</label>';
  tr += '<label class="checkbox-inline"><input type="checkbox" class="cmdAttr" data-l1key="isHistorized" checked/>{{Historiser}}</label>';
  tr += '<label class="checkbox-inline"><input type="checkbox" class="cmdAttr" data-l1key="display" data-l2key="invertBinary"/>{{Inverser}}</label>';
  tr += '</td>';
  tr += '<td style="min-width:80px;width:200px;">';
  if (is_numeric(_cmd.id)) {
    tr += '<a class="btn btn-default btn-xs cmdAction" data-action="configure"><i class="fas fa-cogs"></i></a> ';
    tr += '<a class="btn btn-default btn-xs cmdAction" data-action="test"><i class="fas fa-rss"></i> Tester</a>';
  }
  tr += '<i class="fas fa-minus-circle pull-right cmdAction cursor" data-action="remove"></i></td>';
  tr += '</tr>';
  $('#table_cmd tbody').append(tr);
  var tr = $('#table_cmd tbody tr').last();
  jeedom.eqLogic.builSelectCmd({
    id: $('.eqLogicAttr[data-l1key=id]').value(),
    filter: { type: 'info' },
    error: function (error) {
      $('#div_alert').showAlert({ message: error.message, level: 'danger' });
    },
    success: function (result) {
      tr.find('.cmdAttr[data-l1key=value]').append(result);
      tr.setValues(_cmd, '.cmdAttr');
      jeedom.cmd.changeType(tr, init(_cmd.subType));
    }
  });
}
{% endraw %}
```

Das geschieht automatisch.

So, jetzt muss nur noch ein zufälliges VDM abgerufen und die Befehle ausgeführt werden.

# Abruf von Informationen

Um eine VDM nach dem Zufallsprinzip abzurufen.

```php
$url = "http://www.viedemerde.fr/aleatoire";
$data = file_get_contents($url);
@$dom = new DOMDocument();
libxml_use_internal_errors(false);
$dom->loadHTML('<?xml encoding="UTF-8">' .$data);
libxml_use_internal_errors(true);
$xpath = new DOMXPath($dom);
$divs = $xpath->query('//article[@class="art-panel col-xs-12"]//div[@class="panel-content"]//p//a');
return $divs[0]->nodeValue ;
```

Öffnen Sie die Datei „core/class/vdm.class.php“ und erstellen Sie für die Klasse „vdm“, die die Methoden von „egLogic“ erbt, eine Funktion namens „randomVdm“.

```php
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
```

Nun aktualisieren wir den Befehl „info(story)“ mit diesen Informationen, indem wir den Befehl „action(refresh)“ ausführen.
Ebenfalls in core/class/vdm.class.php verwenden wir für die Klasse vdmCmd die Methode execute

```php
public function execute($_options = array()) {
}
```

Hier legen wir fest, was passieren soll, wenn der Befehl „Aktualisieren“ ausgeführt wird. Die Klasse vdmCmd hat alle Methoden der Klasse cmd (Core Jeedom) geerbt.

Wir überprüfen die logicalId des ausgelösten Befehls und führen bei „refresh“ die entsprechenden Aktionen aus

```php
switch ($this->getLogicalId()) {
  case 'refresh': //LogicalId de la commande rafraîchir que l’on a créé dans la méthode Postsave de la classe vdm .
  //code pour rafraîchir ma commande
  break;
}
```

Nun muss noch die Funktion randomVdm() ausgeführt werden. Dazu rufen wir das eqLogic (das Gerät) des Befehls ab und führen die Funktion aus.

```php
$eqlogic = $this->getEqLogic(); //Récupération de l’eqlogic
$info = $eqlogic->randomVdm() ; //Lance la fonction et stocke le résultat dans la variable $info
```

Wir aktualisieren den Befehl „story“ mit der Variablen $info. Dazu verwenden wir die Methode checkAndUpdateCmd der Klasse eqlogic

```php
$eqlogic->checkAndUpdateCmd('story', $info);
```

Das ergibt letztendlich

```php
public function execute($_options = array()) {
  $eqlogic = $this->getEqLogic(); //récupère l'éqlogic de la commande $this
  switch ($this->getLogicalId()) { //vérifie le logicalid de la commande
    case 'refresh': // LogicalId de la commande rafraîchir que l’on a créé dans la méthode Postsave de la classe vdm .
    $info = $eqlogic->randomVdm(); //On lance la fonction randomVdm() pour récupérer une vdm et on la stocke dans la variable $info
    $eqlogic->checkAndUpdateCmd('story', $info); //on met à jour la commande avec le LogicalId "story"  de l'eqlogic
    break;
  }
}
```

Gehen Sie nun zu einem erstellten Gerät und führen Sie den Befehl „Aktualisieren“ aus. Anschließend den Befehl „Verlauf“, der auf dem neuesten Stand sein sollte.

Auf dem Dashboard werden die Informationen angezeigt. Klicken Sie auf das Symbol „Aktualisieren“, um die Informationen zu aktualisieren.

Als Nächstes legen wir die Größe des Widgets fest, passen es ein wenig an und automatisieren die Aktualisierung.

# Aktualisierung der Informationen (cron)

Das Plugin funktioniert, macht aber derzeit noch nicht viel. Wenn Sie auf den Befehl „Refresh“ klicken, wird der Befehl „Story“ aktualisiert, ansonsten passiert nichts.

Beachten Sie, dass ich die Steuerung über die logicalId bezeichne. Und das ist wichtig. Eine eindeutige logicalId pro Gerät (eqLogic) vereinfacht die Sache.

Wir werden nun sehen, wie man den Befehl mithilfe der nativen Funktionen des Kerns aktualisiert: Die Cron-Jobs

Es gibt mehrere:

- cron: Aktualisierung alle Minuten
- cron5: Aktualisierung alle 5 Minuten
- cron15: Aktualisierung alle 15 Minuten
- cron30: Aktualisierung alle 30 Minuten
- cronHourly: stündlich
- cronDaily: 1 Mal pro Tag

Angesichts des Plugins werden wir stündlich ein Update durchführen (seien wir mal verrückt). Wir werden also die Funktion cronHourly() verwenden.

Wir öffnen also die Datei „vdm.class.php“ und suchen nach

```php
/*
* Fonction exécutée automatiquement toutes les heures par Jeedom
public static function cronHourly() {
}
*/
```

Entfernen Sie die Auskommentierungen im Code

```php
public static function cronHourly() {
}
```

Unsere Funktion ist betriebsbereit

Nun müssen wir alle aktiven Geräte unseres Plugins abrufen,

```php
self::byType('vdm', true) //array contenant tous les équipements du plugin, le deuxième argument, un boolean, permet de ne récupérer que les équipements actifs si true ou tous les équipements si false (défaut)
```

und sie nacheinander durchgehen

```php
foreach (self::byType('vdm', true) as $vdm) {
}
```

Nun suchen wir nach dem Befehl „refresh“ des Geräts (eqLogic)

```php
$cmd = $vdm->getCmd(null, 'refresh');
```

Wenn sie nicht vorhanden ist, wird die Schleife (foreach) fortgesetzt, andernfalls wird sie ausgeführt

```php
if (!is_object($cmd)) {
  continue;
}
$cmd->execCmd();
```

Das ergibt letztendlich

```php
public static function cronHourly () {
  foreach (self::byType('vdm', true) as $vdm) { //parcours tous les équipements actifs du plugin vdm
    $cmd = $vdm->getCmd(null, 'refresh'); //retourne la commande "refresh" si elle existe
    if (!is_object($cmd)) { //Si la commande n'existe pas
    continue; //continue la boucle
  }
  $cmd->execCmd(); //la commande existe on la lance
}
}
```

Um dies zu testen, gehen Sie in Jeedom zu „Konfiguration/Aufgaben-Engine“ und starten Sie den Cron der Klasse „Plugin“ mit der Funktion „cronHourly“.
Die Informationen werden gerade aktualisiert.

Das ist zwar gut, passt aber nicht zu mir. Beim Anlegen des Geräts wird der Befehl „story“ nicht aktualisiert.

Wir verbessern also den Code.

Zum Anlegen der Bestellungen haben wir die Methode postSave() verwendet. Zur Aktualisierung der Informationen werden wir die Methode postUpdate() verwenden.

Die einfachste Methode, da es nur einen Befehl gibt und dieser in postSave erstellt wird

```php
public function postUpdate() {
  $cmd = $this->getCmd(null, 'refresh'); //On recherche la commande refresh de l’équipement
  if (is_object($cmd)) { //elle existe et on lance la commande
    $cmd->execCmd();
  }
}
```

Man muss es testen – funktioniert es?

Hier ist jedoch eine Alternative, die sich in komplexeren Fällen als nützlicher erweisen kann

In der Funktion postUpdate() wird die Funktion cronHourly() mit der ID des Geräts aufgerufen.

```php
public function postUpdate() {
  self::cronHourly($this->getId()); //lance la fonction cronHourly avec l’id de l’eqLogic
}
```

In diesem Fall ändern wir jedoch die Funktion cronHourly()

```php
public static function cronHourly($_eqLogic_id = null) {
  if ($_eqLogic_id == null) { //La fonction n’a pas d’argument donc on recherche tous les équipements du plugin
    $eqLogics = self::byType('vdm', true);
    } else { //La fonction a l’argument id(unique) d’un équipement(eqLogic)
      $eqLogics = array(self::byId($_eqLogic_id));
    }

    foreach ($eqLogics as $vdm) {
      $cmd = $vdm->getCmd(null, 'refresh'); //retourne la commande "refresh si elle existe
      if (!is_object($cmd)) { //Si la commande n'existe pas
      continue; //continue la boucle
    }
    $cmd->execCmd(); //la commande existe on la lance
  }
}
```

Anschließend können Sie die Häufigkeit des Cron-Jobs je nach Wichtigkeit der abzurufenden Informationen anpassen.

Ich kann Ihnen nur empfehlen, sich die Zeit zu nehmen, diese Seite zu besuchen, um mehr darüber zu erfahren ==> [hier](/phpdoc/)

Und noch besser: Besuchen Sie die GitHub-Seite des Core ==> [HIER](https://github.com/jeedom/core)

Schauen Sie mal rein, um noch mehr zu erreichen.

Das Plugin ist in der aktuellen Version funktionsfähig.

Ich werde mir die Zeit nehmen, zu erklären, wie man je nach Gerät einen benutzerdefinierten Cron-Job einrichtet.

# Das Widget

Das Widget ist keine Kleinigkeit, aber wir bleiben vorerst beim Standard-Widget.

Wenn Sie nichts angeklickt haben und das Widget aktiviert und sichtbar ist, nimmt es die gesamte Breite des Bildschirms ein. Das werden wir also ändern.

Der angezeigte Befehl ist der Befehl „story“ vom Typ „info“ und vom Untertyp „string“.

Was mir morgens Freude bereitet, ist, nach dem Aufwachen ein VDM zu lesen. So sehe ich, dass es noch Schlimmeres gibt als mich :D

Aber ich habe meine Brille nicht dabei und derzeit kann ich die Anzeige auf dem Widget nicht lesen…

Also werden wir das Design ändern, indem wir der Befehlszeile „story“ eine Vorlage zuweisen.

Einfacher geht es nicht.

Ich schaue mal nach ==> [HIER](https://github.com/jeedom/core/tree/alpha/core/template/dashboard)

Ich suche eine Vorlage für cmd.info.string (unser Befehl ist vom Typ „info“ mit dem Untertyp „string“). Das ist nicht schwer, es gibt nur zwei (default oder tile).

Ich wende die Vorlage „cmd.info.string.tile.html“ auf meinen Befehl an.

Dazu öffne ich die Datei vdm.class.php, die Funktion postSave(), und füge die Vorlage „tile“ für den Befehl „story“ hinzu, indem ich die Methode setTemplate() anwende.

```php
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
```

Das Dashboard aktualisieren.

Das ist schon besser, aber das Widget nimmt immer noch die gesamte Breite des Dashboards ein. Wir werden das also korrigieren. Standardmäßig sind die Breite und die Höhe des Geräte-Widgets (eqLogic) auf „Auto“ eingestellt.

Wir werden also die Breite des Widgets (Gerät => eqLogic) mithilfe der Methode setDisplay() ändern, die von der Klasse eqLogic geerbt wurde. Die Höhe lassen wir auf „Auto“ eingestellt.

Dazu müssen Sie lediglich Folgendes hinzufügen

```php
$this->setDisplay("width","800px");
```

Ja, aber!! Denn es gibt ein Aber. Versuchen Sie, das in die Funktion postsave() oder postUpdate() einzufügen, und die Änderung wird nicht berücksichtigt. Warum? Nun, man muss die Dokumentation des Plugins lesen ==>HIER

Nachdem Sie den Text nun sorgfältig gelesen haben, wissen Sie, dass Sie die Methode preSave() verwenden müssen.

```php
public function preSave() {
  $this->setDisplay("width","800px");
}
```

Registrieren Sie ein Gerät und aktualisieren Sie das Dashboard.

# Einstellungen. Optionen

> **WICHTIG**
>
> Dies ist ein wichtiges Kapitel, das man verstehen muss, bevor man mit dem nächsten Abschnitt fortfährt.

Bisher haben wir also drei Klassen aus dem Jeedom-Core verwendet: EqLogic, cmd und cron. Zur Information: Wir fügen eine vierte hinzu, nämlich die Klasse „plugin“ in der Datei „vdm.php“, die Sie öffnen und offen lassen sollten, da wir sie bearbeiten werden.

```php
$plugin = plugin::byId('vdm'); // appelle la classe plugin du core
```

Man muss verstehen, dass alles darauf ausgerichtet ist, uns das Leben zu erleichtern.

Für eine interne Einstellung/Option des Plugins verwenden wir eine der Methoden der Klasse „eqLogic“ aus dem Core: setConfiguration(), wobei wir die gewünschten Parameter hinzufügen. Zum Beispiel:

```php
$this->setConfiguration("type","mon_type"); // si on veut définir un paramètre type de valeur mon_type. Comme on a défini la largeur du widget via la méthode setDisplay()
```

Um dem Benutzer die Wahl zu lassen, kehren wir zur Datei „desktop.php“ zurück, die Sie offen gelassen haben, da Sie diese Übung genauestens befolgen :D

Suchen

```html
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="city" placeholder="param1"/>
```

Und ersetzen Sie durch

```html
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/> //Important de laisser la classe eqLogicAttr
```

Speichern Sie die Einstellungen und rufen Sie ein Gerät des Plugins auf, das Sie bereits gemäß dieser praktischen Übung erstellt haben (bei Bedarf die Seite aktualisieren).

Geben Sie im Feld „Einstellung“ eines Geräts „zufällig“ ein und speichern Sie die Einstellung.

Perfekt, die Einstellung wurde gespeichert.

![Bild](../images/tutorial_parametre1.png)

Ganz einfach, oder? Deshalb darf man diese Codezeile auf keinen Fall ändern, wie im ersten Menü „Test“ angegeben. Sie erledigt die ganze Arbeit.

```php
<?php include_file('core', 'plugin.template', 'js');?> //Chargement du fichier core/js/plugin.template.js (en partant de la racine du site)
```

Wenn Sie sich die Datei „desktop.php“ genauer ansehen, finden Sie dort

```html
<input type="text" class="eqLogicAttr form-control" data-l1key="id" style="display:none;" /> // retourne l’id(unique) de l’eqLogic(équipement) que l’on va pouvoir récupérer via $this->getId() ;
```

```html
{% raw %}<input type="text" class="eqLogicAttr form-control" data-l1key="name" placeholder="{{Nom de l'équipement}}"/>// retourne le nom de l’eqLogic(équipement) que l’on va pouvoir récupérer via $this->getName();{% endraw %}
```

usw.

Wenn Sie das alles verstanden haben, können wir mit dem nächsten Schritt fortfahren. Aber vorher nehmen wir noch eine Änderung in der Datei „desktop.php“ vor.

```html
{% raw %}<label class="col-sm-3 control-label">{{Paramètre}}</label>{% endraw %}
```

Von

```html
{% raw %}<label class="col-sm-3 control-label">{{Type de vdm}}</label>{% endraw %}
```

Wichtig: Der Text in den geschweiften Klammern entspricht dem Text, der übersetzt wird, wenn Sie das Plugin auf den Markt stellen.

Als Nächstes werden wir das Plugin weiterentwickeln, indem wir einen gewünschten VDM-Typ (Zufall, „Epicées“ oder „Top“) sowie einen individuellen Cron-Job für jedes Gerät auswählen.

# Verwendung der Optionen/Einstellungen

Um noch einen Schritt weiter zu gehen und das vorherige Kapitel besser zu verstehen, geben wir dem Benutzer die Möglichkeit, einen VDM-Typ auszuwählen (zufällig, Obstsorten oder Top-Songs).

Man könnte ihn einfach in das Eingabefeld „Art des VDM“ tippen lassen: „zufällig“, „gewürzt“ oder „Top-Auswahl“, aber wir gehen anders vor und lassen ihn über ein Auswahlfeld wählen.

Wenn Sie alles richtig mitverfolgt haben, sollte sich in der Datei „desktop.php“ Folgendes befinden

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

Das werden wir ersetzen durch

```html
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
```

Hier nimmt der Parameter „type“ den Wert des ausgewählten Dropdown-Menüs an, also „aleatoire“, „epicees“ oder „tops“.

Nun werden wir unseren Parameter in der Funktion `randomVdm()` in der Datei `vdm.class.php` berücksichtigen.

Suchen

```php
$url = "http://www.viedemerde.fr/aleatoire";
```

Und ersetzen Sie durch

```php
$type = $this->getConfiguration("type", "aleatoire"); //si le paramètre est vide ou n’existe pas, on prends le type aleatoire
$url = "http://www.viedemerde.fr/{$type}";
```

Ändern Sie nun den Wert des Dropdown-Menüs bei einem Gerät, speichern Sie die Änderung und gehen Sie zum Dashboard, um zu sehen, wie sich das auswirkt.
