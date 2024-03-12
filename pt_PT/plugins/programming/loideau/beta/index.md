# Plug-in de Lei da Água

## Introduction

O Water Law Plugin permite ao usuário atuar sobre uma bomba e/ou válvula de três vias (V3V) com base em um cálculo específico levando em consideração a temperatura externa.

## Configuração do equipamento

Para configurar o equipamento é necessário inserir os parâmetros específicos : 

![Configuration de l'équipement](../images/configuration_equipement.png)

1. Tipo de operação (Quente/Frio)

2. Sensor de temperatura externa (informações de comando)

3. Sonda de temperatura de fluxo quente (informações de comando)

4. Sonda de temperatura de saída fria (informações de comando)

5. Sonda de temperatura de fluxo ambiente (valor rígido, uma variável ou um comando de informação)

6. Ponto de ajuste do ambiente (valor fixo, uma variável ou um comando de informação)

7. Ponto de ajuste quente do TNC (valor fixo, uma variável ou um comando de informação)

8. Ponto de ajuste frio do TNC (valor fixo, uma variável ou um comando de informação)

9. Controle da bomba LIGADO (controle de ação)

10. Comando +V3V (comando de ação)

11. Comando -V3V (comando de ação)

12. Falha da bomba (comando info)

13. Falha de superaquecimento (informações de comando)

14. Coef. Influenza. Ambiente (valor rígido, padrão 1)

## Utilisation

![Configuration du dashboard](../images/dashboard_equipement.png)

1. Modo de operação (Desligado / Automático / Forçado)

2. Parâmetros do ponto de ajuste de aquecimento (ponto de ajuste de -10°C, ponto de ajuste de 0°C, ponto de ajuste de +10°C, ponto de ajuste de +20°C)

3. Parâmetros de ponto de ajuste frio (ponto de ajuste +20°C, ponto de ajuste +30°C, ponto de ajuste +40°C)

## Principais características

1. Calcular e atualizar o Setpoint de água quente mediante alteração da temperatura exterior ou alteração de um dos parâmetros do setpoint quente : 

```
calculLoiEau
SE probeTempExt ≥ 10 ENTÃO
     cálculoWaterLaw = (((cons10ext - cons20ext)/10) x (10 - (tempExt - 10))) + cons20ext
SINON
     SE probeTempExt ≥ 0 ENTÃO #entre 0 e 9,99
          cálculoWaterLaw = (((cons0ext - cons10ext)/10) x (10 - tempExt)) + cons10ext
     ELSE #é menor que 0
          cálculoWaterLaw = (((consLess10ext - cons0ext)/10) x (-1 x tempExt)) + cons0ext
```

2. Calcular e atualizar o ponto de regulação da água fria em caso de alteração da temperatura exterior ou alteração de um dos parâmetros do ponto de regulação do frio : 

```
calculLoiEau
SE probeTempExt ≥ 20 ENTÃO
     cálculoWaterLaw = (((cons10ext - cons20ext)/10) x (10 - (tempExt - 10))) + cons20ext
SINON
     SE probeTempExt ≥ 0 ENTÃO #entre 0 e 9,99
          cálculoWaterLaw = (((cons0ext - cons10ext)/10) x (10 - tempExt)) + cons10ext
     ELSE #é menor que 0
          cálculoWaterLaw = (((consLess10ext - cons0ext)/10) x (-1 x tempExt)) + cons0ext
```

3. Cálculo e atualização do ponto de regulação do fluxo de aquecimento em caso de alteração do ponto de regulação da lei da água ou alteração do ponto de regulação ambiente ou alteração da temperatura ambiente ou alteração do coeficiente. influência. ambiente :

```
cálculoConsDeparture = cálculoWaterLaw + ((ponto de ajuste de ambiente - sonda AmbianceTemp) x coef AmbientInflu) + ((ponto de ajuste de ambiente - 20) x 2)
```

4. Ação no comando V3V (HEAT) na alteração da temperatura do fluxo de aquecimento ou alteração no ponto de ajuste do fluxo de aquecimento :

```
SE sonda WaterTemp <cálculoConsStart THEN
     Ação de comando +V3V
SINON
     SE Sonda WaterTemp > cálculoConsStart THEN
          Ação de comando -V3V
     DE OUTRA FORMA            
          Fazer nada
```

5. Ação no comando V3V (COLD) na alteração da temperatura do fluxo de aquecimento ou alteração no ponto de ajuste do fluxo de aquecimento :

```
SE Sonda WaterTemp > cálculoConsStart THEN
     Ação de comando +V3V
SINON
     SE sonda WaterTemp <cálculoConsStart THEN
          Ação de comando -V3V
     DE OUTRA FORMA            
          Fazer nada
```

6. Ação no comando da bomba (HEAT) na alteração da temperatura externa ou alteração do ponto de ajuste do TNC ou clicando no botão Aplicar no painel :

```
Modo SE = AUTO ENTÃO
    SE probeTempExt > ponto de ajusteTNC+1 ENTÃO
        Ação do comando Bomba DESLIGADA
    DE OUTRA FORMA            
        SE sonda TempExt < setpointTNC-1 ENTÃO
            Ação de controle da bomba LIGADA
        SINON
            Fazer nada
SINON
    Modo SE = DESLIGADO ENTÃO
        Ação do comando Bomba DESLIGADA
    DE OUTRA FORMA            
        Modo SE = FORÇA ENTÃO
            Ação de controle da bomba LIGADA
            Ação de comando +V3V
```

7. Ação no comando da bomba (COLD) na alteração da temperatura externa ou alteração do setpoint do TNC ou clicando no botão Aplicar no painel :

```
Modo SE = AUTO ENTÃO
    SE probeTempExt > ponto de ajusteTNC+1 ENTÃO
        Ação de controle da bomba LIGADA
    DE OUTRA FORMA            
        SE sonda TempExt < setpointTNC-1 ENTÃO
            Ação do comando Bomba DESLIGADA
        SINON
            Fazer nada
SINON
    Modo SE = DESLIGADO ENTÃO
        Ação de controle da bomba LIGADA
    DE OUTRA FORMA            
        Modo SE = FORÇA ENTÃO
            Ação do comando Bomba DESLIGADA
            Ação de comando +V3V
```