# Plugin Météo

Le plugin Weather permet de récupérer les données météorologiques pour une ou plusieurs villes. Il permet entre autre d’avoir les informations de lever et coucher du soleil, de température, de prévision, de vent, etc. Les informations récupérées viennent du site internet openweathermap.

# Configuration du plugin

Après avoir installé le plugin, il faut l’activer puis renseigner votre clef api.

Pour obtenir votre clef api il faut aller [ici](https://home.openweathermap.org), créer un compte et ensuite il faut copier votre clef api dans la zone prévue sur la page de configuration du Plugin.

> **Important**
>
> Il faut attendre quelques heures ensuite le temps que la clef soit active avant de pouvoir récupérer des informations

# Configuration des équipements

Vous retrouvez ici toute la configuration de votre équipement :

-   **Nom de l’équipement météo** : nom de votre équipement météo
-   **Activer** : permet de rendre votre équipement actif
-   **Visible** : rend votre équipement visible sur le dashboard
-   **Objet parent** : indique l’objet parent auquel appartient l’équipement
-   **Ville** : Il faut mettre le nom de votre ville suivi du code pays, ex : Paris,fr
-   **Affichage complet en mobile** : permet d’afficher toutes les informations météo ou non en mobile

Vous retrouvez en dessous toutes les commandes disponibles ainsi que la possibilité d’historiser ou non les valeurs numériques. Le code (numéro) en fonction des conditions est disponible [ici](https://openweathermap.org/weather-conditions)

Le rafraîchissement des données météo s’effectue toutes les 30 minutes.

> **Tip**
>
> Nous vous conseillons de vous rendre [ici](https://openweathermap.org/find?) afin de vérifier si votre ville, village est connu ou pas. Auquel cas il faudra trouver la ville la plus proche connue et saisir cette dernière dans la configuration de votre équipement pour pouvoir récupérer les informations.

> **Tip**
>
> Une fois la recherche de votre ville réussie le site openweathermap vous montre les informations disponibles et vous devriez avoir dans votre navigateur une url du type <https://openweathermap.org/city/2988507>. Ce numéro à la fin de l’url peut également être saisi dans l’équipement Jeedom en lieu et place de Paris,fr par exemple

>**IMPORTANT**
>OpenWeather fournit une liste d'informations sur les 120 heures à venir ; de ce fait, en fonction de l’heure actuelle, nous ne connaissons qu’une partie des informations à J+4. Ainsi, cette prédiction à J+4 s'affine pour devenir plus précise au fur et à mesure de la journée courante. Pour cette raison, certaines informations, comme la température MAX atteinte à J+4 ne pourront faire sens qu'en fin de journée.
