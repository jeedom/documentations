# Plugin de alarme

O plugin Alarme permite à Jeedom ter um sistema de alarme real para automação residencial, muito simples de usar e configurar.

## Configuração do plugin

Depois de baixar o plugin, você só precisa ativá-lo, não há configuração adicional nesse nível.

## Conceito imediato

Esta é uma noção muito importante do plugin Alarme e é muito importante entendê-lo bem. Para simplificar, é como se você tivesse 2 alarmes, o primeiro : o alarme imediato que não leva em consideração os tempos de disparo (observe que leva em consideração os tempos de ativação) e um segundo alarme que leva em consideração os tempos de disparo.

**Por que essa noção imediata ?**

Essa noção imediata permite desencadear ações muito específicas. Por exemplo : você vai para casa e não desativou o alarme; antes de ativar a sirene, pode ser bom transmitir uma mensagem lembrando que você deve desativar o alarme e, se isso não for feito 1 minuto depois (atraso d '' ativação de 1 minuto) para ativar a sirene.

Essa noção é encontrada em diferentes tipos de ações, cada vez que seu princípio for detalhado.

## Equipements

A configuração do equipamento de alarme pode ser acessada no menu Plugin => Security.

Depois que um alarme é adicionado, você acaba com :

-   **Nome do equipamento de alarme** : nome do seu alarme,
-   **Objeto pai** : indica o objeto pai ao qual o equipamento pertence,
-   **Categoria** : a categoria do equipamento (segurança em geral para um alarme),
-   **Ativar** : torna seu equipamento ativo,
-   **Visivél** : torna seu equipamento visível no painel,
-   **Ativo o tempo todo** : indica que o alarme estará permanentemente ativo (por exemplo, para um alarme de detecção de incêndio),
-   **Armamento visível** : permite tornar visível ou não o comando de ativação do alarme no widget,
-   **Status visível imediato** : permite tornar visível o status imediato do alarme (veja abaixo a explicação),
-   **Status e status do alarme de log** : permite registrar ou não o estado e o status do alarme.
-   **Zonas separadas** : torna as zonas independentes em termos de alertas. Normalmente, se uma zona estiver em alerta, o plug-in ignorará as outras zonas. Ao separar as zonas, ele repetirá as ações para as outras zonas que entrariam em alerta
-   **Reset automático** : Quando acionado, o alarme completo é redefinido para evitar disparos subseqüentes (em tempos normais, ele não é rearmado até que exista um cenário / ação humana para fazer isso)
-   **Não tome medidas imediatas se o sensor não tiver atraso** : diz ao alarme para não executar ações imediatas se o sensor não tiver um atraso no gatilho, o alarme executará apenas as ações

> **Dica**
>
> Para cada ação, é possível especificar o modo em que deve ser executado ou em todos os modos

## Zones

Parte principal do alarme. É aqui que você configura as diferentes zonas e as ações (imediatas e diferidas por zona, observe que também é possível configurá-las globalmente) a serem executadas no caso de acionamento. Uma área pode ser volumétrica (para o dia, por exemplo) ou perímetro (para a noite) ou também áreas da casa (garagem, quarto, dependências ...).).

Um botão no canto superior direito permite adicionar quantos você quiser.

> **Dica**
>
> É possível editar o nome da área clicando no nome da área (em frente ao rótulo "Nome da área"").

Uma área é composta de diferentes elementos : - gatilho, - ação imediata, - ação.

## Gatilho

Um gatilho é um comando binário que, quando definido como 1, dispara o alarme. É possível reverter o gatilho, de modo que seja o estado 0 do sensor que aciona o alarme, colocando "reverso" em SIM. Depois de escolher seu gatilho, você pode especificar um atraso de ativação em minutos (não é possível descer abaixo do minuto). Esse atraso permite, por exemplo, se você ativar o alarme antes de sair de casa, para não acioná-lo por um minuto (o tempo para deixá-lo sair)). Em outros casos, alguns detectores de movimento permanecem no modo acionado (valor 1) por um certo tempo, mesmo que não haja detecção, por exemplo, 4 minutos; portanto, é bom adiar a ativação desses sensores em 4 ou 5 min para que o alarme não toque imediatamente após a ativação. Então você tem o atraso de disparo, ao contrário do atraso de ativação que ocorre apenas uma vez quando o alarme é ativado, ele é configurado após cada disparo de um sensor. A cinemática é a seguinte quando o sensor é acionado (abertura da porta, detecção de presença); se os tempos de ativação tiverem passado, o alarme acionará as ações imediatas, mas aguardará até que o tempo de acionamento termine antes de acionar. as ações. Finalmente, você tem o botão "reverso", que permite reverter o estado de disparo do sensor (0 em vez de 1).

Você também tem um parâmetro **Mantém** que permite especificar um tempo de espera do gatilho antes de disparar o alarme. Por exemplo, se você possui um detector de fumaça que, às vezes, gera alarmes falsos, pode especificar um atraso de 2s. Quando o alarme é acionado, o Jeedom espera 2s e verifica se o detector de fumaça ainda está em alerta, se não for o caso, não acionará o alarme.  

Pequeno exemplo para entender : no primeiro gatilho (*\ [Salão \] \ [Olho \] \ [Presença \]*) Eu tenho aqui um tempo de ativação de 5 minutos e um tempo de disparo de 1 minuto. Isso significa que, quando eu ativo o alarme, durante os primeiros 5 minutos, nenhum acionamento do alarme pode ocorrer devido a esse sensor. Após esse atraso de 5 minutos, se um movimento for detectado pelo sensor, o alarme aguardará 1 minuto (o tempo para permitir que eu desative o alarme) antes de acionar as ações. Se eu tivesse ações imediatas, elas teriam sido acionadas imediatamente sem aguardar o final do período de ativação, ações não imediatas teriam ocorrido após (1 minuto após as ações imediatas).

### Ação imediata

Como descrito acima, são ações que são acionadas após o acionamento sem levar em consideração o atraso do acionador (mas ainda levando em consideração o atraso da ativação). Você só precisa selecionar o comando de ação desejado e, em seguida, preencher os parâmetros de execução.

> **NOTA**
>
> Quando várias zonas são acionadas sucessivamente, apenas as ações imediatas da 1ª zona acionada são executadas.

## Modes

Os modos são bem simples de configurar, basta indicar as zonas ativas de acordo com o modo.

> **Dica**
>
> É possível renomear o modo clicando em seu nome (ao lado do rótulo "Nome do modo""). Atenção durante a renomeação de um modo, é absolutamente necessário revisar os cenários / equipamentos que usam o nome antigo para transmiti-los aos novos

> **NOTA**
>
> Ao renomear um modo, você deve clicar no widget de alarme no modo em questão para uma consideração completa (caso contrário, o Jeedom permanecerá no modo antigo)

> **IMPORTANTE**
>
> É absolutamente necessário criar pelo menos um modo e atribuir zonas a ele, caso contrário seu alarme não funcionará.

## Ativação OK

Esta parte define as ações a serem executadas após a ativação do alarme. Aqui, novamente, você encontrará a noção imediata que representa as ações a serem executadas imediatamente após o acionamento do alarme e, em seguida, as ações de ativação que são executadas após os tempos de disparo.

No exemplo, acendo, por exemplo, uma lâmpada vermelha para sinalizar que o armamento foi levado em consideração e desligo quando a armação estiver concluída (porque normalmente não há ninguém no perímetro do alarme, caso contrário ele o aciona).

> **IMPORTANTE**
>
> As ações de ativação OK não levam em consideração os tempos de ativação. Se houver um atraso na ativação de um sensor de abertura, mesmo se sua porta estiver aberta, as ações de ativação serão executadas.

## Ativação de KO

Essas ações são executadas se um sensor for acionado após a ativação do alarme ou após o atraso de ativação de um sensor se estiver em alerta

Aqui você também pode adicionar ações ao retomar o monitoramento de um sensor

## Trigger

Permite configurar as ações globais a serem executadas quando um alarme é acionado. Você não precisa adicionar mais se tiver configurado ações específicas por zona.

## Desativação OK

Essas ações são executadas quando o alarme é desativado e não é acionado. Exemplo: quando você vai para casa, ao abrir a porta, o alarme é acionado, mas você definiu um atraso no sensor e disparou o alarme antes do final do atraso, as ações de desativação OK serão executadas. Se, por outro lado, você tivesse interrompido o alarme após o final do atraso do disparo, esse não seria o caso.

## Reset

Esta parte permite definir as ações a serem executadas quando o alarme é acionado e, em seguida, desativado. Aqui também existem ações imediatas e diferidas. Aqui está um exemplo : você vai para casa, os tempos de ativação já passaram, mas abrir a porta aciona o alarme. Se você desativá-lo (antes dos tempos de disparo), as ações de redefinição imediata serão executadas, mas não as ações de redefinição normais. Se você desativá-lo após o tempo de disparo, as ações de redefinição imediata e normal serão executadas.

## FAQ

>**Quais são as possíveis tags ?**
>
> As tags possíveis são :
>
> - #mode# : nome do modo atual
> - #alarm_trigger# : nome do comando que acionou o alerta
> - #zone# : nome da área do comando que acionou o alerta

>**Como redefinir um alarme permanente ?**
>
>Basta clicar em um dos modos de alarme (mesmo o ativo)).

>**Podemos colocar os atrasos em segundos ?**
>
>É possível para o "atraso de disparo" (você deve colocar números decimais, ex : 0.5 por 30 segundos), mas não para o "Atraso na ativação" (não use dígitos decimais para este parâmetro).

>**Eu não entendo meu alarme não faz nada**
>
>Verifique se o alarme está no modo ativo
