# Hardware

Jeedom kann auf verschiedenen Hardwarekomponenten installiert werden :

-   ein Raspberry Pi 2, 3 oder 4 
-   Synology NAS
-   jedes Linux-System basierend auf Debian 11 (Bullseye)
-   Freebox Delta

Sie können auch eine vorgefertigte Box mit vorinstalliertem Jeedom kaufen, die auch ein Service Pack (mehr Support und Services) und angebotene Plugins enthält :

- [Jeedom Atlas Z-Wave +](https://www.domadoo.fr/fr/box-domotique/5847-jeedom-controleur-domotique-jeedom-atlas-z-wave.html)
- [Jeedom Atlas Zigbee](https://www.domadoo.fr/fr/box-domotique/5878-jeedom-controleur-domotique-jeedom-atlas-zigbee.html)
- [Jeedom Atlas EnOcean](https://www.domadoo.fr/fr/box-domotique/5877-jeedom-controleur-domotique-jeedom-atlas-enocean.html)

{% include lightbox.html src="images/Jeedom-Atlas-infographic-2.jpg" data="Atlas" title="Jeedom Atlas" imgstyle="width:auto;display: block;margin: 0 auto;" %}

In der DIY-Bearbeitung (Do It Yourself) finden Sie hier eine "typische" Konfiguration, um mit Jeedom in Z-Wave zu beginnen :

1. Himbeer pi 4 :

-   Eine Himbeere + Box 50 €
-   Ein Aeotec Gen 5 Schlüssel \ ~ 60 €
-   Eine microSD-Mikrokarte \ ~ 7 €
-   Ein USB-Netzteil 8 €

Insgesamt 125 € für eine Open Source-Hausautomationsbox mit vollständiger Kontrolle über deren Installation.

> **Spitze**
>
> - Es ist möglich, eine Rfxcom-Antenne oder einen enOcean-Schlüssel usw. hinzuzufügen oder zu ändern. 
> - Grundsätzlich benötigen Sie pro Zusatzprotokoll einen USB-Stick. Abhängig von ihrer Anzahl und ihrem kumulierten Verbrauch benötigen Sie auf einem Raspberry Pi möglicherweise einen zusätzlichen USB-Hub mit dediziertem Netzteil. 
> - Für den Z-Wave Aeotec Gen 5-Schlüssel, der kumulativ mit einem Raspberry Pi 4 verwendet wird (frühere Modelle sind nicht betroffen), müssen Sie einen neueren verwenden, wenn Sie einen USB-Hub entfernen möchten. Holen Sie sich Informationen und Zubehör von einem Verkäufer von Hausautomationsgeräten.
> - Unter RPi 4 wird dringend empfohlen, die microSD-Karte durch eine mSATA USB3-Festplatte zu ersetzen, die mit nativem Start direkt an den USB3-Anschluss angeschlossen ist. MicroSD-Karten haben aufgrund des intensiven Datenaustauschs eine sehr begrenzte Lebensdauer: Nur für kurze Testzeiten reserviert.

> **Spitze**
>
> Jeedom ist eine Software, die Open Source ist und bleiben wird. Ihre Verwendung ist völlig kostenlos und hängt nicht von einer Cloud oder einem Abonnement ab. Einige Plugins, die die Kapazität von Jeedom oder dessen Verwendung erhöhen, können jedoch kostenpflichtig sein **und benötigen möglicherweise eine Internetverbindung**. Sie finden die Liste der Plugins [hier](http://market.jeedom.fr/index.php?v=d&p=market&type=plugin).

> **Spitze**
>
> Service Pack ? Quézako ? Sie können sehen [hier](https://blog.jeedom.com/?p=1215) die Vorteile von Service Packs.

# Installation

Ich möchte Jeedom installieren :

- Auf einem [Luna](https://doc.jeedom.com/de_DE/plugins/home%20automation%20protocol/luna)
- Auf einem [Atlas](https://doc.jeedom.com/de_DE/installation/atlas)
- Auf einem [SMART](https://doc.jeedom.com/de_DE/installation/smart)
- Auf einem [mini +](https://doc.jeedom.com/de_DE/installation/mini)
- Auf einem [Himbeer-Pi](https://doc.jeedom.com/de_DE/installation/rpi)
- Auf einem [Freebox Delta](https://doc.jeedom.com/de_DE/installation/freeboxdelta)
- In [Befehlszeile](https://doc.jeedom.com/de_DE/installation/cli)
- Auf einem [VM](https://doc.jeedom.com/de_DE/installation/vm)
- Auf einem [Docker](https://doc.jeedom.com/de_DE/installation/docker). Notiz : Wir empfehlen diesen Installationsmodus nicht, da die Verwendung bestimmter Geräte aufgrund des Docker-Netzwerkmodus kompliziert ist
- Auf einem [NAS-Synologie](https://doc.jeedom.com/de_DE/installation/synology). Notiz : Wir empfehlen diesen Installationsmodus nicht, da die Verwendung bestimmter Geräte aufgrund des Docker-Netzwerkmodus kompliziert ist
- Auf [Bare-Metal (Typ Intel Nuc))](https://doc.jeedom.com/de_DE/installation/baremetal)

Vergessen Sie nach der Installation nicht, die Dokumentation zu lesen [Erster Schritt mit Jeedom](https://doc.jeedom.com/de_DE/premiers-pas/index)
