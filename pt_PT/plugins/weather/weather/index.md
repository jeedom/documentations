# Weather Plugin

O plugin Weather permite recuperar dados climáticos de uma ou mais cidades. Entre outras coisas, fornece informações sobre nascer e pôr do sol, temperatura, previsão, vento, etc. As informações recuperadas vêm do site openweathermap.

# Configuração do plugin

Depois de instalar o plug-in, você deve ativá-lo e inserir sua chave de API.

Para obter sua chave de API, você precisa ir [aqui](https://home.openweathermap.org), crie uma conta e copie sua chave de API para a área fornecida na página de configuração do plug-in.

> **IMPORTANTE**
>
> Você precisa esperar algumas horas depois até que a chave esteja ativa para poder recuperar informações

# Configuração do equipamento

Aqui você encontra toda a configuração do seu equipamento :

-   **Equipamentos clima nome** : nome do seu equipamento meteorológico
-   **Ativar** : torna seu equipamento ativo
-   **Visivél** : torna seu equipamento visível no painel
-   **Objeto pai** : indica o objeto pai ao qual o equipamento pertence
-   **Cidade** : Você deve colocar o nome da sua cidade seguido pelo código do país, ex : Paris, fr
-   **Exibição móvel completa** : exibe todas as informações meteorológicas ou não no celular

Abaixo, você encontrará todos os comandos disponíveis, além da possibilidade de histórico ou não dos valores numéricos. O código (número), dependendo das condições, está disponível [aqui](https://openweathermap.org/weather-conditions)

Os dados meteorológicos são atualizados a cada 30 minutos.

> **Dica**
>
> Aconselhamos que você vá [aqui](https://openweathermap.org/find?) para verificar se sua cidade, vila é conhecida ou não. Nesse caso, você terá que encontrar a cidade conhecida mais próxima e inseri-la na configuração do seu equipamento para poder recuperar as informações.

> **Dica**
>
> Une fois la recherche de votre ville réussie le site openweathermap vous montre les informations disponibles et vous devriez avoir dans votre navigateur une url du type <https://openweathermap.org/city/2988507>. Esse número no final da URL também pode ser inserido no equipamento Jeedom em vez de Paris, fr por exemplo

>**IMPORTANTE**
>O OpenWeather fornece uma lista de informações pelas próximas 120 horas; portanto, com base no tempo atual, sabemos apenas parte das informações em D + 4. Assim, essa previsão em D + 4 é refinada para se tornar mais precisa à medida que o dia atual progride. Por esse motivo, certas informações, como a temperatura MAX atingida em D + 4, só fazem sentido no final do dia.
