# Plugin de SMS

O plug-in SMS permite que você converse com o Jeedom via SMS, também permite que o Jeedom envie um SMS em caso de alerta (plug-in de alarme, cenário)

> **IMPORTANTE**
>
> Para interagir com Jeedom, você deve ter configurado interações.

# Configuração do plugin 

Depois de baixar o plugin, você só precisa ativá-lo e configurar a porta. Depois de salvar o demônio deve lançar. O plug-in já está configurado por padrão; você não precisa fazer mais nada. No entanto, você pode modificar esta configuração. Aqui está o detalhe (alguns parâmetros podem estar visíveis apenas no modo especialista) :

-   *Porta SMS* : a porta USB na qual sua chave GSM está conectada.

> **Dica**
>
> Se você não souber qual porta USB é usada, basta indicar "Auto". Observe que o modo automático funciona apenas com as teclas Huawai E220.

> **IMPORTANTE**
>
> Observe que algumas teclas 3G estão por padrão no modo modem e não GSM. Usando o software do fabricante da chave, você deve alterar o modo de chave para GSM (ou texto ou serial). 

-   **Código PIN** : Permite indicar o código PIN do cartão SIM e deixar em branco se você não tiver um. 
-   **Modo de texto** : Modo de compatibilidade estendida, a ser usado apenas se o envio e / ou recebimento de mensagens não funcionar.
-   **Cortar mensagens por pacote de caracteres** : Indica o número máximo de caracteres por texto.
-   **Gateway SMS / SMS (modificar em caso de erro : Número SMSC do CMS 330 não definido)** : Observe que, se o erro "Número do SMSC do CMS 330 não estiver definido", nesse caso, você deve indicar o número do gateway SMS da operadora de telefonia. 
-   **Intensidade do sinal** : Força de recepção do sinal da sua chave GSM.
-   **Rede** : Rede telefônica da sua chave GSM (pode ser "Nenhuma" se a Jeedom não puder recuperá-la). 
-   **tomada interna (modificação perigosa)** : permite modificar a porta de comunicação interna do daemon.
-   **Ciclo (s))** : ciclo de varredura de daemon para enviar e receber SMS. Um número muito baixo pode causar instabilidade

# Configuração do equipamento 

A configuração do equipamento SMS pode ser acessada no menu do plugin e depois na comunicação

Aqui você encontra toda a configuração do seu equipamento :

-   **Nome do equipamento SMS** : nome do seu equipamento SMS,
-   **Ativar** : torna seu equipamento ativo,
-   **Visivél** : torna seu equipamento visível no painel,
-   **Objeto pai** : indica o objeto pai ao qual o equipamento pertence.

Abaixo você encontra a lista de pedidos :

-   **Nome** : o nome exibido no painel,
-   **Usuário** : usuário correspondente no Jeedom (permite restringir certas interações a determinados usuários),
-   **Número** : número de telefone para o qual enviar mensagens. Você pode colocar vários números, separando-os com; (ex: 0612345678; 0698765432).
    > **IMPORTANTE**
    >
    > Somente os números de telefone declarados em um dispositivo poderão usar as interações porque somente eles serão autorizados.
-   **Display** : permite exibir os dados no painel,
-   **Configuração avançada** (pequenas rodas dentadas) : exibe a configuração avançada do comando (método de registro, widget etc.)),
-   **Teste** : permite testar o comando,
-   **Remover** (placa -) : permite excluir o comando.

# Usando o plugin 

Isso é bastante padrão em sua operação, na página Geral → Plug-in e selecionando o plug-in SMS :

-   A porta (caminho) para o dispositivo que serve como modem (por exemplo, pode ser / dev / ttyUSB0, para vê-lo apenas iniciar ``dmesg`` depois conecte o modem)
-   O código PIN do cartão SIM

Então você precisa adicionar um novo equipamento e configurá-lo :

-   O nome dele,
-   Se está ativo ou não,

Em seguida, é necessário adicionar os comandos que serão compostos por um nome e um número, apenas os números listados na lista de comandos podem receber uma resposta do Jeedom (isso possibilita a segurança, evitando definir uma senha como cada início de um SMS enviado ao Jeedom). Você também pode indicar qual usuário está vinculado a esse número (para gerenciamento de direitos no nível da interação).

Para se comunicar com Jeedom, basta enviar uma mensagem a ele de um número autorizado, todas as interações provenientes do sistema de interação.

Pequeno exemplo de interação : Pergunta : "Qual é a temperatura da sala ?" Réponse : "16.3 C"

# Lista de chaves compatíveis 

-   HUAWEI E220
-   Alcatel one touch X220L
-   HSDPA 7.2MBPS 3G sem fio
-   HUAWEI E3372

# Faq 

> **Não recebo nada com uma chave huwaei e160.**
>
>Você precisa instalar o minicom (sudo apt-get install -y minicom), iniciá-lo e conectar-se ao modem e, em seguida, faça :
>
>`` `{.bash}
>AT ^ CURC = 0
>AT ^ U2DIAG = 0
>`` ''
>
>E no plugin faça :
>
>-   Escolha a primeira porta USB e não a segunda
>-   Velocidade : 9600
>-   Modo de texto desativado

> **Não consigo ver a porta USB na minha chave**
>
>Verifique se você não possui o brltty para instalar (`sudo apt-get remove brltty` para removê-lo)

> **Depois de algumas horas / dias, não recebo mais um SMS e não posso mais enviar um, um lembrete do demônio corrige**
>
>Verifique seu cabo USB (um cabo USB ruim geralmente causa esse tipo de problema, também não deve ser muito longo), verifique também sua fonte de alimentação, é altamente recomendável um hub USB

> **Eu tenho um erro CME XX**
>
>Você pode encontrar [aqui](:http://www.micromedia-int.com/fr/gsm-2/669-cme-error-gsm-equipment-related-errors) descrição dos diferentes erros CME

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
>Uma das causas prováveis é a configuração de rede incorreta. Em "Geral" -> "Configuração" -> "Administração" -> "Configuração de rede", verifique o conteúdo do campo "URL ou endereço IP". O último não deve ser localhost ou 127.0.0.1, mas o endereço IP do seu Jeedom ou o nome DNS.

> **No modo de depuração, tenho o erro "timeout" que aparece**
>
>Este erro ocorre quando a chave não responde dentro de 10 segundos após uma solicitação. As causas conhecidas podem ser :
>
>-   incompatibilidade da chave GSM,
>-   problema com a versão do firmware do stick.

> **Ao iniciar no modo de depuração, tenho : "soquete já em uso"**
>
>Isso significa que o demônio foi iniciado, mas que Jeedom não pode detê-lo. Você pode reiniciar o sistema inteiro ou, no SSH, faça "killall -9 refxcmd.py".

> **O demônio se recusa a começar**
>
>Tente iniciá-lo no modo de depuração para ver o erro.

> **Eu tenho várias portas USB para minha chave GSM, enquanto eu tenho apenas uma**
>
>Isso é normal, por algum motivo desconhecido, as chaves GSM criam 2 (e até mais) portas USB no nível do sistema. Basta escolher um, não importa qual.

> **Jeedom não envia mais nem recebe SMS**
>
>Isso geralmente acontece se a chave GSM não puder mais se conectar à rede. Tente movê-lo e veja se ele volta> depois de alguns minutos.

>**Tenho preocupações de recepção que funcionam por algumas horas, então nada**
>
>Coloque o cartão SIM em um telefone celular e esvazie todos os sms (enviados e recebidos) do cartão.
