# Registro de cambios de bacnetStackServer

> **⚠ IMPORTANTE: Debe realizarse después de cada actualización**
>  **reinstalar las dependencias** después de una actualización del complemento.
> Este paso descarga el binario del demonio actualizado (`bacnetStackd`). Sin este paso, el binario antiguo permanece en su lugar y las correcciones o nuevas funciones del demonio no se activan.


# 

- **** :
  -  **""**
  - 
  - 
  - .)

- **** :
  -  **"**
  - 
  -  :
    - )
    -  **"Simuler"** 
    -  **"Migrer"** 
    - )
  - )
  -  : 


# 

- **Importación EDE: corrección de codificación de acentos** :
  - Detección automática de la codificación de archivos (UTF-8 BOM, decodificación estricta UTF-8, alternativa Windows-1252/Latin-1))
  - Normalización de los finales de línea de Windows (CRLF) y Mac clásico (CR) antes del procesamiento
  - Selector de codificación manual conservado (UTF-8, ISO-8859-1, Windows-1252))


- **Cliente BACnet: protección de botones de red** :
  - Todos los botones que activan una solicitud de red ahora están deshabilitados durante la operación (se muestra un indicador de carga y el estado se restablece después de un éxito o un error))
  - Botones relevantes : Whois, Listar dispositivos, Leer lista de objetos, Iniciar/Detener/Actualizar cliente

- **Cliente BACnet: interfaz simplificada** :
  - Eliminación de las secciones "Leer propiedad", "Escribir propiedad" y "Suscripción COV" del modal del cliente


# 

- **Tiempo de espera de BACnet configurable (C + demonio PHP))** :
  - El tiempo de espera predeterminado de BACnet se redujo de 60 s a **** para readprop, writeprop y subscribecov
  - Nuevo campo JSON "timeout" (en segundos) que se puede pasar mediante un comando para ajustarlo mediante una llamada


- **Solucionar la fuga de invoke_id en el tiempo de espera de writeprop** :
  - `tsm_free_invoke_id()` se agregó a la ruta de tiempo de espera de `handle_client_writeprop`
  - Evita que el grupo TSM (256 ranuras) se agote después de numerosos tiempos de espera consecutivos en un dispositivo inaccesible

- **Re-suscripción de VOC integrada en el ciclo de votación** :
  - Eliminación del bloque `resubscribeAllCOV()` al iniciar el demonio
  - Las suscripciones a COV caducadas se restablecen automáticamente tras la primera consulta exitosa en cada dispositivo
  - Elimina el riesgo de que el inicio de PHP se bloquee en dispositivos lentos o inaccesibles

- **La opción Relinquish está desactivada por defecto al iniciar el sistema** :
  - Nueva opción en la configuración del plugin : *Renunciar en la startup daemon* (Deshabilitado por defecto)


- **Renunciar a las correcciones de comandos** :
  - Los comandos de liberación ahora leen `device_ip` y `device_id` del dispositivo principal en lugar de su propia configuración, evitando así datos obsoletos si se modifica el dispositivo


# 

- **Los registros de tendencias persisten después del reinicio del demonio** :
  - Los datos históricos de TrendLogs ahora se restauran desde el disco al reiniciar el sistema, sin pérdida de historial


# 

- **Prioridad de escritura BACnet configurable en el lado del cliente** :
  - Nuevo campo **Prioridad de escritura predeterminada** (1-16) en el equipo del cliente (pestaña Equipo), utilizado durante el escaneo/generación de pedidos
  - La prioridad predeterminada sigue siendo 8 (Manual-Operador) para los equipos existentes
  - Nuevo selector de prioridad **por orden** directamente en la tabla de comandos (pestaña Comandos), visible para todos los comandos de acción de BACnet
  - Los comandos existentes no se modifican cuando se cambia el valor predeterminado del equipo


# 

- **Rediseño completo de la interfaz de mapas de Jeedom** :
  - Sistema de paginación para gestionar cientos de objetos BACnet (50/100/200/500 objetos por página))
  - Navegación rápida : primera página, página anterior, página siguiente, última página
  - Navegación mediante teclado con las flechas izquierda/derecha
  - Visualización personalizable del número de objetos por página
  - Función de búsqueda adaptada a la paginación

- **Aumento de los tiempos de espera para los escaneos de dispositivos** :
  - El tiempo de espera de JavaScript se ha aumentado de 30 s a 180 s para gestionar dispositivos con muchos objetos (más de 2000))
  - El tiempo de espera de PHP aumentó de 60 s a 180 s
  - El límite de ejecución de PHP se ha ampliado a 300 s
  - Mensaje informativo durante el escaneo que advierte sobre el posible tiempo de espera (hasta 3 minutos))

- **Nueva función : Escaneo selectivo de objetos BACnet** :
  - Botón "Escaneo selectivo" en la página de configuración del dispositivo cliente
  - Te permite agregar solo objetos específicos sin escanear todo el dispositivo
  - Interfaz de modo dual :
    - **Modo manual** : Selección interactiva con menú desplegable de tipos de objetos, entrada de instancias, opción de información/acción
    - **Modo lista** : Importación rápida mediante área de texto (formato típico):instancia, una por línea)
  - Gestión inteligente de órdenes de acción : Deshabilitado automáticamente para tipos de solo lectura (entrada analógica, entrada binaria, entrada multiestado, acumulador, convertidor de pulsos))
  - Visualización de la lista de objetos seleccionados con distintivos visuales y la opción de eliminarlos
  - Ideal para añadir algunas funciones a equipos existentes sin necesidad de escanearlos por completo
  - Creación automática de comandos con sus propiedades BACnet


# 

- Prioridad de escritura configurable por objeto del servidor BACnet (AO, AV, BO, MSO)) :
  - Nuevo campo `writePriority` en la configuración JSON del demonio (1-16, valor predeterminado) : 16)
  - Selector de prioridad en el modal de edición de objetos del servidor
  - Prioridad tenida en cuenta al inicializar el demonio al arrancar


# 

-  :
  - 
  - 
  - )
  -  : )
  - 


-  :
  -  : 
  -  : 
  -  : )
  -  : )
  -  : )
  -  : )
-  : 
-  : )
- 

# 

-  : 
- 
- '


# 

- 
- 

# 

- )

# 

- 
- 
- 


# 

- Agregar documentación contextual
- Corrección de la escritura del cliente BACnet

# 

- Nueva interfaz de usuario
- Agregar cliente de Bacnet : Descubrimiento mediante whois, objectList, creación de dispositivos para leer dispositivos bacnet
- Se agregó la suscripción a COV a los objetos de Bacnet
- Agregar nueva configuración/Cargar configuración desde la página de asignación
- Adición masiva mediante equipo en la página de mapeo

# 

- Modificaciones en la selección de órdenes para vincular
- Agregar la sincronización de un cronograma a un calendario desde el complemento Jeedom Calendar a la tarea programada (cron job). 

# 

- Nuevo binario v1.0.98
- Se agregó un bloqueo y una cola al JSON antes de enviarlo al servidor para evitar problemas de lectura/escritura

# 
- Complemento inicial
