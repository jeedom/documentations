Configuration
=============

Mit dem Wetter-Plugin können Sie meteorologische Daten für eine oder
mehrere Städte abrufen. Es ermöglicht unter anderem die Information von
Sonnenaufgang und Sonnenuntergang, Temperatur, Vorhersage, Wind usw. 
Die abgerufenen Informationen stammen von der openweathermap-Website.

Configuration du plugin
-----------------------

Nach der Installation des Plugins, müssen sie es erst aktivieren und den
API-Schlüssel eingeben.

Um ihren API-Schlüssel zu erhalten, müssen Sie [hier](https://home.openweathermap.org) auf den Link gehen und ein Konto erstellen, dann müssen Sie Ihren API-Schlüssel in das Eingabefeld auf der Konfiguration Seite vom Plugin kopieren.

> **Important**
>
> Es ist notwendig, ein paar Stunden zu warten, bis der Schlüssel aktiv ist,
> bevor Informationen abgerufen werden können.

Configuration des équipements
-----------------------------

Hier finden sie die ganze Konfiguration Ihrer Geräte:

-   **Name der Wetterausrüstung** : Name Ihrer Wetterausrüstung 

-   **Aktivieren** : ermöglicht es Ihnen, Ihr Gerät zu aktivieren

-   **Sichtbar** : macht Ihr Gerät auf dem Armaturenbrett sichtbar

-   **Eltern-Objekt** : gibt das übergeordnete Objekt an, zu dem das
    Gerät gehört

-   **Stadt** : Sie müssen den Namen ihrer Stadt mit den Ländercode eingeben,
    z.B.: Paris,fr

-   **Affichage complet en mobile** : permet d’afficher toutes les
    informations météo ou non en mobile

Vous retrouvez en dessous toutes les commandes disponibles ainsi que la
possibilité d’historiser ou non les valeurs numériques. Le code (numéro)
en fonction des conditions est disponible
[ici](https://openweathermap.org/weather-conditions)

Die Wetter-Daten-Aktualisierung erfolgt alle 30 min. 

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
