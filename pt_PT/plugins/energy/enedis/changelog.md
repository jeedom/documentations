# Changelog Enedis

>**IMPORTANTE**
>
>Como lembrete, se não houver informações sobre a atualização, isso significa que se trata apenas da atualização da documentação, tradução ou texto.

# 05/01/2022

- Corrigido um bug na coleta de dados em 1º de janeiro
- Adição de um indicador no widget para saber se os dados estão atualizados *(verde = OK, vermelho = KO, laranja = alguns dados KO)*

# 03/06/2021

- Correção para evitar que a programação automática seja interrompida em casos raros

# 18/05/2021

- Implementação de um sistema de autoprogramação
- Possibilidade de integração de histórias sob demanda
- Melhor processamento e integração de dados
- Reorganização de definições de configuração, arquivos e documentação

# 18/02/2021

- Adicionado gerenciamento de dependência para confirmar a presença de `php-mbstring` ausente em algumas instalações
- Novo ícone de plugin mais alinhado com as prerrogativas da Enedis

# 01/02/2021

- Reescrita completa do plugin que agora usa a API Enedis Data-Connect
- Adicionando o comando **Potência máxima / dia**
- Possibilidade de recuperar consumo, produção ou ambas as medições ao mesmo tempo
- Geração automática de históricos dos últimos 3 anos ao criar pedidos
- Reescrever os modelos de painel e widget móvel
- Adicionada a possibilidade de escolher a cor de fundo do template do widget *(ou transparente)*
- Reescrever documentação

# 10/09/2020

- Corrigido um bug de exibição na visualização móvel sem o modelo de widget.

# 09/06/2020

- Adição do modelo para a versão do painel.
- Adição do modelo para versão móvel.
- Otimização do número de chamadas para servidores Enedis.

# 21/08/2020

- Recuperação de informações em um minuto aleatório para não sobrecarregar os servidores Enedis.

# 17/08/2020

- Mudando para estável.

# 12/08/2020

- Provisão do plugin na versão beta.
