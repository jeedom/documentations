# Nabaztag plugin

Plug-in para solicitar o Nabaztag.

# Configuração do equipamento 

Depois que o plugin é instalado e ativado no Market, você acessa a página do plugin Nabaztag :

![nabaztag1](../images/nabaztag1.png)

Aqui você encontra todo o seu equipamento Nabaztag :

![nabaztag2](../images/nabaztag2.png)

Depois que um equipamento é selecionado, você obtém :

![nabaztag3](../images/nabaztag3.png)

Aqui você encontra toda a configuração do seu equipamento :

-   **Nome do equipamento Nabaztag** : nome do seu equipamento Nabaztag
-   **Objeto pai** : indica o objeto pai ao qual o equipamento pertence
-   **Categoria** : categorias de equipamentos (pode pertencer a várias categorias)
-   **Ativar** : torna seu equipamento ativo
-   **Visivél** : torna visível no painel
-   **Endereço (openjabnab.fr ou @IP)** : openjabnab ou endereço IP (DNS) do seu openjabnab se você o hospedar
-   **Mac Address** : o endereço mac do seu coelho (veja abaixo)
-   **Roxo do token da API** : Token de API (veja abaixo)

Abaixo você encontra a lista de pedidos :

-   o nome exibido no painel
-   Display : permite exibir os dados no painel
-   configuração avançada (pequenas rodas dentadas) : exibe a configuração avançada do comando (método de registro, widget etc.)
-   Teste : permite testar o comando

A lista de comandos é a seguinte :

-   **Em pé** : Acorde o coelho
-   **Restart** : Reinicie o coelho
-   **Hora de dormir** : Vamos dizer ao coelho para ir para a cama
-   **Qualidade do ar** : Dá qualidade do ar (requer a ativação do plug-in correspondente no openjabnab)
-   **Efemérides** : Dar efemérides (requer a ativação do plug-in correspondente no openjabnab)
-   **Relógio falante** : Indique o tempo (requer a ativação do plugin correspondente no openjabnab)
-   **Previsão do tempo** : Dá o tempo (requer a ativação do plugin correspondente no openjabnab)
-   **Dizendo** : Dê um ditado (requer a ativação do plugin correspondente no openjabnab)
-   **Orelha esquerda** : Permite escolher a posição da orelha esquerda (16 posições possíveis)
-   **Orelha direita** : Permite escolher a posição da orelha direita (16 posições possíveis)
-   **Fala** : Vamos dizer uma frase para o coelho

# Recuperar endereço máximo e token 

Ir para o site [openjabnab](http://openjabnab.fr/ojn_admin/index.php) depois faça login na sua conta :

![nabaztag4](../images/nabaztag4.png)

Clique no coelho :

![nabaztag5](../images/nabaztag5.png)

Depois clique na API :

![nabaztag6](../images/nabaztag6.png)

Aqui, ative a API roxa e pública e obtenha o endereço mac e a chave roxa da API para colocá-la na configuração do seu coelho no Jeedom
