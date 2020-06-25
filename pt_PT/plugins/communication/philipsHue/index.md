# Philips Hue plugin

Plug-in para integrar-se ao ecossistema Philips Hue (pode gerenciar até 2 pontes simultaneamente).

# Configuração do plugin

Após o download do plug-in, você precisará inserir o endereço IP da (s) sua (s) ponte (s) de matiz.

# Configuração do equipamento

> **NOTA**
>
> Você sempre terá o equipamento "Todas as lâmpadas", que realmente corresponde ao grupo 0, que existe o tempo todo

Aqui você encontra toda a configuração do seu equipamento :

-   **Nome do equipamento Hue** : nome do seu equipamento Hue,
-   **Objeto pai** : indica o objeto pai ao qual o equipamento pertence,
-   **Categoria** : categorias de equipamentos (pode pertencer a várias categorias),
-   **Ativar** : torna seu equipamento ativo,
-   **Visivél** : torna seu equipamento visível no painel,
-   **Ponte** : indica a ponte à qual a lâmpada está conectada
-   **Sempre ligado** : diga ao jeedom para nunca marcar a lâmpada como inacessível

Abaixo você encontra a lista de pedidos :

-   **Nome** : o nome exibido no painel,
-   **Configuração avançada** : exibe a janela de configuração avançada do comando,
-   **Opções** : permite exibir ou ocultar certos comandos e / ou registrá-los
-   **Teste** : permite testar o comando

# Grupo 0 (todas as lâmpadas)

O grupo 0 é um pouco especial porque não pode ser excluído ou modificado, necessariamente aciona todas as lâmpadas e também é ele que carrega as cenas.

Na verdade, você pode fazer "cenas" no Philips Hue. Isso deve ser feito absolutamente a partir do aplicativo móvel (impossível fazê-lo no Jeedom). E após a adição de uma cena, você deve absolutamente sincronizar o Jeedom com a cena correta (simplesmente salvando a configuração do plugin)

# Tansition

Comando um pouco específico que deve ser usado em um cenário, permite dizer que a transição entre o estado atual e o próximo comando deve durar X segundos.

Por exemplo, de manhã, você pode simular o nascer do sol em 3 minutos. Portanto, no seu cenário, basta chamar o comando de transição e, no conjunto de parâmetros 180, chamar o comando color para a cor desejada.

# Animation

As animações são sequências de transição, atualmente existem :

-   nascer do sol : para simular um nascer do sol. Pode tomar como parâmetro :
    -   duração : para definir a duração, por padrão 720s, ex por 5min, você deve colocar : duration=300
-   pôr do sol : para simular um pôr do sol. Pode tomar como parâmetro :
    -   duração : para definir a duração, por padrão 720s, ex por 5min, você deve colocar : duration=300

# Botão de controle remoto

Aqui está a lista de códigos para os botões :

- 1002 para o botão Ligar
- 2002 para o botão de aumento
- 3002 para o botão minimizar
- 4002 para o botão desligar

O mesmo com XXX0 para a tecla pressionada, XXX1 para a tecla pressionada e XXX2 para a tecla liberada.

Aqui estão as sequências para o botão On, por exemplo :

- Pressão curta : Quando pressionado, vamos para 1000 e, quando liberamos, vamos para 1002
- Pressão longa : Durante a imprensa, passamos a 1000, durante a imprensa, passamos a 1001, quando liberamos, passamos a 1002

# FAQ

> **Tenho a impressão de que há uma diferença em determinada cor entre o que peço e a cor da lâmpada.**
>
> Parece que a grade de cores das lâmpadas tem um deslocamento, estamos procurando como corrigir

> **Qual é a taxa de atualização ?**
>
> O sistema recupera informações a cada 2s.

> **Meu equipamento (lâmpada / interruptor ....) não é reconhecido pelo plug-in, como fazer ?**
>
> Você deve :
> - escreva-nos o equipamento que você deseja adicionar com a foto e as possibilidades - envie-nos o log de depuração da sincronização com a ponte enquanto nos contata com uma solicitação de suporte
