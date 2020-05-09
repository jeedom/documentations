---
layout: default
lang: fr_FR
title: Jeedom | Plugin Publie Meteo
---

# Description

Le plugin Publie Météo permet de mettre à disposition d'autres sites les informations météo de votre domotique.
En fonction du site dans lequel les données seront intégrées, certaines informations ne seront pas présentées.

Il est compatible avec :

>- <a href="http://www.wunderground.com">http://www.wunderground.com</a>
>- <a href="http://www.awekas.at">http://www.awekas.at</a>
>- <a href="http://ma.station-meteo.com">http://ma.station-meteo.com</a>

# Configuration

Pour le configurer, il suffit de sélectionner les commandes contenant les indicateurs.

![exemple vue d'ensemble](../images/publiemeteo_screenshot2.png)

Sinon les URL pour les sites externes sont dans la page du plugin :

![exemple vue d'ensemble](../images/publiemeteo_screenshot1.png)


Il faudra donc se créer une station météo chez l'un des sites supportés.

>- <a href="http://www.wunderground.com">www.wunderground.com</a>
>- <a href="http://ma.station-meteo.com">ma.station-meteo.com</a>
>- <a href="http://www.awekas.at">www.awekas.at</a>

## Comment créer une station chez Awekia
Il faut aller <a href="http://www.awekas.at/fr/benutzer.php?mode=new">http://www.awekas.at/fr/benutzer.php?mode=new</a>

>- Dans mode de transfert, choisir WSWIN (awekas.txt)
>- Chemin du fichier de données, mettre l'URL qui se trouve sur la page de paramétrage du plugin.
>- Les données seront automatiquement récupèrer régulièrement par le site

## Comment créer une station chez Wunderground
Il faut aller <a href="https://www.wunderground.com/personal-weather-station/mypw">https://www.wunderground.com/personal-weather-station/mypw</a>

>- C'est dans le menu de profile "My Weather Stations" => "Add a New PWS"
>- Il faudra ensuite renseigner le Station ID et le mot de passe dans la page de paramétrage du plugin.
>- Les données seront envoyer régulièrement par Jeedom

## Comment créer une station chez station-meteo
Il faut aller <a href="http://ma.station-meteo.com/register/">http://ma.station-meteo.com/register/</a>
Une fois connecter remplir le formulaire d'inscription. Ensuite dans le menu données, il faut paramétrer comme suit :

>- URL d'import, mettre l'URL qui se trouve sur la page de paramétrage du plugin.
>- Type d'import, choisir awekas.txt
>- Les données seront automatiquement récupérer régulièrement par le site

# FAQ

- A quelle fréquence les données sont-elles mise à jour ?
>Les données sont mises à jour en permanence. Cela dépend donc de la fréquence de mise à jour du site.
>Pour wunderground.com elles sont envoyées toutes les 15 minutes.

- Ce plugin ne génère pas de log, comment peut-on en avoir ?
>Il est nécessaire au préalable d'activer temporairement le debug de Jeedom (menu Configuration => Configuration des logs & messages => Activer + Niveau de log = Debug).
