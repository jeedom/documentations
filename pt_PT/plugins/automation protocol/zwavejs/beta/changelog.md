# Changelog Z-Wave JS

>**IMPORTANTE**
>
>Se não houver informação sobre a atualização, significa que se trata apenas da atualização da documentação, tradução ou texto.

# XX/12/2022

**Melhorias**

- Adicionando uma guia *Gerenciamento NVM* na página da rede. Backup, download, envio e restauração
- Adicionando uma guia *Atualizar* em uma página de nó.
- Adição da versão do *SDKs* na página de informações de um controlador.

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
