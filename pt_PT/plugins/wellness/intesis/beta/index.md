# Intesis

#Description

Plugin para controlar **les passerelles « Intesis Wifi (ASCII) AC Interfaces » (anciennement dénommées Intesisbox).**  baseado no protocolo WMP.

Les passerelles « Intesis Wifi (ASCII) AC Interfaces » sont des box qui permettent de domotiser des systèmes de climatisation gainables (interface Intesis à connecter en filaire sur le bus du climatisateur) ou à split avec télécommande infrarouge (interface Intesis IR).

Este plug-in suporta todos os modelos de interfaces CA Intesis Wifi (ASCII) (com fio e IR), mas **não é compatível com os gateways IntesisHome** (e, em particular, não com gateways Intesis da linha IntesisHome).

Os gateways de Interfaces CA Wifi Intesis (ASCII) são [disponível para venda aqui.](https://www.domadoo.fr/fr/323_intesis-unites-ac-domestiques-daikin-vers-une-interface-wi-fi-rac)

# Configuração do plugin

Depois de baixar o plugin, você deve primeiro ativá-lo, como qualquer plugin Jeedom :

![conf](../images/intesisConf.png)

Em seguida, é altamente recomendável iniciar a instalação de dependências (mesmo se elas parecerem OK)) :

![dependances](../images/intesisDep.png)

Finalmente, inicie o demônio :

![demon](../images/intesisDem.png)

Finalmente, você deve verificar se tudo está verde e OK :

![ok](../images/intesisOk.png)

Não há mais nada a fazer.

Rien n'est à modifier dans le champ « Port socket interne » de la section « Configuration ».

![socket](../images/intesisSocket.png)

# Como declarar uma nova interface Wifi de intesis no Jeedom

Rendez-vous dans le menu « Plugins → Confort → Intesis » :

![menu](../images/intesisMenu.png)

Você chega na próxima página, que consiste em duas seções :

- **Gestão** com as seguintes opções : « Ajouter » et « Configuration » (cette option vous renvoie à la page de configuration du plugin, décrite au point précédent).
- **My Intesis** : É aqui que os gateways wifi da Intesis gerenciados pelo Jeedom são exibidos.

![gestion](../images/intesisGest.png)

Vous devez donc cliquer sur l'option « Ajouter » et renseigner le nom de l'équipement (Climatisation Salon, par exemple) :

![ajoutEquipement](../images/intesisAddeq.png)

Vous devez ensuite compléter les autres champs de la page de configuration du nouvel équipement Intesis, dont l'objet, la catégorie, cocher « Activer » et « Visible », puis vous devez **insira o endereço IP** seu gateway Wifi Intesisbox :

![confEquipement](../images/intesisConfEq.png)

>**IMPORTANTE**
>
>Você deve garantir que o seu gateway Wifi Intesisbox tenha um IP fixo na sua rede local, caso contrário, seu IP poderá mudar. Nesse caso, o Jeedom não poderá mais controlar o gateway.

Tudo o que você precisa fazer é salvar.

# Pedidos

Rendez-vous dans l'onglet « Commandes » de la page de configuration du nouvel équipement Intesis.

Ici vous pouvez masquer et rendre visibles les différentes commandes de type « action » et « info » disponibles (les commandes de type « info » peuvent également être historisées) :

![cmd](../images/intesisCmd.png)

O plugin oferece um total de 14 comandos.

Pedidos de type « action » (actionneurs) disponibles sont les suivantes :

- Nós : Para ligar o ar condicionado
-	Fora : Para desligar o ar condicionado
- Ordem : Para alterar o ponto de ajuste de temperatura do ar condicionado
- Modo de lista : Para alterar o modo de operação do ar condicionado (Automático, Calor, Seco, Ventilador, Frio)
- Balanço de cima para baixo : Para alterar o modo de oscilação das pás de orientação do fluxo de ar vertical (1, 2, 3 e Swing)
- Balanço esquerdo-direito : Para modificar o modo de oscilação das pás de orientação do fluxo de ar horizontal (1, 2, 3 e Swing)
- Velocidade do ventilador : Para modificar a velocidade de rotação do ventilador (de 1 a 4)

Pedidos de type « info» (capteurs) disponibles sont les suivantes :

-	Estado : Feedback do status ON / OFF do ar condicionado
-	Informação do ponto de ajuste : Feedback do status do ponto de ajuste de temperatura
-	Modo : Feedback do status do modo operacional do ar condicionado (Auto, Calor, Seco, Ventilador, Frio)
-	Informações de alta e baixa oscilação : Feedback do status do modo de oscilação das pás verticais do ar condicionado.
-	Informações de oscilação esquerda-direita : Feedback do status do modo de oscilação das pás horizontais do ar condicionado.
-	Informação da velocidade do ventilador : Feedback do status da velocidade do ventilador
-	Temperatura : Temperatura ambiente

Você pode ocultar comandos que não são úteis para você. Pode ser esse o caso, por exemplo, se o seu ar condicionado não tiver lâminas de orientação do fluxo de ar.

À l'inverse, vous pouvez rendre visibles les commandes de type « info » qui vous sont utiles.

# O widget Intesis

Conforme indicado no ponto 3) acima, os comandos que aparecem no widget são apenas aqueles que você tornou visíveis antes.

>**Nota**
>
>Pour les commandes de type « info », le retour d'état se fait toutes les 5 minutes. Portanto, se você usar o controle remoto do ar condicionado para modificar o ponto de ajuste (ou outro), o Jeedom refletirá esse estado no Widget dentro de um período máximo de 5 minutos.

Como em qualquer widget Jeedom, você pode reorganizar os controles no widget usando o modo de edição (para fazer isso, clique no lápis no canto superior esquerdo) :

![widget](../images/intesisWidget.png)

Alguns exemplos de widgets Intesis com diferentes comandos visíveis (no Jeedom V3) :

![widget1](../images/intesisWidget1.png)

![widget2](../images/intesisWidget2.png)

![widget3](../images/intesisWidget3.png)

Exemplo de widget Intesis no Jeedom V4 :

![widgetV4](../images/intesisWidgetV4.png)
