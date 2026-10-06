# Changelog OCPP

>**IMPORTANT**
>
>S'il n'y a pas d'information sur la mise à jour, c'est que celle-ci concerne uniquement de la mise à jour de documentation, de traduction ou de texte.

## 06/10/2026 ***(1.0.0)***

- Première version stable
- **Autorisations** : diverses corrections et optimisations à l'enregistrement
- **Démon** : optimisation de la gestion d'éventuelles erreurs de communication avec la borne

## 05/07/2026 ***(0.9.6)***

- **Transactions** : mise à jour en temps réel de la liste des transactions *(ouverture/fermeture)*

## 04/07/2026 ***(0.9.5)***

- **Autorisations** : optimisation de la sauvegarde des groupes et listes d'autorisations

## 03/07/2026 ***(0.9.4)***

- **Transactions** : ajout d'un pictogramme pour les transactions actives *(vert = en cours, orange = depuis plus de 24h, rouge = depuis plus de 48h)*
- **Transactions** : ajout d'un pictogramme pour les transactions terminées affichant le motif de fin de transaction au survol

## 02/07/2026 ***(0.9.3)***

- **Autorisations** : possibilité d'ajouter un nom lisible lié à l'identifiant *(utilisé dans la liste des transactions et des utilisateurs pouvant démarrer une charge si renseigné)*
- **Autorisations** : correction du tri des colonnes
- **Commandes** : mise à jour automatique de la liste des utilisateurs pouvant démarrer une charge

## 01/07/2026 ***(0.9.1)***

- **Autorisations** : les identifiants ne sont plus sensibles à la casse pour autoriser une transaction
- **Autorisations** : correction d'éventuelle perte d'identifiants à la sauvegarde
- **Transactions** : fermeture automatique d'une éventuelle transaction non finalisée
- **Borne** : meilleure gestion de la (re)connexion au système central
- **Borne** : optimisation de la prise en compte d'un remplacement avec le même identifiant

## 05/12/2025 ***(0.8.8)***

- **Transactions** : ajout d'un bouton de suppression
- **Evènements** : correction d'un bug sur les écouteurs d'une transaction OCPP
- **Commandes** : meilleure gestion des limites de charge *(A/W)*

## 24/11/2025 ***(0.8.5)***

- **Commandes** : ajout des commandes pour gérer le courant et/ou la puissance maximum lors de la charge *(bornes compatibles SmartCharging uniquement)*
- **Commandes** : ajout des commandes de redémarrage de la borne *(logiciel/matériel)*
- **Commandes** : définition de la liste des utilisateurs pouvant démarrer la charge
- **Documentation** : rédaction de la documentation

## 20/11/2025 ***(0.6.5)***

- **Dépendances** : montée de version *(OCPP 2.0.0 & websockets 15.0.1)*

## 25/06/2025 ***(0.6.2)***

- **Autorisations** : ajout d'une case à cocher par identifiant pour autoriser les transactions concurrentes simultanées
- **Autorisations** : ajout de bulles d'aide
- **Borne** : optimisation des statuts envoyés lors d'une demande d'autorisation

## 15/04/2025 ***(0.5)***

- **Autorisations** : gestion des autorisations par groupes

## 17/05/2024

- Début du développement
