# Plug-in Téléinfo SME-SMI

O plug-in **Teleinfo PME-SMI** permite a leitura e interpretação de teleinformações de medidores industriais comunicantes SME-PMI conectados em série (USB, GPIO).

# Configuration

Como qualquer plugin Jeedom, o plugin **Teleinfo PME-SMI** deve ser ativado após a instalação.

## Configuração do plug-in

Uma vez instaladas corretamente as dependências, basta selecionar a porta serial à qual o medidor está conectado e salvar a configuração. O daemon pode então ser iniciado.

## Configuração do equipamento

O equipamento relativo ao contador é criado automaticamente no Jeedom após iniciar o daemon e receber um primeiro quadro completo. Não há configuração específica a ser especificada em relação ao equipamento.

# Commandes

Os pedidos também são criados automaticamente, à medida que avançam, com base nas informações recebidas, principalmente no período de preços.

>Exemplo :
>![Exemplo de bloco](../images/tile.png)
