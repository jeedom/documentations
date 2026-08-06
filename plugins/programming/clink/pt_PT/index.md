# Clique no plug-in Link

Este plugin permite o gerenciamento de links e eventos na interface Jeedom. Você poderá, por exemplo, criar uma ordem que abre um modal (janela de diálogo) com uma vista contendo suas câmeras. Isso permite, por exemplo, quando alguém toca em sua casa para exibir diretamente a câmera de entrada no seu Jeedom.

# Configuração do plugin

Depois de baixar o plugin, você só precisa ativá-lo, não há configuração neste nível.

![clink1](../images/clink1.PNG)

# Configuração do equipamento

A configuração do equipamento Clink pode ser acessada no menu Plugins :

![clink2](../images/clink2.PNG)

É assim que a página do plugin Clink se parece (aqui com 1 dispositivo já) :

![clink3](../images/clink3.PNG)

Depois de clicar em um deles, você obtém :

![clink4](../images/clink4.PNG)

Aqui você encontra toda a configuração do seu equipamento :

-   **Nome do equipamento do tim-tim** : nome do seu equipamento Clink,
-   **Objeto pai** : indica o objeto pai ao qual o equipamento pertence,
-   **Ativar** : torna seu equipamento ativo,
-   **Visivél** : torna seu equipamento visível no painel.

Abaixo você encontra a lista de pedidos :

-   **Nome** : o nome exibido no painel,
-   **Modo** : o modo de exibição do elemento (em um modal, em uma nova janela ou na janela atual)

    > **NOTA**
    >
    > No celular, "nova janela" e "janela atual" fazem a mesma coisa : abrir link na janela atual

-   **Tipo** : tipo de elemento a ser aberto (visualização, design, painel ou URL)
-   **Nome** : opção dependendo do item selecionado para abrir
-   **Filtro de usuário** : permite filtrar para abrir o elemento apenas se este usuário estiver conectado

-   **Filtro de página** : permite filtrar para abrir o elemento somente se você estiver na página mencionada

    > **NOTA**
    >
    > Na versão móvel, esta opção não faz nada

-   **Filtro de interface** : permite filtrar para abrir o elemento apenas na versão móvel / desktop ou em ambas
-   **Display** : permite exibir os dados no painel
-   **Teste** : permite testar o comando,
-   **Remover** (placa -) : permite excluir o comando.

> **IMPORTANTE**
>
> É importante não abrir a mesma visão em si mesma, idem para os designs !

> **IMPORTANTE**
>
> No celular, a abertura de um URL não pode ser feita de forma modal, como nos projetos.

> **IMPORTANTE**
>
> Nem todos os URLs podem ser abertos no modo modal, isso depende do site (ex : Google.fr não pode ser aberto em um modal). Atenção também se você estiver em https, é absolutamente necessário que o site seja aberto no modal em https.
