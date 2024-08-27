# Alarma de registro de cambios

>**Importante**
>
>Como recordatorio si no hay información sobre la actualización, significa que solo se refiere a la actualización de documentación, traducción o texto


- Cambio de etiqueta #trigger# por #alarm_trigger#

>**Importante**
>
> Tenga en cuenta que debe actualizar sus escenarios y las acciones en sus alarmas. Este cambio se debe a un conflicto entre las etiquetas de escenario y las etiquetas de alarma que tenían el mismo nombre y, por lo tanto, fallaron

# 01/03/2024

- Preparándose para el apuro 4.4
- Se solucionó un problema con la opción "zonas separadas" al cambiar de modo
- Mejora de la interfaz

# 22/01/2020

- Registros mejorados en caso de alarmas múltiples

# 21/10/2019

- Corrección de un error durante la creación del equipo

# 10/14/2019

- Se corrigió un error al cambiar el nombre de un modo

# 04/28/2019

- Correcciones de errores

# 23/04/2019

- Correcciones de errores

# 17/01/2019

- Posibilidad de utilizar variables o cálculos para los tiempos de retención (s), activación y activación
- Actualizando el documento

# 18/07/2018

- Actualizando el documento
- Corrección de errores en los modos de cambio de nombre
- Si la alarma ya está activa, el armado no la reactiva
- Adición de una opción para un viaje de varias zonas (si otra zona entra en alerta, entonces se activa la alarma)
- Adición de acción al reanudar el monitoreo de un sensor
- Agregar la etiqueta #zone#
- Agregar un botón para duplicar una alarma

# 06/03/2018

- Adición de gestión de pedidos huérfanos
- Si los sensores están deshabilitados, las acciones de activación correctas ya no se activan
- Correcciones de errores
- Los detectores con demoras de activación y aún activos después de esta demora ya no activan la alarma, pero inician la activación de KO, con monitoreo de este detector excluido hasta que vuelva a la normalidad

# 02/12/2018

- Se corrigió un error en las acciones en movimiento en el gatillo

- Posibilidad de agregar un retraso de espera para un disparador antes de activar la alarma

# 12/01/2017

-   Corrección de un error en la desactivación de detectores

-   Gestión de segundos en el retraso de activación (JEED-63)

-   Retroceder en la no iniciación de acciones inmediatas si
    el retraso de activación está vacío o cero

-   Si durante la activación un sensor está en alerta y no tiene retraso
    de activación, entonces la alarma se activa ignorando este sensor
    (a menos que regrese a descansar)

-   Además de la acción de activación global (ya no se filtra por zona, se
    se recomienda usar esto en lugar de las acciones de
    disparador de zona)

-   Optimización de código

-   Atención : la alarma ya no realiza acciones inmediatas si no hay
    sin retraso de activación !!!!!! ⇒ cancelado

-   Capacidad para filtrar el desempeño de acciones en relación con
    modo de alarma

-   Agregar comando de pausa / reanudar

-   Mejora de la interfaz de configuración
