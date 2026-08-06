# Plug-in do Notification Manager

Este plugin é usado para gerenciar notificações (recuperação em caso de erro, geração de texto, etc...).

# Configuração do plugin

Depois de baixar o plugin, tudo que você precisa fazer é ativar o plugin, nenhuma outra configuração é necessária.

# Configuração do equipamento

## Equipement

Configuração do equipamento **Gerente de Notificação** está acessível no menu Plugins → Comunicação. Você encontrará aqui a configuração do seu equipamento :

- **Nome do notificador** : Nome de equipamentos.
- **Objeto pai** : indica o objeto pai ao qual o equipamento pertence.
- **Ativar** : torna seu equipamento ativo.
- **Visivél** : torna seu equipamento visível no painel.

## Commande

É aqui que você poderá adicionar comandos de notificação. Para cada comando de notificação, você será capaz de definir os comandos de tipo de mensagem para usar em ordem de prioridade.

![Gerente de Notificação présentation](../images/notifmanager1.png)

Você tem opções :

- **Teste de execução** : permite adicionar um teste antes da execução da notificação. Se o teste for falso, o plugin não fará nada; se for verdadeiro, ele executará as notificações em ordem de prioridade até encontrar uma funcional. Se o campo estiver vazio, o teste é ignorado.

> **NOTA**
>
> Você também tem um teste por pedido na notificação.

> **IMPORTANTE**
>
> O plugin não suporta renomeação de comandos de notificação. Se você quiser mudar o nome de um comando de notificação, você terá que mudar para todos os cenários / equipamentos que o usam para atualizar


**Exemplo simples**

*Você pode colocar um comando do tipo Slack primeiro, depois um comando do tipo SMS. Se o envio por Slack não funcionar, a mensagem será enviada por SMS.*

**Exemplo mais complexo**

*Você pode colocar um comando do tipo Slack e um comando SMS primeiro (na mesma caixa, separados por ``&&``), então Mail. O plugin enviará primeiro a mensagem por Slack e SMS, se ambos não funcionarem, ele enviará a notificação por e-mail.*

# Geração de texto

O plugin também oferece a possibilidade de geração de texto para que as mensagens nem sempre sejam idênticas. O sistema é o mesmo que para interações :

- ``[Coucou|Salut] ca va ?`` irá retornar também "*Oi como você está ?*" onde  "*Oi como você está ?*"

# Texto condicional

Também é possível inserir texto condicional no formulário ``{(test) ? vrai : faux}``.

> **IMPORTANTE**
>
> É absolutamente necessário colocar o teste (a condição) entre parênteses.

Aqui está um exemplo para o clima da manhã com texto condicional e geração de texto :

``[Bonjour|Salut|Coucou] [j'espères que tu as bien dormi ?|bien dormi ?|ça va ?]. [Aujourd'hui il fera|Aujourd'hui le temps sera|La météo annonce] #[Maison][Météo][Condition]# [et la température sera de|avec] {(#[Maison][Météo][Température Max]# < 6) ? [oula il va faire froid|oula il caille]: } #[Maison][Météo][Température Max]# degrés.``

# FAQ

>**O plug-in gerencia perguntar ?**
>
>Sim, o plug-in gerencia a pergunta.
