# Plugin de clima

O plugin **Clima** permite que você recupere dados meteorológicos de uma ou mais cidades. As informações são do site **Mapa de clima aberto** que dá acesso, entre outras coisas, a previsões, informações do nascer e pôr do sol, temperatura, umidade, vento, etc...

Esses dados são atualizados a cada 30 minutos.

>**EM FORMAÇÃO**
>
>OpenWeather fornece uma lista de informações para as próximas 120 horas. Portanto, dependendo da hora atual, sabemos apenas parte da informação em D+4. Assim, essa previsão em D + 4 é refinada para se tornar mais precisa à medida que o dia atual progride. Por esse motivo, certas informações, como a temperatura MAX atingida em D + 4, só fazem sentido no final do dia.

# Configuration

## Configuração do plug-in

Este plugin não requer nenhuma configuração especial e simplesmente precisa ser ativado após a instalação.

## Configuração do equipamento

O equipamento meteorológico é acessível a partir do menu **Plugins → Clima → Clima**.

>**EM FORMAÇÃO**
>
>O botão **acrescentar** permite adicionar um novo equipamento Meteorológico.

Clicar em um dispositivo leva você diretamente para sua página de configuração :

- **Nome do equipamento** : Equipamentos clima nome.
- **Objeto pai** : Indica o objeto pai ao qual o equipamento pertence.
- **Categoria** : Permite escolher a categoria do equipamento.
- **Opções** :
    - **Ativar** : Permite ativar o equipamento.
    - **Visivél** : Torna o equipamento visível.
    - **Exibição móvel completa** : Marcar a caixa permite exibir todas as informações meteorológicas em celulares.
    - **Modo de imagem** : Marque a caixa para exibir imagens em vez de ícones no widget.

Em seguida, você precisará inserir as coordenadas GPS do local de onde deseja recuperar as informações meteorológicas :

- **Latitude** : Latitude do local cujo clima você deseja recuperar *(Sob o formulário XX.XXXXXXX)*.
- **Longitude** : Longitude do local cujo clima você deseja recuperar *(Sob o formulário XX.XXXXXXX)*.

Ao clicar na guia **Comandos**, encontramos a lista de todos os comandos disponíveis, bem como a possibilidade de registrar os valores numéricos.

O comando **Número** fornece um código relacionado com a condição atual a partir do qual você pode encontrar mais informações [neste endereço](https://openweathermap.org/weather-conditions).
