# Plugin Airzone


# Description

Plugin para gerenciar e controlar seus sistemas Airzone


# Pré-requisitos

 - Jeedom v4.4.2
 - Conheça os endereços IP dos seus gateways


# Installation

Depois de baixar o plugin, você deve primeiro ativá-lo, como qualquer plugin Jeedom.


# Configuration

Vá para o menu de gerenciamento de Plugins / Plugins


Escolha o Cron desejado para a atualização dos valores :  5, 10, 15, 30, por hora ou diariamente.

Escolha o Tempo de espera entre solicitações para cada zona; por padrão 10s se campo vazio.

Sauvegardez


# Adicionando equipamento

Vá para o menu Plugins / Comfort / AirzoneJeedom


Clique em Adicionar gateway.

![config](../images/airzoneEquipement.png)

Você pode configurar um endereço IP lá.

Depois de salvar, você pode clicar em Iniciar verificação

IMPORTANTE : Se você tiver uma área que contenha caracteres especiais, isso pode causar um erro de SystemOut of Range.



# Plug-in de página :

![pluginView](../images/airzoneEqlogics.png)

Você pode encontrar na página do plugin os gateways no lado esquerdo, bem como suas áreas digitalizadas e associadas no lado direito

Observe que as zonas Masters possuem um ícone amarelo, para diferenciá-las claramente


# Dashboard


Depois de criar seu equipamento, você os encontrará no painel.

Os ícones de modo mudam dependendo do modo selecionado: Frio, Quente, Ventilação, Seco e Pare.

Para se beneficiar dos ícones coloridos, lembre-se de ir para as configurações do seu Jeedom (Configurações / Sistema / Configuração / Interface), e marque "Ícones de widget coloridos"

Apenas as zonas Master têm o menu suspenso para alterar o modo nas zonas associadas configuradas em seu sistema

Os ícones de informações de ponto de ajuste e temperatura mudam de acordo com as janelas de valor : -20 ° C, entre 20 e 25 ° C, mais de 25 ° C (e o equivalente se a zona for definida em Fahrenheit)

As escolhas disponíveis nos modos, ou as velocidades dos ventiladores são detectadas de acordo com as possibilidades do seu sistema.



Equipamento típico :

![config](../images/airzoneWidgets.png)


Equipamento de uma zona mestre; vemos um comando adicional para ativar o mesmo modo em todas as zonas associadas do sistema


