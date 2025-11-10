# Registro de cambios Bacnet

>**IMPORTANTE**
>
>Como recordatorio, si no hay información sobre la actualización es porque se trata solo de la actualización de documentación, traducción o texto


# 10/11/2025

- Possibilité de créér des 'sous equipements' une fois un scan d'un équipement effectué ou après un import EDE, pour y ajouter des objects BACnet et ainsi segmenter un équipement BACnet
- 


# 07/11/2025

- Meilleure compatibilité des fichiers EDE à l'import
- Fix affichage Nombre de points par Filtres
- Fix noms des commandes importés depuis un fichier EDE


# 21/10/2025

- Fix local IP

# 06/08/2025

- Gestion réseau APIPA avec détection automatique interface IP

# 05/08/2025
(en cours)
- Ajout du support des notifications COV (Change of Value) pour améliorer les performances et réduire le trafic réseau 
- Interface de configuration pour sélectionner les points utilisant le COV lors du scan des points BACnet
- Détection automatique des appareils qui supportent le COV via la propriété protocolServicesSupported
- Configuration des paramètres COV (durée de vie, nombre max de notifications)
- Limitation du nombre de points COV à 10 par équipement pour éviter les surcharges
- Implémentation côté démon Python pour gérer les abonnements COV, leur renouvellement et les notifications

# 04/08/2025

- Correction suppresion à l'update des commandes action pour objets Input (readOnly)
- Amelioration UI Affichage du scan des points
- Ajout Bouton pour requeter le tableau de priorité d'écriture si existant
- Relachement priorité apres ecriture si priorityArray existant

# 01/08/20205

- Ajout visualisation Schedules + Modifications horaires si device le supporte (rare)
- Amélioration du mécanisme d'écriture BACnet avec libération automatique des priorités pour éviter les conflits d'écriture

# 30/07/2025

- Ajout Scan Manuel par équipement

# 29/07/2025

- Ajout import CSV EDE

# 28/07/2025

- Ajout création manuelle équipement + ajout points manuels pour devices avec milliers de points non scannable pour le plugin. 

# 25/07/20205

- Utilisation Vendorname si il existe lors de la création d'un équipement
- Refonte UI Scan
- Optimisation Scan des points


# 20/02/2025

- Fix Socket for PHP8

# 19/02/2025

- Fix une fuite de mémoire sur le démon
- Plusieurs corrections de bugs mineurs
- Optimisation du code
- Compatibilité Debian 12
- Debian 11 requis
- Jeedom v4.4.8 requis

# 28/10/2024

- Solución para el uso de CPU
- Enhebrado para leer datos
- Optimisation du code
- Corregir posibles valores nulos

# 27/03/2024

- Corregir comandos OnOff
- Adición modal para la gestión de puntos Bacnet (cambiar el nombre de los comandos por sus atributos bacnet))

# 21/06/2023

- Agregar campo de lista si el comando Acción/Lista (consulte la documentación)

# 25/05/2023

- Adición del campo Prioridad de escritura en el comando (consulte el final de la documentación)

# 11/05/2023

- Cambios para Network Scan y puntos Bacnet
- Estado posterior v4.2
- Botón Registrar todo en la pestaña Pedidos

# 08/06/2022

- Opción de máscara de subred en la configuración del complemento

# 18/05/2022

- Elección de dispositivos para escanear al agregar nuevos equipos
- Optimización del tiempo de escaneo

# 08/02/2022

- Cambio de LogicalId y Seleccionar todos los botones para los comandos Info y Writes.

# 30/08/2021

- Incorporación del sistema de paginación a la creación de pedidos
