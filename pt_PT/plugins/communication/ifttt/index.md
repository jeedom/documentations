# Plugin IFTTT

Este plugin permite enviar um evento para IFTTT.

# Configuração do plugin

Depois de baixar o plugin você só precisa ativá-lo, não requer nenhuma outra configuração.

![ifttt7](../images/ifttt7.PNG)

# Configuração do equipamento

A configuração do equipamento IFTTT pode ser acessada no menu plugins :

![ifttt8](../images/ifttt8.PNG)

Esta é a aparência da página do plugin IFTTT (*já com 1 equipamento*) :

![ifttt9](../images/ifttt9.PNG)

Depois de clicar em um deles, você obtém :

![ifttt10](../images/ifttt10.PNG)

Aqui você encontra toda a configuração do seu equipamento :

-   **Nome de equipamentos** : nome do seu equipamento IFTTT.
-   **Ativar** : torna seu equipamento ativo.
-   **Visivél** : torna visível no painel.
-   **Chave** : Chave IFTTT que você encontrará na configuração do serviço Webhooks (que substitui o criador de canais).

Abaixo você encontrará a configuração dos comandos :

-   **Nome** : nome do comando.
-   **Tipo** : Tipo de pedido.
-   **Evento** : nome do evento configurado no IFTTT.
-   **Valor** : valor para enviar para IFTTT. 3 distinções possíveis de acordo com o subtipo, você pode usar as tags : ``#color#, #slider#, #message#, #title#``.
-   **Configuração avançada** *(pequenas rodas dentadas)* : usado para exibir a configuração avançada do comando (método de log, widget, etc).
-   **Teste** : permite testar o comando.
-   **Remover** *(placa -)* : permite excluir o comando.

# Criação de uma conta IFTTT

Crie uma conta IFTTT, se ainda não o fez, acessando [IFTTT](https://ifttt.com) :

![ifttt1](../images/ifttt1.png)

Digite seu endereço de e-mail, seu nome de usuário e crie-o :

![ifttt2](../images/ifttt2.PNG)

Um pequeno guia explicará as possibilidades, assim que terminar, clique no canto superior direito em **Pesquisa** :

![ifttt3](../images/ifttt3.PNG)

Em seguida, na caixa de pesquisa, digite webhooks e clique em webhooks :

![ifttt4](../images/ifttt4.PNG)

Em seguida **Conectar** :

![ifttt5](../images/ifttt5.png)

Neste cocô você tem que pegar sua chave :

![ifttt6](../images/ifttt6.png)

Esta chave deve ser copiada para o campo **Chave** de seu equipamento sob Jeedom :

![ifttt11](../images/ifttt11.PNG)

# Criação do seu primeiro "Applet""

Nada mais simples, no IFTTT clique em **Meus applets** em seguida **Novo applet** :

![ifttt12](../images/ifttt12.png)

Depois clique em **Crie uma receita** :

![ifttt13](../images/ifttt13.PNG)

Clique em **+ isto**  :

![ifttt14](../images/ifttt14.png)

Em seguida, pesquise "Webhooks" e clique nele :

![ifttt15](../images/ifttt15.png)

Clique em **Faça uma solicitação da web** :

![ifttt16](../images/ifttt16.png)

Dê um nome ao seu "Evento". Observe que deve corresponder ao nome do evento no comando Jeedom, por isso deve ser memorizado.    
Confirme clicando em **Criar gatilho** :

![ifttt17](../images/ifttt17.png)

Então clique em **+ isso** :

![ifttt18](../images/ifttt18.png)

Então depende de você ver, por exemplo, enviarei uma notificação para meu telefone (você deve primeiro ter instalado o aplicativo IFTTT nele), então clico em **Notificações** :

![ifttt19](../images/ifttt19.png)

Confirme clicando em **Enviar uma notificação** (pode ser diferente dependendo dos canais) :

![ifttt20](../images/ifttt20.png)

Então você tem que escrever a mensagem da notificação, existem possíveis tags (ingredientes) :

-   **EventName** : nome do evento, aqui clima.
-   **Valor1** : valor 1 enviado no canal, isso é configurado no comando no Jeedom.
-   **Valor2** : valor 2 enviado no canal, isso é configurado no comando no Jeedom.
-   **Valor3** : valor 3 enviado no canal, isso é configurado no comando no Jeedom.
-   **OccurredAt** : data de ocorrência.

Aqui está o que dá aqui (quero receber a notificação do tempo atual em casa), valide clicando em **Criar ação** :

![ifttt21](../images/ifttt21.png)

Dê um nome ao seu applet (receita) e valide clicando em **Criar receita** :

![ifttt22](../images/ifttt22.PNG)

Aqui você criou seu "miniaplicativo" no lado do IFTTT :

![ifttt23](../images/ifttt23.PNG)

Resta mais do que criar um pedido no lado Jeedom, é bastante simples :

![ifttt24](../images/ifttt24.PNG)

Nada de especial, você tem que colocar o nome do evento IFTTT de volta no Jeedom e então colocar os valores para passar para o IFTTT. Em nosso exemplo, as condições climáticas no ingrediente ``value1``.

> **DICA**
>
> No lado do Jeedom, você pode, se colocar um comando de subtipo de mensagem, por exemplo, colocar a tag ``#message#`` em um ou mais campos "Valor"". Portanto, no seu cenário, o valor da mensagem será passado para o IFTTT. O mesmo é possível com ``#title#``, ``#color#`` onde ``#slider#``.

# Enviando informações de IFTTT para Jeedom

Também é possível fazer na outra direção, ou seja, enviar informações do IFTTT para o Jeedom.      
Veja como, por exemplo, enviar informações quando o telefone entra em uma determinada área. Primeira coisa a fazer, crie um novo applet :

![ifttt25](../images/ifttt25.png)

Em seguida, clique no **+ isto** :

![ifttt26](../images/ifttt26.png)

Selecionar **Aluguel** :

![ifttt27](../images/ifttt27.png)

Escolha o seu gatilho (aqui vou pegar quando entrar em uma zona) :

![ifttt28](../images/ifttt28.png)

Marque sua zona e faça **Criar gatilho** :

![ifttt29](../images/ifttt29.png)

Clique em **+ isso** :

![ifttt30](../images/ifttt30.png)

Procure por "Webhooks" e clique nele :

![ifttt31](../images/ifttt31.png)

Clique em **Faça uma solicitação da web** :

![ifttt32](../images/ifttt32.png)

No lado Jeedom, no seu equipamento IFTTT, crie um comando de informação / outro tipo (ou binário, se você quiser apenas saber se está na área), como este :

![ifttt33](../images/ifttt33.PNG)

Muito importante : recuperar o ID do pedido (aqui ``5369``).

Em seguida, retornamos ao IFTTT e em nossos webhooks forneceremos a url para chamada. Esta é a etapa mais complicada, encontrar seu url de acesso externo :

-   Você está usando o DNS jeedom, então isso é : ``https://XXXXX.dns.jeedom.com/core/api/jeeApi.php?apikey=\#APIKEY\#&type=ifttt&id=\#IDCMD\#&value=\#VALEUR\#``.   
Atenção, se você tiver um endereço em / jeedom, lembre-se de adicioná-lo antes do / core.
-   Você tem seu próprio DNS, o URL é da forma ``http://\#VOTRE\_DNS\#/core/api/jeeApi.php?apikey=\#APIKEY\#&type=ifttt&id=\#IDCMD\#&value=\#VALEUR\#``.   
Atenção, se você tiver um endereço em / jeedom, lembre-se de adicioná-lo antes do / core

Lembre-se de substituir :

-   ``#APIKEY#`` : por sua chave de API JEEDOM (pode ser encontrada em Configurações → Sistema → Configuração → API).
-   ``#IDCMD#`` : pelo ID do seu pedido criado anteriormente.
-   ``#VALEUR#`` : pelo valor que você deseja atribuir ao seu pedido. Tenha cuidado aqui, os espaços devem ser substituídos por% 20 (e é melhor evitar caracteres especiais - exemplo : ``Hors%20zone``).

É isso que dá :

![ifttt34](../images/ifttt34.png)

Lembre-se de colocar o método em Get e, em seguida, clique em **Criar ação**.

Dê um título ao seu miniaplicativo e clique em **Criar ação**. E pronto, assim que você entrar na área, Jeedom será avisado.

> **IMPORTANTE**
>
> Você também precisa fazer uma receita para deixar a área, caso contrário, o Jeedom não
> não será avisado ao sair da área.

> **NOTA**
>
> Para recuperar o url do webhook em ifttt, você precisa ir [aqui](https://ifttt.com/maker_webhooks) depois clique na documentação
