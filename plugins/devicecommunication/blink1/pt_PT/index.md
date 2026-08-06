# Plug-in do Blink (1)

Plugin usado para controlar uma tecla intermitente (1).

# Configuração 

O plugin não requer nenhuma configuração, você apenas precisa ativá-lo :

![blink1](../images/blink1.png)

# Configuração do equipamento 

A configuração dos dispositivos intermitentes (1) pode ser acessada no menu Plugins :

![blink2](../images/blink2.png)

É assim que a página do plugin blink (1) se parece (aqui já com o equipamento) :

![blink3](../images/blink3.png)

É assim que a página de configuração de um dispositivo intermitente se parece (1) :

![blink4](../images/blink4.png)

Aqui você encontra toda a configuração do seu equipamento :

-   **Nome do equipamento intermitente (1)** : nome do seu equipamento de piscada (1)
-   **Objeto pai** : indica o objeto pai ao qual o equipamento pertence
-   **Ativar** : torna seu equipamento ativo
-   **Visivél** : torna visível no painel
-   **Modo** : o modo em que você deseja operar o seu piscar de olhos (1) (veja a descrição abaixo)

Abaixo você encontra a lista de pedidos :

-   o nome exibido no painel
-   tipo e subtipo
-   o valor : permite atribuir o valor do comando de acordo com outro comando, uma chave (caso de um comutador virtual), um cálculo….
-   Configurações : nome do padrão para ativar ou do comando para ativar
-   Display : permite exibir os dados no painel
-   configuração avançada (pequenas rodas dentadas) : exibe a configuração avançada do comando (método de registro, widget etc.)

-   Teste : permite testar o comando
-   excluir (assinar -) : permite excluir o comando

# Modo "Local"" 

![blink5](../images/blink5.png)

Modo a ser usado se o piscar (1) estiver conectado a uma das portas USB da Jeedom. O único parâmetro neste modo não é obrigatório e permite selecionar um piscar de olhos (1) em particular se você tiver vários.

# Modo de chamadas da API intermitente (1)" 

![blink6](../images/blink6.png)

Nesse modo, o Jeedom chamará diretamente a API blink1control, portanto, o Jeedom deve poder ingressar diretamente no sistema no qual a chave blink (1) está instalada.

Neste modo, os parâmetros de configuração são :

-   **Endereço ou IP** : endereço ou ip em que a tecla intermitente (1) está instalada
-   **Porta** : porta na qual o aplicativo blink1control está escutando
-   **Padrão** : permite sincronizar os padrões com os do aplicativo blink1control

## Instalação do aplicativo blink1control 

O aplicativo blink1control pode ser encontrado [aqui](http://blink1.thingm.com/blink1control/), na parte de download, está disponível para Windows e Mac. Depois de baixado, inicie a instalação do aplicativo.

## Configuração do aplicativo blink1control 

Depois de instalado e iniciado, você deve ter :

![blink7](../images/blink7.png)

Esta aplicação oferece muitas possibilidades. Rapidamente, encontramos na parte superior esquerda o status da chave (aqui não conectado), na parte inferior esquerda dos eventos, no centro superior das ações rápidas para controlar a chave, logo abaixo de um sistema avançado de escolha de modos e cores e à direita os padrões.

Uma vez lá, você precisa clicar no pequeno dispositivo de roda dentada para abrir o menu de configuração avançada e ativar a API do servidor, colocando serverHost em qualquer. Observe também a porta para relatá-la na configuração do Jeedom.

![blink8](../images/blink8.png)

Valide e reinicie o blink1control para que ele leve em consideração.

# "Modo de monitoramento de URL" 

![blink9](../images/blink9.png)

Nesse modo, é o aplicativo blink1control que chama esse URL a cada X segundos que fornece suas instruções.

Para configurá-lo, no aplicativo blink1control, vá para ferramentas, clique no pequeno sinal de mais (+) para adicionar um, crie um URL e copie o URL fornecido por Jeedom (campos de URL a serem observados) no caminho. Você também pode configurar a frequência de atualização.

> **IMPORTANTE**
>
> Para que isso funcione, é necessário que o PC no qual o blink1control possa acessar o Jeedom. Se você estiver usando um laptop fora da rede com a chave, o Jeedom deverá, portanto, ser acessível a partir do exterior. Se você não sabe como, o melhor é usar o Jeedom DNS.

Nesse modo, você também tem a opção "Não repetir comandos", que permite que você não repita mais o último comando depois que o blink1control tiver levado em conta a solicitação. É aconselhável deixá-lo marcado.

# Modo "Ambos"" 

![blink11](../images/blink11.png)

Este modo é uma combinação dos 2 modos anteriores, a vantagem é que combina a velocidade de reação do primeiro e a possibilidade de operá-lo mesmo fora da segunda residência. Para a configuração, é necessário seguir os procedimentos para o modo "Chamadas à API intermitente (1)" e o modo "Monitoramento por URL".

# Modo SSH" 

![blink12](../images/blink12.png)

Esse modo deve ser usado se você colocou o piscar de olhos (1) em uma máquina Linux diferente daquela em que o Jeedom está instalado (Jeedom master porque o plug-in não é compatível no modo remoto). A configuração é bastante simples :

-   **Número do dispositivo** : ID do dispositivo, a ser usado apenas se você tiver várias teclas piscantes (1) em sua máquina
-   **Endereço ou IP** : Endereço IP da máquina em que a chave está conectada
-   **Nome de Usuário** : o nome de usuário para fazer logon na máquina em que a chave está conectada
-   **Caminho relativo do executável blink1-tool** : caminho relativo para o executável blink1-tool

> **Dica**
>
> O executável está disponível [aqui](https://github.com/todbot/blink1/releases), cuidado, o Jeedom só funciona com a versão linux, que só é compatível com uma máquina do tipo linux (rpi, rpi2, jeedomboard, cubieboard, bananapi…). Basta transferir o executável para a máquina em que a chave está conectada e torná-lo executável (chmod + x blink1-tool)

> **IMPORTANTE**
>
> Para que isso funcione, você deve ter configurado no nível SSH a troca da chave RSA para que o Jeedom possa se conectar à máquina em que a chave está conectada sem fornecer uma senha.
