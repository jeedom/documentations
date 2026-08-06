# Complemento Enphase Envoy

Complemento para recopilar información fotovoltaica de las puertas de enlace de Envoy

# Configuration

## Antes del firmware v7

Para configurar el complemento, es necesario completar la siguiente información :

- Dirección IP de puerta de enlace enviada
- Contraseña del enviado (si esto no se ha cambiado, son los últimos 6 caracteres del número de serie.)

Luego, al hacer clic en el botón "Sincronizar", todo el equipo se creará automáticamente.

# Firmware V7

Si está en el firmware v7, puede recuperar el token usted mismo yendo [allá](https://entrez.enphaseenergy.com/), conéctese luego haga clic en "Crear token de acceso" y copie el código jwt en la configuración del complemento jeedom (Por el momento no sabemos si este código es válido por un período ilimitado o solo por unos meses). **O** usted indica en su nombre de usuario de Enphase en "[v7] Nombre de usuario", su contraseña en "[v7] Contraseña" y finalmente el número de serie de su puerta de enlace en "[v7] Número de serie del envío", con esta información jeedom recuperará automáticamente el token tan pronto como sea necesario.

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
