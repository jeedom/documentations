# Plugin Rfplayer 2

Plugin para usar o RFPLAYER 1000. Este plug-in eventualmente substituirá o primeiro plug-in. Será disponibilizado a todos os proprietários do primeiro plugin.

Isso permitirá que todos migrem silenciosamente. Como a filosofia do plug-in mudou e os IDs também, você deverá incluir seus dispositivos nesse novo plug-in.

# Configuração do plugin RFPlayer 

Depois de instalar o plugin, você só precisa ativá-lo :

**Configuração**

Para configurar o plug-in, você precisa apenas auto ou escolher o RFPlayer.

# Adicionar um módulo 

O RFPlayer é compatível com muitos módulos. O plugin RFPlayer2 muda completamente sua filosofia.
Razões generosas para garantir uma compatibilidade justa com o próprio RFplayer.

Para incluir um módulo, basta clicar em Inclusão e seguir o passo a passo. Este vai pedir para você escolher
o protocolo e, em seguida, o tipo (atuador / transmissor) no caso de um transmissor que a configuração criada conterá todos os dados brutos transmitidos pelo rfplayer (alguns podem ser inúteis para o seu uso, você pode ocultá-los). A vantagem desse método é estar alinhado com o Rfplayer (alguns dispositivos fornecendo informações em um lugar, outros em outro) e também permitir durante a inclusão filtrar com precisão o protocolo a ser incluído.

Você não precisará se preocupar em incluir sondas do Oregon quando desejar incluir um sensor X2D.
 
O mesmo princípio se aplica aos atuadores. Você também terá que escolher o tipo de atuador de acordo com o protocolo. Uma vez feito, o equipamento será criado em Jeedom. E você precisará inserir um ID de programa consistente com o protocolo (geralmente esse campo é preenchido de forma inteligente) e, em seguida, vá ao painel de controle e clique em "Testar" no comando de associação.
Obviamente, é necessário antecipadamente que você tenha aprendido o módulo de acordo com a documentação do fabricante do módulo.
 
Algumas peculiaridades :

**Oregon**

Trocar as pilhas altera a identificação do produto. Portanto, ao trocar as baterias, adicione um novo módulo e clique em "Recuperar ID" ao lado de "Trocar bateria". Essa ação deve ser executada no novo módulo e escolher o nome do módulo apropriado (o nome antigo do módulo cujas baterias foram substituídas).

**Papagaio**

Para o modo de papagaio, equipamentos serão criados. Este terá um botão que permite colocar o Rfplayer em treinamento e criará o comando associado. Existe um comando de status que permite que você solicite ao Rfplayer que efetue o log debug, todos os comandos parrot aprendidos.

Você será notificado no Changelog do plugin quando ele for atualizado.
