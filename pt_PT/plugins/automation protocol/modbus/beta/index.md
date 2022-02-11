# Modbus

#Description

Plugin para leitura e escrita em seus dispositivos ModbusTCP/IP e RTU



# Configuração do plug-in

Depois de baixar o plugin, você deve primeiro ativá-lo, como qualquer plugin Jeedom :

![config](../images/ModbusActiv.png)

Então, você deve iniciar a instalação das dependências (mesmo que elas apareçam OK) :

![dependances](../images/ModbusDep.png)

Finalmente, inicie o daemon :

![demon](../images/ModbusDemon.png)

Rien n'est à modifier dans le champ « Port socket interne » de la section « Configuration ».

![socket](../images/ModbusConfig.png)

Nesta mesma aba, você deve escolher o valor de descanso entre atualizar seu equipamento (por padrão 5 seg)




# Uso do plug-in


IMPORTANTE :

Para usar o plugin, você precisa conhecer os parâmetros de suas entradas/saídas de seus periféricos modbus (formato de dados, ordem de bits, etc...)

Para comandos, existem parâmetros para selecionar :

Detalhes do parâmetro :
- Valor negativo : para formatos do tipo LONG/INT, você deve especificar se o valor de gravação/leitura será negativo
- Desvio : isto é, se o deslocamento é ou não considerado nos números de registro em determinados dispositivos Modbus
- Escolha o tom do controle deslizante : Isto serve para escolher o passo do cursor no caso de um comando do tipo Action/Slider se quiser enviar valores não inteiros.




CONTROLES DE REPRODUÇÃO :

Para entradas de bobinas :  
  - Você adiciona um Novo ModbusTCP de E/S e nomeia o comando. Você escolhe um comando de tipo de informação, em tipo binário ou numérico.
  - Escolha a função de código apropriada : neste caso, escolha Fc1 ler Bobinas
  - É então necessário escolher o registrador inicial bem como o número de bytes a serem lidos (o número de registradores)
  Ao salvar, o comando criado será excluído, para criar tantos comandos Coils quanto o número especificado de bytes.
  Ex: Se você escolher um registro inicial de 1 e um número de bytes de 4, os comandos serão criados : ReadCoil_1, ReadCoil_2, ReadCoil_3, ReadCoil_4
  - Você pode, claro, renomear o ReadCoils ao seu gosto.



  Para Registros de Participações :
  - Você adiciona um Novo ModbusTCP de E/S e nomeia o comando. Você escolhe um comando de tipo de informação, em tipo numérico.
  - Escolha o formato correspondente : Flutuante ou Longo/Inteiro
  - O registrador inicial, bem como o número de bytes : para floats, o número máximo de registros codificados é de 4 registros (64 bits)



COMANDOS DE ESCREVA:

 No seu equipamento, por padrão, serão criados 3 comandos do tipo Ação/mensagem; Gravação MultiRegister, Gravação de Bit e Gravação Multicoil


IMPORTANTE :


 Seu princípio de funcionamento:



![cmdEcritures](../images/modbusCmdsEcritures.png)




  - Gravação de vários registros : na configuração do comando, deve-se informar o registrador inicial, assim como a ordem dos bytes e da palavra.
  Por padrão, o functionCode é FC16. Por favor, deixe esta configuração como padrão.

  Para alterar os valores nos registros, use esta sintaxe:
  - valuetoend&nbofregister, separados por | :   Ex:  120&1|214.5&4 Enviamos o inteiro 120 para um registrador, a partir do registrador inicial configurado,
  então 214.5 em float em 4 registros seguindo o anterior.

  Para tipos float, escreva o valor como acima, com um .



    - Gravação MultiCoil : na configuração do comando, você deve inserir o registro inicial
   Por padrão, o functionCode é fc15. Por favor, deixe esta configuração como padrão.

   Para alterar os valores nos registros, use esta sintaxe:
    -  Ex : 01110111 Então isso vai enviar do registrador inicial configurado os valores True(1) ou False(0) para os registradores




    - Escrever Bit : na configuração do comando, deve-se informar o registrador inicial, assim como a ordem dos bytes e da palavra.
    Por padrão, o functionCode é fc03, pois este comando dará o valor do registrador configurado em binário para o comando info "infobitbinary".

    Por favor, deixe esta configuração como padrão.

    No comando info "infobitbinary", você terá o valor binário do registrador de parâmetro no comando Write Bit.
    Para alterar o bit no registro

    - valorpara enviar&PositionBit :   Ex:  1&4 Enviamos o valor 1 para o bit da posição 4 começando pela direita
    No comando info "infobitbinary", você vê o valor 10000101, que corresponde ao valor binário do registrador de parâmetro.
    Ao escrever 1&6, você terá agora o valor : 10100101 no registrador configurado.








Para escrever em uma bobina :

  Exemplo para registro 1 On:
  - Você adiciona um Novo ModbusTCP de E/S e nomeia o comando. Você escolhe um comando de tipo de ação, em tipo padrão.
  - Escolha Fc5 Write Single Coil
  - Registro de partida : 1
  - Número de bytes : 1
  - Coloque 1 no valor para enviar

  Exemplo para registro 1 Off:
  - Você adiciona um Novo ModbusTCP de E/S e nomeia o comando. Você escolhe um comando de tipo de ação, em tipo padrão.
  - Escolha Fc5 Write Single Coil
  - Registro de partida : 1
  - Número de bytes : 1
  - Coloque 0 no valor para enviar


Ao agir sobre esses comandos de ação em seu painel, você enviará True ou False para suas bobinas.




Para gravar em um registro de retenção :

 - Você adiciona um Novo ModbusTCP de E/S e nomeia o comando. Você escolhe um comando de tipo de ação, em tipo de controle deslizante.
 - Escolha Fc5 Write Single Register
 - Escolha o formato para enviar para o registro (isso irá alterar o tipo de controle deslizante em seu painel, dependendo se for flutuante ou longo/inteiro)
 - Escolha o passo do controle deslizante (para decimais, escreva com um .   ex: 0.2)
 - Escolha também um valor mínimo e máximo para este controle deslizante
