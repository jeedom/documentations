# Bacnet

## Description

. .

## Configuração de plug-in

 :

![config](../images/BacnetConfig.png)

Em seguida, você deve iniciar a instalação das dependências (mesmo que pareçam OK) :

![dependances](../images/BacnetDep.png)

Finalmente, devemos iniciar o demônio :

![demon](../images/BacnetDemon.png)

Rien n'est à modifier dans le champ « Port socket interne » de la section « Configuration ».

![socket](../images/BacnetSocket.png)

Nesta mesma aba, você deve escolher o valor Cron para atualizar seu equipamento.

## 

### 

>**IMPORTANTE**
>
>.

Rendez-vous dans le menu « Plugins → Protocole domotique → Bacnet » :



. 
. 
.

) : 

Após a varredura, uma tabela com todas as entradas / saídas do seu equipamento será exibida.

.

.

-
Cliquez ensuite sur votre équipement créé, puis cochez « Activer » et « Visible » pour le voir apparaître sur votre dashboard.

. 
.

### 

)

" :


.)
)




.

### 

). .

" :




)


.

## As ordens

Rendez-vous dans l'onglet « Commandes » de la page de configuration du nouvel équipement Bacnet.

Ici vous pouvez masquer et rendre visibles les différentes commandes de type « action » et « info » disponibles (les commandes de type « info » peuvent également être historisées) :

![cmdVisible](../images/BacnetVisible.png)

Todos os equipamentos criados terão 2 comandos por padrão : une commande info « Connexion Bacnet » et une commande action « Refresh », qui serviront à voir l'état de la connexion Bacnet sur votre dashboard, et à rafraîchir les valeurs de vos commandes.

![cmdBase](../images/BacnetCmdBase.png)

## )

.

" :

.  :


.)




).

>****
>
>.

>**IMPORTANTE**
>
>Em relação à escrita: para segurança, o protocolo Bacnet fornece por padrão um sistema de escrita com níveis de prioridade nas entradas / saídas de seu equipamento.
Existem 16 níveis de prioridade (o nível mais baixo tem prioridade sobre todos os outros)). Seu equipamento pode ser programado de forma que a função de escrita desenvolvida neste plugin não tenha prioridade sobre a programação lógica do equipamento / sistema por default.
Para o tipo de saída I / O, o plugin é configurado com prioridade 8 de escrita (Operador manual).
Mais informações sobre o assunto :

https://store.chipkin.com/articles/bacnet-why-doesnt-the-present-value-change

.
Você deve saber que os PresentValues do tipo de entradas / saídas: Saída analógica, saída binária e saída multiestado são sempre controláveis.
. Fica a critério exclusivo do fabricante. .

Ao criar os pedidos do tipo de gravação escolhidos, um pedido de ação associado também será criado, por padrão não visível no painel.
Ao clicar nele, ele redefine a tabela de prioridade de gravação de uma entrada / saída para o padrão.
Terá um nome com << resetPrioritesEcriture >>
".

## Lista na Ação de Comando (para MultiStateValue)

) : agora, se você escolher um multiState, o comando será do tipo Slider por padrão, mas você pode listá-lo na lista de comandos do equipamento; um novo campo Lista de valores aparecerá;
 : por exemplo 1-4-5-8
Ao salvar o equipamento, este colocará esses valores na lista do pedido no Dashboard
.

## Prioridade de gravação

A Manuseie com cuidado

Um campo de prioridade de gravação está disponível em cada pedido criado

De acordo com a documentação :

No BACnet, o objeto para o qual podemos escrever geralmente fornece o que é chamado de priorityArray. Esta matriz contém 16 níveis nos quais podemos escrever (1 sendo a prioridade mais alta).

O uso típico de prioridade é :

1 Segurança de Vida Manual 2 Segurança de Vida Automática 3 Disponível 4 Disponível 5 Controle de Equipamento Crítico 6 Mínimo On/Off 7 Disponível 8 Operador Manual (Substituir) 9 Disponível 10 Disponível (Controle Típico de um Supervisor) 11 Disponível 12 Disponível 13 Disponível 14 Disponível 15 Disponíveis (Agenda) 16 Disponíveis



Se nenhum valor for inserido em um comando de gravação, por padrão, o valor será definido como 8.

## 

 :
- 
- 
- 
- Schedule
- Calendar
- Device

 :
- )


.

## 

 :



)


.
