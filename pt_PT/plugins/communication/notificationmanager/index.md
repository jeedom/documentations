# Plug-in do Notification Manager

Este plugin é usado para gerenciar notificações (recuperação em caso de erro, geração de texto...)

# Configuração do plugin

Depois de baixar o plug-in, basta ativar o plug-in.

# Configuração do equipamento

## Equipement

A configuração dos dispositivos do Notification Manager pode ser acessada no menu Plugins e depois em Communication. Você encontrará aqui a configuração do seu equipamento :

- Nome do equipamento a notificar : Nome de equipamentos
- Objeto pai : seu objeto pai
- Activer
- Visible

## Commande

É aqui que você poderá adicionar comandos de notificação. Depois de adicionar para cada comando, você poderá definir os comandos do tipo de mensagem a serem usados em ordem de prioridade.

Você tem opções :

- Teste de execução : permite adicionar um teste antes da execução da notificação, se o teste for falso, o plug-in não fará nada, se for verdade, executará as notificações na ordem das prioridades até encontrar uma que funcione. Se o campo estiver vazio, o teste será ignorado.

> **NOTA**
>
> Você também tem um teste por pedido na notificação.


**Exemplo simples**

Exemplo, você pode colocar um comando do tipo Slack primeiro e depois um comando do tipo SMS. Se o envio pelo Slack não funcionar, ele enviará a mensagem por SMS.

**Exemplo mais complexo**

Exemplo: você pode colocar um comando do tipo Slack e um comando do SMS primeiro (na mesma caixa separada por &&) e enviar por e-mail. Ao usar o plug-in, a mensagem será enviada primeiro no Slack e no SMS; se os dois não funcionarem, será enviada por email.

# Geração de texto

O plugin também oferece a possibilidade de geração de texto para que as mensagens nem sempre sejam as mesmas. O sistema é o mesmo que para interações :

- [Olá]|Oi] tudo bem ? => Vai dar um "Oi, tudo bem?" ou "Olá, como você está? ?"

# Texto condicional

Você também pode colocar texto condicional no formulário {(teste) ? Real : faux}.

> **IMPORTANTE**
>
> É absolutamente necessário colocar o teste (a condição) entre parênteses

Aqui está um exemplo para o clima da manhã com texto condicional e geração de texto :

\ [Olá \|Salut\|Oi \] \ [Espero que você tenha dormido bem ?\|dormi bem ?\|como vai ?\] . \ [Hoje será \|Hoje o tempo estará \|Previsão do tempo \] \#[Maison\]\[Météo\]\[Condition\]\# \ [e a temperatura será \|com \] {(\#\[Maison\]\[Météo\]\[Température Max\]\# < 6) ? \ [oula estará frio \|oula ele coça \]: } \#\[Maison\]\[Météo\]\[Température Max\]\# graus.

# FAQ

>**O plug-in gerencia perguntar ?**
>
>Sim, o plug-in gerencia a pergunta.
