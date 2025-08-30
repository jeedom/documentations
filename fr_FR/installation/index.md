# Installation

**Jeedom est un logiciel qui est, et restera, open source**. Son utilisation est entièrement gratuite et ne requiert aucun service cloud ou abonnement pour fonctionner.
Certains plugins peuvent cependant être payants et/ou nécessiter une connexion internet, [**la liste complète des plugins disponibles est consultable sur le Market Jeedom**](http://market.jeedom.fr/index.php?v=d&p=market&type=plugin){:target="_blank"}.

## Compatibilité

Jeedom peut être installé sur [tout matériel supporté](../compatibility/index#matériels-supportés) prenant en charge le système [**Linux Debian en version actuellement recommandée**](../compatibility/index#Debian).

## Sauvegarde de Jeedom

En cas de réinstallation, **il est indispensable de télécharger une sauvegarde récente de Jeedom** qui pourra être restaurée à l'issue de la procédure :

1. Depuis l'interface Jeedom, cliquer sur le menu **Réglages > Système > Sauvegardes**.

2. Cliquer sur le bouton **Lancer une sauvegarde**.

3. Quand l'opération est terminée, cliquer sur **Télécharger la sauvegarde**.

## Boxes officielles

**Jeedom et Domadoo** développent et commercialisent des boxes officielles « clé en main », avec Jeedom préinstallé sur un système optimisé et incluant des services, des plugins ainsi qu'un support technique renforcé. Les boxes officielles bénéficient également d'un outil de restauration système automatique.

{% include lightbox.html src="images/tableau-comparatif-atlas-et-luna.jpg" data="AtlasLuna" title="Jeedom Atlas & Jeedom Luna" imgstyle="width:75%;display:block;margin:0 auto;" %}

| Jeedom Atlas            | Jeedom Luna             |
|-------------------------|-------------------------|
| [Atlas **sans protocole**](https://www.domadoo.fr/fr/box-domotique/7329-jeedom-controleur-domotique-jeedom-atlas-sans-protocole.html){:target="_blank"} | [Luna **Z-Wave, Zigbee + BT**](https://www.domadoo.fr/fr/box-domotique/6280-jeedom-controleur-domotique-jeedom-luna-z-wave700-zigbee30-bt.html){:target="_blank"} |
| [Atlas **EnOcean**](https://www.domadoo.fr/fr/box-domotique/5877-jeedom-atlas-enocean.html){:target="_blank"} | [Luna **Z-Wave, Zigbee + 4G**](https://www.domadoo.fr/fr/box-domotique/6615-jeedom-controleur-domotique-jeedom-luna-z-wave-zigbee-et-4g.html){:target="_blank"} |
| [Atlas **EnOcean + clé Z-Wave ZOOZ**](https://www.domadoo.fr/fr/box-domotique/6857-jeedom-controleur-domotique-jeedom-atlas-enocean-dongle-z-wave-zooz.html){:target="_blank"} | [Luna **Z-Wave, Zigbee, LoRaWAN + 4G**](https://www.domadoo.fr/fr/box-domotique/6617-jeedom-controleur-domotique-jeedom-luna-z-wave-zigbee-lorawan-4g.html){:target="_blank"} |
| [Atlas **Pro rail DIN sans protocole**](https://www.domadoo.fr/fr/box-domotique/6567-jeedom-controleur-domotique-sur-rail-din-jeedom-atlas-pro-sans-antenne.html){:target="_blank"} |             |
| [Atlas **Pro rail DIN EnOcean**](https://www.domadoo.fr/fr/box-domotique/6565-jeedom-atlas-pro-enocean.html){:target="_blank"} |             |
| [Atlas **Pro rail DIN KNX**](https://www.domadoo.fr/fr/box-domotique/6563-jeedom-controleur-domotique-sur-rail-din-jeedom-atlas-pro-knx.html){:target="_blank"} |             |

## Procédure détaillée

Quel que soit le support choisi pour déployer votre instance Jeedom, vous trouverez la documentation d'installation détaillée correspondante.

Vous souhaitez installer Jeedom :

- [sur une **Luna**](https://doc.jeedom.com/fr_FR/plugins/home%20automation%20protocol/luna)
- [sur une **Smart/Atlas**](./recovery)
- [sur un **Raspberry Pi**](./rpi)
- [sur un **PC/mini-PC**](./baremetal)
- [sur une **machine virtuelle**](./vm)
- [sur une **Freebox Delta**](./freeboxdelta)
- [dans un **conteneur LXC Proxmox**](https://community-scripts.github.io/ProxmoxVE/scripts?id=jeedom){:target="_blank"}
- [dans un **conteneur Docker**](./docker) *(non recommandé)*
- [en **ligne de commande**](./cli) *(utilisateurs avancés)*

## Premiers pas avec Jeedom

Le temps que l'installation se termine, pensez à consulter la documentation [**Premiers pas avec Jeedom**](../premiers-pas/index).
