# Broadlink

Plugin para interface com equipamentos de banda larga

# Configuração do plugin

Após instalar o plugin, ele deve ser ativado e garantir a correta instalação das dependências.

> **IMPORTANTE**
>
> Não é recomendado mudar a porta

# Inclusão de equipamentos

Vá para o menu Plugins => Protocolo de automação residencial => Broadlink. Uma vez na página, clique em MODO DE INCLUSÃO. Logicamente, todos os produtos Broadlink em sua rede serão reconhecidos.

# Configuração do equipamento

Selecione um dos seus equipamentos. Se estes forem produtos do tipo infravermelho, um botão de comando para aprender aparece na parte superior. Basta clicar nele, então você tem 5 segundos para aprender um comando infravermelho ou 433 para o seu broadlink. Em seguida, o plugin confirmará o sucesso da operação e criará o comando associado que você simplesmente precisa nomear.

> **Dica**
>
> Para evitar aprender o que pode vir do ambiente (controle remoto de um vizinho ou outro), o broadlink em modo de aprendizagem VOLUNTARIAMENTE se coloca em um nível de recepção muito baixo, portanto, você deve estar MUITO perto do broadlink para aprender um comando especialmente se é um comando de 433Mhz.

# Synchroniser

Na aba Comandos de um equipamento você encontra o botão Sincronizar. Se você tiver vários links, você pode transferir os comandos aprendidos de um link para outro.

> **Dica**
>
> Funciona de um rm-pro a um mini ou vice-versa.

Você pode escolher os pedidos a serem transferidos, bem como os links para os quais deseja transferi-los. (O nome do comando será obviamente convertido (TV ON, fan off, etc.)

> **Dica**
>
> Se você adicionou seu dispositivo manualmente porque não foi detectado automaticamente. O MAC a ser inserido é o endereço MAC reverso em pacotes de dois em minúsculas sem o : exemplo AA:BB:CC:DD:EE torna-se eeddccbbaa
