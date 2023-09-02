# Plug-in de energia

Plugin que permite visualizar um gráfico global das energias da casa (água, gás, eletricidade, produção de eletricidade).

Apresenta também um painel de controlo que mostra o desempenho de um sistema de painel solar, os consumos (água, gás e eletricidade) bem como os detalhes do consumo de eletricidade de determinados equipamentos (necessita, claro, de ter um módulo para o medir)

Para quem tem energia solar, também pode mostrar a previsão de produção de acordo com as características da sua instalação (a preencher)

Observe que o plug-in não calcula e não calculará nenhum custo (não é e não será seu objetivo)

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
>Dependendo dos seus comandos, pode ser necessário adaptar a unidade na página de configuração de comandos para o equipamento de energia que você criou

## Detalhes

Para eletricidade é possível indicar os consumidores na aba de detalhes, pode ser um comando de tipo de energia (deve ser registrado), ou um comando de tipo de consumo. Se for consumo absoluto (sem zerar à meia-noite) não há mais o que fazer, se for consumo por dia (zerar à meia-noite) então a caixa deve ser marcada na linha final "Consumo por dia (se Wh ou kWh)"

# Panel

Para visualizar os históricos, previsão de produção e outros, lembre-se na página de configuração do plugin (plugin -> plugin management) para ativar o painel (no desktop e/ou mobile) e então atualizar a página (f5). Então em casa você encontrará o painel do plugin.