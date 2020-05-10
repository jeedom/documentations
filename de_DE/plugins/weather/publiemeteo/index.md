---
layout: default
lang: fr_FR
title: Jeedom | Wetter veröffentlichen Plugin
---

# Description

Mit dem Weather Publish-Plugin können Sie anderen Websites Wetterinformationen für Ihre Heimautomation bereitstellen.
Abhängig von der Site, in die die Daten integriert werden, werden bestimmte Informationen nicht angezeigt.

Es ist kompatibel mit :

>- <a href="http://www.wunderground.com">http://www.wunderground.com</a>
>- <a href="http://www.awekas.at">http://www.awekas.at</a>
>- <a href="http://ma.station-meteo.com">http://ma.station-meteo.com</a>

# Configuration

Um es zu konfigurieren, wählen Sie einfach die Befehle aus, die die Indikatoren enthalten.

![exemple vue d'ensemble](../images/publiemeteo_screenshot2.png)

Andernfalls befinden sich die URLs für externe Websites auf der Plugin-Seite :

![exemple vue d'ensemble](../images/publiemeteo_screenshot1.png)


Es wird daher notwendig sein, an einem der unterstützten Standorte eine Wetterstation einzurichten.

>- <a href="http://www.wunderground.com">www.wunderground.com</a>
>- <a href="http://ma.station-meteo.com">ma.station-meteo.com</a>
>- <a href="http://www.awekas.at">www.awekas.at</a>

## So erstellen Sie eine Station in Awekia
Il faut aller <a href="http://www.awekas.at/fr/benutzer.php?mode=new">http://www.awekas.at/fr/benutzer.php?Modus = neu </a>

>- Wählen Sie im Übertragungsmodus WSWIN (awekas.txt)
>- Geben Sie im Pfad der Datendatei die URL ein, die sich auf der Plugin-Konfigurationsseite befindet.
>- Die Daten werden regelmäßig regelmäßig von der Site abgerufen

## So erstellen Sie eine Station bei Wunderground
Il faut aller <a href="https://www.wunderground.com/personal-weather-station/mypw">https://www.wunderground.com/personal-weather-station/mypw</a>

>- Es befindet sich im Profilmenü "Meine Wetterstationen" => "Neues PWS hinzufügen""
>- Sie müssen dann die Stations-ID und das Passwort auf der Plugin-Konfigurationsseite eingeben.
>- Die Daten werden regelmäßig von Jeedom gesendet

## So erstellen Sie eine Station bei station-meteo
Il faut aller <a href="http://ma.station-meteo.com/register/">http://ma.station-meteo.com/register/</a>
Sobald die Verbindung hergestellt ist, füllen Sie das Registrierungsformular aus. Dann müssen Sie im Datenmenü wie folgt konfigurieren :

>- URL importieren, geben Sie die URL ein, die sich auf der Plugin-Konfigurationsseite befindet.
>- Importtyp, wählen Sie awekas.txt
>- Die Daten werden regelmäßig regelmäßig von der Site abgerufen

# FAQ

- Wie oft werden die Daten aktualisiert? ?
>Die Daten werden ständig aktualisiert. Es kommt also darauf an, wie oft die Site aktualisiert wird.
>Für Wunderground.com werden sie alle 15 Minuten gesendet.

- Dieses Plugin generiert kein Protokoll. Wie können wir eines haben? ?
>Es ist notwendig, vorher das Jeedom-Debug vorübergehend zu aktivieren (Konfigurationsmenü => Konfiguration von Protokollen und Nachrichten => Aktivieren + Protokollstufe = Debuggen).
