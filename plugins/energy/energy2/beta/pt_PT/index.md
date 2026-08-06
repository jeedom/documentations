# Plugin de contagem

Este plugin permite que você tenha uma visão geral rápida e fácil de seus custos de energia.

Ele gerencia água, gás e eletricidade e fornecerá um gráfico de itens de despesas / consumo. Também fornece a tendência e as variações em relação ao período anterior (você pode ter no período do dia, na semana, no mês ou no ano).

> **IMPORTANTE**
>
> Não se esqueça de ativar os painéis (desktop e mobile) do plugin na configuração deste.

# Configuration

A configuração do plugin é muito simples, só vai pedir-lhe a zona de estar (aquecida) da sua casa (para o cálculo do DPE).

# Equipements

Você pode fazer quantos equipamentos de contagem quiser :

* **Tipo** :  Água, Gás ou Eletricidade.
* **Instantâneo** : comando que fornece o consumo instantâneo (atenção, o plug-in não pode calcular o consumo diário a partir do instantâneo).
* **CONSUMO** : comando dando o consumo diário *(deve retornar a 0 a 00:00)*.
* **Custo** : pedido dando o custo diário em € *(deve retornar a 0 a 00:00)*.
* **Temperatura exterior** : controle dando a temperatura exterior da acomodação. Permite que você otimize os cálculos de desempenho energético da sua casa.
* **Adicionar ao total** : indica aumentar o consumo total desse tipo de energia.
* **Esta é a minha energia de aquecimento** : marque a caixa para calcular o DPE nesta energia (observe que se sua energia de aquecimento for a gás, o consumo deve ser em m3 para os cálculos do DPE).
* **Inserir valores** : permite inserir manualmente seu consumo por um período.
