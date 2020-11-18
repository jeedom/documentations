# SMS Plugin

Das SMS-Plugin ermöglicht Ihnen den Dialog mit Jeedom per SMS. Jeedom kann Ihnen im Alarmfall auch eine SMS senden (Alarm-Plugin, Szenario)

> **Wichtig**
>
> Um mit Jeedom zu interagieren, müssen Sie Interaktionen konfiguriert haben.

# Plugin Konfiguration 

Nach dem Herunterladen des Plugins müssen Sie es nur noch aktivieren und den Port konfigurieren. Nach dem Speichern sollte der Dämon starten. Das Plugin ist bereits standardmäßig konfiguriert. du musst nichts mehr tun. Sie können diese Konfiguration jedoch ändern. Hier ist das Detail (einige Parameter sind möglicherweise nur im Expertenmodus sichtbar) :

-   *SMS-Port* : Der USB-Anschluss, an den Ihr GSM-Schlüssel angeschlossen ist.

> **Spitze**
>
> Wenn Sie nicht wissen, welcher USB-Anschluss verwendet wird, können Sie einfach "Auto" angeben". Bitte beachten Sie, dass der Auto-Modus nur mit Huawai E220-Tasten funktioniert.

> **Wichtig**
>
> Bitte beachten Sie, dass einige 3G-Schlüssel standardmäßig im Modemmodus und nicht in GSM verwendet werden. Mit der Software Ihres Schlüsselherstellers müssen Sie den Schlüsselmodus auf GSM (oder Text oder seriell) ändern). 

-   **PIN-Code** : Hier können Sie den PIN-Code der SIM-Karte angeben und leer lassen, wenn Sie keinen haben. 
-   **Textmodus** : Erweiterter Kompatibilitätsmodus, der nur verwendet wird, wenn das Senden und / oder Empfangen von Nachrichten nicht funktioniert.
-   **Schneiden Sie Nachrichten nach Zeichenpaket** : Gibt die maximale Anzahl von Zeichen pro Text an.
-   **SMS / SMS Gateway (im Fehlerfall ändern : CMS 330 SMSC-Nummer nicht festgelegt)** : Beachten Sie, dass Sie in diesem Fall die SMS-Gateway-Nummer Ihres Telefonisten angeben müssen, wenn der Fehler "CMS 330 SMSC-Nummer nicht festgelegt" angezeigt wird. 
-   **Signalstärke** : Signalempfangsstärke Ihres GSM-Schlüssels.
-   **Netzwerk** : Telefonnetz Ihres GSM-Schlüssels (kann "Keine" sein, wenn Jeedom ihn nicht wiederherstellen kann). 
-   **interne Steckdose (gefährliche Änderung)** : Ermöglicht das Ändern des internen Kommunikationsports des Dämons.
-   **Fahrräder)** : Daemon-Scan-Zyklus zum Senden und Empfangen von SMS. Eine zu niedrige Zahl kann zu Instabilität führen

# Gerätekonfiguration 

Auf die Konfiguration der SMS-Geräte kann über das Plugin-Menü und dann über die Kommunikation zugegriffen werden

Hier finden Sie die gesamte Konfiguration Ihrer Geräte :

-   **Name des SMS-Geräts** : Name Ihres SMS-Geräts,
-   **Aktivieren** : macht Ihre Ausrüstung aktiv,
-   **Sichtbar** : macht Ihre Ausrüstung auf dem Armaturenbrett sichtbar,
-   **Übergeordnetes Objekt** : Gibt das übergeordnete Objekt an, zu dem das Gerät gehört.

Nachfolgend finden Sie die Liste der Bestellungen :

-   **Name** : Der im Dashboard angezeigte Name,
-   **Benutzer** : entsprechender Benutzer in Jeedom (ermöglicht es Ihnen, bestimmte Interaktionen auf bestimmte Benutzer zu beschränken),
-   **Anzahl** : Telefonnummer, an die Nachrichten gesendet werden sollen. Sie können mehrere Zahlen eingeben, indem Sie sie durch trennen. (z: 0612345678; 0698765432).
    > **Wichtig**
    >
    > Nur die in einem Gerät deklarierten Telefonnummern können die Interaktionen verwenden, da nur sie autorisiert werden.
-   **Anzeige** : ermöglicht die Anzeige der Daten im Dashboard,
-   **Erweiterte Konfiguration** (kleine gekerbte Räder) : Zeigt die erweiterte Konfiguration des Befehls an (Protokollierungsmethode, Widget usw.)),
-   **Test** : Wird zum Testen des Befehls verwendet,
-   **Löschen** (Schild -) : ermöglicht das Löschen des Befehls.

# Mit dem Plugin 

Dies ist ziemlich normal in seiner Funktionsweise, auf der Seite Allgemein → Plugin, dann durch Auswahl des SMS-Plugins :

-   Der Port (Pfad) zu dem Gerät, das als Modem dient (z. B. kann es / dev / ttyUSB0 sein, um zu sehen, dass es gerade gestartet wird ``dmesg`` Schließen Sie dann das Modem an)
-   Der PIN-Code der SIM-Karte

Sie müssen also neue Geräte hinzufügen und diese dann konfigurieren :

-   Der Name davon,
-   Ob es aktiv ist oder nicht,

Dann müssen Sie die Befehle hinzufügen, die aus einem Namen und einer Nummer bestehen. Nur die in der Befehlsliste aufgeführten Nummern können eine Antwort von Jeedom erhalten (dies ermöglicht die Sicherung, ohne ein Kennwort festzulegen jeder Start einer an Jeedom gesendeten SMS). Sie können auch angeben, welcher Benutzer mit dieser Nummer verknüpft ist (für die Rechteverwaltung auf Interaktionsebene).

Um mit Jeedom zu kommunizieren, reicht es dann aus, ihm eine Nachricht von einer autorisierten Nummer zu senden, wobei alle Interaktionen vom Interaktionssystem stammen.

Kleines Beispiel für Interaktion : Frage : "Was ist die Temperatur des Raumes ?" Antwort : "16.3 C."

# Liste der kompatiblen Schlüssel 

-   HUAWEI E220
-   Alcatel One Touch X220L
-   HSDPA 7.2MBPS 3G Wireless
-   HUAWEI E3372

# Faq 

> **Ich bekomme nichts mit einem huwaei e160 Schlüssel.**
>
>Sie müssen minicom installieren (sudo apt-get install -y minicom), es starten und eine Verbindung zum Modem herstellen :
>
>`` `{.bash}
>AT ^ CURC = 0
>AT ^ u2diag = 0
>`` ''
>
>Und auf dem Plugin tun :
>
>-   Wählen Sie den ersten USB-Anschluss und nicht den zweiten
>-   Geschwindigkeit : 9600
>-   Textmodus aus

> **Ich kann den USB-Anschluss meines Schlüssels nicht sehen**
>
>Stellen Sie sicher, dass Sie nicht brltty installieren müssen (`sudo apt-get remove brltty`, um es zu entfernen)

> **Nach einigen Stunden / Tagen erhalte ich keine SMS mehr und kann keine mehr senden, korrigiert eine Erinnerung des Dämons**
>
>Überprüfen Sie Ihr USB-Kabel (ein schlechtes USB-Kabel verursacht häufig solche Probleme, es sollte auch nicht zu lang sein). Überprüfen Sie auch Ihr Netzteil. Ein USB-Hub wird dringend empfohlen

> **Ich habe einen CME-Fehler XX**
>
>Sie können finden [hier](:http://www.micromedia-int.com/fr/gsm-2/669-cme-error-gsm-equipment-related-errors) Beschreibung der verschiedenen CME-Fehler

> **Konfiguration der Alcatel One-Touch-X220L-Taste**
>
>Wenn wir den Schlüssel einstecken, haben wir diesen :
>
>`` ''`
>root @ jeedom:# lsusb
>Bus 002 Gerät 003: ID 1bbb:f000 T & A-Handys
>`` ''`
>
>Seien Sie vorsichtig, wenn Sie nicht haben ``1bbb:f000`` Befolgen Sie vor allem nicht diese Dokumentation, sondern fügen Sie die folgenden Zeilen am Ende der Datei hinzu ``/etc/usb\_modeswitch.conf`` :
>
>`` ''`
>########################################################
># Alcatel X220L
>DefaultVendor = 0x1bbb
>DefaultProduct = 0xf000
>MessageContent = "55534243123456788000000080000606f50402527000000000000000000000"
>########################################################
>`` ''`
>
>Führen Sie dann den folgenden Befehl zum Testen aus :
>
>`` ''`
>/ usr / sbin / usb_modeswitch -c
>/etc/usb_modeswitch.conf
>`` ''`
>
>Wir bekommen das :
>
>`` ''`
>root @ jeedom:~ # lsusb
>Bus 002 Gerät 003: ID 1bbb:0017 T & A-Handys
>`` ''`
>
>und die Links unter / dev werden hinzugefügt :
>
>`` ''`
>root @ jeedom:~ # ls / dev / ttyUSB*
>/ dev / ttyUSB0 / dev / ttyUSB1 / dev / ttyUSB2 / dev / ttyUSB3 / dev / ttyUSB4
>`` ''`
>
>Jetzt müssen Sie den Start des vorherigen Befehls über udev automatisieren :
>
>`` ''`
>root @ jeedom:# vi /etc/udev/rules.d99-usb_modeswitch.rules
>SUBSYSTEM == "usb", ATTRS {idVendor} == "1bbb", ATTRS {idProduct} == "f000", RUN + = "/ usr / sbin / usb_modeswitch -c /etc/usb_modeswitch.conf"
>`` ''`
>
>Unter jeedom im SMS-Plugin müssen Sie (in meinem Fall) den folgenden "SMS-Port" verwenden : ``/dev/ttyUSB3``. Grundsätzlich müssen Sie jeden Port ausprobieren, um den richtigen zu finden…

> **Der SMS-Daemon wird gestartet, Sie erhalten jedoch keine SMS**
>
>Eine der wahrscheinlichen Ursachen ist die falsche Netzwerkkonfiguration. Überprüfen Sie unter "Allgemein" -> "Konfiguration" -> "Administration" -> "Netzwerkkonfiguration" den Inhalt des Feldes "URL oder IP-Adresse"". Letzteres darf nicht localhost oder 127.0.0 sein.1 aber die IP-Adresse Ihres Jeedom oder dessen DNS-Namen.

> **Im Debug-Modus wird der Fehler "Timeout" angezeigt**
>
>Dieser Fehler tritt auf, wenn der Schlüssel nicht innerhalb von 10 Sekunden nach einer Anforderung antwortet. Bekannte Ursachen können sein :
>
>-   Inkompatibilität des GSM-Schlüssels,
>-   Problem mit der Firmware-Version des Sticks.

> **Beim Starten im Debug-Modus habe ich : "Steckdose bereits in Gebrauch"**
>
>Dies bedeutet, dass der Dämon gestartet wird, aber Jeedom ihn nicht aufhalten kann. Sie können entweder das gesamte System neu starten oder in SSH "killall -9 refxcmd.py" ausführen".

> **Der Dämon weigert sich zu starten**
>
>Versuchen Sie, es im Debug-Modus zu starten, um den Fehler zu sehen.

> **Ich habe mehrere USB-Anschlüsse für meinen GSM-Schlüssel, während ich nur einen habe**
>
>Dies ist normal. Aus unbekannten Gründen erstellen GSM-Schlüssel zwei (und noch mehr) USB-Anschlüsse auf Systemebene. Wählen Sie einfach eine, egal welche.

> **Jeedom sendet oder empfängt keine SMS mehr**
>
>Dies geschieht normalerweise, wenn der GSM-Schlüssel keine Verbindung mehr zum Netzwerk herstellen kann. Bewegen Sie es nach einigen Minuten und prüfen Sie, ob es wieder kommt.

>**Ich habe Empfangsbedenken, die für ein paar Stunden dann nichts arbeiten**
>
>Legen Sie die SIM-Karte in ein Mobiltelefon ein und leeren Sie alle gesendeten und empfangenen SMS von der Karte.
