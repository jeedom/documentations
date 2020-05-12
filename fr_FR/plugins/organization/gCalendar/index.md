# Plugin Google Agenda

Le plugin agenda permet de récupérer les événements de son Google Agenda. Il peut aussi lancer une interaction lors d’un évènement

# Configuration 

## Creer un équipement Google Agenda 

Coté Jeedom il vous faut creer un équipement Google Agenda et récuperer l’URL de redirection. 

> **IMPORTANT**
>
> L'url d'accès externe a votre Jeedom doit absolument etre en https. Google n'autorise pas les connexions non cryptées.

## Creer un compte developpeur chez Google 

Il vous faut creer un compte developpeur chez google pour avoir accès aux API, allez [ici](https://console.developers.google.com/apis/credentials) puis faites "Creer identifiants" et "ID client Oauth", selectionnez "Application Web" et dans "URI de redirection autorisés" mettez celle donnée sur la page de configuration de l’équipement jeedom.

> **IMPORTANT**
>
> Attention lorsque vous saisiez "URI de redirection autorisés" il faut faire attention à : 
> - avoir autorisé le domaine ici avant [ici](https://console.developers.google.com/apis/credentials/consent). Google vous le signal normalement
> - bien appuyer sur la touche entrée après avoir copier/coller l'url de redirection depuis jeedom vers la page de configuration Google (appuyer sur le bouton de sauvegarde directement après le copier/collier sans appuyer sur la touche entrée ne marche pas!!!)

Récuperez la clef client et le secret client (il vous faudra les mettres coté Jeedom dans l’équipement)

Il vous faut ensuite ajouter l’API Google Calendar en allant [ici](https://console.developers.google.com/apis/dashboard), puis en faisant "Activer l’api" et recherchez "Google Calendar API" puis ajoutez la.

## Liée le compte Google à jeedom 

Copiez la clef client et le secrey client coté Jeedom puis cliquez sur le bouton Lier, validez tout.

>**IMPORTANT**
>
>Attention pour lier les 2 comptes (Google et Jeedom) il faut ABSOLUMENT être connecté à Jeedom par son url externe (vous pouvez la voir dans le centre de configuration Jeedom partie réseaux)

# Commande 

Le plugin ne comporte que des commandes qui vous donne le titre des évenement

# Interaction 

Jeedom peut interpreter le titre d’un évènement comme une interaction et donc déclencher une action. Pour cela il vous faut activer les intéractions sur la page de configuration de l’équipement.

Vous pouvez aussi indiquer une commande de retour par laquel jeedom va répondre suite à l’éxecution de l’interaction.
