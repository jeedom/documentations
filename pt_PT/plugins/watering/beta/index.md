# Rega)

>**IMPORTANTE**
>
>Este plugin não é "amigável", é complexo de aprender e levará muito tempo para obter um resultado satisfatório

## Description

O princípio do plugin é o seguinte, a necessidade de regar depende de :

- a planta : gerenciado com aspersores de fluxo variável para equilibrar a rega de acordo com as plantas
- o sol que havia
- a temperatura que ele fez
- a chuva caiu

Chegamos a uma fórmula de porcentagem de rega : (C1 * Sunshine + C2 * Temperatura - C3 * Chuva) + C4. Este é o lado não amigável do plugin porque ele não consegue encontrar os coeficientes para você, então você tem que ir lá aos poucos.

Você pode ver [aqui](https://blog.jeedom.com/5529-gestion-de-larrosage/) um exemplo de uso do plugin.

## Configuration

O plugin não tem configuração específica

## Equipement

### Em geral

É aqui que você define o nome do equipamento, esteja ele ativo ou não, a visibilidade...

### Arrosage

Aqui estão os comandos para iniciar a rega, cortar e ver o estado.

### Capteurs

Aqui está o sensor de luz exterior (com o limiar acima do qual se considera que faz sol), o sensor de temperatura e chuva (que dá a chuva das últimas 24 horas).

### Configuration

Aqui você tem : 

- o cron de lançamento de rega (que pode ser múltiplo)
- a duração básica da rega
- o limite de não irrigação se choveu mais de XX mm
- o limite de irrigação se a temperatura média não tiver excedido um certo limite
- uma condição sem irrigação gratuita (é aqui que me baseio no sensor de umidade do solo)
- um limite de não irrigação se não houver mais de XX min de sol
- isso é um pouco especial : on peut spécifier au plugin « si l'arrosage se fait après une certaine heure, prendre les données sur XX heures au lieu de la journée en cours ». Por exemplo, isto é útil se regarmos de manhã para obter os dados do dia anterior em vez de um desde 00:00 (o que não faria sentido porque não há muito sol à noite).

Finalmente, vem a parte complicada dos coeficientes. Aqui duas colunas : um para o cálculo no tempo normal, e um para o cálculo se tomarmos as últimas XX horas (então o caso em que é regado pela manhã). Obviamente, não tenho muitos conselhos para lhe dar sobre isso, é realmente um refinamento aos poucos.

## Panel

Se activar o painel na configuração do jeedom poderá ter uma página que lhe dá o estado actual do equipamento que gere a rega assim como um gráfico com o número de horas de sol, a quantidade de chuva e o tempo de rega.

## Widget

Vemos a duração da última rega, a hora do sol, a quantidade de chuva, a última percentagem de rega praticada, a próxima duração de rega estimada e o estado. Você também pode proibir a rega para o dia atual, interromper a rega, iniciá-la no modo forçado ou iniciá-la de acordo com o cálculo no momento T.