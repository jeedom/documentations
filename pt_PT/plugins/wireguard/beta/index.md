# Openvpn plugin

Este plugin permite conectar o Jeedom a um servidor openvpn. Ele também é usado e, portanto, obrigatório para o serviço Jeedom DNS que permite que você acesse seu Jeedom da internet.

# Configuração do plugin

Depois de baixar o plugin, basta ativar e instalar as dependências openvpn (clique no botão **Instalar atualização**)

# Configuração do equipamento

Aqui você encontra toda a configuração do seu equipamento :

-   **Nome do dispositivo openvpn** : nome do seu dispositivo Openvpn,
-   **Objeto pai** : indica o objeto pai ao qual o equipamento pertence,
-   **Categoria** : categorias de equipamentos (pode pertencer a várias categorias),
-   **Ativar** : torna seu equipamento ativo,
-   **Visível** : torna seu equipamento visível no painel,

> **Observação**
>
> As outras opções não serão detalhadas aqui, para mais informações, consulte o [documentação openvpn](https://openvpn.net/index.php/open-source/documentation.html)

> **Observação**
>
> Em relação aos comandos shell executados após a inicialização, existe a tag `#interface#`permitindo obter o nome da interface atual.

Abaixo você encontra a lista de pedidos :

-   **Nome** : o nome exibido no painel,
-   **Exibição** : permite exibir os dados no painel,
-   **Teste** : permite testar o comando

> **Observação**
>
> O Jeedom verificará a cada 5 minutos se a VPN foi iniciada ou interrompida e agirá de acordo se não for.
