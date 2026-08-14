# Kompatibilität

>**INFORMATION**
>
>Das Jeedom-Team ist bestrebt, diese Informationen auf dem neuesten Stand zu halten, was manchmal auf Kosten anderer Entwicklungen geht. Die Unterstützung durch die Community ist für alle Bereiche der Dokumentation von großem Wert, wobei diese Seite zu den Prioritäten zählt.

## Offizielle Boxen

**Jeedom und Domadoo** entwickeln und vertreiben offizielle „schlüsselfertige“ Boxen, auf denen Jeedom auf einem optimierten System vorinstalliert ist und die Dienste, Plugins sowie einen erweiterten technischen Support umfassen. Die offiziellen Boxen verfügen zudem über ein Tool zur automatischen Systemwiederherstellung.

{% include lightbox.html src="../images/tableau-comparatif-atlas-et-luna.jpg" data="AtlasLuna" title="Jeedom Atlas & Jeedom Luna" imgstyle="display:block;margin:0 auto;" %}

| Jeedom Atlas | Jeedom Luna |
|-------------------------|-------------------------|
| [Atlas **ohne Protokoll**](https://www.domadoo.fr/fr/box-domotique/7329-jeedom-controleur-domotique-jeedom-atlas-sans-protocole.html){:target="_blank"} | [Luna **Z-Wave, Zigbee + BT**](https://www.domadoo.fr/fr/box-domotique/6280-jeedom-controleur-domotique-jeedom-luna-z-wave700-zigbee30-bt.html){:target="_blank"} |
| [Atlas **EnOcean**](https://www.domadoo.fr/fr/box-domotique/5877-jeedom-atlas-enocean.html){:target="_blank"} | [Luna **Z-Wave, Zigbee + 4G**](https://www.domadoo.fr/fr/box-domotique/6615-jeedom-controleur-domotique-jeedom-luna-z-wave-zigbee-et-4g.html){:target="_blank"} |
| [Atlas **EnOcean + Z-Wave-Adapter ZOOZ**](https://www.domadoo.fr/fr/box-domotique/6857-jeedom-controleur-domotique-jeedom-atlas-enocean-dongle-z-wave-zooz.html){:target="_blank"} | [Luna **Z-Wave, Zigbee, LoRaWAN + 4G**](https://www.domadoo.fr/fr/box-domotique/6617-jeedom-controleur-domotique-jeedom-luna-z-wave-zigbee-lorawan-4g.html){:target="_blank"} |
| [Atlas **Pro DIN-Schiene ohne Protokoll**](https://www.domadoo.fr/fr/box-domotique/6567-jeedom-controleur-domotique-sur-rail-din-jeedom-atlas-pro-sans-antenne.html){:target="_blank"} |             |
| [Atlas **Pro DIN-Schiene EnOcean**](https://www.domadoo.fr/fr/box-domotique/6565-jeedom-atlas-pro-enocean.html){:target="_blank"} |             |
| [Atlas **Pro DIN-Schiene KNX**](https://www.domadoo.fr/fr/box-domotique/6563-jeedom-controleur-domotique-sur-rail-din-jeedom-atlas-pro-knx.html){:target="_blank"} |             |

>**INFORMATION**
>
>Auch wenn sie nicht mehr aktiv vermarktet wird, ist die Jeedom Smart-Box nach wie vor eine durchaus brauchbare offizielle Lösung, deren System weiterhin vom Team gepflegt wird.

## Hardware

Unsere Empfehlungen hängen von verschiedenen Faktoren ab:

- **Jeedom Atlas oder Luna**: die Kombination aus Einfachheit, Optimierung und fortschrittlicher Kompatibilität.
- **Nano-Computer** *(Odroid C2, Rock Pi, Raspberry Pi usw.)*: das beste Preis-Leistungs-Verhältnis.
- **Mini-PC** *(NUC)*: Extrem hohe Leistung für ein etwas größeres Budget *(siehe [das spezielle Tutorial für Fortgeschrittene](/howtoadvance/vmware.installation_sur_nuc) weitere Informationen)*.

### Unterstützte Geräte

>**WICHTIG**
>
>Der offizielle Support gilt ausschließlich für die Jeedom-Instanz. Nur die offiziellen Boxen profitieren ebenfalls vom System-Support *(ohne Modifikationen)*.

| Offizielle Boxen | Nanocomputer | Computer | Hypervisoren |
|------------------------|------------------------|------------------------|------------------------|
| Smart, Atlas, Luna     | Odroid C2, Rock Pi Serie 4, Raspberry Pi 3/4 und ähnliche Modelle | 64-Bit-Systeme, Mini-PCs *(NUC)*, Intel® N100-Prozessor | 64-Bit-Systeme, VirtualBox, VMware, Proxmox, Hyper-V, Freebox |

### Nicht unterstützte Geräte

| Offizielle Boxen | Nanocomputer | Computer | Hypervisoren |
|------------------------|------------------------|------------------------|------------------------|
| Jeedomboard, Mini+     | Hummingboard, Raspberry Pi 0/1/2 und ähnliche Modelle | 32-Bit-Systeme | 32-Bit-Systeme |

## Softwarebasiert

### Debian

| Version | Status |
|--------------------|--------------------|
| Debian 11 Bullseye | Empfohlen |
| Debian 12 Bookworm | Unterstützt *(4,5)*   |
| Debian 13 Trixie   | Wird derzeit geprüft |
| Debian 10 Buster und ältere Versionen | Nicht unterstützt |

### PHP

| Version | Status |
|--------------------|--------------------|
| PHP 7 | Empfohlen |
| PHP 8 | Unterstützt *(4.5)*   |
| PHP 5.6 | Ende des Supports *(4.1)* |
| PHP 5.5 und älter | Nicht unterstützt     |

### MySQL

| Version | Status |
|--------------------|--------------------|
| MySQL 7.4 | Empfohlen |
| MySQL 5.5/5.6/5.7  | Unterstützt |

### MariaDB

| Version | Status |
|--------------------|--------------------|
| MariaDB 10 | Empfohlen |

## Offizielle System-Images

Das Team entwickelt maßgeschneiderte System-Images für zahlreiche verschiedene Geräte, darunter Debian, Jeedom und alle empfohlenen Software-Abhängigkeiten:

| Systemabbild | Dokumentation |
|--------------------|--------------------|
| [Luna](https://images.jeedom.com/luna/){:target="_blank"} | [Installation auf Luna](/plugins/home%20automation%20protocol/luna) |
| [Atlas](https://images.jeedom.com/atlas/){:target="_blank"} | [Installation auf Atlas](/installation/recovery) |
| [Smart](https://images.jeedom.com/smart/){:target="_blank"} | [Installation auf Smart](/installation/recovery) |
| [Computer](https://images.jeedom.com/x86-64/){:target="_blank"} | [Installation auf PC/Mini-PC](/installation/baremetal) |
| [Hypervisoren](https://images.jeedom.com/x86-64/){:target="_blank"} | [Installation auf einer virtuellen Maschine](/installation/vm) |
| [Freebox](https://images.jeedom.com/freebox/){:target="_blank"} | [Installation auf der Freebox](/installation/freeboxdelta) |

### Datei überprüfen

Der **SHA256-Schlüssel**, mit dem die Integrität der heruntergeladenen Datei überprüft werden kann, ist in der Datei einsehbar `info.json` befindet sich im Download-Ordner.

### Erste Anmeldung

Die Dokumentation zur [**Erste Anmeldung**](/premiers-pas/#Première%20connexion) um nach der Installation auf die Jeedom-Benutzeroberfläche zuzugreifen.

### Systemkonsole

>**WICHTIG**
>
>Es wird weder empfohlen noch ist es erforderlich, auf der Systemkonsole Eingriffe vorzunehmen, um Jeedom zu nutzen.\
>Jede Änderung am System kann sich auf den ordnungsgemäßen Betrieb von Jeedom auswirken.

Die Standard-Anmeldedaten für den Zugriff auf die Systemkonsole *(Tastatur/Bildschirm oder SSH)* lauten: `jeedom/Mjeedom96`. Das Passwort `root` ist identisch.

## Kompatible Geräte

Je nach den verwendeten Protokollen und Plugins ist es nicht immer einfach zu erkennen, ob ein Modul tatsächlich unterstützt wird. Um Ihnen dabei zu helfen, die Kompatibilität Ihrer Hardware zu überprüfen, können Sie sich auf die Website verlassen [Kompatibilität mit Jeedom](https://compatibility.jeedom.com/){:target="_blank"} deren Liste von den Plugins selbst auf dem neuesten Stand gehalten wird.

Ergänzend dazu können die Informationen auf dieser Website mit denen auf der Online-Verkaufsseite für Hausautomationsgeräte abgeglichen werden [Domadoo](https://www.domadoo.fr/){:target="_blank"}.

Nachfolgend finden Sie einige Beispiele für Links, die Sie je nach dem jeweiligen Protokoll aufrufen können:

### Bluetooth

- [**Kompatibilität von Jeedom mit Bluetooth**](https://compatibility.jeedom.com/index.php?v=d&p=home&protocol=Bluetooth){:target="_blank"}

### Kameras

- [**Kompatibilität von Jeedom mit Kameras**](https://compatibility.jeedom.com/index.php?v=d&p=home&protocol=IP){:target="_blank"}
- [**Domadoo – Kameras**](https://www.domadoo.fr/fr/128-cameras-connectees){:target="_blank"}

### EnOcean

- [**Kompatibilität zwischen Jeedom und EnOcean**](https://compatibility.jeedom.com/index.php?v=d&p=home&protocol=EnOcean){:target="_blank"}
- [**Domadoo – EnOcean**](https://www.domadoo.fr/fr/225-domotique-enocean){:target="_blank"}

### RFXcom

- [**Kompatibilität zwischen Jeedom und RFXcom**](https://compatibility.jeedom.com/index.php?v=d&p=home&protocol=Rfxcom){:target="_blank"}

### Zigbee

- [**Kompatibilität zwischen Jeedom und Zigbee**](https://compatibility.jeedom.com/index.php?v=d&p=home&protocol=zigbee){:target="_blank"}
- [**Domadoo – Zigbee**](https://www.domadoo.fr/fr/206-produits-zigbee){:target="_blank"}

### Z-Wave

- [**Kompatibilität zwischen Jeedom und Z-Wave**](https://compatibility.jeedom.com/index.php?v=d&p=home&protocol=Z-Wave){:target="_blank"}
- [**Domadoo – Z-Wave**](https://www.domadoo.fr/fr/210-produits-zwave){:target="_blank"}

## Beispiel für eine DIY-Montage

Für den DIY-Einbau (Do It Yourself) finden Sie hier eine „typische“ Konfiguration für den erfolgreichen Einstieg mit Jeedom und Z-Wave:

1.  Raspberry Pi 4:

    -   Ein Raspberry Pi + Gehäuse ~ 50 €
    -   Ein Aeotec Gen 5-Schlüssel ~ 60 €
    -   Eine microSD-Karte ~ 7 €
    -   Ein USB-Netzteil ~ 8 €

Das ergibt insgesamt 125 € für eine Open-Source-Hausautomationsbox, bei der Sie die vollständige Kontrolle über die Installation haben.

>**INFORMATION**
>
>Es ist möglich, eine RFxcom-Antenne, einen enOcean-Stick usw. hinzuzufügen oder auszutauschen. Grundsätzlich wird pro zusätzlichem Protokoll ein USB-Stick benötigt. Je nach Anzahl und Gesamtstromaufnahme benötigen Sie auf einem Raspberry Pi möglicherweise einen zusätzlichen USB-Hub mit eigener Stromversorgung.\
>Für den Z-Wave-Stick Aeotec Gen 5 in Kombination mit einem Raspberry Pi 4 (frühere Modelle sind davon nicht betroffen) muss ein aktuelles Modell verwendet werden, wenn Sie auf einen USB-Hub verzichten möchten. Informieren Sie sich bei einem Händler für Hausautomationsausrüstung und kaufen Sie dort ein.\
>Bei einem RPi 4 wird dringend empfohlen, die microSD-Karte durch eine mSATA-USB3-Festplatte zu ersetzen, die direkt an den USB3-Anschluss angeschlossen wird und über natives Booten verfügt. microSD-Karten haben bei intensiver Datennutzung eine sehr begrenzte Lebensdauer: Sie sollten daher nur für kurze Testphasen verwendet werden.
