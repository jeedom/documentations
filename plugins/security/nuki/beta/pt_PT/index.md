# Plugin Nuki

Este plugin permite que você controle os bloqueios conectados ao Nuki usando a ponte.

## Configuração do plugin

Depois de baixar o plug-in, você só precisa ativá-lo e configurar as informações da ponte.

Essas informações estão disponíveis no aplicativo móvel ao configurar a ponte após ativar o acesso à API nela.

![nuki1](../images/nuki1.png)

É necessário clicar no botão "Configurar a ponte" para indicar à ponte o endereço de Jeedom para o feedback.

## Configuração do equipamento

A sincronização de bloqueios é acessível no menu Plugins > Segurança > Nuki:

![nuki2](../images/nuki2.png)

> **NOTA**
>
> Os pedidos são criados automaticamente, não há necessidade de adicioná-los manualmente.

## Valores possíveis para o comando *Estado*

|     | **bloqueio inteligente**             | **abrir**  | **sensor de porta** |
|-----|---------------------------|-------------|----------------|
| 0   | Não calibrado               | Não calibrado | -              |
| 1   | Bloqueado               | Conectados    | Desabilitado     |
| 2   | Desbloquear            | -           | Fechadas         |
| 3   | Desbloqueado             | rto ativo  | Aberto        |
| 4   | Confinamento              | -           | Desconhecido       |
| 5   | Desbloqueado (trava)    | Abrir      | Calibração      |
| 6   | Desbloqueado (bloquear e ir) | -           | -              |
| 7   | Desbloquear (travar)   | Abertura   | -              |
| 16  | -                         | -           | Não calibrado    |
| 240 | -                         | -           | Excluído       |
| 253 | -                         | Comece   | -              |
| 254 | Motor travado             | -           | -              |
| 255 | Desconhecido                   | Desconhecido     | -              |
