1. Introdução 
============

Este plugin permite que você gerencie cartões GCE Ecodevice.

Inicialmente, este plug-in foi criado para conectar os dispositivos ecológicos da GCE.

Dados visíveis no painel : 
-----------------------------------

-   '''Contadores de tele-informação '''

![ecodevice screenshot2](../images/ecodevice_screenshot2.jpg)

-   '''contadores de pulso'''

![ecodevice screenshot3](../images/ecodevice_screenshot3.jpg)

Taxa de atualização 
-----------------------------

O plugin atualiza esses dados de duas maneiras :

Os dados são recuperados pelo plugin a cada minuto para todos
os contadores. Não é possível ter uma frequência mais alta.

Para taxas de fluxo, consumo instantâneo e potência aparente
A coleta é feita por um daemon de acordo com a frequência definida
nível do plugin. Observe que uma grande diminuição gera uma grande
sobrecarregando seu servidor jeedom.

Instalação / Configuração 
========================

Agora vamos configurar um dispositivo. Para fazer isso, clique em
'' 'Plugins / Protocolo de automação residencial / Eco-device'''.

Em seguida, clique no botão no canto superior esquerdo "'' 'Adicionar um
équipement'''".

Em seguida, digite o nome do equipamento (ex. Ecodevice 1).

Então defina :

-   '''Objeto pai'''

-   '''Categoria '' '(opcional)

-   '''Ative '' '(marque, caso contrário, o equipamento não será utilizável)

-   '''Visível '' '(opcional se você não quiser torná-lo visível em
    O painel)

-   '''Endereço IP'''

-   '''Port'''

-   '''Compte'''

-   '''Senha'''

![ecodevice screenshot1](../images/ecodevice_screenshot1.jpg)

Você encontrará todos os elementos do cartão no menu em
esquerda clicando no ícone.

Aqui está a página de configuração do contador. Contanto que o tipo de contador
não está definido, os comandos não são criados.

![ecodevice screenshot4](../images/ecodevice_screenshot4.jpg)

Aqui está a página de configuração para uma entrada de tele-informações. Enquanto o
tipo de contrato não está definido, os pedidos não são criados.

![ecodevice screenshot5](../images/ecodevice_screenshot5.jpg)

Instalação / Configuração 
========================

Este plugin não requer nenhum pré-requisito de instalação.

Faq 
===

No menu esquerdo, clique no ícone a seguir para ter
acesso : ![o](../images/acces_sous_indicateur.jpg)

Por padrão, é a cada minuto. É possível configurar
empurre manualmente o ecodispositivo. Para débitos, consumo
poder instantâneo e aparente pode ser coletado mais
freqüentemente dependendo do demônio.

Clique no ícone à esquerda do nome do cartão na lista de
gauche.

Este plugin é gratuito para que todos possam simplesmente desfrutar. Se
você ainda deseja doar para o desenvolvedor do plugin, obrigado
me manda uma mensagem
privé](https://www.jeedom.com/forum/memberlist.php?mode = perfil de visualização & u = 698)
no fórum.

É inteiramente possível via
[github](https://github.com/guenneguezt/plugin-ecodevice)

Para calcular o fluxo de combustível em uma hora de operação,
conheça a marcação do seu bico de combustível. Pra isso você
encontre as informações em [o documento
suivant](http://fr.cd.danfoss.com/PCMPDF/DKBDPD060A204.pdf).

O valor dado é em USgal / hora com a correspondência em Kg / H.

Para a densidade do combustível, podemos suportar 820Kg / m³ e uma pressão de 7
bar.

Portanto, se você tiver um bico marcado como 0.65S : 2,67 kg / h (dependendo da
Mesa Danfoss). 2,67x0,82 = 2,1894 litros por hora. Isso dá uma
indicação "aproximada" do seu consumo.

Sim, não foi escrito por mim, mas tem o mérito de existir.
Graças ao editor.
<http://blog.domadoo.fr/guides/jeedom-guide-dutilisation-plugin-ecodevice/>

Changelog 
=========

> **Aviso**
>
> Detalhes completos das atualizações em [Histórico
> Commit](https://github.com/guenneguezt/plugin-ecodevice/commits/master)

Lista das principais mudanças na versão atual :

-   Remoção do link Paypal para conformidade com Jeedom V3.1

Desenvolvimentos antigos :

-   Adição de uma chave de API específica ao plug-in

-   Modificação para compatibilidade com Jeedom V3

-   Chega de rastreamento de versão

-   Correção para o firmware 1.04.82

-   Correção trifásica

-   Correção demoníaca

-   Adição da geração automática e inteligente dos comandos de
    Teleinfo

-   Mude a unidade Ampere para A

-   Adicionando daemon para valores que variam rapidamente

-   Ordenar por tipo de medidor (água, gás, eletricidade, combustível)

-   Adição de max e min para o widget

-   Widget padrão

-   Melhoria das perguntas frequentes

-   Comando de reinicialização da correção.

-   Modificação para recriar os subcomandos se eles
    não existe mais.

-   Correção do comando reboot

-   Adição de comando para reinicialização

-   Detecção de xml corrompido.

-   Atualização de entradas analógicas, mesmo que o valor não seja alterado
    para gráficos.

-   Adição de intensidade inscrita.

-   Intensidade máxima.

-   Adição do contador diário no mundo sem combustível.

-   Modificação de Cron para mais autonomia.

-   Modificação da extensão do logotipo.

-   Compatibilidade Imperihome

-   Remoção da remoção de equipamento durante a desativação
    plugin

-   Correção em comparação com o novo núcleo.

-   Remoção da informação `updatetime`.

-   Adição de dados de evolução (variação por minuto).

-   Adicionando uma opção de preço para apresentar apenas os pedidos
    correspondente a ele.

-   Adicionar link às opções de exibição.

-   Correção dupla de cron.

-   Adição do número de pulsos por minuto.

-   Ative novamente até 3 vezes em caso de indisponibilidade
    do ecodispositivo.

-   Adição de informações de status.

-   Não atualize dados se não mudar.

-   Problema no ZIP.

-   Inicialização.


