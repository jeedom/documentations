# Plugin Broadlink

Plugin permettant d’interfacer Jeedom avec des équipements Broadlink.

# Configuration du plugin

Après avoir installé le plugin, il faut l’activer et s’assurer de la bonne installation des dépendances.

>**IMPORTANT**
>
>Il est déconseillé de changer le port socket interne.

# Inclusion des équipements

Aller dans le menu Plugins => Protocole Domotique => Broadlink. Une fois sur la page, cliquez sur le bouton INCLUSION. En toute logique l’ensemble des produits Broadlink de votre réseau sera reconnu.

# Configuration des équipements

Sélectionnez un de vos équipements. Si ce sont des produits de type Infra rouge, un bouton apprendre une commande apparait en haut. Il vous suffit de cliquer dessus, vous avez ensuite 5 secondes pour apprendre une commande infrarouge ou 433 a votre Broadlink. Suite à cela le plugin vous confirmera le succès de l’opération et créera la commande associée qu’il vous suffira simplement de nommer.

>**INFORMATION**
>
>Pour éviter d’apprendre ce qui pourrait venir de l’environnement *(télécommande d’un voisin ou autre)*, le Broadlink en mode apprentissage se met VOLONTAIREMENT en niveau de réception très faible, il faut donc être TRES proche du Broadlink pour apprendre une commande surtout si c’est une commande 433Mhz.

# Synchroniser

Sur l’onglet Commandes d’un équipement vous trouvez le bouton Synchroniser. Si vous possédez plusieurs Broadlink vous pouvez transférer les commandes apprises d’un Broadlink à un autre.

>**INFORMATION**
>
>Cela marche d’un rm-pro vers un mini ou vice versa.

Vous pouvez choisir les commandes à transférer ainsi que les Broadlink vers lesquels vous voulez les transférer. (Le nom de la commande sera bien évidemment convervé (ON télévision, ventilateur off, etc.)

>**INFORMATION**
>
>Si vous ajoutez manuellement votre device car pas autodétecté. L'afresse MAC à renseigner est l'adresse MAC inversée par paquet de deux en minuscules sans les deux-points *(exemple AA:BB:CC:DD:EE devient eeddccbbaa)*.

# FAQ

## Enregistrement commandes RF

(pagu mai 2021)

Donc, Voici comment enregistrer les commandes RF avec l’appli mobile Broadlink et le plugin Broadlink Jeedom:

Installer l’appli officielle Broadlink, puis ajouter votre passerelle Broadlink (j’ai lu qu’il fallait arrêter la procédure dès l’ajout de la passerelle sur le réseau wifi et ne surtout pas continuer, ma méthode fonctionne en allant au bout de la procédure!), Vous pouvez ensuite ajouter vos équipements pour les tester avec l’appli.

Avant de passer au plugin sous jeedom, il faut déverrouiller l’utilisation de la passerelle au niveau de l’appli. En effet j’ai pas mal galéré avant de trouver ça, impossible de faire apprendre les commandes RF par le plugin… Dans l’appli, sélectionner votre passerelle, puis « … » en haut à droite, décocher « Verrouiller l’appareil ». Vous pourrez donc utiliser l’appli et le plugin simultanément.

Dans le plugin, l’ajout de la passerelle se fait par le bouton "Mode Inclusion" (Voir doc du plugin pour l’onglet équipement).  Onglet commandes: vous pouvez cliquer sur "Apprendre commande RF avancée" pour vérifier que le voyant de la passerelle passe bien au rouge, mais l’apprentissage ne fonctionnera pas.

Voici la méthode:

- Lancer l’apprentissage via l’appli en premier
- sélectionner l’équipement
- Appuyer sur "…" en haut à droite, puis relearn buttons
- Appuyer sur start learning, puis learn simple RF code
- Appuyer sur le bouton à réapprendre puis ok
- Entrer la fréquence de la télécommande (433.92 pour moi)
- Vous avez 30s pour cliquer sur « Apprendre commande RF avancée » (plugin jeedom) puis le bouton de la télécommande (plusieurs fois jusqu’à détection)
- Confirmer la détection dans l’appli

Une nouvelle commande est normalement apparue dans jeedom (ça ne marche pas forcément du premier coup, mais bien respecter cet ordre sans précipitation)
Attention, si vous renommez la commande, il faut garder les 10 derniers caractères qui sont également dans la commande, sinon la commande ne fonctionnera pas. (Dépend des versions)

Pensez à sauvegarder !
