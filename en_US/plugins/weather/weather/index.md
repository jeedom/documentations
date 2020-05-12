# Weather Plugin

The Weather plugin allows you to recover weather data for one or more cities. Among other things, it provides information on sunrise and sunset, temperature, forecast, wind, etc. The information retrieved comes from the openweathermap website.

# Plugin configuration

After installing the plugin, you must activate it and then enter your API key.

To get your API key you have to go [here](https://home.openweathermap.org), create an account and then copy your API key to the area provided on the Plugin configuration page.

> **Important**
>
> You have to wait a few hours afterwards until the key is active before you can retrieve information

# Equipment configuration

Here you find all the configuration of your equipment :

-   **Weather device name** : name of your weather equipment
-   **Activate** : makes your equipment active
-   **Visible** : makes your equipment visible on the dashboard
-   **Parent object** : indicates the parent object to which the equipment belongs
-   **City** : You must put the name of your city followed by the country code, ex : Paris, fr
-   **Full display on mobile** : displays all weather information or not on mobile

You will find below all the commands available as well as the possibility of historizing or not the numerical values. The code (number) depending on the conditions is available [here](https://openweathermap.org/weather-conditions)

The weather data is refreshed every 30 minutes.

> **Tip**
>
> We advise you to go [here](https://openweathermap.org/find?) in order to check if your city, village is known or not. In which case you will have to find the nearest known city and enter it in the configuration of your equipment to be able to retrieve the information.

> **Tip**
>
> Une fois la recherche de votre ville réussie le site openweathermap vous montre les informations disponibles et vous devriez avoir dans votre navigateur une url du type <https://openweathermap.org/city/2988507>. This number at the end of the url can also be entered in Jeedom equipment instead of Paris, fr for example

>**Important**
>OpenWeather provides a list of information for the next 120 hours; therefore, based on the current time, we only know part of the information on D + 4. Thus, this prediction on D + 4 is refined to become more precise as the current day progresses. For this reason, certain information, such as the MAX temperature reached on D + 4 can only make sense at the end of the day.
