# Plug-in Harmony Hub

Este plugin permite que você controle e recupere todos os dispositivos associados a um ou mais Harmony Hub.

Depois de ter recuperado todas as informações relativas a estes dispositivos, o plugin será capaz de criar automaticamente todos os comandos associados para controle total do Jeedom.

# Configuration

Como qualquer plugin Jeedom, o plugin **Harmony Hub** deve ser ativado após a instalação.

## Configuração de plug-in

O plugin usa dependências que devem ser instaladas primeiro clicando no botão **Reviver**.

Depois que as dependências forem instaladas, você pode inserir o endereço IP no qual o Harmony Hub pode ser acessado.

>**TRUQUE**
>
>O plugin é capaz de interagir com vários hubs ao mesmo tempo. Para fazer isso, você deve indicar o endereço IP de cada hub separado pelo símbolo `|``.

Salve a configuração e inicie o daemon.

## Configuração do equipamento

Para acessar os diversos equipamentos, acesse o menu **Plugins → Multimídia → Harmony Hub**.

Se a configuração do plugin estiver correta, todos os seus equipamentos terão sido criados automaticamente com seus comandos.

Para cada dispositivo encontramos os parâmetros gerais usuais, bem como 1 menu suspenso que permite escolher o ícone do dispositivo. Esta configuração é opcional e não influencia o comportamento do plugin.

# Informaçao importante

Verifique se você precisa **ativar opção de desenvolvedor** no aplicativo Harmony.

Consulte este link da Logitech :
<https://community.logitech.com/s/question/0D55A00008OsX3CSAV/update-to-accessing-harmony-hubs-local-api-via-xmpp>
