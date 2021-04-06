# ZigBee Plugin

Mit dem ZigBee-Plugin können Sie mit den meisten vorhandenen ZigBee-Geräten kommunizieren. Es basiert auf dem (Super-) Zigpy-Projekt, das mit den folgenden ZigBee-Schlüsseln kompatibel ist :

- Deconz. Vom Jeedom-Team getestet und validiert. Deconz muss nicht installiert sein
- EZSP (Schlüssel basierend auf einem Silicon Labs-Chupset). Wird vom Jeedom-Team getestet
- X-bee. Nicht vom Jeedom-Team getestet
- Zigate. Nicht vom Team getestet, experimentell bei Zigpy markiert
- ZNP (Texas Instrument, Z-Stapel 3.X.X). Nicht vom Team getestet, experimentell bei Zigpy markiert
- CC (Texas Instrument, Z-Stapel 1.2.X). Nicht vom Team getestet, experimentell bei Zigpy markiert

# Plugin Konfiguration

Nach der Installation des Plugins müssen Sie nur die Abhängigkeiten installieren, Ihren Schlüsseltyp und den Port auswählen (achten Sie darauf, dass nur der Deconz-Schlüsseltyp den Port in Auto unterstützt) und den Daemon starten. Sie können auch den Kanal für den Zickzack auswählen.

>**Wichtig**
>
>Jeder Kanalwechsel erfordert zwangsläufig einen Neustart des Daemons. Ein Kanalwechsel kann auch die Wiedereinschaltung eines bestimmten Moduls erfordern

## Backup wiederherstellen 

Auf EZSP-Schlüsseln (z. B. Elelabs) und ZNP ist es möglich, eine Sicherungskopie dieses Schlüssels zu erstellen, um ihn auf einem anderen Schlüssel wiederherzustellen.

>**Wichtig**
>
> Bei EZXP-Schlüsseln (Elelabs) ist es nur möglich, eine einzige Sicherungswiederherstellung insgesamt und für die Lebensdauer des Schlüssels durchzuführen !!!!

Das Backup enthält nicht die Liste der Module, sondern nur die Basisinformationen des ZigBee-Netzwerks. Daher ist es nicht erforderlich, dies häufig durchzuführen. Nur eines reicht aus, da es sich während der Lebensdauer des Schlüssels nicht bewegt.

>**Wichtig**
>
> Während einer Sicherung oder Wiederherstellung werden die ZigBee-Daemons gestoppt

## Firmware Update 

Von Jeedom aus ist es möglich, die Firmware des ZigBee-Schlüssels zu aktualisieren (derzeit nur für Elelabs). Die Firmware ist in ZigBee wirklich sehr wichtig (er ist es, der zum Beispiel das Routing verwaltet). Es ist wichtig, sie zu aktualisieren.

>**Wichtig**
>
> Während eines Firmware-Updates werden die ZigBee-Daemons gestoppt

## Zigpy-spezifische Parameter (Experten vorbehalten !!!!)

Es ist möglich, bestimmte Parameter für das ZigBee-Subsystem (Zigpy) festzulegen). Dieser Teil ist wirklich Experten vorbehalten und Jeedom bietet keine Liste möglicher Parameter (es gibt Hunderte, die von der Art des Schlüssels abhängen). Das Feld wird als Eingabe aus dem json-Beispiel verwendet : 

````
{
    "ezsp": {
        "CONFIG_ADDRESS_TABLE_SIZE": "16"
    }
}
````

>**Wichtig**
>
>Wenn bei JEDER Supportanfrage eine Konfiguration vorliegt, wird die Supportanfrage automatisch abgelehnt


# Moduleinschluss

Inklusion ist der schwierigste Teil in ZigBee. Obwohl einfach, wird die Operation oft mehrmals durchgeführt. Auf der Plugin-Seite ist es einfach, klicken Sie einfach auf die Schaltfläche "Einschlussmodus". Sobald Sie fertig sind, haben Sie 3 Minuten Zeit, um Ihre Ausrüstung einzuschließen.

Die Ausrüstungsseite ändert sich je nach Modul. Es ist erforderlich, jedes Mal auf die Dokumentation dieses Moduls zu verweisen.

>**Wichtig**
>
>Vergessen Sie nicht, das Modul vor jeder Aufnahme zurückzusetzen

# Equipement

Einmal enthalten, muss Jeedom Ihr Modul automatisch erkennen (falls dies nicht der Fall ist, siehe nächstes Kapitel) und daher die Befehle erstellen, die gut funktionieren. Beachten Sie, dass es aufgrund eines Fehlers in einer bestimmten Firmware (Ikea, Sonoff ...) manchmal erforderlich ist, den Modultyp direkt in der Liste "Ausrüstung" auszuwählen und dann zu speichern, um die richtigen Befehle zu erhalten.

Sie haben auf der Registerkarte Ausrüstung die folgenden Parameter :

- **Name der ZigBee-Ausrüstung** : Name Ihrer ZigBee-Ausrüstung
- **Identifikation** : eindeutige Kennungen des Geräts, auch während einer Wiedereingliederung (oder auch wenn Sie den Typ des ZigBee-Schlüssels ändern)
- **Aktivieren**
- **Sichtbar**
- **Übergeordnetes Objekt**
- **Büro**
- **Kategorie**
- **Warten Sie nicht auf die Rückgabe der Auftragsausführung (schneller, aber weniger zuverlässig))** : Warten Sie nicht, bis die Schlüsselüberprüfung anzeigt, dass der Befehl ausgeführt wurde. Es macht die Hand schneller, garantiert aber nicht, dass alles gut gelaufen ist

Auf der Befehlsregisterkarte finden Sie die Befehle Ihres Moduls (sofern es erkannt wurde)

## Bestellung für Experten

Für die Experten ist hier, wie die Kontrollen funktionieren :

- ``attributes::ENDPOINT::CLUSTER_TYPE::CLUSTER::ATTRIBUT::VALUE``, Mit dieser Option können Sie den Wert eines Attributs schreiben (achten Sie darauf, dass nicht alle Attribute geändert werden können) :
  - ``ENDPOINT`` : Endpunktnummer
  - ``CLUSTER_TYPE`` : Clustertyp (IN oder OUT)
  - ``CLUSTER`` : Clusternummer
  - ``ATTRIBUT`` : Attributnummer
  - ``VALUE`` : Wert zu schreiben
Beispiel : ``attributes::1::in::513::18::#slider#*100``, Hier schreiben wir das Attribut in Endpunkt 1, eingehender Cluster (``in``) 513, Attribut 18 mit dem Wert von ``slider*10``
- ``ENDPOINT::CLUSTER:COMMAND::PARAMS``, ermöglicht die Ausführung eines Serverbefehls mit :
  - ``ENDPOINT`` : Endpunktnummer
  - ``CLUSTER`` : Clustername
  - ``COMMAND`` : Name der Bestellung
  - ``PARAMS`` Parameter in der richtigen Reihenfolge getrennt durch ::
Beispiel : ``1::on_off::on``, hier führen wir den Befehl aus ``on`` auf Endpunkt 1 des Clusters ``on_off`` ohne Parameter
Beispiel : ``1::level::move_to_level::#slider#::0``, hier führen wir den Befehl aus ``move_to_level`` auf Endpunkt 1 des Clusters ``level`` Mit Parametern ``#slider#`` und ``0``

# Mein Modul wird nicht erkannt

Wenn Ihr Modul von jeedom nicht erkannt wird (kein Befehl), aber enthalten ist, müssen Sie das Jeedom-Team bitten, es hinzuzufügen.

>**Wichtig**
>
>Das Jeedom-Team behält sich das Recht vor, Integrationsanfragen abzulehnen. Es ist immer besser, ein bereits kompatibles Modul zu verwenden

Dazu müssen Sie die folgenden Elemente angeben (unvollständige Anfragen werden ohne Antwort des Jeedom-Teams abgelehnt) :

- Geben Sie das genaue Modell Ihres Moduls an (mit einem Link zur Verkaufsseite)
- Klicken Sie auf der Ausrüstungsseite auf Konfiguration, dann auf die Registerkarte "Rohdaten" und senden Sie den Inhalt an das Jeedom-Team
- Setzen Sie den Daemon in das Debug (und starten Sie ihn neu), führen Sie Aktionen am Gerät durch (wenn es sich um einen Temperatursensor handelt, variieren Sie die Temperatur, z. B. wenn es sich um ein Ventil handelt, ändern Sie den Sollwert ...) und senden Sie das ZigBee-Debug-Protokoll (achten Sie darauf, dass Sie den Zigbee und nicht den Zigbeed nehmen)

# Touchlink

Touchlink oder Lightlink ist ein spezieller Bestandteil des ZigBee, mit dem Sie Verwaltungsaufträge an ein Modul senden können, wenn Sie sich ganz in der Nähe befinden (50 cm)). Es wird zum Beispiel verwendet, um Lampen ohne Taste zurückzusetzen.

Dies betrifft daher alles, was ZigBee-Lampen vom Typ Philips Hue, Ikea, Osram, Icasa usw. sind. Das Prinzip ist sehr einfach, um diesen Modultyp einem ZigBee-Netzwerk zuordnen zu können. Sie müssen zuerst einen Reset durchführen. Beim Neustart des Moduls wird dann automatisch versucht, eine Verknüpfung mit dem ersten geöffneten ZigBee-Netzwerk herzustellen.

## In Touchlink zurücksetzen

Dies ist der komplizierte Teil (wie immer in Zigbee ist das Zurücksetzen / Assoziieren am schwierigsten). Mehrere Methoden :

- Führen Sie das Ein- und Ausschalten 5 oder 6 Mal schnell durch. Die Lampe blinkt normalerweise am Ende schnell, um zu signalisieren, dass sie gut ist (funktioniert selten)
- Verwenden Sie eine ZigBee-Fernbedienung und
  - Drücken Sie gleichzeitig die EIN- und AUS-Taste für 5 bis 10 Sekunden in der Nähe der Glühbirne (Vorsicht vor bestimmten Glühbirnen, manchmal müssen Sie die Glühbirne kurz zuvor aus- / einschalten) für Philips Farbton-Fernbedienungen
  - Drücken Sie die Reset-Taste (neben der Batterie) für Ikea-Fernbedienungen 5 bis 10 Sekunden lang in der Nähe der Glühbirne (Vorsicht vor bestimmten Glühbirnen, manchmal müssen Sie die Glühbirne kurz zuvor aus- und wieder einschalten)
- Für die Farbtonbirnen können Sie sie auch auf der Farbtonbrücke einfügen und dann von dieser entfernen

# OTA-Update 

OTA-Updates sind Modul-Firmware-Updates. Sie dauern sehr lange (mehrere Stunden), ermöglichen Ihnen jedoch im Allgemeinen weniger Sorgen. Um ein Modul aktualisieren zu können, muss der Hersteller die Firmware mitteilen : 

- Für Ikea und Ledavance keine Sorge, es wird online direkt von Ikea bereitgestellt, das Plugin wird es direkt von ihnen abholen 
- Für andere (siehe [Hier](https://github.com/Koenkk/zigbee-OTA/tree/master/images)) Der Hersteller stellt manchmal inoffiziell ein Update zur Verfügung 
- Für alle anderen gibt es keine Möglichkeit, das Modul über das Plugin zu aktualisieren 

Um OTA-Updates zu aktivieren, aktivieren Sie einfach das Kontrollkästchen in der Plugin-Konfiguration, speichern Sie und klicken Sie auf die Schaltfläche, um die OTA-Dateien zu aktualisieren. Starten Sie dann einfach die ZigBee-Dämonen neu.

Die Updates werden gestartet, wenn es eines gibt, und danach fragt das Modul, ob es eines gibt (Sie können dies auf der Registerkarte Aktion in der Konfiguration des Moduls / Knotens erzwingen). Leider gibt es keinen einfachen Indikator, um den Fortschritt des Updates zu sehen. Die einzige Lösung besteht darin, in den zigbee_X-Protokollen (wenn das Protokoll debuggt ist) nach ota zu suchen und zu sehen, ob sich ein Modul mit Protokollen des Typs selbst aktualisiert : 

````
2020-02-27 15:51:10 [DEBUG][0x7813:1:0x0019] OTA query_next_image handler for 'IKEA of Sweden TRADFRI control outlet': field_control=1, manufacture_id=4476, image_type=4353, current_file_version=536974883, hardware_version=60
2020-02-27 15:51:10 [DEBUG][0x7813:1:0x0019] OTA image version: 537011747, size: 204222. Update needed: True
2020-02-27 15:51:18 [DEBUG][0x7813:1:0x0019] OTA image_block handler for 'IKEA of Sweden TRADFRI control outlet': field_control=0, manufacturer_id=4476, image_type=4353, file_version=537011747, file_offset=0, max_data_size=63, request_node_addr=Noneblock_request_delay=None
2020-02-27 15:51:18 [DEBUG][0x7813:1:0x0019] OTA upgrade progress: 0.0

 ````

# Ratschläge, um ZigBee-Netzwerke zuverlässiger zu machen 

Um ein zuverlässiges ZigBee-Netzwerk zu haben, wird mehr als empfohlen, mindestens 3 Routermodule permanent mit Strom zu versorgen und zu vermeiden, dass sie vom Stromnetz getrennt werden. Tatsächlich haben wir während unserer Tests eine große Verbesserung der Zuverlässigkeit und Ausfallsicherheit der ZigBee-Netzwerke beim Hinzufügen eines Routermoduls festgestellt. Es ist auch ratsam, sie zuerst einzuschließen (andernfalls dauert es zwischen 24 und 48 Stunden, bis das Endgerät [Nicht-Router-Modul] dies herausgefunden hat).

Ein weiterer wichtiger Punkt ist, dass beim Entfernen eines Routermoduls ein Teil des Endgeräts [Nicht-Routermodul] für mehr oder weniger Zeit (zehn Stunden oder mehr) oder sogar endgültig verloren geht und Sie diese wieder einschließen müssen. Leider kann das Jeedom-Team nichts dagegen tun. Es hängt vom Endgerät [Nicht-Router-Modul] ab, je nachdem, wie der Hersteller es konfiguriert hat (und nicht vom Jeedom-Plugin, das sich absolut nicht um den Routing-Teil kümmert)

>**HINWEIS**
>
> Das Diagramm der ZigBee-Netzwerke dient nur zur Information und basiert auf den Nachbarn, die die Module als solche deklarieren. Es handelt sich also nicht unbedingt um das tatsächliche Routing, sondern um die möglichen Routings.

Ein weiterer wichtiger Punkt: ZigBee-Gateways über WLAN sind weniger zuverlässig als ZigBee-Gateways über USB. Es liegt auf der Hand, aber wir möchten Sie hier daran erinnern, dass die Verwendung von USB-Gateways dringend empfohlen wird.
 

# FAQ

>**LQI oder RSSI ist N / A
>
>Normalerweise werden nach einem Neustart der ZigBee-Netzwerke die Werte geleert. Es muss gewartet werden, bis das Modul erneut angezeigt wird, damit die Werte zurückkehren

>**Ich habe Einschlussprobleme oder Fehler in den Typprotokollen ``TXStatus.MAC_CHANNEL_ACCESS_FAILURE``**
>
>Versuchen Sie, die USB-Erweiterung zu entfernen, wenn Sie eine haben, oder ändern Sie sie oder setzen Sie eine ein, wenn Sie keine haben

>**Ich habe die Fehler "Kann nicht an Gerät senden" oder "Fehler senden" oder "Fehler beim Senden der Nachricht""**
>
>Leider ist die Korrektur sehr kompliziert, es liegt normalerweise an einem Routing-Problem (das Routing ist mehr oder weniger im Zickzack fixiert und nicht symmetrisch : Das Modul kann eine andere Route verwenden, um Ihnen zu antworten, als die, mit der es gesprochen hat). Oft reicht die elektrische Abschaltung (z. B. Entfernen der Batterien) und Zurücksetzen des Stroms (oder Ersetzen der Batterien) aus, um das Problem zu beheben.

>**Ich habe seltsame Fehler bei gestapelten Modulen oder Einschlussproblemen**
>
>Wir haben festgestellt, dass ein großer Teil der Zickzackprobleme bei Batteriemodulen auf die Batterien zurückzuführen ist (oder auf Probleme beim Zurücksetzen der Module vor dem Einschluss). Auch wenn es neu erscheint, ist es ratsam, mit anderen zu testen, um sicherzugehen.

>**Ich habe Bedenken, die Werte der Ausrüstung zu aktualisieren**
>
> Es gibt 2 mögliche Fälle :
> - Es ist ein "altes Modul" in ZLL (siehe Konfiguration der Jeedom-Ausrüstung gibt an, ob es sich um ZHA oder ZLL handelt). In diesem Fall benötigen Sie unbedingt einen "Aktualisieren" -Befehl für Sie oder Jeedom, um eine Aktualisierung der Werte zu erzwingen. Wenn Sie es nicht haben, müssen Sie sich an den Support wenden, damit es zur nächsten stabilen Version hinzugefügt werden kann. Nach dem Beenden müssen Sie auf "Bestellungen neu erstellen" klicken, ohne sie zu löschen
> - Das Modul befindet sich in ZHA, daher ist es ein Anliegen der Inklusion  : Auf der Registerkarte "Aktion" der Gerätekonfiguration befindet sich eine Schaltfläche zum Zurücksetzen, um Aktionen nach dem Einschluss zu erzwingen. Denken Sie daran, das Modul wach zu halten, wenn es im Akkubetrieb ist.
