# Plug-in de Gerenciamento de Obturador

Este plugin permite que você gerencie mais facilmente a posição de suas persianas de acordo com a posição do sol. Este plugin é completamente sem nuvens

Você pode encontrar [aqui](https://www.jeedom.com/blog/?p=4310) um artigo mostrando um exemplo de configuração do plug-in

# Configuração de plugins

Nada de especial aqui apenas para instalar e ativar o plugin

## Como funciona ?

O plug-in ajustará a posição das persianas em relação às posições do sol (azimute e altitude), dependendo da condição.

# Configuração das persianas

A configuração é dividida em várias guias.

## Equipement

Você encontrará na primeira aba toda a configuração do seu equipamento :

- Nome de equipamentos : nome do seu equipamento de simulação,
- Objeto pai : indica o objeto pai ao qual o equipamento pertence,
- Ativar : torna seu equipamento ativo,
- Visivél : torna seu equipamento visível no painel.


## Configuration

### Configuration

- Verificação : frequência de verificação das condições e posição dos flaps
- Recuperar o controle : proíbe que o sistema de gerenciamento de obturador mude de posição se tiver sido movido manualmente. Exemplo: o sistema fecha o obturador, você o abre e não toca mais até que o comando "Reiniciar gerenciamento" seja acionado ou se o tempo de recuperação tiver passado
- Latitude : a latitude do seu obturador / casa
- Longitude : a longitude do seu obturador / casa
- Altitude : a altura do seu obturador / casa
- Estado do obturador : comando indicando a posição atual do retalho
- Posição do obturador : controle para posicionar a aba
- Atualizar posição do obturador (opcional) : comando para atualizar a posição do obturador
- Tempo máximo para uma viagem : tempo para fazer um movimento completo (de cima para baixo ou de baixo para cima), em segundos

## Condition

- Condição para ação : se essa condição não for verdadeira, o plug-in não modificará a posição do obturador
- A alteração de modo cancela suspensões pendentes : se marcada, uma mudança de modo do obturador retorna ao gerenciamento automático
- Ações imediatas são sistemáticas e prioritárias : se marcado, ações imediatas são executadas, mesmo que suspensas e sem levar em conta a ordem das condições

A tabela de condições permite especificar condições de posicionamento específicas, que são mantidas na tabela de posição da aba :
- Posição : se a condição for verdadeira, a posição dos retalhos
- Modo : a condição só funciona se o obturador estiver neste modo (você pode colocar vários ,). Se este campo não for preenchido, a condição será testada independentemente do modo
>**IMPORTANTE**
>
>Estamos falando do modo do obturador aqui. NÃO É NADA A VER COM o plugin do modo
- Ação imediata : age imediatamente assim que a condição for verdadeira (portanto, não espere pela verificação cron)
- Suspender : se a condição for verdadeira, suspende o gerenciamento automático do obturador
- Condição : sua condição
- COMMENTAIRE : campos livres para comentários

## Positionnement

- % de abertura : a% quando o obturador está aberto
- % de fechamento : a% quando o obturador é fechado
- Ação padrão : a ação padrão se nenhuma condição e posição forem válidas

É aqui que você poderá gerenciar o posicionamento do obturador de acordo com a posição do sol.

- Azimute : ângulo de posição do sol
- Elevação : ângulo de altura do sol
- Posição : posição do obturador para tirar se o sol estiver nos limites de azimute e elevação
- Condição : condição adicional a satisfazer para que o obturador tome esta posição (pode estar vazio)
- COMMENTAIRE : campos livres para comentários

>**DICA**
>
>Pequena dica do site [suncalc.org](https://www.suncalc.org) que permite, assim que o seu endereço digitado, ver a posição do sol (e, portanto, os ângulos de azimute e elevação) de acordo com as horas do dia (basta arrastar o pequeno sol no topo)

## Planning

Aqui você pode ver os planos de posicionamento da persiana feitos no planejamento da Agenda

## Commandes

- Azimute do sol : ângulo atual do azimute do sol
- Nascer do sol : ângulo de elevação atual do sol
- Executar ação : força a posição do obturador a ser calculada em função da posição do sol e das condições e aplica o resultado a ele, qualquer que seja o estado de gerenciamento (pausado ou não)
- Última posição : última posição solicitada do obturador pelo plugin
- Status de gerenciamento : status de gerenciamento (suspenso ou não)
- Resumo : forçar o retorno ao modo de gerenciamento automático (observe que este comando deve ser iniciado para retornar ao gerenciamento automático se você tiver alterado a posição do obturador manualmente e marcado a caixa "Não recuperar o controle"")
- Suspender : suspende o posicionamento automático do obturador
- Legal : atualize os valores dos comandos "Sun azimuth" e "Sun elevation""
- Modo : modo de obturador atual

Você pode adicionar comandos "mode", o nome do comando será o nome do modo.

# Panel

O plug-in possui um painel de gerenciamento móvel e de área de trabalho para ativá-lo, basta acessar Plugins -> Gerenciamento de plug-ins, clicar no plug-in de gerenciamento de painel e no canto inferior direito de marcar as caixas para exibir o painel computador e celular
