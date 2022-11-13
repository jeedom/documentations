# Z-Wave JS-Plugin

Das Z-Wave JS-Plugin ermöglicht **volle Kontrolle über das Z-Wave-Heimautomatisierungsprotokoll in Jeedom** basierend auf der Arbeit rund um die sehr berühmte Bibliothek **Z-Wave JS-Benutzeroberfläche**.

Das Z-Wave JS-Plugin macht Übertragungen zuverlässiger und sicherer, indem es das verwendet **MQTT-Protokoll**, Gleichzeitig bieten sie den erfahrensten Benutzern erweiterte Verwaltungsmöglichkeiten ihres Z-Wave-Netzwerks.

>**WICHTIG**
>
>Dieses Plugin ist kompatibel mit Debian 11 „Bullseye“ und ist daher das offizielle Plugin, das bevorzugt wird, um Ihr Z-Wave-Netzwerk in Jeedom zu verwalten.

# Configuration

Nach der Installation und Aktivierung des Plugins sollte die Installation von Abhängigkeiten beginnen, es sei denn, die automatische Verwaltung wurde zuvor deaktiviert. In diesem Fall müssen Sie auf die Schaltfläche klicken **Beleben** um diese Installationsphase einzuleiten. Das offizielle Plugin **MQTT-Manager** Da es Teil der notwendigen Abhängigkeiten ist, wird es während des Betriebs automatisch installiert und aktiviert, falls dies nicht bereits der Fall ist.

Der Rest der Abhängigkeiten besteht aus dem Herunterladen, Kompilieren und Konfigurieren der Bibliothek **Z-Wave JS-Benutzeroberfläche**.

>**INFORMATION**
>
>Die erste Installation von Abhängigkeiten einschließlich einer Kompilierungsphase dauert je nach Hardwarekonfiguration wahrscheinlich mehrere zehn Minuten. Abhängigkeitsaktualisierungen lassen sich anschließend viel schneller installieren.

## Plugin-Setup

Bei der Konfiguration des Plugins ist der wesentliche Punkt die richtige Auswahl der **Z-Wave-Controller-Port** entsprechend der physikalischen Schnittstelle, an der der Controller angeschlossen ist.

Andere mögliche Einstellungen sind :

- **Wenden Sie beim Einschließen den empfohlenen Konfigurationssatz an** : wendet direkt den vom Jeedom-Team empfohlenen Konfigurationssatz an, wenn ein neues Modul hinzugefügt wird *(conseillé)*.

- **Automatisches Entfernen ausgeschlossener Geräte** : entfernt automatisch Geräte, die vom Z-Wave-Netzwerk ausgeschlossen sind, wenn diese Option aktiviert ist. Andernfalls bleibt das Gerät in Jeedom, auch wenn es vom Netzwerk ausgeschlossen wurde. Das Gerät muss dann manuell gelöscht oder wiederverwendet werden, indem ihm eine neue Z-Wave-Kennung zugewiesen wird.

- **Präfix** : ermöglicht die Angabe des in MQTT zu verwendenden Präfixes *(Standard `zwave`)*.

### Sicherheitsschlüssel

Sicherheitsschlüssel müssen an einem sicheren Ort aufbewahrt werden. Wenn Sie diese Schlüssel verlieren, müssen die im sicheren Modus enthaltenen Geräte erneut gekoppelt werden. Die Schlüssel können angegeben werden, wenn die Felder leer oder ungültig sind, generiert das Plugin sie und Sie können sie später anzeigen.

>**WICHTIG**
>
>Wenn Ihr Controller mit dem Openzwave-Plugin verwendet wurde und Sie Module im sicheren Modus eingebunden hatten, ist die S0-Taste : "0102030405060708090A0B0C0D0E0F10".

## MQTT-Manager

Wie in der Präambel erläutert, benötigt das Z-Wave JS-Plugin Unterstützung für das MQTT-Protokoll, um zu kommunizieren, das offizielle Plugin **MQTT-Manager** wird daher als Unterstützung für diese Kommunikation dienen.

Mehrere Szenarien sind möglich :

- **Sie verwenden noch keinen MQTT-Broker** : In diesem Fall haben Sie nichts zu tun. Plugins **Z-Wave JS** und **MQTT-Manager** tauscht die notwendigen Informationen und Konfigurationen automatisch aus *(ein „Mosquitto“-Broker wird lokal auf der Maschine installiert)*.

- **Sie verwenden bereits das MQTT Manager-Plugin** : Es ist kein Eingreifen erforderlich, das Z-Wave JS-Plugin ruft automatisch die Verbindungsinformationen zum MQTT-Broker ab.

- **Sie verwenden bereits einen MQTT-Broker über ein anderes Plugin als MQTT Manager** : In dieser Situation müssen Sie den Modus auswählen **Remote-Broker** und Anmeldedaten angeben *(Adresse und Authentifizierung)* in der MQTT Manager-Plugin-Konfiguration.

- **Sie möchten einen MQTT-Broker unter Docker verwenden** : Sie müssen lediglich den Modus auswählen **lokaler Broker Docker** in der MQTT Manager Plugin-Konfiguration vor der Installation von `Mosquitto`.

In jedem Fall muss der MQTT-Manager-Plugin-Daemon gestartet werden, bevor Sie fortfahren können. Andernfalls werden Sie durch eine Meldung gewarnt, die den Start des Z-Wave JS-Daemons verhindert.

## Öffnen Sie das Zwave-Plugin

Es ist auch wichtig, den Fall des Vorhandenseins des OpenZwave-Plug-ins parallel zum Z-Wave-JS-Plug-in zu adressieren, beispielsweise die Zeit, um von einem zum anderen zu wechseln *(Siehe Absatz [**Migration von OpenZwave**](#Migration%20depuis%20OpenZwave))*.

Zunächst einmal sollten Sie wissen, dass es absolut kein Risiko gibt, die Z-Wave JS- und OpenZwave-Plugins parallel zu verwenden. Selbst bei Schwierigkeiten mit dem Z-Wave JS-Plugin reicht es aus, seinen Daemon zu stoppen und den des OpenZwave-Plugins neu zu starten, um ein genau identisches und funktionierendes Z-Wave-Netzwerk zu finden.

Es ist daher notwendig, die automatische Verwaltung zu stoppen und dann den OpenZwave-Plugin-Daemon zu stoppen, um den Z-Wave JS-Plugin-Daemon starten zu können. Wenn nicht, werden Sie erneut durch eine Meldung gewarnt, die den Start des Z-Wave JS-Daemons verhindert.

>**WICHTIG**
>
>Löschen Sie keine Geräte vorzeitig aus dem OpenZwave-Plugin, auch wenn es während des Tests deaktiviert wurde!

## 1. Start des Dämons

Wenn nicht anders angegeben, kann jetzt der Z-Wave JS-Daemon gestartet werden. Andernfalls sollte eine Meldung auf der Plugin-Konfigurationsseite erscheinen, um den Grund für die Blockierung zu identifizieren.

Wenn Sie das Z-Wave JS-Plugin mit einem leeren Controller verwenden, wird das Z-Wave-Netzwerk sofort gestartet und ist verfügbar, bereit für Moduleinbindungen.

Bei Verwendung mit einem Controller, der bereits in einem Z-Wave-Netzwerk enthalten ist, muss das Plugin funktionieren, das die Ausrüstung automatisch in Jeedom hochlädt, wenn die Module interviewt werden. Die erste vollständige Entdeckung eines Z-Wave-Netzwerks wird daher wahrscheinlich lange dauern, abhängig von der Art der verwendeten Module und ihrer Kommunikationsfrequenz.

Die Module erscheinen in zwei Stufen :
- Zuerst mit ihrer `node id` ohne Bild und ohne Identifikation.
- Sie werden dann ein zweites Mal identifiziert.

Sobald alle Module am Netz initiiert und somit identifiziert wurden, ist es wichtig, die Module am Batteriebetrieb aufzuwecken oder darauf zu warten, dass sie aufwachen. Erst ab diesem Moment können wir das Netzwerk als vollständig gestartet betrachten.

>**INFORMATION**
>
>Im Gegensatz zum OpenZwave-Plug-in erfolgt nach dieser ersten Interviewphase ein sofortiger Neustart des Netzwerks.

## Modulkonfiguration

Im Gegensatz zum Openzwave-Plugin gibt es keinen speziellen Abschnitt zum Konfigurieren von Modulen. Tatsächlich erfolgt die Konfiguration eines Moduls über die Befehlsklasse Configuration. Diese ist daher unter den anderen Klassenbefehlen der Module im Reiter „Werte“ sichtbar".

### Noeud

Mit dieser Schaltfläche (auf der Seite eines Geräts vorhanden) können Sie die Informationen der Module anzeigen.

- Die Registerkarte Zusammenfassung : Dieser gibt alle Identifikationsinformationen des Moduls sowie die Statusinformationen an
- Die Registerkarte Aktion : Es ermöglicht Ihnen, technische Aktionen auf einem Knoten auszuführen (normalerweise sollten Sie seine Funktionen nie berühren müssen, das Plugin verwaltet dies selbst. Jede Aktion wird auf der Seite selbst kurz beschrieben
- Die Statistik-Registerkarte : Wie der Name schon sagt, ermöglicht es Ihnen, die Kommunikationsstatistiken des Moduls anzuzeigen.
- Die Registerkarte Baum : sammelt alle vorherigen Informationen in Form eines technischen json.

### Valeurs

Mit dieser Schaltfläche (auf der Seite eines Geräts vorhanden) können Sie die Liste aller vom Modul verwalteten Befehle der zwave-Klasse abrufen.

Jeder Klassenbefehl kann aufgeklappt werden, um alle Befehle (nützlich oder nicht) zu sehen, die sich auf diesen Klassenbefehl beziehen.

Hier können Sie :

- Siehe Werteinformationen
- Wertänderung einer Aktie
- Moduleinstellungen ändern
- Erstellen Sie automatisch einen Info-Befehl in Jeedom (wenn Sie ihn brauchen oder wenn er in der Jeedom-Konfiguration fehlt))
- Erstellen Sie automatisch einen Aktionsbefehl in Jeedom (wenn Sie ihn brauchen oder wenn er in der Jeedom-Konfiguration fehlt))
- Konfigurieren Sie eine Abfrage (nur zu verwenden, wenn das Standardverhalten des Moduls nichts anderes zulässt, d. h. fast nie.


### Groupe

Mit dieser Schaltfläche (auf der Seite eines Geräts vorhanden) können Sie die Zuordnungen der Module verwalten.

- Sie können die derzeit aktiven Vereine sehen
- Lösche sie
- Fügen Sie mehr hinzu


## Inclusion

Im Moment sind S2-Einbindungen aus dem Jeedom-Plugin nicht möglich. Dies wird in einem zukünftigen Update kommen. Keine Sorge, die Plugin-Engine ist S2-kompatibel.

## Exclusion

## Synchroniser

## Z-Wave-Netzwerk

### Zusammenfassung

### Actions

### Statistiques

### Netzwerkdiagramm

### Routing-Tabelle

## Santé

## Statistiques

# Compatibilité

# Fehlerbehebung und Diagnose

## Migration von OpenZwave

Bevor Sie in Betracht ziehen, dauerhaft vom OpenZwave-Plugin zum Z-Wave JS-Plugin zu wechseln, müssen Sie unbedingt sicherstellen, dass alle Netzwerkmodule vollständig unterstützt werden. Dieser Schritt kann leicht mehrere Tage dauern, um alle Möglichkeiten und Szenarien zu validieren.

Sobald Sie sicher sind, dass das OpenZwave-Plugin nicht mehr erforderlich ist, können Sie das verwenden [**Austausch von Geräten und Steuerungen**](https://doc.jeedom.com/de_DE/core/4.3/replace){:target="\_blank"} des Kerns, um Ihre vorhandene Ausrüstung schnell und einfach auf das neue Plugin zu migrieren.

## Modul nicht oder schlecht erkannt

## Ersetzen Sie ein fehlerhaftes Modul
