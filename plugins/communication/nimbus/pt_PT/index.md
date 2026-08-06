# Plugin nimbus 

Este plugin permite que você controle e tenha todas as informações do seu Nimbus.

![nimbus screenshot1](../images/nimbus_screenshot1.jpg) 
![nimbus screenshot2](../images/nimbus_screenshot2.jpg) 
![nimbus screenshot3](../images/nimbus_screenshot3.jpg)

# Configuração 

## Configuração do plugin Jeedom : 

Para usar o plug-in, você deve fazer o download, instalar e ativá-lo como qualquer plug-in Jeedom.

Depois disso, você precisará inserir suas credenciais (conta de piscadela + API):

![config plugin](../images/config_plugin.jpg)

Vá para o menu plugins / comunicação, **lá você encontrará o plugin nimbus :**

Você chegará à página que listará seu equipamento (você pode ter vários nimbus) e que permitirá criar algumas

![nimbus screenshot4](../images/nimbus_screenshot4.jpg)

**Clique no botão Adicionar :**

Você chegará à página de configuração do seu nimbus :

![config nimbus](../images/config_nimbus.jpg)

Nesta página você encontrará várias seções :

**Geral**

Nesta seção, você encontrará todas as configurações do jeedom. Ou seja, o nome do seu equipamento, o objeto ao qual você deseja associá-lo, a categoria (de preferência multimídia), se você deseja que o equipamento esteja ativo ou não e, finalmente, se você deseja que ele fique visível na tela. painel de controle.

-   **Configuração**

Esta seção é útil se e somente se você tiver vários nimbus. Você precisará inserir o número do equipamento (1, 2 ou 3, por exemplo). Você pode deixar esse campo vazio se tiver apenas um nimbus que certamente será seu caso.


-   **Projeto**

Esta seção permitirá que você personalize a exibição do seu nimbus no painel. Você pode escolher entre vários fundos. Você também pode escolher a cor da agulha e a cor do texto.

![nimbus screenshot6](../images/nimbus_screenshot6.jpg)

-   **Informação**

![infonimb](../images/infonimb.jpg)

Esta seção será preenchida por si mesma ao salvar seu equipamento. Lá você encontrará informações reais do seu nimbus (número de série, endereço mac, nome, ID)

-   **Comandos**

Você não tem nada para fazer nesta seção. Os pedidos serão criados automaticamente.

-   Rafraichir: para atualizar o widget, se necessário
-   Tela 1 : Informações exibidas na tela 1
-   Tela 2 : Informações exibidas na tela 2
-   Tela 3 : Informações exibidas na tela 3
-   Tela 4 : Informações exibidas na tela 4
-   Posição 1 : Informações sobre a posição da agulha da tela 1
-   Posição 2 : Informações sobre a posição da agulha na tela 2
-   Posição 3 : Informações sobre a posição da agulha na tela 3
-   Posição 4 : Informações sobre a posição da agulha da tela 4
-   Ação de tela 1 : Comando de ação que permite em um cenário escolher a posição e / ou o texto da tela 1
-   Ação de tela 2 : Ação de comando que permite em um cenário escolher a posição e / ou o texto da tela 2
-   Ação de tela 3 : Comando de ação que permite em um cenário escolher a posição e / ou o texto da tela 3
-   Ação de tela 4 : Comando de ação que permite em um cenário escolher a posição e / ou o texto da tela 1
-   Ação da tela Tudo : Comando de ação que permite em um cenário escolher a posição e / ou o texto de todas as telas
-   Ação da tela de frases : Ação de comando que permite em um cenário escolher a posição e / ou o texto de todas as telas (uma sentença de 4 palavras no máximo dividida nas 4 telas)
-   Demo : Ação para iniciar uma demonstração técnica no seu nimbus

# Informação 

## Informações no painel : 

![nimbus screenshot1](../images/nimbus_screenshot1.jpg)

O widget é dividido em 4 mostradores que representam os 4 mostradores do seu nimbus.

-   A agulha indica a posição da agulha na tela correspondente do seu nimbus
-   O texto é o texto exibido no seu nimbus. É possível clicar neste texto para acessar esta tela :

![nimbus screenshot5](../images/nimbus_screenshot5.jpg)


Essa tela permite alterar manualmente o texto, a posição da agulha ou ambos. Permite ver quando você altera o valor já exibido.

# Acções 

## Ações acessíveis via cenário : 

Várias ações são acessíveis via cenário :

![commandes](../images/commandes.jpg)

A ação Demo é independente e lança a demonstração técnica.

Todas as outras ações funcionam da mesma maneira no princípio.

**Este é um comando de mensagem que permite passar dois parâmetros:**

-   Título : um número entre 0 e 360 correspondente à posição da agulha
-   Mensagem : a mensagem a ser exibida

**Os dois são separáveis, o que significa que você pode :**

-   Envie uma posição deixando o campo da mensagem em branco ou deixando *Mensagem*
-   Envie uma mensagem deixando o campo de título em branco ou deixando *título*
-   Envie uma posição e uma mensagem preenchendo ambos

**Há um pedido por tela, um pedido todo, um pedido
Sentença :**

-   Ecrã : permite atuar na tela correspondente
-   Tudo : vamos fazer o mesmo em todas as telas
-   Sentença : comando especial que cortará a mensagem em 4 palavras que serão exibidas em cada tela (se uma palavra exceder 8 caracteres, será cortada se a frase tiver mais de 4 palavras, será cortada)

![Scenario](../images/Scenario.jpg)

![Scenario2](../images/Scenario2.jpg)

![Scenario3](../images/Scenario3.jpg)


**COMO POSSO MOSTRAR PERMANENTEMENTE INFORMAÇÕES SOBRE A AUTOMAÇÃO EM MINHA CASA**

Se você deseja exibir continuamente informações da sua automação residencial.
Crie um cenário agendado a cada 5 minutos (por exemplo).

![Scenario4](../images/Scenario4.jpg)

Neste exemplo, você só precisa substituir o que está no gancho pelos seus comandos. E a cada 5 minutos suas telas serão atualizadas com os valores corretos

# Faq 

O sistema recupera informações a cada hora. Você pode clicar no comando Atualizar para atualizar manualmente.

Certifique-se de ter criado o arquivo de configuração salvando suas informações na configuração geral do plugin.
