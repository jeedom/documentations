# Plug-in de email

Plug-in para enviar e-mails.

# Configuração do plugin 

Depois de instalar o plugin, você só precisa ativá-lo. Este plugin não possui nenhuma configuração específica :

![mail1](../images/mail1.PNG)

# Configuração do equipamento 

A configuração do equipamento Mail é acessível no menu do plug-in :

![mail2](../images/mail2.PNG)

É assim que a página do plugin Mail (aqui, com 1 e-mail já, você pode adicionar quantos quiser com a opção "Adicionar") :

![mail3](../images/mail3.PNG)

Depois de clicar em um deles, você obtém :

![mail4](../images/mail4.PNG)

Aqui você encontra toda a configuração do seu equipamento :

-   **Nome do equipamento de correio** : nome do correio do seu equipamento
-   **Objeto pai** : indica o objeto pai ao qual o equipamento pertence
-   **Ativar** : torna seu equipamento ativo
-   **Visivél** : torna seu equipamento visível no painel
-   **Nome do remetente** : nome do remetente do e-mail (ex : Jeedom)
-   **Remetente do correio** : email do remetente (ex : <jeedom@moi.fr>)
-   **Método de envio** : método de envio do email :
    -   Nuvem Jeedom : sem configuração para envio de e-mails pelos serviços em nuvem da Jeedom, no momento em fase beta, limitado a 5 e-mails por dia
    -   SMTP : modo mais comum de envio de correio
    -   Sendmail
    -   Qmail
    -   Mail()\[Função PHP \] : use a [função de envio padrão do PHP, window = "\_ blank"](http://fr.php.net/manual/fr/function.mail.php), requer a configuração do sistema operacional

Além da opção SMTP, as outras opções exigem a configuração do SO (Linux) para poder funcionar. Em outras palavras, basicamente apenas a função SMTP funciona, os outros são reservados para especialistas que podem, se desejarem, configurar essas opções eles mesmos.

A guia de configuração SMTP permite inserir as informações do servidor de email que você deseja usar.

![mail screenshot3](../images/mail_screenshot3.jpg)

Aqui estão alguns exemplos para os principais provedores de serviços de email :

-   **Gmail**
    -   Servidor SMTP : smtp.gmail.com
    -   Porta SMTP : 587
    -   Segurança SMTP : TLS
-   **Hotmail**
    -   Servidor SMTP : smtp.live.com
    -   Porta SMTP : 587
    -   Segurança SMTP : TLS
-   **iCloud**
    -   Servidor SMTP : smtp.me.com
    -   Porta SMTP : 25
-   **Yahoo.com**
    -   Servidor SMTP : smtp.mail.yahoo.com
    -   Porta SMTP : 465
    -   Segurança SMTP : SSL

Les champs « Utilisateur SMTP » et « Mot de passe SMTP » correspondent aux identifiants de votre compte E-mail.

Na guia "Pedidos", você pode adicionar pedidos que correspondam aos endereços de e-mail para os quais deseja poder enviar e-mails com o Jeedom :

![mail screenshot4](../images/mail_screenshot4.jpg)

-   **Nome** : nome do comando
-   **E-mail** : o endereço de email para enviar a mensagem para. Você pode colocar vários separando-os com ,
-   **Configuração avançada** (pequenas rodas dentadas) : usado para exibir a configuração avançada do comando (método de historização, widget etc.).)
-   **Teste** : permite testar o comando,
-   **Remover** (placa -) : permite excluir o comando.

Este plugin funciona como um módulo, ou seja, uma vez salvo, ele aparece na lista de ações ou comandos. Portanto, é muito simples usá-lo ao criar cenários, por exemplo.

Em um cenário, uma vez selecionado em uma ação, você precisará inserir o título e a mensagem.

![mail5](../images/mail5.jpg)

> **IMPORTANTE**
>
> Se você estiver em autenticação dupla com o Gmail, você deve fornecer uma senha específica para o aplicativo : Minha conta ⇒ login e segurança ⇒ Entrar no Google ⇒ Senhas do aplicativo, se este não for o caso, você deve inserir sua senha usual do Gmail.

> **Dica**
>
> O formato HTML é suportado pelo editor de cenário para o corpo das mensagens.

> **Dica**
>
> Lembre-se de salvar todas as alterações.
