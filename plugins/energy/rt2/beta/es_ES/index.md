# Complemento EcoRT2

Este complemento le permite administrar un IPX 800 v4.

# Configuración del plugin

Después de descargar el complemento, solo necesita activarlo, no hay configuración en este nivel.

> **Nota**
>
> Puede ver en esta página el estado del demonio que monitorea ecoRT2.

# Configuración del equipo

Se puede acceder a la configuración del equipo ecoRT2 desde el menú de complementos y luego desde el protocolo de automatización del hogar :

Aquí encontrarás toda la configuración de tu equipo :

-   **Nombre del equipo EcoRT2** : nombre de su equipo ecoRT2.
-   **Objeto padre** : indica el objeto padre al que pertenece el equipo.
-   **Activar** : activa su equipo.
-   **Visible** : hace que su equipo sea visible en el tablero.
-   **Categoría** : categorías de equipos (puede pertenecer a varias categorías).
-   **IP** : La ecoRT2 ip.
-   **Clave API** : Clave API ecoRT2 (por defecto, la clave API es apikey).
-   **Extensión** : aquí tienes que indicar las extensiones presentes en el ecoRT2 para que jeedom pueda consultarlas. Ejemplo para enOcean debes poner ENO (si tienes varios debes separarlos con comas (``,``)). Todas las extensiones son normalmente soportadas, para que el código de la extensión se ponga es necesario consultar la documentación de esta.

El complemento predeterminado no crea nada. Depende de usted hacer esto de acuerdo con su configuración, pero será guiado.

# Commandes

## Action

Tienes los tipos de acción :

-   **Uno** : le permite establecer una salida (o entrada virtual) en 1, o asignar un valor a una entrada analógica (o contador).
-   **Apagado** : permite establecer en 0 una salida (o entrada virtual).
-   **Alternar** : permite invertir el estado de una salida (o entrada virtual).

Tienes los tipos de actuadores :

-   **Relé**
-   **Salida virtual**
-   **Contador**
-   **Cable piloto**

> **Nota**
>
> Algunos tipos de actuadores pueden estar ocultos según el tipo de acción.

Luego, dependiendo del tipo de acción y el actuador, tiene varios parámetros que pueden ser :

-   número de relé
-   número de salida virtual
-   Número de contador y operación (ex +200 o -100)
-   número de cable piloto y valor de pedido (0 confort, 1 eco, 2 sin escarcha, 3 apagado, 4 confort-1, 5 confort-2)

## Info

Tienes diferentes tipos :

-   Publicación instantánea
-   Relais
-   Salida virtual
-   Entrada digital
-   Compteur
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
