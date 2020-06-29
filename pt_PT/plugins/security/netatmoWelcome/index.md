# Plugin Neatmo Security

Plug-in para recuperar informações do equipamento Netatmo Security

# Configuração do plugin

Depois que o plug-in estiver instalado, você precisará inserir suas informações de conexão Netatmo :

-   **ID do cliente** : seu ID de cliente (consulte a seção de configuração)
-   **Cliente secreto** : seu cliente secreto (consulte a seção de configuração)
-   **Nome de Usuário** : nome de usuário da sua conta netatmo
-   **Senha** : senha para sua conta Netatmo
-   **Sincronizar** : permite sincronizar o Jeedom com sua conta Netamo para descobrir automaticamente seu equipamento Netamo. Um
    faça depois de salvar as configurações anteriores.

# Recuperando informações de conexão

Pour intégrer votre Welcome, vous devez posséder un client\_id et unclient\_secret généré sur le site <http://dev.netatmo.com>.

Uma vez clique em Iniciar :

![netatmoWelcome10](../images/netatmoWelcome10.png)

Em seguida, "crie um aplicativo"

![netatmoWelcome11](../images/netatmoWelcome11.png)

Identifique-se, com seu email e senha

![netatmoWelcome12](../images/netatmoWelcome12.png)

Preencha os campos "Nome" e "Descrição" (o que você colocar, não importa) :

![netatmoWelcome13](../images/netatmoWelcome13.png)

Em seguida, na parte inferior da página, marque a caixa "Aceito os termos de uso" e clique em "Criar"

![netatmoWelcome14](../images/netatmoWelcome14.png)

Recupere as informações "ID do cliente" e "Cliente secreto" e copie-as na parte de configuração do plug-in no Jeedom (consulte o capítulo anterior)

![netatmoWelcome15](../images/netatmoWelcome15.png)

# Configuração do equipamento

A configuração dos dispositivos Netatmo pode ser acessada no menu do plug-in -> Segurança -> Netatmo Security

Depois de clicar em um dispositivo, você encontrará aqui toda a configuração do seu equipamento :

-   **Nome do dispositivo Netatmo** : nome do seu equipamento Netatmo
-   **Objeto pai** : indica o objeto pai ao qual o equipamento pertence
-   **Ativar** : torna seu equipamento ativo
-   **Visivél** : torna visível no painel

Abaixo você encontra a lista de pedidos :

-   o nome do comando
-   Historicizar : permite historiar os dados
-   Configuração avançada (pequenas rodas dentadas) : permite exibir
    configuração avançada do comando (método de registro, widget, etc.))
-   Teste : permite testar o comando

# FAQ

>**Eu não tenho os eventos em tempo real, mas depois de 15min**
>
>Para ter um retorno em tempo real dos eventos (acionamento do alarme de incêndio, pessoa que passa na frente da câmera etc.), DEVE ABSOLUTAMENTE que seu jeedom tenha uma URL externa em https com um certificado válido na porta 443 (e somente esta porta o). É uma obrigação imposta pela netatmo

>**Não consigo desativar / ativar a vigilância**
>
>Atenção, se você colocar um código, essa função não é possível pelo plugin jeedom

>**Estou com um erro do tipo "Valor incorreto da string: '\ xF0 \ x9F \ x98 \ x98 "ao sincronizar**
>
>Verifique se você não possui um caractere não padrão (tipo smiley) no nome de uma câmera ou pessoa
