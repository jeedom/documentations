# Z-Wave JS-Plugin

Das Z-Wave-JS-Plugin ermöglicht **die vollständige Steuerung des Z-Wave-Hausautomationsprotokolls in Jeedom** und basiert auf der Arbeit rund um die sehr renommierte Bibliothek **Z-Wave JS UI**.

Das Z-Wave-JS-Plugin sorgt durch die Verwendung des **MQTT-Protokolls** für zuverlässige und sichere Datenübertragungen und bietet gleichzeitig erfahrenen Nutzern erweiterte Möglichkeiten zur Verwaltung ihres Z-Wave-Netzwerks.

>**WICHTIG**
>
>Dieses Plugin ist mit Debian 11 „Bullseye“ kompatibel und daher das offizielle Plugin der Wahl für die Verwaltung Ihres Z-Wave-Netzwerks in Jeedom.

# Aufbau

Nach der Installation und Aktivierung des Plugins sollte die Installation der Abhängigkeiten beginnen, sofern die automatische Verwaltung nicht zuvor deaktiviert wurde. In diesem Fall müssen Sie auf die Schaltfläche **Neu starten** klicken, um diese Installationsphase einzuleiten. Da das offizielle Plugin **MQTT Manager** zu den erforderlichen Abhängigkeiten gehört, wird es im Rahmen dieses Vorgangs automatisch installiert und aktiviert, sofern dies nicht bereits geschehen ist.

Die übrigen Voraussetzungen umfassen das Herunterladen, Kompilieren und Konfigurieren der Bibliothek **Z-Wave JS UI**.

>**INFORMATION**
>
>Da die Erstinstallation der Abhängigkeiten eine Kompilierungsphase umfasst, kann sie je nach Ihrer Hardwarekonfiguration mehrere Dutzend Minuten dauern. Die Installation von Updates für die Abhängigkeiten geht danach deutlich schneller.

## Plugin-Setup

Bei der Konfiguration des Plugins ist es besonders wichtig, den richtigen **Port des Z-Wave-Controllers** auszuwählen, der der physischen Schnittstelle entspricht, an die der Controller angeschlossen ist.

Weitere mögliche Einstellungen sind:

- **Empfohlene Konfiguration anwenden**: Wendet direkt die vom Jeedom-Team empfohlene Konfiguration an, wenn ein neues Modul hinzugefügt wird *(empfohlen)*.

- **Ausgeschlossene Geräte löschen**: Wenn diese Option aktiviert ist, werden ausgeschlossene Geräte automatisch aus dem Z-Wave-Netzwerk gelöscht. Andernfalls bleiben die Geräte in Jeedom erhalten, auch wenn sie aus dem Netzwerk ausgeschlossen wurden. Das Gerät muss dann manuell gelöscht oder durch Zuweisung einer neuen Z-Wave-ID wiederverwendet werden.

- **MQTT-Präfix**: Hier können Sie das in MQTT zu verwendende Präfix angeben *(`zwave` (Standard)*.

### Sicherheitsschlüssel

Die Sicherheitsschlüssel müssen sorgfältig aufbewahrt werden. Wenn Sie diese Schlüssel verlieren, müssen die im Sicherheitsmodus registrierten Geräte erneut gekoppelt werden. Die Schlüssel können angegeben werden; sind die Felder leer oder ungültig, generiert das Plugin neue Schlüssel, die Sie anschließend einsehen können.

>**WICHTIG**
>
>Wenn Ihr Controller mit dem Openzwave-Plugin verwendet wurde und Sie Module im sicheren Modus eingebunden hatten, lautet der S0-Schlüssel: `0102030405060708090A0B0C0D0E0F10`.

## MQTT-Manager

Wie bereits eingangs erläutert, benötigt das Z-Wave-JS-Plugin zur Kommunikation die Unterstützung des MQTT-Protokolls; das offizielle Plugin **MQTT Manager** dient daher als Grundlage für diese Kommunikation.

Es sind mehrere Szenarien denkbar:

- **Sie verwenden noch keinen MQTT-Broker**: In diesem Fall müssen Sie nichts unternehmen. Die Plugins **Z-Wave JS** und **MQTT Manager** tauschen die erforderlichen Informationen und Konfigurationen automatisch aus *(ein Broker `Mosquitto` wird insbesondere lokal auf dem Rechner installiert)*.

- **Sie nutzen bereits das MQTT Manager-Plugin**: Es sind keine weiteren Schritte erforderlich, das Z-Wave JS-Plugin ruft die Verbindungsdaten zum MQTT-Broker automatisch ab.

<!-- - **Sie verwenden bereits einen MQTT-Broker über ein anderes Plugin als den MQTT Manager**: In diesem Fall müssen Sie den Modus **„Remote-Broker“** auswählen und die Verbindungsdaten *(Adresse und Authentifizierung)* in der Konfiguration des MQTT Manager-Plugins angeben.

- **Sie möchten einen MQTT-Broker unter Docker verwenden**: Wählen Sie dazu einfach den Modus **„lokaler Docker-Broker“** in der Konfiguration des MQTT Manager-Plugins aus, bevor Sie die Installation durchführen. `Mosquitto`. -->

In jedem Fall muss der Daemon des MQTT-Manager-Plugins gestartet werden, bevor Sie fortfahren können. Andernfalls wird eine Meldung angezeigt, die den Start des Z-Wave-JS-Daemons verhindert.

## Öffnen Sie das Zwave-Plugin

Es ist ebenfalls wichtig, den Fall zu behandeln, in dem das OpenZwave-Plugin parallel zum Z-Wave-JS-Plugin vorhanden ist, beispielsweise um von einem zum anderen zu wechseln *(siehe Absatz [**Migration von OpenZwave**](#Migration%20depuis%20OpenZwave))*.

Zunächst einmal ist zu beachten, dass die parallele Nutzung der Plugins „Z-Wave JS“ und „OpenZwave“ absolut risikolos ist. Selbst bei Problemen mit dem „Z-Wave JS“-Plugin reicht es aus, dessen Daemon zu beenden und den des „OpenZwave“-Plugins neu zu starten, um wieder ein identisches und funktionsfähiges Z-Wave-Netzwerk zu erhalten.

Sie müssen daher zunächst die automatische Verwaltung deaktivieren und anschließend den Daemon des OpenZwave-Plugins beenden, um den Daemon des Z-Wave-JS-Plugins starten zu können. Andernfalls wird erneut eine Meldung angezeigt, die den Start des Z-Wave-JS-Daemons verhindert.

>**WICHTIG**
>
>Entfernen Sie keine Geräte vorzeitig aus dem OpenZwave-Plugin, auch wenn diese während der Tests deaktiviert sind!

## 1. Start des Dämons

Sofern keine gegenteilige Meldung angezeigt wird, kann der Z-Wave-JS-Daemon nun gestartet werden. Andernfalls sollte auf der Konfigurationsseite des Plugins eine Meldung erscheinen, um den Grund für die Blockierung zu ermitteln.

Wenn Sie das Z-Wave-JS-Plugin mit einem leeren Controller verwenden, wird das Z-Wave-Netzwerk sofort gestartet und ist verfügbar – bereit für das Hinzufügen von Modulen.

Bei der Verwendung mit einem Controller, der bereits Teil eines Z-Wave-Netzwerks ist, sollte man das Plugin seine Arbeit verrichten lassen, das die Geräte im Zuge der Modulabfragen automatisch in Jeedom anzeigt. Die erste vollständige Erkennung eines Z-Wave-Netzwerks kann daher je nach Art der verwendeten Module und deren Kommunikationsfrequenz einige Zeit in Anspruch nehmen.

Die Module werden in zwei Schritten eingeführt:
- Zunächst einmal mit ihrer `node id` ohne Bild und ohne Identifizierung.
- Anschließend werden sie in einem zweiten Schritt identifiziert.

Sobald alle netzbetriebenen Module initialisiert und somit identifiziert sind, ist es wichtig, die batteriebetriebenen Module zu aktivieren oder abzuwarten, bis sie sich selbst aktivieren. Erst ab diesem Zeitpunkt kann das Netzwerk als vollständig in Betrieb genommen betrachtet werden.

>**INFORMATION**
>
>Im Gegensatz zum OpenZwave-Plugin erfolgen die Netzwerk-Neustarts nach dieser ersten Erkennungsphase fortan sofort.

Sollten Sie nach Abschluss dieser Phase *(die, wie wir noch einmal betonen möchten, langwierig sein kann)* feststellen, dass ein Modul, das vom Openzwave-Plugin einwandfrei unterstützt wurde, vom Z-Wave JS-Plugin nicht unterstützt wird, lesen Sie bitte den Abschnitt [**Modul wird nicht oder nur fehlerhaft erkannt**](#Module%20non%20ou%20mal%20reconnu).

## Modulkonfiguration

Im Gegensatz zum Openzwave-Plugin gibt es keinen eigenen Abschnitt für die Konfiguration der Module. Die Konfiguration eines Moduls erfolgt nämlich über den Befehl „Klasse Configuration“. Dieser ist daher unter den anderen Klassenbefehlen des Moduls im Bereich **Werte** zu finden.

### Knoten

Über diese Schaltfläche auf der Seite eines Geräts können Sie die Informationen des Moduls über mehrere Registerkarten anzeigen:

- **Zusammenfassung**: Zeigt alle Identifikationsdaten des Moduls sowie Statusinformationen an.

- **Aktionen**: Ermöglicht die Ausführung technischer Aktionen an einem Knoten. Jede Aktion wird dort kurz beschrieben.
>**INFORMATION**
>
>Normalerweise sollten Sie diese Funktionen nie anwenden müssen, da das Plugin dies selbstständig regelt.

- **Statistiken**: Wie der Name schon sagt, können hier die Kommunikationsstatistiken des Moduls eingesehen werden.

- **Baum**: Fasst alle vorangegangenen Informationen in Form eines technischen JSON-Objekts zusammen.

### Werte

Über diese Schaltfläche auf der Seite eines Geräts können Sie eine Liste aller vom Modul verwalteten Z-Wave-Befehle aufrufen.

Jede davon kann durch Anklicken aufgeklappt werden, um alle Befehle *(nützliche wie auch unnütze)* anzuzeigen, die zu dieser Befehlsklasse gehören.

Dieses Fenster bietet zahlreiche Möglichkeiten:

- Anzeige der Messwerte,
- Den Wert einer Aktion ändern,
- Die Einstellungen des Moduls ändern,
- Erstellen Sie automatisch einen Info-Befehl in Jeedom *(falls Sie diesen benötigen oder er in der Jeedom-Konfiguration fehlt)*,
- Erstellen Sie automatisch einen Aktionsbefehl in Jeedom *(falls Sie diesen benötigen oder er in der Jeedom-Konfiguration fehlt)*,
- Polling *(erzwungene Kommunikation)* konfigurieren. Nur dann verwenden, wenn das Standardverhalten des Moduls keine andere Möglichkeit zulässt, d. h. so gut wie nie.

### Band

Über diese Schaltfläche auf der Seite eines Geräts können Sie die Zuordnungen des Moduls verwalten und folgende Aktionen durchführen:

- Aktuell aktive Vereine anzeigen,
- Diese löschen,
- Weitere hinzufügen.

## Einschlüsse/Ausschlüsse

Über die Schaltfläche **Inclusions** auf der Seite, auf der alle Z-Wave-JS-Geräte aufgelistet sind, kann der Controller in den Modus **Inclusion** *(Standard, S0, S2)* oder in den Modus **Exclusion** umgeschaltet werden.

>**INFORMATION**
>
>Derzeit sind S2-Einbindungen nicht direkt über das Plugin möglich. Diese Funktion wird in einem kommenden Update implementiert, da die Plugin-Engine bereits gut mit S2 kompatibel ist.

## Zu synchronisieren

Zur Erinnerung: Bei Z-Wave sind alle Module, aus denen das Netzwerk besteht, direkt mit dem Controller verbunden. Bestimmte Controller mit Akku *(wie der Aeon-labs Z-Stick GEN5)* ermöglichen es sogar, Module einzubinden, ohne an eine Box angeschlossen zu sein.

Über die Schaltfläche **Synchronisieren** können dann die vom Controller erfassten Geräte automatisch in Jeedom angelegt werden. Ebenso werden die Geräte, die den vom Controller ausgeschlossenen Peripheriegeräten entsprechen, automatisch gelöscht, wenn die Option **Löschung ausgeschlossener Peripheriegeräte** in der allgemeinen Konfiguration des Plugins aktiviert ist.

## Z-Wave-Netzwerk

### Zusammenfassung

### Anteile

### Statistiken

### Netzwerkdiagramm

### Routing-Tabelle

## Gesundheit

## Statistiken

# Kompatibilität

# Fehlerbehebung und Diagnose

## Migration von OpenZwave

Bevor man einen endgültigen Wechsel vom OpenZwave-Plugin zum Z-Wave JS-Plugin in Betracht zieht, muss unbedingt sichergestellt werden, dass alle Module des Netzwerks vollständig unterstützt werden. Dieser Schritt kann leicht mehrere Tage in Anspruch nehmen, da alle Möglichkeiten und Szenarien geprüft werden müssen.

Sobald Sie sicher sind, dass das OpenZwave-Plugin nicht mehr benötigt wird, können Sie das Tool [**Austausch von Geräten und Steuerungen**](https://doc.jeedom.com/de_DE/core/4.3/replace){:target="\_blank"} vom Core, um Ihre bestehenden Geräte schnell und einfach auf das neue Plugin umzustellen.

## Modul nicht oder schlecht erkannt

Wenn Sie feststellen, dass ein Modul vom Z-Wave-JS-Plugin nicht oder nur fehlerhaft erkannt wird **, obwohl es vom OpenZwave-Plugin einwandfrei unterstützt wurde**, sollten Sie zunächst sicherstellen, dass die Daten im Fenster **Werte** *(aufrufbar über die Geräteseite)* tatsächlich aktualisiert werden, wenn das Modul physisch betätigt wird.

Sobald Sie sich vergewissert haben, dass das Modul selbst erkannt wird und seine Werte aktualisiert werden, müssen Sie, falls bestimmte Befehle weiterhin nicht funktionieren,[Öffnen Sie eine Jeedom-Supportanfrage](https://doc.jeedom.com/de_DE/premiers-pas/#Les%20demandes%20de%20support%20(ou%20tickets)){:target="\_blank"} wobei unbedingt folgende Angaben zu machen sind:
- Hersteller und genaue Bezeichnung des betreffenden Moduls,
- Beschreibung der nicht funktionalen Befehle,
- Screenshot der **Knoteninformationen** im gleichnamigen Fenster,
- Screenshots von **jedem Block** im Fenster **Knotenwerte**

Um noch einen Schritt weiter zu gehen, können Sie das Modul manuell betätigen und Screenshots der daraus resultierenden Wertänderungen erstellen – jeweils im Fenster „Werte des Knotens“.

>**INFORMATION**
>
>Die Bearbeitung einer Supportanfrage kann einige Zeit in Anspruch nehmen.
Wenn Sie die Integrationsdatei selbst erstellen möchten, können Sie die detaillierten Anweisungen im [Integrationsleitfaden](procedure_integration.md).


>**WICHTIG**
>
>Wir weisen ausdrücklich darauf hin, dass das Team zunächst nur Anfragen zu Modulkonfigurationen bearbeiten wird, die alle oben genannten Elemente enthalten und bereits mit dem Openzwave-Plugin funktionsfähig sind. Es kann vorkommen, dass Sie Ihre Screenshots nicht direkt bei der Erstellung des Tickets hinzufügen können – machen Sie sich keine Sorgen, Sie können diese zu einem späteren Zeitpunkt als Antwort auf Ihre Anfrage nachreichen.

>**INFORMATION**
>
>Durch physisches Betätigen des Moduls können Sie die Zeile identifizieren, deren Werte sich im Fenster „Knotenwerte“ entsprechend ändern und für die noch kein Befehl erstellt wurde oder dieser nicht funktionsfähig ist. Am Ende der Zeile befindet sich eine Schaltfläche mit einem Stift-Symbol, über die Sie den entsprechenden Befehl automatisch erstellen können. Dadurch haben Sie die Möglichkeit, Ihr Modul trotz fehlender oder fehlerhafter Konfiguration zu nutzen.

<!-- ## Remplacer un module défaillant -->

# FAQs

>**Ist es möglich, Z-Wave JS UI im Remote-Modus zu verwenden?**
>
>Im Roadmap des Jeedom-Teams für das Z-Wave-JS-Plugin ist die Einführung dieser Funktion tatsächlich für die kommenden Monate vorgesehen, allerdings ohne Dringlichkeit, da es sich nicht um eine für den ordnungsgemäßen Betrieb des Plugins unverzichtbare Funktion handelt.

>**Ist es möglich, den Z-Wave-WebSocket-Server von JS UI zu aktivieren?**
>
>Für den reibungslosen Betrieb des Plugins und von Jeedom im Allgemeinen ist es nicht möglich, den Z-Wave-WebSocket-Server von JS UI zu aktivieren; der in Kürze verfügbare Remote-Modus wird jedoch dieselben Anwendungsfälle ermöglichen.
