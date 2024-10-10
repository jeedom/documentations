# Changelog MQTT Manager

>**IMPORTANT**
>
>Pour rappel s'il n'y a pas d'information sur la mise-à-jour, c'est que celle-ci concerne uniquement de la mise à jour de documentation, de traduction ou de texte.

# 07/10/2024

- Correction d'un soucis ou certains messages pouvaient être traités en double

# 01/10/2024

- Correction d'un bug lors de l'application de certains templates

# 22/09/2024

- Correction d'un warning lors du lancement du démon
- Correction d'un bug avec Node.js 20
- Si une commande est de type binaire ou numérique et que Jeedom reçoit un array ou objet alors la valeur est ignorée (corrige un soucis avec les Shelly 2.5)
- Correction d'un bug sur la gestion de la batteries des équipements liée entre Jeedom

# 09/09/2024

- Mise en place d'optimisation sur la gestion des équipements transmis avec Jeedom 4.5
- Ajout d'une sécurité pour éviter de mettre en topic racine un topic utilisé par un plugin
- Ajout d'un assistant pour lier Mosquitto de deux Jeedom facilement
- Ajout de la possibilité d'envoyer les informations au cloud Jeedom pour faire communiquer deux Jeedom à travers internet (non ouvert aux utilisateurs pour le moment)
- Activation de la découverte auto par défaut (désactivable depuis Plugin -> Programmation -> Mqtt manager)
- Correction d'un bug sur la création de la commande indiquant l'état d'un Jeedom distant (à travers l'équipement Jeedom monitor du plugin virtuel)
- Ajout du topic SYS (pour avoir les informations interne de MQTT)
- Ajout d'un template mosquitto.sys permettant de récupérer des informations sur le brocker (message reçu/envoyé total/1min/5min/15min, charge mémoire...)
- Vérification du listenner à chaque démarrage du démon

# 20/08/2024

- Ajout d'un message online et offline lors de du lancement et de l'arrêt (voulu ou non) du démon dans topic_racine/state
- Si vous avez un équipement jeedom::monitor depuis le plugin virtuel, le plugin va automatiquement ajouter la commande state (online ou offline), si vous avez déjà cet équipement il faut relancer la découverte
- Correction d'un bug sur la transmission du type réel de l'équipement (lors de la transmission d'équipement entre jeedom)
- Correction d'un bug sur la duplication de la tache d'écoute des évènements
- Sur les équipements exportés si le plugin source existe sur le Jeedom cible alors Jeedom affichera l'icône du plugin
- Pas d'erreur dans les logs lors de la transmission de commande (évite de casser Jeedom si le démon est coupé)
- Meilleur gestion des commandes orphelines
- Correction d'un bug sur l'exécution des commandes type message

# 12/08/2024

- Correction d'un bug sur l'envoi des équipements depuis la fenêtre de configuration
- Ajout d'un bouton pour voir les logs de Mosquitto (si celui est en mode brocker local)
- Mise à jour de la documentation pour mieux expliquer comment synchroniser des topics entre deux Mosquitto

# 10/08/2024

- Correction d'un bug sur l'envoi des batteries (méthode non static call)

# 09/08/2024

- Amélioration de l'affichage de la fenêtre de configuration pour les équipements transmis
- Correction d'un bug sur les commandes orphelines lors de la transmission à travers mqtt

# 08/08/2024

- Pour les équipements transmis sur Mqtt, le plugin envoie maintenant toutes les nuits le niveau de batterie
- Le plugin pour gérer le niveau de batterie transmis entre Jeedom
- Gestion correcte des commandes de rafraîchissement sur les widgets sur les équipements transmis entre Jeedom
- Lors de l'envoi de la découverte entre Jeedom les valeurs des commandes sont aussi transmises (plus besoin d'attendre une mise à jour de la valeur pour l'avoir sur la cible). Nécessite de renvoyer la découverte
- Lors la transmission d'équipement entre Jeedom le plugin gère maintenant le type réel de l'équipement pour être compatible avec les applications mobile. Nécessite de renvoyer la découverte
- Ajout d'une fenêtre de configuration globalement pour la transmission d'équipement entre Jeedom

# 05/08/2024

- Avec Jeedom 4.4.8 ou plus, possibilité de ne plus envoyer tous les équipements sur le brocker MQTT mais seulement certain (à configurer dans la configuration avancée de l'équipement a transmettre)
- Correction de bugs (notamment pour la compatibilité php8)
- Discovery entre Jeedom (pour faire dialoguer 2 Jeedom entre eux par mqtt)
- Possibilité depuis la page de configuration du plugin de supprimer l'abonnement d'un plugin

# 22/03/2024

- Correction d'un soucis sous php8
- Correction d'un bug sous Debian 12

# 23/02/2024

- Suppression d'un check daemon launchable (fait au lancement du démon dans tous les cas)

# 15/01/2024

- Préparation pour Jeedom 4.4
- Amélioration de la gestion de Mosquitto sous Docker

# 27/10/2023

- Correction d'un bug sur l'état du démon (démarré alors que non)

# 05/10/2023

- Correction d'un bug sur l'état du brocker

# 02/10/2023

- Possibilité de corriger le QOS par défaut
- Correction de bugs
- Début d'ajout du système de découverte auto
- Amélioration de la gestion de Mosquitto en mode local

# 22/03/2023

- Correction de bugs

# 07/03/2023

- Ajout d'un système auto-découverte pour certains modules en bêta (esphome, tasmota et shelly)
- Ajout de l'image des modules
- Correction d'un bug sur le client ID (si plusieurs Jeedom sur le même broker)
- Support d'un sous niveau dans les topics d'équipement
- Correction de bug

# 23/12/2022

- Correction d'un bug sur le temps maximum autorisé pour l'installation des dépendances
- Ajout d'un système de template d'équipement (bêta)

# 18/11/2022

- Ajout d'un message invitant à rétablir les droits sur les dossiers avant d'installer Mosquitto en cas d'erreur **Aucun dossier SSL trouvé**

# 13/11/2022

- Ajout d'un bouton permettant de désinstaller un broker Mosquitto local sur la page de configuration générale du plugin
