# Netatmo Thermostat plugin

Plugin para controle de termostatos Netatmo

# Configuração do plugin 

Depois que o plug-in estiver instalado, você precisará inserir suas informações de conexão Netatmo :

-   **ID do cliente** : seu ID de cliente (consulte a seção de configuração)
-   **Cliente secreto** : seu cliente secreto (consulte a seção de configuração)
-   **Nome de Usuário** : nome de usuário da sua conta netatmo
-   **Senha** : senha para sua conta Netatmo
-   **Usar design alternativo** : permite que você use outro design (consulte a parte do widget)
-   **Sincronizar** : permite sincronizar o Jeedom com sua conta Netamo para descobrir automaticamente seu equipamento Netamo. A fazer depois de salvar os parâmetros anteriores.

# Recuperando informações de conexão 

Pour intégrer votre station, vous devez posséder un client\_id et un client\_secret généré sur le site <http://dev.netatmo.com>.

Uma vez clique em Iniciar :

![netatmoWeather10](../images/netatmoWeather10.png)

Em seguida, "crie um aplicativo"

![netatmoWeather11](../images/netatmoWeather11.png)

Identifique-se, com seu email e senha

![netatmoWeather12](../images/netatmoWeather12.png)

Preencha os campos "Nome" e "Descrição" (não importa o que você coloca, não importa) :

![netatmoWeather13](../images/netatmoWeather13.png)

Em seguida, na parte inferior da página, marque a caixa "Aceito os termos de uso" e clique em "Criar"

![netatmoWeather14](../images/netatmoWeather14.png)

Recupere as informações "ID do cliente" e "Cliente secreto" e copie-as na parte de configuração do plug-in no Jeedom (consulte o capítulo anterior)

![netatmoWeather15](../images/netatmoWeather15.png)

# Configuração do equipamento 

A configuração do equipamento Netatmo pode ser acessada no menu do plugin.

Aqui você encontra toda a configuração do seu equipamento :

-   **Nome do dispositivo Netatmo** : nome do seu equipamento Netatmo
-   **Objeto pai** : indica o objeto pai ao qual o equipamento pertence
-   **Ativar** : torna seu equipamento ativo
-   **Visivél** : torna visível no painel
-   **Login** : identificador único de equipamento
-   **Tipo** : tipo do seu equipamento (estação, sonda interna, sonda externa)

Abaixo você encontra a lista de pedidos :

-   o nome exibido no painel
-   Historicizar : permite historiar os dados
-   Configuração avançada (pequenas rodas dentadas) : usado para exibir a configuração avançada do comando (método de log, widget, etc)
-   Teste : permite testar o comando

> **Dica**
>
> Ao alterar o modo do widget, é recomendável clicar em sincronizar para ver o resultado imediatamente

# Faq 

**Qual é a taxa de atualização ?**
O sistema recupera informações a cada 15 minutos.
