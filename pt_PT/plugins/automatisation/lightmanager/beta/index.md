# Gerente de luz)

## Description

Este plugin permite ligar ou desligar a luz de acordo com a presença de uma pessoa e a luz exterior. É capaz de gerenciar o atraso após a ausência de movimento. Também administra o conceito de debryage para não desligar a luz muito cedo se você ligou manualmente e não há movimento.

## Configuration

O plugin não tem configuração específica

## Equipement

### Em geral

É aqui que você define o nome do equipamento, esteja ele ativo ou não, a visibilidade...

### Luz

Aqui você tem que dar o comando para ligar a luz, desligar e saber o estado. Este plugin só funciona com luzes com feedback de status binário (ligado ou desligado).

### Mouvement

Lá você define seus detectores de movimento, você pode ter quantos quiser.

### Luminosité

Você coloca seu sensor de luz e a soleira para acender a luz. É possível colocar vários. Neste caso, se um dos detectores cair abaixo do valor limite, a luz acenderá durante o movimento.

>**NOTA**
>
>Você também pode pedir ao plugin para recuperar o valor mínimo de brilho nos últimos X minutos, tenha cuidado, neste caso é absolutamente necessário que o controle de brilho seja registrado.

### Temporisation

Aqui você pode :

- Defina o atraso de desligamento quando não houver mais movimento
- Ative ou não o desengate se a luz não estiver no estado esperado (alguém a acendeu)
- O tempo antes de o plugin assumir o gerenciamento da luz 

Para os últimos 2 parâmetros, o caso é bastante simples : alguém liga a luz passa na frente do detector e sai, depois de XX segundos o detector retorna a informação de que não há ninguém ali, então depois de 1 minuto (no meu caso) o plugin deve desligar a luz. Com a desativação, o plugin não fará nada e aguardará 5 minutos antes de retomar o gerenciamento automático e desligar a luz. </p>
