# Redes de plugins

Este plug-in permite executar ping ou wake-on-lan em equipamentos de rede.

# Configuração do plugin

Após baixar o plugin, basta ativá-lo e instalar as dependências, não há configuração neste nível.

# Configuração do equipamento

A configuração do equipamento de rede pode ser acessada no menu do plugin :

![networks2](../images/networks2.PNG)

Aqui você encontra toda a configuração do seu equipamento :

- **Nome do equipamento** : nome do seu equipamento de rede,
- **Objeto pai** : indica o objeto pai ao qual o equipamento pertence,
- **Categoria** : categorias de equipamentos (pode pertencer a várias categorias),
- **Ativar** : torna seu equipamento ativo,
- **Visivél** : torna seu equipamento visível no painel,
- **Endereço IP** : Endereço IP para executar ping,
- **Endereço MAC (wol)** : Endereço MAC para wake-on-lan,
- **IP de transmissão (wol)** : endereço IP de broadcast da rede para enviar wake-on-lan,
- **Método Ping** : Escolha do método ping : *PI* (normal), *ARP* (preferido para smartphones e dispositivos que adormecem), *Porta* (para testar se uma porta está aberta)
- **Tempo esgotado**: Tempo limite de uma solicitação, em segundos. Observe que isso não significa que a solicitação necessariamente aguardará o fim do tempo limite; se uma resposta negativa chegar antes do tempo limite, ela continuará sendo uma resposta válida;.
- **Máximo de tentativas em caso de falha**: Número máximo entre 1 e 10 tentativas em caso de falha. Se for bem-sucedido, o plugin será interrompido imediatamente.
- **TTL** : Somente se o método *PI*. Tempo de vida útil, os valores podem ser :
  - 0 : mesmo host
  - 1 : mesmas sub-redes
  - 32 : mesmo site
  - 64 : mesma região
  - 128 : mesmo continente
  - 256 : sem limite
    Se você tiver um erro "Tempo de vida excedido", aumente esse valor. Se vazio, o parâmetro é 255. Observe que em algumas configurações (Docker, por exemplo), o 255 não está autorizado, portanto, é necessário diminuir esse valor.
- **Porta** : Porta para executar ping se você estiver no modo ping em uma porta (exemplo : 8080 para 192.168.0.12:8080),
- **Atualização automática (cron)** : cron definindo a frequência do ping,

> **NOTA**
>
> O Jeedom irá verificar o ping do IP a cada minuto (padrão).

> **IMPORTANTE**
>
> Se você não digitar o endereço MAC e de transmissão, não terá um comando wake-on-lan.

> **NOTA**
>
> O endereço MAC deve estar no formato : 5E:FF:56:A2:AF:15
