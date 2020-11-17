# Plug-in do Google Agenda

O plug-in da agenda permite recuperar eventos do seu Google Agenda. Ele também pode iniciar uma interação durante um evento

# Configuração 

## Crie um dispositivo do Google Agenda 

No lado do Jeedom, você precisa criar um dispositivo do Google Agenda e recuperar o URL de redirecionamento. 

> **IMPORTANTE**
>
> O URL de acesso externo ao seu Jeedom deve estar absolutamente em https. O Google não permite conexões não criptografadas.

## Crie uma conta de desenvolvedor no Google 

Você precisa criar uma conta de desenvolvedor com o google para acessar as APIs, vá [aqui](https://console.developers.google.com/apis/credentials) em seguida, "Crie identificadores" e "ID do cliente Oauth", selecione "Aplicativo da Web" e, em "URI de redirecionamento autorizado", coloque o dado na página de configuração do equipamento jeedom.

> **IMPORTANTE**
>
> Tenha cuidado ao inserir "URIs de redirecionamento autorizado", você deve prestar atenção : 
> - ter autorizado o domínio aqui antes [aqui](https://console.developers.google.com/apis/credentials/consent). O Google sinalizará normalmente
> - pressione a tecla Enter após copiar / colar o URL de redirecionamento do jeedom para a página de configuração do Google (pressionar o botão Salvar diretamente após copiar / intercalar sem pressionar a tecla Enter não funciona!!!)

Obtenha a chave do cliente e o segredo do cliente (você precisará colocá-los no lado Jeedom no equipamento)

Em seguida, você precisa adicionar a API do Google Agenda acessando [aqui](https://console.developers.google.com/apis/dashboard), depois, "Ative a API" e pesquise "API do Google Agenda" e adicione o.

## Vinculou a conta do Google a jeedom 

Copie a chave do cliente e o cliente secrey no lado Jeedom e clique no botão Link, valide tudo.

>**IMPORTANTE**
>
>Atenção para vincular as duas contas (Google e Jeedom), é absolutamente necessário conectar-se ao Jeedom por seu URL externo (você pode vê-lo nas redes de peças Jeedom do centro de configuração)

# Ordem 

O plug-in inclui apenas comandos que fornecem o título do evento

# Interação 

Jeedom pode interpretar o título de um evento como uma interação e, portanto, acionar uma ação. Para isso, você deve ativar as interações na página de configuração do equipamento.

Você também pode indicar um comando de retorno pelo qual o jeedom responderá após a execução da interação.
