    # Mobile Plugin

    Plug-in para usar o aplicativo Jeedom Mobile.

    O aplicativo móvel Jeedom requer a instalação deste plug-in para que a caixa possa se comunicar com o aplicativo móvel.

    # Configuração do plugin Mobile para Application V2

    Depois de instalar o plugin, você só precisa ativá-lo :

    ![mobile1](./images/mobile1.png)

    # Primeira conexão com o aplicativo V2

    Para conectar seu telefone : existem 2 métodos possíveis;
    Na primeira tela do aplicativo, você pode conectar sua conta de mercado e, assim, encontrar todas as caixas associadas a esta conta ou simplesmente adicionar uma caixa.

    ![v2ConnectMarket](./images/v2firstConnect.jpeg)

    > **IMPORTANTE**
    >
    > Para aproveitar as funcionalidades do aplicativo, o núcleo do seu Jeedom deve estar em 4.4.0 mínimo

    #### **LOGIN VIA CONTA DE MERCADO** :

    ![v2ConnectMarket](./images/v2connectMarket.jpeg)

    Tudo o que você precisa fazer é inserir seu Market ID e senha.

    #### **CONEXÃO VIA CAIXA ID** :

    ![v22methods](./images/v22methods.jpeg)

    Várias opções nesta tela :

    - Você insere a url do seu Jeedom (interno ou externo), bem como os identificadores de acesso a ele e confirma com o botão LOGIN

    - Você clica no QR Code : uma nova tela aparece; você pode escanear um QR Code do plugin Mobile da Box que deseja adicionar, através da aba QR Code do plugin.

    ![v2ModalQrApp](./images/v2QRCodeConnect.PNG)

    > Aba Qr Code do plugin Mobile

    > > ![v2ModalPlugin](./images/v2ModalQrCode.png)

    Uma vez que esta primeira etapa foi concluída, você está registrado no aplicativo: se você possui o plugin Mobile, terá acesso através do menu às Notificações, QR Codes, Personalização do Menu ....

    No menu, você terá a aba Caixas, que agrupa todas as caixas presentes nesta conta de mercado

    ![v2MenuBoxs](./images/v2MenuBoxs.PNG)

    ![v2floutedBoxs](./images/v2floutedBoxs.png)

    Basta clicar na Box onde o plugin Mobile está instalado e depois se identificar para acessar a Box.

    A caixa irá para o topo da lista, validada a sua autenticação.
    Você pode fazer isso para várias caixas.

    Você também pode clicar no botão + no canto inferior direito para acessar diferentes opções;

    - QR Code para adicionar uma Box à lista através do plugin Mobile,
    - Manual para adicionar manualmente uma caixa
    - Detecção Atlas e Luna (se estiver no Wifi, irá detectar as caixas na rede)
    - Sincronização do Market para atualizar as informações configuradas da conta do Market

    ![v2greenBtnAdd](./images/v2greenBtnAdd.PNG)

    Para acessar recursos como Notificações, Personalização de Menu ou Geolocalização, você deve primeiro ter selecionado pelo menos uma caixa atual'

    ![v2ActualBoxFlouted](./images/v2ActualBoxFlouted.jpeg)

    # Como funciona a geolocalização

    Adicionamos uma zona de geolocalização clicando no ícone +

    ![v2AddZone](./images/v2AddZone.jpeg)

    Digitamos o endereço que procuramos, validamos com Enter no seu telefone; o cursor irá então se posicionar no endereço desejado.
    Podemos então adicionar um nome e salvar a zona.

    Isto irá criar um novo comando no seu equipamento móvel, do tipo binário, que corresponderá às entradas e saídas da zona se a geolocalização estiver ativada no seu telemóvel.

    Também podemos alterar o raio da zona, para estender a detecção da zona.

    ![v2ModifyBigRadius](./images/v2ModifyBigRadius.jpeg)

    # FAQ

    > **Tenho problemas com notificações**
    >
    > Esta parte está sendo melhorada e otimizada no aplicativo beta.

    > **Tenho problemas para exibir meu webview**
    >
    > No seu Jeedom, nas Preferências, verifique se a página inicial do celular é HOME.
