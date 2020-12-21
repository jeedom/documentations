# Entwickle auf Jeedom

> **Wichtig**
>
> Dieses Tutorial wurde von ZygOm4t1k geschrieben, dem wir herzlich danken. Sie finden das Original [hier](https:/./.forum.jeedom.com/.viewtopic.php?f=27&t=37630#p621495)

In diesem kurzen Tutorial wird erklärt, wie Sie ein Plugin erstellen. Für das Beispiel erstellen wir ein Plugin, das einen Satz von der viedemerde-Site zurückgibt.de (Das Plugin ist skalierbar).

Es ersetzt nicht die [offizielle Dokumentation](https:/./.jeedom.github.io/.plugin-template/de_DE/)

# Erstellen Sie die Plugin-Basis

Zu Beginn müssen Sie einen Namen und eine ID ermitteln (die nicht existieren dürfen)) :

- Name : Kacke das Leben
- Identifikation : vdm

Laden Sie das Vorlagen-Plugin herunter, um das zu erhalten [Basis](https:/./.github.com/.jeedom/.plugin-template/.archive/.master.zip)

Entpacken Sie die Datei . Vous obtiendrez un dossier « plugin-template-master » contenant des dossiers 3rdparty , core , desktop…

Los geht's.

Renommer le dossier « plugin-template-master » en « vdm » (l'id) du plugin.

1 / Öffnen Sie die Datei plugin_info / info.json und bearbeiten Sie die.

````json
{
    "id" : "vdm",
    "name" : "Kacke das Leben",
    "description" : "Plugin zum Abrufen des neuesten vdm",
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

Copier coller le code ci-dessus.

J'ai changé l'Identifikation (vdm) , le nom , ajouter une Beschreibung , l'auteur et la catégorie.

erfordern : version minimale de jeedom pour avoir accés au plugin sur le market.

Changelog, documentation, Sprache , Kompatibilität nuls pour le moment. J'y reviendrai plus tard

2/. Nous allons renommer les fichiers nécessaires pour que le plugin soit reconnu par Jeedom

-   Renommer le fichier ``core/.ajax/.template.ajax.php`` en ``vdm.ajax.php``
-   Renommer le fichier ``core/.class/.template.class.php`` en ``vdm.class.php`` et ouvrez le pour l'éditer.
- Remplacer ``class template extends eqLogic {`` par ``class vdm extends eqLogic {``
- et ``class templateCmd extends cmd`` par ``class vdmCmd extends cmd``
- Renommer le fichier core/.php/.template.inc.php en core/.php/.vdm.inc.php
- Renommer le fichier desktop/.php/.template.php en desktop /.php/.vdm.php et ouvrez le.
- Remplacer ``$plugin = plugin::byId('template');;`` Von ``$plugin = plugin::byId(‘vdm');;``
- Remplacer ``{% raw %}{{Ajouter un template}}{% endraw %}`` Von ``{% raw %}{{Ajouter un équipement}}{% endraw %}``
- Remplacer ``<legend>{{Mes templates}}</.legend>`` Von ``{% raw %}<legend>{{Mes équipement}}</.legend>{% endraw %}``
- Remplacer ``{% raw %}{{Name de l'équipement template}}{% endraw %}`` Von ``{% raw %}{{Name de l'équipement }}{% endraw %}``
- Remplacer ``{% raw %}{{template param 1}}{% endraw %}`` Von ``{% raw %}{{Paramètres}}{% endraw %}``
- Remplacer ``<?php include_file('desktop', 'template', 'js', 'template');;?>`` Von ``<?php include_file('desktop', vdm, 'js', vdm);;?>``

Et rien d'autre , ne pas changer la ligne ``<?php include_file('core', 'plugin.template', 'js');;?>``

- Renommer le fichier ``desktop/.modal/.modal.template.php`` en ``desktop/.modal/.modal.vdm.php``
- Renommer le fichier ``desktop/.js/.template.js`` en ``desktop/.js/. vdm.js``
- Ouvrir le fichier ``plugin_info/.install.php``

Et renommer les fonctions comme suit

````php
function vdm_install() {

}

function vdm_update() {

}


function vdm_remove() {

}
````

Hier ist das Plugin fertig, aber es bleibt die Anpassung und das zu aktualisierende Symbol : [Dokumentation](https:/./.doc.jeedom.com/de_DE/dev/.Icone_de_plugin)

Fügen Sie das Symbol im Ordner plugin_info unter dem Namen vdm_icon.png hinzu

in meinem Fall

![image](images/.tutorial_vdm_icon.png)

Jetzt können wir den vdm-Ordner in den Jeedom-Plugin-Ordner kopieren und zur Plugin-Verwaltung gehen. Wir finden das Plugin.

![image](images/.tutorial_vdm_plugin.png)

Wir aktivieren es und dann Plugins / Monitoring / Vie de Merde

![image](images/.tutorial_vdm_desktop1.png)

Es ist nicht richtig, weil die Farbe der meisten nicht mit der Farbe des Symbols übereinstimmt.

Ich öffne die Datei ``desktop/.php/.desktop.php`` zu korrigieren.

````html
{% raw %}
      <div class="cursor eqLogicAction" data-action="add" style="text-align: center;; background-color : #ffffff;; height : 120px;;margin-bottom : 10px;;padding : 5px;;border-radius: 2px;;width : 160px;;margin-left : 10px;;" >
        <i class="fa fa-plus-circle" style="font-size : 6em;;color:#94ca02;;"></.i>
        <br>
        <span style="font-size : 1.1. Position:relativ; oben : 23px; Wortumbruch: Break-All, Leerraum: Pre-Wrap; Word-Wrap: Break-Word, Farbe:#94ca02">{{Ajouter}}</.span>
      </.div>
{% endraw %}
````

Je remplace ``color:#94ca02;;"`` par ``color:#00A9EC;;"``

On remarque aussi que les textes ne sont pas alignés donc on rectifie le style de la configuration (propriété top)

````
{% raw %}<span style="font-size : 1.1. Position:relativ; oben : 15px; Wortumbruch: Break-All, Leerraum: Pre-Wrap; Word-Wrap: Break-Word, Farbe:#767676 "> {{Konfiguration}} </span>{% endraw %}
````

par

````
{% raw %}<span style="font-size : 1.1. Position:relativ; oben : 23px; Wortumbruch: Break-All, Leerraum: Pre-Wrap; Word-Wrap: Break-Word, Farbe:#767676 "> {{Konfiguration}} </span>{% endraw %}
````

![image](images/.tutorial_vdm_desktop2.png)

Voilà la Basis est prête. Vous devriez avoir le plugin d'actEibe mais pour le moment il ne fait rien.

# Les commandes

Le but du plugin sera de récupérer une vdm aléatoire et l'afficher sur le dashboard.

Il faut donc créer une commande de Typ info pour stocker cette information. Elle sera de sous-Typ « String » car c'est une chaîne de caractère.

Pour l'exemple nous allons ajouter une commande qui rafraîchit l'information. Ce sera donc une commande de Typ action et sous-Typ other

- Créer un équipement « vdm1 » en cliquant sur le +. Aktivieren Sie es und machen Sie es sichtbar. Choisissez un objet et l'équipement doit apparaître sur le dashboard( selon l'objet).

A ce moment, il n'y a pas de commandes qui apparaissent dans l'onglet commande s, ni sur le widget.

Öffnen Sie die Datei core / class / vdm.class.PHP und Suche la fonction postSave() (Lire la doc du plugin template si pas encore fait)

On crée les 2 commandes

````php
public function postSave() {
    $info = $this->getCmd(null, 'story');;
    Eibe (!is_object($info)) {
        $info = new vdmCmd();;
        $info->setName(__('Histoire', __FILE__));;
    }
    $info->setLogicalId('story');;
    $info->setEqLogic_id($this->getId());;
    $info->setType('info');;
    $info->setSubType('string');;
    $info->save();;

    $refresh = $this->getCmd(null, 'refresh');;
    Eibe (!is_object($refresh)) {
        $refresh = new vdmCmd();;
        $refresh->setName(__('Rafraichir', __FILE__));;
    }
    $refresh->setEqLogic_id($this->getId());;
    $refresh->setLogicalId('refresh');;
    $refresh->setType('action');;
    $refresh->setSubType('other');;
    $refresh->save();;
}
````

- Créer un autre équipement « vdm2 » en cliquant sur le +. Auf der Registerkarte Befehle wurden die Befehle angezeigt. Aktivieren Sie es und machen Sie es sichtbar. Wählen Sie ein übergeordnetes Objekt aus und sehen Sie, wie es im Dashboard aussieht.
- Enregistrer le premier équipement « vdm1 » pour créer les commandes. Siehe auch das Rendering im Widget.

Auf der Registerkarte Befehle sollten Sie sehen.

![image](images/.tutorial_vdm_cmd1.png)

Öffnen Sie desktop / php / vdm.PHP, um den HTML-Code dieser Tabelle zu finden.

````
{% raw %}
<a class="btn btn-success btn-sm cmdAction pull-right" data-action="add" style="margin-top:5px; "><i class="fa fa-plus-circle"></i> {{Aufträge}} </a><br/.><br/.>
<table id="table_cmd" class="table table-bordered table-condensed">
    <thead>
        <tr>
            <th>{{Nom}}</.th><th>{{Type}}</.th><th>{{Action}}</.th>
        </.tr>
    </.thead>
    <tbody>
    </.tbody>
</.table>
{% endraw %}
````

Zum Zeitpunkt der Anzeige ist dies das Desktop / js / vdm-Skript.js, das aufgerufen wird und die Funktion addCmdToTable startet.

````js
{% raw %}
Funktion addCmdToTable (_cmd) {
    Eibe (!isset (_cmd)) {
        var _cmd = {Konfiguration: {}};;
    }
    Eibe (!isset (_cmd.configuration)) {
        _cmd.configuration = {};
    }
    <html>var tr = '.id) + '">';
    tr + = '<td> ';
    <html>tr + = ':keine; "> ';
    <html>tr + = ' : 140px; "placeholder =" {{Name}} "> ';
    tr + = '</td> ';
    tr + = '<td> ';
    <html>tr + = '.Typ) + '">' + jeedom.cmd.availableType () + '';
    <html>tr + = '.Subtyp) + '">';
    tr + = '</td> ';
    tr + = '<td> ';
    if (is_numeric (_cmd.id)) {
        tr + = '<a class="btn btn-default btn-xs cmdAction" data-action="configure"><i class="fa fa-cogs"></i></a> ';
        tr + = ' <a class="btn btn-default btn-xs cmdAction" data-action="test"><i class="fa fa-rss"></i>{{Test}}</a> ';
    }
    tr + = '<i class="fa fa-minus-circle pull-right cmdAction cursor" data-action="remove"></i> ';
    tr + = '</td> ';
    tr + = '</tr> ';
    $('#table_cmd tbody').append(tr);;
    $('#table_cmd tbody tr:last').setValues(_cmd, '.cmdAttr');;
    if (isset (_cmd.type)) {
        $('#table_cmd tbody tr:last .cmdAttr[data-l1key=type]').value(init(_cmd.type));;
    }
    jeedom.cmd.changeType ($ ('# table_cmd tbody tr:last '), init (_cmd.subType));
}
{% endraw %}
````

Cela se fait automatiquement.

Je souhaite ajouter les options Affichage et historiser pour chaque commande.

J'édite le code HTML du tableau dans le fichier desktop.php en ajoutant une colonne ..

````
{% raw %}<th>{{Nom}}</.th><th>{{Type}}</.th><th>{{Configuration}}</.th><th>{{Action}}</.th>{% endraw %}
````

Puis éditer desktop.js ,trouver

````js
    <html>tr + = '.Subtyp) + '">';
    tr + = '</td> ';
    tr + = '<td> ';
    if (is_numeric (_cmd.id)) {
````

Wir fügen die gewünschten Informationen hinzu.

````js
{% raw %}
    <html>tr + = '.Subtyp) + '">';
    tr + = '</td> ';
    tr + = '<td> ';
    tr + = ' <span><input type="checkbox" class="cmdAttr checkbox-inline" data-l1key="isHistorized" />{{Historisieren</span>}}<br/.></.span>';;
   tr + = ' <span><input type="checkbox" class="cmdAttr checkbox-inline" data-l1key="isVisible" />{{Anzeige</span>}}<br/.></.span>';;
   tr + = '</td> ';
    tr + = '<td> ';
    if (is_numeric (_cmd.id)) {
{% endraw %}
````

Je laisse le bouton pour créer une commande mais je souhaite qu'il soit à gauche.

````
{% raw %}<a class="btn btn-success btn-sm cmdAction pull-right" data-action="add" style="margin-top:5px; "><i class="fa fa-plus-circle"></i> {{Aufträge}} </a><br/.><br/.>{% endraw %}
````

Je change la class pull-right en pull-left

````
{% raw %}<a class="btn btn-success btn-sm cmdAction pull-left" data-action="add" style="margin-top:5px; "><i class="fa fa-plus-circle"></i> {{Aufträge}} </a><br/.><br/.>{% endraw %}
````

Vohier le rendu.Die Optionen de configuration (Affichage et historiser) sont bien présentes.

![image](images/.tutorial_vdm_cmd2.png)

Voilà il reste à récupérer une vdm aléatoire et à utiliser les commandes.

# Récupération des informations

Pour récupérer une vdm de manière aléatoire.

````php
$url = "http:/./.www.viedemerde.fr/.aleatoire";;
$data = file_get_contents($url);;
@$dom = new DOMDocument();;
libxml_use_internal_errors (false);
$dom->loadHTML('<?xml encoding="UTF-8">' .$data);;
libxml_use_internal_errors (true);
$xpath = new DOMXPath($dom);;
$divs = $xpath->query('/./.article[@class="art-panel col-xs-12"]/./.div[@class="panel-content"]/./.p/./.a');;
return $ divs [0] -> nodeValue;
````

Öffnen Sie die Datei core / class / vdm.class.php und für die Klasse vdm, die von egLogic-Methoden erbt, erstelle ich eine Funktion randomVdm

````php
öffentliche Funktion randomVdm() {
    $url = "http:/./.www.viedemerde.fr/.aleatoire";;
    $data = file_get_contents($url);;
    @$dom = new DOMDocument();;
    libxml_use_internal_errors (true);
    $dom->loadHTML($data);;
    libxml_use_internal_errors (false);
    $xpath = new DOMXPath($dom);;
    $divs = $xpath->query('/./.article[@class="art-panel col-xs-12"]/./.div[@class="panel-content"]/./.p/./.a');;
    return $ divs [0] -> nodeValue;
}
````

Maintenant on va updater la commande info(story) avec cette information en lançant la commande action(refresh).
Toujours dans core/.class/.vdm.class.php pour la class vdmCmd on va utiliser la méthode execute

````php
public function execute($_options = array()) {

}
````

C'est hier qu'on va définir ce qu'il va se passer quand on lance la commande « Rafraîchir ». Die Klasse vdmCmd hat alle Methoden der Klasse cmd (Core jeedom) geerbt)

On vérifie le logicalIdentifikation de la commande lancée et si « refresh » on lance les actions

````php
switch ($ this-> getLogicalId()) {
    Fall 'aktualisieren': // LogicalId des Aktualisierungsbefehls, den wir in der Postsave-Methode der vdm-Klasse erstellt haben .
    // Code zum Aktualisieren meiner Bestellung
    break;;
}
````

Maintenant il reste à lancer la fonction randomVdm() . On récupère pour cela , l'eqLogic ( l'équipement) de la commande lancer et on lance la fonction

````php
$eqlogic = $this->getEqLogic();; /./. Récupération de l'eqlogic
$info = $eqlogic-> randomVdm() ;; /./.Lance la fonction et stocke le résultat dans la variable $info
````

On met à jour la commande « story » avec la variable $info. Wir werden die checkAndUpdateCmd-Methode der eqlogic-Klasse verwenden

````php
$eqlogic->checkAndUpdateCmd('story', $info);;
````

Ce qui donne au final

````php
public function execute($_options = array()) {
    $eqlogic = $this->getEqLogic();; /./.récupère l'éqlogic de la commande $this
    switch ($ this-> getLogicalId()) {    /./.vérifie le logicalIdentifikation de la commande
        Fall 'aktualisieren': // LogicalId des Aktualisierungsbefehls, den wir in der Postsave-Methode der vdm-Klasse erstellt haben .
            $info = $eqlogic->randomVdm();;  /./.On lance la fonction randomVdm() pour récupérer une vdm et on la stocke dans la variable $info
            $eqlogic->checkAndUpdateCmd('story', $info);; /./. on met à jour la commande avec le LogicalIdentifikation "story"  de l'eqlogic
            break;;
    }
}
````

Gehen Sie nun zu einem erstellten Gerät und starten Sie den Befehl Aktualisieren. Puis la commande « Histoire » qui doit être à jour.

Im Dashboard werden Informationen angezeigt. Klicken Sie auf das Aktualisierungssymbol, um die Informationen zu ändern

Wir werden dann die Größe des Widgets definieren und es ein wenig anpassen

Automatisieren Sie dann die Aktualisierung.

# Informationen aktualisieren (cron)

Das Plugin ist funktionsfähig, macht aber im Moment nicht viel. Si vous cliquer sur la commande « refresh » , la commande « story » se met à jour mais sinon rien.

Beachten Sie, dass ich es für die Bestellung mit logischer ID benenne. Und es ist wichtig. Eine eindeutige logische ID pro Gerät (eqLogic) vereinfacht die Arbeit.

Wir werden nun sehen, wie der Befehl mit den nativen Funktionen des Kerns aktualisiert wird : Crons

Es gibt mehrere :

- cron : jede Minute aktualisieren
- Cron5 : Alle 5 Minuten aktualisieren
- Cron15 : Alle 15 Minuten aktualisieren
- Cron30 : Alle 30 Minuten aktualisieren
- CronHourly : äh ... jede Stunde
- CronDaily : gut 1 / Tag

In Anbetracht des Plugins werden wir jede Stunde aktualisieren (lasst uns verrückt sein). Also werden wir die cronHourly-Funktion verwenden().

Wir werden daher die Datei vdm.class öffnen.PHP und Suche

````php
/.*
 * Funktion wird automatisch stündlich von Jeedom ausgeführt
  öffentliche statische Funktion cronHourly() {

  }
 */.
````

Décommenter le code

````php
öffentliche statische Funktion cronHourly() {

}
````

Unsere Funktion ist betriebsbereit

Jetzt müssen Sie alle Geräte von unserem Plugin wiederherstellen,

````php
self::byType ('vdm') // Array, das alle Plugin-Geräte enthält
````

et les trier 1 par 1

````php
foreach (self::byType('vdm') as $vdm) {

}
````

Bevor wir etwas unternehmen, überprüfen wir, ob das Gerät aktiv ist

````php
if ($ vdm-> getIsEnable () == 1) {

}
````

Voila maintenant on recherche la commande « refresh » de l'équipement (eqLogic)

````php
$cmd = $vdm->getCmd(null, 'refresh');;
````

Wenn es nicht existiert, setzen wir die Schleife (foreach) fort, andernfalls führen wir sie aus

````php
Eibe (!is_object ($ cmd)) {
continue;;
}
$cmd->execCmd();;
````

Ce qui donne au final

````php
öffentliche statische Funktion cronHourly () {
    foreach (self::byType('vdm') as $vdm) {/./.parcours tous les équipements du plugin vdm
        if ($ vdm-> getIsEnable () == 1) {/./.vérifie que l'équipement est actif
            $cmd = $vdm->getCmd(null, 'refresh');;/./.retourne la commande "refresh si elle existe
            Eibe (!is_object ($ cmd)) {// Wenn der Befehl nicht existiert
              mach weiter; // setze die Schleife fort
            }
            $cmd->execCmd();; /./. la commande existe on la lance
        }
    }
}
````

Pour tester, dans jeedom , aller dans configuration/.moteur de tâches et lancer le cron de class « plugin » fonction « CronHourly ».

Informationen werden aktualisiert.

Es ist gut, aber es passt nicht zu mir. A la création de l'équipement, la commande « story » ne se met pas à jour.

Also verbessern wir den Code.

Für die Erstellung der Aufträge haben wir die postSave-Methode verwendet(). Wir werden die postUpdate () -Methode verwenden, um die Informationen zu aktualisieren.

Der einfachste Weg, da es nur einen Befehl gibt und dieser in postSave erstellt wird

````php
    öffentliche Funktion postUpdate() {
        $cmd = $this->getCmd(null, 'refresh');; /./. On recherche la commande refresh de l'équipement
        if (is_object ($ cmd)) {// es existiert und wir führen den Befehl aus
             $cmd->execCmd();;
        }
    }
````

Il faut tester, ça fonctionne?

Mais vohier une alternative qui peut s'avérer plus utile dans des cas plus complexe

Dans la fonction postUpdate() , on lance la function cronHourly() avec l'Identifikation de l'équipement

````php
öffentliche Funktion postUpdate() {
    self::cronHourly($this->getId());;/./. lance la fonction CronHourly avec l'Identifikation de l'eqLogic
}
````

In diesem Fall ändern wir jedoch die Funktion cronHourly()

````php
öffentliche statische Funktion cronHourly ($ _ eqLogic_id = null) {
    if ($ _eqLogic_id == null) {// Die Funktion hat kein Argument, daher suchen wir nach allen Plugin-Geräten
        $eqLogics = self::byType('vdm', true);;
    } else {// Die Funktion hat die (eindeutige) Argument-ID eines Geräts (eqLogic))
        $eqLogics = array(self::byId($_eqLogic_id));;
    }

    foreach ($ eqLogics als $ vdm) {
        if ($ vdm-> getIsEnable () == 1) {// überprüfe, ob das Gerät aktiv ist
            $cmd = $vdm->getCmd(null, 'refresh');;/./.retourne la commande "refresh si elle existe
            Eibe (!is_object ($ cmd)) {// Wenn der Befehl nicht existiert
              mach weiter; // setze die Schleife fort
            }
            $cmd->execCmd();; /./. la commande existe on la lance
        }
    }
}
````

Après vous pouvez changer la fréquence du cron selon l'importance de vos informations à récupérer.

Je ne peux que vous invitez à prendre le temps d'aller sur cette page pour en savoir plus ==> [hier](https:/./.jeedom.github.io/.documentation/.phpdoc/.index.html)

Et encore mieux d'aller sur le github du core ==> [hier](https:/./.github.com/.jeedom/.core/.tree/.alpha/.core/.class)

Mettez le nez de dedans pour maîtrisez encore plus .

Le plugin est fonctionnel en l'état.

Je prendrai le temps d'ajouter la façon de mettre en place un cron personnalisé selon l'équipement .

# Le widget

Pas une mince affaire le widget mais on va rester sur le widget par défaut pour le moment.

Si vous n'avez rien touché, équipement activé et visible, le widget prend toute la largeur de l'écran. On va donc le changer.

La commande qui apparaît est la commande «story» de Typ info , sous-Typ string

Mon plaisir est de me lever le matin est de lire une vdm au réveil. Ça me permet de voir qu'il y a pire que moi :D

Mais je n'ai pas mes lunettes et actuellement le rendu sur le widget ne me permet pas de le lire…

Donc on va changer le style en affectant un template à la commande « story»

Rien de plus simple.

Je vais voir ==> [hier](https:/./.github.com/.jeedom/.core/.tree/.alpha/.core/.template/.dashboard)

Je cherche un template pour cmd.info.string( notre commande est de Typ info sous-Typ string) .Pas difficile il y en a que deux (default ou tile)

J'applique le template « cmd.info.string.tile.HTML » à ma commande.

Pour cela j'ouvre le fichier vdm.class.php , fonction postSave() et j'ajoute le template « tile » pour la commande « story » en appliquant la méthode setTemplate()

````php
$info = $this->getCmd(null, 'story');;
Eibe (!is_object($info)) {
    $info = new vdmCmd();;
    $info->setName(__('Histoire', __FILE__));;
}
$info->setLogicalId('story');;
$info->setEqLogic_id($this->getId());;
$info->setType('info');;
$info->setTemplate('dashboard','tile');;/./.template pour le dashboard
$info->setSubType('string');;
$info->save();;
````

Aktualisieren Sie das Dasboard.

Es ist besser, aber das Widget nimmt immer die Breite des Dashboards an. Also werden wir korrigieren. Von défaut la largeur du widget de l'équipement(eqLogic) et la hauteur sont à « auto ».

Wir werden daher die Breite des Widgets (Ausrüstung => eqLogic) mit der von der eqLogic-Klasse geerbten Methode setDisplay () ändern .Wir lassen die Höhe in Auto.

Fügen Sie dazu einfach hinzu

````php
$this->setDisplay("width","800px");;
````

Oui , mais !! Car il y a un mais. Essayez d'ajouter ça dans la fonction postsave() ou postUpdate() et ça ne prends pas en compte le changement. Pourquoi ? Ben faut lire la doc du plugin template ==>ICI

Maintenant que vous avez bien lu vous savez qu'Il faut utiliser la méthode preSave()

````php
public function preSave() {
    $this->setDisplay("width","800px");;
}
````

Registrieren Sie Geräte und aktualisieren Sie das Dashboard.


# Die Parameter. Die Optionen

> **Wichtig**
>
> Dies ist ein wichtiges Kapitel, das Sie verstehen müssen, bevor Sie fortfahren.

Im Moment verwenden wir daher 3 Klassen des Kerns der Freiheit : EqLogic, cmd, cron . Gehen Sie für Informationen, Wir fügen ein 4. mit dem Klassen-Plugin in der vdm-Datei.PHP, dass Sie öffnen und offen lassen, weil wir es bearbeiten werden .

````php
$plugin = plugin::byId('vdm');; /./. appelle la classe plugin du core
````

Il faut comprendre que tout est fait pour nous faciliter la tâche.

Pour un paramètre/.une option interne au plugin , on va utiliser une des méthodes de la class eqLogic du core : setConfiguration() en y ajoutant les paramètres que l'on souhaite. Von exemple :

````php
$this->setConfiguration("type","mon_type");; /./. si on veut  définir un paramètre Typ de valeur mon_type. Comme on a défini la largeur du widget via la méthode setDisplay()
````

Um die Auswahl dem Benutzer zu überlassen, kehren wir zur Desktop-Datei zurück.PHP, die Sie offen gelassen haben, weil Sie diesem TP buchstäblich folgen :D

Chercher

````
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="city" placeholder="param1"/.>
````

Und ersetzen durch

````
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/.> /./.Wichtig de laisser la classe eqLogicAttr
````

Speichern Sie und gehen Sie zu einem Plugin-Gerät, das Sie bereits erstellt haben, indem Sie dieser Übung folgen (ggf. aktualisieren).

Dans le champs « Paramètre» d'un équipement, taper « aleatoire » et sauvegarder.

Perfekt ist die Einstellung gespeichert.

![image](images/.tutorial_parametre1.png)


Es ist einfach, nein? . C'est pourquoi il ne faut surtout pas toucher à cette ligne de code comme indiqué dans le premier menu « test » . Er macht die ganze Arbeit

````
<?php include_file('core', 'plugin.template', 'js');;?>/./.Chargement du fichier core/.js/.plugin.template.js (en partant de la racine du site)
````

Wenn Sie sich die Desktop-Datei genauer ansehen.PHP vor

````
<input type="text" class="eqLogicAttr form-control" data-l1key="id" style="display : none;;" /.> /./. retourne l'id(unique) de l'eqLogic(équipement) . Qu'on va pouvoir récupérer via $this->getId() ;;
````

````
{% raw %}
<input type="text" class="eqLogicAttr form-control" data-l1key="name" placeholder="{{Name de l'équipement}}"/.>/./. retourne le nom de l'eqLogic(équipement) . Qu'on va pouvoir récupérer via $this->getName() ;;
{% endraw %}
````

Etc…

Wenn Sie das alles gut verstanden haben, können wir weitermachen. Aber zuerst werden wir die Datei desktop.php ändern

````
{% raw %}
<label class="col-sm-3 control-label">{{Paramètre}}</.label>
{% endraw %}
````

Par

````
{% raw %}
<label class="col-sm-3 control-label">{{Type de vdm}}</.label>
{% endraw %}
````

Wichtig : Der Text in geschweiften Klammern entspricht dem Text, der übersetzt wird, wenn Sie das Plugin auf den Markt bringen

Im Übrigen werden wir das Plugin entwickeln, indem wir einen gewünschten vdm-Typ (zufällig oder scharf oder oben) sowie einen personalisierten Cron für jedes Gerät auswählen.

# Verwendung von Optionen / Parametern

Um weiter zu gehen und das vorherige Kapitel zu verstehen, überlassen wir es dem Benutzer, einen vdm-Typ auszuwählen (zufällig oder scharf oder oben)

On pourrait le laisser taper dans l'input « Type de vdm » : zufällig oder scharf oder oben, aber wir werden es anders machen, indem wir es über ein Auswahl-Tag auswählen lassen

Wenn Sie alles befolgt haben, sollten Sie in der Datei desktop.php haben

````
{% raw %}
 <div class="form-group">
  <label class="col-sm-3 control-label">{{Type de vdm}}</.label>
  <div class="col-sm-3">
      <input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/.>
  </.div>
</.div>
{% endraw %}
````

Was wir ersetzen werden

````
{% raw %}
<div class="form-group">
    <label class="col-sm-3 control-label" >{{ Type de vdm }}</.label>
    <div class="col-sm-3">
        <select class="form-control eqLogicAttr" data-l1key="configuration" data-l2key="Typ ">
            <option value="aleatoire">{{Aleatoire}}</.option>
            <option value="epicees">{{Coquin}}</.option>
            <option value="tops">{{Best}}</.option>
        </.select>
    </.div>
</.div>
{% endraw %}
````

Ici le paramètre « type» prendra la valeur du select choisi soit aléatoire ou epicees ou tops.

Jetzt werden wir unseren Parameter in der Funktion randomVdm () in der Datei vdm.class.php berücksichtigen

Chercher

````php
$url = "http:/./.www.viedemerde.fr/.aleatoire";;
````

Und ersetzen durch

````php
$Typ = $this->getConfiguration("Typ ");;
if($Typ == "") { /./.si le paramètre est vide ou n'existe pas
    $Typ = "aleatoire";; /./.on prends le Typ aleatoire
}
$url = "http:/./.www.viedemerde.fr/." .$Typ  ;;
````

Ändern Sie nun den Wert der Auswahl auf einem Gerät, speichern Sie und gehen Sie zum Dashboard, um zu sehen, was es gibt.
