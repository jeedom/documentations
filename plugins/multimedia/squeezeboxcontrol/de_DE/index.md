# SqueezeBox Control Plugin 

Mit diesem Plugin können Sie Ihre gesamte SqueezeBox-Umgebung steuern

![squeezeboxcontrol icon](../images/squeezeboxcontrol_icon.png)

Mit diesem Plugin können Sie alle Ihre SqueezeBoxen scannen, um sie nach Möglichkeit dem richtigen Teil zuzuweisen. Und um sie steuern, synchronisieren, zum Sprechen bringen usw. zu können.

# Konfiguration 

Wie bei jedem Jeedom-Plugin müssen Sie das Plugin vom Markt herunterladen und dann aktivieren. Danach beginnt der Konfigurationsschritt.

**Besondere Aufmerksamkeit für Benutzer von LMS auf SYNOLOGY**

Wenn Sie LMS für Ihre Nas Synology verwenden, sollten Sie wissen, dass die von Synology angebotene Version alt ist. Es gibt jedoch ein Repository, das von der neuesten LMS-Version 7.9 profitiert. Ich empfehle Ihnen dringend, diese Version auf Ihrem NAS zu installieren, wodurch viele Fehler behoben werden.

[VERSION 7.9 für Synologie](http://forums.slimdevices.com/showthread.php?103636-Test-Repo-for-LMS-7-9-0-on-Synology-DSM-5-*)

**Besonderes Augenmerk auf Benutzer des SqueezeBox-Plugins (das zweite) auf dem Markt*

Um das Risiko eines Konflikts zu vermeiden, wenn Sie das andere SqueezeBox-Plugin verwenden, empfehle ich Ihnen dringend, es zu deaktivieren und die Erweiterung auf dem LMS-Server zu deinstallieren.

## Installation und Konfiguration des LMS-Plugins

Um von einer guten Synchronisation zwischen Jeedom und Ihrem SqueezeBox-Server zu profitieren, muss ein Plugin auf dem SqueezeBox-Server installiert und konfiguriert werden. Dazu müssen Sie nur das Repository hinzufügen, das auf der Plugin-Seite wie folgt angegeben ist :

Klicken Sie auf Parameter :

![configlms1](../images/configlms1.jpg)

Füllen Sie dann auf der Registerkarte Plugins unten das von Jeedom bereitgestellte Repository aus und bewerben Sie sich:

![configlms2](../images/configlms2.jpg)

Sie können dann das JeedomSBcontrol-Plugin installieren. Der Server fordert Sie auf, es neu zu starten. Dies muss durchgeführt werden. Nach dem Neustart müssen Sie das JeedomSBcontrol-Plugin konfigurieren, indem Sie auf Parameter klicken. Sie müssen die Jeedom-IP-Adresse sowie den API-Schlüssel eingeben. Wenn Sie / jeedom verwenden müssen, ist dies auch der Ort, an dem Sie es betreten können.

Nachdem die Parameter eingegeben wurden, müssen Sie den LMS-Server ein letztes Mal neu starten (seien Sie vorsichtig, wenn Sie die Parameter ändern, müssen Sie den LMS-Server neu starten, damit die Änderungen wirksam werden

## Installation und Konfiguration des Jeedom Plugins. 

Die Konfiguration des Jeedom-Plugins ist recht einfach.

![configjeedom1](../images/configjeedom1.jpg)

Sie müssen nur die IP-Adresse Ihres LMS-Servers eingeben. Wenn Sie einen anderen Port als Port 9000 haben, können Sie diesen auch in das Feld Port eingeben. Und wenn Sie LMS mit einem Passwort geschützt haben, können Sie es auch eingeben. In 90% der Fälle ist nur die IP-Adresse erforderlich.

Sobald Sie fertig sind, speichern Sie einfach. Sobald die Sicherung abgeschlossen ist, können Sie auf LAUNCH klicken, um die Selbsterkennung Ihrer SqueezeBoxs zu starten.

Wenn der Scan abgeschlossen ist, sollten Sie die Version Ihres LMS-Servers sowie die Anzahl der erkannten SB sehen.

Um das Ergebnis zu beobachten, gehen Sie einfach zu PLugons / Multimedia / SqueezeBox Control:

![configjeedom2](../images/configjeedom2.jpg)

Sie gelangen auf die folgende Seite :

![configjeedom3](../images/configjeedom3.jpg)

Sie werden sehen, dass Ihre Squeezeboxen angezeigt wurden und diejenigen, die einem Objekt zugewiesen werden könnten.

Auf dieser Seite sehen Sie zusätzlich zu Ihrer Ausrüstung oben drei Optionen :

- **Platte** : ermöglicht Ihnen den Zugriff auf das spezifische SqueezeBox-Bedienfeld, das auch hier verfügbar ist :
![panel1](../images/panel1.jpg)
- **Konfiguration** : Ermöglicht den Zugriff auf die Serverkonfiguration
LMS direkt
![configlms](../images/configlms.jpg)
- **Server** : Ermöglicht den direkten Zugriff auf Ihren LMS-Server
![serveurlms](../images/serveurlms.jpg)

# Die Ausrüstungen 

Wenn Sie auf ein Gerät klicken, gelangen Sie auf dessen Seite :

![squeezeboxcontrol screenshot8](../images/squeezeboxcontrol_screenshot8.jpg)

Auf dieser Seite finden Sie alle Informationen Ihrer SqueezeBox sowie alle Befehle und einige Optionen (andere werden folgen)) :

- **Kein Volumen :** Mit dieser Option können Sie den Schritt einer Volume + - oder Volume-Aktion anpassen-
- **Auto On / Off bei Synchronisation :** Wenn diese Option aktiviert ist, wenn eine Synchronisierung für diese Squeezebox durchgeführt wird, wird sie bei Nicht-Synchronisierung ein- und ausgeschaltet.
- **Jingle Pre TTS :** ermöglicht zu definieren, ob vor einer Sprachsynthese ein Jingle vom Typ Dingdong auftritt.
- **Motor :** Mit dieser Option können Sie die Sprachsynthese-Engine auswählen (Picotts, Google, Voxygen)). Mit einem Szenario-Befehl können Sie ihn im laufenden Betrieb ändern.
- **Tts Optionen :** ermöglicht die Auswahl der Stimme oder der Sprache des Text-zu-Sprache entsprechend der gewählten Engine. Mit einem Szenario-Befehl können Sie ihn im laufenden Betrieb ändern.

# Das Dashboard 

Wenn Sie Ihre Squeezebox im Dashboard anzeigen, erhalten Sie Folgendes :

![dashboard](../images/dashboard.jpg)

- **Bis :** Ermöglicht es Ihnen, das Ein- und Ausschalten Ihrer SqueezeBox zu steuern und auf einen Blick zu erkennen, ob sie eingeschaltet ist
- **B. :** Ermöglicht es Ihnen, Ihre SqueezeBox mit einer anderen, mit allen anderen, von einer anderen zu synchronisieren oder zu desynchronisieren (weitere Informationen finden Sie im Abschnitt zur Synchronisierung)
- **C. :** Ermöglicht es Ihnen, das Cover des aktuellen Messwerts anzuzeigen (wird je nach Status der SqueezeBox in Farbe oder Schwarzweiß angezeigt). Ein Klick auf die Jacke ermöglicht auch den direkten Zugriff auf die Medienbibliothek :

![squeezeboxcontrol screenshot7](../images/squeezeboxcontrol_screenshot7.jpg)

- **D. :** Zeigt den Künstler und das laufende Album an (dieser Text rollt über eine bestimmte Länge hinaus)
- **E. :** Zeigt den Titel der aktuellen Lesung an (dieser Text scrollt über eine bestimmte Länge hinaus)
- **F. :** Bedienfeld mit Grundfunktionen (Zurück, Schneller Rücklauf, Wiedergabe / Pause, Stopp, Schneller Vorlauf, Weiter)
- **G. :** Lautstärkeregler (Schieberegler und zwei Vol- und Vol + -Tasten)

# Dashboard-Synchronisierungsfenster

Wenn Sie auf die Schaltfläche Synchronisierung klicken, wird ein Fenster geöffnet :

![squeezeboxcontrol
Screenshot4](../ images / Squeezeboxcontrol_screenshot4.jpg)

In diesem Fenster sehen Sie den aktuellen Synchronisationsstatus Ihrer Squeezebox. Hier sind die verfügbaren Optionen :

- **Synchronisieren von :** Mit dieser Option können Sie diese Squeezebox über die im Dropdown-Menü ausgewählte Squeezebox synchronisieren
- **Synchronisieren mit :** Mit dieser Option können Sie diese Squeezebox mit der im Dropdown-Menü ausgewählten Squeezebox synchronisieren
- **Mit allen synchronisieren :** Mit dieser Option können Sie diese Squeezebox mit all Ihren Squeezeboxen synchronisieren
- **Desynchronisieren :** Nur sichtbar, wenn die Squeezebox synchron ist und diese Aktion die Desynchronisierung ermöglicht.

# Pannel SqueezeBox Control

In diesem Bereich haben Sie einen Überblick über alle Ihre Squeezeboxen :

![panel2](../images/panel2.jpg)

Sie können Ihre SqueezeBox tatsächlich nach Objekten filtern, wobei das versteckte Menü links angezeigt wird. Auf einen Blick sehen Sie die Squeezeboxen synchron ein- und ausschalten. Natürlich sind auch alle im Dashboard verfügbaren Aktionen hier verfügbar.

Oben stehen jedoch andere Optionen zur Verfügung :

- **Schalten Sie alle ein :** schaltet alle Squeezeboxen ein
- **Schalten Sie alle aus :** schaltet alle Squeezeboxen aus
- **LMS-Server :** ermöglicht den direkten Zugriff auf Ihren LMS-Server
- **Konfiguration :** ermöglicht den direkten Zugriff auf die Konfiguration Ihres LMS-Servers
- **Vollständiger Scan :** Mit dieser Option können Sie einen vollständigen Scan Ihrer Medienbibliothek auf dem LMS-Server auslösen
- **Schneller Scan :** Mit dieser Option können Sie einen schnellen Scan Ihrer Medienbibliothek auf dem LMS-Server auslösen
- **Wiedergabeliste scannen :** Mit dieser Option können Sie einen Scan Ihrer Wiedergabelisten auf dem LMS-Server auslösen
- **Geräte :** ermöglicht es Ihnen, direkt zur allgemeinen Seite Ihrer Ausrüstung zu gelangen

# Bestellungen über Szenario verfügbar

Viele Befehle sind über Szenarien verfügbar (andere werden kommen). Hier ist die vollständige Liste :

- **Album :** Info-Befehl mit dem aktuellen Album
- **Einschalten :** schaltet die Squeezebox ein
- **Schalten Sie alle ein :** schaltet alle Squeezeboxen ein
- **Künstler :** Info-Befehl mit dem laufenden Künstler
- **Voraus :** Schneller Vorlauf
- **Desynchronisieren :** Mit dieser Option können Sie die Squeezebox desynchronisieren
- **Zustand :** Kennen Sie den Zustand der Squeezebox
- **Ausschalten :** schaltet die Squeezebox aus
- **Schalten Sie alle aus :** schaltet alle Squeezeboxen aus **Album abspielen :** Befehlsnachricht, die das Abspielen des in Parameter (Nachricht) übergebenen Albums ermöglicht (die aktuelle Alpha-Funktion funktioniert, liefert jedoch möglicherweise nicht das gewünschte Ergebnis)
- **Künstler spielen :** Befehlsnachricht, die das Abspielen des in Parameter (Nachricht) übergebenen Interpreten ermöglicht (die aktuelle Alpha-Funktion funktioniert, liefert jedoch möglicherweise nicht das gewünschte Ergebnis)
- **Genre spielen :** Nachrichtenbefehl, der das Abspielen des in Parameter (Nachricht) übergebenen Genres ermöglicht (die aktuelle Alpha-Funktion funktioniert, liefert jedoch möglicherweise nicht das gewünschte Ergebnis)
- **Playlist abspielen :** Befehlsnachricht, mit der die in Parameter (Nachricht) übergebene Wiedergabeliste abgespielt werden kann (die aktuelle Alpha-Funktion funktioniert, liefert jedoch möglicherweise nicht das gewünschte Ergebnis)
- **Stück spielen :** Befehlsnachricht, die das Abspielen des im Parameter (Nachricht) übergebenen Songs ermöglicht (die aktuelle Alpha-Funktion funktioniert, liefert jedoch möglicherweise nicht das gewünschte Ergebnis). Gibt auch die Songs an, die das Wort enthalten
- **Favoriten spielen :** Befehlsnachricht, mit der die Favoriten abgespielt werden können, die dem Parameter (Nachricht) entsprechen (diese Funktion basiert auf den Indizes und kann mehrere durch getrennte Indizes verwenden; . Wir können auch einen Bereich mit definieren - .  Beispiel : 0,0-0.2; 2 spielt einen Favoriten mit Index 2 oder etwas zwischen 0.0 und 0.2 enthalten. LMS-Indizes basieren auf einer Verzeichnisarchitektur und werden im LMS-Dokument erläutert)
- **Spielen Sie Favoriten nach Namen :** Befehlsnachricht, die es ermöglicht, die Favoriten abzuspielen, die dem entsprechen, was im Parameter (Nachricht) übergeben wird (basierend auf den Namen, die im Parameter einen einzelnen Namen annehmen, und alle entsprechenden Favoriten hinzufügen. Beispiel : Radio gibt alle Favoriten zurück, die Radio enthalten oder sich in einem Verzeichnis befinden, das Radio enthält. Ein weiteres Beispiel : radio / gibt notwendigerweise Favoriten an, die sich in einem Favoritenverzeichnis befinden, das als Radio bezeichnet wird. Dieser Befehl unterscheidet nicht zwischen Groß- und Kleinschreibung)
- **Spielen Sie Url :** Befehlsnachricht, mit der eine im Parameter übergebene URL abgespielt werden kann
- **Lesen :** Befehl zum Spielen der Squeezebox
- **Stumm :** Befehl zum Stummschalten der Squeezebox
- **Nicht stumm :** Befehl zum Wiederherstellen des Sounds der Squeezebox
- **Sprich :** Nachrichtenbefehl, um die Squeezebox zum Sprechen zu bringen
- **Sprechen Sie über alle Optionen :** Nachrichtenbefehl, um die Squeezebox zum Sprechen zu bringen. Die Nachricht ist der Text, der Titel kann mehrere Optionen enthalten 

- multi : ermöglicht das gleichzeitige Sprechen auf mehreren Squeezeboxen : Multi = Toiletten; Schlafzimmer bringt die Squeezebox, die die Bestellung initiiert, zum Sprechen, ebenso wie Toiletten und Schlafzimmer
- Lautstärke : ermöglicht die Definition des Volumens, das für das TTS verwendet werden soll : volume=70
- Stimme : Nur für TTSwebserver, ermöglicht die zufällige Auswahl der Stimme aus einer Liste oder unter allen (außer Pico)) : Beispiel : stimme = alle oder stimme = melodin; sorciere
- klingeln : Mit dieser Option können Sie einen Jingle auswählen, der vor dem Beispiel abgespielt werden soll (oder aus einer Liste ausgewählt werden soll) : Jingle = Kuckuck oder Jingle = Kuckuck, sei vorsichtig
- playurl : Mit dieser Option können Sie fortfahren, indem Sie nach dem tts eine URL lesen (Beispiel playurl)=XXXXXXXXXX)
- playfavoris : Das Gleiche gilt für einen Indexfavoriten (siehe Befehl Favoriten)
- playfavorisname : idem aber mit den Funktionen des Favoriten Befehlsnamens
- Playalbum : das Gleiche gilt für den Namen eines Albums oder ein Ende des Namens)
- Playartist : das Gleiche gilt für den Namen eines Künstlers (oder eines Teils des Namens))
- Playgender : das Gleiche gilt für den Namen einer Gattung
- Spielgesang : das Gleiche gilt für den Namen eines Liedes (oder eines Stücks des Namens))
- Wiedergabeliste : Das Gleiche gilt für den Namen einer Wiedergabeliste
- Playstop : Mit playstop = 1 werden die Squeezeboxen nach tts gestoppt (andernfalls nehmen sie ihren Ausgangszustand wieder auf)
- Playoffs : Mit Playoff = 1 werden die Squeezeboxen nach tts gestoppt (andernfalls nehmen sie ihren Ausgangszustand wieder auf)

- **Konfigurieren Sie TTS :** Sehr interessante Option, mit der in einem Szenario die TTS-Motoreinstellung im laufenden Betrieb geändert werden kann (siehe Abschnitt Das TTS im Szenario))
- **Pause :** Befehl zum Anhalten der Squeezebox
- **Früher :** vorheriges Lied bestellen
- **Zurück :** Schnellrückgabebefehl
- **Schnell scannen :** Befehl zum Auslösen eines schnellen Scans Ihrer Medienbibliothek auf dem LMS-Server (ideal zum Planen regelmäßiger Scans)
- **Vollständiger Scan :** Befehl zum Auslösen eines vollständigen Scans Ihrer Medienbibliothek auf dem LMS-Server (ideal zum Planen regelmäßiger Scans)
- **Wiedergabeliste scannen :** Befehl zum Auslösen eines Scans Ihrer Wiedergabelisten auf dem LMS-Server (ideal zum Planen regelmäßiger Scans)
- **STOP :** Befehl zum Stoppen der Squeezebox (nicht ausschalten))
- **Folgende :** nächster Liedbefehl
- **Synchronisieren mit :** Info-Befehl, mit dem Sie feststellen können, mit wem die Squeezebox synchronisiert ist
- **Synchronisieren seit :** Nachrichtenbefehl, mit dem die Squeezebox von der im Parameter (Nachricht) übergebenen Squeezebox synchronisiert werden kann. Der Wert kann entweder die Mac-Adresse der Squeezebox oder der genaue Name in Jeedom sein
- **Synchronisieren mit :** Nachrichtenbefehl, mit dem die Squeezebox mit der im Parameter (Nachricht) übergebenen Squeezebox synchronisiert werden kann. Der Wert kann entweder die Mac-Adresse der Squeezebox oder der genaue Name in Jeedom sein
- **Mit allen synchronisieren :** Befehl zum Synchronisieren der Squeezebox mit all Ihren Squeezeboxen
- **Aktueller Titel :** Info-Befehl mit dem aktuellen Titel
- **Lautstärke :** Regler zum Einstellen der Lautstärke
- **Lautstärkestatus :** Info-Befehl mit aktuellem Volume
- **Lautstärke + :** Lautstärkeregler
- **Volume- :** Steuerung zum Verringern der Lautstärke

# TTS im Szenario 

Das tts im Szenario ist einfach. Sie können Ihre Squeezebox gemäß den vordefinierten Parametern auf dem Gerät sprechen lassen. Sie können aber auch in Ihren Szenarien die Parameter ändern, um Benachrichtigungen mit unterschiedlichen Stimmen oder Engines zu erstellen, abhängig von der Ankündigung:

Verwenden Sie dazu die Funktion "TTS konfigurieren"". Es ermöglicht die Definition der Engine und der Stimme vor dem Start der Synthese, Beispiele :

![tts1](../images/tts1.jpg)

![tts2](../images/tts2.jpg)

![tts3](../images/tts3.jpg)

Die möglichen Optionen für den Motor sind (beachten Sie die Kleinbuchstaben)

+ ------------------ + ------------------------------ --------------------------- +
| Motor           | Mögliche Optionen                                       |
+ ================== + =============================== =========================== +
| **Picottts**     | fr-FR, de-DE, en-USA, en-GB, es-ES, it-IT                |
+ ------------------ + ------------------------------ --------------------------- +
| **google**       | fr, af, sq, ar, hy, ca, zh-CN, zh-TW, h, cs, da, nl,   |
|                  | en, en-us, en-au, eo, fi, de, el, ht, hi, hu, is, id,   |
|                  | es, ja, ko, la, lv, mk, nein, pl, pt, ro, ru, sr, sk, es, |
|                  | sw, sv, ta, th, tr, vi, cy                              |
+ ------------------ + ------------------------------ --------------------------- +
| **Sauerstoff**      | Agnes, Bicool, Hush, Damien, DarkVadoor, Electra, Emma, |
|                  | Eva, Fabienne, Guy, Helene, JeanJean, John, Loic,       |
|                  | Ludovic, Matteo, Melodine, Michel, Papi, Philippe,      |
|                  | Ramboo, Roboter, Sidoo, Hexe, Yeti, Zozo, Adel,       |
|                  | Matthias, Sylvia, Bibi, Bronwen, Elizabeth, Paul,       |
|                  | Amanda, Phil, Marta, Pedro, Sonia                       |
+ ------------------ + ------------------------------ --------------------------- +

Wenn der eingegebene Motor ungültig ist, wird nichts geändert. Wenn die Option standardmäßig ungültig ist, wird die erste in der Liste zugewiesen

# Beispielszenario

![scenar](../images/scenar.jpg)
