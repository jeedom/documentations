# Changelog jeeZigbee

>**IMPORTANTE**
>
>Se não houver informação sobre a atualização, significa que se trata apenas da atualização da documentação, tradução ou texto.

# 12/05/2023

- Suporte para atualização de firmware zigbee no Luna (beta)
- Suporte para ID lógico longo em comandos
- Possibilidade de criar um comando de atualização (você deve adicionar um comando e digitar action/default e no campo id lógico colocar atualização)
- Possibilidade de adicionar um cron que solicite a atualização dos valores (atenção, nada garante que o módulo realmente os atualizará, deve suportá-lo)
- Corrigido um bug com a versão mais recente do zigbee2mqtt


# 11/06/2023

- Corrigido um bug no gerenciamento de grupo
- Otimização de código
- Corrigidos bugs durante a instalação do plugin (erro 500)

# 22/09/2023

- Possibilidade de escolher a versão do zigbee2mqtt

>**IMPORTANTE**
>
>Para aqueles que estão tendo problemas com um módulo inacessível após a atualização anterior, você deve restaurar um backup do Jeedom anterior à atualização e refazer a atualização. Peço desculpas sinceramente por esse bug que ocorre com alguns de vocês, ele vem de uma função inesperada do zigbee2mqtt que não tenho em meus diferentes laboratórios.

# 20/09/2023

- Corrigido um bug na versão zigbee2mqtt

# 19/09/2023

- Corrigido um bug ao atualizar dependências (zigbee2mqtt) se você restaurasse o jeedom

# 08/09/2023

- Corrigido um bug que impedia a criação correta de pedidos

# 09/04/2023

- Capacidade de configurar a porta de escuta do zigbee2mqtt
- Corrigido um problema com comandos de tipo de cor
- Correção na geração de comandos que não funcionavam em determinados casos
- Nomenclatura de comando aprimorada
- Possibilidade de caixas atlas ou controladores do tipo Elelabs atualizarem o firmware do jeedom

# 03/07/2023

- Corrigido um problema ao enviar um comando de posicionamento (tipo de obturador)

# 27/06/2023

- Corrigido um problema com a detecção de certos módulos (incluindo profalux)

# 30/05/2023

- Versão inicial
