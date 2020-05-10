Description
===

Plug-in para coletar informações fotovoltaicas dos gateways Envoy

Configuration
===

Para configurar o plugin, é necessário preencher as seguintes informações :

- Endereço IP do gateway enviado
- Senha do remetente (se não tiver sido alterada, esses são os últimos 6 caracteres do número de série).

Então, clicando no botão "Sincronizar", todos os equipamentos serão criados automaticamente.

Informações relatadas
===

O plug-in permite que você envie as seguintes informações (se você tiver um medidor enviado) :

__ * - Geral (turno a cada minuto) * __

    - Número de microinversores
    - Número de pilhas
    - Status da bateria (carga / descarga / inatividade)
    - % da carga da bateria
    - Produção de bateria (em W)
    - Produção instantânea (em W)
    - Produção do dia (em Wh)
    - Produção dos últimos 7 dias (em Wh)
    - Produção desde o comissionamento (em Wh)
    - Potência instantânea total (em W)
    - Consumo do dia (em Wh)
    - Consumo dos últimos 7 dias (em Wh)
    - Consumo desde o comissionamento (em Wh)
    - Potência líquida instantânea (em W)
    - Consumo líquido diário (em Wh)
    - Consumo líquido nos últimos 7 dias (em Wh)
    - Consumo líquido desde o comissionamento (em Wh)

  __ * - Para cada microinversor (alterne a cada 5 minutos) * __

    - Provisionado (Sim / Não)
    - Comunicação (Sim / Não)
    - Produção (Sim / Não)
    - Potência (em W)
    - Potência máxima (em W)

  __ * - Para cada bateria (troque a cada 5 minutos) * __

    - Provisionado (Sim / Não)
    - Comunicação (Sim / Não)
    - Produção (Sim / Não)
    - Potência (em W)
    - Potência máxima (em W)
    - % de carga
    - Temperatura máxima (em ° C)
