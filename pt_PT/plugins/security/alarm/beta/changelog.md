# Changelog Alarm

>****
>
>Como lembrete, se não houver informações sobre a atualização, isso significa que se trata apenas da atualização da documentação, tradução ou texto

- Corrigido um problema com a opção "zonas separadas" ao alterar o modo

# 

- Logs aprimorados em caso de vários alarmes

# 

- Correção de um bug durante a criação do equipamento

# 

- Corrigido um erro ao renomear um modo

# 

- Correções de bugs

# 

- Correções de bugs

# 

- Possibilidade de usar variáveis ou cálculos para os tempos de espera, ativação e disparo
- Atualizando o documento

# 

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

# 

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

-    : o alarme não executa mais ações imediatas se não houver
    sem atraso de disparo !!!!!! ⇒ Cancelado

-   Capacidade de filtrar o desempenho das ações em relação a
    modo de alarme

-   Adicionar comando de pausa / retomar

-   Melhoria da interface de configuração
