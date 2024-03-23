# Lista de Mudanças IPX 800 v4

>**IMPORTANTE**
>
>Como lembrete, se não houver informações sobre a atualização, isso significa que se trata apenas da atualização da documentação, tradução ou texto

- Suporte para persiana EnOcean

# 01/08/2024

- ATENÇÃO !!!!!! Mudança de comportamento nas venezianas, inversão de direção, o plugin não indica mais o % fechamento mas sim o % abertura
- Verificando o código de retorno ipx durante um comando e se houver um erro, Jeedom tentará novamente o comando 150 ms depois
- Preparando-se para Jeedom 4.4

# 02/07/2022

- Atualização para Jeedom 4.2

# 25/10/2021

- Adicionando um modelo
- Suporte para PulseUP e pulseDOWN para gerenciamento de lâmina BSO

# 07/06/2020

- Correção de um erro na leitura do valor da extensão 0-10v

# 05/09/2020

- Adicionado suporte para extensão 0-10v
- Optimisation

# 30/12/2019

- Correção de erro no termostato
- Correção de um erro no URL do evento para dar ao ipx800

# 18/09/2019

- Optimisations

# 14/08/2019

- Correção de bug em modelos
- Compatível com php 7.3

# 13/06/2019

- Adição de um sistema de backup diário automático para ipx800v4
- Suporte PWM apenas em uma cor
- Supressão da reinicialização do daemon a cada alteração no equipamento (agora é necessário quando você modifica um equipamento para reiniciar o daemon manualmente)

# 24/04/2018

-	Suporte para sondas THL 9 a 14

# 19/03/2018

-   Correção de número para sensores analógicos enOcean

# 03/05/2018

- 	Adicionando o X-dimmer (não esqueça de configurar o plug-in de verificação G para solicitações do x-dimmer)

#  18/02/2018

-	Adição de opção em solicitações ao ipx800 (possibilidade de selecionar o tipo de solicitação para reduzir a carga)

-   Suporte enOcean aprimorado

-   Correção de bugs na recuperação de informações de
    extensions

-   Adição da extensão VR

-   Otimização da sincronização com o ipx800

-   Suporte para módulos THL

-   Adição de um mecanismo de modelo para geração de pedidos
