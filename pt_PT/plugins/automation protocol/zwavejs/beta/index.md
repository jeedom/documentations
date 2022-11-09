# Plugin Z-Wave JS

O plugin Z-wave JS permite **controle total do protocolo de automação residencial Z-Wave em Jeedom** baseado no trabalho realizado em torno da famosa biblioteca **IU do Z-Wave JS**.

O plugin Z-wave JS torna as transmissões mais confiáveis e seguras usando o **Protocolo MQTT**, oferecendo, ao mesmo tempo, possibilidades avançadas de gerenciamento de sua rede Z-Wave para os usuários mais experientes.

>**IMPORTANTE**
>
>Este plugin é compatível com o Debian 11 "Bullseye" e, portanto, é o plugin oficial a ser preferido para gerenciar sua rede Z-Wave no Jeedom.

# Configuration

Depois de instalar e ativar o plugin, a instalação das dependências deve começar, a menos que o gerenciamento automático tenha sido desativado anteriormente. Neste caso, você terá que clicar no botão **Reviver** para iniciar esta fase de instalação. O plug-in oficial **Gerente MQTT** fazendo parte das dependências necessárias, ele será instalado e ativado automaticamente durante a operação, caso ainda não seja o caso.

O restante das dependências consiste em baixar, compilar e configurar a biblioteca **IU do Z-Wave JS**.

>**EM FORMAÇÃO**
>
>A primeira instalação de dependências, incluindo uma fase de compilação, provavelmente durará várias dezenas de minutos, dependendo da configuração do seu hardware. As atualizações de dependência são muito mais rápidas de instalar depois.

## Configuração do plug-in

Com relação à configuração do plugin, o ponto essencial é a seleção correta do **Porta do controlador Z-Wave** correspondente à interface física na qual o controlador está conectado.

Outras configurações possíveis são :

- **Aplique o conjunto de configuração recomendado ao incluir** : aplica diretamente o conjunto de configuração recomendado pela equipe Jeedom ao incluir um novo módulo *(conseillé)*.

- **Remoção automática de dispositivos excluídos** : remove automaticamente os dispositivos excluídos da rede Z-Wave se marcado. Caso contrário, o equipamento é mantido em Jeedom mesmo que tenha sido excluído da rede. O equipamento terá então que ser excluído manualmente ou reutilizado atribuindo-lhe um novo identificador Z-Wave.

- **Prefixo** : permite especificar o prefixo a ser usado no MQTT *(padrão `zwave`)*.

### Chaves de segurança

As chaves de segurança devem ser mantidas em local seguro. Se você perder essas chaves, os dispositivos incluídos no modo de segurança precisarão ser pareados novamente. As chaves podem ser especificadas, se os campos estiverem vazios ou inválidos o plugin irá gerá-los e você poderá visualizá-los mais tarde.

>**IMPORTANTE**
>
>Se o seu controlador foi usado com o plugin Openzwave e você incluiu módulos no modo seguro, a chave S0 é : `0102030405060708090A0B0C0D0E0F10`.

## Gerente MQTT

Conforme explicado no preâmbulo, o plugin Z-Wave JS requer suporte para o protocolo MQTT para se comunicar, o plugin oficial **Gerente MQTT** servirá, portanto, de suporte para essas comunicações.

Vários cenários são possíveis :

- **Você ainda não está usando um broker MQTT** : Neste caso você não tem nada para fazer. Plug-ins **Z-Wave JS** e **Gerente MQTT** trocará as informações e configurações necessárias automaticamente *(um broker `Mosquitto` será instalado localmente na máquina)*.

- **Você já está usando o plugin MQTT Manager** : Nenhuma intervenção é necessária, o plugin Z-Wave JS recuperará automaticamente as informações de conexão com o broker MQTT.

- **Você já está usando um broker MQTT por meio de um plug-in diferente do MQTT Manager** : Nesta situação, você deve selecionar o modo **corretor remoto** e fornecer informações de login *(endereço e autenticação)* na configuração do plug-in do MQTT Manager.

- **Você deseja usar um broker MQTT no Docker** : Tudo o que você precisa fazer é selecionar o modo **docker do corretor local** na configuração do plugin MQTT Manager antes de instalar o `Mosquitto`.

De qualquer forma, o daemon de plug-in do MQTT Manager deve ser iniciado antes que você possa prosseguir. Caso contrário, uma mensagem irá avisá-lo, impedindo o início do daemon Z-Wave JS.

## Abra o plug-in Zwave

Também é importante abordar o caso da presença do plugin OpenZwave em paralelo com o plugin Z-Wave JS, o tempo para mudar de um para o outro por exemplo *(Ver parágrafo [**Migração do OpenZwave**](#Migration%20depuis%20OpenZwave))*.

Em primeiro lugar, você deve saber que não há absolutamente nenhum risco em usar os plugins Z-Wave JS e OpenZwave em paralelo. Mesmo em caso de dificuldade com o plugin Z-Wave JS, será suficiente parar seu daemon e reiniciar o do plugin OpenZwave para encontrar uma rede Z-Wave exatamente idêntica e funcional.

Portanto, é necessário interromper o gerenciamento automático e, em seguida, interromper o daemon do plug-in OpenZwave para poder iniciar o daemon do plug-in Z-Wave JS. Novamente, se não, uma mensagem irá avisá-lo, impedindo o início do daemon Z-Wave JS.

>**IMPORTANTE**
>
>Não exclua nenhum equipamento do plug-in OpenZwave prematuramente, mesmo que seja desativado durante o teste!

## 1ª inicialização do daemon

A menos que instruído de outra forma, o daemon Z-Wave JS agora pode ser iniciado. Caso contrário, uma mensagem deve aparecer na página de configuração do plugin para identificar o motivo do bloqueio.

Se você usar o plugin Z-Wave JS com um controlador em branco, a rede Z-Wave é imediatamente iniciada e disponível, pronta para inclusões de módulos.

No caso de uso com um controlador já incluído em uma rede Z-Wave, deve-se deixar o plugin funcionar, que automaticamente fará o upload do equipamento no Jeedom à medida que os módulos forem entrevistados. A primeira descoberta total de uma rede Z-Wave provavelmente levará muito tempo, dependendo do tipo de módulos usados e de sua frequência de comunicação.

Os módulos aparecem em duas etapas :
- Primeiro com seu 'node id' sem imagem e sem identificação.
- Eles são então identificados em uma segunda vez.

Uma vez que todos os módulos na rede são iniciados e, portanto, identificados, é importante acordar os módulos nas baterias ou esperar que eles acordem. É somente a partir deste momento que podemos considerar a rede como totalmente iniciada.

>**EM FORMAÇÃO**
>
>Ao contrário do plugin OpenZwave, após esta primeira fase de entrevista, as reinicializações da rede são instantâneas.

## Configuração do módulo

### Noeud

### Valeurs

### Groupe

# Outils

## Inclusion

## Exclusion

## Synchroniser

## Rede Z-Wave

### Resumo

### Actions

### Statistiques

### Gráfico de rede

### Tabela de roteamento

## Santé

## Statistiques

# Compatibilité

# Solução de problemas e diagnóstico

## Migração do OpenZwave

Antes de considerar mudar permanentemente do plugin OpenZwave para o plugin Z-Wave JS, é essencial garantir que todos os módulos de rede sejam totalmente suportados. Esta etapa pode facilmente levar vários dias para validar todas as possibilidades e cenários.

Então, uma vez certo que o plugin OpenZwave não é mais essencial, você pode usar o [**substituição de equipamentos e controles**](https://doc.jeedom.com/pt_PT/core/4.3/replace){:target="\_blank"} do núcleo para migrar rápida e facilmente seu equipamento existente para o novo plugin.

## Módulo não ou mal reconhecido

## Substitua um módulo defeituoso
