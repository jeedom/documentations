# Plug-in de script

Plugin que permite executar scripts (shell, php, ruby ...), solicitações http, para recuperar informações em XML ou JSON.

# Configuração do plugin

A configuração é muito simples, depois de baixar o plugin, você só precisa ativá-lo e pronto.

![configuration](../images/configuration.png)

A única opção é onde o jeedom coloca os scripts por padrão; é aconselhável não tocá-los.

# Configuração do equipamento

A configuração do equipamento Script pode ser acessada no menu plugin / programação

É assim que a página do plugin Script se parece (aqui já com o equipamento) :

![liste des équipements](../images/liste_equipement.png)

Aqui está a lista dos seus scripts. Depois de clicar em um equipamento, você obtém :

![équipement](../images/equipement.png)

Aqui você encontra toda a configuração do seu equipamento :

- **Nome do equipamento de script** : nome do seu equipamento de script
- **Categoria** : categorias de equipamentos (pode pertencer a várias categorias)
- **Ativar** : torna seu equipamento ativo
- **Visivél** : torna visível no painel
- **Objeto pai** : indica o objeto pai ao qual o equipamento pertence
- **Atualização automática** : permite especificar um cron de atualização automática para todos os comandos do tipo de informação.
- **Atraso antes de atualizar as informações após uma ação** : Digite o número de segundos

![commandes](../images/commandes.png)
Aqui você encontra a lista de pedidos :

- **Nome** : Este campo contém o nome que você deseja dar ao seu pedido / informações.
- **ícone** : Este campo permite associar um ícone ao seu nome (nesse caso, o Jeedom substitui o nome pelo ícone no Painel).
- **Tipo de script** :
  - O tipo **HTTP** : permite enviar uma solicitação para um dispositivo externo sem necessariamente esperar o retorno desse comando. O exemplo que servirá de suporte para o tipo http será a configuração de uma solicitação para uma Vera acender uma luz.
  - O tipo **Escrita** : usado principalmente para executar scripts Jeedom internos. O exemplo que servirá de suporte para o tipo de script será a configuração do script de monitoramento de temperatura da framboesa.
  - O tipo **XML** : permite recuperar informações codificadas em XML de um dispositivo remoto. O exemplo que servirá de suporte para o tipo XML será a configuração do script para consultar um Eco-Device.
  - O tipo **JSON** : permite recuperar informações codificadas em JSON de um dispositivo remoto. O exemplo que servirá de suporte para o tipo JSON será a configuração do script para consultar Sickbeard (ou XBMC).
- **o tipo** e o **Subtipo**
- O campo **Pedido**
  - Este campo deve conter a própria consulta ou o caminho do script se o campo "type of script" for script. O botão "navegar"" : permite selecionar o arquivo contido na pasta interna Jeedom.

        > Este arquivo está acessível no SSH em ``/var/www/html/plugins/script/data/``. FYI, o comando SSH para atribuir direitos ``www-data`` para um arquivo é : ``sudo chown www-data:www-dados NOMDUSCRIPT.EXTENSION``. Observe que, para executar um script, ele deve ter direitos www-data.

  - O botão **Editar** : permite editar usando um editor de código interno um dos arquivos contidos no diretório, permitindo acesso ao código do arquivo.
  - O botão **Novo** : permite criar um arquivo de comando.

        > Não se esqueça de inserir o nome do arquivo e sua extensão completa, caso contrário, seu excelente script não funcionará. Sem extensão, o Jeedom não poderá reconhecer o idioma associado ao seu arquivo. CF : Geral
  - O botão **Remover** : permite excluir um arquivo de comando.
- O campo **Opções** : Campo com opções variáveis, dependendo da escolha do tipo de script.
- **Unidade** : unidade de dados (pode estar vazia).
- **min / max** : limites de dados (podem estar vazios).
- **Historicizar** : permite historiar os dados.
- **Display** : permite exibir os dados no painel.

> **IMPORTANTE**
>
> Caracteres especiais devem ser evitados no caminho do script ou em seus parâmetros, tanto quanto possível. Os caracteres permitidos sendo : números, letras (maiúsculas ou minúsculas)

> **IMPORTANTE**
>
> Você pode no campo request (para http, json, xml) colocar json, basta precedê-lo com `json::`, exemplo `json::{"clef":"valeur"}`

![exemple](../images/exemple.png)

Usado para chamar um URL ou recuperar o retorno de um URL.

- uma caixa de seleção "Não marque SSL" : se marcado, permite que o Jeedom não envie os campos "Usuário" e "Senha" quando solicitado. A Jeedom não procurará se identificar no site / máquina remota.
- uma caixa de seleção "Permitir resposta em branco" : se marcado, permite que o Jeedom não espere por uma resposta ou ignore qualquer resposta ao quadro transmitido. Em geral, verificamos se o Jeedom retorna um "erro de curvatura" : Resposta vazia do servidor".
- uma caixa de seleção "Nunca relatar erros" : permite não emitir um alerta em caso de erro.
- um campo de tempo limite" : sem ser inserido, o tempo limite da solicitação é por padrão 2 segundos, caso contrário, vale o valor inserido.
- um campo "Máximo de tentativas" : Máximo de 4 testes por padrão.
- um campo "Usuário"" : para inserir um nome de usuário.
- um campo "Senha"" : inserir uma senha.

# A escolha do HTML

![Escrita HTML](../images/script_html.png)

Permite que você passe uma página da web (arquivo HTML) para recuperar um valor acima. A sintaxe é a mesma que para jquery.

O campo de opção possui um campo "URL do arquivo HTML"" : portanto, este campo contém o link para a máquina que hospeda o arquivo HTML em questão.

# A escolha XML

![Escrita XML](../images/script_xml.png)

Permite recuperar xml e procurar especificamente um valor nele.

O campo de opção possui um campo "URL do arquivo XML"" : portanto, este campo contém o link para a máquina que hospeda o arquivo XML em questão.

> **IMPORTANTE**
>
> Somente valores podem ser recuperados, atributos não podem ser recuperados.

# A escolha JSON

![Escrita JSON](../images/script_json.png)

Permite recuperar json e procurar especificamente um valor nele.

O campo de opção possui um campo "URL do arquivo JSON"" : portanto, este campo contém o link para a máquina que hospeda o arquivo JSON em questão.

# Exemples

## HTTP : Pilotar uma Vera

O exemplo é baseado em uma Vera e consiste em dirigir uma lâmpada regulável. Não vou me concentrar em como controlar uma Vera por solicitação http, o fórum do TLD está cheio de respostas. Além disso, o exemplo corresponde ao meu tipo de material e terá que ser adaptado ao seu.

> **Dica**
>
> Um método para quem procura escrever solicitações http, primeiro valida a sintaxe no seu navegador e só depois vai para a configuração em Jeedom. Quando um script de ação não funciona, alternar para o script Info / Other permite que você veja o erro retornado.

Vamos lá :

- Criamos equipamentos : por exemplo LUM KITCHEN (acho que todos temos uma cozinha à mão)
- Nós o associamos a um objeto pai : por exemplo, VERA, permite centralizar todos os pedidos relacionados a VERA em um único pai.
- Escolha sua categoria.
- Ative seu equipamento, não marque visível, veremos um pouco mais tarde como associá-lo a um virtual (mais sexy, mais WAF)
- Para a atualização automática, não coloque nada, é um comando de impulso vinculado ao pressionar um botão ou um cenário !
- Adicionar um comando de script
- Lembre-se de salvar

Explicações :

- Nome : 100% porque acenderemos uma luz com força total
- Tipo de script : http
- Tipo : Ação (este é um comando)
- Subtipo : Falha
- Pedido :

`` ''url
http://<IP_VERA>:3480/data_request?id=lu_action&output_format=json&DeviceNum=12&serviceId=urn:upnp-org:serviceId:Dimming1&action=SetLoadLevelTarget&newLoadlevelTarget=100
`` ''

> **Dica**
>
> o "100" no final da solicitação corresponde à porcentagem de energia a ser atribuída, portanto, colocar "0" no final da solicitação corresponde a desligar a lâmpada.

O botão "testar" permite que você teste seu pedido !

Portanto, você pode multiplicar pedidos no mesmo equipamento, por exemplo, fazendo um pedido a 60% para luz fraca, criando um terceiro a 30% para que as viagens noturnas sejam combinadas em um cenário etc

Também é possível criar um comando do tipo slider colocando a tag `#slider#` na consulta :

`` ''url
http://<IP_VERA>:3480/data_request?id=lu_action&output_format=json&DeviceNum=12&serviceId=urn:upnp-org:serviceId:Dimming1&action=SetLoadLevelTarget&newLoadlevelTarget=#slider#
`` ''

> **Dica**
>
> Se o seu comando for do tipo mensagem você pode usar as tags `#message#` e `#title#`, o mesmo para um comando de tipo de cor com a tag `#color#`, ou tipo de controle deslizante com `#slider#` ou lista com `#select#`

## HTTP : Enviar notificação para XBMC

Finalidade : Envie uma notificação para XBMC ao abrir uma porta da frente.

- Nome : PUSH XBMC
- Tipo de script : http
- Tipo : Ação (este é um comando)
- Subtipo : Falha
- Pedido :

`` ''url
http://IP_DE_XBMC:8080/jsonrpc?request={ %22jsonrpc%22:%222.0%22,%22method%22:%22GUI.ShowNotification%22,%22params%22:{ %22title%22:%22Mouvement% 20Détecté%22,%22message%22:%22Porte% 20Entrée%22},%22id%22:1}
`` ''

Cabe a você testar isso em um cenário, por exemplo !

API XBMC [aqui](http://wiki.xbmc.org/index.php?title=JSON-RPC_API/v6) (somente os campos marcados com "obrigatório" são obrigatórios)

Finalidade : Envie uma notificação para XBMC quando a temperatura cair abaixo de um determinado limite

Veja o exemplo acima :

- substitua `Movimento%20Detectado` por `Risco%20de%20congelar`
- substitua `Porta%20Entrada` por `Temperatura%20exterior%20:% 20#[EXTERIEUR][EXTERIEUR][TEMPERATURE]#`

Teste em um cenário `#[EXTERIEUR][EXTERIEUR][TEMPERATURE]# < 5` par exemple

Ação : Inicie o script, via equipamento virtual, vinculado ao seu script !

## SCRIPT

O mais legal, mas não o mais fácil de explicar.

**Pré-requisitos : saber como desenvolver um script em php, python, perl ou ruby.**

>**IMPORTANTE**
>
> A extensão do seu script deve corresponder absolutamente ao seu tipo. Na verdade, o Jeedom é baseado na extensão do script para o executável iniciar
>
> Se o seu nome de arquivo não contiver :
>
> - .php .py .pl .rb
>

O plugin de script iniciará um shell que o executará com base na diretiva da 1ª linha (shebang ).
Exemplo :

`` ''bash
#!/ bin / csh -f
#!/ bin / ksh
#!/ usr / bin / env python3
#!/ usr / bin / env php
#!nó / usr / bin / env
Etc ...
`` ''

O script de monitoramento de temperatura da framboesa servirá como um exemplo para usar o tipo de script : Script

Após o download do script, o botão "Procurar" permite selecionar o arquivo temp\_rasp.php.

Por curiosidade, você pode ver o conteúdo do arquivo pressionando o botão "Editar", você deve obter o seguinte código :

Este é um script php que pode ser reutilizado fora do Jeedom !

`` ''php
<?php
$temp = shell_exec("cat /sys/class/thermal/thermal_zone0/temp");
$temp = $temp / 1000;
$temp = round($temp,1);
echo $temp;
?>
 `` ''

NOTA : concretamente, é a função php "echo" que dará valor ao Jeedom

### Os parâmetros

Obtenha as informações de Jeedom para usá-las em um script. A recuperação depende do tipo de script usado :

- Na linha : `/var/www/html/plugins/script/data/my_script.php my_value`, o argumento `my_value` est une chaîne de caractères (fixe) récupérée dans le Escrita php dans le tableau d'arguments `$argv` voir <https://www.php.net/manual/fr/reserved.variables.argv.php> para mais detalhes.
- Vimos anteriormente que era possível recuperar valores dinâmicos do Jeedom.
- Na linha : `/var/www/html/plugins/script/data/radio.VOL #slider#`, o argumento `#slider#` é recuperado desta forma `$argv[2]`. Quando o script for executado pelo Jeedom, ele substituirá automaticamente `#slider#` pelo valor (numérico) do controle deslizante. consulte o Google para obter detalhes sobre como recuperar parâmetros em Python.

- Mais forte : Potencialmente, todas as variáveis acessíveis pelo Jeedom podem ser usadas pelo plugin de script :
  - Você deseja recuperar o valor da temperatura da cozinha para armazená-la fora do Jeedom ?
  - Pular `#[MAISON][CUISINE][Température]#` como parâmetro para o script e Jeedom irá substituí-lo pelo valor lido ao enviar.

Recomendação para testar os parâmetros no script php :

`` ''php
if (isset($argv)) {
    foreach ($argv como $arg) {
        $argList = explode('=', $arg);
        if (isset($argList[0]) && isset($argList[1])) {
            $_GET[$argList[0]] = $argList[1];
        }
    }
}
`` ''

## XML único

Aqui está o formato do XML padrão :

`` ''xml
<root>
    <led0>1</led0>
    <leds>
        <led1>toto</led1>
    </leds>
</root>
`` ''

Se você quiser o valor de led0 na consulta, coloque led0. Si vous voulez la valeur de la led1 qui est le fils de leds vous mettez leds &gt; led1.

Notez que l'élément racine &lt;root&gt; n'est pas à préciser dans le champ Pedido.

## XML complexo

`` ''xml
<root>
    <led0>1</led0>
    <leds>
        <led1>toto</led1>
    </leds>
    <leds>
        <led1>tata</led1>
    </leds>
</root>
 `` ''

a sintaxe é :

`leds > 1 > led1` que dá tata em resposta, sendo 1 o número da linha do array !

## XML mais complexo

`` ''xml
<AKT_Data ID="SMS-Liste" ZeitSt="01.05.2017 18:55">
    <MesPar DH="HBCHa" StrNr="2167" Typ="02" Var="02">
        <Name>Tresa - Ponte Tresa, Rocchetta</Name>
        <Datum>01.05.2017</Datum>
        <Zeit>18:50</Zeit>
        <Wert>268.56</Wert>
        <Wert dt="-24h">268.51</Wert>
        <Wert Typ="delta24">0.051</Wert>
        <Wert Typ="m24">268.52</Wert>
        <Wert Typ="max24">268.56</Wert>
        <Wert Typ="min24">268.50</Wert>
    </MesPar>
    <MesPar DH="HBCHa" StrNr="2265" Typ="03" Var="02">
        <Name>Inn - Tarasp</Name>
        <Datum>01.05.2017</Datum>
        <Zeit>18:50</Zeit>
        <Wert>4.85</Wert>
        <Wert dt="-24h">7.98</Wert>
        <Wert Typ="delta24">-3.130</Wert>
        <Wert Typ="m24">6.15</Wert>
        <Wert Typ="max24">7.98</Wert>
        <Wert Typ="min24">4.85</Wert>
    </MesPar>
    <MesPar DH="HBCHa" StrNr="2270" Typ="02" Var="32">
        <Name>Doubs - Combe des Sarrasins</Name>
        <Datum>01.05.2017</Datum>
        <Zeit>18:00</Zeit>
        <Wert>500.65</Wert>
        <Wert dt="-24h">500.65</Wert>
        <Wert Typ="delta24">0.000</Wert>
        <Wert Typ="m24">500.65</Wert>
        <Wert Typ="max24">500.65</Wert>
        <Wert Typ="min24">500.64</Wert>
    </MesPar>
</AKT_Data>
`` ''

Para recuperar informações do campo Wert do 1º bloco:

`MesPar>0>Wert>0` que, portanto, retorna "268.56 "

Para retornar o próximo elemento na "estrutura" Wert, basta indicar o número do pedido na estrutura. O que dá para o elemento `<Wert Typ="delta24"> 0.051</Wert> ` o seguinte código :

`MesPar>1>Wert>2`

Para passar para o próximo bloco "MyPar", é necessário alterar o índice de acordo : o 1 por 2, por exemplo.

Atenção : Se o pedido for alterado no arquivo XML, a solicitação não funcionará mais. Será necessário reajustar a solicitação de acordo com a ordem devolvida.

## JSON

Como o tipo XML, é possível ler informações de um retorno JSON.

Para explicar, vou me basear nas informações JSON com o aplicativo Sickbeard (boo… cpasbien), mas aqui apenas a técnica principal, não a ferramenta!

O acesso a este arquivo é possível usando o seguinte URL :

`http://<IP_DELAMACHINEQUIEBERGESICKBEARD>:8083/api/XXXX/?cmd=histórico&limit=3`

NOTA : XXXX é o número da chave da API específico para cada SICKBEARD.

Antes de tudo, antes de iniciar a configuração do plug-in de script JSON, é uma questão de identificar corretamente as informações a serem recuperadas., porque aqui vamos integrar uma noção de matriz nos retornos.

Valide a exibição de informações do seu navegador (teste no Chrome).

Exemplo de retorno :

`` ''json
{
    "data": [
        {
            "date": "2014-09-10 01:37",
            "episode": 4,
            "provider": "RNT",
            "quality": "SD-TV",
            "resource": "XXX",
            "caminho_recurso": "XXXX",
            "season": 2,
            "show_name": "Totovaalage S2E4",
            "status": "Downloaded",
            "tvdbid": XXXXX
        },
        {
            "date": "2014-09-10 01:36",
            "episode": 3,
            "provider": "RNT",
            "quality": "SD-TV",
            "resource": "XXXX",
            "caminho_recurso": "XXX",
            "season": 2,
            "show_name": "Totovaalaplage S2E3",
            "status": "Downloaded",
            "tvdbid": XXXXX
        },
        {
            "date": "2014-09-10 01:21",
            "episode": 1,
            "provider": "Cpasbien",
            "quality": "SD-TV",
            "resource": "XXXX",
            "caminho_recurso": "XXXX",
            "season": 1,
AQUI --> "show_name": "Totovaplusauski mas Totovaalaplage S1E1",
            "status": "Snatched",
            "tvdbid": XXXX
        }
    ],
    "message": "",
    "result": "success"
}
`` ''

Na hipótese em que gostaríamos de retornar o show\_name do terceiro elemento em php (marcado AQUI), teríamos que fazer : data> 2> show\_name, o índice da matriz de retorno começando em Zero.

Neste exemplo, o botão "Teste" retornará "Totovaplusauski, mas Totovaalaplage S1E1".

Detalhes :

Observe a sintaxe do comando Query, do tipo element0> índice da matriz> elemento1

Desvantagens :

- esse método permite recuperar apenas um elemento de cada vez.
- Se você deseja retornar todos os valores de "show\_name", infelizmente isso não é possível, você deverá duplicar o script quantas vezes forem necessárias.

## HTML

Aqui tentaremos recuperar o último FML.

Primeiro você precisa configurar o URL :

``http://www.viedemerde.fr``

Então você tem que encontrar o "caminho" do último FML. Para fazer isso, acesse o site e clique com o botão direito do mouse no item desejado e depois inspecione o item :

![Exemplo HTML 1](../images/exemple_HTML_1.png)

Esta é a parte mais complexa e requer um pouco de análise. Aqui meu texto está em uma tag "a" que está em um elemento do tipo p que é uma classe div "post article". Então, eu tenho que selecionar o primeiro elemento div da classe "post" e "article", depois o primeiro elemento pe obteremos tudo nas tags "a" que ele contém. Então eu tenho : "div.post.article:primeiro p:primeiro a".

Então nós temos :

![Exemplo HTML VDM](../images/exemple_HTML_VDM.png)

Para uma atualização em tempo real, é possível colocar um cron de atualização.

> **Dica**
>
> Ao instalar um cron de atualização, o Jeedom marcará automaticamente a caixa Evento, isso é completamente normal.

Aqui você pode imaginar um cenário que envia por SMS o último FML.
