# Changelog Bluetooth Anúncio

>**IMPORTANTE**
>
>Como lembrete, se não houver informações sobre a atualização, isso significa que se trata apenas da atualização da documentação, tradução ou texto

# 22/09/2024

- Corrigido um problema ao reiniciar o daemon à noite, que nem sempre reiniciava corretamente

# 09/02/2024

- Adicionado um reinício do daemon à noite (para limitar problemas de memória)

# 29/06/2024

- Corrigido um bug na função de exceção do ajax.

# 06/04/2021

- Verificação da versão bluepy removida

# 20/11/2020

- Otimizações gerais
- Nova apresentação da lista de objetos
- Adição da tag "compatibilidade V4"

# 30/08/2019
- Adição de gestão excepcional

# 22/08/2019
- Adição de Tivoo Divoom
- Pequenas melhorias

# 19/08/2019
- Adição de uma mensagem para pensar em alterar o nível da API no Jeedom se você usar antenas
- Adição de alguns dispositivos DIVOOM (observe que eles exigem um relançamento de dependências). Eu não o adiciono no controle de dependência, porque essas são apenas dependências específicas para eles, portanto, não é necessário forçar todos a reiniciar as dependências)
- Adição do nível da bateria no capim claro
- Pequenas melhorias

# 30/07/2019
- Correção de um bug no dotti vinculado à transição para python3

# 29/07/2019
- Menor fixo
- Separação de dispositivos desconhecidos na página do equipamento
- Capacidade de excluir todos os dispositivos desconhecidos em um clique (apenas aqueles não atribuídos a um objeto)
- Correção de um erro na verificação seletiva "Desconhecido"
- Melhorias gerais

# 20/07/2019
- Mudança de método para todo o intervalo de playbulb (apenas um conf e recursos visuais) mais dependências em comparação com as diferentes versões (agora na inclusão, recuperamos os endereços dos diferentes métodos)
- Adição de miscal V2 com peso e impedância (e várias medidas calculadas). Gerenciamento de usuários para cálculos (no botão de configuração avançada)
- Alteração do miscal V1 (será necessário recriar os usuários), mas obtemos mais algumas informações
- Para lâmpadas de reprodução, recomendo uma reinclusão de todos os dispositivos
- Correção de um bug no gráfico de rede no modo sem locall
- Correção de um erro na regeneração de ordens a pedido
- Na inclusão, as antenas de transmissão e recepção são preenchidas automaticamente pela antena que permitiu a inclusão
- Mudança da noção de presença (sem necessidade de repetição sempre, sem necessidade de estado de retorno e hora do estado de retorno) agora um comando de presença por antena e local e um comando de presença dependendo dos outros
- Agora é possível fazer o ajuste do intervalo de varredura e o número de varreduras ou um dispositivo não é visível para declará-lo ausente (presença de detecção de ganho e principalmente ausência)
- Possibilidade de atualizar todas as antenas em um clique
- Possibilidade de reiniciar todas as antenas em um clique
- Durante uma atualização do plug-in, as antenas são atualizadas e reiniciadas (às vezes podem falhar)
- Varredura passiva, exceto aprender (com memória do Jeedom conf para saber quem é quem)
- Mudando para Python3
- Modificação pessoal do bluepy, com melhor tratamento de erros (talvez mais bloqueio no proxmow, vmware)
- Adição de um tempo limite de conexão no próprio bluepy para impedir que uma tentativa de conexão faça um loop
- Se o daemon Local estiver no status NOK, as presenças locais serão definidas como 0
- Se uma antena não se comunicar por mais de um minuto, a presença dessa antena é definida como 0
- Adição da possibilidade de recuperar novas configurações sem atualizar o plugin
- Adição de um modo passivo ou ativo para a verificação
- Reorganização da página de equipamentos
- A adição de várias opções de varredura para considerar ausente específica para o equipamento (se definido substituirá a global para este equipamento)
- Além da possibilidade de definir em um clique todo o equipamento em uma antena ou em local
- Capacidade de escolher exatamente o tipo de produto a ser incluído durante uma digitalização (com a possibilidade de escolher todas)

# 26/06/2019
- Adicionando o xiaomi cleargrass
- Adição de Xiaomi lywsd02
- Início do gerenciamento dinâmico de modelos
- Comece a reescrever a faixa do playbulb para ter mais diferença, dependendo dos firmwares
- Correção de bug no status demon em alguns casos
- Desbloqueando as funções de atualização / atraso : cada usuário faz o que quer (tenha cuidado)
- NB : não há mais necessidade de atualização para o xiaomi HT miflora : ganho de bateria, melhor alcance, mais dados. Eu recomendo não ativar a atualização forçada que não é mais necessária, a menos que seu dispositivo pareça não anunciar corretamente

# 22/05/2019

- Mudar da página do equipamento para V4 compatível.
- Melhoria do higrotermógrafo xiaomi (sem necessidade de conexão de dados) obrigado @kipk
- Melhoria do miflora (sem necessidade de conexão de dados)

# 09/03/2019

- Adição do gerenciamento automático do daemon nas antenas.
- Gerenciamento de temperatura negativo
- Correção na atualização das porcas (informações da bateria)

# 16/01/2019

- Correção de uma preocupação com a ordem máxima possível

# 06/06/2018

- Script de dependência aprimorado.
- Remoção da verificação de dependências que permanecerá verde de qualquer maneira enquanto aguarda (lembre-se durante a instalação para iniciar as dependências)

# 06/06/2018

- Correção provável de um bug de atualização de notificação no Hygrothermographe e Miflora (provavelmente requer o relançamento de dependências para as pessoas afetadas))

# 28/03/2018

- adicionar conf dreamscreen
- modificação do daemon para especificar os logs
- modificação do reconhecimento do MI_SCALE V1
- Watchdog bluepy-helper (em teste)

# 10/02/2018

- Correção de um bug no gráfico de rede modal se algum equipamento não tiver objeto

# 01/01/2018

- Adição do conf para o termômetro / higrômetro com tela Xiaomi
- Adição de algumas confs de malha awox
