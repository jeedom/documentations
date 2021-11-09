# IPX800v5 plugin

>**IMPORTANT**
>
> This plugin is a draft, in view of the API provided by the manufacturer we can not do very much

>**IMPORTANT**
>
> Please note that the plugin will pay when it goes to stable

## Description

>**IMPORTANT**
>
> Beware of the complexity of the API provided by the manufacturer, this plugin is not recommended for beginners. If you can go on a much simpler ipx800v4 instead.

This plugin allows Jeedom connection to an ipx800v5.

## Configuration

On the plugin configuration you can choose the APIs to call as well as the frequency

>**NOTE**
>
> It seems that the core / io API is sufficient for all that is piloting / retrieving binary information

## Equipements

On the devices you just have to configure the IP part and API key (generated from the interface of the IPX800 part System then "APIKEY")

### Commandes

This is more complicated ... For the recovery of information you must in the "Key" field put the path to the information in the form `xxx::yyy::yyy` or `xxx::yyyy`.

>**NOTE**
>
>For the number of the extension we do not know how to find it from the interface ... The easiest it is in your browser to do `#IP_IPX#/ api / ebx / x4vR?ApiKey=#apikey#`by replacing the ip and the apikey and you will have the list of all x4vr extensions as well as their id. For x8r just replace x4vr by x8r 

#### Informations

- `` 65536::we : allows you to retrieve the status (on / off) of the variable 65536 which represents the state of relay output 1 (or it's complicated, I confirm but it is the manufacturer who decides). To find the numbers of the variables you have to go to "Links" then "Variables" and on the left click on the desired IO, in the middle frame you then have the variable id
- `ipx::ioRelayState::0` : gives the state of relay 0 (the 1 in real on the ipx, for this type of command you have to add 1 each time) of the ipx
- `ipx::ioRelayState::7` : gives the status of relay 7 (the 8 in real on the ipx, for this type of command you have to add 1 each time) of the ipx
- `ipx::ana_IPX_Input::0` : gives the value of analog input 0 (the 1 in real on the ipx, for this type of command, 1 must be added each time)
- `ipx::ioDInput::3` : gives the value of binary input 3 (the 4 in real on the ipx, for this type of command it is necessary to add 1 each time)
- `` 4456448::anaCommand::2` :  gives the position (in%) of shutter 3 connected to an x4vr extension with the number `4456448`
- `` 4259841::ioOutputState::2` :  gives output status 3 (always +1 to do) of the x8r extension numbered as `4259841`
- `` 4259841::ioLongPush::2` :  gives input 3 status (always the +1 to be done) during a long press of the x8r extension with the number `4259841`

#### Actions

- `core::io::65536::{"on":true} ` : used to activate variable 65536 which represents relay output 1. To find the numbers of the variables you have to go to "Links" then "Variables" and on the left click on the desired IO, in the middle frame you then have the variable id
- `core::io::65536::{"on":false} ` : ditto to turn off

>**NOTE**
>
>For the moment we do not know how to manage the extensions. The problem comes from the API which forces to return the desired state of all the output of the extension at once. Problem if you are closing a shutter then you want to close another one on the 1st with a great chance of stopping if you do not wait for it to finish closing... 
