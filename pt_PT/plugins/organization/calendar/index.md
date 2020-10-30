# Plug-in do calendário

Plugin que permite criar uma agenda e acionar ações (comando ou cenário).

# Configuração do plugin

A configuração é muito simples, depois de baixar o plugin, você só precisa ativá-lo e pronto.

# Configuração do equipamento

A configuração do equipamento da Agenda pode ser acessada no menu Plugins e depois em Organization.

Uma vez, você encontrará a lista da sua Agenda.

Aqui você encontra toda a configuração do seu equipamento :

-   **Nome de equipamentos** : nome do seu calendário.
-   **Objeto pai** : indica o objeto pai ao qual o equipamento pertence.
-   **Categoria** : categorias de equipamentos (pode pertencer a várias categorias).
-   **Ativar** : torna seu equipamento ativo.
-   **Visivél** : torna visível no painel.
-   **Widget, número de dias** : define o número de dias do evento a serem exibidos no widget.
-   **Número máximo de eventos** : define o número máximo de eventos a serem exibidos no painel.
-   **Não exibir comandos de status e ativação / desativação** : permite ocultar o status do calendário, bem como os comandos para ativá-lo ou não.
-   **Lista de eventos do calendário** : abaixo da lista de todos os eventos do calendário (clicar nele permite editar o evento diretamente).
-   **Adicionar evento** : adicionar um evento ao calendário.
-   **Agenda** : Exibição de uma visualização do tipo agenda com todos os eventos que você pode mover, escolha exibi-la por semana ou dia, mova eventos (arraste e solte) e um clique em um evento abrirá sua janela de edição.

# Editando um evento

A parte mais importante do plug-in, é aqui que você poderá configurar seu evento.

## Evento

Aqui você encontra :

-   **Nome do evento** : Nome do seu evento.
-   **ícone** : permite adicionar um ícone na frente do nome do seu equipamento (para fazer isso, você deve clicar em "Escolha um ícone").
-   **Cor** : permite que você escolha a cor do seu evento (uma marca de seleção também permite torná-lo transparente).
-   **Cor do texto** : permite que você escolha a cor do texto do seu evento.
-   **Não aparecer no painel** : permite não exibir este evento no widget.

## Iniciar ação

Permite que você escolha as ações a serem executadas ao iniciar o evento.

Para adicionar uma ação, basta clicar no botão + no final da linha, e você terá um botão para procurar um pedido, uma vez encontrado, você terá a opção de opções, se houver algum. Você pode adicionar quantas ações quiser.

> **Dica**
>
> É possível modificar a ordem das ações mantendo / arrastando-o


> **Dica**
>
>É possível executar as mesmas ações que nos cenários (consulte [aqui](https://jeedom.github.io/core/pt_PT/scenario))

## Ação final

Igual à ação inicial, mas desta vez é a (s) ação (ões) a executar no final do evento.

## Programmation

É aqui que todo o gerenciamento de tempo do seu evento está localizado :

-   **Começo** : Data de início do evento.
-   **Final** : Data de término do evento.
-   **O dia inteiro** : permite definir o evento durante todo o dia.
-   **Incluir por outro calendário** : Permite incluir outro evento no seu evento atual. Por exemplo, se você tiver um evento A repetido toda segunda-feira e incluir esse evento A no evento atual, esse evento será repetido automaticamente toda segunda-feira.
-   **Incluir** : permite forçar uma data de ocorrência, você pode colocar vários separando-os com, (vírgulas), também pode definir um intervalo com : (dois pontos).
-   **Repetida** : permite que você diga que seu evento é repetido (se essa caixa não estiver marcada, você não terá as seguintes opções).
-   **Modo de repetição** : permite especificar o modo de repetição, simples : todos os dias, todos os X dias ... ou repita a cada 1º, 2º ... para repetir um evento a cada 3ª segunda-feira do mês, por exemplo (as seguintes opções podem ser diferentes dependendo dessa opção).
-   **Repita cada** : \ [apenas modo de repetição única \] permite definir com que frequência o evento será repetido (por exemplo, a cada 3 dias ou a cada 2 meses).
-   **O** : \ [modo de repetição o primeiro, o segundo ... somente \] permite que você escolha uma repetição a cada 2ª segunda-feira do mês, por exemplo.
-   **Somente o** : permite restringir a repetição a determinados dias da semana.
-   **Restrição** : permite restringir o evento apenas em feriados ou excluir feriados.
-   **Até** : fornece a data final da ocorrência do evento.
-   **Excluir por outro calendário** : permite excluir este evento de acordo com outra agenda (por exemplo, para evitar que dois eventos contraditórios sejam encontrados juntos).
-   **Excluir** : igual a "Incluir", mas desta vez para excluir datas.

> **NOTA**
>
> Os feriados são franceses e somente o francês não funciona em outros países

> **NOTA**
>
> No canto superior direito, você tem 3 botões, um para excluir, um para salvar e outro para duplicar. Ao clicar no último, o jeedom exibe o evento resultante da duplicação, para que você possa alterar o nome, por exemplo.Portanto, não se esqueça de salvar seguindo um clique no botão duplicado

## Diário, pedidos e cenário

Uma agenda tem controles :

-   **Contínuo** : fornece uma lista dos eventos atuais separados por vírgulas, para usá-lo no cenário mais simples e para usar o operador contém (correspondências) ou não (não corresponde), por exemplo *\ [Apartamento \] \ [teste \] \ [Em andamento \]* corresponde a "/ Anniv /", será verdadeiro se na lista de eventos atuais houver uma "Anniv"
- **Adicionar uma data** : permite a partir de um cenário adicionar uma data a um evento (tenha cuidado se você alterar o nome do evento, também será necessário corrigi-lo no cenário). Você pode colocar vários eventos separados por ,
- **Remover uma data** : permite que um cenário exclua uma data de um evento (tenha cuidado se você alterar o nome do evento, também será necessário corrigi-lo no cenário). Você pode colocar vários eventos separados por ,

> **NOTA**
>
> É possível usar o comando "Em andamento" como um gatilho em um cenário, cada atualização das informações acionará a execução do cenário. No entanto, é preferível usar este comando em um cenário programado com um teste no valor.
