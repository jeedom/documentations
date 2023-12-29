# Plug-in jeezigbee

>**IMPORTANTE**
>
>Documentação em andamento, não hesite em voltar para ver de vez em quando para aprender mais sobre este plugin


**O plugin Jeezigbee para Jeedom** baseia-se no excelente trabalho feito em torno **a biblioteca de código aberto zigbee2mqtt** para oferecer um **compatibilidade generalizada com diferentes hardwares Zigbee**. Permite a comunicação com os seguintes controladores Zigbee :

-	**deCONZ (chave Conbee/Conbee 2/Raspbee/Raspbee 2)** : Testado e validado pela equipe Jeedom. *(Não é necessário instalar o aplicativo deCONZ)*
-	**EZSP (Laboratórios de Silício)** : Testado, validado
-	**XBee** : Não testado pela equipe Jeedom.
-	**Zigate** : Não testado pela equipe.
-	**ZNP (Texas Instruments)** : Testado, validado

>**IMPORTANTE**
>
> Em primeiro lugar, você deve atualizar o firmware da sua chave (especialmente para EZSP, chave popp em particular), caso contrário, o demônio não pode funcionar, você deve consultar a documentação do fabricante. Não hesite em consultar a página oficial do Zigbee2MQTT para encontrar o firmware disponível para sua chave [aqui](https://www.zigbee2mqtt.io/guide/adapters/)

Além disso, o plugin está equipado com muitas ferramentas que permitem :

- lá **atualização de mods** em OTA,
- visualização de nós e **gráfico de rede**,
- a gestão de **grupos**,
- o apoio de **vinculativo**,
- o cuidado de **Link de toque**

>**MUITO IMPORTANTE**
>
> Devido à valsa de firmware/hardware por parte do fabricante e possíveis bugs em seu firmware (sem necessariamente ter a possibilidade de atualizá-lo do Jeedom porque a maioria dos fabricantes não os comunica), é possível que um módulo marcado como compatível apenas parcialmente (um botão que não funciona ou nenhuma diferença entre o botão para cima e para baixo, nenhum aumento de CO2 ou um sensor de módulo...). Infelizmente, não podemos avisá-lo com antecedência na lista porque :
>- não temos necessariamente o módulo em questão, muitos módulos são adicionados pelo feedback do usuário
>- de uma semana para outra o módulo pode ter mudado (novo hardware, novo firmware ou mesmo um novo módulo que não mudou de nome)
>Em nenhuma hipótese a Jeedom poderá ser responsabilizada em caso de falta(s) de função(ões) (ou mesmo de módulo não funcionando) mesmo sendo indicado como compatível. Assim como você, estamos sujeitos às alterações impostas pelo(s) fabricante(s). . (s)

# Configuration

## Configuração do plug-in

**Plug-in jeezigbee** usa dependências que devem ser instaladas primeiro (dependendo do seu sistema, isso pode levar várias horas)).

O plugin usa o protocolo MQTT para conversar com Jeedom; portanto é necessário ter o plugin do gerenciador MQTT instalado e configurado corretamente (na prática, se não for o caso, o Jeedom deve fazer tudo sozinho).

Depois que as dependências estiverem instaladas, você pode configurar um controlador Zigbee digitando **tipo de controlador, porta do controlador**, então (re)inicie o daemon.

Você pode na configuração do plugin :

- Escolha a versão do Zigbee2MQTT simplesmente colocando o número da versão no campo previsto (o botão ao lado deste campo permite ver as versões disponíveis). Depois é só salvar e reiniciar as dependências
- O plugin também informa se você possui (pelo menos) a versão recomendada pelo jeedom, não é obrigatório mas recomendado estar nesta versão ou superior
- Você pode alterar a porta de escuta da interface Zigbee2MQTT (não é recomendado tocar nela, a menos que você saiba o que está fazendo)
- É possível que os controladores EZSP Elelabs atualizem o firmware

>**IMPORTANTE**
>
> Existem 2 modos para o plugin : local, está tudo no seu Jeedom, este é o modo recomendado. Para usuários avançados, é possível usar o modo remoto; neste caso o Jeedom não gerencia o Zigbee2mqtt, ele deve ser instalado por você (geralmente em uma janela de encaixe no jeedom ou em outra máquina). Tenha cuidado no modo remoto, o gerenciador Mqtt e o Zigbee2MQTT devem estar conectados ao mesmo corretor mqtt (mosquitto)

>**IMPORTANTE**
>
> Durante o primeiro uso se você estiver no modo local é ABSOLUTAMENTE necessário lançar as dependências (mesmo que ok). Observe que para atualizar o Zigbee2MQTT você só precisa lançar as dependências, você pode ver as novas versões do Zigbee2MQTT [aqui](https://github.com/Koenkk/zigbee2mqtt/tags)

Para ir para Zigbee2MQTT a partir do plugin Jeezigbee (por exemplo para forçar a exclusão de um módulo) você deve ir para a configuração do plugin Jeezgibee e na seção "Configuração", clicar em Interface z2m "Aqui" você abrirá a web Zigbee2MQTT interface, uma vez no módulo será solicitado o identificador encontrado na página de configuração do Jeezigbee.

Atenção isso só é possível se você estiver em instalação local do zigbee2mqtt.

## Compatibilité

Você pode encontrar [aqui](https://www.zigbee2mqtt.io/supported-devices/) a lista de módulos compatíveis com o plugin

>**IMPORTANTE**
>
>No momento em que o plug-in faz autoconfiguração, ou seja, não contém nenhuma configuração específica para um determinado módulo, ele recupera as informações do zigbee2mqtt para gerar automaticamente os comandos. Isso implica que qualquer módulo compatível com zigbee2mqtt deve funcionar imediatamente com o plug-in. Por outro lado, isso tem como consequência gerar muitos comandos que nem sempre são úteis. Estamos em processo de adicionar um sistema de configuração específico para determinados módulos e assim melhorar os comandos e sua apresentação

## Configuração do equipamento

### Incluir um módulo Zigbee

A inclusão é a parte mais complexa do Zigbee. Embora simples, a operação muitas vezes tem que ser repetida várias vezes para conseguir. Do lado do plugin Jeedom é fácil, basta clicar no botão **Incluir modo** após o qual você tem 3 minutos para incluir o equipamento.

O procedimento de inclusão é específico para cada módulo. Por favor, consulte a documentação do fabricante para alcançá-lo.

>**TRUQUE**
>
>Não se esqueça de redefinir *(reset)* do módulo antes de qualquer inclusão. Você também deve pensar cuidadosamente, durante a inclusão, em manter o módulo acordado (tome cuidado para não mantê-lo acordado demais e iniciar um reset sem fazer isso de propósito))

Como de costume, você pode dar um nome ao seu equipamento, uma categoria ou um objeto pai e ativá-lo ou torná-lo visível.

Outros parâmetros mais específicos também estão acessíveis :

- **Identificação** : identificador de dispositivo exclusivo. Mesmo durante uma reinclusão ou se você alterar o tipo de controlador Zigbee.
- **Controlador Z2m** : permite selecionar o controlador Zigbee em comunicação com o equipamento (no momento o plugin não suporta múltiplos controladores)
- **Autoatualização (cron)** : permite adicionar um cron que solicita a atualização dos valores do equipamento (atenção, nada garante que o módulo realmente os atualizará, ele deve suportá-lo)
- **Não permitir mensagens se o equipamento não for visto há mais de (s))** : cada dispositivo zigbee tem uma data de "última comunicação" (visto pela última vez) em casos raros é possível que o Zigbee2MQTT envie mensagens do dispositivo mesmo que ele não esteja mais lá (não esteja mais conectado ou sem bateria restante). Neste caso para evitar a "falsa" atualização dos comandos é possível dizer "se a última comunicação do equipamento for anterior a X segundos então ignore as atualizações dos valores". Observe que esta opção é reservada para usuários avançados.

A parte **Informação** permite ver o modelo do equipamento. Encontramos também o visual do equipamento (não modificável porque vem do zigbee2mqtt) e acesso à configuração do módulo

Na aba **Pedidos**, encontramos, como sempre, os comandos que permitem interagir com o módulo.

### Configuração do módulo

Esta é uma janela importante que você encontrará aqui :

- Informação : contém todas as informações úteis sobre o seu módulo (modelo, fabricante, status, fonte de alimentação, OTA, descrição, endpoints....)
- Configuração : contém os parâmetros de configuração do seu módulo, se houver algum (frequentemente não há nenhum por isso está vazio)
- Vinculativo : Aqui você encontrará o link existente (em geral você sempre tem uma linha para vincular seu módulo ao seu coordenador). Você também pode adicionar uma ligação (link) entre dois módulos, tenha cuidado para ativar os módulos na bateria ao binging. Importante o binding depende dos fabricantes (e não do plugin), alguns fabricantes não suportam direct binding e é absolutamente necessário ter um grupo, também existem incompatibilidades entre fabricantes (infelizmente não podemos listá-los)
- Comunicando : se o módulo suportar, você pode configurar aqui a frequência de envio de informações do módulo para o coordenador (Jeedom portanto)
- Informação bruta : é apenas para suporte, você será perguntado se tiver algum problema com um módulo

### Módulo não reconhecido

Se o módulo não for reconhecido pelo plug-in (sem comando), você deve procurar [aqui](https://www.zigbee2mqtt.io/supported-devices/), se for suportado, você deve entrar em contato com o suporte do Jeedom (ou escrever na comunidade) para ver por que. Se o seu módulo não estiver na lista de módulos suportados pelo Zigbee2MQTT, você deverá aguardar que ele seja adicionado.

>**INFORMAÇÃO**
>
>A equipe Jeedom reserva-se o direito de recusar qualquer pedido de integração. É sempre melhor optar por equipamentos cuja compatibilidade já esteja confirmada.

## Atualização de mods OTA

Atualizações OTA *(Over-The-Air)* são as atualizações de firmware dos módulos. O processo pode demorar algum tempo (várias horas dependendo do número de módulos) mas permite uma maior fiabilidade da rede Zigbee em geral. Para poder atualizar um módulo, o fabricante deve comunicar seu firmware :

- Ré **Ikea** E **Ledavance**, os firmwares são disponibilizados diretamente online, onde o plugin irá recuperá-los.
- Para outros (ver [aqui](https://github.com/Koenkk/zigbee-OTA/tree/master/images)), o fabricante fornece uma atualização não oficial em alguns casos.
- Para todos os outros, não é possível atualizar o módulo do plugin.

Você pode, a partir da configuração do módulo, solicitar uma verificação de firmware, bem como iniciar a atualização OTA.

# Greenpower

A tecnologia Greenpower é normalmente suportada pelo plugin; está sendo qualificado pela Jeedom SAS

# Redes Zigbee

A constituição de uma rede Zigbee de boa qualidade é muito auxiliada pelas ferramentas disponibilizadas no plugin. Acesse a página geral do plugin listando todos os equipamentos e clique no botão **Redes Zigbee** para acessar várias informações e ações em torno da rede Zigbee, bem como o gráfico representativo da mesma.

## Configuration

É aqui que você encontra todas as configurações avançadas do Zigbee2MQTT, cuidado, esta é uma lista gerada a partir do Zigbee2MQTT (daí o fato de tudo estar em inglês)

## Gráfico de rede

O gráfico de rede fornece uma visão geral da rede Zigbee e da qualidade das comunicações com os diferentes módulos. Lembre-se de lançar uma atualização de tempos em tempos (demora cerca de dez minutos e pode deixar sua rede zigbee lenta), uma vez que a atualização for concluída, você deve fechar a janela **Redes Zigbee** e reabri-lo.

>**IMPORTANTE**
>
>O gráfico de rede existe apenas para fins informativos e pode não ser exato (particularmente em módulos de bateria que não informam frequentemente ou mesmo às vezes seu roteamento)

## Otimize a rede

Para otimizar a confiabilidade da sua rede Zigbee, **é mais do que recomendado ter pelo menos 3 módulos roteadores permanentemente alimentados e evitar desconectá-los**. De fato, durante nossos testes notamos uma melhora significativa na confiabilidade e resiliência da rede Zigbee ao adicionar módulos roteadores. Também é aconselhável incluí-los primeiro, caso contrário, você terá que esperar de 24 a 48 horas para o "end-device" *(módulos não roteadores)* descobri-los.

Outro ponto importante, é possível, durante a remoção de um módulo roteador, que parte do "end-device" *(módulos não roteadores)* está perdido por um tempo mais ou menos longo *(em dez horas ou mais)* ou mesmo permanentemente e você tem que incluí-los novamente.
Infelizmente isso se deve à forma como o fabricante planejou a integração de seu hardware em uma rede Zigbee e, portanto, não pode ser corrigido pelo plugin que não gerencia a parte de roteamento.

Por fim, e mesmo que possa parecer óbvio para alguns, lembramos que os gateways Zigbee em Wifi ou remoto são, por definição, menos confiáveis que os gateways USB. A equipa Jeedom aconselha assim a utilização de um gateway Zigbee em USB.

# Conversor externo

Zigbee2mqtt permite adicionar conversores externos (para suportar módulos não suportados oficialmente). Para adicionar um conversor externo, basta na configuração do plugin (Plugin -> Gerenciamento de plugins -> Jeezigbee) clicar no botão "Editar" na linha do conversor e soltar/editar seu conversor na pasta que o jeedom lhe fornecer. watch.

>**IMPORTANTE**
>
>O suporte não cobre a parte de criação/utilização de conversores externos.

# Comandos específicos

## Controle infravermelho

O caso de módulos que enviam códigos IR é um pouco específico porque não há uma lista predefinida de códigos IR, então você mesmo deve encontrar o comando IR e, em seguida, adicionar um comando com ID lógico : `ir_code_to_send::SEU CÓDIGO IR

# FAQ

[Link](https://www.zigbee2mqtt.io/guide/installation/20_zigbee2mqtt-fails-to-start.html) para as perguntas frequentes do Zigbee2mqtt

>**Tenho muitas mensagens informativas (azul) no canto inferior direito e não entendo nada**
>
>No momento, estamos classificando as mensagens úteis ou não que o Zigbee2mqtt retorna; mas, por padrão, preferimos exibir todos.

>**Tenho erros estranhos em módulos de baterias ou problemas com inclusão**
>
>Percebemos que boa parte dos problemas dos módulos na bateria são por conta das baterias ou possivelmente problemas de reset dos módulos antes da inclusão. Mesmo que pareçam novas, é aconselhável testar com baterias novas para descartar essa hipótese.

>**Meu módulo descarrega suas baterias muito rapidamente**
>
>Verifique se você está em um firmware atualizado em sua chave zigbee. Em 90% dos casos, o consumo excessivo de bateria vem do firmware que está com problema.

>**Não consigo incluir novos módulos**
>
>Várias possibilidades para isso :
>- Você já tem muitos módulos e excedeu o limite do número de módulos ativos (geralmente 31). Você deve tentar adicionar nós de roteador (tenha cuidado, pois não há um padrão claro para nós de roteador, portanto, há incompatibilidades entre fabricantes...)
>- Você está em Conbee : tente desconectar a chave por 2 minutos, recolocá-la e reiniciar o daemon; é uma doença conhecida das chaves Conbee (mesmo sob deconz), você precisa de uma "reinicialização a frio" para que a inclusão funcione novamente
>- Você tem um SSD conectado a USB3, tente conectá-lo a uma porta USB2

>**Não tenho tantos comandos quanto botões no meu controle remoto**
>
>No meu controle remoto eu tenho por exemplo 2 botões mas na lista de comandos Jeedom eu só tenho um comando !!! É normal; o comando no jeedom assume um valor diferente dependendo do botão físico pressionado. A maneira mais fácil de ver é ir em "Configuração avançada" (canto superior direito) e depois em "Logs" (também no canto superior direito) e pressionar os botões do controle remoto para ver os diferentes valores dos comandos.

>**Não tenho a imagem do meu módulo**
>
>Nada sério, isso não significa que não possa ser usado ou reconhecido, a imagem serve apenas como ilustração. Se você realmente quiser, você terá que entrar em contato com o suporte para que eles possam ver por que você não o tem (geralmente é devido a um caractere não padrão no nome do modelo do módulo)

>**Altere o PAN_ID e a chave de rede**
>
>Uma vez feita a alteração na interface do jeedom ou no zigbee2mqtt, você deve parar o daemon, deletar o arquivo coordenador_backup.json (está em `/var/www/html/plugins/z2m/data`), reinicie o daemon.

>**Recebi o erro `Erro: Erro de redefinição: Error: {"sequence":-1} após 10000ms` e uma chave ELELABS ou uma caixa Atlas**
>
>Você deve atualizar o firmware da sua chave zigbee, para fazer isso na configuração do plugin jeezigbee clique em atualizar firmware e preencha os diferentes campos da janela e valide. Tenha cuidado para não fazer isso em uma caixa luna, pois quebra a chave zigbee. Se a atualização não funcionar, você deve tentar fazer uma “Correção do Bootloader".

>**Meu equipamento não é reconhecido**
>
>Se o seu equipamento não for reconhecido é porque ainda não é suportado pela biblioteca Zigbee2mqtt. É possível criar um conversor para o seu equipamento. Você deve consultar o documento [Suporte para novos dispositivos](https://www.zigbee2mqtt.io/advanced/support-new-devices/01_support_new_devices.html) e também para hardware Tuya. [Suporta novos dispositivos TuYa](https://www.zigbee2mqtt.io/advanced/support-new-devices/02_support_new_tuya_devices.html).
>
>Em qualquer caso, devemos abrir uma saída [GitHub aqui](https://github.com/Koenkk/zigbee2mqtt/issues)
>
>Depois que o conversor for criado, você terá que colocá-lo no plugin para testá-lo.
>1) No editor de arquivos Jeedom,
>- Crie uma pasta com a marca do seu equipamento em plugin/z2m/core/converters>
>- Entre nesta pasta
>- Crie um arquivo chamado Marca de referência do equipamento.js Para o exemplo usaremos Tuya_TZE204_81yrt3lo.js
>- Neste arquivo, cole os elementos do conversor.
>- Salve e feche o arquivo.
>
>2) Reinicie o daemon do plugin

>**Chave SONOFF modelo P: Piscando e corrigindo o problema de “tipo de registro desconhecido 3”**
>
>Uma explicação sobre como piscar a chave foi proposta no fórum. Se você tiver o erro "unown record type3", é necessário converter seu arquivo .hexadecimal para .bin conforme explicado no tutorial. Obrigado ao JeedGeek pela explicação [aqui](https://community.jeedom.com/t/flasher-sa-cle-usb-zigbee-sonoff-p-avec-lutilitaire-ti-sous-windows/109453)

>**Eu tenho um erro ao atualizar o firmware no Luna**
>
>Você deve desativar o daemon do plugin (Plugin -> Gerenciamento de plugins -> Jeezigbee então Gerenciamento automático -> desativar), reiniciar o luna (Configurações -> Sistema -> Reiniciar). Assim que a caixa for reiniciada, você deve reiniciar a atualização do firmware. Observe que isso pode levar até 10 minutos. Não se esqueça, uma vez concluída a atualização, de reativar o gerenciamento automático do daemon.
