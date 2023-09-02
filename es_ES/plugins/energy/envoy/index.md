# Complemento Enphase Envoy

Complemento para recopilar información fotovoltaica de las puertas de enlace de Envoy

# Configuration

Para configurar el complemento, es necesario completar la siguiente información :

- Dirección IP de puerta de enlace enviada
- Contraseña del enviado (si esto no se ha cambiado, son los últimos 6 caracteres del número de serie.)

Luego, al hacer clic en el botón "Sincronizar", todo el equipo se creará automáticamente.

# Información reportada

El complemento le permite informar la siguiente información (si tiene un Enviado medido) :

- General (actualizar cada minuto)
    - Cantidad de microinversores
    - Número de baterías
    - Estado de la batería (carga / descarga / inactivo)
    - % de carga de la batería
    - Producción de batería (en W)
    - Producción instantánea (en W)
    - Producción diaria (en Wh)
    - Producción de los últimos 7 días (en Wh)
    - Producción desde la puesta en marcha (en Wh)
    - Potencia total instantánea (en W)
    - Consumo diario (en Wh)
    - Consumo de los últimos 7 días (en Wh)
    - Consumo desde la puesta en marcha (en Wh)
    - Potencia neta instantánea (en W)
    - Consumo neto diario (en Wh)
    - Consumo neto de los últimos 7 días (en Wh)
    - Consumo neto desde la puesta en marcha (en Wh)
- Para cada microinversor (actualizar cada 5 minutos)
    - Aprovisionado (Sí / No)
    - Comunicación (sí / no)
    - Producción (sí / no)
    - Potencia (en W)
    - Potencia máxima (en W)
- Para cada batería (actualizar cada 5 minutos)
    - Aprovisionado (Sí / No)
    - Comunicación (sí / no)
    - Producción (sí / no)
    - Potencia (en W)
    - Potencia máxima (en W)
    - % de carga
    - Temperatura máxima (en ° C)

# Firmware V7

Si estas en firmware v7 tienes que ir [allá](https://entrez.enphaseenergy.com/), inicie sesión, luego haga clic en "Crear token de acceso" y copie el código jwt en la configuración del complemento jeedom. Tenga en cuenta que no sabemos en este momento si este código es válido por un período ilimitado o solo por unos pocos meses