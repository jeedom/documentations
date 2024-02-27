# Plug-in GRDF

Plugin que permite a recuperação de dados de medidores de gás comunicantes *(Gazpar por exemplo)* através da [de uma conta de cliente **GRDF**](https://login.monespace.grdf.fr/mire/connexion){:alvo="\_em branco"}.

Este plugin é capaz de fornecer acesso a leituras de consumo de gás, bem como leituras de injeção, se aplicável *(somente medidores profissionais)*. Ele usa **a API oficial do GRDF ADICT**.

Dependendo do tipo de medidor, 2 tipos de dados podem ser recuperados :
 - **Dados publicados** são fornecidos por todos os medidores. São dados transmitidos ao fornecedor para serem utilizados no faturamento. Esses dados podem ser visualizados até no máximo 5 anos atrás.
 - **Dados informativos** referem-se aos dados diários transmitidos pelos medidores que publicam dados mensais para faturamento *(1M/MM)*. Estes dados podem ser consultados até há no máximo 3 anos.

Ainda dependendo do tipo de contador, os dados disponíveis não são os mesmos, assim como a sua frequência de disponibilidade.

| **Tipo de medidor** | Dados publicados | Dados informativos | Frequência de alívio | Frequência de chamada |
|:---:|---|---|---|---|
| **6 milhões** *(particuliers)* | Dados semestrais | | A cada 6 meses, de D+2 a D+3 após a transferência | 1 a 2 vezes por mês |
| **1 milhão** *(particuliers)* | Dados mensais mês M-1 | Dados diários :<br>- estimado<br>- últimos meses M-1 | Mensalmente de D+2 a D+3 após a data de publicação *(informações publicadas e definitivas)*<br>Todos os dias de D+1 a D+3 *(informação estimada)* | 1 a 2 vezes por mês *(Publicados)*<br>1 vez por dia *(informatives)* |
| **MILÍMETROS.** *(professionnels)* | Dados mensais mês M-1 | Dados diários mês M-1 | Todos os meses entre D+2 após a data de publicação e os 7º Jogos Olímpicos do mês M *(Publicados)*<br>Todos os meses entre os dias 10 e 20 do mês M *(informatives)* | 1 a 14 vezes por mês *(Publicados)*<br>1 a 11 vezes por mês *(informatives)* |
| **Nenhuma palavra** *(professionnels)* | Dados diários :<br>- estimado<br>- últimos meses M-1 | | Todos os dias de D+1 a D+2 *(estimativa publicada)*<br>Todos os meses entre a 1ª e a 6ª Olimpíada do mês M *(publicado definitivamente)* | 1 vez por dia |

>**INFORMAÇÃO**
>
>Os contadores **6 milhões** são plugins suportados, porém normalmente todos foram substituídos por contadores **1 milhão** no final de 2023.

# Configuration

Como qualquer plugin Jeedom, o plugin **GRDF** deve ser ativado após a instalação.

## Configuração do plug-in

>**INFORMAÇÃO**
>
>Sinta-se livre para **copiar número de identificação PCE** quando aparece durante esta operação porque será útil durante a etapa de configuração do equipamento Jeedom.

Para começar, você deve autorizar o compartilhamento de dados GRDF com Jeedom clicando na imagem **Autorizar o acesso à conta GRDF** na página de configuração do plugin :

![Lien espace client GRDF](../images/link_grdf.jpg)

Você será então redirecionado para esta página na qual deverá fornecer informações **seus identificadores no mercado Jeedom** então clique no botão **Para validar** :

![Authentification compte Market Jeedom](../images/Auth_Jeedom.jpg)

**Faça login na sua área de cliente GRDF** em seguida, selecione um contador **aguardando consentimento** :

![Sélection compteur GRDF](../images/grdf_home.jpg)

Selecione seus consentimentos e clique no botão **Para validar** :

 - **Meus dados de consumo de gás** : **Sim** *(obligatoire)*
   - **Data de início** : **1º de janeiro do ano atual** ou 1º de janeiro até 4 anos atrás para consultar anos anteriores em Jeedom.
   - **Data final** : Opcionalmente, a mesma data do término do consentimento, por exemplo.
   - **Dados publicados** : **Sim** *(obligatoire)*
   - **Dados informativos** : **Sim** *(fortemente recomendado)*
 - **Meus dados contratuais** : **Sim** *(facultatif)*
 - **Meus dados técnicos** : **Sim** *(obligatoire)*
 - **Data de início do consentimento** : **Data de hoje**
 - **Data de término do consentimento** : Uma escolha.

![Consentement GRDF](../images/grdf_choose.jpg)

Uma vez validados os seus consentimentos, você tem a possibilidade de **dê seu consentimento para outro PCE** Ou **voltar para a página Jeedom** confirmando o fim da operação :

![Validation GRDF](../images/grdf_consent.jpg)

>**IMPORTANTE**
>
>Caso não consiga acessar uma dessas páginas, desative o bloqueador de anúncios do navegador.

## Configuração do equipamento

Para acessar os diferentes equipamentos **GRDF**, você tem que ir ao menu **Plug-ins → Energia → GRDF**.

>**INFORMAÇÃO**
>
>O botão **Adicionar** permite adicionar um novo contador.

Uma vez validadas as autorizações de acesso, resta fornecer **o número de identificação do PCE** preocupado *(espaços são removidos automaticamente)* então salve o equipamento.

Medidores profissionais *(MM ou DD)* possui um campo de configuração adicional que permite escolher o tipo de medição a ser realizada :
 - **Consumo**
 - **Injeção** *(Produtores de biometano)*
 - **O 2**

# Commandes

Os pedidos são criados automaticamente com base na frequência de coleta de dados *(dia, mês, semestre)* e seu tipo *(definitivo ou estimado)*.

O plugin é responsável por realizar cálculos mensais e anuais quando necessário, por isso é aconselhável inserir a data de início de acesso aos dados de consumo de gás no dia 1º de janeiro durante a fase de consentimento.

Durante o primeiro backup de equipamentos ativos e corretamente configurados, o plugin integrará automaticamente os históricos disponíveis na área de cliente GRDF desde a data de início do acesso aos dados de consumo de gás. É provável que este processo dure muito tempo, você pode acompanhar seu progresso no menu **Análise → Registros** *(efetua login em `debug`)*.

>**INFORMAÇÃO**
>
>Os dados são coletados no máximo às 7h e transmitidos em quilowatts-hora (`kWh`). Eles não são disponibilizados em tempo real, mas são registrados em sua data-valor em Jeedom.
