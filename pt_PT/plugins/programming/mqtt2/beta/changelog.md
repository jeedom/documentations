# Changelog MQTT Manager

>**IMPORTANTE**
>
>Recorde-se que se não há informação sobre a atualização é porque se trata apenas de atualização de documentação, tradução ou texto.

- Com Jeedom 4.4.8 possibilidade de não enviar mais todos os equipamentos do brocker MQTT, mas apenas alguns (a configurar na configuração avançada do equipamento a ser transmitido)
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
