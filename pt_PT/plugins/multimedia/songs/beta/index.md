# Sound Plugin

Esse plug-in possibilita interceptar determinadas solicitações TTS (passando pelo jeedom do Tedom e somente essa) e substituí-lo pelo som de sua escolha.

# Configuration

Este plugin não requer nenhuma configuração específica.

# Adicionando som

Você só precisa acessar Plugins → Multimídia → Sons para clicar **Adicionar** então :

- **Nome do som** : nome do som para fácil recuperação.
- **ID* : identificador de som, é aconselhável colocar apenas letras ou números aqui. Esse identificador deve ser usado na solicitação TTS.
- **Sons** : Envie o som para tocar (a extensão do arquivo deve estar em ``mp3``, Máximo de 50 MB).

# Utilisation

Depois que seu som é adicionado, você pode colocar a mensagem TTS ``#id#`` *(id sendo o identificador do som criado anteriormente)*.
