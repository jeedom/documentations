# Luna-plugin

# Atenção preocupação de Luna piscando

Recebemos feedback sobre um erro intermitente de alguns Luna. (apenas o enviado antes de 2023),
Lamentamos o ocorrido e notificamos nosso revendedor Domadoo.

Se você conseguir entrar no Jeedom, por favor, inicie o plugin Luna e vá para : 
  - Atualização do módulo de recuperação
Então faça a recuperação em :
  - Recuperação (Redefinir Fábrica)
Isso atualizará sua caixa completamente.

Se você não tiver acesso à sua Caixa, por favor, continue pressionando o botão de reinicialização da caixa por mais de 10 segundos, ao soltar a caixa, ela deve piscar e deixá-la terminar. normalmente Jeedom terá que voltar para fazer o procedimento se estiver acima. para uma atualização completa.

Se não piscar : 
 - Entre em contato com eles neste link, a equipe Domadoo fornecerá a você uma etiqueta de devolução e enviará um Luna corretamente exibido :
https://www.domadoo.fr/rma

# Em breve : Hotspot

> O plugin luna permite-te ligar da tua luna a uma rede Wifi (com ou sem palavra-passe).

Para fazer isso, vá para o plugin luna e selecione o equipamento Luna. Aqui você pode ativar e depois selecionar o wifi que deseja (2.4Ghz e 5Ghz), digite a senha e salve.

Por enquanto, o plugin só leva em conta o acesso com DHCP.

> Atualização do módulo de recuperação

A atualização traz a imagem mais recente para o Luna; ele iráusar esta imagem durante uma recuperação (botão de reinicialização na caixa ou botão de recuperação no plugin).
Clique no botão de recuperação; o Luna baixará a versão mais recente de sua imagem e reiniciará, os LEDs verdes na caixa do Luna piscarão. 
Une fois ces dernières fixes, vous pourrez y accéder de nouveau via son adresse IP ou via http://jeedomluna.local; o software de recuperação estará atualizado.

> Recuperação (Redefinir Fábrica)

Durante uma redefinição de fábrica, a caixa é restaurada para a configuração de fábrica de acordo com a imagem atualizada por meio do botão fornecido acima. AVISO : você deve fazer um backup de sua caixa antes desta operação, pois perderá tudo durante esta fase. (exceto backup em SD).

> LED

Você pode através do comando select type mudar a cor e a animação do led (pode ser desligado).

> Batterie

Você pode através de dois feedbacks ter a porcentagem de bateria, bem como o tipo de fonte de alimentação da sua caixa. (carregando, descarregando, Full etc…).

> SD

Permite a gestão (formatação) do cartão micro-SD que pode adicionar à caixa, bem como a transferência para este cartão SD dos backups Jeedom.

> Botões Power e Reset

- Redefinir : menos de 1 segundo caixa de força de reinicialização.
- Redefinir : mais de 10 segundos Reset Fábrica da caixa.
- Comida : mais de 10 segundos desligamento do fox force com desligamento da bateria (você deve ter removido a fonte de alimentação para fazer isso)

> Ponto de acesso (ALFA))

Na parte Wifi do plugin você pode marcar a caixa Hotspot que lhe permitirá criar um ponto de acesso wifi no seu Box luna. (Encaminhamento de DNS e IP (ponte entre ethernet e wifi) funcional nele).
