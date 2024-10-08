# Changelog jeeZigbee

>**IMPORTANTE**
>
>Se não houver informação sobre a atualização, significa que se trata apenas da atualização da documentação, tradução ou texto.

# 27/09/2024

- Mudança de versões mínimas, core 4.4 e SO Debian 11 no mínimo

# 24/09/2024

- Adicionado um link na página do equipamento que se refere à página do equipamento zigbee2mqtt para obter mais informações

# 10/09/2024

- Possibilidade em caixas com dongles elelabs de atualizar o firmware Ember (experimental isso pode quebrar completamente o seu dongle e não será coberto pela garantia nem pelo suporte)
- Corrigido um bug se o tópico raiz não fosse zigbee2mqtt

# 05/08/2024

- Gerenciamento de imagem aprimorado
- Correção de taxa de transmissão no deconz
- Corrigido um bug que exibia a janela de configuração de um nó se um equipamento fosse excluído enquanto era usado na vinculação de outro

# 16/07/2024

- Corrigido erro indicando atualização do zigbee2mqtt quando a versão já está atualizada
- Adicionado tipo de chave Ember
- Corrigido um problema ao iniciar o daemon pela primeira vez em relação aos direitos do arquivo de log
- Corrigido um problema em algumas imagens

# 22/04/2024

- Corrigido um bug na duplicação de comandos (em cenas)
- Corrigido um bug em controles deslizantes com valor negativo

# 03/04/2024

- Corrigido um bug na imagem da versão mais recente do zigbee2mqtt

# 20/03/2024

- Corrigido um bug com o comando de atualização

# 13/03/2024

- Limitação de atualização do firmware Zigbee para Luna nas caixas Luna (evita quebrar o chip Zigbee em caso de escolha errada)

# 26/02/2024

- Corrigido um problema com a instalação do mqtt
- Modificação no subtópico (agora é um campo de configuração específico do comando), tome cuidado para atualizar seus comandos caso você os tenha utilizado.
- Modificação da sintaxe do campo logicId para ações (mudança para modo json::). Para saber das novidades, consulte a documentação do plugin.
- Adicionando a porta /dev/ttyAMA0 para raspbee2 no rpi
- Correção de bug
- Adicionado um botão para desativar o modo de inclusão
- Detecção aprimorada do modo de inclusão
- Correção de bug (plugin agora ignora valores vazios para comandos)

# 19/02/2024

- Corrigido um problema com a instalação do mqtt


# 17/01/2024

- Atualização de firmware aprimorada no Luna
- Melhor gerenciamento portuário em Luna
- Simplificando a lista de portas
- Possibilidade de enviar mensagem sobre um subtópico do comando set : arm_mode/modo::armando_ficar
- Correção de bug
- Gerenciamento de feedback de status em grupos

# 26/12/2023

- Desligamento aprimorado do daemon zigbee2mqtt
- Correção de bug

# 21/12/2023

- Remoção da noção de instância
- Possibilidade de lançar uma inclusão diretamente em um módulo roteador
- Adicionado suporte para conbee 3
- Adicionado suporte para raspbee 2

# 12/08/2023

- Adicionada opção "Não permitir mensagens se o equipamento não for visto há mais de (s)" (Reservado para usuários avançados)

# 12/05/2023

- Suporte para atualização de firmware zigbee no Luna (beta)
- Suporte para ID lógico longo em comandos
- Possibilidade de criar um comando de atualização (você deve adicionar um comando e digitar action/default e no campo id lógico colocar atualização)
- Possibilidade de adicionar um cron que solicite a atualização dos valores (atenção, nada garante que o módulo realmente os atualizará, deve suportá-lo)
- Corrigido um bug com a versão mais recente do zigbee2mqtt


# 11/06/2023

- Corrigido um bug no gerenciamento de grupo
- Otimização de código
- Corrigidos bugs durante a instalação do plugin (erro 500)

# 22/09/2023

- Possibilidade de escolher a versão do zigbee2mqtt

>**IMPORTANTE**
>
>Para aqueles que estão tendo problemas com um módulo inacessível após atualizações anteriores, você deve restaurar um backup do Jeedom anterior à atualização e refazer a atualização. Peço sinceras desculpas por esse bug que ocorre com alguns de vocês, ele vem de um recurso inesperado do Zigbee2MQTT que não tenho em meus outros laboratórios.

# 20/09/2023

- Corrigido um bug na versão zigbee2mqtt

# 19/09/2023

- Corrigido um bug ao atualizar dependências (Zigbee2MQTT) se você restaurasse o jeedom

# 08/09/2023

- Corrigido um bug que impedia a criação correta de pedidos

# 09/04/2023

- Capacidade de configurar a porta de escuta do zigbee2mqtt
- Corrigido um problema com comandos de tipo de cor
- Correção na geração de comandos que não funcionavam em determinados casos
- Nomenclatura de comando aprimorada
- Possibilidade de caixas Atlas com controladores do tipo Elelabs atualizarem o firmware do jeedom

# 03/07/2023

- Corrigido um problema ao enviar um comando de posicionamento (tipo de obturador)

# 27/06/2023

- Corrigido um problema com a detecção de certos módulos (incluindo profalux)

# 30/05/2023

- Versão inicial
