# Plugin LoraPayload

Este plugin é um plugin que permite vincular comandos de carga útil LoraWan e criar um dispositivo com comandos enquanto analisa os valores.

# Configuration

## Configuração de plug-in

Você pode verificar o estado das dependências aqui e reiniciá-las. Em caso de problemas com o plugin sempre reinicie as dependências mesmo se estiver OK na dúvida.


# O plugin

Vá para o menu de plug-ins / protocolo para encontrar o plug-in.

Nesta página você pode ver os módulos já incluídos.

Na parte superior desta página você tem vários botões

-   Adicionar botão : Permite que você adicione equipamentos
-   Botão de configuração : Este botão abre a janela de configuração do plugin

# Equipement

Ao clicar em um de seus módulos, você acessa sua página de configuração :

-   Dê um nome ao módulo
-   Ativar / tornar visível ou não
-   Escolha seu objeto pai
-   Atribuir uma categoria a ele

No lado direito você encontrará :

-   O perfil do equipamento (a ser escolhido manualmente pelo usuário ao criar)
-   Veja o visual

Você também tem duas guias adicionais:

-   Uma guia de carga útil (descrita no próximo parágrafo)
-   Uma guia Pedidos (aqui você encontrará os controles correspondentes ao seu equipamento - esta guia é padrão na Jeedom)

# Adicionando equipamento

Basta clicar no botão Adicionar e escolher um nome.

Em seguida, você pode configurar o objeto Pai, ativar o dispositivo, escolher uma ou mais categorias e tornar o dispositivo visível ou não.

É importante no lado direito escolher o tipo de equipamento. Isso é o que permitirá saber como analisar o quadro.

A guia Payload é muito importante :

-   Você deve escolher o comando info que recebe a carga útil (seja MQTT ou outros)
-   Você deve escolher se o formato de carga útil é Hexadecimal ou Base64


Uma vez feito isso, você pode salvar. Em seguida, na próxima vez que você receber um quadro, os comandos do seu equipamento serão atualizados

# Envoyer des commandes

Certains modules Lorawan possèdent des commandes de type Action qui permettent d'envoyer des consignes aux modules via l'interface Jeedom.

Dans l'onglet Equipement du plugin LoraPayload :

- Vous devez choisir la commande d'envoi (que ce soit MQTT ou autres)
- Vous devez choisir si voulez avoir une confirmation (Ack). C'est une information remontée dans MQTT sur un topic dédié qui n'influence pas les données remontées.

Concernant la commande d'envoi, dans le cas d'utilisation de MQTT, c'est une commande dans MQTT de type Action et de sous-type Message. Le topic est le topic dédié aux downlinks et la valeur de la commande est #message#.

# FAQ

-   Alguns comandos não são atualizados ao mesmo tempo que outros : sim, de fato, alguns módulos de Lorawan não enviam necessariamente todas as informações ao mesmo tempo e com a mesma frequência
