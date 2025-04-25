# Plug-in de contador virtual

O plug-in **Balcão virtual** permite criar medidores de energia em quilowatts-hora a partir de índices brutos *(Wh/kWh)* e/ou poderes *(W/kW)*, seja a uma tarifa única ou durante os horários de pico/fora de pico. Este plugin também permite criar contadores por usuário *(Personalizado/OCPP)*.

>**INFORMAÇÃO**
>
>Informações do protocolo **OCPP** só ficará visível se o plugin for detectado na máquina.

# Configuration

## Configuração do plug-in

![Configuração do plug-in](../images/config_plugin.jpg)

- **Preço padrão**: Selecione o preço padrão para medidores virtuais *(tarifa única ou horário de pico/fora de pico)*.
- **Alternar preços**: No caso de preços padrão em horários de pico/fora de pico, selecione o comando de alternância de preços padrão info/binary *(1=horário de pico/0=horário fora de pico)*.
- **OCPP**:
  - **Criação automática de contadores**: Marque a caixa para criar automaticamente contadores por usuário para qualquer nova transação OCPP.

## Configuração do equipamento

Para adicionar um novo contador virtual, clique no botão **+Adicionar**.

- **Tipo de medidor**: Selecione o tipo de medidor *(Padrão/Personalizado (WIP)/OCPP)*.
- **Preços**: Adapte os preços, se necessário.
- **Alternar preços**: No caso de preços de pico/fora de pico, adapte o comando de alternância de preços info/binários, se necessário.

---

- **Identificador**: Para medidores customizados ou do tipo OCPP, indicar o identificador do usuário.

### Dados a serem processados

Contadores virtuais do tipo **OCPP** recuperar automaticamente dados de transação para cada usuário.

Para outros, você deve clicar no botão **Gerenciar pedidos** da seção **Dados a serem processados** Então **Adicionar uma entrada**.

- **Contadores padrão**:

  ![Dados compteur standard](../images/default_input.jpg)

	- **Dados**: Controle informativo/digital dos dados brutos a serem processados.
	- **Unidade**: Selecione a unidade se ela não for detectada automaticamente *(Wh/kWh/W/kW)*.

- **Contadores personalizados** *(WIP)*:

  ![Dados compteur personnalisé](../images/custom_input.jpg)

	- **Dados**: Controle informativo/digital dos dados brutos a serem processados.
	- **Unidade**: Selecione a unidade se ela não for detectada automaticamente *(Wh/kWh/W/kW)*.
	- **Identificador**: Conclua o comando info/other especificando o identificador do usuário atual *(o valor deve corresponder ao identificador definido ao nível do equipamento para que a transação seja registada)*.

## Commandes

Os pedidos a seguir são criados com base no preço:

- **Preço único**:
  - **Índice** *(Informação/numérico em kWh)*.

- **Horário de pico/fora de pico**:
  - **Índice de horário de pico** *(Informação/numérico em kWh)*.
  - **Índice de horário fora de pico** *(Informação/numérico em kWh)*.
