# Changelog Alarm

>**IMPORTANTE**
>
>Como lembrete, se não houver informações sobre a atualização, isso significa que se trata apenas da atualização da documentação, tradução ou texto


- Mudança de etiqueta #trigger# por #alarm_trigger#

>**IMPORTANTE**
>
> Tenha cuidado, você deve atualizar seus cenários e as ações em seus alarmes. Esta alteração se deve a um conflito entre as tags de cenário e as tags de alarme que tinham o mesmo nome e portanto travaram

# 01/03/2024

- Preparando-se para Jeedom 4.4
- Corrigido um problema com a opção "zonas separadas" ao alterar o modo
- Melhoria da interface

# 22/01/2020

- Logs aprimorados em caso de vários alarmes

# 21/10/2019

- Correção de um bug durante a criação do equipamento

# 14/10/2019

- Corrigido um erro ao renomear um modo

# 28/04/2019

- Correções de bugs

# 23/04/2019

- Correções de bugs

# 17/01/2019

- Possibilidade de usar variáveis ou cálculos para os tempos de espera, ativação e disparo
- Atualizando o documento

# 18/07/2018

- Atualizando o documento
- Correção de bug nos modos de renomeação
- Se o alarme já estiver ativo, o armamento não o reativará
- Adição de uma opção para o disparo de várias zonas (se outra zona entrar em alerta, o alarme será disparado)
- Adição de ação ao retomar o monitoramento de um sensor
- Adicionando a tag #zone#
- Adicione um botão para duplicar um alarme

# 06/06/2018

- Adição de gerenciamento de pedidos órfãos
- Se os sensores estiverem desativados, as ações de ativação ok não serão mais acionadas
- Correções de bugs
- Detectores com atrasos na ativação e sempre ativos após esse atraso não acionam mais o alarme, mas iniciam uma ativação KO, com o monitoramento desse detector excluído até o retorno ao normal

# 12/12/2018

- Corrigido um erro ao mover ações no gatilho

- Possibilidade de adicionar um atraso de espera a um gatilho antes de ativar o alarme

# 01/12/2017

-   Correção de um bug na desativação de detectores

-   Gerenciamento de segundos no atraso de ativação (JEED-63)

-   Retrocedendo na não iniciação de ações imediatas se
    o atraso de ativação está vazio ou zero

-   Se durante a ativação um sensor estiver em alerta e não tiver atraso
    ativação, o alarme é acionado, ignorando esse sensor
    (a menos que ele volte para descansar)

-   Adição de ação de acionamento global (não filtrada mais por zona,
    é aconselhável usar isso em vez das ações de
    gatilho de zona)

-   Otimização de código

-   Atenção : o alarme não executa mais ações imediatas se não houver
    sem atraso de disparo !!!!!! ⇒ Cancelado

-   Capacidade de filtrar o desempenho das ações em relação a
    modo de alarme

-   Adicionar comando de pausa / retomar

-   Melhoria da interface de configuração
