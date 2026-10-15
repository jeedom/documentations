# Deconz Plugin

Dieses Plugin ermöglicht es, über einen Conbee-Stick (1 oder 2) das Tool „deconz“ zu steuern, mit dem man Zigbee-Geräte (Xiaomi-Modul, Philips Hue, IKEA...) bedienen kann.

Dieses Plugin ist komplett cloudfrei, es stellt also keinerlei Verbindung nach außen (zu Servern von Drittanbietern) her und läuft zu 100 % lokal!!!!

Achtung: Zigbee funktioniert ganz anders als Z-Wave. Die Liste der enthaltenen Module wird überhaupt nicht auf dem Schlüssel gespeichert (auf dem Schlüssel wird überhaupt nichts gespeichert). Daher ist es einfach, den Schlüssel zu ersetzen (per Backup/Wiederherstellung; das Backup kann aus Jeedom abgerufen, aber nicht über Jeedom wiederhergestellt werden; für die Wiederherstellung muss man Deconz verwenden; bei einer lokalen Installation lautet die Adresse IP_JEEDOM:8484). Wenn der Schlüssel jedoch von einem System auf ein anderes übertragen wird, muss ebenfalls ein Backup/eine Wiederherstellung durchgeführt werden.

>**WICHTIG**
>
> Für dieses Plugin ist ein USB-Stick erforderlich [Conbee](http://bit.ly/2n4VyWc)

>**WICHTIG**
>
> Debian Strech (Debian 9) oder höher ist unbedingt erforderlich, damit das Plugin funktioniert

>**WICHTIG**
>
> Das Plugin ist nicht mit einer 32-Bit-Architektur (ältere Hardware) kompatibel. Das Modul ist mit allen Raspberry Pi-Modellen kompatibel.

>**WICHTIG**
>
> Auf dem Raspberry Pi müssen die seriellen Optionen deaktiviert werden, damit der Conbee-Stick ordnungsgemäß funktioniert (dies erfolgt per SSH in raspi-config)

# Kompatibles Modul

Hier finden Sie eine Liste der mit Deconz kompatiblen Module [hier](https://phoscon.de/en/conbee/compatible)

>**HINWEIS**
>
> Das Hinzufügen von Modulen wird nicht direkt von Jeedom SAS, sondern vom Hersteller des Deconz-Gateways verwaltet. Daher können wir nicht garantieren, dass eine Supportanfrage für ein neues Modul erfolgreich ist. Es wird daher dringend empfohlen, ein kompatibles Modul zu kaufen.

>**HINWEIS**
>
> Im Falle eines sogenannten kompatiblen Moduls, das nicht oder nur teilweise unterstützt wird, kann das Unternehmen Jeedom SAS nicht verantwortlich gemacht werden und ist nicht verpflichtet, bei der Korrektur von Bedenken Ergebnisse zu erzielen

# Plugins Konfiguration

Das Plugin unterstützt mehrere ConBee-Gateways (1 ConBee-Schlüssel pro Gateway). Ein ConBee-Gateway kann installiert werden auf:

- Jeedom selbst (Smart, RPi und x64_86 werden unterstützt)
- eine entfernte RPI
- oder jede andere Karte, die mit Deconz kompatibel ist.

Für die Ferninstallation finden Sie hier die [Dokumentation](https://phoscon.de/en/conbee/install)

Für die Installation auf Jeedom müssen Sie lediglich auf die Schaltfläche klicken, um Deconz lokal zu installieren.

>**WICHTIG**
>
> Sie dürfen die beiden Installationsmethoden NICHT auf demselben System ausführen, es ist die eine oder andere

>**HINWEIS**
>
>Um Deconz lokal zu aktualisieren, klicken Sie einfach erneut auf die Schaltfläche zur lokalen Installation von Deconz.

## Hinzufügen von Gateways

Um dem Plugin neue Gateways hinzuzufügen, muss man entweder auf der Konfigurationsseite des Plugins (Plugin -> Plugin-Verwaltung, dann deconz) auf „Erkennen“ klicken (das funktioniert nicht immer) oder man muss mindestens die IP-Adresse des Gateways und den Port manuell eingeben.

Anschließend in Deconz (Phoscon; wenn Sie es lokal installiert haben, müssen Sie die Adresse IPJEEDOM:8484 aufrufen) und dann im Menü oben links (die drei kleinen Striche) auf „Gateway“, dann auf „Erweitert“ und auf „App authentifizieren“ klicken. Schließlich müssen Sie innerhalb von 60 Sekunden die Plugin-Konfiguration in Jeedom aufrufen, die Liste der Gateways sicher speichern, falls Sie diese geändert haben, und dann auf „API-Schlüssel abrufen“ klicken.

# Deconz-Netzwerke

Achtung oben rechts haben Sie eine Auswahlschaltfläche, mit der Sie das zu betrachtende Gateway auswählen können

## Zusammenfassung

Hier finden Sie die wichtigsten Informationen zu Ihrem Deconz-Netzwerk (insbesondere die Version von Deconz und der Firmware).

## Aktion

Hier haben Sie folgende Möglichkeiten:

- Firmware aktualisieren (funktioniert nur, wenn kein anderer USB-Stick an den Computer angeschlossen ist)
- einen Reset durchführen (Achtung: Dadurch müssen alle Geräte neu zugeordnet werden)
- die Quelle für Firmware-Updates ändern (es wird davon abgeraten, daran etwas zu ändern)
- Kanal wechseln

## Knoten

Hier finden Sie eine Übersicht über die bekannten Knoten des Schlüssels mit dem Datum der letzten Kommunikation, der Firmware-Version und dem Stand der Batterie. Durch Klicken auf die Schaltfläche „Info“ werden die Details zum jeweiligen Knoten angezeigt.

>**HINWEIS**
>
>Hier sind die Knoten nach Typ unterteilt, sodass ein Modul je nach Anzahl der Typen mehrmals erscheinen kann

# Aufnahme

Um das Gerät hinzuzufügen, klicken Sie einfach auf die Schaltfläche „Hinzufügen“. Das System fragt Sie nach dem Gateway. Nach der Bestätigung haben Sie 3 Minuten Zeit, um die Verbindung herzustellen.

Um das Modul in den Einschlussmodus zu schalten, müssen Sie die Dokumentation für das betreffende Modul aufrufen

>**WICHTIG**
>
> Das Zigbee-Netzwerk unterscheidet sich stark vom Z-Wave-Netzwerk. Zigbee-Signale können zwar über einen Repeater geleitet werden, dies muss jedoch bereits bei der Einbindung des Moduls festgelegt werden. Wenn Sie nicht möchten, dass die Kommunikation über einen Repeater läuft, müssen Sie das Modul daher bei der Einbindung entweder so nah wie möglich am Conbee-Schlüssel platzieren (bitte beachten Sie, dass maximal 32 Module direkt mit dem Conbee-Schlüssel verbunden sein können).Oder so nah wie möglich am Repeater (jedes mit Strom versorgte Modul kann als Repeater fungieren).

# Synchronisierung

Sobald die Einbindung abgeschlossen ist, sollte Jeedom Sie direkt auf die Seite des neuen Moduls weiterleiten. Falls die Erkennung nicht funktioniert hat, klicken Sie einfach auf „Synchronisieren“.

# Gerät

Auf der ersten Registerkarte finden Sie alle Einstellungen für Ihre Geräte:

- Gerätename: Name Ihres Simulationsgeräts,
- Übergeordnetes Objekt: Gibt das übergeordnete Objekt an, zu dem das Gerät gehört,
- Aktivieren: Damit können Sie Ihre Geräte aktivieren,
- Sichtbar: Macht Ihre Geräte auf dem Dashboard sichtbar.
- Eine Konfigurationsschaltfläche, die Ihnen je nach Modul die verfügbaren Optionen anzeigt (Achtung: Jeedom zeigt Ihnen hier die Optionen so an, wie sie vom Modul angeboten werden; je nach Modul ergibt dies manchmal wenig Sinn).
- Allgemeine Informationen zum Modul
- die Wahl der visuellen

>**WICHTIG**
>
> Die Befehlsverwaltung funktioniert hier ganz anders als bei Z-Wave. Beim Einbinden eines Moduls gibt es mehrere mögliche Fälle:
> - Das Modul verfügt über eine spezielle Konfiguration: In diesem Fall sehen Sie die Anzeige des Moduls sowie eine angepasste Konfiguration (dies ist selten der Fall, da es bei Zigbee möglicherweise erforderlich ist).
> - Das Modul verfügt über eine generische Konfiguration, die von den Typen abhängt: Es gibt eine generische Benutzeroberfläche und die Befehle, die den Modultypen entsprechen (dies ist der häufigste Fall).
> - Das Modul und die Typen sind Jeedom unbekannt: In diesem Fall müssen Sie eine Supportanfrage stellen, damit sie im nächsten Update des Plugins hinzugefügt werden.

# Schutz

Das Plugin erstellt eine Sicherungskopie des auf dem Stick gespeicherten Netzwerks in einer lokalen Datei, die Sie über die Konfigurationsseite herunterladen können.

# Verpflegung

Bei der Wiederherstellung eines Jeedom-Backups werden die Geräte zwar wiederhergestellt, aber nicht mit dem Stick verbunden. Möglicherweise müssen Sie den Stick neu installieren. Dazu benötigen Sie das oben genannte Backup. Diese Datei befindet sich in ``plugins/deconz/data`` und wird in Phoscon integriert, allerdings muss zuvor die Dateiendung geändert werden ``.tar.gz`` in ``.dat``.

Wechseln Sie anschließend zur Benutzeroberfläche von Phoscon. Menü => Gateway => Backup-Option => Backup laden.

Jetzt müssen Sie nur noch einen API-Schlüssel abrufen, speichern und schließlich über die Plugin-Seite eine Synchronisierung durchführen.

# Firmware-Update

## Conbee II

Sie können dies direkt von jeedom aus tun, wenn der Schlüssel in der Plugin-Konfiguration eingesteckt ist. Es wird jedoch mehr als dringend empfohlen, dies unter Windows zu tun, indem Sie der offiziellen Deconz-Dokumentation folgen

## Conbee

Weiter zu [hier](https://www.dresden-elektronik.de/rpi/deconz-firmware/?C=M;O=D) und prüfen Sie, ob eine neue Firmware verfügbar ist; falls ja, laden Sie diese herunter

````
wget https://www.dresden-elektronik.de/rpi/deconz-firmware/deCONZ_Rpi_0x26300500.bin.GCF
sudo GCFFlasher_internal -d 0 -f deCONZ_Rpi_0x26300500.bin.GCF
````

>**WICHTIG**
>
>Achtung: Um das Firmware-Update durchführen zu können, müssen unbedingt alle Dämonen auf dem USB-Stick (Z-Wave, Enocean, RFxCom...) deaktiviert sein. Überprüfen Sie außerdem, ob der Stick tatsächlich auf 0 steht, und zwar mit ``GCFFlasher_internal -l``. Es wird empfohlen, die anderen Sticks abzuziehen

# Faq

>**Der Daemon startet und schaltet sich nach einer Minute von selbst aus**
>
>Wenn Sie RPI verwenden, sollte die serielle Schnittstelle nicht deaktiviert worden sein (dies erfolgt in raspi-config)

>**Ich habe ein Daylight-Gerät in der Knotenliste, aber nicht in Jeedom**
>
>Normalerweise handelt es sich hierbei um ein virtuelles, nicht löschbares Gerät, das von Deconz erstellt wurde. Da es sich nicht um ein „echtes“ Gerät handelt, wird es von Jeedom nicht angezeigt.

>**Ich erhalte die Fehlermeldung „Fehler bei der Anfrage: 127.0.0.1:8484/api/931559A482/sensors(POST), Daten: null, Fehler: 1 => nicht autorisierter Benutzer“**
>
>Sie haben Jeedom noch nicht die Verbindung zu Deconz gestattet. Gehen Sie dazu in Deconz (Phoscon; falls Sie es lokal installiert haben, geben Sie IPJEEDOM:8484 ein) und dann im Menü oben links (die drei kleinen Striche) auf „Gateway“, dann auf „Erweitert“ und auf „App authentifizieren“ klicken. Anschließend müssen Sie innerhalb von 60 Sekunden in Jeedom zur Plugin-Konfiguration wechseln. Speichern Sie die Gateway-Liste unbedingt, falls Sie sie geändert haben, und klicken Sie dann auf „API-Schlüssel abrufen“.

>**Mein Raspberry Pi (4) erkennt den Deconz-Stick nicht**
>
>Die Firmware des Sticks muss über ein anderes Betriebssystem (Windows) aktualisiert werden.

>**Ich kann meine Geräte steuern, erhalte aber keine Rückmeldung zu den Befehlen**
>
>Das liegt wahrscheinlich an einem Problem mit den Zeitzonen (deconz ist da sehr pingelig). Man muss:
>- Überprüfen Sie unter „DeConz-Netzwerke“, ob die Zeitzone und die Uhrzeit korrekt sind. Falls nicht, können Sie dies entweder in DeConz konfigurieren oder das Kontrollkästchen „Zeitzonen“ auf dem Gateway in der Konfiguration des DeConz-Plugins aktivieren (wenn Sie die letztere Methode wählen, müssen Sie eine Stunde warten, bis die Änderung wirksam wird).
>- Überprüfen Sie die Zeitzone Ihres Betriebssystems (insbesondere auf RPIs), die unbedingt korrekt eingestellt sein muss
