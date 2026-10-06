# Registro de cambios Openvpn

>**IMPORTANTE**
>
>A modo de recordatorio: si no hay información sobre la actualización, es porque esta se refiere únicamente a la actualización de la documentación, la traducción o el texto.

# 26/09/2026

- Fija el valor de mtu
- Revisión de traducciones
- Se ha añadido la columna *Estado* a la lista de comandos
- Gestión dinámica del módulo «remoteip» de Apache para una mayor seguridad:
  - Al iniciar el DNS de Jeedom, el módulo «remoteip» de Apache se activará y configurará automáticamente
  - Por el contrario, al apagar el sistema, el módulo se desactivará por motivos de seguridad
- Se requiere Jeedom v4.5

# 26/08/2024

- Mejor soporte para PHP8
- Compatibilidad con imágenes personalizadas de los dispositivos (Jeedom 4.5)

# 08/01/2024

- Preparándose para el apuro 4.4

# 06/11/2023

- Corrección de errores y optimización
- Posibilidad de utilizar certificado, contraseña o ambos

# 13/01/2023

- Carga reducida para la infraestructura de DNS

# 15/02/2021

- Inicio del soporte de alta disponibilidad para el nuevo sistema DNS

# 16/11/2020

- Nueva presentación de la lista de objetos
- Se ha añadido la etiqueta «Compatibilidad con la versión 4»

# 14/11/2019

- Correcciones de errores

# 28/04/2019

- Correcciones de errores

# 16/04/2019

- Optimizaciones

# 16/01/2019

- Se solucionó un problema con las dependencias

# 23/11/2018

- Optimizaciones

# 09/11/2018

- Posibilidad de agregar opciones en la configuración de openvpn
- Posibilidad de ejecutar comandos tras el inicio del DNS (la etiqueta #interface# permite obtener el nombre de la interfaz)

# 30/10/2018

- Mejora del cálculo de la instalación o no de las dependencias

# 29/05/2018

- Optimización del complemento para Jeedom DNS

# 20/04/2018

- Corrección de un error en el inicio del complemento

# 15/04/2018

- La verificación del estado de la VPN ahora se realiza cada 5 minutos en lugar de 15 minutos

# 01/03/2018

- Se ha corregido un error en la subida de archivos (CA y otros)
