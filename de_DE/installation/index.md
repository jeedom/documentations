# Material

Jeedom kann auf verschiedenen Hardwarekomponenten installiert werden :

-   ein Raspberry Pi 2, 3 oder 4 
-   ein Synology-NAS
-   jedes Linux-System basierend auf Debian 10 (Buster)
-   Freebox-Delta

Sie können auch eine fertige Box mit vorinstalliertem Jeedom kaufen, die auch ein Service Pack (mehr Support und Dienste) und kostenlose Plugins enthält :

- [Jeedom-Atlas Z-Wave+](https://www.domadoo.fr/fr/box-domotique/5847-jeedom-controleur-domotique-jeedom-atlas-z-wave.html)
- [Jeedom Atlas Zigbee](https://www.domadoo.fr/fr/box-domotique/5878-jeedom-controleur-domotique-jeedom-atlas-zigbee.html)
- [Jeedom-Atlas EnOcean](https://www.domadoo.fr/fr/box-domotique/5877-jeedom-controleur-domotique-jeedom-atlas-enocean.html)

{% include lightbox.html src="images/Jeedom-Atlas-infographic-2.jpg" data="Atlas" title="Jeedom Atlas" imgstyle="width:auto;display: block;margin: 0 auto;" %}

In der DIY-Montage (Do It Yourself) ist hier eine "typische" Konfiguration, um mit Jeedom in Z-Wave zu beginnen :

1. Himbeer-Pi 4 :

-   Eine Himbeer+Box ~ 50 €
-   Ein Aeotec Gen 5 Key ~ 60 €
-   Eine Micro-microSD-Karte ~ 7 €
-   Ein USB-Netzteil ~ 8 €

Das sind insgesamt 125 € für eine Open-Source-Hausautomationsbox mit vollständiger Kontrolle über ihre Installation.

> **Tipp**
>
> - Es ist möglich, eine Rfxcom-Antenne oder einen enOcean-Schlüssel usw. hinzuzufügen oder zu ändern. 
> - Grundsätzlich benötigen Sie pro Zusatzprotokoll einen USB-Stick. Abhängig von ihrer Anzahl und ihrem kumulierten Verbrauch benötigen Sie auf einem Raspberry Pi möglicherweise einen zusätzlichen USB-Hub mit seiner dedizierten Stromversorgung. 
> - Für den Z-Wave Aeotec Gen 5 Key in Kombination mit einem Raspberry Pi 4 (Vorgängermodelle nicht betroffen) müssen Sie einen neueren verwenden, wenn Sie auf einen USB-Hub verzichten möchten. Erkundigen Sie sich bei einem Verkäufer von Heimautomatisierungsgeräten und erhalten Sie Zubehör.
> - Auf RPi 4 wird dringend empfohlen, die microSD-Karte durch eine mSATA USB3-Festplatte zu ersetzen, die direkt mit dem USB3-Port mit nativem Boot verbunden ist. MicroSD-Karten haben bei intensivem Datenaustausch eine sehr begrenzte Lebensdauer: nur für kurze Testzeiten zu reservieren.

> **Tipp**
>
> Jeedom ist eine Software, die Open Source ist und bleiben wird, ihre Nutzung ist völlig kostenlos und unabhängig von einer Cloud oder einem Abonnement. Einige Plugins, die die Funktionen von Jeedom oder seine Verwendung erweitern, können jedoch kostenpflichtig sein **und benötigen möglicherweise eine Internetverbindung**. Sie können die Liste der Plugins finden [hier](http://market.jeedom.fr/index.php?v=d&p=market&type=plugin).

> **Tipp**
>
> Service Pack ? Quezako ? Du kannst sehen [hier](https://blog.jeedom.com/?p=1215) die Vorteile von Service Packs.

# Installation

Ich möchte Jeedom installieren :

- Auf einen [Atlas](https://doc.jeedom.com/de_DE/installation/atlas)
- Auf einen [Clever](https://doc.jeedom.com/de_DE/installation/smart)
- Auf einen [Minute+](https://doc.jeedom.com/de_DE/installation/mini)
- Auf einen [Himbeer-pi](https://doc.jeedom.com/de_DE/installation/rpi)
- Auf einen [Freebox-Delta](https://doc.jeedom.com/de_DE/installation/freeboxdelta)
- Im [Befehlszeile](https://doc.jeedom.com/de_DE/installation/cli)
- Auf einen [VM](https://doc.jeedom.com/de_DE/installation/vm)
- Auf einen [Docker](https://doc.jeedom.com/de_DE/installation/docker). Notiz : Wir empfehlen diesen Installationsmodus nicht, der die Verwendung bestimmter Geräte aufgrund des Netzwerkmodus von Docker erschwert
- Auf einen [NAS-Synology](https://doc.jeedom.com/de_DE/installation/synology). Notiz : Wir empfehlen diesen Installationsmodus nicht, der die Verwendung bestimmter Geräte aufgrund des Netzwerkmodus von Docker erschwert
- Auf der [Bearemetal (Intel Nuc-like)](https://doc.jeedom.com/de_DE/installation/baremetal)

Vergessen Sie nach Abschluss der Installation nicht, die Dokumentation zu konsultieren [Erster Schritt mit Jeedom](https://doc.jeedom.com/de_DE/premiers-pas/index)
