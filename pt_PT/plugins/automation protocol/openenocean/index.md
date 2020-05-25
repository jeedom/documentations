# Abra o plugin Enocean

Este plugin é um plugin que permite compatibilidade com Enocean

# Configuration

## Configuração do plugin

> **Dica**
>
> Para usar o plug-in, você deve fazer o download, instalar e ativá-lo como qualquer plug-in Jeedom.

> **IMPORTANTE**
>
> A coisa mais importante aqui é selecionar o seu controlador USB (você pode escolher Auto, ele funcionará para a chave Enocean USB300). Para qualquer outro modelo, é melhor escolhê-lo da lista :

-   USB300 : EnOcean\_GmbH EnOean\_USB\_300\_DB
-   USB310 : FTDI FT232R\_USB\_UART
-   Jeedom Smart : ttyS1

A outra opção disponível nesta página é : **Excluir automaticamente dispositivos excluídos**. Isso remove o equipamento Jeedom quando é excluído.

Você também pode verificar o status das dependências e reiniciá-las. Em caso de problemas com o plug-in, reinicie sempre as dependências, mesmo se estiver bem em caso de dúvida.

# O plugin

Vá para o menu plugins / protocolo para encontrar o plugin.

Nesta página você pode ver os módulos já incluídos.

Na parte superior desta página, você tem vários botões (visíveis dependendo do modo especialista ou não))

-   Botão Adicionar : Permite adicionar determinados módulos que não têm noções de emparelhamento ou que requerem o envio de comandos do Jeedom
-   Botão de inclusão : Este botão permite colocar o Jeedom na Inclusão (vários modos, apenas o primeiro está disponível no momento)
-   Botão de exclusão : Este botão permite colocar o Jeedom em exclusão
-   Botão Configuation : Este botão abre a janela de configuração do plug-in
-   Botão de saúde : Este botão permite que você tenha uma visão geral da saúde de todos os seus módulos

# Equipement

Quando você clica em um dos seus módulos, você chega na página de configuração desse módulo :

-   Dê um nome ao módulo
-   Ative / torne visível ou não
-   Escolha seu objeto pai
-   Atribuir uma categoria
-   Definir um atraso de monitoramento de comunicação para determinados módulos
-   Publicar um comentário

No lado direito, você encontrará :

-   O perfil do equipamento (geralmente detectado automaticamente se o módulo permitir)
-   Escolha um modelo se, para esse perfil, vários modelos estiverem disponíveis
-   Veja o visual

# Equipamento com configuração

Para alguns módulos, é possível ter um botão de configuração, clicando nele, você chegará a uma página que permite configurá-lo

> **IMPORTANTE**
>
> Aqui você só precisa escolher todas as opções e clicar em aplicar. (Atenção : lá todos os parâmetros são enviados, então valide todo)

# Lista de compatibilidade

Você encontrará [aqui](https://doc.jeedom.com/pt_PT/enocean/equipement.compatible) uma lista de compatibilidade de módulos com seu procedimento de inclusão, se eles forem específicos.
