# Log de alterações CoolAutomation


>**IMPORTANTE**
>
>Se não houver informação sobre a atualização, significa que se trata apenas de atualização de documentação, tradução ou texto.


# 
- 

# 05/11/2025
- **Amélioration de la gestion des timeouts et des erreurs HTTP** :
  - Augmentation du timeout par défaut de 2 à 10 secondes (configurable)
  - Ajout d'un système de retry automatique en cas de timeout (2 tentatives par défaut, configurable)
  - Messages d'erreur plus explicites avec indication de l'équipement et de la commande en échec
  - Logs enrichis avec temps de réponse et adresse IP de l'équipement
  - Nouveaux paramètres de configuration dans le plugin :
    - **Timeout HTTP** : durée d'attente maximale pour une requête (3-30 secondes)
    - **Nombre de tentatives** : nombre de tentatives en cas d'échec (0-5 tentatives)

# 27/10/2025

- Fix changements de noms de lignes après mise à jour du plugin
- Ajout délai aux mise à jours des commandes infos

# 14/10/2025

- Fix erreur PHP lors de la création des unités

# 18/08/2025

- Ajout plages de consignes min max pour Consigne Mode Chaud et Froid

# 14/08/2025

- Optimisation appels API
- Ajout Consigne Min & Max pour Mode Chaude et Froid

# 08/08/2025
- Ajout système de queues pour l'execution des commandes
- Redémarrage démon tous les 2 jours pour libération éventuelle de mémoire

# 17/07/2025
- Fix Telnetlib3 pour debian 12


# 02/07/2025
- Fix double appel requetes
- Fix code erreur

# 24/07/2024
- Ajout Selection Interface Réseau pour le scan

# 19/06/2024

- Corrigir gerenciamento de temperatura mínima/máxima do administrador
- Adicionado gerenciamento Min/Max pelo Master
- Excluindo comandos obsoletos ao atualizar o plugin


# 15/05/2024

- Widget de modelo de adição para blocos
- Removendo consoles.registros inúteis
- Corrija eqlogic->save na função queryParameters
- Adicionada renomeação de UIDs criados manualmente
- Novo Modal para registro em massa de determinados comandos


# 05/06/2024

- Corrigir alteração de IP no equipamento principal para transmissão para crianças
- Adicionada criação manual para integração de backstream

# 05/04/2024

- Exibição de linhas fixas
_ Adicionada caixa de seleção selecionar tudo

# 16/04/2024

- Nova IU :  Mestre -> Linhas
- Excluindo linhas quando o pai foi excluído


# 01/04/2024

- Conexão TelNet
- Descanso de API com coolLinkHub

# 24/01/2024

- Primeiro compromisso

