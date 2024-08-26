# Registro de cambios IPX 800 v4

>**Importante**
>
>Como recordatorio si no hay información sobre la actualización, significa que solo se refiere a la actualización de documentación, traducción o texto

- Soporte para persianas enrollables EnOcean
- Posibilidad de configurar el puerto de comunicación con la IP (por defecto 80)

# 08/01/2024

- ATENCIÓN !!!!!! Cambio de comportamiento en las persianas, inversión de dirección, el complemento ya no indica el % de cierre sino el % de apertura
- Verificar el código de retorno de ipx durante un comando y, si hay un error, Jeedom volverá a intentar el comando 150 ms después
- Preparándose para el apuro 4.4

# 07/02/2022

- Actualización para Jeedom 4.2

# 25/10/2021

- Agregar una plantilla
- Compatibilidad con PulseUP y pulseDOWN para la gestión de la hoja BSO

# 07/06/2020

- Corrección de un error al leer el valor de la extensión 0-10v

# 05/09/2020

- Se agregó soporte para la extensión 0-10v
- Optimisation

# 12/30/2019

- Error de corrección del termostato
- Corrección de un error en la url del evento para dar al ipx800

# 09/18/2019

- Optimisations

# 08/14/2019

- Corrección de errores en plantillas
- Compatible con php 7.3

# 06/13/2019

- Adición de un sistema de respaldo diario automático para ipx800v4
- Soporte PWM en un solo color
- Supresión del reinicio del demonio en cada cambio en el equipo (ahora es necesario cuando modifica un equipo para reiniciar el demonio manualmente)

# 04/24/2018

-	Soporte para sondas THL de 9 a 14

# 03/19/2018

-   Corrección de número para sensores analógicos enOcean

# 03/05/2018

- 	Agregar el X-dimmer (no olvide configurar el complemento de verificación G para las solicitudes de x-dimmer)

#  02/18/2018

-	Adición de opción en solicitudes a ipx800 (posibilidad de seleccionar el tipo de solicitud para reducir la carga)

-   Soporte mejorado de enOcean

-   Corrección de errores en la recuperación de información de
    extensions

-   Adición de extensión VR

-   Optimización de la sincronización con el ipx800

-   Soporte para módulos THL

-   Adición de un motor de plantillas para la generación de pedidos
