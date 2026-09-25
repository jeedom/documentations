# Plugin Generic Type

## Introduction

Le Plugin Generic Type permet aux utilisateurs de créer leur propres types génériques dans Jeedom à partir d'un fichier excel, d'un fichier JSON ou à la main.

## Configuration du plugin

Il est nécessaire de renseigner un suffixe des types génériques dans la configuration du plugin (exemple : MAJEEDOM)

![Configuration du plugin](../images/configuration_plugin.png)

## Gestion du plugin

![Gestion du plugin](../images/gestion_plugin.png)

1. Import fichier JSON/XLSX : permet d'ajouter une liste de types génériques à partir d'un fichier xslx

![Import XLSX](../images/import_xlsx.png)

ou d'un fichier JSON

```json
{
    "PUMP_STATE_MAJEEDOM": {
        "name": "Pompe Etat (MAJEEDOM)",
        "family": "POMPE  (MAJEEDOM)",
        "familyid": "POMPE _MAJEEDOM",
        "type": "Info",
        "subType": "binary",
        "genTypePerso_type": true
    },
    "PUMP_ON_MAJEEDOM": {
        "name": "Pompe Marche (MAJEEDOM)",
        "family": "POMPE  (MAJEEDOM)",
        "familyid": "POMPE _MAJEEDOM",
        "type": "Action",
        "subType": "other",
        "genTypePerso_type": true
    },
    "PUMP_OFF_MAJEEDOM": {
        "name": "Pompe Arret (MAJEEDOM)",
        "family": "POMPE  (MAJEEDOM)",
        "familyid": "POMPE _MAJEEDOM",
        "type": "Action",
        "subType": "other",
        "genTypePerso_type": true
    }
}
```

2. Import configuration en JSON : permet d'appliquer une liste de configuration aux commandes ayant ce type générique. 
### La liste des configurations est la suivante : 

#### Historique
- Historiser
- Mode de lissage

#### Calcul et Arrondi
- Arrondi

#### Unité
- Unité

#### Autres
- Répéter les valeurs identiques
- Min
- Max
- Widget Dashboard
- Widget Mobile

### Exemple de JSON :

```json
{
    "EAU_CONSUMPTION_2_MAJEEDOM": {
        "isHistorized": "0",
        "historizeMode": "none",
        "uniteValue": "°C"
    },
    "EAU_CONSUMPTION_MAJEEDOM": {
        "isHistorized": "0",
        "historizeMode": "avg",
        "historizeRound": "5",
        "uniteValue": "kwh"
    },
    "GAZ_CONSUMPTION_MAJEEDOM": {
        "isHistorized": "1",
        "historizeMode": "avg",
        "historizeRound": "10",
        "uniteValue": "m3"
    }
}
```

3. Export configuration en JSON : permet de télécharger la liste des configurations afin de l'importer sur une autre box par exemple.

4. Télécharger fichier JSON/XLSX : permet de télécharger la liste des fichiers XLSX/JSON importés précédemment.

5. Tout supprimer : permet de supprimer tous les types génériques propres à la box.


## Aperçu des types génériques associés à ce plugin

![Apercu du plugin](../images/apercu_plugin.png)

1. Ajouter : permet d'ajouter un type générique manuellement.

2. Inverser : permet d'inverser la séléction des types génériques dans le tableau.

3. Télécharger : permet de télécharger les types génériques sélectionnés ou tout (si pas de séléction).

4. Supprimer : permet de supprimer le(s) type(s) générique(s) sélectionné(s).

5. Editer : permet de modifier le type générique

## Application du type générique aux commandes

1. Renseigner la configuration souhaitée

![Configuration du type générique](../images/configuration_type_generique.png)

2. Sélectionner la liste des commandes afin de leur appliquer ce type générique

![Liste des commandes](../images/liste_commandes.png)