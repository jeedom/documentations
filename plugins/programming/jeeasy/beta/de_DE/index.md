# Jeeasy Plugin

Jeeasy ist der offizielle Konfigurationsassistent von Jeedom. Er führt Sie Schritt für Schritt durch die Inbetriebnahme Ihrer Anlage: Sprache, Haupteinstellungen, Installation der Plugins und Erstellung Ihrer ersten Räume.

>**WICHTIG**
>
>Für die Installation und Nutzung des Konfigurationsassistenten ist ein Market-Konto erforderlich.

## Assistenten starten

Bei der ersten Verbindung mit einer neuen Anlage schlägt Jeedom Ihnen vor, den Konfigurationsassistenten zu starten. Falls Ihre Market-Anmeldedaten noch nicht eingegeben wurden, werden Sie vor dem Start des Assistenten dazu aufgefordert.

<!-- Capture : fenêtre de première utilisation (choix assistant / sauvegarde) -->

Der Assistent kann außerdem jederzeit erneut aufgerufen werden:

- über die Schaltfläche **Konfigurationsassistent** im Fenster **Über**, das Sie durch Klicken auf die Jeedom-Version im Benutzermenü oben rechts aufrufen können,
- auf der Plugin-Seite über **Plugins → Programmierung → Jeeasy**, indem Sie auf **Konfigurationsassistent** klicken.

## Durch den Assistenten navigieren

Der Assistent wird im Vollbildmodus in Form einer Abfolge von Schritten angezeigt. Mit den Pfeilen am unteren Bildschirmrand können Sie zum nächsten Schritt wechseln oder zum vorherigen zurückkehren, und über die nummerierten Schaltflächen gelangen Sie direkt zu einem bestimmten Schritt.

<!-- Capture : assistant en plein écran avec les pastilles de navigation -->

Über die Schaltfläche **Assistenten schließen** am oberen Bildschirmrand können Sie den Assistenten jederzeit verlassen. In diesem Fall werden bestimmte Konfigurationen nicht vorgenommen und die vorgeschlagenen Plugins nicht installiert.

## Die Schritte des Assistenten

### Startseite

Wählen Sie die Sprache und das Land Ihrer Anlage aus.

### Allgemeine Einstellungen

Ändern Sie den Namen Ihrer Anlage und deren Zeitzone.

### Benutzeroberfläche

Wählen Sie das Design der Benutzeroberfläche aus und legen Sie fest, ob die Symbole farbig dargestellt werden sollen oder nicht.

### Netzwerke

Überprüfen Sie die Zugriffsadressen Ihrer Anlage:

- **Lokal**: Die Zugriffsadresse aus Ihrem lokalen Netzwerk, die standardmäßig automatisch verwaltet wird,
- **Extern**: Die Adresse für den Zugriff von außen. Wenn Ihr Service Pack den Fernzugriff umfasst, können Sie diesen direkt in diesem Schritt aktivieren.

### Plugins

Je nach Ihrem Service Pack schlägt Ihnen der Assistent eine Auswahl an Plugins vor. Bei einer **Atlas**-, **Luna**- oder **Freebox Delta**-Box wird das für Ihre Box bestimmte Plugin ganz oben in der Liste angezeigt. Klicken Sie auf die Plugins, die Sie installieren möchten. Diese werden nach Ihrer Bestätigung im nächsten Schritt installiert und aktiviert, wobei ihre Abhängigkeiten und Daemons automatisch verwaltet werden.

<!-- Capture : étape Plugins avec quelques plugins sélectionnés -->

### Objekte

Wählen Sie das Hauptobjekt aus, das am besten zu Ihrer Anlage passt (eine Wohnung, ein Haus oder ein Gebäude), und wählen Sie anschließend die Räume aus, die Sie anlegen möchten. Sie können auch kein Hauptobjekt festlegen.

<!-- Capture : étape Objets, choix des pièces -->

### Dienstleistungen

Entdecken Sie die Jeedom-Dienste, die Ihre Anlage ergänzen: Cloud-Backup, Fernzugriff, Sprachassistenten, Überwachung, SMS und Anrufe.

### Bereit zum Start

Ihre Installation ist konfiguriert. Die ausgewählten Plugins werden möglicherweise noch einige Minuten lang im Hintergrund installiert – je nach Anzahl bis zu 30 Minuten –, und Sie können Jeedom in der Zwischenzeit bereits nutzen. Klicken Sie auf das Häkchen unten rechts, um den Assistenten zu verlassen.

## Plugin-Seite

Die Plugin-Seite, die über **Plugins → Programmierung → Jeeasy** aufgerufen werden kann, bietet außerdem weitere Tools:

- **Meine Geräte erkennen**: Durchsucht Ihr lokales Netzwerk nach Geräten und schlägt Ihnen kompatible Plugins vor, mit denen Sie diese steuern können,
- **Mein Zuhause einrichten**: Einen neuen Raum anlegen oder einen bestehenden Raum bearbeiten,
- **Gerät hinzufügen**: Führt Sie durch das Hinzufügen eines Moduls entsprechend seiner Technologie,
- **Gerät einrichten**: Führt Sie durch die Einrichtung eines vorhandenen Geräts entsprechend dessen Typ.

<!-- Capture : page du plugin (remplace menuJeeasy.png) -->

![Geräteerkennung](../images/networkdiscover.png)
