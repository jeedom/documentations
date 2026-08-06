# Karotz Plugin

Mit diesem Plugin können Sie Ihren Karotz steuern (läuft unter [OpenKarotz](http://www.openkarotz.org/)). Dies geht von seiner Bauch-LED zu seinen Ohren durch Geräusche, Sprachsynthese und viele andere.

# Konfiguration 

## Jeedom Plugin Konfiguration : 

**Installation / Erstellung**

Um das Plugin verwenden zu können, müssen Sie es wie jedes Jeedom-Plugin herunterladen, installieren und aktivieren.

Gehen Sie zum Menü Plugins / Kommunikation, dort finden Sie das Karotz-Plugin.

Sie gelangen auf die Seite, auf der Ihre Ausrüstung aufgelistet ist (Sie können mehrere Karotz haben) und auf der Sie einige erstellen können.

Klicken Sie auf die Schaltfläche Hinzufügen :

Sie gelangen dann auf die Konfigurationsseite Ihres Karotz.

**Befehle**

In diesem Abschnitt haben Sie nichts zu tun. Bestellungen werden automatisch erstellt.

-   Aktualisieren: Schaltfläche, um das Widget bei Bedarf zu aktualisieren
-   Blinkt aus : Ermöglicht das Stoppen des Blinkens der LED
-   Blinkt auf : Aktiviert das Blinken der LED
-   Stoppen Sie den Ton : Stoppen Sie eine Musik oder einen laufenden Sound
-   Schlafenszeit : lässt das Kaninchen schlafen
-   Stehend : Weckt das Kaninchen auf
-   Still stehen : Ermöglicht das Aufwecken des Kaninchens im lautlosen Modus
-   Uhr : Ermöglicht das Starten des Kaninchenuhrmodus
-   Stimmung : ermöglicht es dem Kaninchen, die ausgewählte Stimmung zu erkennen
-   Stimmung Nr: ermöglicht dem Kaninchen, die durch seine Nummer angegebene Stimmung zu sagen
-   Zufällige Stimmung : erlaubt dem Kaninchen, eine zufällige Stimmung zu sagen
-   Zufälliges Ohr : ermöglicht es Ihnen, Ihre Ohren zufällig zu bewegen
-   Ohr RàZ : ermöglicht es, die Ohren in die Ausgangsposition zurückzubringen
-   Ohrenpositionen : passt die genaue Position beider Ohren an
-   Klang von Karotz (Name) : Ermöglicht das Starten eines Karotz-Sounds (z. B. Piepton) durch Angabe seines Namens
-   Karotz-Sound : Mit dieser Option können Sie einen Karotz-Sound (z. B. einen Piepton) starten, indem Sie dessen Namen in einer Liste auswählen
-   Seine URL : Hier können Sie eine URL zum Karotz lesen (z. B. Radiosender))
-   SqueezeBox Ein : Mit dieser Option können Sie den Karotz-Squeezebox-Modus aktivieren
-   SqueezeBox aus : Ermöglicht das Deaktivieren des Karotz-Squeezebox-Modus
-   Schlafend : ermöglicht es Ihnen zu wissen, ob der Karotz schläft (wenn nicht, ist er wach)
-   Farbstatus : ermöglicht es, die Farbe aktuell auf dem Bauch des Karotz zu haben
-   TTS : Ermöglicht dem Kaninchen das Sprechen durch Auswahl der Stimme und der Nachricht (standardmäßig wird die Nachricht zwischengespeichert)
-   TTS ohne Cache : Ermöglicht das Sprechen des Kaninchens durch Auswahl der Stimme und der Nachricht (die Nachricht wird nicht zwischengespeichert)
-   Pulsgeschwindigkeit : Passt die Geschwindigkeit des Blinkens an
-   % des Platzes belegt : Hier erfahren Sie, wie viel Prozent der Festplatte auf dem Kaninchen verwendet werden
-   Freier Speicherplatz : Wert in MB freien Speicherplatz auf dem Kaninchen
-   Neu starten : ermöglicht es Ihnen, das Kaninchen neu zu starten
-   Zeit einstellen : Mit dieser Option können Sie das Kaninchen automatisch auf die Uhrzeit zurücksetzen (nützlich zum Ändern der Uhrzeit)
-   Lautstärke : gibt in% den Lautstärkepegel an
-   Lautstärke : Mit dieser Option können Sie den Lautstärkepegel in% auswählen (empfohlen max. 50%, Verzerrungsgefahr oben))
-   Lautstärke + : erhöht die Lautstärke um 5%
-   Volume- : verringert die Lautstärke um 5%
-   Foto : erlaubt ein Foto vom Kaninchen zu machen
-   Fotos löschen : Mit dieser Option können Sie alle vom Kaninchen aufgenommenen Fotos löschen (wodurch Speicherplatz frei wird)
-   Fotos aktualisieren Liste : Ermöglicht die Aktualisierung der Liste der erhaltenen Fotos
-   Auflistung der Fotos : Liste der Fotos aufbewahrt
-   Fotos herunterladen : Mit dieser Option können Sie die auf der Festplatte gespeicherten Fotos (per FTP) herunterladen (sie werden nicht gelöscht))

Alle diese Befehle sind über die Szenarien verfügbar.

## TTS-Befehl 

Der TTS-Befehl kann mehrere Optionen haben, die durch & getrennt sind :

-   Stimme : die Sprachnummer
-   Nocache : Verwenden Sie den Cache nicht

Beispiel :

``voice=3&nocache=1``

# Faq 

>**Wie oft werden die Informationen aktualisiert?**
>
>Das System ruft die Informationen alle 30 Minuten oder nach einer Aufforderung zur Änderung der Farbe oder des Zustands des Kaninchens ab. Sie können auf den Befehl Aktualisieren klicken, um manuell zu aktualisieren.
