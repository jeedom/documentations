# Registro de cambios RFXcom

>**Importante**
>
>Como recordatorio si no hay información sobre la actualización, significa que solo se refiere a la actualización de documentación, traducción o texto

- Se corrigió un error que podía llenar registros

# 27/07/2024

- Se agregó compatibilidad con Debian 12 (versión Jeedom 4.4).7 requeridos para Debian 12)
- Corrección de la gestión del apagado del demonio en caso de problema de configuración o conexión con rfxcom

# 11/06/2024

- El complemento es menos estricto con el firmware rfxcom (la autorización del firmware no está actualizada)
- Rediseñé el demonio para corregir un problema de pérdida de memoria en Debian 11 (gracias @Mips2648)

# 01/03/2024

- Preparándose para el apuro 4.4

# 26/09/2022

- Se solucionó un problema si el usuario ha codificado la activación de los protocolos en la rom rfxcom

# 07/02/2022

- Se solucionó el problema de instalación de dependencias en jeedom 4.2

# 02/03/2022

- Se solucionó el problema de instalación de dependencias en jeedom 4.2
- Corrección de errores en módulos de tipo 0x71 (gracias @Doubledom)

# 02/08/2021

- Posibilidad de autorizar solo un cierto tipo de paquete en el procesamiento de información del equipo (caso raro)
- Corrección de un error en conf 0x1A : Motor Somfy RTS que puede no aparecer en determinados casos.

# 01/07/2020

- Corrección de errores y optimización (gracias @Doubledom)

# 12/07/2020

- Corrección de un error en el equipo Somfy (ID de 8 en lugar de 6)

# 12/03/2020

- Errores corregidos en el proceso de actualización
- Corrección de la dirección del viento (división por 10 demasiado)

# 12/01/2020

- Correcciones de errores

# 29/11/2020

- Corrección de errores en la recuperación de la batería
- Corrección de errores en el control de la estufa del ventilador mcz 2
- Correcciones de errores

# 26/11/2020

- Revisión completa del demonio de complementos
- Pasaje en python3
- Soporte completo de todos los módulos RFXcom

Atención : Esta actualización es importante y requiere reiniciar la instalación de dependencias. También es posible que sea necesario rehacer la inclusión de ciertos sensores.

# 27/05/2019

- Correcciones de errores

# 10/02/2019

- Mejora de la función de detección de puertos rfxcom

# 16/05/2019

- Interfaz de corrección de errores

# 05/03/2019

- Retire el ventilador MCZ 3 ventilador

# 30/04/2019

- Corrección de errores

# 29/04/2019

- Corrección de un error si el nivel de registro es ninguno
- Soporte de ventilador MCZ 3
- Actualizando el documento

# 10/08/2018

- Fijar los protocolos de comparación esperados y deseados en minúsculas

# 10/08/2018

- Revisión de inicio de demonio (por Sarakha)
- Compatible con el último RFXCOM (por Sarakha)
- Separación en el hilo del zócalo de escucha y la clave RFXCOM (por Sarakha)

# 14/04/2018

- La corrección de un error o el demonio puede perder ciertos mensajes si llegaron antes de enviarlos a Jeedom al mismo tiempo con el mismo tipo de paquete

# 17/03/2018

- Actualizando el documento

# 28/02/2018

- Corrección de un error en el cambio de batería

# 2017-12-01

- Los comandos de acción para los módulos de tipo de control remoto son
    creado automáticamente
