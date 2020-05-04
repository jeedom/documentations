# Concept

Hier sind die wichtigsten Grundkonzepte vEin Jeedom. Diese DokumentatiEin bleibt freiwillig einfach, damit Sie die Kontrolle über Ihre HausautomatiEin übernehmen können.

In der Tat sind die Möglichkeiten vEin Jeedom nahezu unbegrenzt, da Sie mit ein paar PHP-Skripten PythEin oder andere viele Dinge erstellen können, aber das ist hier nicht das Thema.

## Affichage

Jeedom ermöglicht es, eine sehr große Anzahl vEin Peripheriegeräten miteinander zu verbinden, unabhängig davon, ob diese auf den Protokollen Z-Wave, Enocena, Zigbee usw., APIs dank Plugins oder direkt in Form vEin Skripten basieren. Die Liste ist viel zu lang, das kann man sich ansehen [Markt](https://market.jeedom.com/) um einen Überblick über die unterstützten Geräte zu erhalten.

Sie können diese Geräte auf verschiedene Arten anzeigen :

- Auf dem [Armaturenbrett](/#LANG#/core/#VERSION#/dashboard)
- Auf dem [Synthese](/#LANG#/core/#VERSION#/overview) (v4.1)
- Auf einem [Ansicht](/#LANG#/core/#VERSION#/view)
- Auf einem [Design](/#LANG#/core/#VERSION#/design)
- Auf einem [3D Design](/#LANG#/core/#VERSION#/design3d)

Diese können in einem Browser auf einem Desktop-Computer oder auf einem Smartphone mit der WebApp oder einer mobilen Anwendung angezeigt werden : [Mobil VersiEin](/#LANG#/mobile/index")

## Objekte

Um Ihre Geräte zu organisieren, können Sie erstellen [Objekte](/#LANG#/core/#VERSION#/object).

Diese Objekte können Teile des Hauses darstellen (Wohnzimmer, Schlafzimmer, Werkstatt). Jedes Objekt kann ein übergeordnetes Objekt haben. Diese Hierarchie wird für die Anzeige im Armaturenbrett verwendet. Sie können beispielsweise ein Objekt haben **Maison**, dann Objekte **Salon** **Chambre** Objekt Kind **Maison**. Einmal im Dashboard, das Objekt **Maison** zeigt auch unten seine untergeordneten Objekte an.

> Tips
>
> IN **Einstellungen → Einstellungen** Sie können festlegen, für welches Objekt Sie im Armaturenbrett ankommen möchten. [Vorlieben](/#LANG#/core/#VERSION#/profils)

## Ausrüstung und ihre Kontrollen

Für die InteraktiEin mit unserer HausautomatiEin benötigen Sie Befehle ! Es gibt zwei Arten :

- * Info Befehle* :
Diese Befehle speichern Informationen vEin Sensoren. Zum Beispiel die Temperatur einer Sonde, eine Bewegung eines Anwesenheitssensors usw..
Diese Befehle können protokolliert werden, um diese Informationen über die Zeit in Form einer Kurve zu erhalten : [Chronik](Objekte](/#LANG#/core/#VERSION#/history)

Diese Befehle können auch zum Auslösen verwendund werden [Szenarien](Objekte](/#LANG#/core/#VERSION#/scenario) um Aktionen basierend auf den vEin Ihren Sensoren gemeldeten Informationen zu automatisieren. Ein Bewegungssensor erkennt beispielsweise eine Anwesenheit, die ein Szenario auslöst, das das Licht einschaltet.

- * Aktionsbefehle* :
Mit diesen Befehlen können Sie Ihre Aktuatoren steuern. Zum Beispiel Befehle **on** und **off** Mit einer kontrollierten Steckdose können Sie sie ein- und ausschalten.

Aktionsbefehle sind normalerweise mit Info-Befehlen verknüpft. Hier hat unsere Einstellung zwei Aktionen **on** und **off**, in der Regel im Zusammenhang mit Informationen **Etat**.


Diese beiden Arten vEin Befehlen werden in Form vEin Geräten angehängt. Das Gerät verfügt daher über Info- und / oder Aktionsbefehle. Dieses Gerät verfügt über ein übergeordnetes Objekt, mit dem Sie es an der gewünschten Stelle anzeigen können.

- Physiquement:
Ich habe eine Steckdose mit einem Ein / Aus-Knopf und einer Status-LED im Wohnzimmer.
- In Jeedom:
Ich habe Geräte mit zwei Ein- und Ausschaltaktionen und einer StatusinformatiEin im Salonobjekt.

Diese Geräte werden vEin Plugins erstellt. Mit dem Z-Wave-Plugin können Sie beispielsweise Ihren Z-Waze-Plugin einbinden, wodurch ein Gerät mit seinen Steuerelementen erstellt wird, das Sie benennen und mit einem Objekt verknüpfen können..


In Bezug auf die Anzeige wird jede Bestellung mit einem Widgund angezeigt. Der Core bietund die wichtigsten Widgets sowie ein Tool zum Erstellen dieser Widgets (V4). : [Widgets](/#LANG#/core/#VERSION#/widgets).
Diese Befehle sind in einer Kachel zusammengefasst, die Ihrer Ausrüstung entspricht. Diese Kachel wird im Armaturenbrett des vEin Ihnen ausgewählten Objekts angezeigt.

