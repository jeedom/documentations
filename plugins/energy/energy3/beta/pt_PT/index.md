# Plug-in de energia

Plugin que permite exibir um gráfico global da energia doméstica (água, gás, eletricidade, produção elétrica).

Também exibe um painel que mostra o desempenho de um sistema de painéis solares, consumos (água, gás e eletricidade), bem como detalhes do consumo de eletricidade de determinados equipamentos (claro que requer um módulo para medi-lo)

Para quem tem energia solar, também pode mostrar a previsão de produção de acordo com as características da sua instalação (a preencher)

Observe que o plugin não faz e não fará nenhum cálculo de custos (este não é e não será seu propósito)

Para funcionar, requer que você tenha módulos que carreguem essas informações :

## Gaz

- Dia de consumo
- Consumo instantâneo

## Eau

- Dia de consumo
- Consumo instantâneo

## Electricité

- Dia de consumo
- Consumo instantâneo

Se você tiver painéis solares, precisará de mais : 

- Importação de eletricidade da rede
- Exportação de eletricidade da rede
- Dia de produção
- Potência líquida

>**IMPORTANTE**
>
>Dependendo dos seus pedidos, poderá ser necessário adaptar a unidade na página de configuração do pedido do equipamento de energia que você criou

## Detalhes

Para eletricidade é possível indicar os consumidores na aba de detalhes, pode ser um comando de tipo de energia (deve ser registrado), ou um comando de tipo de consumo. Se for consumo absoluto (sem zerar à meia-noite) não há mais o que fazer, se for consumo por dia (zerar à meia-noite) então a caixa deve ser marcada na linha final "Consumo por dia (se Wh ou kWh)"

# Panel

Para visualizar os históricos, previsões de produção e outras coisas, você deve pensar bem na página de configuração do plugin (Plugins -> gerenciamento de plugins) para ativar o painel (no desktop e/ou mobile) e depois atualizar a página (F5). Então em casa você encontrará o painel de plugins.
