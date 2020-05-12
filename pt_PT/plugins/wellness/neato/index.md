# Plugin Neato

Este plugin permite que você tenha as informações de status do seu aspirador NeatoBotvac Connected e o controle

# Configuration

# Instalação / Criação

Para usar o plug-in, você deve fazer o download, instalar e ativá-lo como qualquer plug-in Jeedom.

Depois disso, você precisará entrar na sua conta Neato

Uma vez salvo, seu Neato será automaticamente detectado e adicionado ao seu Jeedom

Vá para o menu plugins / bem-estar para encontrá-lo.

# Painel de controle

    -   Aviso : mensagem se um erro estiver em andamento (escova bloqueada, caixote do lixo cheio etc.)
    -   Parar : Pare o robô
    -   Código de status : Código técnico do estado
    -   Iniciar eco house : iniciar a limpeza ecológica
    -   Iniciar turbo house : Iniciar limpeza turbo
    -   No comando : Responsável ou não
    -   Estado : Mensagem de status (pronta para limpar, durante a limpeza, pausada etc.)
    -   Pausa : Pausar o robô
    -   Programação : Usado para descobrir se uma programação está em andamento (neato programação)
    -   Legal : Atualizar informações
    -   Resumo : retomar a limpeza (se pausado)
    -   Base de volta : retorno à partida (se estiver em pausa)
    -   Na doca : Permite saber se o robô está na estação ou não

Todos esses comandos estão disponíveis através de cenários e através do painel


## Como as notícias são atualizadas

As informações são atualizadas uma vez a cada 15 minutos e após cada ação executada no Jeedom. Você pode atualizá-los sob demanda via cenário com o comando refresh ou via traço com as setas duplas

# Faq

>**Recebo o erro "Não foi possível encontrar robot_serial para o nome do fornecedor especificado"**
>
> É necessário, na configuração do plugin (Plugins -> Management Plugins), salvar para refazer a detecção do seu robô aspirador de pó

>**O comando de limpeza não funciona, o robô sai e retorna à sua base ou não respeita as limitações (mapa)**
>
>Em certos modelos de robôs, é absolutamente necessário definir um mapa / paln de navegação, você encontrará [aqui](https://support.neatorobotics.com/hc/fr/articles/360009513113-Comment-cr%C3%A9er-un-plan-d-%C3%A9tage-) fazer isso
