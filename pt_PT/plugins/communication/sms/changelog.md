# Changelog SMS

>**IMPORTANTE**
>
>Como lembrete, se não houver informações sobre a atualização, isso significa que se trata apenas da atualização da documentação, tradução ou texto

## 08/09/2024

- Correção no recebimento de SMS

## 31/08/2024

- Compatibilidade com Debian 12
- Versão mínima do jeedom necessária: 4.4.8

# 01/10/2024

- Adicionado um novo comando **Enviar mensagem para** permitindo-lhe enviar um SMS para um número personalizado sem ter de criar a ordem do contacto. Isso permite que você envie um sms para um número obtido por meio de um comando info de outro dispositivo no Jeedom, por exemplo. Atenção, nenhuma verificação do número é realizada, você deve fornecer os números em formato internacional.
- Desactivar o controlo de fluxo ao ligar ao modem para evitar problemas com determinados modems (por exemplo modem lixee)
- Adicionadas duas novas opções: **Permitir mensagens de números desconhecidos** & **Adicionar números desconhecidos automaticamente**; ver documentos.
- Corrige um problema com algumas chaves gsm retornando caracteres incorretos ao iniciar o daemon.

# 18/10/2022

- Atualizar lista de comandos para Jeedom v4.3

# 20/07/2022

- Migrando daemon para python3

# 17/11/2020

- Otimizações gerais
- Nova apresentação da lista de objetos
- Adição da tag "compatibilidade V4"

# 25/09/2019

- Mudando para a interface jeedom v4

# 11/08/2019

- Suporte para PHP 7.3

# 18/10/2018

- Verificação aprimorada do número do remetente
- Correção de um erro se o nível de log for nenhum

# 26/04/2018

- Atualização da documentação

# 25/04/2018

- Link de documentação fixo
