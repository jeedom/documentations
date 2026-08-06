# Plugin Glinet

# Description

Plugin para gerenciar SMS enviados/recebidos de/para um roteador GL-iNet. 



# Configuração do plug-in

Depois de baixar o plugin, você deve primeiro ativá-lo, como qualquer plugin Jeedom. Dans la section « Configuration », il faudra remplir les champs « IP GliNet » et « Mot de passe GliNet » spécifiques de votre router GL -iNet.


# Uso do plug-in

Após a criação do equipamento, será necessário escolher o tipo de equipamento desejado:
- « Envoie SMS » où il suffit d'ajouter un Numéro (renseigner le nom, type, numéro) pour pouvoir envoyer des SMS.

- « Dernier message reçu » où il y aura 2 commandes: (Atualize a cada minuto)
	- " Cmd Message" que representa a última mensagem recebida.
    - " Cmd Numero" que representa o número de telefone que enviou esta mensagem.
    
- « Etat de la connexion SIM » où il y aura 4 commandes: (Atualizar a cada 15 minutos)
	- " Status do SIM" que representa o status do SIM (SIM pronto, Sem SIM, Digite o código PIN, Não registrado na rede).
    - " Signal Strength" que representa a força do sinal de 4.
	- " Modo de conexão" que representa o modo de conexão do roteador (4G, ...).
