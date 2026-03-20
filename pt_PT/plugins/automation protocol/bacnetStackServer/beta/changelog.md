# Registro de alterações do servidor bacnetStack

> **⚠ IMPORTANTE — A ser feito após cada atualização**
>  **reinstalar as dependências** após uma atualização de plugin.
> Esta etapa baixa o binário do daemon atualizado (`bacnetStackd`). Sem essa etapa, o binário antigo permanece instalado e as correções ou novos recursos do daemon não são ativados.

# 

- **Tempo limite BACnet configurável (daemon C + PHP))** :
  - O tempo limite padrão do BACnet foi reduzido de 60 segundos para **** para readprop, writeprop e subscribecov
  - Novo campo JSON "timeout" (em segundos) passável via comando para ajuste por chamada


- **Corrigido o vazamento de invoke_id no timeout de writeprop** :
  - `tsm_free_invoke_id()` adicionado ao caminho de tempo limite de `handle_client_writeprop`
  - Impede que o pool TSM (256 slots) se esgote após vários timeouts consecutivos em um dispositivo inacessível

- **Reativação da VOC integrada ao ciclo de pesquisa** :
  - Remoção do bloco `resubscribeAllCOV()` na inicialização do daemon
  - Assinaturas COV expiradas são reativadas automaticamente após a primeira verificação bem-sucedida em cada dispositivo
  - Elimina o risco de a inicialização do PHP ser bloqueada em dispositivos lentos ou inacessíveis

- **A opção Relinquish está desativada por padrão na inicialização** :
  - Nova opção na configuração do plugin : *Desistir na inicialização do daemon* (desativado por padrão)


- **Abandonar correções de comando** :
  - Os comandos de liberação agora leem `device_ip` e `device_id` do dispositivo pai em vez de sua própria configuração, evitando dados desatualizados caso o dispositivo seja modificado


# 

- **Os registros de tendências persistem após a reinicialização do daemon** :
  - Os dados históricos do TrendLogs agora são restaurados do disco após a reinicialização, sem qualquer perda de histórico


# 

- **Prioridade de escrita BACnet configurável no lado do cliente** :
  - Novo campo **Prioridade de escrita padrão** (1-16) no equipamento do cliente (aba Equipamento), usado durante a leitura/geração de pedidos
  - A prioridade padrão permanece 8 (Operador Manual) para equipamentos existentes
  - Novo seletor de prioridade **por encomenda** diretamente na tabela de comandos (guia Comandos), visível para todos os comandos de ação BACnet
  - Os comandos existentes não são modificados quando o valor padrão do equipamento é alterado


# 

- **Redesign completo da interface de mapeamento do Jeedom** :
  - Sistema de paginação para gerenciar centenas de objetos BACnet (50/100/200/500 objetos por página))
  - Navegação rápida : primeira página, página anterior, próxima página, última página
  - Navegação por teclado com setas esquerda/direita
  - Exibição personalizável do número de objetos por página
  - Função de busca adaptada à paginação

- **Aumento dos tempos limite para verificações de dispositivos** :
  - O tempo limite do JavaScript foi aumentado de 30s para 180s para lidar com dispositivos com muitos objetos (mais de 2000))
  - O tempo limite do PHP foi aumentado de 60 segundos para 180 segundos
  - O limite de execução do PHP foi estendido para 300 segundos
  - Mensagem informativa durante a digitalização, alertando para o possível tempo de espera (até 3 minutos))

- **Novo recurso : Varredura Seletiva de Objetos BACnet** :
  - Botão "Varredura Seletiva" na página de configuração de um dispositivo cliente
  - Permite adicionar apenas objetos específicos sem precisar escanear todo o dispositivo
  - Interface de modo duplo :
    - **Modo manual** : Seleção interativa com menu suspenso de tipos de objeto, entrada de instância e opção de informação/ação
    - **Modo de lista** : Importação rápida via área de texto (formato típico):exemplo, um por linha)
  - Gestão inteligente de ordens de ação : desativado automaticamente para tipos somente leitura (entrada analógica, entrada binária, entrada multiestado, acumulador, conversor de pulsos))
  - Exibição da lista de objetos selecionados com indicadores visuais e a opção de excluí-los
  - Ideal para adicionar algumas funcionalidades a equipamentos existentes sem precisar digitalizá-los completamente
  - Criação automática de comandos com suas propriedades BACnet


# 

- Prioridade de gravação configurável por objeto BACnet Server (AO, AV, BO, MSO)) :
  - Novo campo `writePriority` na configuração JSON do daemon (1-16, padrão) : 16)
  - Seletor de prioridade no modal de edição de objetos do lado do servidor
  - Prioridade considerada ao inicializar o daemon na inicialização


# 

- Visualizando objetos de agendamento BACnet no lado do cliente :
  - Botão de calendário em comandos do tipo `agendar` no equipamento
  - Modal exibindo o valor atual, o valor padrão e o período de vigência
  - Cronograma semanal decodificado com intervalos de tempo e valores (nulo = retornar ao padrão))
  - Exceções decodificadas : Datas fixas, intervalos de datas, padrões de dia/semana/mês; suporte para "qualquer" ano (BACnet 0xFF))
  - Decodificação nativa de propriedades complexas `weekly-schedule`, `exception-schedule` e `effective-period`


- Suporte estendido para tipos de objeto BACnet do lado do cliente :
  -  : Contador de pulsos, somente leitura, digital com unidade
  -  : Conversão de pulsos → unidades de engenharia, somente leitura, digitais com unidade
  -  : Valor inteiro com sinal, leitura + escrita (controle deslizante))
  -  : inteiro sem sinal, leitura + escrita (controle deslizante))
  -  : valor do texto, leitura + escrita (mensagem))
  -  : já tratado através de detecção 'analógica' (dupla precisão))
- Exclusão automática de objetos sem 'valor presente' da coleta e verificação : `dispositivo`, `porta-de-rede`, `classe-de-notificação`
-  : O `listValue` dos comandos de ação com vários estados é preenchido automaticamente no primeiro ciclo cron (para dispositivos criados a partir do EDE))
- Utilizando o ID numérico BACnet `110` para ler `state-text` através do método readProperty

# 

- Otimização de logs de tendência : Resolução imediata do objeto de origem e criação do comando associado durante a varredura, além do registro dos valores nele contidos
- Suporte a arquivos EDE em um dispositivo cliente
- Ao injetar um EDE, é possível criar equipamentos por tema'


# 

- Adicionado botão "Registrar tudo" em dispositivos do tipo cliente
- Adicionado campo de pesquisa à tabela após os resultados do objeto

# 

- Nova tela de supervisão (monitoramento do equipamento do cliente, histórico de eventos recentes))

# 

- Adicionado daemon de batimento cardíaco
- Acionando reSubscribeAllCOV na reconexão do daemon
- Tempo limite/reconexão aprimorada no daemon


# 

- Adicionando documentação contextual
- Corrigir a escrita do cliente BACnet

# 

- Nova interface de usuário
- Adicionar cliente Bacnet : Descoberta via whois, lista de objetos, criação de dispositivos para leitura de dispositivos BACnet
- Adicionada assinatura COV aos objetos Bacnet
- Adicionar nova configuração/Carregar configuração da página de mapeamento
- Adição em massa por meio de equipamentos na página de mapeamento

# 

- Alterações na seleção de ordens para vincular
- Adicionando a sincronização de um agendamento do plugin Jeedom Calendar ao cron job do calendário. 

# 

- Novo binário v1.0.98
- Adicionamos bloqueio e enfileiramento ao JSON antes de enviá-lo ao servidor, para evitar problemas de leitura/gravação

# 
- Plugin inicial
