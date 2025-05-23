# Registro de alterações Jeedom V4.5

# 4.5

- Capacidade de tornar as colunas da tabela redimensionáveis (apenas a lista de variáveis no momento, isto será estendido a outras tabelas se necessário) [LINK](https://github.com/jeedom/core/issues/2499)
- Adicionado um alerta se o espaço em disco do jeedom estiver muito baixo (a verificação é feita uma vez por dia) [LINK](https://github.com/jeedom/core/issues/2438)
- Adicionado um botão na janela de configuração do pedido no campo de cálculo de valor para buscar um pedido [LINK](https://github.com/jeedom/core/issues/2776)
- Capacidade de ocultar determinados menus para usuários com direitos limitados [LINK](https://github.com/jeedom/core/issues/2651)
- Os gráficos são atualizados automaticamente quando novos valores chegam [LINK](https://github.com/jeedom/core/issues/2749)
- Jeedom adiciona automaticamente a altura da imagem ao criar widgets para evitar problemas de sobreposição no celular [LINK](https://github.com/jeedom/core/issues/2539)
- Redesenho da parte de backup em nuvem [LINK](https://github.com/jeedom/core/issues/2765)
- **DEV** Configurando um sistema de filas para execução de ações [LINK](https://github.com/jeedom/core/issues/2489)
- Tags de cenário agora são específicas para a instância do cenário (se você tiver dois lançamentos de cenário muito próximos, as tags do último não sobrescreverão mais as do primeiro) [LINK](https://github.com/jeedom/core/issues/2763)
- Mudança para a parte de gatilho dos cenários : [LINK](https://github.com/jeedom/core/issues/2414)
  - ``triggerId()`` agora está obsoleto e será removido em futuras atualizações principais. Se você tiver ``triggerId() == 587`` deve ser substituído por ``#trigger_id# == 587``
  - ``triggerValue()`` agora está obsoleto e será removido em futuras atualizações principais. Se você tiver ``triggerValue() == 10`` deve ser substituído por ``#trigger_value# == 10``
  - ``#trigger#`` : Talvez :
    - ``api`` se o lançamento foi acionado pela API,
    - ``TYPEcmd`` se a inicialização foi acionada por um comando, com TYPE substituído pelo ID do plugin (por exemplo, virtualCmd),
    - ``schedule`` se foi lançado por programação,
    - ``user`` se foi iniciado manualmente,
    - ``start`` para um lançamento na startup Jeedom.
  - ``#trigger_id#`` : Se for um comando que desencadeou o cenário então esta tag assume o valor do id do comando que o desencadeou
  - ``#trigger_name#`` : Se for um comando que disparou o cenário então esta tag assume o valor do nome do comando (na forma [objeto][equipamento][comando])
  - ``#trigger_value#`` : Se for um comando que acionou o cenário então esta tag assume o valor do comando que acionou o cenário
  - ``#trigger_message#`` : Mensagem indicando a origem do lançamento do cenário
- Gerenciamento aprimorado de plug-ins no github (sem mais dependências de uma biblioteca de terceiros) [LINK](https://github.com/jeedom/core/issues/2567)
- Removendo o antigo sistema de cache. [LINK](https://github.com/jeedom/core/pull/2799)
- Possibilidade de deletar os blocos IN e A enquanto espera por outro cenário [LINK](https://github.com/jeedom/core/pull/2379)
- Corrigido um bug no Safari em filtros com acentos [LINK](https://github.com/jeedom/core/pull/2754)
- Corrigido um bug na geração de informações *tipo genérico* nos cenários [LINK](https://github.com/jeedom/core/pull/2806)
- Adicionada confirmação ao abrir o acesso ao suporte na página de gerenciamento de usuários [LINK](https://github.com/jeedom/core/pull/2809)
- Melhorou o sistema cron para evitar algumas falhas de inicialização [LINK](https://github.com/jeedom/core/commit/533d6d4d508ffe5815f7ba6355ec45497df73313)
- Adição de cenários de condição ao assistente de condição *maior ou igual* E *menor ou igual* [LINK](https://github.com/jeedom/core/issues/2810)
- Capacidade de excluir pedidos da análise de pedidos mortos [LINK](https://github.com/jeedom/core/issues/2812)
- Corrigido um bug na numeração do número de linhas nas tabelas [LINK](https://github.com/jeedom/core/commit/0e9e44492e29f7d0842b2c9b3df39d0d98957c83)
- Adicionado mapa de rua aberto.org em domínios externos permitidos por padrão [LINK](https://github.com/jeedom/core/commit/2d62c64f0bd1958372844f6859ef691f88852422)
- Atualização automática do arquivo de segurança do Apache ao atualizar o núcleo [LINK](https://github.com/jeedom/core/issues/2815)
- Corrigido um aviso nas visualizações [LINK](https://github.com/jeedom/core/pull/2816)
- Corrigido um bug no valor de seleção do widget padrão [LINK](https://github.com/jeedom/core/pull/2813)
- Corrigido um bug se um comando excedesse seu mínimo ou máximo, o valor mudava para 0 (em vez de mínimo/máximo) [LINK](https://github.com/jeedom/core/issues/2819)
- Corrigido um bug exibindo o menu de configurações em determinados idiomas [LINK](https://github.com/jeedom/core/issues/2821)
- Possibilidade nos triggers programados dos cenários utilizar cálculos/comandos/tags/fórmulas dando como resultado o horário de lançamento no formato Gi (horas sem zero inicial e minutos, exemplo para 9h15 => 915 ou para 11h40 tarde => 2340) [LINK](https://github.com/jeedom/core/pull/2808)
- Possibilidade de colocar uma imagem personalizada do equipamento nos plugins (se o plugin suportar), isto é feito na configuração avançada do equipamento [LINK](https://github.com/jeedom/core/pull/2802) [LINK](https://github.com/jeedom/core/pull/2852)
- Adicionando o nome do usuário que lançou o cenário à tag ``#trigger_value#`` [LINK](https://github.com/jeedom/core/pull/2382)
- Corrigido um erro que poderia ocorrer ao sair do painel antes de terminar de carregar [LINK](https://github.com/jeedom/core/pull/2827)
- Corrigido um bug na página de substituição ao filtrar objetos [LINK](https://github.com/jeedom/core/issues/2833)
- Abertura aprimorada do changelog principal no iOS (não mais em um pop-up) [LINK](https://github.com/jeedom/core/issues/2835)
- Janela de criação avançada de widget aprimorada [LINK](https://github.com/jeedom/core/pull/2836)
- Melhorou a janela de configuração de comando avançada [LINK](https://github.com/jeedom/core/pull/2837)
- Corrigido um bug na criação de widgets [LINK](https://github.com/jeedom/core/pull/2838)
- Corrigido um bug na página do cenário e na janela de adição de ação que não funcionava mais [LINK](https://github.com/jeedom/core/issues/2839)
- Corrigido um bug que poderia alterar a ordem dos comandos ao editar o painel [LINK](https://github.com/jeedom/core/issues/2841)
- Corrigido um erro de javascript nos logs [LINK](https://github.com/jeedom/core/issues/2840)
- Adicionada segurança na codificação json em ajax para evitar erros devido a caracteres inválidos [LINK](https://github.com/jeedom/core/commit/0784cbf9e409cfc50dd9c3d085c329c7eaba7042)
- Se um comando do equipamento for do tipo genérico “Bateria” e possuir a unidade “%” então o núcleo atribuirá automaticamente o nível da bateria do equipamento ao valor do comando [LINK](https://github.com/jeedom/core/issues/2842)
- Melhoria de textos e correção de erros [LINK](https://github.com/jeedom/core/pull/2834)
- Ao instalar dependências npm, o cache é limpo antes [LINK](https://github.com/jeedom/core/commit/1a151208e0a66b88ea61dca8d112d20bb045c8d9)
- Corrigido um bug nos planos 3D que poderia bloquear completamente a configuração [LINK](https://github.com/jeedom/core/pull/2849)
- Corrigido um bug na janela de exibição de logs [LINK](https://github.com/jeedom/core/pull/2850)
- Capacidade de escolher a porta de escuta do Apache no modo docker [LINK](https://github.com/jeedom/core/pull/2847)
- Corrigido um aviso ao salvar na tabela de eventos [LINK](https://github.com/jeedom/core/issues/2851)
- Adicionando um nome de exibição para objetos [LINK](https://github.com/jeedom/core/issues/2484)
- Adicionado um botão para excluir históricos e eventos da linha do tempo no futuro [LINK](https://github.com/jeedom/core/issues/2415)
- Corrigido um problema com comandos de seleção de tipo em designs [LINK](https://github.com/jeedom/core/issues/2853)
- Possibilidade de indicar que o equipamento não possui bateria (em caso de má recuperação) [LINK](https://github.com/jeedom/core/issues/2855)
- Redesenho de escrita em logs, remoção da biblioteca monolog (observe que a opção de enviar logs em syslog não está mais disponível no momento, se a demanda for alta veremos como colocá-la de volta) [LINK](https://github.com/jeedom/core/pull/2805)
- Melhor gerenciamento dos níveis de log do sublog do plugin [LINK](https://github.com/jeedom/core/issues/2860)
- Excluir a pasta vendor (usando o compositor da maneira normal) permite reduzir o tamanho do núcleo [LINK](https://github.com/jeedom/core/commit/3aa99c503b6b1903e6a07b346ceb4d03ca3c0c42)
- Configurações específicas de widget agora podem ser traduzidas [LINK](https://github.com/jeedom/core/pull/2862)
- Corrigido um bug no Mac em designs ao clicar com o botão direito [LINK](https://github.com/jeedom/core/issues/2863)
- Ajout de widget badge pour les commandes de type texte [LINK](https://github.com/jeedom/core/issues/2864)
- Melhoria do sistema de lançamento de cenários programados [LINK](https://github.com/jeedom/core/issues/2875)
- Mensagens de erro de exceção aprimoradas se o nível de log for depurado [LINK](https://github.com/jeedom/core/issues/2886)
- Na página de substituição possibilidade de solicitar a desativação do equipamento [LINK](https://github.com/jeedom/core/issues/2893)
- Durante uma atualização, o backup direto agora leva em consideração exclusões de plugins [LINK](https://github.com/jeedom/core/commit/22aa19b85028b0de6f7d3028ae0424d4f238f7df)
- Se um plugin estiver em beta, mas não tiver um changelog beta, o centro de atualização retornará ao changelog estável [LINK](https://github.com/jeedom/core/commit/2af7b0a4d8680f68810cf9d07c657c51fe9e40bd)
- Adicionado um alerta se a versão debian for 10 ou inferior [LINK](https://github.com/jeedom/core/issues/2912)
- Corrigir erro de atualização do banco de dados na tabela de cache [LINK](https://github.com/jeedom/core/commit/a21f3498195f0003c5ead7cd5e8589f1c77c1c06)
- Se a página do equipamento tiver um elemento img_device (tag tipo img), então o próprio núcleo pode configurar a url para exibir a imagem correta do equipamento (usando a da página de apresentação de todos os equipamentos do plugin) [LINK](https://github.com/jeedom/core/commit/07708ba4cbed982af968919dac3e406707867417)
- Corrigido um bug com a função time_diff [LINK](https://github.com/jeedom/core/issues/2915)
- Correção de bug no gerenciamento de dependências do compositor [LINK](https://github.com/jeedom/core/issues/2920)
- No caso de comando vazio o Jeedom força o retorno de acordo com o subtipo do comando (então 0 para numérico e binário) [LINK](https://github.com/jeedom/core/commit/442d47246373e4f52b1dde7d1c7fdc9f67ea143e)
- Suporte para eventos de tipo personalizado #pluginClass::*# Ou #pluginClass::customId# [LINK](https://github.com/jeedom/core/pull/2964)
- Adicionado um botão de atualização à linha "core" além daquele no canto superior direito [LINK](https://github.com/jeedom/core/pull/2974)
- Corrija a tela “pacote” no nível do pacote python2 [LINK](https://github.com/jeedom/core/pull/2973)
- Corrigido um bug ao atualizar equipamentos na página da bateria [LINK](https://github.com/jeedom/core/pull/3008)
- La vérification de la connexion réseau est désormais effectuée de manière aléatoire toutes les 10 minutes afin d'éviter que toutes les box Jeedom ne tentent de se reconnecter simultanément en cas de microcoupure.
- Correction du système de file d'attente sur la partie DB [LINK](https://github.com/jeedom/core/pull/3051).

>**IMPORTANTE**
>
> Devido à revisão dos logs e à reinternalização das bibliotecas, durante a atualização você pode ter um erro padrão ``PHP Fatal error`` (nada sério) apenas reinicie a atualização.

>**IMPORTANTE**
>
> Restaurando um backup 4.4 pode, em alguns casos, resultar em erros na interface web. Rien de grave cela peut facilement se corriger il suffit de faire : `cd /tmp;wgE https://github.com/jeedom/core/archive/refs/tags/4.4.19.zip;descompacte 4.4.19.zip;cd núcleo-4.4.19;cp -rf * /var/www/html/;rm -rf /tmp/master.zip;rm -rf /tmp/core-4.4.19;`. Você pode executar este comando a partir da interface de resgate do jeedom (adicione `&rescue=1` na url) ou diretamente via ssh.
