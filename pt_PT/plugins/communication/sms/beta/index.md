# Plugin de SMS

O plugin SMS permite que você interaja com o Jeedom via SMS. Também permite que a Jeedom envie um SMS em caso de alerta (plugin de alarme, cenário, etc).

> **IMPORTANTE**
>
> Para interagir com Jeedom, você deve ter configurado interações.

# Configuração do plugin

Depois de baixar o plugin, basta ativá-lo e configurar a porta. Depois de salvar o demônio deve lançar.
O plugin já está configurado por padrão, então você não precisa fazer mais nada. No entanto, você pode modificar esta configuração, aqui está o detalhe :

- **Porta SMS** : a porta USB na qual sua chave GSM está conectada (por exemplo, pode ser /dev/ttyUSB0, para vê-la basta executar `dmesg` e conectar o modem).

> **DICA**
>
> Se você não souber qual porta USB é usada, basta indicar "Auto". Observe que o modo automático só funciona com chaves Huawei E220.

> **IMPORTANTE**
>
> Observe que algumas teclas 3G estão no modo de modem por padrão e não GSM. Você deve, usando o software do fabricante da chave, alterar o modo da chave para GSM (ou texto ou serial).

- **Velocidade de comunicação** : as chaves recentes funcionam a 115200 baud. Você tem a opção de mudar para 9600 baud no caso de seu equipamento exigir.
- **Código PIN** : Permite indicar o código PIN do cartão SIM e deixar em branco se você não tiver um.
- **Modo de texto** : Modo de compatibilidade estendida, para ser usado apenas se o envio e / ou recebimento de mensagens não funcionar.
- **Cortar mensagens por pacote de caracteres** : Indica o número máximo de caracteres por mensagem de texto.
- **Gateway SMS / SMS (modificar em caso de erro : Número SMSC do CMS 330 não definido)** : Só mude se você tiver o erro `CMS 330 SMSC number not set`, neste caso você deve indicar o número do gateway SMS da sua operadora de telefonia.
- **Intensidade do sinal** : Força do sinal da sua chave GSM.
- **Rede** : Rede telefônica da sua chave GSM (pode ser "Nenhuma" se a Jeedom não puder recuperá-la).
- **Porta de soquete interno (modificação perigosa)** : permite modificar a porta de comunicação interna do daemon.
- **Ciclo (s))** : ciclo de varredura de daemon para enviar e receber SMS. Um número muito baixo pode levar à instabilidade.

# Configuração do equipamento

A configuração dos dispositivos SMS pode ser acessada no menu Plug-ins → Comunicação.

Aqui você encontra toda a configuração do seu equipamento :

- **Nome do equipamento** : nome do seu equipamento SMS.
- **Objeto pai** : indica o objeto pai ao qual o equipamento pertence.
- **Ativar** : torna seu equipamento ativo.
- **Visivél** : torna seu equipamento visível no painel.

Abaixo você encontra alguns parâmetros específicos:

- **Desativar interações**: permite-lhe proibir interacções para todos os números deste equipamento (se quiser proibir interacções para determinados números e não para outros, pode criar vários equipamentos)
- **Permitir mensagens de números desconhecidos**: Permite aceitar mensagens de números desconhecidos. A mensagem recebida bem como o número do remetente estarão disponíveis através dos comandos como para qualquer outra mensagem. As interações estão sempre desativadas para esses números
- **Adicionar números desconhecidos**: permite adicionar automaticamente o número à lista de pedidos (portanto para criar um novo pedido) ao receber uma mensagem de um número desconhecido

> **AVISO**
>
> Esta opção pode ser perigosa porque irá adicionar automaticamente um comando correspondente ao número ao receber uma mensagem de um número desconhecido.
> Se no mesmo equipamento você ativar interações, isso significa que qualquer pessoa pode começar a interagir com seu Jeedom.
> Ative esta opção somente se você tiver certeza de aceitar esse risco.

## As ordens

- **Nome** : o nome exibido no painel.
- **Usuário** : usuário correspondente no Jeedom (permite restringir certas interações a determinados usuários).
- **Número** : número de telefone para o qual enviar mensagens. Você pode colocar vários números, separando-os com; *(exemple: +33612345678;+33698765432)*. IMPORTANTE : é necessário colocar os números no formato internacional (+33 para a França por exemplo)

> **IMPORTANTE**
>
> Somente os números de telefone declarados em um dispositivo poderão usar as interações, pois somente eles serão autorizados.

# Usando o plugin

Este é bastante padrão em como funciona, então você precisa adicionar novos equipamentos e depois configurar:

- O nome dele,
- Se está ativo ou não,

Em seguida, é necessário adicionar os comandos que serão compostos por um nome e um número, apenas os números listados na lista de comandos podem receber uma resposta do Jeedom (isso possibilita a segurança, evitando definir uma senha como cada início de um SMS enviado ao Jeedom). Você também pode indicar qual usuário está vinculado a esse número (para gerenciamento de direitos no nível da interação).

Para se comunicar com Jeedom, basta enviar uma mensagem a ele de um número autorizado, todas as interações provenientes do sistema de interação.

>**EXEMPLO DE INTERAÇÃO** :
>
> - Pergunta : *"Qual é a temperatura da sala ?"*
> - Réponse : *"16,3 ° C"*

# Lista de chaves compatíveis

- HUAWEI E220
- Alcatel one touch X220L
- HSDPA 7.2MBPS 3G sem fio
- HUAWEI E3372
- USB SIM800C (velocidade 9600)

# FAQ

> **Não recebo nada com uma chave huwaei e160.**
>
>Você tem que instalar o minicom (`sudo apt-get install -y minicom`), executá-lo e conectar ao modem, então faça :
>
>`` `{.bash}
>AT ^ CURC = 0
>AT ^ U2DIAG = 0
>`` ''
>
>E no plugin faça :
>
>- Escolha a primeira porta USB e não a segunda
>- Velocidade : 9600
>- Modo de texto desativado

> **Não consigo ver a porta USB na minha chave**
>
>Certifique-se de não ter o brltty instalado (`sudo apt-get remove brltty` para removê-lo).

> **Depois de algumas horas / dias, não recebo mais um SMS e não posso mais enviar um, um lembrete do demônio corrige**
>
>Verifique seu cabo USB (um cabo USB ruim costuma causar esse tipo de problema, também não deve ser muito longo), verifique também sua fonte de alimentação, um hub USB é altamente recomendado.

> **Eu tenho um erro CME XX**
>
>Você pode encontrar [aqui](https://support.micromedia-int.com/hc/fr/articles/360010426299-Modem-GSM-CME-ERRORS-Erreurs-GSM-li%C3%A9es-%C3%A0-l-%C3%A9quipement-) descrição dos diferentes erros CME.

> **Configuração da tecla Alcatel one touch X220L**
>
>Quando inserimos a chave, temos esse :
>
>`` ''`
>root @ jeedom:# lsusb
>Dispositivo 002 do barramento 002: ID 1bbb:f000 Telefones Celulares
>`` ''`
>
>Tenha cuidado se você não tiver ``1bbb:f000`` acima de tudo, não siga esta documentação, adicione as seguintes linhas ao final do arquivo ``/etc/usb\_modeswitch.conf`` :
>
>`` ''`
>########################################################
># Alcatel X220L
>DefaultVendor = 0x1bbb
>DefaultProduct = 0xf000
>MessageContent = "55534243123456788000000080000606f504025270000000000000000000000000"
>########################################################
>`` ''`
>
>Em seguida, execute o seguinte comando para testar :
>
>`` ''`
>/ usr / sbin / usb_modeswitch -c
>/etc/usb_modeswitch.conf
>`` ''`
>
>Nós entendemos isso :
>
>`` ''`
>root @ jeedom:~ # lsusb
>Dispositivo 002 do barramento 002: ID 1bbb:0017 Telefones celulares
>`` ''`
>
>e os links em / dev são adicionados :
>
>`` ''`
>root @ jeedom:~ # ls / dev / ttyUSB*
>/ dev / ttyUSB0 / dev / ttyUSB1 / dev / ttyUSB2 / dev / ttyUSB3 / dev / ttyUSB4
>`` ''`
>
>Agora você precisa automatizar o lançamento do comando anterior via udev :
>
>`` ''`
>root @ jeedom:# vi /etc/udev/rules.d99-usb_modeswitch.rules
>SUBSISTEMA == "usb", ATTRS {idVendor} == "1bbb", ATTRS {idProduct} == "f000", EXECUTAR + = "/ usr / sbin / usb_modeswitch -c /etc/usb_modeswitch.conf"
>`` ''`
>
>Sob jeedom no plug-in SMS, você deve (no meu caso) usar a seguinte "porta SMS" : ``/dev/ttyUSB3``. Basicamente, você precisa tentar cada porta para encontrar a correta…

> **O daemon SMS é iniciado, mas você não recebe nenhum SMS**
>
>Uma das causas prováveis é a configuração de rede incorreta. Em “Configurações” → “Sistema” → “Configuração” → “Redes”, verifique o conteúdo do campo “URL ou endereço IP”". O último não deve ser localhost ou 127.0.0.1, mas o endereço IP do seu Jeedom ou o nome DNS.

> **No modo de depuração, tenho o erro "timeout" que aparece**
>
>Este erro ocorre quando a chave não responde dentro de 10 segundos após uma solicitação. As causas conhecidas podem ser :
>
>- incompatibilidade da chave GSM,
>- problema com a versão do firmware do stick.

> **Ao iniciar no modo de depuração, tenho : "soquete já em uso"**
>
>Isso significa que o demônio foi iniciado, mas que Jeedom não pode detê-lo. Você pode reiniciar todo o sistema ou em SSH fazer ``killall -9 refxcmd.py``.

> **O demônio se recusa a começar**
>
>Tente iniciá-lo no modo de depuração para ver o erro.

> **Tenho várias portas USB para minha chave GSM, embora só tenha uma**
>
>Isso é normal, por algum motivo desconhecido, as chaves GSM criam 2 *(ver mais)* portas USB de nível de sistema. Basta escolher um, não importa qual.

> **Jeedom não envia mais nem recebe SMS**
>
>Isso geralmente acontece se a chave GSM não puder mais se conectar à rede. Experimente movê-lo para ver se volta depois de alguns minutos.

>**Tenho preocupações de recepção que funcionam por algumas horas, então nada**
>
>Coloque o cartão SIM em um telefone celular e esvazie todas as mensagens de texto do cartão (enviadas e recebidas).
