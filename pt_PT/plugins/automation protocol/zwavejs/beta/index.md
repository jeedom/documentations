# Plugin Z-Wave JS

O plugin Z-wave JS permite **controle total do protocolo de automação residencial Z-Wave em Jeedom** baseado no trabalho realizado em torno da famosa biblioteca **IU do Z-Wave JS**.

O plugin Z-wave JS torna as transmissões mais confiáveis e seguras usando o **Protocolo MQTT**, oferecendo, ao mesmo tempo, possibilidades avançadas de gerenciamento de sua rede Z-Wave para os usuários mais experientes.

>**IMPORTANTE**
>
>Este plugin é compatível com o Debian 11 "Bullseye" e, portanto, é o plugin oficial a ser preferido para gerenciar sua rede Z-Wave no Jeedom.

# Configuration

Depois de instalar e ativar o plugin, a instalação das dependências deve começar, a menos que o gerenciamento automático tenha sido desativado anteriormente. Neste caso, você terá que clicar no botão **Reviver** para iniciar esta fase de instalação. O plug-in oficial **Gerente MQTT** fazendo parte das dependências necessárias, ele será instalado e ativado automaticamente durante a operação, caso ainda não seja o caso.

O restante das dependências consiste em baixar, compilar e configurar a biblioteca **IU do Z-Wave JS**.

>**EM FORMAÇÃO**
>
>A primeira instalação de dependências, incluindo uma fase de compilação, provavelmente durará várias dezenas de minutos, dependendo da configuração do seu hardware. As atualizações de dependência são muito mais rápidas de instalar depois.

## Configuração do plug-in

Com relação à configuração do plugin, o ponto essencial é a seleção correta do **Porta do controlador Z-Wave** correspondente à interface física na qual o controlador está conectado.

Outras configurações possíveis são :

- **Moda** : permite que você escolha se deseja operar em modo local (por padrão e altamente recomendado) ou remoto (caso você mesmo tenha instalado e configurado o zwavejs, tenha cuidado, é claro que deve estar no mesmo brocker mqtt que jeedom). O modo remoto tem algumas restrições : 
- não há mais gerenciamento de demônios, é claro
- mais gerenciamento de dependências
- mais gerenciamento de versão zwavejs
- perda de certas detecções automáticas nas classes zwave do módulo
- é claro que não há configuração automática do zwavejs, cabe a você gerenciar o arquivo conf com todas as informações contidas nele
- os módulos específicos adicionados pelo jeedom (além daqueles suportados pelo zwavejs) não serão mais compatíveis

- **Aplique a configuração recomendada** : aplica diretamente o conjunto de configuração recomendado pela equipe Jeedom ao incluir um novo módulo *(conseillé)*.

- **Excluindo dispositivos excluídos** : remove automaticamente os dispositivos excluídos da rede Z-Wave se marcado. Caso contrário, o equipamento é mantido em Jeedom mesmo que tenha sido excluído da rede. O equipamento terá então que ser excluído manualmente ou reutilizado atribuindo-lhe um novo identificador Z-Wave.

- **Prefixo MQTT** : permite especificar o prefixo a ser usado no MQTT *(padrão `zwave`)*.

### Chaves de segurança

As chaves de segurança devem ser mantidas em local seguro. Se você perder essas chaves, os dispositivos incluídos no modo de segurança precisarão ser pareados novamente. As chaves podem ser especificadas, se os campos estiverem vazios ou inválidos o plugin irá gerá-los e você poderá visualizá-los mais tarde.

>**IMPORTANTE**
>
>Se o seu controlador foi usado com o plugin Openzwave e você incluiu módulos no modo seguro, a chave S0 é : `0102030405060708090A0B0C0D0E0F10`.

## Gerente MQTT

Conforme explicado no preâmbulo, o plugin Z-Wave JS requer suporte para o protocolo MQTT para se comunicar, o plugin oficial **Gerente MQTT** servirá, portanto, de suporte para essas comunicações.

Vários cenários são possíveis :

- **Você ainda não está usando um broker MQTT** : Neste caso você não tem nada para fazer. Plug-ins **Z-Wave JS** e **Gerente MQTT** trocará as informações e configurações necessárias automaticamente *(um broker `Mosquitto` será instalado localmente na máquina)*.

- **Você já está usando o plugin MQTT Manager** : Nenhuma intervenção é necessária, o plugin Z-Wave JS recuperará automaticamente as informações de conexão com o broker MQTT.

- **Você já está usando um broker MQTT por meio de um plug-in diferente do MQTT Manager** : Nesta situação, você deve selecionar o modo **corretor remoto** e fornecer informações de login *(endereço e autenticação)* na configuração do plug-in do MQTT Manager.

- **Você deseja usar um broker MQTT no Docker** : Tudo o que você precisa fazer é selecionar o modo **docker do corretor local** na configuração do plugin MQTT Manager antes de instalar o `Mosquitto`.

De qualquer forma, o daemon de plug-in do MQTT Manager deve ser iniciado antes que você possa prosseguir. Caso contrário, uma mensagem irá avisá-lo, impedindo o início do daemon Z-Wave JS.

## Abra o plug-in Zwave

Também é importante abordar o caso da presença do plugin OpenZwave em paralelo com o plugin Z-Wave JS, o tempo para mudar de um para o outro por exemplo *(Ver parágrafo [**Migração do OpenZwave**](#Migration%20depuis%20OpenZwave))*.

Em primeiro lugar, você deve saber que não há absolutamente nenhum risco em usar os plugins Z-Wave JS e OpenZwave em paralelo. Mesmo em caso de dificuldade com o plugin Z-Wave JS, será suficiente parar seu daemon e reiniciar o do plugin OpenZwave para encontrar uma rede Z-Wave exatamente idêntica e funcional.

Portanto, é necessário interromper o gerenciamento automático e, em seguida, interromper o daemon do plug-in OpenZwave para poder iniciar o daemon do plug-in Z-Wave JS. Novamente, se não, uma mensagem irá avisá-lo, impedindo o início do daemon Z-Wave JS.

>**IMPORTANTE**
>
>Não exclua nenhum equipamento do plug-in OpenZwave prematuramente, mesmo que seja desativado durante o teste!

## 1ª inicialização do daemon

A menos que instruído de outra forma, o daemon Z-Wave JS agora pode ser iniciado. Caso contrário, uma mensagem deve aparecer na página de configuração do plugin para identificar o motivo do bloqueio.

Se você usar o plugin Z-Wave JS com um controlador em branco, a rede Z-Wave é imediatamente iniciada e disponível, pronta para inclusões de módulos.

No caso de uso com um controlador já incluído em uma rede Z-Wave, deve-se deixar o plugin funcionar, que automaticamente fará o upload do equipamento no Jeedom à medida que os módulos forem entrevistados. A primeira descoberta total de uma rede Z-Wave provavelmente levará muito tempo, dependendo do tipo de módulos usados e de sua frequência de comunicação.

Os módulos aparecem em duas etapas :
- Primeiro com seu 'node id' sem imagem e sem identificação.
- Eles são então identificados em uma segunda vez.

Uma vez que todos os módulos na rede são iniciados e, portanto, identificados, é importante acordar os módulos nas baterias ou esperar que eles acordem. É somente a partir deste momento que podemos considerar a rede como totalmente iniciada.

>**EM FORMAÇÃO**
>
>Ao contrário do plugin OpenZwave, após esta primeira fase de entrevista, as reinicializações da rede são instantâneas.

Se, ao final desta fase *(que pode ser longo, vamos lembrar)*, você achar que um módulo que foi bem suportado pelo plug-in Openzwave não seria suportado pelo plug-in Z-Wave JS, nós o convidamos a consultar o parágrafo [**Módulo não ou mal reconhecido**](#Module%20non%20ou%20mal%20reconnu).

## Configuração do módulo

Ao contrário do plugin Openzwave, não há uma seção dedicada para configurar módulos. De fato a configuração de um módulo é feita através da classe de comando Configuração. Isso é, portanto, visível entre os outros comandos de classe do módulo em **Valores**.

### Nó

Este botão presente na página de um dispositivo permite visualizar as informações do módulo através de várias abas :

- **Resumo** : Exibe todas as informações de identificação do módulo, bem como informações de status.

- **Ações** : Permite realizar ações técnicas em um nó. Cada ação é descrita sucintamente.
	>**EM FORMAÇÃO**
	>
	>Normalmente, você nunca deve tocar nessas funções, o plug-in lida com isso por conta própria.

- **Estatisticas** : como o próprio nome sugere, permite ver as estatísticas de comunicação do módulo.

- **Árvore** : reúne todas as informações anteriores na forma de um json técnico.

### Valeurs

Este botão na página do equipamento permite obter a lista de todos os comandos da classe Z-Wave gerenciados pelo módulo.

Cada um pode ser desdobrado clicando nele para ver todos os controles *(útil ou não)* relacionado a este comando de classe.

Muitas possibilidades são oferecidas por esta janela :

- Visualizar valores de informações,
- Alterando o valor de uma ação,
- Alterar as configurações do módulo,
- Crie automaticamente um comando info no Jeedom *(se você precisar ou se estiver faltando na configuração do Jeedom)*,
- Crie automaticamente um comando de ação no Jeedom *(se você precisar ou se estiver faltando na configuração do Jeedom)*,
- Configurar sondagem *(comunicação forçada)*. Para ser usado apenas no caso em que o comportamento padrão do módulo não permite fazer o contrário, ou seja, quase nunca.

### Groupe

Este botão na página de um dispositivo é usado para gerenciar as associações do módulo e para :

- Ver associações atualmente ativas,
- Excluir eles,
- Adicione mais.

## Inclusões/Exclusões

O botão **Inclusões** presente na página agrupando todos os equipamentos Z-Wave JS permite alternar o controlador para o modo **Inclusão** *(padrão, S0, S2)* ou no modo **Exclusão**.

>**EM FORMAÇÃO**
>
>No momento, as inclusões S2 não são possíveis diretamente do plug-in. Este recurso será implementado em uma atualização futura, o mecanismo de plug-in já é bem compatível com S2.

## Synchroniser

Lembre-se, no Z-Wave, todos os módulos que compõem a rede estão diretamente associados ao controlador. Alguns controladores com bateria *(como o Z-Stick GEN5 da Aeon-labs)* até permitem que você inclua módulos sem estar conectado a uma caixa.

O botão **Para sincronizar** permitirá então criar automaticamente no Jeedom o equipamento identificado pelo controlador. Na mesma ideia, os equipamentos correspondentes aos periféricos excluídos do controlador serão excluídos automaticamente se a opção **Excluindo dispositivos excluídos** está ativado na configuração geral do plugin.

## Rede Z-Wave

### Resumo

### Actions

### Statistiques

### Gráfico de rede

### Tabela de roteamento

## Santé

## Statistiques

# Compatibilité

# Solução de problemas e diagnóstico

## Migração do OpenZwave

Antes de considerar mudar permanentemente do plugin OpenZwave para o plugin Z-Wave JS, é essencial garantir que todos os módulos de rede sejam totalmente suportados. Esta etapa pode facilmente levar vários dias para validar todas as possibilidades e cenários.

Então, uma vez certo que o plugin OpenZwave não é mais essencial, você pode usar o [**substituição de equipamentos e controles**](https://doc.jeedom.com/pt_PT/core/4.3/replace){:target="\_blank"} do núcleo para migrar rápida e facilmente seu equipamento existente para o novo plugin.

## Módulo não ou mal reconhecido

Se você achar que um módulo não é ou é mal reconhecido pelo plug-in Z-Wave JS **enquanto era bem suportado pelo plug-in OpenZwave**, você deve primeiro garantir que os dados presentes na janela **Valores** *(acessível a partir da página do equipamento)* atualizar bem quando o módulo é acionado fisicamente.

Então, uma vez certo que o próprio módulo é bem reconhecido e que seus valores estão atualizados, se determinados comandos permanecerem não funcionais, será necessário'[abrir um pedido de suporte Jeedom](https://doc.jeedom.com/pt_PT/premiers-pas/#Les%20demandes%20de%20support%20(ou%20tickets)){:target="\_blank"} fornecendo imperativamente os seguintes elementos :
- Fabricante e referência exata do módulo em questão,
- Descrição de comandos não funcionais,
- Captura de tela de **Informações do nó** na janela de mesmo nome,
- Capturas de tela de **cada bloco** da janela de **Valores de nó**

Para ir além, você pode ativar fisicamente o módulo e fazer screenshots das mudanças consecutivas de valor, ainda na janela Valores do nó.

>**IMPORTANTE**
>
>Insistimos no fato de que a equipe inicialmente processará apenas solicitações de configurações de módulos incluindo todos os elementos solicitados acima e já funcionais com o plug-in Openzwave. Você pode não conseguir adicionar suas capturas de tela ao criar o ticket, não se preocupe, você poderá enviá-las mais tarde em resposta à sua solicitação.

>**EM FORMAÇÃO**
>
>Ao operar fisicamente o módulo, você poderá identificar a linha cujos valores mudam de acordo na janela Node Values e cujo comando não seria criado ou funcional. No final da linha encontra-se um botão com um ícone em forma de caneta que lhe permite criar automaticamente o comando correspondente, dando-lhe assim a possibilidade de poder utilizar o seu módulo apesar de uma configuração ausente ou errada.

<!-- ## Remplacer un module défaillant -->

# FAQ

>**É possível usar Z-Wave JS UI em modo remoto ?**
>
>O roteiro da equipe Jeedom em relação ao plugin Z-wave JS na verdade prevê a adição desta possibilidade nos próximos meses sem qualquer senso de urgência porque não é uma funcionalidade essencial para o bom funcionamento do plugin.

>**É possível ativar o servidor websocket Z-Wave JS UI ?**
>
>Para o bom funcionamento do plugin e do Jeedom em geral, não é possível ativar o servidor websocket Z-Wave JS UI, porém o próximo modo remoto permitirá os mesmos casos de uso.
