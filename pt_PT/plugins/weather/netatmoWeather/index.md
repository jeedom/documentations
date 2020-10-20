# Netatmo Weather plugin

Plugin para recuperar informações de estações meteorológicas Netatmo.

# Configuração do plugin

Depois que o plug-in estiver instalado, você precisará inserir suas informações de conexão Netatmo :

![netatmoWeather2](../images/netatmoWeather2.png)

-   **ID do cliente** : seu ID de cliente (consulte a seção de configuração)
-   **Cliente secreto** : seu cliente secreto (consulte a seção de configuração)
-   **Nome de Usuário** : nome de usuário da sua conta netatmo
-   **Senha** : senha para sua conta Netatmo
-   **Sincronizar** : permite sincronizar o Jeedom com sua conta Netamo para descobrir automaticamente seu equipamento Netamo. A fazer depois de salvar os parâmetros anteriores.

# Recuperando informações de conexão

Pour intégrer votre station, vous devez posséder un client\_id et unclient\_secret généré sur le site <http://dev.netatmo.com>.

Uma vez clique em Iniciar :

![netatmoWeather10](../images/netatmoWeather10.png)

Em seguida, "crie um aplicativo"

![netatmoWeather11](../images/netatmoWeather11.png)

Identifique-se, com seu email e senha

![netatmoWeather12](../images/netatmoWeather12.png)

Preencha os campos "Nome" e "Descrição" (o que você colocar, não importa) :

![netatmoWeather13](../images/netatmoWeather13.png)

Em seguida, na parte inferior da página, marque a caixa "Aceito os termos de uso" e clique em "Criar"

![netatmoWeather14](../images/netatmoWeather14.png)

Recupere as informações "ID do cliente" e "Segredo do cliente" e copie-as na parte de configuração do plug-in no Jeedom (consulte o capítulo anterior)

![netatmoWeather15](../images/netatmoWeather15.png)

> **IMPORTANTE**
>
> Observe que o URL de retorno de chamada deve ser "Nenhum", caso contrário, não funcionará.

# Configuração do equipamento

A configuração do equipamento Netatmo pode ser acessada no menu plug-in :

![netatmoWeather3](../images/netatmoWeather3.png)

É assim que a página do plugin Netatmo se parece (aqui com 2 equipamentos) :

![netatmoWeather4](../images/netatmoWeather4.png)

> **Dica**
>
> Como em muitos lugares do Jeedom, posicionar o mouse à extrema esquerda exibe um menu de acesso rápido (você pode, a partir do seu perfil, deixá-lo sempre visível).

Depois de clicar em um equipamento, você obtém :

![netatmoWeather5](../images/netatmoWeather5.png)

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
-   Configuração avançada (pequenas rodas dentadas) : exibe a configuração avançada do comando (método de registro, widget etc.))
-   Teste : permite testar o comando

# Widget

Aqui está o widget padrão para uma estação no painel :

![netatmoWeather6](../images/netatmoWeather6.png)

E no celular :

![netatmoWeather7](../images/netatmoWeather7.png)

# FAQ

>**Qual é a taxa de atualização ?**
>
>O sistema recupera informações a cada 15 minutos.

>**Eu tenho minhas sondas, mas nenhum valor que remonta**
>
>Isso acontece quando há um problema listado, atualização nos módulos ou no Netatmo. A maneira mais fácil é adicionar / remover um módulo e seguir o processo forçará uma atualização de tudo e deve corrigir o problema.
