# Changelog RFXcom

>**IMPORTANT**
>
>Pour rappel s'il n'y a pas d'information sur la mise à jour, c'est que celle-ci concerne uniquement de la mise à jour de documentation, de traduction ou de texte

# 26/11/2020

- Refonte complete du demon du plugin
- Passage en python3
- Support complet de tous les modules RFXcom

ATTENTION : Cette mise à jour est importante et impose de relancer l'installation des dépendances. Il est aussi possible qu'il faille refaire l'inclusion de certain capteur.

# 27/05/2019

- Correction de bugs

# 02/10/2019

- Amélioration de la fonction de detection du port du rfxcom

# 16/05/2019

- Correction bug interface

# 03/05/2019

- Suppresion du suport MCZ 3 fan

# 30/04/2019

- Correction bug

# 29/04/2019

- Correction d'un bug si le niveau de log est sur aucun
- Support du MCZ 3 fan
- Mise à jour de la doc

# 08/10/2018

- Fix comparaison expected et wanted protocols en lowercase

# 08/10/2018

- Revu du démarrage du démon (by Sarakha)
- Compatible avec le derniere RFXCOM (by Sarakha)
- Séparation en thread de l'écoute socket et clef RFXCOM (by Sarakha)

# 14/04/2018

- Correction d'un bug ou le démon pouvez rater certain message si ceux-ci arrivaient avant l'envoi à Jeedom en meme temps avec le meme packet type

# 17/03/2018

- Mise à jour de la doc

# 28/02/2018

- Correction d'un bug sur le changement de batterie

# 01-12-2017

-   Les commandes d’action pour les modules de type télécommande sont
    automatiquement créées
