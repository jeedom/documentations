
# BLEA-Plugin (Bluetooth-Werbung)

Dieses Plugin ist ein Plugin, mit dem Sie Ereignisse von bestimmten Bluetooth-Geräten (z. B. NIU von Nodon und anderen) empfangen können)

# Plugin Konfiguration

> **Spitze**
>
> Um das Plugin verwenden zu können, müssen Sie es wie jedes Jeedom-Plugin herunterladen, installieren und aktivieren.

Danach kommen Sie zu dieser Seite :

![gestion](./images/gestion.jpg)

Auf dieser Seite haben Sie wenig zu tun. Es wird dringend empfohlen, die Installation der Abhängigkeiten zu starten (auch wenn sie in Ordnung erscheinen). Dann am Ende der Aktualisierung der Seite.

> **Wichtig**
>
> Das Wichtigste dabei ist, dass Sie Ihren Bluetooth-Controller auswählen

Die andere auf dieser Seite verfügbare Option ist : **Ausgeschlossene Geräte automatisch löschen**. Dadurch wird die Jeedom-Ausrüstung entfernt, wenn sie ausgeschlossen ist.

Sie können auch den Status von Abhängigkeiten überprüfen und neu starten. Starten Sie bei Problemen mit dem Plugin die Abhängigkeiten immer neu, auch wenn Sie im Zweifelsfall in Ordnung sind.

# Das Plugin

Rendez vous dans le menu Plugins &gt; Protocole Domotique pour retrouver le plugin.

![blea screenshot1](./images/blea_screenshot1.jpg)

Auf dieser Seite sehen Sie die bereits enthaltenen Module.

Im oberen Teil dieser Seite befinden sich mehrere Schaltflächen.

- Einschlussschaltfläche : Mit dieser Schaltfläche können Sie Jeedom in Inclusion einfügen.
- Ausschlussschaltfläche : Mit dieser Schaltfläche können Sie Jeedom ausschließen.
- Konfigurationsschaltfläche : Diese Schaltfläche öffnet das Plugin-Konfigurationsfenster.
- Gesundheitstaste : Mit dieser Schaltfläche erhalten Sie einen Überblick über den Zustand aller Ihrer Module.

![blea screenshot2](./images/blea_screenshot2.jpg)

# Equipement

Wenn Sie auf eines Ihrer Module klicken, gelangen Sie auf die Konfigurationsseite dieses Moduls. Wie überall in Jeedom können Sie hier auf der linken Seite :

- Geben Sie dem Modul einen Namen.
- Aktivieren / sichtbar machen oder nicht.
- Wählen Sie Ihr übergeordnetes Objekt.
- Ordnen Sie eine Kategorie zu.
- Definieren Sie eine Kommunikationsüberwachungsverzögerung für bestimmte Module.
- Schreibe einen Kommentar.

Auf der rechten Seite finden Sie :

- Das Profil des Geräts (im Allgemeinen automatisch erkannt, wenn das Modul dies zulässt).
- Wählen Sie ein Modell, wenn für dieses Profil mehrere Modelle verfügbar sind.
- Siehe das Bild.

# Welche Module

Derzeit werden nur bestimmte Module erkannt.

## NIU-Fall

NIU ist sehr einfach einzuschließen. Setzen Sie Jeedom in Inclusion und drücken Sie die Taste (so einfach ist das).

Sobald die NIU erstellt wurde, erhalten Sie diese :

![blea screenshot3](./images/blea_screenshot3.jpg)

Sie haben 4 Bestellungen :

![blea commands niu](./images/blea_commands_niu.jpg)

- ButtonId : gibt eine digitale Darstellung der Art der Unterstützung (ideal für Szenarien)
  - 01 : einfache Presse
  - 02 : doppelte Unterstützung
  - 03 : lange drücken
  - 04 : relachement
- Tasten : gibt eine Textdarstellung der Art der Unterstützung
- Rssi : gibt den Signalstärkewert an
- Batterie : gibt den Batteriewert an

## Andere Module

Andere Module wie Beacon NUT, Fitbit Bracelet usw. können enthalten sein.

Sie ermöglichen die Anwesenheitserkennung mit Erkennung in einem 1-Minuten-Slot.

Offensichtlich werden viele andere Module hinzugefügt.

# Remote-Antennenkonfiguration

Bluetooth hat eine relativ begrenzte Reichweite. Je nach Standort Ihrer Jeedom-Box befindet sich möglicherweise ein Teil Ihres Hauses außerhalb der Reichweite Ihrer Antenne.
Aber es gibt eine Lösung: Es ist möglich, das Netzwerk durch die Installation zusätzlicher Antennen zu erweitern.

Am einfachsten ist es, einen raspBerry pi zu verwenden (vorhanden oder dediziert, je nachdem, welche Ausrüstung Sie bereits haben). Wir gehen hier davon aus, dass das raspBerry bereits mit einem Raspbian installiert ist und dass sowohl ssh als auch Bluetooth aktiviert sind.

## Erstellt die Antenne

Sie müssen zur Plugin-Seite (Plugins> Home Automation Protocol) gehen und auf "Antennen" klicken"

1) Klicken Sie auf "Hinzufügen"
2) Wählen Sie einen Namen
3) Geben Sie die IP und den Port ein (standardmäßig 22))
4) Geben Sie den Benutzernamen (standardmäßig "pi") und das Passwort ein
5) Geben Sie das Bluetooth-Gerät auf dem Pi ein ("hci0" bei einer Standardinstallation)
6) Speichern

## Installation des Daemons

Wenn kein Fehler aufgetreten ist und Ihre Antenne im Plugin gut erstellt wurde, müssen Sie jetzt die erforderlichen Abhängigkeiten installieren und den Dämon auf der Antenne starten, der die Verbindung zwischen den Bluetooth-Geräten unter herstellt Reichweite der Antenne und des Plugins (und damit Jeedom).

1) Klicken Sie auf die Schaltfläche "Dateien senden". Es kann einige Zeit dauern. Bitte warten Sie. Ein grünes Banner, das den Erfolg bestätigt, wird rot angezeigt, wenn ein Problem aufgetreten ist. Überprüfen Sie in diesem Fall das "Blea" -Protokoll und die Konfiguration (IP, Benutzer, Kennwort), ...)
2) Klicken Sie anschließend auf die Schaltfläche "Abhängigkeiten starten"". Auch hier kann es einige Zeit dauern, bitte warten Sie. Ein grünes Banner bestätigt den Erfolg oder ein rotes, wenn nicht (überprüfen Sie das Blea-Protokoll)
3) Optional können Sie das Abhängigkeitsinstallationsprotokoll manuell wiederherstellen, indem Sie auf "Abhängigkeitsprotokoll" klicken und das Protokoll überprüfen. Eine bestimmte Protokolldatei ist in der Plugin-Konfiguration verfügbar.
4) Wenn alles gut geht, können Sie auf "Daemon starten" klicken. Nach maximal einer Minute sollte das Datum der letzten Kommunikation aktualisiert werden. Dies bedeutet, dass der Daemon korrekt mit dem BLEA-Plugin kommuniziert.
5) Letzter optionaler, aber empfohlener Schritt: Aktivieren Sie die automatische Verwaltung des Dämons, indem Sie auf die entsprechende Schaltfläche klicken. Dies führt dazu, dass das Plugin bei einem Verbindungsverlust automatisch versucht, den Remote-Daemon neu zu starten (nützlich, wenn Ihr Remote-Pi vorübergehend vom Stromnetz getrennt oder nach Aktualisierungen neu gestartet wurde).


# Liste der kompatiblen Geräte

Einige Geräte wie das lywsd03 müssen mindestens einmal zu mihome hinzugefügt werden, bevor sie aktiv sind

Sie können finden [hier](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=blea) die Liste der kompatiblen Geräte
