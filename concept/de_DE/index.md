# Konzept

Hier finden Sie die wichtigsten Grundkonzepte von Jeedom. Diese Dokumentation ist bewusst einfach gehalten, um Ihnen den Einstieg in die Hausautomation zu erleichtern.

Die Möglichkeiten von Jeedom sind nahezu unbegrenzt, da man mit ein paar PHP-, Python- oder anderen Skripten eine Menge Dinge erstellen kann, aber darum geht es hier nicht.

## Anzeige

Mit Jeedom lassen sich zahlreiche Geräte miteinander vernetzen, unabhängig davon, ob diese auf den Protokollen Z-Wave, Enocean, Zigbee usw. basieren, über APIs mithilfe von Plugins oder direkt in Form von Skripten. Weitere Informationen finden Sie auf der [Markt](https://market.jeedom.com/) um einen Überblick über die unterstützten Geräte zu erhalten.

Sie können diese Geräte auf verschiedene Arten anzeigen:

- Auf der [Dashboard](/core/dashboard)
- Auf der [Zusammenfassung](/core/overview)
- Auf einer [Ansicht](/core/view)
- Auf einem [Design](/core/design)
- Auf einem [3D-Design](/core/design3d)

![Zusammenfassung](../images/concept-synthese.jpg)

Diese können in einem Browser auf einem Desktop-Computer, auf einem Smartphone über die WebApp oder die mobile App aufgerufen werden: [Mobile Version](/mobile)

## Die Objekte

Um Ihre Geräte zu organisieren, können Sie [Objekte](/core/object).

Diese Objekte können Räume im Haus darstellen (Wohnzimmer, Schlafzimmer, Arbeitszimmer). Jedes Objekt kann ein übergeordnetes Objekt haben. Diese Hierarchie dient der Darstellung auf dem Dashboard. Sie können beispielsweise ein Objekt **Haus** haben, dessen untergeordnete Objekte **Wohnzimmer** und **Schlafzimmer** sind. Auf dem Dashboard werden unter dem Objekt **Haus** auch dessen untergeordnete Objekte angezeigt.

![Objekt](../images/concept-objet.jpg)

> **Tipp**
>
> Unter **Einstellungen → Voreinstellungen** können Sie festlegen, zu welchem Objekt Sie auf dem Dashboard gelangen möchten. [Einstellungen](/core/profils)

![Dashboard](../images/concept-dashboard.jpg)

## Geräte und deren Steuerung

### Steuerungen

Um mit unserem Hausautomationssystem zu interagieren, braucht man Befehle! Es gibt zwei Arten von Befehlen:

> Anmerkung
>
> Keine Sorge, Bestellungen werden normalerweise automatisch erstellt! Diese Erläuterungen dienen lediglich dem besseren Verständnis.

- Die *info*-Befehle:
Diese Befehle speichern Informationen von Sensoren. Zum Beispiel die Temperatur eines Fühlers, eine Bewegung eines Präsenzmelders usw.
Diese Befehle können protokolliert werden, um diese Informationen langfristig in Form einer Kurve zu speichern: [Geschichte](/core/history)

Diese Befehle können auch dazu dienen, [Szenarien](/core/scenario) um Vorgänge anhand der von Ihren Sensoren übermittelten Informationen zu automatisieren. Wenn beispielsweise ein Bewegungssensor eine Präsenz erkennt, löst dies ein Szenario aus, das das Licht einschaltet.

- Die *action*-Befehle:
Mit diesen Befehlen können Sie Ihre Aktoren steuern. Zum Beispiel die Befehle ``on`` und ``off`` Mit einer ferngesteuerten Steckdose können Sie das Gerät ein- und ausschalten.

Aktionsbefehle sind in der Regel mit Info-Befehlen verknüpft. In diesem Fall verfügt unsere Steckdose über zwei Aktionen ``on`` und ``off``, die in der Regel mit einer **Status**-Information verbunden sind.

![Steuerungen](../images/concept-commands.jpg)

Diese beiden Befehlstypen sind in Form eines Geräts miteinander verknüpft. Das Gerät verfügt somit über Info- und/oder Aktionsbefehle, und dieses Gerät hat ein Objekt als übergeordnetes Element, sodass Sie es an beliebiger Stelle anzeigen können.

Jeder Befehl kann zudem einen sogenannten generischen Typ haben, wodurch Jeedom und bestimmte Plugins den Befehlstyp erkennen können (Status einer Steckdose, Schalter einer Leuchte usw.). [**Extras → Gerätetypen**](/core/types).

### Ausstattung

- Hardware: Ich habe im Wohnzimmer eine Steckdose mit Ein-/Aus-Schalter und einer Status-LED.
- In Jeedom: Ich habe ein Gerät mit zwei Aktionen (Ein und Aus) und einer Statusmeldung im Objekt „Wohnzimmer“.

Diese Geräte werden über Plugins erstellt. Mit dem Z-Wave-Plugin können Sie beispielsweise Ihre Z-Wave-Steckdose hinzufügen. Dadurch wird ein Gerät mit entsprechenden Befehlen erstellt, das Sie benennen und mit einem Objekt verknüpfen können.

Was die Darstellung angeht, wird jeder Befehl über ein Widget angezeigt. Der Core bietet die wichtigsten Widgets sowie ein Tool zu deren Erstellung (V4): [Widgets](/core/widgets).

Diese Befehle sind in einer Kachel zusammengefasst, die Ihrer Anlage entspricht. Diese Kachel wird dann auf dem Dashboard in dem Objekt angezeigt, dem Sie sie zugewiesen haben.

![Steuerungen](../images/concept-equipment.jpg)

Unabhängig davon, um welches Gerät es sich handelt, wird es als Gerät angelegt, und zwar auf der Grundlage eines [Plugin](/core/plugin).

Dieses Gerät verfügt über eigene Befehle *info* oder *action*. Diese Befehle werden in Form von Widgets angezeigt, die die Kachel des Geräts in seinem übergeordneten Objekt bilden.

Sie werden im Folgenden feststellen, dass jedes Objekt, jedes Gerät und jeder Befehl zahlreiche Optionen hinsichtlich der Funktionen oder der Darstellung bietet. Aber eins nach dem anderen: Nun sollten Sie die Grundkonzepte von Jeedom verstanden haben und somit in der Lage sein, Ihre Hausautomation zu organisieren, da Sie wissen, wo Sie nachschauen müssen.

## Mein erstes Szenario

Der Vorteil der Hausautomation liegt – über die zentrale und ferngesteuerte Steuerung unserer Geräte hinaus – vor allem in der Automatisierung. Das Ziel ist nicht, stundenlang vor dem Dashboard oder dem Design zu sitzen, sondern im Gegenteil, dass sich Ihr Zuhause an Ihre Gewohnheiten anpasst und sich unauffällig in den Hintergrund einfügt. Nie wieder müssen Sie täglich Rollläden öffnen und schließen oder das Licht ein- und ausschalten; Sie werden benachrichtigt, wann Sie die Mülltonne an die Straße stellen müssen oder wann Post im Briefkasten liegt, und die Heizung passt sich je nach Jahreszeit und Wetterbedingungen an. Die Möglichkeiten sind unbegrenzt und hängen vom Lebensstil jedes Einzelnen ab. Dafür gibt es die Szenarien!

Ein Szenario ist eine Abfolge festgelegter Aktionen, die zu bestimmten Tageszeiten ausgeführt werden. Die Ausführung kann zeitlich geplant sein (jeden Montag um eine bestimmte Uhrzeit) oder durch ein Ereignis ausgelöst werden. Wie oben beschrieben, kann dieses Ereignis beispielsweise unser Befehl „*Anwesenheit*“ an einen Bewegungsmelder sein, der nach einer Erkennung ausgelöst wird.

Das Ziel ist hier nicht, alle Aspekte abzudecken, sondern anhand einfacher Beispiele verschiedene Anwendungsszenarien aufzuzeigen. Die [Dokumentation der Bedienungsanleitung](/core/scenario) ist wesentlich umfassender.


### Einschalten des Lichts bei Bewegungserkennung.

Nehmen wir an, wir haben eine steuerbare Leuchte und einen Bewegungsmelder im Schlafzimmer.

![1. Szenario](../images/1stScenario.gif)

- Gehen Sie zu **Extras → Szenarien**
- Klicken Sie auf *Hinzufügen* und geben Sie dem neuen Szenario einen Namen.
- Überprüfen Sie rechts im Bereich *Auslösung*, ob der Modus auf *Ausgelöst* eingestellt ist, und klicken Sie dann auf *+ Auslöser*.
- Wählen Sie mithilfe der Schaltfläche *Befehl auswählen* rechts neben dem Feld *Ereignis* das Objekt, anschließend das Gerät und dessen Befehl aus.

Der *Auslöser* ist das, was die Ausführung dieses Szenarios auslöst. In diesem Fall möchten wir es auslösen, wenn unser Sensor eine Anwesenheit erkennt. Daher verwenden wir den Befehl `#[Chambre][Détecteur Chambre][Présence]# == 1`.

Die `#` weisen auf einen Befehl hin, danach folgt `[le nom de son objet parent]` dann `[le nom de l'équipement]` und schließlich `[le nom de la commande]`. Hier fügen wir hinzu ` == 1` denn wir möchten, dass das Szenario nur bei der Erkennung einer Präsenz ausgelöst wird. Bei einem Präsenzmelder fällt dieser Wert jedoch einige Sekunden später wieder auf 0 zurück. Dieser Rückgang auf 0 löst unser Szenario daher nicht erneut aus.

- Klicken Sie auf die Registerkarte *Szenario* und anschließend oben auf die Schaltfläche *Block hinzufügen*. Wählen Sie einen *Aktionsblock* aus und fügen Sie dann über diesen Block eine *Aktion* hinzu. Diese Aktion dient als Befehl zum Einschalten des Lichts. Nach dem gleichen Prinzip: `#[Chambre][Lumière Chambre][On]#`.

- Speichern Sie, und schon ist Ihr Szenario fertig!

Wir haben hier nur einen kurzen Überblick über die Möglichkeiten von Szenarien gegeben. Sie können Bedingungen hinzufügen (*Wenn/Dann/Sonst*-Block), Aktionen zeitlich verzögern (*In*-Block), sie programmieren (*A*-Block) und sogar direkt PHP-Code verwenden (*Code*-Block).

Wir haben hier den Auslösemodus *auf Befehl* verwendet. Sie können jedoch auch den Modus *programmiert* nutzen (und kombinieren), um ein Szenario jeden Morgen oder jede Stunde usw. auszuführen.


### Das Tagesprogramm.

Ein immer wiederkehrendes Thema für Jeedom-Einsteiger ist die Programmierung von täglichen Ereignissen wie:

- Die Kaffeemaschine werktags um 7 Uhr einschalten.
- Die Rollläden bei Sonnenaufgang öffnen.
- Die Rollläden bei Sonnenuntergang schließen, wenn ich nicht da bin.

Für diese Art von Szenario gibt es hier eine sehr gute Einführung: [Tagesprogramm](https://kiboost.github.io/jeedom_docs/jeedomV4Tips/Tutos/ProgDuJour/fr_FR/)
