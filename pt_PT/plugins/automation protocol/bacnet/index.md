# Bacnet

#Description

O plugin Bacnet permite que você recupere informações de seu equipamento Bacnet / Ip e interaja com ele a partir de seu Jeedom.



# Configuração de plug-in

Depois de baixar o plugin, você deve primeiro ativá-lo, como qualquer plugin Jeedom :

![config](../images/BacnetConfig.png)

Em seguida, você deve iniciar a instalação das dependências (mesmo que pareçam OK) :

![dependances](../images/BacnetDep.png)

Finalmente, devemos iniciar o demônio :

![demon](../images/BacnetDemon.png)


Rien n'est à modifier dans le champ « Port socket interne » de la section « Configuration ».

![socket](../images/BacnetSocket.png)




# Como declarar um novo dispositivo Bacnet no Jeedom




>**IMPORTANTE**
>
>Seu equipamento BACNET deve estar na mesma rede que seu Jeedom para ser detectado por ele.


Rendez-vous dans le menu « Plugins → Energie → Bacnet » :

![menu](../images/BacnetMenu.png)


Você chega na próxima página:

![accueil](../images/BacnetAccueil.png)


Vous devez donc cliquer sur l'option « Nouvel équipement / Création commandes » :

Uma varredura automática de sua rede será lançada para detectar os dispositivos Bacnet presentes nela.
Pode demorar cerca de vinte segundos.

Após a varredura, uma tabela com todas as entradas / saídas do seu equipamento será exibida.

O menu da tabela onde você pode pesquisar por coluna :

![indextab](../images/BacnetIndexTab.png)


Um exemplo de detecção de equipamento Bacnet :

![tableau](../images/BacnetTableau.png)

Dependendo do fabricante do equipamento, alguns valores não estão disponíveis; 

Tudo o que você precisa fazer é selecionar os pedidos a serem criados marcando uma das opções de acordo com a sua escolha (tipo de comando informação ou tipo de ação):

![check](../images/BacnetCheck.png)


Valide, atualize a página, e o equipamento correspondente terá sido criado em seu Jeedom; por padrão, ele será nomeado com o DeviceID do seu equipamento Bacnet fornecido pelo fabricante (você é livre para renomeá-lo )

![equip](../images/BacnetEquip.png)

 Cliquez ensuite sur votre équipement créé, puis cocher « Activer » et « Visible » pour le voir apparaitre sur votre dashboard.

Para adicionar comandos posteriormente a um equipamento existente, você deve refazer a operação anterior : « Nouvel équipement / Création commandes » , et sélectionnez les commandes que vous désirez.



# As ordens


Rendez-vous dans l'onglet « Commandes » de la page de configuration du nouvel équipement Bacnet.

Ici vous pouvez masquer et rendre visibles les différentes commandes de type « action » et « info » disponibles (les commandes de type « info » peuvent également être historisées) :

![cmdVisible](../images/BacnetVisible.png)

Todos os equipamentos criados terão 2 comandos por padrão : une commande info « Connexion Bacnet » et une commande action « Refresh » , qui serviront à voir l'état de la connexion Bacnet sur votre dashboard, et à rafraichir les valeurs de vos commandes.

![cmdBase](../images/BacnetCmdBase.png)





>**IMPORTANTE**
>
>Em relação à escrita: para segurança, o protocolo Bacnet fornece por padrão um sistema de escrita com níveis de prioridade nas entradas / saídas de seu equipamento.
Existem 16 níveis de prioridade (o nível mais baixo tem prioridade sobre todos os outros)). Seu equipamento pode ser programado de forma que a função de escrita desenvolvida neste plugin não tenha prioridade sobre a programação lógica do equipamento / sistema por default.
Para o tipo de saída I / O, o plugin é configurado com prioridade 8 de escrita (Operador manual).
Mais informações sobre o assunto :

https://store.chipkin.com/articles/bacnet-why-doesnt-the-present-value-change

Para uma gravação em um dispositivo Bacnet, estendemos no PresentValue da entrada / saída correspondente.
Você deve saber que os PresentValues do tipo de entradas / saídas: Saída analógica, saída binária e saída multiestado são sempre controláveis.
As entradas / saídas AnalogValue, BinaryValue ou MultistateValue podem ser solicitadas se o fabricante tiver implementado esse recurso. Fica a critério exclusivo do fabricante. Verifique a documentação do seu equipamento para saber mais sobre isso.




Ao criar os pedidos do tipo de gravação escolhidos, um pedido de ação associado também será criado, por padrão não visível no painel.
Ao clicar nele, ele redefine a tabela de prioridade de gravação de uma entrada / saída para o padrão. 
Terá um nome com << resetPrioritesEcriture >>
Para tornar este comando visível no seu painel, acesse os comandos do seu equipamento e marque a opção “Mostrar"
