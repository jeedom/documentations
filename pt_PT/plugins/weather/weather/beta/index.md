# Plugin de clima

O plugin **Clima** permite que você recupere dados meteorológicos de uma ou mais cidades.

Esses dados são atualizados a cada 30 minutos.

>**IMPORTANTE**
>
>Após a configuração e ativação do equipamento, é absolutamente necessário lançar uma atualização manual de dados para que o plugin seja atualizado ou aguardar 30min para a atualização automática

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


## Código do tempo

Você encontrará [aqui](https://www.weatherapi.com/docs/weather_conditions.json) o significado dos diferentes códigos meteorológicos