# Plugin IPX800v5

>**IMPORTANTE**
>
> Este plugin é um rascunho, tendo em vista a API fornecida pelo fabricante, não podemos fazer muito.

>**IMPORTANTE**
>
> Observe que o plug-in pagará quando ficar estável.

## Description

>**IMPORTANTE**
>
> Cuidado com a complexidade da API fornecida pelo fabricante, este plugin não é recomendado para iniciantes. Se você pode ir em um ipx800v4 muito mais simples em vez disso.

.

## Configuration

.

>**NOTA**
>
> .

## Equipements

").

### Commandes

::yyy::yyy` ou `xxx::".

>**NOTA**
>
> : #IP_IPX#/ api / ebx / x4vR?ApiKey=#apikey##IP_IPX##apikey#. .

#### Informations

- `` 65536::nós : . 
- `ipx::ioRelayState::0` : 
- `ipx::ioRelayState::7` : 
- `ipx::ana_IPX_Input::0` : dá o valor da entrada analógica 0 (o 1 em real no ipx, para este tipo de comando, 1 deve ser adicionado a cada vez)
- `ipx::ioDInput::3` : dá o valor da entrada binária 3 (o 4 em real no ipx, para este tipo de comando é necessário adicionar 1 a cada vez)
- `` 4456448::anaCommand::2` : fornece a posição (em%) do obturador 3 conectado a uma extensão x4vr com o número `4456448`
- `` 4259841::ioOutputState::2` : dá o status de saída 3 (sempre +1 a fazer) da extensão x8r numerada como `4259841`
- `` 4259841::ioLongPush::2` :  

#### Actions

- `core::io::65536::{"on":true} ` : usado para ativar a variável 65536 que representa a saída do relé 1. 
- `core::io::65536::{"on":false} ` : idem para desligar

>**NOTA**
>
>No momento não sabemos como gerenciar as extensões. . ...
