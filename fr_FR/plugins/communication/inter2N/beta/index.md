# 2N

#Description

Plugin pour les interphones 2N.



# Prérequis

 - Connaître l'adresse ip de votre interphone 2N,
 - Avoir le plugin camera installé,
 - Avoir créé un compte utilisateur via l'interface de votre interphone 2N.



# Installation

Après téléchargement du plugin, il faut tout d’abord activer celui-ci, comme tout plugin Jeedom.
Il faut démarrer le démon : vérifiez que le démon est en OK.



# Configuration

Pour un nouvel appareil 2N, il faut se connecter à l'interface 2N, accessible via l'adresse ip de celui-ci (pour connaitre l'ip de votre équipement, vous pouvez installer le logiciel 2N Network Scanner, qui détectera les appareils 2N présents sur votre réseau

Par défaut, le nom d'utilisateur et le mot de passe de votre appareil 2N sont : admin , 2n.

Une fois connecté sur l'interface, il vous faut:


Activer les options pour accéder aux services de l'API :
![config](../images/2nAPI.png)


Créer un compte avec les droits pour les services de l'API :
![config](../images/2nUser.png)


Configurer les Switches de votre appareil :
![config](../images/2nSwitch.png)


Créer un utilisateur pour lui attribuer vos codes d'accès à l'interphone :
![config](../images/2nUsers.png)


Configurer l'utilisateur :
![config](../images/2nConfigUser.png)




Une fois cela fait, vous pouvez créer votre équipement dans Jeedom avec le mot de passe et le nom d'utilisateur du compte 2n configuré avec les droits API (voir plus haut).
Dans les menus déroulants, choisir les modules installés ou non sur votre interphone : Camera, Lecteur d'empreintes digitales, Module Anti arrachement.


![config](../images/2nCrea.png)




Vous pouvez créer directement sans passer par l'interface de votre 2N, un code par Switch disponible suivant votre appareil, dans Code Superutilisateur.
Vous pouvez séparer les codes par une virgule pour attribuer plusieurs codes par Switch
>**IMPORTANT**
>
> Les codes doivent être de type numerique

Vous pouvez également changer le type de signal quand une carte non valide est passée devant le lecteur (Simple Beep, Beep + Lumière, ou Aucun).

![config](../images/2nSuperUser.png)



Lui attribuer un parent et le rendre visible et actif.

Si vous avez une camera sur votre équipement, un objet camera sera créé via le plugin Camera; il vous faudra le configurer pour le faire apparaitre sur votre dashboard.



>**IMPORTANT**
>
> Il faut redémarrer le démon après une création d'équipement, pour lui attribuer un Identifiant pour les requêtes API.
> ![config](../images/2nDemon.png)




# Commandes et informations sur le Dashboard


Etat :

- Par défaut, les états des switchs sont liés a leur commandes action; en cliquant sur le switch, cela active le switch (on verra l'icone du switch changer de couleur).
- L'état des switchs remonte ceux disponibles sur votre appareil (de 1 à 4).


- Appel vous donne le statut de la communication si vous recevez un appel depuis un autre appareil 2n (coming, received etc).

- Arrachement signale si un arrachement a eu lieu (pour les modèles équipés du module Anti arrachement).

- Bluetooth_tel_mobile signale l'authentification du lecteur Bluetooth.


- Bruit signale une détection accrue du niveau de bruit.

- Lecteur carte : fait apparaitre le numero de la carte RFID configuré.


- Code entrée : fait apparaitre le code tapé sur votre interphone.


- dernier_bouton appuyé : fait apparaitre le dernier appuyé sur votre interphone.

- Empreinte : fait apparaitre l'Id de la personne enregistrée (pour les équipements équipés du module d'empreinte digitales).



- Etat_porte signale un problème au niveau de l'état de la porte.

- Mouvement, signale la détection de mouvement via une caméra (pour les modèles équipés de caméra uniquement).

- Ouverture_non_autorisée, signale une ouverture de porte non autorisée (pour les modèles équipés d'entrée numérique uniquement et d'un bouton de départ).
- Ouverture_longue, signale une ouverture de porte trop longue ou une défaillance de la fermeture de la porte dans le délai imparti (pour les modèles équipés d'entrée numérique uniquement).



Commandes :

- Etat Switch_(id du switch) : vous permet de mettre en marche ou en arrêt le Switch dont l'id correspond et d'avoir un retour de statut de votre switch.





Information supplémentaire :

Activez les logs en mode Debug pour avoir plus d'informations sur les événements detectés par votre interphone
