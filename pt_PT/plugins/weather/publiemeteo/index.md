---
layout: padrão
lang: fr_FR
title: Jeedom | Plugin de publicação do tempo
---

# Descrição

O plug-in Weather Publish possibilita fornecer a outros sites informações sobre o clima para sua automação residencial.
Dependendo do site em que os dados serão integrados, determinadas informações não serão apresentadas.

É compatível com :

>- <a href="http://www.wunderground.com">http://www.wunderground.com</a>
>- <a href="http://www.awekas.at">http://www.awekas.at</a>
>- <a href="http://ma.station-meteo.com">http://ma.station-meteo.com</a>

# Configuração

Para configurá-lo, basta selecionar os comandos que contêm os indicadores.

![exemple vue d'ensemble](../images/publiemeteo_screenshot2.png)

Caso contrário, os URLs para sites externos estão na página do plug-in :

![exemple vue d'ensemble](../images/publiemeteo_screenshot1.png)


Portanto, será necessário criar uma estação meteorológica em um dos sites suportados.

>- <a href="http://www.wunderground.com">www.wunderground.com</a>
>- <a href="http://ma.station-meteo.com">ma.station-meteo.com</a>
>- <a href="http://www.awekas.at">www.awekas.at</a>

## Como criar uma estação na Awekia
Il faut aller <a href="http://www.awekas.at/fr/benutzer.php?mode=new">http://www.awekas.at/fr/benutzer.php?mode = new </a>

>- No modo de transferência, escolha WSWIN (awekas.txt)
>- Caminho do arquivo de dados, coloque o URL que está na página de configuração do plugin.
>- Os dados serão recuperados automaticamente regularmente pelo site

## Como criar uma estação no Wunderground
Il faut aller <a href="https://www.wunderground.com/personal-weather-station/mypw">https://www.wunderground.com/personal-weather-station/mypw</a>

>- Está no menu de perfil "Minhas Estações Meteorológicas" => "Adicionar um novo PWS"
>- Você precisará digitar o ID da estação e a senha na página de configuração do plugin.
>- Os dados serão enviados regularmente pela Jeedom

## Como criar uma estação no station-meteo
Il faut aller <a href="http://ma.station-meteo.com/register/">http://ma.station-meteo.com/register/</a>
Uma vez conectado, preencha o formulário de registro. Em seguida, no menu de dados, você deve configurar da seguinte maneira :

>- Importar URL, coloque o URL que está na página de configuração do plug-in.
>- Tipo de importação, escolha awekas.txt
>- Os dados serão recuperados automaticamente regularmente pelo site

# Faq

- Com que frequência os dados são atualizados ?
>Os dados são atualizados constantemente. Portanto, depende de quantas vezes o site é atualizado.
>Para wunderground.com eles são enviados a cada 15 minutos.

- Este plugin não gera um log, como podemos ter um ?
>É necessário previamente ativar temporariamente a depuração do Jeedom (menu Configuração => Configuração de logs e mensagens => Ativar + Nível do log = Depuração).
