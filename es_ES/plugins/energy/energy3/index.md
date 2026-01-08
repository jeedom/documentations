# Complemento de energía

Complemento que le permite mostrar un gráfico global de la energía del hogar (agua, gas, electricidad, producción eléctrica)).

También muestra un tablero que muestra el rendimiento de un sistema de paneles solares, el consumo (agua, gas y electricidad) así como el detalle del consumo eléctrico de ciertos equipos (por supuesto requiere tener un módulo para medirlo))

Para los que dispongan de energía solar, también puede mostrarles la previsión de producción según las características de su instalación (a rellenar)

Tenga en cuenta que el complemento no realiza ni realizará ningún cálculo de costos (este no es ni será su propósito))

Para funcionar requiere que tengas módulos que carguen esta información :

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

- Importación de electricidad de la red
- Exportación de electricidad de red
- Día de producción
- Poder de la red

>**IMPORTANTE**
>
>Dependiendo de tus pedidos, es posible que necesites adaptar la unidad en la página de configuración de pedidos del equipo de energía que hayas creado

## Detalles

Para la electricidad, es posible indicar los consumidores en la pestaña de detalles, puede ser un comando de tipo de potencia (luego debe registrarse) o un comando de tipo de consumo. Si es consumo absoluto (sin puesta a cero a medianoche) no hay nada más que hacer, si es consumo por día (puesta a cero a medianoche) entonces se debe marcar la casilla al final de la línea "Consumo por día (si Wh o kWh)"

# Panel

Para ver los historiales, pronósticos de producción y otras cosas, debe pensar detenidamente en la página de configuración del complemento (Complementos -> administración de complementos) para activar el panel (en escritorio y/o dispositivo móvil) y luego actualizar la página (F5). Luego en casa encontrarás el panel de complementos.
