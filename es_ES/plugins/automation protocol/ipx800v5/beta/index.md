# Complemento IPX800v5

>**IMPORTANTE**
>
> Este complemento es un borrador, en vista de la API proporcionada por el fabricante, no podemos hacer mucho

>**IMPORTANTE**
>
> Tenga en cuenta que el complemento pagará cuando se establezca

## Description

>**IMPORTANTE**
>
> Tenga cuidado con la complejidad de la API proporcionada por el fabricante, este complemento no se recomienda para principiantes. Si puede usar un ipx800v4 mucho más simple en su lugar.

Este complemento permite la conexión de Jeedom a un ipx800v5.

## Configuration

En la configuración del complemento, puede elegir las API para llamar, así como la frecuencia

>**NOTA**
>
> Parece que la API core / io es suficiente para todo lo que está probando / recuperando información binaria

## Equipements

En los dispositivos solo tiene que configurar la parte IP y la clave API (generada desde la interfaz del sistema de la parte IPX800 luego "APIKEY")

### Commandes

Esto es más complicado ... Para la recuperación de la información debes en el campo "Clave" poner la ruta a la información en el formulario `xxx::yyy::aaa` o `xxx::yyyy`.

>**NOTA**
>
>Por el número de la extensión no sabemos cómo encontrarla desde la interfaz ... Lo más fácil es hacerlo en su navegador '#IP_IPX#/ api / ebx / x4vR?ApiKey=#apikey#`reemplazando la ip y la apikey y tendrá la lista de todas las extensiones x4vr, así como su identificación. Para x8r simplemente reemplace x4vr por x8r 

#### Informations

- `` 65536::nosotros : permite recuperar el estado (on / off) de la variable 65536 que representa el estado de la salida de relé 1 (o es complicado, lo confirmo pero es el fabricante quien decide). Para encontrar los números de las variables tienes que ir a "Vínculos", luego a "Variables" y a la izquierda haz clic en el IO deseado, en el marco del medio tienes el id de la variable
- `ipx::ioRelayState::0` : da el estado del relé 0 (el 1 en real en el ipx, para este tipo de comando hay que agregar 1 cada vez) del ipx
- `ipx::ioRelayState::7` : da el estado del relé 7 (el 8 en real en el ipx, para este tipo de comando hay que agregar 1 cada vez) del ipx
- `ipx::ana_IPX_Input::0` : da el valor de la entrada analógica 0 (el 1 en real en el ipx, para este tipo de comando, se debe agregar 1 cada vez)
- `ipx::ioDInput::3` : da el valor de la entrada binaria 3 (el 4 en real en el ipx, para este tipo de comando es necesario sumar 1 cada vez)
- `` 4456448::anaCommand::2` :  da la posición (en%) del obturador 3 conectado a una extensión x4vr con el número `4456448`
- `` 4259841::ioOutputState::2` :  da el estado de salida 3 (siempre +1 para hacer) de la extensión x8r numerada como `4259841`
- `` 4259841::ioLongPush::2` :  da el estado de la entrada 3 (siempre el +1 a realizar) durante una pulsación larga de la extensión x8r con el número `4259841`

#### Actions

- `core::io::65536::{"on":verdadero} ` : se utiliza para activar la variable 65536 que representa la salida de relé 1. Para encontrar los números de las variables tienes que ir a "Vínculos", luego a "Variables" y a la izquierda haz clic en el IO deseado, en el marco del medio tienes el id de la variable
- `core::io::65536::{"on":falso} ` : lo mismo para apagar

>**NOTA**
>
>Por el momento no sabemos cómo gestionar las extensiones. El problema proviene de la API que obliga a devolver el estado deseado de toda la salida de la extensión a la vez. Problema si está cerrando una persiana, entonces desea cerrar otra el día 1 con una gran posibilidad de detenerse si no espera a que termine de cerrarse... 
