# Installation sur une machine physique

Cette documentation a pour but de décrire l'installation de Jeedom sur une machine physique x86-64 (type Intel NUC).

# Installation automatique

Téléchargez l'iso jeedom [ici](https://images.jeedom.com/x86-64/).

## Gravure sur clef USB

Vous pouvez utiliser l'outil UNetbootin (telechargeable [ici](https://unetbootin.github.io/) ).

Une fois lancé : 

- Selectionner "Diskimage" (en bas)
- Cliquer sur les ... et selectionner le fichier iso de Jeedom téléchargé à l'étape précédente
- Selectionner votre clef USB dans "Lecteur"
- Cliquez sur OK

Ensuite il vous suffit de ``booter`` sur la clef USB. Les cartes mère ont en général 2 modes de boot : UEFI (plus récent, le choix par defaut) et BIOS (l'historique). Nous vous recommandons de prendre BIOS (l'option change en fonction de chaque carte mère et n'est pas toujours simple à trouver, nous ne pouvons donc pas vous donner de procèdure générale).

## Installation en mode Bios (recommandé)

- Selectionnez "Install Jeedom"
- Et enfin "yes"

## Installation en mode UEFI (non recommandé)

- Selectionnez "Avanced options"
- Et enfin "Install in text mode"

> **NOTE**
>
> Toutes les autres options sortiront en erreur seule celle décrite dans cette documentation et valable

Attendez. L'installation devrait se derouler toute seule jusqu'au bout.

> **NOTE**
>
> Il faut absolument une connexion internet lors de l'installation.

Ensuite, vous pouvez suivre la documentation [Premier pas avec Jeedom](../premiers-pas/index)

# Installation manuelle

Une fois l'OS installé (dernière version de Debian de préference) suivre cette [documentation](cli)
