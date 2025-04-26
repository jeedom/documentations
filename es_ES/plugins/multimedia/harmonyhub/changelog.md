# Changelog Harmony Hub

>**Importante**
>
>A modo de recordatorio, si no hay información sobre la actualización es porque solo se refiere a la actualización de documentación, traducción o texto.

> Attention
> Rediseño significativo del complemento: el complemento se ha reescrito por completo, incluida la comunicación con Harmony Hub (a través del demonio ahora)
>
> Requiere Jeedom 4.4.8
>
> Compatible con Debian 11 y 12! El complemento ya no es compatible con Debian 10, si todavía estás en Debian 10, no instales esta versión.
>
> Los equipos antiguos se marcarán como obsoletos y no se migrarán. Utilice la herramienta "Reemplazar" del núcleo si desea adaptar fácilmente sus escenarios.
>
> Ver también [este tema en la comunidad](https://community.jeedom.com/t/importante-mise-a-jour-pour-debian-11-et-debian-12/129908) para más detalles

## 

- 

# 25/11/2024

- Corrija la versión de una dependencia para evitar un cambio importante (contexto de tiempo de espera de interrupción async-timeout v5)

# 28/08/2024

- Reescritura completa del complemento
- Usando el método de instalación de dependencia central
- Cambiar la biblioteca para comunicarse con Harmony Hub para utilizar una biblioteca con un mejor seguimiento
- Usando un demonio para:
  - para mejorar la capacidad de respuesta de las acciones
  - para tener retroalimentación de estado en tiempo real
- Configuración simplificada: Ya solo queda la configuración de la IP del hub para entrar en el plugin config e iniciar el daemon y el equipo se sincroniza con Jeedom.
- Agregar un pedido **Iniciar actividad** que indica la actividad que se está iniciando (vacío si no hay ninguna))

# 17/09/2023

- Reparar la compatibilidad de Debian 11 y Python 3
- versión básica mínima requerida: v4.2

# 19/10/2022

- Lista actualizada de comandos para Jeedom v4.3
- Correcciones menores y optimizaciones en la pantalla de administración de equipos

# 18/05/2021

- Corrección de un mal funcionamiento de algunos controles
- Revisión de la interfaz
- Revisión de la documentación

# 20/11/2020

- Optimizaciones generales
- Nueva presentación de la lista de objetos
- Adición de la etiqueta "compatibilidad V4"

# 20/09/2019

- Adaptación V4

# 07-06-2019

- Corrección de errores en dependencias NOK mientras está bien

# 2019-05-23

- Instalación de la página del equipo para el futuro Jeedom

# 2019-02-19

Esta actualización está vinculada a la actualización de Logitech que reactiva el XMMP. Deberá volver a crear el archivo conf y, especialmente, activar en la aplicación Harmony el modo desarrollador que activa el XMMP
Para información, este cambio interviene el mismo día que el parche Logitech. Al igual que la solución del 21-12-2018, que permitió reparar a muchas personas, ya que funcionaba para todos los que estaban bajo el límite de Debian (mejor que nada). No sabíamos cuándo iba a lanzar Logitech el soporte para XMMP. Pero golpe tras golpe hubo una reacción.

# 2018-12-21

Corrección de emergencia relacionada con la mayor parte de Logitech (temporal para solucionar problemas, recuerde relanzar las dependencias)
