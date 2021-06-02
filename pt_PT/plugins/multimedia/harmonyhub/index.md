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

Em seguida, clique no botão **Arquivos de configuração** para gerar *(ou atualizar)* o (s) arquivo (s) contendo todas as informações sobre os dispositivos associados a cada hub Harmony.

## Configuração do equipamento

Para acessar os diversos equipamentos, acesse o menu **Plugins → Multimídia → Harmony Hub**.

>**EM FORMAÇÃO**
>
>O botão + Adicionar permite que você adicione um novo dispositivo Harmony Hub.

Para cada dispositivo, encontramos os parâmetros gerais usuais, bem como 2 menus suspensos que permitem, por um, selecionar o hub em questão para o dispositivo e para o outro escolher o tipo de dispositivo entre :

- **Actividades** : Equipamento que reúne todas as suas atividades e também
    desligamento geral e informações sobre a atividade atual.

- **Um dos seus dispositivos** : Equipamento que reúne todos
    comandos para um determinado dispositivo.

Uma vez selecionado, basta clicar no botão **Salve ** para gerar automaticamente a lista de comandos correspondentes :    

![harmonyhub screenshot4](../images/harmonyhub_commands.jpg)

# Commandes

Os comandos não são visíveis por padrão, eles são
porém todos disponíveis via cenário, virtual, etc

Se você quiser exibi-los em seu painel, basta reorganizá-los em
arraste e solte e marque a caixa **Exibição**. Você pode então, brincando com novas linhas, widgets ou ícones específicos
proposto, crie um controle remoto pseduo :

![harmonyhub screenshot5](../images/harmonyhub_screenshot5.jpg)
![harmonyhub screenshot6](../images/harmonyhub_screenshot6.jpg)

# Informaçao importante

Desde 19-02-2019 é necessário **ativar uma opção de desenvolvedor** no aplicativo Harmony.

Consulte este link da Logitech :
<https://community.logitech.com/s/question/0D55A00008OsX3CSAV/update-to-accessing-harmony-hubs-local-api-via-xmpp>
