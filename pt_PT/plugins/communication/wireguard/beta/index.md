# Plugin Wireguard

Este plugin permite que você conecte Jeedom a um servidor Wireguard.

Ele também pode ser usado pelo serviço Jeedom DNS para substituir o **Openvpn plugin** para acessar seu Jeedom da internet.

# Configuration

## Configuração do plugin

Uma vez que o plugin foi baixado e ativado, você deve se certificar de que as dependências estão instaladas corretamente na página de configuração geral.

## Configuração do cliente

Os clientes Wireguard podem ser acessados a partir do menu **Plugins → Comunicação → Wireguard**.

Clique em um dispositivo para acessar sua página de configuração :

- **Nome do cliente Wireguard** : nome do seu equipamento Wireguard.
- **Objeto pai** : indica o objeto pai ao qual o equipamento pertence.
- **Categoria** : categorias de equipamentos *(pode pertencer a várias categorias)*.
- **Ativar** : permite tornar o equipamento ativo.
- **Visível** : permite tornar o equipamento visível no painel.

Se você apenas usar o **Plugin Wireguard** para se conectar ao Jeedom DNS, basta ir para a configuração geral do Jeedom (**Configurações → Sistema → Configuração**), aba **Redes**. Selecione **Wireguard** no menu suspenso do jogo **Gerenciamento de mercado de DNS** então **Iniciar / reiniciar** Conexão VPN.

>**EM FORMAÇÃO**
>
>Com relação ao acesso ao Jeedom DNS, você não tem mais nada a fazer em seu nível. O plugin se encarregará automaticamente de criar o equipamento, gerar a configuração do túnel VPN e então iniciar o serviço.

Se você deseja configurar o acesso a um servidor Wireguard pessoal, aqui está a lista de configurações do cliente disponíveis no plugin :

- **[Interface]** :
    - **Endereço** (`Address`) : Endereço da interface do cliente Wireguard.
    - **Chave privada** (`PrivateKey`) : Chave privada do cliente Wireguard.
    - **Post-Up** (`PostUp`) : comandos a serem executados ao iniciar a interface do cliente Wireguard *(facultatif)*.
    - **Post-Down** (`PostDown`) : comandos a serem executados quando a interface do cliente Wireguard for interrompida *(facultatif)*.

>**TRUQUE**
>
>Você pode usar a tag ``#interface#`` nos campos **Post-Up** e **Post-Down** para recuperar o nome da interface usada pelo cliente Wireguard.

- **[Par]** :
    - **Chave pública** (`PublicKey`) : Chave pública do servidor Wireguard.
    - **Ponto final** (`Endpoint`) : endereço IP público do servidor : porta de escuta *(ip:port)*.
    - **IPs autorizados** (`AllowedIPs`) : lista de endereços IP autorizados.
    - **Chave Pré-Compartilhada** (`PresharedKey`) : Chave Pré-Compartilhada *(facultatif)*.
    - **Mantenha a conexão** (`PersistentKeepalive`) : atraso de verificação de link em segundos *(facultatif)*.

>**IMPORTANTE**
>
>Apenas o suporte relacionado ao acesso Jeedom DNS é fornecido pela equipe.

# Commandes

Ao clicar na guia **Pedidos**, você encontrará a lista de pedidos de clientes Wireguard :

- **Ativo** : Estado da interface do cliente Wireguard.
- **IP** : Endereço IP da interface do cliente Wireguard.
- **Iniciado** : Status de conexão do servidor Wireguard.
- **Para iniciar** : inicia a interface do cliente Wireguard.
- **Pare** : permite parar a interface do cliente Wireguard.

>**EM FORMAÇÃO**
>
>O Jeedom verificará a cada 5 minutos se a VPN foi iniciada ou interrompida e agirá de acordo se não for.
