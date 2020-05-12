# Karotz plugin

Este plugin permite que você controle seu Karotz (executando sob [OpenKarotz](http://www.openkarotz.org/)) Vai do led ventral até os ouvidos através de sons, síntese de fala e muitos outros.

# Configuração 

## Configuração do plugin Jeedom : 

**Instalação / Criação**

Para usar o plug-in, você deve fazer o download, instalar e ativá-lo como qualquer plug-in Jeedom.

Vá para o menu Plugins / Comunicação, você encontrará o plugin Karotz.

Você chegará à página que listará seu equipamento (você pode ter vários Karotz) e que permitirá que você crie alguns.

Clique no botão Adicionar :

Você chegará à página de configuração do seu karotz.

**Comandos**

Você não tem nada para fazer nesta seção. Os pedidos serão criados automaticamente.

-   Legal: para atualizar o widget, se necessário
-   Piscando Desligado : permite parar o piscar do led
-   Piscando em : ativa o piscar do led
-   Pare o som : interrompe uma música ou um som em andamento
-   Hora de dormir : deixa o coelho dormir
-   Em pé : acorde o coelho
-   Permanente em silêncio : permite acordar o coelho no modo silencioso
-   Relógio : permite iniciar o modo de relógio de coelho
-   Humor : permite que o coelho conte o humor selecionado
-   Humor No: permite que o coelho diga o humor indicado pelo seu número
-   Humor aleatório : permite que o coelho diga um humor aleatório
-   Orelha aleatória : permite que você mova seus ouvidos aleatoriamente
-   Ear RàZ : permite retornar os ouvidos à posição inicial
-   Orelhas Posições : ajusta a posição precisa de ambas as orelhas
-   Som de Karotz (nome) : permite iniciar um som de Karotz (sinal sonoro, por exemplo), indicando seu nome
-   Som Karotz : permite iniciar um som de Karotz (bipe, por exemplo), selecionando o nome em uma lista
-   URL dele : permite que Karotz leia um URL (estação de rádio, por exemplo)
-   Squeezebox ativado : permite ativar o modo squeezebox Karotz
-   Squeezebox off : permite desativar o modo squeezebox Karotz
-   Adormecido : avisa se o Karotz está dormindo (caso contrário, está acordado)
-   Status da cor : permite ter a cor atualmente na barriga do Karotz
-   TTS : permite que o coelho fale escolhendo a voz e a mensagem (por padrão, a mensagem é armazenada em cache)
-   TTS sem cache : permite que o coelho fale escolhendo a voz e a mensagem (a mensagem não é armazenada em cache)
-   Velocidade de pulso : ajusta a velocidade do piscar
-   % de espaço ocupado : permite que você saiba a% de disco usado no coelho
-   Espaço livre : valor em MB de espaço livre no coelho
-   Restart : permite reiniciar o coelho
-   Definir hora : permite que o coelho seja redefinido automaticamente (útil para alterar a hora)
-   Nível de volume : indica em% o nível do volume
-   Volume : permite escolher em% o nível do volume (máximo recomendado de 50%, risco de distorção acima)
-   Volume + : aumenta o nível do volume em 5%
-   Volume- : diminui o nível do volume em 5%
-   Foto : permite tirar uma foto do coelho
-   Fotos excluir : permite excluir todas as fotos tiradas pelo coelho (libera espaço em disco)
-   Fotos atualizar lista : permite atualizar a lista de fotos preservadas
-   Listagem de fotos : lista de fotos mantidas
-   Download de fotos : permite baixar (por ftp) as fotos mantidas no disco (elas não são excluídas)

Todos esses comandos estão disponíveis através dos cenários.

## Comando TTS 

O comando TTS pode ter várias opções separadas por & :

-   voz : o número da voz
-   nocache : não use o cache

Exemplo :

``voice=3&nocache=1``

# Faq 

>**Com que frequência as informações são atualizadas**
>
>O sistema recupera as informações a cada 30 minutos ou após uma solicitação de mudança de cor ou estado do coelho. Você pode clicar no comando Atualizar para atualizar manualmente.
