---
layout: default
lang: fr_FR
title: Jeedom | Plugin de publicación del tiempo
---

# Description

El complemento Weather Publish permite proporcionar a otros sitios información sobre el clima para la automatización de su hogar.
Dependiendo del sitio en el que se integrarán los datos, cierta información no se presentará.

Es compatible con :

>- <a href="http://www.wunderground.com">http://www.wunderground.com</a>
>- <a href="http://www.awekas.at">http://www.awekas.at</a>
>- <a href="http://ma.station-meteo.com">http://ma.station-meteo.com</a>

# Configuration

Para configurarlo, simplemente seleccione los comandos que contienen los indicadores.

![exemple vue d'ensemble](../images/publiemeteo_screenshot2.png)

De lo contrario, las URL de los sitios externos se encuentran en la página del complemento :

![exemple vue d'ensemble](../images/publiemeteo_screenshot1.png)


Por lo tanto, será necesario crear una estación meteorológica en uno de los sitios compatibles.

>- <a href="http://www.wunderground.com">www.wunderground.com</a>
>- <a href="http://ma.station-meteo.com">ma.station-meteo.com</a>
>- <a href="http://www.awekas.at">www.awekas.at</a>

## Cómo crear una estación en Awekia
Il faut aller <a href="http://www.awekas.at/fr/benutzer.php?mode=new">http://www.awekas.at/fr/benutzer.php?modo = nuevo </a>

>- En el modo de transferencia, elija WSWIN (awekas.txt)
>- Ruta del archivo de datos, coloque la URL que se encuentra en la página de configuración del complemento.
>- Los datos serán recuperados automáticamente por el sitio

## Cómo crear una estación en Wunderground
Il faut aller <a href="https://www.wunderground.com/personal-weather-station/mypw">https://www.wunderground.com/personal-weather-station/mypw</a>

>- Está en el menú de perfil "Mis estaciones meteorológicas" => "Agregar un nuevo PWS"
>- Luego deberá ingresar el ID y la contraseña de la estación en la página de configuración del complemento.
>- Los datos serán enviados regularmente por Jeedom

## Cómo crear una estación en station-meteo
Il faut aller <a href="http://ma.station-meteo.com/register/">http://ma.station-meteo.com/register/</a>
Una vez conectado complete el formulario de registro. Luego, en el menú de datos, debe configurar de la siguiente manera :

>- Importar URL, coloque la URL que se encuentra en la página de configuración del complemento.
>- Tipo de importación, elija awekas.txt
>- Los datos serán recuperados automáticamente por el sitio

# FAQ

- ¿Con qué frecuencia se actualizan los datos? ?
>Los datos se actualizan constantemente. Por lo tanto, depende de con qué frecuencia se actualiza el sitio.
>Para wunderground.com se envían cada 15 minutos.

- Este complemento no genera un registro, ¿cómo podemos tener uno? ?
>Primero es necesario activar temporalmente la depuración de Jeedom (Menú de configuración => Configuración de registros y mensajes => Activar + Nivel de registro = Depurar).
