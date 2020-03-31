Este complemento le permite administrar un IPX 800 v4

Configuración del plugin
=======================

Después de descargar el complemento, solo necesita activarlo,
no hay configuración a este nivel.

> **Nota**
>
> Puede ver en esta página el estado del demonio que monitorea ecoRT2

Configuración del equipo
=============================

Se puede acceder a la configuración del equipo ecoRT2 desde el menú
plugin luego protocolo de automatización del hogar :

Aquí encontrarás toda la configuración de tu equipo :

-   **Nombre del equipo EcoRT2** : nombre de su equipo ecoRT2,

-   **Objeto padre** : indica el objeto padre al que pertenece
    equipo,

-   **Activar** : activa su equipo,

-   **Visible** : hace que su equipo sea visible en el tablero,

-   **Categoría** : categorías de equipos (puede pertenecer a
    categorías múltiples),

-   **IP** : La ecoRT2 ip,

-   **Clave API** : Clave API ecoRT2 (por defecto Clave API
    es apikey)

-   **Extensión** : aquí debe indicar las extensiones presentes en
    ecoRT2 para que Jeedom pueda interrogarlos. Ejemplo de EnOcean
    debes poner ENO (si tienes varios debes separarlos
    por,). Todas las extensiones son normalmente compatibles, para
    el código de la extensión para poner debe referirse a
    documentación del mismo.

El complemento predeterminado no crea nada, dependerá de usted hacerlo
dependiendo de tu configuración pero serás guía.

Comando
========

Acción
------

Tienes los tipos de acción :

-   **Uno** : le permite establecer una salida (o entrada virtual) a 1, o
    asignar un valor a una entrada analógica (o contador)

-   **Apagado** : le permite establecer una salida (o entrada virtual) a 0

-   **Alternar** : permite invertir el estado de una salida (o
    entrada virtual)

Tienes los tipos de actuadores :

-   **Relé**

-   **Salida virtual**

-   **Contador**

-   **Cable piloto**

> **Nota**
>
> Cierto tipo de actuador puede ocultarse dependiendo del tipo
> acción

Luego, dependiendo del tipo de acción y el actuador que tenga
varios parámetros que pueden ser :

-   número de relevo

-   número de salida virtual

-   Número de contador y operación (ex +200 o -100)

-   número de cable piloto y valor de pedido (0 confort, 1 eco, 2 sin escarcha, 3 apagado, 4 confort-1, 5 confort-2)

Información
----

Tienes diferentes tipos :

-   Publicación instantánea
-   Relé
-   Salida virtual
-   Entrada digital
-   Contador
-   EnOcean
-   Índice de contador
-   Índice toro
-   Índice de consumo de Toro
-   Índice de distribución del toro
-   Índice de teleinformación
-   Índice de posición
-   Índice / día de publicación
-   Precio total del mostrador
-   Precio total del toro
-   Consumo total precio toro
-   Distribución total precio toroidal
-   Combinación de precios de teleinformación
-   Precio acumulativo de contabilización
-   Acumulación de precios / día posterior
-   Cable piloto

Para cada tipo, jeedom le preguntará el número de la información deseada.
