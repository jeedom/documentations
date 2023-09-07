# Luna-plugin

# desde 27/03/2023 nova imagem Jeedom Luna
Você pode fazer uma atualização sem perda de backup etc. clicando em "Atualizar módulo de recuperação". isso reiniciará seu Jeedom Luna, mas você não perderá suas configurações. Isso fará alterações no módulo de recuperação e inicialização da caixa, o que permitirá melhor estabilidade da caixa.

# Atenção preocupação de Luna piscando

Recebemos feedback sobre um erro ao atualizar certas caixas do Jeedom Luna. (apenas os enviados antes de 2023)
Lamentamos o ocorrido e informamos nosso revendedor Domadoo.

Se você conseguir se conectar ao seu Jeedom, inicie o plugin Luna (Plugins/Gateway de automação residencial/luna) e vá para : 
  - Atualização do módulo de recuperação
Então faça a recuperação em :
  - Recuperação (Redefinir Fábrica)
Isso atualizará sua caixa completamente.

Se você não tiver acesso à sua caixa, deixe o botão de reset da caixa pressionado por mais de 10 segundos; quando o último for liberado, a caixa deve piscar; deixe-o terminar o processo. Jeedom deve se tornar operacional novamente. Você pode fazer o procedimento acima para uma atualização completa.

Se não piscar : 
 - Entre em contato com Domadoo através do seguinte link; a equipe Domadoo fornecerá a você uma etiqueta de devolução e enviará a você um Luna piscando corretamente :
https://www.domadoo.fr/rma

# Os recursos do plug-in Luna :

> Correção USB

Na versão do plugin Luna de 05/02/2023, a porta Zigbee foi corrigida, você deve usar a porta ttyUSBLUNA-Zigbee.
Para USBs externos, isso também é corrigido automaticamente com o nome e/ou número de série.

> Atualização do módulo de recuperação

A atualização traz a imagem mais recente para o Luna; ele iráusar esta imagem durante uma recuperação (botão de reinicialização na caixa ou botão de recuperação no plugin).
Clique no botão de recuperação; o Luna fará o download da versão mais recente de sua imagem e reiniciará, os LEDs verdes no gabinete do Luna piscarão. 
Une fois ces dernières fixes, vous pourrez y accéder de nouveau via son adresse IP ou via http://jeedomluna.local; o software de recuperação estará atualizado.

> Recuperação (Redefinir Fábrica)

Durante uma redefinição de fábrica, a caixa é restaurada para a configuração de fábrica de acordo com a imagem atualizada por meio do botão fornecido acima. 
AVISO : Você deve fazer um backup da sua caixa antes desta operação porque você perderá os dados da sua caixa (exceto o backup no cartão SD).

> LED

Você pode através do comando select type mudar a cor e a animação do led (pode ser desligado).

> Batterie

Você pode, por meio de dois comentários, saber a porcentagem da bateria e também o tipo de fonte de alimentação da sua caixa. (carregamento, descarregamento, completo etc).

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

# Em breve : Hotspot, 4G (para Luna 4G), LORA (para Luna Lora)

> Hotspot (plug-in Luna ALPHA)

Na parte Wifi do plugin você pode marcar a caixa Hotspot que lhe permitirá criar um ponto de acesso wifi no seu Box luna. (Encaminhamento de DNS e IP (ponte entre ethernet e wifi) funcional nele).

> O plugin luna permite-te ligar da tua luna a uma rede Wifi (com ou sem palavra-passe).

Para fazer isso, vá para o plugin luna e selecione o equipamento Luna. Aqui você pode ativar e depois selecionar o wifi que deseja (2.4Ghz e 5Ghz), digite a senha e salve.

Por enquanto, o plugin só leva em conta o acesso com DHCP.

> 4G (compatível apenas com caixas Jeedom Luna 4G)

Detecção automática de 4G interno à caixa. Por favor, acesse o plugin Luna e clique em 'Detectar módulo LTE' se você não vir os parâmetros na seção de configuração, solicite o código PIN e APN na configuração do plugin Luna.
se 4G for detectado, lançamento de um módulo de conexão em segundo plano que muda automaticamente de Ethernet para 4G se necessário (ping para 8.8.8.8), o plugin SMS funciona ao mesmo tempo que o 4G no Luna 4G.
As configurações são feitas na configuração do plugin.
