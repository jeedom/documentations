# Plug-in de câmera

# Description

Plug-in para criar e gerenciar câmeras wifi (exibição e gravação).

# Configuração do plugin

Depois de instalar o plugin, você só precisa ativá-lo. Alguns parâmetros devem ser inseridos na configuração do plugin :

-   **Caminho do registro** : indica o caminho em que o Jeedom deve armazenar as imagens que captura de suas câmeras (não é recomendável tocá-lo). Se o seu caminho não estiver no caminho de instalação do Jeedom, você não poderá visualizar as capturas no Jeedom.
-   **Tamanho máximo da pasta de gravação (MB)** : indica o tamanho máximo autorizado para a pasta onde as capturas são salvas (não é recomendável tocá-lo). Se essa cota for atingida, o Jeedom excluirá as capturas mais antigas.
-   **O plug-in da câmera deve reagir às interações** : palavras-chave / frases às quais o plugin reagirá por meio de interações Jeedom.
-   **** : permite que você exiba o painel (Menu inicial → Câmera) e tenha uma visão de todas as suas câmeras (veja abaixo). Não se esqueça de ativar o painel na configuração do plugin para acessá-lo mais tarde.

## Compatibilité

Você pode encontrar [](https://compatibility.jeedom.com/index.php?v=d&p=home&plugin=camera) a lista de módulos compatíveis com o plugin

# Configuração do equipamento

## Equipement

Aqui você tem as principais informações da sua câmera :

-   **Nome do equipamento da câmera** : nome do seu equipamento de câmera.
-   **Objeto pai** : indica o objeto pai ao qual o equipamento pertence.
-   **** : torna seu equipamento ativo.
-   **** : torna visível no painel.
-   **** : o endereço IP local da sua câmera.
-   **** : a porta à qual conectar a câmera.
-   **** : o protocolo de comunicação da sua câmera (http ou https).
-   **Nome de Usuário** : nome de usuário para efetuar login na câmera (se necessário). Observe que o plug-in não suporta caracteres especiais (você deve, portanto, limitar-se a números, letras minúsculas / maiúsculas).
-   **Senha** : senha para conectar-se à câmera (se necessário).Observe que o plugin cria um url_encode para o nome de usuário e senha necessários para algumas câmeras, mas isso pode causar problemas para outras, se você tiver um problema, tente sem caracteres especiais (limitar-se a números, letras minúsculas / maiúsculas).
-   **URL do instantâneo** : URL de instantâneo da câmera. Mude dependendo das câmeras. Cuidado para não colocar um URL de fluxo sob pena de travar o Jeedom. Você pode adicionar as tags \#username\# e \#password\#, que será substituído automaticamente pelo nome de usuário e senha ao usar este comando.
-   **URL do feed** : digite o URL do stream de vídeo da câmera ``rtsp://#username#:#password#@#ip#:554/videoMain`` (exemplo para câmeras Foscam).
-   **Stream stream RTSP** : se você estiver no modo de stream de vídeo (URL do stream preenchido), você pode ver a câmera como um stream de vídeo em vez de quadro a quadro. Observe que esta opção consome muitos recursos e faz com que a 1ª imagem chegue muito.
-   **** : permite-lhe ver se o jeedom recupera o fluxo de vídeo (lembre-se de guardar antes de testar para ver se as suas modificações funcionam)
-   **Opção de transmissão de vídeo** : se você estiver no modo de fluxo de vídeo (URL do fluxo preenchido), você pode passar parâmetros adicionais aqui para ffmpeg e avconv (reservado para especialistas)
-   **Modelo** : permite escolher o modelo da câmera.  : se você mudar irá sobrescrever suas configurações.

> ****
>
> Você pode encontrar [](https://www.ispyconnect.com/cameras) configuração para muitas câmeras e, portanto, ser capaz de integrar sua câmera no Jeedom se ela não estiver na lista

## Image

Esta parte permite configurar a qualidade da imagem. Na verdade, o Jeedom diminui o tamanho da imagem ou a compactação antes de enviá-lo para o seu navegador. Isso melhora a fluidez das imagens (porque elas são mais claras). É também nesta parte que você pode configurar o número de quadros por segundo a serem exibidos. Todas as configurações estão disponíveis em : móvel / desktop e miniatura / normal.

-   **Refresco (s))** : atraso em segundos entre a exibição de 2 imagens (aqui você pode colocar números menores que 1).
-   **Compressão (%)** : quanto mais baixo, menos a imagem é compactada, a 100% nenhuma compressão é feita.
-   **Tamanho (% - 0) : automatique)** : quanto maior a%, mais próximos estamos do tamanho original da imagem. A 100%, não há redimensionamento da imagem.

> ****
>
> Se você colocar uma compressão de 0% e um tamanho de 100%, o Jeedom não tocará na imagem no modo normal. Isso não é válido no modo miniatura, onde há um tamanho máximo de imagem de 360px.

## Capture

-   **Duração máxima de uma gravação** : duração máxima das gravações.
-   **Sempre faça um vídeo** : força o Jeedom a sempre converter gravações de vídeo antes de gravar.
-   **Número de quadros por segundo do vídeo** : número de quadros por segundo de vídeos.
-   **Excluir todas as capturas de câmera** : exclua todas as capturas e gravações da câmera.

## Alimentation

-   **Comando ON** : Controle de energia da câmera.
-   **Comando OFF** : Controle para cortar a energia da câmera.

## Commandes

-   **** comando (use com comandos do tipo info, por exemplo, para enviar informações de movimento da câmera para Jeedom por meio da API, veja abaixo)
-   **** do comando com a possibilidade de colocar um ícone (para o apagar terá de fazer duplo-click no ícone em questão)
-   **** e subtipo de comando
-   **Pedido** para enviar para a câmera para fazer uma ação (alternar para modo noturno, ptz, etc.). Você pode usar as tags \#username\# e \#password\#, que será substituído automaticamente pelo nome de usuário e senha ao usar este comando
-   **Comando Stop** : para câmeras PTZ, geralmente existe um comando que interrompe o movimento; é aqui que deve ser especificado
-   **** : permite exibir o pedido ou não no painel
-   **Configuração avançada (pequenas rodas dentadas)** : exibe a configuração avançada do comando (método de registro, widget etc.).)
-    : permite testar o comando
-   **Excluir (assinar -)** : permite excluir o comando

# O widget

Encontramos aqui a imagem da câmera, os comandos definidos na configuração, o comando para capturar, o comando para começar a capturar várias capturas de imagem e o comando para navegar nessas capturas.

> ****
>
> No painel e no painel, é possível redimensionar o widget para adaptá-lo às suas necessidades.

Clique na imagem para exibi-la em uma janela e em um formato maior.

Clicar no último comando para navegar pelas capturas irá mostrar-lhe estes.

Você encontrará aqui todas as capturas organizadas por dia e por data, para cada uma delas :

-   veja maior clicando na imagem
-   faça o download
-   exclua

No celular, o widget é um pouco diferente : se você clicar na imagem da câmera, aumentará esta com os possíveis comandos.

# Os painéis

O plug-in da câmera também fornece um painel que permite ver todas as suas câmeras de uma só vez, e pode ser acessado por Início → Câmera.

> ****
>
> Para isso, você deve ativá-lo na página de configuração do plugin.

É claro que também está disponível no celular por Plugin → Câmera.

# Salvar e enviar captura

Este comando, um pouco específico, permite depois de capturar o envio (compatível com o plugin slack, mail e transferência).

A configuração é bastante simples: você chama a ação de envio de captura (chamada "Gravação") em um cenário. Na parte do título, você passa as opções.

Por padrão, basta colocar o número de capturas que você deseja no campo "número de capturas ou opções", mas você pode ir além com as opções (veja detalhes abaixo "opções avançadas de capturas"). Na parte da mensagem, basta preencher a ordem do plug-in (atualmente, folga, email ou transferência) que envia as capturas. Você pode colocar vários separados por &&.

## Opções avançadas de captura

-   ``nbSnap`` : número de capturas, se não especificado, as capturas serão feitas até uma solicitação para interromper a gravação ou parar a câmera
-   ``delay`` : atraso entre 2 capturas, se não especificado, o atraso é 1s
-   ``wait`` : tempo de espera antes de começar a pegar, se não for especificado, nenhuma remessa será feita
-   ``sendPacket`` : número de capturas que acionam o envio de um pacote de capturas, se não especificado, as capturas serão enviadas apenas no final
-   ``movie=1`` : após o término da gravação, as imagens são convertidas em vídeo
-   ``sendFirstSnap=1`` : envia a primeira captura da gravação

> ****
>
> nbSnap = 3 atraso = 5 ==> envia 3 capturas feitas em intervalos de 5 segundos (envio acionado pelo cenário) movie = 1 sendFirstSnap = 1 grava um vídeo até o comando "Stop Recording" para inserir no cenário. O filme será armazenado no seu Jeedom.

# Enviar detecção de movimento para Jeedom

Se você possui uma câmera com detecção de movimento e deseja transmiti-la ao Jeedom, este é o URL para colocar na sua câmera :

``https://#IP_JEEDOM#/core/api/jeeApi.php?apikey=#APIKEY_CAMERA#&plugin=camera&type=event&id=#CMD_ID#&value=#VALUE#``

Obviamente, antes de criar um comando de tipo de informação na sua câmera

# FAQ

>**Onde estão os registros ?**
>
>Os registros são encontrados por padrão em plugins / camera / data / records /**, tenha cuidado, pois isso pode variar se você pedir à Jeedom para salvá-las em outro lugar.

>**Vícios não resolvem ?**
>
>No ssh ou na administração -> OS / DB -> System do : ``dpkg --configure -a``.

>**Quais são as condições para que minha câmera seja compatível com Jeedom (se não estiver na lista de compatibilidade) ?**
>
> A única condição é que a câmera tenha um URL que envie de volta uma imagem (bem, uma imagem e não um fluxo de vídeo).
