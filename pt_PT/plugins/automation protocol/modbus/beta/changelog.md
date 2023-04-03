# Registro de alterações do ModBus

>**IMPORTANTE**
>
>Relembramos que, se não houver informação sobre a atualização, significa que se trata apenas de atualização de documentação, tradução ou texto.

# 03/04/2023

- Novas configurações de comando da interface do usuário
- Parâmetro ArrayRegistres para escrever consecutivamente a partir de um registro inicial
 FAÇA UM BACKUP DO JEEDOM antes de testar este beta. As configurações do plug-in Commands são longas e tediosas, recomenda-se ter um backup em caso de problema de atualização de versão.

# 10/01/2023
- Corrigir pacotes de importação para python 3.9

# 13/10/2022
- Opção Ativar/Desativar Mensagem de Gravação
- Opção nbBytes para determinar a divisão de um registro em x bytes

# 10/07/2022
- Novo sistema de modelo pré-gravado
- Opção ReadMultiRegisters nos comandos

# 26/09/2022
- Novo parâmetro de tempo limite entre o registro de leitura

# 23/09/2022
- Biblioteca pyModbus de logs de alterações

# 16/08/2022
- Escolha da porta para Modbus TCP (por padrão 502)

# 01/08/2022
- BugFix na desconexão de um dispositivo no mesmo barramento

# 02/05/2022
- Função Exportando um arquivo Json e Importando pedidos por Equipamento

# 20/03/2022
- Função Fc16 Registrador não seguido

# 14/02/2022
- Função Fc16 para PLCs sem Fc6

# 02/03/2022
- Versão beta, compatível com 4.2.7
