# Enphase Envoy plugin

Plug-in para coletar informações fotovoltaicas dos gateways Envoy

# Configuration

## Antes do firmware v7

Para configurar o plugin, é necessário preencher as seguintes informações :

- Endereço IP do gateway enviado
- Senha do enviado (se isso não tiver sido alterado, são os últimos 6 caracteres do número de série.)

Então, clicando no botão "Sincronizar", todos os equipamentos serão criados automaticamente.

# Firmware V7

Se você estiver no firmware v7, poderá recuperar o token por conta própria acessando [lá](https://entrez.enphaseenergy.com/), conecte-se então clique em "Criar token de acesso" e copie o código jwt na configuração do plugin jeedom (No momento não sabemos se este código é válido por período ilimitado ou apenas por alguns meses). **OU** você indica no seu nome de usuário Enphase em "[v7] Username", sua senha em "[v7] Password" e por fim o número serial do seu gateway em "[v7] Serial number of the send", com esta informação o jeedom recuperará automaticamente o token assim que necessário.

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
