# Registro de cambios de ModBus

>**IMPORTANTE**
>
>Como recordatorio, si no hay información sobre la actualización, significa que solo se trata de la actualización de la documentación, la traducción o el texto.

# 04/11/2025

>**IMPORTANTE**
>
>Une refonte globale du plugin à été effectuée. Les méthodes d'écritures ou les parametrages des registres pourraient etre a refaire/re-adapter suivant les installations. Merci de bien faire un backup et de le télécharger en local avant de mettre à jour le plugin

- OS Minimum : Debian 11
- Jeedom Minimum : 4.4.19
- Montée de version de pymodbus en 3.8.6
- Passage en asynchrone
- Suppression ByteOrder car non standard avec Modbus
- Suppression du parametre Nombre de registres : gérer maintenant via le choix du format de données choisi
- Refonte conversion registres
- Gestion programmée
- Optimisation et fix sur multiples clients TCP
- Ajout Configurer Fc16 via bootbox pour valeurs et format
- Ajout format short/ushort (int8,uint8)
- Ajout Mode Cyclique ou sur déclenchement

# 01/11/2025

- Fix selection des functions codes

# 31/10/2025

- Gestion formatType UInt8 et Int8


# 28/10/2025

- Optimisation et fix sur multiples clients TCP

# 18/07/2025

- Ajout Configurer Fc16 via bootbox pour valeurs et format

# 01/04/2025

- Ajout option MQTT : envoie des infos de registres sur broker MQTT (nécessite le plugin officiel MQTT)


# 19/03/2025

- OS Minimum : Debian 11
- Jeedom Minimum : 4.4.19
- Montée de version de pymodbus en 3.8.6
- Passage en asynchrone
- Suppression ByteOrder car non standard avec Modbus
- Suppression du parametre Nombre de registres : gérer maintenant via le choix du format de données choisi
- Refonte conversion registres


# 30/10/2025

- Fix Debian12

# 06/02/2025

- Fix error NameCmd


# 11/08/2024

- Reparar la pérdida de memoria de Python3

# 30/07/2024

- Agregar registro en el mensaje EcritureBit

# 26/07/2024

- Se agregó un nuevo método para cambiar bits en un registro (ver documento)
- Agregado en la configuración del complemento : Elección del nivel de registro de la biblioteca Modbus


# 18/07/2024

- Agregar formato de cadena
- Mejor precisión de los formatos de datos en el selector


# 26/03/2024

- Reparar actualización para una versión específica de pymodbus

# 29/05/2023

HAGA UNA COPIA DE SEGURIDAD DE JEEDOM ANTES DE INSTALAR LA NUEVA BETA.
- Escribir 1 bit
- Órdenes de importación/exportación a través de Xlsx
- Nueva operación de sintaxis en el comando (ver Doc)
- Fixs

# 15/05/2023

- Nueva configuración de comandos de la interfaz de usuario
- Optimizaciones de conversión Valores
- Parámetro de retorno hexadecimal

# 03/04/2023

- Nueva configuración de comandos de la interfaz de usuario
- Parámetro ArrayRegistres para escribir consecutivamente a partir de un registro inicial

# 10/01/2023
- Arreglar paquetes de importación para python 3.9

# 13/10/2022
- Opción Habilitar/Deshabilitar mensaje de escritura
- Opción nbBytes para determinar la división de un registro en x bytes

# 07/10/2022
- Nuevo sistema de modelos pregrabados
- Opción ReadMultiRegisters en los comandos

# 26/09/2022
- Nuevo parámetro de tiempo de espera entre registro de lectura

# 23/09/2022
- Biblioteca de pyModbus de registros de cambios

# 16/08/2022
- Elección de puerto para Modbus TCP (por defecto 502)

# 01/08/2022
- BugFix en la desconexión de un dispositivo en el mismo bus

# 05/02/2022
- Función Exportación de un archivo Json e Importación de pedidos por Equipo

# 20/03/2022
- Función Fc16 Registro no seguido

# 14/02/2022
- Función Fc16 para autómatas sin Fc6

# 02/03/2022
- Versión Beta, compatible con 4.2.7
