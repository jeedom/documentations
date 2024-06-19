# Changelog RFXcom

>**IMPORTANT**
>
>Pour rappel s'il n'y a pas d'information sur la mise à jour, c'est que celle-ci concerne uniquement de la mise à jour de documentation, de traduction ou de texte

# 19/06/2024

- Ajout compatibilité Debian 12 (version Jeedom 4.4.7 requise pour Debian 12)
- Correction sur la gestion de l'arrêt du démon en cas de problème de configuration ou de connexion avec le rfxcom

# 11/06/2024

- Le plugin est moins strict sur le firmware du rfxcom (autorisation de firmware non à jour)
- Refonte du démon pour corriger un soucis de fuite mémoire sur debian 11 (merci @Mips2648)

# 03/01/2024

- Préparation pour jeedom 4.4

# 26/09/2022

- Correction d'un soucis si l'utilisateur à mis en dur dans la rom du rfxcom l'activation des protocoles

# 07/02/2022

- Correction du soucis d'installation des dépendances sous jeedom 4.2

# 03/02/2022

- Correction du soucis d'installation des dépendances sous jeedom 4.2
- Correction de bug sur les modules de type 0x71 (merci @Doubledom)

# 08/02/2021

- Possibilité de n'autoriser que certain type de packet dans le traitement des informations d'un équipements (cas rare)
- Correction d'un bug sur la conf 0x1A : Somfy RTS Moteur qui pouvait ne pas apparaitre dans certain cas.

# 07/01/2020

- Correction de bugs et optimisation (merci @Doubledom)

# 07/12/2020

- Correction d'un bug sur les équipements Somfy (ID de 8 au lieu de 6)

# 03/12/2020

- Correction de bugs sur le processus de mise à jour
- Correction de la direction du vent (division par 10 en trop)

# 01/12/2020

- Corrections de bugs

# 29/11/2020

- Correction de bugs sur la remonté des batteries
- Correction de bugs sur le pilotage des poele mcz 2 fan
- Corrections de bugs

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

- Les commandes d’action pour les modules de type télécommande sont
    automatiquement créées
