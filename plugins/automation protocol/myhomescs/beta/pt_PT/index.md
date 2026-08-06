# MyHomeSCS 

Plug-in para usar o gateway F454

# Configuração 

O plugin MyHomeSCS permite que você se comunique com todos os dispositivos MyHomeSCS da Legrand através do gateway F454

>**Atenção**
>
>Para usar o plug-in, é necessário desativar a autenticação do gateway MyHome e autorizar o endereço IP do JEEDOM na lista de permissões do gateway.

Depois de baixá-lo do Market, será necessário configurar o IP e as portas usadas para conectar ao gateway F454. Porta de soquete interno : 55005 é a porta padrão usada pelo daemon MyHomeSCS. É melhor evitar alterá-lo sem saber como o daemon funciona.

![myhomescs1](../images/myhomescs1.png)

Depois de configurado, você acessa a página do plugin MyHomeSCS.

À esquerda, a lista de módulos MyHomeSCS e, no centro, as guias Geral, Informações e Pedidos.

![myhomescs2](../images/myhomescs2.png)

O menu à esquerda apresenta todos os módulos MyHomeSCS detectados e / ou configurados em sua instalação de automação residencial. No momento, o plugin detecta os módulos Legrand, mas não os reconhece automaticamente. Depois que o Jeedom detectar o novo módulo, ele será criado, mas sem atribuir um comando. Para isso, será necessário escolher um módulo na lista suspensa completamente à direita (se o módulo existir no banco de dados) ou criar os comandos um por um.

O botão "Adicionar equipamento" permite adicionar equipamentos específicos do MyHomeSCS, geralmente para testes ou pedidos do tipo "Gerenciamento" ou "Especial"".

![myhomescs3](../images/myhomescs3.png)

Ao alternar para o modo Especialista, você tem acesso a outras opções : Tipo de comando, unidade, tipo de comunicação, quadro bruto.

O campo de tipo permite escolher entre um comando de tipo de ação ou um comando de tipo de informação, o tipo de ação ou informação (Ação, cursor, mensagem, etc.) e a ação (LIGADO, DESLIGADO, etc.). O campo da unidade é usado para inserir a unidade usada para o comando ou para feedback de status. O campo de comunicação permite escolher o tipo de comunicação (Multicast, Unicast ou Broadcast). O campo LogicalID ou comando bruto é usado para nomear as informações ou para preencher o quadro "bruto"".

![myhomescs4](../images/myhomescs4.png)

A guia Informações especifica o tipo de equipamento.

![myhomescs6](../images/myhomescs6.png)

A guia geral permite escolher o nome do equipamento, seu destino na estrutura em árvore da automação residencial, a categoria do módulo (no jargão Legrand : WHO), a possibilidade de tornar o módulo inativo no Jeedom ou de tornar o módulo visível ou invisível na interface.

![myhomescs7](../images/myhomescs7.png)

A guia Pedidos detalha todos os comandos (alguns elementos estão disponíveis apenas no modo especialista).

Esses comandos são preenchidos automaticamente se você escolher o tipo de módulo no campo "Equipamento"". Os parâmetros úteis são Log, Display (o comando), Event (usado para forçar a solicitação de informações no módulo).

![myhomescs8](../images/myhomescs8.png)

Em uma próxima versão e com a ajuda de todos, poderíamos imaginar que os módulos são reconhecidos automaticamente

## Lista de módulos testados 

- Persianas de enrolar : F401
- DALI : F429
- Dimmer : F418
- Interruptor 4x : F411
- Detector de movimento : 0 672 26

## Adicionar equipamento 

A maioria dos equipamentos é adicionada ao plug-in MyHomeSCS assim que é detectado

Depois que o módulo foi criado no plug-in, duas soluções estarão disponíveis para você.

O módulo existe no menu suspenso : Equipamento e basta escolher, depois salvar, para que os pedidos sejam adicionados automaticamente.

O módulo ainda não existe no plug-in e você precisará criar os comandos um por um.

Comandos de informações são necessários para recuperar o estado do equipamento. Exemplo para módulos leves, uma informação de "botão" é criada e permite conhecer o status do botão do módulo (ON ou OFF, por exemplo). Esta informação é usada em particular para gerenciar widgets ou para acionar cenários

Os comandos de ações permitem executar ações no equipamento. Dependendo da categoria do equipamento, você terá diferentes opções.

Os quadros Legrand são orientados em torno de três variáveis e estão no formato (para um quadro do tipo BUS-COMMAND) \*QUEM \*O QUE \* ONDE \#\#

A OMS corresponde à categoria (luz, automação, etc). Se no quadro bruto você digitar \#WHO\\\#, isso será substituído pelo ID da categoria de equipamento.

O QUE corresponde ao ID da ação. Se você digitar \#WHAT\\\#, essa variável será substituída pelo código correspondente do comando escolhido.

Por fim, WHERE corresponde à concatenação do modo de comunicação (unicast, multicast, broadcast), do ID.UNIDADE e mídia (* 9 para Zigbee). No meu plug-in, você pode digitar \\\#WHERE* qui sera remplacé par le code correspondant au type de communication choisi et vous pouvez saisir \#IDUNIT \#, que será substituído pela UNIT correspondente aos 4 últimos dígitos do endereço mac do módulo, converte em decimal seguido pelo ID em dois dígitos.

Basicamente, dá ``\*\#WHO\\\#\\\*\#WHAT\\\#\*\#WHERE\\\#\#IDUNIT\\\#\#\#``

Além dessas variáveis, você pode inserir o quadro bruto diretamente, por exemplo : ``\*2\*2\*\#121301\#9\#\#``

Para conhecer todos os tipos de quadros, valor WHO, WHAT, WHERE, tipos de comunicação ou códigos de mídia, consulte o documento Legrand : Open Web Net Zigbee

Depois de criar todos os pedidos para o seu equipamento, é possível criar um arquivo "Equipamento" no formato JSON. Para isso, você pode se inspirar nos módulos existentes.

Então você pode compartilhá-lo com a comunidade (graças à função : Envie uma configuração). Isso adicionará comandos automáticos para os próximos usuários do plug-in MyHomeSCS.

Graças a você.

# Faq 

Tente iniciá-lo no modo de depuração para ver o erro

Espere um minuto para ver se o problema persiste, se persistir
no ssh do : "sudo rm /tmp/myhomescscmd.pid"

Isso significa que o daemon foi iniciado, mas que o Jeedom não pode
pare com isso. Você pode reiniciar o sistema inteiro ou no ssh
faça "killall -9 myhomescs.py"

Verifique se você marcou a caixa de criação automática de
equipamento, verifique se o daemon está funcionando. Você pode
Também reinicie-o na depuração para ver se ele recebe mensagens de
seu equipamento
