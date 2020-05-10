# IPX800v4

Este plug-in permite gerenciar um IPX 800 v4

## Configuração do plugin

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

## Configuração do equipamento

A configuração dos dispositivos IPX800 pode ser acessada no menu
plugin, em seguida, protocolo de automação residencial :

Aqui você encontra toda a configuração do seu equipamento :

-   **Nome do equipamento IPX800** : nome do seu equipamento IPX800,
-   **Objeto pai** : indica o objeto pai ao qual o equipamento pertence,
-   **Activer** : torna seu equipamento ativo,
-   **Visible** : torna seu equipamento visível no painel,
-   **Categoria** : categorias de equipamentos (pode pertencer a várias categorias),
-   **IP** : O ip IPX800,
-   **Chave de API** : Chave de API do IPX800 (por padrão, a chave de API é apikey)

O plug-in padrão não cria nada, você deve fazer isso até
dependendo da sua configuração, mas você será um guia.

## Commande

### Action

Você tem os tipos de ação :

- Nós : permite definir uma saída (ou entrada virtual) para 1 ou atribuir um valor a uma entrada analógica (ou contador)
- Fora : permite definir uma saída (ou entrada virtual) para 0
- Alternar : permite reverter o estado de uma saída (ou entrada virtual)
- ...

Você tem os tipos de atuadores :

- Relais
- Saída virtual
- Entrada virtual
- Entrada analógica virtual
- Compteur
- Fio piloto
- ...

> **Note**
>
> Certos tipos de atuadores podem ser ocultos, dependendo do tipo de ação

Então, dependendo do tipo de ação e do atuador, você tem vários parâmetros que podem ser :

- número do relé
- número de saída virtual
- número da entrada virtual
- número de entrada analógica e valor a atribuir (deixe em branco se desejar escolher com o cursor)
- número e operação do contador (ex +200 ou -100)
- número do fio piloto e valor do pedido (0 conforto, 1 eco, 2 sem gelo, 3 desligados, 4 conforto-1, 5 conforto-2)
- ...

### Info

Você tem tipos diferentes (dependendo das suas extensões) :

- Relais
- Entrada digital
- Entrada virtual
- Saída virtual
- Watchdog
- EnOcean
- Entrada analógica
- Entrada analógica virtual
- Compteur
- Persiana de enrolar : opção no formulário 1-3 para a parte 3 da extensão VR 1
- THL : no formato 1-TEMP para a temperatura do sensor 1, 3-HUM para a umidade do sensor 3 ou 2-LUM para o brilho do sensor 2
- Extensão 0-10v
- Fio piloto
- Dimmer
- PWM
- Thermostat
- EnOcean
- ...

Para cada tipo, o jeedom solicitará o número da informação desejada

## Template

Para ajudá-lo, existe um modelo que permite criar certos tipos de pedidos de uma só vez e mais rapidamente.
