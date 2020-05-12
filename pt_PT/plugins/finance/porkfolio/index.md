# Plugin Porkfolio 

Este plugin permite que você controle e tenha todas as informações do seu mealheiro Porkfolio.

![porkfolio screenshot1](../images/porkfolio_screenshot1.jpg)
![porkfolio screenshot10](../images/porkfolio_screenshot10.jpg)
![porkfolio screenshot9](../images/porkfolio_screenshot9.jpg)
![porkfolio screenshot8](../images/porkfolio_screenshot8.jpg)

# Configuração 

## Configuração do plugin Jeedom : 

**Instalação / Criação**

Para usar o plug-in, você deve fazer o download, instalar e ativá-lo como qualquer plug-in Jeedom.

Depois disso, você precisará inserir suas credenciais (conta de piscadela + API):

![porkfolio screenshot7](../images/porkfolio_screenshot7.jpg)

Vá ao menu Plugins / Finanças, você encontrará o plugin porkfolio :

Você chegará à página que listará seu equipamento (você pode ter vários Porkfolio) e que permitirá criar algumas

![porkfolio screenshot6](../images/porkfolio_screenshot6.jpg)

Clique no botão Adicionar :

Você chegará à página de configuração do seu portfólio:

![porkfolio screenshot5](../images/porkfolio_screenshot5.jpg)

Nesta página você encontrará várias seções :

**Général**

Nesta seção, você encontrará todas as configurações do jeedom. Ou seja, o nome do seu equipamento, o objeto com o qual você deseja associá-lo, a categoria (de preferência multimídia), se você deseja que o equipamento esteja ativo ou não e, finalmente, se você deseja que ele fique visível na tela. painel de controle.

**Configuração**

Esta seção é útil se e somente se você tiver vários produtos. Você precisará inserir o número do equipamento (1, 2 ou 3, por exemplo). Você pode deixar esse campo vazio se tiver apenas um portfólio de porco, o que certamente será o seu caso.

**Comandos**

Você não tem nada para fazer nesta seção. Os pedidos serão criados automaticamente.

-   Legal: para atualizar o widget, se necessário
-   Data de apresentação : Data da última operação
-   Data do movimento : Data da última vez que um movimento foi detectado
-   Data da inversão : Data da última vez em que o portfólio foi devolvido
-   Última Operação : Valor da última transação
-   Nariz : Cor do nariz
-   Objetivo : Valor do seu objetivo
-   Soma : Soma atualmente no portfólio

# Informação 

## Informações no painel : 

![dashboardinfo](../images/dashboardinfo.jpg)

-   à : Cabeça de porco que pode mudar o humor. Ao deixar o mouse na cabeça, ele informará quando ele se moveu pela última vez, bem como a última vez em que foi entregue
-   B : Botão Atualizar para solicitar valores do servidor
-   C : Valor da última transação. Ao deixar o mouse nele, você terá a data da última operação
-   D : Valor do seu objetivo
-   E : Cor do nariz do seu portfólio
-   F : Barra de progresso para alcançar seu objetivo
-   G : Soma atualmente no seu portfólio

# Acções 

## Ações acessíveis no painel : 

Várias ações estão disponíveis no painel :

![dashboardactions](../images/dashboardactions.jpg)

-   à : Ao clicar no bilhete, você pode depositar ou retirar uma quantia em dinheiro

![porkfolio screenshot2](../images/porkfolio_screenshot2.jpg)

-   B : Ao clicar na bandeira, você pode alterar sua meta

![porkfolio screenshot3](../images/porkfolio_screenshot3.jpg)

-   C : Ao clicar no pincel, você pode alterar a cor do nariz do seu portfólio

![porkfolio screenshot4](../images/porkfolio_screenshot4.jpg)

# Faq 

O sistema recupera informações a cada hora. Você pode clicar no comando Atualizar para atualizar manualmente.

Certifique-se de ter criado o arquivo de configuração salvando suas informações na configuração geral do plugin.
