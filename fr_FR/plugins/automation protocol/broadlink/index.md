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
