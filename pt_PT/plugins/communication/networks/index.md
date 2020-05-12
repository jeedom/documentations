# Redes de plugins

Este plug-in permite executar ping ou wake-on-lan em equipamentos de rede.

# Configuração do plugin 

Depois de baixar o plugin, você só precisa ativá-lo, não há configuração neste nível.

![networks](../images/networks.PNG)

# Configuração do equipamento 

A configuração do equipamento de rede pode ser acessada no menu do plugin :

![networks2](../images/networks2.PNG)

É assim que a página do plug-in Networks se parece (aqui com um dispositivo já) :

![networks3](../images/networks3.PNG)

Depois de clicar em um deles, você obtém :

![networks4](../images/networks4.PNG)

Aqui você encontra toda a configuração do seu equipamento :

-   **Nome de l'équipement Networks** : nome do seu equipamento de rede,
-   **Objeto pai** : indica o objeto pai ao qual o equipamento pertence,
-   **Categoria** : categorias de equipamentos (pode pertencer a várias categorias),
-   **Ativar** : torna seu equipamento ativo,
-   **Visivél** : torna seu equipamento visível no painel,
-   **Endereço IP** : Endereço IP para executar ping,
-   **Endereço MAC (wol)** : Endereço MAC para wake-on-lan,
-   **IP de transmissão (wol)** : endereço IP de broadcast da rede para enviar wake-on-lan,
-   **Método Ping** : Escolha do método ping : IP (normal), ARP (preferível para telefones ou periféricos que adormecem), PORT (para testar se uma porta está aberta)
-   **TTL** : Tempo de vida útil, os valores podem ser : 
    - 0 : mesmo host
    - 1 : mesmas sub-redes
    - 32 : mesmo site
    - 64 : mesma região
    - 128 : mesmo continente
    - 256 : sem limite
    Se você tiver um erro "Tempo de vida excedido", aumente esse valor. Se vazio, o parâmetro é 255. Observe que em algumas configurações (Docker, por exemplo), o 255 não está autorizado, portanto, é necessário diminuir esse valor.
-   **Porta** : Porta para executar ping se você estiver no modo ping em uma porta (exemplo : 8080 para 192.168.0.12:8080),
-   **Atualização automática (cron)** : cron definindo a frequência do ping,

Abaixo você encontra a lista de pedidos :

-   **Nome** : o nome exibido no painel,
-   **Display** : permite exibir os dados no painel,
-   **Teste** : permite testar o comando.

> **NOTA**
>
> O Jeedom irá verificar o ping do IP a cada minuto (padrão).

> **IMPORTANTE**
>
> Se você não digitar o endereço MAC e de transmissão, não terá um comando wake-on-lan.

> **NOTA**
>
> O endereço MAC deve estar no formato : 5E:FF:56:A2:AF:15
