# Slack plugin

Este plug-in permite estabelecer uma conexão entre o Slack e o Jeedom para enviar alertas do Jeedom ou conversar com o Jeedom (usando interações).

# Configuração do plugin 

Depois de baixar o plugin, você deve ativá-lo, ele não requer nenhuma outra configuração.

![slack1](../images/slack1.PNG)

# Configuração do equipamento 

A configuração do equipamento Slack pode ser acessada no menu Plugins :

![slack2](../images/slack2.PNG)

É assim que a página do plugin Slack se parece (aqui com um dispositivo já) :

![slack3](../images/slack3.PNG)

Depois de clicar em um deles, você obtém :

![slack4](../images/slack4.PNG)

Aqui você encontra toda a configuração do seu equipamento :

-   **Nome de l'équipement** : nome do seu equipamento Slack
-   **Ativar** : torna seu equipamento ativo
-   **Visivél** : torna visível no painel
-   **Domínio** : nome de domínio do seu Slack (permite, em particular, se você tiver vários Slack para diferenciá-los)
-   **Autenticação de token** : Token da API do Slack, útil apenas para enviar arquivos (capturar uma câmera, por exemplo), veja abaixo o método para recuperá-lo
-   **URL de retorno** : este é o URL que deve ser fornecido no webhook Slack (observe que seu Jeedom deve estar acessível a partir do exterior)

Abaixo você encontrará a configuração dos comandos :

-   **Nome** : nome do comando
-   **Webhook** : URL para ligar para enviar uma mensagem no Slack
-   **Destino** : não obrigatório, permite forçar o envio de uma mensagem para um canal ou usuário
-   Configuração avançada (pequenas rodas dentadas) : exibe a configuração avançada do comando (método de registro, widget etc.)
-   Teste : permite testar o comando
-   Excluir (assinar -) : permite excluir o comando

> **Dica**
>
> Por padrão, existem 2 comandos : Remetente que fornece o nome do último remetente da mensagem e Mensagem que fornece a mensagem, isso pode ser útil, se você quiser fazer algo que não é possível com interações para acionar um cenário na chegada de um novo mensagem, por exemplo, e recupere o valor dela (podemos, por exemplo, imaginar a leitura da mensagem no Sonos ou no Karotz)

Criação de conta no Slack 

Nada mais basta ir [aqui](:https://slack.com/), e insira um endereço de e-mail e um nome de domínio / empresa, por exemplo :

![slack5](../images/slack5.PNG)

Você só precisa validar, receberá um email, clique no link para ativar sua conta e é bom

Então você chegará no seu Slack :

![slack6](../images/slack6.PNG)

A partir daí, você encontra à esquerda os canais e os usuários. No centro, você pode baixar o aplicativo Slack para iOS, Android, Mac ou Windows

# Adicionando webhook de saída 

Os wekhooks permitem que o Slack informe Jeedom da chegada de uma mensagem e aguarde a resposta do Jeedom para retransmiti-la. Para fazer isso, você deve acessar as configurações :

![slack7](../images/slack7.PNG)

Depois clique em integração :

![slack8](../images/slack8.PNG)

Na parte inferior, você encontrará "WebHooks de saída" :

![slack9](../images/slack9.PNG)

Clique em "Adicionar" :

![slack10](../images/slack10.PNG)

Em seguida, "Adicionar integração de WebHooks de saída" :

![slack11](../images/slack11.PNG)

Você encontrará os diferentes parâmetros na parte inferior da página :

-   **Canal** : não é necessário, vamos dizer ao Slack para enviar tudo neste canal para o Jeedom. Por exemplo, podemos criar um canal apenas para o Jeedom (mais prático do que colocar uma palavra-chave)
-   **Gatilho (s) do Word** : não é obrigatório se você colocou um canal, caso contrário, é absolutamente necessário. Esse campo permite definir uma palavra acionadora para enviar ao Jeedom, por exemplo, se você colocar o Jeedom, todas as suas solicitações deverão começar com o Jeedom (ex : Jeedom quanto ele está na sala)
-   **URL (s)** : URL para ligar, você o encontra na página do seu equipamento em Jeedom, com o nome de "URL de retorno"

Os outros campos não são úteis, exceto talvez o "Personalizar nome", que permite definir o nome do bot Jeedom (nome com o qual o Jeedom responde), você também pode, com "Personalizar ícone", alterar o ícone do Jeedom.

Em seguida, clique em "Salvar configurações" e é bom

![slack12](../images/slack12.PNG)

Lá, você pode conversar com Jeedom através do Slack

> **IMPORTANTE**
>
> Não se esqueça no Jeedom para inserir seu nome de domínio (nome da empresa), caso contrário, o Jeedom se recusará a responder (observe que este campo é sensível à caixa).

> **Dica**
>
> Como o Jeedom separa os equipamentos por domínio, é possível se você tiver vários domínios para separar os equipamentos e, portanto, os cenários por trás.

# Adição de webhook recebido 

Webhooks recebidos permitem que o Jeedom comunique uma mensagem em um canal ou diretamente a uma pessoa. Sem esses webhooks, o Jeedom não poderá tomar a iniciativa de enviar uma mensagem.

Para fazer isso, você tem que ir para as configurações :

![slack7](../images/slack7.PNG)

Depois clique em integração :

![slack8](../images/slack8.PNG)

Na parte inferior, você encontrará "WebHooks de entrada" :

![slack13](../images/slack13.PNG)

Em seguida, você deve escolher um canal ou um usuário de destino padrão (depois pode especificar um por comando no Jeedom) :

![slack14](../images/slack14.PNG)

Em seguida, clique em "Adicionar integração de WebHooks de entrada".

![slack15](../images/slack15.PNG)

Na parte inferior da página, você encontrará as informações do webhook, basta recuperar o valor do campo "Webhook URL" e copiá-lo no campo Webhook do seu pedido.

> **Dica**
>
> No campo de destino do comando no Jeedom, você pode especificar um canal (ex \#monchannel) ou um usuário (ex @toto).

Aqui, no Jeedom, você só precisa salvar e, a partir do Jeedom, pode enviar mensagens no Slack

# Recuperação de token 

Aqui está como recuperar seu token para que o Jeedom possa enviar arquivos para o Slack e, em particular, capturas de câmeras, por exemplo. Primeiro você tem que ir [aqui](https://api.slack.com/custom-integrations/legacy-tokens), então, no fundo, continue :

![slack17](../images/slack17.PNG)

Aqui na frente de sua equipe, peça ao Slack para gerar o token, ele solicitará sua senha e depois o enviará de volta à mesma página; na parte inferior, solicite o token novamente. Após alguns segundos, apenas copie-o no campo token no Jeedom

> **Dica**
>
> Esta etapa é opcional, é útil enviar capturas de sua câmera pelo Slack, por exemplo.

# Qual é o resultado ? 

Aqui está um exemplo do que é possível fazer quando o plug-in estiver configurado corretamente e as interações criadas :

![slack16](../images/slack16.PNG)

> **IMPORTANTE**
>
> Se você usar a função "ask" dos cenários, deverá enviar a solicitação em um canal no qual o Jeedom ouvirá as respostas, caso contrário, sua solicitação "ask" cairá em "timeout""
