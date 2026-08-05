# Concept

Hier sind die wichtigsten Grundkonzepte von Jeedom. Diese Dokumentation bleibt freiwillig einfach, damit Sie die Kontrolle über Ihre Hausautomation übernehmen können.

Die Möglichkeiten von Jeedom sind nahezu endlos, da man mit ein paar PHP-, Python- oder anderen Skripten viele Dinge erstellen kann, aber das ist hier nicht das Thema.

> Tip
>
> Die folgenden Links verweisen auf Core v4.5. Auf der Dokumentationsseite (Benutzerhandbuch oder Konfiguration) können Sie die Version im Menü oben links ändern, um zu der Version zu wechseln, die dem gewünschten Core entspricht.

## Affichage

Mit Jeedom können viele Geräte miteinander verbunden werden, sei es auf Basis der Protokolle Z-Wave, Enocean, Zigbee usw., auf APIs mithilfe von Plugins oder direkt in Form von Skripten. Sie können auf der sehen [Markt](https://market.jeedom.com/) um einen Überblick über die unterstützten Geräte zu erhalten.

Sie können diese Geräte auf verschiedene Arten anzeigen :

- Auf dem [Armaturenbrett](/de_DE/core/4.5/dashboard)
- Auf dem [Synthese](/de_DE/core/4.5/overview) (v4.5)
- Auf einem [Ansicht](/de_DE/core/4.5/view)
- Auf einem [Design](/de_DE/core/4.5/design)
- Auf einem [3D Design](/de_DE/core/4.5/design3d)

![Synthese](images/concept-synthese.jpg)

Diese können im Browser auf einem Desktop-Computer, auf einem Smartphone mit der WebApp oder der mobilen Anwendung angezeigt werden : [Mobil Version](/de_DE/mobile/index)

## Objekte

Um Ihre Geräte zu organisieren, können Sie erstellen [Objekte](/de_DE/core/4.5/object).

Diese Objekte können Teile des Hauses darstellen (Wohnzimmer, Schlafzimmer, Werkstatt). Jedes Objekt kann ein übergeordnetes Objekt haben. Diese Hierarchie wird für die Anzeige im Dashboard verwendet. Sie können beispielsweise ein Objekt haben **Haus**, dann Objekte **Wohnzimmer** und **Schlafzimmer** Objekt Kinder **Haus**. Einmal im Dashboard, das Objekt **Haus** zeigt auch unten seine untergeordneten Objekte an.

![Objet](images/concept-objet.jpg)

> **Beratung**
>
> IN **Einstellungen → Einstellungen**, Sie können definieren, welches Objekt im Dashboard ankommen soll. [Vorlieben](/de_DE/core/4.5/profils)

![Armaturenbrett](images/concept-dashboard.jpg)

## Ausrüstung und ihre Kontrollen

### Commandes

Für die Interaktion mit unserer Hausautomation benötigen Sie Befehle ! Es gibt zwei Arten :

> Note
>
> Seien Sie versichert, Bestellungen werden normalerweise automatisch erstellt ! Diese Erklärungen dienen dem besseren Verständnis.

- Bestellungen *Info* :
Diese Befehle speichern Informationen von Sensoren. Zum Beispiel die Temperatur einer Sonde, die Bewegung eines Anwesenheitssensors usw.
Diese Befehle können protokolliert werden, um diese Informationen über die Zeit in Form einer Kurve zu erhalten : [Chronik](/de_DE/core/4.5/history)

Diese Befehle können auch zum Auslösen verwendet werden [Szenarien](/de_DE/core/4.5/scenario) um Aktionen basierend auf den von Ihren Sensoren gesendeten Informationen zu automatisieren. Ein Bewegungssensor erkennt beispielsweise eine Anwesenheit, die ein Szenario auslöst, das das Licht einschaltet.

- Bestellungen *Aktion* :
Mit diesen Befehlen können Sie Ihre Aktuatoren steuern. Zum Beispiel Befehle ````on```` und ````off```` Mit einer kontrollierten Steckdose können Sie sie ein- und ausschalten.

Aktionsbefehle sind normalerweise mit Info-Befehlen verknüpft. Hier hat unsere Einstellung zwei Aktionen ````on```` und ````off````, in der Regel im Zusammenhang mit Informationen **Zustand**.

![Befehle](images/concept-commands.jpg)

Diese beiden Arten von Befehlen werden in Form von Geräten angehängt. Das Gerät verfügt daher über Info- und / oder Aktionsbefehle. Dieses Gerät verfügt über ein übergeordnetes Objekt, mit dem Sie es an der gewünschten Stelle anzeigen können.

Jeder Befehl kann auch einen sogenannten generischen Typ haben, der es Jeedom und einigen Plugins ermöglicht, den Befehlstyp (Status einer Steckdose, Taste eines Lichts usw). [**Werkzeuge → Gerätetypen**](/de_DE/core/4.5/types).

### Équipement

- Physiquement: Ich habe eine Steckdose mit einem Ein / Aus-Knopf und einer Status-LED im Wohnzimmer.
- In Jeedom: Ich habe Geräte mit zwei Ein- und Ausschaltaktionen und einer Statusinformation im Salonobjekt.

Diese Geräte werden von Plugins erstellt. Mit dem Z-Wave-Plugin können Sie beispielsweise Ihren Z-Waze-Sockel einbinden, wodurch ein Gerät mit seinen Steuerelementen erstellt wird, das Sie benennen und mit einem Objekt verknüpfen können.

In Bezug auf die Anzeige wird jede Bestellung mit einem Widget angezeigt. Der Core bietet die wichtigsten Widgets sowie ein Tool zum Erstellen dieser Widgets (V4)) : [Widgets](/de_DE/core/4.5/widgets).

Diese Befehle sind in einer Kachel zusammengefasst, die Ihrer Ausrüstung entspricht. Und diese Kachel wird daher im Dashboard in dem Objekt angezeigt, das Sie ihr zugewiesen haben.

![Befehle](images/concept-equipment.jpg)

Unabhängig von Ihrem Gerät wird es daher in Form eines Geräts aus a erstellt [Plugin](/de_DE/core/4.5/plugin).

Dieses Gerät verfügt über eigene Befehle *Info* oder *Aktion*. Diese Befehle werden als Widgets angezeigt, die die Gerätekachel in ihrem übergeordneten Objekt bilden.

Sie werden dann sehen, dass jedes Objekt, jede Ausrüstung oder jeder Befehl zahlreiche Optionen hinsichtlich Funktionalität oder Anzeige bietet. Aber alles zu seiner Zeit, jetzt sollten Sie die Grundkonzepte von Jeedom verstanden haben und somit in der Lage sein, mit der Organisation Ihrer Hausautomation zu beginnen, indem Sie wissen, wo Sie suchen müssen.

## Mein erstes Szenario

Der Vorteil der Heimautomation über die zentrale und ferngesteuerte Steuerung unserer Peripheriegeräte hinaus liegt vor allem in der Automatisierung. Das Ziel ist nicht, Stunden vor Ihrem Dashboard oder Design zu verbringen, sondern im Gegenteil, dass sich Ihre Unterkunft an Ihre Gewohnheiten anpasst und Sie vergessen lässt. Keine Fensterläden mehr, die jeden Tag geöffnet und geschlossen werden müssen, keine Lichter mehr zum Ein- und Ausschalten, seien Sie gewarnt, wann Sie den Müll auf die Straße bringen müssen, wenn sich Post im Briefkasten befindet, die Heizung passt sich dem an Jahreszeiten und klimatische Bedingungen. Die Möglichkeiten sind endlos und hängen vom eigenen Lebensstil ab. Dafür gibt es die Szenarien !

Ein Szenario besteht aus einer Reihe definierter Aktionen, die zu bestimmten Tageszeiten ausgeführt werden. Die Ausführung kann geplant werden (jeden Montag zu einer bestimmten Zeit) oder durch ein Ereignis verursacht werden. Wie oben gezeigt, kann dieses Ereignis beispielsweise unser Info-Befehl sein *Präsenz* ein Bewegungsmelder nach einer Erkennung.

Das Ziel hier ist nicht, erschöpfend zu sein, sondern die Szenarien anhand einfacher Beispiele zu entdecken. Das [Dokumentation des Benutzerhandbuchs](/de_DE/core/4.5/scenario) ist viel vollständiger.


### Licht bei Bewegungserkennung.

Angenommen, wir haben ein kontrolliertes Licht und einen Bewegungsmelder im Raum.

![1stScenario](images/1stScenario.gif)

- Gehe zu **Werkzeuge → Szenarien**
- Klicken Sie auf *Hinzufügen* Geben Sie dann dem neuen Szenario einen Namen.
- Richtig, im Abschnitt *Veröffentlichung*, Überprüfen Sie, ob der Modus aktiviert ist *Provozierten* dann klicken Sie auf *+ Auslöser*.
- Mit der Taste *Wählen Sie eine Bestellung* rechts vom Feld *Ereignis*, Wählen Sie das Objekt, dann das Gerät und seine Reihenfolge.

Die *Auslöser* ist das, was die Ausführung dieses Szenarios auslöst. Hier möchten wir es auslösen, wenn unser Detektor eine Anwesenheit erkennt, also werden wir den Befehl `verwenden#[Schlafzimmer][Détecteur Schlafzimmer][Präsenz]# == 1`.

Das „#“ gibt einen Befehl an, dann finden wir „[den Namen seines übergeordneten Objekts]“, dann „[den Namen des Geräts]“ und schließlich „[den Namen des Befehls]“. Hier fügen wir „== 1“ hinzu, weil wir möchten, dass das Szenario nur bei Erkennung einer Anwesenheit ausgelöst wird. Bei einem Anwesenheitsdetektor wird diese Erkennung jedoch einige Sekunden später auf 0 zurückgesetzt. Diese Änderung auf 0 wird daher unser Szenario nicht erneut auslösen.

- Klicken Sie auf die Registerkarte *Szenario* dann die Schaltfläche oben *Block hinzufügen*. Wähle einen Block *Aktion* dann auf diesem, *Hinzufügen* Ein *Aktion*. Diese Aktion wird unser Lichtschaltbefehl sein. Nach dem gleichen Prinzip : ``#[Schlafzimmer][Lumière Schlafzimmer][On]#``.

- Speichern Sie und Ihr Skript ist fertig !

Hier haben wir die Möglichkeiten der Szenarien nur gestreift. Sie können Bedingungen hinzufügen (blockieren *If / Then / Oder*), Verzögerungsaktionen (Block *IN*), programmiere sie (block *Bis*) und sogar direkt PHP-Code verwenden (Block *Code*).

Hier haben wir den Triggermodus verwendet *Provozierten* mit einer Bestellung. Sie können den Modus aber auch verwenden (und kombinieren) *Programmiert* um jeden Morgen oder jede Stunde ein Szenario auszuführen usw.


### Programm des Tages.

Ein wiederkehrendes Thema für Anfänger auf Jeedom, die Programmierung von täglichen Veranstaltungen wie :

- Schalten Sie die Kaffeemaschine an Wochentagen um 7 Uhr morgens ein.
- Öffnen Sie die Fensterläden bei Sonnenaufgang.
- Schließen Sie die Fensterläden bei Sonnenuntergang, wenn ich nicht da bin.

Für diese Art von Szenario finden Sie hier eine sehr gute Einführung : [Programm des Tages](https://kiboost.github.io/jeedom_docs/jeedomV4Tips/Tutos/ProgDuJour/de_DE/)

