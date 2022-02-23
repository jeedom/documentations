# Netatmo Thermostat plugin

# Description

Plugin para controlar termostatos Netatmo.

# Configuração do plugin

Assim que o plugin for instalado, você deve inserir as informações de conexão do Netatmo :

-   **ID do cliente** : seu ID de cliente *(veja a parte de configuração)*.
-   **Cliente secreto** : seu cliente secreto *(veja a parte de configuração)*.
-   **Nome de Usuário** : nome de usuário da sua conta netatmo.
-   **Senha** : senha para sua conta Netatmo.
-   **Usar design alternativo** : permite usar outro design *(veja a parte do widget)*.
-   **Sincronizar** : permite sincronizar o Jeedom com sua conta Netamo para descobrir automaticamente seu equipamento Netamo. Para fazer depois de salvar as configurações anteriores.

# Recuperando informações de conexão

Pour intégrer votre station, vous devez posséder un client\_id et un client\_secret généré sur le site <http://dev.netatmo.com>.

Pour créer un compte > https://auth.netatmo.com/fr-fr/access/signup?next_url=https%3A%2F%2Fdev.netatmo.com%2Fbusiness-showcase

Uma vez nele clique em "INICIAR" :

![netatmoWeather10](../images/netatmoWeather10.png)

Em seguida, "crie um aplicativo" :

![netatmoWeather11](../images/netatmoWeather11.png)

Identifique-se com seu e-mail e senha :

![netatmoWeather12](../images/netatmoWeather12.png)

Preencha os campos "Nome" e "Descrição" (não importa o que você coloque, não importa) :

![netatmoWeather13](../images/netatmoWeather13.png)

Em seguida, na parte inferior da página, marque a caixa "Aceito os termos de uso" e clique em "Criar" :

![netatmoWeather14](../images/netatmoWeather14.png)

Recupere as informações de "ID do cliente" e "Segredo do cliente" e copie-as na parte de configuração do plugin no Jeedom *(veja o capítulo anterior)*.

![netatmoWeather15](../images/netatmoWeather15.png)

# Configuração do equipamento

A configuração do equipamento Netatmo pode ser acessada no menu do plugin.

Aqui você encontra toda a configuração do seu equipamento :

-   **Nome do dispositivo Netatmo** : nome do seu equipamento Netatmo.
-   **Objeto pai** : indica o objeto pai ao qual o equipamento pertence.
-   **Ativar** : torna seu equipamento ativo.
-   **Visivél** : torna visível no painel.
-   **Login** : identificador único de equipamento.
-   **Tipo** : tipo de seu equipamento (estação, sensor interno, sensor externo, etc).

Abaixo você encontra a lista de pedidos :

-   o nome exibido no painel
-   Historicizar : permite historiar os dados
-   Configuração avançada (pequenas rodas dentadas) : usado para exibir a configuração avançada do comando (método de log, widget, etc)
-   Teste : permite testar o comando

> **DICA**
>
> Ao alterar o modo do widget, é recomendável clicar em sincronizar para ver o resultado imediatamente.

# FAQ

>**Qual é a taxa de atualização ?**
>
>O sistema recupera informações a cada 15 minutos.
