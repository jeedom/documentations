# Luna-plugin

# desde 27/03/2023 nova imagem Jeedom Luna
Você pode fazer uma atualização sem perda de backup etc. clicando em "Atualizar módulo de recuperação". isso reiniciará seu jeedom Luna, mas você não perderá sua configuração. isso fará alterações no módulo de recuperação e inicialização da caixa o que permitirá uma melhor estabilidade desta.

# Atenção preocupação de Luna piscando

Recebemos feedback sobre um erro intermitente de alguns Lunas. (apenas os enviados antes de 2023)
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

> USB fixo

No plugin Luna de 02/05/2023 o zigbee foi corrigido, você deve usar a porta ttyUSBLUNA-Zigbee. para usb externo isso também é corrigido automaticamente com o nome e/ou número de série.

> Atualização do módulo de recuperação

A atualização traz a imagem mais recente para o Luna; ele iráusar esta imagem durante uma recuperação (botão de reinicialização na caixa ou botão de recuperação no plugin).
Clique no botão de recuperação; o Luna baixará a versão mais recente de sua imagem e reiniciará, os LEDs verdes na caixa do Luna piscarão. 
Une fois ces dernières fixes, vous pourrez y accéder de nouveau via son adresse IP ou via http://jeedomluna.local; o software de recuperação estará atualizado.

> Recuperação (Redefinir Fábrica)

Durante uma redefinição de fábrica, a caixa é restaurada para a configuração de fábrica de acordo com a imagem atualizada por meio do botão fornecido acima. AVISO : você deve fazer um backup de sua caixa antes desta operação, pois perderá os dados de sua caixa (exceto backup no SD).

> LED

Você pode através do comando select type mudar a cor e a animação do led (pode ser desligado).

> Batterie

Você pode, através de dois feedbacks, ter a porcentagem de bateria assim como o tipo de alimentação da sua caixa. (carregando, descarregando, Full etc…).

> SD

Permite a gestão (formatação) do cartão micro-SD que pode adicionar à caixa, bem como a transferência para este cartão SD dos backups Jeedom.

> Os botões Power e Reset (v1)

- Redefinir : menos de 1 segundo caixa de força de reinicialização.
- Redefinir : mais de 10 segundos Reset Fábrica da caixa.
- Comida : mais de 10 segundos desligamento do fox force com desligamento da bateria (você deve ter removido a fonte de alimentação para fazer isso)

> Botões Power e Reset (v2 nova imagem)

- Redefinir : reinicialização forçada do Luna
- Comida : mais de 5 segundos desligado ou ligado (laranja > desligado, verde ligado)
- Comida : mais de 15 segundos reiniciando a caixa. (flash azul ao liberar)
- Comida : mais de 40 segundos Parada da caixa. (Flash laranja ao liberar)
- Comida : mais de 60 segundos de redefinição de fábrica da caixa. (Flash vermelho ao liberar)

> Lora (somente para luna vendido comigo Lodule lora de Jeedom)

- detecção automática do módulo e lançamento do encaminhador de pacotes, no host local do jeedom. use o plug-in LNS para instalar o aplicativo. (nada precisa ser feito no plugin Luna tudo é automático)

# Em breve : Hotspot, 4G (para Luna 4G), LORA (para Luna Lora)

> Ponto de acesso (ALFA))

Na parte Wifi do plugin você pode marcar a caixa Hotspot que lhe permitirá criar um ponto de acesso wifi no seu Box luna. (Encaminhamento de DNS e IP (ponte entre ethernet e wifi) funcional nele).

> O plugin luna permite-te ligar da tua luna a uma rede Wifi (com ou sem palavra-passe).

Para fazer isso, vá para o plugin luna e selecione o equipamento Luna. Aqui você pode ativar e depois selecionar o wifi que deseja (2.4Ghz e 5Ghz), digite a senha e salve.

Por enquanto, o plugin só leva em conta o acesso com DHCP.

> 4G (compatível apenas com Luna 4G)

Detecção automática de 4G interno à caixa, por favor, vá até o plug-in para clicar em detectar o módulo LTE, caso não veja os parâmetros na parte de configuração, solicite código pin e APN na configuração do plug-in Luna.
se o 4G detectar o lançamento de um módulo de conexão em segundo plano que muda automaticamente de ethernet para 4G, se necessário (ping para 8.8.8.8), o plugin SMS funciona ao mesmo tempo que o 4G no Luna 4G.
As configurações são feitas na configuração do plugin.
