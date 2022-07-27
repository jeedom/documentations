Plugin para interface com equipamentos de banda larga

Configuração do plugin 
=======================

Após instalar o plug-in, você deve ativá-lo e garantir que
boa instalação de dependências.

> **IMPORTANTE**
>
> Não é recomendado mudar a porta

Inclusão de equipamentos 
=========================

Aller dans le menu Plugins &gt; Protocole Domotique &gt; Broadlink. Une
Uma vez na página, clique em MODO DE INCLUSÃO. Logicamente o todo
Os produtos Broadlink em sua rede serão reconhecidos.

Configuração do equipamento 
=============================

Selecione um dos seus equipamentos. Se estes são produtos do tipo
Infravermelho, um botão para aprender um comando aparece na parte superior. Ai voce
basta clicar nele, você tem 5 segundos para aprender
um comando infravermelho ou 433 para o seu broadlink. Após isso, o plugin
confirmará o sucesso da operação e criará o pedido associado
você só precisa citar. Há também um modo avançado 
para detectar frequências Rf ligeiramente diferentes.
Este modo funciona em dois estágios, um estágio de detecção de frequência 
(ou você deve continuar pressionando o botão ou pressionando-o várias vezes).
E um segundo passo semelhante ao modo clássico.

> **Dica**
>
> Para evitar aprender o que poderia vir do meio ambiente
> (controle remoto de um vizinho ou de outro), o link em
> aprendendo VOLUNTARIAMENTE entra em um nível de recepção muito
> fraco, então você precisa estar MUITO perto do broadlink para aprender uma
> pedido especialmente se for um 433Mhz.

Sincronizar 
============

Na guia Controles do equipamento, você encontra o botão
Sincronize. Se você tiver mais de um broadlink, poderá
transferir comandos aprendidos de um broadlink para outro.

> **Dica**
>
> Funciona de um rm-pro a um mini ou vice-versa.

Você pode escolher os pedidos a serem transferidos, bem como os links
para o qual você deseja transferi-los. (O nome do pedido será
obviamente convergido (TV ligada, ventilador desligado, etc.)

> **Dica**
>
> Se você adicionou seu dispositivo manualmente porque não foi detectado automaticamente. O MAC para informar é 
> endereço MAC reverso em pacotes de dois em minúsculas sem : exemplo AA:BB:CC:DD:EE
> torna-se eeddccbbaa

> **Dica**
>
> Para alguns RM Pro, incluindo as versões 4. O dispositivo não deve estar vinculado à nuvem.
> Caso contrário, não será mais controlável localmente. Para fazer isso, você deve adicionar o dispositivo usando o aplicativo.
> Mas não continue assim que for adicionado ao seu wifi (não o adicione a uma sala ou qualquer coisa). Tem que parar
> neste momento.

Registro de alterações detalhado :
<https://github.com/jeedom/plugin-broadlink/commits/stable>
