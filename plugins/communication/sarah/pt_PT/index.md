# Sarah plugin

Plugin que permite ao Jeedom se comunicar com o aplicativo SARAH (reconhecimento de voz). Faça anúncios de voz e reproduza sons do Jeedom.

# Configuração 

O plugin SARAH adiciona reconhecimento de voz para falar com o Jeedom, fazer um anúncio ou tocar um som do Jeedom.

## Configuração do plugin 

Depois que o plug-in SARAH estiver instalado no Jeedom no Market, clique em **Ativar**.

Configure o nome de Sarah (padrão **Sarah**, mas você pode colocar Jarvis ou Jeedom, por exemplo).

![sarah1](../images/sarah1.PNG)

Em seguida, clique em um dos botões para baixar o plugin **Jeedom** para a versão do SARAH que você está usando, v3 ou v4.

Após o download, pare o servidor e o cliente SARAH Descompacte o arquivo na pasta **Plugins** SARAH na estação de trabalho do cliente (apenas compatível com Windows) :
<http://encausse.wordpress.com/s-a-r-a-h/>

Quando terminar, você pode reiniciar o cliente e o servidor SARAH..

## Configuração do equipamento 

A configuração do equipamento SARAH pode ser acessada no menu Plugins :

![sarah2](../images/sarah2.PNG)

É assim que a página do plugin SARAH se parece (aqui, com um dispositivo já existente) :

![sarah3](../images/sarah3.PNG)

Depois de clicar em um deles, você obtém :

![sarah4](../images/sarah4.PNG)

Você encontra aqui :

-   **Nome do equipamento SARAH** : nome do seu equipamento SARAH.,
-   **Objeto pai** : indica o objeto pai ao qual o equipamento pertence.
-   **Ativar** : torna seu equipamento ativo,
-   **Endereço NodeJS** : Porta do nó SARAH IP + JS (por padrão, a porta é 8080)
-   **Endereço TTS** : Porta do servidor SARAH IP + TTS (a porta padrão é 8888)
-   **Não relate um erro se SARAH não estiver lá** : Verifique se o SARAH não é iniciado continuamente

Cada equipamento do tipo SARAH também cria um pedido :

-   **Disse** : O que permite que, nos cenários, digamos um texto para Jeedom. É possível anunciar uma frase aleatoriamente, separando-as com um tubo : | Exemplo : A porta da frente está aberta.|Uma pessoa abriu a porta da frente.|Porta de entrada aberta. Assim, durante o anúncio, uma de suas três frases será escolhida aleatoriamente.
-   **Reproduzir** : O que permite executar um arquivo de áudio do tipo .mp3 ou .wav. Esses arquivos de áudio devem ser colocados para o **v3** : na pasta **"medias"** na raiz ou **v4** : na pasta **"cliente / mídia"** do seu aplicativo SARAH No seu cenário, basta indicar o nome do seu arquivo de áudio a ser executado.

![sarah5](../images/sarah5.PNG)

-   **Atualizar gramática** : O que permite, por meio de um cenário, regenerar a gramática XML das interações Jeedom.

O botão "sincronizar" permite enviar para a SARAH a lista de todas as interações, isso deve ser feito sempre que as interações forem atualizadas.

Se você deseja usar a função **Ask** do SARAH, é possível fazer isso a partir de um cenário Jeedom usando uma ação "**Aplicar**".

Aqui está um exemplo simples de uso :

![sarah6](../images/sarah6.PNG)

Quando você adiciona o comando action "**Aplicar**", você verá 5 campos que parecem estar preenchidos :

-   **Pergunta** : A pergunta que você deseja que o Jeedom faça.
-   **Réponse** : A escolha das respostas que você deseja interagir após a pergunta. Cada resposta deve ser separada por ponto e vírgula.
-   **Variável** : Esse será o nome da variável na qual você gostaria que sua resposta fosse registrada, para que você possa fazer uma avaliação para o restante do cenário.
-   **Atraso (s)** : Este é o tempo em segundos, antes que o cenário continue a executar a avaliação, se nenhuma resposta for fornecida (Tempo limite).
-   **Comandos** : Será ordem "**Disse**" do seu equipamento SARAH.

# Configuração no SARAH. 

Na interface SARAH, você deve ter um Portlet com o logotipo **Jeedom**.

**SARAH v3** :

Clique nas setas duplas na parte superior do Portlet para girar a imagem para o resto, clique na tecla na parte inferior esquerda do Portlet para acessar a janela de configuração do Plug-in.

**SARAH v4** :

Clique na roda estrela na parte inferior do Portlet e, em seguida, em **Configure a extensão** para acessar a janela de configuração do plug-in.

Dans **addrJeedom**, substituir **\ [IP\_JEEDOM \]** pelo IP do seu Jeedom e substitua **\ [PORT\_JEEDOM \]**, vestindo seu Jeedom. Se o seu Jeedom usa a extensão **/ jeedom**, não se esqueça de indicá-lo após o uso.

Dans **apikeyJeedom**, substituir **\ [CLE\_API\_JEEDOM \]** pela chave API do seu Jeedom, que você pode encontrar na página Configuração do seu Jeedom.

E para finalizar, clique em Salvar.

# Casos de uso 

Exemplos :

-   Cela peut vous permettre de connaître toutes les remontées d'informations des différents capteurs (type “Sarah combien fait-il dehors?” ou “Sarah qu'elle est la température de la chambre”).
-   Vous pouvez également piloter les lumières (“Sarah allume la lumière du salon”), pour cela il faut bien sur avoir configuré les interactions.
-   Uma pessoa pressiona o botão na campainha da porta sem fio (RF433, Z-wave, etc.), Jeedom emite um som via SARAH, anuncia a presença de um visitante e faz a pergunta ", então- Eu abro a porta ?".
-   Sua máquina de lavar está na adega, o programa está concluído, SARAH emite um som "ding, dong" e anuncia que o programa terminou. Então ela faz a pergunta: "devo desligar a máquina de lavar ?".

O único limite será a sua imaginação.
