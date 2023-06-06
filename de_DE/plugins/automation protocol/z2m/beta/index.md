# Jeezigbee-Plugin

>**WICHTIG**
>
>Die Dokumentation ist in Arbeit. Zögern Sie nicht, von Zeit zu Zeit vorbeizuschauen, um mehr über dieses Plugin zu erfahren


**Das Jeezigbee-Plugin für Jeedom** basiert auf der hervorragenden Arbeit, die rundherum geleistet wurde **die Open-Source-Bibliothek zigbee2mqtt** ein anbieten **allgemeine Kompatibilität mit unterschiedlicher Zigbee-Hardware**. Es ermöglicht die Kommunikation mit den folgenden Zigbee-Controllern :

-	**deCONZ (Conbee-Taste/Conbee 2/Raspbee/Raspbee 2)** : Getestet und validiert vom Jeedom-Team. *(Eine Installation der deCONZ-App ist nicht erforderlich)*
-	**EZSP (Silicon Labs)** : Getestet, validiert
-	**XBee** : Nicht vom Jeedom-Team getestet.
-	**Zigate** : Nicht vom Team getestet.
-	**ZNP (Texas Instruments)** : Getestet, validiert

>**WICHTIG**
>
> Zunächst müssen Sie die Firmware Ihres Schlüssels aktualisieren (insbesondere für EZSP, insbesondere für Popp-Schlüssel). Andernfalls kann der Dämon nicht funktionieren. Sie müssen die Dokumentation des Herstellers konsultieren.

Darüber hinaus ist das Plugin mit vielen Tools ausgestattet, die es ermöglichen :

- Dort **Mods-Update** im OTA,
- Visualisierung von Knoten und **Netzwerkdiagramm**,
- die Geschäftsführung von **Gruppen**,
- die Unterstützung von **Bindung**,
- die Pflege von **Berühren Sie den Link**

>**SEHR WICHTIG**
>
> Aufgrund des Firmware-/Hardware-Walzes auf Herstellerseite und möglicher Fehler in der Firmware (ohne unbedingt die Möglichkeit zu haben, sie von Jeedom aus zu aktualisieren, da die meisten Hersteller diese nicht kommunizieren) ist es möglich, dass ein als kompatibel gekennzeichnetes Modul nur teilweise (a Taste, die nicht funktioniert, oder kein Unterschied zwischen der Auf- und Ab-Taste, kein CO2-Anstieg oder ein Modulsensor...). Leider können wir Sie in der Liste nicht vorab warnen, da : 
>- Wir haben nicht unbedingt das betreffende Modul, viele Module werden durch Benutzerfeedback hinzugefügt
>- Von einer Woche auf die andere kann sich das Modul geändert haben (neue Hardware, neue Firmware oder sogar ein neues Modul, dessen Name sich nicht geändert hat))
>Unter keinen Umständen kann Jeedom für das Fehlen einer Funktion (oder sogar für ein nicht funktionierendes Modul) haftbar gemacht werden, wenn es als kompatibel angegeben wird. Wir unterliegen wie Sie den vom Hersteller auferlegten Änderungen

# Configuration

## Plugin-Setup

**Jeezigbee-Plugin** nutzt Abhängigkeiten, die zuerst installiert werden müssen (je nach System kann dies mehrere Stunden dauern)). 

Das Plugin verwendet das MQTT-Protokoll, um mit Jeedom zu chatten; Daher ist es erforderlich, dass das MQTT-Manager-Plugin installiert und korrekt konfiguriert ist (in der Praxis sollte Jeedom alles selbst erledigen, wenn dies nicht der Fall ist)).

Sobald die Abhängigkeiten installiert sind, können Sie durch Eingabe einen Zigbee-Controller konfigurieren **Controller-Typ, Controller-Port**, Starten Sie dann den Daemon (neu).    

>**WICHTIG**
>
> Es gibt 2 Modi für das Plugin : lokal, alles ist auf Ihrem Jeedom, dies ist der empfohlene Modus. Für fortgeschrittene Benutzer ist es möglich, den Remote-Modus zu verwenden; In diesem Fall verwaltet Jeedom Zigbee2mqtt nicht, es muss von Ihnen installiert werden (normalerweise auf einem Docker auf Jeedom oder auf einer anderen Maschine)). Achtung im Remote-Modus ist es notwendig, dass Mqtt Manager und Zigbee2mqtt mit demselben Brocker MQTT (Mosquitto) verbunden sind)


Um vom JEEZIGBEE-Plugin zu Zigbee2MQTT zu gelangen (z. B. um das Löschen eines Moduls zu erzwingen), müssen Sie zur Konfiguration des Jeezgibee-Plugins gehen und dann im Konfigurationsteil auf Schnittstelle z2m klicken. „Hier“ öffnet sich die Seite von Zigbee2MQTT, sobald Sie im Modul sind, werden Sie nach der Kennung gefragt, die sich auf der Konfigurationsseite von Jeezigbee befindet.

Achtung, dies ist nur möglich, wenn Sie sich in der lokalen Installation von zigbee2mqtt befinden.

## Compatibilité

Sie können finden [Hier](https://www.zigbee2mqtt.io/supported-devices/) die Liste der mit dem Plugin kompatiblen Module

>**WICHTIG**
>
>Für den Moment, in dem das Plugin eine Autokonfiguration durchführt, das heißt, dass es keine spezifische Konfiguration für ein bestimmtes Modul enthält, ruft es die Informationen von zigbee2mqtt ab, um die Befehle automatisch zu generieren. Dies bedeutet, dass jedes mit zigbee2mqtt kompatible Modul sofort mit dem Plugin funktionieren sollte. Andererseits hat dies zur Folge, dass viele Befehle generiert werden, die nicht immer alle nützlich sind. Wir sind dabei, für bestimmte Module ein spezifisches Konfigurationssystem hinzuzufügen und so deren Befehle und Darstellung zu verbessern

## Gerätekonfiguration

### Fügen Sie ein Zigbee-Modul hinzu

Inklusion ist der komplexeste Teil von Zigbee. Obwohl der Vorgang einfach ist, muss er oft mehrmals wiederholt werden, um ihn zu erreichen. Auf der Jeedom-Plugin-Seite ist es ganz einfach, klicken Sie einfach auf die Schaltfläche **Include-Modus** Danach haben Sie 3 Minuten Zeit, um die Ausrüstung einzubinden.

Das Aufnahmeverfahren ist für jedes Modul spezifisch. Um dies zu erreichen, lesen Sie bitte die Dokumentation des Herstellers.

>**TRICK**
>
>Vergessen Sie nicht, das Gerät zurückzusetzen *(reset)* des Moduls vor der Aufnahme. Es ist auch notwendig, zum Zeitpunkt der Einbindung daran zu denken, das Modul wach zu halten (achten Sie darauf, es nicht zu lange wach zu halten und einen Reset zu starten, ohne dies absichtlich zu tun))

Wie gewohnt können Sie Ihrer Ausrüstung einen Namen geben, ihr eine Kategorie oder ein übergeordnetes Objekt zuweisen und sie aktivieren oder sichtbar machen.

Auf andere, spezifischere Parameter kann ebenfalls zugegriffen werden :

- **Identifikation** : eindeutige Gerätekennung. Auch bei einer Wiedereinbindung oder wenn Sie den Typ des Zigbee-Controllers wechseln.
- **Z2m-Controller** : ermöglicht Ihnen die Auswahl des Zigbee-Controllers für die Kommunikation mit dem Gerät (im Moment unterstützt das Plugin nicht mehrere Controller))

Das Teil **Information** ermöglicht es, das Modell der Ausrüstung zu sehen. Außerdem gibt es eine visuelle Darstellung der Ausrüstung und Zugriff auf die Konfiguration des Moduls

In der Registerkarte **Aufträge**, Wir finden, wie üblich, die Befehle, die die Interaktion mit dem Modul ermöglichen.

### Modulkonfiguration

Dies ist ein wichtiges Fenster, das Sie hier finden : 

- Information : enthält alle nützlichen Informationen zu Ihrem Modul (Modell, Hersteller, Status, Stromversorgung, OTA, Beschreibung, Endpunkte)....)
- Aufbau : enthält die Konfigurationsparameter Ihres Moduls, falls vorhanden (häufig sind keine vorhanden, daher ist es leer))
- Bindung : Hier finden Sie die bestehende Anbindung (Link) (im Allgemeinen haben Sie immer eine Zeile, um Ihr Modul mit Ihrem Koordinator zu verknüpfen)). Sie können auch eine Bindung (Link) zwischen zwei Modulen hinzufügen. Achten Sie darauf, die Module beim Bingen im Akkubetrieb aufzuwecken. Wichtig: die Bindung hängt von den Herstellern ab (und nicht vom Plugin), einige Hersteller unterstützen keine direkte Bindung und es ist unbedingt erforderlich, eine Gruppe zu haben, es gibt auch Inkompatibilitäten zwischen Herstellern (wir können diese leider nicht auflisten))
- Berichterstattung : Wenn das Modul dies unterstützt, können Sie hier die Häufigkeit konfigurieren, mit der Informationen vom Modul an den Koordinator (Jeedom) gesendet werden)
- Rohinformationen : dient nur der Unterstützung, Sie werden gefragt, ob Sie ein Problem mit einem Modul haben

### Modul nicht erkannt

Wenn das Modul vom Plugin nicht erkannt wird (kein Befehl), müssen Sie nachsehen [Hier](https://www.zigbee2mqtt.io/supported-devices/), Wenn es unterstützt wird, müssen Sie sich an den Jeedom-Support wenden (oder in der Community schreiben), um herauszufinden, warum. Wenn Ihr Modul nicht in der Liste der von zigbee2mqtt unterstützten Module enthalten ist, müssen Sie warten, bis es hinzugefügt wird.

>**INFORMATION**
>
>Das Jeedom-Team behält sich das Recht vor, Integrationsanfragen abzulehnen. Es ist immer besser, sich für Geräte zu entscheiden, deren Kompatibilität bereits bestätigt ist.

## OTA-Mods-Update

OTA-Updates *(Over-The-Air)* sind die Firmware-Updates der Module. Der Vorgang kann einige Zeit dauern (je nach Anzahl der Module mehrere Stunden), ermöglicht aber insgesamt eine höhere Zuverlässigkeit des Zigbee-Netzwerks. Um ein Modul aktualisieren zu können, muss der Hersteller seine Firmware mitteilen :

- Betreff **Ikea** Und **Ledavance**, Die Firmwares werden direkt online zur Verfügung gestellt und vom Plugin abgerufen.
- Für andere (siehe [Hier](https://github.com/Koenkk/zigbee-OTA/tree/master/images)), Teilweise stellt der Hersteller inoffiziell ein Update bereit.
- Für alle anderen ist es nicht möglich, das Modul über das Plugin zu aktualisieren.

Sie können in der Modulkonfiguration eine Firmware-Verifizierung anfordern und das OTA-Update starten.

# Greenpower

Die Greenpower-Technologie wird normalerweise vom Plugin unterstützt; Es wird von Jeedom SAS qualifiziert

# Zigbee-Netzwerke

Der Aufbau eines qualitativ hochwertigen Zigbee-Netzwerks wird durch die im Plugin bereitgestellten Tools erheblich unterstützt. Gehen Sie zur allgemeinen Seite des Plugins, auf der alle Geräte aufgeführt sind, und klicken Sie auf die Schaltfläche **Zigbee-Netzwerke** um auf verschiedene Informationen und Aktionen rund um das Zigbee-Netzwerk sowie dessen repräsentative Grafik zuzugreifen.

## Configuration

Hier finden Sie alle erweiterten Konfigurationen von Zigbee2mqtt. Achten Sie darauf, dass es sich um eine von Zigbee2mqtt generierte Liste handelt (daher ist alles auf Englisch))

## Netzwerkdiagramm

Das Netzwerkdiagramm bietet einen Überblick über das Zigbee-Netzwerk und die Qualität der Kommunikation mit den verschiedenen Modulen. Denken Sie daran, von Zeit zu Zeit ein Update zu starten (dies dauert etwa zehn Minuten und kann Ihr ZigBee-Netzwerk verlangsamen). Sobald das Update abgeschlossen ist, müssen Sie das Fenster schließen **Zigbee-Netzwerke** und öffnen Sie es erneut.

>**WICHTIG**
>
>Das Netzwerkdiagramm dient nur als Referenz und ist möglicherweise nicht genau (insbesondere bei Batteriemodulen, die ihr Routing nicht oft oder manchmal überhaupt nicht zurückgeben))

## Optimieren Sie das Netzwerk

Um die Zuverlässigkeit Ihres Zigbee-Netzwerks zu optimieren, **Es wird mehr als empfohlen, mindestens 3 Router-Module dauerhaft mit Strom zu versorgen und deren Trennung zu vermeiden**. Tatsächlich haben wir bei unseren Tests eine deutliche Verbesserung der Zuverlässigkeit und Belastbarkeit des Zigbee-Netzwerks durch das Hinzufügen von Router-Modulen festgestellt. Es ist auch ratsam, diese zuerst einzubinden, da Sie sonst 24 bis 48 Stunden auf das „Endgerät“ warten müssen" *(Nicht-Router-Module)* entdecke sie.

Ein weiterer wichtiger Punkt ist, dass beim Entfernen eines Router-Moduls ein Teil des „Endgeräts“ beschädigt werden kann" *(Nicht-Router-Module)* geht für mehr oder weniger lange Zeit verloren *(in zehn Stunden oder mehr)* oder sogar dauerhaft und Sie müssen sie erneut einbeziehen.
Leider liegt dies an der Art und Weise, wie der Hersteller die Integration seiner Geräte in ein Zigbee-Netzwerk geplant hat, und kann daher nicht durch das Plugin korrigiert werden, das den Routing-Teil nicht verwaltet.

Abschließend möchten wir Sie daran erinnern, dass Zigbee-Gateways in WLAN oder Remote per Definition weniger zuverlässig sind als USB-Gateways, auch wenn es für manche offensichtlich erscheinen mag. Das Jeedom-Team rät daher zum Einsatz eines Zigbee-Gateways in USB.  

# FAQ

>**Ich habe unten rechts viele Informationsmeldungen (blau) und verstehe nichts**
>
>Wir sortieren derzeit die nützlichen oder nicht nützlichen Nachrichten aus, die Zigbee2mqtt zurückgibt. aber standardmäßig bevorzugen wir die Anzeige aller.

>**Ich habe seltsame Fehler bei Modulen an Batterien oder Probleme mit der Einbindung**
>
>Wir haben festgestellt, dass ein großer Teil der Probleme mit den Modulen im Batteriebetrieb auf die Batterien oder möglicherweise auf Probleme beim Zurücksetzen der Module vor dem Einschalten zurückzuführen ist. Auch wenn diese neu erscheinen, empfiehlt es sich, sie mit neuen Batterien zu testen, um diese Hypothese auszuschließen.

>**Mein Modul entlädt seine Batterien sehr schnell**
>
>Überprüfen Sie, ob die Firmware Ihres Zigbee-Schlüssels auf dem neuesten Stand ist. In 90 % der Fälle ist ein übermäßiger Batterieverbrauch auf die fehlerhafte Firmware zurückzuführen.

>**Ich kann keine neuen Module hinzufügen**
>
>Mehrere Möglichkeiten hierfür :
>- Sie haben bereits viele Module und haben die maximale Anzahl an Live-Modulen (im Allgemeinen 31) überschritten). Sie müssen es versuchen, indem Sie Router-Knoten hinzufügen (achten Sie darauf, dass es keinen klaren Standard für Router-Knoten gibt, sodass es zu Inkompatibilitäten zwischen den Herstellern kommt)...)
>- Du bist auf Conbee : Ziehen Sie den Schlüssel zwei Minuten lang ab, stecken Sie ihn wieder ein und starten Sie den Daemon neu. Es handelt sich um eine Krankheit, die den Conbee-Tasten bekannt ist (sogar unter Deconz). Es ist ein Kaltstart erforderlich, damit die Einbindung wieder funktioniert
>- Sie haben eine SSD an USB3 angeschlossen. Versuchen Sie, sie an einen USB2-Anschluss anzuschließen

>**Ich habe nicht so viele Befehle wie Tasten auf meiner Fernbedienung**
>
>Auf meiner Fernbedienung habe ich zum Beispiel 2 Tasten, aber in der Liste der Jeedom-Befehle habe ich nur einen Befehl !!! Es ist normal; Der Befehl in Jeedom nimmt je nach gedrückter physischer Taste einen anderen Wert an. Der einfachste Weg, dies anzuzeigen, besteht darin, zu „Erweiterte Konfiguration“ (oben rechts) und dann zu „Protokolle“ (ebenfalls oben rechts) zu gehen und die Tasten auf der Fernbedienung zu drücken, um die verschiedenen Werte der Befehle anzuzeigen.

>**Ich habe kein Bild meines Moduls**
>
>Nichts Ernstes, das bedeutet nicht, dass es nicht verwendbar oder nicht erkennbar ist, das Bild dient nur zur Veranschaulichung. Wenn Sie es wirklich möchten, müssen Sie sich an den Support wenden, um herauszufinden, warum Sie es nicht haben (normalerweise liegt es an einem nicht standardmäßigen Zeichen im Modulmodellnamen))
