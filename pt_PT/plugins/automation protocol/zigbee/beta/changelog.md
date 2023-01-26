# Changelog Zigbee

>**IMPORTANTE**
>
>Como lembrete, se não houver informações sobre a atualização, isso significa que se trata apenas da atualização da documentação, tradução ou texto.

>**IMPORTANTE**
>
>Para conhecer o novo módulo compatível você tem que ir [a](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=zigbee) (é classificado pela data de adição / modificação)

# 25/01/2023

- Remoção da parte de backup/restauração dos chips zigbee (o protocolo não suporta, é muito instável)

# 23/01/2023

- adicionada nova configuração
- Bugfix

# 19/10/2022

- Remova a pasta rustc após instalar as dependências para liberar espaço
- Suporte aprimorado para alguns módulos
- Bugfix

# 10/03/2022

- As versões Zigpy agora foram corrigidas para evitar problemas com a instalação de dependências


# 13/09/2022

- Corrigido um bug na instalação de dependências no RPI
- Suporte para novos módulos

# 02/09/2022

- Correção de bug
- Capacidade de corrigir o erro do bootloader (base.TimeoutError) da tela de atualização do firmware (em beta no momento)
- Corrigido um bug no botão para forçar as atualizações do mod OTA
- Corrigido um bug na lib YARL forçando a versão 1.4.2

# 12/08/2022

- Corrigidos bugs na execução de determinados comandos se o equipamento estiver em "Ignorar confirmação de execução"

# 12/08/2022

- Bugfix

# 27/07/2022

- Corrigidos problemas de inclusão para equipamentos GreenPower (compatível apenas com chaves EZSP)
- Corrigido um problema com o feedback de cores de alguns controles remotos zigbee

# 27/06/2022

- Tente corrigir problemas com o daemon

# 23/06/2022

- Tente corrigir problemas com o daemon

# 20/06/2022

- Adicionada opção para excluir automaticamente dispositivos excluídos
- Corrigido um bug ao forçar uma atualização OTA
- Suporte para novos módulos
- corrigiu um problema com zigpy 0.47.0 (de volta à versão 0.46.0)

# 20/05/2022

- Corrigindo o erro :  AttributeError: módulo 'specifics' não tem atributo 'init'

# 05/05/2022

- Correção de bug
- Suporte ao novo módulo 
- Corrigido um bug ao adicionar um módulo a um grupo
- Adicionado fuso horário de envio ao enviar tempo para módulos
- Correções de bugs na instalação de dependências

# 31/03/2022

- Corrigido um problema que impedia o daemon de iniciar devido à nova versão do zigpy

# 22/03/2022

- Suporte ao novo módulo
- Atualização de documentação
- Correção de bug

# 16/02/2022

- Suporte ao novo módulo
- Atualização do documento para o erro "base timeout""

# 02/03/2022

- Tente corrigir o erro "não é possível importar o nome 'collections_abc' de 'six".move'", requer jeedom 4.2 e relançando a instalação de dependências

# 01/02/2022

- Corrigido um problema com o gerenciamento de versões de firmware ezsp
- Implementação de um sistema de geração automática de comandos caso não exista configuração (na medida do possível)
- Implementação de um sistema de descoberta automática de pedidos do tipo informação
- Possibilidade de ter a configuração json atual do módulo (permitirá integrar os módulos mais rapidamente)

# 21/01/2022

- Bugfix
- Suporte ao novo módulo

# 10/01/2022

- Correção de um bug na ligação direta entre 2 módulos

# 06/01/2022

- Corrigido um bug na lista de módulos que podem ser vinculados
- Recuperação de bateria aprimorada

# 20/12/2021

- Corrigido um bug ao reiniciar o daemon quando os sub daemons estão configurados, mas desabilitados
- Corrigido um problema ao solicitar uma atualização de mais de 7 valores de atributo, obrigado @kaktusatomik
- Adicionado novo equipamento (obrigado @ cstan77)

# 02/12/2021

- Adição de novos equipamentos
- Correção de um problema no "Relatório de configuração" dos módulos

# 22/11/2021

- Otimização da velocidade de carregamento das páginas do plugin
- Adição de novos equipamentos
- Atualize as dependências automaticamente ao atualizar o plugin


# 11/07/2021

- Adição de novos equipamentos
- Correção de um bug nos módulos de persianas enroláveis Tuya

# 25/10/2021

- Adicionando nova configuração
- Possibilidade de definir um cron para forçar a atualização dos atributos (tenha cuidado para não colocar nada pois pode quebrar todas as suas redes zigbee)
- Correção de bug
- Adição do número de vizinhos na página do gráfico zigbee ao pairar

# 19/09/2021

- Bugfix

# 15/09/2021

- Corrigido um bug na inclusão
- Níveis de registro aprimorados
- Adição de novos módulos

>**IMPORTANTE**
>
>É ABSOLUTAMENTE necessário lançar uma instalação de dependências mesmo que esteja OK (estamos trabalhando no jeedom 4.2 tem que ser automaticamente, mas no momento você tem que iniciá-los manualmente)

# 09/03/2021

- Corrigido um problema com a criação de grupos em alguns casos
- Exibição de lista de grupo fixa

# 27/08/2021

- Problema corrigido com firmware Nodon
- Correção do erro "\_ext_pan_id" devido a uma atualização do código Zigpy com as chaves Deconz

>**IMPORTANTE**
>
>Após esta atualização é ABSOLUTAMENTE necessário atualizar as dependências do plugin mesmo que ele diga que está tudo OK

# 23/08/2021

- Exclusão do arquivo de atualização OTA para módulos Nodon a seu pedido
- Adição de novos módulos 
- Corrigido um problema com a configuração das configurações de lâmpadas Hue

# 17/08/2021

- Correção de um problema de relatório nos clusters AnalogInput e AnalogInput
- Suporte completo para monitor de qualidade do ar Xiaomi Aqara TVOC
- Adição de muitos módulos

# 06/08/2021

- Corrigido um bug no gerenciamento de grupo

# 02/08/2021

- Adição de novo módulo compatível
- Adição de um botão para deletar todos os dados de um daemon (veja a documentação)
- Corrigido um bug no gerenciamento de grupo quando várias chaves zigbee


# 01/07/2021

- Adição de novo módulo compatível
- Otimização das configurações existentes no gerenciamento de repetições

# 09/06/2021

- Mudança da fonte de atualização OTA para Ikea (mudar para o ramo estável)
- Adição de novo módulo compatível
- Correção de bug

# 18/05/2021

- O suporte GreenPower em beta para chaves do tipo EZSP (Elelabs, Popp ...), requer o reinício da instalação de dependências
- Adição de novo módulo compatível
- Correção de bug

# 03/05/2021

- Atualização de documentação
- Bugfix
- Integração de novos módulos
- Otimização de imagens do módulo

# 29/04/2021

- Integração de novos módulos
- Otimização de imagens do módulo

# 21/04/2021

- Integração de novos módulos
- Suporte para vinculação *(entre grupos ou módulos)*
- Reformulação da documentação
- Bugfix

# 07/04/2021

- Corrigido um problema no botão para forçar a atualização OTA de certos módulos

# 06/04/2021

- Mudando para estável

# 25/09/2020

- 1º lançamento em beta
