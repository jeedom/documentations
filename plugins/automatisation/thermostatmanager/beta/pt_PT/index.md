# Plug-in de gerenciamento de termostato

## Description

Este plugin permite que você gerencie o termostato em uma sala dependendo da presença ou ausência de uma pessoa, o modo (dia / noite por exemplo) e a (s) janela (s) / porta (s) aberta (s))

## Configuration

O plugin não tem configuração específica

## Equipement

### Em geral

Você tem aqui (exceto nome do equipamento, ativo / inativo, visível / invisível...) : 

- "Não faça nada automaticamente se" : se alguma vez a casa estiver no modo de verão * ou se a casa estiver no modo ausente (para que ninguém esteja presente) ou se estivermos fora do horário de trabalho, então nenhum controle do plugin (já que o escritório também serve como quarto é mais confortável em noite)
- "Retome o controle após (min), não coloque nada para sempre" : diz ao plugin para retomar o controle do termostato ambiente após 30min se alguém o tocar

### Thermostat

Aqui você indica o comando para ação e status do termostato

### Mouvement

Aqui vamos definir a noção de presença em uma sala. Isso é feito usando um sensor de presença simples, mas queríamos evitar o aumento dos pontos de ajuste se apenas passarmos pela sala. Portanto, temos parâmetros para especificar o que é uma presença, o ponto de ajuste de temperatura a ser definido e o atraso antes de retornar ao valor anterior. Por exemplo, se houve uma presença mais de 70% do tempo nos últimos 5 minutos, defina o ponto de ajuste para 20.5 e, em seguida, se não houver ninguém lá por 10min, redefina o ponto de ajuste para o valor original

### Ouverture

Você indica aqui a sua abertura, bem como os diferentes parâmetros
- tempo antes da mudança do ponto de ajuste durante uma abertura
- instrução para colocar
- atrasar antes de retornar ao ponto de ajuste anterior após o fechamento

### Commande

Aqui você só será capaz de criar comandos de modo antes do ponto de ajuste dependendo do modo