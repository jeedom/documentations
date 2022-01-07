# Changelog Enedis

>**IMPORTANT**
>
>Pour rappel s'il n'y a pas d'information sur la mise à jour, c'est que celle-ci concerne uniquement de la mise à jour de documentation, de traduction ou de texte.

# 05/01/2022

- Correction d'un bug sur la collecte des données le 1er janvier

# 03/06/2021

- Correction pour éviter que l'auto-programmation soit stoppée dans de rares cas

# 18/05/2021

- Mise en place d'un système d'auto-programmation
- Possibilité d'intégrer des historiques à la demande
- Meilleurs traitements et intégrations des données
- Réorganisation des paramètres de configuration, des fichiers et de la documentation

# 18/02/2021

- Ajout de la gestion des dépendances afin de confirmer la présence de `php-mbstring` absent sur certaines installations
- Nouvelle icône du plugin plus en accord avec les prérogatives Enedis

# 01/02/2021

- Réécriture complète du plugin qui utilise désormais l'api Enedis Data-Connect
- Ajout de la commande **Puissance Max/jour**
- Possibilité de récupérer la consommation, la production ou les 2 mesures en même temps
- Génération automatique des historiques sur les 3 dernières années lors de la création des commandes
- Réécriture des templates de widgets dashboard & mobile
- Ajout de la possibilité de choisir la couleur de fond du template de widget *(ou transparent)*
- Réécriture de la documentation

# 10/09/2020

- Correction d'un bug d'affichage en vue mobile sans le template de widget.

# 06/09/2020

- Ajout du template pour version dashboard.
- Ajout du template pour version mobile.
- Optimisation du nombre d'appels aux serveurs Enedis.

# 21/08/2020

- Récupération des informations à une minute aléatoire afin de ne pas surcharger les serveurs Enedis.

# 17/08/2020

- Passage en stable.

# 12/08/2020

- Mise à disposition du plugin en version beta.
