# Plugin de simulação de presença

Este plug-in permite simular facilmente uma presença na casa quando você estiver ausente de maneira credível (tempo e duração aleatória dos eventos)

Você pode encontrar [aqui](https://blog.jeedom.com/4266-simulation-de-presence/) um artigo mostrando um exemplo de configuração do plug-in

# Configuração de plugins

Nada de especial aqui apenas para instalar e ativar o plugin

# Configuração de simulações

Você encontrará na primeira aba toda a configuração do seu equipamento :

- Nome de equipamentos : nome do seu equipamento de simulação,
- Objeto pai : indica o objeto pai ao qual o equipamento pertence,
- Ativar : torna seu equipamento ativo,
- Visivél : torna seu equipamento visível no painel.

Então você tem dois outros parâmetros para configurar :

- Latitude e longitude da sua casa, o que permite que o plug-in calcule localmente os horários de nascer e pôr do sol

Na segunda aba, você encontrará a configuração das simulações :

- eles têm um nome (para encontrá-los mais facilmente)
- uma condição de inicialização, se a condição for falsa, a simulação não será feita (se você não colocar nada, a configuração será necessariamente iniciada)
- ações de entrada : são feitos ao iniciar a simulação
- ações de saída (opcional) : são feitos no final da simulação
- horários e durações de início :
  - a hora de início pode ser fixada entre 2 terminais (entre 18:30 e 19:30, por exemplo, o plugin escolherá um horário aleatório entre os dois terminais por dia)
  - o horário de início pode ser relativo ao nascer do sol (por exemplo, de -20 a 20 minutos antes de 30, 30 minutos depois ou 6:00 e 30min para ter algo que começa entre 6h00 e 30min após o nascer do sol)
  - o horário de início pode ser relativo ao pôr do sol (por exemplo, de -10, por 10 minutos antes a 15, por 15 minutos após)
- uma duração ou uma hora final
  - se for uma duração, basta colocar 20 no mínimo e 40 no máximo por uma duração aleatória entre 20 e 40 min
  - para um horário de término fixo entre 19h05 e 19h35, você deve definir 19:05 em min e 19:35 max
- Ensaio : permite repetir X vezes a ação inicial / final do período (observe que o período deve ser maior que 2 min, não é possível fazer 5 repetições em uma simulação de duração de 5 min, por exemplo). Importante: não é recomendável repetir mais de 5, pois o sistema pode não executá-las

>**NOTA**
>
> O formato para as horas é o seguinte hh:mm, para 12:30, então coloque 12:30

>**IMPORTANTE**
>
> O plug-in exibe as horas previstas da simulação para o próximo período (se você tiver várias, não verá as seguintes)
