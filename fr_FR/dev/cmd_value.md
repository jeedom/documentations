# Valeur des commandes

Cette documentation rassemble les recommandations pour les valeurs des commandes (action ou info) en fonction des types. Il n'est pas obligatoire de les suivre mais pour une meilleure intégration à Jeedom il est vivement conseillé de le faire.

## Lumière

|Type générique   | Valeurs / Action |
|-----------------|------------------|
|Info/Lumière Etat|Soit Luminosité<br/>0-100 Ou 0-99 ou 0-255<br/>(en fonction du max de Action/Lumière Slider)<br/>soit Binaire<br/>0 = Eteint<br/> autre que 0 = Allumé<br/>**Obligatoire**| 
|Info/Lumière Luminosité|Luminosité<br/>0-100 Ou 0-99 ou 0-255<br/>(en fonction du max de Action/Lumière Slider)<br/>Toujours utiliser avec Lumière Etat sur la commande binaire|
|Action/Lumière Slider|Variateur de luminosité<br/>Min&Max Obligatoire|
|Action/Lumière Bouton On|Allumage de la lumière (Changement de l'Etat)|
|Action/Lumière Bouton Off|Extinction de la lumière (Changement de l'Etat)|
|Info/Lumière Couleur|Format #RRGGBB|
|Action/Lumière Couleur|Modification de la couleur, Format #RRGGBB|
|Info/Lumière Température Couleur|Format Mired (<=500) ou Kelvin (>500)|
|Action/Lumière Température Couleur|Modification de la température couleur<br/>Min&Max Obligatoire|
|Action/Lumière Toggle|Inversion de l'état si binaire|
|Action/Lumière Mode|Preset/Scène lumière, peut être multiple|

## Prise

|Type générique  | Valeurs / Action |
|----------------|------------|
|Info/Prise<br/>Etat|0 = Eteint<br/>1 = Allumé|
|Action/Prise<br/>Bouton On|Allumer la prise| 
|Action/Prise<br/>Bouton Off|Eteindre la prise|

## Interrupteurs

|Type générique  | Valeurs / Action |
|----------------|------------|
|Info/Interrupteur<br/>Etat|0 = Eteint<br/>1 = Allumé|
|Action/Interrupteur<br/>Bouton On|Allumer l'interrupteur| 
|Action/Interrupteur<br/>Bouton Off|Eteindre l'interrupteur|

## Ventilateur

|Type générique  | Valeurs / Action |
|----------------|------------|
|Info/Ventilateur<br/>Etat|0 = Eteint<br/>1 = Allumé<br/>ou gradation si vitesse|
|Action/Ventilateur<br/>Bouton On|Allumer| 
|Action/Ventilateur<br/>Bouton Off|Eteindre|
|Action/Ventilateur<br/>Vitesse<br/>Rotation|Min Max Obligatoire|

## Volet

|Type générique  | Valeurs / Action |
|---------------|----------------|
|Info/Volet Etat|Si Binaire :<br/>0 = Fermé<br/>1 = Ouvert<br/>Si Numérique :<br/>min du Bouton Slider(sinon min de l'Etat, sinon 0) = Fermé <br/>max du Bouton Slider(sinon max de l'Etat, sinon 100) = Ouvert<br/>Si pas de bouton Silder : Min et Max obligatoires dans l'Etat !|
|Action/Volet Bouton Monter|Ouverture du volet<br/>Lancement de l'ouverture ou set valeur max slider ou état ou 100| 
|Action/Volet Bouton Descendre|Fermeture du volet<br/>Lancement de la fermeture ou set valeur min slider ou état ou 0|
|Action/Volet Bouton Stop|Arret du mouvement du volet|
|Action/Volet Bouton Slider|Donne la proportion d'ouverture du volet<br/>Si présent:<br/>Min et Max obligatoires|

en option :

|Type générique  | Valeurs / Action |
|---------------|----------------|
|Info/Volet Etat Inclinaison Horizontale|Angle 0->90° (via slider)|
|Action/Volet Slider Inclinaison Horizontale|Angle 0->90°<br/>modifiable via min-max du slider|
|Info/Volet Etat Inclinaison Verticale|Angle 0->90° (via slider)|
|Action/Volet Slider Inclinaison Verticale|Angle 0->90°<br/>modifiable via min-max du slider|

## Valves

|Type générique  | Valeurs / Action |
|---------------|----------------|
|Info/Robinet<br/>Etat|0 = Eteint<br/>1 = Allumé|
|Action/Robinet<br/>Bouton On|Allumer| 
|Action/Robinet<br/>Bouton Off|Eteindre|

|Type générique  | Valeurs / Action |
|---------------|----------------|
|Info/Irrigation<br/>Etat|0 = Eteint<br/>1 = Allumé|
|Action/Irrigation<br/>Bouton On|Allumer| 
|Action/Irrigation<br/>Bouton Off|Eteindre|

|Type générique  | Valeurs / Action |
|---------------|----------------|
|Info/Valve<br/>Générique<br/>Etat|0 = Eteint<br/>1 = Allumé|
|Action/Valve<br/>Générique<br/>Bouton On|Allumer| 
|Action/Valve<br/>Générique<br/>Bouton Off|Eteindre|

## Serrures

|Type générique  | Valeurs / Action |
|---------------|----------------|
|Info/Serrure Etat|0 = Non Sécurisée (Non Verrouillée)<br/>1 = Sécurisée (Verrouillée)|
|Action/Serrure Bouton Ouvrir|Déverrouillage| 
|Action/Serrure Bouton Fermer|Verrouillage| 

## Mouvement

|Type générique  | Valeurs / Action |
|---------------|----------------|
|Info/Présence|0 = Pas de mouvement<br/>1 = Mouvement|

## Ouverture 

|Type générique  | Valeurs / Action |
|---------------|----------------|
|Info/Porte<br/>Info/Fenêtre<br/>(même traitement)|0 = Contact (Fermé)<br/>1 = Pas de contact (Ouvert)| 

## Sirènes

|Type générique  | Valeurs / Action |
|---------------|----------------|
|Info/Sirène Etat|0 = Sonne pas<br/>1 = Sonne|

## Alarme

|Type générique  | Valeurs / Action |
|---------------|----------------|
|Info/Alarme état|1 = Déclenchée<br/>(prioritaire sur activée et modes)|
|Info/Alarme état activée|0 = Désarmée<br/>(prioritaire sur modes)|
|Info/Alarme mode|Libellé affichant **exactement** le nom d'une commande Action/Alarme Mode|
|Action/Alarme armée|Arme l'alarme|
|Action/Alarme libérée|Désarme l'alarme|
|Action/Alarme Mode|Mode de l'alarme, peut être multiple|

## Thermostats

|Type générique  | Valeurs / Action |
|---------------|----------------|
|Info/Thermostat Etat (BINAIRE)|0 = Eteint<br/>1 = Allumé|
|Info/Thermostat Etat (HUMAIN)|'off' ou 'arrêté' ou 'arrêt'<br/>'heat' ou 'chauffage'<br/>'cool' ou 'climatisation'<br/><br/>Préférer l'anglais| 
|Info/Thermostat Mode|'Off' ou 'Arret' = OFF<br/>'Aucun' ou 'Thermostat' = Mode Consigne<br/>Libellé affichant **exactement** le nom d'une commande Action/Thermostat Mode|
|Action/Thermostat Mode|Mode du thermostat, peut être multiple|
|Info/Thermostat Température extérieure|Degrés Celcius|
|Info/Thermostat Température ambiante|Degrés Celcius| 
|Info/Thermostat Consigne|Valeur entre Min et Max de l'Action/Thermostat Consigne| 
|Action/Thermostat Consigne|Min&Max Obligatoires| 
|Info/Thermostat Verrouillage|0 = Non Verrouillé<br/>1 = Verrouillé| 
|Action/Thermostat Verrouillage|Verrouiller le thermostat|
|Action/Thermostat Déverrouillage|Déverrouiller le thermostat|

## Portails ou Garages

|Type générique  | Valeurs / Action |
|---------------|----------------|
|Info/Portail état ouvrant<br/>Info/Garage état ouvrant<br/>(même traitement)|0 = Fermé<br/>252 = Fermeture en cours<br/>253 = Stoppé<br/>254 = Ouverture en cours<br/>255 = Ouvert<br/>(Basé sur un équipement z-wave, pourrait être aussi binaire ou libellé ?)|

avec soit :

|Type générique  | Valeurs / Action |
|---------------|----------------|
|Action/Portail ou garage bouton toggle|Interrupteur ouvrant si fermé et fermant si ouvert<br/>Ouvrant si bloqué (par sécurité)| 

soit :

|Type générique  | Valeurs / Action |
|---------------|----------------|
|Action/Portail ou garage bouton d'ouverture|Ouverture|
|Action/Portail ou garage bouton de fermeture|Fermeture|

## Electricité

|Type générique  | Unité |
|---------------|----------------|
|Info/Puissance Electrique|Watts| 
|Info/Consommation Electrique|KWh| 

## Divers

|Type générique  | Valeurs / Unité |
|---------------|----------------|
|Info/Présence Occupation|0 = Personne<br/>1 = Quelqu'un|
|Info/Qualité de l'air (Indice AQI)|indice AQI|
|Info/Qualité de l'air (Indice Personnalisable)|ppb ou µg/m3|
|Info/Détecteur CO|0 = CO normal<br/>1 = CO anormal|
|Info/Luminosité|0 → 100000 lux| 
|Info/Humidité|%|
|Info/CO2 (ppm)|PPM ou binaire ?|
|Info/Température|-50 → 300 °C| 
|Info/Batterie|%| 
|Info/Batterie en charge|0 = NON<br/>1 = OUI<br/>Non présent = Non Rechargable| 
|Info/Batterie Basse|0 = NON<br/>1 = OUI| 
|Info/Détection de fumée|0 = Pas de fumée<br/>1 = Fumée détectée| 
|Info/Inondation<br/>Info/Fuite d'eau|0 = Pas de fuite détectée<br/>1 = Fuite détectée| 
|Info/Sabotage|0 = Pas de sabotage<br/>1 = Sabotage| 
|Info/Choc|0 = Pas de choc<br/>1 = Choc| 
|Info/Pression|bar|
|Info/Son (dB)|dB|

## Statuts d'équipements

|Type générique  | Valeurs / Action |
|---------------|----------------|
|Info/Statut Actif|0 = inactif<br/>1 = actif|
|Info/Connectivité En Ligne|0 = hors ligne<br/>1 = en ligne|
|Info/Statut Défectueux|0 = non<br/>1 = oui|
