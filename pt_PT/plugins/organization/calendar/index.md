# Plug-in do calendário

O plugin **Agenda** permite que você gerencie calendários e acione ações no início e / ou no final de um evento.

# Configuration

## Configuração do plugin

Este plugin não requer nenhuma configuração especial e deve simplesmente ser ativado após a instalação.

## Configuração do equipamento

O equipamento é acessível a partir do menu **Plugins → Organização → Agenda**.

Nesta página você encontrará a lista de suas agendas. Clique em uma agenda para acessar a configuração do equipamento correspondente :

- **Nome da agenda** : nome do seu calendário.
- **Objeto pai** : indica o objeto pai ao qual o equipamento pertence.
- **Categoria** : categorias de equipamentos *(pode pertencer a várias categorias)*.
- **Ativar** : permite tornar o equipamento ativo.
- **Visivél** : permite tornar o equipamento visível no painel.


- **Ferramenta** :
    - **Número de dias** : definir o número máximo de dias para exibir no widget.
    - **Número de eventos** : definir o número máximo de eventos a serem exibidos no widget.


- **Lista de eventos do calendário** : exibe a lista de todos os eventos da agenda *(um clique no nome permite que você edite o evento)*.

A guia **Agenda** permite que você exiba uma visão do tipo de agenda incluindo todos os eventos. Você pode mover o calendário, escolher exibi-lo por dia, semana ou mês e até mover eventos arrastando e soltando. Clicar em um evento abre a janela de edição para o evento em questão.

# Eventos

## Criação de um evento

Para criar um novo evento, clique no botão **Adicionar evento** na página de configuração da agenda à qual o evento deve ser anexado ou no botão **Duplicado** da janela de configuração de um evento pertencente à mesma agenda.

## Configuração do evento

A janela de criação / configuração de eventos permite que você defina os parâmetros, ações e recorrência específicos para cada evento. Na primeira guia, você encontra :

-   **Nome do evento** : Nome do seu evento.
-   **Esconder no Widget** : permite não exibir este evento no widget.
-   **ícone** : permite que você adicione um ícone na frente do nome do evento *(clique no botão "Escolha um ícone")*.
-   **Cor de fundo** : permite que você escolha a cor de fundo do evento *(marque a caixa para um fundo transparente)*.
-   **Cor do texto** : permite-lhe escolher a cor do texto do evento.

No canto superior direito da janela de edição de eventos existem 3 botões:

- **Duplicado** : permite que você duplique o evento para criar um novo *(lembre-se de salvar o novo evento assim gerado)*.
- **Salve ** : permite que você salve o evento.
- **Deletar** : permite-lhe apagar todo o evento ou apenas uma ocorrência.

## Iniciar / terminar ações

Nesta aba, você poderá definir as ações a serem realizadas no início e / ou no final do evento. Para adicionar uma ação, basta clicar no botão **+ Iniciar / terminar ação**, você pode adicionar quantas ações quiser.

![Ajouter des actions](../images/calendar_addActions.png)

As ações podem ser comandos Jeedom padrão ou [comandos específicos do cenário](https://doc.jeedom.com/pt_PT/core/4.1/scenario#Les%20commandes%20sp%C3%A9cifiques).

>**TRUQUE**
>
>É possível alterar a ordem das ações arrastando e soltando.

## Programação de eventos

É nesta aba que você encontra toda a gestão de tempo do seu evento :

- **Datas** :
    - **Começo** : Data de início do evento.
    - **Final** : Data de término do evento *(o ícone no final da linha é usado para definir o evento durante todo o dia)*.
- **Incluir por data** : permite que você adicione uma data de ocorrência. Você pode definir vários separando-os por ``, (virgules)`` *(exemple: AAAA-MM-DD, AAAA-MM-DD)*. Também é possível definir um intervalo de datas com ``: (deux points)`` *(exemple: AAAA-MM-JJ:AAAA-MM-JJ)*.
- **Incluir por calendário** : permite incluir ocorrências de acordo com as de outra agenda ou de outro evento. Por exemplo, você tem um evento ``A``, repetido toda segunda-feira, o que você inclui em seu evento atual : então o seu evento atual também será repetido todas as segundas-feiras.
- **Excluir por data** : igual a **Incluir por data** mas para ignorar as ocorrências.
- **Excluir por calendário** : permite que você exclua este evento de acordo com outra agenda ou evento *(para evitar que 2 eventos contraditórios sejam encontrados juntos, por exemplo)*.

>**EM FORMAÇÃO**
>
>As opções **Excluir por data** e **Excluir por calendário** só estão acessíveis se a repetição do evento estiver ativada.

## Repetição de eventos

A repetição irá permitir-lhe configurar as ocorrências dos seus eventos exactamente como deseja :

- **Ativar** : marque a caixa para ativar a repetição e exibir as opções correspondentes.
- **Modo - repetição única** :
    - **Repita cada** : permite que você defina a frequência de repetição do evento *(a cada 3 dias, a cada 2 meses, etc)*.
    - **Somente o** : permite restringir a repetição a determinados dias da semana.
- **Modo - Repetição avançada** :
    - **Frequência** : permite que você escolha uma repetição toda segunda segunda-feira do mês, por exemplo...
- **Restrição** : permite excluir feriados ou restringir o evento apenas a feriados / semanas pares / semanas ímpares.
- **Até** : última data de ocorrência do evento.

>**EM FORMAÇÃO**
>
>Os feriados nacionais só dizem respeito à França metropolitana.

# Diário, pedidos e cenário

Um diário tem vários comandos :

- **Contínuo** : dá a lista de eventos atuais separados por vírgulas. Para usá-lo em um cenário, a maneira mais fácil é usar o operador *"contient"* (``matches``) Onde *"não contém"* (``not matches``) *(exemplo : ``[Appartement][test][Contínuo] matches "/Anniv/"`` será verdadeiro se na lista de eventos atuais houver "Aniv")*.
- **Adicionar uma data** : permite, a partir de um cenário, adicionar uma data a um evento. Você pode adicionar várias datas, separando-as com vírgulas *(tenha cuidado se você mudar o nome do evento, ele terá que ser mudado no cenário)*.
- **Remover uma data** : permite, a partir de um cenário, remover uma data de um evento. Você pode remover várias datas, separando-as com vírgulas *(tenha cuidado se você mudar o nome do evento, ele terá que ser mudado no cenário)*.

>**EM FORMAÇÃO**
>
>É possível usar o comando "Em andamento" como um gatilho de cenário. Cada atualização de informação irá disparar a execução do cenário, por isso é preferível usar este comando em um cenário programado com um teste no valor.
