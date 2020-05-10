# 21/10/2019

- Correction d'un bug lors de la création de l'équipement

# 14/10/2019

- Correction d'un bug lors du renommage d'un mode

# 28/04/2019

- Corrección de errores

# 23/04/2019

- Corrección de errores

# 17/01/2019

- Posibilidad de utilizar variables o cálculos para los períodos de mantenimiento(s), activación y disparo.
- Actualización de la documentación

# 18/07/2018

- Actualización de la documentación
- Se corrigió el error al renombrar los modos
- Si la alarma ya está activa, el armado no la reactiva
- Se agregó una opción para un disparador multizona (si otra zona entra en alerta, se activa la alarma)
- Se agregó la acción de reanudar la monitorización de un sensor
- Agregar etiqueta # zona #
- Agregar un botón para duplicar una alarma

# 06/03/2018

- Añadir gestión de órdenes huérfanas
- Si los sensores están deshabilitados, las acciones de activación están desactivadas.
- Corrección de errores
- Los sensores con retrasos de activación que aún están activos después de este retraso ya no activan la alarma, sino que inician una activación de KO, con vigilancia de este detector excluido hasta que vuelva a la normalidad

# 12/02/2018

- Se corrigió un error al mover las acciones en el disparador

- Posibilidad de añadir una demora mantiene un disparador de activación de alarma antes

# 01/12/2017

-   Corregido un fallo sobre detectores incapacitantes

-   Gestión de los segundos en el retraso de activación (JEED-63)

-   Vuelve a no activar acciones inmediatas si
    el tiempo de activación está vacía o nula

-   Si al activar un sensor está alerta y no tiene tiempo
    activación entonces la alarma se rearma incluso al ignorar este sensor
    (a menos que regrese a descansar)

-   Adición de una acción global gatillo (área más filtrada,
    es recomendable utilizarlo en lugar de acciones
    activación por área)

-   optimización de código

-   ADVERTENCIA: la alarma ejecutar más acciones si hay immediates
    sin retardo de disparo !!!!!! ⇒ Cancelar

-   Filtrar la realización de las acciones con respecto a la
    modo de alarma

-   Adición de pausa comando / recuperación

-   interfaz de configuración mejorada
