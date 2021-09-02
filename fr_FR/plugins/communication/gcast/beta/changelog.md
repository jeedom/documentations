# Changelog Gcast

>**IMPORTANT**
>
>Pour rappel s'il n'y a pas d'information sur la mise à jour, c'est que celle-ci concerne uniquement de la mise à jour de documentation, de traduction ou de texte

- Refonte majeur du plugin 
- Passage du python a PHP (plus rapide)

>**IMPORTANT**
>
>Attention certaine commande sont supprimer et d'autre sont ajoutée, suite à la mise à jour il faut ABSOLUMENT verifier vos scenarios et autre qui utilise des commandes du plugin

# 09/06/2021

- Correction d'un soucis sur la repetition des commandes

# 18/10/2020

- Correction d'un bug sur les dependances

Merci @Caelion pour toute les améliorations suivantes :

- création d'une fonction status : qui dit si une communication est en cours avec Jeedom (TTS)
- ajout d'une commande refresh
- ajout d'une commande muet
- création d'une fonction application : qui donne des détails lorsqu'une application Cast sur le périphérique (Nom + Détail)
- création d'une fonction volume : pour le volume actuel

# 31/03/2020

- Nettoyage et optimisation
- Suppression du choix des moteurs
- Compatibilité avec le plugin sons

>**IMPORTANT**
>
>Cette mise à jour ne laisse plus le choix dans le moteur de TTS


# 23/04/2019

- Suppression du moteur de voix Google

# 18/03/2019

- Ajout d'un systeme qui tue automatiquement les processus du plugin qui tournent depuis plus de 10min
