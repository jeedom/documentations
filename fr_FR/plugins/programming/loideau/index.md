# Plugin Loi d'eau

## Introduction

Le Plugin Loi d'Eau permet aux utilisateurs d'agir sur une pompe et/ou une vanne trois voies (V3V) en se basant sur un calcul spécifique prenant en compte la température extérieure.

## Configuration des équipements

Afin de configurer l'équipement, il faut bien renseigner les paramètres spécifiques : 

![Configuration de l'équipement](./images/configuration_equipement.png)

1. Type de fonctionnement (Chaud / Froid)

2. Sonde de température extérieure (commande info)

3. Sonde de température départ chaud (commande info)

4. Sonde de température départ froid (commande info)

5. Sonde de température départ ambiante (valeur en dure, une variable ou une commande info)

6. Consigne Ambiance (valeur en dure, une variable ou une commande info)

7. Consigne TNC Chaud (valeur en dure, une variable ou une commande info)

8. Consigne TNC Froid (valeur en dure, une variable ou une commande info)

9. Commande de pompe ON (commande action)

10. Commande +V3V (commande action)

11. Commande -V3V (commande action)

12. Défaut pompe (commande info)

13. Défaut surchauffe (commande info)

14. Coef. Influ. Ambiant (valeur en dure, par défaut 1)

## Utilisation

![Configuration du dashboard](./images/dashboard_equipement.png)

1. Mode de fonctionnement (Arrêt / Auto / Forcé)

2. Paramètres de consigne Chaud (consigne -10°C, consigne 0°C, consigne +10°C, consigne +20°C)

3. Paramètres de consigne Froid (consigne +20°C, consigne +30°C, consigne +40°C)

## Fonctionnalités Principales

1. Calculer et mise à jour de la Consigne Loi d’eau Chaud sur changement de température extérieure ou changement d’un des paramètres de consigne chaud : 

```
calculLoiEau
SI sondeTempExt ≥ 10 ALORS
     calculLoiEau = (((cons10ext - cons20ext)/10) x (10 - ( tempExt - 10))) + cons20ext
SINON
     SI sondeTempExt ≥ 0 ALORS     #compris entre 0 et 9,99
          calculLoiEau = (((cons0ext - cons10ext)/10) x (10 - tempExt)) + cons10ext
     SINON             #est inférieur à 0
          calculLoiEau = (((consMoins10ext - cons0ext)/10) x (-1 x tempExt)) + cons0ext
```

2. Calculer et mise à jour de la Consigne Loi d’eau Froid sur changement de température extérieure ou changement d’un des paramètres de consigne froid : 

```
calculLoiEau
SI sondeTempExt ≥ 20 ALORS
     calculLoiEau = (((cons10ext - cons20ext)/10) x (10 - ( tempExt - 10))) + cons20ext
SINON
     SI sondeTempExt ≥ 0 ALORS     #compris entre 0 et 9,99
          calculLoiEau = (((cons0ext - cons10ext)/10) x (10 - tempExt)) + cons10ext
     SINON             #est inférieur à 0
          calculLoiEau = (((consMoins10ext - cons0ext)/10) x (-1 x tempExt)) + cons0ext
```

3. Calcul et mise à jour de la Consigne départ chauffage sur changement de la consigne loi d’eau ou changement de la consigne ambiante ou changement de la température ambiante ou changement du coef. influ. ambiante :

```
calculConsDepart = calculLoiEau + ((consigneAmbiance - sondeTempAmb) x coefInfluAmbiant) + ((consigneAmbiance - 20) x 2)
```

4. Action sur commande V3V (CHAUD) sur changement de température départ chauffage ou changement de consigne départ chauffage :

```
SI sondeTempEau < calculConsDepart ALORS
     Action commande +V3V
SINON
     SI sondeTempEau > calculConsDepart ALORS
          Action commande -V3V
     SINON            
          Ne rien faire
```

5. Action sur commande V3V (FROID) sur changement de température départ chauffage ou changement de consigne départ chauffage :

```
SI sondeTempEau > calculConsDepart ALORS
     Action commande +V3V
SINON
     SI sondeTempEau < calculConsDepart ALORS
          Action commande -V3V
     SINON            
          Ne rien faire
```

6. Action sur commande Pompe (CHAUD) sur changement de température extérieure ou changement de consigne T.N.C ou en cliquant sur le bouton Appliquer sur le dashboard :

```
SI Mode = AUTO ALORS
    SI sondeTempExt > consigneTNC+1 ALORS
        Action commande Pompe OFF
    SINON            
        SI sondeTempExt < consigneTNC-1 ALORS
            Action commande Pompe ON
        SINON
            Ne rien faire
SINON
    SI Mode = ARRET ALORS
        Action commande Pompe OFF
    SINON            
        SI Mode = FORCE ALORS
            Action commande Pompe ON
            Action commande +V3V
```

7. Action sur commande Pompe (FROID) sur changement de température extérieure ou changement de consigne T.N.C ou en cliquant sur le bouton Appliquer sur le dashboard :

```
SI Mode = AUTO ALORS
    SI sondeTempExt > consigneTNC+1 ALORS
        Action commande Pompe ON
    SINON            
        SI sondeTempExt < consigneTNC-1 ALORS
            Action commande Pompe OFF
        SINON
            Ne rien faire
SINON
    SI Mode = ARRET ALORS
        Action commande Pompe ON
    SINON            
        SI Mode = FORCE ALORS
            Action commande Pompe OFF
            Action commande +V3V
```