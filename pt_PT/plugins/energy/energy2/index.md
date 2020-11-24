# Plugin de contagem

Este plugin permite que você tenha uma visão geral rápida e simples de seus gastos com energia.

Ele gerencia apenas água, gás e eletricidade e fornece um gráfico dos itens de despesa / consumo.Também fornece a tendência e as variações em relação ao período anterior (você pode ter no período do dia, na semana, no mês ou no ano)

> **IMPORTANTE**
>
> Não se esqueça de ativar o painel (desktop e móvel) do plug-in na configuração dele

# Configuration

A configuração do plug-in é muito simples; ele solicitará apenas o espaço de vida (aquecido) do seu alojamento (para o cálculo do DPE)

# Equipements

Você pode fabricar o equipamento de contagem que desejar :

* Tipo :  Água, Gás ou Eletricidade.
* Instantâneo : comando que fornece o consumo instantâneo (atenção, o plug-in não pode calcular o consumo diário a partir do instantâneo)
* CONSUMO : ordem que fornece o consumo diário (portanto, ele deve retornar às 0 às 00h00)
* Custo : ordem que fornece o custo diário (portanto, ele deve retornar às 0 às 00:00) em €
* Adicionar ao total : indica aumentar o consumo total desse tipo de energia
* Esta é a minha energia de aquecimento : marque para executar o cálculo do DPE nesta energia (observe que, se a sua energia de aquecimento for um consumo de gás, deve ser em m3 para cálculos do DPE)
* Inserir valores : permite inserir manualmente seu consumo por um período
