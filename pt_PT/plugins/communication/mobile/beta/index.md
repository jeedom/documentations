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

![v2ConnectMarket](./images/v2connectMarket.PNG)

Tudo o que você precisa fazer é inserir seu Market ID e senha.

#### **CONEXÃO VIA CAIXA ID** :

![v22methods](./images/v22methods.PNG)

Várias opções nesta tela :

- Você insere a url do seu Jeedom (interno ou externo), bem como os identificadores de acesso a ele e confirma com o botão LOGIN

- Você clica no QR Code : uma nova tela aparece; você pode escanear um QR Code do plugin Mobile da Box que deseja adicionar, através da aba QR Code do plugin.

![v2ModalQrApp](./images/v2QRCodeConnect.PNG)

> Aba Qr Code do plugin Mobile

> > ![v2ModalPlugin](./images/v2ModalQrCode.png)

Uma vez que esta primeira etapa foi concluída, você está registrado no aplicativo: se você possui o plugin Mobile, terá acesso através do menu às Notificações, QR Codes, Personalização do Menu ....

No menu, você terá a aba Caixas, que agrupa todas as caixas presentes nesta conta de mercado

![v2MenuBoxs](./images/v2Menuboxs.PNG)

![v2floutedBoxs](./images/v2floutedboxs.png)

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

![v2ActualBoxFlouted](./images/v2ActualboxFlouted.jpeg)

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

# Configurando o plugin Mobile V1

Depois de instalar o plugin, você só precisa ativá-lo :

![mobile1](../images/mobile1.png)

**Configuração**

Para configurar o plug-in, você deve adicionar os telefones que poderão acessar o Jeedom.

Para adicionar um telefone : **Plugins** → **Comunicação** → **App
Mobile** → **Adicionar**

![mobile2](../images/mobile2.png)

Aqui estão os parâmetros para inserir :

- **Nome do equipamento móvel** : Nome do telefone
- **Ativar** : Ativando o acesso para este celular
- **Tipo de celular** : Seleção de SO do telefone (iOS, Android)
- **Usuário** : Usuário associado a este acesso

> **Dica**
>
> A escolha do usuário é importante, pois determina o equipamento ao qual ele terá acesso de acordo com seus direitos.

![mobile3](../images/mobile3.png)

Após salvar, você obterá um QR Code permitindo que o aplicativo se configure.

# Configuração de plugins e comandos recebidos pelo aplicativo

Após a inicialização do Mobile Plugin, você tem a possibilidade de modificar os tipos genéricos de pedidos, plugins e peças.

![mobile10](../images/mobile10.png)

Ao clicar em um plug-in, você pode autorizá-lo ou não a conversar com o aplicativo móvel e configurar cada um dos tipos genéricos associados aos seus comandos.

![mobile11](../images/mobile11.png)

Ao clicar em uma peça, você pode autorizá-la ou não a estar presente no aplicativo móvel e configurar cada um dos tipos genéricos associados a seus pedidos.

![mobile12](../images/mobile12.png)

# Configuração de aplicativo para dispositivos móveis

Você encontrará os aplicativos nas persianas móveis :

**Android Google Play**

![Google Play FR](../images/Google_Play_FR.png)

**Apple App Store**

![App Store FR](../images/App_Store_FR.png)

## Primeiro lançamento do aplicativo

Ao iniciar o aplicativo Mobile pela primeira vez, você receberá um tutorial para ajudá-lo a configurá-lo.

Depois de baixar e instalar seu aplicativo móvel Jeedom, inicie o aplicativo em seu smartphone.

Você chega em um tutorial de configuração que recomendamos que você siga. Algumas etapas foram realizadas anteriormente.

Você terá então a opção entre configuração manual ou automática por QR Code. Caso opte pela configuração por QR Code, basta flashar o QR Code presente no plugin Mobile App no equipamento smartphone previamente criado. Nesse caso, o aplicativo recuperará automaticamente toda a configuração do seu Jeedom e se conectará automaticamente. Quando estiver conectado à sua casa via Wifi, o aplicativo usará automaticamente o endereço Ethernet Jeedom interno à sua rede. Quando você está conectado em 4G ou 3G, ele usa seu endereço externo para conectar-se ao seu Jeedom (por exemplo, através do serviço DNS Jeedom, se você o usar). Se você escolher a configuração manual, nesse caso, será necessário inserir manualmente os endereços IP internos e externos do seu Jeedom. Esta opção está reservada a um público informado.

O aplicativo será sincronizado e você chegará à sua página inicial (precedida por um mini guia de apresentação).

O aplicativo móvel Jeedom está pronto para funcionar.

## Favoritos

No aplicativo, você pode ter Favoritos (atalhos de comandos, plugins, cenários).

Aqui está o procedimento para criá-los :

Clique em um dos + na tela inicial do aplicativo :

![mobile dashboard 1](../images/mobile_dashboard_1.PNG)

Você chegará à página de seleção do tipo de atalho :

![mobile dashboard 2](../images/mobile_dashboard_2.PNG)

Por exemplo, vamos executar uma ação, por isso nos oferece moedas / objetos :

![mobile dashboard 3](../images/mobile_dashboard_3.PNG)

Em seguida, basta selecionar a ação que deseja como atalho :

![mobile dashboard 4](../images/mobile_dashboard_4.PNG)

É então possível personalizar a cor deste (no momento, três cores são propostas) :

![mobile dashboard 5](../images/mobile_dashboard_5.PNG)

Bem como os dois textos associados :

![mobile dashboard 6](../images/mobile_dashboard_6.PNG)
![mobile dashboard 7](../images/mobile_dashboard_7.PNG)

Pronto, agora você tem um atalho para o seu comando (na versão 1.1 Espera-se que os comandos liga / desliga apareçam na mesma tecla).

![mobile dashboard 8](../images/mobile_dashboard_8.PNG)

# Como configurar corretamente tipos genéricos

## Tipos genéricos no plug-in Mobile

Melhor que as palavras, aqui está um exemplo dos créditos genéricos para uma luz com todos os seus controles (veja também a tabela Luz abaixo)) :

![generic type in plugin](../images/generic_type_in_plugin.jpg)

## Tabelas de modelo de aplicativo

### As luzes

|              Imagem              | Tipo genérico                                                                                                                                                                                                                                                   | Parte do plugin Dev                                                                                                        |                                                                                                                           Descrição                                                                                                                            |
| :-----------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| ![LUZ](../images/LIGHT_1.jpg) | `Botão de luz ligado`<br/>`Botão apagado`                                                                                                                                                                                                                     | `LIGHT_ON`<br/>`LIGHT_OFF`                                                                                               |                                                                                                   presença de dois botões "ON" e "Off" sem feedback de status.                                                                                                   |
| ![LUZ](../images/LIGHT_2.jpg) | `Botão de luz ligado`<br/>`Botão apagado`<br/>`Luz do estado`                                                                                                                                                                                                  | `LIGHT_ON`<br/>`LIGHT_OFF`<br/>`LIGHT_STATE`                                                                             |                                                                                          Feedback de status presente, o botão esquerdo alterna entre ligado e desligado                                                                                           |
| ![LUZ](../images/LIGHT_2.jpg) | `Botão de alternância de luz`<br/>`Luz do estado`                                                                                                                                                                                                                       | `LIGHT_TOGGLE`<br/>`LIGHT_STATE`                                                                                         |                                                                                          Feedback de status presente, o botão esquerdo alterna entre ligado e desligado                                                                                           |
| ![LUZ](../images/LIGHT_3.jpg) | `Botão de luz ligado`<br/>`Botão apagado`<br/>`Luz do estado`<br/>`Light Slider`                                                                                                                                                                             | `LIGHT_ON`<br/>`LIGHT_OFF`<br/>`LIGHT_STATE`<br/>`LIGHT_SLIDER`                                                          |                                                                    Feedback de status presente, o botão esquerdo permite alternar entre On e Off e o controle deslizante permite controlar a intensidade                                                                    |
| ![LUZ](../images/LIGHT_4.jpg) | `Botão de luz ligado`<br/>`Botão apagado`<br/>`Luz do estado`<br/>`Light Slider`<br/>`Cor clara (informação)`<br/>`Cor clara (ação)`<br/>`Light Mode` (opcional, é usado para ter modos de luz, por exemplo arco-íris no Philips Hue) | `LIGHT_ON`<br/>`LIGHT_OFF`<br/>`LIGHT_STATE`<br/>`LIGHT_SLIDER`<br/>`LIGHT_COLOR`<br/>`LIGHT_SET_COLOR`<br/>`LIGHT_MODE` | Feedback de status presente, o botão esquerdo permite alternar entre On e Off e o controle deslizante permite controlar a intensidade. No círculo, a cor da lâmpada está presente e, quando você clica nela, pode alterar a cor e ativar um modo |

### As tomadas

|               Imagem               | Tipo genérico                                                               | Parte do plugin Dev                                                   |                                                        Descrição                                                         |
| :-------------------------------: | :--------------------------------------------------------------------------- | :------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------: |
| ![ENERGIA](../images/ENERGY_1.jpg) | `Botão de soquete ativado`<br/>`Botão fora do soquete`                                     | `ENERGY_ON`<br/>`ENERGY_OFF`                                        |                                presença de dois botões "ON" e "Off" sem feedback de status.                                |
| ![ENERGIA](../images/ENERGY_2.jpg) | `Botão de soquete ativado`<br/>`Botão fora do soquete`<br/>Tomada de Estado                    | `ENERGY_ON`<br/>`ENERGY_OFF`<br/>`ENERGY_STATE`                     |                       Feedback de status presente, o botão esquerdo alterna entre ligado e desligado                        |
| ![ENERGIA](../images/ENERGY_3.jpg) | `Botão de soquete ativado`<br/>`Botão fora do soquete`<br/>Tomada de Estado<br/>`Soquete deslizante` | `ENERGY_ON`<br/>`ENERGY_OFF`<br/>`ENERGY_STATE`<br/>`ENERGY_SLIDER` | Feedback de status presente, o botão esquerdo permite alternar entre On e Off e o controle deslizante permite controlar a intensidade |

### As persianas

|              Imagem              | Tipo genérico                                                                                                        | Parte do plugin Dev                                                            |                                     Descrição                                     |
| :-----------------------------: | :-------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------- | :---------------------------------------------------------------------------------: |
| ![Aba](../images/FLAP_1.jpg)   | `Montar painel de botões`<br/>`Painel de botões para baixo`<br/>`Painel do botão Stop '<br/>Painel de estado (opcional)                | `FLAP_UP`<br/>`FLAP_DOWN`<br/>`FLAP_STOP`<br/>`FLAP_STATE` (opcional)        |  Presença de três botões "Para cima", "Para baixo", "Parar", feedback opcional do status.  |
| ![Aba](../images/FLAP_2.jpg)   | `Montar painel de botões`<br/>`Painel de botões para baixo`<br/>`Painel do botão Stop '<br/>Painel de estado<br/>`Painel do botão deslizante` | `FLAP_UP`<br/>`FLAP_DOWN`<br/>`FLAP_STOP`<br/>`FLAP_STATE`<br/>`FLAP_SLIDER` | Presença de um controle deslizante, com um botão Acima / Abaixo em Alternar (com ícone de status) |

### Inondation

|              Imagem              | Tipo genérico                                                                                 | Parte do plugin Dev                                                                        |                             Descrição                              |
| :-----------------------------: | :--------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------- | :------------------------------------------------------------------: |
| ![ENCHENTE](../images/FLOOD.jpg)   | `Innondation`<br/>`TEMPERATURE` (opcional)<br/>Humidade (opcional)<br/>`SABOTAGE` (opcional) | `FLOOD`<br/>`TEMPERATURE` (opcional)<br/>«UMIDADE» (opcional)<br/>«UMIDADE» (opcional) | Permite que você tenha seu sensor de inundação completo em uma única linha. |

### Serrure

|             Imagem             | Tipo genérico                                                         | Parte do plugin Dev                             |                                  Descrição                                  |
| :---------------------------: | :--------------------------------------------------------------------- | :-------------------------------------------- | :---------------------------------------------------------------------------: |
| ![TRANCAR](../images/LOCK.jpg)   | `Bloqueio de estado`<br/>`Abrir botão de bloqueio`<br/>`Fechar botão de bloqueio` | `LOCK_STATE`<br/>`LOCK_OPEN`<br/>`LOCK_CLOSE` | Feedback de status presente, o botão esquerdo alterna entre ligado e desligado |

### Sereia

|              Imagem              | Tipo genérico                                               | Parte do plugin Dev                            |                                  Descrição                                  |
| :-----------------------------: | :----------------------------------------------------------- | :------------------------------------------- | :---------------------------------------------------------------------------: |
| ![SIRENE](../images/SIREN.jpg)   | `Estado da sirene`<br/>`Botão da sirene ligado`<br/>`Botão da sirene desativado` | `SIREN_STATE`<br/>`SIREN_ON`<br/>`SIREN_OFF` | Feedback de status presente, o botão esquerdo alterna entre ligado e desligado |

### Fumaça

|              Imagem              | Tipo genérico                       | Parte do plugin Dev                    |                           Descrição                            |
| :-----------------------------: | :----------------------------------- | :----------------------------------- | :--------------------------------------------------------------: |
| ![FUMAÇA](../images/SMOKE.jpg)   | `Fumaça`<br/>`TEMPERATURE` (opcional) | `SMOKE`<br/>`TEMPERATURE` (opcional) | Permite que você tenha seu sensor de fumaça completo em uma única linha. |

### Temperatura

|                    Imagem                    | Tipo genérico                          | Parte do plugin Dev                       | Descrição |
| :-----------------------------------------: | :-------------------------------------- | :-------------------------------------- | :---------: |
| ![Temperatura](../images/TEMPERATURE.jpg)   | TEMPERATURA<br/>Humidade (opcional) | `TEMPERATURE`<br/>«UMIDADE» (opcional) | Veja a imagem. |

### Presença

|                 Imagem                 | Tipo genérico                                                                                                                              | Parte do plugin Dev                                                                                                                           | Descrição |
| :-----------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------ | :---------: |
| ![Presença](../images/PRESENCE.jpg)   | PRESENÇA<br/>`TEMPERATURE` (opcional)<br/>`Brightness` (opcional)<br/>Humidade (opcional)<br/>`UV` (opcional)<br/>`SABOTAGE` (opcional) | `PRESENCE`<br/>`TEMPERATURE` (opcional)<br/>`BRILHO` (opcional)<br/>«UMIDADE» (opcional)<br/>`UV` (opcional)<br/>`SABOTAGE` (opcional) | Veja a imagem. |

### Ouvrant

|                Imagem                | Tipo genérico                                 | Parte do plugin Dev                                       |                              Descrição                              |
| :---------------------------------: | :--------------------------------------------- | :------------------------------------------------------ | :-------------------------------------------------------------------: |
| ![ABERTURA](../images/OPENING.jpg)   | `Porta/Janela`<br/>`TEMPERATURE` (opcional) | `OPENING / OPENING_WINDOW`<br/>`TEMPERATURE` (opcional) | Consulte Imagem (ou seja, você pode escolher entre janela e porta). |

### Fio piloto

|                Imagem                | Tipo genérico                                                                                                                                      | Parte do plugin Dev                                                      |                                                                          Descrição                                                                           |
| :---------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| ![AQUECIMENTO](../images/HEATING.jpg)   | `Botão LIGADO do aquecimento do fio piloto`<br/>`Botão OFF do fio piloto de aquecimento`<br/>`Estado do fio piloto de aquecimento`<br/>`Aquecimento do fio piloto de botão` (opcional) | `HEATING_ON`<br/>`HEATING_OFF`<br/>`HEATING_STATE`<br/>`HEATING_OTHER` | Os botões ON / OFF e Status permitem criar o botão na extrema esquerda do modelo e os `fios de aquecimento do botão piloto 'existem para adicionar botões (5 no máximo) |

## OS JOKERS

### Ação genérica

|               Imagem               | Tipo genérico               | Parte do plugin Dev |                                                                            Descrição                                                                            |
| :-------------------------------: | :--------------------------- | :---------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| ![AÇÃO](../images/ACTION.jpg)   | `Ação Genérica` | `GENERIC_ACTION`  | O botão assume a forma do tipo de ação. Por padrão, é uma alternância, se for uma mensagem, então você tem um envelope, se for um controle deslizante, você tem um controle deslizante, etc... |

### Informações genéricas

|             Imagem             | Tipo genérico                    | Parte do plugin Dev |                 Descrição                 |
| :---------------------------: | :-------------------------------- | :---------------- | :-----------------------------------------: |
| ![INFORMAÇÕES](../images/INFO.jpg)   | `Informações Genéricas` | `GENERIC_INFO`    | O botão assume a forma do tipo de informação. |

# Troubleshooting

**Estou na versão Android do aplicativo (1.0.1 ou 1.0.0) Não consigo acessar minhas partes ou mesmo a configuração do aplicativo.**

Você tinha um pop-up alertando sobre uma preocupação com as configurações de acessibilidade; basta acessar as configurações de acessibilidade do seu celular e desmarcar os aplicativos usando esta opção. (Uma correção será trazida em breve no aplicativo)

**Tenho uma mensagem em uma das linhas dos meus módulos informando que está faltando um tipo genérico !**

Ao ler esta mensagem, ele informa qual tipo genérico está ausente para criar um modelo compatível. Apenas aplique. Consulte o [doc capítulo Tipo genérico](https://www.jeedom.com/doc/documentation/plugins/mobile/pt_PT/mobile#_configuration_des_plugins_et_commandes_que_reçoit_l_app).

**Tenho um problema com um dos chamados plug-ins totalmente integrados (clima, termostato, alarme, câmera) !**

Não hesite em acessar o seu módulo e clicar novamente em salvar, isso incluirá novamente os tipos genéricos associados ao módulo.

**Não foi possível colocar uma informação sobre as boas-vindas do aplicativo !**

Isso é normal, estará disponível na versão 1.1.

**Tenho o aplicativo que ocupa muita memória do meu celular !**

Houve um erro nas versões 1.0.0 e 1.0.1 na parte da câmera. O problema não acontecerá novamente com 1.0.2, para deletar o cache sem deletar o app, basta ir até a configuração do seu Mobile App e clicar em "deletar cache".

**Tenho uma preocupação de primeira sincronização no aplicativo ou de sql no plug-in móvel !**

Você precisa colocar tipos genéricos e autorizar o plug-in a enviar genéricos, veja o documento um pouco mais alto.
