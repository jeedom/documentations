# Plugin Weather

Le plugin **Weather** permet de récupérer les données météorologiques d'une ou plusieurs villes. Les informations proviennent du site internet **OpenWeatherMap** qui donne accès, entre autre, aux prévisions, aux informations de lever et coucher du soleil, de température, d'humidité, de vent, etc...

Le rafraîchissement de ces données s’effectue toutes les 30 minutes.

>**INFORMATION**
>
>OpenWeather fournit une liste d'informations sur les 120 heures à venir. De ce fait, en fonction de l’heure actuelle, nous ne connaissons qu’une partie des informations à J+4. Ainsi, cette prédiction à J+4 s'affine pour devenir plus précise au fur et à mesure de la journée courante. Pour cette raison, certaines informations, comme la température MAX atteinte à J+4 ne pourront faire sens qu'en fin de journée.

# Configuration

## Configuration du plugin

Ce plugin ne nécessite pas de configuration particulière et doit simplement être activé après l'installation.

## Configuration des équipements

Les équipements Météo sont accessibles à partir du menu **Plugins → Météo → Weather**.

>**INFORMATION**
>
>Le bouton **+ Ajouter** permet d'ajouter un nouvel équipement Météo.

En cliquant sur un équipement, on arrive directement sur sa page de configuration :

- **Nom de l’équipement** : Nom de l'équipement Météo.
- **Objet parent** : Indique l’objet parent auquel appartient l’équipement.
- **Catégorie** : Permet de choisir la catégorie de l'équipement.
- **Options** :
    - **Activer** : Permet de rendre l'équipement actif.
    - **Visible** : Rend l'équipement visible.
    - **Affichage mobile complet** : Cocher la case permet d’afficher toutes les informations météo sur les mobiles.
    - **Mode image** : Cocher la case pour afficher des images à la place d'icônes sur le widget.

Il faudra ensuite renseigner les coordonnées GPS du lieu dont vous souhaitez récupérer les informations météorologiques :

- **Latitude** : Latitude du lieu dont vous souhaitez récupérer la méteo *(sous la forme XX.XXXXXXX)*.
- **Longitude** : Longitude du lieu dont vous souhaitez récupérer la méteo *(sous la forme XX.XXXXXXX)*.

En cliquant sur l'onglet **Commandes**, on retrouve la liste de toutes les commandes disponibles ainsi que la possibilité d’historiser les valeurs numériques.

La commande **Numéro condition** donne un code relatif à la condition en cours dont vous pourrez trouver plus d'informations [à cette adresse](https://openweathermap.org/weather-conditions).
