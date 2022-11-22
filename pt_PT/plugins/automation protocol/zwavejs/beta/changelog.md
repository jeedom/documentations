# Changelog Z-Wave JS

>**IMPORTANTE**
>
>Se não houver informação sobre a atualização, significa que se trata apenas da atualização da documentação, tradução ou texto.

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
