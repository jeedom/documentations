# Plug-in Geoloc

# Description

Plug-in para gerenciar coordenadas e calcular a distância entre 2 pontos, tempo de viagem (de carro) entre 2 pontos e distância.
Para calcular o tempo de viagem, é necessário ter uma conta de desenvolvedor do Google, para acessar 'Directions API'. Sem uma conta do Google, você pode calcular a distância entre 2 pontos (distância em linha reta), mas não o tempo de viagem ou a distância na estrada.


# Configuration

Assim que o plugin for instalado e ativado no Market, você pode acessar a página do plugin de geolocalização através do menu Plugins → Organização → Geoloc.

O primeiro passo é configurar a chave API que permite a conexão com o Google. Para fazer isso, na configuração do plug-in, insira sua chave API na área fornecida (Direction API). Em seguida, você pode limitar o número máximo de solicitações do Google que o plug-in poderá realizar a cada dia. Isso evita sobrecarga. Por padrão, 1.000 solicitações serão possíveis a cada dia (1.000 solicitações = US$ 5, portanto, aproximadamente US$ 150 por mês no máximo, o que está abaixo dos US$ 200 oferecidos pelo Google a cada mês). Para ter um número ilimitado de solicitações por dia, você deve especificar o valor 0.
Se a chave API do Google não for especificada, o cálculo da distância (rota e tempo de viagem) não será calculado. Apenas a distância "como o corvo voa" será calculada.

![geoloc30](../images/geoloc30.png)

Aqui você encontra todo o seu equipamento Geoloc :

![geoloc29](../images/geoloc31.png)

Depois de selecionar um item de equipamento, você chega nesta página :

![geoloc screenshot1](../images/geoloc32.png)

L'onglet «Equipement» permet de choisir le nom de l'équipement, l'objet parent ainsi que son état et sa visibilité.

Você pode então escolher se este equipamento deve ser atualizado a cada 5 minutos. Por exemplo, não é necessário para equipamentos fixos (Casa ou Trabalho (Ben) no meu caso), mas é usado para equipamentos móveis (Mobile Ben).
Para ativar a atualização, a caixa "Automático (cron)" deve ser marcada.
Então você pode configurar a validade do cache. Por padrão, o cache é válido por 5 minutos (300 segundos). A cache é utilizada caso o equipamento não tenha movimentado, seja qual for a validade da cache, ou se a informação ainda for válida. Sempre é possível forçar uma atualização das informações através da função "refresh" do equipamento. Nesse caso, as informações sobre o equipamento são apagadas do cache, as informações recuperadas do Google e inseridas de volta no cache para uso posterior.


L'onglet «Commandes» permet d'ajouter les informations que nous voulons obtenir. Após a adição do equipamento, temos a opção entre três tipos de controles : fixo, dinâmico e à distância.

![geoloc screenshot2](../images/geoloc_screenshot2.jpg)

## Fixe

Representa um ponto com coordenadas que não mudam. Por exemplo, as coordenadas da sua casa, do seu trabalho, etc ... Basta anotar as coordenadas no formulário : ``Latitude,Longitude``.

![geoloc3](../images/geoloc3.jpg)

Pour trouver les coordonnées de votre position fixe, allez simplement sur Google map : <https://www.google.com / maps / preview> . Se você estiver procurando um endereço, os detalhes do contato estarão no endereço URL, por exemplo, na 25 rue de Mogador :

![geoloc4](../images/geoloc4.jpg)

Você também pode clicar com o botão esquerdo no mapa e as coordenadas aparecerão no pequeno mapa no canto superior esquerdo.

![geoloc4](../images/geoloc4.jpg)

## Dynamique

Representa um ponto com coordenadas variáveis, o objeto se move. Este é geralmente o seu laptop. Portanto, esse pedido conterá os últimos detalhes de contato enviados até você enviar novos. O URL para atualizar este comando é :

``\#URL\_JEEDOM\#/core/api/jeeApi.php?api=\#API\_KEY\#&type=geoloc&id=\#ID\_CMD\#&value=%LOC``

\#URL\_JEEDOM\# corresponde ao seu URL de acesso Jeedom. Este é (a menos que você esteja conectado à sua rede local) o endereço da Internet que você usa para acessar o Jeedom de fora. Não se esqueça de indicar a porta, bem como / jeedom /.

api=\#API\_KEY\# corresponde à sua chave API, específica para sua instalação. Para encontrá-lo, você pode acessar o plug-in Géoloc, que é indicado diretamente no URL.

![geoloc5](../images/geoloc5.jpg)

Soit dans le menu « Général », puis « Administration » et « Configuração », en activant le mode Expert vous verrez alors une ligne clé API.

![geoloc6](../images/geoloc6.jpg)

&lt;id=\#ID\_CMD\# corresponde ao ID do seu pedido. Une fois que vous avez donné un nom à votre commande de Géolocalisation, déterminé son type et sauvegardé, un numéro apparaît dans la case « \# » devant le nom votre commande.

![geoloc7](../images/geoloc7.jpg)

``%LOC`` corresponde às suas coordenadas no formato Latitude, Longitude.

Portanto, você deve executar um HTTP POST neste endereço substituindo% LOC pelos seus detalhes de contato.

# Exemplo Android com Tasker

Atenção : Neste exemplo, você precisa do aplicativo Tasker para Android
(<https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm>). Dans l'onglet « Tâches », nous rajoutons une nouvelle tâche ici appelée « Jeedom ».

![geoloc8](../images/geoloc8.jpg)

Nous y ajoutons une première action, dans la catégorie « Divers », nous sélectionnons « Obtenir la localisation ».

![geoloc9](../images/geoloc9.jpg)

![geoloc10](../images/geoloc10.jpg)

Usaremos qualquer fonte para obter nossa posição e definiremos um prazo de 30 segundos para que Tasker tenha o
hora de obter nossos detalhes de contato.

![geoloc11](../images/geoloc11.jpg)

![geoloc12](../images/geoloc12.jpg)

Um período de tempo muito curto pode não permitir a obtenção de detalhes de contato ou detalhes imprecisos. É o mesmo para o tipo de fonte. Nous ajoutons une deuxième action, dans la partie « Réseau » cette fois, nous sélectionnons « Post HTTP ».

![geoloc13](../images/geoloc13.jpg)

![geoloc14](../images/geoloc14.jpg)

Dans la case « Serveur :Port » nous copions notre URL complétée sauf pour la partie %LOC.

![geoloc15](../images/geoloc15.jpg)

![geoloc16](../images/geoloc16.jpg)

Lorsque nous lançons notre tâche « Jeedom », une icône devrait vous informer de l'utilisation de votre GPS dans votre barre de notification.

![geoloc17](../images/geoloc17.jpg)

Une fois le délai écoulé, nous cliquons sur « tester » dans Jeedom et les coordonnées de notre portable apparaissent alors dans le popup. O Tasker substituiu automaticamente a variável% LOC pelos seus detalhes de contato.

![geoloc18](../images/geoloc18.jpg)

Agora você só precisa criar um cenário no Tasker que iniciará esta tarefa quando você precisar. Por exemplo, a cada hora, quando você se conecta por wifi…

# Distância, Tempo de Viagem e Distância de Viagem

Calcula a distância, o tempo da viagem (de carro, usando o Google Maps) ou a distância de uma viagem (de carro, usando o Google Maps) entre dois pontos. Portanto, é necessário já ter preenchido pelo menos dois comandos. Aqui temos as coordenadas fixas da nossa casa, bem como as coordenadas atualizadas do nosso celular. Para que possamos calcular a distância entre os dois. Nous sélectionnons « Distance » en type et nos deux commandes précédentes dans les options. Uma vez salvos, usamos o botão de teste e a distância aparece no pop-up. Aqui 1.34 km.

![geoloc19](../images/geoloc19.jpg)

Da mesma forma, se você deseja o tempo ou a distância de uma jornada,
deve escolher respectivamente no tipo : "Tempo de viagem "ou" Distância
viagem".

Esse plug-in funciona como um módulo, ou seja, uma vez salvo, podemos encontrá-lo na lista de ações ou comandos; portanto, é muito simples usá-lo ao criar cenários, por exemplo. Podemos, por exemplo, realizar um cenário baseado na distância entre o laptop e a casa, por exemplo.

# Cenário de exemplo

Dans la partie « Scénario », nous créons un scénario nommé « Géoloc TV » qui nous permet d'allumer la TV quand nous sommes à moins de 250 m de notre maison. Atenção : sistemas de posicionamento não são precisos para o medidor mais próximo, lembre-se de ter uma margem ao criar seus cenários. Dans « Mode de scénario » nous choisissons « Provoqué » et en « Déclencheur » nous ajoutons notre portable. De fato, é quando as coordenadas do nosso celular serão atualizadas que acionaremos o cenário.

![geoloc20](../images/geoloc20.jpg)

Nous ajoutons un élément « Si / Alors / Sinon » avec comme condition une distance inférieure à 250 m et comme action la mise sous tension de la TV.

![geoloc21](../images/geoloc21.jpg)

Nous n'avons rien mis dans la partie « Sinon » ainsi il ne se passera rien si je suis à plus de 250 m. Uma vez salvos, podemos olhar para o log. Vemos aqui que Jeedom testou a distância entre o laptop e a casa e, como o último tem mais de 250 m, nada aconteceu.

![geoloc22](../images/geoloc22.jpg)

Para o nosso teste, verificamos que a TV está desligada, o widget mostra um consumo de 0 watt.

![geoloc23](../images/geoloc23.jpg)

Chegamos mais perto da nossa casa e começamos a tarefa no Tasker. Podemos ver testando a distância de 0,03 km agora. Então, estamos bem abaixo dos 250 m.

![geoloc24](../images/geoloc24.jpg)

A parte do cenário informa que foi lançada recentemente.

![geoloc25](../images/geoloc25.jpg)

Um tour no log permite ver que ele foi lançado após a atualização das coordenadas do celular e que a distância era muito menor que 0,25 km.

![geoloc26](../images/geoloc26.jpg)

O plug-in da TV na tela inicial mostra que agora está ligado.

![geoloc27](../images/geoloc27.jpg)

Aqui está um exemplo de uso do plug-in de geolocalização.

É claro que fizemos o HTTP POST a partir de um smartphone Android, mas é bastante concebível que um tablet possa fazer a mesma coisa (com a Internet) ou até mesmo um laptop com um script para recuperar e enviar seus detalhes.
