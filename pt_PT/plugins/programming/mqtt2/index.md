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

Para iniciar a configuração do plugin, é necessário selecionar o modo de conexão ao broker entre as 3 opções possíveis :

- **Corretor local** : O broker Mosquitto é instalado diretamente na máquina que hospeda o Jeedom *(modo padrão)*.

- **Corretor local do Docker** : O broker Mosquitto é instalado e configurado automaticamente em um container Docker usando o plugin oficial **Gerenciamento do Docker**.

  >**EM FORMAÇÃO**
  >
  >Neste modo, a instalação pode demorar vários minutos.

- **Corretor remoto** : No caso da utilização de uma corretora já existente, basta preencher o seu endereço *(exemplo : ``mqtt://192.168.1.10:1883`)*.

Uma vez que o corretor Mosquitto está instalado *(se necessário)*, você pode continuar com a configuração :

- **Autenticação**: Você pode especificar usuários / senha para conexão :

  - no modo local você pode inserir um `nome de usuário:password` por linha, cada par de identificadores terá acesso válido ao broker. Se não houver identificador, Jeedom cria um automaticamente.

  - no modo autônomo basta colocar na primeira linha o identificador do casal:password` para Jeedom (exemplo : se o nome de usuário for `jeedom` e a senha `mqtt`, você deve preencher `jeedom`:mqtt``).

  >**IMPORTANTE**
  >
  >A autenticação é obrigatória no modo local.

- **Jeedom root topic** : Tópico raiz para enviar um comando ao Jeedom ou no qual ele envia os eventos. Atenção só é possível colocar 1 ou 2 níveis no máximo.

- **Transmitir todos os eventos** : Marque a caixa para enviar todos os eventos de comando Jeedom no MQTT.

- **Modelo de postagem** : Formatando a publicação de eventos Jeedom * (possíveis tags : ``#value#`, `#humanName#`, `#unit#`, `#name#`, `#type#`, `#subtype#``)*.

- **Plug-ins de assinante** : Lista de plugins inscritos no plugin MQTT Manager no formato `plugin(topic)`.

## Configuração do equipamento

É possível criar equipamentos MQTT diretamente no plugin.

Você deve indicar o tópico raiz do equipamento *(`teste` por exemplo)*, então de acordo com o tipo de comandos :

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

O plug-in pode fazer a descoberta automática de vários tipos de módulos. Para fazer isso, você só precisa autorizar a descoberta automática na página principal do plug-in e reiniciar o demônio.

>**IMPORTANTE**
>
>Para módulos do tipo tasmota é absolutamente necessário que a configuração completa do tópico seja `%topic%/%prefix%/`