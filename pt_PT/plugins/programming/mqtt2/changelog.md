# Changelog MQTT Manager

>**IMPORTANTE**
>
>Recorde-se que se não houver informação sobre a atualização, significa que se trata apenas de atualização de documentação, tradução ou texto.

# 25/11/2024

- Plugin compatível com Debian 11 e superior

# 10/07/2024

- Corrigido um problema em que certas mensagens podiam ser processadas duas vezes

# 10/01/2024

- Corrigido um bug ao aplicar determinados modelos

# 22/09/2024

- Corrigido um aviso ao iniciar o daemon
- Corrigido um bug com o Node.ds 20
- Se um comando for do tipo binário ou numérico e jeedom receber um array ou objeto então o valor será ignorado (corrige um problema com Shelly 2.5)
- Corrigido bug no gerenciamento de baterias de equipamentos vinculados entre Jeedom

# 09/09/2024

- Implementação de otimização na gestão de equipamentos transmitidos com Jeedom 4.5
- Adicionada segurança para evitar colocar um tópico usado por um plugin como tópico raiz
- Adicionado um assistente para vincular facilmente o Mosquitto de dois Jeedoms
- Adicionada a possibilidade de enviar informações para a nuvem Jeedom para comunicação entre dois Jeedoms pela internet (não aberto aos usuários no momento)
- Ativação da descoberta automática por padrão (pode ser desativada em Plugin -> Programação -> Gerenciador Mqtt)
- Corrigido bug ao criar o comando indicando o status de um Jeedom remoto (através do equipamento monitor Jeedom do plugin virtual)
- Adição do tópico SYS (para ter informações internas do MQTT)
- Adicionando um modelo de mosquito.sys permitindo que informações sejam recuperadas do brocker (mensagem recebida/enviada total/1min/5min/15min, carga de memória...)
- Verificando o ouvinte cada vez que o daemon é iniciado

# 20/08/2024

- Adição de uma mensagem online e offline ao iniciar e parar (desejado ou não) o daemon em topic_racine/state
- Se você tiver equipamento jeedom::monitor a partir do plugin virtual, o plugin adicionará automaticamente o comando state (online ou offline), caso você já possua este equipamento deverá reiniciar o Discovery
- Corrigido bug na transmissão do tipo real de equipamento (ao transmitir equipamento entre jeedom)
- Corrigido um bug na duplicação da tarefa de escuta de eventos
- Em equipamentos exportados, se o plugin de origem existir no jeedom alvo, então o jeedom exibirá o ícone do plugin
- Nenhum erro nos logs durante a transmissão do comando (evita quebrar o jeedom se o daemon for cortado)
- Melhor tratamento de pedidos órfãos
- Corrigido um bug ao executar comandos de tipo de mensagem

# 12/08/2024

- Corrigido um bug ao enviar equipamentos da janela de configuração
- Adicionado um botão para ver os registros do mosquito (se estiver no modo brocker local)
- Atualizada a documentação para explicar melhor como sincronizar tópicos entre dois mosquitos

# 10/08/2024

- Corrigido um bug ao enviar baterias (método de chamada não estático)

# 09/08/2024

- Melhorada a exibição da janela de configuração dos equipamentos transmitidos
- Corrigido um bug em comandos órfãos ao transmitir através do mqtt

# 08/08/2024

- Para equipamentos transmitidos no Mqtt, plugin agora envia nível de bateria todas as noites
- O plugin para gerenciar o nível de bateria transmitido entre Jeedom
- Gerenciamento correto de comandos de atualização em widgets em equipamentos transmitidos entre Jeedom
- Ao enviar a descoberta entre Jeedom os valores dos comandos também são transmitidos (não é mais necessário esperar uma atualização do valor para tê-lo no alvo). Requer reenvio de descoberta
- Ao transmitir equipamentos entre Jeedom o plugin agora gerencia o tipo real de equipamento para ser compatível com aplicações mobile. Requer reenvio de descoberta
- Adicionada janela de configuração global para transmissão de equipamentos entre Jeedom

# 05/08/2024

- Com Jeedom 4.4.8 ou mais, possibilidade de não enviar mais todos os equipamentos do brocker MQTT, mas apenas alguns (a configurar na configuração avançada do equipamento a transmitir)
- Correções de bugs (especialmente para compatibilidade com php8)
- Descoberta entre Jeedom (para fazer 2 Jeedoms se comunicarem entre si por mqtt)
- Possibilidade na página de configuração do plugin para excluir a assinatura de um plugin

# 22/03/2024

- Corrigido um problema no php8
- Corrigido um bug no Debian 12

# 23/02/2024

- A eliminação de uma verificação do daemon lançável (feita quando o daemon é lançado em todos os casos)

# 15/01/2024

- Preparando-se para Jeedom 4.4
- Gerenciamento aprimorado de mosquitos no Docker

# 27/10/2023

- Corrigido um bug no estado do daemon (iniciado quando não)

# 10/05/2023

- Corrigido um bug no status do corretor

# 10/02/2023

- Possibilidade de corrigir o QOS padrão
- Bugfix
- Início da adição do sistema de descoberta automática
- Melhor gerenciamento de mosquitos no modo local

# 22/03/2023

- Bugfix

# 07/03/2023

- Adicionado um sistema de descoberta automática para determinados módulos beta (esphome, tasmota e shelly)
- Adicionada a imagem dos módulos
- Corrigido um bug no ID do cliente (se vários jeedom no mesmo corretor)
- Suporte de subnível em tópicos de equipamentos
- Correção de bug

# 23/12/2022

- Corrigido um bug no tempo máximo permitido para instalação de dependências
- Adicionado sistema de modelo de equipamento (beta)

# 18/11/2022

- Adicionada uma mensagem solicitando a restauração das permissões nas pastas antes de instalar o Mosquitto em caso de erro **Nenhuma pasta SSL encontrada**

# 13/11/2022

- Adicionado um botão para desinstalar um corretor Mosquitto local na página de configuração geral do plugin
