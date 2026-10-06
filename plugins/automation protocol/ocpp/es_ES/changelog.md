# Registro de cambios de OCPP

>**IMPORTANTE**
>
>Si no hay información sobre la actualización, es porque esta se refiere únicamente a la actualización de la documentación, la traducción o el texto.

## 06/10/2026 ***(1.0.0)***

- Primera versión estable
- **Permisos**: diversas correcciones y optimizaciones en el registro
- **Démon**: optimización de la gestión de posibles errores de comunicación con el terminal

## 05/07/2026 ***(0.9.6)***

- **Transacciones**: actualización en tiempo real de la lista de transacciones *(apertura/cierre)*

## 04/07/2026 ***(0.9.5)***

- **Permisos**: optimización de la copia de seguridad de los grupos y las listas de permisos

## 03/07/2026 ***(0.9.4)***

- **Transacciones**: se ha añadido un pictograma para las transacciones activas *(verde = en curso, naranja = desde hace más de 24 horas, rojo = desde hace más de 48 horas)*
- **Transacciones**: se ha añadido un pictograma para las transacciones finalizadas que muestra el motivo del cierre de la transacción al pasar el cursor por encima.

## 02/07/2026 ***(0.9.3)***

- **Autorizaciones**: posibilidad de añadir un nombre descriptivo asociado al identificador *(que se utiliza en la lista de transacciones y de usuarios que pueden iniciar una carga, si se ha introducido)*
- **Permisos**: corrección del orden de las columnas
- **Comandos**: actualización automática de la lista de usuarios que pueden iniciar una carga

## 01/07/2026 ***(0.9.1)***

- **Autorizaciones**: los identificadores ya no distinguen entre mayúsculas y minúsculas a la hora de autorizar una transacción
- **Permisos**: se ha corregido un posible problema de pérdida de credenciales al guardar
- **Transacciones**: cierre automático de cualquier transacción que no se haya completado
- **Terminal**: mejor gestión de la (re)conexión al sistema central
- **Terminal**: optimización del tratamiento de una sustitución con el mismo identificador

## 05/12/2025 ***(0.8.8)***

- **Transacciones**: se ha añadido un botón para eliminar
- **Actualizaciones**: corrección de un error relacionado con los auriculares en una transacción OCPP
- **Controles**: mejor gestión de los límites de carga *(A/W)*

## 24/11/2025 ***(0.8.5)***

- **Comandos**: se han añadido comandos para gestionar la corriente y/o la potencia máxima durante la carga *(solo terminales compatibles con SmartCharging)*
- **Comandos**: se han añadido los comandos para reiniciar el terminal *(software/hardware)*
- **Comandos**: definición de la lista de usuarios que pueden iniciar la carga
- **Documentación**: redacción de la documentación

## 20/11/2025 ***(0.6.5)***

- **Dependencias**: actualización de versión *(OCPP 2.0.0 y WebSockets 15.0.1)*

## 25/06/2025 ***(0.6.2)***

- **Autorizaciones**: se ha añadido una casilla de selección por identificador para autorizar transacciones concurrentes simultáneas
- **Permisos**: se han añadido ventanas emergentes de ayuda
- **Terminal**: optimización de los estados enviados durante una solicitud de autorización

## 15/04/2025 ***(0.5)***

- **Permisos**: gestión de permisos por grupos

## 17/05/2024

- Inicio del desarrollo
