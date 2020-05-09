Este plug-in permite gerenciar um IPX 800 v4

Configuração do plugin 
=======================

Após o download do plug-in, basta ativá-lo e marcar as caixas que lhe interessam para solicitações de IPX800v4 (por exemplo, verifique o X-Dimmer se você tiver um X-dimmer). Você também pode escolher a frequência das solicitações para aliviar a carga no ipx800v4

> **Important**
>
> Após cada modificação da frequência ou dos pedidos, é necessário reiniciar o demônio para que isso seja levado em consideração.

> **Important**
>
> Para aliviar a carga, é recomendável desmarcar TODAS as solicitações de tipo e apenas verificar as APIs que lhe interessam (você encontrará detalhes na documentação da API para IPX800v4)

> **Note**
>
> Você pode ver nesta página o status do daemon que monitora o IPX800

Configuração do equipamento 
=============================

A configuração dos dispositivos IPX800 pode ser acessada no menu
plugin, em seguida, protocolo de automação residencial :

Aqui você encontra toda a configuração do seu equipamento :

-   **Nome do equipamento IPX800** : nome do seu equipamento IPX800,

-   **Objeto pai** : indica o objeto pai ao qual pertence
    o equipamento,

-   **Activer** : torna seu equipamento ativo,

-   **Visible** : torna seu equipamento visível no painel,

-   **Categoria** : categorias de equipamentos (pode pertencer a
    várias categorias),

-   **IP** : O ip IPX800,

-   **Chave de API** : Chave da API IPX800 (por padrão, a chave da API
    é apikey)

O plug-in padrão não cria nada, você deve fazer isso até
dependendo da sua configuração, mas você será um guia.

Ordem 
========

Ação 
------

Você tem 3 tipos de ação :

-   **On** : permite definir uma saída (ou entrada virtual) para 1 ou
    atribuir um valor a uma entrada analógica (ou contador)

-   **Off** : permite definir uma saída (ou entrada virtual) para 0

-   **Bascule** : permite reverter o estado de uma saída (ou
    entrada virtual)

Você tem 6 tipos de atuadores :

-   **Relais**

-   **Saída virtual**

-   **Entrada virtual**

-   **Entrada analógica virtual**

-   **Compteur**

-   **Fio piloto**

> **Note**
>
> Certos tipos de atuadores podem ser ocultos, dependendo do tipo
> d'action

Então, dependendo do tipo de ação e do atuador que você possui
vários parâmetros que podem ser :

-   número do relé

-   número de saída virtual

-   número da entrada virtual

-   número de entrada analógica e valor a atribuir (deixe em branco se
    você quer escolher com o cursor)

-   número e operação do contador (ex +200 ou -100)

-   número do fio piloto e valor do pedido (0 conforto, 1 eco, 2 sem gelo, 3 desligados, 4 conforto-1, 5 conforto-2)

Informações 
----

Você tem 11 tipos diferentes :

-   Relais

-   Entrada digital

-   Entrada virtual

-   Saída virtual

-   Watchdog

-   EnOcean

-   Entrada analógica

-   Entrada analógica virtual

-   Compteur

-   Persiana de enrolar : opção no formulário 1-3 para a parte 3 do
    extensão VR 1

-   THL : na forma 1-TEMP para a temperatura do sensor 1, 3-HUM
    para umidade do sensor 3 ou 2-LUM para brilho do sensor
    2

Para cada tipo, o jeedom solicitará o número da informação desejada

Modelo 
========

Para ajudá-lo, existe um modelo que permite criar certos tipos de
encomendar de uma só vez e mais rápido.