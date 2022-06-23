# 

>****
>
>Como lembrete, se não houver informações sobre a atualização, isso significa que se trata apenas da atualização da documentação, tradução ou texto.

>****
>
>Para conhecer o novo módulo compatível você tem que ir [](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=zigbee) (é classificado pela data de adição / modificação)

>****
>
>Para aproveitar as vantagens da integração do módulo mais recente, não hesite em atualizar as dependências


# 

- 

# 

- Adicionada opção para excluir automaticamente dispositivos excluídos
- Corrigido um bug ao forçar uma atualização OTA
- Suporte para novos módulos
- .)

# 

- Corrigindo o erro :  AttributeError: módulo 'specifics' não tem atributo 'init'

# 

- Correção de bug
- Suporte ao novo módulo 
- Corrigido um bug ao adicionar um módulo a um grupo
- Adicionado fuso horário de envio ao enviar tempo para módulos
- Correções de bugs na instalação de dependências

# 

- Corrigido um problema que impedia o daemon de iniciar devido à nova versão do zigpy

# 

- Suporte ao novo módulo
- Atualização de documentação
- Correção de bug

# 

- Suporte ao novo módulo
- Atualização do documento para o erro "base timeout""

# 02/03/2022

- Tente corrigir o erro "não é possível importar o nome 'collections_abc' de 'six".move'", requer jeedom 4.2 e relançando a instalação de dependências

# 

- Corrigido um problema com o gerenciamento de versões de firmware ezsp
- Implementação de um sistema de geração automática de comandos caso não exista configuração (na medida do possível)
- Implementação de um sistema de descoberta automática de pedidos do tipo informação
- Possibilidade de ter a configuração json atual do módulo (permitirá integrar os módulos mais rapidamente)

# 

- Bugfix
- Suporte ao novo módulo

# 

- Correção de um bug na ligação direta entre 2 módulos

# 

- Corrigido um bug na lista de módulos que podem ser vinculados
- Recuperação de bateria aprimorada

# 

- Corrigido um bug ao reiniciar o daemon quando os sub daemons estão configurados, mas desabilitados
- Corrigido um problema ao solicitar uma atualização de mais de 7 valores de atributo, obrigado @kaktusatomik
- Adicionado novo equipamento (obrigado @ cstan77)

# 

- Adição de novos equipamentos
- Correção de um problema no "Relatório de configuração" dos módulos

# 

- Otimização da velocidade de carregamento das páginas do plugin
- Adição de novos equipamentos
- Atualize as dependências automaticamente ao atualizar o plugin


# 11/07/2021

- Adição de novos equipamentos
- Correção de um bug nos módulos de persianas enroláveis Tuya

# 

- Adicionando nova configuração
- Possibilidade de definir um cron para forçar a atualização dos atributos (tenha cuidado para não colocar nada pois pode quebrar todas as suas redes zigbee)
- Correção de bug
- Adição do número de vizinhos na página do gráfico zigbee ao pairar

# 

- Bugfix

# 

- Corrigido um bug na inclusão
- Níveis de registro aprimorados
- Adição de novos módulos

>****
>
>É ABSOLUTAMENTE necessário lançar uma instalação de dependências mesmo que esteja OK (estamos trabalhando no jeedom 4.2 tem que ser automaticamente, mas no momento você tem que iniciá-los manualmente)

# 09/03/2021

- Corrigido um problema com a criação de grupos em alguns casos
- Exibição de lista de grupo fixa

# 

- Problema corrigido com firmware Nodon
- Correção do erro "\_ext_pan_id" devido a uma atualização do código Zigpy com as chaves Deconz

>****
>
>Após esta atualização é ABSOLUTAMENTE necessário atualizar as dependências do plugin mesmo que ele diga que está tudo OK

# 

- Exclusão do arquivo de atualização OTA para módulos Nodon a seu pedido
- Adição de novos módulos 
- Corrigido um problema com a configuração das configurações de lâmpadas Hue

# 

- Correção de um problema de relatório nos clusters AnalogInput e AnalogInput
- Suporte completo para monitor de qualidade do ar Xiaomi Aqara TVOC
- Adição de muitos módulos

# 

- Corrigido um bug no gerenciamento de grupo

# 

- Adição de novo módulo compatível
- Adição de um botão para deletar todos os dados de um daemon (veja a documentação)
- Corrigido um bug no gerenciamento de grupo quando várias chaves zigbee


# 

- Adição de novo módulo compatível
- Otimização das configurações existentes no gerenciamento de repetições

# 

- Mudança da fonte de atualização OTA para Ikea (mudar para o ramo estável)
- Adição de novo módulo compatível
- Correção de bug

# 

- O suporte GreenPower em beta para chaves do tipo EZSP (Elelabs, Popp ...), requer o reinício da instalação de dependências
- Adição de novo módulo compatível
- Correção de bug

# 

- Atualização de documentação
- Bugfix
- Integração de novos módulos
- Otimização de imagens do módulo

# 

- Integração de novos módulos
- Otimização de imagens do módulo

# 

- Integração de novos módulos
- Suporte para vinculação *(entre grupos ou módulos)*
- Reformulação da documentação
- Bugfix

# 

- Corrigido um problema no botão para forçar a atualização OTA de certos módulos

# 

- Mudando para estável

# 

- 1º lançamento em beta
