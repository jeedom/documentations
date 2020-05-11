# Deconz plugin

Este plugin permite, através de uma tecla conbee (1 ou 2), controlar a ferramenta deconz que permite zigbee (módulo xiaomi, philips hue, ikea ...).

Este plug-in é completamente sem nuvens, por isso não faz comunicação com o exterior (servidor de terceiros) e funciona 100% localmente !!!!

Atenção, o Zigbee não funciona como o Zwave, a lista de módulos incluídos não é salva na chave (nada é salvo na chave). Portanto, é fácil substituir a chave (por backup / restauração, o backup pode ser recuperado do jeedom, mas não restaurado do jeedom, é necessário que a restauração passe pelo Deconz, se você estiver em uma instalação local, é IP_JEEDOM:8484). Por contras, no caso de mover a chave de um sistema para outro, também é necessário fazer um backup / restauração.

>**IMPORTANTE**
>
> Este plugin requer uma chave USB [Conbee](http://bit.ly/2n4VyWc)

>**IMPORTANTE**
>
> O Debian Strech (debian 9) ou superior é absolutamente necessário para que o plugin funcione

>**IMPORTANTE**
>
> O plug-in não é compatível com uma arquitetura de 32 bits (hardware antigo). O módulo é compatível com todos os Raspberry Pi

>**IMPORTANTE**
>
> No RPI, você deve desativar as opções seriais para que a chave conbee funcione corretamente (isso acontece no ssh no raspi-config)

# Módulo compatível

Aqui você encontra a lista de módulos compatíveis com deconz [aqui](https://phoscon.de/en/conbee/compatible)

>**NOTA**
>
> A adição de um módulo não é gerenciada diretamente pela Jeedom SAS, mas pelo editor da fuga de Deconz. Portanto, não podemos garantir que uma solicitação de suporte para um novo módulo seja bem-sucedida. Portanto, é altamente recomendável comprar um módulo compatível

>**NOTA**
>
> No caso de um módulo chamado compatível que não é suportado ou parcialmente suportado, a empresa Jeedom SAS não pode ser responsabilizada e não tem obrigação de resultar na correção de preocupações

# Configuração de plugins

O plug-in suporta vários gateways deconz (1 chave de conexão por gateway). Um gateway conbee pode ser instalado em :

- jeedom propriamente dito (smart, rpi e x64_86 suportado)
- um rpi remoto
- ou qualquer outro cartão compatível com deconz.

Para instalação remota, aqui está o [Documentação](https://phoscon.de/en/conbee/install)

Para instalação no jeedom, basta clicar no botão para instalar o deconz localmente.

>**IMPORTANTE**
>
> Você NÃO DEVE executar os 2 métodos de instalação no mesmo sistema, é um ou outro

>**NOTA**
>
>Para atualizar o deconz local, basta clicar no botão de instalação local deconz

## Adicionando gateways

Para adicionar novos gateways ao plug-in, na página de configuração do plug-in (Plug-in -> Gerenciamento de plug-in e depois deconz), clique em descoberta (nem sempre funciona) ou adicione manualmente pelo menos o ip de o gateway e a porta.

Em seguida, no deconz (Phoscon, se você o instalou localmente, precisará ir ao IPJEEDOM:8484), no menu no canto superior esquerdo (as três pequenas linhas), você precisa ir para "gateway" e depois "avançado" e clicar em "Autenticar aplicativo". Finalmente, nos anos 60, vá para a configuração do plug-in no Jeedom, salve o lista de gateways, se você o tiver alterado, clique em "Recuperar chave da API".

# Redes Deconz

Atenção, no canto superior direito, você tem um botão de seleção para escolher o gateway a ser visto

## Resumo

Aqui você encontrará as principais informações de suas redes deconz (em particular a versão do deconz e do firmware).

## Action

Lá você poderá :

- atualizar o firmware (só funciona se não houver outra chave USB conectada à máquina)
- redefinir (cuidado, é necessário reassociar tudo)
- alterar a fonte de atualização do firmware (não é recomendável tocá-lo)
- mudar de canal

## Noeuds

Aqui você tem um resumo dos nós conhecidos da chave, com a data da última comunicação, a versão do firmware, o nível da bateria e, clicando no botão info, os detalhes do nó.

>**NOTA**
>
>Aqui os nós são cortados por tipo, para que um módulo possa aparecer várias vezes, dependendo do número do tipo

# Inclusion

Para inclusão, basta clicar no botão de inclusão, o sistema solicita o gateway, uma vez validado, você tem 3 minutos para fazê-lo.

Para alternar o módulo para o modo de inclusão, você deve ir para a documentação do módulo em questão

>**IMPORTANTE**
>
> A rede Zigbee é muito diferente da rede Zwave, o zigbee pode passar por um repetidor, mas deve ser o caso da inclusão. Portanto, durante a inclusão do módulo é necessário fazê-lo o mais próximo possível da chave, se você não deseja que a comunicação passe por um repetidor (tenha cuidado, você pode ter no máximo 32 módulos ativos na tecla de conexão).Ou o mais próximo possível do repetidor (qualquer módulo energizado pode ser um repetidor).

# Synchronisation

Após a inclusão, o Jeedom deve enviar você diretamente para a página do novo módulo. Se a descoberta não funcionar, basta clicar em sincronizar

# Equipement

Você encontrará na primeira aba toda a configuração do seu equipamento :

- Nome de equipamentos : nome do seu equipamento de simulação,
- Objeto pai : indica o objeto pai ao qual o equipamento pertence,
- Ativar : torna seu equipamento ativo,
- Visivél : torna seu equipamento visível no painel.
- Um botão de configuração que, dependendo do módulo, oferecerá as opções possíveis (tenha cuidado aqui, o Jeedom exibirá as opções que o módulo as oferece, às vezes não faz muito sentido, dependendo do módulo)
- informações gerais sobre o módulo
- a escolha do visual

>**IMPORTANTE**
>
> Aqui, o gerenciamento de pedidos não é nada parecido com o zwave. Ao incluir um módulo, existem vários casos possíveis :
> - o módulo possui uma configuração específica : neste caso, você tem o visual do módulo e uma configuração adaptada (raramente é o caso, porque pode ser necessário no zigbee)
> - o módulo possui uma configuração genérica, dependendo dos tipos  : você tem um visual genérico e os comandos correspondentes aos tipos do módulo (este é o caso mais comum)
> - módulo e tipos são desconhecidos do jeedom : Nesse caso, você deve abrir uma solicitação de suporte para adicioná-la na próxima atualização do plugin

# Atualização de firmware

## Conbee II

Você pode fazer isso diretamente do jeedom, se a chave estiver conectada, na configuração do plug-in

## Conbee

Vá para [aqui](https://www.dresden-elektronik.de/rpi/deconz-firmware/?C=M;O=D) e verifique se há um novo firmware, se sim, recupere-o

````
wget https://www.dresden-elektronik.de/rpi/deconz-firmware/deCONZ_Rpi_0x26300500.bin.GCF
sudo GCFFlasher_internal -d 0 -f deCONZ_Rpi_0x26300500.bin.GCF
````

>**IMPORTANTE**
>
>Atenção para poder piscar, é absolutamente necessário que todos os daemons em uma chave USb (zwave, enocean, rfxcom ...) sejam cortados e verifique se a chave está realmente em 0 com ``GCFFlasher_internal -l``. É aconselhável desconectar as outras chaves

# FAQ

>**O demônio começa e se interrompe após um minuto**
>
>Se você estiver sob RPI, o serial não deveria ter sido cortado (isso acontece no raspi-config)

>**Eu tenho um equipamento de luz do dia na lista de nós, mas não no Jeedom**
>
>Normalmente, é um equipamento virtual não removível criado pela Deconz. Como não é um equipamento Jeedom "real", não o remonta

>**Estou com o erro "Erro durante a solicitação : 127.0.0.1:8484 / api / 931559A482 / sensores (POST), dados : erro nulo : 1 => usuário não autorizado"**
>
>Você não autorizou o Jeedom a se conectar ao Deconz, você deve deconz (Phoscon, se você o instalou localmente, deve acessar IPJEEDOM:8484), no menu no canto superior esquerdo (as três pequenas linhas), você precisa ir para "gateway" e depois "avançado" e clicar em Autenticar aplicativo e, finalmente, nos anos 60, ir para a configuração do plugin no Jeedom, salvar a lista de gateway, se você o tiver alterado, clique em "Recuperar chave da API"

>**Meu rpi (4) não vê a tecla deconz**
>
>Você deve atualizar o firmware principal usando outro sistema (windows)

>**Consigo controlar meu equipamento, mas não tenho feedback sobre pedidos de informações**
>
>Provavelmente, isso se deve a um problema com fusos horários (deconz é muito exigente). Você deve :
>- verifique em "Deconz Networks" se o fuso horário e a hora estão corretos, caso contrário, você pode configurá-lo em deconz ou marque a caixa "Fusos horários" no gateway na configuração do plug-in deconz (se você fizer esse último método, deverá aguarde 1 hora antes que a correção seja efetivada)
>- verifique o fuso horário do seu sistema operacional (especialmente no rpi) que deve ser absolutamente bom
