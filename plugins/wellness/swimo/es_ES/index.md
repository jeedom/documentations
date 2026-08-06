# Complemento Swimo

Este complemento le permite conectar los controladores de piscina Swimo con Jeedom.
El complemento permite recuperar los valores de los distintos sensores, así como controlar los actuadores. (cambio de modos, encendido / apagado, cambio de puntos de ajuste)

# Configuración del plugin

Después de descargar el complemento, solo necesita activarlo, luego configurar algunos elementos :

- la dirección IP de swimo
- swimo serial
- La apikey de swimo

![swimo](../images/swimo1.png)

# Configuración del equipo

La sincronización del equipo permite recuperar las sondas y actuadores configurados en el Swimo.

![swimo2](../images/swimo2.png)

Una vez configurado en un objeto, obtendrá sus elementos en el tablero :

![swimo3](../images/swimo3.png)

> **Nota**
>
> - Los datos se actualizan cada 5 minutos o durante una acción.
> - Los puntos de ajuste no se muestran por defecto.
> Son totalmente utilizables a través de los escenarios.
