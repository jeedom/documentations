# Plugin IPX800v4

Ce plugin permet de gérer un IPX 800 v4

# Configuration du plugin

Après téléchargement du plugin, il vous suffit juste d’activer celui-ci et de cocher les cases qui vous concerne pour les demandes aux IPX800v4 (exemple cocher X-Dimmer si vous avez un X-dimmer). Vous pouvez aussi choisir la fréquence des demandes pour alleger la charge sur les ipx800v4

> **Important**
>
> Après chaque modidfication de la fréquence ou des demandes il faut relancer le demon pour que cela soit prise en compte

> **Important**
>
> Pour alleger la charge il est recommander de décocher les demandes de type ALL et de cocher juste les API qui vous concerne (vous trouverez le détails dans la documentation API des IPX800v4)

> **Note**
>
> Vous pouvez voir sur cette page l’état du démon qui surveille l’IPX800

# Configuration des équipements

La configuration des équipements IPX800 est accessible à partir du menu
plugin puis protocole domotique :

Vous retrouvez ici toute la configuration de votre équipement :

-   **Nom de l’équipement IPX800** : nom de votre équipement IPX800,
-   **Objet parent** : indique l’objet parent auquel appartient l’équipement,
-   **Activer** : permet de rendre votre équipement actif,
-   **Visible** : rend votre équipement visible sur le dashboard,
-   **Catégorie** : les catégories de l’équipement (il peut appartenir à plusieurs catégories),
-   **IP** : L’ip de l’IPX800,
-   **Clef API** : clef api de l’IPX800 (par default la clef API est apikey)

Le plugin par defaut ne creer rien, ca sera à vous de le faire en
fonction de votre configuration, mais vous serez guider.

# Commande

## Action

Vous avez les types d’action :

- On : permet de mettre à 1 une sortie (ou entrée virtuelle), ou d’affecter une valeur à une entrée analogique (ou compteur)
- Off : permet de mettre à 0 une sortie (ou entrée virtuelle)
- Bascule : permet d’inverser l’état d’une sortie (ou entrée virtuelle)
- ...

Vous avez les types d’actionneurs :

- Relais
- Sortie virtuelle
- Entrée virtuelle
- Entrée analogique virtuelle
- Compteur
- Fil pilote
- ...

> **Note**
>
> Certain type d’actionneur peuvent etre masqué en fonction du type d’action

Ensuite en fonction du type d’action et de l’actionneur vous avez plusieurs paramètres qui peuvent être :

- numéro du relai
- numéro de la sortie virtuelle
- numéro de l’entrée virtuelle
- numéro de l’entrée analogique et valeur à affecter (laisser vide si vous voulez choisir avec le curseul)
- numéro du compteur et opération (ex +200 ou -100)
- numéro du fil pilote ainsi que valeur de la commande (0 confort, 1 eco, 2 hors gel, 3 arrêt, 4 confort-1, 5 confort-2)
- ...

## Info

Vous avez les types differents (en fonction de vos extensions) :

- Relais
- Entrée digital
- Entrée virtuelle
- Sortie virtuelle
- Watchdog
- EnOcean
- Entrée analogique
- Entrée analogique virtuelle
- Compteur
- Volet roulant : option sous la forme 1-3 pour le volet 3 de l’extension VR 1
- THL : sous la forme 1-TEMP pour la température du capteur 1, 3-HUM pour l’humidité du capteur 3 ou 2-LUM pour la luminosité du capteur 2
- Extension 0-10v
- Fil pilote
- Dimmer
- PWM
- Thermostat
- EnOcean
- ...

Pour chaque type jeedom vous demandera le numéro de l’information voulue

# Push des informations de l'IPX vers Jeedom

Pour eviter de faire un refresh des informations dans Jeedom ou des interogations trop fréquente (qui peuvent mettre à mal l'ipx800) il est possible de demande à l'IPX800 de pousser les informations vers Jeedom (attention ce n'est pas possible pour tous les types d'entrée/sortie)

Voici la syntaxe à utiliser dans un push IPX pour :

- Mise à jour de toutes les entrées digitales : ``/core/api/jeeApi.php?type=ipx800v4&apikey=XXX&typeData=allD&data=$D``
- Mise à jour de tous les relais : ``/core/api/jeeApi.php?type=ipx800v4&apikey=XXX&typeData=allR&data=$R``
- Mise à jour de toutes les sorties virtuelles : ``/core/api/jeeApi.php?type=ipx800v4&apikey=XXX&typeData=allVO&data=$VO``

Ensuite il vous faire une scene par type (entrée, relais...) avec :

- Evenement : ``ON EVENT`` et choisir le type voulu (par exemple Sorties physiques)
- Action : ``ON``
- Résultat : ``PUSH`` et choisir le push correspondant (par exemple Jeedom Relais)

# Template

Pour vous aider il y a un template qui permet de creer certain type de commande d’un seul coup et plus rapidement.
