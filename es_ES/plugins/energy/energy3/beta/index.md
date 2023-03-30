# Complemento de energía

Complemento que permite mostrar un gráfico global de la energía de la casa (agua, gas, electricidad, producción de electricidad)).

También muestra un tablero que muestra el rendimiento de un sistema de paneles solares, el consumo (agua, gas y electricidad) así como los detalles del consumo de electricidad de ciertos equipos (necesario por supuesto tener un módulo para medirlo))

Para los que dispongan de energía solar, también puede mostrarles la previsión de producción según las características de su instalación (a informar)

Tenga en cuenta que el complemento no calcula ni calculará ningún costo (no es su propósito y no será)

Para que funcione requiere que tengas módulos que carguen esta información : 

## Gaz

- Día de consumo
- Consumo instantáneo

## Eau

- Día de consumo
- Consumo instantáneo

## Electricité

- Día de consumo
- Consumo instantáneo

Si tienes paneles solares necesitas más : 

- Importación de electricidad de las redes
- Exportación de electricidad de red
- Día de producción
- Poder de la red

>**IMPORTANTE**
>
>Dependiendo de tus mandos, puede que necesites adaptar la unidad en la página de configuración de mandos del equipo de energía que hayas creado

## Detalles

Para la electricidad, es posible indicar los consumidores en la pestaña de detalles, puede ser un comando de tipo de potencia (luego debe registrarse) o un comando de tipo de consumo. Si es consumo absoluto (sin puesta a cero a medianoche) no hay nada más que hacer, si es consumo por día (puesta a cero a medianoche) entonces se debe marcar la casilla al final de la línea "Consumo por día (si Wh o kWh)"

# Panel

Para ver el historial, el pronóstico de producción y otros, debe recordar en la página de configuración del complemento (complemento -> administración de complementos) para activar el panel (en el escritorio y/o móvil) y luego actualizar la página (f5). Luego en home encontrarás el panel del plugin.