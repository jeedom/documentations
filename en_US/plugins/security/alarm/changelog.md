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

- Ability to add a trigger hold delay before activating the alarm

# 01/12/2017

-   Fixed a bug on disabling detectors

-   Gestion des secondes sur le delai d’activation (JEED-63)

-   Retour en arrière sur le non déclenchement des actions immédiates si
    the activation time is empty or null

-   If during activation a sensor is on alert and has no delay
    d’activation alors l’alarme s’arme quand même en ignorant ce capteur
    (à moins qu’il revienne au repos)

-   Added global trigger action (plus filtered by zone, it
    is advisable to use this one rather than the actions of
    zone triggering)

-   Code optimization

-   ATTENTION: the alarm no longer executes immediate actions if there is no
    has no trigger time !!!!!! ⇒ Canceled

-   Possibility of filtering the achievement of actions in relation to
    alarm mode

-   Add pause / resume command

-   Improved configuration interface
