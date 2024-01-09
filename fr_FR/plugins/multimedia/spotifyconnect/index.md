# Plugin Spotify Connect

Ce plugin permet de récupérer l'état des lecteurs Spotify Connect et de les controler à travers Jeedom.

# Configuration

## Configuration du plugin

Comme tout plugin Jeedom, le plugin **Spotify Connect** doit être activé après l'installation. Une fois activé il faut liée jeedom avec votre compte Spotify pour se faire il faut aller dans plugin -> gestion de plugin -> Spotify puis cliquer sur le bouton pour lier avec un compte utilisateur.

### Découverte des lecteurs

Les lecteurs Spotify Connect sont automatiquement découverts lorsqu'ils sont utilisés. Il suffit donc de lancer une lecture de média sur l'équipement Spotify Connect et d'attendre 30 secondes pour voir le lecteur apparaître automatiquement dans Jeedom.

Vous avez également la possibilité de cliquer sur le bouton **Synchroniser la liste des lecteurs** pour forcer cette découverte.

### Fréquence d'interrogation

Afin d'économiser un maximum de ressources, le plugin utilise 2 fréquences de rafraîchissement différentes en fonction de l'état des équipements Spotify Connect :

- **Aucun équipement n'est en cours de lecture** : le plugin va interroger les serveurs Spotify à la **Fréquence de rafraîchissement** standard de 20 secondes par défaut.
- **Au moins un équipement est en cours de lecture** : le plugin va alors interroger les serveurs Spotify à une fréquence plus élevée (**Fréquence de rafraîchissement pendant la lecture** définie à 5 secondes par défaut).

>**IMPORTANT**
>
>Nous vous conseillons de ne pas modifier ces réglages au risque de voir votre compte Spotify bloqué durant plusieurs dizaines de minutes en raison d'une fréquence d'interrogation trop élevée..

### Liaison des comptes utilisateurs

Le plugin permet de se connecter à 2 comptes Spotify Connect distincts.

Pour se faire il suffit de cocher la case permettant d'activer l'utilisateur puis de sauvegarder. Cliquer ensuite sur le bouton **Lier à Jeedom** sur chaque utilisateur afin d'établir la connexion entre Spotify et Jeedom.

### Cas particulier des Chromecast

Il n'est normalement pas possible de lancer une lecture sur un équipement Spotify Connect depuis le plugin *(il s'agit d'une limitation de Spotify)* sauf pour les équipements de type **Chromecast**.

Spotify n'autorisant pas les application tierces à lancer une lecture sur un équipement Chromecast, vous devez suivre cette procédure pour récupérer les 2 cookies nécessaires *(avec le navigateur Google Chrome)* :

- Rendez-vous [à cette adresse](https://open.spotify.com/) et connectez-vous si nécessaire,
- Appuyez sur la touche F12 du clavier puis dirigez-vous vers l'onglet **Application** dans la fenêtre qui s'est ouverte,
- Vérifiez que vous êtes bien dans **Storage → Cookies → https://open.spotify.com** dans le menu de gauche,
- Effectuez une recherche via le champ **Recherche/Filter** en tapant ``sp_``,
- Récupérez enfin les valeurs des cookies ``sp_key`` et ``sp_dc`` et renseignez les dans les champs prévus à cet effet dans la configuration du plugin.

>**IMPORTANT**
>
>Cette fonction n'est ni autorisée par Spotify ni documentée par Google, elle ne peut donc etre officiellement supporté par Jeedom SAS. Elle marche chez moins de 50% des utilisateurs (dépend de parametre externe que l'on arrive malheureusement pas a definir).

>**IMPORTANT**
>
>Ces cookies sont propres à chaque utilisateur. Il faudra donc répéter l'opération pour chacun d'eux en se connectant à chaque fois au compte Spotify concerné.

## Configuration des équipements

Les équipements **Spotify Connect** ne possèdent pas de paramètres spécifiques hormis pour les équipements de type **Chromecast** qui, rappelons-le, sont les seuls à être en mesure de pouvoir contrôler la lecture d'un média.

Pour ces équipements, il faudra donc renseigner leur adresse IP après s'être assuré d'avoir bien renseigné les cookies attendus dans la configuration du plugin (voir le paragraphe **Cas particulier des Chromecast**).

Les équipements disposent de deux commandes pour jouer des playlistes : "jouer playlist" et "jouer URI" :

- Jouer Playlist donne la possibilité de faire jouer a l'équipement une playliste de sa bibliotèque personnelle. La commande se compose en deux éléments : le titre de la plaliste voulue (y placer le nom exacte sans guillement) et option (seul random est pris en compte pour jouer les morceaux de façon aléatoire).
- Jouer Playliste URI permet de faire jouer a l'équipement une playliste, un artiste ou un morceau disponible sur Spotify grace a son URI (un code unique lié a cet élément). Pour le trouver il faut sur l'interface web de spotify faire un clique droit sur l'élément voulu (piste, artiste, playliste...), séléctionner "partager", maintenir ctrl (windows) ou Alt (MAC) puis "copier URI Spotify". Coller la ligne obtenue dans la case URI de la commande.

>**IMPORTANT**
>
>L'équipement Chromecast doit impérativement être sur le même réseau local que Jeedom.
