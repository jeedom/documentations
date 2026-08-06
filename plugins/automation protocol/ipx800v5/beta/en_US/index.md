# IPX800v5 plugin

>**IMPORTANT**
>
> This plugin is a draft, in view of the API provided by the manufacturer we can not do very much.

>**IMPORTANT**
>
> Please note that the plugin will pay when it goes to stable.

## Description

>**IMPORTANT**
>
> Beware of the complexity of the API provided by the manufacturer, this plugin is not recommended for beginners. If you can go on a much simpler ipx800v4 instead.

.

## Configuration

.

>**NOTE**
>
> .

## Equipements

").

### Commandes

::yyy::yyy` or `xxx::".

>**NOTE**
>
> : #IP_IPX#/ api / ebx / x4vR?ApiKey=#apikey##IP_IPX##apikey#. .

#### Informations

- `` 65536::we : . 
- `ipx::ioRelayState::0` : 
- `ipx::ioRelayState::7` : 
- `ipx::ana_IPX_Input::0` : gives the value of analog input 0 (the 1 in real on the ipx, for this type of command, 1 must be added each time)
- `ipx::ioDInput::3` : gives the value of binary input 3 (the 4 in real on the ipx, for this type of command it is necessary to add 1 each time)
- `` 4456448::anaCommand::2` : gives the position (in%) of shutter 3 connected to an x4vr extension with the number `4456448`
- `` 4259841::ioOutputState::2` : gives output status 3 (always +1 to do) of the x8r extension numbered as `4259841`
- `` 4259841::ioLongPush::2` :  

#### Actions

- `core::io::65536::{"on":true} ` : used to activate variable 65536 which represents relay output 1. 
- `core::io::65536::{"on":false} ` : ditto to turn off

>**NOTE**
>
>For the moment we do not know how to manage the extensions. . ...
