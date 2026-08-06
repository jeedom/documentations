# Plug-in de exportação de dados

Plugin que permite gerar e gerenciar o arquivamento de exportações históricas dos pedidos de sua escolha para um arquivo `* .csv`.

O plugin oferece a possibilidade de exportar os valores brutos de cada pedido ao longo do período selecionado ou as estatísticas do mesmo : **significa, min., max., soma, desvio padrão, número de valores, último valor**.

É possível recuperar o arquivo de exportação de várias maneiras :
- Download direto sob demanda,
- Enviando no canal de sua escolha via programação,
- Enviando no canal de sua escolha por meio de um cenário.

Uma ferramenta de importação também está incluída para ser capaz de integrar valores no histórico de um pedido Jeedom.

# Configuration

## Configuração do plugin

O plugin **Exportação de Dados** não requer nenhuma configuração específica e só deve ser ativado após a instalação.

## Configuração do equipamento

Para gerenciar seus diferentes lotes de exportação, vá para o menu **Plugins → Organização → Exportação de Dados** e clique no equipamento que deseja configurar.

>**EM FORMAÇÃO**
>
>O botão **acrescentar** permite que você crie um novo lote de exportação.

Você pode dar um nome ao lote de exportação, atribuí-lo a um objeto pai *(útil para identificar o comando export send em um cenário)* e ativar ou desativar.    
Verifica a caixa **Estatisticas** permite que você opte por uma exportação de estatísticas *(significa, min., max., soma, desvio padrão, variância, número de valores, último valor)* em vez de valores brutos.

### Escolha a periodicidade da exportação

![Exportação de Dados - sélection de la période](../images/dataexport_selectPeriod.png)

Escolha o período para o qual o histórico deve ser recuperado entre as possibilidades oferecidas :
- **Dias** : a seleção será feita no **"X" últimos dias** *(minimum:1/maximum:999)*.
- **Período** : Selecione uma **período predefinido** *(Semana atual, semana anterior, mês atual, mês anterior, ano atual, ano anterior, etc...)*.
- **Datas** : Preencha manualmente o **datas de início e término** da seleção.  
>**DICA**
>
>Se a data de término não for inserida, será o dia atual por padrão.

### Escolha os pedidos para exportar

![Exportação de Dados - sélection des commandes](../images/dataexport_selectCommands.png)

Em seguida, selecione os pedidos para os quais deseja obter os históricos clicando no botão azul **Exibir pedidos históricos**.    

Uma janela é aberta e exibe a lista de pedidos registrados com uma caixa de seleção a ser marcada no início da linha. Cada coluna pode ser filtrada ou classificada, o botão **Marcha ré** permite a inversão da seleção atual e o botão verde **Validar** salva a seleção atual.

Abaixo do botão seletor de comando está **a lista de comandos selecionados atualmente**.

>**DICA**
>
>Clicar no nome de um pedido abre a página de configuração do pedido em questão.

# Arquivando arquivos de exportação

Para acessar as exportações arquivadas, vá para a guia **Arquivo** equipamento.

Campo **Retenção** permite que você indique o número de arquivos exportados para manter em arquivos *(minimum:1/maximum:99)*.

Abaixo da parte **Navegação** mostra a lista de arquivos de exportação atualmente arquivados. Selecione um dos arquivos para ver **Visualização do arquivo** *(limitado às primeiras 1000 linhas)* e **ative os botões de download e exclusão de arquivo**.

# Exportar dados

## Baixe sob demanda

Uma vez que o período e os pedidos tenham sido escolhidos, salve o equipamento e clique no botão azul **Exportação CSV** para gerar uma nova exportação correspondente aos critérios solicitados.

Ao final do processo, o novo arquivo será adicionado automaticamente à lista de exportações da guia **Arquivo**. Clique no nome do arquivo para selecioná-lo e, em seguida, no botão verde **Download** para baixá-lo imediatamente através do seu navegador.

## Enviar via programação

É possível enviar o arquivo de exportação no canal de sua escolha *(Correio, telegrama, discórdia, etc...)* via programação configurada diretamente na página do equipamento.

![Exportação de Dados - Enviar via programação](../images/dataexport_cronSend.png)

Para ativar a programação, marque a caixa **Ativar** da seção **Envio programado**.

3 novos campos então aparecem :
- **Programação** : indicar a programação por um cron.
> **DICA**
>
>Clique no ponto de interrogação no final da linha para acessar o assistente do cron para configurar facilmente a programação.

- **Enviar pedido** : selecione o comando Ação / Mensagem permitindo o envio no canal escolhido *(facultatif)*.
> **EM FORMAÇÃO**
>
>Se nenhum comando de envio for selecionado, o arquivo de exportação ainda será gerado e arquivado.

- **Título de Remessa** : Preencha o título a ser afixado a esta remessa *(facultatif)*.
> **DICA**
>
>É possível usar [**tags de cenário**](https://doc.jeedom.com/pt_PT/core/4.1/scenario#Les%20tags){:target = "\_ blank"} no título da remessa.  

## Enviar via cenário

Você também pode enviar o arquivo de exportação para o canal de sua escolha *(Correio, telegrama, discórdia, etc...)* através de um cenário.

![Exportação de Dados - Enviar via cenário](../images/dataexport_scenarioSend.png)

Você deve então selecionar o comando **Enviar exportação de CSV** correspondente ao lote de exportação desejado em um bloco *Ação* de um cenário.
Preencha o **Título** *(facultatif)* bem como o **Comando de ação / mensagem para enviar a exportação** no canal desejado *(facultatif)*.

> **DICA**
>
>Quanto ao envio por programação, é possível utilizar [**tags de cenário**](https://doc.jeedom.com/pt_PT/core/4.1/scenario#Les%20tags){:target = "\_ blank"} no título de envio e o arquivo será arquivado automaticamente pelo plugin se nenhum comando de envio for inserido.

# Importar dados

Se você deseja integrar dados no histórico de um pedido Jeedom, você pode usar esta ferramenta. Para isso, deve-se enviar um arquivo de planilha com a extensão `csv` **com separadores de ponto e vírgula** contendo uma coluna de valores para integrar e uma coluna de carimbos de data / hora correspondentes.

Cuidado com os carimbos de data / hora, que podem ser interpretados e modificados, dependendo do aplicativo de planilha que você está usando. Por exemplo, **Excel** tende a remover os segundos automaticamente e formatar a data no formato francês por padrão. Neste caso, você precisará indicar um formato personalizado, como `dd / mm / aaaa hh:mm:ss` ou `aaaa-mm-dd hh:mm:ss` para células contendo um carimbo de data / hora.

>**IMPORTANTE**
>
>A importação de dados para o Jeedom não é trivial e deve ser feita com conhecimento de causa. É sempre aconselhável fazer um backup preliminar do Jeedom antes de qualquer intervenção deste tipo.

Para acessar a ferramenta de importação de valor, vá até a página geral do plugin e clique no botão **Importar**.

![Exportação de Dados - Importar dados](../images/dataexport_import.png)

A janela de importação é usada para integrar valores no histórico de um pedido de tipo de informação de um arquivo `*.csv` desde que :
- O arquivo contém **uma coluna chamada "Data"**,
- O arquivo contém **uma coluna chamada "Valor"**,
- O separador de coluna é **um ponto e vírgula**,
- O **Formato de data** está inserido corretamente (francês \| international).

## Enviar dados

Clique no botão para selecionar um arquivo `CSV`. Depois de carregado, o arquivo é verificado e informações importantes são exibidas na tela :
- **Nome e tamanho** do arquivo,
- **Número de linhas** tratar,
- **Período** preocupado com a importação,
- **Datas e valores** importar.

## Receber dados

Em seguida, clique no botão para selecionar o comando que deseja receber os valores. Informações como subtipo e unidade serão exibidas na tela.

Se já existir um histórico no pedido para o período em questão pela importação, seu conteúdo também será exibido.

## Processar dados existentes

Se houver um histórico do pedido durante a fase de importação, a ferramenta perguntará como você deseja gerenciar esses dados.

3 escolhas são possíveis :
- **Mantenha todos os dados** já presente na história,
- **Substitua apenas valores duplicados** entre o arquivo csv e o histórico,
- **Sobrescrever todos os dados** na história ao longo do período.

## Iniciar importação

Uma vez que o arquivo contendo os dados a serem importados foi integrado e verificado pela Jeedom, o comando de recepção de dados foi inserido e sua escolha foi feita quanto ao processamento do histórico, você pode clicar no botão **Importar arquivo** para iniciar o procedimento.
