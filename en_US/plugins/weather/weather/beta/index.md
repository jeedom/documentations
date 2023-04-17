# Weather plugin

The plugin **Weather** allows you to retrieve meteorological data from one or more cities.

This data is refreshed every 30 minutes.

>**IMPORTANT**
>
>Following the configuration and activation of the equipment, it is absolutely necessary to launch a manual data update for the plugin to update or wait 30min for the automatic update

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


## Weather code

You will find [here](https://www.weatherapi.com/docs/weather_conditions.json) the meaning of the different weather codes