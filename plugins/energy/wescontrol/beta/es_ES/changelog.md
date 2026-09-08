# Registro de cambios Wes Control

>**IMPORTANTE**
>
>A modo de recordatorio, si no hay información sobre la actualización, es porque esta se refiere únicamente a la actualización de la documentación, la traducción o el texto.

# 08/09/2026

- Nueva versión estable

# 05/06/2026

- Compatibilidad con imágenes personalizadas para los dispositivos
- Versión mínima requerida de Jeedom: **4.4**

# 01/06/2026

- Corrección de la gestión de los mensajes de actualización CGX: creación, actualización y eliminación automática en función del estado real del servidor Wes

# 25/05/2026

- Nueva versión del archivo CGX V1.0.6
- Se ha añadido compatibilidad con las variables Modbus *(firmware WES >= V0.9b05)*
- Actualización del icono del complemento

# 22/05/2026

- Nueva versión estable
- Versión mínima requerida del firmware de Wes: **V0.84A10** *(cambiar a la rama «less-than-V0.84A10» para versiones anteriores)*
- Varias correcciones para Debian 12/PHP 8

# 10/01/2024

- Nueva versión del archivo CGX V1.0.5
- Inclusión de «Consumo/Producción» en la lista de TIC
- Incorporación de un comando «Productor» *(1 si Enedis ha activado la producción, 0 en caso contrario)*
- Incorporación del índice de inyección *(no se muestra si el productor está a 0)*
- Incorporación de la potencia aparente inyectada *(no se transmite si el productor está a 0)*

# 13/12/2022

- Nueva versión estable
- Comprobación de la total compatibilidad del complemento en función de su versión y de la del firmware del Wes *(``< V0.84A10`` = complemento estable / ``>= V0.84A10`` = complemento beta)*
- Se ha añadido la visualización en formato de tabla de los dispositivos secundarios.

# 13/06/2022

- Nueva versión de archivo CGX V1.0.3

# 10/05/2021

- Nueva versión del archivo CGX V1.0.2
- Adición del parámetro "Tipo de medida" para contadores y TIC
- Se han añadido los tipos de contadores **Calorías, Electricidad y Gasóleo**
- Se ha añadido una opción de actualización automática y un comando para actualizar el archivo CGX, así como un botón que permite actualizar todos los servidores activos
- Optimización de la interfaz.

# 28/04/2021

- Suministro del complemento
