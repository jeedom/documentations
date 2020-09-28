# Installation sur une machine physique

Cette documentation a pour but de decrire l'installation de jeedom sur une machine physique x86-64 (type Intel NUC)

# Installation automatique

Téléchargez l'iso jeedom [ici](https://images.jeedom.com/x86-64/).

## Gravure sur clef USB

Vous pouvez utiliser l'outil UNetbootin (telechargeable [ici](https://unetbootin.github.io/) ).

Une fois lancer : 

- Selectionner "Diskimage" (en bas)
- Cliquer sur les ... et selectionner le fichier iso de Jeedom téléchargé à l'étape d'avant
- Selectionner votre clef USB dans "Lecteur"
- Cliquez sur OK

## Installation

Inserez la clef USB dans votre machine physique, configurez le boot sur le lecteur USB, puis : 

- Selectionnez "Avanced options"
- Et enfin "Install in text mode"

>**NOTE**
>
>Toute les autres options sortiront en erreur seule celle décrite dans cette documentation et valable

Attendez l'installation devrait se derouler toute seule jusqu'au bout

>**NOTE**
>
>Il faut absolument une connexion internet lors de l'installation

Ensuite, vous pouvez suivre la documentation [Premier pas avec Jeedom](https://doc.jeedom.com/fr_FR/premiers-pas/index)

# Installation manuelle

Une fois l'OS insallé (Derniere version de Debian de préference) suivre cette [documentation](https://doc.jeedom.com/fr_FR/installation/cli)



