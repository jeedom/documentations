# Fitbit plugin

Plug-in para acessar informações em dispositivos Fitbit (número de etapas, calorias, distância etc.)

# Configuração 

Depois que o plug-in Fitbit estiver instalado, vá para :

![fitbit 1](../images/fitbit-1.JPG)

## Criação e associação de equipamentos com a conta Fitbit 

Clique em adicionar uma pessoa para adicionar alguém :

![fitbit 2](../images/fitbit-2.JPG)

Dê um nome a esta pessoa (este equipamento) e valide :

![fitbit 3](../images/fitbit-3.JPG)

Você deve ter esta página :

![fitbit 4](../images/fitbit-4.JPG)

> **IMPORTANTE**
>
> A primeira coisa a verificar é "URL de retorno". Isso deve ser validado e acessível externamente, caso contrário você não poderá associar o Jeedom à sua conta Fitbit. Se não for esse o caso, atualize os parâmetros de configuração de rede na seção Geral → Administração → Configuração e, em seguida, "redes", consulte [aqui](https://www.jeedom.fr/doc/documentation/core/pt_PT/doc-core-administration.html.html#administration)

> **NOTA**
>
> Recomenda-se ao conectar entre Jeedom e Fitbit a conexão ao Jeedom pelo ip externo

Para vincular sua conta Fitbit ao Jeedom, primeiro crie uma conta de desenvolvedor com o Fitbit indo [aqui](https://dev.fitbit.com/fr), então você precisa fazer o login e depois : "Registrar um aplicativo". Em seguida, preencha as informações :

-   Nome da aplicação : Jeedom
-   Descrição : Jeedom
-   Application Website : <https://jeedom.com>
-   Organização : jeedom
-   Organização Website : <https://jeedom.com>
-   OAuth 2.0 Tipo de Aplicação : Server
-   URL de retorno de chamada : Você deve colocar o que o Jeedom fornecer ao criar um equipamento Fitbit, tenha cuidado se você não colocar o correto, a conexão não poderá ser feita
-   Tipo de acesso padrão : Ler e escrever

Você também pode adicionar uma assinatura, isso permite que o Fitbit envie uma atualização diretamente no Jeedom (em vez de esperar que o Jeedom atualize as informações) :

-   Padrão : oui
-   URL do terminal : o dado por jeedom
-   Tipo : Corpo JSON
-   ID do Assinante : não ponha nada

Se você possui uma assinatura, deve (tome cuidado para executar todas essas etapas em ordem) :

-   Coloque o número da assinatura no equipamento Fitbit na Jeedom
-   Coloque o código de assinatura no equipamento Fitbit no Jeedom
-   Equipamento de backup
-   No site Fitbit, inicie a verificação da assinatura
-   Em seguida, "Vincule a um usuário" o equipamento jeedom, como abaixo

> **IMPORTANTE**
>
> Atualmente, o Fitbit não suporta bem o https, portanto, se você estiver em https, há poucas chances de que ele funcione

Clique em "Vincular ao usuário" para vincular este dispositivo à sua conta Fitbit :

![fitbit 5](../images/fitbit-5.JPG)

Insira as credenciais da sua conta Fitbit e valide a solicitação de autorização :

Se você receber uma página em branco ou um erro, isso significa que sua configuração de rede não está boa; caso contrário, você deve voltar a esta página :

![fitbit 6](../images/fitbit-6.JPG)

## Configuração 

Aqui estão os detalhes da configuração do plugin :

![fitbit 6](../images/fitbit-6.JPG)

-   Nome da pessoa : nome do equipamento Fitbit
-   Objeto pai : nome do objeto ao qual conectar o equipamento
-   Ativar / Visível : permite ativar o equipamento (não esqueça de fazê-lo, caso contrário você não terá dados) e torne visível no painel
-   Para cada pedido :
    -   Historicizar : permite registrar o comando
    -   Display : permite torná-lo visível ou não no painel
    -   Avançado (pequenas rodas dentadas) : exibe a configuração avançada do comando
    -   Teste : permite testar o comando para ver seu valor
    -   Excluir (botão "-") : para excluir o pedido

## Widget 

Aqui está o widget fitbit :

![fitbit 7](../images/fitbit-7.JPG)
