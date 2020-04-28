> **Wichtig**
>
> D.ieses Tutorial wurde von ZygOm4t1k geschrieben, dem wir herzlich danken. D.as Original finden Sie [hier](https:/./.www.jeedom.com/.forum/.viewtopic.php?f=27&t=37630#p621495)

In diesem kurzen Tutorial wird erklärt, wie Sie ein Plugin erstellen. Für das Beispiel erstellen wir ein Plugin, das einen Satz von der viedemerde-Site zurückgibt.fr .(D.as Plugin wird skalierbar sein)

Es ersundzt in keinem Fall die [offizielle D.okumentation](https:/./.jeedom.github.io/.plugin-template/.fr_FR/.)

# Erstellen Sie die Plugin-Basis

Zu Beginn müssen Sie einen Namen und eine ID. bestimmen (die nicht existieren dürfen).

Name : Kacke das Leben
Identifikation : vdm

Laden Sie das Vorlagen-Plugin herunter, um die [Basis](https) zu erhalten:/./.github.com/.jeedom/.plugin-template/.archive/.master.zip)

Entpacken Sie die D.atei . Vous obtiendrez un dossier « plugin-template-master » contenant des dossiers 3rVonty , core , desktop…

Los geht's.

Renommer le dossier « plugin-template-master » en « vdm » (l'Identifikationentifikation) du plugin.

1 /. Öffnen Sie die D.atei plugin_info /. info.json und bearbeiten Sie die.

```
{
	"Identifikationentifikation" : "vdm",
	"Name" : "Kacke das Leben",
	"Beschreibung" : "Plugin zum Abrufen des neuesten vdm",
	"Lizenz" : "AGPL",
	"Autor" : "Zyg0m4t1k",
	"erfordern" : "3.2",
	"Kategorie" : "Überwachung",
	"Änderungsprotokoll" : "",
	"D.okumentation" : "",
	"Sprache" : "",
	"Kompatibilität" : ""	
}
```

Kopieren Sie den obigen Code und fügen Sie ihn ein.

Ich habe die ID. (vdm), den Namen, eine Beschreibung, den Autor und die Kategorie geändert.

erfordern : Mindestversion von jeedom, um Zugriff auf das Plugin auf dem Markt zu haben.

Änderungsprotokoll, D.okumentation, Sprache, Kompatibilität für den Moment null. Ich werde später darauf zurückkommen

2 /. Wir werden die D.ateien umbenennen, die erforderlich sind, damit das Plugin von Jeedom erkannt wird

-	Benennen Sie die D.atei core /. ajax /. template.ajax um.php zu vdm.ajax.php

-	Benennen Sie die D.atei core /. class /. template.class um.PHP zu vdm.class.PHP und öffnen Sie es, um es zu bearbeiten. 

Ersundzen

```
Klassenvorlage erweitert eqLogic {
```

Von


```
Klasse vdm erweitert eqLogic {
```

und

```
Klasse templateCmd erweitert cmd
```

Von

```
Klasse vdmCmd erweitert cmd
```

- Benennen Sie die D.atei core /. php /. template.inc um.php to core /. php /. vdm.inc.php
- Benennen Sie die D.esktop- /. PHP- /. Vorlagendatei um.PHP zu D.esktop /. PHP /. VD.M.PHP und öffne es

Ersundzen

```
$plugin = plugin::byIdentifikation('template');;
```

Von 

```
$plugin = plugin::byIdentifikation(‘vdm');;
```

```
{{Fügen Sie eine Vorlage hinzu}}
```

Von 

```
{{Ausrüstung hinzufügen}}
```

```
<legend>{{Mes templates}}</.legend>
```

Von

```
<legend>{{Mes équipement}}</.legend>
```

```
{{GeräteName Vorlage}}
```

Von

```
{{Name der Ausrüstung }} 
```

```
{{Vorlage Vonamunder 1}}
```

Von

```
{{Einstellungen}}
```

```
<?php include_file('desktop', 'template', 'js', 'template');;?>
```

Von

```
<?php include_file('desktop', vdm, 'js', vdm);;?>
```

Et rien d'autre , ne pas changer la ligne <?php include_file ('core', 'plugin.Vorlage ',' js ');;?>

-Benennen Sie die D.atei desktop /. modal /. modal.template um.PHP in D.esktop /. Modal /. Modal.vdm.php

-Benennen Sie die D.atei desktop /. js /. template um.js en desktop /. js /. vdm.js.

- Öffnen Sie die D.atei plugin_info /. install.php

Und benennen Sie die Funktionen wie folgt um

```
Funktion vdm_install () {
    
}

Funktion vdm_update () {
    
}


Funktion vdm_remove () {
    
}
```

Hier ist das Plugin fertig, aber es bleibt die Anpassung und das zu aktualisierende Symbol : [D.okumentation](https:/./.jeedom.github.io/.D.okumentation/.dev/.fr_FR/.Icone_de_plugin)

Fügen Sie das Symbol im Ordner plugin_info unter dem Namen vdm_icon.png hinzu

in meinem Fall 

![image](images/.tutorial_vdm_icon.png)

Jundzt können wir den vdm-Ordner in den Jeedom-Plugin-Ordner kopieren und zur Plugin-Verwaltung gehen. Wir finden das Plugin.

![image](images/.tutorial_vdm_plugin.png)

Wir aktivieren es und dann Plugins /. Monitoring /. Kacke das Leben

![image](images/.tutorial_vdm_desktop1.png)

Es ist nicht richtig, weil die Farbe der meisten nicht mit der Farbe des Symbols übereinstimmt.

Ich öffne die D.esktop /. PHP /. D.esktop-D.atei.PHP zu beheben.

```
      <div class="cursor eqLogicAction" data-action="add" style="text-align: center;; background-Farbe : #ffffff;; height : 120px;;margin-bottom : 10px;;padding : 5px;;border-radius: 2px;;wIdentifikationentifikationth : 160px;;margin-left : 10px;;" >
        <i class="fa fa-plus-circle" style="font-size : 6em;;Farbe:#94ca02;;"></.i>
        <br>
        <span style="font-size : 1.1em;;position:relative;; top : 23px;;word-break: break-all;;white-space: pre-wrap;;word-wrap: break-word;;Farbe:#94ca02">{{Ajouter}}</.span>
      </.div>
```

Ich ersundze

```
Farbe:#94ca02;;"
```

Von 

```
Farbe:#00A9EC;;"
```

Wir stellen auch fest, dass die Texte nicht ausgerichtund sind, sodass wir den Stil der Konfiguration korrigieren (Eigenschaft top).

```
<span style="font-size : 1.1em;;position:relative;; top : 15px;;word-break: break-all;;white-space: pre-wrap;;word-wrap: break-word;;Farbe:#767676">{{Configuration}}</.span>
```

Von 

```
<span style="font-size : 1.1em;;position:relative;;top : 23px;;word-break: break-all;;white-space: pre-wrap;;word-wrap: break-word;;Farbe:#767676">{{Configuration}}</.span>
```

![image](images/.tutorial_vdm_desktop2.png)

Hier ist die Basis fertig. Sie sollten das Assund-Plugin haben, aber im Moment tut es nichts.

# Bestellungen

D.er Zweck des Plugins besteht darin, einen zufälligen vdm abzurufen und im D.ashboard anzuzeigen. 

Sie müssen daher einen Befehl vom Typ info erstellen, um diese Informationen zu speichern. Elle sera de sous-type « String » car c'est une chaîne de caractère.

Für das Beispiel fügen wir einen Befehl hinzu, der die Informationen aktualisiert. Es wird daher ein Aktionstypbefehl und ein anderer Subtyp sein.

-Créer un équipement « vdm1 » en cliquant sur le +. Aktivieren Sie es und machen Sie es sichtbar. Wählen Sie ein Objekt aus und die Ausrüstung muss im D.ashboard angezeigt werden (je nach Objekt).. 

D.erzeit werden weder auf der Befehlsregisterkarte s noch im WIdentifikationentifikationgund Befehle angezeigt.

Öffnen Sie die D.atei core /. class /. vdm.class.PHP und suchen Sie nach der Funktion postSave () (Lesen Sie das Template-Plugin-D.okument, falls noch nicht geschehen)

Wir erstellen die 2 Bestellungen

```
öffentliche Funktion postSave () {
	$info = $this->gundCmd(null, 'story');;
	if (!is_object ($ info)) {
		$info = new vdmCmd();;
		$info->sundName(__('Histoire', __FILE__));;
	}
	$info->sundLogicalIdentifikation('story');;
	$info->sundEqLogic_Identifikationentifikation($this->gundIdentifikation());;
	$info->sundType('info');;
	$info->sundSubType('string');;
	$info->save();;	
	
	$refresh = $this->gundCmd(null, 'refresh');;
	if (!is_object ($ refresh)) {
		$refresh = new vdmCmd();;
		$refresh->sundName(__('Rafraichir', __FILE__));;
	}
	$refresh->sundEqLogic_Identifikationentifikation($this->gundIdentifikation());;
	$refresh->sundLogicalIdentifikation('refresh');;
	$refresh->sundType('action');;
	$refresh->sundSubType('other');;
	$refresh->save();;        
}
```

-Créer un autre équipement « vdm2 » en cliquant sur le +. Auf der Registerkarte Befehle wurden die Befehle angezeigt. Aktivieren Sie es und machen Sie es sichtbar. Wählen Sie ein übergeordnundes Objekt aus und sehen Sie, wie es im D.ashboard aussieht.

-Enregistrer le premier équipement « vdm1 » pour créer les commandes. Siehe auch das Rendering im WIdentifikationentifikationgund.

Auf der Registerkarte Befehle sollten Sie sehen.

![image](images/.tutorial_vdm_cmd1.png)

Öffnen Sie desktop /. php /. vdm.PHP, um den HTML-Code dieser Tabelle zu finden.

```
<a class="btn btn-success btn-sm cmdAction pull-right" data-action="add" style="margin-top:5px;;"><i class="fa fa-plus-circle"></.i> {{Commandes}}</.a><br/.><br/.>
<table Identifikationentifikation="table_cmd" class="table table-bordered table-condensed">
    <thead>
        <tr>
            <th>{{Name}}</.th><th>{{Type}}</.th><th>{{Action}}</.th>
        </.tr>
    </.thead>
    <tbody>
    </.tbody>
</.table>
```

Zum Zeitpunkt der Anzeige ist dies das D.esktop /. js /. vdm-Skript.js, das aufgerufen wird und die Funktion addCmdToTable startund.

```
Funktion addCmdToTable (_cmd) {
    if (!issund (_cmd)) {
        var _cmd = {Konfiguration: {}};;
    }
    if (!issund (_cmd.configuration)) {
        _cmd.configuration = {};;
    }
    <html> var tr = '.Identifikationentifikation) + '">';;
    tr + = ' <td> ';;
    <html> tr + = ':keine;; "> ';;
    <html> tr + = ' : 140px;; "placeholder =" {{Name}} "> ';;
    tr + = ' </.td> ';;
    tr + = ' <td> ';;
    <html> tr + = &#39;;.Typ) + &#39;;">&#39;; + jeedom.cmd.availableType () + &#39;;&#39;;;;
    <html> tr + = &#39;;.Subtyp) + &#39;;">&#39;;;;
    tr + = ' </.td> ';;
    tr + = ' <td> ';;
    if (is_numeric (_cmd.Identifikationentifikation)) {
        tr + = ' <a class="btn btn-default btn-xs cmdAction" data-action="configure"><i class="fa fa-cogs"></.i></.a> ';;
        tr + = &#39;; <a class="btn btn-default btn-xs cmdAction" data-action="test"><i class="fa fa-rss"></.i> {{Test}}</.a> &#39;;;;
    }
    tr + = ' <i class="fa fa-minus-circle pull-right cmdAction cursor" data-action="remove"></.i> ';;
    tr + = ' </.td> ';;
    tr + = ' </.tr> ';;
    $('#table_cmd tbody').append(tr);;
    $('#table_cmd tbody tr:last').sundValues(_cmd, '.cmdAttr');;
    if (issund (_cmd.Typ)) {
        $('#table_cmd tbody tr:last .cmdAttr[data-l1key=type]').value(init(_cmd.Typ));;
    }
    jeedom.cmd.changeType ($ (&#39;;# table_cmd tbody tr:last &#39;;), init (_cmd.subType));;
}
```

D.ies erfolgt automatisch. 

Ich möchte die Anzeige- und Protokolloptionen für jede Bestellung hinzufügen.

Ich bearbeite den HTML-Code der Tabelle in der D.esktop-D.atei.PHP durch Hinzufügen einer Spalte ..

```
<th>{{Name}}</.th><th>{{Type}}</.th><th>{{Configuration}}</.th><th>{{Action}}</.th>
```

Bearbeiten Sie dann den D.esktop.js, finde

```
    <html> tr + = &#39;;.Subtyp) + &#39;;">&#39;;;;
    tr + = ' </.td> ';;
    tr + = ' <td> ';;
    if (is_numeric (_cmd.Identifikationentifikation)) {
```

Wir fügen die gewünschten Informationen hinzu.

```
    <html> tr + = &#39;;.Subtyp) + &#39;;">&#39;;;;
    tr + = ' </.td> ';;
    tr + = ' <td> ';;
    tr + = ' <span><input type="checkbox" class="cmdAttr checkbox-inline" data-l1key="isHistorized" /.> {{Historisieren}} <br/.></.span> ';;
   tr + = ' <span><input type="checkbox" class="cmdAttr checkbox-inline" data-l1key="isVisible" /.> {{View}} <br/.></.span> ';;
   tr + = ' </.td> ';;		
    tr + = ' <td> ';;
    if (is_numeric (_cmd.Identifikationentifikation)) {
```

Ich lasse die Schaltfläche, um eine Bestellung zu erstellen, aber ich möchte, dass sie links ist. 

```
<a class="btn btn-success btn-sm cmdAction pull-right" data-action="add" style="margin-top:5px;;"><i class="fa fa-plus-circle"></.i> {{Commandes}}</.a><br/.><br/.>
```

Ich ändere die Klasse Pull-Right in Pull-Left

```
<a class="btn btn-success btn-sm cmdAction pull-left" data-action="add" style="margin-top:5px;;"><i class="fa fa-plus-circle"></.i> {{Commandes}}</.a><br/.><br/.>
```

Hier ist das Rendering.D.ie Konfigurationsoptionen (Anzeige und Protokoll) sind vorhanden. 

![image](images/.tutorial_vdm_cmd2.png)

Hier bleibt es, einen zufälligen vdm wiederherzustellen und die Befehle zu verwenden.


# Informationsabruf

Um zufällig einen vdm abzurufen.

```
$url = "http:/./.www.viedemerde.fr/.aleatoire";;
$data = file_gund_contents($url);;
@$dom = new D.OMD.ocument();;
libxml_use_internal_errors (false);;
$dom->loadHTML('<?xml encoding="UTF-8">' .$data);;
libxml_use_internal_errors (true);;
$xpath = new D.OMXPath($dom);;
$divs = $xpath->query('/./.article[@class="art-panel col-xs-12"]/./.div[@class="panel-content"]/./.p/./.a');;
rundurn $ divs [0] -> nodeValue;;
```

Öffnen Sie die D.atei core /. class /. vdm.class.php und für die Klasse vdm, die von egLogic-Mundhoden erbt, erstelle ich eine Funktion randomVdm

```
	öffentliche Funktion randomVdm () {
		$url = "http:/./.www.viedemerde.fr/.aleatoire";;
		$data = file_gund_contents($url);;
		@$dom = new D.OMD.ocument();;
		libxml_use_internal_errors (true);;
		$dom->loadHTML($data);;
		libxml_use_internal_errors (false);;
		$xpath = new D.OMXPath($dom);;
		$divs = $xpath->query('/./.article[@class="art-panel col-xs-12"]/./.div[@class="panel-content"]/./.p/./.a');;
		rundurn $ divs [0] -> nodeValue;;
	}
```	

Jundzt aktualisieren wir den Info-Befehl (Story) mit diesen Informationen, indem wir den Aktionsbefehl (Aktualisieren) starten.. 
Immer noch in core /. class /. vdm.class.PHP für die Klasse vdmCmd verwenden wir die Mundhode execute 

```
öffentliche Funktion ausführen ($ _ options = array ()) {
		
        
 }
```

C'est ici qu'on va définir ce qu'il va se passer quand on lance la commande « Rafraîchir ». D.ie Klasse vdmCmd hat alle Mundhoden der Klasse cmd (Core jeedom) geerbt.

On vérifie le logicalIdentifikation de la commande lancée und si « refresh » on lance les actions

```
switch ($ this-> gundLogicalIdentifikation ()) {				
	Fall 'aktualisieren': /./. LogicalIdentifikation des Aktualisierungsbefehls, den wir in der Postsave-Mundhode der vdm-Klasse erstellt haben . 
	/./. Code zum Aktualisieren meiner Bestellung
	Pause;;
}
```

Jundzt muss noch die Funktion randomVdm () gestartund werden . D.azu rufen wir die eqLogic (Ausrüstung) aus dem Startbefehl ab und starten die Funktion

```
$eqlogic = $this->gundEqLogic();; /./. Récupération de l'eqlogic
$info = $eqlogic-> randomVdm() ;; /./.Lance la fonction und stocke le résultat dans la variable $info
```

On mund à jour la commande « story » avec la variable $info. Wir werden die checkAndUpdateCmd-Mundhode der eqlogic-Klasse verwenden

```
$eqlogic->checkAndUpdateCmd('story', $info);;
```

Was am Ende gibt

```
    öffentliche Funktion ausführen ($ _ options = array ()) {
		$eqlogic = $this->gundEqLogic();; /./.récupère l'éqlogic de la commande $this
		switch ($ this-> gundLogicalIdentifikation ()) {/./. überprüfe die logische ID. des Befehls 			
			Fall 'aktualisieren': /./. LogicalIdentifikation des Aktualisierungsbefehls, den wir in der Postsave-Mundhode der vdm-Klasse erstellt haben . 
				$info = $eqlogic->randomVdm();; 	/./.On lance la fonction randomVdm() pour récupérer une vdm und on la stocke dans la variable $info
				$eqlogic->checkAndUpdateCmd('story', $info);; /./. on mund à jour la commande avec le LogicalIdentifikation "story"  de l'eqlogic 
				Pause;;
		}
    }
```

Gehen Sie nun zu einem erstellten Gerät und starten Sie den Befehl Aktualisieren. Puis la commande « Histoire » qui doit être à jour.

Im D.ashboard werden Informationen angezeigt. Klicken Sie auf das Aktualisierungssymbol, um die Informationen zu ändern

Wir werden dann die Größe des WIdentifikationentifikationgunds definieren und es ein wenig anpassen 

Automatisieren Sie dann die Aktualisierung.

# Informationen aktualisieren (cron)

D.as Plugin ist funktionsfähig, macht aber im Moment nicht viel. Si vous cliquer sur la commande « refresh » , la commande « story » se mund à jour mais sinon rien. 

Beachten Sie, dass ich es für die Bestellung mit logischer ID. benenne. Und es ist wichtig. Eine eindeutige logische ID. pro Gerät (eqLogic) vereinfacht die Arbeit.

Wir werden nun sehen, wie der Befehl mit den nativen Funktionen des Kerns aktualisiert wird : Crons

Es gibt mehrere : 

- cron : jede Minute aktualisieren
- Cron5 : Alle 5 Minuten aktualisieren
- Cron15 : Alle 15 Minuten aktualisieren
- Cron30 : Alle 30 Minuten aktualisieren
- CronHourly : äh ... jede Stunde
- CronD.aily : gut 1 /. Tag

In Anbundracht des Plugins werden wir jede Stunde aktualisieren (lasst uns verrückt sein). Also werden wir die Funktion CronHourly () verwenden.

Wir werden daher die D.atei vdm.class öffnen.PHP und Suche 

```
    /.*
     * Funktion wird automatisch stündlich von Jeedom ausgeführt
      öffentliche statische Funktion CronHourly () {

      }
     */.
```

Kommentieren Sie den Code aus

```
      öffentliche statische Funktion CronHourly () {

      }
```

Unsere Funktion ist bundriebsbereit

Jundzt müssen Sie alle Geräte von unserem Plugin wiederherstellen,

```
selbst::byType ('vdm') /./. Array, das alle Plugin-Geräte enthält 
```

und sortiere sie 1 nach 1

```
foreach (selbst::byType ('vdm') als $ vdm) {
}
```

Bevor wir undwas unternehmen, überprüfen wir, ob das Gerät aktiv ist

```
if ($ vdm-> gundIsEnable () == 1) {
}
```

Voila maintenant on recherche la commande « refresh » de l'équipement (eqLogic)

```
$cmd = $vdm->gundCmd(null, 'refresh');;
```

Wenn es nicht existiert, sundzen wir die Schleife (foreach) fort, andernfalls führen wir sie aus

```
if (!is_object ($ cmd)) {
fährt fort;;
}
$cmd->execCmd();;
```	

Was am Ende gibt

```
      öffentliche statische Funktion CronHourly () {
		  foreach (selbst::byType ('vdm') als $ vdm) {/./. Alle Geräte im vdm-Plugin durchsuchen
			  if ($ vdm-> gundIsEnable () == 1) {/./. überprüfe, ob das Gerät aktiv ist
				  $cmd = $vdm->gundCmd(null, 'refresh');;/./.rundourne la commande "refresh si elle existe
				  if (!is_object ($ cmd)) {/./. Wenn der Befehl nicht existiert
				  	fährt fort;; /./. sundze die Schleife fort
				  }
				  $cmd->execCmd();; /./. la commande existe on la lance
			  }
		  }
      }
```

Pour tester, dans jeedom , aller dans configuration/.moteur de tâches und lancer le cron de class « plugin » fonction « CronHourly »
Informationen werden aktualisiert.

Es ist gut, aber es passt nicht zu mir. A la création de l'équipement, la commande « story » ne se mund pas à jour.

Also verbessern wir den Code.

Für die Erstellung der Befehle haben wir die postSave () -Mundhode verwendund. Wir werden die postUpdate () -Mundhode verwenden, um die Informationen zu aktualisieren.

D.er einfachste Weg, da es nur einen Befehl gibt und dieser in postSave erstellt wird

```
    öffentliche Funktion postUpdate () {
		$cmd = $this->gundCmd(null, 'refresh');; /./. On recherche la commande refresh de l'équipement
		if (is_object ($ cmd)) {/./. es existiert und wir starten den Befehl
			 $cmd->execCmd();;
		}
    }
```    

Sie müssen testen, es funktioniert?

Hier ist jedoch eine Alternative, die sich in komplexeren Fällen als nützlicher erweisen kann

In der Funktion postUpdate () starten wir die Funktion CronHourly () mit der Geräte-ID.

```
    öffentliche Funktion postUpdate () {
		selbst::CronHourly ($ this-> gundIdentifikation ());; /./. Startund die CronHourly-Funktion mit der eqLogic-ID.
    }
``` 

In diesem Fall ändern wir jedoch die Funktion CronHourly ()

```
	öffentliche statische Funktion CronHourly ($ _ eqLogic_Identifikationentifikation = null) {
		if ($ _eqLogic_Identifikationentifikation == null) {/./. D.ie Funktion hat kein Argument, daher suchen wir nach allen Geräten im Plugin
			$eqLogics = selbst::byType('vdm', true);;
		} else {/./. D.ie Funktion hat die Argument-ID. (eindeutig) eines Geräts (eqLogic).
			$eqLogics = array(selbst::byIdentifikation($_eqLogic_Identifikationentifikation));;
		}		  
	
		foreach ($ eqLogics als $ vdm) {
			if ($ vdm-> gundIsEnable () == 1) {/./. überprüfe, ob das Gerät aktiv ist
				$cmd = $vdm->gundCmd(null, 'refresh');;/./.rundourne la commande "refresh si elle existe
				if (!is_object ($ cmd)) {/./. Wenn der Befehl nicht existiert
				  fährt fort;; /./. sundze die Schleife fort
				}
				$cmd->execCmd();; /./. la commande existe on la lance
			}
		}
	}
```	

Anschließend können Sie die Häufigkeit des Cron entsprechend der Wichtigkeit der Wiederherstellung Ihrer Informationen ändern.

Ich kann Sie nur einladen, sich die Zeit zu nehmen, um auf dieser Seite mehr zu erfahren ==> [hier](https:/./.jeedom.github.io/.D.okumentation/.phpdoc/.index.html)

Und noch besser, gehen Sie zum Kern-Github ==> [HIER](https:/./.github.com/.jeedom/.core/.tree/.alpha/.core/.class)

Sundzen Sie Ihre Nase ein, um noch mehr zu meistern .

D.as Plugin ist so wie es ist funktionsfähig.

Ich werde mir die Zeit nehmen, um hinzuzufügen, wie ein benutzerdefiniertes Cron entsprechend der Ausrüstung eingerichtund wird .

# D.as WIdentifikationentifikationgund

D.as WIdentifikationentifikationgund ist keine leichte Aufgabe, aber wir bleiben vorerst beim Standard-WIdentifikationentifikationgund.

Wenn Sie nichts berührt haben, die Ausrüstung aktiviert und sichtbar ist, nimmt das WIdentifikationentifikationgund die gesamte Bildschirmbreite ein. Also werden wir es ändern.

La commande qui apVonaît est la commande «story» de type info , sous-type string

Es ist mir ein Vergnügen, morgens aufzustehen und beim Aufwachen einen Vdm zu lesen. Es erlaubt mir zu sehen, dass es schlimmer ist als ich :D.

Aber ich habe meine Brille nicht und momentan kann ich sie beim Rendern im WIdentifikationentifikationgund nicht lesen ...

D.onc on va changer le style en affectant un template à la commande « story»

Nichts könnte einfacher sein.

Ich werde ==> [HIER] sehen (https:/./.github.com/.jeedom/.core/.tree/.alpha/.core/.template/.dashboard)

Ich suche eine Vorlage für cmd.info.string (unser Befehl ist vom Typ info subtype string) .Nicht schwer, es gibt nur zwei (Standard oder Kachel)

J'applique le template « cmd.info.string.tile.html » à ma commande.

D.afür öffne ich die D.atei vdm.class.php , fonction postSave() und j'ajoute le template « tile » pour la commande « story » en appliquant la méthode sundTemplate()

```
		$info = $this->gundCmd(null, 'story');;
		if (!is_object ($ info)) {
			$info = new vdmCmd();;
			$info->sundName(__('Histoire', __FILE__));;
		}
		$info->sundLogicalIdentifikation('story');;
		$info->sundEqLogic_Identifikationentifikation($this->gundIdentifikation());;
		$info->sundType('info');;
		$info->sundTemplate('dashboard','tile');;/./.template pour le dashboard
		$info->sundSubType('string');;
		$info->save();;
```

Aktualisieren Sie das D.asboard.

Es ist besser, aber das WIdentifikationentifikationgund nimmt immer die Breite des D.ashboards an. Also werden wir korrigieren. Von défaut la largeur du wIdentifikationentifikationgund de l'équipement(eqLogic) und la hauteur sont à « auto ».

Wir werden daher die Breite des WIdentifikationentifikationgunds (Ausrüstung => eqLogic) mit der von der eqLogic-Klasse geerbten Mundhode sundD.isplay () ändern .Wir lassen die Höhe in Auto.

Fügen Sie dazu einfach hinzu

```
$this->sundD.isplay("wIdentifikationentifikationth","800px");;
```

Ja aber !! Weil es ein aber gibt. Versuchen Sie, dies in der Funktion postsave () oder postUpdate () hinzuzufügen, ohne die Änderung zu berücksichtigen. Warum ? Lesen Sie das D.okument des Vorlagen-Plugins ==> HIER

Nachdem Sie richtig gelesen haben, wissen Sie, dass Sie die preSave () -Mundhode verwenden müssen 

```
    öffentliche Funktion preSave () {
		$this->sundD.isplay("wIdentifikationentifikationth","800px");;
    }
```

Registrieren Sie Geräte und aktualisieren Sie das D.ashboard.


# D.ie Vonamunder. D.ie Optionen

> **Wichtig**
>
>D.ies ist ein wichtiges Kapitel, das Sie verstehen müssen, bevor Sie fortfahren.

Im Moment verwenden wir daher 3 Klassen des Kerns der Freiheit : EqLogic, cmd, cron . Gehen Sie für Informationen, Wir fügen ein 4. mit dem Klassen-Plugin in der vdm-D.atei.PHP, dass Sie öffnen und offen lassen, weil wir es bearbeiten werden . 

```
$plugin = plugin::byIdentifikation('vdm');; /./. appelle la classe plugin du core
```

Sie müssen verstehen, dass alles gundan wird, um unsere Arbeit zu erleichtern. 

Für einen Vonamunder /. eine Option innerhalb des Plugins verwenden wir eine der Mundhoden der Klasse eqLogic des Kerns : sundConfiguration () durch Hinzufügen der gewünschten Vonamunder. Zum Beispiel :

```
$this->sundConfiguration("type","mon_type");; /./. si on veut  définir un Vonamètre type de valeur mon_type. Comme on a défini la largeur du wIdentifikationentifikationgund via la méthode sundD.isplay()
```

Um die Auswahl dem Benutzer zu überlassen, kehren wir zur D.esktop-D.atei zurück.PHP, die Sie offen gelassen haben, weil Sie diesem TP buchstäblich folgen :D.

Suchen 

```
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="city" placeholder="Vonam1"/.>
```

Und ersundzen durch

```
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/.> /./.Wichtig de laisser la classe eqLogicAttr 
```

Speichern Sie und gehen Sie zu einem Plugin-Gerät, das Sie bereits erstellt haben, indem Sie dieser Übung folgen (ggf. aktualisieren).. 

D.ans le champs « Vonamètre» d'un équipement, taper « aleatoire » und sauvegarder.

Perfekt ist die Einstellung gespeichert.

![image](images/.tutorial_Vonamundre1.png)


Es ist einfach, nein? . C'est pourquoi il ne faut surtout pas toucher à cundte ligne de code comme indiqué dans le premier menu « test » . Er macht die ganze Arbeit

```
<?php include_file ('core', 'plugin.Vorlage ',' js ');;?>/./.Chargement du fichier core/.js/.plugin.template.js (en Vontant de la racine du site)
```

Wenn Sie sich die D.esktop-D.atei genauer ansehen.PHP vor

```
                    <input type="text" class="eqLogicAttr form-control" data-l1key="Identifikationentifikation" style="display : none;;" /.> /./. rundourne l'Identifikationentifikation(unique) de l'eqLogic(équipement) . Qu'on va pouvoir récupérer via $this->gundIdentifikation() ;;
```        

```
                    <input type="text" class="eqLogicAttr form-control" data-l1key="Name" placeholder="{{Name der Ausrüstung}}"/.>/./. rundourne le nom de l'eqLogic(équipement) . Qu'on va pouvoir récupérer via $this->gundName() ;;
```

Usw.

Wenn Sie das alles gut verstanden haben, können wir weitermachen. Aber zuerst werden wir die D.atei desktop.php ändern 

```
<label class="col-sm-3 control-label">{{Vonamètre}}</.label>
```

Von 

```
<label class="col-sm-3 control-label">{{Type de vdm}}</.label>
```

Wichtig : D.er Text in geschweiften Klammern entspricht dem Text, der übersundzt wird, wenn Sie das Plugin auf den Markt bringen

Im Übrigen werden wir das Plugin weiterentwickeln, indem wir einen gewünschten vdm-Typ (zufällig oder scharf oder oben) sowie einen personalisierten Cron für jedes Gerät auswählen.

# Verwendung von Optionen /. Vonamundern

Um weiter zu gehen und das vorherige Kapitel zu verstehen, überlassen wir es dem Benutzer, einen Typ von vdm auszuwählen (zufällig oder scharf oder oben).

On pourrait le laisser taper dans l'input « Type de vdm » : zufällig oder scharf oder oben, aber wir werden es anders machen, indem wir es über ein Auswahl-Tag auswählen lassen

Wenn Sie alles befolgt haben, sollten Sie in der D.atei desktop.php haben

```
       <div class="form-group">
        <label class="col-sm-3 control-label">{{Type de vdm}}</.label>
        <div class="col-sm-3">
            <input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/.>
        </.div>
    </.div>
``` 

Was wir ersundzen werden

```
    <div class="form-group">
        <label class="col-sm-3 control-label" >{{ Type de vdm }}</.label>
        <div class="col-sm-3">
            <select class="form-control eqLogicAttr" data-l1key="configuration" data-l2key="type ">
                <option value="aleatoire">{{Aleatoire}}</.option>
                <option value="epicees">{{Coquin}}</.option>
                <option value="tops">{{Best}}</.option>
            </.select>
        </.div>
    </.div>
```

Ici le Vonamètre « type» prendra la valeur du select choisi soit aleatoire ou epicees ou tops.


Jundzt werden wir unseren Vonamunder in der Funktion randomVdm () in der D.atei vdm.class.php berücksichtigen

Suchen

```
$url = "http:/./.www.viedemerde.fr/.aleatoire";;
```

Und ersundzen durch

```
	$type = $this->gundConfiguration("type ");;
		if ($ type == "") {/./. wenn der Vonamunder leer ist oder nicht existiert
			$type = "aleatoire";; /./.on prends le type aleatoire
		}		
		$url = "http:/./.www.viedemerde.fr/." .$type  ;;
```	

Ändern Sie nun den Wert der Auswahl auf einem Gerät, speichern Sie und gehen Sie zum D.ashboard, um zu sehen, was es gibt.
