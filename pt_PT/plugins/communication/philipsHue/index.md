# Philips Hue plugin

# Description

Este plug-in permitirá que você integre seu ecossistema Philips Hue ao Jeedom. O plugin oferece a possibilidade de conduzir até 2 pontes Philips Hue simultaneamente.

# Configuration

## Configuração do plugin

Como qualquer plugin Jeedom, o plugin **Philips Hue** deve ser ativado após a instalação.

Assim que o plug-in for ativado, você precisará inserir o endereço IP no qual sua ponte Philips Hue pode ser acessada.

>**TRUQUE**
>
>Você pode inserir até 2 pontes Philips Hue que serão capazes de se comunicar com a Jeedom simultaneamente.

O plugin **Philips Hue** usa seu próprio daemon para ficar em contato constante com a (s) ponte (s) Philips Hue. Você pode verificar o status na página de configuração do plugin.

>**EM FORMAÇÃO**
>    
>Normalmente não é necessário iniciar o daemon manualmente, ele é gerenciado automaticamente pelo plugin.

## Configuração do equipamento

Para acessar os diferentes equipamentos **Philips Hue**, vá para o menu **Plugins → Comunicação → Philips Hue**.

>**EM FORMAÇÃO**
>    
>O botão **acrescentar** permite adicionar novos equipamentos Philips Hue.

Ao clicar em um item de equipamento já criado na lista, você é direcionado para sua página de configuração :

- **Nome do equipamento** : nome do seu equipamento Hue.
- **Objeto pai** : indica o objeto pai ao qual o equipamento pertence.
- **Categoria** : categorias de equipamentos (pode pertencer a várias categorias).
- **Ativar** : permite tornar o equipamento ativo.
- **Visivél** : torna o equipamento visível no painel.

- **Modelo** : insira o modelo do seu equipamento Philips Hue.
- **Ponte** : indica a ponte em que o equipamento está conectado.
- **Sempre ligado** : diz a Jeedom para nunca marcar a lâmpada como inacessível.

>**SABER**
>
>Sempre haverá um dispositivo chamado "Todas as lâmpadas" que corresponde ao grupo 0 que existe em todos os casos.

Ao clicar na segunda guia, encontramos a lista de pedidos :

- **Nome** : o nome exibido no painel.
- **Ícone** : permite-lhe atribuir um ícone ao comando.
- **Opções** : permite que você exiba ou esconda certos comandos e / ou registre seus valores.
- **Configurações** : permite definir parâmetros opcionais nos comandos info / numéricos.
- **Configuração avançada** *(roda dentada)* : exibe a janela de configuração avançada do comando.
- **Teste** : permite testar o comando.
- **Botão -** : permite que você apague o comando.


# Grupo 0 (todas as lâmpadas)

Grupo 0 não pode ser excluído ou modificado. Ele necessariamente controla todas as luzes e também é ele quem carrega as cenas.

Na verdade, você pode fazer "cenas" com o Philips Hue. Isso deve ser feito absolutamente no aplicativo móvel (impossível de fazer no Jeedom). Depois de adicionar uma cena você deve absolutamente sincronizar Jeedom com a ponte *(simplesmente salvando a configuração do plugin)*.

# Transition

Um pequeno comando peculiar que é projetado para ser usado em um cenário. Permite definir a duração em segundos da transição entre o estado atual e o próximo comando.

Por exemplo, de manhã você pode querer simular o nascer do sol em 3 minutos. Em seu cenário, você só precisa chamar o comando de transição com ``180`` no parâmetro, em seguida, chame o comando de cor para a cor desejada.

# Animation

As animações são sequências de transição, atualmente existem :

- **nascer do sol** : permite que você simule um nascer do sol. Pode tomar como parâmetro :
    - **duração** : definir duração, padrão 720s. Por 5 minutos será necessário indicar ``duration=300``.
- **pôr do sol** : para simular um pôr do sol. Pode tomar como parâmetro :
    - **duração** : definir duração, padrão 720s. Por 5 minutos será necessário indicar ``duration=300``.
- **adaptive_light** : permite-lhe sincronizar a temperatura da cor e o brilho com o sol (também mudam durante o dia). Tenha cuidado ao inserir sua latitude / longitude no jeedom

# Botão de controle remoto

Aqui está a lista de códigos para os botões :

- 1002 para o botão Ligar
- 2002 para o botão de aumento
- 3002 para o botão minimizar
- 4002 para o botão desligar

O mesmo com XXX0 para a tecla pressionada, XXX1 para a tecla pressionada e XXX2 para a tecla liberada.

Aqui estão as sequências para o botão Ligar, por exemplo :

- Pressão curta : Quando pressionado, vamos para 1000 e, quando liberamos, vamos para 1002
- Pressão longa : Durante a imprensa, passamos a 1000, durante a imprensa, passamos a 1001, quando liberamos, passamos a 1002

# FAQ

> **Tenho a impressão de que existe uma diferença em certas cores entre o que peço e a cor da lâmpada.**
>
> Parece que a grade de cores das lâmpadas tem um deslocamento, estamos procurando como corrigir.

> **Qual é a taxa de atualização ?**
>
> O sistema recupera informações a cada 2s.

> **Meu equipamento (lâmpada, interruptor, etc ...) não é reconhecido pelo plugin, como fazer ?**
>
> Você deve :
> - descreva o equipamento que deseja que adicionemos com fotos e suas possibilidades e envie-nos o log de depuração da sincronização com a ponte, ao mesmo tempo em que nos contata com um pedido de suporte

>**Eu adicionei a historização de um pedido, mas não funciona**
>
>Para problemas de desempenho, você deve reiniciar o daemon Philips Hue para que ele leve essa alteração em consideração.
