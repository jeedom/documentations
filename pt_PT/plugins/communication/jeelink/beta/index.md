# Plugin Jeedom Link

O plugin **Link jeedom** *(também chamado de Jeelink)* permite que o equipamento seja carregado de uma ou mais instalações Jeedom "origem" para uma (ou mais) Jeedom "alvo"".

![jeelink1](../images/jeelink1.png)

O plugin deve ser instalado em cada Jeedom, seja fonte ou destino.

Antes de começarmos, vamos nos certificar de que usamos os mesmos termos :
- **Fonte Jeedom** : Servidor Jeedom no qual o equipamento a ser remontado no **Jeedom Target**.
- **Jeedom Target** : servidor Jeedom que receberá e centralizará os equipamentos trazidos por um ou mais **Fontes de Jeedoms**.
- **Atribuição** : configuração feita ao nível do **Fonte Jeedom** para selecionar o equipamento a ser carregado para o **Jeedom Target**.

>**EM FORMAÇÃO**
>
>Para uma melhor leitura e compreensão desta documentação, as capturas de tela em fundo branco correspondem ao **Fonte Jeedom** e aqueles com fundo preto **Jeedom Target**.

# Configuration

## Configuração do plugin

Este plugin não requer nenhuma configuração especial e simplesmente precisa ser ativado após a instalação.

>**IMPORTANTE**
>
>Observe que a desativação do plugin resulta na exclusão dos Jeedoms alvo do plugin sem qualquer meio de recuperá-los (exceto restaurar um backup)

>**IMPORTANTE**
>
>As configurações de rede de todos os Jeedoms *(origem e destino)* DEVE estar OK caso contrário o plugin não funcionará.

>**IMPORTANTE**
>
>Definitivamente, você não deve ter a mesma chave de API em vários alvos Jeedom. A chave de um dispositivo é baseada na chave API (portanto, não deve ser alterada após a configuração) e no ID de origem do dispositivo. Ter a mesma chave API no Jeedom alvo causará, portanto, problemas de sincronização com equipamentos que podem não aparecer na fonte.

## Configuração do alvo Jeedom

O primeiro passo será definir um **Jeedom Target** Desde a **Fonte Jeedom** *(aquele que segura o equipamento a ser remontado)*.

Para isso, acesse o menu **Plugins → Comunicação → Jeedom Link** depois clique no botão verde **Target Jeedoms**.

Abre-se uma janela a partir da qual pode adicionar ou modificar **Jeedom (s) Alvo (s))**. Para adicionar um **Jeedom Target**, basta preencher :

- O nome de **Jeedom Target**.
- O endereço IP ou nome DNS para o qual o **Jeedom Target** pode ser alcançado.
- O **Chave da API do plug-in Jeedom Link** do **Jeedom Target**.
- O modo de acesso, interno ou externo (usado para feedback do **Fonte Jeedom** para **Jeedom Target**).

![jeelink2](../images/jeelink2.png)

>**TRUQUE**
>
>Você vai encontrar o **Chave API do Jeedom Link**, específico para cada instalação, no menu **Configurações → Sistema → Configuração → PLC**.

### Alocação de equipamentos

Depois de executar a configuração do **Jeedom Target** no **Fonte Jeedom**, você tem que ir para a aba **Atribuição** para selecionar os dispositivos a serem transmitidos para o **Jeedom Target**. Todos os comandos para cada equipamento serão criados e configurados automaticamente no **Jeedom Target**.

![jeelink3](../images/jeelink3.png)

Adicione o equipamento que deseja carregar no **Jeedom Target** clicando em **Adicionar equipamento** em seguida, selecione o objeto e o equipamento :

![jeelink5](../images/jeelink5.png)

>**EM FORMAÇÃO**
>
>Plugins que usam um widget específico não o encontrarão no **Jeedom Target** *(Câmera de plug-in, redes, etc.)*.

>**IMPORTANTE**
>
>Como medida de segurança, excluir um dispositivo atribuído a um **Jeedom Target** desde um **Fonte Jeedom** não o elimine no **Jeedom Target**.

Resta apenas **Para salvaguardar** para o link a ser feito e o equipamento selecionado a ser transmitido do **Fonte Jeedom** para **Jeedom Target**.

## Configuração do equipamento

Agora vamos ao menu **Plugins → Comunicação → Jeedom Link** do **Jeedom Target** para ver a criação automática do equipamento selecionado anteriormente :

![jeelink4](../images/jeelink4.png)

Como qualquer equipamento Jeedom, você acessa sua página de configuração clicando nela :

![jeelink6](../images/jeelink6.png)

Na aba **Comandos**, você acessa todos os parâmetros dos controles do equipamento :

![jeelink7](../images/jeelink7.png)

>**IMPORTANTE**
>
>Quanto aos equipamentos afetados em um **Fonte Jeedom**, excluir um equipamento em um **Jeedom Target** não o elimine no **Fonte Jeedom**.

### Modificando a fonte Jeedom

Os 3 parâmetros a seguir são usados para substituir um **Fonte Jeedom** sem perda de dados *(história por exemplo)* :

-   **Endereço de origem Jeedom**
-   **Chave da API de origem do Jeedom Link**
-   **Código do dispositivo de origem** e **Código de origem** alguns pedidos.

Para isso, basta inserir o novo endereço e a nova chave da API Jeedom Link do Jeedom de origem e alterar os identificadores dos equipamentos e comandos.

# FAQ

>**Eu tenho erros :** `Você não está autorizado a realizar esta ação`
>
>Certifique-se de **Chaves da API Jeedom Link** estar bem informado :
>- O **Chave API do Jeedom Link** do **Fonte Jeedom** em cada equipamento Jeelink da **Jeedom Target**.
>- O **Chave API do Jeedom Link** do **Jeedom Target** na página de configuração **Target Jeedoms** do **Fonte Jeedom**.
