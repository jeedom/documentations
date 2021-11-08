# Plugin IPX800v5

>**IMPORTANTE**
>
> Este plugin é um rascunho, tendo em vista a API fornecida pelo fabricante, não podemos fazer muito

## Description

>**IMPORTANTE**
>
> Cuidado com a complexidade da API fornecida pelo fabricante, este plugin não é recomendado para iniciantes. Se você pode ir em um ipx800v4 muito mais simples em vez disso.

Este plugin permite a conexão Jeedom a um ipx800v5.

## Configuration

Na configuração do plugin, você pode escolher as APIs a serem chamadas, bem como a frequência

>**NOTA**
>
> Parece que a API core / io é suficiente para tudo o que está pilotando / recuperando informações binárias

## Equipements

Nos dispositivos você só precisa configurar a parte IP e a chave API (gerada a partir da interface do sistema da parte IPX800 e então "APIKEY")

### Commandes

Isso é mais complicado ... Para a recuperação das informações você deve no campo "Chave" colocar o caminho para a informação no formato `xxx::yyy::yyy` ou `xxx::yyyy`.

>**NOTA**
>
>Para o número da extensão não sabemos como encontrá-lo na interface ... O mais fácil é no seu navegador fazer `#IP_IPX#/ api / ebx / x4vR?ApiKey=#apikey#`substituindo o ip e o apikey e você terá a lista de todas as extensões x4vr assim como seus id. Para x8r, basta substituir x4vr por x8r 

#### Informations

- `` 65536::nós : permite recuperar o estado (ligado / desligado) da variável 65536 que representa o estado da saída do relé 1 (ou é complicado, confirmo mas é o fabricante quem decide). Para encontrar os números das variáveis você tem que ir em "Links" e depois em "Variáveis" e à esquerda clicar no IO desejado, no quadro do meio você tem o id da variável
- `ipx::ioRelayState::0` : dá o estado do relé 0 (o 1 em real no ipx, para este tipo de comando você tem que adicionar 1 a cada vez) do ipx
- `ipx::ioRelayState::7` : dá o status do relé 7 (o 8 em real no ipx, para este tipo de comando você tem que adicionar 1 a cada vez) do ipx
- `ipx::ana_IPX_Input::0` : dá o valor da entrada analógica 0 (o 1 em real no ipx, para este tipo de comando, 1 deve ser adicionado a cada vez)
- `ipx::ioDInput::3` : dá o valor da entrada binária 3 (o 4 em real no ipx, para este tipo de comando é necessário adicionar 1 a cada vez)
- `` 4456448::anaCommand::2` :  fornece a posição (em%) do obturador 3 conectado a uma extensão x4vr com o número `4456448`
- `` 4259841::ioOutputState::2` :  dá o status de saída 3 (sempre +1 a fazer) da extensão x8r numerada como `4259841`
- `` 4259841::ioLongPush::2` :  fornece o status de entrada 3 (sempre +1 a ser feito) durante um pressionamento longo da extensão x8r com o número `4259841`

#### Actions

- `core::io::65536::{"on":true} ` : usado para ativar a variável 65536 que representa a saída do relé 1. Para encontrar os números das variáveis você tem que ir em "Links" e depois em "Variáveis" e à esquerda clicar no IO desejado, no quadro do meio você tem o id da variável
- `core::io::65536::{"on":false} ` : idem para desligar

>**NOTA**
>
>No momento não sabemos como gerenciar as extensões. O problema vem da API que força a retornar o estado desejado de todas as saídas da extensão de uma vez. Problema se você está fechando uma veneziana, então você deseja fechar outra no primeiro com uma grande chance de parar se você não esperar que ela feche... 
