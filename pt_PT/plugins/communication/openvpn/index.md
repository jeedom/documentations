# Openvpn plugin

Este plugin permite conectar o Jeedom a um servidor openvpn. Também é usado e, portanto, obrigatório para o serviço DNS Jeedom, que permite acessar seu Jeedom pela Internet

# Configuração do plugin

Depois de baixar o plug-in, você só precisa ativar e instalar as dependências do openvpn (clique no botão Instalar / Atualizar)

# Configuração do equipamento

Aqui você encontra toda a configuração do seu equipamento :

-   **Nome do dispositivo openvpn** : nome do seu dispositivo Openvpn,
-   **Objeto pai** : indica o objeto pai ao qual o equipamento pertence,
-   **Categoria** : categorias de equipamentos (pode pertencer a várias categorias),
-   **Ativar** : torna seu equipamento ativo,
-   **Visivél** : torna seu equipamento visível no painel,

> **NOTA**
>
> As outras opções não serão detalhadas aqui. Para obter mais informações, consulte o [documentação do openvpn](https://openvpn.net/index.php/open-source/documentation.html)

> **NOTA**
>
> Para comandos shell executados após a inicialização, você tem a tag #interface# para o nome da interface substituído automaticamente

Abaixo você encontra a lista de pedidos :

-   **Nome** : o nome exibido no painel,
-   **Display** : permite exibir os dados no painel,
-   **Teste** : permite testar o comando

> **NOTA**
>
> O Jeedom verificará a cada 15 minutos se a VPN foi iniciada ou parada (se necessário) e agirá de acordo se não estiver
