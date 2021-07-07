# Entwickle auf Jeedom

> **Wichtig**
>
> Dieses Tutorial wurde von ZygOm4t1k geschrieben, dem wir herzlich danken. Sie finden das Original [hier](https://forum.jeedom.com/viewtopic.php?f=27&t=37630#p621495)

In diesem kurzen Tutorial wird erklärt, wie Sie ein Plugin erstellen. Für das Beispiel erstellen wir ein Plugin, das einen Satz von der viedemerde-Site zurückgibt.de (Das Plugin ist skalierbar).

Es ersetzt in keiner Weise die offizielle Dokumentation.

# Erstellen Sie die Plugin-Basis

Zu Beginn müssen Sie einen Namen und eine ID ermitteln (die nicht existieren dürfen)) :

- Name : Kacke das Leben
- Identifikation : vdm

Laden Sie das Vorlagen-Plugin herunter, um das zu erhalten [Basis](https://github.com/jeedom/plugin-template/archive/master.zip)

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

2/ Nous allons renommer les fichiers nécessaires pour que le plugin soit reconnu Von Jeedom

-   Renommer le fichier ``core/ajax/template.ajax.php`` en ``vdm.ajax.php``
-   Renommer le fichier ``core/class/template.class.php`` en ``vdm.class.php`` et ouvrez le pour l'éditer.
- Remplacer ``class template extends eqLogic {`` Von ``class vdm extends eqLogic {``
- et ``class templateCmd extends cmd`` Von ``class vdmCmd extends cmd``
- Renommer le fichier core/php/template.inc.php en core/php/vdm.inc.php
- Renommer le fichier desktop/php/template.php en desktop /php/vdm.php et ouvrez le.
- Remplacer ``$plugin = plugin::byId('template');;`` Par ``$plugin = plugin::byId(‘vdm');;``
- Remplacer ``{% raw %}{{Ajouter}}{% endraw %}`` Par ``{% raw %}{{Ajouter un équipement}}{% endraw %}``
- Remplacer ``{% raw %}<legend>{{Mes templates}}</legend>{% endraw %}`` Par ``{% raw %}<legend>{{Mes équipements}}</legend>{% endraw %}``
- Modifier ``{% raw %}{{Aucun équipement Template n'est parametré}}{% endraw %}`` Par ``{% raw %}{{Aucun équipement NomEquipement n'est parametré}}{% endraw %}``
- Remplacer ``<?php include_file('desktop', 'template', 'js', 'template');;?>`` Par ``<?php include_file('desktop', 'vdm', 'js', 'vdm');;?>``

Et rien d'autre , ne pas changer la ligne ``<?php include_file('core', 'plugin.template', 'js');;?>``

- Renommer le fichier ``desktop/modal/modal.template.php`` en ``desktop/modal/modal.vdm.php``
- Renommer le fichier ``desktop/js/template.js`` en ``desktop/js/ vdm.js``
- Ouvrir le fichier ``plugin_info/install.php``

Et renommer les fonctions comme suit

````php
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

````html
{% raw %}
      <div class="cursor eqLogicAction" data-action="add" style="text-align: center;; background-color : #ffffff;; height : 120px;;margin-bottom : 10px;;padding : 5px;;border-radius: 2px;;width : 160px;;margin-left : 10px;;" >
        <i class="fa fa-plus-circle" style="font-size : 6em;;color:#94ca02;;"></i>
        <br>
        <span style="font-size : 1.1. Position:relative;; top : 23px; Wortumbruch: Break-All, Leerraum: Pre-Wrap; Word-Wrap: Break-Word, Farbe:#94ca02">{{Ajouter}}</span>
      </div>
{% endraw %}
````

Je remplace ``color:#94ca02;;"`` Von ``color:#00A9EC;;"``

On remarque aussi que les textes ne sont pas alignés donc on rectifie le style de la configuration (propriété top)

````html
{% raw %}<span style="font-size : 1.1. Position:relative;; top : 15px;;word-break: Break-All, Leerraum: Pre-Wrap; Word-Wrap: Break-Word, Farbe:#767676 "> {{Konfiguration}} </span>{% endraw %}
````
par

````html
{% raw %}<span style="font-size : 1.1. Position:relativ; oben : 23px; Wortumbruch: Break-All, Leerraum: Pre-Wrap; Word-Wrap: Break-Word, Farbe:#767676 "> {{Konfiguration}} </span>{% endraw %}
````

![image](images/tutorial_vdm_desktop2.png)

Voilà la Basis est prête. Vous devriez avoir le plugin d'actEibe mais pour le moment il ne fait rien.

# Les commandes

Le but du plugin sera de récupérer une vdm aléatoire et l'afficher sur le dashboard.

Il faut donc créer une commande de Typ info pour stocker cette information. Elle sera de sous-Typ « String » car c'est une chaîne de caractère.

Pour l'exemple nous allons ajouter une commande qui rafraîchit l'information. Ce sera donc une commande de Typ action et sous-Typ other

- Créer un équipement « vdm1 » en cliquant sur le +. Aktivieren Sie es und machen Sie es sichtbar. Choisissez un objet et l'équipement doit apparaître sur le dashboard( selon l'objet).

A ce moment, il n'y a pas de commandes qui apparaissent dans l'onglet commande s, ni sur le widget.

Ouvrir le fichier core/class/vdm.class.php et chercher la fonction postSave() (Lire la doc du plugin template si pas encore fait)

On crée les 2 commandes

````php
public function postSave() {
    $info = $this->getCmd(null, 'story');;
    Eibe (!is_object ($ info)) {
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

![image](images/tutorial_vdm_cmd1.png)

Öffnen Sie desktop / php / vdm.PHP, um den HTML-Code dieser Tabelle zu finden.

````
{% raw %}
<a class="btn btn-success btn-sm cmdAction pull-right" data-action="add" style="margin-top:5px; "><i class="fa fa-plus-circle"></i> {{Aufträge}} </a><br/><br/>
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

````html
{% raw %}<th>{{Nom}}</th><th>{{Type}}</th><th>{{Configuration}}</th><th>{{Action}}</th>{% endraw %}
````

Bearbeiten Sie dann den Desktop.js, finde

````js
    <html>tr + = '.Subtyp) + '">';
    tr + = '</td> ';
    tr + = '<td> ';
    if (is_numeric (_cmd.id)) {
````

On ajoute les informations souhaitées.

````js
{% raw %}
    <html>tr + = '.Subtyp) + '">';
    tr + = '</td> ';
    tr + = '<td> ';
    tr += '<span><input type="checkbox" class="cmdAttr checkbox-inline" data-l1key="isHistorized" /> {{Historiser}}<br/></span>';;
   tr += '<span><input type="checkbox" class="cmdAttr checkbox-inline" data-l1key="isVisible" /> {{Affichage}}<br/></span>';;
   tr + = '</td> ';
    tr + = '<td> ';
    if (is_numeric (_cmd.id)) {
{% endraw %}
````

Ich lasse die Schaltfläche, um eine Bestellung zu erstellen, aber ich möchte, dass sie links ist.

````html
{% raw %}<a class="btn btn-success btn-sm cmdAction pull-right" data-action="add" style="margin-top:5px; "><i class="fa fa-plus-circle"></i> {{Aufträge}} </a><br/><br/>{% endraw %}
````

Je change la class pull-right en pull-left

````html
{% raw %}<a class="btn btn-success btn-sm cmdAction pull-left" data-action="add" style="margin-top:5px; "><i class="fa fa-plus-circle"></i> {{Aufträge}} </a><br/><br/>{% endraw %}
````

Hier ist das Rendering.Die Konfigurationsoptionen (Anzeige und Protokoll) sind vorhanden.

![image](images/tutorial_vdm_cmd2.png)

Hier bleibt es, einen zufälligen vdm wiederherzustellen und die Befehle zu verwenden.

# Informationsrückgewinnung

Um einen vdm zufällig abzurufen.

````php
$url = "http://www.viedemerde.fr/aleatoire";;
$data = file_get_contents($url);;
@$dom = new DOMDocument();;
libxml_use_internal_errors (false);
$dom->loadHTML('<?xml encoding="UTF-8">' .$data);;
libxml_use_internal_errors (true);
$xpath = new DOMXPath($dom);;
$divs = $xpath->query('//article[@class="art-panel col-xs-12"]//div[@class="panel-content"]//p//a');;
return $ divs [0] -> nodeValue;
````

Ouvrir le fichier core/class/vdm.class.php et pour la class vdm qui hérite des méthodes egLogic, je crée une fonction randomVdm

````php
public function randomVdm() {
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
````

Jetzt aktualisieren wir den Befehl info (story) mit diesen Informationen, indem wir die Aktion starten (aktualisieren)).
Immer noch in core / class / vdm.class.PHP für die Klasse vdmCmd verwenden wir die Methode execute

````php
public function execute ($ _ options = array()) {

}
````

C'est hier qu'on va définir ce qu'il va se passer quand on lance la commande « Rafraîchir ». La classe vdmCmd a hérité de toutes les méthodes de la class cmd (Core jeedom)

On vérifie le logicalIdentifikation de la commande lancée et si « refresh » on lance les actions

````php
switch ($this->getLogicalId()) {
    Fall 'aktualisieren': // LogicalId des Aktualisierungsbefehls, den wir in der Postsave-Methode der vdm-Klasse erstellt haben .
    // code pour rafraîchir ma commande
    break;;
}
````

Jetzt bleibt die randomVdm-Funktion zu starten() . Dazu stellen wir die eqLogic (das Gerät) aus dem Startbefehl wieder her und starten die Funktion

````php
$eqlogic = $this->getEqLogic();; // Récupération de l'eqlogic
$info = $eqlogic-> randomVdm() ;; //Lance la fonction et stocke le résultat dans la variable $info
````

On met à jour la commande « story » avec la variable $info. On va utiliser la méthode checkAndUpdateCmd de la class eqlogic

````php
$eqlogic->checkAndUpdateCmd('story', $info);;
````

Was letztendlich gibt

````php
public function execute ($ _ options = array()) {
    $eqlogic = $this->getEqLogic();; //récupère l'éqlogic de la commande $this
    switch ($ this-> getLogicalId ()) {// überprüfe die logische ID des Befehls
        Fall 'aktualisieren': // LogicalId des Aktualisierungsbefehls, den wir in der Postsave-Methode der vdm-Klasse erstellt haben .
            $info = $eqlogic->randomVdm();;  //On lance la fonction randomVdm() pour récupérer une vdm et on la stocke dans la variable $info
            $eqlogic->checkAndUpdateCmd('story', $info);; // on met à jour la commande avec le LogicalIdentifikation "story"  de l'eqlogic
            break;;
    }
}
````

Maintenant aller dans un équipement créé et lancer la commande Rafraîchir. Puis la commande « Histoire » qui doit être à jour.

Sur le Dashboard, les informations apparaissent. Cliquez sur l'icône refresh pour changer l'information

On va définir ensuite la taille du widget et le customiser un peu

Puis automatiser le refresh.

# Update des informations (cron)

Le plugin est fonctionnel mais pour l'instant il ne fait pas grand-chose. Si vous cliquer sur la commande « refresh » , la commande « story » se met à jour mais sinon rien.

A noter que pour la commande je la nomme Von logicalId. Et c'est important. Avoir un logicalIdentifikation unique Von équipement (eqLogic) simplifie les choses.

On va voir maintenant comment mettre à jour la commande en utilisant les fonctions natives du core : Les crons

Il y en a plusieurs :

- cron : rafraichissement toutes les minutes
- cron5 : rafraichissement toutes les 5 minutes
- cron15 : rafraichissement toutes les 15 minutes
- cron30 : rafraichissement toutes les 30 minutes
- cronHourly : euh.. toutes les heures
- cronDaily : ben 1/jour

Vu le plugin on va effectuer une mise à jour toutes les heures (soyons fous). On va donc utiliser la fonction cronHourly().

On va donc ouvrir le fichier vdm.class.php et chercher

````php
/*
 * Fonction exécutée automatiquement toutes les heures Von Jeedom
  öffentliche statische Funktion cronHourly() {

  }
 */
````

Kommentieren Sie den Code aus

````php
öffentliche statische Funktion cronHourly() {

}
````

Notre fonction est opérationnelle

Maintenant il faut récupérer tous les équipements de notre plugin,

````php
self::byType('vdm') //array contenant tous les équipements du plugin
````

und sortiere sie 1 nach 1

````php
foreach (selbst::byType ('vdm') als $ vdm) {

}
````

Avant d'effectuer quoique ce soit on vérifie que l'équipement est actif

````php
Eibe ($vdm->getIsEnable() == 1) {

}
````

Voila maintenant on recherche la commande « refresh » de l'équipement (eqLogic)

````php
$cmd = $vdm->getCmd(null, 'refresh');;
````

Si elle n'existe pas on continue la boucle (foreach) sinon on l'exécute

````php
Eibe (!is_object($cmd)) {
continue;;
}
$cmd->execCmd();;
````

Was letztendlich gibt

````php
öffentliche statische Funktion cronHourly () {
    foreach (selbst::byType ('vdm') als $ vdm) {// Alle Geräte des vdm-Plugins durchsuchen
        if ($ vdm-> getIsEnable () == 1) {// überprüfe, ob das Gerät aktiv ist
            $cmd = $vdm->getCmd(null, 'refresh');;//retourne la commande "refresh si elle existe
            Eibe (!is_object ($ cmd)) {// Wenn der Befehl nicht existiert
              mach weiter; // setze die Schleife fort
            }
            $cmd->execCmd();; // la commande existe on la lance
        }
    }
}
````

Pour tester, dans jeedom , aller dans configuration/moteur de tâches et lancer le cron de class « plugin » fonction « cronHourly ».

L'information se met à jour.

C'est bien mais ça ne me convient pas. A la création de l'équipement, la commande « story » ne se met pas à jour.

On améliore donc le code.

Pour la création des commandes nous avons utilisé la méthode postSave(). On va utiliser la méthode postUpdate() pour mettre à jour l'information.

La manière la plus simple vu qu'il n'y a qu'une commande et qu'elle est créé en postSave

````php
    öffentliche Funktion postUpdate() {
        $cmd = $this->getCmd(null, 'refresh');; // On recherche la commande refresh de l'équipement
        Eibe (is_object($cmd)) { //elle existe et on lance la commande
             $cmd->execCmd();;
        }
    }
````

Sie müssen testen, es funktioniert?

Aber hier ist eine Alternative, die sich in komplexeren Fällen als nützlicher erweisen kann

In der Funktion postUpdate () starten wir die Funktion cronHourly () mit der Geräte-ID

````php
öffentliche Funktion postUpdate() {
    self::cronHourly ($ this-> getId ()); // starte die cronHourly-Funktion mit der ID der eqLogic
}
````

Mais dans ce cas on change la fonction cronHourly()

````php
öffentliche statische Funktion cronHourly($_eqLogic_Identifikation = null) {
    Eibe ($_eqLogic_Identifikation == null) { // La fonction n'a pas d'argument donc on recherche tous les équipements du plugin
        $eqLogics = self::byType('vdm', true);;
    } else {// La fonction a l'argument id(unique) d'un équipement(eqLogic)
        $eqLogics = array(self::byId($_eqLogic_id));;
    }

    foreach ($eqLogics as $vdm) {
        Eibe ($vdm->getIsEnable() == 1) {//vérifie que l'équipement est acitf
            $cmd = $vdm->getCmd(null, 'refresh');;//retourne la commande "refresh si elle existe
            Eibe (!is_object ($ cmd)) {// Wenn der Befehl nicht existiert
              mach weiter; // setze die Schleife fort
            }
            $cmd->execCmd();; // la commande existe on la lance
        }
    }
}
````

Anschließend können Sie die Häufigkeit des Cron entsprechend der Wichtigkeit der Wiederherstellung Ihrer Informationen ändern.

Ich kann Sie nur einladen, sich die Zeit zu nehmen, um auf dieser Seite mehr zu erfahren ==> [hier](https://jeedom.github.io/documentation/phpdoc/index.html)

Und noch besser, um zum Kern-Github zu gehen ==> [hier](https://github.com/jeedom/core/tree/alpha/core/class)

Setzen Sie Ihre Nase ein, um noch mehr zu meistern .

Das Plugin funktioniert wie es ist.

Ich werde mir die Zeit nehmen, um die Möglichkeit hinzuzufügen, einen benutzerdefinierten Cron entsprechend der Ausrüstung einzurichten .

# Das Widget

Das Widget ist keine leichte Aufgabe, aber wir bleiben vorerst beim Standard-Widget.

Wenn Sie nichts berührt haben, die Ausrüstung aktiviert und sichtbar ist, nimmt das Widget die gesamte Bildschirmbreite ein. Also werden wir es ändern.

La commande qui apparaît est la commande «story» de Typ info , sous-Typ string

Es ist mir ein Vergnügen, morgens aufzuwachen und morgens einen Vdm zu lesen. Es erlaubt mir zu sehen, dass es schlimmer ist als ich :D

Aber ich habe meine Brille nicht und beim Rendern im Widget kann ich sie nicht lesen

Donc on va changer le style en affectant un template à la commande « story»

Nichts ist einfacher.

Ich werde sehen ==> [hier](https://github.com/jeedom/core/tree/alpha/core/template/dashboard)

Ich suche eine Vorlage für cmd.info.string (unser Befehl ist vom Typ info subtype string) .Nicht schwer, es gibt nur zwei (Standard oder Kachel)

J'applique le template « cmd.info.string.tile.HTML » à ma commande.

Dafür öffne ich die Datei vdm.class.php , fonction postSave() et j'ajoute le template « tile » pour la commande « story » en appliquant la méthode setTemplate()

````php
$info = $this->getCmd(null, 'story');;
Eibe (!is_object ($ info)) {
    $info = new vdmCmd();;
    $info->setName(__('Histoire', __FILE__));;
}
$info->setLogicalId('story');;
$info->setEqLogic_id($this->getId());;
$info->setType('info');;
$info->setTemplate('dashboard','tile');;//template pour le dashboard
$info->setSubType('string');;
$info->save();;
````

Rafraîchir le dasboard.

C''est mieux mais le widget prend toujours la largeur du dashboard. On va donc corriger. Par défaut la largeur du widget de l'équipement(eqLogic) et la hauteur sont à « auto ».

On va donc changer la largeur du widget(équipement => eqLogic) en utilisant la méthode setDisplay() héritée de la class eqLogic .On laisse la hauteur en auto.

Pour cela il suffit d'ajouter

````php
$this->setDisplay("width","800px");;
````

Ja aber !! Weil es ein aber gibt. Versuchen Sie, dies in der Funktion postsave () oder postUpdate () hinzuzufügen, ohne die Änderung zu berücksichtigen. Warum ? Ben muss das Template Plugin doc ==> HIER lesen

Nachdem Sie das richtig gelesen haben, wissen Sie, dass Sie die preSave-Methode verwenden müssen()

````php
öffentliche Funktion preSave() {
    $this->setDisplay("width","800px");;
}
````

Enregistrer un équipement et rafraîchissez le dashboard.


# Les paramètres. Les options

> **Wichtig**
>
> C'est un chapitre important et il faut le comprendre avant de passer à la suite.

Pour le moment, nous avons donc utiliser 3 classes du core de jeedom : EqLogic, cmd , cron . Aller pour info , On en ajoute une 4eme avec la class plugin dans le fichier vdm.php que vous ouvrez et laissez ouvert car on va l'éditer .

````php
$plugin = plugin::byId('vdm');; // appelle la classe plugin du core
````

Sie müssen verstehen, dass alles getan wird, um unsere Arbeit zu erleichtern.

Für einen Parameter / eine Option innerhalb des Plugins verwenden wir eine der Methoden der eqLogic-Klasse des Kerns : setConfiguration () durch Hinzufügen der gewünschten Parameter. Zum Beispiel :

````php
$this->setConfiguration("type","mon_type");; // si on veut  définir un paramètre Typ de valeur mon_type. Comme on a défini la largeur du widget via la méthode setDisplay()
````

Pour laisser le choix à l'utilisateur , on retourne sur le fichier desktop.php que vous avez laissé ouvert car vous suivez ce TP au pied de la lettre :D

Chercher

````html
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="city" placeholder="param1"/>
````

Und ersetzen durch

````html
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/> //Wichtig de laisser la classe eqLogicAttr
````

Enregistrer et aller sur un équipement du plugin que vous avez déjà créé en suivant ce TP (Rafraîchir si besoin).

Dans le champs « Paramètre» d'un équipement, taper « aleatoire » et sauvegarder.

Parfait le paramètre est sauvegardé.

![image](images/tutorial_parametre1.png)


C'est simple,non? . C'est pourquoi il ne faut surtout pas toucher à cette ligne de code comme indiqué dans le premier menu « test » . C'est lui qui fait tout le travail

````php
<?php include_file('core', 'plugin.template', 'js');;?>//Chargement du fichier core/js/plugin.template.js (en partant de la racine du site)
````

Wenn Sie sich die Desktop-Datei genauer ansehen.PHP vor

````html
<input type="text" class="eqLogicAttr form-control" data-l1key="id" style="display : none;;" /> // retourne l'id(unique) de l'eqLogic(équipement) . Qu'on va pouvoir récupérer via $this->getId() ;;
````

````html
{% raw %}
<input type="text" class="eqLogicAttr form-control" data-l1key="name" placeholder="{{Name de l'équipement}}"/>// retourne le nom de l'eqLogic(équipement) . Qu'on va pouvoir récupérer via $this->getName() ;;
{% endraw %}
````

Etc…

Wenn Sie das alles gut verstanden haben, können wir weitermachen. Aber zuerst werden wir die Datei desktop.php ändern

````html
{% raw %}
<label class="col-sm-3 control-label">{{Paramètre}}</label>
{% endraw %}
````

Par

````html
{% raw %}
<label class="col-sm-3 control-label">{{Type de vdm}}</label>
{% endraw %}
````

Wichtig : Der Text in geschweiften Klammern entspricht dem Text, der übersetzt wird, wenn Sie das Plugin auf den Markt bringen

Im Übrigen werden wir das Plugin entwickeln, indem wir einen gewünschten vdm-Typ (zufällig oder scharf oder oben) sowie einen personalisierten Cron für jedes Gerät auswählen.

# Verwendung von Optionen / Parametern

Um weiter zu gehen und das vorherige Kapitel zu verstehen, überlassen wir es dem Benutzer, einen vdm-Typ auszuwählen (zufällig oder scharf oder oben)

On pourrait le laisser taper dans l'input « Type de vdm » : zufällig oder scharf oder oben, aber wir werden es anders machen, indem wir es über ein Auswahl-Tag auswählen lassen

Wenn Sie alles befolgt haben, sollten Sie in der Datei desktop.php haben

````html
{% raw %}
 <div class="form-group">
  <label class="col-sm-3 control-label">{{Type de vdm}}</label>
  <div class="col-sm-3">
      <input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/>
  </div>
</div>
{% endraw %}
````

Qu'on va remplacer par

````html
{% raw %}
<div class="form-group">
    <label class="col-sm-3 control-label" >{{ Type de vdm }}</label>
    <div class="col-sm-3">
        <select class="form-control eqLogicAttr" data-l1key="configuration" data-l2key="Typ ">
            <option value="aleatoire">{{Aleatoire}}</option>
            <option value="epicees">{{Coquin}}</option>
            <option value="tops">{{Best}}</option>
        </select>
    </div>
</div>
{% endraw %}
````

Ici le paramètre « type» prendra la valeur du select choisi soit aléatoire ou epicees ou tops.

Jetzt werden wir unseren Parameter in der Funktion randomVdm () in der Datei vdm.class.php berücksichtigen

Chercher

````php
$url = "http://www.viedemerde.fr/aleatoire";;
````

Und ersetzen durch

````php
$Typ = $this->getConfiguration("Typ ");;
if($Typ == "") { //si le paramètre est vide ou n'existe pas
    $Typ = "aleatoire";; //on prends le Typ aleatoire
}
$url = "http://www.viedemerde.fr/" .$Typ  ;;
````

Ändern Sie nun den Wert der Auswahl auf einem Gerät, speichern Sie und gehen Sie zum Dashboard, um zu sehen, was es gibt.
