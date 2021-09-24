# Alexa Smarthome plugin

Este plug-in torna possível fazer o link entre seu Jeedom e Alexa

Ele pode operar através de um serviço em nuvem fornecido pela Jeedom.

> **IMPORTANTE**
>
> O plug-in requer uma assinatura para serviços de voz. Você pode gerenciar sua assinatura [aqui](https://www.jeedom.com/market/index.php?v=d&p=profils#services)

> **IMPORTANTE**
>
> AMAZON requer que seu Jeedom esteja acessível em HTTPS (o plugin não funciona em HTTP) com um certificado válido (portanto, nenhum certificado autoassinado)
>
> Graças aos Power ou Ultimate Service Packs, seu Jeedom pode ser acessado via HTTPS.
> Se você tiver um Community Service Pack, deverá instalar um certificado SSL emitido por uma autoridade de certificação (por exemplo: Vamos criptografar, ...).

> **IMPORTANTE**
>
> O plug-in não suporta equipamentos com funções duplas (2 saídas como certo módulo Fibaro zwave). Você absolutamente tem que passar por 2 virtuais para quebrá-lo.

# Estabelecendo a conexão com o Alexa

> **IMPORTANTE**
>
> É importante executar as seguintes etapas na ordem listada !!!

## Mercado de configuração

Depois de instalar o plug-in, basta acessar a parte de configuração do plug-in e clicar em enviar a configuração ao mercado.

## Configuração Alexa

Depois que o serviço estiver ativo, você precisará no aplicativo Alexa ou no [site](https://alexa.amazon.fr/spa/index.html) vá para a parte da habilidade e procure a habilidade Jeedom e ative-a. Lá, ele solicitará identificadores que você deve colocar no mercado (tenha cuidado em colocar seus identificadores de mercado e não os do seu Jeedom)

> **IMPORTANTE**
>
> Se houver uma mensagem de erro informando que sua senha de usuário ou não está correta, você deve :
> - verifique se o Amazon Alexa está ativo no mercado
> - se for esse o caso, certifique-se de seus identificadores (atenção, você deve respeitar maiúsculas / minúsculas) ?
> - se for esse o caso, altere sua senha no mercado e na configuração do serviço de assistente de voz (guia página de perfis de mercado, meus serviços) salvou

> **IMPORTANTE**
>
>Qualquer modificação na configuração do equipamento transmitido ao Alexa (adição de equipamento, exclusão de equipamento, alteração de um tipo genérico de um pedido) requer necessariamente acessar Plugin -> Comunicação -> Alexa e salvar e no aplicativo Alexa para refazer uma descoberta

## Configuração do plugin

No seu Jeedom, vá para Plugin -> Communication -> Alexa e, na seção equipment, selecione o equipamento a ser transmitido ao Alexa, bem como o tipo de equipamento.

> **IMPORTANTE**
>
> O plug-in é baseado nos tipos genéricos de comandos Jeedom para controlar sua automação residencial. Portanto, é muito importante configurá-los corretamente. Você pode ver [aqui](https://doc.jeedom.com/pt_PT/concept/generic_type) explicações sobre genéricos genéricos

> **IMPORTANTE**
>
> Para os modos que você precisa de dois MÍNIMOS, caso contrário, a Amazon recusa a configuração e nada será sincronizado

Você também pode criar cenas na guia cena, com ações de entrada e saída.

> **IMPORTANTE**
>
> Se você não enviar nenhum equipamento (não há OK na lista de equipamentos no plug-in Alexa), a Amazon considera que é um erro e usa a última configuração conhecida. Portanto, se você esquecer tudo e não enviar nenhum equipamento, a amazon terá a última configuração conhecida e, portanto, fará tudo reaparecer.

# FAQ

>**Eu li que o plugin exigiria uma assinatura, por que ?**
>
> É bastante simples, o Jeedom é uma solução que não é da nuvem (ouça tudo está em casa, não há servidor do nosso lado para o seu Jeedom), mas o Alexa só pode enviar solicitações para um único servidor por uma habilidade. Então tivemos que criar um servidor que recebesse todos os pedidos do Alexa e os retransmitisse para o seu Jeedom. Infelizmente servidor (além do custo de desenvolvimento e manutenção) a um custo de aluguel do nosso lado. É por isso que haverá uma assinatura do serviço "Voice Assistant", que cobrirá tanto a Amazon quanto o Google (não se preocupe com o preço, será mínimo, o objetivo é apenas amortizar o custo do servidor)

>**Para abrir / fechar as persianas, devo dizer ligar / desligar ?**
>
> Isso é normal O Alexa não suporta equipamentos do tipo abertura (por razões de segurança), então você deve acreditar que é uma luz. Por contras, graças às rotinas, você pode dizer abrir / fechar

>**Alexa me diz "o dispositivo não responde" enquanto a ação é bem feita**
>
> Olhe para seus tipos genéricos, o Alexa absolutamente exige um retorno de status, caso contrário, ele informará que o dispositivo não está respondendo. Preste atenção também no atraso para executar a ação, se for muito longo, você receberá a mensagem de que o dispositivo não responde.

>**Durante a associação, tenho um erro (mas não em um problema de senha / nome de usuário)**
>
>Se você tiver um erro durante a associação com a Jeedom, provavelmente é porque você não adicionou / transmitiu equipamento antes de fazer a associação. Para corrigir, vá para Plugins -> Comunicação -> Alexa e marque pelo menos um equipamento para transmitir e salvar (verifique se o equipamento está em OK, se estiver em NOK, clique no NOK para ver o porquê ou perguntar sobre tipo genérico em jeedom). Depois refaça a associação

>**Ao adicionar equipamento, tenho NOK**
>
>Basta clicar no NOK, uma janela informará o tipo genérico a ser usado nos controles do equipamento para que funcione. Você pode ver [aqui](https://doc.jeedom.com/pt_PT/concept/generic_type) a documentação sobre tipo genérico

>**Adicionar equipamento / cena não aparece no aplicativo alexa**
>
> Você deve :
> - apaguei todo o meu equipamento transmitido (verde OK) do plugin Alexa
> - salve bem
> - “oublié” tous mes équipement jeedom visibles dans la rubrique Maison connectée de Alexa.amazon.com (ou o aplicativo)
> - em plugin -> gerenciamento de plugin, em seguida, alexa clique em "enviar a configuração para o mercado"
> - faça uma detecção do Alexa
> - equipamento de retorno
> - refazer a detecção do Alexa
