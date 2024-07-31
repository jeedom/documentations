# Plug-in LNS

## Description

Este plugin permite que você instale e configure um Chirpstack V3 na caixa Jeedom.

## Fonctionnement
1- Inicie dependências - para instalar os pacotes necessários.

2- A porta padrão é 8081. É possível alterá-lo através da interface do plugin LNS.

3- Importe a configuração do MQTT2 - desde que os quatro campos endereço IP do corretor, porta do corretor, identificador de conexão e senha do MQTT não sejam preenchidos, as dependências do MQTT2 ainda estarão sendo instaladas.

4- Instale o Gateway Bridge (opcional) - marque e salve se a instalação do Gateway Bridge é necessária.

5- Modifique a configuração do CS - uma vez preenchidos os quatro campos, você pode modificar os arquivos de configuração.

6- Verifique o status dos serviços.

7- Abra o Chirpstack.

8- Criação automática no CS - insira os identificadores CS para criar no Chirpstack o Servidor de Rede, Perfil de Serviço, Gateway, Perfil de Dispositivo (classe A e classe C).
