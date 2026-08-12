# Compatibilité

>**INFORMATION**
>
>L’équipe Jeedom s’efforce de maintenir ces informations à jour, parfois au détriment d’autres développements. L’assistance de la communauté est précieuse à tout niveau de la documentation, cette page faisant partie des priorités.

## Boxes officielles

**Jeedom et Domadoo** développent et commercialisent des boxes officielles « clé en main », avec Jeedom préinstallé sur un système optimisé et incluant des services, des plugins ainsi qu'un support technique renforcé. Les boxes officielles bénéficient également d'un outil de restauration système automatique.

{% include lightbox.html src="../images/tableau-comparatif-atlas-et-luna.jpg" data="AtlasLuna" title="Jeedom Atlas & Jeedom Luna" imgstyle="display:block;margin:0 auto;" %}

| Jeedom Atlas            | Jeedom Luna             |
|-------------------------|-------------------------|
| [Atlas **sans protocole**](https://www.domadoo.fr/fr/box-domotique/7329-jeedom-controleur-domotique-jeedom-atlas-sans-protocole.html){:target="_blank"} | [Luna **Z-Wave, Zigbee + BT**](https://www.domadoo.fr/fr/box-domotique/6280-jeedom-controleur-domotique-jeedom-luna-z-wave700-zigbee30-bt.html){:target="_blank"} |
| [Atlas **EnOcean**](https://www.domadoo.fr/fr/box-domotique/5877-jeedom-atlas-enocean.html){:target="_blank"} | [Luna **Z-Wave, Zigbee + 4G**](https://www.domadoo.fr/fr/box-domotique/6615-jeedom-controleur-domotique-jeedom-luna-z-wave-zigbee-et-4g.html){:target="_blank"} |
| [Atlas **EnOcean + clé Z-Wave ZOOZ**](https://www.domadoo.fr/fr/box-domotique/6857-jeedom-controleur-domotique-jeedom-atlas-enocean-dongle-z-wave-zooz.html){:target="_blank"} | [Luna **Z-Wave, Zigbee, LoRaWAN + 4G**](https://www.domadoo.fr/fr/box-domotique/6617-jeedom-controleur-domotique-jeedom-luna-z-wave-zigbee-lorawan-4g.html){:target="_blank"} |
| [Atlas **Pro rail DIN sans protocole**](https://www.domadoo.fr/fr/box-domotique/6567-jeedom-controleur-domotique-sur-rail-din-jeedom-atlas-pro-sans-antenne.html){:target="_blank"} |             |
| [Atlas **Pro rail DIN EnOcean**](https://www.domadoo.fr/fr/box-domotique/6565-jeedom-atlas-pro-enocean.html){:target="_blank"} |             |
| [Atlas **Pro rail DIN KNX**](https://www.domadoo.fr/fr/box-domotique/6563-jeedom-controleur-domotique-sur-rail-din-jeedom-atlas-pro-knx.html){:target="_blank"} |             |

>**INFORMATION**
>
>Bien que plus commercialisée, la box Jeedom Smart reste une solution officielle tout à fait viable dont le système continue d'être maintenu par l'équipe.

## Matérielle

Nos recommandations vont dépendre de différents facteurs :

- **Jeedom Atlas ou Luna** : l'alliance de la simplicité, de l'optimisation et d'une compatibilité avancée.
- **Nano-ordinateur** *(Odroid C2, Rock Pi, Rasperry Pi, etc.)* : le meilleur rapport performance/prix.
- **Mini-PC** *(NUC)* : des performances extrêmes pour un budget plus conséquent *(voir [le tutoriel avancé dédié](/howtoadvance/vmware.installation_sur_nuc) pour plus de détails)*.

### Matériels supportés

>**IMPORTANT**
>
>Le support officiel concerne uniquement l’instance Jeedom. Seules les boxes officielles bénéficient également du support système *(hors modifications)*.

| Boxes officielles      | Nano-ordinateurs       | Ordinateurs            | Hyperviseurs           |
|------------------------|------------------------|------------------------|------------------------|
| Smart, Atlas, Luna     | Odroid C2, Rock Pi Série 4, Raspberry Pi3/4 et assimilés | Systèmes 64 bits, Mini-PCs *(NUC)*, Processeur Intel® N100 | Systèmes 64 bits, VirtualBox, VMware, Proxmox, Hyper-V, Freebox |

### Matériels non supportés

| Boxes officielles      | Nano-ordinateurs       | Ordinateurs            | Hyperviseurs           |
|------------------------|------------------------|------------------------|------------------------|
| Jeedomboard, Mini+     | Hummingboard, Raspberry Pi0/1/2 et assimilés | Systèmes 32 bits | Systèmes 32 bits      |

## Logicielle

### Debian

| Version            | Statut             |
|--------------------|--------------------|
| Debian 11 Bullseye | Recommandé         |
| Debian 12 Bookworm | Supporté *(4.5)*   |
| Debian 13 Trixie   | En cours de validation |
| Debian 10 Buster et antérieur | Non supporté |

### PHP

| Version            | Statut             |
|--------------------|--------------------|
| PHP 7              | Recommandé         |
| PHP 8              | Supporté *(4.5)*   |
| PHP 5.6            | Fin de support *(4.1)* |
| PHP 5.5 et antérieur | Non supporté     |

### MySQL

| Version            | Statut             |
|--------------------|--------------------|
| MySQL 7.4          | Recommandé         |
| MySQL 5.5/5.6/5.7  | Supporté           |

### MariaDB

| Version            | Statut             |
|--------------------|--------------------|
| MariaDB 10         | Recommandé         |

## Images système officielles

L'équipe développe des images système sur-mesure à destination de nombreuses machines différentes, incluant Debian, Jeedom et toutes les dépendances logicielles recommandées :

| Image système      | Documentation      |
|--------------------|--------------------|
| [Luna](https://images.jeedom.com/luna/){:target="_blank"} | [Installation sur Luna](/plugins/home%20automation%20protocol/luna) |
| [Atlas](https://images.jeedom.com/atlas/){:target="_blank"} | [Installation sur Atlas](/installation/recovery) |
| [Smart](https://images.jeedom.com/smart/){:target="_blank"} | [Installation sur Smart](/installation/recovery) |
| [Ordinateurs](https://images.jeedom.com/x86-64/){:target="_blank"} | [Installation sur PC/mini-PC](/installation/baremetal) |
| [Hyperviseurs](https://images.jeedom.com/x86-64/){:target="_blank"} | [Installation sur machine virtuelle](/installation/vm) |
| [Freebox](https://images.jeedom.com/freebox/){:target="_blank"} | [Installation sur Freebox](/installation/freeboxdelta) |

### Vérification du fichier

La **clé SHA256**, permettant de vérifier l'intégrité du fichier téléchargé, est consultable dans le fichier `info.json` situé dans le dossier de téléchargement.

### Première connexion

Consulter la documentation relative à la [**première connexion**](/premiers-pas/#Première%20connexion) pour accéder à l'interface Jeedom suite à l'installation.

### Console système

>**IMPORTANT**
>
>Il n'est ni recommandé ni nécessaire d'intervenir au niveau de la console système pour utiliser Jeedom.\
>Toute modification du système est susceptible d'avoir un impact sur le bon fonctionnement de Jeedom.

Les identifiants, par défaut, pour accéder à la console système *(clavier/écran ou SSH)* sont : `jeedom/Mjeedom96`. Le mot de passe `root` est identique.

## Equipements compatibles

En fonction des protocoles et des plugins utilisés, il n'est pas toujours facile de savoir si un module sera bien pris en charge. Afin de vous aider à identifier la bonne compatiblité de votre matériel, vous pouvez vous appuyer sur le site [Compatibilité Jeedom](https://compatibility.jeedom.com/){:target="_blank"} dont la liste est maintenue à jour par les plugins eux-mêmes.

En complément, les informations de ce site peuvent être recoupées avec celles disponibles sur le site de vente en ligne de matériel domotique [Domadoo](https://www.domadoo.fr/){:target="_blank"}.

Ci-dessous quelques exemples de liens à consulter selon le protocole concerné :

### Bluetooth

- [**Compatibilité Jeedom - Bluetooth**](https://compatibility.jeedom.com/index.php?v=d&p=home&protocol=Bluetooth){:target="_blank"}

### Caméras

- [**Compatibilité Jeedom - Caméras**](https://compatibility.jeedom.com/index.php?v=d&p=home&protocol=IP){:target="_blank"}
- [**Domadoo - Caméras**](https://www.domadoo.fr/fr/128-cameras-connectees){:target="_blank"}

### EnOcean

- [**Compatibilité Jeedom - EnOcean**](https://compatibility.jeedom.com/index.php?v=d&p=home&protocol=EnOcean){:target="_blank"}
- [**Domadoo - EnOcean**](https://www.domadoo.fr/fr/225-domotique-enocean){:target="_blank"}

### RFXcom

- [**Compatibilité Jeedom - RFXcom**](https://compatibility.jeedom.com/index.php?v=d&p=home&protocol=Rfxcom){:target="_blank"}

### Zigbee

- [**Compatibilité Jeedom - Zigbee**](https://compatibility.jeedom.com/index.php?v=d&p=home&protocol=zigbee){:target="_blank"}
- [**Domadoo - Zigbee**](https://www.domadoo.fr/fr/206-produits-zigbee){:target="_blank"}

### Z-Wave

- [**Compatibilité Jeedom - Z-Wave**](https://compatibility.jeedom.com/index.php?v=d&p=home&protocol=Z-Wave){:target="_blank"}
- [**Domadoo - Z-Wave**](https://www.domadoo.fr/fr/210-produits-zwave){:target="_blank"}

## Exemple de montage DIY

En montage DIY (Do It Yourself), voici une configuration "type" pour bien débuter avec Jeedom en Z-Wave :

1.  Raspberry Pi 4 :

    -   Un raspberry+boitier \~ 50 €
    -   Une clé Aeotec Gen 5 \~ 60 €
    -   Une micro carte microSD \~ 7 €
    -   Une alimentation USB \~ 8 €

Soit un total de 125 € pour une box domotique open source avec une maîtrise complète de son installation.

>**INFORMATION**
>
>Il est possible d’ajouter ou de changer par une antenne Rfxcom, ou une clé enOcean, etc. En principe, il faut une clé USB par protocole supplémentaire. En fonction de leur nombre et de leur consommation cumulée, sur un Raspberry Pi vous pouvez avoir besoin d'un hub USB complémentaire avec son alimentation dédiée.\
>Pour la clé Z-Wave Aeotec Gen 5 en utilisation cumulée avec un Raspberry Pi 4 (modèles antérieurs non concernés), il faut en utliser une récente si vous souhaitez vous affranchir d'un hub USB. Se renseigner et se fournir chez un vendeur d'équipements domotiques.\
>RPi 4, il est vivement conseillé de remplacer la carte microSD par un disque dur mSATA USB3, directement relié au port USB3 avec boot natif. Les cartes microSD ont une durée de vie très limitée en échange de données intensif: à ne réserver que pour de courtes périodes de tests.
