# Plugin Zigbee

O plugin Zigbee permite que você se comunique com a maioria dos equipamentos Zigbee existentes. É baseado no (super) projeto Zigpy, que é compatível com as seguintes chaves zigbee :

- Deconz. Testado e validado pela equipe Jeedom. Não é necessário ter o Deconz instalado
- EZSP (chave baseada em um chupset da Silicon Labs). Em teste pela equipe Jeedom
- X-bee. Não testado pela equipe Jeedom
- Zigate. Não testado pela equipe, marcado em experimental no Zigpy
- ZNP (Texas Instrument, Z-stack 3.X.X). Não testado pela equipe, marcado em experimental no Zigpy
- CC (Texas Instrument, Z-stack 1.2.X). Não testado pela equipe, marcado em experimental no Zigpy

# Configuração do plugin

Depois de instalar o plugin, você só precisa instalar as dependências, selecionar seu tipo de chave, a porta (cuidado apenas o tipo de chave deconz suporta a porta em auto) e iniciar o daemon. Você também pode escolher o canal para o zigbee.

>**IMPORTANTE**
>
>Qualquer mudança de canal requer necessariamente a reinicialização do daemon. Uma mudança de canal também pode exigir a reinclusão de certo módulo

## Restauração de backup 

É possível em chaves do tipo EZSP (Elelabs por exemplo) e ZNP fazer um backup desta para restaurá-la em outra chave.

>**IMPORTANTE**
>
> Em chaves do tipo EZXP (Elelabs), só é possível fazer uma única restauração de backup em todos e para a vida da chave !!!!

O backup não contém a lista de módulos, mas apenas as informações básicas da rede zigbee, por isso não é necessário fazê-lo com frequência, apenas um é suficiente porque não se move durante a vida da chave.

>**IMPORTANTE**
>
> Durante um backup ou restauração, os daemon (s) zigbee são interrompidos

## Atualização de Firmware 

É possível a partir do Jeedom atualizar o firmware da chave Zigbee (apenas para Elelabs no momento). O firmware é realmente muito importante no zigbee (é ele quem gerencia o roteamento por exemplo) é importante atualizá-lo.

>**IMPORTANTE**
>
> Durante uma atualização de firmware, os daemon (s) zigbee são interrompidos

## Parâmetros específicos do Zigpy (reservados para especialistas !!!!)

É possível configurar parâmetros específicos para o subsistema zigbee (zigpy). Esta parte está realmente reservada para especialistas e o Jeedom não fornece uma lista de parâmetros possíveis (existem centenas que dependem do tipo de chave). O campo recebe como entrada o exemplo json : 

````
{
    "ezsp": {
        "CONFIG_ADDRESS_TABLE_SIZE": "16"
    }
}
````

>**IMPORTANTE**
>
>Durante QUALQUER solicitação de suporte, se houver uma configuração acima, a solicitação de suporte será automaticamente recusada


# Inclusão de Módulo

Inclusão é a parte mais difícil no Zigbee. Embora simples, a operação costuma ser feita várias vezes. Do lado do plugin é fácil, basta clicar no botão "Modo de inclusão", uma vez feito você tem 3 minutos para incluir seu equipamento.

Mudanças de lado do equipamento dependendo do módulo, é necessário consultar a documentação deste cada vez.

>**IMPORTANTE**
>
>Não se esqueça de fazer um reset do módulo antes de qualquer inclusão

# Equipement

Uma vez incluído, o Jeedom deve reconhecer automaticamente o seu módulo (se este não for o caso, consulte o próximo capítulo) e, portanto, criar os comandos que funcionam bem. Observe que devido a um bug em certo firmware (Ikea, Sonoff ...) às vezes é necessário escolher o tipo de módulo diretamente na lista "Equipamentos" e salvar para ter os comandos corretos.

Você tem na guia de equipamentos os seguintes parâmetros :

- **Nome do equipamento Zigbee** : nome do seu equipamento Zigbee
- **ID** : identificadores únicos do equipamento, mesmo durante uma reinclusão (ou mesmo se você alterar o tipo de chave zigbee)
- **Ativar**
- **Visivél**
- **Objeto pai**
- **Escritório**
- **Categoria**
- **Não espere o retorno da execução dos pedidos (mais rápido, mas menos confiável)** : não espere pela validação da chave para dizer que o comando foi executado. Torna a mão mais rápida, mas não garante que tudo correu bem

Na página de comandos iráencontrar os comandos do seu módulo (se tiver sido reconhecido)

## Pedido para especialistas

Para os especialistas, aqui está como funcionam os controles :

- ``attributes::ENDPOINT::CLUSTER_TYPE::CLUSTER::ATTRIBUT::VALUE``, permite que você escreva o valor de um atributo (tenha cuidado, nem todos os atributos podem ser alterados) com :
  - ``ENDPOINT`` : número do endpoint
  - ``CLUSTER_TYPE`` : tipo de cluster (IN ou OUT)
  - ``CLUSTER`` : número do cluster
  - ``ATTRIBUT`` : número do atributo
  - ``VALUE`` : valor para escrever
Exemplo : ``attributes::1::in::513::18::#slider#*100``, aqui vamos escrever o atributo no ponto de extremidade 1, cluster de entrada (``in``) 513, atributo 18 com o valor do ``slider*10``
- ``ENDPOINT::CLUSTER:COMMAND::PARAMS``, permite executar um comando de servidor, com :
  - ``ENDPOINT`` : número do endpoint
  - ``CLUSTER`` : nome do cluster
  - ``COMMAND`` : nome do comando
  - ``PARAMS`` parâmetro na ordem correta, separado por ::
Exemplo : ``1::on_off::on``, aqui nós executamos o comando ``on`` no ponto final 1 do cluster ``on_off`` sem parâmetros
Exemplo : ``1::level::move_to_level::#slider#::0``, aqui nós executamos o comando ``move_to_level`` no ponto final 1 do cluster ``level`` com os parâmetros ``#slider#`` e ``0``

# Meu módulo não é reconhecido

Se o seu módulo não for reconhecido pelo jeedom (sem comando), mas incluído, você deve pedir à equipe do Jeedom para adicioná-lo.

>**IMPORTANTE**
>
>A equipa Jeedom reserva-se o direito de recusar qualquer pedido de integração, é sempre melhor levar um módulo já compatível

Para isso, você deve fornecer os seguintes elementos (qualquer solicitação incompleta será recusada sem uma resposta da equipe Jeedom) :

- Forneça o modelo exato do seu módulo (com um link para a página de vendas)
- Na página do equipamento, clique em configuração a seguir na aba "Informação bruta" e envie o conteúdo para a equipe Jeedom
- Coloque o daemon em debug (e reinicie), faça ações no equipamento (se for um sensor de temperatura, varie a temperatura por exemplo, se for uma válvula, varie o setpoint ...) e envie o registro de depuração do zigbee (tome cuidado para pegar o zigbee e não o zigbeed)

# Touchlink

Touchlink ou Lightlink é uma parte especial do Zigbee que permite enviar ordens de gerenciamento para um módulo se você estiver muito perto dele (50cm). É usado, por exemplo, para fazer um reset nas lâmpadas que não têm botão.

Portanto, isso diz respeito a tudo o que é lâmpadas Zigbee do tipo Philips Hue, Ikea, Osram, Icasa ... e assim por diante. O princípio é muito simples para poder associar este tipo de módulo a uma rede zigbee, você deve primeiro fazer um reset. Então, ao reiniciar, o módulo tentará automaticamente se associar à primeira rede Zigbee aberta que encontrar.

## Redefinir no Touchlink

Esta é a parte complicada (como sempre no Zigbee o mais difícil é o reset / associação). Vários métodos :

- Ligue / desligue 5 ou 6 vezes rapidamente, a lâmpada normalmente pisca rapidamente no final para sinalizar que está boa (raramente funciona)
- Use um controle remoto zigbee e
  - pressione ao mesmo tempo o botão LIGAR e DESLIGAR por 5 a 10 segundos perto da lâmpada elétrica (cuidado com algumas lâmpadas, às vezes você precisa desligar / ligar a lâmpada imediatamente antes) para os controles remotos Philips hue
  - pressione o botão de reinicialização (ao lado da bateria) por 5 a 10 segundos próximo à lâmpada elétrica (cuidado com certas lâmpadas, às vezes você precisa ligar / desligar a lâmpada um pouco antes) para os controles remotos Ikea
- Para os bulbos de matiz, você também pode incluí-los na ponte matiz e removê-los

# Atualização OTA 

As atualizações OTA são atualizações de firmware de módulo, leva muito, muito tempo (várias horas), mas permite que você tenha menos preocupações em geral. Para ser capaz de atualizar um módulo, o fabricante deve comunicar o firmware : 

- Para Ikea e Ledavance, não se preocupe, ele é fornecido online diretamente pela Ikea, o plug-in irá retirá-lo diretamente deles 
- Para outros (ver [aqui](https://github.com/Koenkk/zigbee-OTA/tree/master/images)) o fabricante às vezes fornece uma atualização não oficial 
- Para todos os outros não há possibilidade de atualizar o módulo pelo plugin 

Para ativar as atualizações OTA, basta marcar a caixa na configuração do plugin, salvar e clicar no botão para atualizar os arquivos OTA. Em seguida, basta reiniciar o (s) demônio (s) zigbee.

As atualizações são lançadas se houver uma e depois disso o módulo pergunta se há uma (você pode forçar isto na página de ação na configuração do módulo / nó). Infelizmente, não existe um indicador simples para ver o progresso da atualização, a única solução é ir para os logs zigbee_X (se o log for depurado) e procurar ota e você pode ver se um módulo se atualiza com logs do tipo : 

````
2020-02-27 15:51:10 [DEBUG][0x7813:1:0x0019] OTA query_next_image handler for 'IKEA of Sweden TRADFRI control outlet': field_control=1, manufacture_id=4476, image_type=4353, current_file_version=536974883, hardware_version=60
2020-02-27 15:51:10 [DEBUG][0x7813:1:0x0019] OTA image version: 537011747, size: 204222. Update needed: True
2020-02-27 15:51:18 [DEBUG][0x7813:1:0x0019] OTA image_block handler for 'IKEA of Sweden TRADFRI control outlet': field_control=0, manufacturer_id=4476, image_type=4353, file_version=537011747, file_offset=0, max_data_size=63, request_node_addr=Noneblock_request_delay=None
2020-02-27 15:51:18 [DEBUG][0x7813:1:0x0019] OTA upgrade progress: 0.0

 ````

# Conselhos para tornar as redes zigbee mais confiáveis 

Para ter redes zigbee confiáveis, é mais do que recomendado ter pelo menos 3 módulos roteadores permanentemente alimentados e evitar desconectá-los. De fato, durante nossos testes, notamos uma grande melhoria na confiabilidade e resiliência das redes zigbee ao adicionar um módulo roteador. Também é aconselhável incluí-los primeiro (caso contrário, levará entre 24 a 48 horas para que o dispositivo final [módulo não roteador] descubra).

Outro ponto importante é que é possível durante a retirada de um módulo roteador que parte do dispositivo final [módulo não roteador] se perca por mais ou menos tempo (dez horas ou mais), ou mesmo definitivamente e que você tenha que reincluí-los. Infelizmente, a equipe Jeedom não pode fazer nada sobre isso, é específico para o dispositivo final [módulo não roteador] dependendo de como o fabricante o configurou (e não o plugin Jeedom que absolutamente não cuida da parte de roteamento)

>**NOTA**
>
> O gráfico das redes Zigbee é apenas informativo e é baseado nos vizinhos que os módulos declaram ter, portanto não é necessariamente o roteamento real, mas os possíveis roteamentos.

Outro ponto importante: os gateways zigbee em wi-fi são menos confiáveis do que os gateaways zigbee em USB, é óbvio, mas preferimos lembrá-lo aqui, portanto, é altamente recomendável usar gateways USB.
 

# FAQ

>**LQI ou RSSI é N / A
>
>Normalmente é após um reinício das redes Zigbee que os valores são esvaziados, é necessário aguardar que o módulo recomunique para que os valores retornem

>**Tenho problemas de inclusão ou erros nos registros de tipo ``TXStatus.MAC_CHANNEL_ACCESS_FAILURE``**
>
>Tente remover a extensão USB se você tiver uma ou altere-a ou coloque uma se você não tiver

>**Tenho erros "não consigo enviar para o dispositivo" ou "erro de envio" ou "Falha no envio de mensagem""**
>
>Infelizmente é muito complicado de corrigir, geralmente é devido a um problema de roteamento (o roteamento é mais ou menos fixo em zigbee e não simétrico : o módulo pode usar uma rota diferente para responder a você do que aquela usada para falar com ele). Muitas vezes, o desligamento elétrico (removendo as baterias, por exemplo) e reiniciando a corrente (ou substituindo as baterias) é o suficiente para resolver o problema.

>**Tenho erros estranhos em módulos empilhados ou problemas de inclusão**
>
>Percebemos que boa parte dos problemas do zigbee nos módulos de bateria são devido às baterias (ou problemas de reinicialização dos módulos antes da inclusão). Mesmo que pareça novo, é aconselhável testar com outras pessoas para ter certeza.

>**Tenho dúvidas em atualizar os valores do equipamento**
>
> Existem 2 casos possíveis :
> - é um "módulo antigo" em ZLL (ver configuração do equipamento Jeedom indica se é ZHA ou ZLL), neste caso você absolutamente precisa de um comando "Atualizar" para você ou Jeedom para forçar uma atualização de valores. Se você não o tiver, entre em contato com o suporte para que possa ser adicionado à próxima versão estável. Depois de sair, você terá que clicar em "recriar pedidos" sem excluir
> - o módulo está no ZHA, então é uma preocupação de inclusão  : na aba de ação da configuração do equipamento você tem um botão de reset para forçar ações de pós inclusão, lembre-se de manter o módulo acordado se estiver na bateria.
