# BacnetServer

#Description

O plugin Bacnet permite que você crie um equipamento Bacnet do seu Jeedom para ser visto na rede



# Configuração do plug-in

Depois de baixar o plugin, você deve primeiro ativá-lo, como qualquer plugin Jeedom :

![config](../images/BacnetServerConfig.png)

Então, você deve iniciar a instalação das dependências (mesmo que elas apareçam OK) :

![dependances](../images/BacnetServerDep.png)

Finalmente, inicie o daemon :

![demon](../images/BacneServerDemon.png)


Rien n'est à modifier dans le champ « Port socket interne » de la section « Configuration ».

![socket](../images/BacnetServerConfig.png)


Nesta mesma aba, você deve escolher o valor Cron para atualizar seu equipamento.




# Como o plug-in funciona ?




>**IMPORTANTE**
>
>Seu equipamento BACNET deve estar na mesma rede que seu Jeedom para ser detectado por ele.


Por padrão, um dispositivo jeeBacnetServer é criado; é este dispositivo 'bacnet' que será visto pelo seu supervisor Bacnet na rede

Você pode configurar seu deviceId na configuração do plugin

![menu](../images/BacnetServerConfig.png)


Para adicionar comandos Jeedom ao seu jeeBacnetServer, clique em Adicionar Comandos ao Servidor :

![accueil](../images/BacnetServerAccueil.png)


Um modal será aberto, onde aparecerão todos os comandos do tipo Info presentes nos diferentes plugins do seu jeedom.




>**IMPORTANTE**
>
>Seu equipamento deve estar Ativo para que os comandos sejam detectados neste modal.


>**IMPORTANTE**
>
>Você deve preencher a unidade bacnet com a sintaxe das unidades disponíveis clicando no botão Unidades no topo desta página

Você deve nomear o comando como ele aparecerá no jeeServer na rede Bacnet

Tudo o que você precisa fazer é procurar os que deseja e validar.


![accueil](../images/BacnetServerModale.png)


O dispositivo bacnet com o instanceId que você escolheu será criado e aparecerá na sua rede.


Você pode ver um resumo dos comandos injetados clicando em Cmds JeeServer

![accueil](../images/BacnetServerAccueil.png)


Para atualizar os valores você precisa configurar o cron na configuração do plugin.

![accueil](../images/BacnetServerConfig.png)



Para deletar comandos do Servidor, você deve ir aos comandos do equipamento, e simplesmente Deletar os que deseja e depois salvar.




Você também pode excluir o dispositivo da rede, bem como seus pontos bacnet, clicando em Excluir o jeeBacnetServer.


![accueil](../images/BacnetServerReinit.png)




# Configuração de pedidos :


Para alterar a unidade de pontos bacnet, e vê-los aparecer na rede, deve introduzir a unidade no campo previsto para o efeito nas encomendas.

Na rede bacnet, as instâncias dos pontos assumirão os nomes dos comandos que você inserir no modal Adicionar comandos.


Uma função de pós-cálculo também é fornecida : 
se você optar por preencher este postCalcul, o valor injetado no deviceBacnet terá levado o valor inicial para ser carregado com o cálculo 

As diversas possibilidades : 

/, -, *, +

Exemplo :

![accueil](../images/BacnetServerPostCalcul.png)





>**IMPORTANTE**
>
>As unidades devem corresponder aos padrões bacnet, caso contrário aparecerá um erro no plugin. Visualizar unidades no modal Adicionar novos comandos





# Importar/Exportar o jeeBacnetServer :


![accueil](../images/BacnetServerAccueil.png)

Para evitar necessidades, 2 opções são fornecidas : 


- Exportar dispositivo :

Ao clicar neste botão, ele fará o download de um arquivo Json contendo a configuração do dispositivo, bem como seus comandos.


- Importar dispositivo :

Ao clicar neste botão, você pode importar o arquivo json de configuração do jeeBacnetServer que você teria baixado, para usar os comandos que foram configurados neste