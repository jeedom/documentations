# Changelog Deconz

>**IMPORTANTE**
>
>Como lembrete, se não houver informações sobre a atualização, isso significa que se trata apenas da atualização da documentação, tradução ou texto

# 19/12/2023

- Suporte aprimorado para configuração de rede interna jeedom
- Correções de bugs

# 15/02/2023

- Melhoria da página de pedidos (inclusão do status)

# 11/10/2022

- Correção de bug
- Adicionado novo tipo

# 02/03/2022

- Tente corrigir o erro "não é possível importar o nome 'collections_abc' de 'six".move'", requer jeedom 4.2 e relançando a instalação de dependências

# 16/12/2021

- Correções de bugs

# 12/04/2021

- Suporte de novos tipos

# 29/11/2021

- Possibilidade de desinstalar o Deconz, obrigado @Benjamin 
- Adicionado ZHAAirQualit, meric @sagitaz
- Corrigido um bug com a versão mais recente do deconz ao retornar atualizações de atributos
- Adição de grupo e gerenciamento de ligação

# 08/02/2021

- Supressão do envio de brilho durante uma mudança de cor para lâmpadas RGB
- Adicionado ZHACarbonMonoxide, obrigado @sagitaz

# 28/10/2020

- Adicionada uma mensagem indicando para não atualizar o firmware da chave se você estiver no VM ou Freebox Delta correndo o risco de quebrar a chave.

# 23/09/2020

- Suporte de válvula Danfoss ally (deconz 2.05.79 necessário)
- Mudança do método de instalação para RPI e x86_64 (passagem pelos repositórios deconz)

# 01/07/2020

- Lançamento aprimorado do deCONZ

# 06/08/2020

- Adicionado tipo ZGPSwitch (botão amigo de matiz)

# 25/05/2020

- Correção de uma preocupação com o tipo genérico de luzes coloridas (é recomendável corrigir o tipo genérico para o comando do tipo de ação de cores, caso contrário, isso poderá causar problemas no Alexa ou no Google home, luz que apaga durante a solicitação LIGADA)

# 05/12/2020

- Adição de um reinício automático da conexão ao deconz em caso de perda

# 27/02/2019

- Capacidade de desativar alertas de nó que não podem ser alcançados pelo dispositivo
- Atualizações de documentação e tradução

# 27/12/2019

- Inversão do widget para lojas ikea para colar no estado real

# 26/12/2019

- Correção de um bug na atualização do firmware

# 24/12/2019

- Adição de dispositivos de aviso e tipos ZHAAlarm
- Suporte para lojas ikea (beta)
- Corrigidos problemas com a localização de firmware para a chave

# 15/11/2019

- Voltar para deconz 2.0.69 porque o 70 tem muitos erros, você precisa reiniciar a instalação local do deconz

# 14/11/2019

- Corrigido um problema com a instalação do deconz

# 08/08/2019

- Atualização do documento (adição da desativação do serial no RPI, caso contrário, o daemon é instável)
- Melhoria do suporte da válvula

# 03/03/2019

- Suporte de instalação no RPI1

# 27/10/2019

- Correções de bugs
- Suporte de válvula termostática

# 14/10/2019

- Possibilidade de atualizar o firmware de uma chave Conbee 2 da jeedom
- Ativando uma sincronização forçada quando o daemon é iniciado
- Correção de um bug na instalação de dependências

# 23/09/2019

- Atualizando o documento

# 23/09/2019

- Correções de bugs
- Atualizando o documento

# 09/09/2019

- Correção de um bug no nível de log do deconz na instalação local
- Atualização da versão local do deconz para 2.5.69 (tenha o cuidado de tê-lo na configuração do plug-in, reinicie a instalação do Deconz e reinicie o demon, em seguida)

# 28/08/2019

- Atualização da versão local do deconz para 2.5.67 (tenha o cuidado de tê-lo na configuração do plugin, reinicie a instalação do Deconz)

# 13/08/2019

- Suporte aprimorado para o cubo Xiaomi (merc @kaktusatomik)
- Adição do status do nó nas redes Zigbee
- Análise diária das redes com relatórios se houver algum problema em um módulo

# 24/07/2019

- Correção de um bug na desativação de equipamentos

# 22/07/2019

- Capacidade de excluir um nó
- Adicione um botão de link diretamente à interface deconz
- Adicionando o nome do dispositivo Jeedom na tabela que lista os nós
- Adicionando a temperatura em alguns módulos xiaomi
- Suporte para módulos de relé duplo
- Suporte aprimorado para módulos de sensores e atuadores

Atenção, detectamos casos em que houve duplicação de pedidos (se você o encontrar, não hesite em entrar em contato com o suporte)

# 07/08/2019

- Suporte do módulo de detecção de vibração Xiaomi

# 07/04/2019

- Correções de bugs

# 30/06/2019

- Correção de um erro na instalação de dependências impedindo o lançamento do daemon
