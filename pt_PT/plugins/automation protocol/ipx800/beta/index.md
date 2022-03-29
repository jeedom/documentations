1. Introdução 
============

Este plugin permite gerenciar cartões GCE IPX800.
Inicialmente, este plugin foi criado para conectar GCE IPX800s.

Dados visíveis no painel : 
-----------------------------------

-   ''entradas analógicas''

-   ''entradas digitais''

-   ''os relés''

-   ''contadores de pulso''

Instalação / Configuração 
========================

Agora vamos configurar um dispositivo. Para fazer isso, clique em
'' Plugins / Protocolo de automação residencial / IPX800''

Em seguida, clique no botão no canto superior esquerdo '' Adicionar equipamento''

Em seguida, digite o nome do equipamento (ex. IPX 1).

Então defina :

-   ''Objeto pai''

-   ''Categoria '' (opcional)

-   ''Ative '' (marque, caso contrário, o equipamento não será utilizável)

-   ''Visível '' (opcional se você não quiser torná-lo visível em
    O painel)

-   ''Endereço IP''

-   ''Port''

-   ''Compte''

-   ''Senha''

Taxa de atualização 
-----------------------------

Para entradas e contadores analógicos, os dados são
recuperado pelo plugin a cada minuto. Não é possível
ter uma frequência mais alta. De resto, se o modo push for
ativado, a atualização é quase instantânea.

Para ativar o push, clique em

![bouton config push](../images/bouton_config_push.jpg)

Em seguida, desça e clique em Aplicar.

Comportamento com o aplicativo móvel 
--------------------------------------

Por padrão, aqui está o comportamento :

-   ''L'ip800''

Os comandos estão todos configurados.

-   ''entradas analógicas''

Os comandos são todos visíveis por padrão e o tipo depende da
sonda escolhida.

-   ''entradas digitais''

Pedidos são considerados luzes.

-   ''os relés''

Pedidos são considerados luzes.

-   ''contadores de pulso''

Pedidos são considerados tipos genéricos.

Note-se que encontraremos na aplicação os comandos para
a partir do momento em que são configurados, mesmo que não sejam
marcado como visível. Para ocultá-los, você deve escolher
"Configuração de comando "⇒" Tipo genérico "⇒" Ignorar
este comando".

Algumas capturas de tela 
=======================

![ipx800 screenshot1](../images/ipx800_screenshot1.jpg)

![ipx800 screenshot2](../images/ipx800_screenshot2.jpg)

![ipx800 screenshot3](../images/ipx800_screenshot3.jpg)
