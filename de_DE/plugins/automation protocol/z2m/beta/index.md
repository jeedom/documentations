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
> Zunächst müssen Sie die Firmware Ihres Schlüssels aktualisieren (insbesondere für EZSP, insbesondere für Popp-Schlüssel). Andernfalls kann der Dämon nicht funktionieren. Sie müssen die Dokumentation des Herstellers konsultieren. Zögern Sie nicht, die offizielle Zigbee2MQTT-Seite zu konsultieren, um die für Ihren Schlüssel verfügbare Firmware zu finden [Hier](https://www.zigbee2mqtt.io/guide/adapters/)

Darüber hinaus ist das Plugin mit vielen Tools ausgestattet, die es ermöglichen :

- Dort **Mods-Update** im OTA,
- Visualisierung von Knoten und **Netzwerkdiagramm**,
- die Geschäftsführung von **Gruppen**,
- die Unterstützung von **Bindung**,
- die Pflege von **Berühren Sie den Link**

>**SEHR WICHTIG**
>
> Aufgrund des Firmware-/Hardware-Walzes auf Seiten des Herstellers und möglicher Fehler in der Firmware (ohne unbedingt die Möglichkeit zu haben, sie von Jeedom aus zu aktualisieren, da die meisten Hersteller diese nicht mitteilen) ist es möglich, dass ein als kompatibel gekennzeichnetes Modul nur teilweise (a Taste, die nicht funktioniert, oder kein Unterschied zwischen Auf- und Ab-Taste, kein CO2-Anstieg oder ein Modulsensor...). Leider können wir Sie in der Liste nicht vorab warnen, da :
>- Wir haben nicht unbedingt das betreffende Modul, viele Module werden durch Benutzerfeedback hinzugefügt
>- Von einer Woche auf die andere kann sich das Modul geändert haben (neue Hardware, neue Firmware oder sogar ein neues Modul, dessen Name sich nicht geändert hat))
>Jeedom kann unter keinen Umständen für fehlende Funktionen (oder sogar für ein nicht funktionierendes Modul) haftbar gemacht werden, auch wenn es als kompatibel angegeben ist. Wir unterliegen wie Sie den vom Hersteller auferlegten Änderungen. ( S)

# Configuration

## Plugin-Setup

**Jeezigbee-Plugin** nutzt Abhängigkeiten, die zuerst installiert werden müssen (je nach System kann dies mehrere Stunden dauern)).

Das Plugin verwendet das MQTT-Protokoll, um mit Jeedom zu chatten; Daher ist es erforderlich, dass das MQTT-Manager-Plugin installiert und korrekt konfiguriert ist (in der Praxis sollte Jeedom alles selbst erledigen, wenn dies nicht der Fall ist)).

Sobald die Abhängigkeiten installiert sind, können Sie durch Eingabe einen Zigbee-Controller konfigurieren **Controller-Typ, Controller-Port**, Starten Sie dann den Daemon (neu).

Das können Sie in der Plugin-Konfiguration :

- Wählen Sie die Version von Zigbee2MQTT, indem Sie einfach die Versionsnummer in das dafür vorgesehene Feld eingeben (über die Schaltfläche neben diesem Feld können Sie die verfügbaren Versionen anzeigen)). Dann speichern Sie einfach die Abhängigkeiten und starten Sie sie neu
- Das Plugin teilt Ihnen auch mit, ob Sie (mindestens) die von jeedom empfohlene Version haben. Dies ist nicht obligatorisch, wird jedoch empfohlen, diese oder eine höhere Version zu verwenden
- Sie können den Überwachungsport der Zigbee2MQTT-Schnittstelle ändern (es wird nicht empfohlen, diesen zu berühren, es sei denn, Sie wissen, was Sie tun))
- Bei EZSP Elelabs-Controllern ist es möglich, die Firmware zu aktualisieren

>**WICHTIG**
>
> Es gibt 2 Modi für das Plugin : lokal, alles ist auf Ihrem Jeedom, dies ist der empfohlene Modus. Für fortgeschrittene Benutzer ist es möglich, den Remote-Modus zu verwenden; In diesem Fall verwaltet Jeedom Zigbee2mqtt nicht, es muss von Ihnen installiert werden (normalerweise auf einem Docker auf Jeedom oder auf einer anderen Maschine)). Seien Sie im Remote-Modus vorsichtig, Mqtt-Manager und Zigbee2MQTT müssen mit demselben Mqtt-Broker (Mosquitto) verbunden sein)

>**WICHTIG**
>
> Wenn Sie sich im lokalen Modus befinden, ist es bei der ersten Verwendung UNBEDINGT notwendig, die Abhängigkeiten zu starten (auch wenn dies in Ordnung ist)). Beachten Sie, dass Sie zum Aktualisieren von Zigbee2MQTT lediglich die Abhängigkeiten starten müssen. Sie können dann die neuen Versionen von Zigbee2MQTT sehen [Hier](https://github.com/Koenkk/zigbee2mqtt/tags)

Um vom Jeezigbee-Plugin zu Zigbee2MQTT zu gelangen (z. B. um das Löschen eines Moduls zu erzwingen), müssen Sie zur Konfiguration des Jeezgibee-Plugins gehen und dann im Abschnitt „Konfiguration“ auf Schnittstelle z2m klicken. „Hier“ öffnen Sie die Zigbee2MQTT-Webseite Schnittstelle, sobald Sie im Modul sind, werden Sie nach der Kennung gefragt, die Sie auf der Jeezigbee-Konfigurationsseite finden.

Achtung, dies ist nur möglich, wenn Sie sich in der lokalen Installation von zigbee2mqtt befinden.

## Compatibilité

Sie können finden [Hier](https://www.zigbee2mqtt.io/supported-devices/) die Liste der mit dem Plugin kompatiblen Module

>**WICHTIG**
>
>Für den Moment, in dem das Plugin eine Autokonfiguration durchführt, das heißt, dass es keine spezifische Konfiguration für ein bestimmtes Modul enthält, ruft es die Informationen von zigbee2mqtt ab, um die Befehle automatisch zu generieren. Dies bedeutet, dass jedes mit zigbee2mqtt kompatible Modul sofort mit dem Plugin funktionieren sollte. Andererseits hat dies zur Folge, dass viele Befehle generiert werden, die nicht immer alle nützlich sind. Wir sind dabei, für bestimmte Module ein spezifisches Konfigurationssystem hinzuzufügen und so die Befehle und deren Darstellung zu verbessern

## Gerätekonfiguration

### Fügen Sie ein Zigbee-Modul hinzu

Inklusion ist der komplexeste Teil von Zigbee. Obwohl der Vorgang einfach ist, muss er oft mehrmals wiederholt werden, um ihn zu erreichen. Auf der Jeedom-Plugin-Seite ist es ganz einfach, klicken Sie einfach auf die Schaltfläche **Include-Modus** Danach haben Sie 3 Minuten Zeit, um die Ausrüstung einzubinden.

Das Aufnahmeverfahren ist für jedes Modul spezifisch. Um dies zu erreichen, lesen Sie bitte die Dokumentation des Herstellers.

>**TRICK**
>
>Vergessen Sie nicht, das Gerät zurückzusetzen *(reset)* des Moduls vor der Aufnahme. Sie müssen beim Einbinden auch sorgfältig darüber nachdenken, das Modul wach zu halten (achten Sie darauf, es nicht zu lange wach zu halten und einen Reset zu starten, ohne dies absichtlich zu tun))

Wie gewohnt können Sie Ihrer Ausrüstung einen Namen geben, ihr eine Kategorie oder ein übergeordnetes Objekt zuweisen und sie aktivieren oder sichtbar machen.

Auf andere, spezifischere Parameter kann ebenfalls zugegriffen werden :

- **Identifikation** : eindeutige Gerätekennung. Auch bei einer Wiedereinbindung oder wenn Sie den Typ des Zigbee-Controllers wechseln.
- **Z2m-Controller** : ermöglicht Ihnen die Auswahl des Zigbee-Controllers für die Kommunikation mit dem Gerät (im Moment unterstützt das Plugin nicht mehrere Controller))
- **Selbstaktualisierung (cron)** : ermöglicht das Hinzufügen eines Crons, der die Aktualisierung der Gerätewerte anfordert (Achtung, nichts garantiert, dass das Modul sie wirklich aktualisiert, es muss dies unterstützen))
- **Erlauben Sie keine Nachrichten, wenn das Gerät länger als (s) nicht gesehen wurde)** : Jedes Zigbee-Gerät hat ein Datum der „letzten Kommunikation“ (zuletzt gesehen). In seltenen Fällen ist es möglich, dass Zigbee2MQTT Nachrichten vom Gerät sendet, auch wenn es nicht mehr da ist (nicht mehr angeschlossen oder keine Batterie mehr übrig)). Um in diesem Fall eine „falsche“ Aktualisierung der Befehle zu vermeiden, kann man sagen: „Wenn die letzte Kommunikation vom Gerät älter als X Sekunden ist, ignorieren Sie die Aktualisierungen der Werte.“". Bitte beachten Sie, dass diese Option fortgeschrittenen Benutzern vorbehalten ist.

Das Teil **Information** ermöglicht es, das Modell der Ausrüstung zu sehen. Wir finden auch die visuelle Darstellung des Geräts (nicht veränderbar, da es von zigbee2mqtt stammt) und Zugriff auf die Konfiguration des Moduls

In der Registerkarte **Aufträge**, Wir finden, wie üblich, die Befehle, die die Interaktion mit dem Modul ermöglichen.

### Modulkonfiguration

Dies ist ein wichtiges Fenster, das Sie hier finden :

- Information : enthält alle nützlichen Informationen zu Ihrem Modul (Modell, Hersteller, Status, Stromversorgung, OTA, Beschreibung, Endpunkte)....)
- Aufbau : enthält die Konfigurationsparameter Ihres Moduls, falls vorhanden (häufig sind keine vorhanden, daher ist es leer))
- Bindung : Hier finden Sie die bestehende Anbindung (im Allgemeinen haben Sie immer eine Zeile, um Ihr Modul mit Ihrem Koordinator zu verknüpfen)). Sie können auch eine Bindung (Link) zwischen zwei Modulen hinzufügen. Achten Sie darauf, die Module beim Bingen im Akkubetrieb aufzuwecken. Wichtig: die Bindung hängt von den Herstellern ab (und nicht vom Plugin), einige Hersteller unterstützen keine direkte Bindung und es ist unbedingt erforderlich, eine Gruppe zu haben, es gibt auch Inkompatibilitäten zwischen Herstellern (wir können diese leider nicht auflisten))
- Berichterstattung : Wenn das Modul dies unterstützt, können Sie hier die Häufigkeit konfigurieren, mit der Informationen vom Modul an den Koordinator (Jeedom) gesendet werden)
- Rohinformationen : dient nur der Unterstützung, Sie werden gefragt, ob Sie ein Problem mit einem Modul haben

### Modul nicht erkannt

Wenn das Modul vom Plugin nicht erkannt wird (kein Befehl), müssen Sie nachsehen [Hier](https://www.zigbee2mqtt.io/supported-devices/), Wenn es unterstützt wird, müssen Sie sich an den Jeedom-Support wenden (oder in der Community schreiben), um herauszufinden, warum. Wenn Ihr Modul nicht in der Liste der von Zigbee2MQTT unterstützten Module enthalten ist, müssen Sie warten, bis es hinzugefügt wird.

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

Hier finden Sie alle erweiterten Konfigurationen von Zigbee2MQTT. Seien Sie vorsichtig, dies ist eine von Zigbee2MQTT generierte Liste (daher ist alles auf Englisch))

## Netzwerkdiagramm

Das Netzwerkdiagramm bietet einen Überblick über das Zigbee-Netzwerk und die Qualität der Kommunikation mit den verschiedenen Modulen. Denken Sie daran, von Zeit zu Zeit ein Update zu starten (dies dauert etwa zehn Minuten und kann Ihr ZigBee-Netzwerk verlangsamen). Sobald das Update abgeschlossen ist, müssen Sie das Fenster schließen **Zigbee-Netzwerke** und öffnen Sie es erneut.

>**WICHTIG**
>
>Das Netzwerkdiagramm dient nur zu Informationszwecken und ist möglicherweise nicht genau (insbesondere bei Batteriemodulen, die ihr Routing nicht oft oder manchmal sogar nicht melden))

## Optimieren Sie das Netzwerk

Um die Zuverlässigkeit Ihres Zigbee-Netzwerks zu optimieren, **Es wird mehr als empfohlen, mindestens 3 Router-Module dauerhaft mit Strom zu versorgen und deren Trennung zu vermeiden**. Tatsächlich haben wir bei unseren Tests eine deutliche Verbesserung der Zuverlässigkeit und Belastbarkeit des Zigbee-Netzwerks durch das Hinzufügen von Router-Modulen festgestellt. Es ist auch ratsam, diese zuerst einzubinden, da Sie sonst 24 bis 48 Stunden auf das „Endgerät“ warten müssen" *(Nicht-Router-Module)* entdecke sie.

Ein weiterer wichtiger Punkt ist, dass beim Entfernen eines Router-Moduls ein Teil des „Endgeräts“ beschädigt werden kann" *(Nicht-Router-Module)* geht für mehr oder weniger lange Zeit verloren *(in zehn Stunden oder mehr)* oder sogar dauerhaft und Sie müssen sie erneut einbeziehen.
Leider liegt dies an der Art und Weise, wie der Hersteller die Integration seiner Hardware in ein Zigbee-Netzwerk geplant hat, und kann daher nicht durch das Plugin korrigiert werden, das den Routing-Teil nicht verwaltet.

Abschließend möchten wir Sie daran erinnern, dass Zigbee-Gateways in WLAN oder Remote per Definition weniger zuverlässig sind als USB-Gateways, auch wenn es für manche offensichtlich erscheinen mag. Das Jeedom-Team rät daher zum Einsatz eines Zigbee-Gateways in USB.

# Groupe

Es ist bei jeedom möglich, Gruppen von ZigBee-Geräten zu erstellen. Die Gruppen können alles und jedes enthalten. Es ist jeedom nicht möglich, die darin enthaltenen Bestellungen zu verwalten. Es liegt also an Ihnen, sie hinzuzufügen. Dies geht ganz einfach: Klicken Sie einfach auf die Schaltfläche zum Hinzufügen eines Befehls, geben Sie ihm einen Namen und übernehmen Sie die logische ID, den Typ und den Subtyp eines der Geräte in der Gruppe, die den gewünschten Befehl enthält. Beachten Sie, dass Jeedom sowohl Aktions- als auch Info-Befehle in Gruppen verwaltet.

# Externer Konverter

Mit Zigbee2mqtt können Sie externe Konverter hinzufügen (um Module zu unterstützen, die nicht offiziell unterstützt werden)). Um einen externen Konverter hinzuzufügen, klicken Sie einfach in der Plugin-Konfiguration (Plugin -> Plugin-Verwaltung -> Jeezigbee) auf die Schaltfläche „Bearbeiten“ in der Konverterzeile und legen/bearbeiten Sie Ihren Konverter in dem Ordner, den jeedom Ihnen zur Verfügung stellt. watch.

>**WICHTIG**
>
>Der Support deckt nicht die Erstellung/Nutzung externer Konverter ab.

# Spezifische Befehle

## IR-Steuerung

Der Fall von Modulen, die IR-Codes senden, ist etwas spezifisch, da es keine vordefinierte Liste von IR-Codes gibt. Sie müssen also den IR-Befehl selbst finden und dann ggf. einen Befehl mit logischer ID hinzufügen : `ir_code_to_send::IHR IR-CODE

## Kunden Bestellung

Dieser Teil ist eher für fortgeschrittene Benutzer gedacht, die bestimmte Befehle hinzufügen möchten. Alles geschieht in der logischen ID des Befehls :
- Aktion : `json::{"temperature":25}` zum Senden von „{"temperatur":25}` auf dem „set“-Thema des Geräts, um einen Befehl zu einem Unterthema zu senden, müssen Sie einfach „/arm_mode“ in das Unterthema und „json“ zum Beispiel einfügen::{"mode":"arming_stay"}` in der logischen ID zum Senden von `{"mode":"arming_stay"}` auf `set/arm_mode`
- Information : „temperature“, um das Feld „temperature“ aus dem Geräte-JSON oder „temperature“ abzurufen::min“, um das Unterfeld „min“ der „Temperatur“-Tabelle des Geräts abzurufen

>**NOTIZ**
>
> Für Aktionsbefehle können Sie „Tags“ verwenden#slider#`, `#message#`, `#title#` oder `#select#` abhängig vom Untertyp des Befehls zur Übergabe eines Parameters

# Sonoff E-Flash-Taste

## Automatische Website 

Auf dieser Website mit Chrome (Edge sollte auch funktionieren) können Sie durch Anschließen Ihres USB-Sticks an Ihren PC den Schlüssel automatisch mit der neuesten Firmware flashen :

[Silabs Firmware Flasher](https://darkxst.github.io/silabs-firmware-builder/)

## Befehlszeilenmodus mit Firmware-Auswahl

Mit dieser Methode können Sie den Schlüssel unter Linux mit der Firmware Ihrer Wahl flashen :



„
apt install -y python3-pip python3.11-venv
python3 -m venv flash
flash/bin/pip3 installiere universal-silabs-flasher
Flash-CD/
bin/universal-silabs-flasher --device /dev/ttyUSB0 --bootloader-reset Sonoff-Probe
bin/universal-silabs-flasher --device /dev/ttyUSB0 --bootloader-reset sonoff flash --firmware ../ncp-uart-sw_EZNet7.4.3_V1.0.0.gbl
bin/universal-silabs-flasher --device /dev/ttyUSB0 --bootloader-reset Sonoff-Probe
„

Liste von [Firmware](https://github.com/itead/Sonoff_Zigbee_Dongle_Firmware/tree/master/Dongle-E). 

Achten Sie beim Flashen darauf, den richtigen GBL-Dateinamen einzugeben.

# FAQ

[Verknüpfung](https://www.zigbee2mqtt.io/guide/installation/20_zigbee2mqtt-fails-to-start.html) zu den Zigbee2mqtt-FAQ

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
>- Sie haben bereits viele Module und haben das Limit für die Anzahl der Live-Module (normalerweise 31) überschritten). Sie müssen versuchen, Router-Knoten hinzuzufügen (achten Sie darauf, dass es keinen klaren Standard für Router-Knoten gibt, sodass es zu Inkompatibilitäten zwischen den Herstellern kommt)...)
>- Du bist auf Conbee : Ziehen Sie den Schlüssel zwei Minuten lang ab, stecken Sie ihn wieder ein und starten Sie den Daemon neu. Es handelt sich um eine bekannte Erkrankung der Conbee-Schlüssel (sogar unter Deconz). Sie benötigen einen „Kaltneustart“, damit die Einbindung wieder funktioniert
>- Sie haben eine SSD an USB3 angeschlossen. Versuchen Sie, sie an einen USB2-Anschluss anzuschließen

>**Ich habe nicht so viele Befehle wie Tasten auf meiner Fernbedienung**
>
>Auf meiner Fernbedienung habe ich zum Beispiel 2 Tasten, aber in der Liste der Jeedom-Befehle habe ich nur einen Befehl !!! Es ist normal; Der Befehl in Jeedom nimmt je nach gedrückter physischer Taste einen anderen Wert an. Der einfachste Weg, dies anzuzeigen, besteht darin, zu „Erweiterte Konfiguration“ (oben rechts) und dann zu „Protokolle“ (ebenfalls oben rechts) zu gehen und die Tasten auf der Fernbedienung zu drücken, um die verschiedenen Befehlswerte anzuzeigen.

>**Ich habe kein Bild meines Moduls**
>
>Nichts Ernstes, das bedeutet nicht, dass es nicht verwendet oder erkannt werden kann, das Bild dient lediglich der Veranschaulichung. Wenn Sie es wirklich wollen, müssen Sie sich an den Support wenden, damit dieser sehen kann, warum Sie es nicht haben (normalerweise liegt es an einem nicht standardmäßigen Zeichen im Namen des Modulmodells))

>**Ändern Sie die PAN_ID und den Netzwerkschlüssel**
>
>Sobald die Änderung in der Jeedom-Schnittstelle oder in zigbee2mqtt vorgenommen wurde, müssen Sie den Daemon stoppen und die Datei coordinator_backup löschen.json (es befindet sich in „/var/www/html/plugins/z2m/data“), starten Sie den Daemon neu.

>**Ich habe die Fehlermeldung „Fehler“ erhalten: Fehler zurücksetzen: Error: {"sequence":-1} nach 10000ms` und einem ELELABS-Schlüssel oder einer Atlas-Box**
>
>Sie müssen die Firmware Ihres Zigbee-Schlüssels aktualisieren. Klicken Sie dazu in der Konfiguration des Jeezigbee-Plugins auf Firmware aktualisieren, füllen Sie die verschiedenen Felder im Fenster aus und bestätigen Sie dann. Achten Sie darauf, dies nicht auf einer Luna-Box zu tun, da sonst der ZigBee-Schlüssel beschädigt wird. Wenn das Update nicht funktioniert, müssen Sie versuchen, eine „Bootloader-Korrektur“ durchzuführen".

>**Meine Ausrüstung wird nicht erkannt**
>
>Wenn Ihr Gerät nicht erkannt wird, liegt das daran, dass es noch nicht von der Zigbee2mqtt-Bibliothek unterstützt wird. Es ist möglich, einen Konverter für Ihre Ausrüstung zu erstellen. Sie müssen sich auf das Dokument beziehen [Unterstützung für neue Geräte](https://www.zigbee2mqtt.io/advanced/support-new-devices/01_support_new_devices.html) und auch für Tuya-Hardware. [Unterstützt neue TuYa-Geräte](https://www.zigbee2mqtt.io/advanced/support-new-devices/02_support_new_tuya_devices.html).
>
>Auf jeden Fall müssen wir einen Ausweg eröffnen [Github hier](https://github.com/Koenkk/zigbee2mqtt/issues)
>
>Sobald der Konverter erstellt ist, müssen Sie ihn zum Testen in das Plugin einfügen.
>1) Aus dem Jeedom-Dateieditor,
>- Erstellen Sie einen Ordner mit dem Markennamen Ihrer Ausrüstung in Plugin/z2m/core/converters>
>- Betreten Sie diesen Ordner
>- Erstellen Sie eine Datei mit dem Namen „Equipment reference brand“.js Für das Beispiel verwenden wir Tuya_TZE204_81yrt3lo.js
>- Fügen Sie in diese Datei die Elemente des Konverters ein.
>- Speichern und schließen Sie die Datei.
>
>2) Starten Sie den Plugin-Daemon neu

>**SONOFF Modell P-Taste: Flashen und Beheben des Problems „Unbekannter Datensatztyp 3“**
>
>Im Forum wurde eine Erklärung zum Blinken des Schlüssels vorgeschlagen. Wenn Sie die Fehlermeldung „Unbekannter Datensatztyp3“ erhalten, ist eine Konvertierung Ihrer Datei erforderlich .verhexen .bin, wie im Tutorial erklärt. Vielen Dank an JeedGeek für die Erklärung [Hier](https://community.jeedom.com/t/flasher-sa-cle-usb-zigbee-sonoff-p-avec-lutilitaire-ti-sous-windows/109453)

>**Beim Aktualisieren der Firmware auf Luna ist ein Fehler aufgetreten**
>
>Sie müssen den Plugin-Daemon deaktivieren (Plugin -> Plugin-Verwaltung -> Jeezigbee, dann Automatische Verwaltung -> Deaktivieren) und Luna neu starten (Einstellungen -> System -> Neu starten)). Sobald die Box neu gestartet ist, müssen Sie das Firmware-Update erneut starten. Bitte beachten Sie, dass dies bis zu 10 Minuten dauern kann. Vergessen Sie nicht, nach Abschluss des Updates die automatische Daemon-Verwaltung erneut zu aktivieren.

>**Ich erhalte die Fehlermeldung „Start verweigert, weil Konfiguration ungültig ist, folgende Fehler wurden gefunden.“: devices/0xXXXXXXXXXXXXXXXX/homeassistant muss Objekt sein, null"**
>
>Es ist ein Fehler in zigbee2mqtt. Sie müssen zur Registerkarte „OS/DB“ der Jeedom-Konfiguration und dann zum Dateieditor gehen. Dort müssen Sie zu „plugins/z2m/data“ gehen und die Datei „configuration.yaml“ öffnen. Suchen Sie in dieser Datei die Zeile „homeassistant“, löschen Sie sie und starten Sie dann den Daemon neu.

>**Ich erhalte die Fehlermeldung „Konfiguration stimmt nicht mit der Adaptersicherung überein.“"**
>
>Sie müssen zur Jeedom-Konfiguration, dann zu OS/DB und dann zum Dateieditor gehen. Gehen Sie zu „plugins/z2m/data“ und löschen Sie die Datei „coordinator_backup.json“

>**Ich erhalte die Fehlermeldung „Start verweigert, weil Konfiguration ungültig ist, folgende Fehler wurden gefunden.“: 0850|- device_options must be object"**
>
> Il faut aller dans la configuration de jeedom onglet os/db cliquer sur l'editeur de fichier, ensuite dedans aller dans le dossier `plugins/z2m/data`, ouvrir le fichier configuration.yml (ou configuration.yaml) et supprimer la ligne qui contient device_options puis relancer le demon
