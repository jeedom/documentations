---
layout: default
lang: fr_FR
title: Jeedom | Weather Publish Plugin
---

# Description

The Weather Publish plugin makes it possible to provide other sites with weather information for your home automation.
Depending on the site in which the data will be integrated, certain information will not be presented.

It is compatible with :

>- <a href="http://www.wunderground.com">http://www.wunderground.com</a>
>- <a href="http://www.awekas.at">http://www.awekas.at</a>
>- <a href="http://ma.station-meteo.com">http://ma.station-meteo.com</a>

# Setup

To configure it, simply select the commands containing the indicators.

![exemple vue d'ensemble](../images/publiemeteo_screenshot2.png)

Otherwise the URLs for external sites are in the plugin page :

![exemple vue d'ensemble](../images/publiemeteo_screenshot1.png)


It will therefore be necessary to create a weather station at one of the supported sites.

>- <a href="http://www.wunderground.com">www.wunderground.com</a>
>- <a href="http://ma.station-meteo.com">ma.station-meteo.com</a>
>- <a href="http://www.awekas.at">www.awekas.at</a>

## How to create a station at Awekia
Il faut aller <a href="http://www.awekas.at/fr/benutzer.php?mode=new">http://www.awekas.at/fr/benutzer.php?mode = new </a>

>- In transfer mode, choose WSWIN (awekas.txt)
>- Path of the data file, put the URL which is on the plugin configuration page.
>- The data will be automatically retrieved regularly by the site

## How to create a station at Wunderground
Il faut aller <a href="https://www.wunderground.com/personal-weather-station/mypw">https://www.wunderground.com/personal-weather-station/mypw</a>

>- It is in the profile menu "My Weather Stations" => "Add a New PWS"
>- You will then have to enter the Station ID and password in the plugin configuration page.
>- The data will be sent regularly by Jeedom

## How to create a station at station-meteo
Il faut aller <a href="http://ma.station-meteo.com/register/">http://ma.station-meteo.com/register/</a>
Once connected fill in the registration form. Then in the data menu, you must configure as follows :

>- Import URL, put the URL which is on the plugin configuration page.
>- Import type, choose awekas.txt
>- The data will be automatically retrieved regularly by the site

# FAQ

- How often is the data updated ?
>Data is constantly updated. So it depends on how often the site is updated.
>For wunderground.com they are sent every 15 minutes.

- This plugin does not generate a log, how can we have one ?
>It is necessary beforehand to temporarily activate the Jeedom debug (Setup menu => Setup of logs & messages => Activate + Log level = Debug).
