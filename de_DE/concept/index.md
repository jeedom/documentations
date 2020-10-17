# Concept

Hier sind die wichtigsten Grundkonzepte von Jeedom. Diese Dokumentation bleibt absichtlich einfach, damit Sie die Kontrolle über Ihre Hausautomation übernehmen können.

Die Möglichkeiten von Jeedom sind nahezu unbegrenzt, da Sie mit ein paar PHP-, Python- oder anderen Skripten viele Dinge erstellen können, aber das ist hier nicht das Thema.

> Tip
>
> Die folgenden Links verweisen auf Core v4.1. Auf der Dokumentationsseite (Benutzer- oder Konfigurationshandbuch) können Sie die Version im Menü oben links ändern, um zu der Version zu wechseln, die dem gewünschten Core entspricht.

## Affichage

Jeedom ermöglicht es, eine große Anzahl von Geräten miteinander zu verbinden, unabhängig davon, ob sie auf Z-Wave-, Enocean-, ZigBee- usw. Protokollen, APIs mit Plugins oder direkt in Form von Skripten basieren. Sie können auf der sehen [Markt](https://market.jeedom.com/) um einen Überblick über die unterstützten Geräte zu erhalten.

Sie können diese Geräte auf verschiedene Arten anzeigen :

- Auf der [Instrumententafel](/de_DE/core/4.1/dashboard)
- Auf der [Synthese](/de_DE/core/4.1/overview) (v4.1)
- Auf einen [Aussicht](/de_DE/core/4.1/view)
- Auf einen [Design](/de_DE/core/4.1/design)
- Auf einen [3D-Design](/de_DE/core/4.1/design3d)

![Synthese](images/concept-synthese.jpg)

Diese können in einem Browser auf einem Desktop-Computer oder auf einem Smartphone mit der WebApp oder der mobilen Anwendung angezeigt werden : [Mobile Version](/de_DE/mobile/index)

## Artikel

Um Ihre Geräte zu organisieren, können Sie erstellen [Objekte](/de_DE/core/4.1/object).

Diese Objekte können Räume des Hauses darstellen (Wohnzimmer, Schlafzimmer, Werkstatt). Jedes Objekt kann ein übergeordnetes Objekt haben. Diese Hierarchie wird für die Anzeige im Dashboard verwendet. Sie können beispielsweise ein Objekt haben **Haus**, dann Objekte **Wohnzimmer** **Schlafzimmer** Objekt Kinder **Haus**. Einmal im Dashboard, das Objekt **Haus** zeigt auch unten seine untergeordneten Objekte an.

![Objet](images/concept-objet.jpg)

> Tips
>
> Im **Einstellungen → Einstellungen**, Sie können festlegen, für welches Objekt Sie im Dashboard ankommen möchten. [Einstellungen](/de_DE/core/4.1/profils)

![Instrumententafel](images/concept-dashboard.jpg)

## Ausrüstung und ihre Kontrollen

### Commandes

Für die Interaktion mit unserer Hausautomation benötigen Sie Befehle ! Es gibt zwei Arten :

> Note
>
> Seien Sie versichert, Bestellungen werden normalerweise automatisch erstellt ! Diese Erklärungen dienen dem besseren Verständnis.

- Die Bestellungen *die Info* :
Diese Befehle speichern Informationen von Sensoren. Zum Beispiel die Temperatur einer Sonde, die Bewegung eines Anwesenheitssensors usw.
Diese Aufträge können protokolliert werden, um diese Informationen über die Zeit in Form einer Kurve zu erhalten : [Historisch](/de_DE/core/4.1/history)

Diese Befehle können auch zum Auslösen verwendet werden [Szenarien](/de_DE/core/4.1/scenario) um Aktionen basierend auf den von Ihren Sensoren gesendeten Informationen zu automatisieren. Ein Bewegungssensor erkennt beispielsweise eine Anwesenheit, die ein Szenario auslöst, das das Licht einschaltet.

- Die Bestellungen *Aktion* :
Mit diesen Befehlen können Sie Ihre Aktuatoren steuern. Zum Beispiel die Befehle ````on```` und ````off```` Über eine kontrollierte Steckdose können Sie sie ein- und ausschalten.

Aktionsbefehle sind im Allgemeinen mit Info-Befehlen verknüpft. Hier hat unsere Steckdose zwei Aktionen ````on```` und ````off````, im Allgemeinen mit Informationen verknüpft **Zustand**.

![Aufträge](images/concept-commands.jpg)

Diese beiden Arten von Steuerelementen sind in Form eines Geräts angebracht. Das Gerät verfügt daher über Info- und / oder Aktionsbefehle. Dieses Gerät verfügt über ein Objekt als übergeordnetes Element, sodass Sie es anzeigen können, wo immer Sie möchten.

Jeder Befehl verfügt über eine generische Typ-Eigenschaft, mit der Jeeodm verstehen kann, was er tut.Du kannst sehen [Hier](https://doc.jeedom.com/de_DE/concept/generic_type) die Dokumentation zum generischen Typ

### Équipement

- Physiquement: Ich habe eine Steckdose mit einem Ein / Aus-Knopf und einer Status-LED im Wohnzimmer.
- In Jeedom: Ich habe ein Gerät mit zwei Ein- und Ausschaltaktionen und einer Statusinformation im Wohnzimmerobjekt.

Diese Geräte werden von Plugins erstellt. Mit dem Z-Wave-Plugin können Sie beispielsweise Ihren Z-Waze-Socket einbinden, wodurch ein Gerät mit seinen Befehlen erstellt wird, das Sie benennen und mit einem Objekt verknüpfen können.

In Bezug auf die Anzeige wird jede Bestellung mit einem Widget angezeigt. Der Core bietet die wichtigsten Widgets sowie ein Tool zum Erstellen dieser Widgets (V4)) : [Widgets](/de_DE/core/4.1/widgets).

Diese Befehle sind in einer Kachel zusammengefasst, die Ihrer Ausrüstung entspricht. Diese Kachel wird im Dashboard des von Ihnen ausgewählten Objekts angezeigt.

![Aufträge](images/concept-equipment.jpg)

Unabhängig von Ihrem Gerät wird es daher in Form eines Geräts aus a erstellt [Plugin](/de_DE/core/4.1/plugin).

Dieses Gerät verfügt über eigene Steuerelemente *die Info* oder *Aktion*. Diese Befehle werden in Form von Widgets angezeigt, die die Gerätekachel in ihrem übergeordneten Objekt bilden.

Sie werden dann sehen, dass jedes Objekt, jede Ausrüstung, jede Bestellung viele Optionen in Bezug auf Funktionalität oder Anzeige hat. Aber alles rechtzeitig, jetzt sollten Sie die Grundkonzepte von Jeedom verstanden haben und somit in der Lage sein, Ihre Hausautomation zu organisieren und zu wissen, wo Sie suchen müssen.

## Mein erstes Szenario

Das Interesse der Heimautomation über die zentrale und ferngesteuerte Steuerung unserer Peripheriegeräte hinaus liegt vor allem in der Automatisierung. Das Ziel ist nicht, Stunden vor Ihrem Dashboard oder dessen Design zu verbringen, sondern im Gegenteil, dass sich Ihre Unterkunft an Ihre Gewohnheiten anpasst und vergessen wird. Keine Fensterläden mehr, die jeden Tag geöffnet und geschlossen werden müssen, keine Lichter mehr zum Ein- und Ausschalten, seien Sie gewarnt, wann Sie den Müll auf die Straße bringen müssen, wenn sich Post im Briefkasten befindet, die Heizung passt sich an die an Jahreszeiten und klimatische Bedingungen. Die Möglichkeiten sind endlos und hängen vom eigenen Lebensstil ab. Dafür gibt es die Szenarien !

Ein Szenario besteht aus einer Reihe definierter Aktionen, die zu bestimmten Tageszeiten ausgeführt werden. Die Ausführung kann geplant werden (jeden Montag zu einer bestimmten Zeit) oder durch ein Ereignis verursacht werden. Wie oben gezeigt, kann dieses Ereignis beispielsweise unser Info-Befehl sein *Gegenwart* ein Bewegungsmelder nach einer Erkennung.

Das Ziel hier ist nicht, erschöpfend zu sein, sondern die Szenarien anhand einfacher Beispiele zu entdecken. Das [Dokumentation des Benutzerhandbuchs](/de_DE/core/4.1/scenario) ist viel vollständiger.


### Licht schaltet sich ein, wenn eine Bewegung erkannt wird.

Angenommen, wir haben einen kontrollierten Licht- und Bewegungsmelder im Schlafzimmer.

![1stScenario](images/1stScenario.gif)

- Gehe zu **Werkzeuge → Szenarien**
- Klicke auf *Hinzufügen* dann gib ihm einen Namen.
- Rechts im Teil *Auslösen*, Überprüfen Sie, ob der Modus aktiviert ist *Provoziert* dann klicken Sie auf *+ Auslöser*.
- Mit der Taste *Wählen Sie eine Bestellung* rechts vom Feld *Veranstaltung*, Wählen Sie das Objekt, dann das Gerät und seine Reihenfolge.

Das *Auslösen* ist das, was die Ausführung dieses Szenarios auslöst. Hier möchten wir es auslösen, wenn unser Detektor eine Anwesenheit erkennt, also werden wir den Befehl `verwenden#[Schlafzimmer][Détecteur Schlafzimmer][Présence]# == 1`.

Das "#" gibt einen Befehl an, dann finden wir "[den Namen des übergeordneten Objekts]", dann "[den Namen des Geräts]" und schließlich "[den Namen des Befehls]". Hier fügen wir `== 1` hinzu, weil das Szenario nur beim Erkennen einer Präsenz ausgelöst werden soll. Bei einem Anwesenheitsdetektor kehrt diese Erkennung jedoch einige Sekunden später auf 0 zurück. Diese Änderung auf 0 wird daher unser Szenario nicht erneut auslösen.

- Klicken Sie auf die Registerkarte *Szenario* dann auf den Knopf oben *Block hinzufügen*. Wähle einen Block *Aktion* dann auf diesem, *Hinzufügen* ein *Aktion*. Diese Aktion wird unser Befehl sein, das Licht einzuschalten. Nach dem gleichen Prinzip : ``#[Schlafzimmer][Lumière Schlafzimmer][On]#``.

- Speichern Sie und Ihr Szenario ist fertig !

Hier haben wir nur die Oberfläche der Möglichkeiten der Szenarien zerkratzt. Sie können Bedingungen hinzufügen (blockieren *Wenn / Dann / Sonst*), Verzögerungsaktionen (Block *Im*), programmiere sie (block *BEIM*), und sogar direkt PHP-Code verwenden (Block *Codiert*).

Hier haben wir den Triggermodus verwendet *provoziert*, mit einem Befehl. Sie können den Modus aber auch verwenden (und kombinieren) *Programm* jeden Morgen oder jede Stunde ein Szenario ausführen usw.


### Programmierung des Tages.

Ein wiederkehrendes Thema für Anfänger auf Jeedom, die Programmierung von täglichen Veranstaltungen wie :

- Schalten Sie die Kaffeemaschine an Wochentagen um 7 Uhr morgens ein.
- Bei Sonnenaufgang die Fensterläden öffnen.
- Schließen Sie die Fensterläden bei Sonnenuntergang, wenn ich nicht da bin.

Für diese Art von Szenario finden Sie hier eine sehr gute Einführung : [Programmierung des Tages](https://kiboost.github.io/jeedom_docs/jeedomV4Tips/Tutos/ProgDuJour/de_DE/)

