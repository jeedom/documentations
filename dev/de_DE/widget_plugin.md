# Verwaltung der Widgets der Plugins

Es gibt mehrere Möglichkeiten, benutzerdefinierte Widgets für Plugins zu erstellen:

- die erste mit der Funktion toHtml (Instanzmethode), die von der Klasse eqLogic erbt
- über das Template-System (nur v4)

## Funktion toHtml

Da gibt es nichts Besonderes: Die Funktion „toHtml“ muss das Widget als HTML zurückgeben. Hier ist ein Beispiel. [dort](https://github.com/jeedom/plugin-weather/blob/beta/core/class/weather.class.php#L647)

Das Wichtigste sind vor allem die ersten Zeilen:

````php
$replace = $this->preToHtml($_version);
if (!is_array($replace)) {
	return $replace;
}
````

Die Funktion preToHtml gibt Folgendes zurück:

- ein String, wenn das Widget im Cache gespeichert ist (wenn es im Cache gespeichert ist, bedeutet das, dass seit der letzten Generierung keine Änderungen vorgenommen wurden, also kann man es genauso gut sofort zurückgeben)
- Eine Tabelle mit den wichtigsten Ersetzungen – hier ist die Liste [hier](https://github.com/jeedom/core/blob/alpha/core/class/eqLogic.class.php#L663)

## Das Vorlagensystem

Das Widget-Vorlagensystem im Code ist genau dasselbe wie das auf der Seite „Extras -> Widgets“ von Jeedom.

Hier ein Beispiel:

````php
public static function templateWidget(){
	$return = array('info' => array('string' => array()));
	$return['info']['string']['state'] = array(
		'template' => 'tmplmultistate',
		'test' => array(
			array('operation' => '#value# == 2','state_light' => '<i class="icon maison-vacuum6"></i>','state_dark' => '<i class="icon maison-vacuum6"></i>'),
			array('operation' => '#value# == 3','state_light' => '<i class="fa fa-pause"></i>','state_dark' => '<i class="fa fa-pause"></i>'),
			array('operation' => '#value# > 3 || #value# < 2','state_light' => '<i class="fa fa-home"></i>','state_dark' => '<i class="fa fa-home"></i>')
		)
	);
	return $return;
}
````

Hier erstellen wir ein neues Widget auf Basis der Vorlage „tmplmultistate“ (die Liste der Vorlagen finden Sie [hier](https://github.com/jeedom/core/tree/alpha/core/template/dashboard) das sind diejenigen mit „tmpl“ im Namen, für einen Befehl vom Typ „info“ und vom Untertyp „string“.

> **WICHTIG**
>
> Jede Vorlage ist für einen bestimmten Typ und Untertyp vorgesehen. Sie sollten daher sorgfältig prüfen, ob die Vorlage, die Sie verwenden möchten, für den jeweiligen Typ und Untertyp verfügbar ist.

Da es sich um eine Vorlage mit mehreren Zuständen handelt, müssen die Symbole je nach Zustand definiert werden. Dies erfolgt im Testbereich der Tabelle.

Beispiel: Für den ersten Test wird festgelegt, dass, wenn der Wert des Befehls 2 beträgt, das Tag #\_state_# (im HTML-Code der Vorlage) durch <i class="icon maison-vacuum6"></i>

Ein weiteres Beispiel auf Basis einer anderen Vorlage könnte wie folgt aussehen:

````php
public static function templateWidget(){
	$return = array('info' => array('string' => array()));
	$return['info']['binary']['toto'] = array(
		'template' => 'tmplicon',
		'replace' => array(
			'#_icon_on_#' => '<i class=\'icon_green icon jeedom-porte-ferme\'></i>',
			'#_icon_off_#' => '<i class=\'icon_red icon jeedom-porte-ouverte\'></i>'
			)
	);
	return $return;
}
````

Hier erstelle ich ein Toto-Widget auf Basis der Vorlage „tmplicon“ vom Typ „Info“ und vom Untertyp „Binär“. Wenn der Wert 1 ist, wird das Symbol <i class='icon_green icon jeedom-porte-ferme'></i> und wenn der Wert 0 ist, wird es <i class='icon_red icon jeedom-porte-ouverte'></i>

>**TIPPS**
>
> Kleiner Tipp: Anstelle eines Symbols können Sie ein Bild-Tag einfügen (achten Sie auf den Pfad).

So nutzen Sie Ihr Widget:

````php
$cmd->setTemplate('dashboard','neato::state');
$cmd->setTemplate('mobile','neato::state');
````

Es funktioniert wie bei einem normalen Widget, nur dass der Name des Widgets die Form id_plugin::widgetname hat. Im zweiten Beispiel wäre das id_plugin::toto


