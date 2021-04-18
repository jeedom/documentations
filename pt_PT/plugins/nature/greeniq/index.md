# Plug-in GreenIQ 

Plug-in para controlar a rega automática usando a caixa GreenIQ. É possível definir o tipo de operação para as 6 saídas solenóides : 

- Carro : a rega da zona é acionada de acordo com a programação GreenIQ 
- Fora : a rega está desativada 
- Nós : a rega é iniciada (duração 3h)

![greeniq screenshot1](../images/greeniq_screenshot1.png)

# Configuração 

Para usar seu GreenIQ com Jeedom, você deve solicitar um ID de cliente e um Cliente secreto. A solicitação é feita por e-mail para <developers@greeniq.co>, a resposta é feita muito rapidamente, normalmente dentro de 24 horas.

Você também deve ter o login / senha fornecido no pequeno cartão que acompanha o GreenIQ.

Uma vez que os códigos são obtidos, você deve inseri-los no plugin como este : ![greeniq1](../images/greeniq1.png)

# Uso 

Muita informação está disponível no widget : 1. Status da válvula 2. Status da configuração 3. % de progresso 4. Hora final da rega

![greeniq2](../images/greeniq2.png)

A configuração de cada válvula também é possível e estão disponíveis 3 ações :

1. Auto : a rega da zona é acionada de acordo com a programação GreenIQ
2. Desligado : a rega está desativada
3. Nós : a rega é iniciada (duração 3h)

# Faq 

O sistema recupera informações a cada 5 minutos.
