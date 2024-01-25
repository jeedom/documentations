# Complemento Philips Hue

# Description

Este complemento le permitirá integrar su ecosistema Philips Hue en Jeedom. El complemento ofrece la posibilidad de conducir hasta 2 puentes Philips Hue simultáneamente.

# Configuration

## Configuración del plugin

Como cualquier complemento de Jeedom, el complemento **Philips Hue** debe activarse después de la instalación.

Una vez que se activa el complemento, deberá ingresar la dirección IP en la que se puede acceder a su puente Philips Hue. Normalmente, el complemento debería pedirle que presione el botón de puente durante la primera sincronización.

>**TRUCO**
>
>Puede ingresar hasta 2 puentes Philips Hue que podrán comunicarse con Jeedom simultáneamente.

El complemento **Philips Hue** utiliza su propio demonio para mantenerse en contacto constante con los puentes Philips Hue. Puede verificar el estado en la página de configuración del complemento.


## Compatibilité

Todos los módulos compatibles con el puente Hue son compatibles con el complemento Jeedom. 

## Configuración del equipo

Para acceder a los diferentes equipos **Philips Hue**, ir al menú **Complementos → Comunicación → Philips Hue**.

# Transition

Un pequeño comando peculiar que está diseñado para usarse en un escenario. Permite definir la duración en segundos de la transición entre el estado actual y el siguiente comando.

Por ejemplo, por la mañana, es posible que desee simular el amanecer en 3 minutos. En su escenario, solo tiene que llamar al comando de transición con ``180`` en el parámetro, luego llame al comando de color al color deseado.
