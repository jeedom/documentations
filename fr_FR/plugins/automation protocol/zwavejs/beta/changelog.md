# Changelog Z-Wave JS

>**IMPORTANT**
>
>S'il n'y a pas d'information sur la mise à jour, c'est que celle-ci concerne uniquement de la mise à jour de documentation, de traduction ou de texte.

# 21/11/2022

**Corrections**

- Changement sur le *graphique réseaux* : seulement les premières routes directes passeront rouge au survol d'un node pour éviter sur certaines installations et certains navigateurs l'erreur *Max Stack Size Exceeded* lié aux récursions

**Améliorations**

- Prise en compte de *refreshNodeCC* comme propriété d'une commande créée manuellement pour faire un refresh d'une CC
- Rajout d'un *scroll horizontal* sur la modal réseau / onglet *table de routage* (thx @Salvialf)
- Déplacement du *compteur de commandes* sur la partie droite de la page équipement

**Modifications de Configurations**

- Modification de la configuration *Fibaro FGR223* pour utiliser la puissance de la classe multilevel
- Modification de la configuration *Fibaro FGR222* pour utiliser la puissance de la classe multilevel
- Modification de la configuration *Fibaro FGRM222* pour utiliser la puissance de la classe multilevel
- Modification de la configuration *Devolo Mt02648* pour utiliser les propriétés et ajout des paramètres recommandés
- Modification de la configuration *Devolo Mt02647* pour utiliser les propriétés et ajout des paramètres recommandés
- Modification de la configuration *Popp Strike Lock* pour utiliser les propriétés
- Modification de la configuration *Aeotec ZWA011* pour utiliser les propriétés et ajout de son image

*Si vous êtes concernés par une de ses configurations, rechargez les commandes de l'équipement en "recréant toutes les commandes" après la mise à jour.*

# 18/11/2022

**Améliorations**

- Ajout d'un accés à l'interface ZwaveJS UI *(dans le menu Réseau Z-Wave, onglet Actions)*. Ne pas s'en servir pour modifier des réglages!
- Ajout d'un port pour le cas particulier de certains Raspberry Pi *(d'autres seront ajoutés si nécessaires)*
- Ajout d'un compteur de commandes pour chaque équipement *(ignorant les 4 commandes techniques)*
- Ajout d'une aide dynamique dans le cas de zéro commande.

# 15/11/2022

- Passage en version stable

# 04/05/2022

- Beta 1ère phase
