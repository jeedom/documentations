# Plugin Zigbee

**O plugin Zigbee para Jeedom** baseia-se no excelente trabalho feito em torno **a biblioteca Zigpy de código aberto** para oferecer um **compatibilidade geral com diferentes hardwares Zigbee**. Ele permite a comunicação com os seguintes controladores Zigbee :

-	**deCONZ (chave Conbee/Conbee 2/Raspbee/Raspbee 2)** : Testado e validado pela equipe Jeedom. *(Não é necessário instalar o aplicativo deCONZ)*
-	**EZSP (Silicon Labs)** : Testado, validado e recomendado pela equipe Jeedom (preste atenção na tecla Sonoff que parece não funcionar muito bem).
-	**XBee** : Não testado pela equipe Jeedom.
-	**Zigate** : Não testado pela equipe.
-	**ZNP (Texas Instruments)** : Não testado pela equipe.

>**IMPORTANTE**
>
> Em primeiro lugar, você deve atualizar o firmware de sua chave (especialmente para EZSP, chave popp em particular), caso contrário, o daemon não funcionará. Para a chave Popp a atualização é gerenciada diretamente do plugin para o outro tipo de chave é necessário consultar a documentação do fabricante.

Além disso, o plugin está equipado com muitas ferramentas que permitem :

- tomando conta de **vários controladores ao mesmo tempo**,
- a **backup e restauração** um controlador,
- a **Atualização de Firmware** um controlador,
- a **atualização de módulos** em OTA,
- visualização de nós e **gráfico de rede**,
- gerenciamento de **grupos**,
- a gestão de **Obrigatório**,
- tomando conta de **Touchlink**,
- ou mesmo para integrar suas próprias configurações para os mais experientes...

>**MUITO IMPORTANTE**
>
> Devido à valsa do lado do fabricante de firmware / hardware e possíveis bugs em seu firmware (sem necessariamente ter a possibilidade de atualizá-lo a partir do Jeedom porque a maioria dos fabricantes não os comunica) é possível que um módulo marcado como compatível não seja apenas parcialmente (um botão que não funciona, ou nenhuma diferença entre o botão para cima e não, nenhum aumento de CO2 ou um sensor do módulo...). Infelizmente, não podemos avisá-lo com antecedência na lista porque : 
>- não temos necessariamente o módulo em questão, muitos módulos são adicionados pelo feedback do usuário
>- de uma semana para outra o módulo pode ter mudado (novo hardware, novo firmware ou mesmo novo módulo que não mudou de nome)
>Em nenhuma hipótese a Jeedom pode ser responsabilizada no caso de falta de uma função (ou mesmo de um módulo que não funcione) quando ela for indicada como compatível, como você o faz, estamos sujeitos às alterações impostas pelo fabricante

# Configuration

## Configuração do plugin

**O plugin Zigbee** usa dependências que precisam ser instaladas primeiro. Assim que as dependências forem instaladas, você pode configurar um ou mais controladores Zigbee inserindo **o tipo de controlador, a porta do controlador e o canal a ser usado**, então (re) inicie o daemon.     

![Configuração contrôleur Zigbee](../images/zigbee_controllerConfig.png)

>**IMPORTANTE**
>
>Qualquer mudança de canal exigirá a reinicialização do daemon. Uma mudança de canal também pode exigir a reinclusão de certos módulos.

## Compatibilité

Você pode encontrar [aqui](https://compatibility.jeedom.com/index.php?v=d&p=home&plugin=zigbee) a lista de módulos compatíveis com o plugin

### Configuração avançada Zigpy

>**Reservado para especialistas !**

É possível configurar parâmetros específicos para o subsistema Zigbee *(Zigpy)*. Esta parte é estritamente reservada a especialistas, por isso a equipe da Jeedom não fornece a lista de parâmetros possíveis *(existem centenas deles, dependendo do tipo de controlador)*.

O campo de entrada aceita código no formato `json` deste tipo :

````````
{
    "ezsp": {
        "CONFIG_ADDRESS_TABLE_SIZE": "16"
    }
}
````````

>**IMPORTANTE**
>
>Qualquer solicitação de suporte será automaticamente recusada se este campo for preenchido.

## Configuração do equipamento

### Inclusão de um módulo Zigbee

Inclusão é a parte mais complexa do Zigbee. Embora simples, a operação é muitas vezes repetida várias vezes para alcançar. Jeedom plugin é fácil, basta clicar no botão **Modo de inclusão** após o qual você tem 3 minutos para incluir o equipamento.

O procedimento de inclusão é específico para cada módulo. Consulte a documentação do fabricante para obtê-lo.

>**TRUQUE**
>
>Não se esqueça de fazer um reset *(reset)* do módulo antes de qualquer inclusão.

### Configurando um módulo Zigbee

Uma vez incluído, Jeedom deve reconhecer automaticamente o módulo e criar os comandos correspondentes. Se este não for o caso, consulte o seguinte parágrafo : **Módulo não reconhecido**.

>**IMPORTANTE**
>
>Devido a um bug em algum firmware *(Ikea, Sonoff, etc)*, às vezes é necessário escolher o tipo de módulo diretamente da lista **Equipamento** em seguida, salve para que os pedidos sejam criados corretamente.

Nas ações (canto superior direito) você pode ativar **Descoberta automática de comandos de informação**, uma vez ativado, o jeedom criará automaticamente um pedido para qualquer informação relatada pelo módulo por 3min. Permite por exemplo num telecomando que ainda não é reconhecido pelo Jeedom criar automaticamente os comandos de informação correspondentes à pressão dos botões (a realizar durante os 3min portanto)

Como de costume, você pode dar um nome ao seu equipamento, inserir uma categoria ou um objeto pai e ativá-lo ou torná-lo visível.

Outros parâmetros mais específicos também estão acessíveis :

- **Identificação** : identificador único do equipamento. Mesmo durante uma reinclusão ou se você alterar o tipo de controlador Zigbee.
- **Controlador Zigbee** : usado para selecionar o controlador Zigbee em comunicação com o equipamento.
- **Controle de comunicação** : permite que você selecione o modo de verificação de boa comunicação entre o controlador e o módulo.
- **Ignorar confirmação de execução** : marque a caixa para ignorar a execução correta do comando. Isso permite que você recupere o controle mais rapidamente, mas não garante que o pedido seja bem colocado.
- **Permitir fila** : marque a caixa para permitir a fila de pedidos. Isso permite que o comando seja executado novamente caso o pedido não seja levado em consideração pelo módulo.
- **Auto-atualização (cron)** : permite forçar a atualização de atributos, não é recomendado colocar nada aqui, um valor ruim e você satura todas as suas redes zigbee...

A parte **Em formação** permite a seleção manual do fabricante e do equipamento. Existe também o visual do equipamento assim como dois botões que permitem o **regeneração de ordens** ou acesso a opções **Configuração do módulo**.

Na aba **Pedidos**, encontramos, como de costume, os comandos que permitem interagir com o módulo.

### Módulo não reconhecido

Se o seu módulo está incluído, mas não é reconhecido automaticamente pela Jeedom *(nenhum pedido criado)*, então você tem que pedir para ele ser adicionado à equipe Jeedom.

>**EM FORMAÇÃO**
>
>A equipe Jeedom reserva-se o direito de recusar qualquer pedido de integração. É sempre preferível optar por equipamentos cuja compatibilidade já esteja confirmada.

Para solicitar a adição de novos equipamentos, é necessário fornecer os seguintes elementos :

- **o modelo exato** do módulo com um link para o site de compra e uma imagem representativa em um fundo transparente (`png`),
- Na página de equipamentos, clique no botão azul **Configuração do módulo** então guia **Informação bruta**. Copie o conteúdo para transmiti-lo à equipe Jeedom,
- Coloque o daemon em `debug` na página de configuração do plugin e reinicie-o. Executar ações no equipamento *(se for um sensor de temperatura, varie a temperatura, se for uma válvula, varie o setpoint, etc...)* e enviar o log `zigbee` *(não `zigbeed`)*.

>**IMPORTANTE**
>
>Antes de qualquer solicitação para adicionar um módulo, verifique se o seu plugin está atualizado e se o módulo ainda não está na lista. Às vezes acontece que o reconhecimento automático não funciona (porque o módulo não dá a sua identificação a tempo) e que é necessário indicar manualmente ao Jeedom o tipo de módulo

>**EM FORMAÇÃO**
>
>Qualquer solicitação incompleta será recusada sem uma resposta da equipe Jeedom.

### Operação de controles
>**Reservado para especialistas !**

Explicamos a seguir como os comandos funcionam no plugin para os usuários mais avançados :

- ````attributes::ENDPOINT::CLUSTER_TYPE::CLUSTER::ATTRIBUT::VALUE```` permite que você escreva o valor de um atributo *(tenha cuidado, nem todos os atributos podem ser alterados)* com :
  - ````ENDPOINT```` : número do endpoint,
  - ````CLUSTER_TYPE```` : tipo de cluster *(DENTRO \| OUT)*,
  - ````CLUSTER```` : número do cluster,
  - ````ATTRIBUT```` : número do atributo,
  - ````VALUE```` : valor para escrever.

**Exemplo** : ````attributes::1::in::513::18::#slider#*100```` irá escrever o atributo no endpoint `1`, cluster de entrada (````in````) `513`, atribua` 18` com o valor de ````slider*100````.

- ````ENDPOINT::CLUSTER:COMMAND::PARAMS```` permite que você execute um comando de servidor com :
  - ````ENDPOINT```` : número do endpoint,
  - ````CLUSTER```` : nome do cluster,
  - ````COMMAND```` : nome do comando,
  - ````PARAMS```` parâmetro na ordem correta separado por `::``.

**Exemplo** : ````1::on_off::on````, execute o comando ````on```` no endpoint `1` do cluster ````on_off```` sem parâmetros.        
**Exemplo** : ````1::level::move_to_level::#slider#::0````, execute o comando ````move_to_level```` no endpoint `1` do cluster ````level```` com os parâmetros ````#slider#```` e ````0````.

# Outils

Diferentes ferramentas que oferecem melhor interatividade com sua rede Zigbee são acessíveis a partir da página de configuração do plugin :

![Ferramentas contrôleur Zigbee](../images/zigbee_controllerTools.png)

>**IMPORTANTE**
>
> Em chaves de tipo EZSP *(Elelabs)*, só é possível realizar uma única restauração de backup em todos e para todos durante toda a vida da chave.

O backup não contém a lista de módulos, mas apenas as informações básicas da rede Zigbee. Portanto, não é necessário executá-lo regularmente, um único backup geralmente é suficiente porque essas informações não mudam durante a vida útil do controlador.

>**EM FORMAÇÃO**
>
>Os daemons Zigbee são interrompidos durante o processo de backup ou restauração.

## Atualizando o firmware do controlador

É possível atualizar o firmware do controlador Zigbee da Jeedom *(atualmente só se aplica a controladores Elelabs)*. O firmware sendo essencial no Zigbee porque gerencia o roteamento entre outras coisas, é importante atualizá-lo.

>**EM FORMAÇÃO**
>
>Os daemons Zigbee são interrompidos durante uma atualização de firmware.

## Atualizando módulos OTA

Atualizações OTA *(Over-The-Air)* são as atualizações de firmware dos módulos. O processo pode demorar um certo tempo (várias horas dependendo do número de módulos), mas permite uma melhor confiabilidade da rede Zigbee em geral. Para poder atualizar um módulo, o fabricante deve comunicar seu firmware :

- A respeito de **Ikea** e **O avanço**, os firmwares são disponibilizados diretamente online onde o plugin irá recuperá-los.
- Para outros (ver [aqui](https://github.com/Koenkk/zigbee-OTA/tree/master/images)), o fabricante fornece informalmente uma atualização em alguns casos.
- Para todos os outros, não é possível atualizar o módulo a partir do plugin.

Para se beneficiar das atualizações OTA, você deve marcar a caixa correspondente na página de configuração do plugin e salvar. Você deve então clicar no botão **Atualizar arquivos de módulo** para recuperar os arquivos atualizados mais recentes e, finalmente, reiniciar o daemon Zigbee.

As atualizações são realizadas automaticamente em caso de disponibilidade ou se o módulo o solicitar. É possível forçar a atualização de um módulo da guia **Ações** da janela de configuração do módulo na página do dispositivo.

Infelizmente, não existe um indicador simples para acompanhar o progresso da atualização, a única solução é consultar os logs do `zigbeed_X` em debug e procurar pelo termo` OTA`. Você será capaz de ver este tipo de registro quando um módulo for atualizado :

````````
2020-02-27 15:51:10 [DEBUG][0x7813:1:0x0019] OTA query_next_image handler for 'IKEA of Sweden TRADFRI control outlet': field_control=1, manufacture_id=4476, image_type=4353, current_file_version=536974883, hardware_version=60
2020-02-27 15:51:10 [DEBUG][0x7813:1:0x0019] OTA image version: 537011747, size: 204222. Update needed: True
2020-02-27 15:51:18 [DEBUG][0x7813:1:0x0019] OTA image_block handler for 'IKEA of Sweden TRADFRI control outlet': field_control=0, manufacturer_id=4476, image_type=4353, file_version=537011747, file_offset=0, max_data_size=63, request_node_addr=Noneblock_request_delay=None
2020-02-27 15:51:18 [DEBUG][0x7813:1:0x0019] OTA upgrade progress: 0.0
````````

# Touchlink / Lightlink

**Touchlink** *(ou Lightlink)* é uma função particular do Zigbee que permite ao controlador enviar ordens de gestão para um módulo com a condição de estar muito próximo dele *(menos de 50 centímetros)*. Isso é útil, por exemplo, para reiniciar lâmpadas que não possuem um botão físico.

Esta função está disponível em lâmpadas do tipo Zigbee **Philips Hue, Ikea, Osram, Icasa e muitos mais...** O princípio é muito simples, para poder associar este tipo de módulo a uma rede Zigbee, deve primeiro efetuar um reset. Ao reiniciar, o módulo tentará automaticamente se associar à primeira rede Zigbee disponível.

## Redefinir no Touchlink

Como costuma acontecer no Zigbee, podem surgir dificuldades durante o processo de reinicialização ou associação. Vários métodos estão disponíveis para você conseguir isso :

- **Execute 5 ou 6 ciclos de ligar / desligar rapidamente** *(Ligado desligado)*. A lâmpada deve piscar no final do procedimento para indicar o reconhecimento correto.
- **Use um controle remoto zigbee**, e :
  - **para controles remotos Philips Hue**, pressione simultaneamente os botões ON e OFF por 5 a 10 segundos perto da lâmpada alimentada *(às vezes você tem que desligar / ligar a lâmpada um pouco antes em alguns modelos)*,
  - **para controles remotos Ikea**, pressione o botão de reset" *(ao lado da bateria)* por 5 a 10 segundos perto da lâmpada alimentada *(às vezes você tem que desligar / ligar a lâmpada um pouco antes em alguns modelos)*.
- Sobre a **Lâmpadas Philips Hue**, você também pode incluí-los no Hue Bridge e removê-los dele.

# Greenpower

A tecnologia Greenpower é suportada pelo plugin (patch zigpy que ainda não tem suporte nativo...).

>**IMPORTANTE**
>
>No momento, Greenpower funciona apenas com chaves do tipo EZSP (Elelabs, popp...). O suporte Deconz virá mais tarde

Para adicionar um módulo Greenpower 2 possibilidades :

- mude para o modo de inclusão, pressione um botão no módulo. Por favor, note que isso corresponde a uma adição não segura (qualquer pessoa que interceptar o quadro do módulo pode enviá-lo de volta para o seu Jeedom)
- leia o código QR do módulo e copie a string na parte "Comissionamento" do Jeedom. Isso corresponde a uma adição segura (a chave de criptografia e no QRcode)


>**IMPORTANTE**
>
>Por padrão, os interruptores estão no canal 11. É absolutamente necessário ter a chave e o interruptor no mesmo canal. Deixo-vos consultar a documentação para mudar o canal dos interruptores (pessoalmente acho que a manipulação não é fácil, o mais ligeiro erro obriga-te a recomeçar, em geral leva-me uma boa hora)

# Gerenciamento de grupo

Um grupo pode ser relacionado a uma espécie de controle remoto virtual que permite ao controlador atuar sobre vários módulos de forma a fazer com que executem as mesmas ações simultaneamente.

O procedimento é simples : crie um novo grupo e adicione ou exclua dispositivos membros dentro dele.

# Binding

A ligação torna possível vincular módulos diretamente entre si, sem que os pedidos passem pelo controlador. O link é feito a partir de um cluster *(entrada saida)* para o mesmo cluster de outro módulo. A ligação deve ser sempre feita do controle (tipo de controle remoto) para o atuador.

Você encontrará os elementos de gerenciamento de vinculação, se for compatível com o seu módulo, na guia **EM FORMAÇÃO** da janela de configuração do módulo.

![Obrigatório Zigbee](../images/zigbee_binding.png)

Alguns módulos não são compatíveis com a ligação e outros *(como módulos Ikea)* suportam apenas a vinculação do comando a um grupo, portanto é necessário começar criando um novo grupo no qual o atuador deve ser colocado.

>**IMPORTANTE**
>
>Ao configurar (ou remover) uma vinculação, o módulo de origem (controle remoto, por exemplo) deve ser absolutamente ativado para que leve em consideração as informações de vinculação

# Zigbee Networks

A constituição de uma rede Zigbee de boa qualidade é muito facilitada pelas ferramentas disponibilizadas no plugin. Vá para a página geral do plugin listando todos os equipamentos e clique no botão **Zigbee Networks** para acessar várias informações e ações em torno da rede Zigbee, bem como o gráfico representativo da mesma.

## Gráfico de rede

O gráfico da rede fornece uma visão geral da rede Zigbee e da qualidade das comunicações com os diferentes módulos.

>**EM FORMAÇÃO**
>
>O gráfico da rede Zigbee é indicativo e é baseado nos vizinhos que os módulos declaram. Isso não representa necessariamente o roteamento real, mas as rotas possíveis.

## Otimizando a rede

Para otimizar a confiabilidade de sua rede Zigbee, **é mais do que recomendado ter pelo menos 3 módulos roteadores permanentemente alimentados e evitar desconectá-los**. De fato, durante nossos testes, notamos uma melhora clara na confiabilidade e resiliência da rede Zigbee ao adicionar módulos de roteador. Também é aconselhável incluí-los primeiro, caso contrário, você terá que esperar 24 a 48 horas pelos "dispositivos finais" *(módulos não roteadores)* descobri-los.

Outro ponto importante, é possível, ao remover um módulo roteador, aquela parte do "dispositivo final" *(módulos não roteadores)* ou perdido por um tempo maior ou menor *(em dez horas ou mais)* ou mesmo definitivamente e você tem que incluí-los novamente.
Infelizmente, isso se deve à forma como o fabricante planejou a integração de seus equipamentos em uma rede Zigbee e, portanto, não pode ser corrigido pelo plugin que não gerencia a parte de roteamento.

Finalmente, e mesmo que pareça óbvio para alguns, lembramos que os gateways Zigbee em Wifi ou remoto são, por definição, menos confiáveis do que os gateways USB. A equipe da Jeedom, portanto, recomenda o uso de um gateway Zigbee em USB.  

# Mudança de chave Zigbee

Se para um determinado demônio (1,2 ou 3) você alterar a chave Zigbee, deverá excluir os dados no nível do demônio ("botão Excluir dados"). Isso não exclui o equipamento de Jeedom, apenas esvazia o banco de dados Zigbee do demônio. Observe que esta operação é irreversível

# FAQ

>**LQI ou RSSI é N / A**
>
>Os valores são normalmente esvaziados após reiniciar o zigbee daemon. Você tem que esperar que o módulo se comunique novamente para que os valores sejam inseridos.

>**Tenho problemas de inclusão ou erros nos registros de tipo ````TXStatus.MAC_CHANNEL_ACCESS_FAILURE````**
>
>Você deve tentar remover ou alterar a extensão USB se estiver usando uma, ou instalar uma, se não estiver usando.

>**Eu tenho erros ````can not send to device```` ou ````send error```` ou ````Message send failure````**
>
>Isso geralmente é devido a um problema de roteamento. o roteamento é mais ou menos fixo no Zigbee, mas não simétrico, um módulo pode usar uma rota diferente para responder do que aquela usada para falar com ele. Freqüentemente, o desligamento elétrico *(removendo baterias, por exemplo)* e ligue a energia *(ou substituição de baterias)* é o suficiente para resolver o problema. Também pode ser corrigido por :
>- colocar ou substituir a extensão USB,
>- usando outra porta USB (especialmente as portas USB no Raspberry Pi que parecem estar tendo dificuldade),
>- colocar um hub usb alimentado,
>- movendo a chave para evitar interferência *(o Zigbee é muito sensível a interferências, principalmente porque usa a mesma frequência do wi-fi)*.

>**Tenho erros estranhos nos módulos da bateria ou problemas de inclusão**
>
>Percebemos que boa parte dos problemas dos módulos na bateria são devidos às baterias ou possivelmente problemas de zerar os módulos antes da inclusão. Mesmo que pareçam novos, é aconselhável testar com baterias novas para descartar essa hipótese.

>**Tenho dúvidas em atualizar os valores do equipamento**
>
> 2 possibilidades :
> - é um módulo ZLL *(veja a configuração do equipamento Jeedom que indica se é ZHA ou ZLL)*. Neste caso, você precisa absolutamente de um comando "Atualizar" para que você ou a Jeedom force a atualização dos valores. Se este comando não existir no equipamento, você deve entrar em contato com o suporte da Jeedom para que seja adicionado na próxima versão estável. Assim que sair, clique no botão **Recriar comandos** sem deleção.
> -	o módulo está no ZHA, então é uma preocupação de inclusão. Na aba **Açao** da configuração do módulo, há um botão **Módulo de reinicialização** permitindo forçar ações pós-inclusão. Deve-se ter cuidado para manter o módulo acordado se estiver na bateria.

>**Meu módulo esgota suas baterias muito rapidamente**
>
>Verifique se você está com um firmware atualizado em sua chave zigbee. Em 90% dos casos, o consumo excessivo de bateria vem do firmware da chave que apresenta o problema.

>**Não consigo incluir novos módulos**
>
>Várias possibilidades para isso :
>- Você já tem muitos mods e excedeu o limite do número de mods ao vivo (31 em geral). Você deve colocar outra chave Zigbee (o plugin gerencia até 3) ou tentar adicionar nós de roteador (cuidado, pois não há um padrão claro para nós de roteador, então há incompatibilidades entre os fabricantes...)
>- Você está sob o comando de Conbee : tente desconectar a chave por 2 minutos, coloque-a de volta e reinicie o daemon, é uma doença conhecida da chave Conbee (mesmo em deconz) ou você precisa de uma reinicialização a frio para a inclusão funcionar
>- Você tem um SSD conectado a USB3, tente conectá-lo a uma porta USB2

>**Vejo erros "Sem ID de cluster" nos registros XXXXX"**
>
>Esta é uma inclusão incompleta, você deve remover o módulo das redes zigbee (usando o botão redes zigbee => Nodes), reiniciar o módulo e incluí-lo novamente, tendo o cuidado de mantê-lo ativo durante todos os processos de 'inclusão

>**Meu sensor de movimento / abertura / comando de interruptor sempre permanece em 1**
>
>É comum no modo zigbee o módulo enviar o valor um durante uma ação (movimento, abrir, pressionar o botão) mas não retornar 0 quando terminar (fim do movimento por exemplo). Você pode configurar um retorno de status para 0 após 1min (por exemplo) na configuração da guia de comando do equipamento e, em seguida, na linha de comando em questão.

>**Não tenho tantos comandos quanto botões no meu controle remoto**
>
>No meu controlo remoto tenho por exemplo 2 botões mas na lista de comandos Jeedom só tenho 1 comando !!! É normal que o comando em jeedom tenha um valor diferente dependendo do botão físico pressionado. A maneira mais fácil de ver é ir em "Configuração avançada" (canto superior direito) depois em "Logs" (canto superior direito também) e pressionar os botões no controle remoto para ver os diferentes valores dos comandos.

>**Eu tenho um erro padrão "base.timeout" ao iniciar o daemon em uma chave do tipo EZSP**
>
>É possível que a chave esteja bloqueada no modo bootloader, para sair dela você pode ir na configuração do plugin e clicar em "Atualizar o firmware", selecionar o tipo de chave (no Smart/Atlas é Elelabs/Popp ), na porta Zigbee selecione sua porta e no firmware selecione "Correction bootloader"
> IMPORTANTE : esta manipulação só deve ser feita com chaves do tipo Elelabs, Jeedom Atlas ou Jeedom Smart. Em qualquer outra chave deve contactar o fabricante para lhe dar o procedimento.

>**Não consigo instalar dependências**
>
>Isso pode vir de um problema com a versão do pip3, para corrigi-lo você tem que ir para a configuração do Jeedom, guia OS / DB, em seguida, inicie o console do SO e faça : `sudo pip3 install --upgrade pip` e reinicie a instalação das dependências. Se isso não funcionar, você pode tentar fazer `sudo apt remove -y python3-openssl;sudo pip3 install --upgrade pip` e reiniciar a instalação das dependências.
