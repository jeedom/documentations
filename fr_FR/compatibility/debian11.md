# Debian 11

## Introduction

Vous retrouverez ici un compte rendu de nos tests de Jeedom sous Debian 11. Pour rappels Debian 11 est sortie officiellement le en stable le 15 aout 2021 et entraine de nombreause changement en particulier : 

- Passage de PHP 7.3 à 7.4
- Debut de la suppression de python 2
- Mise à jour de nombreux packages

## Core

### 4.1.X

Nous n'avons pour le moment detecté aucun impact.

### 4.2.X

Il y a un soucis avec le nouveau systeme d'installation des dépendances pour celle utilisant pip3 (pip3 n'existe plus et est remplacé par pip)

## Plugins

Nous ne pouvons tester tous les plugins, nous mettons donc juste le retour de ceux testé pour le moment (cette liste sera mise à jour au fils de nos tests)

- Openvpn (DNS jeedom) => OK
- Camera => OK
- Zigbee => OK
- Openzwave => NOK (soucis d'installation des dépendances)
