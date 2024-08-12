# Plugin do Gerenciador MQTT

## Description

O plug-in **Gerente MQTT** permite que você conecte o Jeedom a um broker MQTT existente ou instale um localmente ou no Docker usando o plugin **Gerenciamento do Docker**.

Este plugin é capaz de combinar vários recursos :

- Servir de base para outros plugins para tudo relacionado ao MQTT.

- Servir no modo "autônomo" criando comandos de ação/informações para enviar/receber mensagens no MQTT.

- Controle Jeedom de outro equipamento MQTT *(Noded por exemplo)*. O plugin pode conduzir comandos e retransmitir todos os eventos Jeedom no MQTT.

# Configuration

Depois de instalar e ativar o plugin, a instalação das dependências deve começar, a menos que o gerenciamento automático tenha sido desabilitado anteriormente. Neste caso, você terá que clicar no botão **Reviver** para iniciar esta fase de instalação.

## Configuração do plug-in

Para iniciar a configuração do plugin é necessário selecionar o modo de conexão com a corretora dentre as 3 opções possíveis :

- **Corretor local** : O broker Mosquitto é instalado diretamente na máquina que hospeda o Jeedom *(modo padrão)*.

- **Corretor local do Docker** : O broker Mosquitto é instalado e configurado automaticamente em um container Docker usando o plugin oficial **Gerenciamento do Docker**.

  >**EM FORMAÇÃO**
  >
  >Neste modo, a instalação pode demorar vários minutos.

- **Corretor remoto** : No caso da utilização de uma corretora já existente, basta preencher o seu endereço *(exemplo : ``mqtt://192.168.1.10:1883`)*.

Uma vez que o corretor Mosquitto está instalado *(se necessário)*, você pode continuar com a configuração :

- **Autenticação**: Você pode especificar usuários / senha para conexão :

  - No modo local você pode inserir um `nome de usuário:password` por linha, cada par de identificadores terá acesso válido ao broker. Se não houver identificador, Jeedom cria um automaticamente.

  - No modo autônomo basta colocar na primeira linha o identificador do casal:password` para Jeedom (exemplo : se o nome de usuário for `jeedom` e a senha `mqtt`, você deve digitar `jeedom`:mqtt``).

  >**IMPORTANTE**
  >
  > A autenticação é obrigatória no modo local. Após a adição, o Jeedom deve ser reiniciado para que isso tenha efeito.

- **Jeedom root topic** : Assunto raiz para enviar um comando para Jeedom ou para o qual ele retorna eventos. Atenção só é possível colocar 1 ou 2 níveis no máximo.

- **Transmitir todos os eventos** : Marque a caixa para enviar todos os eventos de comando Jeedom no MQTT.

- **Modelo de postagem** : Formatando a publicação de eventos Jeedom * (possíveis tags : ``#value#`, `#humanName#`, `#unit#`, `#name#`, `#type#`, `#subtype#``)*.

- **Plug-ins de assinante** : Lista de plugins inscritos no plugin MQTT Manager no formato `plugin(topic)`.

## Configuração do equipamento

É possível criar equipamentos MQTT diretamente no plugin.

Você deve indicar o tópico raiz do equipamento *(`teste` por exemplo)*, tenha cuidado, o tópico raiz não pode ter mais de 2 níveis (exe `level1/level2`), dependendo do tipo de comandos :

- **Comandos de informações** : basta indicar o tópico completo.
  >Por exemplo, se você colocar `toto/1`, todas as mensagens do tópico `test/toto/1` serão escritas automaticamente no comando em questão. O sistema é capaz de gerenciar campos do tipo json, neste caso você tem que colocar `toto/1/key1` ou `toto/1/key1/key2` para descer um nível.

- **Comandos de ação** : basta indicar o tema e a mensagem.
  >Por exemplo, se você colocar `toto/2` com a mensagem `plop`, cada clique no comando enviará a mensagem `plop` para o tópico `test/toto/2`.

  >**EM FORMAÇÃO**
  >
  >Nos comandos do tipo de ação você pode usar as tags `#slider#`, `#color#`, `#message#` ou `#select#` que será substituído automaticamente pelo seu valor ao executar o comando *(de acordo com seu subtipo)*. Por outro lado, se a mensagem for do tipo `json`, você deve adicionar o prefixo `json` a ela::``.

>**IMPORTANTE**
>
>O tópico `jeedom` é reservado (isso pode ser alterado na configuração), então não envie nada além de comandos para conduzir o jeedom


# Jeedom via MQTT

É possível pilotar Jeedom através do MQTT. Aqui estão os diferentes tópicos possíveis assumindo que o tópico raiz é `jeedom` *(para adaptar se você modificou a configuração padrão)* :

- `jeedom / cmd / set /#cmd_id#`` : permite que você execute o comando com o id `#cmd_id#`. Você pode passar os parâmetros na mensagem como campos `json` dependendo do subtipo do comando, por exemplo:
  - **defeito** : sem parâmetros.
  - **cursor** : `{slider : 50}`.
  - **mensagem** : `{título : "Olá "mensagem : "Oi como você está ?"}``.
  - **cor** : `{color : "#96c927"}``.
  - **lista** : `{selecionar : 1}`.
  - **Comandos de informações** : você pode enviar um valor diretamente ou também especificar uma data de atualização *(facultatif)* `{valor : "cuco ", datetime : "2021-12-12 10:30:00" }`.

- `jeedom / cmd / get /#cmd_id#`` : solicitar valor de comando com id `#cmd_id#`. Jeedom retornará `jeedom/cmd/value/#cmd_id#`com o valor do comando na mensagem.

- `jeedom / cmd / event /#cmd_id#`` : evento no comando com id `#cmd_id#` com uma mensagem `json` contendo informações diferentes, incluindo o valor do comando.

# Desinstale o corretor Mosquitto

2 opções possíveis para desinstalar o broker Mosquitto presente localmente na máquina :

- **Corretor sob Docker** : Primeiro, use o comando **Deletar** Equipamento `mqtt2_mosquitto` do plugin **Gerenciamento do Docker** *(Plugins > Programação > Gerenciamento do Docker)*. Você pode então excluir todo este equipamento.

- **Corretor local** : Você deve então usar o botão vermelho **Desinstalar Mosquito** da página de configuração geral do plugin.


# Autodescoberta)

O plugin pode descobrir automaticamente vários tipos de módulos. Para fazer isso, você só precisa autorizar a descoberta automática na página principal do plug-in e reiniciar o demônio.

>**IMPORTANTE**
>
>Para módulos do tipo tasmota é absolutamente necessário que a configuração completa do tópico seja `%topic%/%prefix%/`


# Transmitir informações entre dois jeedoms por MQTT

É possível graças ao plugin transmitir comandos entre dois Jeedom (este sistema é dedicado a substituir o jeelink), veja como configurá-lo : 

- **Na fonte jeedom que você precisa** :
  - Na configuração do plugin mqtt manager, configure o campo "Jeedom root topic", por padrão é jeedom, é recomendado colocar um valor único por Jeedom (ex : jeedom_salon)
  - Então você pode marcar a caixa "Transmitir todos os eventos" (ainda na configuração do plugin mqtt manager), isso não é o mais recomendado pois enviará todos os equipamentos para o jeedom alvo. O melhor é ir até o equipamento que deseja transmitir, na configuração avançada do equipamento (botão no canto superior direito da página de configuração do equipamento) depois em “Informações adicionais” marcar “Transmitir o equipamento MQTT"
- **No alvo jeedom é necessário** : 
  - Sem configurar o plugin do gerenciador mqtt, configure o campo “Linked Jeedom Topic” definindo o valor de “Jeedom root topic” do jeedom de origem. Você pode colocar várias fontes de Jeedom separando-as com ,. Tenha cuidado, você tem que ter muito cuidado aqui, você definitivamente não deveria ter a mesma coisa para "Jeedom root topic" no jeedoms. Este campo é o identificador único do jeedom, portanto é absolutamente necessário ter valores diferentes.
  - Em plugin -> programação -> gerenciador Mqtt ativa a descoberta automática (inativo por padrão)

Depois é só retornar ao jeedom ainda na configuração do plugin e fazer "Enviar descoberta"

>**IMPORTANTE**
>
>Esta configuração assume que os jeedoms estão conectados ao mesmo brocker mosquitto. Caso não consiga fazer isso, deverá então configurar um dos dois mosquitos para que ele envie os valores dos tópicos desejados para outro mosquito (ver próximo capítulo)

>**IMPORTANTE**
>
>Se você alterar o valor do campo "Modelo de publicação" (vazio por padrão), a descoberta automática não criará os pedidos corretos, cabe a você adaptar a configuração neste caso


# Vinculou dois mosquitos diferentes 

É possível vincular tópicos entre vários mosquitos, aqui está a configuração para adicionar no mosquito. A configuração só precisa ser feita em um dos brocker mosquitto :

````````
connection #NOM_CONNEXION#
address #REMOTE_ADDRESS#:#REMOTE_PORT#
topic # both 0 #LOCAL_TOPIC#/ #REMOTE_TOPIC#/
cleansession true
notifications false
remote_clientid #REMOTE_CLIENT_ID#
remote_username #REMOTE_USERNAME#
remote_password #REMOTE_PASSWORD#
local_username #LOCAL_USERNAME#
local_password #LOCAL_PASSWORD#
start_type automatic
try_private true
bridge_insecure true
bridge_tls_version tlsv1.3
````````

Exemplo, você deseja enviar equipamento de jeedom_2 para jeedom_1 tendo : 
- jeedom_1 : 
  - IP : 192.168.1.45
  - tópico raiz : jeedom_1
  - tópico relacionado : jeedom_2
  - Autenticação : jeedom:password_1
- jeedom_2
  - tópico raiz : jeedom_1
  - Autenticação : jeedom:password_2

Aqui está a configuração que deve ser adicionada em jeedom_2 (parâmetro mosquito) : 

````````
connection jeedom_1
address 192.168.1.45:1883
topic # both 0 jeedom_2/ jeedom_2/
cleansession true
notifications false
remote_clientid jeedom_2
remote_username jeedom
remote_password password_1
local_username jeedom
local_password password_2
start_type automatic
try_private true
bridge_insecure true
bridge_tls_version tlsv1.3
````````

>**OBSERVAÇÃO**
>
> - ``#NOM_CONNEXION#`` : pode ser o que você quiser e não importa. Você pode, por exemplo, fazer name_jeedom_source-name_jeedom_target
> - ``#REMOTE_CLIENT_ID#`` : também não importa, você só precisa colocar uma string única
> - ``#LOCAL_TOPIC#`` : nome do tópico local geralmente será "Tópico raiz do Jeedom" do jeedom local
> - ``#REMOTE_TOPIC#`` : nome do tópico local geralmente será "Tópico raiz do Jeedom" do jeedom remoto

>**IMPORTANTE**
>
> No jeedom os identificadores (`nome de usuário` e `senha`) estão disponíveis na página de configuração do plugin em "Autenticação" no formato `nome de usuário`:``password``

# FAQ

>**Após uma atualização dos pacotes do sistema (apt) ou atualizações autônomas, nada funciona mais**
>
>A atualização do pacote mosquitto redefine o arquivo de serviço para o padrão e, portanto, o mosquitto não aponta mais para o arquivo de configuração correto. Para corrigir isso é muito simples, basta reiniciar a instalação do mosquitto na página de configuração do plugin.
