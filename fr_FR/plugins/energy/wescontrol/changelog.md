# Changelog Wes Control

>**IMPORTANT**
>
>Pour rappel, s'il n'y a pas d'information sur la mise à jour, c'est que celle-ci concerne uniquement la mise à jour de documentation, de traduction ou de texte.

# 22/05/2026

- Version de firmware Wes minimale requise : **V0.84A10** *(passer sur la branche less-than-V0.84A10 pour les versions inférieures)*
- Diverses corrections pour Debian 12/PHP 8

# 10/01/2024

- Nouvelle version du fichier CGX V1.0.5

- Ajout de "Consommation/Production" à la liste TIC
- Ajout d'une commande "Producteur" *(1 si production activée par Enedis, 0 sinon)*
- Ajout de l'index d'injection *(non remonté si producteur à 0)*
- Ajout de puissance apparente injectée *(non remontée si producteur à 0)*

# 13/12/2022

- Vérification de la pleine compatibilité du plugin en fonction de sa version et de celle du firmware du Wes *(``< V0.84A10`` = plugin stable / ``>= V0.84A10`` = plugin beta)*
- Ajout de l'affichage en disposition tableau des équipements enfants.

# 13/06/2022

- Nouvelle version du fichier CGX V1.0.3

# 10/05/2021

- Nouvelle version du fichier CGX V1.0.2
- Ajout du paramètre "Type de mesure" pour les compteurs et TIC
- Ajout des types de compteurs **Calories, Electricté et Fioul**
- Ajout d’une option de mise à jour automatique et d’une commande de mise à jour du fichier CGX ainsi que d’un bouton permettant la mise à jour de tous les serveurs actifs
- Optimisation de l’interface.

# 28/04/2021

- Mise à disposition du plugin
