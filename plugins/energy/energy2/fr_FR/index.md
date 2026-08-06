# Plugin Comptage

Ce plugin permet d'avoir un aperçu simple et rapide de ses dépenses énergetiques.

Il gère l'eau, le gaz et l'électricité et vous fournira un graphique des postes  dépenses/consommations. Il vous donne aussi la tendance et les variations par rapport à la période précédente (vous pouvez avoir en période le jour, la semaine, le mois ou l'année).

> **IMPORTANT**
>
> N'oubliez pas d'activer les panels (desktop et mobile) du plugin dans la configuration de celui-ci.

# Configuration

La configuration du plugin est très simple, il vous demandera juste la surface habitable (chauffé) de votre logement (pour le calcul de DPE).

# Equipements

Vous pouvez faire autant d'équipements de comptage que vous voulez :

* **Type** :  Eau, Gaz ou Electricité.
* **Instantanné** : commande donnant la consommation instantanné (attention le plugin n'est pas capable de calculer la consommation journalière à partir de l'instantanné).
* **Consommation** : commande donnant la consommation journalière *(doit revenir à 0 à 00h00)*.
* **Coût** : commande donnant le coût journalier en € *(doit revenir à 0 à 00h00)*.
* **Température extérieure** : commande donnant la température extérieure du logement. Permet d'optimiser les calculs de performance énergétique du logement.
* **Ajouter au total** : indique d'ajouter au total de la consommation de ce type d'energie.
* **Ceci est mon énergie de chauffage** : cocher la case pour effectuer le calcul de DPE sur cette énergie (à noter que si votre énergie de chauffage est le gaz, la consommation doit être en m3 pour les calculs de DPE).
* **Renseigner des valeurs** : permet de renseigner manuellement sa consommation sur une période.
