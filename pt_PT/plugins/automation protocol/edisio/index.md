# Edisio

Plugin para usar o protocolo Edisio com o Jeedom

# Configuration

O plug-in edisio permite que você se comunique com todos os periféricos compatíveis com o módulo USB edisio.

## Configuração do plugin

Depois de baixar o plugin, você só precisa ativá-lo e configurar a porta para auto. Depois de salvar o demônio deve lançar. O plug-in já está configurado por padrão; você não precisa fazer mais nada. No entanto, você pode modificar esta configuração. Aqui está o detalhe (alguns parâmetros podem estar visíveis apenas no modo especialista) :

![edisio1](../images/edisio1.JPG)

-   **Dependências** : esta parte fornece o status das dependências; se elas não estiverem corretas, você pode iniciá-las manualmente ou esperar 5 minutos; o Jeedom as iniciará por si só.
-   **Demônio** : esta parte fornece o status do demônio (local e remoto); se não estiver tudo bem, você pode iniciá-lo manualmente ou esperar 5 minutos; o Jeedom o iniciará sozinho.
-   **Configuração** : Esta parte permite que você configure os parâmetros gerais do plugin.
    -   *Proibir os seguintes IDs* : permite fornecer uma lista de identificadores edisio ao Jeedom para que ele não crie o equipamento correspondente. Identificadores devem ser separados por espaços. Exemplo : "1356AD87 DB54AF".
-   **Demônio local** : parâmetros de configuração local (ou remoto, dependendo do título) do daemon.
    -   *Porto EDISIO* : a porta USB na qual sua interface edisio está conectada.
        > **Dica**
        >
        > Se você não souber qual porta USB é usada, basta indicar "Auto".
    -   *Porta de soquete interna (modificação perigosa, deve ser o mesmo valor em todos os Edisio deportados pelo Jeedom)* : permite modificar a porta de comunicação interna do daemon.

> **IMPORTANTE**
>
> Mude apenas se você souber o que está fazendo.

Para iniciar o daemon em debug, basta no nível da configuração dos logs do plug-in colocar em debug, salvar e reiniciar o daemon.

> **IMPORTANTE**
>
> Nesse modo, o demônio é muito falador. Quando a depuração estiver concluída, não se esqueça de clicar em "Reiniciar" para sair do modo de depuração !!

## Configuração do equipamento

A configuração do equipamento edisio pode ser acessada no menu do plugin :

![edisio10](../images/edisio10.JPG)

É assim que a página do plugin edisio se parece (aqui com 4 dispositivos) :

![edisio2](../images/edisio2.JPG)

> **Dica**
>
> Como em muitos lugares do Jeedom, colocar o mouse na extremidade esquerda permite que um menu de acesso rápido seja exibido (você sempre pode deixá-lo visível em seu perfil)

Você encontra aqui :

-   um botão para criar equipamento manualmente
-   um botão para mudar para inclusão
-   um botão para exibir a configuração do plug-in
-   um botão que fornece o status de saúde de todos os seus equipamentos Edisio
-   finalmente abaixo você encontra a lista do seu equipamento

Depois de clicar em um deles, você obtém :

![edisio3](../images/edisio3.JPG)

Aqui você encontra toda a configuração do seu equipamento :

-   Nome equipamentos EDISIO : nome do seu equipamento edisio
-   ID : o ID do seu probe (a ser alterado apenas conscientemente)
-   Ativar : torna seu equipamento ativo
-   Visivél : torna visível no painel
-   Objeto pai : indica o objeto pai ao qual o equipamento pertence
-   Categoria : categorias de equipamentos (pode pertencer a várias categorias)
-   Não verificar a bateria : diz à Jeedom para não alertá-lo se o equipamento enviar uma estrutura de bateria fraca (alguns módulos não lidam com essas informações corretamente e geram alertas falsos)
-   Tempo máximo permitido entre 2 mensagens (min) : o tempo máximo permitido entre 2 mensagens antes da Jeedom declarar o equipamento como um tempo limite". Atenção: este parâmetro requer a configuração da opção "Forçar a repetição de mensagens a cada (min)" e deve ser maior que esse valor
-   COMMENTAIRE : permite que você coloque comentários sobre o equipamento : bateria trocada em XX / XX / XXXX)
-   Equipamento : permite definir o modelo do seu equipamento (a ser configurado apenas para criação manual de equipamentos, no Jeedom automático configura esse campo sozinho)
-   Criação : fornece a data de criação do equipamento
-   Comunicação : fornece a data da última comunicação com o equipamento (pode estar vazio no caso de uma tomada, por exemplo)
-   Bateria : nível de bateria do equipamento
-   Estado : status do equipamento (pode ser o tempo limite, por exemplo)

Abaixo você encontra a lista de pedidos :

-   o nome exibido no painel
-   tipo e subtipo
-   a chave de informações, se for uma informação, ou o código hexadecimal a ser enviado quando for uma ação. As configurações permitem que esses campos sejam preenchidos automaticamente (você deve criar o equipamento, escolher a configuração e salvar)
-   "Valor do feedback do status "e" Duração antes do feedback do status" : permite indicar a Jeedom que após uma alteração nas informações, seu valor deve retornar a Y, X min após a alteração. Exemplo : no caso de um detector de presença que emite apenas durante uma detecção de presença, é útil definir, por exemplo, 0 em valor e 4 em duração, de modo que 4 minutos após a detecção de movimento (e s ' não há notícias desde então) Jeedom redefine o valor das informações para 0 (não é mais detectado movimento)
-   Historicizar : permite historiar os dados
-   Display : permite exibir os dados no painel
-   Evento : no caso do edisio, esta caixa deve sempre estar marcada, porque você não pode consultar um módulo edisio
-   Unidade : unidade de dados (pode estar vazia)
-   min / max : limites de dados (podem estar vazios)
-   configuração avançada (pequenas rodas dentadas) : exibe a configuração avançada do comando (método de registro, widget etc.)
-   Teste : permite testar o comando
-   excluir (assinar -) : permite excluir o comando

## Operação em equipamentos Edisio

Na parte superior da página de configuração do equipamento, você tem 3 botões que permitem executar determinadas opções :

-   Duplicar : equipamento duplicado
-   configure (pequenas rodas dentadas) : mesmo princípio dos comandos, permite uma configuração avançada do equipamento

## Inclusão de equipamentos edisio

A adição de equipamentos Edisio é muito simples, basta entrar no modo de inclusão e aguardar que o equipamento envie uma mensagem; quando for o caso, a Jeedom informará que incluiu novos equipamentos e os criará automaticamente.

# Lista de módulos compatíveis

Você encontrará a lista de módulos compatíveis [aqui](https://doc.jeedom.com/pt_PT/edisio/equipement.compatible)
