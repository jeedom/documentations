# Philips Hue plugin

# Description

Este plug-in permitirá que você integre seu ecossistema Philips Hue ao Jeedom. O plugin oferece a possibilidade de conduzir até 2 pontes Philips Hue simultaneamente.

# Configuration

## Configuração do plugin

Como qualquer plugin Jeedom, o plugin **Philips Hue** deve ser ativado após a instalação.

Assim que o plug-in for ativado, você precisará inserir o endereço IP no qual sua ponte Philips Hue pode ser acessada. Normalmente, o plugin deve pedir que você pressione o botão ponte durante a primeira sincronização.

>**TRUQUE**
>
>Você pode inserir até 2 pontes Philips Hue que serão capazes de se comunicar com a Jeedom simultaneamente.

O plugin **Philips Hue** usa seu próprio daemon para ficar em contato constante com a (s) ponte (s) Philips Hue. Você pode verificar o status na página de configuração do plugin.


## Compatibilité

Todos os módulos compatíveis com a ponte Hue são compatíveis com o plugin Jeedom. 

## Configuração do equipamento

Para acessar os diferentes equipamentos **Philips Hue**, vá para o menu **Plugins → Comunicação → Philips Hue**.

# Transition

Um pequeno comando peculiar que é projetado para ser usado em um cenário. Permite definir a duração em segundos da transição entre o estado atual e o próximo comando.

Por exemplo, de manhã você pode querer simular o nascer do sol em 3 minutos. Em seu cenário, você só precisa chamar o comando de transição com ``180`` no parâmetro, em seguida, chame o comando de cor para a cor desejada.
