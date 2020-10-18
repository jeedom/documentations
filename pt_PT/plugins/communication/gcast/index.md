# Plugin Gcast

O plug-in Gcast permite estabelecer um link entre o Google Assistant e o Jeedom. Será possível usar sua Página inicial do Google / Google Mini para fazer TTS ou interagir com o Jeedom por meio de interações

# Configuration

## Configuração do plugin

Depois de baixar o plugin, você deve ativá-lo e inserir o IP do seu Google Assistant. Este plugin permite falar um Google Cast e controlar seu volume. Ele também atua como uma ponte para interações e a Página inicial do Google.

## Configurando o IFTTT para retorno TTS (opcional)

Sem a IFTTT, seu Assistente do Google não poderá trocar com o Jeedom.

**Aqui estão as poucas etapas de configuração :**

-   Se connecter ou s'inscrire sur IFTTT : <https://ifttt.com> (ou através do aplicativo móvel)
-   Guia "Meus Applets" e depois "Novo Applet"
-   Clique em "+ Este", escolha Google Assistant (vincule seu Google Assistant ao IFTTT, se ainda não o tiver feito))
-   Escolha o gatilho "Diga uma frase com um ingrediente de texto"

**Exemplo de configuração da primeira parte do Applet :**

-   **O que você quer dizer?** : dis à jeedom \$
    > **Dica**
    >
    > Você deve absolutamente colocar '\ $' no final da sua frase

-   **Outra maneira de dizer isso? (optional)** : maison \$
-   **E de outra maneira? (optional)** : jarvis \$
-   **O que você quer que o Assistente diga em resposta?** : Eu faço
    > **Dica**
    >
    > Aqui está a frase que seu Assistente do Google responderá
    > antes de processar sua solicitação

-   **Linguagem** : French
-   Clique em "+ Isso", escolha Webhooks (ative o serviço se ainda não estiver pronto))
-   Escolha o único gatilho disponível : Faça uma solicitação da web

**Exemplo de configuração da segunda parte do Applet :**

-   **URL ** : Você deve colar o URL de retorno indicado na página do seu equipamento
    > **Dica**
    >
    > O URL de retorno deve ser alterado : ***ID\_ EQUIPAMENTO*** deve ser substituído pelo ID do seu Assistente do Google (clique em "Configuração avançada" na página do seu equipamento para saber o ID) e *query=XXXX* por consulta = {{TextField}}

    > **IMPORTANTE**
    >
    > O URL deve ser externo ``https://mon\_dns.com/plugins/gcast/core/php/gcastApi.php?apikey=xxxxxxMA\_CLE\_APIxxxxxxxx&id=142&query={{TextField}}``

-   **Método** : GET
-   **Tipo de conteúdo** : application / json
-   **Corpo** : {{TextField}}

Tudo o que você precisa fazer é clicar em "Salvar" e aproveitar suas interações entre o Google Assistant e o Jeedom !

O uso do ASK é ainda possível

# FAQ

> **O controle de volume funciona, mas não o TTS**
>
> Você deve verificar a configuração da sua rede interna (o plugin o usa para geração de TTS), em particular nenhum https nas redes internas.
