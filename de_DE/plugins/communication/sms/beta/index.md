# SMS Plugin

Mit dem SMS-Plugin können Sie per SMS mit Jeedom interagieren. Außerdem kann Jeedom Ihnen im Falle einer Warnung (Alarm-Plugin, Szenario usw.) eine SMS senden).

> **Wichtig**
>
> Um mit Jeedom interagieren zu können, müssen Sie Interaktionen konfiguriert haben.

# Plugin Konfiguration

Nachdem Sie das Plugin heruntergeladen haben, aktivieren Sie es einfach und konfigurieren Sie den Port. Nach dem Speichern sollte der Dämon starten.
Das Plugin ist bereits standardmäßig konfiguriert, sodass Sie nichts weiter tun müssen. Sie können diese Konfiguration jedoch ändern. Hier finden Sie die Details :

- **SMS-Port** : der USB-Port, an dem Ihr GSM-Schlüssel angeschlossen ist (zum Beispiel kann es /dev/ttyUSB0 sein, um ihn zu sehen, führen Sie einfach `dmesg` aus und schließen Sie das Modem an).

> **TIPP**
>
> Wenn Sie nicht wissen, welcher USB-Anschluss verwendet wird, können Sie einfach "Auto" angeben". Bitte beachten Sie, dass der Auto-Modus nur mit Huawei E220-Tasten funktioniert.

> **Wichtig**
>
> Bitte beachten Sie, dass sich einige 3G-Schlüssel standardmäßig im Modemmodus und nicht in GSM befinden. Sie müssen mithilfe der Software Ihres Schlüsselherstellers den Modus des Schlüssels in GSM (oder Text oder seriell) ändern).

- **Kommunikationsgeschwindigkeit** : Die letzten Schlüssel arbeiten mit 115200 Baud. Sie haben die Möglichkeit, auf 9600 Baud umzuschalten, falls Ihre Ausrüstung dies erfordert.
- **PIN-Code** : Hier können Sie den PIN-Code der SIM-Karte angeben und leer lassen, wenn Sie keinen haben.
- **Textmodus** : Erweiterter Kompatibilitätsmodus, der nur verwendet wird, wenn das Senden und / oder Empfangen von Nachrichten nicht funktioniert.
- **Schneiden Sie Nachrichten nach Zeichenpaket** : Gibt die maximale Anzahl von Zeichen pro Textnachricht an.
- **SMS / SMS Gateway (im Fehlerfall ändern : CMS 330 SMSC-Nummer nicht festgelegt)** : Ändern Sie nur, wenn Sie den Fehler "CMS 330 SMSC-Nummer nicht festgelegt" haben. In diesem Fall müssen Sie die SMS-Gateway-Nummer Ihres Telefonisten angeben.
- **Signalstärke** : Signalstärke Ihres GSM-Schlüssels.
- **Netzwerk** : Telefonnetz Ihres GSM-Schlüssels (kann "Keine" sein, wenn Jeedom ihn nicht wiederherstellen kann).
- **Interner Socket-Port (gefährliche Änderung)** : Ermöglicht das Ändern des internen Kommunikationsports des Dämons.
- **Fahrräder)** : Daemon-Scan-Zyklus zum Senden und Empfangen von SMS. Eine zu niedrige Zahl kann zu Instabilität führen.

# Gerätekonfiguration

Auf die Konfiguration von SMS-Geräten kann über das Menü Plugins → Kommunikation zugegriffen werden.

Hier finden Sie die gesamte Konfiguration Ihrer Geräte :

- **Ausrüstungsname** : Name Ihres SMS-Geräts.
- **Übergeordnetes Objekt** : Gibt das übergeordnete Objekt an, zu dem das Gerät gehört.
- **Aktivieren** : macht Ihre Ausrüstung aktiv.
- **Sichtbar** : macht Ihre Ausrüstung auf dem Armaturenbrett sichtbar.

Nachfolgend finden Sie einige spezifische Parameter:

- **Interaktionen deaktivieren**: ermöglicht es Ihnen, Interaktionen für alle Nummern dieses Geräts zu verbieten (wenn Sie Interaktionen für bestimmte Nummern und nicht für andere verbieten möchten, können Sie mehrere Geräte erstellen)
- **Nachrichten von unbekannten Nummern zulassen**: Ermöglicht Ihnen, Nachrichten von unbekannten Nummern anzunehmen. Die empfangene Nachricht sowie die Nummer des Absenders sind wie bei jeder anderen Nachricht über die Befehle verfügbar. Interaktionen sind für diese Nummern immer deaktiviert
- **Fügen Sie unbekannte Nummern hinzu**: ermöglicht es Ihnen, die Nummer automatisch zur Liste der Bestellungen hinzuzufügen (also eine neue Bestellung zu erstellen), wenn Sie eine Nachricht von einer unbekannten Nummer erhalten

> **WARNUNG**
>
> Diese Option kann gefährlich sein, da sie der Nummer automatisch einen entsprechenden Befehl hinzufügt, wenn Sie eine Nachricht von einer unbekannten Nummer erhalten.
> Wenn Sie auf derselben Ausrüstung Interaktionen aktivieren, bedeutet dies, dass jeder beginnen kann, mit Ihrem Jeedom zu interagieren.
> Aktivieren Sie diese Option nur, wenn Sie dieses Risiko sicher akzeptieren.

## Die Bestellungen

Jedes Gerät verfügt über die folgenden Befehle:

- **Signal**: gibt Signalstärke;
- **Nachricht**: enthält die zuletzt empfangene SMS-Nachricht;
- **Absender**: enthält den Namen des letzten Absenders, sofern bekannt, andernfalls die Nummer;
- **Nachricht senden an**: Ein Aktionsbefehl zum Senden einer Nachricht zum Senden einer SMS an eine personalisierte Nummer, ohne dass der Kontaktbefehl erstellt werden muss. Auf diese Weise können Sie beispielsweise eine SMS an eine Nummer senden, die Sie über einen Info-Befehl von einem anderen Gerät unter Jeedom erhalten haben. Achtung, es erfolgt keine Überprüfung der Nummer, Sie müssen die Nummern im internationalen Format angeben.

Darüber hinaus können Sie passend zu Ihren Kontakten beliebig viele weitere Aktionsbefehle erstellen, für die Sie jeweils eine Eingabe vornehmen müssen:

- **Name**: der Name des Befehls;
- **Benutzer**: entsprechender Benutzer in Jeedom (ermöglicht Ihnen, bestimmte Interaktionen auf bestimmte Benutzer zu beschränken);
- **Anzahl**: Telefonnummer, an die Nachrichten gesendet werden sollen. Sie können mehrere Zahlen eingeben, indem Sie sie durch „;“ trennen (Beispiel: „+33612345678;+33698765432“.). *Wichtig* : Es ist notwendig, die Zahlen im internationalen Format (+33 für Frankreich zum Beispiel) anzugeben).

> **Wichtig**
>
> Nur die in einem Gerät angegebenen Telefonnummern können die Interaktionen verwenden, da nur sie autorisiert werden.

# Mit dem Plugin

Dieser funktioniert ziemlich standardmäßig, also müssen Sie neue Geräte hinzufügen und dann konfigurieren:

- Der Name davon,
- Ob es aktiv ist oder nicht,

Dann müssen Sie die Befehle hinzufügen, die aus einem Namen und einer Nummer bestehen. Nur die in der Befehlsliste aufgeführten Nummern können eine Antwort von Jeedom erhalten (dies ermöglicht die Sicherung, ohne ein Kennwort festzulegen jeder Start einer an Jeedom gesendeten SMS). Sie können auch angeben, welcher Benutzer mit dieser Nummer verknüpft ist (für die Rechteverwaltung auf Interaktionsebene).

Um mit Jeedom zu kommunizieren, reicht es dann aus, ihm eine Nachricht von einer autorisierten Nummer zu senden, wobei alle Interaktionen vom Interaktionssystem stammen.

>**BEISPIEL FÜR DIE INTERAKTION** :
>
> - Frage : *"Was ist die Temperatur des Raumes ?"*
> - Antwort : *"16,3 ° C."*

# Liste der kompatiblen Schlüssel

- HUAWEI E220
- Alcatel One Touch X220L
- HSDPA 7.2MBPS 3G Wireless
- HUAWEI E3372
- USB SIM800C (Geschwindigkeit 9600)

# FAQ

> **Ich bekomme nichts mit einem huwaei e160 Schlüssel.**
>
>Sie müssen minicom installieren (`sudo apt-get install -y minicom`), es ausführen und eine Verbindung zum Modem herstellen :
>
>`` `{.bash}
>AT ^ CURC = 0
>AT ^ u2diag = 0
>`` ''
>
>Und auf dem Plugin tun :
>
>- Wählen Sie den ersten USB-Anschluss und nicht den zweiten
>- Geschwindigkeit : 9600
>- Textmodus aus

> **Ich kann den USB-Anschluss meines Schlüssels nicht sehen**
>
>Stellen Sie sicher, dass Sie brltty nicht installiert haben (`sudo apt-get remove brltty`, um es zu entfernen).

> **Nach einigen Stunden / Tagen erhalte ich keine SMS mehr und kann keine mehr senden, korrigiert eine Erinnerung des Dämons**
>
>Überprüfen Sie Ihr USB-Kabel (ein schlechtes USB-Kabel verursacht häufig solche Probleme, es sollte auch nicht zu lang sein). Überprüfen Sie auch Ihr Netzteil. Ein USB-Hub wird dringend empfohlen.

> **Ich habe einen CME-Fehler XX**
>
>Sie können finden [hier](https://support.micromedia-int.com/hc/fr/articles/360010426299-Modem-GSM-CME-ERRORS-Erreurs-GSM-li%C3%A9es-%C3%A0-l-%C3%A9quipement-) Beschreibung der verschiedenen CME-Fehler.

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
>Eine der wahrscheinlichen Ursachen ist die falsche Netzwerkkonfiguration. Überprüfen Sie unter "Einstellungen" → "System" → "Konfiguration" → "Netzwerke" den Inhalt des Feldes "URL oder IP-Adresse"". Letzteres darf nicht localhost oder 127.0.0 sein.1 aber die IP-Adresse Ihres Jeedom oder dessen DNS-Namen.

> **Im Debug-Modus wird der Fehler "Timeout" angezeigt**
>
>Dieser Fehler tritt auf, wenn der Schlüssel nicht innerhalb von 10 Sekunden nach einer Anforderung antwortet. Bekannte Ursachen können sein :
>
>- Inkompatibilität des GSM-Schlüssels,
>- Problem mit der Firmware-Version des Sticks.

> **Beim Starten im Debug-Modus habe ich : "Steckdose bereits in Gebrauch"**
>
>Dies bedeutet, dass der Dämon gestartet wird, aber Jeedom ihn nicht aufhalten kann. Sie können entweder das gesamte System neu starten oder in SSH tun ``killall -9 refxcmd.py``.

> **Der Dämon weigert sich zu starten**
>
>Versuchen Sie, es im Debug-Modus zu starten, um den Fehler zu sehen.

> **Ich habe mehrere USB-Anschlüsse für meinen GSM-Schlüssel, während ich nur einen habe**
>
>Dies ist normal, aus einem unbekannten Grund erstellen die GSM-Schlüssel 2 *(Mehr sehen)* USB-Anschlüsse auf Systemebene. Wählen Sie einfach eine, egal welche.

> **Jeedom sendet oder empfängt keine SMS mehr**
>
>Dies geschieht normalerweise, wenn der GSM-Schlüssel keine Verbindung mehr zum Netzwerk herstellen kann. Bewegen Sie es, um festzustellen, ob es nach einigen Minuten wieder verfügbar ist.

>**Ich habe Empfangsbedenken, die für ein paar Stunden dann nichts arbeiten**
>
>Legen Sie die SIM-Karte in ein Mobiltelefon ein und leeren Sie alle Textnachrichten von der Karte (gesendet und empfangen)).
