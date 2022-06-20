# Concept

Hier sind die wichtigsten Grundkonzepte von Jeedom. Diese Dokumentation ist bewusst einfach gehalten, um Ihnen zu helfen, Ihre Hausautomation in den Griff zu bekommen.

Die Möglichkeiten von Jeedom sind nahezu unbegrenzt, da man mit ein paar PHP-, Python- oder anderen Skripten eine Menge Dinge erstellen kann, aber das ist hier nicht das Thema.

> Tip
>
> Die folgenden Links verweisen auf den Core v4.1. Sobald Sie sich auf der Dokumentationsseite (Benutzer- oder Konfigurationshandbuch) befinden, können Sie die Version im Menü oben links ändern, um zu der Version zu wechseln, die dem gewünschten Core entspricht.

## Affichage

Jeedom ermöglicht es, eine Vielzahl von Geräten miteinander zu verbinden, egal ob diese auf den Protokollen Z-Wave, Enocean, Zigbee etc. basieren, auf APIs dank Plugins oder direkt in Form von Skripten. Sie können auf dem zusehen [Markt](https://market.jeedom.com/) für eine Übersicht der unterstützten Geräte.

Sie können diese Geräte auf verschiedene Weise anzeigen :

- Auf der [Armaturenbrett](/de_DE/core/4.1/dashboard)
- Auf der [Synthese](/de_DE/core/4.1/overview) (v4.1)
- Auf einen [Gesehen](/de_DE/core/4.1/view)
- Auf einen [Entwurf](/de_DE/core/4.1/design)
- Auf einen [3D-Design](/de_DE/core/4.1/design3d)

![Synthese](images/concept-synthese.jpg)

Diese können in einem Browser auf einem Desktop-Computer oder auf einem Smartphone mit der WebApp oder mobilen Anwendung angezeigt werden : [Mobile Version](/de_DE/mobile/index)

## Objekte

Um Ihre Geräte zu organisieren, können Sie erstellen [Objekte](/de_DE/core/4.1/object).

Diese Objekte können Räume im Haus darstellen (Wohnzimmer, Schlafzimmer, Werkstatt). Jedes Objekt kann ein übergeordnetes Objekt haben. Diese Hierarchie wird für die Anzeige auf dem Dashboard verwendet. Beispielsweise können Sie ein Objekt haben **Haus**, dann Objekte **Wohnzimmer** **Schlafzimmer** Objekt Kinder **Haus**. Einmal auf dem Dashboard, das Objekt **Haus** wird auch unten seine untergeordneten Objekte anzeigen.

![Objet](images/concept-objet.jpg)

> Tips
>
> Im **Einstellungen → Präferenzen**, Auf dem Dashboard können Sie festlegen, zu welchem Objekt Sie gelangen möchten. [Einstellungen](/de_DE/core/4.1/profils)

![Armaturenbrett](images/concept-dashboard.jpg)

## Ausrüstung und ihre Steuerung

### Commandes

Um mit unserer Hausautomation zu interagieren, benötigen Sie Befehle ! Dies sind zwei Arten :

> Note
>
> Seien Sie versichert, Bestellungen werden normalerweise automatisch erstellt ! Diese Erläuterungen dienen dem besseren Verständnis.

- Die Bestellungen *Information* :
Diese Befehle speichern Informationen von Sensoren. Zum Beispiel die Temperatur eines Fühlers, eine Bewegung eines Anwesenheitssensors usw.
Diese Befehle können protokolliert werden, um diese Informationen über die Zeit in Form einer Kurve zu halten : [Historisch](/de_DE/core/4.1/history)

Diese Befehle können auch zum Triggern verwendet werden [Szenarien](/de_DE/core/4.1/scenario) um Aktionen basierend auf den von Ihren Sensoren gemeldeten Informationen zu automatisieren. Beispielsweise erkennt ein Bewegungssensor eine Präsenz, die ein Szenario auslöst, das das Licht einschaltet.

- Die Bestellungen *Lager* :
Mit diesen Befehlen können Sie Ihre Aktoren steuern. Zum Beispiel die Befehle ``on`` und ``off`` Eine kontrollierte Steckdose ermöglicht es Ihnen, es ein- und auszuschalten.

Aktionsbefehle sind normalerweise mit Infobefehlen verknüpft. Hier hat unser Griff zwei Aktionen ``on`` und ``off``, in der Regel mit Informationen verbunden **Bundesland**.

![Aufträge](images/concept-commands.jpg)

Diese beiden Arten von Befehlen sind in Form von Ausrüstung angebracht. Das Gerät verfügt daher über Info- und/oder Aktionsbefehle, und es ist dieses Gerät, das ein Objekt als übergeordnetes Element hat, sodass Sie es anzeigen können, wo immer Sie möchten.

Jeder Befehl kann auch einen sogenannten generischen Typ haben, der es Jeedom und bestimmten Plugins ermöglicht, den Befehlstyp zu kennen (Status einer Steckdose, Knopf eines Lichts usw). [**Extras → Gerätetypen**](/de_DE/core/4.2/types).

### Équipement

- Physiquement: Ich habe im Wohnzimmer eine Steckdose mit Ein/Aus-Taste und Status-LED.
- Im Jedom: Ich habe eine Ausrüstung mit zwei Ein- und Aus-Aktionen und einer Statusinformation im Salon-Objekt.

Diese Geräte werden durch Plugins erstellt. Mit dem Z-Wave-Plug-in können Sie beispielsweise Ihren Z-Waze-Plug einschließen, der mit seinen Steuerelementen ein Gerät erstellt, das Sie benennen und mit einem Objekt verknüpfen können.

In Bezug auf die Anzeige wird jede Bestellung über ein Widget angezeigt. Der Core bietet die wichtigsten Widgets sowie ein Tool zu deren Erstellung (V4) : [Widgets](/de_DE/core/4.1/widgets).

Diese Befehle sind in einer Kachel gruppiert, die Ihrer Ausrüstung entspricht. Und diese Kachel wird daher auf dem Dashboard in dem von Ihnen ausgewählten Objekt angezeigt.

![Aufträge](images/concept-equipment.jpg)

Was auch immer Ihr Peripheriegerät ist, es wird daher in Form eines Geräts erstellt, aus a [Plugin](/de_DE/core/4.1/plugin).

Dieses Gerät hat seine eigenen Befehle *Information* Wo *Lager*. Diese Befehle werden als Widgets angezeigt, die die Gerätekachel in ihrem übergeordneten Objekt bilden.

Sie werden dann sehen, dass jedes Objekt, jede Ausrüstung, jeder Befehl viele Optionen in Bezug auf Funktionalität oder Anzeige hat. Aber alles zu seiner Zeit, jetzt sollten Sie die grundlegenden Konzepte von Jeedom verstanden haben und somit in der Lage sein, Ihre Hausautomation zu organisieren, indem Sie wissen, wo Sie suchen müssen.

## Mein erstes Drehbuch

Das Interesse der Heimautomatisierung liegt über die zentrale und ferngesteuerte Steuerung unserer Peripherie hinaus vor allem in der Automatisierung. Das Ziel ist nicht, Stunden vor Ihrem Dashboard oder dessen Design zu verbringen, sondern im Gegenteil, dass sich Ihr Zuhause Ihren Gewohnheiten anpasst und vergessen wird. Keine Rollläden mehr, die jeden Tag geöffnet und geschlossen werden müssen, kein Licht mehr, das ein- und ausgeschaltet werden muss, keine Warnung mehr, wenn der Müll auf die Straße gebracht werden muss, wenn Post im Briefkasten ist, eine Heizung, die sich an Jahreszeiten und klimatische Bedingungen anpasst. Die Möglichkeiten sind endlos und hängen vom Lebensstil jedes Einzelnen ab. Dafür sind die Szenarien da !

Ein Szenario ist eine Abfolge definierter Aktionen, die zu bestimmten Tageszeiten ausgeführt werden. Die Ausführung kann geplant (jeden Montag um diese Zeit) oder durch ein Ereignis verursacht werden. Wie oben gesehen, kann dieses Ereignis beispielsweise unser Info-Befehl sein *Gegenwart* eines Bewegungsmelders nach einer Detektion.

Das Ziel hier ist nicht erschöpfend zu sein, sondern die Szenarien durch einfache Beispiele zu entdecken. Das [Benutzerhandbuch Dokumentation](/de_DE/core/4.1/scenario) ist viel vollständiger.


### Licht einschalten bei Bewegungserkennung.

Nehmen wir an, wir haben ein kontrolliertes Licht und einen Bewegungsmelder im Raum.

![1stScenario](images/1stScenario.gif)

- Gehen in **Extras → Szenarien**
- Klicke auf *Hinzufügen* dann gib ihm einen namen.
- Rechts im Teil *Auslösen*, Überprüfen Sie, ob der Modus aktiviert ist *Provoziert* dann klick *+ Auslöser*.
- Mit der Taste *Wählen Sie eine Bestellung aus* rechts neben dem Feld *Vorfall*, Wählen Sie das Objekt, dann die Ausrüstung und ihren Befehl.

Das *Abzug* wird die Ausführung dieses Szenarios auslösen. Hier wollen wir es auslösen, wenn unser Detektor eine Präsenz erkennt, also verwenden wir den Befehl `#[Schlafzimmer][Détecteur Schlafzimmer][Présence]# == 1`.

Das `#` zeigt einen Befehl an, dann finden wir `[den Namen des übergeordneten Objekts]`, dann `[den Namen des Geräts]` und schließlich `[den Namen des Befehls]`. Hier fügen wir ` == 1` hinzu, weil wir möchten, dass das Szenario nur ausgelöst wird, wenn eine Anwesenheit erkannt wird. Bei einem Präsenzmelder geht diese Erkennung jedoch einige Sekunden später auf 0 zurück. Diese Änderung auf 0 wird daher unser Szenario nicht erneut auslösen.

- Klicken Sie auf die Registerkarte *Skript* dann die Taste oben *Block hinzufügen*. Wähle einen Block *Aktie* dann auf diesem, *Hinzufügen* a *Aktie*. Diese Aktion wird unser Licht auf Befehl sein. Nach dem gleichen Prinzip : `#[Schlafzimmer][Lumière Schlafzimmer][On]#`.

- Speichern Sie und Ihr Szenario ist fertig !

Wir haben hier nur an der Oberfläche der Möglichkeiten der Szenarien gekratzt. Sie können Bedingungen hinzufügen (block *Wenn/Dann/Sonst*), Aktionen verzögern (Block *Im*), programmieren sie (block *HAT*), und sogar PHP-Code direkt verwenden (block *Codiert*).

Hier haben wir den Triggermodus verwendet *provoziert*, mit einer Bestellung. Sie können den Modus aber auch verwenden (und kombinieren) *Programm* um ein Szenario jeden Morgen oder jede Stunde auszuführen usw.


### Programm des Tages.

Ein wiederkehrendes Thema für Einsteiger auf Jeedom ist die Programmierung von täglichen Events wie z :

- Schalten Sie die Kaffeemaschine wochentags um 7 Uhr morgens ein.
- Öffnen Sie die Fensterläden bei Sonnenaufgang.
- Schließe die Fensterläden bei Sonnenuntergang, wenn ich nicht da bin.

Für diese Art von Szenario finden Sie hier eine sehr gute Einführung : [Programm des Tages](https://kiboost.github.io/jeedom_docs/jeedomV4Tips/Tutos/ProgDuJour/de_DE/)

