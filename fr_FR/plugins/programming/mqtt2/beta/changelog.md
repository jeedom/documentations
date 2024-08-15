# Changelog MQTT Manager

>**IMPORTANT**
>
>Pour rappel s'il n'y a pas d'information sur la mise à jour, c'est que celle-ci concerne uniquement de la mise à jour de documentation, de traduction ou de texte.

- Ajout d'un message online et offline lors de du lancement et de l'arret (voulu ou non) du démon dans topic_racine/state
- Si vous avez un équipement jeedom::monitor depuis le plugin virtuel le plugin va automatiquement ajouter la commande state (online ou offline), si vous avez deja cet équipement il faut relancer la decouverte
- Correction d'un bug sur la transmission du type réel de l'équipement (lors de la transmission d'équipement entre jeedom)
- Correction d'un bug sur la duplication de la tache d'écoute des évenements
- Sur les équipements exportés si le plugin source existe sur le jeedom cible alors jeedom affichera l'icone du plugin
- Pas d'erreur dans les logs lors de la transmission de commande (evite de casser jeedom si le demon est coupé)

# 12/08/2024

- Correction d'un bug sur l'envoi des équipements depuis la fenetre de configuration
- Ajout d'un bouton pour voir les logs de mosquitto (si celui est en mode brocker local)
- Mise à jour de la documentation pour mieux expliquer comment synchroniser des topics entre deux mosquitto

# 10/08/2024

- Correction d'un bug sur l'envoi des batterie (methode non static call)

# 09/08/2024

- Amélioration de l'affichage de la fenetre de configuration pour les équipements transmis
- Correction d'un bug sur les commandes orpheline lors de la transmission a travers mqtt

# 08/08/2024

- Pour les équipements transmis sur Mqtt le plugin envoi maintenant toute les nuits le niveau de batterie
- Le plugin pour gerer le niveau de batterie transmis entre Jeedom
- Gestion correcte des commandes de rafraichissement sur les widgets sur les équipements transmis entre Jeedom
- Lors de l'envoi de la découverte entre Jeedom les valeurs des commandes sont aussi transmisent (plus besoin d'attendre une mise à jour de la valeur pour l'avoir sur la cible). Nécessite de renvoyer la découverte
- Lors la transmission d'équipement entre Jeedom le plugin gere maintenant le type réel de l'équipement pour etre compatible avec les applications mobile. Nécessite de renvoyer la découverte
- Ajout d'une fenetre de configuration globalement pour la transmission d'équipement entre Jeedom

# 05/08/2024

- Avec Jeedom 4.4.8 ou plus possibilité de ne plus envoyer tous les équipements sur le brocker MQTT mais seulement certain (à configurer dans la configuration avancée de l'équipement a transmettre)
- Correction de bugs (notamment pour la compatibilité php8)
- Discovery entre Jeedom (pour faire dialoguer 2 jeedoms entre eux par mqtt)
- Possibilité depuis la page de configuration du plugin de supprimer l'abonnement d'un plugin

# 22/03/2024

- Correction d'un soucis sous php8
- Correction d'un bug sous Debian 12

# 23/02/2024

- Suppression d'un check daemon launchable (fait au lancement du démon dans tous les cas)

# 15/01/2024

- Préparation pour jeedom 4.4
- Amélioration de la gestion de mosquitto sous Docker

# 27/10/2023

- Correction d'un bug sur l'état du démon (démarré alors que non)

# 05/10/2023

- Correction d'un bug sur l'état du brocker

# 02/10/2023

- Possibilité de corriger le QOS par defaut
- Correction de bugs
- Début d'ajout du systeme de découverte auto
- Amélioration de la gestion de mosquitto en mode local

# 22/03/2023

- Correction de bugs

# 07/03/2023

- Ajout d'un systeme d'autodecouverte pour certain module en beta (esphome, tasmota et shelly)
- Ajout de l'image des modules
- Correction d'un bug sur le client ID (si plusieurs jeedom sur le meme broker)
- Support d'un sous niveau dans les topics d'équipement
- Correction de bug

# 23/12/2022

- Correction d'un bug sur le temps maximum autorisé pour l'installation des dépendances
- Ajout d'un système de template d'équipement (beta)

# 18/11/2022

- Ajout d'un message invitant à rétablir les droits sur les dossiers avant d'installer Mosquitto en cas d'erreur **Aucun dossier SSL trouvé**

# 13/11/2022

- Ajout d'un bouton permettant de désinstaller un broker Mosquitto local sur la page de configuration générale du plugin
