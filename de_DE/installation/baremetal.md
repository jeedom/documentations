# Installation auf einem physischen Computer

Der Zweck dieser Dokumentation besteht darin, die Installation von jeedom auf einer physischen x86-64-Maschine (Intel NUC-Typ)

# Automatische Installation

Jeedom iso herunterladen [hier](https://images.jeedom.com/x86-64/).

## Gravur auf USB-Stick

Sie können das UNetbootin-Tool (herunterladbar [hier](https://unetbootin.github.io/) ).

Einmal starten : 

- Wählen Sie "Diskimage" (ganz unten)
- Klicken Sie auf ... und wählen Sie die im vorherigen Schritt heruntergeladene Jeedom-ISO-Datei aus
- Wählen Sie Ihren USB-Stick in „Drive"
- OK klicken

Dann muss man eben ``booter`` auf dem USB-Stick. Motherboards haben normalerweise 2 Boot-Modi : UEFI (neuer, die Standardauswahl) und BIOS (die history). Wir empfehlen Ihnen, das BIOS zu nehmen (die Option ändert sich je nach Motherboard und ist nicht immer leicht zu finden, daher können wir Ihnen kein allgemeines Verfahren geben)

## Installation im Bios-Modus (empfohlen)

- Wählen Sie „Jeedom installieren"
- Und schließlich „Ja"

## Installation im UEFI-Modus (nicht empfohlen)

- Wählen Sie „Erweiterte Optionen“"
- Und schließlich "Im Textmodus installieren"

>**HINWEIS**
>
>Alle anderen Optionen werden irrtümlicherweise nur die in dieser Dokumentation beschriebene und gültige hervorbringen

Warten Sie, bis die Installation von selbst abgeschlossen ist

>**HINWEIS**
>
>Während der Installation benötigen Sie unbedingt eine Internetverbindung

Dann können Sie der Dokumentation folgen [Erster Schritt mit Jeedom](https://doc.jeedom.com/de_DE/premiers-pas/index)

# Manuelle Installation

Sobald das Betriebssystem installiert ist (vorzugsweise die neueste Version von Debian), befolgen Sie dies [Dokumentation](https://doc.jeedom.com/de_DE/installation/cli)



