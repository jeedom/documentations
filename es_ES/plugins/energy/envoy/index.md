# Complemento Enphase Envoy

Complemento para recopilar información fotovoltaica de las puertas de enlace de Envoy

# Configuration

Para configurar el complemento, es necesario completar la siguiente información :

- Dirección IP de puerta de enlace enviada
- Contraseña del remitente (si no se ha cambiado, estos son los últimos 6 caracteres del número de serie)

Luego, al hacer clic en el botón "Sincronizar", todo el equipo se creará automáticamente.

# Información reportada

El complemento le permite cargar la siguiente información (si tiene un Enviado medido) :

- General (turno cada minuto)
    - Cantidad de microinversores
    - Número de baterías
    - Estado de la batería (carga / descarga / inactivo)
    - % de carga de la batería
    - Producción de batería (en W)
    - Producción instantánea (en W)
    - Producción del día (en Wh)
    - Producción de los últimos 7 días (en Wh)
    - Producción desde la puesta en marcha (en Wh)
    - Potencia instantánea total (en W)
    - Consumo del día (en Wh)
    - Consumo de los últimos 7 días (en Wh)
    - Consumo desde la puesta en marcha (en Wh)
    - Potencia neta instantánea (en W)
    - Consumo neto diario (en Wh)
    - Consumo neto de los últimos 7 días (en Wh)
    - Consumo neto desde la puesta en marcha (en Wh)
- Para cada microinversor (turno cada 5 minutos)
    - Aprovisionado (Sí / No)
    - Comunicación (sí / no)
    - Producción (sí / no)
    - Potencia (en W)
    - Potencia máxima (en W)
- Para cada batería (cambie cada 5 minutos)
    - Aprovisionado (Sí / No)
    - Comunicación (sí / no)
    - Producción (sí / no)
    - Potencia (en W)
    - Potencia máxima (en W)
    - % de carga
    - Temperatura máxima (en ° C)
