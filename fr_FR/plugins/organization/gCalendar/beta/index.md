# Plugin Google Agenda

Le plugin **Google Agenda** permet de récupérer les événements de vos agendas Google. Il peut également déclencher une interaction lors d’un évènement.

> **IMPORTANT**
>
> Google impose maintenant une reconnection tous les 7 jours pour des questions de sécurité.

# Configuration

## Créer un équipement Google Agenda

Coté Jeedom il vous faut créer un équipement Google Agenda et récuperer l’URL de redirection.

> **IMPORTANT**
>
> L'url d'accès externe à votre Jeedom doit absolument être en https, Google n'autorisant pas les connexions non cryptées.

## Créer un compte développeur Google

Il vous faut créer un compte développeur auprès de Google pour avoir accès à l'API. Pour se faire, [suivez ce lien](https://console.developers.google.com/apis/credentials), Créez un nouveau projet si nécessaire puis cliquez sur "**+ Créer des identifiants**" et sélectionnez "**ID client Oauth**".     
 Ensuite  choisissez "**Application Web**" dans le menu déroulant puis ajoutez l'"*URL de retour*" donnée sur la page de l’équipement Jeedom dans "**URI de redirection autorisés**".

> **IMPORTANT**
>
>Lorsque vous renseignez "URI de redirection autorisés" il faut faire attention à :
> - avoir autorisé le domaine avant [ici](https://console.developers.google.com/apis/credentials/consent). Google vous le signal normalement
> - bien appuyer sur la touche entrée après avoir copier/coller l'url de redirection depuis jeedom vers la page de configuration Google (*appuyer sur le bouton de sauvegarde directement après le copier/collier sans appuyer sur la touche entrée ne fonctionne pas!*)     

Récupérez l'**ID client**' et le **code secret du client** (il vous faudra les renseigner dans l’équipement coté Jeedom)

Il faut ensuite ajouter l’API Google Calendar en allant [ici](https://console.developers.google.com/apis/dashboard). Cliquez sur "**+ Activer les API et les services**" puis recherchez "Google Calendar API" et ajoutez la.

> **A SAVOIR**
>
>La procédure ci-dessus est suceptible d'évoluer avec le temps. Nous vous recommandons de suivre les directives données sur le site.

## Lier le compte Google à jeedom

Copiez le **Client ID** et la **Secret Key** coté Jeedom puis cliquez sur le bouton "**Lier**". N'oubliez pas de sauvegarder l'équipement.

>**IMPORTANT**
>
>Attention pour lier les 2 comptes (Google et Jeedom) il faut ABSOLUMENT être connecté à Jeedom par son url externe (vous pouvez la voir dans le centre de configuration Jeedom partie réseaux)

# Commandes

Le plugin comporte uniquement des commandes donnant le titre des évènements.

# Interaction

Jeedom peut interpréter le titre d’un évènement comme une interaction et donc déclencher une action. Pour cela il faut activer les interactions sur la page de configuration de l’équipement.

Vous pouvez aussi indiquer une commande de retour par laquelle jeedom répondra suite à l’éxecution de l’interaction.    
