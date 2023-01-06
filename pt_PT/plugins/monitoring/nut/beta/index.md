# Nut Plugin

Este plug-in permite recuperar informações de um servidor NUT (Network UPS Tools)

## Configuração do plugin

Após baixar o plugin, basta ativá-lo e instalar as dependências clicando em "Reiniciar"

## Configuração do equipamento

A configuração do equipamento NUT pode ser acessada no menu do plugin :

![nut2](../images/nut2.PNG)

É assim que a página do plug-in do NUT se parece (aqui com já um dispositivo) :

![nut3](../images/nut3.PNG)

Depois de clicar em um deles, você obtém :

![nut4](../images/nut4.PNG)

Aqui você encontra toda a configuração do seu equipamento :

- **Nome do equipamento** : nome do seu equipamento NUT,
- **Objeto pai** : indica o objeto pai ao qual o equipamento pertence,
- **Categoria** : categoria do seu equipamento NUT
- **Ativar** : torna seu equipamento ativo,
- **Visivél** : torna seu equipamento visível no painel,
- **Endereço IP NUT** : O endereço IP do servidor NUT
- **Nome de Usuário** : Nome de usuário do servidor NUT (deixe em branco se não houver)
- **Senha** : Senha do servidor NUT (deixe em branco se não houver)
- **ID de Ups** : ID de Ups

> **Avaliações**
>
> Um servidor NUT pode gerenciar vários no-breaks, é então o ID do no-break que permite à Jeedom saber a qual no-break o equipamento está se referindo
>
> Se você não souber o ID do (s) seu (s) UPS (s), deixe o campo vazio e registre o equipamento, a Jeedom preencherá automaticamente o campo de ID do no-break e criará quantos equipamentos você tiver no seu servidor NUT.
>
> Se o servidor NUT estiver em um Synology NAS, o nome de usuário será 'monuser', a senha 'secret' e os ID 'ups'. Embora deixar a área vazia, o plug-in o preenche na maioria dos casos.

## Configurando comandos

Na segunda aba você encontra a lista de pedidos, o plugin irá criar a maioria dos pedidos automaticamente de acordo com as informações recebidas do servidor NUT.

> **IMPORTANTE**
>
> Os comandos criados podem ser diferentes dependendo da instalação, depende do que o servidor NUT envia de volta

Se o seu UPS retornar informações que (ainda) não são suportadas pelo plug-in, você pode adicionar manualmente um pedido ao seu equipamento.

- Clique no botão *Adicionar um pedido*
- Insira o nome
- Escolha o subtipo (Numérico, binário ou outro)
- No campo *Configurar* você deve inserir o nome do valor conforme retornado pelo servidor NUT, a informação fica visível no log em modo DEBUG.

> **IMPORTANTE**
>
> Não modifique a configuração dos comandos criados automaticamente pelo plugin.
