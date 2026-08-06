# Plugin de widget

O plugin do widget é um pouco especial, pois não permite criar equipamentos, mas modificar a renderização (exibição) de um pedido. O objetivo deste plugin é, portanto, simplesmente personalizar a maneira de exibir um valor, informação ou ação de acordo com seus gostos e desejos.

Desde a versão 1.112 do Jeedom, é possível personalizar widgets com opções específicas (criadas pelo desenvolvedor do widget). Para que possamos ter um widget que será exibido de maneira diferente de um pedido para outro.

Assim, podemos ter o mesmo widget escrito em azul em um pedido e em verde em outro.

> **NOTA**
>
> Widget e lado a lado, para não confundir.
>
> O widget é a parte que cuidará da formatação e exibição de informações ou pedidos. Um widget deve lidar apenas com um comando ou informação.
>
> La Tuile é um agrupamento de widgets para um módulo. Essa é a área na qual os diferentes widgets aplicados aos comandos e informações do módulo serão exibidos.

# Instalando o plugin Widget 

Como em qualquer plugin, o plugin Widget é instalado na interface do Jeedom, menu "Geral" ⇒ "Plugins"

![capture001](../images/capture001.png)

Clique no ícone verde para ir diretamente ao mercado. Nesta janela, clique em "Oficial" e, no campo de pesquisa, coloque "Widget"".

![capture002](../images/capture002.png)

Clique no ícone do plugin. Isso abre o arquivo do plugin, onde várias informações são encontradas.

![capture003](../images/capture003.png)

Clique no botão "Instalar estável"". Uma vez instalado, o Jeedom pergunta se você deseja ir para a página de configuração do plugin. Responda sim. Na página de configuração do plugin do widget, temos apenas uma opção para este plugin : ativar ou desativar.

Por padrão, o plug-in está desativado. Convido você a clicar no botão verde "ativar".

A partir de agora o plug-in está ativo e operacional.

# Apresentação e função básica do Widget Plugin 

Para acessar o plugin Widget, vá ao menu "Plugins" ⇒ "Programming" ⇒ "Widget".

![capture005](../images/capture005.png)

Então, nós estamos na página principal do plugin. Por padrão, este último possui uma variedade de widgets assim que é instalado.Você pode fazer o download de outros no mercado ou criar seus próprios widgets (veja abaixo).

![capture006](../images/capture006.png)

Ao clicar em um dos widgets da lista no menu direito ou esquerdo, você abrirá a página de configuração do widget, na qual poderá modificar, ver uma prévia do widget (se o Jeedom encontrar um comando compatível) e um todo muitas informações de configuração, como código-fonte do widget

![capture007](../images/capture007.png)

> **Aviso**
>
> Se você modificar um widget que não é uma de suas criações, é preferível duplicá-lo para evitar perder suas modificações se o widget original for atualizado.

Para mais informações sobre configuração e criação de widget, veja abaixo.

## Aplique o widget em um pedido 

Para aplicar um widget a um único comando ou modificar o aplicado, você deve ir para a página de configuração do módulo. O caminho para acessar o módulo difere de acordo com o tipo deste último. Aqui estão alguns exemplos :

Para módulos Z-Wave, "Plugins" ⇒ "Protocolo de automação residencial" ⇒ "Z-wave" e escolha o módulo do comando que você deseja modificar.

![capture024](../images/capture024.png)

Na página de configuração do módulo, acesse o comando e clique nas rodas dentadas. Na nova janela, vá para a guia "Visualização avançada""

![capture025](../images/capture025.png)

Aqui você pode modificar o widget aplicado a computadores e celulares com as listas suspensas dedicadas.

![capture014](../images/capture014.png)

> **NOTA**
>
> As listas suspensas são auto-filtradas. Eles fornecem apenas widgets compatíveis com o tipo de comando.

## Aplique o widget em vários comandos

En cliquant sur le bouton “Appliquer sur des commandes” vous ouvrez une fenêtre qui liste toutes les commandes compatibles avec le type du widget. Assim, você pode simplesmente aplicar ou remover o widget a vários pedidos de uma só vez.

![capture008](../images/capture008.png)

Basta verificar os comandos nos quais você deseja aplicar o widget

### Vários exemplos para a mesma ordem 

![Widget : badge-transparent](../images/capture009.png)

![Widget : badge](../images/capture010.png)

![Widget : ConsoIMG](../images/capture011.png)

## Opções de personalização de widget 

Desde a versão 1.112 do Jeedom, é possível personalizar widgets com opções específicas (criadas pelo desenvolvedor do widget) e comuns a todos os widgets. Para que possamos ter um widget que será exibido de maneira diferente de um pedido para outro.

Existem 2 maneiras de acessar essas opções. Ou pela árvore da automação residencial, que está no menu "Geral" ⇒ "Resumo da automação residencial"

![capture012](../images/capture012.png)

Nesta página, você encontra todos os elementos, objetos, módulos, comandos de automação residencial. Clique na pequena roda dentada para acessar a página de configuração.

![capture013](../images/capture013.png)

Na página de configuração do módulo.

![capture015](../images/capture015.png)

### Adicionar uma opção personalizada 

Na guia "Exibição avançada", existem 2 listas suspensas que permitem alterar o widget usado em um computador para o pedido e o outro para dispositivos móveis. Também existem outras opções: exibir ou não os nomes e as estatísticas, forçar a quebra de linha antes / depois do widget, se houver vários comandos em um módulo (quebras de linha no bloco). Finalmente, a lista de parâmetros opcionais do Widget aplicados

![capture014](../images/capture014.png)

![exemple 1 de valeur pour afficher un compteur spécifique](../images/capture016.png)

![exemple 2 de valeur pour afficher un autre compteur](../images/capture017.png)

> **NOTA**
>
> Para adicionar uma opção, basta clicar no botão "Adicionar", digite o nome da opção com as letras maiúsculas e minúsculas corretas, bem como o valor a ser atribuído à opção.

## Configuração avançada

Consulte o documento no resumo da automação residencial ⇒ [Aqui](https://jeedom.github.io/core/pt_PT/display)

## Criação / modificação de widget
O plugin oferece 2 possibilidades para a criação de Widgets, o modo fácil, que permite fazer widgets básicos facilmente com um assistente de criação, e o modo avançado, que também permite a modificação de todos os widgets a partir de então.

> **NOTA**
>
> O modo avançado fornece flexibilidade ilimitada. No entanto, você precisa ter algum conhecimento da linguagem de programação básica, como HTML e CSS para a base e JavaScript, para poder fazer as coisas um pouco mais complexas.

### Modo de criação fácil

Para criar um widget com o assistente, basta acessar o plugin : Menu "Plugins" ⇒ "Programação" ⇒ "Widget". Nesta página, clique no botão "Modo de criação fácil" no canto superior esquerdo.

![capture026](../images/capture026.png)

Na nova página, você pode, na parte direita, visualizar os ícones básicos do Jeedom, as imagens importadas e os pacotes importados. No lado esquerdo, primeiro um botão para importar pacotes ou imagens, depois três botões para criar um widget.

![capture027](../images/capture027.png)

-   Widget On / Off ⇒ Destinado a comandos de botão para on / off
-   Widget de Estado Simples ⇒ Destinado a comandos com feedback de status
-   Widget Numérico ⇒ Destinado a comandos que enviam um valor numérico (exemplo : Temperatura, brilho ... etc)

#### Exemplo com a criação de um widget de status 

> **NOTA**
>
> Este exemplo permanece aplicável aos outros 2 tipos de criação

Clique no botão "Simple State Widget". Chegamos à página de configuração assistida. Você deve dar um nome ao widget (nome exclusivo), o tipo de interface, se o widget for destinado ao PC (painel) ou dispositivo móvel, e depois à biblioteca a ser usada (Jeedom, imagem pessoal ou pacotes).

![capture028](../images/capture028.png)

Em seguida, você deve escolher o ícone para os estados 0 e 1, bem como o tamanho do ícone (valor em "EM" =% do tamanho original da fonte do navegador, 1 = 100%). Feito isso, o código fonte aparece abaixo da área de configuração.

> **Aviso**
>
> Não modifique essas informações se você não souber o que está fazendo.

Resta validar para finalizar a criação do widget. Você será redirecionado automaticamente para a página de configuração avançada, que permite aplicar o widget a vários comandos

### Criação / modificação no modo avançado 

No modo avançado, você deve ter conhecimento da linguagem de programação "HTML", "CSS" e "JavaScript" para poder modificar um widget corretamente.

> **NOTA**
>
> Existem vários sites em FR na web para aprender esses idiomas, eu recomendo o OpenClassRoom, que explica tudo desde o início.

Para acessar o modo avançado, basta acessar o plugin do widget, escolher o widget a ser modificado ou clicar no botão "Adicionar widget""

#### Criando um widget 

Na página principal do plug-in, clique em "Adicionar um widget". Jeedom pede algumas informações sobre o widget futuro.

![capture029](../images/capture029.png)

-   O nome deve ser um nome exclusivo. Portanto, verifique se esse nome ainda não existe.
-   Versão, corresponde ao tipo de dispositivo a que se destina (PC ou Celular).
-   Tipo, corresponde ao tipo de comando que usará o widget: nenhum, informação ou ação.
-   Subtipo, fornece precisão ao tipo escolhido anteriormente.

Você pode alterar o nome, o tipo e o subtipo posteriormente. No entanto, isso pode ter implicações se o widget já estiver aplicado a um ou mais comandos. Portanto, é melhor evitá-lo.

##### Informações do tipo 

O tipo "info" é usado para comandos que retornam um valor, por exemplo, um estado do módulo, um valor numérico (temperatura, brilho, umidade etc.), um texto ou qualquer outra informação.

-   Digital : para números
-   Binário : para estados liga / desliga (0/1)
-   Outro : para todos os outros tipos de informações, como textos

##### O tipo de ação 

O tipo "action" é usado para comandos que terão uma ação no Jeedom ou em equipamento externo.

-   Falha : usado para criar botões de ação
-   Slider : usado para criar cursores para alterar valores numéricos
-   Mensagem : Usado para criar uma área de entrada de texto com o botão enviar
-   Cor : usado para criar um botão de escolha de cores

Depois de configurado, clique em "Adicionar". O Jeedom o redireciona para a página principal de configuração / modificação de Widget. A partir daí, o widget é criado no Jeedom, mas atualmente não contém nenhum código para exibir o comando.

![capture030](../images/capture030.png)

#### Editando um widget 

Uma vez na página principal de configuração de um widget, é na parte "código fonte" que as alterações na aparência se aplicam.

> **Aviso**
>
> Para modificar essas informações, você precisa ter noções básicas de programação em HTML, CSS e JavaScript. As modificações podem ter um impacto significativo na exibição do widget e na exibição de outros widgets, ou mesmo bloquear a exibição de todos os widgets.

A base (esqueleto) de um widget está em HTML. Isso permite que você estruture a exibição e encontre informações de maneira mais simples.

No Jeedom para widgets, o primeiro pedaço de código a ser criado é um "div" que atuará como o contêiner principal de todo o código em nosso Widget.

Nesta "div", você pode encontrar até 3 sub-partes distintas :

-   A parte HTML que exibirá as informações
-   A parte CSS, que a tornará mais atraente, formatando a parte HTML (parte opcional)
-   A parte JavaScript que permite trabalhar em várias ações, cálculos e animações

##### Código HTML 

Em vez de discursos longos, aqui está um exemplo de código básico para um widget

**Estrutura HTML básica.**

````
<div>
    <center>
        <span></span>
    </center>

    <style>

    </style>

    <script>

    </script>
</div>
````

A estrutura básica que esquematiza os diferentes locais em nosso widget agora é criada. No entanto, não temos nada exibido, é normal.

- ``div`` : recipiente multiuso relativamente versátil com alimentação de linha após
- ``center`` : tag que centraliza seu conteúdo
- ``span`` : recipiente multiuso relativamente versátil, sem alimentação de linha após
- ``style`` : Contêiner para o código CSS que será aplicado em geral (tenha cuidado, seu conteúdo pode afetar todos os elementos da página)
- ``script`` : tag que conterá JavaScript

Como é, é difícil fazer qualquer coisa com esse pedaço de código. É por isso que adicionaremos algumas opções (denominadas Atributo na linguagem HTML) em nossas tags.

**Adição de atributos básicos.**

````
<div class="Doc-#id# cmd tooltips cmd-widget #history#" title="" data-type="info" data-subtype="numeric" data-cmd_id="#id#" >

    <center>
        <span></span>
    </center>

    <style>

    </style>

    <script>

    </script>
</div>
````

No nosso ``div`` principal nós adicionamos vários atributos :

``id`` : O atributo "id" não é recomendado no Jeedom

> **IMPORTANTE**
>
> Para evitar conflitos no nível de IDs (que podem travar toda a página da web), no Jeedom, usamos identificações de classe e atributos "data"-". Isso possibilita garantir que, em caso de colisão, a página da Web inteira não seja bloqueada.

classe : Classes diferentes dos IDs não são exclusivas. Eles são usados para aplicar um estilo definido na parte do estilo (a tag). Assim, podemos simplesmente reproduzir a mesma formatação que criamos uma vez e que reutilizamos por palavra-chave (classe). Aqui, adicionamos várias classes básicas definidas e disponíveis no Jeedom (consulte a classe Jeedom abaixo).

O Jeedom usa, em vez do atributo id, uma classe como id, isso torna possível tornar um elemento único na página para encontrá-lo e direcioná-lo mais facilmente. É imperativo que seu valor seja único na página. Para isso, aconselho que você use uma palavra que represente nosso elemento. No nosso exemplo, a div representa todo o nosso widget, para que possamos usar o nome do nosso widget ou uma abreviação (aqui eu escolhi Doc-). Então, para garantir que o ID da classe seja único, colocaremos uma tag "#id#" (para obter mais informações sobre tags Jeedom, veja abaixo), que fornece "Doc-#id#".

- ``data-type`` : esse atributo permite armazenar o tipo de comando no qual o widget será aplicado. Portanto, seu valor deve corresponder ao parâmetro de tipo acima da área de código.
- ``data-subtype`` : esse atributo permite armazenar o subtipo do comando no qual o widget será aplicado. Portanto, seu valor deve corresponder ao parâmetro subtipo acima da área de código.
- ``data-cmd\_id`` : Este atributo assume como valor o Tag \#id\#. É usado pelo Jeedom para atualizar o Painel.

A partir daí, temos uma base que corresponde ao padrão Jeedom. É
o código minimalista necessário para ter um widget que respeite o
Regra / regra Jeedom

> **IMPORTANTE**
>
> Não se esqueça de modificar o atributo data-type e data-subttype se você modificar esses valores na configuração do widget.

##### Código CSS 

Esta parte que é adicionada entre as duas tags "style", permite declarar regras de formatação. Esta parte é opcional porque você pode adicionar a formatação diretamente no atributo style de uma tag ou usando JavaScript. O uso desta parte é, portanto, uma questão de preferência para separar adequadamente HTML e CSS

> **Aviso**
>
> Qualquer código declarado em tags de estilo se aplica a toda a página. Portanto, tenha cuidado com o seletor de CSS que você escolher para não alterar os outros widgets.

Para não afetar acidentalmente outros widgets pelo código CSS que você colocará lá, aconselhamos que você use o seletor de identificação que segmenta seu widget.

Por exemplo, se eu quiser colocar em vermelho o texto localizado na tag "Span", tenderemos a escrever :

**Código inserido na tag Style.**

````
span{
    color: red;
}
````

Mas isso mudaria a cor do texto de toda a extensão da página. Portanto, para evitar isso, adicione um seletor de ID direcionado ao seu widget para limitar sua ação :

**Código inserido na tag Style e delimitado.**

````
.Doc-#id# span{
    color: red;
}
````

Adicionando .Doc- \#id\# na frente do seletor de span, delimitamos a modificação dentro do nosso widget.

##### Código JavaScript 

JavaScript é colocado entre as tags "Script". Usamos JavaScript para fazer cálculos, converter dados, animar o widget, formatar o widget, executar ações no widget com base em eventos. Além do JavaScript básico, o Jeedom incorpora, por padrão, várias estruturas que simplificam o código JavaScript. Para que possamos usar sem inicializá-los :

-   Jquery
-   UI do Jquery
-   Bootstrap

> **Aviso**
>
> No caso de um erro no código JS, isso pode bloquear todos os códigos JS que podem ser seguidos, seja no widget ou em outros widgets. Portanto, tenha cuidado ao fazer alterações.

> **Dica**
>
> Se, após salvar uma modificação de um widget, a roda dentada contida para girar indefinidamente, você pode ter cometido um erro de JS que causa o travamento da continuação da execução do JS na página. Para poder corrigi-lo, basta passar o div id = jqueryLoadingDiv no display none usando o console do navegador, corrigir o código e salvar. Você também precisa fazer o F5 para atualizar a página.

### Tags Jeedom 

No Jeedom, você encontrará frequentemente tags com nomes entre "\#". O princípio de operação dessas tags é simples : Jeedom irá substituí-los pelo valor que corresponde à tag. Tags são tipos de variáveis (caixas) nas quais os valores desconhecidos no momento da gravação do código são armazenados. É um pouco como criar um texto com espaços em branco para colocar palavras mais tarde que dariam significado variável ao texto.

Nem todas as tags estão disponíveis com todos os tipos de pedidos, então aqui está a lista e seus detalhes :

- \#id\# : ID do pedido criado por Jeedom quando o pedido foi criado (valor numérico único). Use como texto, em JS ou em atributos HTML
- \#logicalId\# : ID do pedido lógico (pode estar vazio). Use como texto ou em JS
- \#name\# : Nome do comando.  Use como texto ou em JS
- \#name\_display\# : Nome do comando. Para ser usado para exibir o nome do comando no nível do widget. Use como texto ou em JS
- \#hideCmdName\# : Vazio se o nome do comando precisar ser exibido. E "exibição:none; "se o nome do comando não for exibido. Use nos atributos de estilo HTML (CSS)
- \#maxValue\# : Valor máximo que pode receber o pedido. Use como texto, em JS ou em atributos HTML
- \#valueName\# : Nome do comando info vinculado, se o comando action estiver vinculado a um comando info, caso contrário, nome do comando action. Use como texto ou em JS
- \#lastValue\# : Último valor do pedido (pode estar vazio). Use como texto ou em JS
- \#unite\# : Unidade de comando Para ser usado como texto ou em JS
- \#collectDate\# : Retorna a data e hora da última atualização do widget em formato ``yyyy-mm-dd hh:mn:ss`` Use como texto, em JS ou no atributo title
- \#state\# : Valor do comando Para ser usado como texto ou em JS
- \#displayHistory\# : Permite que você leve em consideração a opção "Exibir estatísticas em widgets" no menu "Geral" ⇒ "Administração" ⇒ guia "Configuração" "Configuração de comandos". Se a opção estiver ativada, a tag retornará um espaço em branco, caso contrário ``display : none;`` Para ser usado no atributo "style" de uma tag html para exibir se o log estiver ativado na configuração do Jeedom
- \#averageHistoryValue\# : Valor médio nas últimas x horas do comando Para ser usado como texto ou em JS
- \#minHistoryValue\# : Mínimo nas últimas x horas do pedido Para ser usado como texto ou em JS
- \#maxHistoryValue\# : Máximo nas últimas x horas do pedido Para ser usado como texto ou em JS
- \#tendance\# : Permite se o histórico do valor estiver ativado para retornar a classe : ``fa fa-minus``, ``fa fa-arrow-up`` onde ``fa fa-arrow-down`` (ícone de linha, seta para baixo, seta para cima), vinculada à tendência do valor A ser usado no atributo ``class`` uma etiqueta ``i``
- \#history\# : Permite se o histórico do valor estiver ativado para retornar a classe : 'cursor de histórico '(consulte a classe CSS Jeedom), caso contrário, ele será substituído por um. A tag, portanto, permite exibir ou não o gráfico do histórico no painel. Para ser usado no atributo "class" da div principal

![Exemple de retour de valeur](../images/capture031.png)

### Classes CSS Jeedom 

- ``cmd`` : Deve ser adicionada ao atributo "class" da div principal, essa classe permite que o widget seja atualizado. Sem essa classe, o widget é atualizado apenas atualizando a página.
- ``cmd-widget`` : Essa classe é recomendada porque permite adicionar alguns parâmetros CSS padrão ao widget para um bom comportamento.
- ``cursor`` : Permite alterar o ponteiro na mão.
- ``history`` : Essa classe permite modificar o ponteiro na mão e ao clicar para exibir o histórico do valor do widget.
- ``tooltips`` : É para o título de um elemento, em vez de ser amarelo, torna-se preto translúcido com o texto em branco

# Faq 

>**Como aprender a criar um widget ?**
>
>O sistema de widgets é baseado nas linguagens HTML e Javascript, por isso é aconselhável assistir aos cursos (muito numerosos) nessas linguagens. Além disso, é interessante ler também cursos sobre Jquery (e Jquery mobile para a versão móvel de widgets). Outra maneira é criar um widget em "criação fácil", para que o plugin gere automaticamente o código dos seus widgets.
