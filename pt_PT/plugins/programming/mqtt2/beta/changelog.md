# Changelog MQTT Manager

>**IMPORTANTE**
>
>Recorde-se que se não há informação sobre a atualização é porque se trata apenas de atualização de documentação, tradução ou texto.

- Adição de uma mensagem online e offline ao iniciar e parar (desejado ou não) o daemon em topic_racine/state
- Se você tiver equipamento jeedom::monitor a partir do plugin virtual o plugin adicionará automaticamente o comando state (online ou offline), caso você já possua este equipamento deverá reiniciar o Discovery
- Corrigido bug na transmissão do tipo real de equipamento (ao transmitir equipamento entre jeedom)
- Corrigido um bug na duplicação da tarefa de escuta de eventos
- Em equipamentos exportados, se o plugin de origem existir no jeedom alvo, então o jeedom exibirá o ícone do plugin
- Nenhum erro nos logs durante a transmissão do comando (evita quebrar o jeedom se o daemon for cortado)

# 12/08/2024

- Corrigido um bug ao enviar equipamentos da janela de configuração
- Adicionado um botão para ver os registros do mosquito (se estiver no modo brocker local)
- Atualizada a documentação para explicar melhor como sincronizar tópicos entre dois mosquitos

# 10/08/2024

- Corrigido um bug ao enviar baterias (método de chamada não estático)

# 09/08/2024

- Melhorada a exibição da janela de configuração dos equipamentos transmitidos
- Corrigido um bug em comandos órfãos quando transmitidos através do mqtt

# 08/08/2024

- Para equipamentos transmitidos no Mqtt o plugin agora envia o nível da bateria todas as noites
- O plugin para gerenciar o nível de bateria transmitido entre Jeedom
- Gerenciamento correto de comandos de atualização em widgets em equipamentos transmitidos entre Jeedom
- Ao enviar a descoberta entre Jeedom os valores dos comandos também são transmitidos (não é necessário esperar uma atualização do valor para tê-lo no alvo). Requer reenvio de descoberta
- Ao transmitir equipamentos entre Jeedom o plugin agora gerencia o tipo real de equipamento para ser compatível com aplicações mobile. Requer reenvio de descoberta
- Adicionada janela de configuração global para transmissão de equipamentos entre Jeedom

# 05/08/2024

- Com Jeedom 4.4.8 ou mais possibilidade de não enviar mais todos os equipamentos do brocker MQTT mas apenas alguns (a configurar na configuração avançada do equipamento a transmitir)
- Correções de bugs (especialmente para compatibilidade com php8)
- Descoberta entre Jeedom (para fazer 2 jeedoms se comunicarem entre si por mqtt)
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

- Adição de um sistema de autodiscovery para alguns módulos beta (esphome, tasmota e shelly)
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
