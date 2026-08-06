# Plug-in Spotify Connect

Este plugin permite que você recupere o status dos jogadores do Spotify Connect e os controle através do Jeedom.

# Configuration

## Configuração de plug-in

Como qualquer plugin Jeedom, o plugin **Spotify Connect** deve ser ativado após a instalação. Uma vez ativado, você deve vincular o jeedom à sua conta do Spotify, para fazer isso, você deve ir em plugin -> gerenciamento de plugins -> Spotify e clicar no botão para vincular a uma conta de usuário.

### Descoberta de leitores

Os jogadores do Spotify Connect são descobertos automaticamente quando em uso. Portanto, é suficiente iniciar uma reprodução de mídia no equipamento Spotify Connect e esperar 30 segundos para ver o player aparecer automaticamente no Jeedom.

Você também pode clicar no botão **Sincronize a lista de leitores** para forçar esta descoberta.

### Frequência de sondagem

Para economizar o máximo de recursos, o plugin usa 2 taxas de atualização diferentes dependendo do estado do equipamento Spotify Connect :

- **Nenhum equipamento está jogando** : o plugin irá consultar os servidores Spotify no **Taxa de atualização** 20 segundos padrão por padrão.
- **Pelo menos um dispositivo está sendo lido** : o plugin irá então consultar os servidores Spotify com uma frequência mais alta (**Taxa de atualização durante a reprodução** definido para 5 segundos por padrão).

>**IMPORTANTE**
>
>Aconselhamos você a não modificar essas configurações sob o risco de ver sua conta do Spotify bloqueada por várias dezenas de minutos devido a uma frequência de pesquisa muito alta..

### Vinculando contas de usuário

O plugin permite que você se conecte a 2 contas separadas do Spotify Connect.

Para fazer isso, basta marcar a caixa para ativar o usuário e salvar. Em seguida, clique no botão **Link para Jeedom** em cada usuário, a fim de estabelecer a conexão entre Spotify e Jeedom.

### Caso especial de Chromecast

Normalmente não é possível iniciar uma reprodução em um dispositivo Spotify Connect a partir do plugin *(esta é uma limitação do Spotify)* exceto para equipamentos do tipo **Chromecast**.

O Spotify não permite que aplicativos de terceiros sejam reproduzidos em um dispositivo Chromecast, você deve seguir este procedimento para recuperar os 2 cookies necessários *(com o navegador Google Chrome)* :

- Encontro [neste endereço](https://open.spotify.com/) e faça login se necessário,
- Pressione a tecla F12 no teclado e vá para a guia **Aplicativo** na janela que abriu,
- Verifique se você está em **Storage → Cookies → https://open.spotify.com** no menu esquerdo,
- Pesquise através do campo **Pesquisa / Filtro** enquanto digita ``sp_``,
- Finalmente recupere os valores do cookie ``sp_key`` e ``sp_dc`` e insira-os nos campos fornecidos para este propósito na configuração do plugin.

>**IMPORTANTE**
>
>Esta função não é autorizada pelo Spotify nem documentada pelo Google, portanto não pode ser oficialmente suportada pelo Jeedom SAS. Funciona para menos de 50% dos usuários (depende de parâmetro externo que infelizmente não podemos definir).

>**IMPORTANTE**
>
>Esses cookies são específicos para cada usuário. Portanto, será necessário repetir a operação para cada um deles conectando-se cada vez à conta Spotify em questão.

## Configuração do equipamento

Equipamentos **Spotify Connect** não tem parâmetros específicos, exceto para equipamentos do tipo **Chromecast** que, lembre-se, são os únicos capazes de controlar a reprodução de uma mídia.

Para este equipamento será portanto necessário inserir o seu endereço IP depois de se certificar de que inseriu corretamente os cookies esperados na configuração do plugin (ver parágrafo **Caso especial de Chromecast**).

O equipamento possui dois controles para reproduzir playlists : "reproduzir lista de reprodução "e" reproduzir URI" :

- Play Playlist permite que o equipamento toque uma playlist de sua biblioteca pessoal. O pedido consiste em duas partes : o título do plalista desejado (coloque o nome exato lá sem aspas) e a opção (apenas o aleatório é levado em consideração para tocar as músicas aleatoriamente).
- Play Playlist URI permite que o equipamento reproduza uma playlist, um artista ou uma música disponível no Spotify graças ao seu URI (um código único ligado a este elemento). Para encontrá-lo você deve clicar com o botão direito do mouse no elemento desejado (faixa, artista, lista de reprodução ...), selecionar "compartilhar", segurar ctrl (windows) ou Alt (MAC) e então "copiar URI do Spotify". Cole a linha obtida na caixa URI do comando.

>**IMPORTANTE**
>
>O equipamento Chromecast deve estar na mesma rede local que o Jeedom.
