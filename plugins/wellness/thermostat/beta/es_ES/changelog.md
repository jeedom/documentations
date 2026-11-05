# Registro de cambios del termostato

>**IMPORTANTE**
>
>Recuerda que, si no hay información sobre la actualización, es porque esta se refiere únicamente a la actualización de la documentación, la traducción o el texto.

# 05/11/2026

- Corrección de la visualización de `undefined` delante del nombre de las programaciones de la Agenda que no tienen icono, en la pestaña **Programación**

# 02/11/2026

- Distinción entre los fallos de los sensores (retraso en la recepción, umbral bajo/alto y valor no válido) en las notificaciones a través de `#failure_message#`.
- Corrección de las alertas ocultas o repetidas en caso de fallos simultáneos o sucesivos, y de la ayuda sobre fallos de sondas o calefacción.

# 10/09/2026

- Corrección de un error: un valor de consigna vacío o no numérico provocaba que el complemento se colgara (TypeError de PHP 8 en el cálculo de la histéresis) e interrumpía el procesamiento de los termostatos siguientes [ENLACE](https://github.com/jeedom/plugin-thermostat/issues/68)

# 22/11/2025

- Corrección en la introducción de fechas y la consulta del historial desde el panel *(Jeedom v4.4 mini)*

# 14/10/2024

- El SmartStart respeta ahora el porcentaje mínimo de calefacción [ENLACE](https://github.com/jeedom/plugin-thermostat/issues/60)

# 30/09/2024

- Compatibilidad con imágenes personalizadas de los dispositivos (Jeedom 4.5)
- Se corrigió un error en la compatibilidad con instrucciones decimales

# 22/07/2024

- Se corrigió un error en Debian 12

# 13/06/2024

- Mejor gestión de los termostatos inhabilitados

# 19/02/2024

- Se corrigió un error que crea crons no válidos
- Se ha corregido un error que se producía si había dos órdenes al mismo tiempo (gracias, @phpvarious)

# 03/01/2024

- Preparándose para el apuro 4.4

# 19/12/2023

- Posibilidad de ingresar valores negativos para los comandos de Compensaciones relacionados con contribuciones internas

# 27/04/2023

- Mejora al cambiar de modo *(aire acondicionado, calefacción o ambos)*
- Eliminando código obsoleto para Imperihome

# 20/04/2023

- Mejora en la gestión de aperturas

# 03/10/2022

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
- Eliminación del comando «Humedad»
- Nueva presentación de la lista de objetos
- Se ha añadido la etiqueta «Compatibilidad con la versión 4»

# 01/06/2020

- Adición del parámetro de consigna delta: temperatura exterior para calcular la dirección frío / calor

# 07/04/2020

- Correcciones de errores

# 21/12/2019

- Adición de una opción para el umbral de ciclo caliente para permitir que se tenga en cuenta la inercia

# 17/12/2019

- Problema de visualización solucionado
- Se ha añadido una opción «Umbral del ciclo en el que la calefacción se considera caliente».

# 16/12/2019

- Corrección de errores en modo apagado del termostato
- Se ha añadido una opción para limitar la duración de un segundo ciclo al 100 % del tiempo (lo que permite tener en cuenta que los radiadores ya están calientes).

# 03/11/2019

- Se corrigió un error en las órdenes huérfanas

# 23/10/2019

- Corrección de un error en off

# 23/10/2019

- Correcciones de errores

# 06/10/2019

- Actualización de las preguntas frecuentes sobre las preocupaciones de la no visualización de acciones / modos

# 01/10/2019

- Correcciones de errores

# 15/08/2019

- Actualizando el documento
- Soporte para PHP 7.3

# 02/07/2019

- Correcciones de errores

# 30/04/2019

- Interfaz mejorada

# 29/04/2019

- Se ha añadido una opción «Limita los ciclos de encendido/apagado (pellets, gas, gasóleo) y PID». Gracias, @Pierrick

# 11/03/2019

- Posibilidad de agregar un mensaje de alerta si el termostato ha estado suspendido por más de XX minutos
- Agregar un punto de ajuste delta en modo de tiempo
- Correcciones de errores

# 04/01/2019

- Se corrigió un error en Smartstart si la agenda se desactivaba después de la programación

# 28/12/2018

- Corrección de errores en el panel móvil

# 27/11/2018

- Corrección de errores

# 20/11/2018

- Agregar un cálculo de rendimiento (kWh / DJU) si se da un comando de consumo al complemento
- Corrección de un error en la gestión de alertas de falla del sensor de temperatura
- Se ha añadido un campo para el control de la humedad (útil únicamente para el complemento Google Smarthome)

# 01/07/2018

- Corrección de un error en la suspensión del termostato al abrir una ventana

# 06/06/2018

- Corrección de errores

# 23/02/2018

- Corrección de una advertencia en el código

# 29/01/2018

- Corrección de errores en las aberturas / cierres de ventanas
