# Changelog Alarme

>**IMPORTANT**
>
>Pour rappel s'il n'y a pas d'information sur la mise à jour, c'est que celle-ci concerne uniquement de la mise à jour de documentation, de traduction ou de texte

# 03/01/2024

- Préparation pour jeedom 4.4
- Correction d'un soucis sur l'option "séparer les zones" lors d'un changement de mode
- Amélioration de l'interface

# 22/01/2020

- Amélioration des logs en cas de multiple alarme

# 21/10/2019

- Correction d'un bug lors de la création de l'équipement

# 14/10/2019

- Correction d'un bug lors du renommage d'un mode

# 28/04/2019

- Correction de bugs

# 23/04/2019

- Correction de bugs

# 17/01/2019

- Possibilité d'utiliser des variables ou calcul pour les délais de Maintient (s), Activation et Déclenchement
- Mise à jour de la doc

# 18/07/2018

- Mise à jour de la doc
- Correction de bug sur le renommage des modes
- Si l'alarme est déjà active l'armement ne la réactive pas
- Ajout d'une option pour un déclenchement multi-zones (si une autre zone rentre en alerte alors l'alarme se déclenche)
- Ajout d'action lors de la reprise de surveillance d'un capteur
- Ajout du tag #zone#
- Ajout d'un bouton pour dupliquer une alarme

# 06/03/2018

- Ajout de la gestion des commandes orphelines
- Si des capteurs sont désactivés alors les actions d'activation ok ne sont plus déclenchées
- Correction de bugs
- Les détecteurs ayant des délais d'activation et étant toujours actif après ce délai ne déclenchent plus l'alarme, mais lancent une activation KO, avec surveillance de ce détecteur exclu jusqu'à un retour à la normale

# 12/02/2018

- Correction d'un bug sur le déplacement des actions dans déclenchement

- Possibilité d'ajouter un délai de maintient d'un déclencheur avant activation de l'alarme

# 01/12/2017

-   Correction d’un bug sur la désactivation des détecteurs

-   Gestion des secondes sur le delai d’activation (JEED-63)

-   Retour en arrière sur le non déclenchement des actions immédiates si
    le délai d’activation est vide ou nul

-   Si lors de l’activation un capteur est en alerte et n’a pas de délai
    d’activation alors l’alarme s’arme quand même en ignorant ce capteur
    (à moins qu’il revienne au repos)

-   Ajout d’action de déclenchement globale (plus filtrée par zone, il
    est conseillé d’utiliser celle-ci plutot que les actions de
    déclenchement par zone)

-   Optimisation du code

-   ATTENTION : l’alarme n’execute plus les actions immediates si il n’y
    a pas de délai de déclenchement !!!!!! ⇒ Annulé

-   Possibilité de filtrer la réalisation des actions par rapport au
    mode de l’alarme

-   Ajout commande pause/reprise

-   Amélioration de l’interface de configuration
