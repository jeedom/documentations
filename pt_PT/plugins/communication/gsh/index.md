# Google smarthome plugin

Este plugin permite que você :

- use a implementação nativa do Google para o gerenciamento de objetos conectados

Pode funcionar de 2 maneiras :

- Autônomo : você cria os aplicativos no modo de desenvolvimento no lado do Google e conecta seu Jeedom ao serviço do Google
- Cloud : através de um serviço de nuvem fornecido pela Jeedom

> **Importante**
>
> O modo nuvem requer uma assinatura de serviços de voz (3 meses grátis na compra do plugin). Você pode gerenciar sua assinatura [aqui](https://market.jeedom.com/index.php?v=d&p=profils#services)

> **Importante**
>
> GOOGLE requer que seu Jeedom esteja acessível em HTTPS (o plug-in não funciona em HTTP) com um certificado válido (portanto, nenhum certificado autoassinado)
>
> Graças aos Power ou Ultimate Service Packs, seu Jeedom pode ser acessado via HTTPS.
> Se você tiver um Community Service Pack, deverá instalar um certificado SSL emitido por uma autoridade de certificação (por exemplo: Vamos criptografar).

> **Importante**
>
> O plugin não suporta equipamentos com funções duplas (2 saídas como alguns módulos zwave Fibaro). Você absolutamente tem que passar por 2 virtuais para quebrá-lo.

# Modo de nuvem

> **Importante**
>
> É importante executar as seguintes etapas na ordem listada !!!

> **Importante**
>
> Se você receber uma mensagem de erro informando que sua senha de usuário ou senha está incorreta, você deve :
> - verifique se o Google Home está ativo no mercado
> - se for esse o caso, você tem certeza de seus identificadores (tenha cuidado, você deve respeitar letras maiúsculas/minúsculas) ?
> - se for o caso, altere sua senha no mercado e na configuração do serviço de assistente de voz (página perfil do mercado aba meus serviços) salve

Após instalar o plug-in, basta acessar a configuração do plug-in, selecionar o modo Cloud e clicar em "Enviar" (isso enviará as informações de conexão à API do plug-in no mercado)

Então em Jeedom in Communication/Google Smarthome você deve clicar em salvar para enviar sua configuração inicial, você precisa de pelo menos um dispositivo em OK (caso contrário ao conectar o Google Home <-> Jeedom você terá um erro)

Em seguida, no aplicativo Google Home você deve ir para a primeira aba e clicar em Adicionar (o +) :

![gsh](../images/gsh29.png)

Em seguida, configure um dispositivo :

![gsh](../images/gsh30.png)

Em "Funciona com o Google" :

![gsh](../images/gsh31.png)

Em seguida, na lista com o botão de pesquisa (lupa no canto superior direito), procure por "Jeedom Smarthome" e clique nele :

![gsh](../images/gsh32.png)

Insira seus identificadores de mercado (bem, aqueles que não são do seu mercado Jeedom).

![gsh](../images/gsh6.png)

Em plugins -> comunicação -> Google Smarthome você pode configurar seus diferentes equipamentos (ver capítulo Configuração de plugins)

>**NOTA**
>
>Para alternar do modo autônomo para o modo nuvem, você deve :
>- no plugin, vá para a nuvem e salve
>- aguarde 24h
>- no aplicativo inicial do Google, você deve dissociar o testmarthome (seu aplicativo independente)
>- em Comunicação/Google Smarthome você deve clicar em salvar para enviar sua configuração inicial
>- Link Jeedom Smarthome na Página inicial do Google


> **Importante**
>
>Qualquer modificação na configuração do equipamento enviado para a Página inicial do Google (adição de equipamento, exclusão de equipamento, alteração de um tipo de pedido genérico) requer necessariamente acessar Plugin -> Comunicação -> Googme Smarthome e, em seguida, salvar

# Modo autônomo

> **Importante**
>
> O Google modifica a interface (com muita) frequência, não temos recursos humanos para refazer todas as capturas de tela a cada vez. Portanto, pode haver grandes diferenças entre as capturas e a realidade

> **Importante**
>
> Se você usou o modo nuvem, não deve fazer esta parte !!! Vá diretamente para o capítulo “Configuração do plugin”"

> **Importante**
>
> O modo autônomo é uma "farsa" porque faz com que você crie um aplicativo no Google no modo de desenvolvimento, que permite a sincronização apenas por 3 dias após a ativação do modo de teste. Portanto, ao adicionar ou modificar equipamentos, reative o modo de teste a cada 3 dias para poder sincronizar. Atenção, estamos falando de uma modificação da configuração, se você não adicionar ou modificar equipamentos, não há nada para fazer, o aplicativo funcionará sem limite de tempo

> **Importante**
>
> Como o aplicativo é um aplicativo de desenvolvimento no lado do Google, eles podem cortá-lo, excluí-lo ou alterar as regras a qualquer momento. Nesse caso, a Jeedom não pode ser responsabilizada em caso de mau funcionamento.

> **Importante**
>
> Para que os aplicativos funcionem, é essencial que seu jeedom esteja em https com um certificado válido (se você tiver um service pack, o acesso ao DNS estará disponível para isso)

Como lembrete, o plug-in permite que você :

- use a implementação nativa do Google para o gerenciamento de objetos conectados
- use interações jeedom usando "Talk to ..."

Existem, portanto, 2 aplicativos listados no Google : um para a parte do Google Smarthome e outro para a parte de interação (é claro que você só pode fazer um dos 2)

## Aplicativo Google Smarthome

Venha [aqui](https://console.actions.google.com) depois clique em "Adicionar / importar projeto"

![gsh](../images/gsh7.png)

Dê um nome ao projeto, altere o idioma e região padrão e valide :

![gsh](../images/gsh8.png)

Selecione "Controle doméstico" :

![gsh](../images/gsh9.png)

Clique em "Smarthome" :

![gsh](../images/gsh10.png)

Clique em "Dê um nome à sua ação do Smart Home" :

![gsh](../images/gsh11.png)

Coloque "teste de smarthome" e valide (botão Salvar no canto superior direito) :

![gsh](../images/gsh12.png)

À esquerda, clique em "Ações" :

![gsh](../images/gsh13.png)

Então "Adicione sua primeira ação" :

![gsh](../images/gsh14.png)

Você terá que fornecer aqui a URL de chegada do Jeedom. Para simplificar, no Jeedom você precisa acessar a página de gerenciamento de plugins, escolher o modo "Independente" (e salvar de passagem), o URL é o chamado "URL de atendimento"

![gsh](../images/gsh15.png)

Em seguida, vá para "Vinculação de conta" (menu à esquerda) :

![gsh](../images/gsh13.png)

Selecione "Não, só quero permitir a criação de contas no meu site" e faça "Avançar" :

![gsh](../images/gsh16.png)


Selecione "OAuth", depois "Código de autorização" e faça "Avançar" :

![gsh](../images/gsh17.png)

Em seguida, preencha os 4 campos de acordo com a página de configuração do plug-in e clique em "Avançar" :

![gsh](../images/gsh18.png)

> **NOTA**
>
> Os campos são :
> - ID do cliente primeiro
> - então o cliente secreto
> - depois "URL de autorização" (tome cuidado com o da seção "Smarthome"")
> - depois "URL do token" (tome cuidado com o da seção "Smarthome"")

Não há nada a fazer simplesmente "Next" :

![gsh](../images/gsh19.png)

Escreva "Toto" e depois "Salvar" :

![gsh](../images/gsh20.png)

Agora você deve configurar a chave da API do homegraph. Para fazer isso, vá [aqui](https://console.developers.google.com/apis/dashboard), depois clique com o botão direito do mouse em "Biblioteca" :

![gsh](../images/gsh21.png)

> **NOTA**
>
> Se você não tem um projeto, precisa criar um

E procure por "Homegraph" :

![gsh](../images/gsh22.png)

Clique em homegraphapi, ative a API e clique em gerenciar :

![gsh](../images/gsh23.png)

Clique no identificador à esquerda :

![gsh](../images/gsh24.png)

Em seguida, em "Identificadores de APIs e serviços" :

![gsh](../images/gsh25.png)

Clique em "Criar identificadores" e depois em "Chave da API" :

![gsh](../images/gsh26.png)

Copie a chave API gerada e cole-a na página de gerenciamento do plugin Google Smarthome em "Homegraph API Google"

Última etapa para fornecer ao Jeedom o ID do projeto para gerenciar a conexão, vá [aqui](https://console.actions.google.com) depois clique no seu projeto. Récuperez l'url de la forme "https://console.actions.google.com / u / 0 / project / myproject-31023 / overview ", o ID do projeto está entre projeto / e / overview, no exemplo aqui é" myproject-31023 ", copie esse ID na página de gerenciamento o plug-in do Google Smarthome em "Smarthome Project ID".

É isso, agora você pode clicar à esquerda em "Ação" :

![gsh](../images/gsh27.png)

Então no teste :

![gsh](../images/gsh28.png)

Então você precisa em um smartphone **andróide** (não deve funcionar em um iphone) conecte-se ao seu Jeedom **o URL externo** disso. Em seguida, vá para o aplicativo doméstico, "configure ou adicione", "configure um dispositivo" e, finalmente, clique em "Funciona com o Google" e adicione o serviço criado acima (ele começa com [test])

## Configuração JWT

O JWT permite que você relate automaticamente qualquer alteração no status de um item de equipamento enviado ao Google, o que permite que você tenha o status mais rapidamente ao solicitá-lo no Google Home ou no aplicativo Google Home. Não é obrigatório configurá-lo, porém se você marcar a caixa "Status do relatório", é absolutamente necessário tê-lo feito para que funcione.

Para fazer a configuração, você precisa

* vá [aqui](https://console.developers.google.com/iam-admin/serviceaccounts), se o Google perguntar, você deve escolher o projeto (aquele criado logo acima).
* Clique em criar uma conta de serviço
  * Dê um nome (você pode colocar o que quiser, evitar )
  * Recupere o e-mail gerado logo abaixo para copiá-lo na configuração do plugin no Jeedom (campos : Cliente de email (JWT))
  * Clique em criar
  * Clique em continuar sem modificar nada
  * Clique em "Criar uma chave"
    * Deixe JSON e clique em OK
  * Clique em OK
  * Abra o arquivo baixado e copie a parte 'private_key' (começa com "-----BEGIN PRIVATE KEY-----", incluída e termina com "-----END PRIVATE KEY-----\n ", incluído sem o ") na configuração do plugin no Jeedom (campos : Chave privada (JWT))

# Configuração do plugin

No seu Jeedom, vá em Plugins -> Comunicação -> Google Smarthome e na seção de equipamentos selecione o equipamento a transmitir para o Google bem como o tipo de equipamento.

![gsh](../images/gsh2.png)

> **Importante**
>
> O plug-in é baseado nos tipos genéricos de comandos Jeedom para controlar sua automação residencial. Portanto, é muito importante configurá-los corretamente.Você pode ver [aqui](https://doc.jeedom.com/pt_PT/core/4.4/types) documentação sobre genéricos típicos

> **NOTA**
>
> Para o tipo "camera", você deve configurar absolutamente o URL do fluxo (testamos apenas o RTSP) para que funcione.
> Observe que o suporte à câmera está atualmente na versão beta e consome muitos recursos

## Equipement

No equipamento você pode configurar :

* Opções :
  * Transmitir : envia o equipamento para o Google Home para que possa ser controlado (atenção, a configuração dos tipos genéricos deve estar OK)
  * Aumentar o estado : enviar qualquer informação de mudança de estado diretamente ao Google (isso evita que o Google Home consulte Jeedom ao solicitar informações). Consulte a seção "Configuração JWT"
  * Desafio [Nenhum, Código] : se estiver no modo de código, o Google solicitará um código (o indicado logo abaixo) para cada ação no equipamento
* Estado : indica se a transmissão está correta, se é NOK, trata-se de um tipo genérico. Se você clicar em NOK poderá obter informações sobre os tipos genéricos necessários
* Tipo : indica o tipo de equipamento
* Apelido : apelido do dispositivo, se vazio, o nome do dispositivo é usado
* Ação :
  * Permite configuração avançada de equipamentos para Google Home (depende do tipo utilizado)
  * Configuração avançada de equipamentos, permite acesso à configuração avançada de comandos e, portanto, modificação de tipos genéricos
  * Permite ir diretamente para a página de configuração do equipamento

### Type

Os tipos de equipamento são importantes, pois permitem que o Google reaja com base nas frases que você diz.

> **Importante**
>
> Jeedom oferece suporte a tipos "beta" ainda não documentados no Google, que podem ou não funcionar dependendo das atualizações do Google

> **Importante**
>
> O tipo de termostato só é totalmente compatível com o equipamento proveniente do plugin do termostato, caso contrário, o gerenciamento dos modos pode não funcionar
> 
> Para gerenciar o modo em um tipo de termostato, você deve :
> - Informação do tipo “outro” que toma como valor “calor”, “frio”, “desligado”, “eco” e lhe atribui o tipo genérico : Modo termostato
> - Ações que fazem alterações de modo e atribuem a elas o tipo genérico : Modo termostato
> - Também é necessário conectar a ação ao modo correspondente nos parâmetros do equipamento no plugin gsh (seção “Configuration TemperatureSetting”)")

## Cenas

Você também pode criar cenas na aba cenário, com ações de entrada e saída.

![gsh](../images/gsh3.png)

> **NOTA**
>
> Para iniciar um cenário, basta dizer "Ativo #nom du scénario#" ou "Desativar #nom du scénario#

> **NOTA**
>
> Ao salvar o Jeedom, a sincronização será solicitada automaticamente com o Google. Atenção no modo autônomo se você tiver um erro (digite "A entidade solicitada não foi encontrada") tente reativar o teste do aplicativo ([aqui](https://console.actions.google.com)) em seguida, clique novamente no botão de conexão na página de configuração do plugin. Verifique também a configuração (especialmente a parte oauth) do seu aplicativo Google (às vezes os campos são excluídos pelo Google)

Tudo o que você precisa fazer é atribuir o equipamento às salas no aplicativo Google Home

# FAQ

>**Não consigo fazer a associação no modo nuvem ?**
>
> Temos que verificar se :
> - você está em https (se você tiver um service pack, use jeedom DNS, eles são seguros por padrão)
> - você ativou o Google Assistant no mercado (página de perfis, guia meus serviços e configuração na seção Assistentes de voz)
> - você se inscreveu na assinatura dos serviços de voz e ainda é válida (necessário a partir de 01/06/2019). Isso pode ser visto na sua página de perfis de mercado, guia meus serviços
> - você deve em plugins -> comunicação -> Google Smarthome selecionar "transmitir" equipamento e definir o tipo e finalmente salvar
> - use bem suas credenciais de mercado
> - se você tiver um certificado vamos criptografar, não se esqueça de colocar a raiz e o intermediário na cadeia de certificação
> - nenhum módulo OK (você deve ter um; caso contrário, o Google se recusa a vincular)
> - se você está em seu próprio domínio, problemas para resolver o nome de domínio em IP, não faço ideia do porquê. Do lado jeedom, os DNS são os fornecidos por defeito pela OVH (não temos controlo sobre eles de qualquer maneira). Tive até o caso de um utilizador ter DNS na OVH e ainda não conseguir resolver nas nossas máquinas
> - Problema com o telefone, em algumas marcas o navegador está desatualizado ou não é cromado por padrão e causa problemas para fazer o link
> - Se você ainda tiver o problema, tente enviar apenas um módulo do tipo luz


>**Quais são os pedidos possíveis ?**
>
>Os comandos de voz (assim como os retornos) são gerenciados apenas pelo Google. Aqui está o [Documentação](https://support.google.com/googlehome/answer/7073578?hl=fr)

>**O assistente me pede para atribuir as peças, mas não sei a que corresponde o equipamento.**
>
>Sim, o assistente não exibe o nome real do equipamento, apenas o apelido. Portanto, você deve sair do assistente e retornar à página inicial do controle inicial. Ao clicar no equipamento, você terá esse nome e poderá atribuí-lo a uma sala

>**Por que você precisa atribuir peças a cada peça de equipamento ?**
>
>Como o Google não permite que você faça isso através da API, você deve fazê-lo manualmente.

>**Recebo a mensagem de erro "OpenSSL incapaz de assinar dados"**
>
>Você deve marcar a caixa "Push the state" (na configuração avançada, botão verde com a roda dentada) sem fazer a configuração JWT

>**Recebo a mensagem de erro "Não é possível encontrar o recurso 404" ao salvar**
>
>Então não se preocupe, está tudo salvo, é só a sincronização automática que não é feita. Para dizer "Sincronizar meus dispositivos" com seu assistente. Para tentar corrigir este problema :
> vá para a próxima página [aqui](https://console.cloud.google.com/cloud-resource-manager). Nesta página, você verá a lista de todos os projetos, mesmo os invisíveis, na página de ações do Google. Excluir todos os projetos não utilizados.
> Em seguida, refaça o tutorial da etapa de configuração da chave da API Homegraph (ativação, geração de chave, depois dissocie o jeedom da sua conta Google e refaça o link)


>**Você tem um erro de link ou não foi possível atualizar o parâmetro, verifique sua conexão no modo nuvem**
>
>É necessário no jeedom, no plug-in, adicionar equipamento, salvar e refazer a associação do Jeedom Smarthome no aplicativo Google Home

>**Recebo o erro "Aparentemente, o Jeedom Smart Home não está disponível no momento." ou "Desculpe, não consigo me conectar ao Jeedom Smart Home."**
>
>Tente desassociar / associar novamente o aplicativo smarthome do Google. Tenha cuidado ao usar o aplicativo oficial e não um aplicativo [TEST] se você já usou o modo independente antes. Se o problema persistir, verifique (principalmente em uma cena) se o tempo de execução permanece inferior a 2s (máximo permitido pelo Google)

>**Ao adicionar equipamentos tenho NOK**
>
>Basta clicar no NOK e uma janela informará o tipo de genéricos que você deve ter nos controles do equipamento para que isso funcione. Você pode ver [aqui](https://doc.jeedom.com/pt_PT/concept/generic_type) a documentação sobre tipo genérico

>**Alterar a velocidade de um ventilador não funciona**
>
>Após análise Google não envia pedido durante ação sobre velocidade. Portanto, devemos esperar que o Google corrija
