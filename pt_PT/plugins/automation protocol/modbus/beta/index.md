## Plugin Modbus

### Description

Plugin para leitura e escrita em seus dispositivos ModbusTCP/IP e RTU



### Configuração do plug-in

Depois de baixar o plugin, você deve primeiro ativá-lo, como qualquer plugin Jeedom :

![config](../images/ModbusActiv.png)

Então, você deve iniciar a instalação das dependências (mesmo que elas apareçam OK) :

![dependances](../images/ModbusDep.png)

Finalmente, inicie o daemon :

![demon](../images/ModbusDemon.png)

Rien n'est à modifier dans le champ « Port socket interne » de la section « Configuration ».

![socket](../images/ModbusConfig.png)

Nesta mesma aba, você deve escolher o valor de descanso entre atualizar seu equipamento (por padrão 5 seg)

Você também pode optar por colocar um Retry para reexecutar a solicitação em um comando/equipamento que estaria em erro (por padrão False)
Você também pode escolher o número de tentativas e o atraso entre essas tentativas.





 :warning: Escolha do nível de registro da biblioteca Modbus :

 Por padrão, está configurado para ERRO, sendo a biblioteca detalhada
 Você pode alterar seu nível : você precisará salvar e reiniciar o daemon




### Uso do plug-in


IMPORTANTE :

Para usar o plugin, você precisa conhecer os parâmetros de suas entradas/saídas de seus periféricos modbus (formato de dados, ordem de bits, etc...)

Para comandos, existem parâmetros para selecionar :

Detalhes do parâmetro :
- Desvio : isto é, se o deslocamento é ou não considerado nos números de registro em determinados dispositivos Modbus
- Escolha o tom do controle deslizante : Isto serve para escolher o passo do cursor no caso de um comando do tipo Action/Slider se quiser enviar valores não inteiros.




IMPORTANTE :

Dado o tempo gasto para por vezes configurar determinados equipamentos, é possível exportar os comandos de um equipamento já criado, para baixá-lo localmente em .json.

Você pode, portanto, importá-lo em outra caixa facilmente em um novo equipamento do mesmo tipo (apenas para alterar o que difere em termos de conexão)


Sur la page d'un équipement, sur la droite, vous avez boutons :

![dependances](../images/importJson.png)





### CONTROLES DE REPRODUÇÃO :

Para entradas de bobinas  :  
  - Você adiciona um Novo Comando Modbus e nomeia o comando. Você escolhe um comando de tipo de informação, em tipo binário ou numérico.
  - Escolha o código de função correspondente : FC01
  - É então necessário escolher o registo inicial bem como o número de registos a ler
  Ao salvar, o comando criado será deletado, para criar tantos comandos quanto o número de registradores especificado.
  Ex: Se você escolher um registro inicial de 1 e um número de registros de 4, os comandos serão criados : ReadCoil_1, ReadCoil_2, ReadCoil_3, ReadCoil_4
  - Você pode, é claro, renomear os ReadCoils ao seu gosto.

Para Fc2 Leitura discreta :

- Crie um pedido do tipo Info, sob outro tipo
- Escolha fc02
- Escolha Bits, Big Endian, formato Big Word
- Complete o cadastro
- E preencha o campo : Número de bits a ler (0 a 15)

Ao retornar da leitura, você terá um comando do tipo string com o valor dos bits solicitados


  Para Registros de Participações e Registros de Entradas:
  - Você adiciona um Novo Comando Modbus e nomeia o comando. Você escolhe um comando de tipo de informação, em tipo numérico.
  - Escolha o formato correspondente : Float , Long/Integer ou Bits
  - Escolha o código de função correspondente : FC04 ou FC03
  - O registro inicial, bem como o número de registros : para floats, o valor é codificado em no máximo 4 registradores, o mínimo é 2.



Alguns registradores só podem ser lidos lendo vários registradores ao mesmo tempo no mesmo comando :

exemplo : Criamos um comando, escolhemos Info e outro subtipo, especificando 10 registros;
Ver Parâmetros Específicos no final da documentação


COMANDOS DE ESCREVA:

 No seu equipamento, por padrão, serão criados 3 comandos do tipo Ação/mensagem; Gravação MultiRegister, Gravação de Bit e Gravação Multicoil


IMPORTANTE :


 Seu princípio de funcionamento:


![cmdEcritures](../images/modbusCmdsEcritures.png)






   #### ECRITURE MULTI REGISTRES:

  ###### Ecriture FC16 : registres suivis
        
  En Modbus, la fonction FC16 sert à écrire sur plusieurs registres consécutifs, pour cela :
  En créant une commande puis en choisissant Fc16, la commande sera parametrée en action/defaut et un bouton Configuer Fc16 apparaitra. 

 ![cmdEcritures](../images/configFc16.png)

  Il suffit de cliquer dessus, et on entre ici la valeur à attribuée à chaque registre ainsi que le format de la donnée.

  ![cmdEcritures](../images/bootboxFc16.png)
 
  

  Vous pouvez ajouter ou enlever des valeurs

  Il faut parametrer le registre de départ sur la commande. 
  Et de ce registre de départ que les valeurs seront écrites. 
  Les formats de données entrent en compte également, et si le registre de départ est 10, et que la premiere valeur a envoyée est 15 en int32, alors cela écrira 15 sur le registre 10 et 11. Et l'ecriture suivante si renseignée, sera sur le registre 12 à minima

  Vous pouvez également créer cette commande fc16, et venir changer les valeurs via scenario par exemple, sans repasser par l'UI du plugin :

  ```php
  $cmd = cmd::byId(iddevotrecommande);
  if(is_object($cmd)){
      $cmd->setConfiguration('arrayRegisters', [['value' => '10', 'format' => 'intformat16'],['value' => '12', 'format' => 'intformat16']]);
      $cmd->save();
  }
  ```

  ###### Ecriture FC6 : écriture simple ou registres non-suivis

  En créant une commande puis en choisissant Fc6, sur une commande Action/Curseur, vous n'avez qu'a renseigner le registre, le format de données, et c'est en actionnant ce curseur que la valeur choisie sera envoyée sur le registre


  Pour une écriture multiple, 2 choix possibles :
  En crééant une commmande Action/Défaut, il faut cocher Ecriture Registres non suivis : un bouton Configurer Fc6 apparaitra: vous pouvez cliquez dessus, pour configurer les registres d'ecritures (numero du registre, la valeur à envoyer, et le format). 
  En crééant une commande Action/Message, c'est via le dashboard que l'on entre les valeurs et registres dans le corps du message, avec la syntaxe suivante :

          adresseRegistre|valeur|format;adresseRegistre2|valeur|format;etccc

          Pour le format, vous disposez de :
          int16, int32, uint16, uint32, int64, uint64










  ###### Escrever Bit : na configuração do comando, você precisa da ordem dos bytes e da palavra.

  Une commande Ecriture Bit est incluse sur vos équipements et doit etre utilisée pour venir changer un bit sur un registre.

  Par défaut, le fonctionCode est de fc03, car cette commande sert à donner la valeur du registre parametré en binaire à la commande info "infobitbinary".

  Por favor, deixe esta configuração como padrão.

  No comando info "infobitbinary", você terá o valor binário do registrador de parâmetro no comando Write Bit.
  
  Pour changer le bit sur le registre , on utilise sur le corps du message de la commande Ecriture Bit :

  valorparaenviar&PosicionarBit&Registrar :   Ex:  1&4 Enviamos o valor 1 para a posição 4 do bit à direita, para o registrador especificado
  No comando info "infobitbinary", você vê o valor 10000101, que corresponde ao valor binário do registrador de parâmetro.
  Ao escrever 1&6, você terá agora o valor : 10100101 no registrador configurado.





Para escrever em uma bobina :

Exemplo para registro 1 On:
- Você adiciona um Novo Comando Modbus e nomeia o comando. Você escolhe um comando de tipo de ação, em tipo padrão.
- Escolha Fc5 Write Single Coil
- Registro de partida : 1
- Número de bytes : 1
- Coloque 1 no valor para enviar

Exemplo para registro 1 Off:
- Você adiciona um Novo Comando Modbus e nomeia o comando. Você escolhe um comando de tipo de ação, em tipo padrão.
- Escolha Fc5 Write Single Coil
- Registro de partida : 1
- Número de bytes : 1
- Coloque 0 no valor para enviar


Ao agir sobre esses comandos de ação em seu painel, você enviará True ou False para suas bobinas.




# Parâmetros Específicos

###### RETORNO HEX :
  Para ter um comando que retorna o valor do cadastro em HexaDecimal (para um comando que informa os erros de um equipamento por exemplo), você cria seu comando, configura como de costume,
  e marque Retorno Hexa.
  Au changement de valeur, la commande passera en sous type String,et prendra le retour hexa  



###### LEITURA DE MÚLTIPLOS REGISTROS :
  marcando LectureMultiRegistres, isso criará automaticamente tantos novos comandos quanto o número especificado em Number of registers, usando o nome do comando original, mais o id do comando na iteração. É claro que você pode renomear os comandos; ao ler o comando original, seu valor conterá uma cadeia de caracteres dos 10 valores de registro e atualizará os 10 comandos correspondentes.


###### OPERAÇÃO POR ORDEM :
  Para uma operação sobre o retorno de valor : no campo Operação do pedido, você pode preencher uma operação matemática colocando a tag #value# para indicar o valor deste comando :
  exemplo : (#value# / 10) * 2
  O cálculo será realizado no retorno dos dados deste comando.
  Faça bom uso de * para multiplicações


###### Ler bits de registro :
Ao escolher isto em um comando Info, será criado um comando do tipo info, representando os 16 bits deste registro; este novo comando é criado quando os valores são reportados pela primeira vez, sendo então atualizado a cada novo reporte.




# Importar/Exportar Comandos XLSX

Após a criação de um equipamento, você pode importar um arquivo xlsx para a criação de seus pedidos
O arquivo de modelo pode ser encontrado em plugins/modbus/data/templateXlsx/exportModbus.xls
Você pode acessá-lo e baixá-lo através do Jeedom -> Configurações-> Sistema-> Editor de arquivos



# MQTT

Dans la configuration du plugin, vous pouvez cocher Utilisation de MQTT
Si le plugin officiel MQTT est installé et configuré, alors au demarrage du demon de Modbus, un topic sera créé sur le broker, et à la mise à jour des valeurs via le cron, les informations des registres seront également publiés sur le broker via le topic suivant :

jeeModbusMQTT/nomDeL'equipement/dataCmds


Sur la page d'un équipement, vous pouvez changer le topic par défaut (nom de l'équipement), par ce que vous désirez :

![renammeTopic](../images/renammeTopic.png)




