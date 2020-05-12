# Plug-in Kodi

Este plugin permite que você solicite e receba informações do Kodi.

![kodi screenshot1](../images/kodi_screenshot1.jpg)

# Configuração 

## Configuração do plugin Jeedom

Para usar o plug-in, você deve fazer o download, instalar e ativá-lo como qualquer plug-in Jeedom.

Depois disso, você terá que criar seu equipamento Kodi :

Vá para o menu plugins / multimídia, você encontrará o plugin Kodi :

![configuration1](../images/configuration1.jpg)

Você chegará à página que listará seu equipamento (você pode ter vários Kodi) e que também permitirá que você crie alguns

![pageconfig3](../images/pageconfig3.jpg)

Clique no botão Adicionar Kodi ou no botão + :

![config2](../images/config2.jpg)

Você chegará à página de configuração do seu Kodi:

![pageconfig1](../images/pageconfig1.jpg)

Nesta página você encontrará várias seções :

### Geral

Nesta seção, você encontrará todas as configurações do jeedom. Ou seja, o nome do seu equipamento, o objeto ao qual você deseja associá-lo, a categoria (de preferência multimídia), se você deseja que o equipamento esteja ativo ou não e, finalmente, se você deseja que ele fique visível no painel.

### Configuration

Esta seção é uma das mais importantes que ela contém

-   IP : endereço IP do seu kodi (é importante inserir o ip e não um nome de host). Se o Kodi estiver na mesma máquina que o jeedom, coloque 127.0.0.1. Este campo é obrigatório
-   Porta : a porta de comunicação do servidor web no kodi (você deve ativar o servidor web no kodi). Este campo é obrigatório
-   Nome de Usuário : o nome de usuário para efetuar login no Kodi se você tiver um
-   Senha : a senha para se conectar ao Kodi, se você tiver um. (isso acompanha o nome de usuário)
-   Endereço MAC : o endereço MAC da máquina para ativar na LAN
-   Volume + /- : a etapa de incremento ou decrementação do volume (1 a 100)

### Commandes

Esta parte lista todos os comandos disponíveis :

-   Accueil
-   Ano
-   Avanço rápido
-   Bas
-   Próximas músicas
-   Droite
-   Eteindre
-   Gauche
-   Genre
-   Haut
-   Hora de término
-   Lecture
-   Lista de filmes
-   Lista de músicas
-   Lista de séries
-   Duração da lista de reprodução
-   Mistura da noite
-   Muet
-   Notifications
-   OK
-   OSD
-   Pause
-   Tela cheia
-   Posição da lista de reprodução
-   Anterior
-   Restart
-   Resumo
-   Retour
-   Retrocesso rápido
-   Digitalização de áudio
-   Digitalizar vídeo
-   Status
-   Status da mídia
-   Status nb
-   Stop
-   Suivant
-   Thumbnail
-   Titre
-   Tipo de mídia
-   Volume
-   Status do volume
-   Volume -
-   Volume \ +

## Configuração do plugin Kodi

Para poder se beneficiar do feedback dos diferentes status, é necessário instalar um complemento no Kodi. Você pode baixar este complemento na página geral do plugin no Jeedom

![installplugin](../images/installplugin.jpg)

Depois que o zip for recuperado, você só precisará instalá-lo no Kodi. Para fazer isso, vá para o Kodi, parâmetros / addons / install from a zip.

Após a instalação, você deve encontrar o complemento nos addons ativados na parte de serviço.

![kodi screenshot7](../images/kodi_screenshot7.jpg)

Para configurar o addon, clique em configure, você chegará a esta página :

![addondetail](../images/addondetail.jpg)

Aqui você encontrará 3 parâmetros importantes para configurar :

-   Endereço IP : o endereço IP do seu jeedom
-   Tipo de caixa : mini / mini +, ou especifique se você tem um / jeedom ou não no seu endereço Jeedom
-   Chave de API : sua chave API Jeedom, que você encontrará nos parâmetros de configuração Jeedom

# Informações de status 

Kodi sobe muitos estatutos :

-   Género : sobe a lista completa de gêneros (somente utilizável via script ou virtual)
-   Hora de término : hora final programada, atualizada quando a mídia é iniciada e quando a pausa é retomada
-   Status e statusnb : Suba o status (um em texto e outro em número) Estes são os diferentes valores :
    - Iniciado 0
    - Vídeo em andamento 1
    - Áudio em andamento 2
    - Vídeo terminado 3
    - Áudio completo 4
    - Vídeo parado 5
    - Áudio parado 6
    - Vídeo pausado 7
    - Áudio pausado 8
    - Recuperação de vídeo 9
    - Resumo do áudio 10
    - Stop 18
-   Status da mídia : voltará a um status mais geral (Reproduzir, Pausar, Parar, Parar), independentemente do tipo de mídia
-   Miniatura : remontará a capa (mais particularmente o link que permite tê-la)
-   Título : vai subir o título da mídia atual e detalhes sobre o episódio e a temporada no caso de uma série
-   Tipo de mídia : retornará o tipo de mídia (Séries, Áudio, Filmes)

# Detalhes do widget 

Aqui estão alguns detalhes sobre o widget :

![widget principal](../images/widget-principal.jpg)

-   à : indica um ícone do tipo de mídia atual
-   B : indica o horário final
-   C : desdobra a parte do controle remoto

![kodi screenshot2](../images/kodi_screenshot2.jpg)

-   D : Parte 1 do título atual
-   E : Parte 2 do título atual
-   F : Comandos de reprodução (reprodução após parada, etc.)
-   G : Ative o modo de controle de volume ou retorne ao modo de reprodução

![partievolume](../images/partievolume.jpg)

-   H : permite expandir a seção de informações

No modo de série / filme, você encontrará ano, resumo, gênero

![kodi screenshot3](../images/kodi_screenshot3.jpg)

No modo de áudio, você encontrará informações da lista de reprodução, ano, gênero e lista de reprodução

![kodi screenshot5](../images/kodi_screenshot5.jpg)

Nos dois casos, você encontrará na parte inferior os botões que permitem iniciar uma varredura de áudio / vídeo ou uma mixagem de áudio à noite


