# MyhomeSCS 

Plugin zur Verwendung des F454-Gateways

# Konfiguration 

Mit dem MyHomeSCS-Plugin können Sie über das F454-Gateway mit allen MyHomeSCS-Geräten von Legrand kommunizieren

>**Achtung**
>
>Um das Plugin verwenden zu können, muss die Authentifizierung des MyHome-Gateways deaktiviert und die IP-Adresse von JEEDOM in der Whitelist des Gateways autorisiert werden.

Nach dem Herunterladen vom Markt müssen Sie die IP-Adresse und die Ports konfigurieren, über die eine Verbindung zum F454-Gateway hergestellt wird. Interner Socket-Port : 55005 ist der Standardport, der vom MyHomeSCS-Dämon verwendet wird. Es ist besser, eine Änderung zu vermeiden, ohne zu wissen, wie der Dämon funktioniert.

![myhomescs1](../images/myhomescs1.png)

Nach der Konfiguration greifen Sie auf die MyHomeSCS-Plugin-Seite zu.

Links die Liste der MyHomeSCS-Module und in der Mitte die Registerkarten Allgemein, Informationen und Bestellungen.

![myhomescs2](../images/myhomescs2.png)

Das Menü auf der linken Seite zeigt alle MyHomeSCS-Module an, die bei der Installation der Hausautomation erkannt und / oder konfiguriert wurden. Im Moment erkennt das Plugin Legrand-Module, erkennt sie jedoch nicht automatisch. Sobald Jeedom das neue Modul erkannt hat, wird es erstellt, ohne ihm einen Befehl zuzuweisen. Dazu müssen Sie entweder ein Modul in der Dropdown-Liste ganz rechts auswählen (sofern das Modul in der Datenbank vorhanden ist) oder die Befehle einzeln erstellen.

Mit der Schaltfläche "Ausrüstung hinzufügen" können Sie bestimmte MyHomeSCS-Geräte hinzufügen, im Allgemeinen für Tests oder Bestellungen vom Typ "Management" oder "Spezial"".

![myhomescs3](../images/myhomescs3.png)

Wenn Sie in den Expertenmodus wechseln, haben Sie Zugriff auf andere Optionen : Befehlstyp, Einheit, Kommunikationstyp, Rohrahmen.

Im Feld Typ können Sie zwischen einem Befehl vom Typ Aktion oder einem Befehl vom Typ Info, dem Typ der Aktion oder den Informationen (Aktion, Cursor, Nachricht usw.) und der Aktion (EIN, AUS usw.) wählen.). Das Einheitenfeld wird verwendet, um die Einheit einzugeben, die für den Befehl oder für die Statusrückmeldung verwendet wird. Im Kommunikationsfeld können Sie die Art der Kommunikation auswählen (Multicast, Unicast oder Broadcast)). Das Befehlsfeld LogicalID oder raw wird verwendet, um die Informationen zu benennen oder den "raw" -Rahmen auszufüllen".

![myhomescs4](../images/myhomescs4.png)

Die Registerkarte Informationen gibt den Gerätetyp an.

![myhomescs6](../images/myhomescs6.png)

Auf der Registerkarte Allgemein können Sie den Namen des Geräts, sein Ziel in der Baumstruktur seiner Hausautomation und die Kategorie des Moduls (im Legrand-Jargon) auswählen : WHO), die Möglichkeit, das Modul in Jeedom inaktiv zu machen oder das Modul in der Schnittstelle sichtbar oder unsichtbar zu machen.

![myhomescs7](../images/myhomescs7.png)

Auf der Registerkarte Bestellungen werden alle Befehle aufgeführt (einige Elemente sind nur im Expertenmodus verfügbar).

Diese Befehle werden automatisch ausgefüllt, wenn Sie den Modultyp im Feld "Ausrüstung" auswählen". Die nützlichen Parameter sind Log, Display (der Befehl), Event (werden verwendet, um die Anforderung von Informationen über das Modul zu erzwingen).

![myhomescs8](../images/myhomescs8.png)

In einer nächsten Version und mit jedermanns Hilfe könnten wir uns vorstellen, dass die Module automatisch erkannt werden

## Liste der getesteten Module 

- Rollläden : F401
- DALI : F429
- Dimmer : F418
- 4x Schalter : F411
- Bewegungsmelder : 0 672 26

## Ausrüstung hinzufügen 

Die meisten Geräte werden dem MyHomeSCS-Plugin hinzugefügt, sobald sie erkannt werden

Sobald das Modul im Plugin erstellt wurde, stehen Ihnen zwei Lösungen zur Verfügung.

Entweder ist das Modul im Dropdown-Menü vorhanden : Ausrüstung und dort reicht es aus, sie auszuwählen und dann zu speichern, damit die Bestellungen automatisch hinzugefügt werden.

Entweder existiert das Modul (noch) nicht im Plugin und dann müssen Sie die Befehle einzeln erstellen.

Info-Befehle sind erforderlich, um den Status des Geräts abzurufen. Beispiel für Lichtmodule wird eine "Tasten" -Information erstellt, mit der der Status der Modultaste (z. B. EIN oder AUS) ermittelt werden kann). Diese Informationen werden insbesondere zum Verwalten von Widgets oder zum Auslösen von Szenarien verwendet

Mit Aktionsbefehlen können Sie Aktionen am Gerät ausführen. Abhängig von der Kategorie der Ausrüstung haben Sie unterschiedliche Möglichkeiten.

Legrand-Frames orientieren sich an 3 Variablen und haben die Form (für einen Frame vom Typ BUS-COMMAND) \*WHO \*WAS \* WO \#\#

Die WHO entspricht der Kategorie (Licht, Automatisierung usw.)). Wenn Sie im Rohrahmen \ eingeben#WHO\\\#, Dies wird durch die Gerätekategorie-ID ersetzt.

WAS entspricht der Aktions-ID. Wenn Sie \ eingeben#WHAT\\\#, Diese Variable wird durch den entsprechenden Code des ausgewählten Befehls ersetzt.

Schließlich entspricht das WHERE der Verkettung des Kommunikationsmodus (Unicast, Multicast, Broadcast) der ID.EINHEIT und Medien (* 9 für ZigBee). In meinem Plugin können Sie \\\ eingeben#WHERE* qui sera remplacé par le code correspondant au type de communication choisi et vous pouvez saisir \#IDUNIT \#, die durch die UNIT ersetzt wird, die den letzten 4 Ziffern der Mac-Adresse des Moduls entspricht, wird in eine Dezimalzahl konvertiert, gefolgt von der zweistelligen ID.

Grundsätzlich gibt es ``\*\#WHO\\\#\\\*\#WHAT\\\#\*\#WHERE\\\#\#IDUNIT\\\#\#\#``

Neben diesen Variablen können Sie beispielsweise den Rohrahmen direkt eingeben : ``\*2\*2\*\#121301\#9\#\#``

Informationen zu allen Arten von Frames, WHO, WHAT, WHERE-Werten, Kommunikationsarten oder Mediencodes finden Sie im Legrand-Dokument : Öffnen Sie Web Net Zigbee

Nachdem Sie alle Bestellungen für Ihre Geräte erstellt haben, können Sie eine "Geräte" -Datei im JSON-Format erstellen. Hierfür können Sie sich von vorhandenen Modulen inspirieren lassen.

Dann können Sie es mit der Community teilen (dank der Funktion : Senden Sie eine Konfiguration). Dadurch werden automatische Befehle für die nächsten Benutzer des MyHomeSCS-Plugins hinzugefügt.

Danke dir.

# Faq 

Versuchen Sie, es im Debug-Modus zu starten, um den Fehler zu sehen

Warten Sie eine Minute, um festzustellen, ob das Problem weiterhin besteht
In SSH tun : "sudo rm /tmp/myhomescscmd.pid"

Dies bedeutet, dass der Deamon gestartet wird, Jeedom dies jedoch nicht kann
Hör auf. Sie können entweder das gesamte System oder in ssh neu starten
mache "killall -9 myhomescs.py"

Stellen Sie sicher, dass Sie das Kontrollkästchen für die automatische Erstellung von aktiviert haben
Überprüfen Sie die Ausrüstung, ob der Deamon läuft. Du kannst
Starten Sie es auch im Debug neu, um zu sehen, ob es Nachrichten von empfängt
Ihre Ausrüstung
