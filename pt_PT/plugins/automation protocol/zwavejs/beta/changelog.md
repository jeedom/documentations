# Changelog Z-Wave JS

>**IMPORTANTE**
>
>Se não houver informação sobre a atualização, significa que se trata apenas da atualização da documentação, tradução ou texto.

- Mudar para a versão *9.26.0* por ZwaveJsUI
- Adicionado modo remoto *(Attention: isso reduz a funcionalidade do plugin)*. Leia atentamente a documentação, mudar para o modo remoto tem um forte impacto na facilidade de uso e na compatibilidade de determinados módulos
- Suporte ao protocolo mqtts

# 15/11/2024

- Corrigir método de instalação de dependência

# 27/09/2024

- Mudança de versões mínimas: núcleo 4.4 e SO Debian 11

# 26/09/2024

**Melhorias**

- Mudar para a versão *9.20.0* por ZwaveJsUI
- Preparando-se para integrar o modo remoto
- Limpeza de código

**Adições de configuração**

- Configuração adicionada *Repetidor de Sinal Neo +* (propriedades : Temperatura, Umidade)
- Configuração adicionada *Fibaro FGR224* (propriedades : Interruptor, alimentação, energia, notificação de sobrecorrente, notificação de sobretensão)

**Alterações de configuração**

- Mudando a configuração *Fibaro Fgrgbwm442* para usar as propriedades
- Mudando a configuração *Fibaro FGD212* Propriedades de notificação aprimoradas

# 20/05/2024

**Melhorias**

- Mudar para a versão *9.12.0* por ZwaveJsUI
- Adição e gerenciamento das duas novas chaves de segurança S2 Long Range

**Adições de configuração**

- Configuração adicionada *Repetidor de Sinal Neo* (propriedades : Temperatura, Umidade)
- Configuração adicionada *Shelly Qubino Onda 1* (propriedades : Interruptor, notificação de mãos, notificação de sobrecorrente, notificação de sensor de calor)
- Configuração adicionada *Shelly Qubino Onda 13h* (propriedades : Interruptor, alimentação, energia, notificação de rede elétrica, notificação de sobrecorrente, notificação de sensor de calor)
- Configuração adicionada *Shelly Qubino Onda Pro 1* (propriedades : Interruptor, notificação de mãos, notificação de sensor de calor)
- Configuração adicionada *Shelly Qubino Onda Pro 13h* (propriedades : Interruptor, alimentação, energia, notificação de rede elétrica, notificação de sobrecorrente, notificação de sobretensão, notificação de sensor de calor)
- Configuração adicionada *Shelly Qubino Onda 14h* (propriedades : Interruptor, alimentação, energia, notificação de rede elétrica, notificação de sobrecorrente, notificação de sensor de calor)
- Configuração adicionada *Shelly Qubino Onda Pro 2* (propriedades : Switch)
- Configuração adicionada *Shelly Qubino Onda Pro 14h* (propriedades : Interruptor, alimentação, energia, notificação de sobrecorrente, notificação de sobretensão)
- Configuração adicionada *Shelly Qubino Onda I4* (propriedades : Cena Central)
- Configuração adicionada *Obturador de ondas Shelly Qubino* (propriedades : Obturador, alimentação, energia, notificação manual, notificação de sobrecorrente, notificação de sensor de calor)
- Adicionando uma subpropriedade *notificação de sobretensão* para propriedade *Notificação*

**Alterações de configuração**

- Mudando a configuração *Plugue Neo* para usar as propriedades (*tenha cuidado, alguns modelos desejam se incluir no S2, mesmo que o fabricante não forneça nenhum DSK, inclua-os escolhendo o modo não seguro em vez do modo automático*)

# 27/02/2024

**Melhorias**

- Adição de uma função adicionalDependancyCheck para o núcleo


**Alterações de configuração**

- Mudando a configuração *MCOhome Mh7h* para usar as propriedades

# 26/12/2023

**Melhorias**

- Adicionada uma opção para ativar ou desativar o *Reinicialização suave*
- Mudar para a versão *9.6.2* por ZwaveJsUI

**Adições de configuração**

- Configuração adicionada *HeatIt Z-TRM6* (propriedades : Temperatura, ThermostatMode, ThermostatOperatingState, ThermostatModeAction, ThermostatSetpoint, Notificação do sensor de calor, Notificação de sobrecarga)
- Configuração adicionada *Botão Sunricher de controle remoto 12* (propriedades : CentralScene x12, Bateria)

# 12/11/2023

**Melhorias**

- Mudar para a versão *9.5.1* do ZwaveJsUI (para poder escolher uma porta no formato de caminho necessário em determinadas VMs você deve atualizar o núcleo)

**Conserta**

- Correção inclui bug *S2* corrigido no lado da UI do ZwaveJS a seguir aumentou (na verdade, os retornos de chamada não eram feitos a menos que você tivesse uma janela aberta na interface da UI do ZwaveJS)

**Adições de configuração**

- Configuração adicionada *Shelly Qubino Onda 13h* (propriedades : Interruptor, alimentação, energia, notificação de rede elétrica, notificação de sobrecorrente, notificação de sensor de calor)
- Configuração adicionada *Shelly Qubino Onda 1* (propriedades : Interruptor, alimentação, energia, notificação de rede elétrica, notificação de sobrecorrente, notificação de sensor de calor)
- Configuração adicionada *Obturador de ondas Shelly Qubino* (propriedades : Obturador, alimentação, energia, notificação manual, notificação de sobrecorrente, notificação de sensor de calor)
- Configuração adicionada *Shelly Qubino Onda 14h* (propriedades : Interruptor, alimentação, energia, notificação de rede elétrica, notificação de sobrecorrente, notificação de sensor de calor)
- Configuração adicionada *Shelly Qubino Onda 1* (propriedades : Interruptor, notificação de mãos, notificação de sobrecorrente, notificação de sensor de calor)  *duvido se devo adicionar Potência e Energia (faça um ticket se o dispositivo deveria informar consumo, mas acho que não)*
- Adicionando uma propriedade *Cobertura de janelas*

**Alterações de configuração**

- Mudando a configuração *Teclado Benex* usar as propriedades (cópia do Zipato mas na próxima versão)
- Mudando a configuração *MCOhome Mh8FC* para usar as propriedades
- Mudando a configuração *MCOhome Mh8FC-4* para usar as propriedades
- Mudando a configuração *Qubino ZMNKID - Termostato de descarga OnOff 2* para usar as propriedades
- Mudando a configuração *Motor com fio Widom Meta* para usar a propriedade Windows Covering
- Mudando a configuração *Wenzhou TZ78* uso do endpoint 0 no lugar do endpoint 1 (de acordo com o feedback dos usuários)
- Editando a imagem *MCOhome Mh8FC* (recorte)
- Editando a imagem *MCOhome Mh8FC-4* (recorte)

# 27/10/2023

**Adições de configuração**

- Adicionando uma subpropriedade *porta de notificação* para propriedade *Inclinar*

**Alterações de configuração**

- Mudando a configuração *Aeotec Zwa012*  para usar as propriedades
- Modificação de uma subpropriedade *notificação simples* para propriedade *Abertura*

**Melhorias**

- Mudar para a versão *9.1.2* por ZwaveJsUI

# 10/11/2023

**Conserta**

- Mudar para a versão *8.26.0* do ZwaveJsUI temporariamente

# 10/09/2023

**Conserta**

- Correção evitando certas mensagens no log *erro HTTP* em certos casos especiais

**Melhorias**

- Mudar para a versão *9.1.0* por ZwaveJsUI
- Adicionada uma opção para gerenciar *notificações* no centro de mensagens *nós mortos e vivos*
- Adicionada uma opção para gerenciar *notificações* no centro de mensagens *despertares perdidos e retorno*

**Adições de configuração**

- Configuração adicionada *Porta embutida Aeotec ZW187* (propriedades : Abertura simples, bateria, software de notificação, status de energia de notificação)
- Configuração adicionada *Thermofloor Heat It ZM Relé Alta Potência* (propriedades : Interruptor, alimentação, energia, notificação de sensor de calor, notificação de sobrecarga, cena central)
- Adicionando uma subpropriedade *notificação simples* para propriedade *Abertura*


# 11/09/2023

**Conserta**

- Correção de atualização *OTA* de um firmware de módulo após uma alteração no ZwaveJSUI

**Melhorias**

- Mudar para a versão *8.25.1* por ZwaveJsUI.
- Adicionada a possibilidade de fazer uma atualização *OTW* um controlador (se compatível)
- Adicionada uma opção para gerenciar *notificações* no centro de mensagens *nós mortos e vivos*
- Adicionada uma opção para gerenciar *notificações* no centro de mensagens *despertares perdidos e retorno*

**Adições de configuração**

- Configuração adicionada *Shelly Qubino Onda 13h* (propriedades : Interruptor, alimentação, energia, notificação de rede elétrica, notificação de sobrecorrente, notificação de sensor de calor)
- Configuração adicionada *Shelly Qubino Onda 1* (propriedades : Interruptor, alimentação, energia, notificação de rede elétrica, notificação de sobrecorrente, notificação de sensor de calor)
- Adicionando uma subpropriedade *água binária* para propriedade *Enchente*
- Adicionando uma subpropriedade *barreira de nível* para propriedade *Multinível*

**Alterações de configuração**

- Mudando a configuração *MCOhome Mh8FC*  para usar as propriedades
- Mudando a configuração *NeoCoolCam WS02Z*  para usar as propriedades
- Mudando a configuração *Kaipule IM20*  para usar as propriedades
- Mudando a configuração *HRT4_SRT321* para melhor usar as propriedades
- Mudando a configuração *Benext Plug In Dimmer* para melhor usar as propriedades
- Mudando a configuração *Cúpula On Off Plug In Interruptor Plug In Dimmer* para melhor usar as propriedades
- Mudando a configuração *Domux Dx2skz* para melhor usar as propriedades
- Mudando a configuração *Plugue Swiid* para melhor usar as propriedades
- Mudando a configuração *Everspring SM810* para melhor usar as propriedades
- Mudando a configuração *Zipato PD01z* para melhor usar as propriedades
- Mudando a configuração *Visão de segurança ZS5101* para melhor usar as propriedades

# 02/08/2023

**Melhorias**

- Mudar para a versão *8.22.0* por ZwaveJsUI.
- Adição de todos *tty* na lista de portas (isso será inútil com o novo núcleo que permitirá escolher uma porta diretamente pelo id)
- Adicionada a última rota na página de estatísticas de um nó (depende do SDK do controlador)
- Adicionada a última taxa de transmissão de velocidade na página de estatísticas de um nó (depende do SDK do controlador)
- Adicionada a última taxa de transmissão de velocidade na página de estatísticas globais (depende do SDK do controlador)
- Adicionada última rota na página de estatísticas globais (depende do SDK do controlador)
- Adicionado rssi mais recente na página de estatísticas globais (depende do SDK do controlador)
- Adicionado o rssi mais recente na página de estatísticas de um nó (depende do SDK do controlador)
- Adição de um gráfico *Rota de rede* representando as últimas rotas tomadas (irá escalar e pode não lidar com todos os casos depende do SDK do controlador)
- Adição de uma mensagem no centro de mensagens quando um nó fica inoperante (além do comando de status do equipamento)
- Adição de uma mensagem no centro de mensagens quando um nó fica Alive depois de Morto (além do comando de status do equipamento)
- Adição de uma mensagem no centro de mensagens quando um nó não acordou após 4 vezes seu intervalo de ativação


**Adições de configuração**

- Adicionando uma propriedade *TermostatoFanState*
- Adicionando um subcomando *Estado do rótulo* à propriedade Operador de barreira (para ter um comando de etiqueta com texto além do comando numérico)
- Configuração adicionada *MCOhome Mh8FC* (propriedades : ThermostatMode, ThermostatModeAction, ThermostatSetpoint, ThermostatFanMode, ThermostatFanModeAction, ThermostatOperatingState, ThermostatFanState, Temperatura)
- Configuração adicionada *Heltun HE-FT01* (propriedades : ThermostatMode, ThermostatModeAction, ThermostatSetpoint, ThermostatFanMode, ThermostatFanModeAction, ThermostatOperatingState, ThermostatFanState, Temperatura, Iluminância, Umidade, Potência, Energia)
- Configuração adicionada *MCOhome MH3901* (propriedades : ThermostatMode, ThermostatModeAction, ThermostatSetpoint, ThermostatOperatingState, Temperatura)
- Adicionando um subcomando *Estado do rótulo* à propriedade Thermostat Operating State (para ter um comando de rótulo com texto além do comando numérico)

**Alterações de configuração**

- Mudando a configuração *HRT4_SRT321* para usar as propriedades
- Mudando a configuração *SRT323* para usar as propriedades
- Editando a imagem *HRT4_SRT321* (recorte)
- Editando a imagem *SRT323* (recorte)
- Editando a imagem *SSR303* (recorte)
- Editando a imagem *SIR321* (recorte)
- Editando a imagem *SES303* (recorte)
- Editando a imagem *SES302* (recorte)
- Editando a imagem *SCSC17* (recorte)

# 26/06/2023

**Melhorias**

- Mudar para a versão *8.19.0* por ZwaveJsUI.
- Módulos *FLIRS* não são mais considerados ativos na malha no gráfico de rede

**Alterações de configuração**

- Mudando a configuração *Sensor de janela de porta Aeotec DSB04100* para usar as propriedades
- Mudando a configuração *Interruptor Aeotec DSC10 Heavy Duty* para usar as propriedades
- Mudando a configuração *Aeotec DSC06106 Interruptor de Energia Inteligente* para usar as propriedades
- Mudando a configuração *Faixa Inteligente Aeotec DSC11* para usar as propriedades
- Mudando a configuração *Aeotec DSC08101 Iluminador Smart Energy* para usar as propriedades
- Mudando a configuração *Controle cego Aeotec DSC014104* para usar as propriedades
- Mudando a configuração *Aeotec DSC17103 Micro Interruptor Duplo* para usar as propriedades
- Mudando a configuração *Microinterruptor Aeotec DSC18103 2º* para usar as propriedades
- Mudando a configuração *Microinterruptor Aeotec DSC26103 2º* para usar as propriedades
- Mudando a configuração *Aeotec DSC27103 Micro Dimmer 2º* para usar as propriedades
- Mudando a configuração *Relógio de Pânico Benext* para usar as propriedades
- Mudando a configuração *Botão de pânico Benext* para usar as propriedades
- Mudando a configuração *Benext Plug In Dimmer* para usar as propriedades
- Mudando a configuração *Cúpula On Off Plug In Interruptor Plug In Dimmer* para usar as propriedades
- Mudando a configuração *Domux Dx2skz* para usar as propriedades
- Mudando a configuração *Everspring AD142* para usar as propriedades
- Mudando a configuração *Everspring AN145* para usar as propriedades
- Mudando a configuração *Refletor LED Everspring EH403* para usar as propriedades
- Mudando a configuração *Heiman Dx2skz* para usar as propriedades
- Mudando a configuração *Philio Smart Dimmer E27* para usar as propriedades
- Mudando a configuração *Philio Pan03* para usar as propriedades
- Mudando a configuração *Plugue Inteligente Popp* para usar as propriedades
- Mudando a configuração *Popp 009105* para usar as propriedades
- Mudando a configuração *Schlage na parede* para usar as propriedades
- Mudando a configuração *Tomada Sigma* para usar as propriedades
- Mudando a configuração *Plugue Swiid* para usar as propriedades

**Adições de configuração**

- Configuração adicionada *Heat It ZM Dimmer* (propriedades : Multilevel, Power, Energy, CentralScene, Notification)
- Configuração adicionada *Sigma PZ701U* (propriedades : Switch)
- Configuração adicionada *Neo RC03Z* (propriedades : Cena Central, Bateria)
- Adicionando uma subpropriedade *Sensor de calor* na propriedade *Notificação*
- Configuração adicionada *U-Fada GR-201N* (propriedades : Switch)

# 10/04/2023

**Melhorias**

- O *atualizar* agora pode ir até 100 segundos em vez de 60
- Mudar para a versão *8.13.1* por ZwaveJsUI.
- Mudando a função *pollValue* para propriedades em *valor* (obrigado @superbricolo)

**Alterações de configuração**

- Mudando a configuração *Sensor de água Aeotec ZWA19* para usar as propriedades
- Mudando a configuração *Aeotec ZWA24 7 em 1* para usar as propriedades
- Mudando a configuração *Everspring SM810* para usar as propriedades
- Editando uma propriedade *Velocidade*
- Editando a imagem *Dlink 510* (recorte)
- Editando a imagem *Fibaro Fgs-213* (recorte)

**Adições de configuração**

- Configuração adicionada *Sigma PZ701U* (propriedades : Switch)
- Configuração adicionada *Neo RC03Z* (propriedades : Cena Central, Bateria)
- Adicionando uma subpropriedade *Sensor de calor* na propriedade *Notificação*
- Configuração adicionada *U-Fada GR-201N* (propriedades : Switch)

# 14/02/2023

**Alterações de configuração**

- Mudando a configuração *Aeotec ZWA24 7 em 1* para usar as propriedades
- Mudando a configuração *Everspring SM810* para usar as propriedades
- Mudando a configuração *Aeotec ZW122* para usar as propriedades
- Agrupamento de configurações *Danfoss Living Connect*
- Mudando a configuração *Fibaro FGR-223* mudança de pontos finais de potência e energia
- Mudando a configuração *Fibaro FGR-223* adição de hardware e notificação de sobrecorrente
- Mudando a configuração *Fibaro FGS213* mude para o endpoint 1 (firmware >=3.3) e adicionado sensor de calor e notificação de sobrecorrente
- Editando a imagem *Aeotec ZWA24 7 em 1* (recorte)
- Editando uma propriedade *Velocidade*
- Editando a imagem *Dlink 510* (recorte)
- Editando a imagem *Fibaro Fgs-213* (recorte)
- Editando a imagem *Fibaro Fgs-221* (recorte)
- Editando a imagem *Fibaro Fgs-223* (recorte)
- Editando a imagem *Plugue Fibaro* (recorte)
- Editando a imagem *Plugue Fibaro GEN5* (recorte)

**Adições de configuração**

- Adicionando uma subpropriedade *Sensor de calor* na propriedade *Notificação*
- Configuração adicionada *U-Fada GR-201N* (propriedades : Switch)
- Configuração adicionada *Relé de Caldeira Danfoss* (propriedades : Switch)
- Configuração adicionada *Som de Alarme Benext* (propriedades : Switch)


# 24/12/2022

**Alterações de configuração**

- Mudando a configuração *Sensor de porta Aeotec ZWA008* para usar as propriedades
- Mudando a configuração *Qubino ZMNHLAX PWM Termostato* para usar as propriedades
- Mudando a configuração *Dimmer Qubino ZMNHDA2* para usar as propriedades
- Mudando a configuração *Fibaro FGR-223* modificação dos pontos finais de *atualizar*
- Mudando a configuração *Fibaro Fgrgbwm442* para usar as propriedades
- Mudando a configuração *Fibaro FGD212* propriedades de notificação adicionadas
- Mudando a configuração *Qubino ZMNHBA2 Flush 2 relés* para usar as propriedades
- Mudando a configuração *Interruptor Fibaro Walli* propriedades de notificação adicionadas
- Mudando a configuração *Dlink Dchz110* para usar as propriedades
- Mudando a configuração *Domitech luz led inteligente* para usar as propriedades
- Mudando a configuração *Interruptor Duwii* para usar as propriedades
- Mudando a configuração *Everspring AN157* para usar as propriedades
- Mudando a configuração *Popp Sensor de Fumaça* para usar as propriedades
- Mudando a configuração *Duwii Edan 300* para usar as propriedades
- Editando a imagem *Duwii Dimmer* (recorte)
- Editando a imagem *Sensor de porta Aeotec ZWA008* (recorte)
- Editando a imagem *Interruptor Duwii* (recorte)
- Editando a imagem *Duwii Edan 300* (recorte)
- Editando a imagem *Controle Cego Duwii* (recorte)
- Editando a imagem *Controle Remoto Duwii* (recorte)
- Editando a imagem *Duwii Zs3500* (recorte)
- Editando a imagem *Dimmer MCO Zipato p210* (recorte)

**Adições de configuração**

- Adicionando uma subpropriedade *Carregar erro* na propriedade *Notificação*
- Adicionando uma subpropriedade *Fibaro-effects2* na propriedade *Cor*

*Se você for afetado por uma modificação ou adição de configuração, faça uma sincronização e recarregue os comandos do equipamento "recriando todos os comandos" após a atualização.*

# 22/12/2022

**Melhorias**

- Adição de um motor completo *Gerenciamento de atualização*, útil para alguns módulos que não relatam corretamente algumas alterações após a ação. Não deve ser usado sem um motivo válido. Os arquivos de configuração levarão os elementos, se necessário
- Adicionando uma guia *Opções* na página do equipamento. Para visualizar e configurar atualizações e possíveis opções futuras
- Adição do número de *Atualizar* na página *Saúde*

**Alterações de configuração**

- Mudando a configuração *Luz Inteligente Qubino Luxy* para usar as propriedades
- Mudando a configuração *Popp pluviômetro* para usar as propriedades
- Mudando a configuração *Fibaro FGR-223* primeira configuração para usar o mecanismo de atualização (na verdade, este módulo tem um bug conhecido, não volta para as posições ou de maneiras errôneas quando um movimento é iniciado pelo Z-Wave) para recuperar a atualização (vá para o comando recarregar escolhendo "sem recriar pedidos") você deve ver o "atualizar" na guia de opções.
- Mudando a configuração *Fibaro FGR-223* mudança de pontos finais de potência e energia
- Mudando a configuração *Fibaro FGR-223* adição de hardware e notificação de sobrecorrente
- Mudando a configuração *Fibaro FGR-223* substitua a propriedade da cena por centralscene

**Adições de configuração**

- Configuração adicionada *Qubino Luxy Smart Switch* (propriedades : Switch, Multilevel, Power, Energy, Color, Notification, NotificationEvent)
- Adicionando a imagem *Qubino Luxy Smart Switch*
- Configuração adicionada *Centro de Segurança Abus SHSG10000* (propriedades : Interruptor, bateria)
- Adicionando a imagem *Centro de Segurança Abus SHSG10000*
- Adicionando uma subpropriedade *No geral* na propriedade *Chuva*
- Adicionando uma subpropriedade *Básico* na propriedade *Chuva*
- Adicionando uma subpropriedade *Sobrecarga* na propriedade *Notificação*
- Adicionando uma propriedade *Consumo de água*
- Adicionando uma propriedade *Evento de notificação*

*Se você for afetado por uma modificação ou adição de configuração, faça uma sincronização e recarregue os comandos do equipamento "recriando todos os comandos" após a atualização.*

# 21/12/2022

**Melhorias**

- Adição do gerenciamento de notificações de nós

**Alterações de configuração**

- Mudando a configuração *Extensor de Alcance Aeotec 6* para usar as propriedades
- Mudando a configuração *Zipato PD01z* para usar as propriedades
- Mudando a configuração *NeoCoolCam PD01zt* para usar as propriedades
- Mudando a configuração *NeoCoolCam PD01z* para usar as propriedades
- Mudando a configuração *Medidor de energia de micromódulo Philio/Zipato* para usar as propriedades
- Mudando a configuração *Fibaro FGS214* para usar as propriedades
- Mudando a configuração *Fibaro FGS213* mude para o ponto final 0 (a confirmar)
- Reversão de configuração *Fibaro FGD212 firmware 3.5*
- Mudando a configuração *Teclado Zipato* adição de propriedade *NodeNotification*
- Mudando a configuração *Teclado Schlage* adição de propriedade *NodeNotification*
- Mudando a configuração *Espírito de válvula Eurotronic* para usar as propriedades
- Agrupamento de configurações *Danfoss Living Connect*
- Mudando a configuração *Danfoss Devolo Living Connect* para usar as propriedades
- Mudando a configuração *Danfoss Living Connect* para usar as propriedades
- Mudando a configuração *Danfoss Pop Radiador Termostato* para usar as propriedades
- Mudando a configuração *Philio PSP05* para usar as propriedades
- Mudando a configuração *Zipato ZP3102* para usar as propriedades
- Mudando a configuração *Visão ZP3102* para usar as propriedades
- Mudando a configuração *Remotec ZXT-120* para usar as propriedades
- Mudando a configuração *Everspring Ad147* para usar as propriedades
- Mudando a configuração *Heatit ThermoFloor Ztemp2* para usar as propriedades
- Editando a imagem *Horstmann Secure SRT321* (recorte)
- Editando a imagem *Remotec ZXT-120* (recorte)
- Editando a imagem *Fibaro FGS 224* (recorte)
- Editando a imagem *Fibaro FGS 213* (recorte)
- Editando a imagem *Botão Fibaro* (recorte)

**Adições de configuração**

- Configuração adicionada *Querubini ORA ZRX* (propriedades : Obturador, Notificação)
- Adicionando a imagem *Querubini ORA ZRX*
- Configuração adicionada *Sirene Heiman HS2WD* (propriedades : Interruptor, bateria)
- Adicionando a imagem *Sirene Heiman HS2WD*
- Adicionando uma subpropriedade *Status de energia* na propriedade *Notificação*
- Adicionando uma propriedade *NodeNotification*

*Se você for afetado por uma modificação ou adição de configuração, faça uma sincronização e recarregue os comandos do equipamento "recriando todos os comandos" após a atualização.*

# 19/12/2022

**Conserta**

- Corrigir em alguns *atributos ausentes* na página de saúde em alguns nós para evitar erros (sem consequências) no *erro HTTP*

**Melhorias**

- Passagem de *IU do ZwaveJS* para versão *8.6.1*
- Adição do *gestão S2* (ZwaveJS UI tendo feito as mudanças esperadas)
- Adição de *tipo de segurança* na página *informações do nó*

**Alterações de configuração**

- Mudando a configuração *Sensor de CO Heiman* para usar as propriedades
- Mudando a configuração *Detector de Fumaça Heiman* para usar as propriedades
- Mudando a configuração *Domux sensor de CO* para usar as propriedades
- Mudando a configuração *Visão de segurança ZS5101* para usar as propriedades
- Mudando a configuração *HomeSeer Ez Motion* para usar as propriedades
- Mudando a configuração *Detector de Fumaça de Shenzhen* para usar as propriedades
- Mudando a configuração *Visão de segurança ZD2102* para usar as propriedades
- Editando a imagem *Visão de segurança ZD2102* (recorte)
- Mudando a configuração *Aeotec Range Extender 7* para usar as propriedades
- Mudando a configuração *Zipato ZD2102* para usar as propriedades
- Mudando a configuração *Estação Meteorológica Qubino* para usar as propriedades
- Mudando a configuração *Everspring ST814* para usar as propriedades
- Mudando a configuração *Hank HKZW-SO08* para usar as propriedades
- Mudando a configuração *Hank HKZW-SO01* para usar as propriedades
- Mudando a configuração *Hank HKZW-SCN01* para usar as propriedades
- Mudando a configuração *Philio PAT02-B* para usar as propriedades
- Editando a imagem *Philio PAT02-B* (recorte)
- Editando a imagem *Abuse do SHWM1000*

**Adições de configuração**

- Configuração adicionada *Medidor de Energia Zipato* (propriedades : Potência, energia, tensão, corrente)
- Imagem adicionada para *Medidor de Energia Zipato*
- Configuração adicionada *Airzone Aidoo Zwave* (propriedades : Temperatura, modo do termostato, ação do modo do termostato, modo do ventilador do termostato, ação do modo do ventilador do termostato, ponto de ajuste do termostato, notificação)
- Imagem adicionada para *Airzone Aidoo Zwave*
- Adicionando uma propriedade *Modo ventilador do termostato*
- Adicionando uma propriedade *Ação do modo ventilador do termostato*
- Adicionando uma propriedade *Direção*
- Adicionando uma propriedade *Velocidade*
- Adicionando uma propriedade *Chuva*
- Adicionando uma propriedade *Companhia*
- Adicionando uma subpropriedade *Movimento básico* na propriedade *Movimento*
- Adicionando uma subpropriedade *Poeira no dispositivo* na propriedade *Notificação*

*Se você for afetado por uma modificação ou adição de configuração, faça uma sincronização e recarregue os comandos do equipamento "recriando todos os comandos" após a atualização.*

# 15/12/2022

**Melhorias**

- Adicionado a capacidade de exibir *assistentes explicativos* na página de determinado equipamento (Teclado Zipato por exemplo para explicar o funcionamento dos códigos)

**Alterações de configuração**

- Mudando a configuração *Aetoec Nanomote Quad* para usar as propriedades
- Mudando a configuração *Fibaro Fgs211* para usar as propriedades
- Mudando a configuração *Obturador Fibaro fgwreu111 Walli* passando uma propriedade Shutter/level e passando poder e energia no endpoint 1
- Mudando a configuração *Teclado Zipato* para usar as propriedades
- Mudando a configuração *Teclado Schlage* para usar as propriedades

**Adições de configuração**

- Configuração adicionada *Zooz ZEN17* (propriedades : Switch)
- Imagem adicionada para *Zooz ZEN17*
- Configuração adicionada *Sensor de Inundação Abus* (propriedades : Inundação, Tamper, Bateria)
- Imagem adicionada para *Sensor de Inundação Abus*
- Adicionando uma propriedade *Código de usuário*

*Se você for afetado por uma modificação ou adição de configuração, faça uma sincronização e recarregue os comandos do equipamento "recriando todos os comandos" após a atualização.*

# 12/05/2022

**Melhorias**

- Adicionando uma guia *Gerenciamento NVM* na página da rede. Backup, download, envio e restauração
- Adicionando uma guia *Atualizar* em uma página de nó.
- Adição da versão de *SDKs* na página de informações de um controlador ou dos módulos levantando-o

**Alterações de configuração**

- Mudando a configuração *Cherubini Widom Smart Plug* para usar as propriedades
- Mudando a configuração *Medidor trifásico Qubino* para usar as propriedades
- Mudança de propriedade *Fator de potência* para opção *Produção*

**Adições de configuração**

- Configuração adicionada *Cherubini Widom Meta interruptor duplo* (propriedades : Interruptor, Cena Central)
- Imagem adicionada para *Cherubini Widom Meta interruptor duplo*
- Configuração adicionada *Cherubini Widom Meta com fio motor CONTR.7* (propriedades : Shutter)
- Imagem adicionada para *Cherubini Widom Meta com fio motor CONTR.7*

*Se você for afetado por uma modificação ou adição de configuração, faça uma sincronização e recarregue os comandos do equipamento "recriando todos os comandos" após a atualização.*

# 12/01/2022

**Melhorias**

- Gestão *comandos sem unidades* enquanto deveria (no retorno do zwaveJS) para não poluir o log

**Alterações de configuração**

- Mudando a configuração *Qubino ZMNHNDX Flush 1D* para usar as propriedades
- Mudando a configuração *Fibaro FGSS101 Fumaça* para usar as propriedades
- Mudando a configuração *Smarthome Everspring AN-179* para usar as propriedades
- Mudando a configuração *Aeotec ZWA009 AERQ* para usar as propriedades
- Mudando a configuração *Sirene popp ao ar livre* para usar as propriedades (parcialmente)
- Mudando a configuração *Aetoec ZWA080* para usar as propriedades (em parte) e adicionar controles de som (volume e som)
- Mudança de propriedade *Aquecer* com gerenciamento de casos de classe *SENSOR DE ALARME*
- Mudança de propriedade *Fumaça* com gerenciamento de casos de classe *SENSOR DE ALARME*
- Mudança de propriedade *Termostato de ponto de ajuste* para ter as instruções com o widget *botão* por padrão
- Editando a imagem *Sirene popp ao ar livre* recorte

**Adições de configuração**

- Configuração adicionada *Seguro Hortsmann SRT321* (propriedades : ThermostatMode, ThermostatOperatingState, ThermostatModeAction, ThermostatSetpoint, Temperatura, Bateria)
- Imagem adicionada para *Seguro Hortsmann SRT321*
- Configuração adicionada *Hoppe ConnectSense Bloqueio* (propriedades : Abertura, Sensor de Notificação, Inclinação, Bateria)
- Imagem adicionada para *Hoppe ConnectSense Bloqueio*
- Parâmetros adicionados para *Hoppe ConnectSense Bloqueio*

*Se você for afetado por uma modificação ou adição de configuração, faça uma sincronização e recarregue os comandos do equipamento "recriando todos os comandos" após a atualização.*

# 28/11/2022

**Conserta**

- Correção em *parâmetros de configuração* em ordem de *para evitar o envio de 0 em primeiro lugar* durante uma escolha do tipo lista (em um parâmetro que o propõe)

**Melhorias**

- Adição de um *RELANÇAR* necessário do motor *em caso de falha na exclusão*
- Exibição da mensagem referente ao *0 ordem* que no caso de um *nó iniciado*

**Alterações de configuração**

- Mudando a configuração *Aeotec TriSensor* para usar as propriedades
- Mudando a configuração *Hank HKZW-MS02* para usar as propriedades
- Mudando a configuração *Philio PSM02* para usar as propriedades
- Mudando a configuração *Everspring AN158* para usar as propriedades
- Mudando a configuração *Sensor de ambiente Danfoss* para usar as propriedades
- Mudando a configuração *Choque e Vibração Vision ZS* para usar as propriedades
- Mudando a configuração *Controlador Fibaro Walli* para usar as propriedades
- Mudando a configuração *Fibaro FGD211* para usar as propriedades
- Mudando a configuração *Plugue Fibaro Reino Unido* para usar as propriedades
- Mudando a configuração *Fibaro Walli Outlet F* para usar as propriedades
- Mudando a configuração *Fibaro Walli Dimmer* para usar as propriedades
- Mudando a configuração *Fibaro RGBW441* para usar a propriedade *efeitos fibaro*
- Mudança de propriedade *Luminância* com adição de um modo em %
- Mudança de propriedade *Termostato de ponto de ajuste* para ter as instruções com o widget *botão* por padrão
- Mudança de propriedade *Cor* com adição de um tipo *efeitos fibaro* (para parar de descrever os comandos)
- Adição de um *configuração recomendada* para o *Philio PST02*

*Se você for afetado por uma modificação ou adição de configuração, faça uma sincronização e recarregue os comandos do equipamento "recriando todos os comandos" após a atualização.*

# 25/11/2022

**Melhorias**

- Adição de um *Gerenciamento de versão da interface do usuário do ZwaveJS*
- Adição de uma mensagem no *centro de mensagens* e na página do plugin quando ZwaveJS UI *precisa ser atualizado*
- Passagem do *Versão da IU do ZwaveJS* para versão *8.5.1*

**Alterações de configuração**

- Alterar configurações para *Plugue Inteligente Hank (HKZW-SO08)* (problema de exibição)

*Se você for afetado por uma modificação ou adição de configuração, faça uma sincronização e recarregue os comandos do equipamento "recriando todos os comandos" após a atualização.*

# 23/11/2022

**Melhorias**

- Adição de um visual para um *parâmetro ou ativação* pendente
- Adição de uma página que permite ver todas as *definições* pendente
- Adição de uma página webapp que permite ver todos os *definições* pendente
- Adição de um botão de exclusão na página *Pendente*. Permite deletar uma linha em espera. Isto não apaga a ordem que foi enviada para o controlador mas apenas a informação pendente no Jeedom (útil para parâmetros de calibração por exemplo que nunca levam o valor enviado ou qualquer outro parâmetro onde seria inútil)


**Alterações de configuração**

- Mudando a configuração *Bloqueio Popp Strike* para usar a propriedade de abertura (para o contato)
- Mudando a configuração *Fibaro FGD212* para adicionar gerenciamento de diferença do firmware 3.5 (endpoint 1 no firmware <= 3.4 endpoint 0 no alvo apenas caso contrário)
- Mudança de propriedade *Fechadura da porta* para adicionar desbloqueio (com tempo limite) em todos os dispositivos usando esta propriedade

**Adições de configuração**

- Configuração adicionada *Plugue Inteligente Hank (HKZW-SO08)* (propriedades : Interruptor, Potência, Energia, Tensão, Atual, Cena)
- Configuração adicionada *Idinio pedal dimmer* (propriedades : Multinível, Potência, Energia)
- Parâmetros adicionados para *Plugue Inteligente Hank (HKZW-SO08)*

*Se você for afetado por uma modificação ou adição de configuração, faça uma sincronização e recarregue os comandos do equipamento "recriando todos os comandos" após a atualização.*

# 21/11/2022

**Conserta**

- Mudança no *redes gráficas* : apenas as primeiras rotas diretas ficarão vermelhas ao passar o mouse sobre um nó para evitar o erro em determinadas instalações e determinados navegadores *Tamanho máximo da pilha excedido* relacionado a recursões

**Melhorias**

- Para levar em consideração *atualizarNodeCC* como uma propriedade de um comando criado manualmente para atualizar um CC
- Adição de um *rolagem horizontal* na rede modal/aba *tabela de roteamento* (obrigado @Salvialf)
- Deslocamento de *contador de pedidos* no lado direito da página do equipamento

**Alterações de configuração**

- Mudando a configuração *Fibaro FGR223* para usar o poder da classe multinível
- Mudando a configuração *Fibaro FGR222* para usar o poder da classe multinível
- Mudando a configuração *Fibaro FGRM222* para usar o poder da classe multinível
- Mudando a configuração *Devolo Mt02648* para usar propriedades e adicionar configurações recomendadas
- Mudando a configuração *Devolo Mt02647* para usar propriedades e adicionar configurações recomendadas
- Mudando a configuração *Bloqueio Popp Strike* para usar as propriedades
- Mudando a configuração *Aeotec ZWA011* para usar as propriedades e adicionar sua imagem

*Se você for afetado por uma modificação ou adição de configuração, faça uma sincronização e recarregue os comandos do equipamento "recriando todos os comandos" após a atualização.*

# 18/11/2022

**Melhorias**

- Adicionado acesso à interface de interface do usuário do ZwaveJS *(no menu Rede Z-Wave, guia Ações)*. Não o use para alterar as configurações!
- Adição de uma porta para o caso particular de alguns Raspberry Pi *(mais serão adicionados conforme necessário)*
- Adicionado um contador de comando para cada equipamento *(ignorando os 4 comandos técnicos)*
- Adicionada ajuda dinâmica no caso de comandos zero.

# 15/11/2022

- Mudar para a versão estável

# 04/05/2022

- Beta 1ª fase
