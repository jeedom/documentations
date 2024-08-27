# Changelog Thermostat

>**Importante**
>
>Como recordatorio si no hay información sobre la actualización, significa que solo se refiere a la actualización de documentación, traducción o texto

- Soporte para imágenes de equipos personalizados (Jeedom 4.5)

# 22/07/2024

- Se corrigió un error en Debian 12

# 13/06/2024

- Mejor gestión de los termostatos inhabilitados

# 19/02/2024

- Se corrigió un error que crea crons no válidos
- Corrección de error si había 2 pedidos al mismo tiempo (gracias @phpvarious)

# 01/03/2024

- Preparándose para el apuro 4.4

# 19/12/2023

- Posibilidad de ingresar valores negativos para los comandos de Compensaciones relacionados con contribuciones internas

# 27/04/2023

- Mejora al cambiar de modo *(aire acondicionado, calefacción o ambos)*
- Eliminando código obsoleto para Imperihome

# 20/04/2023

- Mejora en la gestión de aperturas

# 10/03/2022

- El smartstart ya no puede anular el bloqueo del termostato

# 29/07/2022

- Corrección en el llenado de ciertos campos de configuración de equipos a través de la lista de selección de pedidos

# 21/10/2021

- Adición de la presentación de equipos termostatos en modo mesa
- La histéresis positiva ahora también es posible en el modo de refrigeración

# 14/12/2020

- Modernización de la interfaz
- Adición de una opción que permite usar solo la histéresis positiva para calentar
- Se agregó la capacidad de mostrar un comando de su elección en el widget del termostato
- Actualización de la documentación

# 11/11/2020

- Optimizaciones generales
- Eliminación de la "Humedad"
- Nueva presentación de la lista de objetos
- Adición de la etiqueta "compatibilidad V4"

# 01/06/2020

- Adición del parámetro de consigna delta: temperatura exterior para calcular la dirección frío / calor

# 07/04/2020

- Correcciones de errores

# 21/12/2019

- Adición de una opción para el umbral de ciclo caliente para permitir que se tenga en cuenta la inercia

# 17/12/2019

- Problema de visualización solucionado
- Adición de una opción "Umbral de ciclo o calefacción se considera caliente"

# 16/12/2019

- Corrección de errores en modo apagado del termostato
- Adición de una opción para limitar la duración de un segundo ciclo al 100% del tiempo (permite tener en cuenta que los radiadores ya están calientes)

# 03/11/2019

- Se corrigió un error en las órdenes huérfanas

# 23/10/2019

- Corrección de un error en off

# 23/10/2019

- Correcciones de errores

# 10/06/2019

- Actualización de las preguntas frecuentes sobre las preocupaciones de la no visualización de acciones / modos

# 10/01/2019

- Correcciones de errores

# 15/08/2019

- Actualizando el documento
- Soporte para PHP 7.3

# 07/02/2019

- Correcciones de errores

# 30/04/2019

- Interfaz mejorada

# 29/04/2019

- Adición de una opción "Limita los ciclos de encendido / apagado (pellet, gas, fuel oil) y PID". Gracias @Pierrick

# 11/03/2019

- Posibilidad de agregar un mensaje de alerta si el termostato ha estado suspendido por más de XX minutos
- Agregar un punto de ajuste delta en modo de tiempo
- Correcciones de errores

# 01/04/2019

- Se corrigió un error en Smartstart si la agenda se desactivaba después de la programación

# 28/12/2018

- Corrección de errores en el panel móvil

# 27/11/2018

- Corrección de errores

# 20/11/2018

- Agregar un cálculo de rendimiento (kWh / DJU) si se da un comando de consumo al complemento
- Corrección de un error en la gestión de alertas de falla del sensor de temperatura
- Adición de un campo para un control de humedad (útil solo para el complemento Google Smarthome)

# 01/07/2018

- Corrección de un error en la suspensión del termostato al abrir una ventana

# 06/06/2018

- Corrección de errores

# 23/02/2018

- Corrección de una advertencia en el código

# 29/01/2018

- Corrección de errores en las aberturas / cierres de ventanas
