# ZigBee Plugin

**Das ZigBee-Plugin für Jeedom** baut auf der hervorragenden Arbeit auf **die Open-Source-Zigpy-Bibliothek** ein anbieten **Allgemeine Kompatibilität mit verschiedenen ZigBee-Hardware**. Es ermöglicht die Kommunikation mit den folgenden ZigBee-Controllern :

-	**deCONZ (Conbee-Schlüssel/Conbee 2/Raspbee/Raspbee 2)** : Vom Jeedom-Team getestet und validiert. *(Es ist nicht erforderlich, die deCONZ-Anwendung zu installieren)*
-	**EZSP (Silicon Labs)** : Getestet, validiert und empfohlen vom Jeedom-Team (achten Sie auf den Sonoff-Schlüssel, der nicht sehr gut zu funktionieren scheint).
-	**XBee** : Nicht vom Jeedom-Team getestet.
-	**Zigate** : Nicht vom Team getestet.
-	**ZNP (Texas Instruments))** : Nicht vom Team getestet.

>**Wichtig**
>
> Zuerst müssen Sie die Firmware Ihres Schlüssels aktualisieren (insbesondere für EZSP, insbesondere Popp-Schlüssel), sonst kann der Daemon nicht funktionieren. Für den Popp-Schlüssel wird das Update direkt aus dem Plugin verwaltet, für den anderen Schlüsseltyp ist es notwendig, die Herstellerdokumentation zu konsultieren.

Darüber hinaus ist das Plugin mit vielen Tools ausgestattet, die es ermöglichen :

- die Verantwortung übernehmen **mehrere Controller gleichzeitig**,
- das **sichern und Wiederherstellen** eine Steuerung,
- das **Firmware Update** eine Steuerung,
- das **Aktualisierung der Module** in OTA,
- Visualisierung von Knoten und **Netzwerkgraph**,
- Management von **Gruppen**,
- die Geschäftsführung von **Bindung**,
- die Verantwortung übernehmen **Touchlink**,
- oder sogar um seine eigenen Konfigurationen für die erfahrensten zu integrieren...

>**SEHR WICHTIG**
>
> Aufgrund des Walzers der Firmware-/Hardwareherstellerseite und möglicher Fehler in deren Firmware (ohne unbedingt die Möglichkeit zu haben, diese von Jeedom zu aktualisieren, da die meisten Hersteller diese nicht kommunizieren) ist es möglich, dass ein als kompatibel gekennzeichnetes Modul auch nicht nur teilweise funktioniert (eine nicht funktionierende Taste oder kein Unterschied zwischen der Aufwärtstaste und nicht, kein CO2-Anstieg oder ein Sensor des Moduls...). Leider können wir Sie in der Liste nicht vorab warnen, weil : 
>- wir haben nicht unbedingt das fragliche Modul, viele Module werden durch Benutzer-Feedback hinzugefügt
>- von einer Woche zur anderen kann sich das Modul geändert haben (neue Hardware, neue Firmware oder sogar neues Modul, das seinen Namen nicht geändert hat))
>Jeedom kann unter keinen Umständen für eine fehlende Funktion (oder sogar ein nicht funktionierendes Modul) verantwortlich gemacht werden, wenn diese als kompatibel angegeben ist, wie Sie es tun, wir unterliegen den Änderungen des Herstellers

# Configuration

## Plugin Konfiguration

**Das ZigBee-Plugin** verwendet Abhängigkeiten, die zuerst installiert werden müssen. Sobald die Abhängigkeiten installiert sind, können Sie einen oder mehrere ZigBee-Controller durch Eingabe konfigurieren **den Typ des Controllers, den Controller-Port und den zu verwendenden Kanal**, Starten Sie dann den Daemon (neu).     

![Aufbau contrôleur Zigbee](../images/zigbee_controllerConfig.png)

>**Wichtig**
>
>Jeder Kanalwechsel erfordert einen Neustart des Dämons. Ein Kanalwechsel kann auch die Wiedereingliederung bestimmter Module erfordern.

## Compatibilité

Sie finden [Hier](https://compatibility.jeedom.com/index.php?v=d&p=home&plugin=zigbee) die Liste der Module, die mit dem Plugin kompatibel sind

### Erweiterte Zigpy-Konfiguration

>**Für Experten reserviert !**

Es ist möglich, bestimmte Parameter für das ZigBee-Subsystem einzurichten *(Zigpy)*. Dieser Teil ist ausschließlich Experten vorbehalten, weshalb das Jeedom-Team keine Liste möglicher Parameter bereitstellt *(Je nach Controller-Typ gibt es Hunderte davon)*.

Das Eingabefeld akzeptiert Code im json-Format dieses Typs :

````````
{
    "ezsp": {
        "CONFIG_ADDRESS_TABLE_SIZE": "16"
    }
}
````````

>**Wichtig**
>
>Jede Supportanfrage wird automatisch abgelehnt, wenn dieses Feld ausgefüllt wird.

## Gerätekonfiguration

### Aufnahme eines ZigBee-Moduls

Inklusion ist der komplexeste Teil von Zigbee. Obwohl einfach, wird der Vorgang oft mehrmals wiederholt, um dies zu erreichen. Jeedom Plugin Seite ist es einfach, klicken Sie einfach auf die Schaltfläche **Einschlussmodus** Danach haben Sie 3 Minuten Zeit, um die Ausrüstung einzuschließen.

Das Einschlussverfahren ist für jedes Modul spezifisch. Bitte beachten Sie die Dokumentation des Herstellers, um dies zu erreichen.

>**TRICK**
>
>Vergessen Sie nicht, einen Reset durchzuführen *(reset)* des Moduls vor jeder Aufnahme.

### Einrichten eines ZigBee-Moduls

Nach der Aufnahme soll Jeedom das Modul automatisch erkennen und die entsprechenden Befehle erstellen. Ist dies nicht der Fall, lesen Sie den folgenden Absatz : **Modul nicht erkannt**.

>**Wichtig**
>
>Aufgrund eines Fehlers in einer Firmware *(Ikea, Sonoff, etc)*, Manchmal muss der Modultyp direkt aus der Liste ausgewählt werden **Gerät** Speichern Sie dann, damit die Bestellungen korrekt erstellt werden.

Auf den Aktionen (oben rechts) können Sie aktivieren **Automatische Erkennung von Informationsbefehlen**, Nach der Aktivierung erstellt Jeedom automatisch eine Bestellung für alle Informationen, die vom Modul für 3 Minuten gemeldet werden. Es ermöglicht zum Beispiel auf einer Fernbedienung, die noch nicht von Jeedom erkannt wird, automatisch die Informationsbefehle zu erstellen, die dem Drücken der Tasten entsprechen (muss also während der 3 Minuten ausgeführt werden)

Wie gewohnt können Sie Ihrem Gerät einen Namen geben, eine Kategorie oder ein übergeordnetes Objekt eingeben und es aktivieren oder sichtbar machen.

Andere spezifischere Parameter sind ebenfalls verfügbar :

- **Identifizierung** : eindeutige Kennung des Geräts. Auch während einer Wiedereingliederung oder wenn Sie den Typ des ZigBee-Controllers ändern.
- **ZigBee-Controller** : wird verwendet, um den ZigBee-Controller in Kommunikation mit dem Gerät auszuwählen.
- **Kommunikationssteuerung** : Mit dieser Option können Sie den Modus zur Überprüfung der guten Kommunikation zwischen der Steuerung und dem Modul auswählen.
- **Ausführungsbestätigung ignorieren** : Aktivieren Sie das Kontrollkästchen, um die korrekte Ausführung des Befehls zu ignorieren. Dies ermöglicht es Ihnen, die Kontrolle schneller wiederzugewinnen, garantiert jedoch nicht, dass die Bestellung gut aufgegeben wurde.
- **Warteschlangen zulassen** : Aktivieren Sie das Kontrollkästchen, um das Einreihen von Bestellungen zu ermöglichen. Dadurch kann der Befehl erneut ausgeführt werden, falls die Reihenfolge vom Modul nicht berücksichtigt wurde.
- **Automatische Aktualisierung (cron)** : erlaubt die Aktualisierung von Attributen zu erzwingen, es wird nicht empfohlen, hier etwas einzugeben, ein schlechter Wert und Sie sättigen alle Ihre Zigbee-Netzwerke...

Das Teil **Information** ermöglicht die manuelle Auswahl von Hersteller und Ausrüstung. Es gibt auch die visuelle Darstellung der Ausrüstung sowie zwei Tasten, mit denen die **Regeneration von Aufträgen** oder Zugriff auf Optionen **Modulkonfiguration**.

In der Registerkarte **Aufträge**, Wir finden wie üblich die Befehle, die die Interaktion mit dem Modul ermöglichen.

### Modul nicht erkannt

Wenn Ihr Modul enthalten ist, aber von Jeedom nicht automatisch erkannt wird *(Es wurden keine Bestellungen erstellt)*, Sie müssen also darum bitten, dass es dem Jeedom-Team hinzugefügt wird.

>**INFORMATION**
>
>Das Jeedom-Team behält sich das Recht vor, Integrationsanfragen abzulehnen. Es ist immer vorzuziehen, sich für Geräte zu entscheiden, deren Kompatibilität bereits bestätigt ist.

Um die Hinzufügung neuer Geräte anzufordern, müssen die folgenden Elemente angegeben werden :

- **das genaue Modell** des Moduls mit einem Link zur Kaufseite und einem repräsentativen Bild auf transparentem Hintergrund (`png`)),
- Klicken Sie auf der Ausrüstungsseite auf die blaue Schaltfläche **Modulkonfiguration** dann tab **Rohdaten**. Kopieren Sie den Inhalt, um ihn an das Jeedom-Team zu übertragen,
- Setzen Sie den Daemon auf der Plugin-Konfigurationsseite in "Debug" und starten Sie ihn neu. Führen Sie Aktionen am Gerät aus *(Wenn es sich um einen Temperatursensor handelt, ändern Sie die Temperatur, wenn es sich um ein Ventil handelt, ändern Sie den Sollwert usw...)* und senden Sie das ZigBee-Protokoll *(nicht "Zigbeed")*.

>**Wichtig**
>
>Überprüfen Sie vor jeder Anforderung zum Hinzufügen eines Moduls, ob Ihr Plugin auf dem neuesten Stand ist und ob das Modul noch nicht in der Liste enthalten ist. Es kommt manchmal vor, dass die automatische Erkennung nicht funktioniert (weil das Modul seine Identifizierung nicht rechtzeitig gibt) und dass es notwendig ist, Jeedom den Modultyp manuell anzuzeigen

>**INFORMATION**
>
>Jede unvollständige Anfrage wird ohne Antwort des Jeedom-Teams abgelehnt.

### Bedienung der Bedienelemente
>**Für Experten reserviert !**

Im Folgenden wird erläutert, wie die Befehle im Plugin für die fortgeschrittensten Benutzer funktionieren :

- ````attributes::ENDPOINT::CLUSTER_TYPE::CLUSTER::ATTRIBUT::VALUE```` Mit dieser Option können Sie den Wert eines Attributs schreiben *(Achten Sie darauf, dass nicht alle Attribute geändert werden können)* mit :
  - ````ENDPOINT```` : Endpunktnummer,
  - ````CLUSTER_TYPE```` : Clustertyp *(IM \| OUT)*,
  - ````CLUSTER```` : Clusternummer,
  - ````ATTRIBUT```` : Attributnummer,
  - ````VALUE```` : Wert zu schreiben.

**Beispiel** : ````attributes::1::in::513::18::#slider#*100```` schreibt ein Attribut an den Endpunkt "1" des eingehenden Clusters (````in````) `513`, Attribut` 18` mit dem Wert von ````slider*100````.

- ````ENDPOINT::CLUSTER:COMMAND::PARAMS```` ermöglicht es Ihnen, einen Serverbefehl mit auszuführen :
  - ````ENDPOINT```` : Endpunktnummer,
  - ````CLUSTER```` : Clustername,
  - ````COMMAND```` : Name der Bestellung,
  - ````PARAMS```` Parameter in der richtigen Reihenfolge durch `getrennt::``.

**Beispiel** : ````1::on_off::on````, Führen Sie den Befehl aus ````on```` auf dem Endpunkt "1" des Clusters ````on_off```` ohne Parameter.        
**Beispiel** : ````1::level::move_to_level::#slider#::0````, Führen Sie den Befehl aus ````move_to_level```` auf dem Endpunkt "1" des Clusters ````level```` Mit Parametern ````#slider#```` und ````0````.

# Outils

Auf verschiedene Tools, die eine bessere Interaktivität mit dem ZigBee-Netzwerk bieten, kann über die Plugin-Konfigurationsseite zugegriffen werden :

![Werkzeuge contrôleur Zigbee](../images/zigbee_controllerTools.png)

>**Wichtig**
>
> Auf EZSP-Schlüsseln *(Elelabs)*, Es ist nur möglich, während der gesamten Lebensdauer des Schlüssels eine einzige Sicherungswiederherstellung für alle und für alle durchzuführen.

Das Backup enthält nicht die Liste der Module, sondern nur die Basisinformationen des ZigBee-Netzwerks. Es ist daher nicht erforderlich, es regelmäßig durchzuführen. Eine einzelne Sicherung ist häufig ausreichend, da sich diese Informationen während der Lebensdauer des Controllers nicht ändern.

>**INFORMATION**
>
>ZigBee-Dämonen werden während des Sicherungs- oder Wiederherstellungsprozesses gestoppt.

## Aktualisieren der Controller-Firmware

Es ist möglich, die Firmware des ZigBee-Controllers von Jeedom aus zu aktualisieren *(gilt derzeit nur für Elelabs-Controller)*. Da die Firmware in Zigbee unverzichtbar ist, weil sie unter anderem das Routing verwaltet, ist es wichtig, sie zu aktualisieren.

>**INFORMATION**
>
>ZigBee-Daemons werden während eines Firmware-Updates gestoppt.

## Aktualisieren von OTA-Modulen

OTA-Updates *(Over-The-Air)* sind die Firmware-Updates der Module. Der Vorgang kann eine bestimmte Zeit dauern (mehrere Stunden, abhängig von der Anzahl der Module), ermöglicht jedoch im Allgemeinen eine bessere Zuverlässigkeit des ZigBee-Netzwerks. Um ein Modul aktualisieren zu können, muss der Hersteller seine Firmware mitteilen :

- Hinsichtlich **Ikea** und **Der Fortschritt**, Die Firmwares werden direkt online zur Verfügung gestellt, wo das Plugin sie abruft.
- Für andere (siehe [Hier](https://github.com/Koenkk/zigbee-OTA/tree/master/images)), In einigen Fällen stellt der Hersteller informell ein Update zur Verfügung.
- Für alle anderen ist es nicht möglich, das Modul über das Plugin zu aktualisieren.

Um von OTA-Updates zu profitieren, müssen Sie das entsprechende Kontrollkästchen auf der Plugin-Konfigurationsseite aktivieren und dann speichern. Sie müssen dann auf die Schaltfläche klicken **Aktualisieren Sie die Moduldateien** um die neuesten aktualisierten Dateien abzurufen und den ZigBee-Daemon neu zu starten.

Aktualisierungen werden bei Verfügbarkeit oder auf Anforderung des Moduls automatisch durchgeführt. Es ist möglich, die Aktualisierung eines Moduls über die Registerkarte zu erzwingen **Aktionen** aus dem Modulkonfigurationsfenster auf der Geräteseite.

Leider gibt es keinen einfachen Indikator, um den Fortschritt des Updates zu verfolgen. Die einzige Lösung besteht darin, beim Debuggen auf die "zigbeed_X" -Protokolle zu verweisen und nach dem Begriff "OTA" zu suchen. Sie können diesen Protokolltyp sehen, wenn ein Modul aktualisiert wird :

````````
2020-02-27 15:51:10 [DEBUG][0x7813:1:0x0019] OTA query_next_image handler for 'IKEA of Sweden TRADFRI control outlet': field_control=1, manufacture_id=4476, image_type=4353, current_file_version=536974883, hardware_version=60
2020-02-27 15:51:10 [DEBUG][0x7813:1:0x0019] OTA image version: 537011747, size: 204222. Update needed: True
2020-02-27 15:51:18 [DEBUG][0x7813:1:0x0019] OTA image_block handler for 'IKEA of Sweden TRADFRI control outlet': field_control=0, manufacturer_id=4476, image_type=4353, file_version=537011747, file_offset=0, max_data_size=63, request_node_addr=Noneblock_request_delay=None
2020-02-27 15:51:18 [DEBUG][0x7813:1:0x0019] OTA upgrade progress: 0.0
````````

# Touchlink / Lightlink

**Touchlink** *(oder Lightlink)* ist eine spezielle Funktion von Zigbee, die es dem Controller ermöglicht, Verwaltungsaufträge an ein Modul zu senden, sofern es sich sehr nahe daran befindet *(weniger als 50 Zentimeter)*. Dies ist beispielsweise nützlich, um Lampen zurückzusetzen, die keine physische Taste haben.

Diese Funktion ist bei ZigBee-Lampen verfügbar **Philips Hue, Ikea, Osram, Icasa und viele mehr...** Das Prinzip ist sehr einfach. Um diesen Modultyp einem ZigBee-Netzwerk zuordnen zu können, müssen Sie zuerst einen Reset durchführen. Beim Neustart versucht das Modul automatisch, eine Verbindung mit dem ersten verfügbaren ZigBee-Netzwerk herzustellen.

## In Touchlink zurücksetzen

Wie so oft in Zigbee können während des Zurücksetzens oder des Zuordnungsprozesses Schwierigkeiten auftreten. Um dies zu erreichen, stehen Ihnen verschiedene Methoden zur Verfügung :

- **Führen Sie schnell 5 oder 6 Ein / Aus-Zyklen durch** *(an aus)*. Die Lampe sollte am Ende des Vorgangs blinken, um die korrekte Erkennung anzuzeigen.
- **Verwenden Sie eine ZigBee-Fernbedienung**, und :
  - **für Philips Hue Fernbedienungen**, Drücken Sie gleichzeitig die EIN- und AUS-Tasten 5 bis 10 Sekunden lang in der Nähe der Glühbirne *(Manchmal muss bei einigen Modellen die Glühbirne kurz zuvor ein- und ausgeschaltet werden)*,
  - **für Ikea-Fernbedienungen**, Drücken Sie die Reset-Taste" *(neben der Batterie)* für 5 bis 10 Sekunden in der Nähe der Glühbirne *(Manchmal muss bei einigen Modellen die Glühbirne kurz zuvor ein- und ausgeschaltet werden)*.
- Über die **Philips Hue Glühbirnen**, Sie können sie auch in die Hue Bridge aufnehmen und dann daraus entfernen.

# Greenpower

Die Greenpower-Technologie wird vom Plugin unterstützt (Zigpy-Patch, der sie noch nicht nativ unterstützt...).

>**Wichtig**
>
>Im Moment funktioniert Greenpower nur mit EZSP-Schlüsseln (Elelabs, popp...). Deconz-Unterstützung wird später kommen

Hinzufügen eines Greenpower-Moduls 2 Möglichkeiten :

- Wechseln Sie in den Einschlussmodus und drücken Sie eine Taste am Modul. Bitte beachten Sie, dass dies einem ungesicherten Zusatz entspricht (jeder, der den Rahmen des Moduls abfängt, kann ihn an Ihr Jeedom zurücksenden)
- Lesen Sie den QR-Code des Moduls und kopieren Sie die Zeichenfolge im Teil "Inbetriebnahme" von Jeedom. Dies entspricht einer sicheren Hinzufügung (dem Verschlüsselungsschlüssel und im QRcode))


>**Wichtig**
>
>Standardmäßig befinden sich die Schalter auf Kanal 11. Es ist unbedingt erforderlich, dass sich der Schlüssel und der Schalter auf demselben Kanal befinden. Ich lasse Sie die Dokumentation konsultieren, um den Kanal der Schalter zu ändern (ich persönlich finde die Manipulation nicht einfach, der kleinste Fehler zwingt Sie, von vorne zu beginnen, im Allgemeinen dauert es eine gute Stunde)

# Gruppenmanagement

Eine Gruppe kann einer Art virtueller Fernbedienung zugeordnet werden, die es der Steuerung ermöglicht, auf mehrere Module zu reagieren, damit diese dieselben Aktionen gleichzeitig ausführen.

Das Verfahren ist einfach : Erstellen Sie eine neue Gruppe und fügen Sie darin Mitgliedergeräte hinzu oder löschen Sie sie.

# Binding

Die Bindung ermöglicht es, Module direkt miteinander zu verknüpfen, ohne dass die Befehle durch die Steuerung geleitet werden. Die Verknüpfung erfolgt aus einem Cluster *(Geben Sie den Ausgang ein)* zu demselben Cluster eines anderen Moduls. Die Verbindung muss immer von der Steuerung (Fernbedienungstyp) zum Stellantrieb hergestellt werden.

Sie finden die Bindungsverwaltungselemente, sofern sie von Ihrem Modul unterstützt werden, auf der Registerkarte **INFORMATION** aus dem Modulkonfigurationsfenster.

![Bindung Zigbee](../images/zigbee_binding.png)

Einige Module sind nicht mit der Bindung kompatibel, andere *(wie Ikea-Module)* Unterstützen Sie nur die Bindung des Befehls an eine Gruppe. Daher müssen Sie zunächst eine neue Gruppe erstellen, in der der Aktuator platziert werden muss.

>**Wichtig**
>
>Beim Einrichten (oder Entfernen) einer Bindung muss das Quellmodul (z. B. Fernbedienung) unbedingt aktiviert werden, damit es die Bindungsinformationen berücksichtigt

# ZigBee-Netzwerke

Der Aufbau eines qualitativ hochwertigen ZigBee-Netzwerks wird durch die im Plugin bereitgestellten Tools erheblich unterstützt. Gehen Sie zur allgemeinen Seite des Plugins, in der alle Geräte aufgelistet sind, und klicken Sie auf die Schaltfläche **ZigBee-Netzwerke** Zugriff auf verschiedene Informationen und Aktionen rund um das ZigBee-Netzwerk sowie deren repräsentative Grafik.

## Netzwerkgraph

Das Netzwerkdiagramm bietet einen Überblick über das ZigBee-Netzwerk und die Qualität der Kommunikation mit den verschiedenen Modulen.

>**INFORMATION**
>
>Das ZigBee-Netzwerkdiagramm ist indikativ und basiert auf den Nachbarn, die die Module deklarieren. Dies stellt nicht unbedingt das tatsächliche Routing dar, sondern die möglichen Routen.

## Das Netzwerk optimieren

Optimieren Sie die Zuverlässigkeit Ihres ZigBee-Netzwerks, **Es wird mehr als empfohlen, mindestens 3 Routermodule permanent mit Strom zu versorgen und zu vermeiden, dass sie vom Stromnetz getrennt werden**. Tatsächlich haben wir bei unseren Tests eine deutliche Verbesserung der Zuverlässigkeit und Ausfallsicherheit des ZigBee-Netzwerks beim Hinzufügen von Routermodulen festgestellt. Es ist auch ratsam, sie zuerst einzuschließen, da Sie sonst 24 bis 48 Stunden auf die "Endgeräte" warten müssen" *(Nicht-Router-Module)* entdecke sie.

Ein weiterer wichtiger Punkt ist, dass beim Entfernen eines Routermoduls dieser Teil des "Endgeräts" möglich ist" *(Nicht-Router-Module)* entweder für eine längere oder kürzere Zeit verloren *(in zehn Stunden oder mehr)* oder sogar definitiv und Sie müssen sie wieder einschließen.
Leider liegt dies an der Art und Weise, wie der Hersteller die Integration seiner Geräte in ein ZigBee-Netzwerk geplant hat und daher nicht durch das Plugin korrigiert werden kann, das den Routing-Teil nicht verwaltet.

Schließlich und auch wenn es einigen offensichtlich erscheint, erinnern wir Sie daran, dass ZigBee-Gateways in Wifi oder Remote per Definition weniger zuverlässig sind als USB-Gateways. Das Jeedom-Team empfiehlt daher die Verwendung eines ZigBee-Gateways in USB.  

# Zigbee-Schlüsselwechsel

Wenn Sie für einen bestimmten Dämon (1,2 oder 3) den Zigbee-Schlüssel ändern, müssen Sie die Daten auf der Ebene des Dämons löschen ("Daten löschen-Schaltfläche"). Dadurch wird Jeedoms Ausrüstung nicht gelöscht, sondern nur die Zigbee-Datenbank des Dämons geleert. Bitte beachten Sie, dass dieser Vorgang irreversibel ist

# FAQ

>**LQI oder RSSI ist N / A**
>
>Die Werte werden normalerweise nach dem Neustart des ZigBee-Daemons geleert. Sie müssen warten, bis das Modul erneut kommuniziert, damit die Werte eingegeben werden können.

>**Ich habe Einschlussprobleme oder Fehler in den Typprotokollen ````TXStatus.MAC_CHANNEL_ACCESS_FAILURE````**
>
>Sie sollten versuchen, die USB-Erweiterung zu entfernen oder zu ändern, wenn Sie eine verwenden, oder eine installieren, wenn Sie keine verwenden.

>**Ich habe Fehler ````can not send to device```` oder ````send error```` oder ````Message send failure````**
>
>Dies ist normalerweise auf ein Routing-Problem zurückzuführen. Das Routing ist in ZigBee mehr oder weniger fest, aber nicht symmetrisch. Ein Modul kann eine andere Route verwenden, um zu antworten, als die, mit der es gesprochen hat. Oft die elektrische Abschaltung *(zum Beispiel Batterien entfernen)* und schalten Sie den Strom ein *(oder Austausch von Batterien)* ist genug, um das Problem zu lösen. Es kann auch korrigiert werden durch :
>- Setzen oder Ersetzen der USB-Erweiterung,
>- Verwenden eines anderen USB-Anschlusses (insbesondere der USB-Anschlüsse am Raspberry Pi, die anscheinend Schwierigkeiten haben),
>- Platzieren eines USB-Hubs mit Stromversorgung,
>- Bewegen Sie den Schlüssel, um Störungen zu vermeiden *(Der ZigBee ist sehr störempfindlich, insbesondere weil er dieselbe Frequenz wie das WLAN verwendet)*.

>**Ich habe seltsame Fehler bei Batteriemodulen oder Einschlussprobleme**
>
>Wir haben festgestellt, dass ein großer Teil der Probleme der Module in der Batterie auf die Batterien oder möglicherweise auf Probleme beim Zurücksetzen der Module auf Null vor dem Einschluss zurückzuführen ist. Auch wenn diese neu erscheinen, ist es ratsam, mit neuen Batterien zu testen, um diese Hypothese auszuschließen.

>**Ich habe Bedenken, die Werte der Ausrüstung zu aktualisieren**
>
> 2 Möglichkeiten :
> - Es ist ein ZLL-Modul *(Siehe die Konfiguration der Jeedom-Ausrüstung, die angibt, ob es sich um ZHA oder ZLL handelt)*. In diesem Fall benötigen Sie unbedingt einen Befehl "Aktualisieren", damit Sie oder Jeedom die Aktualisierung der Werte erzwingen. Wenn dieser Befehl im Gerät nicht vorhanden ist, müssen Sie sich an den Jeedom-Support wenden, damit er in der nächsten stabilen Version hinzugefügt wird. Sobald Sie fertig sind, klicken Sie auf die Schaltfläche **Befehle neu erstellen** ohne Löschung.
> -	Das Modul befindet sich in ZHA, daher ist es ein Anliegen der Inklusion. In der Registerkarte **Aktion** In der Modulkonfiguration befindet sich eine Schaltfläche **Modul zurücksetzen** Erlauben, Aktionen nach der Aufnahme zu erzwingen. Es muss darauf geachtet werden, dass das Modul wach bleibt, wenn es im Akkubetrieb ist.

>**Mein Modul leert seine Batterien sehr schnell**
>
>Überprüfen Sie, ob sich auf Ihrem ZigBee-Schlüssel eine aktuelle Firmware befindet. In 90% der Fälle kommt ein übermäßiger Batterieverbrauch von der Firmware des Schlüssels, bei dem ein Problem auftritt.

>**Ich kann keine neuen Module aufnehmen**
>
>Dafür gibt es mehrere Möglichkeiten :
>- Du hast bereits viele Mods und hast das Limit der Anzahl der Live-Mods überschritten (31 im Allgemeinen). Sie müssen entweder einen anderen ZigBee-Schlüssel eingeben (das Plugin verwaltet bis zu 3) oder versuchen, Routerknoten hinzuzufügen (achten Sie darauf, dass es keinen klaren Standard für Routerknoten gibt, sodass Inkompatibilitäten zwischen Herstellern bestehen...)
>- Sie sind unter Conbee : Versuchen Sie, den Schlüssel für 2 Minuten abzuziehen, ihn zurückzusetzen und den Daemon neu zu starten. Es handelt sich um eine bekannte Erkrankung des Conbee-Schlüssels (auch unter Dekonz), oder Sie benötigen einen Kaltstart, damit die Aufnahme funktioniert
>- Sie haben eine SSD an USB3 angeschlossen, versuchen Sie, sie an einen USB2-Port anzuschließen

>**Ich sehe in den Protokollen den Fehler "Keine Cluster-ID" XXXXX"**
>
>Dies ist eine unvollständige Aufnahme, Sie müssen das Modul aus den Zigbee-Netzwerken entfernen (mit der Schaltfläche Zigbee-Netzwerke => Knoten), das Modul zurücksetzen und dann wieder einschließen, wobei darauf zu achten ist, dass es während aller Prozesse der "Einbindung" wach bleibt

>**Mein Bewegungsmelder / Öffnungs- / Schaltbefehl bleibt immer auf 1**
>
>Im Zigbee-Modus ist es üblich, dass das Modul während einer Aktion (Bewegung, Öffnen, Drücken der Taste) den Wert Eins sendet, aber keine 0 zurückgibt, wenn sie beendet ist (zum Beispiel Ende der Bewegung)). Sie können eine Statusrückkehr auf 0 nach 1 Minute (zum Beispiel) in der Konfiguration des Gerätebefehlsregisters und dann in der betreffenden Befehlszeile einrichten.

>**Ich habe nicht so viele Befehle wie Tasten auf meiner Fernbedienung**
>
>Auf meiner Fernbedienung habe ich zum Beispiel 2 Tasten, aber in der Liste der Jeedom-Befehle habe ich nur 1 Befehl !!! Es ist normal, dass der Befehl in Jeedom je nach gedrückter physischer Taste einen anderen Wert annimmt. Am einfachsten ist es, zu „Erweiterte Konfiguration“ (oben rechts) und dann zu „Protokolle“ (auch oben rechts) zu gehen und die Tasten auf der Fernbedienung zu drücken, um die verschiedenen Werte der Befehle anzuzeigen.

>**Ich habe einen Standardfehler "base.timeout", wenn der Daemon auf einem Schlüssel vom Typ EZSP gestartet wird**
>
>Es ist möglich, dass der Schlüssel im Bootloader-Modus blockiert ist, um ihn zu verlassen, können Sie zur Konfiguration des Plugins gehen und dann auf "Firmware aktualisieren" klicken, Ihren Schlüsseltyp auswählen (auf Smart/Atlas ist es Elelabs/Popp ), wählen Sie unter Zigbee-Port Ihren Port aus und wählen Sie unter Firmware „Korrektur Bootloader"
> Wichtig : Diese Manipulation sollte nur mit Schlüsseln vom Typ Elelabs, Jeedom Atlas oder Jeedom Smart durchgeführt werden. Bei allen anderen Schlüsseln müssen Sie sich an den Hersteller wenden, um Ihnen das Verfahren mitzuteilen.

>**Ich kann keine Abhängigkeiten installieren**
>
>Dies kann von einem Problem mit der Version von pip3 herrühren, um es zu beheben, müssen Sie zur Jeedom-Konfiguration gehen, Registerkarte OS / DB, dann die OS-Konsole starten und tun : `sudo pip3 install --upgrade pip` und starten Sie dann die Installation der Abhängigkeiten neu. Wenn das nicht funktioniert, können Sie versuchen, `sudo apt remove -y python3-openssl;sudo pip3 install --upgrade pip` auszuführen und die Installation der Abhängigkeiten neu zu starten.
