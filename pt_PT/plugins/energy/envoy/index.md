# Enphase Envoy plugin

Plug-in para coletar informações fotovoltaicas dos gateways Envoy

# Configuration

Para configurar o plugin, é necessário preencher as seguintes informações :

- Endereço IP do gateway enviado
- Senha do enviado (se isso não tiver sido alterado, são os últimos 6 caracteres do número de série.)

Então, clicando no botão "Sincronizar", todos os equipamentos serão criados automaticamente.

# Informações relatadas

O plug-in permite que você relate as seguintes informações (se você tiver um Medidor Envoy-s) :

- Geral (atualize a cada minuto)
    - Número de microinversores
    - Número de pilhas
    - Status da bateria (carga / descarga / inatividade)
    - % da carga da bateria
    - Produção de bateria (em W)
    - Produção instantânea (em W)
    - Produção diária (em Wh)
    - Produção dos últimos 7 dias (em Wh)
    - Produção desde o comissionamento (em Wh)
    - Potência total instantânea (em W)
    - Consumo diário (em Wh)
    - Consumo dos últimos 7 dias (em Wh)
    - Consumo desde o comissionamento (em Wh)
    - Potência líquida instantânea (em W)
    - Consumo líquido diário (em Wh)
    - Consumo líquido dos últimos 7 dias (em Wh)
    - Consumo líquido desde o comissionamento (em Wh)
- Para cada microinversor (atualização a cada 5 minutos)
    - Provisionado (Sim / Não)
    - Comunicação (Sim / Não))
    - Produção (Sim / Não))
    - Potência (em W)
    - Potência máxima (em W)
- Para cada bateria (atualize a cada 5 minutos)
    - Provisionado (Sim / Não)
    - Comunicação (Sim / Não))
    - Produção (Sim / Não))
    - Potência (em W)
    - Potência máxima (em W)
    - % de carga
    - Temperatura máxima (em ° C)

# Firmware V7

Se você está no firmware v7, você deve ir [lá](https://entrez.enphaseenergy.com/), faça o login e clique em "Criar token de acesso" e copie o código jwt na configuração do plugin jeedom. Observe que não sabemos no momento se este código é válido por um período ilimitado ou apenas por alguns meses