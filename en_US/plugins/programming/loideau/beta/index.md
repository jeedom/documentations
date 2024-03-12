# Water Law Plugin

## Introduction

The Water Law Plugin allows users to act on a pump and/or a three-way valve (V3V) based on a specific calculation taking into account the outside temperature.

## Equipment configuration

In order to configure the equipment, you must enter the specific parameters : 

![Configuration de l'équipement](../images/configuration_equipement.png)

1. Type of operation (Hot / Cold)

2. Outside temperature sensor (command info)

3. Hot flow temperature probe (command info)

4. Cold outlet temperature probe (command info)

5. Ambient flow temperature probe (hard value, a variable or an info command)

6. Ambiance setpoint (hard value, a variable or an info command)

7. Hot TNC setpoint (hard value, a variable or an info command)

8. TNC Cold setpoint (hard value, a variable or an info command)

9. Pump control ON (action control)

10. +V3V command (action command)

11. -V3V command (action command)

12. Pump fault (info command)

13. Overheating fault (command info)

14. Coef. Influ. Ambient (hard value, default 1)

## Utilisation

![Configuration du dashboard](../images/dashboard_equipement.png)

1. Operating mode (Off / Auto / Forced)

2. Heating setpoint parameters (-10°C setpoint, 0°C setpoint, +10°C setpoint, +20°C setpoint)

3. Cold setpoint parameters (setpoint +20°C, setpoint +30°C, setpoint +40°C)

## Main Features

1. Calculate and update the Hot water Setpoint on change in outside temperature or change in one of the hot setpoint parameters : 

```
calculLoiEau
IF probeTempExt ≥ 10 THEN
     calculationWaterLaw = (((cons10ext - cons20ext)/10) x (10 - (tempExt - 10))) + cons20ext
SINON
     IF probeTempExt ≥ 0 THEN #between 0 and 9.99
          calculationWaterLaw = (((cons0ext - cons10ext)/10) x (10 - tempExt)) + cons10ext
     ELSE #is less than 0
          calculationWaterLaw = (((consLess10ext - cons0ext)/10) x (-1 x tempExt)) + cons0ext
```

2. Calculate and update the Cold water setpoint on change in outside temperature or change of one of the cold setpoint parameters : 

```
calculLoiEau
IF probeTempExt ≥ 20 THEN
     calculationWaterLaw = (((cons10ext - cons20ext)/10) x (10 - (tempExt - 10))) + cons20ext
SINON
     IF probeTempExt ≥ 0 THEN #between 0 and 9.99
          calculationWaterLaw = (((cons0ext - cons10ext)/10) x (10 - tempExt)) + cons10ext
     ELSE #is less than 0
          calculationWaterLaw = (((consLess10ext - cons0ext)/10) x (-1 x tempExt)) + cons0ext
```

3. Calculation and updating of the heating flow setpoint on change of the water law setpoint or change of the room setpoint or change of the room temperature or change of the coef. influence. ambient :

```
calculationConsDeparture = calculationWaterLaw + ((Ambient setpoint - AmbTemp probe) x AmbientInflu coef) + ((Ambient setpoint - 20) x 2)
```

4. Action on V3V (HEAT) command on change in heating flow temperature or change in heating flow setpoint :

```
IF WaterTemp probe < calculationConsStart THEN
     Command action +V3V
SINON
     IF WaterTemp probe > calculationConsStart THEN
          Command action -V3V
     OTHERWISE            
          Do nothing
```

5. Action on V3V (COLD) command on change in heating flow temperature or change in heating flow set point :

```
IF WaterTemp probe > calculationConsStart THEN
     Command action +V3V
SINON
     IF WaterTemp probe < calculationConsStart THEN
          Command action -V3V
     OTHERWISE            
          Do nothing
```

6. Action on Pump command (HEAT) on change of outside temperature or change of TNC setpoint or by clicking on the Apply button on the dashboard :

```
IF Mode = AUTO THEN
    IF probeTempExt > setpointTNC+1 THEN
        Pump OFF command action
    OTHERWISE            
        IF TempExt probe < setpointTNC-1 THEN
            Pump ON control action
        SINON
            Do nothing
SINON
    IF Mode = OFF THEN
        Pump OFF command action
    OTHERWISE            
        IF Mode = FORCE THEN
            Pump ON control action
            Command action +V3V
```

7. Action on Pump command (COLD) on change of outside temperature or change of TNC setpoint or by clicking on the Apply button on the dashboard :

```
IF Mode = AUTO THEN
    IF probeTempExt > setpointTNC+1 THEN
        Pump ON control action
    OTHERWISE            
        IF TempExt probe < setpointTNC-1 THEN
            Pump OFF command action
        SINON
            Do nothing
SINON
    IF Mode = OFF THEN
        Pump ON control action
    OTHERWISE            
        IF Mode = FORCE THEN
            Pump OFF command action
            Command action +V3V
```