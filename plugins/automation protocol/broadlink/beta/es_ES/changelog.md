# Registro de cambios Broadlink

>**IMPORTANTE**
>
>Si no hay información sobre la actualización, es porque esta se refiere únicamente a cambios en la documentación, la traducción o el texto.

# 19/05/2026

- Corrección de errores
- Se requiere Jeedom v4.5

# 28/02/2025

- Reparar una pérdida de memoria en el demonio
- Solucionar un problema al instalar dependencias que podrían ocurrir en ciertas instalaciones
- Eliminación de **la instalación** de 2 dependencias (`pycrypto` & `asn1crypto`) que ya no son útiles para el complemento
- Modernización de la interfaz
- Se requiere Debian 11
- Compatibilidad con Debian 12
- Se requiere Jeedom v4.4.8

# 30/09/2022

- Se corrigió la instalación de dependencias en Jeedom v4.2

# 05/03/2021

- Actualización del script de dependencias tras el cambio de criptografía

# 15/01/2021

- Se solucionó un problema con las dependencias de buster

# 23/11/2020

- Gestión de las dependencias de ciertas instalaciones dañadas por bibliotecas de criptografía de terceros en Python 3 *(vuelve a instalar las dependencias si tienes algún problema)*

# 20/11/2020

- Optimizaciones generales
- Nueva presentación de la lista de objetos
- Se ha añadido la etiqueta «Compatibilidad con la versión 4»

# 31/07/2020

- Migración a Python 3 *(probablemente haya que volver a instalar las dependencias)*
- Se ha añadido la gestión del RM4 *(consulta la documentación para conocer las particularidades)*
- Se ha añadido un aprendizaje avanzado por radiofrecuencia (RF) en dos etapas: una para variar las frecuencias y encontrar la adecuada, y otra para el aprendizaje. Esto aumentará la compatibilidad del aprendizaje.

# 11/09/2019

- Adaptación para jeedom v4

# 09/05/2018

- Adición de la imagen de SC1

# 10/03/2018

- Fuerza sí en dependencias
