# Changelog Z-Wave JS

>**IMPORTANT**
>
>S'il n'y a pas d'information sur la mise à jour, c'est que celle-ci concerne uniquement de la mise à jour de documentation, de traduction ou de texte.

# XX/11/2022

**Modifications de Configurations**

- Modification des paramètres pour *Hank Smart Plug (HKZW-SO08)* (problème d'affichage)

*Si vous êtes concernés par une modification ou un ajout de configuration, rechargez les commandes de l'équipement en "recréant toutes les commandes" après la mise à jour.*

# 23/11/2022

**Améliorations**

- Rajout d'un visuel pour un *paramètre ou wakeup* en attente
- Rajout d'une page permettant de voir tous les *paramètres* en attente
- Rajout d'une page webapp permettant de voir tous les *paramètres* en attente
- Rajout d'un bouton supprimer sur la page *En attente*. Permet de supprimer une ligne en attente. Celui-ci ne supprime pas l'ordre qui a été envoyé au contrôleur mais seulement l'information en attente dans Jeedom (utile pour les paramètres de calibration par exemple qui ne prennent jamais la valeur envoyée ou tout autre paramètre où ca serait inutile)


**Modifications de Configurations**

- Modification de la configuration *Popp Strike Lock* pour utiliser la propriété opening (pour le contact)
- Modification de la configuration *Fibaro FGD212* pour ajouter la gestion des différences à partir du firmware 3.5 (endpoint 1 sur firmware <= 3.4 endpoint 0 sur target seulement sinon)
- Modification de la propriété *Door Lock* pour ajouter le Déverrouillage (avec timeout) sur tous les dispositifs utilisant cette propriété

**Ajouts de Configurations**

- Ajout de la configuration *Hank Smart Plug (HKZW-SO08)* (propriétés : Switch, Power, Energy, Voltage, Current, Scene)
- Ajout de la configuration *Idinio foot dimmer* (propriétés : Multilevel, Power, Energy)
- Ajout des paramètres pour *Hank Smart Plug (HKZW-SO08)*

*Si vous êtes concernés par une modification ou un ajout de configuration, rechargez les commandes de l'équipement en "recréant toutes les commandes" après la mise à jour.*

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
