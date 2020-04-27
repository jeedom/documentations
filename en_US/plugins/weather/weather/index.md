Configuration
=============

The Weather plugin allows you to retrieve weather data for one or more cities. It allows among other things to retrieve the sunrise and sunset, temperature, forecast, wind, etc. The information retrieved comes from the OpenWeatherMap website.

Configuration du plugin
-----------------------

After installing the plugin, you have to activate it then fill in your API key.

Pour obtenir votre clef api il faut aller
[ici](https://home.openweathermap.org), créer un compte et ensuite il
faut copier votre clef api dans la zone prévue sur la page de
configuration du Plugin.

> **Important**
>
> It is necessary to wait a few hours then the time that the key is
> active before you can retrieve information

Configuration des équipements
-----------------------------

You can find here the full configuration of your device :

-   **Name of weather equipment**: name of your weather equipment

-   **Enable**: makes your equipment active

-   **Visible**: makes your equipment visible on the dashboard

-   **Parent Object** : means the parent object the equipment depend
    equipment

-   **City**: You must put the name of your city followed by the country code,
    ex : Paris,fr

-   **Affichage complet en mobile** : permet d’afficher toutes les
    informations météo ou non en mobile

Vous retrouvez en dessous toutes les commandes disponibles ainsi que la
possibilité d’historiser ou non les valeurs numériques. Le code (numéro)
en fonction des conditions est disponible
[ici](https://openweathermap.org/weather-conditions)

Refreshing weather data is done every 30 minutes.

> **Tip**
>
> Nous vous conseillons de vous rendre
> [ici](https://openweathermap.org/find?) afin de vérifier si votre
> ville, village est connu ou pas. Auquel cas il faudra trouver la ville
> la plus proche connue et saisir cette dernière dans la configuration
> de votre équipement pour pouvoir récupérer les informations.

> **Tip**
>
> Une fois la recherche de votre ville réussie le site openweathermap
> vous montre les informations disponibles et vous devriez avoir dans
> votre navigateur une url du type
> <https://openweathermap.org/city/2988507>. Ce numéro à la fin de l’url
> peut également être saisi dans l’équipement Jeedom en lieu et place de
> Paris,fr par exemple

>**IMPORTANT**
>OpenWeather fournit une liste d'informations sur les 120 heures à venir ; de ce fait, en fonction de l’heure actuelle, nous ne connaissons qu’une partie des informations à J+4. Ainsi, cette prédiction à J+4 s'affine pour devenir plus précise au fur et à mesure de la journée courante. Pour cette raison, certaines informations, comme la température MAX atteinte à J+4 ne pourront faire sens qu'en fin de journée.
