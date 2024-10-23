# Plugin Compteur virtuel

Le plugin **Compteur virtuel** permet de créer des compteurs énergétiques en kiloWatts-heure à partir d'indexs bruts *(Wh/kWh)* et/ou de puissances *(W/kW)*, que ce soit en tarif unique ou en heures pleines/heures creuses. Ce plugin permet également de créer des compteurs par utilisateur *(Personnalisé/OCPP)*.

>**INFORMATION**
>
>Les informations relatives au protocole **OCPP** ne seront visibles que si le plugin est détecté sur la machine.

# Configuration

## Configuration du plugin

![Configuration du plugin](../images/config_plugin.jpg)

- **Tarification par défaut**: Sélectionner la tarification par défaut des compteurs virtuels *(tarif unique ou heures pleines/heures creuses)*.
- **Bascule de tarification**: En cas de tarification par défaut en heures pleines/heures creuses, sélectionner la commande info/binaire de bascule de tarification par défaut *(1=heures pleines/0=heures creuses)*.
- **OCPP**:
  - **Création automatique des compteurs**: Cocher la case pour créer automatiquement les compteurs par utilisateur pour toute nouvelle transaction OCPP.

## Configuration des équipements

Pour ajouter un nouveau compteur virtuel, cliquer sur le bouton **+Ajouter**.

- **Type de compteur**: Sélectionner le type de compteur *(Standard/Personnalisé (WIP)/OCPP)*.
- **Tarification**: Adapter la tarification si nécessaire.
- **Bascule de tarification**: En cas de tarification en heures pleines/heures creuses, adapter la commande info/binaire de bascule de tarification si nécessaire.

---

- **Identifiant**: Pour les compteurs de type personnalisé ou OCPP, indiquer l'identifiant de l'utilisateur.

### Données à traiter

Les compteurs virtuels de type **OCPP** récupèrent automatiquement les données des transactions de chaque utilisateur.

Pour les autres, il faut cliquer sur le bouton **Gérer les commandes** de la section **Données à traiter** puis **Ajouter une entrée**.

- **Compteurs standards**:

  ![Données compteur standard](../images/default_input.jpg)

	- **Données**: Commande info/numérique des données brutes à traiter.
	- **Unité**: Sélectionner l'unité si elle n'est pas détectée automatiquement *(Wh/kWh/W/kW)*.

- **Compteurs personnalisés** *(WIP)*:

  ![Données compteur personnalisé](../images/custom_input.jpg)

	- **Données**: Commande info/numérique des données brutes à traiter.
	- **Unité**: Sélectionner l'unité si elle n'est pas détectée automatiquement *(Wh/kWh/W/kW)*.
	- **Identifiant**: Renseigner la commande info/autre stipulant l'identifiant de l'utilisateur en cours *(la valeur doit correspondre à l'identifiant défini au niveau de l'équipement pour que la transaction soit comptabilisée)*.

## Commandes

Les commandes suivantes sont créées en fonction de la tarification:

- **Tarif unique**:
  - **Index** *(Info/numérique en kWh)*.

- **Heures pleines/Heures creuses**:
  - **Index heures pleines** *(Info/numérique en kWh)*.
  - **Index heures creuses** *(Info/numérique en kWh)*.
