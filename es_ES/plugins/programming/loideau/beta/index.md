# Complemento de ley de aguas

## Introduction

El complemento Water Law permite a los usuarios actuar sobre una bomba y/o una válvula de tres vías (V3V) basándose en un cálculo específico teniendo en cuenta la temperatura exterior.

## Configuración del equipo

Para poder configurar el equipo es necesario introducir los parámetros específicos : 

![Configuration de l'équipement](../images/configuration_equipement.png)

1. Tipo de operación (Caliente / Frío)

2. Sensor de temperatura exterior (info de comando)

3. Sonda de temperatura de ida caliente (info mando)

4. Sonda de temperatura de salida de frío (info mando)

5. Sonda de temperatura ambiente de impulsión (valor duro, una variable o un comando de información))

6. Punto de ajuste de ambiente (valor fijo, una variable o un comando de información))

7. Consigna caliente del TNC (valor duro, una variable o un comando de información))

8. Consigna de frío del TNC (valor duro, una variable o un comando de información))

9. Control de bomba ON (control de acción)

10. Comando +V3V (comando de acción)

11. Comando -V3V (comando de acción)

12. Fallo de la bomba (comando de información)

13. Fallo de sobrecalentamiento (información de comando)

14. Coef. Gripe. Ambiente (valor fijo, predeterminado 1)

## Utilisation

![Configuration du dashboard](../images/dashboard_equipement.png)

1. Modo de funcionamiento (Apagado / Automático / Forzado)

2. Parámetros del punto de ajuste de calefacción (punto de ajuste de -10°C, punto de ajuste de 0°C, punto de ajuste de +10°C, punto de ajuste de +20°C)

3. Parámetros del punto de ajuste de frío (punto de ajuste +20°C, punto de ajuste +30°C, punto de ajuste +40°C)

## Principales características

1. Calcule y actualice el punto de ajuste de agua caliente ante un cambio en la temperatura exterior o un cambio en uno de los parámetros del punto de ajuste de agua caliente : 

```
calculLoiEau
SI sondaTempExt ≥ 10 ENTONCES
     cálculoLeyAgua = (((cons10ext - cons20ext)/10) x (10 - (tempExt - 10))) + cons20ext
SINON
     SI probeTempExt ≥ 0 ENTONCES #entre 0 y 9,99
          cálculoLeyAgua = (((cons0ext - cons10ext)/10) x (10 - tempExt)) + cons10ext
     ELSE # es menor que 0
          cálculoLeyAgua = (((consLess10ext - cons0ext)/10) x (-1 x tempExt)) + cons0ext
```

2. Calcule y actualice el punto de ajuste de agua fría ante el cambio en la temperatura exterior o el cambio de uno de los parámetros del punto de ajuste de frío : 

```
calculLoiEau
SI sondaTempExt ≥ 20 ENTONCES
     cálculoLeyAgua = (((cons10ext - cons20ext)/10) x (10 - (tempExt - 10))) + cons20ext
SINON
     SI probeTempExt ≥ 0 ENTONCES #entre 0 y 9,99
          cálculoLeyAgua = (((cons0ext - cons10ext)/10) x (10 - tempExt)) + cons10ext
     ELSE # es menor que 0
          cálculoLeyAgua = (((consLess10ext - cons0ext)/10) x (-1 x tempExt)) + cons0ext
```

3. Cálculo y actualización del punto de ajuste del flujo de calefacción en caso de cambio del punto de ajuste de la ley del agua o cambio del punto de ajuste de la habitación o cambio de la temperatura ambiente o cambio del coeficiente. influencia. ambiente :

```
cálculoConsSalida = cálculoLeyAgua + ((Consigna ambiente - sonda TempAmb) x Coef Influ ambiente) + ((Consigna ambiente - 20) x 2)
```

4. Acción en el comando V3V (CALEFACCIÓN) ante un cambio en la temperatura del flujo de calefacción o un cambio en el punto de ajuste del flujo de calefacción :

```
SI sonda TempAgua < cálculoConsInicio ENTONCES
     Acción de comando +V3V
SINON
     SI Sonda TemperaturaAgua > cálculoConsInicio ENTONCES
          Acción de comando -V3V
     DE LO CONTRARIO            
          No hacer nada
```

5. Acción en el comando V3V (FRÍO) ante un cambio en la temperatura del flujo de calefacción o un cambio en el punto de ajuste del flujo de calefacción :

```
SI Sonda TemperaturaAgua > cálculoConsInicio ENTONCES
     Acción de comando +V3V
SINON
     SI sonda TempAgua < cálculoConsInicio ENTONCES
          Acción de comando -V3V
     DE LO CONTRARIO            
          No hacer nada
```

6. Acción ante el comando Bomba (CALEFACCIÓN) ante cambio de temperatura exterior o cambio de setpoint del TNC o haciendo clic en el botón Aplicar en el tablero :

```
Modo SI = AUTO ENTONCES
    SI sondaTempExt > setpointTNC+1 ENTONCES
        Acción del comando de apagado de la bomba
    DE LO CONTRARIO            
        SI Sonda TempExt < setpointTNC-1 ENTONCES
            Acción de control de bomba en ON
        SINON
            No hacer nada
SINON
    Modo SI = APAGADO ENTONCES
        Acción del comando de apagado de la bomba
    DE LO CONTRARIO            
        Modo SI = FORZAR ENTONCES
            Acción de control de bomba en ON
            Acción de comando +V3V
```

7. Acción ante el comando Bomba (FRÍO) ante cambio de temperatura exterior o cambio de setpoint del TNC o haciendo clic en el botón Aplicar en el tablero :

```
Modo SI = AUTO ENTONCES
    SI sondaTempExt > setpointTNC+1 ENTONCES
        Acción de control de bomba en ON
    DE LO CONTRARIO            
        SI Sonda TempExt < setpointTNC-1 ENTONCES
            Acción del comando de apagado de la bomba
        SINON
            No hacer nada
SINON
    Modo SI = APAGADO ENTONCES
        Acción de control de bomba en ON
    DE LO CONTRARIO            
        Modo SI = FORZAR ENTONCES
            Acción del comando de apagado de la bomba
            Acción de comando +V3V
```