# Registro de alterações do ModBus

>**IMPORTANTE**
>
>Relembramos que, se não houver informação sobre a atualização, significa que se trata apenas de atualização de documentação, tradução ou texto.


# 11/08/2024

- Corrigir vazamento de memória do Python3

# 30/07/2024

- Adicionando registro na mensagem EcritureBit

# 26/07/2024

- Adicionado novo método para alterar bits em um registrador (veja o documento)
- Adicionado na configuração do plugin : Escolha do nível de log da biblioteca Modbus


# 18/07/2024

- Adicionando formato String
- Melhor precisão dos formatos de dados no seletor


# 26/03/2024

- Correção de atualização para versão específica do pymodbus

# 29/05/2023

FAÇA BACKUP DO JEEDOM ANTES DE INSTALAR O NOVO BETA.
- Escreva 1 bit
- Pedidos de importação/exportação via Xlsx
- Nova operação de sintaxe no comando (consulte o documento)
- Fixs

# 15/05/2023

- Novas configurações de comando da interface do usuário
- Valores de otimizações de conversão
- Parâmetro de Retorno Hexadecimal

# 03/04/2023

- Novas configurações de comando da interface do usuário
- Parâmetro ArrayRegistres para escrever consecutivamente a partir de um registro inicial

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
