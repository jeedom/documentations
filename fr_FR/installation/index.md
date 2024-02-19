# Matériel

Jeedom peut être installé sur différents composants hardware :

-   un Raspberry Pi 2, 3 ou 4 
-   un NAS Synology
-   tout système Linux basé sur Debian 11 (Bullseye)
-   Freebox Delta

Vous pouvez aussi acheter une box toute faite avec Jeedom préinstallé qui contient en plus un service pack (plus de support et de services) et des plugins offerts :

- [Jeedom Atlas Z-Wave+](https://www.domadoo.fr/fr/box-domotique/5847-jeedom-controleur-domotique-jeedom-atlas-z-wave.html)
- [Jeedom Atlas Zigbee](https://www.domadoo.fr/fr/box-domotique/5878-jeedom-controleur-domotique-jeedom-atlas-zigbee.html)
- [Jeedom Atlas EnOcean](https://www.domadoo.fr/fr/box-domotique/5877-jeedom-controleur-domotique-jeedom-atlas-enocean.html)

{% include lightbox.html src="images/Jeedom-Atlas-infographic-2.jpg" data="Atlas" title="Jeedom Atlas" imgstyle="width:auto;display: block;margin: 0 auto;" %}

En montage DIY (Do It Yourself), voici une configuration "type" pour bien débuter avec Jeedom en Z-Wave :

1.  Raspberry Pi 4 :

-   Un raspberry+boitier \~ 50 €
-   Une clef Aeotec Gen 5 \~ 60 €
-   Une micro carte microSD \~ 7 €
-   Une alimentation USB \~ 8 €

Soit un total de 125 € pour une box domotique open source avec une maîtrise complète de son installation.

> **Tip**
>
> - Il est possible d’ajouter ou de changer par une antenne Rfxcom, ou une clef enOcean, etc. 
> - En principe, il vous faut une clef USB par protocole supplémentaire. En fonction de leur nombre et de leur consommation cumulée, sur un Raspberry Pi vous pouvez avoir besoin d'un hub USB complémentaire avec son alimentation dédiée. 
> - Pour la clef Z-Wave Aeotec Gen 5 en utilisation cumulée avec un Raspberry Pi 4 (modèles antérieurs non concernés), il faut en utliser une récente si vous souhaitez vous affranchir d'un hub USB. Se renseigner et se fournir chez un vendeur d'équipements domotiques.
> - Sur RPi 4, il est vivement conseillé de remplacer la carte microSD par un disque dur mSATA USB3, directement relié au port USB3 avec boot natif. Les cartes microSD ont une durée de vie très limitée en échange de données intensif: à ne réserver que pour de courtes périodes de tests.

> **Tip**
>
> Jeedom est un logiciel qui est et restera open source, son utilisation est entièrement gratuite et ne dépend pas d’un cloud ou d’un abonnement. Cependant, certains plugins qui permettent d’augmenter les capacités de Jeedom ou son utilisation peuvent être payants **et peuvent avoir besoin d’une connexion internet**. Vous pouvez retrouver la liste des plugins [ici](http://market.jeedom.fr/index.php?v=d&p=market&type=plugin).

> **Tip**
>
> Service pack ? Quézako ? Vous pouvez voir [ici](https://blog.jeedom.com/?p=1215) les avantages des service packs.

# Installation

Je veux installer Jeedom :

- Sur une [luna](https://doc.jeedom.com/fr_FR/plugins/home%20automation%20protocol/luna)
- Sur une [atlas](https://doc.jeedom.com/fr_FR/installation/atlas)
- Sur une [smart](https://doc.jeedom.com/fr_FR/installation/smart)
- Sur une [mini+](https://doc.jeedom.com/fr_FR/installation/mini)
- Sur un [Raspberry Pi](https://doc.jeedom.com/fr_FR/installation/rpi)
- Sur une [Freebox Delta](https://doc.jeedom.com/fr_FR/installation/freeboxdelta)
- En [ligne de commande](https://doc.jeedom.com/fr_FR/installation/cli)
- Sur une [VM](https://doc.jeedom.com/fr_FR/installation/vm)
- Sur un [Docker/Synology](https://doc.jeedom.com/fr_FR/installation/docker). Note : Nous ne recommandons pas ce mode d'installation qui rend l'utilisation de certains équipements compliquée à cause du mode de réseaux de Docker
- Sur du [bare metal (type Intel Nuc)](https://doc.jeedom.com/fr_FR/installation/baremetal)

Une fois l'installation faite, n'oubliez pas de consulter la documentation [Premier pas avec Jeedom](https://doc.jeedom.com/fr_FR/premiers-pas/index)
