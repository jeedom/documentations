# Plugin SqueezeBox Control 

Este plugin permite que você controle todo o seu ambiente SqueezeBox

![squeezeboxcontrol icon](../images/squeezeboxcontrol_icon.png)

Este plugin permite que você verifique todas as suas SqueezeBoxes e, se possível, atribua-as à parte correta. E poder controlá-los, sincronizá-los, fazê-los falar, etc.

# Configuração 

Como qualquer plug-in Jeedom, você deve fazer o download do plug-in do mercado e ativá-lo. Depois disso, começa a etapa de configuração.

**Atenção especial para usuários de LMS em SYNOLOGY**

Se você usa o LMS em seu Nas Synology, deve saber que a versão oferecida pela synology é antiga. Mas há um repositório para se beneficiar da versão mais recente do LMS 7.9. Eu recomendo fortemente que você instale esta versão no seu NAS, que corrige muitos erros.

[VERSÃO 7.9 para Synology](http://forums.slimdevices.com/showthread.php?103636-Test-Repo-for-LMS-7-9-0-on-Synology-DSM-5-*)

**Atenção especial aos usuários do plugin SqueezeBox (o segundo) no mercado*

Para evitar qualquer risco de conflito se você usar o outro plug-in SqueezeBox, recomendo fortemente que você o desative e desinstale a extensão no servidor LMS.

## Instalação e configuração do plug-in LMS

Para se beneficiar de uma boa sincronização entre o Jeedom e o servidor SqueezeBox, é necessário instalar e configurar um plug-in no servidor SqueezeBox. Para fazer isso, você só precisa adicionar o repositório que é fornecido na página do plug-in como este :

Clique no parâmetro :

![configlms1](../images/configlms1.jpg)

Em seguida, na guia Plugins, na parte inferior, preencha o repositório fornecido pelo Jeedom e aplique:

![configlms2](../images/configlms2.jpg)

Em seguida, você pode instalar o plug-in JeedomSBcontrol, o servidor solicitará que você o reinicie, e isso terá que ser feito. Após reiniciar, você deve configurar o plug-in JeedomSBcontrol clicando nos parâmetros. Você deve inserir o endereço IP do Jeedom, bem como a chave da API. Se você precisar usar / jeedom, este também é o local para inseri-lo.

Depois que os parâmetros forem inseridos, você deverá reiniciar o servidor LMS uma última vez (tenha cuidado se alterar os parâmetros, reinicie o servidor LMS para que as alterações sejam levadas em consideração

## Instalação e configuração do plugin Jeedom. 

A configuração do plugin Jeedom é bastante simples.

![configjeedom1](../images/configjeedom1.jpg)

Você só precisa digitar o endereço IP do seu servidor LMS. Se você tiver uma porta diferente da porta 9000, também poderá inseri-la no campo Porta. E finalmente, se você protegeu o LMS com uma senha, também pode inseri-la. Em 90% dos casos, apenas o endereço IP é necessário.

Uma vez feito, apenas SALVAR. Depois que o backup estiver concluído, você pode clicar em LAUNCH para iniciar a autodescoberta dos seus SqueezeBoxs.

Quando a verificação terminar, você deverá ver a versão do seu servidor LMS e o número de SB detectados.

Para observar o resultado, basta acessar PLugons / Multimedia / SqueezeBox Control:

![configjeedom2](../images/configjeedom2.jpg)

Você chegará na página seguinte :

![configjeedom3](../images/configjeedom3.jpg)

Você verá que suas squeezeboxes apareceram e que aquelas que poderiam ter sido atribuídas a um objeto são.

Nesta página, além do seu equipamento, você pode ver três opções no topo :

- **Painel** : permite acessar o painel de controle SqueezeBox específico também disponível aqui :
![panel1](../images/panel1.jpg)
- **Configuração** : permite acessar a configuração do servidor
LMS diretamente
![configlms](../images/configlms.jpg)
- **Garçom** : permite acessar diretamente o servidor LMS
![serveurlms](../images/serveurlms.jpg)

# Os equipamentos 

Quando você clica em um item de equipamento, chega à sua página :

![squeezeboxcontrol screenshot8](../images/squeezeboxcontrol_screenshot8.jpg)

Você encontrará nesta página todas as informações do seu SqueezeBox, além de todos os comandos e algumas opções (outros virão) :

- **Sem volume :** permite ajustar a etapa de uma ação Volume + ou Volume-
- **Auto On / Off na sincronização :** se esta opção estiver ativada se uma sincronização for feita neste squeezebox, ela será ativada e desativada quando estiver fora de sincronia.
- **Jingle Pre TTS :** permite definir se antes de uma síntese de fala haverá um jingle do tipo dingdong.
- **Motor :** permite escolher o mecanismo de síntese de fala (picotts, google, voxygen). Um comando de cenário permite que você o altere rapidamente.
- **Tts opções :** permite escolher a voz ou o idioma da conversão de texto em fala de acordo com o mecanismo. Um comando de cenário permite que você o altere rapidamente.

# O painel 

Se você exibir sua squeezebox no painel, é isso que você obterá :

![dashboard](../images/dashboard.jpg)

- **à :** Permite controlar a ativação e desativação do seu SqueezeBox e saber rapidamente se ele está ligado
- **B :** Permite sincronizar seu SqueezeBox com outro, com todos os outros, de outro ou dessincronizar (consulte a seção de sincronização para obter mais detalhes)
- **C :** Permite ver a capa da leitura atual (será colorida ou em preto e branco, dependendo do estado da SqueezeBox). Um clique na jaqueta também permite acesso direto à sua biblioteca de mídia :

![squeezeboxcontrol screenshot7](../images/squeezeboxcontrol_screenshot7.jpg)

- **D :** Exibe o artista e o álbum em andamento (esse texto rola além de um determinado comprimento)
- **E :** Exibe o título da leitura atual (esse rolagem de texto além de um determinado comprimento)
- **F :** Painel de controle com funções básicas (Voltar, Retroceder rapidamente, Reproduzir / Pausar, Parar, Avanço rápido, Avançar)
- **G :** Painel de controle de volume (controle deslizante e dois botões Vol- e Vol +)

# Painel de sincronização do painel

Quando você clica no botão de sincronização, uma janela é aberta :

![squeezeboxcontrol
screenshot4](../ images / squeezeboxcontrol_screenshot4.jpg)

Nesta janela, você pode ver o status atual da sincronização do seu squeezebox. Aqui estão as opções disponíveis :

- **Sincronizar de :** permite sincronizar este squeezebox a partir do squeezebox escolhido no menu suspenso
- **Sincronizar com :** permite sincronizar este squeezebox com o squeezebox escolhido no menu suspenso
- **Sincronizar com todos :** permite sincronizar esta squeezebox com todas as suas squeezeboxs
- **Dessincronizar :** visível apenas se o squeezebox estiver sincronizado, e essa ação permite dessincronizá-lo.

# Painel SqueezeBox Control

Este painel permite que você tenha uma visão geral de todas as suas squeezeboxes :

![panel2](../images/panel2.jpg)

Você pode realmente filtrar sua SqueezeBox por objetos com o menu oculto à esquerda. De relance, você pode ver as squeezeboxes ligadas, desligadas e sincronizadas. Obviamente, todas as ações disponíveis no painel também estão disponíveis aqui.

No entanto, outras opções estão disponíveis na parte superior :

- **Ligue tudo :** liga todas as squeezeboxes
- **Desligue tudo :** desativa todas as squeezeboxes
- **Servidor LMS :** permite acesso direto ao seu servidor LMS
- **Configuração :** permite acesso direto à configuração do seu servidor LMS
- **Verificação completa :** permite ativar uma verificação completa da sua biblioteca de mídia no servidor LMS
- **Verificação Rápida :** permite ativar uma verificação rápida da sua biblioteca de mídia no servidor LMS
- **Digitalizar lista de reprodução :** permite ativar uma verificação de suas listas de reprodução no servidor LMS
- **Instalações :** permite ir diretamente para a página geral do seu equipamento

# Pedidos disponíveis via cenário

Muitos comandos estão disponíveis através de cenários (outros virão). Aqui está a lista completa :

- **Album :** comando info que contém o álbum atual
- **Ativar :** liga a squeezebox
- **Ligue tudo :** liga todas as squeezeboxes
- **Artista :** comando info que contém o artista em andamento
- **Adiantamento :** Avanço rápido
- **Dessincronizar :** permite dessincronizar o squeezebox
- **Estado :** Conheça o estado da squeezebox
- **Desligar :** desliga o squeezebox
- **Desligue tudo :** desativa todas as squeezeboxes **Reproduzir álbum :** comando message para reproduzir o álbum transmitido no parâmetro (message) (a função alfa atual funciona, mas pode não fornecer o resultado desejado)
- **Tocar Artista :** mensagem de comando que permite reproduzir o artista transmitido no parâmetro (message) (a função alfa atual funciona, mas pode não fornecer o resultado desejado)
- **Tocar Gênero :** comando de mensagem que permite reproduzir o gênero transmitido no parâmetro (message) (a função alfa atual funciona, mas pode não fornecer o resultado desejado)
- **Reproduzir lista de reprodução :** comando message para reproduzir a lista de reprodução passada no parâmetro (message) (a função alfa atual funciona, mas pode não fornecer o resultado desejado)
- **Peça de jogo :** mensagem de comando que permite reproduzir a música passada no parâmetro (message) (a função alfa atual funciona, mas pode não fornecer o resultado desejado) Também fornecerá as músicas que contêm a palavra
- **Reproduzir Favoritos :** mensagem de comando que permite reproduzir os favoritos correspondentes ao que é passado no parâmetro (message) (esta função é baseada nos índices e pode levar vários índices separados por; . Também podemos definir um intervalo com - .  Exemplo : 0,0-0.2; 2 reproduz um favorito com o índice 2 ou algo entre 0.0 e 0.2 incluídos. Os índices do LMS são baseados em uma arquitetura de diretório e são explicados no documento do LMS)
- **Reproduzir favoritos por nome :** mensagem de comando que permite reproduzir os favoritos correspondentes ao que é passado no parâmetro (message) (com base nos nomes que leva no parâmetro um único nome e adiciona todos os favoritos correspondentes. Exemplo : radio retornará todos os favoritos que contêm rádio ou estão em um diretório que contém rádio outro exemplo : radio / dará necessariamente favoritos que estão em um diretório de favoritos chamado radio. Este comando não diferencia maiúsculas de minúsculas)
- **URL de reprodução :** mensagem de comando que permite reproduzir uma URL passada no parâmetro
- **Leitura :** comando para jogar o squeezebox
- **Silenciar :** comando para silenciar o squeezebox
- **Não muda :** comando para restaurar o som do squeezebox
- **Fala :** comando de mensagem para fazer o squeezebox falar
- **Opções completas do Talk :** comando de mensagem para fazer o squeezebox falar. A mensagem será o texto, o título pode conter várias opções 

- multi : permite falar em várias squeezebox ao mesmo tempo : multi = banheiros; o quarto fará com que o squeezebox que inicia o pedido fale, assim como os banheiros e o quarto
- volume : permite definir o volume a ser usado para o TTS : volume=70
- voz : somente para TTSwebserver, permite escolher a voz aleatoriamente em uma lista ou entre todas (exceto pico) : Exemplo : voz = tudo ou voz = melodina; sorciere
- tinir : permite que você escolha um toque para tocar antes (ou escolher de uma lista) exemplo : jingle = cuco ou jingle = cuco; tenha cuidado
- playurl : permite que você continue lendo um URL após o tts (por exemplo, playurl=XXXXXXXXXX)
- playfavoris : idem com um favorito do índice (consulte o comando de favoritos)
- playfavorisname : idem, mas com as funções do nome do comando favorites
- playalbum : idem com o nome de um álbum ou no final do nome)
- playartist : idem com o nome de um artista (ou parte do nome)
- playgender : idem com o nome de um gênero
- música : idem com o nome de uma música (ou uma parte do nome)
- lista de reprodução : idem com o nome de uma lista de reprodução
- playstop : com playstop = 1, isso interrompe as squeezeboxes após tts (caso contrário, elas retomarão seu estado inicial)
- playoff : com playoff = 1, isso interromperá as squeezeboxes após tts (caso contrário, elas retomarão seu estado inicial)

- **Configurar TTS :** opção muito interessante que permite em um cenário alterar a configuração do mecanismo TTS em tempo real (consulte a seção O TTS no cenário)
- **Pausa :** comando para pausar o squeezebox
- **Anterior :** pedir música anterior
- **Recuar :** comando de retorno rápido
- **Digitalize rapidamente :** comando para acionar uma verificação rápida da sua biblioteca de mídia no servidor LMS (ideal para agendar verificações regulares)
- **Verificação completa :** comando para acionar uma verificação completa da sua biblioteca de mídia no servidor LMS (ideal para agendar verificações regulares)
- **Digitalizar lista de reprodução :** comando para acionar uma verificação de suas listas de reprodução no servidor LMS (ideal para agendar verificações regulares)
- **Pare :** comando para parar o squeezebox (não desligá-lo)
- **Seguinte :** comando da próxima música
- **Sincronizar com :** comando info que permite saber com quem o squeezebox está sincronizado
- **Sincronizar desde :** comando de mensagem que permite sincronizar o squeezebox a partir do parâmetro squeezebox passado (mensagem) O valor pode ser o endereço mac do squeezebox ou o nome exato que ele possui no Jeedom
- **Sincronizar com :** comando de mensagem que permite sincronizar o squeezebox com o squeezebox passado no parâmetro (message) O valor pode ser o endereço mac do squeezebox ou o nome exato que ele possui no Jeedom
- **Sincronizar com todos :** comando para sincronizar o squeezebox com todos os seus squeezeboxes
- **Título atual :** comando info que contém o título atual
- **Volume :** controle para ajustar o volume
- **Status do volume :** comando info com volume atual
- **Volume + :** controle de volume
- **Volume- :** controle para diminuir o volume

# TTS no cenário 

O tts no cenário é simples. Você pode fazer sua squeezebox falar de acordo com os parâmetros predefinidos no equipamento. Mas você também pode, em seus cenários, alterar os parâmetros para fazer notificações com diferentes vozes ou mecanismos, dependendo do anúncio a ser feito:

Para fazer isso, use a função "Configurar TTS"". Permite definir o mecanismo e a voz antes de iniciar a síntese, exemplos :

![tts1](../images/tts1.jpg)

![tts2](../images/tts2.jpg)

![tts3](../images/tts3.jpg)

As opções possíveis para o motor são (atenção respeite as letras maiúsculas em minúsculas)

+ ------------------ + ------------------------------ --------------------------- +
| Motor           | Possíveis opções                                       |
+ ================== + ================================= ============================ +
| **picottts**     | fr-FR, de-DE, en-US, en-GB, es-ES, it-IT                |
+ ------------------ + ------------------------------ --------------------------- +
| **Google**       | fr, af, sq, ar, hy, ca, zh-CN, zh-TW, hr, cs, da, nl,   |
|                  | en, en-us, en-au, e o, fi, de, el, ht, oi, hu, is, id,   |
|                  | ja, ko, la, lv, mk, não, pl, pt, ro, ru, sr, sk, es, |
|                  | sw, sv, ta, th, tr, vi, cy                              |
+ ------------------ + ------------------------------ --------------------------- +
| **voxygen**      | Agnes, Bicool, Silêncio, Damien, DarkVadoor, Electra, Emma, |
|                  | Eva, Fabienne, Cara, Helene, JeanJean, John, Loic,       |
|                  | Ludovic, Matteo, Melodine, Michel, Papi, Philippe,      |
|                  | Ramboo, Robô, Sidoo, Bruxa, Yeti, Zozo, Adel,       |
|                  | Matthias, Sylvia, Bibi, Bronwen, Elizabeth, Paul,       |
|                  | Amanda, Phil, Marta, Pedro, Sonia                       |
+ ------------------ + ------------------------------ --------------------------- +

Se o motor digitado for inválido, nada será alterado. Se a opção for inválida por padrão, o primeiro da lista será atribuído

# Cenário de exemplo

![scenar](../images/scenar.jpg)
