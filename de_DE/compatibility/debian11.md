# Debian 11

## Introduction

Hier finden Sie einen Bericht unserer Jeedom-Tests unter Debian 11. Zur Erinnerung: Debian 11 wurde am 15. August 2021 offiziell in Stable veröffentlicht und beinhaltet insbesondere viele Änderungen : 

- Übergang ab PHP 7.3 bis 7,4
- Beginn der Entfernung von Python 2
- Update vieler Pakete

## Core

### 4.1.X

Wir haben noch keine Auswirkungen festgestellt.

### 4.2.X

Es gibt ein Problem mit dem neuen Abhängigkeitsinstallationssystem für das, das pip3 verwendet (pip3 existiert nicht mehr und wird durch pip . ersetzt)

## Plugins

Wir können nicht alle Plugins testen, daher geben wir im Moment nur das Feedback der getesteten Plugins an (diese Liste wird im Laufe unserer Tests aktualisiert)

- Openvpn (DNS jeedom) => OK
- Kamera => OK
- Zigbee => OK
- Openzwave => NOK (Problem beim Installieren von Abhängigkeiten)
- mobil => ok
- gcast => ok
- Netzwerk => ok
- rfxcom => ok
- sonos => ok


>**WICHTIG**
>
>Diese Tests wurden in einer virtuellen Umgebung ohne Geräte durchgeführt. Im Moment haben wir nur überprüft, ob die Abhängigkeiten gut installiert sind und die Dämonen starten
