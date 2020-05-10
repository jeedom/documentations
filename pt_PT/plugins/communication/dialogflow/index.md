# Dialogflow

O plug-in de fluxo de diálogo torna possível conectar o Jeedom ao Google Home / Assistant por um aplicativo nativo e interações

> **NOTE**
>
> Há também o plug-in do Google Smarthome, que permite conectar o Jeedom ao Google Home / Assistant, mas desta vez para a integração do Google Smarthome, ele não usa interações..

> **Important**
>
> O plug-in requer uma assinatura para serviços de voz. Você pode gerenciar sua assinatura [aqui](https://market.jeedom.com/index.php?v=d&p=profils#services)

# Configuration

Instale o plugin e ative-o. Sempre na página de configuração do plug-in, clique em "Enviar" para enviar sua configuração ao mercado.

![dialogflow](../images/dialogflow1.png)

> **IMPORTANT**
>
> Você não precisa criar nenhum equipamento para este plugin. Basta seguir as instruções abaixo.

No mercado, você deve ativar o "Google Smarthome" na guia "Meus serviços"".

> **IMPORTANT**
>
> O URL de acesso da sua jeedom deve estar absolutamente em https

> **NOTE**
>
> Você pode conectar apenas um Jeedom ao Google por conta de mercado

Em um telefone com o Assistente do Google, diga "Fale com o Jeedom", o Google solicitará que você vincule sua conta do Jeedom e o Google clique em Sim :

![dialogflow](../images/dialogflow2.png)

Indique seus identificadores de mercado :

![dialogflow](../images/dialogflow3.png)

O Google informará que a configuração foi criada / atualizada com sucesso :

![dialogflow](../images/dialogflow4.png)

Aqui, o link entre o Jeedom e o Google Home / Assistant é feito.

Agora você pode conversar com seu Jeedom e usar todas as interações do seu Jeedom diretamente do seu Home / Assistente do Google.
No seu Home / Assistente do Google, basta dizer "Fale com o Jeedom", "Pergunte ao Jeedom" ou até mesmo "Diga ao Jeedom" para iniciar a interação com o Jeedom e "Obrigado" quando terminar a conversa..

# FAQ

>**Eu tenho o erro ESOCKETTIMEDOUT**
>
>A sua chave de URL ou API configurada no mercado não é boa. Também preste atenção ao tempo de resposta definido nas interações, o Google impõe um tempo de resposta antes do tempo limite de 4 segundos.

>**Erro: seu Jeedom não respondeu corretamente o código ETIMEDOUT. Algo mais**
>
>Isso vem do seu Jeedom, que não respondeu dentro do prazo (imposto pelo Google). Pode vir de duas coisas, uma conexão lenta à Internet ou ações que demoram muito..
