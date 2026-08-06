# Plugin modbusServer


# Configuração do plug-in

Depois de baixar o plugin, você deve primeiro ativá-lo, como qualquer plugin Jeedom :

![config](../images/ModbusServerActiv.png)

Então, você deve iniciar a instalação das dependências (mesmo que pareçam OK) :

![dependances](../images/ModbusServerDep.png)

Finalmente, inicie o daemon :

![demon](../images/ModbusServerDemon.png)

Rien n'est à modifier dans le champ « Port socket interne » de la section « Configuration ».

![socket](../images/ModbusServerConfig.png)

Por padrão, a porta ModbusServer é 1048; é esta porta que deve ser inserida no lado do cliente para consultar o servidor
Você pode alterar esta porta conforme necessário

Você também pode definir o cron do plugin, que se encarregará de atualizar os pedidos cadastrados no servidor. 



# Uso do plug-in

Quando vamos ao plugin, existe o equipamento jeeModbusServer que é criado; é neste equipamento que adicionamos os comandos Jeedom que queremos adicionar ao servidor

![jeeServer](../images/ModbusServerEqLogicServer.png)


Ao entrar no equipamento, é possível visualizar o botão Mapeamento de Comandos, que será utilizado para 'transformar' os comandos adicionados em registradores legíveis por um cliente Modbus


Primeiro, vamos para a guia Comandos para adicionar comandos do nosso Jeedom

![addCmdInfo](../images/ModbusServerAddCmdInfo.png)


Adicionamos, por exemplo, um comando Info :

Nomeamos o comando e procuramos em nosso Jeedom através dos objetos o comando que queremos adicionar ao jeeModbusServer. 

![cmdAdded](../images/ModbusServerCmdAdded.png)


Uma vez feito, você pode salvar o equipamento.



A partir daí, podemos mapear o comando para um comando 'modbus''.

Voltamos para a guia Equipamentos e podemos clicar em Mapeamento de pedidos :
![btnServer](../images/ModbusServerBtnMapping.png)

Ao clicar em Order Mapping, se nenhum pedido foi adicionado ao servidor, você verá esta mensagem de erro :
![noCmd](../images/ModbusServerNoCmd.png)


Se existirem comandos, acabamos com uma interface como esta:
![cmdMapped](../images/ModbusServerCmdMapped.png)

Você pode encontrar o objeto Jeedom onde o pedido está localizado, seu equipamento, bem como seu valor atual. 

Os menus do seletor são usados para configurar o registro Modbus : 

- O Type of Input para escolher o tipo de registro Modbus (holding, coil)
- Iniciar Registro : Registro inicial deste comando Modbus
- Número de bytes : no Modbus, um registro pode ser escrito em vários bytes (um registro é igual a 16 bits, ou seja, 1 byte).
- Formato de dados : o tipo do valor (Inteiro(inteiro), Float(Decimal) ou Bit(0 ou 1))
- ByteOrder e WordOrder : em geral, essas configurações estão em Big nos PLCs Modbus. Você pode opcionalmente colocar o valor Pouco


Uma vez que os comandos tenham sido configurados, você pode clicar em Validar. 

Os comandos serão injetados no serverModbus, e portanto acessíveis via clientModbus, na porta escolhida na configuração


Ao configurar e adicionar um comando no servidor Modbus, via modal, então será criado um Jeedom Listener no plugin, para monitorar alterações no status do comando inicial, e assim atualizar o comando alias no jeeModbusServer




