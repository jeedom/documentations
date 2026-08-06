# Plugin Neato

# Description

Este plugin permite-lhe obter as informações de estado do seu aspirador NeatoBotvac Connected e controlá-lo.

# Configuration

# Instalação / Criação

Para usar o plug-in, você deve fazer o download, instalar e ativá-lo como qualquer plug-in Jeedom.

Depois disso, você precisará entrar na sua conta Neato *(email e senha)*.

Depois de salvo, seu Neato será detectado automaticamente e adicionado ao seu Jeedom.

Vá para o menu Plugins → Conforto para acessá-lo.

# Painel de controle

    -   **Aviso** : mensagem se um erro estiver em andamento (escova bloqueada, recipiente de poeira cheio, etc).
    -   **Parar** : Pare o robô.
    -   **Código de status** : Código técnico do estado.
    -   **Iniciar eco house** : iniciar a limpeza ecológica.
    -   **Iniciar turbo house** : Iniciar limpeza turbo.
    -   **No comando** : Responsável ou não.
    -   **Estado** : Mensagem de status (pronto para limpar, limpar, pausado, etc).
    -   **Pausa** : Pause o robô.
    -   **Programação** : Usado para descobrir se a programação está em andamento (neato programação).
    -   **Legal** : Permite que você atualize as informações.
    -   **Resumo** : retomar a limpeza *(se pausado)*.
    -   **Base de volta** : volte para começar *(se pausado)*.
    -   **Na doca** : Permite saber se o robô está na estação ou não.

Todos esses comandos estão disponíveis por meio de cenários e no painel.

## Como as notícias são atualizadas

As informações são atualizadas uma vez a cada 15 minutos e após cada ação realizada no Jeedom. Você pode atualizá-los sob demanda através do cenário com o comando de atualização, ou através do painel dahs clicando nas setas duplas.

# FAQ

>**Recebo o erro "Não foi possível encontrar robot_serial para o nome do fornecedor especificado"** :
>
> Você deve clicar no botão "Salvar" na configuração do plugin (Plugins -> Gerenciamento de Plugins) para que ele reinicie o procedimento de detecção do seu aspirador robô.

>**O comando de limpeza não funciona, o robô sai e volta para a sua base ou não respeita as limitações (cartão)** :
>
>Em alguns modelos de robô é absolutamente necessário definir um mapa / plano de navegação, você encontrará as informações [aqui](https://support.neatorobotics.com/hc/fr/articles/360009513113-Comment-cr%C3%A9er-un-plan-d-%C3%A9tage-).
