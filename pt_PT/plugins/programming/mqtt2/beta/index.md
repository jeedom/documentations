# Plugin MQTT

## Description

O plug-in permite que você conecte Jeedom a um brocker MQTT existente ou instale um (no docker usando o plug-in Docker). Este plugin pode : 
- servir como base para outro plugin para tudo o que passa por MQTT
- servir no modo "independente"" : você pode criar comandos (informações / ação) para enviar / receber mensagens no MQTT
- ser usado para conduzir o jeedom de outro equipamento MQTT (como o Nodered, por exemplo) : o plug-in pode controlar os comandos Jeedom, bem como transmitir todos os eventos Jeedom no MQTT

## Installation

Existem 2 modos de instalação : 
- modo local : Jeedom irá instalar o Mosquitto usando o plugin docker (em um contêiner, portanto), ele cuida da configuração (em particular a autenticação). Observe que a instalação pode levar várias dezenas de minutos
- modo remoto : basta indicar ao Jeedom o endereço do brocker MQTT (ex : mqtt://192.168.1.10:1883)

Você pode especificar usuários / senha para conexão :
- no modo local você pode colocar um nome de usuário:senha por linha, cada par de identificador terá acesso válido ao brocker. Por padrão, se não houver nenhum identificador, o jeedom adiciona automaticamente um identificador
- no modo autônomo, basta colocar na primeira linha o par nome de usuário / senha para jeedom, separados por : (ex se o nome de usuário é `jeedom` e a senha` mqtt` você deve colocar` jeedom:mqtt``)

>**IMPORTANTE**
>
>No modo local não é possível não ter autenticação

- "Jeedom root topic" : tópico raiz para enviar um pedido à Jeedom ou para a qual envia eventos
- "Transmitir todos os eventos do pedido" : indica se Jeedom deve enviar todos os eventos de comando no barramento MQTT 

## Equipement

É possível criar equipamentos MQTT diretamente do plugin, tome cuidado, neste caso, nenhuma automação ou modelo, desde que você tenha que fazer tudo manualmente.

É necessário indicar o tópico raiz (ex `teste`) para o equipamento então nos comandos basta : 
- comandos de tipo de informação : indique o tópico completo, por exemplo, se você colocar `toto / 1`, todas as mensagens no tópico` test / toto / 1` serão escritas automaticamente no comando em questão
- comandos de tipo de ação : para indicar o tópico e a mensagem, ex se você colocar `foo / 2` com como mensagem` plop` cada clique no comando irá enviar a mensagem` plop` no tópico` test / foo / 2`

>**NOTA**
>
>Em comandos de tipo de ação, você pode usar tags #slider#, #title#, #message# Onde #select# que será automaticamente substituído de acordo com o tipo de comando pelo seu valor durante a execução do comando

## Usando Jeedom por meio de MQTT

É possível dirigir o Jeedom através do MQTT, aqui estão os tópicos (os exemplos assumem que o tópico raiz é igual a `jeedom`, então você deve adaptar se você o alterou) : 
- `jeedom / cmd / set /#cmd_id#`` : permite executar o comando `#cmd_id#`, você pode passar os parâmetros na mensagem como campos json dependendo do subtipo do comando, por exemplo : 
    - defeito : sem parâmetros
    - cursor : `{slider : 50} `
    - mensagem : `{título : "Olá "mensagem : "Oi como você está ?" }``
    - cor : `{color : "#96c927 "}`
    - lista : `{selecionar : 1} `
    - comando de tipo de informação : você pode passar o valor diretamente ou em json do `{value : "cuco ", datetime : "2021-12-12 10:30:00 "}`, `datetime` é opcional
- `jeedom / cmd / get /#cmd_id#`` : solicite o valor do comando `#cmd_id#`para jeedom, isso retornará` jeedom / cmd / valor /#cmd_id#`com o valor do comando na mensagem
- `jeedom / cmd / event /#cmd_id#`` : evento no comando#cmd_id#`com uma mensagem json contendo informações diferentes, incluindo o valor do comando