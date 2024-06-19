# Luna-plugin

# desde 27/03/2023 nova imagem Jeedom Luna (conhecido como V2)

Você pode fazer uma atualização sem perda de backup etc. clicando em "Atualizar módulo de recuperação". isso reiniciará seu Jeedom Luna, mas você não perderá suas configurações. Isso fará alterações no módulo de recuperação e inicialização da caixa, o que permitirá melhor estabilidade da caixa.

# Atenção preocupação de Luna piscando

Recebemos feedback sobre um erro ao atualizar certas caixas do Jeedom Luna. (apenas os enviados antes de 2023)
Lamentamos o ocorrido e informamos nosso revendedor Domadoo.

Se você conseguir se conectar ao seu Jeedom, inicie o plugin Luna (Plugins/Gateway de automação residencial/luna) e vá para :

- Atualização do módulo de recuperação
Então faça a recuperação em :
- Recuperação (Redefinir Fábrica)
Isso atualizará sua caixa completamente.

Caso não tenha acesso à sua caixa, mantenha pressionado o botão reset da caixa por mais de 10 segundos; quando este último for liberado, a caixa deverá piscar.
Deixe ela terminar o processo. Jeedom deve se tornar operacional novamente. Você pode fazer o procedimento acima para uma atualização completa.

Se não piscar :

- Entre em contato com Domadoo através do seguinte link; a equipe Domadoo fornecerá a você uma etiqueta de devolução e enviará a você um Luna piscando corretamente :
<https://www.domadoo.fr/rma>

# Os recursos do plug-in Luna

> Correção USB

Na versão do plugin Luna de 05/02/2023, a porta Zigbee foi corrigida, você deve usar a porta ttyUSBLUNA-Zigbee.
Para USBs externos, isso também é corrigido automaticamente com o nome e/ou número de série.

> Atualização do módulo de recuperação

A atualização traz a imagem mais recente para o Luna; ele iráusar esta imagem durante uma recuperação (botão de reinicialização na caixa ou botão de recuperação no plugin).
Clique no botão de recuperação; o Luna fará o download da versão mais recente de sua imagem e reiniciará, os LEDs verdes no gabinete do Luna piscarão.
Une fois ces dernières fixes, vous pourrez y accéder de nouveau via son adresse IP ou via <http://jeedomluna.locais>; o software de recuperação estará atualizado.

> Recuperação (Redefinir Fábrica)

Durante uma redefinição de fábrica, a caixa é restaurada para a configuração de fábrica de acordo com a imagem atualizada por meio do botão fornecido acima.
AVISO : Você deve fazer um backup da sua caixa antes desta operação porque você perderá os dados da sua caixa (exceto o backup no cartão SD).

> LED

Você pode através do comando select type mudar a cor e a animação do led (pode ser desligado).

> Batterie

A bateria é ativada ao instalar/atualizar o plugin: Se desejar, você pode desativá-lo clicando no comando Desligar bateria
Você pode, por meio de dois comentários, saber a porcentagem da bateria e também o tipo de fonte de alimentação da sua caixa. (`Carregando`, `Descarregando`, `Completo` etc).

> SD

Permite a gestão (formatação) do cartão micro-SD que pode adicionar à caixa, bem como a transferência para este cartão SD dos backups Jeedom.

> Botões Power e Reset (v1) Plugin Luna não atualizado

- Redefinir : menos de 1 segundo para uma reinicialização forçada da caixa.
- Redefinir : mais de 10 segundos para uma redefinição de fábrica da caixa.
- Comida : mais de 10 segundos para um desligamento forçado do Fox com desligamento da bateria (você deve primeiro remover a fonte de alimentação para fazer isso).

> Botões Power e Reset (v2 nova imagem)

- Botão de reset : menos de 1 segundo para uma reinicialização de hardware da caixa Luna.

- Botão de energia : entre 1 e 4 segundos para a bateria desligar ou ligar (Laranja = desligada, Verde = Ligada).
- Botão de energia : entre 5 e 9 segundos reinício da caixa (azul piscando quando liberado).
- Botão de energia : entre 10 e 20 segundos para a caixa parar (laranja piscando quando liberada).
- Botão de energia : mais de 30 segundos para Reset Factory da caixa (vermelho piscando quando liberado).

> Lora (apenas para caixas Jeedom Luna vendidas com o módulo Jeedom Lora)

- Detecção automática do módulo e lançamento do encaminhador de pacotes, no host local do jeedom. Use o plugin LNS para instalar o aplicativo; nada precisa ser feito no plugin Luna, tudo é automático.
- possibilidade de desativá-lo na parte LTE

> Hotspot

Na parte WiFi do plugin, você pode marcar a caixa "Hotspot", que permitirá criar um ponto de acesso WiFi em seu Luna Box. Você pode ativar o modo DHCP, que atribuirá automaticamente um endereço IP aos clientes que se conectarem à sua Box através do ponto de acesso. Para a parte do endereço IP do DHCP, aqui está um exemplo : se você escolher 192.168.4.1, os endereços IP do seu servidor DHCP serão, de acordo com a máscara de sub-rede (255.255.255.0), no intervalo 192.168.4.2 para 192.168.4.254.

> Defina um IP

- você pode na página ethernet ou wifi do plugin luna definir os endereços IP dele, para configurar a ethernet você deve primeiro ter uma conexão wifi ativada.

> Priorize conexões

Você pode priorizar as conexões na página inicial do plugin para que a caixa mude de Ethernet para wifi caso não haja conexão ou vice-versa.

> O plugin luna permite-te ligar da tua luna a uma rede Wifi (com ou sem palavra-passe).

Para fazer isso, vá para o plugin luna e selecione o equipamento Luna. Aqui você pode ativar e depois selecionar o wifi que deseja (2.4Ghz e 5Ghz), digite a senha e salve.

> 4G (compatível apenas com caixas Jeedom Luna 4G)

Detecção automática de 4G interno à caixa. Por favor, acesse o plugin Luna e clique em 'Detectar módulo LTE' Solicitar código PIN e APN na página LTE do plugin Luna.
se 4G for detectado, lançamento de um módulo de conexão em segundo plano que muda automaticamente de Ethernet ou wifi para 4G, se necessário.
O plugin SMS funciona ao mesmo tempo que 4G no Luna 4G.
As configurações são feitas na página LTE do plugin.

/!\ Atenção você precisa de APNs do tipo IPv4 (bouygue : ebouygtel.com, laranja : laranja, grátis : livre). /!\
