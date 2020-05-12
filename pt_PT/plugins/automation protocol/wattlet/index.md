# Plug-in do Wattcube

Este plugin permite que você controle os módulos Wattcubes do Wattlet através da Web do Wattcube.

# Configuração do plugin 

Depois de baixar o plug-in, você só precisa ativá-lo e configurar o endereço IP da Web do Wattcube.

![wattlet](../images/wattlet.png)

# Configuração do equipamento 

A sincronização do equipamento Wattlets pode ser acessada no menu Plugins :

![wattlet2](../images/wattlet2.png)

Depois de clicar em um deles, você obtém :

![wattlet3](../images/wattlet3.png)

Aqui você encontra toda a configuração do seu equipamento :

-   **Nome do equipamento da wattlet** : nome do seu equipamento Wattlet no painel,
-   **Objeto pai** : indica o objeto pai ao qual o equipamento pertence,
-   **Ativar** : torna seu equipamento ativo,
-   **Visivél** : torna seu equipamento visível no painel,
-   **Categoria** : categoria do seu equipamento Wattlet

Bem como as seguintes informações :

-   **Morada** : Endereço do módulo,
-   **Tipo** : Tipo de módulo Wattlet,
-   **Versão do software** : Versão interna do software do módulo Wattlet,
-   **Versão de hardware** : Versão de hardware

> **NOTA**
>
> Os pedidos são criados automaticamente, não há necessidade de adicioná-los manualmente.

# Configuração da Web do Wattcube 

Para recuperar retornos de status, é necessário configurar notificações push no Wattcube Web.

Na interface da Web do Wattcube, vá para a guia "Preferências" e depois no menu "Personalização do pedido"

![wattlet4](../images/wattlet4.png)

Na área "Notificação por push", digite o endereço Jeedom no formulário :

**IP\_JEEDOM / plugins / wattlet / core / php / jeeWattlet.php?id = ~ id ~ & cmd = ~ cmd ~ & state = ~ state ~**

então salve.

![wattlet5](../images/wattlet5.png)
