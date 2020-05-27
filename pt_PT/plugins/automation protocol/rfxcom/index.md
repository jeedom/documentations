# Plug-in RFXcom

Plug-in para usar uma chave RFXcom com Jeedom. Este plugin funciona local e remotamente (com o plugin Jeedom Link)

O plug-in RFXcom permite que você se comunique com todos os periféricos compatíveis com o módulo USB RFXCOM. Entre esses periféricos estão as seguintes marcas : Oregon, LaCross, Chacon, X10, DI-O, Blyss, etc.

# Configuração do plugin

Depois de instalar o plug-in, você só precisa ativá-lo e configurar a porta como automática, depois de salvar o daemon, deve iniciar. O plug-in já está configurado por padrão; você não precisa fazer mais nada. No entanto, você pode modificar esta configuração. Aqui está o detalhe dos parâmetros :

-   **Dependências** : esta parte fornece o status das dependências; se elas não estiverem corretas, você pode iniciá-las manualmente ou esperar 5 minutos; o Jeedom as iniciará por si só.
-   **Demônio** : esta parte fornece o status do demônio, se não estiver bom, você pode iniciá-lo manualmente ou esperar 5 minutos, o Jeedom o iniciará sozinho.
-   **Configuração** : Esta parte permite que você configure os parâmetros gerais do plugin.
    -   *Proibir os seguintes IDs* : permite fornecer uma lista de identificadores de RFXcom à Jeedom para que não crie o equipamento correspondente. Identificadores devem ser separados por espaços. Exemplo : "1356AD87 DB54AF".
-   **Demônio** : definições de configuração do daemon.
    -   *Porta RFXcom* : a porta USB à qual sua interface RFXcom está conectada.
        > **Dica**
        >
        > Se você não souber qual porta USB é usada, basta indicar "Auto". Mas tenha cuidado, alguns módulos podem entrar em conflito com a descoberta automática (tipo teleinfo) e a seleção automática não funcionará.

    -   *Velocidade de comunicação* : velocidade de comunicação de
        Porta RFXcom.

        > **Dica**
        >
        > Deixe como padrão, a menos que esteja usando um modelo de controlador mais antigo.

    -   \_Porta de soquete interna (modificação perigosa : permite modificar a porta de comunicação interna do daemon.
        > **IMPORTANTE**
        >
        > Mude apenas se você souber o que está fazendo.

-   *Protocolos* : permite selecionar os protocolos ativos da interface RFXcom.

    > **IMPORTANTE**
    >
    > Não ative todos, alguns sendo incompatíveis entre si, aqui está a matriz de compatibilidade :

Para iniciar o daemon em debug, basta no nível da configuração dos logs do plug-in colocar em debug, salvar e reiniciar o daemon.

> **IMPORTANTE**
>
> Nesse modo, o demônio é muito falador. Quando a depuração estiver concluída, não se esqueça de clicar em "Reiniciar" para sair do modo de depuração !!

# Configuração do equipamento

A configuração do equipamento RFXcom pode ser acessada no menu plugins e depois no protocolo de automação residencial. Você encontra aqui :

-   um botão para criar equipamento manualmente
-   um botão para alternar para o modo de inclusão
-   um botão para exibir a configuração do plug-in
-   um botão que fornece o status de saúde de todos os seus equipamentos RFXcom
-   finalmente abaixo você encontra a lista do seu equipamento

Ao clicar em um dos seus equipamentos, você chega na página de configuração do seu equipamento, incluindo 2 guias, equipamentos e controles.

-   **Guia Equipamento** :
-   **Nome do dispositivo RFXcom** : nome do seu equipamento RFXcom
-   **ID** : o ID do seu probe (a ser alterado apenas conscientemente))
-   **Ativar** : torna seu equipamento ativo
-   **Visivél** : torna visível no painel
-   **Objeto pai** : indica o objeto pai ao qual o equipamento pertence
-   **Categoria** : categorias de equipamentos (pode pertencer a várias categorias)
-   **Não verificar a bateria** : diz à Jeedom para não alertá-lo se o equipamento enviar uma estrutura de bateria fraca (alguns módulos não lidam com essas informações corretamente e geram alertas falsos)
-   **Tempo máximo permitido entre 2 mensagens (min)** : o tempo máximo permitido entre 2 mensagens antes da Jeedom declarar o equipamento como um tempo limite".
-   **Recuperar ID (troca de bateria)** : o RFXcom tem a particularidade de alterar o ID da sonda ao trocar a bateria, a Jeedom oferece um assistente para facilitar a operação. Você deve :
    -   troque a bateria da sua sonda
    -   aguarde a criação do Jeedom e vá para a nova sonda criada
    -   pressione o botão "Recuperar ID (troca de bateria))"
    -   Na janela, no menu suspenso, escolha a sonda antiga,
    -   Valider
-   **Equipamento** : permite definir o modelo do seu equipamento (a ser configurado apenas para a criação manual de equipamentos, no Jeedom automático configura esse campo sozinho)
-   **Criação** : fornece a data de criação do equipamento
-   **Comunicação** : fornece a data da última comunicação com o equipamento (pode estar vazio no caso de uma tomada, por exemplo)
-   **Bateria** : nível de bateria do equipamento
-   **Estado** : status do equipamento (pode ser o tempo limite, por exemplo)
-   **Guia Pedidos** :
  -   o nome exibido no painel
  -   tipo e subtipo
  -   a chave de informações, se for uma informação, ou o código hexadecimal a ser enviado quando for uma ação. As configurações permitem que esses campos sejam preenchidos automaticamente (você precisa criar o equipamento, escolher a configuração e salvar)
  -   O grupo permite fácil gerenciamento de equipamentos que suportam a noção de grupo. Isso substitui a tag \#GROUP\# na cadeia hexadecimal ao executar o comando
  -   "Valor do feedback do status "e" Duração antes do feedback do status" : permite indicar a Jeedom que após uma alteração nas informações, seu valor deve retornar a Y, X min após a alteração. Exemplo : no caso de um detector de presença que emite apenas durante uma detecção de presença, é útil definir, por exemplo, 0 em valor e 4 em duração, de modo que 4 minutos após a detecção de movimento (e s ' não houve notícias desde então) Jeedom redefine o valor das informações para 0 (mais movimento detectado)
  -   Historicizar : permite historiar os dados
  -   Display : permite exibir os dados no painel
  -   Evento : no caso do RFXcom, essa caixa sempre deve ser marcada, porque você não pode interrogar um módulo do RFXcom
  -   Unidade : unidade de dados (pode estar vazia)
  -   min / max : limites de dados (podem estar vazios)
  -   Configuração avançada (pequenas rodas dentadas) : exibe a configuração avançada do comando (método de registro, widget etc.))
  -   Teste : permite testar o comando
  -   Excluir (assinar -) : permite excluir o comando

# Operação em equipamentos RFXcom

Na parte superior da página de configuração do equipamento, você tem 3 botões que permitem executar determinadas opções :

-   Duplicar : equipamento duplicado
-   Configuração avançada : mesmo princípio dos comandos, permite uma configuração avançada do equipamento
-   Remover : Retire o seu equipamento
-   Salvar : Faz o backup do seu equipamento e quaisquer alterações feitas

# Inclusão de equipamentos RFXcom

Adicionar equipamento RFXcom é muito simples, basta entrar no modo de inclusão e aguardar o envio do equipamento, quando for o caso, a Jeedom informará que incluiu novo equipamento e o criará. automaticamente.

# Lista de módulos compatíveis

Você encontrará a lista não exaustiva de módulos compatíveis
[aqui](https://doc.jeedom.com/pt_PT/rfxcom/equipement.compatible)

# Adicionar uma tomada

Este modo de operação é válido para tomadas, receptores de luz etc. Vá para o menu "Plug-ins", depois "Protocolo de automação residencial" e, finalmente, "RFXcom".

Clique em "Adicionar" para adicionar um módulo, nomeie seu módulo e clique em "OK"".

Selecione "Plug - Fault" em "Equipment" e clique em "Save".

-   Vá para a guia "Pedidos""
-   Coloque seu módulo / soquete no modo de aprendizado. (Clique no botão de aprendizado no seu módulo / soquete. Algumas tomadas não possuem um botão, basta desconectar o plugue e, em seguida, reconectá-lo e nos primeiros 3 segundos após conectar o plugue no modo de aprendizado).
-   Clique em "Testar" um pedido.
-   Se a conexão correu bem, você pode clicar em "Salvar", caso contrário, pode repetir esta etapa.

Seu módulo / soquete agora está conectado ao JEEDOM, lembre-se de ativá-lo e torná-lo visível para que ele apareça no painel.

# Adicionar uma loja somfy

Desde o lançamento do novo módulo RFXcom RFXtrx433E, agora é possível controlar seus dispositivos Somfy RTS (RFY / RFU) da Jeedom. (Quem suporta este módulo através do plugin RFXcom)

Pour ajouter un nouveau périphérique, se rendre dans le menu Plugins &gt; Protocole Domotique &gt; RFXcom

Clique no botão + Adicionar e dê um nome ao seu dispositivo. Ex : « Veneziana ».

Se rendre sur le nouveau Périphérique créé et dans le menu déroulant Equipement, choisir « RTS Store Somfy – Défaut », en profiter pour lui définir un objet parent et une catégorie si vous le souhaitez et cliquer sur Enregistrer.

Os comandos úteis para gerenciar a persiana são gerados automaticamente. Resta apenas emparelhar o obturador com este dispositivo Jeedom. Para fazer isso, pressione o botão de emparelhamento no controle remoto do obturador que você deseja controlar por 2 a 3 segundos, até que o obturador faça um pequeno retorno.

Depois que o obturador indicar que está aguardando um pedido de emparelhamento, clique no botão Teste correspondente ao comando Programa no Jeedom.

Para validar o aprendizado do novo comando, o obturador fará uma pequena viagem de volta.

Afin de tester tout de suite, vous pouvez cliquer sur les boutons Teste correspondants aux commandes « Monter, Descendre, Stop ». Le bouton « My » correspond à la commande Stop.

Ative e torne visível o dispositivo com as caixas de seleção correspondentes para poder visualizá-lo e usá-lo no painel.

Agora você pode solicitar o seu componente Somfy RTS com o Jeedom.

# FAQ

>**Simule / reconheça um controle remoto chinês rfxcom (não codificado).**
>
>   **Programação de controles remotos de código chinês no Jeedom**
>
>No plugin RFXCom → Gerenciamento de protocolos RFXCom :
>
>-   NÃO marque Não codificado
>-   Verificar relâmpago4
>
>Para recuperar os códigos do controle remoto : Ative a opção "Salvar todas as mensagens" e recupere os IDs pressionando o botão
>Teclas de controle remoto que se parecem com Mensagem : 0913004C410A24015970, Subtipo = ARC, Id = 400A24… Exemplo "Mensagens""
>um controle remoto de 4 botões : 0913006D410A21015E70 0913006E410A22015970 0913006F410A24015970 09130070410A28015970
>
>Para simular uma pressão no comando (emissão), você deve escolher um tipo de equipamento "Lightning4 (13) Padrão". Em seguida, adicione um comando do tipo Ação / Falha e insira o valor "Mensagem" no ID oficial (tipo0913006D410A21015E70). O botão de teste permite verificar a operação correta.
>
>Para recepção, é imperativo usar o comando automático gerado pelo Jeedom (um por chave) com o valor Id = 400A24 no campo ID no canto superior esquerdo, ao selecionar um tipo de equipamento "Lightning4 (13) Default". É a informação "Pulse" que é recebida toda vez que o controle remoto é pressionado e, portanto, possibilita o acionamento de eventos no Jeedom.

>**Caixa de revezamento chinesa ak-rk01-12 pilotada a partir de Jeedom**
>
>Para controle de relé do Jeedom live : coloque o jumper na posição 1-2 (lado vermelho do LED e 3 blocos de terminais) para ativar o modo Trava com os comandos ON e OFF separados. Na Jeedom, crie um comando ON com um valor 09130038410B20015C70 (o que é importante é a cadeia no meio 410B20 para ON e 410B21 para OFF. É possível variar os códigos com as 4 primeiras letras 410B, mas mantenha as extremidades em 20 e 21 para os comandos ON e OFF. Você também pode definir o jumper para 2-3 e usar apenas o primeiro comando para reverter o estado ON / OFF toda vez que o comando for enviado

>**Não vejo a porta USB do rfxcom**
>
>Verifique se você não possui o brltty para instalar (`sudo apt-get remove brltty` para removê-lo)


>**Depois de algumas horas / dias, não tenho mais nenhuma atualização das minhas sondas, um renascimento do demônio corrige**
>
>Verifique seu cabo USB (um cabo USB ruim geralmente causa esse tipo de problema, também não deve ser muito longo), verifique também sua fonte de alimentação, é altamente recomendável um hub USB

>**Eu tenho uma mensagem dizendo que a porta não existe**
>
>Verifique se a porta está configurada corretamente e se a configuração está salva (ela deve ser salva, caso contrário, a modificação não será levada em consideração)).

>**Minhas sondas não são vistas**
>
>Verifique se você marcou a caixa de criação automática de equipamento. Verifique se o demônio é lançado. Também é possível reiniciar o daemon de depuração para ver se ele recebe as mensagens dos probes. Verifique também se os protocolos corretos estão ativados (tenha cuidado para não ativar muitos, caso contrário não funcionará).

>**Ao iniciar no modo de depuração, recebo a mensagem : "não é possível vincular o endereço do soquete "ou" Não é possível atribuir o endereço solicitado"**
>
>Provavelmente, isso se deve a um endereço IP incorreto configurado no menu Geral / administração / Configuração, seção "Configuração de rede", depois em "Acesso interno" e URL ou endereço IP.

>**O demônio se recusa a começar**
>
>Tente iniciar o daemon no modo de depuração para ver o erro.

>**Por que a associação de um soquete é mais complexa no Jeedom do que em outras soluções de automação residencial ?**
>
>Em outras soluções de automação residencial, basta clicar nos botões do controle remoto para poder controlar o soquete que o controle remoto controla, por que esse não é o caso do Jeedom ?
>
>Jeedom desassocia o controle remoto do soquete. Com o método anterior, seus botões devem controlar o soquete. Se você interromper a associação entre o soquete e o controle remoto, a solução de automação residencial não poderá mais controlar o soquete.
>
>Sob Jeedom é diferente : a associação é mais complexa, mas não é mais necessário que o controle remoto tenha botões X monopolizados pelo controle do soquete. Esses botões podem ser usados para controlar um grupo de tomadas que mistura várias tecnologias (Z-Wwave, Enocean e RFXcom, por exemplo).

>**Meu plug DIO não deseja associar ao Jeedom**
>
>Isso geralmente acontece quando a memória interna da tomada está cheia. Para limpar a memória dos soquetes DIO / Chacon (eles não aceitam mais de 3 códigos diferentes) no Jeedom, você deve criar um comando "reset" com o valor 0B110006 \#ID\#09030070 Nesse momento, o led vermelho pisca duas vezes e o soquete pode aceitar uma nova associação com o Jeedom.

>**A bateria das minhas sondas não sobe corretamente**
>
>Verifique se você solicitou a bateria com a "bateria" lógica do seu equipamento

>**Eu tenho o erro [Erro 5] Erro de entrada / saída**
>
>Infelizmente, este erro é hardware (problema de comunicação com a RFXcom). Geralmente, isso ocorre devido a um problema com a fonte de alimentação ou o cabo USB, para que você possa tentar mudar o cabo USB e / ou passar por um hub USB energizado

>**Não consigo reconhecer algum sensor apesar da ativação do protocolo correto**
>
> Verifique se o firmware está atualizado. Então, se ainda não é bom, você deve testar com rfxmng

>**Estou com o erro Status do tempo limite em espera**
>
> Isso geralmente acontece em 2 casos :
>- O seu módulo RFXCOM não está atualizado, consulte [aqui](http://www.rfxcom.com/epages/78165469.sf/nl_NL/?ObjectPath=/Shops/78165469/Categories/Downloads)
>- Você usou o plug-in RFXCOM enquanto possui um RFPLAYER, portanto, você deve usar o plug-in RFPLAYER

>**Tenho problemas para montar os sensores e a única solução é reiniciar tudo**
>
> Com a ajuda do windows e do rfxmanager, é necessário fortalecer no rfxcom a ativação ou não dos diferentes protocolos
