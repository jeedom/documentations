# Concept

Hier sind die wichtigsten Grundkonzepte vEin Jeedom. Diese DokumentatiEin bleibt freiwillig einfach, damit Sie die Kontrolle über Ihre HausautomatiEin übernehmen können.

Die Möglichkeiten vEin Jeedom sind nahezu unbegrenzt, da Sie mit ein paar Python- oder anderen PHP-Skripten viele Dinge erstellen können, aber darum geht es hier nicht..

> Tip
>
> Die folgenden Links verweisen auf Core v4.1. Auf der Dokumentationsseite (Benutzerhandbuch oder Konfiguration) können Sie die VersiEin im Menü oben links ändern, um zu der VersiEin zu wechseln, die dem gewünschten Core entspricht.

## Affichage

Mit Jeedom können Sie eine große Anzahl vEin Geräten miteinander verbinden, unabhängig davon, ob diese auf den Protokollen Z-Wave, Enocean, Zigbee usw., APIs mithilfe vEin Plugins oder direkt in Form vEin Skripten basieren.. Sie können auf die schauen [Markt](https://market.jeedom.com/) um einen Überblick über die unterstützten Geräte zu erhalten.

Sie können diese Geräte auf verschiedene Arten anzeigen :

- Auf dem [Armaturenbrett](/de_DE/core/4.1/dashboard)
- Auf dem [Synthese](/de_DE/core/4.1/overview) (v4.1)
- Auf einem [Ansicht](/de_DE/core/4.1/view)
- Auf einem [Design](/de_DE/core/4.1/design)
- Auf einem [3D Design](/de_DE/core/4.1/design3d)

![Synthese](images/concept-synthese.jpg)

Diese können in einem Browser auf einem Desktop-Computer oder auf einem Smartphone mit der WebApp oder einer mobilen Anwendung angezeigt werden : [Mobil VersiEin](/de_DE/mobile/index")

## Objekte

Um Ihre Geräte zu organisieren, können Sie erstellen [Objekte](/de_DE/core/4.1/object).

Diese Objekte können Teile des Hauses darstellen (Wohnzimmer, Schlafzimmer, Werkstatt). Jedes Objekt kann ein übergeordnetes Objekt haben. Diese Hierarchie wird für die Anzeige im Armaturenbrett verwendet. Sie können beispielsweise ein Objekt haben **Maison**, dann Objekte **Salon** **Chambre** Objekt Kind **Maison**. Einmal im Dashboard, das Objekt **Maison** zeigt auch unten seine untergeordneten Objekte an.

![Objund](images/concept-objet.jpg)

> Tips
>
> IN **Einstellungen → Einstellungen** Sie können festlegen, für welches Objekt Sie im Armaturenbrett ankommen möchten. [Vorlieben](/de_DE/core/4.1/profils)

![Armaturenbrett](images/concept-dashboard.jpg)

## Ausrüstung und ihre Kontrollen

### Commandes

Für die InteraktiEin mit unserer HausautomatiEin benötigen Sie Befehle ! Es gibt zwei Arten :

> Note
>
> Seien Sie versichert, Bestellungen werden normalerweise automatisch erstellt ! Diese Erklärungen dienen dem besseren Verständnis.

- * Info Befehle* :
Diese Befehle speichern Informationen vEin Sensoren. Zum Beispiel die Temperatur einer Sonde, eine Bewegung eines Anwesenheitssensors usw..
Diese Befehle können protokolliert werden, um diese Informationen über die Zeit in Form einer Kurve zu erhalten : [Chronik](/de_DE/core/4.1/history)

Diese Befehle können auch zum Auslösen verwendund werden [Szenarien](/de_DE/core/4.1/scenario) um Aktionen basierend auf den vEin Ihren Sensoren gemeldeten Informationen zu automatisieren. Ein Bewegungssensor erkennt beispielsweise eine Anwesenheit, die ein Szenario auslöst, das das Licht einschaltet.

- * Aktionsbefehle* :
Mit diesen Befehlen können Sie Ihre Aktuatoren steuern. Zum Beispiel Befehle **on** und **off** Mit einer kontrollierten Steckdose können Sie sie ein- und ausschalten.

Aktionsbefehle sind normalerweise mit Info-Befehlen verknüpft. Hier hat unsere Einstellung zwei Aktionen **on** und **off**, in der Regel im Zusammenhang mit Informationen **Etat**.

![Befehle](images/concept-commands.jpg)

Diese beiden Arten vEin Befehlen werden in Form vEin Geräten angehängt. Das Gerät verfügt daher über Info- und / oder Aktionsbefehle. Dieses Gerät verfügt über ein übergeordnetes Objekt, mit dem Sie es an der gewünschten Stelle anzeigen können.

### Équipement

- Physiquement: Ich habe eine Steckdose mit einem Ein / Aus-Knopf und einer Status-LED im Wohnzimmer.
- In Jeedom: Ich habe Geräte mit zwei Ein- und Ausschaltaktionen und einer StatusinformatiEin im Salonobjekt.

Diese Geräte werden vEin Plugins erstellt. Mit dem Z-Wave-Plugin können Sie beispielsweise Ihren Z-Waze-Plugin einbinden, wodurch ein Gerät mit seinen Steuerelementen erstellt wird, das Sie benennen und mit einem Objekt verknüpfen können..

In Bezug auf die Anzeige wird jede Bestellung mit einem Widgund angezeigt. Der Core bietund die wichtigsten Widgets sowie ein Tool zum Erstellen dieser Widgets (V4). : [Widgets](/de_DE/core/4.1/widgets).

Diese Befehle sind in einer Kachel zusammengefasst, die Ihrer Ausrüstung entspricht. Diese Kachel wird im Armaturenbrett des vEin Ihnen ausgewählten Objekts angezeigt.

![Befehle](images/concept-equipment.jpg)

## Conclusion

Unabhängig vEin Ihrem Gerät wird es in Form vEin Geräten erstellt, aus a [Plugin](/de_DE/core/4.1/plugin).

Dieses Gerät verfügt über eigene * info * - oder * Aktionsbefehle*. Diese Befehle werden als Widgets angezeigt, die die Gerätekachel in ihrem übergeordneten Objekt bilden.

Sie werden dann sehen, dass jedes Objekt, jede Ausrüstung, jede Bestellung viele Optionen in Bezug auf Funktionalität oder Anzeige hat. Aber alles zu seiner Zeit, jetzt sollten Sie die Grundkonzepte vEin Jeedom verstanden haben und somit in der Lage sein, Ihre HausautomatiEin zu organisieren und zu wissen, wo Sie suchen müssen..


