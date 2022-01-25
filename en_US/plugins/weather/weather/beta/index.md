# Weather plugin

The plugin **Weather** allows you to retrieve meteorological data from one or more cities. The information comes from the website **Openweathermap** which gives access, among other things, to forecasts, sunrise and sunset information, temperature, humidity, wind, etc...

This data is refreshed every 30 minutes.

>**INFORMATION**
>
>OpenWeather provides a list of information for the next 120 hours. Therefore, depending on the current time, we only know part of the information at D+4. Thus, this prediction on D + 4 is refined to become more precise as the current day progresses. For this reason, certain information, such as the MAX temperature reached on D + 4 can only make sense at the end of the day.

# Configuration

## Plugin Setup

This plugin does not require any special configuration and simply needs to be activated after installation.

## Equipment configuration

Weather equipment is accessible from the menu **Plugins → Weather → Weather**.

>**INFORMATION**
>
>The button **+ Add** allows you to add a new Weather equipment.

Clicking on a device takes you directly to its configuration page :

- **Equipment name** : Weather device name.
- **Parent object** : Indicates the parent object to which the equipment belongs.
- **Category** : Allows you to choose the category of the equipment.
- **Options** :
    - **Activate** : Allows you to make the equipment active.
    - **Visible** : Makes equipment visible.
    - **Full mobile display** : Checking the box allows you to display all weather information on mobiles.
    - **Image mode** : Check the box to display images instead of icons on the widget.

You will then need to enter the GPS coordinates of the place from which you wish to retrieve the weather information :

- **Latitude** : Latitude of the place whose weather you want to retrieve *(Under the form XX.XXXXXXX)*.
- **Longitude** : Longitude of the place whose weather you want to retrieve *(Under the form XX.XXXXXXX)*.

By clicking on the tab **Commands**, we find the list of all the commands available as well as the possibility of logging the numerical values.

The command **Number** gives a code related to the current condition from which you can find more information [at this address](https://openweathermap.org/weather-conditions).
