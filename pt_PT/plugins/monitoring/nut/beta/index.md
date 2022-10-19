# Nut Plugin

Este plug-in permite recuperar informações de um servidor NUT (Network UPS Tools)

# Configuração do plugin 

Depois de baixar o plugin, basta ativá-lo e clicar em "Instalar / Atualizar"

![nut](../images/nut.PNG)

# Configuração do equipamento 

A configuração do equipamento NUT pode ser acessada no menu do plugin :

![nut2](../images/nut2.PNG)

É assim que a página do plug-in do NUT se parece (aqui com já um dispositivo) :

![nut3](../images/nut3.PNG)

Depois de clicar em um deles, você obtém :

![nut4](../images/nut4.PNG)

Aqui você encontra toda a configuração do seu equipamento :

-   **Nome do equipamento Inversor** : nome do seu equipamento NUT,
-   **Objeto pai** : indica o objeto pai ao qual o equipamento pertence,
-   **Ativar** : torna seu equipamento ativo,
-   **Visivél** : torna seu equipamento visível no painel,
-   **Categoria** : categoria do seu equipamento NUT
-   **Endereço IP NUT** : O endereço IP do servidor NUT
-   **Nome de Usuário** : Nome de usuário do servidor NUT (deixe em branco se não houver)
-   **Senha** : Senha do servidor NUT (deixe em branco se não houver)
-   **ID de Ups** : ID de Ups

> **NOTA**
>
> Um servidor NUT pode gerenciar vários no-breaks, é então o ID do no-break que permite à Jeedom saber a qual no-break o equipamento está se referindo

> **Dica**
>
> Se você não souber o ID do (s) seu (s) UPS (s), deixe o campo vazio e registre o equipamento, a Jeedom preencherá automaticamente o campo de ID do no-break e criará quantos equipamentos você tiver no seu servidor NUT.

Abaixo você encontra a lista de pedidos :

-   **Nome** : o nome exibido no painel,
-   **Display** : permite exibir os dados no painel
-   **Teste** : permite testar o comando,

> **IMPORTANTE**
>
> Os comandos criados podem ser diferentes dependendo da instalação, depende do que o servidor NUT envia de volta

> **Dica**
>
> Se o servidor NUT estiver em um Synology NAS, o nome de usuário será 'monuser', a senha 'secret' e os ID 'ups'. Embora deixar a área vazia, o plug-in o preenche na maioria dos casos.
