# Valeur des commandes

Cette documentation rassemble les recommandations pour les valeurs des commandes (action ou info) en fonction des types. Il n'est pas obligatoire de les suivres mais pour une meilleure intégration à Jeedom il est vivement conseillé de le faire.

## Prise

|Type générique  | Valeurs / Action |
|----------------|------------|
|Info/Prise<br/>Etat|0 = Eteint<br/>1 = Allumé|
|Action/Prise<br/>Bouton On|Allumer la prise| 
|Action/Prise<br/>Bouton Off|Eteindre la prise|

## Volet

|Type générique  | Valeurs / Action |
|---------------|----------------|
|Info/Volet Etat|Si Binaire :<br/>0 = Fermé<br/>1 = Ouvert<br/>Si Numérique :<br/>min du Bouton Slider(sinon min de l'Etat, sinon 0) = Fermé <br/>max du Bouton Slider(sinon max de l'Etat, sinon 100) = Ouvert<br/>Si pas de bouton Silder : Min et Max obligatoires dans l'Etat !|
|Action/Volet Bouton Monter|Ouverture du volet| 
|Action/Volet Bouton Descendre|Fermeture du volet|
|Action/Volet Bouton Stop|Arret du volet|
|Action/Volet Bouton Slider|Donne la proportion d'ouverture du volet<br/>Si présent:<br/>Min et Max obligatoires|

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
