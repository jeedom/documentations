# Changelog Zigbee

>**IMPORTANTE**
>
>Como lembrete, se não houver informações sobre a atualização, isso significa que se trata apenas da atualização da documentação, tradução ou texto.

>**IMPORTANTE**
>
>Para conhecer o novo módulo compatível você tem que ir [a](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=zigbee) (é classificado pela data de adição / modificação)

>**IMPORTANTE**
>
>Para aproveitar as vantagens da integração do módulo mais recente, não hesite em atualizar as dependências

- Corrigido um problema ao solicitar uma atualização de mais de 7 valores de atributo, obrigado @kaktusatomik
- Adicionado novo equipamento (obrigado @ cstan77)

# 02/12/2021

- Adição de novos equipamentos
- Correção de um problema no "Relatório de configuração" dos módulos

# 22/11/2021

- Otimização da velocidade de carregamento das páginas do plugin
- Adição de novos equipamentos
- Atualize as dependências automaticamente ao atualizar o plugin


# 11/07/2021

- Adição de novos equipamentos
- Correção de um bug nos módulos de persianas enroláveis Tuya

# 25/10/2021

- Adicionando nova configuração
- Possibilidade de definir um cron para forçar a atualização dos atributos (tenha cuidado para não colocar nada pois pode quebrar todas as suas redes zigbee)
- Correção de bug
- Adição do número de vizinhos na página do gráfico zigbee ao pairar

# 19/09/2021

- Bugfix

# 15/09/2021

- Corrigido um bug na inclusão
- Níveis de registro aprimorados
- Adição de novos módulos

>**IMPORTANTE**
>
>É ABSOLUTAMENTE necessário lançar uma instalação de dependências mesmo que esteja OK (estamos trabalhando no jeedom 4.2 tem que ser automaticamente, mas no momento você tem que iniciá-los manualmente)

# 09/03/2021

- Corrigido um problema com a criação de grupos em alguns casos
- Exibição de lista de grupo fixa

# 27/08/2021

- Problema corrigido com firmware Nodon
- Correção do erro "\_ext_pan_id" devido a uma atualização do código Zigpy com as chaves Deconz

>**IMPORTANTE**
>
>Após esta atualização é ABSOLUTAMENTE necessário atualizar as dependências do plugin mesmo que ele diga que está tudo OK

# 23/08/2021

- Exclusão do arquivo de atualização OTA para módulos Nodon a seu pedido
- Adição de novos módulos 
- Corrigido um problema com a configuração das configurações de lâmpadas Hue

# 17/08/2021

- Correção de um problema de relatório nos clusters AnalogInput e AnalogInput
- Suporte completo para monitor de qualidade do ar Xiaomi Aqara TVOC
- Adição de muitos módulos

# 06/08/2021

- Corrigido um bug no gerenciamento de grupo

# 02/08/2021

- Adição de novo módulo compatível
- Adição de um botão para deletar todos os dados de um daemon (veja a documentação)
- Corrigido um bug no gerenciamento de grupo quando várias chaves zigbee


# 01/07/2021

- Adição de novo módulo compatível
- Otimização das configurações existentes no gerenciamento de repetições

# 09/06/2021

- Mudança da fonte de atualização OTA para Ikea (mudar para o ramo estável)
- Adição de novo módulo compatível
- Correção de bug

# 18/05/2021

- O suporte GreenPower em beta para chaves do tipo EZSP (Elelabs, Popp ...), requer o reinício da instalação de dependências
- Adição de novo módulo compatível
- Correção de bug

# 03/05/2021

- Atualização de documentação
- Bugfix
- Integração de novos módulos
- Otimização de imagens do módulo

# 29/04/2021

- Integração de novos módulos
- Otimização de imagens do módulo

# 21/04/2021

- Integração de novos módulos
- Suporte para vinculação *(entre grupos ou módulos)*
- Reformulação da documentação
- Bugfix

# 07/04/2021

- Corrigido um problema no botão para forçar a atualização OTA de certos módulos

# 06/04/2021

- Mudando para estável

# 25/09/2020

- 1º lançamento em beta
