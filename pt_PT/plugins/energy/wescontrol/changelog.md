# Controle de registro de mudanças Wes

>**IMPORTANTE**
>
>Recorde-se que, se não existe informação sobre a atualização, é porque se trata apenas de atualização de documentação, tradução ou texto.

# 05/06/2026

- Suporte para imagens personalizadas em mosaicos de equipamentos
- Versão mínima do Jeedom necessária : **4.4**

# 01/06/2026

- Correção no tratamento de mensagens de atualização de CGX : Criação, atualização e exclusão automáticas com base no estado atual do servidor Wes

# 25/05/2026

- Nouvelle version du fichier CGX V1.0.6
- Ajout de la prise en charge des variables Modbus *(firmware WES >= V0.9b05)*

# 22/05/2026

- Version de firmware Wes minimale requise : **V0.84A10** *(passer sur la branche less-than-V0.84A10 pour les versions inférieures)*
- Diverses corrections pour Debian 12/PHP 8

# 01/10/2024

- Nova versão do arquivo CGX V1.0.5

- Ajout de "Consommation/Production" à la liste TIC
- Ajout d'une commande "Producteur" *(1 si production activée par Enedis, 0 sinon)*
- Ajout de l'index d'injection *(non remonté si producteur à 0)*
- Ajout de puissance apparente injectée *(non remontée si producteur à 0)*

# 13/12/2022

- Verificação da total compatibilidade do plugin de acordo com sua versão e a do firmware do Wes *(``< V0.84A10`` = plug-in estável/ ``>= V0.84A10`` = plug-in beta)*
- Adição da exibição no layout da tabela de equipamentos infantis.

# 13/06/2022

- Nova versão do arquivo CGX V1.0.3

# 10/05/2021

- Nova versão do arquivo CGX V1.0.2
- Adição do parâmetro "Tipo de medição" para medidores e TIC
- Adição de tipos de contador **Calorias, eletricidade e combustível**
- Adição de uma opção de atualização automática e um comando para atualizar o arquivo CGX, bem como um botão que permite a atualização de todos os servidores ativos
- Otimização de interface.

# 28/04/2021

- Provisão do plugin
