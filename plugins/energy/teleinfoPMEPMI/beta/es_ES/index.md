# Complemento Téléinfo PYME-SMI

El complemento **Teleinfo PYME-PYME** Permite la lectura e interpretación de teleinformación procedente de contadores industriales comunicantes PMI-PMI conectados en serie (USB, GPIO).

# Configuration

Como cualquier complemento de Jeedom, el complemento **Teleinfo PYME-PYME** debe activarse después de la instalación.

## Configuración del complemento

Una vez instaladas correctamente las dependencias, simplemente seleccione el puerto serie al que está conectado el medidor y luego guarde la configuración. Entonces se puede iniciar el demonio.

## Configuración del equipo

El equipo relacionado con el contador se crea automáticamente en Jeedom después de iniciar el demonio y recibir una primera trama completa. No hay ninguna configuración particular que especificar respecto al equipo.

# Commandes

Los pedidos también se crean automáticamente a medida que avanzan, en función de la información recibida, en particular el período de fijación de precios.

>Ejemplo :
>![Ejemplo de mosaico](../images/tile.png)
