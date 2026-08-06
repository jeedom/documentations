# Complemento IPX800v5

>**IMPORTANTE**
>
> Este complemento es un borrador, en vista de la API proporcionada por el fabricante, no podemos hacer mucho.

>**IMPORTANTE**
>
> Tenga en cuenta que el complemento pagará cuando se establezca.

## Description

>**IMPORTANTE**
>
> Tenga cuidado con la complejidad de la API proporcionada por el fabricante, este complemento no se recomienda para principiantes. Si puede usar un ipx800v4 mucho más simple en su lugar.

.

## Configuration

.

>**NOTA**
>
> .

## Equipements

").

### Commandes

::yyy::aaa` o `xxx::".

>**NOTA**
>
> : #IP_IPX#/ api / ebx / x4vR?ApiKey=#apikey##IP_IPX##apikey#. .

#### Informations

- `` 65536::nosotros : . 
- `ipx::ioRelayState::0` : 
- `ipx::ioRelayState::7` : 
- `ipx::ana_IPX_Input::0` : da el valor de la entrada analógica 0 (el 1 en real en el ipx, para este tipo de comando, se debe agregar 1 cada vez)
- `ipx::ioDInput::3` : da el valor de la entrada binaria 3 (el 4 en real en el ipx, para este tipo de comando es necesario sumar 1 cada vez)
- `` 4456448::anaCommand::2` : da la posición (en%) del obturador 3 conectado a una extensión x4vr con el número `4456448`
- `` 4259841::ioOutputState::2` : da el estado de salida 3 (siempre +1 para hacer) de la extensión x8r numerada como `4259841`
- `` 4259841::ioLongPush::2` :  

#### Actions

- `core::io::65536::{"on":verdadero} ` : se utiliza para activar la variable 65536 que representa la salida de relé 1. 
- `core::io::65536::{"on":falso} ` : lo mismo para apagar

>**NOTA**
>
>Por el momento no sabemos cómo gestionar las extensiones. . ...
