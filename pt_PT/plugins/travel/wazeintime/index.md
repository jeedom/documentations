# Plug-in do Waze in Time 

Este plugin permite que você tenha as informações da viagem (tráfego levado em consideração) via Waze. Esse plug-in pode não funcionar mais se o Waze não aceitar mais que interrogemos seu site

![wazeintime screenshot1](../images/wazeintime_screenshot1.jpg)

# Configuração 

## Configuração do plugin: 

Para usar o plug-in, você deve fazer o download, instalar e ativá-lo como qualquer plug-in Jeedom.

Depois disso, você terá que criar sua (s) viagem (s) :

Vá para o menu plugins / organização, você encontrará o plugin Waze Duration :

![configuration1](../images/configuration1.jpg)

Você chegará à página que listará seu equipamento (você pode ter várias rotas) e que permitirá que você crie alguns

![wazeintime screenshot2](../images/wazeintime_screenshot2.jpg)

Clique no botão Adicionar viagem ou no botão + :

![config2](../images/config2.jpg)

Você chegará à página de configuração da sua viagem:

![wazeintime screenshot3](../images/wazeintime_screenshot3.jpg)

Nesta página você encontrará três seções :

### Geral

Nesta seção, você encontrará todas as configurações do jeedom. Ou seja, o nome do seu equipamento, o objeto ao qual você deseja associá-lo, a categoria, se você deseja que o equipamento esteja ativo ou não e, finalmente, se você deseja que ele fique visível no painel.

### Configuration

Esta seção é uma das mais importantes e permite definir o ponto inicial e final :

-   Essas informações devem ser as latitudes e longitudes das posições
-   Eles podem ser encontrados usando o site fornecido clicando no link da página (basta digitar um endereço e clicar em obter coordenadas GPS)

### Painel de controle

![config3](../images/config3.jpg)

-   1 duração : duração da viagem 1
-   Duração dois : tempo de viagem com a rota alternativa
-   Caminho 1 : Caminho 1
-   Rota 2 : Rota alternativa
-   Duração 1 retorno : tempo de retorno com viagem 1
-   Duração 2 back : hora de retorno com a rota alternativa
-   Viagem de regresso 1 : Viagem de regresso 1
-   Viagem de regresso 2 : Viagem de retorno alternativa
-   Legal : Atualizar informações

Todos esses comandos estão disponíveis através de cenários e através do painel

## O widget

![wazeintime screenshot1](../images/wazeintime_screenshot1.jpg)

-   O botão no canto superior direito atualiza as informações.
-   Todas as informações são visíveis (para viagens, se a jornada for longa, ela pode ser truncada, mas a versão completa é visível deixando o mouse sobre ela)

## Como as notícias são atualizadas

As informações são atualizadas uma vez a cada 30 minutos. Você pode atualizá-los sob demanda via cenário com o comando refresh ou via traço com setas duplas
