# Plugin Wireguard

Ce plugin permet de connecter Jeedom à un serveur Wireguard.

Il peut également être utilisé par le service de DNS Jeedom en remplacement du **plugin Openvpn** pour accéder à votre Jeedom depuis internet.

# Configuration

## Configuration du plugin

Une fois le plugin téléchargé et activé, il faut s'assurer que les dépendances sont correctement installées sur la page de configuration générale.

## Configuration des clients

Les clients Wireguard sont accessibles à partir du menu **Plugins → Communication → Wireguard**.

Cliquez sur un équipement pour accéder à sa page de configuration :

- **Nom du client Wireguard** : nom de votre équipement Wireguard.
- **Objet parent** : indique l’objet parent auquel appartient l’équipement.
- **Catégorie** : les catégories de l’équipement *(peut appartenir à plusieurs catégories)*.
- **Activer** : permet de rendre l’équipement actif.
- **Visible** : permet de rendre l’équipement visible sur le dashboard.

Si vous utilisez uniquement le **plugin Wireguard** pour la connexion au DNS Jeedom, il suffit de se rendre dans la configuration générale Jeedom (**Réglages → Système → Configuration**), onglet **Réseaux**. Sélectionnez **Wireguard** dans le menu déroulant de la partie **Gestion DNS Market** puis **Démarrer/Redémarrer** la connexion VPN.

>**INFORMATION**
>
>Concernant l'accès au DNS Jeedom, vous n'avez rien de plus à faire à votre niveau. Le plugin va automatiquement se charger de créer l'équipement, générer la configuration du tunnel VPN puis démarrer le service.

Si vous souhaitez configurer l'accès à un serveur Wireguard personnel, voici la liste des paramètres du client disponibles dans le plugin :

- **[Interface]** :
    - **Adresse** (`Address`) : adresse de l'interface client Wireguard.
    - **Clé privée** (`PrivateKey`) : clé privée du client Wireguard.
    - **Post-Up** (`PostUp`) : commandes à exécuter au démarrage de l'interface client Wireguard *(facultatif)*.
    - **Post-Down** (`PostDown`) : commandes à exécuter à l'arrêt de l'interface client Wireguard *(facultatif)*.

>**ASTUCE**
>
>Vous pouvez utiliser le tag ``#interface#`` dans les champs **Post-Up** et **Post-Down** pour récupérer le nom de l'interface utilisée par le client Wireguard.

- **[Peer]** :
    - **Clé publique** (`PublicKey`) : clé publique du serveur Wireguard.
    - **Point terminal** (`Endpoint`) : adresse IP publique du serveur : port d'écoute *(ip:port)*.
    - **IPs autorisées** (`AllowedIPs`) : liste des adresses IP autorisées.
    - **Clé pré-partagée** (`PresharedKey`) : clé pré-partagée *(facultatif)*.
    - **Maintenir la connexion** (`PersistentKeepalive`) : délai de vérification de la liaison en secondes *(facultatif)*.

>**IMPORTANT**
>
>Seul le support relatif à l'accès au DNS Jeedom est assuré par l'équipe.

# Commandes

En cliquant sur l'onglet **Commandes**, vous retrouvez la liste des commandes du client Wireguard :

- **Actif** : état de l'interface client Wireguard.
- **IP** : adresse IP de l'interface client Wireguard.
- **Démarré** : état de la connexion au serveur Wireguard.
- **Démarrer** : permet de démarrer l'interface client Wireguard.
- **Arrêter** : permet d'arrêter l'interface client Wireguard.

>**INFORMATION**
>
>Jeedom va vérifier toutes les 5 minutes si le VPN est bien démarré ou arrêté et agir en conséquence si ce n’est pas le cas.
