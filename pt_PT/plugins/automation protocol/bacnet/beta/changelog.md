# Changelog Bacnet

>**IMPORTANTE**
>
>Recorde-se que se não há informação sobre a atualização é porque se trata apenas de atualização de documentação, tradução ou texto


# 

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

- Correção para uso da CPU
- Threading para leitura de dados
- Optimisation du code
- Corrija possíveis valores nulos

# 27/03/2024

- Corrigir comandos OnOff
- Adição Modal para Gerenciamento de Pontos Bacnet (renomear comandos por seus atributos bacnet Descrição)

# 21/06/2023

- Adicionar controle de lista se o comando Action/List (consulte a documentação)

# 25/05/2023

- Adição do campo de Prioridade de Gravação no comando (veja o final da documentação)

# 11/05/2023

- Mudanças para Varredura de Rede e Pontos Bacnet
- Estado anterior v4.2
- Botão Registrar tudo na guia Pedidos

# 08/06/2022

- Máscara de sub-rede de escolha na configuração do plug-in

# 18/05/2022

- Escolha de dispositivos a serem verificados ao adicionar novos equipamentos
- Otimização do tempo de digitalização

# 02/08/2022

- Alterando LogicalId e Select All Buttons para comandos Info e Writes.

# 30/08/2021

- Adição de sistema de paginação para criação de pedidos
