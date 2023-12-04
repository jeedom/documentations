# Plug-in EcoRT2

Este plug-in permite gerenciar um IPX 800 v4.

# Configuração do plugin

Depois de baixar o plugin, você só precisa ativá-lo, não há configuração neste nível.

> **NOTA**
>
> Você pode ver nesta página o estado do daemon que monitora o ecoRT2.

# Configuração do equipamento

A configuração do equipamento ecoRT2 pode ser acessada no menu do plug-in e depois no protocolo de automação residencial :

Aqui você encontra toda a configuração do seu equipamento :

-   **Nome do equipamento EcoRT2** : nome do seu equipamento ecoRT2.
-   **Objeto pai** : indica o objeto pai ao qual o equipamento pertence.
-   **Ativar** : torna seu equipamento ativo.
-   **Visivél** : torna seu equipamento visível no painel.
-   **Categoria** : categorias de equipamentos (pode pertencer a várias categorias).
-   **IP** : O ecoRT2 ip.
-   **Chave de API** : chave da API ecoRT2 (por padrão, a chave da API é apikey).
-   **Extensão** : aqui você deve indicar as extensões presentes no ecoRT2 para que o jeedom possa consultá-las. Exemplo para enOcean você deve colocar ENO (se você tiver vários, você deve separá-los com vírgulas (``,``)). Todas as extensões são normalmente suportadas, para o código da extensão colocar é necessário consultar a documentação desta.

O plugin padrão não cria nada. Caberá a você fazer isso de acordo com sua configuração, mas você será guiado.

# Commandes

## Action

Você tem os tipos de ação :

-   **Nós** : permite definir uma saída (ou entrada virtual) para 1 ou atribuir um valor a uma entrada analógica (ou contador)).
-   **Fora** : permite definir para 0 uma saída (ou entrada virtual).
-   **Alternar** : permite reverter o estado de uma saída (ou entrada virtual).

Você tem os tipos de atuadores :

-   **Relé**
-   **Saída virtual**
-   **Contador**
-   **Fio piloto**

> **NOTA**
>
> Alguns tipos de atuadores podem estar ocultos dependendo do tipo de ação.

Então, dependendo do tipo de ação e do atuador, você tem vários parâmetros que podem ser :

-   número do relé
-   número de saída virtual
-   número e operação do contador (ex +200 ou -100)
-   número do fio piloto e valor do pedido (0 conforto, 1 eco, 2 sem gelo, 3 desligados, 4 conforto-1, 5 conforto-2)

## Info

Você tem tipos diferentes :

-   Postagem instantânea
-   Relais
-   Saída virtual
-   Entrada digital
-   Compteur
-   EnOcean
-   Índice de contador
-   Índice de toro
-   Índice de consumo Toro
-   Índice de Toro de Distribuição
-   Índice de tele-informação
-   Índice de posição
-   Índice / dia da publicação
-   Preço total de balcão
-   Preço total do toro
-   Preço total do consumo em toro
-   Preço total do toróide da distribuição
-   Combinação de preços de tele-informação
-   Preço acumulado de postagem
-   Acumulação de preço / dia pós
-   Fio piloto

Para cada tipo, o jeedom solicitará o número da informação desejada.
