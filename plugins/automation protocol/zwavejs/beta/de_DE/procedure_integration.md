# Integrationsverfahren

Um eine Konfigurationsdatei für ein neues Produkt zu erstellen, fügen Sie dieses Produkt zunächst in Jeedom hinzu.

![Alternativtext](../images/equipment.png)

Sobald Sie sich auf der Produktseite befinden, klicken Sie auf die Schaltfläche **„Knoten“**, um dieses modale Fenster anzuzeigen:

![Alternativtext](../images/modal_noeud.png)

Die folgenden wichtigen Informationen müssen abgerufen werden:

- **Benutzername:** XXX - XXX - XXX
- **Konfiguration:** XXX.json

Im Feld **Konfiguration** geben Sie den Namen an, den die Konfigurationsdatei erhalten soll.
Beispiel: `qmsw-0A1X8.json`

Über das Feld **ID** lässt sich Folgendes festlegen:
- der Ordner, in dem die Datei erstellt werden soll;
- Die in der Konfiguration anzugebende Version.

Die **erste Ziffer** der Kennung steht für den Ordner.
Beispiel: mit `1120`, muss die Datei erstellt werden `qmsw-0A1X8.json` im Ordner `shellyqubino_1120`.

> ⚠️ **Achtung:** Der Name des Ordners stimmt nicht immer mit dem Namen des Herstellers überein. Man muss sich **an der Nummer orientieren**!
> Beispiel: *Wintop* hat die Nummer `151`, was sich auf den Ordner bezieht `schlage_151`.

Die **zweite und dritte Ziffer** der Kennung geben die **Version** an.
Beispiel: Version `"2"` : `[ "142" ]`

![Alternativtext](../images/config_exemple.png)

- Für das Feld `"name"`, verwenden Sie die Produktvorlage.
Beispiel: `"QMSW-0A1X8"`
- Für das Feld `"type"`, geben Sie bitte den Produkttyp an: *Mikromodul, Relais, Öffnungsart* usw.

---

## Erstellung von Befehlen

Die automatische Erstellung von Bestellungen basiert auf dem Feld `"properties"`.

Klicken Sie zunächst auf die Schaltfläche **„Werte“**, woraufhin sich ein Modalfenster ähnlich dem folgenden öffnet:

![Alternativtext](../images/modal_valeurs.png)

Die Felder **„Manufacturer Specific“**, **„Configuration“** und **„Version“** können ignoriert werden.

Die relevanten Daten sind:
- die **Befehlsnamen**
- ihre **Klasse**

Bei **Benachrichtigungen** möchte man beispielsweise Befehle für Hitzewarnungen erstellen und dabei die Stufe sowie die Art des Alarms festlegen.

Dazu wird auf die Datei verwiesen `Notification.json` im Ordner `properties`.

![Alternativtext](../images/notification.png)

Sobald Sie sich in dieser Datei befinden, legen Sie fest, welche Art von Eigenschaft verwendet werden soll.
Beispiel: So erstellen Sie einen Alarmbefehl `"heat-sensor"`: In der Konfigurationsdatei fügen wir Folgendes hinzu:

```json
"Notification|heat-sensor": {
  "type": "heat-sensor"
}
```
