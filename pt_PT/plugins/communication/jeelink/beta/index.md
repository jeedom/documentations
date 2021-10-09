# Plug-in Jeelink 

Plugin usado para vincular 2 Jeedoms

# Princípio de operação 

O plugin *Link jeedom* (também chamado jeelink) permite a subida de um ou mais equipamentos de um Jeedom para outro.

![jeelink1](../images/jeelink1.png)

> **IMPORTANTE**
>
> O plug-in deve ser instalado em todos os Jeedoms, Source e Target.

> **Dica**
>
> Para um bom entendimento, é importante entender os seguintes termos : **Fonte Jeedom** : Servidor Jeedom no qual o equipamento a ser remontado no **Jeedom Target** **Jeedom Target** : Servidor Jeedom que receberá o equipamento remontado pelo) **Jeedom (s) Origem (s))** O **Jeedom Target** centralizar este equipamento e o de todos) **Jeedom (s) Origem (s))** configurado).**Atribuição** : configuração realizada no **Fonte Jeedom** incluir o equipamento que será remontado no **Jeedom Target**

> **NOTA**
>
> Para uma melhor leitura e compreensão deste tutorial : As capturas de tela em um fundo preto correspondem à **Jeedom Target**.As capturas de tela em um fundo branco correspondem a **Fonte Jeedom**.\

# Configuração do plugin 

Após a instalação, você só precisa ativar o plugin. Isso não requer nenhuma configuração específica.

# Configuração de jeedoms de destino 

A partir de **Fonte Jeedom**, uma vez na página do plug-in (acessando Gerenciamento de plug-ins → Comunicação → Link Jeedom), basta clicar em "Configurar os Jeedoms de destino".

Uma janela aparecerá e a partir daí você poderá configurar ou adicionar **Jeedom (s) Alvo (s))**.

Para adicionar um **Jeedom Target**, apenas dê :

-   O nome de **Jeedom Target**.
-   O endereço IP ou o nome DNS do **Jeedom Target**.
-   A chave da API de **Jeedom Target**.
-   Indique se a comunicação é interna ou externa (usada para feedback, de **Fonte Jeedom** para **Jeedom Target**). E salve a configuração.

![jeelink2](../images/jeelink2.png)

> **IMPORTANTE**
>
> Você deve **ABSOLUTAMENTE** as configurações de rede de todos os Jeedoms (origem e destino) estão OK, caso contrário, o plug-in não funcionará.

# Alocação de equipamentos 

Depois de executar a configuração do **Jeedom Target** no seu **Fonte Jeedom**, você tem que ir para a aba *Atribuição* especificar o equipamento a ser transmitido para **Jeedom Target**. Todos os pedidos de equipamentos serão criados e configurados automaticamente no **Jeedom Target**.

Na aba *Atribuição*, adicione o equipamento que você deseja voltar ao **Jeedom Target**.

![jeelink3](../images/jeelink3.png)

Clique em *Adicionar equipamento* Selecione o objeto e o equipamento a serem adicionados :

![jeelink5](../images/jeelink5.png)

> **Dica**
>
> Atenção : plugins com um widget específico não o terão no **Jeedom Target** (câmera, plug-in de rede…).

> **IMPORTANTE**
>
> A exclusão do equipamento na página de configuração do **Target Jeedoms** não o exclui automaticamente no **Fonte Jeedom**, isso é voluntário e não é um bug (é uma segurança).

# Equipamento "Meus jeelinks"" 

Depois de atualizar a página *Meus jeelinks* do **Jeedom Target**, você deve ver a criação automática do equipamento :

![jeelink4](../images/jeelink4.png)

Como todos os equipamentos Jeedom, você pode ativar / desativar e exibir ou não o equipamento, seus controles,… ou alterar a categoria. Mas também

![jeelink6](../images/jeelink6.png)

Na aba *Comandos*, você acessa todos os parâmetros dos controles do equipamento :

![jeelink7](../images/jeelink7.png)

# Modificando a fonte Jeedom de um JeeLink 

Os três parâmetros a seguir permitem alterar a fonte do Jeedom, por exemplo, ao substituir um Jeedom sem perder dados (histórico, por exemplo,). Para isso, basta colocar o novo endereço e a chave API do Jeedom Source e alterar os identificadores do equipamento e os comandos (você os encontrará na configuração avançada destes clicando na roda dentada).

-   Endereço de origem Jeedom;
-   Chave da API de origem Jeedom;
-   IDs de equipamento e pedido de origem.

# Migração do modo antigo escravo

Um tutorial está disponível, [aqui](https://jeedom.github.io/documentation/howto/pt_PT/jeelink.migration.html) especificando o procedimento a seguir para migrar um Jeedom Slave para o novo modo operacional Jeedom Link.

# Faq 

>**Ao excluir equipamentos no jeedom de origem, eles não são excluídos do jeedom de destino**
>
>Normalmente, a sincronização de origem / destino cria apenas criação, nunca exclusão
