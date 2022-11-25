# Changelog Z-Wave JS

>**IMPORTANTE**
>
>Se não houver informação sobre a atualização, significa que se trata apenas da atualização da documentação, tradução ou texto.

# 25/11/2022

**Melhorias**

- Adição de um *Gerenciamento de versão da interface do usuário do ZwaveJS*
- Adição de uma mensagem no *centro de mensagens* e na página do plugin quando ZwaveJS UI *precisa ser atualizado*
- Passagem do *Versão da IU do ZwaveJS* para versão *8.5.1* 

**Alterações de configuração**

- Alterar configurações para *Plugue Inteligente Hank (HKZW-SO08)* (problema de exibição)

*Se você for afetado por uma alteração ou adição de configuração, recarregue os comandos do equipamento "recriando todos os comandos" após a atualização.*

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

*Se você for afetado por uma alteração ou adição de configuração, recarregue os comandos do equipamento "recriando todos os comandos" após a atualização.*

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

*Se você for afetado por uma de suas configurações, recarregue os comandos do equipamento "recriando todos os comandos" após a atualização.*

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
