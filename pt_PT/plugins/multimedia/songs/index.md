# Sound Plugin

Esse plug-in possibilita interceptar determinadas solicitações TTS (passando pelo jeedom do Tedom e somente essa) e substituí-lo pelo som de sua escolha.

# Configuration

Este plugin não requer nenhuma configuração específica.

# Adicionando som

Apenas em Plugins -> Multimídia -> Sons clique em adicionar e :

- Nome do som : nome do som para fácil recuperação
- ID : identificador de som, é aconselhável colocar apenas letras ou números aqui. Esse identificador deve ser usado na solicitação TTS
- Sons : seu som para reproduzir (o arquivo deve estar em mp3, no máximo 50m)

# Utilisation

Depois que seu som for adicionado para usá-lo, você deverá inserir a mensagem TTS #id# (id é o identificador do som criado acima)
