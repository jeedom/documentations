# Plug-in Enedis Linky

# Description

Plugin que permite a recuperação de dados de consumo de eletricidade de medidores inteligentes *(linky por exemplo)* questionando o [conta de cliente **Enedis**](https://mon-compte.enedis.fr/auth/XUI/#login/&realm=/enedis&forward=true){:target = "\_ em branco"}.

>**IMPORTANTE**
>
>O plugin foi completamente reescrito em fevereiro de 2021 para uso **a API Enedis Data-Connect oficial**. Se você já usou o plugin antes, nós o convidamos a criar um novo equipamento ou deletar todos os controles de um equipamento anterior.

É possível acessar dados de **consumo**, do **Produção** ou para os 2 tipos de medição diretamente em um dispositivo.

5 dados são relatados para cada tipo de medição :
- o **consumo por hora** por meia hora *(em kW)*.
>*Também chamado de "curva de carga", esse dado retorna a potência exigida / injetada em média ao longo de meia hora.*

- o **consumo diário** *(em kWh)*.
- o **consumo mensal** *(em kWh)*.
- o **consumo anual** *(em kWh)*.
- o **poder maximo** *(em kVA)*.

>**EM FORMAÇÃO**  
>    
>Como os dados não são disponibilizados em tempo real, o plugin recupera os dados de consumo de eletricidade da véspera de cada dia.

# Configuration

## Configuração do plugin

O plugin **Enedis Linky** não requer configuração específica e só deve ser ativado após a instalação.

Enquanto o plugin não recuperou todos os dados do dia anterior, ele continua a pesquisar os servidores a cada hora entre 5h e 20h, caso contrário, as chamadas serão suspensas até o dia seguinte.

Para não sobrecarregar os servidores Enedis, as chamadas são feitas em um minuto aleatório que pode ser visualizado ou modificado na página de configuração do plugin.

## Configuração do equipamento

Para acessar os diferentes equipamentos **Enedis Linky**, vá para o menu **Plugins → Energia → Enedis Linky**.

>**EM FORMAÇÃO**
>    
>O botão **acrescentar** permite que você adicione um novo medidor / PDL.

Se ainda não o fez, comece por autorizar a partilha de dados Enedis com a Jeedom clicando no botão **Link Enedis com Jeedom : Eu acesso minha área de cliente Enedis** :      

![Lien espace-client Enedis](../images/link_enedis.png)

Você é então redirecionado para esta página na qual você deve informar **seus detalhes de login para o mercado Jeedom** então clique no botão **Validar** :      

![Authentification compte Market Jeedom](../images/Auth_Jeedom.png)

Redirecionamento para a página de consentimento da Enedis na qual é necessário **Verifica a caixa** e clique em **Validar** :     

![Autorisation Enedis](../images/Auth_Enedis.png)

Depois que o compartilhamento de dados é validado, esta página é exibida :     

![Succès](../images/Auth_Enedis_success.png)

>**IMPORTANTE**
>    
>Se você não conseguir acessar nenhuma dessas páginas, desative o bloqueador de anúncios do navegador.

Uma vez que o compartilhamento de dados foi autorizado, tudo o que resta é informar **o número de identificação do Ponto de Entrega** preocupado *(PDL)* e a **tipo de medição** para voltar.

Ao salvar o equipamento pela primeira vez, o plugin irá criar automaticamente os comandos necessários e integrar os históricos disponíveis no site da Enedis até 3 anos atrás.

>**DICA**
>
>Se por um motivo ou outro o plugin não conseguiu recuperar os históricos ao criar os pedidos, bastará deletar os pedidos e depois salvar o equipamento para voltar a gerar os pedidos e seu histórico.

>**EM FORMAÇÃO**
>
>Os dados de consumo por hora são recuperados nos últimos 7 dias, no máximo.

# Template de widget

O plugin oferece a possibilidade de exibir dados de consumo e / ou produção em um template de widget que imita a aparência de um medidor *Linky*. O clique no botão "**- \| +**" permite passar do consumo para a produção para quem tem acesso a 2 tipos de medidas.

![Template de widget](../images/enedis_screenshot1.png)

Para ativar esta opção, basta marcar a caixa **Template de widget** na página geral do equipamento em questão. Uma vez que a caixa é marcada, uma opção permite que você selecione a cor de fundo do widget *(163, 204, 40 por padrão)*.

>**EM FORMAÇÃO**
>     
>O modelo do widget será exibido nas versões desktop e móvel.

>**DICA**
>     
>Na versão desktop, as informações exibidas no widget se adaptam em tamanho ao redimensionar o bloco.
