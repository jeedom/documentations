# Plug-in do Waze in Time

Este plugin permite que você tenha as informações da viagem (tráfego levado em consideração) via Waze. Esse plug-in pode não funcionar mais se o Waze não aceitar mais que interrogemos seu site

![wazeintime screenshot1](../images/wazeintime_screenshot1.jpg)

# Configuration

## Configuração do plugin

Para usar o plug-in, você deve fazer o download, instalar e ativá-lo como qualquer plug-in Jeedom.

Depois disso, você terá que criar sua (s) viagem (s). Vá para o menu de plug-ins / organização, você encontrará o plug-in Waze in Time lá :

![configuration1](../images/configuration1.jpg)

A seguir chegará à página que listará o seu equipamento (pode ter vários percursos) e que lhe permitirá criá-lo clicando no botão "Adicionar"":

![wazeintime screenshot2](../images/eqlogic_list.png)

Você chegará à página de configuração da sua viagem:

![wazeintime screenshot3](../images/eqlogic_config.png)

Nesta página você encontrará três seções :

### Configurações Gerais

Nesta seção, você encontrará todas as configurações do jeedom. A saber, o nome do seu equipamento, o objeto ao qual deseja associá-lo, a categoria, se deseja que o equipamento esteja ativo ou não e se deseja que ele fique visível no painel.

Finalmente, você deve configurar, se desejar, a atualização automática. Se você não configurar nada, as informações da viagem não serão atualizadas automaticamente.

### Parâmetros de viagem

Esta seção é uma das mais importantes e permite definir o ponto inicial e final.

- Essas informações devem ser as latitudes e longitudes das posições
- Eles podem ser encontrados usando o site fornecido clicando no link da página (basta digitar um endereço e clicar em obter coordenadas GPS)

É possível fornecê-los por vários meios:

- manualmente, você deve codificar diretamente a latitude e longitude
- através de um comando info de outro plugin Jeedom, você deve então selecionar o comando que deve retornar a informação no formato 'latitude, longitude'
- através da configuração do Jeedom (veja o menu de configuração do Jeedom)
- selecionando diretamente um comando do plugin geoloc ou geoloc_ios se estes plugins existirem (esta opção não deve mais ser usada para novos equipamentos, prefira a opção de seleção de comando explicada acima)

Também é possível selecionar as assinaturas que devem ser ativadas no cálculo da viagem. Você deve colocar uma lista de valores separados por uma vírgula ou _ * _ para ativar tudo.

### Configurações do visor

Esta configuração simplesmente permite ocultar as viagens selecionadas no widget do painel, elas ainda serão atualizadas quando o equipamento for atualizado.

### Painel de controle

![config3](../images/cmd_list.png)

- Duração 1, 2 e 3: duração a percorrer com a rota 1, 2 e 3
- Rota 1, 2 e 3: nome da rota 1, 2 e 3 (fornecido pelo Waze)
- Duração do retorno 1, 2 e 3 : duração do retorno com rota 1, 2 e 3
- Viagem de retorno 1, 2 e 3 : nome da viagem de volta 1, 2 e 3 (fornecido pelo Waze)
- Legal : Atualizar informações

Todos esses comandos estão disponíveis através de cenários e através do painel

# O widget

![wazeintime screenshot1](../images/wazeintime_screenshot1.jpg)

- O botão no canto superior direito atualiza as informações.
- Toda a informação é visível (para viagens, se a viagem for longa, pode ser truncada, mas a versão completa é visível deixando o mouse nela)

# Como as rotas são atualizadas?

A informação é atualizada de acordo com a configuração de atualização automática do equipamento. Se nada for configurado, as viagens nunca serão atualizadas automaticamente.
Você pode atualizá-los sob demanda por meio do cenário com o comando de atualização ou por meio do painel com as setas duplas.
